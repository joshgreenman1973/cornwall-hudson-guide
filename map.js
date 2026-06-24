/* ============================================================
   The Cornwall-on-Hudson Guide — map page.
   Plots every located listing from data.js on a Leaflet map,
   colored and toggled by category, centered on 10 Abbott Lane.
   ============================================================ */
(function () {
  'use strict';

  var HOME = { lat: 41.4447, lon: -74.0189 };

  // category -> {label, color, emoji}. Order controls the legend.
  var CATS = {
    eat:         { label: 'Eat & drink',         color: '#c0392b' },
    nature:      { label: 'The outdoors',        color: '#2e7d4f' },
    water:       { label: 'On the water',        color: '#2389c9' },
    home:        { label: 'Home & hardware',     color: '#c98a2b' },
    shopping:    { label: 'Shopping',            color: '#2f6f9f' },
    services:    { label: 'Repairs & services',  color: '#d2691e' },
    health:      { label: 'Healthcare',          color: '#15a08e' },
    essentials:  { label: 'Everyday essentials', color: '#7d5ba6' },
    kids:        { label: 'Kids & families',     color: '#dd6aa0' },
    arts:        { label: 'Arts & culture',      color: '#5145c4' },
    history:     { label: 'History',             color: '#8a5a2b' },
    movies:      { label: 'Movies',              color: '#34495e' },
    curiosities: { label: 'Curiosities',         color: '#0e8f8f' },
    civic:       { label: 'Getting set up',      color: '#5a7d3a' },
    spectrum:    { label: 'Disability services', color: '#9b8b1f' }
  };

  function miles(lat, lon) {
    if (lat == null || lon == null) return null;
    var R = 3958.8, toR = Math.PI / 180;
    var dLat = (lat - HOME.lat) * toR, dLon = (lon - HOME.lon) * toR;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(HOME.lat * toR) * Math.cos(lat * toR) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function fmtMi(m) { return m == null ? '' : (m < 1 ? Math.round(m * 10) / 10 : Math.round(m)) + ' mi'; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function mapsUrl(p) {
    var dest = p.address ? (p.name + ', ' + p.address) : (p.lat != null ? (p.lat + ',' + p.lon) : (p.name + ', ' + (p.town || '') + ', NY'));
    return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(dest);
  }

  var map = L.map('map', { zoomControl: true, scrollWheelZoom: true }).setView([HOME.lat, HOME.lon], 12);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  // home marker
  var homeIcon = L.divIcon({ className: 'home-divicon', html: '<div class="home-marker">🏠</div>', iconSize: [36, 36], iconAnchor: [18, 18] });
  L.marker([HOME.lat, HOME.lon], { icon: homeIcon, zIndexOffset: 1000 }).addTo(map)
    .bindPopup('<div class="mp"><b>10 Abbott Lane</b><div class="mp-sub">The house — everything is measured from here</div></div>');

  var groups = {}, counts = {}, total = 0, allPoints = [[HOME.lat, HOME.lon]];

  Object.keys(CATS).forEach(function (k) {
    var cat = CATS[k];
    var layer = L.layerGroup();
    var n = 0;
    (window.DATA[k] || []).forEach(function (p) {
      if (p.lat == null || p.lon == null) return;
      var mi = miles(p.lat, p.lon);
      var m = L.circleMarker([p.lat, p.lon], { radius: 7, fillColor: cat.color, color: '#fff', weight: 1.5, fillOpacity: 0.92 });
      var links = '<a href="' + mapsUrl(p) + '" target="_blank" rel="noopener">Directions ↗</a>' +
        (p.web ? (' &nbsp;·&nbsp; <a href="' + esc(p.web) + '" target="_blank" rel="noopener">Website ↗</a>') : '');
      m.bindPopup(
        '<div class="mp"><span class="mp-cat" style="color:' + cat.color + '">' + esc(cat.label) + '</span>' +
        '<b>' + esc(p.name) + '</b>' +
        '<div class="mp-sub">' + esc([p.town, p.kind].filter(Boolean).join(' · ')) + (mi != null ? (' · ' + fmtMi(mi) + ' from the house') : '') + '</div>' +
        (p.blurb ? ('<p>' + esc(p.blurb) + '</p>') : '') +
        '<div class="mp-links">' + links + '</div></div>',
        { maxWidth: 280 }
      );
      m.addTo(layer); n++; total++; allPoints.push([p.lat, p.lon]);
    });
    layer.addTo(map);
    groups[k] = layer; counts[k] = n;
  });

  // legend
  var legend = document.getElementById('legend');
  var html = '<div class="legend-head"><b>Categories</b><button id="toggleAll" type="button">Hide all</button></div>';
  Object.keys(CATS).forEach(function (k) {
    if (!counts[k]) return;
    html += '<button class="legend-row active" data-cat="' + k + '" type="button">' +
      '<span class="sw" style="background:' + CATS[k].color + '"></span>' +
      '<span class="ll">' + esc(CATS[k].label) + '</span>' +
      '<span class="lc">' + counts[k] + '</span></button>';
  });
  legend.innerHTML = html;
  var countEl = document.getElementById('mapCount');
  if (countEl) countEl.textContent = total + ' places mapped';

  legend.addEventListener('click', function (e) {
    var row = e.target.closest && e.target.closest('.legend-row');
    if (row) {
      var k = row.dataset.cat;
      var on = row.classList.toggle('active');
      if (on) groups[k].addTo(map); else map.removeLayer(groups[k]);
      return;
    }
    if (e.target.id === 'toggleAll') {
      var anyOn = Object.keys(groups).some(function (k) { return map.hasLayer(groups[k]); });
      Object.keys(groups).forEach(function (k) { if (anyOn) map.removeLayer(groups[k]); else groups[k].addTo(map); });
      var rows = document.querySelectorAll('.legend-row');
      for (var i = 0; i < rows.length; i++) rows[i].classList.toggle('active', !anyOn);
      e.target.textContent = anyOn ? 'Show all' : 'Hide all';
    }
  });

  // "fit everything" / "recenter on house" controls
  var FitAll = L.Control.extend({
    options: { position: 'topleft' },
    onAdd: function () {
      var c = L.DomUtil.create('div', 'leaflet-bar map-ctl');
      c.innerHTML = '<a href="#" title="Fit all places" id="fitAll">⤢</a><a href="#" title="Back to the house" id="goHome">🏠</a>';
      L.DomEvent.disableClickPropagation(c);
      c.querySelector('#fitAll').onclick = function (ev) { ev.preventDefault(); map.fitBounds(allPoints, { padding: [40, 40] }); };
      c.querySelector('#goHome').onclick = function (ev) { ev.preventDefault(); map.setView([HOME.lat, HOME.lon], 13); };
      return c;
    }
  });
  map.addControl(new FitAll());
})();
