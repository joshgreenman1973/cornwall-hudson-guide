/* ============================================================
   3D map: the 20 miles around the house.
   MapLibre GL + USGS-derived terrain tiles + OpenFreeMap (OSM)
   vector tiles + the guide's own listings from data.js.
   ============================================================ */
(function () {
  'use strict';

  // Center of the 10 Abbott Lane tax parcel (NYS tax parcels), ~796 ft per USGS EPQS.
  var HOME = { lat: 41.419802, lon: -74.016404 };
  var RADIUS_MI = 20;
  var TERRARIUM = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
  var FONT = ['Noto Sans Regular'];
  var FONT_B = ['Noto Sans Bold'];

  var CATS = {
    eat:         { label: 'Eat & drink',         color: '#ff6a45' },
    nature:      { label: 'The outdoors',        color: '#3fd68f' },
    water:       { label: 'On the water',        color: '#3cc8d8' },
    history:     { label: 'History',             color: '#e3c58f' },
    arts:        { label: 'Arts & culture',      color: '#ffd23f' },
    kids:        { label: 'Kids & families',     color: '#ff6fae' },
    curiosities: { label: 'Curiosities',         color: '#00e5c0' },
    movies:      { label: 'Movies',              color: '#9fb2ff' },
    shopping:    { label: 'Shopping',            color: '#5b86ff' },
    home:        { label: 'Home & hardware',     color: '#ff9f2e' },
    services:    { label: 'Repairs & services',  color: '#c98a5a' },
    essentials:  { label: 'Everyday essentials', color: '#b79bff' },
    health:      { label: 'Healthcare',          color: '#9cf0cf' },
    civic:       { label: 'Getting set up',      color: '#f2f3ef' },
    spectrum:    { label: 'Disability services', color: '#d4ff5b' }
  };

  // ---------- geometry helpers ----------
  var toR = Math.PI / 180;
  function miles(lat, lon) {
    var R = 3958.8, dLat = (lat - HOME.lat) * toR, dLon = (lon - HOME.lon) * toR;
    var a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(HOME.lat * toR) * Math.cos(lat * toR) * Math.pow(Math.sin(dLon / 2), 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function bearingFromHome(lat, lon) {
    var y = Math.sin((lon - HOME.lon) * toR) * Math.cos(lat * toR);
    var x = Math.cos(HOME.lat * toR) * Math.sin(lat * toR) - Math.sin(HOME.lat * toR) * Math.cos(lat * toR) * Math.cos((lon - HOME.lon) * toR);
    return (Math.atan2(y, x) / toR + 360) % 360;
  }
  var DIRS = ['north', 'north-northeast', 'northeast', 'east-northeast', 'east', 'east-southeast', 'southeast', 'south-southeast',
    'south', 'south-southwest', 'southwest', 'west-southwest', 'west', 'west-northwest', 'northwest', 'north-northwest'];
  function where(lat, lon) {
    var m = miles(lat, lon);
    if (m < 0.1) return 'at the house';
    var d = DIRS[Math.round(bearingFromHome(lat, lon) / 22.5) % 16];
    return (m < 10 ? m.toFixed(1) : Math.round(m)) + ' mi ' + d + ' of the house';
  }
  function destination(lat, lon, brgDeg, distMi) {
    var R = 3958.8, d = distMi / R, b = brgDeg * toR, p1 = lat * toR, l1 = lon * toR;
    var p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(b));
    var l2 = l1 + Math.atan2(Math.sin(b) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
    return [l2 / toR, p2 / toR];
  }
  function ring(mi) {
    var pts = [];
    for (var i = 0; i <= 180; i++) pts.push(destination(HOME.lat, HOME.lon, i * 2, mi));
    return pts;
  }
  function fmtFt(m) { return Math.round(m * 3.28084).toLocaleString('en-US'); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function mapsUrl(p) {
    var dest = p.address ? (p.name + ', ' + p.address) : (p.lat + ',' + p.lon);
    return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(dest);
  }

  // ---------- guide places ----------
  var D = window.DATA || {};
  var places = [];
  Object.keys(CATS).forEach(function (k) {
    (D[k] || []).forEach(function (p) {
      if (!p || p.lat == null || p.lon == null) return;
      if (miles(p.lat, p.lon) > RADIUS_MI) return;
      places.push({ p: p, cat: k });
    });
  });
  var counts = {};
  places.forEach(function (x) { counts[x.cat] = (counts[x.cat] || 0) + 1; });
  var placesGeo = {
    type: 'FeatureCollection',
    features: places.map(function (x, i) {
      return { type: 'Feature', id: i, properties: { i: i, name: x.p.name, cat: x.cat, color: CATS[x.cat].color },
        geometry: { type: 'Point', coordinates: [x.p.lon, x.p.lat] } };
    })
  };

  document.getElementById('lede').textContent =
    'The guide’s ' + places.length + ' places inside the circle are pinned and colored by section. ' +
    'Drag to move. Right-drag, or drag with two fingers, to tilt and turn. Click anywhere for its elevation.';

  // ---------- rings + mask ----------
  var RINGS = [5, 10, 15, 20];
  var ringsGeo = { type: 'FeatureCollection', features: RINGS.map(function (mi) {
    return { type: 'Feature', properties: { mi: mi }, geometry: { type: 'LineString', coordinates: ring(mi) } };
  }) };
  var ringLabels = { type: 'FeatureCollection', features: [] };
  RINGS.forEach(function (mi) {
    [0, 90, 180, 270].forEach(function (b) {
      ringLabels.features.push({ type: 'Feature', properties: { t: mi + ' mi' }, geometry: { type: 'Point', coordinates: destination(HOME.lat, HOME.lon, b, mi) } });
    });
  });
  var outer = ring(RADIUS_MI);
  var maskGeo = { type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [
    [[-80, 36], [-68, 36], [-68, 46], [-80, 46], [-80, 36]],
    outer.slice().reverse()
  ] } };
  var nE = destination(HOME.lat, HOME.lon, 45, RADIUS_MI * 1.6), sW = destination(HOME.lat, HOME.lon, 225, RADIUS_MI * 1.6);

  // ---------- contours (computed in the browser from the same terrain tiles) ----------
  var dem = new mlcontour.DemSource({ url: TERRARIUM, encoding: 'terrarium', maxzoom: 13, worker: true });
  dem.setupMaplibre(maplibregl);
  var contourTiles = dem.contourProtocolUrl({
    multiplier: 3.28084,                       // feet
    thresholds: { 10: [400, 2000], 11: [200, 1000], 12: [100, 500], 13: [50, 250], 14: [20, 100] },
    elevationKey: 'ele', levelKey: 'level', contourLayer: 'contours'
  });

  // Only label what's inside the 20-mile circle (points only; 'within' takes a polygon).
  var INSIDE = ['within', { type: 'Polygon', coordinates: [outer] }];
  var MAJOR = ['motorway', 'trunk', 'primary', 'secondary', 'tertiary'];
  var style = {
    version: 8,
    glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
    sources: {
      ofm: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' },
      terrain: { type: 'raster-dem', tiles: [TERRARIUM], encoding: 'terrarium', tileSize: 256, maxzoom: 15,
        attribution: 'Terrain: <a href="https://registry.opendata.aws/terrain-tiles/">AWS Terrain Tiles</a> (USGS 3DEP)' },
      shade: { type: 'raster-dem', tiles: [TERRARIUM], encoding: 'terrarium', tileSize: 256, maxzoom: 15 },
      contours: { type: 'vector', tiles: [contourTiles], maxzoom: 15 },
      aerial: { type: 'raster', tileSize: 256, maxzoom: 19,
        tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
        attribution: 'Aerial: Esri, Maxar, Earthstar Geographics' },
      rings: { type: 'geojson', data: ringsGeo },
      ringLabels: { type: 'geojson', data: ringLabels },
      mask: { type: 'geojson', data: maskGeo },
      places: { type: 'geojson', data: placesGeo }
    },
    sky: {
      'sky-color': '#0b0e12', 'horizon-color': '#2b333a', 'fog-color': '#151916',
      'sky-horizon-blend': 0.7, 'horizon-fog-blend': 0.5, 'fog-ground-blend': 0.75, 'atmosphere-blend': 0
    },
    terrain: { source: 'terrain', exaggeration: 1.5 },
    layers: [
      { id: 'bg', type: 'background', paint: { 'background-color': '#151815' } },
      { id: 'wood', type: 'fill', source: 'ofm', 'source-layer': 'landcover', filter: ['==', ['get', 'class'], 'wood'],
        paint: { 'fill-color': '#17241a' } },
      { id: 'wet', type: 'fill', source: 'ofm', 'source-layer': 'landcover', filter: ['==', ['get', 'class'], 'wetland'],
        paint: { 'fill-color': '#1a2a2c' } },
      { id: 'built', type: 'fill', source: 'ofm', 'source-layer': 'landuse', filter: ['in', ['get', 'class'], ['literal', ['residential', 'commercial', 'industrial', 'retail']]],
        paint: { 'fill-color': '#1e1f1c' } },
      { id: 'aerial', type: 'raster', source: 'aerial', layout: { visibility: 'none' }, paint: { 'raster-saturation': -0.15 } },
      { id: 'hillshade', type: 'hillshade', source: 'shade',
        paint: { 'hillshade-exaggeration': 0.75, 'hillshade-shadow-color': 'rgba(0,0,0,0.75)',
          'hillshade-highlight-color': 'rgba(255,255,240,0.32)', 'hillshade-accent-color': 'rgba(0,0,0,0.25)',
          'hillshade-illumination-direction': 315 } },
      { id: 'park', type: 'fill', source: 'ofm', 'source-layer': 'park',
        paint: { 'fill-color': '#3fd68f', 'fill-opacity': 0.05 } },
      { id: 'park-line', type: 'line', source: 'ofm', 'source-layer': 'park',
        paint: { 'line-color': '#3fd68f', 'line-opacity': 0.45, 'line-width': 1, 'line-dasharray': [3, 2] } },
      { id: 'water', type: 'fill', source: 'ofm', 'source-layer': 'water',
        paint: { 'fill-color': '#1b3366' } },
      { id: 'waterway', type: 'line', source: 'ofm', 'source-layer': 'waterway',
        paint: { 'line-color': '#2f55a8', 'line-width': ['interpolate', ['linear'], ['zoom'], 10, 0.6, 15, 2] } },
      { id: 'contour-minor', type: 'line', source: 'contours', 'source-layer': 'contours', filter: ['all', ['!=', ['get', 'level'], 1], ['>', ['get', 'ele'], 0]],
        paint: { 'line-color': '#ffffff', 'line-opacity': 0.13, 'line-width': 0.7 } },
      { id: 'contour-index', type: 'line', source: 'contours', 'source-layer': 'contours', filter: ['all', ['==', ['get', 'level'], 1], ['>', ['get', 'ele'], 0]],
        paint: { 'line-color': '#ffffff', 'line-opacity': 0.34, 'line-width': 1.1 } },
      { id: 'contour-label', type: 'symbol', source: 'contours', 'source-layer': 'contours', filter: ['all', ['==', ['get', 'level'], 1], ['>', ['get', 'ele'], 0]],
        layout: { 'symbol-placement': 'line', 'text-field': ['concat', ['number-format', ['get', 'ele'], { locale: 'en-US' }], ' ft'],
          'text-font': FONT, 'text-size': 10.5, 'symbol-spacing': 340 },
        paint: { 'text-color': '#c9cec6', 'text-halo-color': '#151815', 'text-halo-width': 1.4 } },
      { id: 'road-minor', type: 'line', source: 'ofm', 'source-layer': 'transportation', minzoom: 11.5,
        filter: ['in', ['get', 'class'], ['literal', ['minor', 'service']]],
        paint: { 'line-color': '#5d625c', 'line-width': ['interpolate', ['linear'], ['zoom'], 12, 0.5, 16, 2.5] } },
      { id: 'road-major', type: 'line', source: 'ofm', 'source-layer': 'transportation',
        filter: ['in', ['get', 'class'], ['literal', MAJOR]],
        paint: { 'line-color': '#a9ada5', 'line-width': ['interpolate', ['linear'], ['zoom'], 9, ['match', ['get', 'class'], ['motorway', 'trunk'], 1.4, 0.6], 15, ['match', ['get', 'class'], ['motorway', 'trunk'], 5, 3]] } },
      { id: 'rail', type: 'line', source: 'ofm', 'source-layer': 'transportation', minzoom: 10,
        filter: ['==', ['get', 'class'], 'rail'],
        paint: { 'line-color': '#8a8f88', 'line-width': 1, 'line-dasharray': [3, 2] } },
      { id: 'trail', type: 'line', source: 'ofm', 'source-layer': 'transportation', minzoom: 11,
        filter: ['in', ['get', 'class'], ['literal', ['path', 'track']]],
        paint: { 'line-color': '#ff9f2e', 'line-opacity': 0.8, 'line-width': ['interpolate', ['linear'], ['zoom'], 11, 0.6, 16, 1.8], 'line-dasharray': [2, 1.5] } },
      { id: 'buildings', type: 'fill-extrusion', source: 'ofm', 'source-layer': 'building', minzoom: 12.5,
        paint: { 'fill-extrusion-color': '#e4e1d6',
          'fill-extrusion-height': ['coalesce', ['get', 'render_height'], 6],
          'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], 0],
          'fill-extrusion-opacity': ['interpolate', ['linear'], ['zoom'], 12.5, 0, 13.5, 0.92] } },
      { id: 'mask', type: 'fill', source: 'mask', paint: { 'fill-color': '#000000', 'fill-opacity': 0.5 } },
      { id: 'rings', type: 'line', source: 'rings',
        paint: { 'line-color': '#f2f3ef', 'line-opacity': ['case', ['==', ['get', 'mi'], 20], 0.85, 0.4],
          'line-width': ['case', ['==', ['get', 'mi'], 20], 1.6, 1], 'line-dasharray': [3, 3] } },
      { id: 'ring-labels', type: 'symbol', source: 'ringLabels',
        layout: { 'text-field': ['get', 't'], 'text-font': FONT_B, 'text-size': 12, 'text-allow-overlap': false },
        paint: { 'text-color': '#f2f3ef', 'text-halo-color': '#111311', 'text-halo-width': 1.6 } },
      { id: 'water-name', type: 'symbol', source: 'ofm', 'source-layer': 'water_name',
        layout: { 'text-field': ['get', 'name'], 'text-font': FONT, 'text-size': 12.5, 'text-letter-spacing': 0.05 },
        paint: { 'text-color': '#8fb0ff', 'text-halo-color': '#111311', 'text-halo-width': 1.2 } },
      { id: 'waterway-name', type: 'symbol', source: 'ofm', 'source-layer': 'waterway', minzoom: 12,
        layout: { 'symbol-placement': 'line', 'text-field': ['get', 'name'], 'text-font': FONT, 'text-size': 11 },
        paint: { 'text-color': '#8fb0ff', 'text-halo-color': '#111311', 'text-halo-width': 1.2 } },
      { id: 'road-name', type: 'symbol', source: 'ofm', 'source-layer': 'transportation_name', minzoom: 13,
        filter: ['in', ['get', 'class'], ['literal', MAJOR.concat(['minor'])]],
        layout: { 'symbol-placement': 'line', 'text-field': ['get', 'name'], 'text-font': FONT, 'text-size': 11 },
        paint: { 'text-color': '#bfc3bb', 'text-halo-color': '#111311', 'text-halo-width': 1.3 } },
      { id: 'osm-poi', type: 'circle', source: 'ofm', 'source-layer': 'poi', minzoom: 14,
        paint: { 'circle-radius': 2.6, 'circle-color': '#a2a8a1', 'circle-stroke-color': '#111311', 'circle-stroke-width': 1 } },
      { id: 'osm-poi-label', type: 'symbol', source: 'ofm', 'source-layer': 'poi', minzoom: 14.5,
        layout: { 'text-field': ['get', 'name'], 'text-font': FONT, 'text-size': 10.5, 'text-anchor': 'left', 'text-offset': [0.6, 0], 'text-optional': true },
        paint: { 'text-color': '#a2a8a1', 'text-halo-color': '#111311', 'text-halo-width': 1.2 } },
      { id: 'peak-dot', type: 'circle', source: 'ofm', 'source-layer': 'mountain_peak', minzoom: 9,
        filter: ['all', ['==', ['get', 'class'], 'peak'], ['has', 'name'], INSIDE],
        paint: { 'circle-radius': 3.2, 'circle-color': '#f2f3ef', 'circle-stroke-color': '#111311', 'circle-stroke-width': 1.2 } },
      { id: 'peak-label', type: 'symbol', source: 'ofm', 'source-layer': 'mountain_peak', minzoom: 9,
        filter: ['all', ['==', ['get', 'class'], 'peak'], ['has', 'name'], INSIDE],
        layout: { 'text-field': ['case', ['has', 'ele_ft'],
            ['format', ['get', 'name'], { 'text-font': ['literal', FONT_B] }, '\n', {}, ['concat', ['number-format', ['get', 'ele_ft'], { locale: 'en-US' }], ' ft'], { 'font-scale': 0.85 }],
            ['get', 'name']],
          'text-font': FONT, 'text-size': 12.5, 'text-anchor': 'bottom', 'text-offset': [0, -0.5],
          'symbol-sort-key': ['-', 0, ['coalesce', ['get', 'ele_ft'], 0]] },
        paint: { 'text-color': '#f2f3ef', 'text-halo-color': '#111311', 'text-halo-width': 1.5 } },
      { id: 'place-small', type: 'symbol', source: 'ofm', 'source-layer': 'place', minzoom: 10.5,
        filter: ['all', ['in', ['get', 'class'], ['literal', ['village', 'hamlet', 'suburb', 'neighbourhood']]], INSIDE],
        layout: { 'text-field': ['get', 'name'], 'text-font': FONT, 'text-size': 12.5 },
        paint: { 'text-color': '#e7e9e3', 'text-halo-color': '#111311', 'text-halo-width': 1.6 } },
      { id: 'place-town', type: 'symbol', source: 'ofm', 'source-layer': 'place',
        filter: ['all', ['in', ['get', 'class'], ['literal', ['city', 'town']]], INSIDE],
        layout: { 'text-field': ['get', 'name'], 'text-font': FONT_B, 'text-size': ['interpolate', ['linear'], ['zoom'], 9, 13, 13, 17] },
        paint: { 'text-color': '#ffffff', 'text-halo-color': '#111311', 'text-halo-width': 1.8 } },
      { id: 'places', type: 'circle', source: 'places',
        paint: { 'circle-color': ['get', 'color'],
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 9, 3.5, 13, 6, 16, 8],
          'circle-stroke-color': '#111311', 'circle-stroke-width': 1.5 } },
      { id: 'places-label', type: 'symbol', source: 'places', minzoom: 12.5,
        layout: { 'text-field': ['get', 'name'], 'text-font': FONT_B, 'text-size': 12, 'text-anchor': 'left',
          'text-offset': [0.8, 0], 'text-optional': true, 'text-max-width': 12 },
        paint: { 'text-color': ['get', 'color'], 'text-halo-color': '#111311', 'text-halo-width': 1.6 } }
    ]
  };

  var VIEWS = {
    start: { center: [-74.008, 41.437], zoom: 12.8, pitch: 68, bearing: 24 },
    house: { center: [HOME.lon, HOME.lat], zoom: 15.3, pitch: 62, bearing: 20 },
    north: { center: [-73.99, 41.47], zoom: 11.9, pitch: 74, bearing: 12 },
    south: { center: [-73.975, 41.405], zoom: 12.1, pitch: 74, bearing: 168 },
    all:   { center: [HOME.lon, HOME.lat - 0.04], zoom: 9.35, pitch: 45, bearing: 0 }
  };

  var map;
  try {
    map = new maplibregl.Map({
      container: 'map', style: style, center: VIEWS.start.center, zoom: VIEWS.start.zoom,
      pitch: VIEWS.start.pitch, bearing: VIEWS.start.bearing, maxPitch: 82, minZoom: 8.5, maxZoom: 18,
      maxBounds: [sW, nE], attributionControl: { compact: true,
        customAttribution: '<a href="https://openfreemap.org">OpenFreeMap</a> <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>' }
    });
  } catch (e) {
    document.getElementById('loading').textContent = 'This browser could not start the 3D map (it needs WebGL).';
    return;
  }
  // Keep views centered in the part of the map the side panel doesn't cover.
  if (window.matchMedia('(min-width: 701px)').matches) map.setPadding({ left: 350, top: 0, right: 0, bottom: 0 });
  window.__map = map; // handy for debugging in the console
  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right');
  map.addControl(new maplibregl.ScaleControl({ unit: 'imperial' }), 'bottom-right');

  // house marker
  var hm = document.createElement('div');
  hm.className = 'house';
  hm.innerHTML = '<span class="tag">The house</span><span class="stem"></span><span class="dot"></span>';
  new maplibregl.Marker({ element: hm, anchor: 'bottom' }).setLngLat([HOME.lon, HOME.lat]).addTo(map);

  var loading = document.getElementById('loading');
  map.once('idle', function () { loading.hidden = true; });
  map.on('error', function (e) { if (window.console) console.warn('map error', e && e.error); });

  // ---------- elevation ----------
  var exag = 1.5;
  function elevAt(lngLat) {
    var z = map.queryTerrainElevation(lngLat);
    return z == null ? null : z / exag;
  }

  var readout = document.getElementById('readout');
  var pending = null, queued = false;
  map.on('mousemove', function (e) {
    pending = e.lngLat;
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      var ll = pending; queued = false;
      if (!ll) return;
      var z = elevAt(ll);
      readout.innerHTML = (z == null ? '' : '<b>' + fmtFt(z) + ' ft</b> &nbsp;·&nbsp; ') + esc(where(ll.lat, ll.lng));
    });
  });

  // ---------- popups ----------
  var popup = new maplibregl.Popup({ maxWidth: '300px', offset: 10 });
  function placePopup(i) {
    var x = places[i], p = x.p, c = CATS[x.cat];
    var links = '<a href="' + mapsUrl(p) + '" target="_blank" rel="noopener">Directions ↗</a>' +
      (p.web ? '<a href="' + esc(p.web) + '" target="_blank" rel="noopener">Website ↗</a>' : '');
    var z = elevAt({ lng: p.lon, lat: p.lat });
    popup.setLngLat([p.lon, p.lat]).setHTML(
      '<div class="pp"><span class="cat" style="color:' + c.color + '">' + esc(c.label) + '</span>' +
      '<b>' + esc(p.name) + '</b>' +
      '<div class="sub">' + esc([p.town, p.kind].filter(Boolean).join(' · ')) + '<br>' + esc(where(p.lat, p.lon)) +
      (z != null ? ' · about ' + fmtFt(z) + ' ft up' : '') + '</div>' +
      (p.blurb ? '<p>' + esc(p.blurb) + '</p>' : '') +
      '<div class="links">' + links + '</div></div>').addTo(map);
  }
  var clickable = ['places', 'peak-dot', 'peak-label', 'osm-poi'];
  map.on('click', function (e) {
    var hits = map.queryRenderedFeatures(e.point, { layers: clickable.filter(function (id) { return map.getLayer(id) && map.getLayoutProperty(id, 'visibility') !== 'none'; }) });
    if (hits.length) {
      var f = hits[0], pr = f.properties, ll = f.geometry.coordinates;
      if (f.layer.id === 'places') return placePopup(pr.i);
      if (f.layer.id === 'peak-dot' || f.layer.id === 'peak-label') {
        popup.setLngLat(ll).setHTML('<div class="pp"><span class="cat">Peak</span><b>' + esc(pr.name) + '</b><div class="sub">' +
          (pr.ele_ft ? Number(pr.ele_ft).toLocaleString('en-US') + ' ft (OpenStreetMap) · ' : '') + esc(where(ll[1], ll[0])) + '</div></div>').addTo(map);
        return;
      }
      popup.setLngLat(ll).setHTML('<div class="pp"><span class="cat">' + esc(String(pr.subclass || pr.class || 'Place').replace(/_/g, ' ')) +
        '</span><b>' + esc(pr.name || 'Unnamed') + '</b><div class="sub">' + esc(where(ll[1], ll[0])) + '<br>From OpenStreetMap; not checked for the guide</div></div>').addTo(map);
      return;
    }
    var z = elevAt(e.lngLat);
    popup.setLngLat(e.lngLat).setHTML('<div class="pp"><b>' + (z == null ? 'Elevation loading' : 'About ' + fmtFt(z) + ' ft') + '</b><div class="sub">' +
      esc(where(e.lngLat.lat, e.lngLat.lng)) + '<br>' + e.lngLat.lat.toFixed(4) + '° N, ' + Math.abs(e.lngLat.lng).toFixed(4) + '° W</div></div>').addTo(map);
  });
  clickable.forEach(function (id) {
    map.on('mouseenter', id, function () { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', id, function () { map.getCanvas().style.cursor = ''; });
  });

  // Aim the camera at the ground, not at sea level under the mountain.
  // flyTo keeps the camera aimed at the current target height, which on a mountain sits below the
  // ground, so the place ends up high in the frame. Shift the aim point forward along the view
  // direction by the height difference times tan(pitch) so the place lands at the center.
  function flyGround(opts) {
    var c = Array.isArray(opts.center) ? { lng: opts.center[0], lat: opts.center[1] } : opts.center;
    var h = map.queryTerrainElevation(c), e0 = map.getCenterElevation() || 0;
    if (h != null && h > e0) {
      var dMi = (h - e0) * Math.tan((opts.pitch || 0) * toR) / 1609.344;
      var b = opts.bearing != null ? opts.bearing : map.getBearing();
      opts.center = destination(c.lat, c.lng, b, dMi);
    }
    map.flyTo(opts);
  }

  // ---------- views + circling ----------
  var spinning = false, spinBtn = document.getElementById('spin');
  function stopSpin() { spinning = false; spinBtn.classList.remove('on'); }
  function spinStep() {
    if (!spinning) return;
    map.setBearing((map.getBearing() + 0.07) % 360);
    requestAnimationFrame(spinStep);
  }
  spinBtn.addEventListener('click', function () {
    if (spinning) return stopSpin();
    spinning = true; spinBtn.classList.add('on'); requestAnimationFrame(spinStep);
  });
  ['mousedown', 'touchstart', 'wheel'].forEach(function (ev) {
    map.getCanvasContainer().addEventListener(ev, stopSpin, { passive: true });
  });
  document.getElementById('views').addEventListener('click', function (e) {
    var v = e.target.closest('[data-view]');
    if (!v) return;
    stopSpin();
    var o = VIEWS[v.getAttribute('data-view')];
    flyGround({ center: o.center, zoom: o.zoom, pitch: o.pitch, bearing: o.bearing, duration: 3200, essential: true });
  });

  // ---------- ground + exaggeration ----------
  var RELIEF_ONLY = ['wood', 'wet', 'built', 'water', 'waterway', 'park'];
  function setGround(g) {
    var aerial = g === 'aerial';
    map.setLayoutProperty('aerial', 'visibility', aerial ? 'visible' : 'none');
    RELIEF_ONLY.forEach(function (id) {
      var show = !aerial && (id !== 'park' || layerOn('parks'));
      map.setLayoutProperty(id, 'visibility', show ? 'visible' : 'none');
    });
    map.setPaintProperty('hillshade', 'hillshade-exaggeration', aerial ? 0.25 : 0.75);
    map.setPaintProperty('road-minor', 'line-opacity', aerial ? 0.5 : 1);
    map.setPaintProperty('road-major', 'line-opacity', aerial ? 0.6 : 1);
  }
  document.getElementById('ground').addEventListener('click', function (e) {
    var b = e.target.closest('[data-ground]');
    if (!b) return;
    this.querySelectorAll('.btn').forEach(function (x) { x.classList.toggle('on', x === b); });
    setGround(b.getAttribute('data-ground'));
  });
  document.getElementById('exag').addEventListener('click', function (e) {
    var b = e.target.closest('[data-x]');
    if (!b) return;
    this.querySelectorAll('.btn').forEach(function (x) { x.classList.toggle('on', x === b); });
    exag = parseFloat(b.getAttribute('data-x'));
    map.setTerrain({ source: 'terrain', exaggeration: exag });
  });

  // ---------- layer toggles ----------
  var LAYERS = [
    { k: 'buildings', label: 'Buildings (zoom in)', ids: ['buildings'], color: '#e4e1d6', on: true },
    { k: 'contours', label: 'Contour lines', ids: ['contour-minor', 'contour-index', 'contour-label'], color: '#ffffff', on: true },
    { k: 'trails', label: 'Trails and paths', ids: ['trail'], color: '#ff9f2e', on: true },
    { k: 'peaks', label: 'Named peaks', ids: ['peak-dot', 'peak-label'], color: '#f2f3ef', on: true },
    { k: 'parks', label: 'Parks and preserves', ids: ['park', 'park-line'], color: '#3fd68f', on: true },
    { k: 'roads', label: 'Roads and rail', ids: ['road-minor', 'road-major', 'rail', 'road-name'], color: '#a9ada5', on: true },
    { k: 'rings', label: 'Mile rings', ids: ['rings', 'ring-labels', 'mask'], color: '#f2f3ef', on: true },
    { k: 'poi', label: 'Other OpenStreetMap places (zoom in)', ids: ['osm-poi', 'osm-poi-label'], color: '#a2a8a1', on: true }
  ];
  function layerOn(k) { return LAYERS.some(function (L) { return L.k === k && L.on; }); }
  var layersEl = document.getElementById('layers');
  LAYERS.forEach(function (L) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tog' + (L.on ? ' on' : '');
    b.innerHTML = '<span class="sw" style="background:' + L.color + ';border-color:' + L.color + '"></span><span class="ll">' + esc(L.label) + '</span>';
    b.addEventListener('click', function () {
      L.on = !L.on; b.classList.toggle('on', L.on);
      L.ids.forEach(function (id) {
        var aerialOn = map.getLayoutProperty('aerial', 'visibility') === 'visible';
        var show = L.on && !(id === 'park' && aerialOn);
        map.setLayoutProperty(id, 'visibility', show ? 'visible' : 'none');
      });
    });
    layersEl.appendChild(b);
  });

  // ---------- category toggles ----------
  var visible = {};
  Object.keys(CATS).forEach(function (k) { visible[k] = !!counts[k]; });
  function applyCats() {
    var keep = Object.keys(visible).filter(function (k) { return visible[k]; });
    var f = ['in', ['get', 'cat'], ['literal', keep]];
    map.setFilter('places', f); map.setFilter('places-label', f);
  }
  var catsEl = document.getElementById('cats');
  Object.keys(CATS).forEach(function (k) {
    if (!counts[k]) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tog on'; b.setAttribute('data-cat', k);
    b.innerHTML = '<span class="sw" style="background:' + CATS[k].color + ';border-color:' + CATS[k].color + '"></span><span class="ll">' +
      esc(CATS[k].label) + '</span><span class="lc">' + counts[k] + '</span>';
    b.addEventListener('click', function () {
      visible[k] = !visible[k]; b.classList.toggle('on', visible[k]); applyCats(); syncAll();
    });
    catsEl.appendChild(b);
  });
  var allBtn = document.getElementById('allCats');
  function syncAll() {
    var anyOn = Object.keys(visible).some(function (k) { return visible[k]; });
    allBtn.textContent = anyOn ? 'Hide all' : 'Show all';
  }
  allBtn.addEventListener('click', function () {
    var anyOn = Object.keys(visible).some(function (k) { return visible[k]; });
    Object.keys(visible).forEach(function (k) { visible[k] = !anyOn && !!counts[k]; });
    catsEl.querySelectorAll('.tog').forEach(function (b) { b.classList.toggle('on', visible[b.getAttribute('data-cat')]); });
    applyCats(); syncAll();
  });

  // ---------- search ----------
  var q = document.getElementById('q'), results = document.getElementById('results');
  q.addEventListener('input', function () {
    var s = q.value.trim().toLowerCase();
    results.innerHTML = '';
    if (s.length < 2) return;
    places.map(function (x, i) { return { x: x, i: i }; })
      .filter(function (o) { return (o.x.p.name + ' ' + (o.x.p.town || '') + ' ' + (o.x.p.kind || '')).toLowerCase().indexOf(s) >= 0; })
      .slice(0, 8)
      .forEach(function (o) {
        var li = document.createElement('li'), b = document.createElement('button');
        b.type = 'button';
        b.innerHTML = esc(o.x.p.name) + '<br><small>' + esc(CATS[o.x.cat].label) + ' · ' + esc(where(o.x.p.lat, o.x.p.lon)) + '</small>';
        b.addEventListener('click', function () {
          stopSpin();
          if (!visible[o.x.cat]) { visible[o.x.cat] = true; catsEl.querySelector('[data-cat="' + o.x.cat + '"]').classList.add('on'); applyCats(); syncAll(); }
          flyGround({ center: [o.x.p.lon, o.x.p.lat], zoom: 15, pitch: 60, duration: 2600, essential: true });
          map.once('moveend', function () { placePopup(o.i); });
          if (window.matchMedia('(max-width: 700px)').matches) setCollapsed(true);
        });
        li.appendChild(b); results.appendChild(li);
      });
    if (!results.children.length) results.innerHTML = '<li><small style="color:var(--fg2)">No match among the guide’s places.</small></li>';
  });

  // ---------- mobile panel ----------
  var panel = document.getElementById('panel'), pt = document.getElementById('panelToggle');
  function setCollapsed(c) { panel.classList.toggle('collapsed', c); pt.textContent = c ? 'More' : 'Less'; if (c) panel.scrollTop = 0; }
  pt.addEventListener('click', function () { setCollapsed(!panel.classList.contains('collapsed')); });
})();
