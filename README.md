# Highlands — A Cornwall-on-Hudson Guide

A mobile-first, installable PWA hyperlocal guide to the Hudson Highlands and lower Hudson
Valley, centered on **10 Abbott Lane, Cornwall-on-Hudson, NY 12520**.

## What it covers
Nine sections, each sorted by distance from home where it makes sense:
- **Eat & drink** — village spots out to cross-river day trips, with signature dishes and local notes
- **Arts & culture** — Storm King, Dia Beacon, Magazzino, galleries, music venues
- **History** — long-form: the Storm King environmental case, the Great Chain, the Purple Heart, and more
- **For kids** — nature centers, playgrounds, farms, hikes, LEGOLAND, libraries
- **Shopping** — yarn, books, toys first; then groceries (everyday + the Adams Fairacre Farms outing)
- **Movies** — the art-house cinema and the regional drive-ins
- **Events** — recurring + annual happenings, toggled between a 15-mile and 30-mile radius, plus live-calendar links
- **Commute to NYC** — an honest comparison of the four real ways off the west bank
- **Spectrum services** — autism diagnostic, therapy, school and sensory-friendly resources

## How it works (no black boxes)
- **Pure static app.** `index.html` + `styles.css` + `app.js` + `data.js`. No build step, no dependencies, no API calls.
- **Distances** are computed client-side with the haversine formula from the home coordinates
  (`HOME` in `app.js`, ~41.4447, -74.0189). Place coordinates in `data.js` are approximate —
  accurate enough for *relative* ordering, not turn-by-turn.
- **All content lives in `data.js`.** To edit a listing, add a place, or fix hours, edit that one file.
- **Offline-capable PWA.** `sw.js` caches the shell so it works without signal (handy in the Highlands).
  Installable to the home screen via `manifest.webmanifest`.
- **Directions** open Apple Maps with the address/name; phone and website links come from each listing.

## Sourcing & accuracy
Every listing was web-researched and verified in **June 2026**. Where a source was uncertain,
the listing says so ("confirm," "verify before going"). Closed businesses surfaced during research
(Canterbury Brook Inn, Liberty Street Bistro, Caffe Macchiato, The Would, Whistling Willie's,
Downing Film Center, the Newburgh-Beacon ferry) were **deliberately left off** rather than listed stale.

**Time-sensitive by nature:** hours, fares, prices, seasons and program availability change constantly.
The in-app "About this guide" note and per-section caveats reflect this. For autism/spectrum services,
listings confirm each organization and its general scope but do **not** assert specific therapy offerings —
always verify intake and services directly.

## Run it locally
```
python3 -m http.server 8520 --directory /Users/joshgreenman/Experiments/cornwall-hudson-guide
```
Then open http://localhost:8520 (or "highlands-guide" in the Launch panel).

## Files
| File | Purpose |
|---|---|
| `index.html` | App shell |
| `styles.css` | Mobile-first styling, Hudson Highlands palette |
| `app.js` | Rendering engine: home grid, lists, distance, sheet, events, commute |
| `data.js` | **All content** — edit here |
| `sw.js` | Service worker (offline cache) |
| `manifest.webmanifest` | PWA install metadata |
| `icons/` | App icons |
