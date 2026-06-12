/* ============================================================
   Highlands — app engine. Data-driven mobile guide.
   Renders home grid, category lists with distance + filter chips,
   long-form history/commute views, events calendar, detail sheet.
   ============================================================ */
(function () {
  'use strict';

  // 10 Abbott Lane, Cornwall-on-Hudson, NY 12520 (on Storm King Mtn)
  const HOME = { lat: 41.4447, lon: -74.0189 };

  // ---- helpers -------------------------------------------------
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function miles(lat, lon) {
    if (lat == null || lon == null) return null;
    const R = 3958.8, toR = Math.PI / 180;
    const dLat = (lat - HOME.lat) * toR, dLon = (lon - HOME.lon) * toR;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(HOME.lat * toR) * Math.cos(lat * toR) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  const fmtMi = (m) => m == null ? '' : (m < 1 ? (Math.round(m * 10) / 10) : Math.round(m)) + ' mi';
  function mapsUrl(p) {
    const q = p.address ? p.address : (p.name + ', ' + (p.town || '') + ', NY');
    return 'https://maps.apple.com/?q=' + encodeURIComponent(q);
  }

  // Attach computed distance, sort helper
  function withDist(list) {
    return (list || []).map((p) => ({ ...p, _mi: miles(p.lat, p.lon) }))
      .sort((a, b) => (a._mi == null) - (b._mi == null) || (a._mi - b._mi));
  }

  // ---- categories ---------------------------------------------
  const CATS = {
    arts:   { label: 'Arts & culture', emoji: '🎨', cls: 't-arts', key: 'arts' },
    history:{ label: 'History',        emoji: '🏛', cls: 't-hist', key: 'history' },
    kids:   { label: 'For kids',       emoji: '🧒', cls: 't-kids', key: 'kids' },
    shopping:{label: 'Shopping',       emoji: '🛍', cls: 't-shop', key: 'shopping' },
    eat:    { label: 'Eat & drink',    emoji: '🍽', cls: 't-eat',  key: 'eat' },
    movies: { label: 'Movies',         emoji: '🎬', cls: 't-mov',  key: 'movies' },
    events: { label: 'Events',         emoji: '📅', cls: 't-evt',  key: 'events' },
    commute:{ label: 'Commute to NYC', emoji: '🚆', cls: 't-comm', key: 'commute' },
    spectrum:{label: 'Spectrum services', emoji: '🧩', cls: 't-spec', key: 'spectrum' }
  };

  // ---- state ---------------------------------------------------
  let current = 'home';
  let query = '';
  const filterState = {}; // per-category active chip

  // ---- card rendering -----------------------------------------
  function placeCard(p) {
    const card = el('button', 'card');
    card.type = 'button';
    const dist = p._mi != null ? `<span class="dist">${fmtMi(p._mi)}</span>` : '';
    const meta = [];
    if (p.town) meta.push(`<span class="town">${esc(p.town)}</span>`);
    if (p.kind) meta.push(`<span>${esc(p.kind)}</span>`);
    if (p.price) meta.push(`<span>${esc(p.price)}</span>`);
    const metaHtml = meta.join('<span class="dot">·</span>');
    const tags = (p.tags || []).map((t) =>
      `<span class="tag${/spectrum|sensory/i.test(t) ? ' spectrum' : ''}">${esc(t)}</span>`).join('');
    card.innerHTML = `
      <div class="card-body">
        <div class="card-top"><h3>${esc(p.name)}</h3>${dist}</div>
        ${metaHtml ? `<div class="meta">${metaHtml}</div>` : ''}
        ${p.hours ? `<div class="hours">${esc(p.hours)}</div>` : ''}
        ${p.blurb ? `<p class="blurb">${esc(p.blurb)}</p>` : ''}
        ${p.texture ? `<div class="texture"><b>Local note —</b> ${esc(p.texture)}</div>` : ''}
        ${tags ? `<div class="tags">${tags}</div>` : ''}
      </div>`;
    card.addEventListener('click', () => openSheet(p));
    return card;
  }

  function matches(p) {
    if (!query) return true;
    const hay = [p.name, p.town, p.kind, p.blurb, p.texture, (p.tags || []).join(' '), (p.signature || '')].join(' ').toLowerCase();
    return hay.includes(query);
  }

  // ---- views ---------------------------------------------------
  function renderHome() {
    const v = el('section', 'view');
    const fact = (DATA.meta && DATA.meta.homeNote) || '';
    v.innerHTML = `
      <div class="hero">
        <h2>The Highlands, up close</h2>
        <p>Everything worth knowing around 10 Abbott Lane — the river, the mountain and the towns within reach.</p>
        <div class="pin">📍 Cornwall-on-Hudson · Orange County, NY</div>
      </div>`;
    if (fact) {
      const f = el('div', 'callout', `<b>Why “Abbott Lane”?</b> ${esc(fact)}`);
      v.appendChild(f);
    }
    const grid = el('div', 'grid');
    const order = [
      ['eat', false], ['arts', false], ['kids', false], ['shopping', false],
      ['history', false], ['movies', false], ['events', true], ['commute', true], ['spectrum', true]
    ];
    order.forEach(([k, span]) => {
      const c = CATS[k];
      const t = el('button', `tile ${c.cls}${span ? ' span2' : ''}`);
      t.type = 'button';
      let count = '';
      if (k === 'events') count = '15- & 30-mile radius';
      else if (k === 'commute') count = `${DATA.commute.length} ways into the city`;
      else if (k === 'spectrum') count = `${DATA.spectrum.length} resources`;
      else if (Array.isArray(DATA[k])) count = `${DATA[k].length} places`;
      t.innerHTML = `<span class="emoji">${c.emoji}</span><div><div class="label">${c.label}</div><div class="count">${count}</div></div>`;
      t.addEventListener('click', () => go(k));
      grid.appendChild(t);
    });
    v.appendChild(grid);
    if (DATA.meta && DATA.meta.about) {
      v.appendChild(el('div', 'callout', `<b>About this guide.</b> ${esc(DATA.meta.about)}`));
    }
    return v;
  }

  function renderList(catKey) {
    const c = CATS[catKey];
    const v = el('section', 'view');
    v.appendChild(headerFor(c));

    let list = withDist(DATA[catKey] || []);
    // build filter chips from "kind"
    const kinds = Array.from(new Set(list.map((p) => p.kind).filter(Boolean)));
    const active = filterState[catKey] || 'All';
    if (kinds.length > 1) {
      const chips = el('div', 'chips');
      ['All', ...kinds].forEach((k) => {
        const ch = el('button', 'chip' + (k === active ? ' active' : ''), esc(k));
        ch.addEventListener('click', () => { filterState[catKey] = k; rerender(); });
        chips.appendChild(ch);
      });
      v.appendChild(chips);
    }
    if (active !== 'All') list = list.filter((p) => p.kind === active);
    list = list.filter(matches);

    const cards = el('div', 'cards');
    if (!list.length) cards.appendChild(el('div', 'empty', 'Nothing matches yet. Try a different search or filter.'));
    list.forEach((p) => cards.appendChild(placeCard(p)));
    v.appendChild(cards);
    return v;
  }

  function headerFor(c) {
    const wrap = el('div');
    wrap.appendChild(el('div', 'section-title', `${c.emoji} ${c.label}`));
    const note = DATA.notes && DATA.notes[c.key];
    if (note) wrap.appendChild(el('div', 'section-note', esc(note)));
    return wrap;
  }

  function renderHistory() {
    const v = el('section', 'view');
    v.appendChild(el('div', 'section-title', '🏛 History'));
    v.appendChild(el('div', 'section-note', 'The stories under your feet — the mountain, the river and the people who shaped them.'));
    (DATA.history || []).forEach((h) => {
      const block = el('div', 'prose');
      block.innerHTML =
        (h.kicker ? `<div class="kicker">${esc(h.kicker)}</div>` : '') +
        `<h3>${esc(h.name)}</h3>` +
        (h.town || h._mi != null ? `<div class="section-note" style="margin:0 0 6px">${esc(h.town || '')}${h._mi != null ? ' · ' + fmtMi(h._mi) : ''}</div>` : '') +
        (h.body || []).map((p) => `<p>${esc(p)}</p>`).join('');
      if (h.lat) {
        const a = el('div', 'card-body');
        a.style.padding = '8px 0 0';
        const btn = el('a', 'btn', '📍 Map it');
        btn.href = mapsUrl(h); btn.target = '_blank'; btn.rel = 'noopener';
        a.appendChild(btn); block.appendChild(a);
      }
      v.appendChild(block);
    });
    // attach distances for display
    (DATA.history || []).forEach((h) => { h._mi = miles(h.lat, h.lon); });
    return v;
  }

  function renderCommute() {
    const v = el('section', 'view');
    v.appendChild(el('div', 'section-title', '🚆 Commute to Manhattan'));
    v.appendChild(el('div', 'section-note', 'Cornwall-on-Hudson is on the river’s west bank — the fast train is on the east bank. Here’s the honest comparison.'));
    (DATA.commute || []).forEach((o) => {
      const block = el('div', 'opt');
      const stats = (o.stats || []).map((s) => `<div class="stat"><div class="n">${esc(s.n)}</div><div class="l">${esc(s.l)}</div></div>`).join('');
      block.innerHTML = `
        <div class="opt-head"><span class="badge ${o.mode}">${esc(o.mode.toUpperCase())}</span><h3>${esc(o.name)}</h3></div>
        <div class="stat-row">${stats}</div>
        ${(o.body || []).map((p) => `<p>${esc(p)}</p>`).join('')}`;
      if (o.link) {
        const a = el('a', 'btn primary', esc(o.linkLabel || 'Live schedule & fares') + ' ↗');
        a.href = o.link; a.target = '_blank'; a.rel = 'noopener';
        a.style.marginTop = '12px';
        block.appendChild(a);
      }
      v.appendChild(block);
    });
    if (DATA.commuteNote) v.appendChild(el('div', 'callout', DATA.commuteNote));
    return v;
  }

  function renderEvents() {
    const v = el('section', 'view');
    v.appendChild(el('div', 'section-title', '📅 Events'));
    v.appendChild(el('div', 'section-note', 'Recurring and annual happenings. For one-off listings, tap a live calendar at the bottom.'));
    const radius = filterState.events || '15';
    const toggle = el('div', 'cal-toggle');
    [['15', 'Within 15 miles'], ['30', 'Within 30 miles']].forEach(([r, lab]) => {
      const b = el('button', r === radius ? 'active' : '', lab);
      b.addEventListener('click', () => { filterState.events = r; rerender(); });
      toggle.appendChild(b);
    });
    v.appendChild(toggle);

    const data = (DATA.events && DATA.events[radius]) || {};
    Object.keys(data).forEach((season) => {
      v.appendChild(el('div', 'season-head', season));
      data[season].forEach((e) => {
        const card = el('div', 'evt');
        card.innerHTML = `<div class="when">${esc(e.when)}</div><h4>${esc(e.name)}</h4><p>${esc(e.where)}${e.note ? ' — ' + esc(e.note) : ''}</p>`;
        v.appendChild(card);
      });
    });
    if (DATA.eventLinks) {
      v.appendChild(el('div', 'season-head', 'Live calendars'));
      const wrap = el('div', 'cards');
      DATA.eventLinks.forEach((l) => {
        const a = el('a', 'card');
        a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        a.innerHTML = `<div class="card-body"><div class="card-top"><h3>${esc(l.name)} ↗</h3></div><p class="blurb">${esc(l.note)}</p></div>`;
        wrap.appendChild(a);
      });
      v.appendChild(wrap);
    }
    return v;
  }

  // ---- detail sheet -------------------------------------------
  function openSheet(p) {
    const sheet = $('#sheet');
    const sections = [];
    if (p.blurb) sections.push(['What it is', p.blurb]);
    if (p.signature) sections.push(['Don’t miss', p.signature]);
    if (p.texture) sections.push(['Local note', p.texture]);
    if (p.hours) sections.push(['Hours / season', p.hours]);
    if (p.phone) sections.push(['Phone', p.phone]);
    if (p.access) sections.push(['Accessibility', p.access]);
    const meta = [p.town, p.kind, p.price].filter(Boolean).join(' · ');
    sheet.innerHTML = `
      <div class="grab"></div>
      <h2>${esc(p.name)}</h2>
      <div class="s-meta">${esc(meta)}${p._mi != null ? ' · ' + fmtMi(p._mi) + ' from home' : ''}${p.address ? '<br>' + esc(p.address) : ''}</div>
      ${sections.map(([h, b]) => `<div class="s-sec"><h4>${esc(h)}</h4><p>${esc(b)}</p></div>`).join('')}
      <div class="s-actions">
        <a class="btn primary" href="${mapsUrl(p)}" target="_blank" rel="noopener">📍 Directions</a>
        ${p.phone ? `<a class="btn" href="tel:${esc(p.phone.replace(/[^0-9+]/g, ''))}">📞 Call</a>` : ''}
        ${p.web ? `<a class="btn" href="${esc(p.web)}" target="_blank" rel="noopener">🌐 Website</a>` : ''}
        ${p.menu ? `<a class="btn" href="${esc(p.menu)}" target="_blank" rel="noopener">📋 Menu</a>` : ''}
      </div>`;
    $('#sheetBackdrop').classList.add('open');
    sheet.classList.add('open');
  }
  function closeSheet() {
    $('#sheet').classList.remove('open');
    $('#sheetBackdrop').classList.remove('open');
  }

  // ---- nav -----------------------------------------------------
  function go(view) {
    current = view;
    query = '';
    const sw = $('#searchwrap');
    const sInput = $('#search');
    if (sInput) sInput.value = '';
    sw.hidden = (view === 'home' || view === 'history' || view === 'commute' || view === 'events');
    rerender();
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function rerender() {
    const host = $('#views');
    host.innerHTML = '';
    let v;
    if (current === 'home') v = renderHome();
    else if (current === 'history') v = renderHistory();
    else if (current === 'commute') v = renderCommute();
    else if (current === 'events') v = renderEvents();
    else v = renderList(current);
    v.classList.add('active');
    host.appendChild(v);
    buildTabs();
  }

  function buildTabs() {
    const bar = $('#tabbar');
    bar.innerHTML = '';
    const tabs = [
      ['home', '⌂', 'Home'], ['eat', '🍽', 'Eat'], ['kids', '🧒', 'Kids'],
      ['events', '📅', 'Events'], ['commute', '🚆', 'Travel']
    ];
    tabs.forEach(([k, ic, lab]) => {
      const b = el('button', current === k ? 'active' : '');
      b.innerHTML = `<span class="ti">${ic}</span>${lab}`;
      b.addEventListener('click', () => go(k));
      bar.appendChild(b);
    });
  }

  // ---- init ----------------------------------------------------
  function init() {
    $('#homeBtn').addEventListener('click', () => go('home'));
    $('#sheetBackdrop').addEventListener('click', closeSheet);
    const s = $('#search');
    s.addEventListener('input', () => { query = s.value.trim().toLowerCase(); rerender(); });
    go('home');
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
    }
  }
  document.addEventListener('DOMContentLoaded', init);
})();
