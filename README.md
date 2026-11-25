# The Cornwall-on-Hudson Guide

A web guide to **Cornwall-on-Hudson, New York** and the surrounding
Hudson Highlands — built for new residents and curious neighbors. Everything is centered on and
sorted by distance from **10 Abbott Lane, Cornwall-on-Hudson, NY 12520** (on Storm King Mountain).

> This is a **regular web page** — a long, anchored single page with a sticky section nav, a global
> search and a self-updating events calendar. (It replaces an earlier installable-PWA version; the
> service worker and manifest were removed and any old worker is torn down on load.)

## What it covers
A new arrival can find almost anything here. Sections (each sorted by distance where it makes sense):

- **Getting set up** — village vs. town government, utilities (Central Hudson), trash & recycling, the school district, voting, DMV, post offices, emergencies and houses of worship
- **The outdoors** — Storm King, Black Rock Forest, Schunnemunk, the river and waterfront, trails, waterfalls, gardens and the big state parks (with current trail/closure notes)
- **On the water** — boat launches, kayak outfitters, marinas, swimming, fishing, the nearby lakes and the Bear Mountain carousel/Hessian Lake cluster
- **Eat & drink** — village spots out to cross-river day trips
- **Home, hardware & garden** — hardware, lumber, paint, appliances, furniture, antiques and garden centers
- **Shopping & everyday goods** — yarn, books, toys, groceries, pharmacies, wine, pets, bikes, jewelry and more
- **Repairs & home services** — verified local handymen, plumbers, electricians, HVAC, tree, auto and more
- **Healthcare** — hospitals/ERs, urgent care, primary care, pediatrics, dentists, optometry, PT
- **Everyday essentials** — childcare & preschools, banks, gas, gyms, vets, car wash, laundry, salons
- **Kids & families**, **Arts & culture**, **History** (long-form), **Movies**, **Curiosities**
- **Events** — confirmed dates that auto-hide once past, plus recurring patterns and live-calendar links
- **Getting around & the commute** — a comparison of routes off the west bank
- **Community & groups** — the Facebook groups, Nextdoor and official channels where neighbors connect
- **Disability & autism services**

## How it works
- **Pure static web page.** `index.html` + `styles.css` + `app.js` + `data.js`. No build step, no dependencies, no API calls. Fonts (Fraunces + Hanken Grotesk) load from Google Fonts with system fallbacks.
- **All content lives in `data.js`.** To edit a listing, add a place or fix hours, edit that one file. Each section is wired up by the `SECTIONS` config at the top of `app.js`.
- **Distances** are computed client-side with the haversine formula from the home coordinates (`HOME` in `app.js` and `map.js`: 41.420006, -74.016329, the center of the house's FEMA building footprint at 10 Abbott Lane; until November 2026 it was a point in the village about 1.7 miles north). Coordinates in `data.js` are approximate — accurate enough for *relative* ordering, not turn-by-turn.
- **The events calendar updates itself.** `datedEvents` carry ISO dates; the page hides any whose date has passed (using the browser's real clock), so "Coming up" always reflects what's actually ahead. `recurring` holds weekly/seasonal patterns, filtered by a 15-/30-mile toggle.
- **Directions** open Google Maps turn-by-turn from the visitor's location.
- **Global search** filters every card across all sections and hides sections with no matches.

## Sourcing, accuracy & the AI-caution note
This guide was assembled through web research (parallel research agents, **June 2026**) and human
review, under a strict **verify-or-omit** rule — no invented businesses, phone numbers or links. A
few specifics worth knowing:

- **Confidence is tracked.** Listings resting on a single or older source carry a `confidence: "medium"`/`"low"` flag, surfaced in the app as a small **confirm**/**verify** badge and reflected in their "Local note."
- **Repair/service providers are not endorsements.** Each was verified to exist and to serve this area (often via a license roster or the provider's own site), but the app and this README both say to confirm a current New York license, insurance and price before hiring. Plumbing/sewer work in the village must be registered with the Board of Health.
- **Phone numbers that could not be verified were omitted.** A "Cornwall Tire Service" that turned out to be in Cornwall, *Ontario* was deliberately excluded — an example of the name-collision traps that were screened out.
- **Time-sensitive facts are flagged in-app**, e.g. Breakneck Ridge is closed for all of 2026 (Fjord Trail/station construction), Kowawese/Plum Point is posted closed, and the closest ER is the Montefiore St. Luke's **Newburgh** campus (the Cornwall campus has no ER).
- The in-app **"AI caution"** button (top right) lists these caveats. Hours, fares, prices, seasons and program details change constantly — treat the guide as a smart starting point, not gospel.

## Run it locally
```
python3 -m http.server 8520 --directory /Users/joshgreenman/Experiments/cornwall-hudson-guide
```
Then open http://localhost:8520 (or "highlands-guide" in the Launch panel).

## Files
| File | Purpose |
|---|---|
| `index.html` | Page shell: header, sticky nav, hero mount, footer, AI-caution popover |
| `styles.css` | Field-guide editorial design — Hudson Highlands palette, topographic motif, responsive + print |
| `app.js` | Rendering engine: `SECTIONS` config, distance sort, filter chips, search, events, scroll-spy |
| `data.js` | **All content** — edit here |
| `map.html` + `map.js` | Companion **map page** (Leaflet + CARTO tiles): every located listing, colored and toggled by category |
| `map3d.html` + `map3d.js` | Companion **3D map** (MapLibre GL): terrain, contours, buildings, peaks, trails and every guide listing within 20 miles of the house |
| `wildlife.html` + `wildlife.js` | Companion **wildlife & habitat page**: birds, trees, mammals and more, with conservation status and Wikimedia photos |
| `icons/` | Favicon / touch icon |

**3D map.** `map3d.html` shows the 20 miles around the house in 3D. Terrain and hillshade come from AWS Terrain Tiles (Terrarium encoding, built from USGS 3DEP; about 10 m cells here), and contour lines are computed in the browser from the same tiles with maplibre-contour (riverbed contours below 0 ft are dropped). Buildings, roads, trails, parks, named peaks (with OpenStreetMap's elevation tags) and the smaller points of interest come from OpenStreetMap through OpenFreeMap's vector tiles; most buildings lack a height tag and are drawn at a default height. Aerial imagery is Esri World Imagery. The house is placed at the area-weighted center of its two FEMA USA Structures footprints (41.420006, -74.016329), ground about 820 ft per USGS EPQS; elevation readouts sample the terrain tiles and divide out the height exaggeration. The headline range was checked against the zoom-12 terrain tiles: the highest cell within 20 miles is about 1,673 ft on Schunemunk Mountain (published summit 1,664 ft), 6.0 miles southwest. Only the 258 guide listings within 20 miles are drawn. Dragging spins the view by default. "Stand on a spot" puts the camera at 6, 30, 100 or 400 ft above the bare terrain at any point, looking out level, at true scale (exaggeration forced to 1x); trees and buildings are hidden there, so it shows the land as if cleared. The scroll wheel changes the lens (20 to 100 degrees). A strip across the top gives the compass heading, and pointing at anything gives its bearing, angle, distance and ground elevation, found by marching that line of sight out over the terrain tiles. MapLibre 5.24's own camera-from-position helper crashed at these angles, so `vpApply()` places the camera by hand: it aims at a point in the air 200 m along the line of sight, with ground clamping turned off and the aim point's height set explicitly (left clamped, a far aim point could land at sea level and sink the camera under a hill). Verified to put the camera within a meter of the spot. Hovering a building shows a tooltip; because OpenFreeMap merges many outlines into one tile feature, the tooltip picks the outline the cursor is over on screen, footprint or roof. The LiDAR relief toggle draws USGS 3DEP's 1 m bare-earth model as a multidirectional hillshade, rendered tile by tile by the USGS ImageServer (slow, 2-4 s per tile).

**Companion pages.** `map.html` plots all ~285 located listings on an interactive map, colored by category with a toggleable legend and the house marked. `wildlife.html` is a researched field guide to local birds, trees, mammals, fish and insects (verified against Black Rock Forest, the Constitution Marsh Audubon checklist, NY DEC and NOAA Fisheries). Both link from the guide's nav (the 🗺/🦅 pills) and footer. Photos on the wildlife page and a few guide cards are Wikimedia Commons images, credited inline (author + license); each was checked to load.
