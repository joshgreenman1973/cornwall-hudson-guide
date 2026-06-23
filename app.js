/* ============================================================
   The Cornwall-on-Hudson Guide — rendering engine.
   A data-driven single-page guide. All content lives in data.js.
   Renders a hero, anchored card sections (distance-sorted, with
   filter chips), long-form history, a commute comparison, a
   self-updating events calendar and a community-groups grid.
   Plus: global search, scroll-spy nav, AI-caution popover.
   ============================================================ */
(function () {
  'use strict';

  // 10 Abbott Lane, Cornwall-on-Hudson, NY 12520 (on Storm King Mtn)
  const HOME = { lat: 41.4447, lon: -74.0189 };

  // ---- helpers -------------------------------------------------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const has = (k) => Array.isArray(DATA[k]) && DATA[k].length > 0;

  function miles(lat, lon) {
    if (lat == null || lon == null) return null;
    const R = 3958.8, toR = Math.PI / 180;
    const dLat = (lat - HOME.lat) * toR, dLon = (lon - HOME.lon) * toR;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(HOME.lat * toR) * Math.cos(lat * toR) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  const fmtMi = (m) => m == null ? '' : (m < 1 ? (Math.round(m * 10) / 10) : Math.round(m)) + ' mi';
  function mapsUrl(p) {
    let dest;
    if (p.address) dest = p.name + ', ' + p.address;
    else if (p.lat != null && p.lon != null) dest = p.lat + ',' + p.lon;
    else dest = p.name + ', ' + (p.town || '') + ', NY';
    return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(dest);
  }
  function withDist(list) {
    return (list || []).map((p) => ({ ...p, _mi: miles(p.lat, p.lon) }))
      .sort((a, b) => (a._mi == null) - (b._mi == null) || (a._mi - b._mi));
  }

  // ---- section config -----------------------------------------
  // type: cards | prose | commute | events | groups
  const SECTIONS = [
    { id: 'setup',        key: 'civic',       label: 'Getting set up',   nav: 'Set up',     ico: '🧭', accent: 'var(--moss)',      kicker: 'Your first week', type: 'cards' },
    { id: 'outdoors',     key: 'nature',      label: 'The outdoors',     nav: 'Outdoors',   ico: '⛰',  accent: 'var(--moss)',      kicker: 'The land around you', type: 'cards' },
    { id: 'eat',          key: 'eat',         label: 'Eat & drink',      nav: 'Eat',        ico: '🍽', accent: 'var(--rust)',      kicker: 'The table', type: 'cards' },
    { id: 'home',         key: 'home',        label: 'Home, hardware & garden', nav: 'Home goods', ico: '🔨', accent: 'var(--gold)', kicker: 'Outfitting the house', type: 'cards' },
    { id: 'shopping',     key: 'shopping',    label: 'Shopping & everyday goods', nav: 'Shopping', ico: '🛍', accent: 'var(--river)', kicker: 'The other errands', type: 'cards' },
    { id: 'services',     key: 'services',    label: 'Repairs & home services', nav: 'Repairs', ico: '🛠', accent: 'var(--rust)', kicker: 'Who to call', type: 'cards' },
    { id: 'health',       key: 'health',      label: 'Healthcare',       nav: 'Health',     ico: '⚕',  accent: 'var(--river)',     kicker: 'Doctors & care', type: 'cards' },
    { id: 'essentials',   key: 'essentials',  label: 'Everyday essentials', nav: 'Essentials', ico: '🏦', accent: 'var(--river-deep)', kicker: 'Banks, gas, gyms & more', type: 'cards' },
    { id: 'kids',         key: 'kids',        label: 'Kids & families',  nav: 'Kids',       ico: '🧒', accent: 'var(--moss-light)', kicker: 'For the little ones', type: 'cards' },
    { id: 'arts',         key: 'arts',        label: 'Arts & culture',   nav: 'Arts',       ico: '🎨', accent: 'var(--river)',     kicker: 'Inside the picture plane', type: 'cards' },
    { id: 'history',      key: 'history',     label: 'History',          nav: 'History',    ico: '🏛', accent: 'var(--rust-deep)', kicker: 'Under your feet', type: 'prose' },
    { id: 'movies',       key: 'movies',      label: 'Movies',           nav: 'Movies',     ico: '🎬', accent: 'var(--river-deep)', kicker: 'The big screen', type: 'cards' },
    { id: 'events',       key: 'events',      label: 'Events',           nav: 'Events',     ico: '📅', accent: 'var(--moss)',      kicker: "What's coming up", type: 'events' },
    { id: 'getting-around', key: 'commute',   label: 'Getting around & the commute', nav: 'Travel', ico: '🚆', accent: 'var(--river)', kicker: 'Off the west bank', type: 'commute' },
    { id: 'community',    key: 'community',   label: 'Community & groups', nav: 'Community', ico: '💬', accent: 'var(--gold)',     kicker: 'Plugging in', type: 'groups' },
    { id: 'curiosities',  key: 'curiosities', label: 'Curiosities',      nav: 'Curiosities', ico: '🧭', accent: 'var(--gold)',     kicker: 'The offbeat layer', type: 'cards' },
    { id: 'spectrum',     key: 'spectrum',    label: 'Disability & autism services', nav: 'Disability services', ico: '🧩', accent: 'var(--moss)', kicker: 'Support & access', type: 'cards' }
  ];

  let query = '';
  const filterState = {};

  // ---- contour SVG (topographic motif) ------------------------
  function topoSvg(cls) {
    // a few nested irregular contour rings
    return `<svg class="${cls}" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.1">
      <g opacity="0.9">
        <path d="M-50 470 C 200 430 360 500 520 470 S 880 380 1050 430 1260 470 1260 470" />
        <path d="M-50 420 C 220 370 380 450 540 410 S 900 320 1060 370 1260 410 1260 410" />
        <path d="M-50 360 C 240 320 400 390 560 350 S 900 270 1080 305 1260 345 1260 345" />
        <path d="M-50 300 C 260 270 420 330 600 295 S 920 230 1100 255 1260 285 1260 285" />
        <path d="M-50 240 C 300 215 460 270 640 240 S 940 195 1120 210 1260 230 1260 230" />
        <path d="M-50 180 C 340 165 520 205 700 185 S 980 155 1160 165 1260 178 1260 178" />
        <path d="M-50 120 C 380 112 560 142 740 128 S1000 110 1180 116 1260 122 1260 122" />
      </g>
    </svg>`;
  }

  // ---- card rendering -----------------------------------------
  function actionLinks(p) {
    const acts = [];
    if (p.lat != null || p.address) acts.push(`<a class="btn primary" href="${mapsUrl(p)}" target="_blank" rel="noopener">↗ Directions</a>`);
    if (p.phone) acts.push(`<a class="btn" href="tel:${esc(p.phone.replace(/[^0-9+]/g, ''))}">☎ Call</a>`);
    if (p.web) acts.push(`<a class="btn" href="${esc(p.web)}" target="_blank" rel="noopener">Website</a>`);
    if (p.menu) acts.push(`<a class="btn" href="${esc(p.menu)}" target="_blank" rel="noopener">Menu</a>`);
    if (!acts.length) return '';
    return `<div class="actions">${acts.join('')}</div>`;
  }

  function placeCard(p, accent) {
    const card = el('article', 'card');
    if (accent) card.style.setProperty('--accent', accent);
    const dist = p._mi != null
      ? `<span class="dist${p._mi > 30 ? ' faint' : ''}">${fmtMi(p._mi)}</span>` : '';
    const meta = [];
    if (p.town) meta.push(`<span class="town">${esc(p.town)}</span>`);
    if (p.kind) meta.push(`<span>${esc(p.kind)}</span>`);
    if (p.price) meta.push(`<span class="price">${esc(p.price)}</span>`);
    const metaHtml = meta.length ? `<div class="meta">${meta.join('<span class="dot">·</span>')}</div>` : '';
    const tags = (p.tags || []).map((t) =>
      `<span class="tag${/spectrum|sensory|free/i.test(t) ? ' flag' : ''}">${esc(t)}</span>`).join('');
    const conf = (p.confidence === 'low' || p.confidence === 'medium')
      ? `<span class="confidence ${p.confidence}">${p.confidence === 'low' ? 'verify' : 'confirm'}</span>` : '';
    card.innerHTML = `
      <div class="card-top"><h3>${esc(p.name)}</h3>${dist}</div>
      ${metaHtml}
      ${p.hours ? `<div class="hours">${esc(p.hours)}</div>` : ''}
      ${p.blurb ? `<p class="blurb">${esc(p.blurb)}</p>` : ''}
      ${p.signature ? `<div class="signature"><b>Don't miss —</b> ${esc(p.signature)}</div>` : ''}
      ${p.texture ? `<div class="texture"><b>Local note —</b> ${esc(p.texture)}</div>` : ''}
      ${p.access ? `<div class="access"><b>Access —</b> ${esc(p.access)}</div>` : ''}
      ${tags || conf ? `<div class="tags">${tags}${conf}</div>` : ''}
      ${actionLinks(p)}`;
    return card;
  }

  function matches(p) {
    if (!query) return true;
    const hay = [p.name, p.town, p.kind, p.blurb, p.signature, p.texture, p.access, (p.tags || []).join(' ')].join(' ').toLowerCase();
    return hay.includes(query);
  }

  // ---- builders per type --------------------------------------
  function sectionShell(cfg) {
    const sec = el('section', 'section');
    sec.id = cfg.id;
    const head = el('div', 'section-head');
    head.innerHTML = `
      <div class="kicker"><span class="ico">${cfg.ico}</span>${esc(cfg.kicker)}</div>
      <h2>${esc(cfg.label)}</h2>
      ${DATA.notes && DATA.notes[cfg.key] ? `<p class="note">${esc(DATA.notes[cfg.key])}</p>` : ''}`;
    sec.appendChild(head);
    return sec;
  }

  function buildCards(cfg) {
    const sec = sectionShell(cfg);
    let list = withDist(DATA[cfg.key] || []);
    const kinds = Array.from(new Set(list.map((p) => p.kind).filter(Boolean)));
    const active = filterState[cfg.key] || 'All';
    if (kinds.length > 1 && !query) {
      const chips = el('div', 'chips');
      ['All', ...kinds].forEach((k) => {
        const ch = el('button', 'chip' + (k === active ? ' active' : ''), esc(k));
        ch.type = 'button';
        ch.addEventListener('click', () => { filterState[cfg.key] = k; rerender(); });
        chips.appendChild(ch);
      });
      sec.appendChild(chips);
    }
    if (active !== 'All' && !query) list = list.filter((p) => p.kind === active);
    list = list.filter(matches);
    const grid = el('div', 'cards');
    if (!list.length) {
      if (query) return null; // hide section entirely when searching with no hits
      grid.appendChild(el('div', 'empty', 'Nothing here yet.'));
    }
    list.forEach((p) => grid.appendChild(placeCard(p, cfg.accent)));
    sec.appendChild(grid);
    return sec;
  }

  function buildProse(cfg) {
    const list = (DATA[cfg.key] || []).map((h) => ({ ...h, _mi: miles(h.lat, h.lon) })).filter(matches);
    if (!list.length) return null;
    const sec = sectionShell(cfg);
    const wrap = el('div', 'prose-wrap');
    list.forEach((h) => {
      const block = el('article', 'prose');
      block.style.setProperty('--accent', cfg.accent);
      block.innerHTML =
        (h.kicker ? `<div class="kicker">${esc(h.kicker)}</div>` : '') +
        `<h3>${esc(h.name)}</h3>` +
        ((h.town || h._mi != null) ? `<div class="where">${esc(h.town || '')}${h._mi != null ? ' · ' + fmtMi(h._mi) + ' from home' : ''}</div>` : '') +
        (h.body || []).map((p) => `<p>${esc(p)}</p>`).join('');
      if (h.lat != null) {
        const a = el('a', 'btn mapit', '↗ Map it');
        a.href = mapsUrl(h); a.target = '_blank'; a.rel = 'noopener';
        block.appendChild(a);
      }
      wrap.appendChild(block);
    });
    sec.appendChild(wrap);
    return sec;
  }

  function buildCommute(cfg) {
    if (!has('commute')) return null;
    const opts = (DATA.commute || []).filter((o) =>
      !query || [o.name, (o.body || []).join(' ')].join(' ').toLowerCase().includes(query));
    if (query && !opts.length) return null;
    const sec = sectionShell(cfg);
    const wrap = el('div', 'prose-wrap');
    opts.forEach((o) => {
      const block = el('article', 'opt');
      const stats = (o.stats || []).map((s) => `<div class="stat"><div class="n">${esc(s.n)}</div><div class="l">${esc(s.l)}</div></div>`).join('');
      block.innerHTML = `
        <div class="opt-head"><span class="badge ${o.mode}">${esc(o.mode.toUpperCase())}</span><h3>${esc(o.name)}</h3></div>
        <div class="stat-row">${stats}</div>
        ${(o.body || []).map((p) => `<p>${esc(p)}</p>`).join('')}`;
      if (o.link) {
        const a = el('a', 'btn primary', esc(o.linkLabel || 'Live schedule & fares') + ' ↗');
        a.href = o.link; a.target = '_blank'; a.rel = 'noopener'; a.style.marginTop = '14px';
        block.appendChild(a);
      }
      wrap.appendChild(block);
    });
    if (DATA.commuteNote && !query) wrap.appendChild(el('div', 'callout', DATA.commuteNote));
    sec.appendChild(wrap);
    return sec;
  }

  // events
  function todayStr() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function fmtDay(iso) { const p = iso.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }); }
  function datedWhen(e, today) {
    if (e.end && e.end !== e.date) {
      if (e.date <= today) return ['On now · to ' + fmtDay(e.end), true];
      return [fmtDay(e.date) + ' – ' + fmtDay(e.end), false];
    }
    return [fmtDay(e.date), false];
  }
  function evtCard(whenArr, name, where, note) {
    const [when, live] = Array.isArray(whenArr) ? whenArr : [whenArr, false];
    const c = el('div', 'evt');
    c.innerHTML = `<div><span class="when${live ? ' live' : ''}">${esc(when)}</span></div><div><h4>${esc(name)}</h4><p>${esc(where)}${note ? ' — ' + esc(note) : ''}</p></div>`;
    return c;
  }
  function buildEvents(cfg) {
    if (!has('datedEvents') && !has('recurring')) return null;
    const radius = filterState.events || '15';
    const within = radius === '15' ? 15 : 30;
    const evtMatch = (e) => !query || [e.name, e.where, e.note].join(' ').toLowerCase().includes(query);
    const today = todayStr();
    const dated = (DATA.datedEvents || []).filter((e) => (e.end || e.date) >= today).filter(evtMatch)
      .sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
    if (query && !dated.length && !(DATA.recurring || []).some(evtMatch)) return null;
    const sec = sectionShell(cfg);
    const wrap = el('div', 'events-wrap');
    if (!query) {
      const toggle = el('div', 'cal-toggle');
      [['15', 'Within 15 miles'], ['30', 'Within 30 miles']].forEach(([r, lab]) => {
        const b = el('button', r === radius ? 'active' : '', lab);
        b.type = 'button';
        b.addEventListener('click', () => { filterState.events = r; rerender(); });
        toggle.appendChild(b);
      });
      wrap.appendChild(toggle);
    }
    const near = dated.filter((e) => !e.drive && e.mi <= within);
    wrap.appendChild(el('div', 'season-head', 'Coming up'));
    if (DATA.eventsNote && !query) wrap.appendChild(el('div', 'callout', DATA.eventsNote));
    if (!near.length) wrap.appendChild(el('div', 'empty', 'No dated events ahead in this radius right now — try the live calendars below.'));
    else near.forEach((e) => wrap.appendChild(evtCard(datedWhen(e, today), e.name, e.where, e.note)));

    if (radius === '30' || query) {
      const far = dated.filter((e) => e.drive);
      if (far.length) {
        wrap.appendChild(el('div', 'season-head', 'Worth the drive (beyond 30 mi)'));
        far.forEach((e) => wrap.appendChild(evtCard(datedWhen(e, today), e.name, e.where + ' · ~' + e.mi + ' mi', e.note)));
      }
    }
    ['Every week', 'Every month', 'Seasonal patterns'].forEach((g) => {
      const items = (DATA.recurring || []).filter((r) => r.group === g && r.mi <= within).filter(evtMatch);
      if (!items.length) return;
      wrap.appendChild(el('div', 'season-head', g === 'Seasonal patterns' ? 'Each season' : g));
      items.forEach((e) => wrap.appendChild(evtCard(e.when, e.name, e.where, e.note)));
    });
    if (DATA.eventLinks && !query) {
      wrap.appendChild(el('div', 'season-head', 'Live calendars'));
      const ll = el('div', 'live-links');
      DATA.eventLinks.forEach((l) => {
        const a = el('a', 'live-link'); a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        a.innerHTML = `<h4>${esc(l.name)} ↗</h4><p>${esc(l.note)}</p>`;
        ll.appendChild(a);
      });
      wrap.appendChild(ll);
    }
    sec.appendChild(wrap);
    return sec;
  }

  function buildGroups(cfg) {
    if (!has('community')) return null;
    const list = (DATA.community || []).filter((g) => !query || [g.name, g.kind, g.blurb, g.texture].join(' ').toLowerCase().includes(query));
    if (!list.length) return null;
    const sec = sectionShell(cfg);
    const grid = el('div', 'groups');
    list.forEach((g) => {
      const c = el('article', 'group-card');
      c.innerHTML = `
        <div class="gk">${esc(g.kind || 'Group')}</div>
        <h3>${esc(g.name)}</h3>
        <p>${esc(g.blurb || '')}${g.texture ? ' ' + esc(g.texture) : ''}</p>
        ${g.web ? `<a class="glink" href="${esc(g.web)}" target="_blank" rel="noopener">Open ↗</a>` : ''}`;
      grid.appendChild(c);
    });
    sec.appendChild(grid);
    return sec;
  }

  const BUILDERS = { cards: buildCards, prose: buildProse, commute: buildCommute, events: buildEvents, groups: buildGroups };

  // ---- hero ----------------------------------------------------
  function buildHero() {
    const hero = el('header', 'hero');
    hero.id = 'orientation';
    const facts = (DATA.meta && DATA.meta.quickFacts) || [];
    hero.innerHTML = `
      ${topoSvg('hero-topo')}
      <div class="hero-inner">
        <div class="eyebrow reveal" style="animation-delay:.02s">A field guide to a river town</div>
        <h1 class="reveal" style="animation-delay:.08s">Welcome to <em>Cornwall&#8209;on&#8209;Hudson</em></h1>
        <p class="lede reveal" style="animation-delay:.16s">${esc((DATA.meta && DATA.meta.heroLede) || '')}</p>
        <div class="place-chip reveal" style="animation-delay:.24s">📍 Centered on <b>10&nbsp;Abbott&nbsp;Lane</b> · everything sorted by distance from your door</div>
        ${facts.length ? `<div class="quick-facts reveal" style="animation-delay:.32s">${facts.map((f) => `<div class="qf"><div class="n">${esc(f.n)}</div><div class="l">${esc(f.l)}</div></div>`).join('')}</div>` : ''}
      </div>`;
    return hero;
  }

  // ---- which sections are live --------------------------------
  function liveSections() {
    return SECTIONS.filter((cfg) => {
      if (cfg.type === 'events') return has('datedEvents') || has('recurring');
      if (cfg.type === 'commute') return has('commute');
      if (cfg.type === 'groups') return has('community');
      return has(cfg.key);
    });
  }

  // ---- nav -----------------------------------------------------
  function buildNav() {
    const nav = $('#sectionNav');
    nav.innerHTML = '';
    const top = el('a', '', 'Top'); top.href = '#top';
    nav.appendChild(top);
    liveSections().forEach((cfg) => {
      const a = el('a', '', esc(cfg.nav || cfg.label));
      a.href = '#' + cfg.id;
      a.dataset.target = cfg.id;
      nav.appendChild(a);
    });
  }

  // ---- footer --------------------------------------------------
  function buildFooter() {
    const f = $('#colophon');
    const m = DATA.meta || {};
    f.innerHTML = `
      ${topoSvg('footer-topo')}
      <div class="footer-inner">
        <h3>About this guide</h3>
        <p>${esc(m.about || '')}</p>
        <div class="footer-cols">
          <div>
            <h4>Why "Abbott Lane"?</h4>
            <p style="color:rgba(244,237,224,.72)">${esc(m.homeNote || '')}</p>
          </div>
          <div>
            <h4>The essentials</h4>
            <ul>
              <li><a href="#setup">Town hall & utilities</a></li>
              <li><a href="#services">Repairs & home services</a></li>
              <li><a href="#health">Healthcare</a></li>
              <li><a href="#community">Facebook groups</a></li>
              <li><a href="#events">Events calendar</a></li>
            </ul>
          </div>
          <div>
            <h4>Good to wander</h4>
            <ul>
              <li><a href="#outdoors">The outdoors</a></li>
              <li><a href="#eat">Eat & drink</a></li>
              <li><a href="#arts">Arts & culture</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#curiosities">Curiosities</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-meta">
          <span>${esc(m.updated || '')}</span>
          <span>Distances are straight-line from 10 Abbott Lane — for ordering, not turn-by-turn.</span>
          <span>Tap "AI caution" up top before you rely on anything.</span>
        </div>
      </div>`;
  }

  // ---- AI caution popover -------------------------------------
  function openAi() {
    const m = DATA.meta || {};
    const pop = $('#aiPopover');
    pop.innerHTML = `
      <h3 id="aiTitle">Read me before you rely on this</h3>
      <div class="pp-sub">This guide was assembled with AI research and human review. It is a smart starting point, not gospel.</div>
      <ul>${(m.aiCaution || []).map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      <button class="pp-close" type="button" id="aiClose">Got it</button>`;
    $('#aiBackdrop').hidden = false; pop.hidden = false;
    requestAnimationFrame(() => { $('#aiBackdrop').classList.add('open'); pop.classList.add('open'); });
    $('#aiClose').addEventListener('click', closeAi);
  }
  function closeAi() {
    const pop = $('#aiPopover');
    $('#aiBackdrop').classList.remove('open'); pop.classList.remove('open');
    setTimeout(() => { $('#aiBackdrop').hidden = true; pop.hidden = true; }, 200);
  }

  // ---- render --------------------------------------------------
  let observer = null;
  function rerender() {
    const guide = $('#guide');
    guide.innerHTML = '';
    guide.appendChild(buildHero());
    let rendered = 0;
    liveSections().forEach((cfg) => {
      const sec = BUILDERS[cfg.type](cfg);
      if (sec) { guide.appendChild(sec); rendered++; }
    });
    if (query && rendered === 0) {
      guide.appendChild(el('div', 'section', `<div class="empty">No matches for "${esc(query)}". Try fewer letters.</div>`));
    }
    buildNav();
    setupScrollSpy();
  }

  // ---- scroll spy ---------------------------------------------
  function setupScrollSpy() {
    if (observer) observer.disconnect();
    const navLinks = {};
    $$('#sectionNav a[data-target]').forEach((a) => { navLinks[a.dataset.target] = a; });
    observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          $$('#sectionNav a').forEach((x) => x.classList.remove('active'));
          const a = navLinks[en.target.id];
          if (a) { a.classList.add('active'); a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    $$('#guide .section').forEach((s) => observer.observe(s));
  }

  // ---- search (debounced) -------------------------------------
  let searchT = null;
  function onSearch(v) {
    clearTimeout(searchT);
    searchT = setTimeout(() => {
      query = v.trim().toLowerCase();
      $('#searchClear').hidden = !query;
      rerender();
    }, 120);
  }

  // ---- init ----------------------------------------------------
  function init() {
    // This is now a regular web page. Tear down any leftover PWA service
    // worker and caches from the earlier installable version so returning
    // visitors get fresh content, not the cached app shell.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister())).catch(() => {});
      if (window.caches && caches.keys) caches.keys().then((ks) => ks.forEach((k) => caches.delete(k))).catch(() => {});
    }

    rerender();
    buildFooter();

    const s = $('#search');
    s.addEventListener('input', () => onSearch(s.value));
    $('#searchClear').addEventListener('click', () => { s.value = ''; onSearch(''); s.focus(); });

    $('#aiBtn').addEventListener('click', openAi);
    $('#aiBackdrop').addEventListener('click', closeAi);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAi(); });

    // mobile nav toggle
    const navToggle = $('#navToggle'), nav = $('#sectionNav');
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
    });

    // back to top
    const toTop = $('#toTop');
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => { toTop.classList.toggle('show', window.scrollY > 700); }, { passive: true });
  }
  document.addEventListener('DOMContentLoaded', init);
})();
