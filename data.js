/* ============================================================
   Highlands — content. All facts web-verified June 2026 by
   research agents; "confirm" notes flag anything time-sensitive.
   Coordinates are approximate, for relative distance only.
   ============================================================ */
window.DATA = {
  meta: {
    heroLede: "A guide to Cornwall-on-Hudson and the surrounding Hudson Highlands — the places, the services and how things work, for anyone just settling in. Everything is sorted by distance from the house.",
    quickFacts: [
      { n: "12520", l: "Your ZIP code" },
      { n: "Orange", l: "The county" },
      { n: "~57 mi", l: "To Midtown Manhattan" },
      { n: "West bank", l: "Side of the Hudson" }
    ],
    homeNote: "Your address sits on Storm King Mountain, where the Abbott family was one of the prominent early-20th-century households — alongside the Stillmans, Ledoux and Matthiessens — who kept The Storm King School afloat through the Depression. The lane almost certainly carries their name.",
    about: "This guide was assembled through web research and human review, then organized for someone newly arrived in Cornwall-on-Hudson. Everything is sorted by distance from 10 Abbott Lane. Listings go stale — this stretch of the valley has heavy restaurant turnover, and hours, fares, prices and programs all change. Treat it as a smart starting point, not gospel: call ahead or check a website before a long drive.",
    updated: "Last researched June 2026.",
    aiCaution: [
      "Every business, trail and resource here was web-researched and cross-checked — but this is a fast-changing river town. Restaurants, hours and phone numbers turn over often.",
      "Listings tagged 'confirm' or 'verify' rest on a single or older source. Call ahead before relying on them or making a long drive.",
      "Home-service and repair providers were verified to exist and to serve this area, but a listing is NOT an endorsement. Always confirm a current New York license, insurance and pricing before hiring anyone.",
      "Facebook-group and government links were checked, but social links and meeting schedules change. If a link asks you to log in, search the group name instead.",
      "Distances are straight-line from 10 Abbott Lane, for sorting only — not driving directions. Tap Directions for real routing.",
      "Healthcare and emergency details can change; for anything urgent call 911 or the provider directly. Nothing here is medical, legal or financial advice."
    ]
  },

  notes: {
    eat: "Sorted by distance — the village is walkable. This stretch had heavy restaurant turnover in 2025–26, so a quick 'still open?' check before a long drive is wise. Closed spots (Canterbury Brook, Liberty Street Bistro, Caffe Macchiato, The Would, Whistling Willie's) are left off.",
    arts: "The Highlands around the house are the subject of the founding canvases of American landscape painting. Filter by University museum for the teaching collections (the Loeb's Magoon Hudson River School holdings, Bard's Hessel), or Hudson River School for Olana, Cole and the painted viewsheds. A few need planning: West Point (REAL ID), Newington-Cropsey and Manitoga (appointment/seasonal).",
    kids: "Sorted by distance from the house. The nature museum's village campus is practically walkable.",
    shopping: "Everyday and specialty shopping beyond the home-goods section: yarn and quilting, books, toys and groceries, then pharmacies, wine, pets, bikes, jewelry and more. (Hardware, furniture and garden centers live under Home, hardware & garden.)",
    movies: "The art-house and the drive-ins. Note: Newburgh's Downing Film Center closed in 2023.",
    spectrum: "Start with the OPWDD Front Door for eligibility, then services flow from there. Call ahead — programs and ABA availability change; confirm before relying on any listing.",
    curiosities: "The Atlas Obscura layer — ruins in the woods, roadside oddities, hand-built castles and a few superlatives. Closest first; some need a hike or a seasonal tour.",
    civic: "The official stuff a new arrival needs first — town hall, utilities, trash, schools, voting and emergencies. Cornwall has both a Village (your address, ZIP 12520) and a Town government; the Village handles your water, sewer and trash, so call Village Hall first.",
    nature: "You live on Storm King Mountain, inside the viewshed that launched American landscape painting. Closest first — some are a flat village stroll, some a real scramble. Heads-up: Breakneck Ridge is closed for all of 2026 for trail and station construction.",
    home: "Outfitting a house — hardware, lumber, paint, appliances, furniture, antiques and garden centers. Worth knowing up front: the village has no hardware store of its own, so the nearest full one is Brett's True Value in New Windsor.",
    services: "Verified local trades — but a listing is not a recommendation. For trades, neighbors' word of mouth beats any directory: search the Cornwall Facebook groups and Nextdoor (see Community & groups) and browse the Greater Cornwall Chamber directory. Always confirm a current New York license, insurance and price before hiring; plumbing and sewer work in the village must be registered with the Board of Health.",
    health: "Hospitals, urgent care and the practices a household needs. Key fact: the closest emergency room is the Montefiore St. Luke's Newburgh campus on Dubois Street — the Cornwall campus is outpatient only. For any emergency, call 911.",
    essentials: "The everyday infrastructure — banks, gas, gyms, childcare, vets and the car errands — closest first. Only Walden Savings has a branch in the village itself; most banks cluster along Windsor Highway in Vails Gate.",
    community: "How to actually plug in: the Facebook groups where neighbors swap recommendations and news, plus Nextdoor and the village's own channels. A few links may ask you to log in or to search the group name."
  },

  /* ---------------- ARTS & CULTURE ---------------- */
  arts: [
    { name: "Storm King Art Center", town: "Mountainville / New Windsor", kind: "Sculpture park", lat: 41.4253, lon: -74.0588,
      address: "20 Old Pleasant Hill Rd, New Windsor, NY 12553", web: "https://stormking.org",
      hours: "Wed–Mon 10–6, closed Tue; seasonal (~Apr–early Dec). Confirm 2026 dates.",
      blurb: "A 500-acre open-air sculpture museum, one of the largest in the world, founded in 1960 by Ralph Ogden and H. Peter Stern of the Star Expansion fastener company.",
      signature: "Andy Goldsworthy's 2,278-foot 'Storm King Wall' snaking through woods and into a pond; Maya Lin's 'Storm King Wavefield' (seven 400-ft grass waves); ten monumental Mark di Suvero steel works; Calders.",
      texture: "Personal bikes are banned — you rent theirs (10–4, due back by 6) and the far meadows open up before the tour groups arrive. Peak-foliage October weekends are the most crowded days of the year and timed tickets sell out; weekday mornings at 10 are the secret. A free tram loops the grounds in an hour from 11:10.",
      tags: ["Art", "Outdoors", "Day trip"] },

    { name: "Dia Beacon", town: "Beacon", kind: "Contemporary museum", lat: 41.5006, lon: -73.9740,
      address: "3 Beekman St, Beacon, NY 12508", web: "https://www.diaart.org/visit/visit/dia-beacon-beacon-united-states",
      hours: "Mon & Fri–Sun 10–5; closed Tue–Thu.",
      blurb: "Monumental minimalist and contemporary art in a 240,000-sq-ft former Nabisco box-printing factory, daylit through the old sawtooth roof.",
      signature: "Three of Richard Serra's walk-through 'Torqued Ellipses' in the former train shed; vast Walter De Maria installations; Judd, Flavin, Agnes Martin, Louise Bourgeois.",
      texture: "Note the upside-down schedule — open Monday, closed midweek. The daylight is the point: the galleries change hour to hour, so a bright day reads completely differently from an overcast one.",
      tags: ["Art", "Indoor", "Across the river"] },

    { name: "Magazzino Italian Art", town: "Cold Spring", kind: "Contemporary museum", lat: 41.4097, lon: -73.9520,
      address: "2700 Route 9, Cold Spring, NY 10516", web: "https://www.magazzino.art",
      hours: "Open Thu–Mon; free admission. Confirm hours.",
      blurb: "A free museum of postwar Italian art — the Arte Povera movement — in a former computer-chip factory, opened in 2017 by collectors Nancy Olnick and Giorgio Spanu.",
      texture: "The genuine insider pick: far quieter than Dia, free, and a 2023 addition added a Murano glass gallery and a café. Reserve a timed slot online.",
      tags: ["Art", "Free", "Hidden gem"] },

    { name: "Newburgh Brewing Company", town: "Newburgh", kind: "Music & theater", lat: 41.4993, lon: -74.0122,
      address: "88 S Colden St, Newburgh, NY 12550", web: "https://www.newburghbrewing.com",
      hours: "Live music Fri & Sat 7pm, Sun 2pm.",
      blurb: "A fourth-floor taproom with sweeping Hudson views in a brick riverfront warehouse, brewing since 2012.",
      texture: "Go up to the top floor at golden hour — the river view down to the Newburgh-Beacon Bridge is the draw as much as the beer. Trivia and karaoke fill the off-nights.",
      tags: ["Music", "Drinks", "View"] },

    { name: "Ann Street Gallery", town: "Newburgh", kind: "Galleries", lat: 41.5034, lon: -74.0120,
      address: "104 Ann St, Newburgh, NY 12550", web: "https://www.safe-harbors.org/ann-street-gallery",
      blurb: "A respected contemporary exhibition program run by Safe Harbors of the Hudson, the nonprofit that pairs supportive housing with the arts in downtown Newburgh.",
      texture: "Walkable to the waterfront. Time a visit to Newburgh Open Studios (last weekend of September) when studios and pop-up galleries across the city open their doors.",
      tags: ["Art", "Free"] },

    { name: "Towne Crier Cafe", town: "Beacon", kind: "Music & theater", lat: 41.5050, lon: -73.9690,
      address: "379 Main St, Beacon, NY 12508", web: "https://townecrier.com",
      blurb: "A long-running listening-room music club with full dinner service on Beacon's Main Street.",
      texture: "It's a true listening room — the room hushes for the set. Pair a show with dinner and you've got the whole evening in one stop.",
      tags: ["Music", "Dinner"] },

    { name: "Paramount Hudson Valley", town: "Peekskill", kind: "Music & theater", lat: 41.2897, lon: -73.9210,
      address: "1008 Brown St, Peekskill, NY 10566", web: "https://paramounthudsonvalley.com",
      blurb: "A restored ~1,078-seat 1930s movie palace, now a nonprofit arts center with touring music, comedy and a film program.",
      tags: ["Music", "Film", "Theater"] },

    { name: "Bardavon 1869 Opera House", town: "Poughkeepsie", kind: "Music & theater", lat: 41.7060, lon: -73.9370,
      address: "35 Market St, Poughkeepsie, NY 12601", web: "https://bardavon.org",
      blurb: "One of the oldest continuously operating theaters in the country (1869) — concerts and performing arts across the river in Poughkeepsie.",
      tags: ["Music", "Theater", "Historic"] },

    /* ---- University & college museums ---- */
    { name: "Frances Lehman Loeb Art Center", town: "Poughkeepsie", kind: "University museum", lat: 41.6860, lon: -73.8960,
      address: "124 Raymond Ave, Vassar College, Poughkeepsie, NY 12604", web: "https://www.vassar.edu/theloeb",
      hours: "Tue–Sun 10–5, closed Mon. Free.",
      blurb: "Vassar's encyclopedic teaching museum in a César Pelli building — 22,000+ objects from antiquity to now.",
      signature: "The Magoon Collection: Matthew Vassar bought Rev. Elias Magoon's Hudson River School paintings in 1864 — one of the earliest such collections ever assembled, so the Church, Cole, Cropsey and Gifford holdings carry rare contemporaneous provenance. Plus Warburg old-master prints (Rembrandt, Dürer), Cézanne, O'Keeffe, Pollock, Calder.",
      texture: "The single most art-historically loaded stop in the region — and free. These Hudson River School canvases were collected as the movement was happening, not in retrospect. A Terra Foundation grant funded the recent reinstallation.",
      tags: ["Free", "Hudson River School", "Old masters", "Scholarly"] },

    { name: "Samuel Dorsky Museum of Art", town: "New Paltz", kind: "University museum", lat: 41.7400, lon: -74.0860,
      address: "1 Hawk Dr, SUNY New Paltz, New Paltz, NY 12561", web: "https://www.newpaltz.edu/museum",
      hours: "Wed–Sun 11–5, closed Mon–Tue. Free.",
      blurb: "Six galleries and 6,000+ works spanning ~4,000 years at SUNY New Paltz — the natural complement to the Loeb.",
      signature: "The region's only museum whose collecting mission is specifically the art and artists of the Hudson Valley and Catskills. Real depth in 19th-century American prints, photography, and contemporary metals (tied to the campus's noted metals program).",
      texture: "Where to see the Valley's own artists collected as a coherent regional school rather than as scenery.",
      tags: ["Free", "Hudson Valley artists", "Prints", "Photography"] },

    { name: "CCS Bard / Hessel Museum of Art", town: "Annandale-on-Hudson", kind: "University museum", lat: 42.0200, lon: -73.9080,
      address: "Bard College, 33 Garden Rd, Annandale-on-Hudson, NY 12504", web: "https://ccs.bard.edu",
      hours: "Museum Wed–Sun 11–5, free. Library & collection viewing by appointment.",
      blurb: "The major scholarly node: Bard's Center for Curatorial Studies, home to one of the world's most prestigious graduate curatorial programs.",
      signature: "The Marieluise Hessel Collection — ~2,000 works from the 1960s to now (painting, photography, sculpture, video, installation), among the leading contemporary collections on any campus. Exhibitions are effectively the thesis work of the field's rising curators.",
      texture: "For a researcher, this is the destination: a serious contemporary-art research library and archive (viewing by arrangement — call ahead). The first full Hessel catalogue is good pre-visit reading. ~40 miles, but the academic payoff is unmatched.",
      tags: ["Free", "Contemporary", "Curatorial studies", "Research library", "Scholarly"] },

    { name: "West Point Museum", town: "West Point", kind: "Museum", lat: 41.3900, lon: -73.9560,
      address: "Olmsted Hall, 2110 New South Post Rd, West Point, NY 10996", web: "https://www.westpoint.edu/about/west-point-museum",
      hours: "Tue–Sun 10–4. Free.",
      blurb: "America's oldest military museum (public since 1854) — and, less obviously, a node in Hudson River School history. The closest major institution to the house, ~8 miles south.",
      signature: "Robert Walter Weir taught drawing here for 42 years; his pupils included James McNeill Whistler. His son John Ferguson Weir painted 'View of the Highlands from West Point.' The academy holds significant American art and Highlands views across its buildings.",
      texture: "Access changed: as of March 2026 there are 100% ID checks. Non-DoD visitors must get a local-area credential at the Visitor Control Center first — bring a REAL ID and budget extra time.",
      access: "REAL ID required; obtain a visitor credential at the Visitor Control Center before entering.",
      tags: ["Free", "American art", "Hudson River School", "Plan ahead"] },

    { name: "CMA Gallery, Mount Saint Mary College", town: "Newburgh", kind: "Galleries", lat: 41.5080, lon: -74.0250,
      address: "Aquinas Hall, 330 Powell Ave, Newburgh, NY 12550", web: "https://www.msmc.edu/cma-gallery",
      hours: "Mon–Fri business hours or by appointment. Free.",
      blurb: "A college gallery six miles away showing working artists from Newburgh, Beacon and the Valley — a rotating contemporary program.",
      tags: ["Free", "Contemporary", "Close by"] },

    /* ---- Hudson River School & art-historical sites ---- */
    { name: "Olana State Historic Site", town: "Hudson", kind: "Hudson River School", lat: 42.2170, lon: -73.8300,
      address: "5720 Route 9G, Hudson, NY 12534", web: "https://olana.org",
      hours: "Grounds free, daily 8–sunset. House tours Tue–Sun ~10–4, ticketed — book ahead.",
      blurb: "Frederic Edwin Church's hilltop Persian-Orientalist villa — a total artwork where the house, the art-filled interior and the designed landscape were all composed like canvases.",
      signature: "The 'painted views' framed by five miles of carriage roads; Church's studio. 2026 is the bicentennial of Church's birth — programming is unusually rich this year.",
      texture: "Pair it with Thomas Cole's site directly across the river for a single Hudson River School day. ~40 miles north, but it's the movement's high cathedral.",
      tags: ["Hudson River School", "Historic house", "Landscape", "Book ahead"] },

    { name: "Thomas Cole National Historic Site", town: "Catskill", kind: "Hudson River School", lat: 42.2170, lon: -73.8650,
      address: "218 Spring St, Catskill, NY 12414", web: "https://thomascole.org",
      hours: "Tue–Sun ~10:45–4; house tours ticketed, grounds free. Confirm.",
      blurb: "The home and studios of Thomas Cole, founder of the Hudson River School, including the reconstructed 1846 'New Studio.'",
      signature: "2026 exhibition 'Contemporary Vistas — Cynthia Daignault: Light Atlas' (June 20–Nov 1): 360 small landscapes from a perimeter-of-the-US road trip, in dialogue with Cole's project.",
      texture: "Faces Olana across the Hudson — the two were master and patron's-eye-view of the same valley. Do both in one trip.",
      tags: ["Hudson River School", "Historic house", "Scholarly"] },

    { name: "Newington-Cropsey Foundation", town: "Hastings-on-Hudson", kind: "Hudson River School", lat: 40.9940, lon: -73.8790,
      address: "Hastings-on-Hudson, NY 10706", web: "https://www.newingtoncropsey.com",
      hours: "Gallery by appointment only, Mon–Fri 1–5; arrange a week ahead. Closed Jan & Aug. No under-16.",
      blurb: "Jasper Francis Cropsey's home 'Ever Rest,' a purpose-built gallery of his work, and the Cropsey Research Library on 19th-century American art.",
      texture: "The standout researcher's stop — a genuine (non-lending) scholarly library on the period — but it requires real planning: appointment a week out, no admission fee, groups capped at 15. ~35 miles south.",
      access: "Appointment-only, arranged by phone at least a week ahead; closed January and August; no children under 16.",
      tags: ["Hudson River School", "Research library", "By appointment", "Scholarly"] },

    { name: "Boscobel House and Gardens", town: "Garrison", kind: "Hudson River School", lat: 41.4150, lon: -73.9450,
      address: "1601 Route 9D, Garrison, NY 10524", web: "https://www.boscobel.org",
      blurb: "A Federal-style mansion overlooking the exact Highlands viewshed — Constitution Marsh, West Point and the river from Bear Mountain Bridge to Newburgh Bay — that the Hudson River School painted.",
      signature: "On the grounds: portrait busts of ten major Hudson River School artists by sculptor Greg Wyatt, funded by the Newington-Cropsey Foundation — an on-site art-historical roll call.",
      texture: "This is where you stand inside the picture plane: the Highlands around your house are the subject of canvases by Cole, Church, Cropsey and Gifford. ~12 miles south.",
      tags: ["Hudson River School", "Viewshed", "Historic house"] },

    /* ---- Design, land art & serious contemporary ---- */
    { name: "Manitoga / The Russel Wright Design Center", town: "Garrison", kind: "Design & land art", lat: 41.3650, lon: -73.9430,
      address: "584 NY-9D, Garrison, NY 10524", web: "https://www.visitmanitoga.org",
      hours: "May–November; house/studio/quarry by guided tour with advance reservation (~11am & 1:30pm). Reserve ahead.",
      blurb: "Modernist designer Russel Wright's house 'Dragon Rock,' studio and 75-acre woodland built into an abandoned quarry, the landscape orchestrated into 'outdoor rooms.' A National Trust site.",
      texture: "A landmark of American modernist design and ecological landscape thinking — only seen by reserved tour, May–Nov. ~12 miles south; pair with Boscobel and the Garrison Art Center.",
      tags: ["Design history", "Modernism", "Landscape", "Reserve ahead"] },

    { name: "Opus 40", town: "Saugerties", kind: "Design & land art", lat: 42.0470, lon: -74.0900,
      address: "356 George Sickle Rd, Saugerties, NY 12477", web: "https://www.opus40.org",
      hours: "Seasonal (~April–November); ticketed. Confirm days.",
      blurb: "A 6.5-acre dry-laid bluestone earthwork built single-handedly by sculptor Harvey Fite from 1939 on — terraces, ramps and steps across an old quarry, no mortar.",
      texture: "A canonical American environmental/land artwork that predates the famous 1960s–70s earthworks by decades. ~40 miles north.",
      tags: ["Land art", "Sculpture", "Seasonal"] },

    { name: "Hudson Valley MOCA", town: "Peekskill", kind: "Contemporary museum", lat: 41.2880, lon: -73.9230,
      address: "1701 Main St, Peekskill, NY 10566", web: "https://www.hudsonvalleymoca.org",
      hours: "Generally Thu–Sun 11–5 — confirm before driving. Admission ~$30.",
      blurb: "A 12,000-sq-ft contemporary museum founded by collectors Marc and Livia Straus, with a permanent collection, loan shows and an artist-in-residence program.",
      texture: "Note the steep-for-the-region admission and limited hours — worth confirming directly. ~25 miles south.",
      tags: ["Contemporary", "Paid", "Confirm hours"] },

    { name: "Putnam History Museum", town: "Cold Spring", kind: "Museum", lat: 41.4180, lon: -73.9560,
      address: "63 Chestnut St, Cold Spring, NY 10516", web: "https://www.putnamhistorymuseum.org",
      hours: "Wed–Sun 12–4.",
      blurb: "The former Foundry School Museum — and home to John Ferguson Weir's 'The Gun Foundry,' the renowned painting of the West Point Foundry interior.",
      signature: "'The Gun Foundry' (1866) is a touchstone of American industrial-sublime imagery — see it, then walk the actual painted site at the free West Point Foundry Preserve nearby.",
      texture: "A small museum hiding a genuinely important canvas. ~12 miles south, pairs with a Cold Spring afternoon.",
      tags: ["American art", "Industrial sublime", "Local history"] },

    { name: "Garrison Art Center", town: "Garrison", kind: "Galleries", lat: 41.3820, lon: -73.9470,
      address: "23 Garrison's Landing, Garrison, NY 10524", web: "https://www.garrisonartcenter.org",
      blurb: "A waterfront nonprofit with a rotating exhibition program plus studios and education, right at the historic Garrison's Landing. Confirm current hours.",
      texture: "Steps from the Metro-North platform and the postcard view across to West Point — an easy add to a Cold Spring/Boscobel loop.",
      tags: ["Contemporary", "Waterfront"] },

    { name: "Beacon galleries (Mother, BAU, Catalyst…)", town: "Beacon", kind: "Galleries", lat: 41.5060, lon: -73.9610,
      web: "https://www.alittlebeaconblog.com/second-saturday-art-gallery-guide-1",
      blurb: "Beacon's contemporary gallery district beyond the Second Saturday crowds — worth a deliberate weekday visit.",
      signature: "Mother Gallery (1154 North Ave, by appointment) is the most curatorially ambitious — artist-run and 'grounded in art-historical precedent.' BAU (Beacon Artist Union) is the district's oldest; Catalyst rotates monthly. Also Distortion Society, Marion Royael, Hudson Beach Glass.",
      texture: "The scene turns over fast — check each gallery's hours before going, and email Mother Gallery ahead since it's appointment-only.",
      tags: ["Contemporary", "Galleries", "Confirm hours"] },

    { name: "Howland Cultural Center", town: "Beacon", kind: "Galleries", lat: 41.5040, lon: -73.9670,
      address: "477 Main St, Beacon, NY 12508", web: "https://www.howlandculturalcenter.org",
      hours: "Gallery Sat–Sun 1–5; weekdays by chance or appointment.",
      blurb: "A historic Beacon venue mounting roughly a dozen shows a year, including an annual Hudson Valley landscape exhibition.",
      tags: ["Contemporary", "Historic venue"] }
  ],

  /* ---------------- HISTORY (long-form) ---------------- */
  history: [
    { name: "The Storm King case — where environmental law was born", kicker: "On this mountain", town: "Storm King Mountain", lat: 41.4280, lon: -74.0200, web: "https://en.wikipedia.org/wiki/Scenic_Hudson_Preservation_Conference_v._Federal_Power_Commission", webLabel: "The case",
      body: [
        "In September 1962 Consolidated Edison announced it would blast a 2,000-megawatt pumped-storage hydroelectric plant — then the largest in the world — into the face of Storm King Mountain, the very mountain your house sits on.",
        "Opponents formed the Scenic Hudson Preservation Conference. In 1965 the U.S. Court of Appeals for the Second Circuit ruled in 'Scenic Hudson v. Federal Power Commission' that citizens had legal standing to sue on aesthetic and environmental grounds — an unprecedented holding.",
        "That decision is widely credited with launching modern environmental law: it established the public's right to take part in environmental disputes and helped inspire the National Environmental Policy Act. The 17-year fight ended when Con Ed abandoned the plant; the settlement was signed in December 1980."
      ] },

    { name: "Storm King Highway (Route 218)", kicker: "Engineering feat", town: "Cornwall · West Point", lat: 41.4180, lon: -73.9870, web: "https://en.wikipedia.org/wiki/Storm_King_Highway",
      body: [
        "The dramatic cliffside road clinging to Storm King's eastern face. Construction began in 1916 and it opened on September 25, 1922, shortening the trip between Newburgh and West Point by 22 miles.",
        "Surveyors literally rappelled down the cliffs to mark the route. The project survived contractor bankruptcies and WWI labor shortages — and the constant hazard of boulders dropping onto the railroad below. The overlooks rise to roughly 420 feet above the river."
      ] },

    { name: "Butter Hill becomes Storm King", kicker: "How it got its name", town: "Cornwall-on-Hudson", lat: 41.4270, lon: -74.0150, web: "https://en.wikipedia.org/wiki/Storm_King_Mountain_(New_York)",
      body: [
        "Dutch colonists called the mountain 'Boterberg' — Butter Hill — because it looked like a lump of butter.",
        "In the mid-19th century the magazine writer Nathaniel Parker Willis proposed the name 'Storm King,' noting that a morning cloud-beard on the summit reliably foretold a coming storm. Willis built his estate 'Idlewild' (designed by Calvert Vaux) near Canterbury Creek in 1852 and his writing helped turn Cornwall into a fashionable 19th-century country and health resort."
      ] },

    { name: "Edward Payson Roe — bestselling novelist, famous fruit-grower", kicker: "Local character", town: "Cornwall-on-Hudson", lat: 41.4450, lon: -74.0160, web: "https://en.wikipedia.org/wiki/Edward_Payson_Roe",
      body: [
        "The Rev. Edward Payson Roe (1838–1888) moved to Cornwall-on-Hudson in 1874 and lived a genuine double life: he wrote runaway-bestselling fiction ('Barriers Burned Away') while running greenhouses and growing roses and small fruits.",
        "He was as famous for his garden books — 'Success with Small Fruits,' 'The Home Acre' — as for his novels. A megaselling author who was equally celebrated as a horticulturist, right here in the village."
      ] },

    { name: "Black Rock Forest & the Stillmans", kicker: "The forest next door", town: "Cornwall", lat: 41.4030, lon: -74.0270, web: "https://www.blackrockforest.org", webLabel: "Black Rock Forest",
      body: [
        "Dr. Ernest G. Stillman, son of a powerful banker, inherited vast Cornwall acreage in 1918 and established Black Rock Forest in 1929 as a forest-research preserve, later donating roughly 3,800 acres plus an endowment to Harvard.",
        "Per his will, his ashes were scattered in the forest. Today it's a 3,900-acre preserve run by the Black Rock Forest Consortium — open daily, rarely crowded, with several family-friendly 3–4 mile routes."
      ] },

    { name: "The Great Chain across the Hudson", kicker: "Revolutionary War", town: "West Point", lat: 41.3910, lon: -73.9560, web: "https://en.wikipedia.org/wiki/Hudson_River_Chain",
      body: [
        "In 1778 the Continental Army strung a 65-ton iron chain — links two feet long and 114 pounds each, some 600 yards in total — between West Point and Constitution Island to block British warships.",
        "The river's sharp westward bend at West Point forced sailing ships to slow and tack, exposing them to cannon fire. The chain was never tested by the Royal Navy. Surviving links are displayed at Trophy Point."
      ] },

    { name: "Washington's Headquarters & the Purple Heart", kicker: "Newburgh, 1782", town: "Newburgh", lat: 41.5010, lon: -74.0090, address: "84 Liberty St, Newburgh, NY 12550", web: "https://en.wikipedia.org/wiki/Washington%27s_Headquarters_State_Historic_Site", webLabel: "Historic site",
      body: [
        "The Hasbrouck House in Newburgh was Washington's headquarters from April 1782 to August 1783 — his longest stay anywhere. In 1850 it became the first publicly owned historic site in the United States.",
        "Here, on August 7, 1782, Washington created the Badge of Military Merit — the direct ancestor of the Purple Heart. The nearby New Windsor Cantonment was the army's final winter camp and the site of Washington's calming 'Newburgh Address'; the National Purple Heart Hall of Honor stands there today."
      ] },

    { name: "Bannerman Castle on Pollepel Island", kicker: "The ruin in the river", town: "Hudson River off Cornwall", lat: 41.4550, lon: -73.9880, web: "https://bannermancastle.org", webLabel: "Bannerman Castle Trust",
      body: [
        "A tiny island in the Hudson, long steeped in ghost legend. In 1900 Francis Bannerman VI — a military-surplus dealer who couldn't legally store 30 million cartridges and black powder within New York City limits — bought the island and built a Scottish-style arsenal 'castle.'",
        "It's now a romantic ruin. The Bannerman Castle Trust runs seasonal boat and walking tours from Newburgh and Beacon."
      ] },

    { name: "West Point Foundry & the Parrott gun", kicker: "Civil War industry", town: "Cold Spring", lat: 41.4150, lon: -73.9530, web: "https://en.wikipedia.org/wiki/West_Point_Foundry",
      body: [
        "The West Point Foundry in Cold Spring (1818–1911) became the nation's largest artillery maker by the end of the Civil War. Robert Parker Parrott invented the Parrott rifle, a cannon strengthened by a wrought-iron band shrunk around the breech.",
        "The ruins are now the West Point Foundry Preserve, with interpretive trails winding through the archaeology — a quiet, under-visited walk."
      ] },

    { name: "Newburgh's East End & the Freedom Church", kicker: "Architecture & Black history", town: "Newburgh", lat: 41.5030, lon: -74.0100, web: "https://en.wikipedia.org/wiki/East_End_Historic_District_(Newburgh,_New_York)",
      body: [
        "Newburgh's East End Historic District holds 2,239 contributing buildings — the most of any federally recognized district in New York State — block after block of Italianate, Second Empire and Gothic Revival.",
        "The AME Zion Church, the 'Freedom Church,' was tied to the Underground Railroad; Frederick Douglass visited in 1870 and marched down Washington Street celebrating the 15th Amendment. (The historic church building's preservation has been threatened in recent years.)"
      ] }
  ],

  /* ---------------- FOR KIDS ---------------- */
  kids: [
    { name: "Hudson Highlands Nature Museum — Wildlife Education Center", town: "Cornwall-on-Hudson", kind: "Nature center", lat: 41.4430, lon: -74.0180,
      address: "25 Boulevard, Cornwall-on-Hudson, NY 12520", phone: "845-534-7781", web: "https://hhnaturecenter.org",
      hours: "Sat–Sun 12–4, year-round. Confirm — it has closed for renovation periods.",
      blurb: "Live native, non-releasable animals in the village campus — essentially walkable from Abbott Lane.",
      texture: "The closest attraction to the house. Pair it with the museum's Outdoor Discovery Center a few miles away for trails and the Grasshopper Grove play area.",
      tags: ["Toddlers", "Animals", "Walkable"] },

    { name: "Hudson Highlands Nature Museum — Outdoor Discovery Center", town: "Cornwall", kind: "Nature center", lat: 41.4340, lon: -74.0450,
      address: "120 Muser Drive, Cornwall, NY 12518", phone: "845-534-5506", web: "https://hhnaturecenter.org",
      hours: "Trails free, daily dawn–dusk. Grasshopper Grove play area Sat–Sun 10–4, mid-Apr to mid-Nov ($5; under 2 free).",
      blurb: "Stroller-friendly trails, live animals and a dedicated nature-play area for little kids.",
      texture: "The trails are free and open every single day — even when the staffed play area isn't — so it doubles as a quick after-school walk.",
      tags: ["Toddlers", "Outdoors", "Free trails"] },

    { name: "Donahue Memorial Park", town: "Cornwall-on-Hudson", kind: "Park", lat: 41.4470, lon: -74.0100,
      address: "Shore Rd, Cornwall-on-Hudson", blurb: "8.6 riverfront acres with a gazebo, kayak put-in and picnic lawns — host of RiverFest each June.",
      texture: "An active rail line runs right along the water here, making it a beloved trainspotting spot. More scenic-picnic than playground.",
      tags: ["Riverfront", "Trains", "Picnic"] },

    { name: "Riverlight Park", town: "Cornwall-on-Hudson", kind: "Playground", lat: 41.4460, lon: -74.0120,
      blurb: "The closest full playground to the house — baseball fields, a wading pool, tennis and basketball courts.",
      tags: ["Playground", "Walkable"] },

    { name: "Jones Farm & Country Store", town: "Cornwall", kind: "Farm", lat: 41.4550, lon: -74.0600,
      address: "190 Angola Rd, Cornwall, NY 12518", phone: "845-534-4445", web: "https://jonesfarminc.com",
      hours: "Wed–Sun 8–5 (closed Mon–Tue).",
      blurb: "A working family farm since 1914: Grandma Phoebe's Kitchen bakery, a café, a petting zoo and a country store.",
      signature: "The cinnamon-sugar apple cider donuts are the reason to go.",
      texture: "Low-key and local — donuts and farm animals in one stop, no admission, no pick-your-own crowds. Note: 'Jones Family Farms' online is a different farm in Connecticut.",
      tags: ["Toddlers", "Donuts", "Animals", "Fall"] },

    { name: "Lawrence Farms Orchards", town: "Newburgh", kind: "Farm", lat: 41.5080, lon: -74.0800,
      address: "39 Colandrea Rd, Newburgh, NY 12550", phone: "845-562-4268", web: "https://lawrencefarmsorchards.org",
      hours: "Daily ~9–5 in season, last picking entry 4pm.",
      blurb: "The biggest pick-your-own in Orange County: apples, peaches, strawberries, pumpkins, plus a 'Little Village,' hay-bale maze and cider donuts.",
      texture: "This is the full-day fall destination — go on a weekday in early October to dodge the weekend crush.",
      tags: ["Pick-your-own", "Fall", "Big day out"] },

    { name: "LEGOLAND New York", town: "Goshen", kind: "Theme park", lat: 41.3850, lon: -74.2950,
      address: "1 LEGOLAND Way, Goshen, NY 10924", web: "https://www.legoland.com/new-york",
      hours: "Seasonal (~spring–early winter). Buy tickets online in advance — much cheaper than the gate.",
      blurb: "The regional headliner theme park, about 20 miles west in Goshen.",
      access: "A Certified Autism Center: posted sensory guides on every ride, Quiet Rooms with dimmable lighting and sensory swings, and trained staff. The on-site hotel is certified too.",
      texture: "Dates sell out and gate prices are steep — booking online ahead is both cheaper and safer.",
      tags: ["Big day out", "Sensory-friendly", "Tickets ahead"] },

    { name: "Bear Mountain — zoo, carousel & ice rink", town: "Bear Mountain", kind: "State park", lat: 41.3120, lon: -73.9880,
      web: "https://parks.ny.gov/parks/bearmountain", blurb: "A whole day-trip cluster: the Trailside Museums & Zoo (native wildlife), an indoor carousel with 42 hand-carved native-animal figures, and a seasonal outdoor ice rink.",
      texture: "The paved loop around Hessian Lake is the rare stroller-friendly 'hike' here. Carousel rides are about a dollar; confirm current zoo fees.",
      hours: "Zoo Apr–Oct 10–4:30; ice rink late Oct–mid-Mar. Confirm.",
      tags: ["Animals", "Stroller-OK", "Winter skating"] },

    { name: "Storm King Mountain hike", town: "Cornwall-on-Hudson", kind: "Hike", lat: 41.4280, lon: -74.0200,
      blurb: "A ~2.25-mile loop on the Orange/Stoney Lonesome trails with short rock scrambles and big Hudson views — minutes from the house.",
      texture: "Good for fit families with older kids; there's light hands-on-rock scrambling, so it's not stroller terrain. The Orange Trail starts at the far side of the northbound 9W pull-off.",
      tags: ["Hike", "Older kids", "Views"] },

    { name: "Mid-Hudson Children's Museum", town: "Poughkeepsie", kind: "Children's museum", lat: 41.7060, lon: -73.9450,
      address: "75 N Water St, Poughkeepsie, NY 12601", web: "https://www.mhcm.org",
      hours: "Tue 9:30–12, Wed–Sat 9:30–5, Sun 11–5 (closed Mon). Confirm.",
      blurb: "Hands-on riverfront exhibits across the river in Poughkeepsie.",
      access: "An Autism-Supportive Environment partner with Anderson Center: Sensory Hours the 2nd Sunday each month, 9–11am — reduced sound, quiet spaces, extra visual signage. Confirm the schedule.",
      tags: ["Indoor", "Sensory-friendly", "Rainy day"] },

    { name: "Walkway Over the Hudson", town: "Poughkeepsie / Highland", kind: "State park", lat: 41.7080, lon: -73.9520,
      address: "61 Parker Ave, Poughkeepsie, NY 12601", web: "https://walkway.org",
      hours: "Daily dawn–dusk, free to walk. Elevator closed Jan–Apr.",
      blurb: "The world's longest elevated pedestrian bridge — 1.28 miles across the river, 212 feet up.",
      texture: "Free to walk; the 61 Parker Ave lot charges, but Brookside Ave parking is free. Flat and fully stroller-friendly end to end.",
      tags: ["Stroller-OK", "Views", "Free"] },

    { name: "Thomas Bull Memorial Park — Sally's Dream", town: "Montgomery", kind: "Playground", lat: 41.5030, lon: -74.1970,
      blurb: "A large inclusive wooden playground — slides, bridges, tiers — plus pond fishing and picnic shelters in an Orange County park.",
      tags: ["Playground", "Inclusive"] },

    { name: "Cornwall Public Library", town: "Cornwall", kind: "Library", lat: 41.4450, lon: -74.0160,
      address: "395 Hudson St, Cornwall, NY", web: "https://cornwalllibrary.org",
      hours: "Mon–Thu 9–8, Fri 9–6, Sat 9–4, Sun 1–4. Story times seasonal — check the site.",
      blurb: "Toddler play, weekly story times and an after-school program (bus service available for some sessions).",
      tags: ["Toddlers", "Free", "Story time"] }
  ],

  /* ---------------- SHOPPING ---------------- */
  shopping: [
    { name: "Cornwall Yarn Shop", town: "Cornwall", kind: "Yarn", lat: 41.4480, lon: -74.0500,
      address: "227 Main St, Cornwall, NY 12518", phone: "845-534-0383", web: "https://cornwallyarnshop.com",
      hours: "Wed–Fri 11–5, Sat 11–3 (closed Sun–Tue).",
      blurb: "The closest yarn shop by far and a genuine institution — about 20 years on Main Street, a stop on the NY Fiber Trail.",
      texture: "A small, knowledgeable village shop, not a big-box craft store — yarns, felts, tools, kits, and felt sheets made from locally sourced fibers.",
      tags: ["Yarn", "Closest"] },

    { name: "The Endless Skein", town: "Cold Spring", kind: "Yarn", lat: 41.4200, lon: -73.9550,
      web: "https://theendlessskein.com", blurb: "A walkable Cold Spring yarn shop known for classes at every level and recurring drop-in 'Open Crafting' sessions.",
      texture: "The social knitter's pick — pair it with Split Rock Books and The Gift Hut, all walkable in Cold Spring.",
      tags: ["Yarn", "Classes"] },

    { name: "Hudson Valley Quilt & Sew", town: "Cornwall-on-Hudson", kind: "Quilting", lat: 41.4455, lon: -74.0165,
      address: "1 Idlewild Ave #2, Cornwall-on-Hudson, NY 12520 (parking in back)", phone: "845-534-7300",
      blurb: "The headline find for a quilter: a full quilting-cotton shop — notions, patterns, kits and classes — right in the village, about half a mile from the house.",
      texture: "A small, personal two-person operation (Annet and Gerri) that opened fairly recently, tucked just off Hudson Street. That's genuinely rare — most of this region's quilt shops are a 20+ mile drive. Call ahead for current hours, since it's a newer shop.",
      tags: ["Quilting", "Fabric", "Classes", "Closest"] },

    { name: "Beetle and Fred", town: "Beacon", kind: "Quilting", lat: 41.5050, lon: -73.9700,
      address: "171 Main St, Beacon, NY 12508", phone: "845-440-8867", web: "https://beetleandfred.com",
      blurb: "Beacon's modern-leaning fabric shop — unusual quilting cottons, indie-designer patterns, garment fabric, yarn and notions, plus classes (including Sashiko).",
      texture: "The contemporary-quilt option: think modern prints and maker culture rather than traditional calico. Pair it with a Main Street stroll. ~12 miles, across the river.",
      tags: ["Quilting", "Modern", "Classes"] },

    { name: "Quilter's Attic Sewing Center", town: "Pine Bush", kind: "Quilting", lat: 41.6070, lon: -74.3010,
      address: "118 Maple Ave (Route 302), Pine Bush, NY 12566", phone: "845-744-5888", web: "https://quiltersattic.com",
      hours: "Tue 10–3, Wed 1–6, Thu 10–3, Fri 10–3, Sat 10–1; closed Sun–Mon.",
      blurb: "The most substantive true quilt shop in Orange County — Kansas Troubles and batik fabrics, threads, Pfaff and Baby Lock machines, and a deep class program.",
      texture: "The de-facto 'home shop' for area guilds, with beginner-through-advanced classes and machine servicing. Note the short, midweek-heavy hours — plan around them. ~20 miles west.",
      tags: ["Quilting", "Fabric", "Classes", "Machines"] },

    { name: "Quilt Basket", town: "Pawling", kind: "Quilting", lat: 41.5630, lon: -73.6020,
      address: "4D Oak St, Pawling, NY 12564", phone: "845-227-7606", web: "https://quiltbasket.com",
      blurb: "A full-service quilt shop since 1989 — 100% cottons, books, patterns, notions — and a Handi Quilter longarm dealer.",
      texture: "The go-to if your quilter is shopping for or servicing a longarm machine. It downsized from its old Wappingers store to this smaller Pawling shop but kept a strong online presence. ~30 miles east.",
      tags: ["Quilting", "Longarm dealer", "Fabric"] },

    { name: "Hudson Valley Modern Quilt Guild", town: "Beacon / Fishkill / Garrison", kind: "Quilting", lat: 41.5050, lon: -73.9700,
      web: "https://hvmodernquiltguild.com",
      blurb: "The closest quilting guild — meets the 4th Sunday monthly at libraries in Beacon, Fishkill or Garrison, and its service area explicitly includes Orange County.",
      texture: "Founded 2012, modern-quilt focus, with charity sewing and 'Quilt 'til You Wilt' sessions. Email hvmodernquiltguild@gmail.com to confirm the current meeting. For longarm finishing closer to the house, 'Quilts Actually' lists Cornwall in its service area; Quilt Basket (above) is the nearest longarm dealer.",
      tags: ["Quilting", "Guild", "Community"] },

    { name: "Good Books", town: "Cornwall", kind: "Bookstore", lat: 41.4480, lon: -74.0500,
      address: "284 Main St, Cornwall, NY 12518", web: "https://www.goodbooksny.com",
      hours: "Tue–Fri 12–5, Sat 10–5, Sun 1–5 (closed Mon).",
      blurb: "Your closest indie bookstore — a family-owned, community-centered shop on Cornwall's Main Street.",
      texture: "The children's section has bean-bag seating and a careful curation; the shop partners with the Cornwall Public Library on events. (There is no 'Storm King' bookstore in Cornwall — this is the real one.)",
      tags: ["Books", "Kids", "Closest"] },

    { name: "Binnacle Books", town: "Beacon", kind: "Bookstore", lat: 41.5050, lon: -73.9700,
      address: "321 Main St, Beacon, NY 12508", web: "https://www.binnaclebooks.com",
      blurb: "Beacon's beloved new-and-used indie — deep literature, poetry, political history, art and graphic novels.",
      texture: "Tied to the Beacon Prison Books Project, which sends requested books to incarcerated people locally. On the same Main Street as The Beacon movie theater.",
      tags: ["Books", "Used books"] },

    { name: "Split Rock Books", town: "Cold Spring", kind: "Bookstore", lat: 41.4200, lon: -73.9550,
      blurb: "A sky-blue indie steps from the Cold Spring train station, opened in 2018 to fill a decade-long gap after the village's last bookshop closed.",
      texture: "Strong on literary fiction, small presses and local-interest titles — the perfect start to a Cold Spring day on foot.",
      tags: ["Books", "Walkable"] },

    { name: "The Gift Hut", town: "Cold Spring", kind: "Toys", lat: 41.4200, lon: -73.9540,
      address: "86 Main St, Cold Spring, NY 10516", phone: "845-297-3786", web: "https://www.thegifthut.com",
      blurb: "The standout independent toy shop in range, opened in 2000 — Made-in-USA and eco-friendly wooden toys, games and puzzles.",
      texture: "A serious strategy-game wall (chess, backgammon, Katamino, Quarto), engineering model kits, and a grown-up side with blacksmith-made tavern puzzles and local woodwork. A real destination, not a chain — the best of the area's true toy shops.",
      tags: ["Toys", "Wooden toys", "Games"] },

    { name: "Clearwaters Gifts (at Jones Farm)", town: "Cornwall", kind: "Toys", lat: 41.4550, lon: -74.0600,
      address: "190 Angola Rd, Cornwall, NY 12518", web: "https://jonesfarminc.com/clearwaters-gifts",
      hours: "Wed–Sun 8–5.",
      blurb: "The closest toy option to the house, ~3 miles: a huge gift-and-home store in a converted gambrel dairy barn with a dedicated toy room.",
      texture: "Not a pure toy shop, but the toy room overflows with classic games, educational and pretend-play toys and kids' books — and they gift-wrap free. It shares the Jones Farm complex, so you can fold in the bakery and petting zoo.",
      tags: ["Toys", "Gifts", "Closest", "Kids"] },

    { name: "Play Toys & Gifts", town: "Beacon", kind: "Toys", lat: 41.5050, lon: -73.9700,
      address: "167 Main St, Beacon, NY 12508", phone: "845-838-2134", web: "https://www.iloveplaytoys.com",
      hours: "~11–6 (Fri–Sat to 7).",
      blurb: "A curated, eclectic Main Street toy shop in Beacon — games, gadgets and a nostalgic retro streak (Lite-Brite, Spirograph), with novelty gifts and cards.",
      texture: "It leans nostalgic, so it's as fun for parents as kids. A few doors down, Zakka Joy (177 Main St) is a Japanese-style gift shop with plush and quirky toys if you want a second stop.",
      tags: ["Toys", "Retro", "Walkable"] },

    { name: "Margot's Mercantile", town: "Goshen", kind: "Toys", lat: 41.4020, lon: -74.3280,
      address: "170 West Main St, Goshen, NY 10924", web: "https://www.margotsmercantile.com",
      blurb: "A toy-shop-within-a-café in Goshen focused on well-made, screen-free educational toys for toddlers and early-elementary.",
      texture: "Magnetic activity sets, board games and kids' books alongside coffee, snacks and candy — pair toy browsing with a café stop. ~20 miles west.",
      tags: ["Toys", "Educational", "Screen-free"] },

    { name: "Lollipop Toy Shop", town: "Middletown", kind: "Toys", lat: 41.4480, lon: -74.3760,
      address: "Galleria at Crystal Run, 1 Galleria Dr, Middletown, NY 10941", phone: "845-692-8883", web: "https://www.galleriacrystalrun.com/tenants/lollipop-toy-shop",
      hours: "Mall hours (Mon–Sat 10–8/9, Sun 11–6).",
      blurb: "A locally owned general toy store inside the Middletown mall — broad mainstream stock that reviewers liken to a mini Toys R Us.",
      texture: "Independent but mall-based: ride-on toys and all the big brands under one roof. The rainy-day, find-the-birthday-gift option. ~25 miles west.",
      tags: ["Toys", "Big brands", "Rainy day"] },

    { name: "Land of Oz Toys & Gifts", town: "Rhinebeck", kind: "Toys", lat: 41.9270, lon: -73.9120,
      address: "22 East Market St, Rhinebeck, NY 12572", web: "https://www.landofoztoys.com",
      blurb: "A genuine destination indie toy store run by Elena Rose, a trained educator known locally as Rhinebeck's 'Toy Lady' — every product personally vetted.",
      texture: "Strong on science, arts-and-crafts and imaginative play. Worth folding into a Rhinebeck day with Oblong Books. ~33 miles north, across the river.",
      tags: ["Toys", "Educational", "Destination"] },

    { name: "A.L. Stickle Variety Store", town: "Rhinebeck", kind: "Toys", lat: 41.9270, lon: -73.9125,
      address: "13 East Market St, Rhinebeck, NY 12572",
      blurb: "A real working five-and-dime, run by the Stickle family since 1946 — a variety store with a classic-toy and craft section.",
      texture: "Vintage toys line the walls near the ceiling all around the interior (for display, not sale); the live stock runs to classic toys, puzzles, games and craft supplies. A nostalgic stop two doors from Land of Oz.",
      tags: ["Toys", "Five-and-dime", "Classic toys"] },

    { name: "Dragon's Den", town: "Wappingers Falls", kind: "Toys", lat: 41.5800, lon: -73.8900,
      address: "Cambridge Commons, 939 Route 376, Wappingers Falls, NY 12590", web: "https://www.gamersgambit.com",
      blurb: "A serious board-game and tabletop hobby store — Magic, trading cards, RPGs, miniatures and board games — with an in-store play space for tournaments.",
      texture: "The pick for older kids and game-night families, not little ones. ~22 miles, across the river. Check the event calendar for open-play nights.",
      tags: ["Games", "Tabletop", "Older kids"] },

    { name: "Cornwall Collective", town: "Cornwall", kind: "Grocery", lat: 41.4470, lon: -74.0130,
      web: "https://cornwallcollective.us", blurb: "A village kitchen-and-market with locally sourced, seasonal groceries plus ready-to-eat meals — the closest 'village market' option.",
      tags: ["Grocery", "Local", "Prepared food"] },

    { name: "Adams Fairacre Farms", town: "Newburgh", kind: "Grocery", lat: 41.5300, lon: -74.0700,
      address: "1240 NY-300, Newburgh, NY 12550", phone: "845-569-0303", web: "https://adamsfarms.com",
      hours: "Mon–Sat 7–8, Sun 7–7.",
      blurb: "The regional institution: a farm-market-meets-gourmet-grocery with a renowned produce hall, full butcher and seafood counters, cheese, bakery and an enormous garden center.",
      texture: "Locals treat a trip to Adams as an outing, not an errand — especially the seasonal garden-center displays. About seven miles out.",
      tags: ["Grocery", "Destination", "Garden center"] },

    { name: "Hannaford (New Windsor)", town: "New Windsor", kind: "Grocery", lat: 41.4700, lon: -74.0800,
      address: "2636 NY-32, New Windsor, NY 12553", blurb: "The closest full supermarket for everyday shopping, about five miles out, with delivery and pickup.",
      tags: ["Grocery", "Everyday", "Closest supermarket"] },

    { name: "ShopRite of Vails Gate", town: "Vails Gate", kind: "Grocery", lat: 41.4300, lon: -74.1000,
      address: "384 Windsor Hwy, Vails Gate, NY 12584", blurb: "Full-size supermarket a few miles southwest, an alternative to Hannaford.",
      tags: ["Grocery", "Everyday"] },

    { name: "Quattro's Farm Store", town: "Pleasant Valley", kind: "Specialty", lat: 41.7400, lon: -73.8100,
      address: "2251 Route 44, Pleasant Valley, NY 12569", phone: "845-635-2018", web: "https://quattrosfarm.com",
      blurb: "A family poultry-and-game farm since 1972: farm-raised chicken, duck, turkey, pheasant, goose and venison, plus farm-fresh eggs and an Italian deli with house-smoked meats.",
      texture: "The classic Hudson Valley Thanksgiving turkey source — order well ahead. About 25–30 miles northeast, in Dutchess County.",
      tags: ["Butcher", "Eggs", "Thanksgiving"] },

    /* ---- everyday & specialty (closest first) ---- */
    { name: "GHS Jewelers", town: "Cornwall-on-Hudson", kind: "Jewelry", lat: 41.4447, lon: -74.0103,
      address: "1 Idlewild Ave #1, Cornwall-on-Hudson, NY 12520", phone: "845-213-3180", web: "https://www.ghsjewelers.com",
      hours: "Roughly Tue–Sat 10–5:30 (Sat closes earlier) — call ahead.",
      blurb: "The only jeweler in the village — woman-owned since 1981, dealing in antique, estate and modern pieces with on-site custom work and repair.",
      texture: "About a mile from the house. Estate and antique jewelry plus full custom design and repairs you'd otherwise drive to Cold Spring for.",
      tags: ["Jewelry", "Estate", "Repair", "Closest"] },

    { name: "Bryan's Bikes", town: "Cornwall", kind: "Bikes", lat: 41.4399, lon: -74.0192,
      address: "240 Main St, Cornwall, NY 12518", phone: "845-534-5230", web: "https://www.bryansbikes.com",
      hours: "Tue–Fri 11–5, Sat 10–5; closed Sun–Mon.",
      blurb: "The closest bike shop — full sales and service for road, mountain, kids' and e-bikes, plus parts and helmets.",
      texture: "On the Cornwall Main Street strip. Repairs and bike fitting alongside new bikes — the place to outfit the family for the rail trails.",
      tags: ["Bikes", "Repair", "E-bikes"] },

    { name: "Hazard's Pharmacy", town: "Cornwall", kind: "Pharmacy", lat: 41.4391, lon: -74.0205,
      address: "290 Main St, Cornwall, NY 12518", phone: "845-534-4345", web: "https://www.mygnp.com/pharmacies/hazards-pharmacy-cornwall-ny-12518-1579/",
      hours: "Mon–Fri 9:30–6, Sat 9:30–1; closed Sun.",
      blurb: "The locally owned independent pharmacy — prescriptions, compounding, immunizations and real counseling.",
      texture: "The independent alternative to CVS, on Main Street. Does compounding and medication flavoring the chains skip; tight weekend hours.",
      tags: ["Pharmacy", "Independent", "Compounding"] },

    { name: "CVS Pharmacy", town: "Cornwall", kind: "Pharmacy", lat: 41.4509, lon: -74.0381,
      address: "65 Quaker Ave, Cornwall, NY 12518", web: "https://www.cvs.com/store-locator/cornwall-ny-pharmacies/65-quaker-ave-cornwall-ny-12518/storeid=5053",
      hours: "Daily, extended pharmacy and store hours.",
      blurb: "The chain drugstore with the area's most convenient extended hours for prescriptions and everyday essentials.",
      texture: "On the Quaker Ave strip near ShopRite — the default for an evening or Sunday pharmacy run.",
      tags: ["Pharmacy", "Chain", "Late hours"] },

    { name: "Merritt Florist", town: "Cornwall", kind: "Florist", lat: 41.4396, lon: -74.0210,
      address: "275 Main St, Cornwall, NY 12518", phone: "845-534-2551", web: "https://www.merrittflorist.com",
      blurb: "The hometown flower shop since 1956 — fresh-cut flowers, custom arrangements, weddings and same-day local delivery.",
      texture: "Closest florist to the house; delivers across Cornwall, Newburgh, New Windsor, Vails Gate and West Point.",
      tags: ["Florist", "Delivery", "Weddings"] },

    { name: "Cornwall Coffee Co. & Mercantile", town: "Cornwall", kind: "Gifts", lat: 41.4386, lon: -74.0216,
      address: "310 Main St, Cornwall, NY 12518", phone: "845-401-2002", web: "https://www.cornwallcoffeeco.com",
      blurb: "A coffee bar paired with a mercantile of heritage home goods and giftable brands.",
      texture: "Doubles as a grab-a-gift stop on a coffee run, right on Main Street.",
      tags: ["Gifts", "Home goods", "Coffee"] },

    { name: "Cornwall Wines & Spirits", town: "Cornwall", kind: "Wine & liquor", lat: 41.4512, lon: -74.0379,
      address: "45 Quaker Ave, Ste 102, Cornwall, NY 12518", phone: "845-534-5140", web: "https://cornwallwines.com",
      hours: "Mon–Sat 9–9, Sun 11–7.",
      blurb: "The closest full-service wine and liquor store — broad selection, rewards program and a wine-of-the-month club.",
      texture: "In the Quaker Ave shopping plaza near CVS and ShopRite.",
      tags: ["Wine", "Liquor", "Closest"] },

    { name: "The Computer Shop HVNY", town: "Cornwall", kind: "Electronics", lat: 41.4399, lon: -74.0192,
      address: "Main St, Cornwall, NY 12518 (confirm)",
      blurb: "A Main Street shop for computer, Mac, tablet and smartphone repair and sales.",
      texture: "The local fix-it option instead of driving to a New Windsor big-box — confirm the exact address and hours before going.",
      tags: ["Electronics", "Repair", "Local"], confidence: "medium" },

    { name: "Positively Pets", town: "New Windsor", kind: "Pet & feed", lat: 41.4736, lon: -74.0289,
      address: "152 Windsor Hwy, New Windsor, NY 12553", phone: "845-565-0722", web: "https://www.positivelypetsny.com",
      blurb: "The independent pet store — American-made and raw foods, treats, toys, supplies and homeopathic remedies.",
      texture: "More curated and knowledgeable than the chains; strong on raw-feeding and natural food.",
      tags: ["Pet", "Raw food", "Independent"] },

    { name: "Pet Supplies Plus", town: "New Windsor", kind: "Pet & feed", lat: 41.4486, lon: -74.0764,
      address: "113 Temple Hill Rd, Ste 600, New Windsor, NY 12553", phone: "845-245-4487", web: "https://www.petsuppliesplus.com",
      blurb: "The big-box pet-supply option near Vails Gate, with a wide selection and self-serve dog wash.",
      texture: "The volume play for bulk litter and big bags of kibble on the Temple Hill Rd strip.",
      tags: ["Pet", "Chain"] },

    { name: "Tractor Supply Co.", town: "New Windsor", kind: "Pet & feed", lat: 41.4799, lon: -74.0807,
      address: "Route 300 area, New Windsor, NY 12553 (confirm)", web: "https://www.tractorsupply.com/tsc/store_NewWindsor-NY-12553_2059",
      blurb: "Farm-and-ranch store for livestock and poultry feed, pet food and country-living supplies.",
      texture: "Where you go for chicken feed and bulk animal supplies; verify the exact street address before a trip.",
      tags: ["Feed", "Farm supply", "Pet"], confidence: "medium" },

    { name: "Wine O'clock Wine & Liquor", town: "New Windsor", kind: "Wine & liquor", lat: 41.4799, lon: -74.0466,
      address: "436 Blooming Grove Tpke, New Windsor, NY 12553",
      blurb: "A New Windsor wine and spirits shop with a broad range, open seven days.",
      texture: "A solid alternative if you're already on the New Windsor side.",
      tags: ["Wine", "Liquor"], confidence: "medium" },

    { name: "New Windsor Pharmacy & Home Healthcare", town: "New Windsor", kind: "Pharmacy", lat: 41.4736, lon: -74.0289,
      address: "New Windsor, NY 12553 (confirm)", web: "https://newwindsorpharmacy.com",
      blurb: "An independent pharmacy and home-healthcare center carrying medications plus home health supplies and equipment.",
      texture: "The closest spot for durable medical supplies — canes, braces, home-health gear — with free prescription delivery. Confirm the street address.",
      tags: ["Pharmacy", "Medical supply", "Home health"], confidence: "medium" },

    { name: "AutoZone", town: "New Windsor", kind: "Auto parts", lat: 41.4527, lon: -74.0758,
      address: "1013 State Route 94, New Windsor, NY 12553", web: "https://www.autozone.com/locations/ny/new-windsor/1013-state-route-94.html",
      blurb: "National auto-parts chain for batteries, oil, wipers, brakes and DIY repair supplies.",
      texture: "On Route 94 near Vails Gate; pairs with the O'Reilly a short hop away on Temple Hill Rd.",
      tags: ["Auto parts", "DIY"] },

    { name: "O'Reilly Auto Parts", town: "New Windsor", kind: "Auto parts", lat: 41.4486, lon: -74.0772,
      address: "120 Temple Hill Rd, New Windsor, NY 12553", web: "https://locations.oreillyauto.com/en-us/ny/newwindsor/autoparts-5988.html",
      blurb: "Auto-parts store for batteries, brakes, oil and filters with in-store help for routine maintenance.",
      texture: "Temple Hill Rd corridor near Vails Gate, alongside Pet Supplies Plus.",
      tags: ["Auto parts", "DIY"] },

    { name: "The Vitamin Shoppe", town: "Newburgh", kind: "Health & supplements", lat: 41.5093, lon: -74.0689,
      address: "1217 Route 300, Newburgh, NY 12550", phone: "845-567-1850", web: "https://locations.vitaminshoppe.com/ny/newburgh/",
      hours: "Mon–Sat 8:30–9, Sun 9–7.",
      blurb: "The area's main dedicated supplements store — vitamins, protein, sports nutrition and natural-beauty.",
      texture: "On the busy Route 300 retail strip in Newburgh.",
      tags: ["Vitamins", "Supplements"] },

    { name: "Mekeel's Music Shop", town: "Newburgh", kind: "Music", lat: 41.5031, lon: -74.0633,
      address: "47 S Plank Rd, Ste 2, Newburgh, NY 12550", phone: "845-562-5566",
      hours: "Mon–Sat 10–5:30; closed Sun.",
      blurb: "The nearest real instrument store — band-instrument rentals plus on-site repair for strings, brass and woodwinds.",
      texture: "Teacher-approved student rentals and an in-house repair bench; closer than Music & Arts in Monroe.",
      tags: ["Music", "Instruments", "Rentals", "Repair"] },

    { name: "Newburgh Art Supply", town: "Newburgh", kind: "Art & craft", lat: 41.5025, lon: -74.0103,
      address: "5 Grand St, Newburgh, NY 12550", phone: "845-561-5552", web: "https://www.facebook.com/NewburghArtSupply/",
      hours: "Mon–Thu 10–6, Fri 11–7, Sat 10–6; closed Sun.",
      blurb: "An independent art-supply store in Newburgh's East End serving local artists and students.",
      texture: "The closest dedicated art supplier — a genuine local store in the historic district.",
      tags: ["Art supplies", "Local"] },

    { name: "Newburgh Mercantile (Gifts & Framing)", town: "Newburgh", kind: "Gifts", lat: 41.5028, lon: -74.0100,
      address: "75 Broadway, Newburgh, NY 12550", web: "https://www.newburghmercantileny.com",
      blurb: "A gift shop and custom-framing studio in a restored historic firehouse, with archival framing by a veteran framer.",
      texture: "The closest serious custom framer — walk in for a quote, no appointment.",
      tags: ["Gifts", "Framing", "Custom"] },

    { name: "Michaels", town: "Newburgh", kind: "Art & craft", lat: 41.5099, lon: -74.0712,
      address: "1245 Route 300, Ste 1, Newburgh, NY 12550", web: "https://locations.michaels.com/ny/newburgh/5717",
      blurb: "The all-purpose arts-and-crafts big-box — craft supplies, art materials and framing.",
      texture: "On Route 300 when you need supplies fast and cheap.",
      tags: ["Craft", "Art supplies", "Framing", "Chain"] },

    { name: "Madison Avenue Fine Children's Clothing", town: "Cornwall", kind: "Clothing", lat: 41.4404, lon: -74.0186,
      address: "246 Main St, Cornwall, NY 12518", phone: "845-534-2222", web: "https://www.madisonavenuecornwall.com",
      blurb: "A long-running Main Street boutique for upscale children's clothing, baby gifts and small toys.",
      texture: "The go-to for a kid's-birthday or new-baby gift without driving to a mall; they'll wrap it.",
      tags: ["Kids", "Clothing", "Baby gifts"] },

    { name: "Newburgh Mall", town: "Newburgh", kind: "Malls & outlets", lat: 41.5135, lon: -74.0689,
      address: "1401 Route 300, Newburgh, NY 12550", web: "https://www.newburghmall.com",
      blurb: "A smaller regional mall, now anchored by the Resorts World Hudson Valley casino, Office Depot and 60-plus specialty stores.",
      texture: "A shadow of its former self since Sears closed in 2022, but the closest enclosed mall and a useful Route 300 landmark.",
      tags: ["Mall", "Orientation"] },

    { name: "Galleria at Crystal Run", town: "Middletown", kind: "Malls & outlets", lat: 41.4699, lon: -74.3690,
      address: "1 N Galleria Dr, Middletown, NY 10941", web: "https://www.galleriacrystalrun.com",
      blurb: "The closest full enclosed mall — 100-plus stores including Macy's, JCPenney, Target, H&M and a 16-screen AMC.",
      texture: "About 25–30 minutes west; the department-store-and-a-movie option.",
      tags: ["Mall", "Department stores", "Movies"] },

    { name: "Woodbury Common Premium Outlets", town: "Central Valley", kind: "Malls & outlets", lat: 41.3179, lon: -74.1235,
      address: "498 Red Apple Ct, Central Valley, NY 10917", phone: "845-928-4000", web: "https://www.premiumoutlets.com/outlet/woodbury-common",
      hours: "Daily 10–9 (seasonal variation).",
      blurb: "A major outdoor outlet destination — around 250 luxury and mainstream brands from Gucci and Burberry to Nike.",
      texture: "About 20 miles southwest off I-87 Exit 16. Plan a half-day, wear comfortable shoes and expect crowds and tour buses on weekends.",
      tags: ["Outlets", "Luxury", "Destination"] },

    { name: "Joseph's Fine Jewelry", town: "Cold Spring", kind: "Jewelry", lat: 41.4201, lon: -73.9543,
      address: "171 Main St, Cold Spring, NY 10516",
      blurb: "A Main Street fine-jewelry shop in the Cold Spring antiques-and-boutique district.",
      texture: "Across the river — pair it with a day wandering Cold Spring's Main Street shops.",
      tags: ["Jewelry", "Cold Spring"], confidence: "medium" },

    { name: "Lewis & Pine", town: "Beacon", kind: "Jewelry", lat: 41.5048, lon: -73.9698,
      address: "Main St, Beacon, NY 12508 (confirm number)", web: "https://www.lewisandpine.com",
      blurb: "An artist-run jewelry and apothecary shop on Beacon's Main Street, specializing in delicate handmade pieces.",
      texture: "Worth folding into a Beacon Main Street browse; confirm the exact street number before going.",
      tags: ["Jewelry", "Handmade", "Beacon"], confidence: "medium" },

    { name: "Blackbird Attic", town: "Beacon", kind: "Clothing", lat: 41.5046, lon: -73.9712,
      address: "Main St, Beacon, NY 12508 (confirm number)", web: "https://www.facebook.com/BlackbirdAttic/",
      blurb: "A curated consignment boutique on Beacon's Main Street mixing modern and vintage fashion.",
      texture: "The notable consignment-clothing stop across the river; verify current hours.",
      tags: ["Consignment", "Vintage", "Clothing"], confidence: "medium" }
  ],

  /* ---------------- MOVIES ---------------- */
  movies: [
    { name: "The Beacon (formerly Story Screen)", town: "Beacon", kind: "Cinema", lat: 41.5050, lon: -73.9670,
      address: "445 Main St, Beacon, NY 12508", web: "https://www.beaconmovietheater.com",
      blurb: "An independent Main Street theater showing both blockbusters and indie/foreign films — the heart of Beacon's walkable downtown.",
      texture: "Founder Mike Burdge left in 2023 to open a Story Screen in Hudson; the original Beacon house continues under new ownership as 'The Beacon.' Pair a show with Binnacle Books up the street.",
      tags: ["Indie", "Walkable", "Closest cinema"] },

    { name: "Warwick Drive-In", town: "Warwick", kind: "Drive-in", lat: 41.2700, lon: -74.3700,
      address: "5 Warwick Tpke, Warwick, NY 10990", phone: "845-986-4440", web: "https://warwickdrivein.com",
      hours: "Nightly in season, showtimes ~7–11:30pm.",
      blurb: "Operating since 1950, now three screens — the closest true drive-in, double features and a classic snack bar.",
      texture: "The full Americana experience about 25 miles southwest. Cash-friendly; arrive early on summer weekends to claim a spot.",
      tags: ["Drive-in", "Seasonal", "Americana"] },

    { name: "Fair Oaks Drive-In", town: "Middletown", kind: "Drive-in", lat: 41.5000, lon: -74.4200,
      web: "https://fairoaksdrivein.simpletix.com", blurb: "A Middletown drive-in known for genuinely good made-to-order food — burgers, fries, mozzarella sticks, empanadas, cheesesteaks.",
      texture: "Often dark on certain holidays (e.g. Memorial Day) — check the night before driving out. Tickets online.",
      tags: ["Drive-in", "Good food"] },

    { name: "Overlook Drive-In", town: "Poughkeepsie", kind: "Drive-in", lat: 41.6500, lon: -73.9500,
      blurb: "Established 1955, with a screen as tall as a six-story building — billed as the largest drive-in screen in the tri-state area.",
      texture: "Sat out the 2025 season but is back for 2026 — verify the current schedule before going.",
      tags: ["Drive-in", "Huge screen"] },

    { name: "Regal Galleria", town: "Poughkeepsie", kind: "Multiplex", lat: 41.6500, lon: -73.9300,
      web: "https://www.regmovies.com", blurb: "The nearest reliable first-run multiplex, across the river in Poughkeepsie.",
      access: "Runs 'My Way Matinee' sensory-friendly screenings chain-wide — lights up, sound down. The most dependable sensory-friendly movie option in range; check the Poughkeepsie schedule.",
      tags: ["First-run", "Sensory-friendly"] }
  ],

  /* ---------------- SPECTRUM SERVICES ---------------- */
  spectrum: [
    { name: "OPWDD 'Front Door' (start here)", town: "New York State", kind: "Intake", lat: null, lon: null,
      phone: "866-946-9733", web: "https://opwdd.ny.gov/get-started/eligibility",
      blurb: "Autism is a qualifying classification for New York's Office for People With Developmental Disabilities. Eligibility here unlocks care coordination and services.",
      texture: "The regional Hudson Valley DDSO office is 914-332-8981. Families view introductory 'Front Door' videos as part of the process. Ask the intake social worker for current local parent-support groups.",
      tags: ["Start here", "Eligibility"] },

    { name: "Access: Supports for Living", town: "Middletown", kind: "Provider", lat: 41.4450, lon: -74.4230,
      address: "24 Union St, Middletown, NY 10940", web: "https://accesssupports.org",
      blurb: "A large regional nonprofit serving 16 counties: behavioral health, developmental-disability supports, therapy, psychiatric and medication management, and care coordination.",
      texture: "Accepts most major insurance including Medicaid/Medicare, with a sliding scale. Confirm which specific pediatric autism services (e.g. ABA) run at the Middletown site versus other locations.",
      tags: ["Provider", "Care coordination"] },

    { name: "Center for Spectrum Services", town: "Kingston / Ellenville", kind: "Specialist school", lat: 41.9300, lon: -74.0000,
      web: "https://centerforspectrumservices.org",
      blurb: "Center-based special-education schools (Kingston ages 3–12, Ellenville ages 3–8) serving 30+ Mid-Hudson districts since 1976.",
      texture: "Its Outreach Program offers diagnostic evaluations for all ages, parent and professional training, and social-skills groups — a key regional specialist even though it's at the edge of the radius.",
      tags: ["Diagnosis", "School", "Social skills"] },

    { name: "Anderson Center for Autism", town: "Staatsburg", kind: "Specialist", lat: 41.8600, lon: -73.9200,
      address: "4885 Route 9, Staatsburg, NY 12580", phone: "845-889-9200", web: "https://www.andersoncenterforautism.org",
      blurb: "A century-old flagship NY autism institution: residential school (ages 5–21), adult day-hab, diagnostic assessment, speech, OT, PT and psychological services.",
      texture: "Also certifies community partners for sensory-friendly programming — including the Mid-Hudson Children's Museum's monthly Sensory Hours.",
      tags: ["Diagnosis", "Therapy", "Residential"] },

    { name: "Cornerstone Family Healthcare", town: "Newburgh", kind: "Medical", lat: 41.5030, lon: -74.0100,
      address: "147 Lake St, Newburgh, NY 12550", web: "https://cornerstonefamilyhealthcare.org",
      blurb: "A federally qualified health center with pediatrics plus integrated behavioral health — a good entry point for developmental screening and referral, about six miles out.",
      texture: "Confirm scope by phone: a primary-care-level screening and referral hub rather than a standalone ABA program.",
      tags: ["Pediatrics", "Screening"] },

    { name: "Cornwall Central School District — CSE", town: "Cornwall", kind: "School", lat: 41.4450, lon: -74.0400,
      web: "https://www.cornwallschools.com",
      blurb: "The Committee on Special Education / Preschool Special Education is the statutory route to an IEP and in-school OT, speech and PT.",
      texture: "Contact the district's Pupil Personnel Services office directly for the current CSE chair and intake process, and ask about local adaptive-recreation options.",
      tags: ["School", "IEP"] }
  ],

  /* ---------------- CURIOSITIES (the Atlas Obscura layer) ---------------- */
  curiosities: [
    { name: "Edward Payson Roe’s ‘Near to Nature’s Heart’ boulder", town: "Cornwall-on-Hudson", kind: "Tiny landmark", lat: 41.4460, lon: -74.0220,
      blurb: "The most hyper-local oddity you have, ~1 mile away: the boulder the 19th-century bestselling novelist and horticulturist Edward Payson Roe rested on after his hikes.",
      texture: "On Memorial Day 1894 his fans bolted a bronze tablet to it — ‘Near to Nature’s Heart,’ engraved with chestnut branches — over a sweeping view of Newburgh Bay. A short, easy trail in a free public park.",
      tags: ["Free", "Easy walk", "Kid-friendly"] },

    { name: "Jed’s Godzilla shrine", town: "Cold Spring", kind: "Oddity", lat: 41.4200, lon: -73.9540,
      address: "Main St & Rock St, Cold Spring", web: "https://www.atlasobscura.com/places/jeds-godzilla",
      blurb: "From a distance it’s a typical roadside ‘bathtub Mary’ yard shrine — but the figure inside is Godzilla, ringed by plastic dinosaurs.",
      texture: "It’s a lovingly tended memorial to Jed Dellarmi, a local teenage musician killed in 1996 — repainted, toys rearranged, Godzilla’s lost arm repaired. Free, roadside, a quick stop. The single weirdest small thing around.",
      tags: ["Free", "Roadside", "Quick stop"] },

    { name: "Ruins of the Cornish Estate (Northgate)", town: "Cold Spring", kind: "Ruins", lat: 41.4300, lon: -73.9690,
      address: "Trailhead at Little Stony Point, Route 9D, Cold Spring", web: "https://www.atlasobscura.com/places/ruins-of-the-cornish-estate",
      blurb: "A doomed-romance ruin in the woods: the Cornishes moved here in 1917, the mansion burned in the 1950s, and the forest reclaimed a roofless stone shell, a pool and a greenhouse.",
      texture: "Interpretive signs added ~2020 show the old photos. Easy: under a mile each way, mostly along the old concrete driveway, ~300 ft of gain. Free, no permit — good for kids who can do a gentle mile.",
      tags: ["Free", "Short hike", "Ruins"] },

    { name: "The Chapel of Our Lady Restoration", town: "Cold Spring", kind: "Tiny landmark", lat: 41.4185, lon: -73.9555,
      address: "45 Market St, Cold Spring, NY 10516", web: "https://chapelrestoration.org",
      blurb: "A tiny 1833 Greek Revival chapel perched right on the river opposite the train station, columns framing a view to West Point and Bear Mountain.",
      texture: "The first Catholic church north of Manhattan, built for the Irish workers of the West Point Foundry and designed by a 19-year-old; rescued from ruin by volunteers in 1971. Grounds free in daylight; Sunday music and sunset-reading series.",
      tags: ["Free", "Riverside", "Historic"] },

    { name: "Mount Beacon Incline Railway ruins & fire tower", town: "Beacon", kind: "Ruins", lat: 41.4940, lon: -73.9450,
      address: "Trailhead off Howland Ave / Route 9D, Beacon",
      web: "https://www.atlasobscura.com/places/mount-beacon-incline-railway",
      blurb: "From 1902–1978 the world’s steepest passenger incline railway hauled visitors up Mount Beacon; a 1983 fire finished it off.",
      texture: "You climb the old rail bed to the concrete powerhouse ruins, then can push on to the restored fire tower for huge valley views. Strenuous — the first mile gains ~1,000 ft steeply; full out-and-back ~4 mi. Better for fit/older kids; the lower ruins are reachable without the full climb.",
      tags: ["Free", "Strenuous hike", "Views"] },

    { name: "Dennings Point Brickworks ruins", town: "Beacon", kind: "Ruins", lat: 41.4940, lon: -73.9650,
      address: "End of Dennings Ave, Beacon", web: "https://www.atlasobscura.com/places/dennings-point-ruins",
      blurb: "Brick ruins on a wooded river point — the works fired a million bricks a week until the clay ran out in 1939.",
      texture: "Dennings Point bricks are in the Empire State Building and Rockefeller Center. Flat ~1.2-mile trail, easy and kid-friendly. Note: the point closes Dec 15–Mar 15 for roosting bald eagles.",
      tags: ["Free", "Easy walk", "Seasonal"] },

    { name: "Motorcyclepedia Museum", town: "Newburgh", kind: "Quirky museum", lat: 41.5030, lon: -74.0100,
      address: "250 Lake St, Newburgh, NY 12550", web: "https://www.motorcyclepediamuseum.org",
      hours: "Thu 4–8, Fri–Sun 10–4. Adults $11, kids 3–12 $5.",
      blurb: "A giant warehouse of 600+ mostly-American motorcycles, heavy on early-1900s Indians — plus two vintage ‘Wall of Death’ motordromes. ~10 miles.",
      texture: "The motordromes alone are worth it: the near-vertical wooden barrels daredevils once rode around. Very kid-friendly.",
      tags: ["Quirky museum", "Kid-friendly", "Indoor"] },

    { name: "Brotherhood Winery — America’s oldest winery", town: "Washingtonville", kind: "Superlative", lat: 41.4280, lon: -74.1660,
      address: "100 Brotherhood Plaza Dr, Washingtonville, NY 10992", web: "https://www.brotherhood-winery.com",
      hours: "Tours Tue–Sun, first-come, no reservation.",
      blurb: "Founded 1839, it survived Prohibition making sacramental wine and claims America’s first commercial winery, first champagne and first winery tours. ~12 miles.",
      texture: "The draw is the hand-excavated underground cellars — 14 feet down through dim vaults of oak barrels and some of the oldest vintages in the country. The cellar tour is fine for kids; tastings, of course, are not.",
      tags: ["Superlative", "Tours", "Drink with a story"] },

    { name: "Harness Racing Museum & Hall of Fame", town: "Goshen", kind: "Quirky museum", lat: 41.4020, lon: -74.3250,
      address: "240 Main St, Goshen, NY 10924", web: "https://www.harnessmuseum.com",
      hours: "Tue–Sat 10–4. Adults $10, kids 4–12 $5.",
      blurb: "An oddly specific Hall of Fame devoted to trotters and pacers, in a 1913 stable — with a 3D simulator that puts you in a racing sulky. ~18 miles.",
      texture: "A few blocks from Goshen Historic Track, the oldest active harness track in the country. The simulator is the kid magnet.",
      tags: ["Quirky museum", "Kid-friendly"] },

    { name: "Museum Village", town: "Monroe", kind: "Quirky museum", lat: 41.3170, lon: -74.2130,
      address: "1010 Route 17M, Monroe, NY 10950", web: "https://www.museumvillage.org",
      hours: "Seasonal (~mid-Apr to mid-Nov), weekends. Confirm before going.",
      blurb: "An open-air 19th-century living-history village — blacksmith, weaver, schoolhouse, candle shop — with a genuinely odd centerpiece. ~16 miles.",
      texture: "That centerpiece: a complete mastodon skeleton, reportedly one of only three full ones in the world. Very kid-friendly.",
      tags: ["Quirky museum", "Kid-friendly", "Seasonal"] },

    { name: "Wing’s Castle", town: "Millbrook", kind: "Castle / folly", lat: 41.8250, lon: -73.6650,
      address: "717 Bangall Rd, Millbrook, NY 12545", phone: "845-677-9085",
      blurb: "A hand-built fantasy castle that Peter and Toni Wing spent ~22 years assembling from ~85% salvaged materials — a ship’s bow over the dining room, a moat, cigar-store Indians. ~32 miles.",
      texture: "Turrets are topped with cups made from toilet parts; it was on HGTV’s ‘Extreme Homes.’ Seasonal guided tours with limited hours — call ahead. Fun for kids who like the whimsical-macabre.",
      tags: ["Castle", "Seasonal", "Call ahead"] },

    { name: "Gnome Chomsky, once the world’s largest garden gnome", town: "Kerhonkson", kind: "Oddity", lat: 41.7760, lon: -74.2990,
      address: "Kelder’s Farm, 5755 Route 209, Kerhonkson, NY 12446", web: "https://www.atlasobscura.com/places/gnome-chomsky",
      blurb: "A 13′6″ garden gnome, Guinness-certified world’s largest in 2007 (since demoted to third). ~40 miles, at the edge of the range.",
      texture: "He anchors a mini-golf hole on a working farm with a petting zoo and pick-your-own — so it’s a half-day, not just a photo. Seasonal farm hours.",
      tags: ["Oddity", "Kid-friendly", "Worth the drive"] },

    { name: "Balanced Rock", town: "North Salem", kind: "Natural oddity", lat: 41.3300, lon: -73.5750,
      address: "Titicus Rd (Route 116), North Salem, NY 10560",
      blurb: "A ~60-ton granite glacial erratic perched on small pointed stones, locally mythologized and debated as a possible ancient dolmen. ~30 miles southeast.",
      texture: "Free, roadside, a quick kid-friendly stop off I-84’s Pawling exit — equal parts geology and folklore.",
      tags: ["Free", "Roadside", "Natural oddity"] },

    { name: "Angry Orchard Cider House", town: "Walden", kind: "Drink with a story", lat: 41.5870, lon: -74.1550,
      address: "2241 Albany Post Rd, Walden, NY 12586", web: "https://www.angryorchard.com/visit-us",
      blurb: "The largest cider maker in the U.S., on a real apple orchard, with a treehouse tasting room built by Pete Nelson of ‘Treehouse Masters.’ ~14 miles.",
      texture: "Barrel-room tours, a can-in-hand orchard walk, food and live music; the grounds are family-friendly even though tastings are for adults.",
      tags: ["Drink with a story", "Orchard", "Family grounds"] },

    { name: "Tuthilltown Spirits / Hudson Whiskey", town: "Gardiner", kind: "Drink with a story", lat: 41.6830, lon: -74.1800,
      address: "14 Grist Mill Ln, Gardiner, NY 12525", web: "https://www.tuthilltown.com",
      blurb: "New York’s first whiskey distillery since Prohibition (2003), in a historic gristmill at the foot of the Shawangunks. ~25 miles.",
      texture: "The founders’ fight to allow tastings literally spawned NY’s 2007 Farm Distillery Act and the state’s craft-distilling boom. Tasting room, tours and cocktail classes. Adults.",
      tags: ["Drink with a story", "Distillery", "Adults"] }
  ],

  /* ---------------- COMMUTE ---------------- */
  commute: [
    { mode: "train", name: "Drive to Beacon + Hudson Line (fastest)", link: "https://www.mta.info/schedules/metro-north/hudson", linkLabel: "MTA Hudson Line",
      stats: [ { n: "~80–90m", l: "Train to GCT" }, { n: "~25m", l: "Drive to Beacon" }, { n: "Frequent", l: "Multiple/hr peak" } ],
      body: [
        "Cross the Newburgh-Beacon Bridge (I-84 East) to Beacon station — about 20–30 minutes — then ride Metro-North's Hudson Line to Grand Central in roughly 80–90 minutes. The bridge has an E-ZPass toll.",
        "Beacon station parking is paid weekdays (free weekends/holidays) and lots fill early on weekday mornings, so arrive ahead. This is what most serious west-side commuters do: the best frequency and speed of any option.",
        "An August 2025 proposal cited a Beacon↔Grand Central round trip around $50; off-peak runs roughly 26% cheaper than peak. Get exact fares from the MTA TrainTime app."
      ] },

    { mode: "bus", name: "Free Bridge Shuttle + Hudson Line (no driving across)", link: "https://leprechaunlines.com/stewart-newburgh-beacon-shuttle/", linkLabel: "Bridge shuttle info",
      stats: [ { n: "FREE", l: "Through 2026" }, { n: "~65/day", l: "Trips" }, { n: "Timed", l: "To trains" } ],
      body: [
        "Important 2026 change: the Newburgh-Beacon passenger FERRY is permanently gone (winter ice damaged the Beacon dock in 2025). Any older guide telling you to take the ferry is wrong.",
        "It's been replaced by an enhanced free bridge-shuttle bus (Leprechaun Lines for NYSDOT) that began January 2, 2026 — about 65 daily trips, express via Stewart Airport and the Route 17K park-and-ride, plus a local route through downtown Newburgh, all timed to Beacon trains.",
        "Free through at least the end of 2026. This is how a west-side resident reaches the Hudson Line without driving across the bridge or paying to park at Beacon."
      ] },

    { mode: "train", name: "Salisbury Mills-Cornwall, Port Jervis Line (closest, no bridge)", link: "https://www.mta.info/schedules/metro-north/port-jervis", linkLabel: "MTA Port Jervis Line",
      stats: [ { n: "~10–15m", l: "Drive to station" }, { n: "~1:40–2:00", l: "To Penn" }, { n: "~Every 2h", l: "Limited" } ],
      body: [
        "Salisbury Mills-Cornwall (1600 NY-94) is the closest station to the house — about 10–15 minutes, no river crossing, with a large 677-space park-and-ride.",
        "But the honest tradeoff: the Port Jervis Line is operated by NJ Transit and runs south to Secaucus, where you transfer to an NJ Transit train into Penn Station. Realistically 1:40–2:00 door-to-Penn, and trains run only about every two hours, clustered at peak.",
        "Best for someone whose schedule fits the sparse timetable and who works near Penn Station."
      ] },

    { mode: "bus", name: "ShortLine bus to Port Authority (one seat, no transfer)", link: "https://www.coachusa.com/shortline/schedules", linkLabel: "Coach USA ShortLine",
      stats: [ { n: "~1:40–2:00", l: "To PABT" }, { n: "No transfer", l: "One seat" }, { n: "17K", l: "Park & ride" } ],
      body: [
        "Coach USA ShortLine runs from the Newburgh Transportation Center (60 Route 17K, ~10–15 min away) straight to Port Authority Bus Terminal — a one-seat ride landing at the 3rd-floor gates, no rail transfer.",
        "Roughly 1:40–2:00 depending on traffic, more frequent at rush hour (often ~every 3 hours off-peak). Buy tickets at coachusa.com/shortline or onboard.",
        "The last published fare sheet (2018) showed about $19.30 one-way; current fares are higher — confirm live, as Coach USA has trimmed Hudson Valley schedules."
      ] },

    { mode: "car", name: "Drive the whole way", link: "", linkLabel: "",
      stats: [ { n: "~57mi", l: "To Midtown" }, { n: "70m–2h+", l: "With traffic" }, { n: "$$$", l: "Tolls + congestion" } ],
      body: [
        "US-9W/NY-32 to the I-87 NY State Thruway south (or the truck-free Palisades Parkway), then the George Washington Bridge or Lincoln Tunnel — about 57 miles, 70 minutes with no traffic but 1.5–2+ hours at rush hour.",
        "Budget well above old figures: on top of the Thruway and a Hudson River crossing toll, since 2025 there's the Manhattan congestion charge for driving below 60th Street. Most regular commuters park-and-ride at Beacon or 17K instead."
      ] }
  ],
  commuteNote: "Fares, schedules and tolls change often — these are last-verified June 2026. Tap through to mta.info, coachusa.com, njtransit.com and the NYSDOT bridge-shuttle page for live numbers.",

  /* ---------------- EVENTS ----------------
     datedEvents: specific 2026 dates. The app sorts them chronologically and
     drops any whose date has passed (using the device's real date), so the
     "Coming up" list always reflects what's actually ahead. Snapshot June 2026 —
     verify before going; medium-confidence dates carry a note.
     mi = approx miles from the house (for the radius toggle). drive:true = beyond 30mi. */
  eventsNote: "“Coming up” lists confirmed 2026 dates and is a snapshot from June 2026 — the app hides events once they've passed, so it thins out over the year. Tap a live calendar at the bottom for the latest. Concert dates marked “verify” came from ticket aggregators; confirm with the venue.",

  datedEvents: [
    // ---- within ~15 miles ----
    { date: "2026-06-20", name: "Kim Gordon (with The Fiery Furnaces)", where: "Storm King Art Center, New Windsor", mi: 5, note: "Sonic Youth co-founder; outdoor summer concert, ~5–9pm." },
    { date: "2026-06-21", name: "Black Country, New Road (with Horsegirl)", where: "Storm King Art Center, New Windsor", mi: 5, note: "British art-rock, outdoor evening concert." },
    { date: "2026-06-27", name: "Anicka Yi: artist talk with Rana Dasgupta", where: "Storm King Art Center, New Windsor", mi: 5, note: "Tied to her outdoor installation ‘Message from the Mud,’ on view this season." },
    { date: "2026-06-29", end: "2026-06-29", name: "‘Piero Manzoni: Total Space’ closes", where: "Magazzino Italian Art, Cold Spring", mi: 14, note: "Last days of the Manzoni show — verify the closing date." },
    { date: "2026-07-11", name: "Devonté Hynes Ensemble", where: "Storm King Art Center, New Windsor", mi: 5, note: "Blood Orange’s Dev Hynes." },
    { date: "2026-07-17", name: "Bridget Riley installation opens", where: "Dia Beacon", mi: 12, note: "New long-run installation debuts." },
    { date: "2026-07-31", name: "Richard Tuttle installation opens", where: "Dia Beacon", mi: 12 },
    { date: "2026-08-15", name: "Sun Ra Arkestra", where: "Storm King Art Center, New Windsor", mi: 5, note: "The legendary cosmic-jazz big band." },
    { date: "2026-08-19", name: "Bannerman Island Butterfly Day", where: "Bannerman Island (boat from Beacon)", mi: 8, note: "Guided monarch-butterfly walking tour." },
    { date: "2026-09-05", name: "Farm-to-Table Chef’s Dinner", where: "Bannerman Island (boat from Beacon)", mi: 8, note: "Annual fundraiser, two seatings." },
    { date: "2026-09-21", name: "Cornwall Fall Festival", where: "Main Street, Cornwall", mi: 3, note: "Chamber street fair, ~10–5. Confirm exact date." },
    { date: "2026-09-27", name: "Spirit of Beacon Day", where: "Main Street, Beacon", mi: 12, note: "Multicultural parade + festival since 1977. Last Sunday of Sept — confirm." },
    { date: "2026-10-03", name: "Walter De Maria, ‘360° I Ching’ opens", where: "Dia Beacon", mi: 12, note: "New long-run installation debuts." },
    { date: "2026-11-13", name: "Frédéric Bruly Bouabré installation opens", where: "Dia Beacon", mi: 12 },
    { date: "2026-12-06", name: "Village Tree Lighting", where: "Village Bandstand, Cornwall-on-Hudson", mi: 1, note: "~6pm. First-Sunday pattern — confirm the date on the village site." },

    // ---- ~15–30 miles ----
    { date: "2026-06-18", end: "2026-07-26", name: "Powerhouse Theater season (40th)", where: "Vassar College, Poughkeepsie", mi: 18, note: "New-works summer festival — readings, workshops, premieres." },
    { date: "2026-07-03", end: "2026-07-05", name: "Great American Weekend + harness racing", where: "Goshen Historic Track, Goshen", mi: 16, note: "July 4th craft fair + Grand Circuit racing at the world’s oldest harness track." },
    { date: "2026-07-23", end: "2026-08-02", name: "Orange County Fair", where: "Fairgrounds, Middletown", mi: 20, note: "Rides, concerts, racing, livestock." },
    { date: "2026-09-06", name: "Beatles vs. Stones: A Musical Showdown", where: "Bardavon 1869 Opera House, Poughkeepsie", mi: 18, note: "Verify date with the venue." },
    { date: "2026-09-19", name: "Cowboy Junkies (40th anniversary)", where: "Bardavon 1869 Opera House, Poughkeepsie", mi: 18, note: "Verify date with the venue." },
    { date: "2026-10-03", name: "Stayin’ Alive: One Night of the Bee Gees", where: "Bardavon 1869 Opera House, Poughkeepsie", mi: 18, note: "Verify date with the venue." },
    { date: "2026-10-04", name: "Warwick Applefest", where: "Village of Warwick", mi: 24, note: "Orange County’s largest one-day festival, 9–5. Free." },
    { date: "2026-10-09", end: "2026-10-10", name: "Northern Star Quilt Festival", where: "Northern Star Quilters’ Guild, Somers", mi: 32, drive: true, note: "The guild’s quilt festival (replacing its former big show). For the quilter in the family." },
    { date: "2026-10-10", end: "2026-10-11", name: "Sugar Loaf Fall Festival", where: "Sugar Loaf Art & Craft Village, Chester", mi: 20, note: "Artisan crafts, live music, food, 10–5." },
    { date: "2026-11-12", name: "Big Head Todd and The Monsters", where: "Paramount Hudson Valley, Peekskill", mi: 22, note: "Verify date with the venue." },
    { date: "2026-11-28", end: "2027-01-03", name: "LEGOLAND Holiday Bricktacular", where: "LEGOLAND New York, Goshen", mi: 18, note: "Holiday overlay on every open date." },
    { date: "2026-12-12", name: "Jessica Lynn", where: "Paramount Hudson Valley, Peekskill", mi: 22, note: "Verify date with the venue." },

    // ---- worth the drive (beyond 30 mi) ----
    { date: "2026-05-17", end: "2026-10-25", name: "‘Frederic Church: Global Artist’", where: "Olana State Historic Site, Hudson", mi: 42, drive: true, note: "Flagship exhibition of the Church bicentennial." },
    { date: "2026-06-20", end: "2026-11-01", name: "Cynthia Daignault: ‘Light Atlas’", where: "Thomas Cole NHS, Catskill", mi: 45, drive: true, note: "360 small landscapes in Cole’s 1846 New Studio." },
    { date: "2026-08-01", name: "Billy Strings", where: "Bethel Woods Center for the Arts, Bethel", mi: 45, drive: true, note: "Verify with the venue." }
  ],

  recurring: [
    { group: "Every week", when: "Tuesdays, 6:30–8pm (Jun–Aug)", name: "Bandstand Concert Series", where: "Village Bandstand, Cornwall-on-Hudson", mi: 1, note: "The signature village summer event — bring a blanket and a picnic. Free." },
    { group: "Every week", when: "Wednesdays, 11am–5pm (May–Nov)", name: "Cornwall Farmers Market", where: "Town Hall, 183 Main St, Cornwall", mi: 3 },
    { group: "Every week", when: "Saturdays, 8:30am–1pm (year-round)", name: "Cold Spring Farmers’ Market", where: "Boscobel grounds, Garrison", mi: 12 },
    { group: "Every week", when: "Sundays, 10am–2pm (year-round)", name: "Beacon Farmers Market", where: "413 Main St, Beacon", mi: 12 },
    { group: "Every week", when: "Saturdays, 10am–3pm (summer)", name: "Newburgh Farmers’ Market", where: "Safe Harbors Green, 97 Broadway, Newburgh", mi: 6 },
    { group: "Every month", when: "2nd Saturday evenings", name: "Beacon Second Saturday", where: "Main Street, Beacon", mi: 12, note: "Gallery openings, receptions and live music. Free, year-round." },
    { group: "Every month", when: "Last Saturday afternoons (Apr–Oct)", name: "Newburgh ArtSeen", where: "Downtown Newburgh", mi: 6, note: "Monthly public-art and gallery walks." },
    { group: "Every month", when: "First Fridays (May–Sep)", name: "Cornwall First Fridays Art Walk", where: "Main Street, Cornwall", mi: 3, note: "Open-air exhibits, demos and pop-ups." },
    { group: "Seasonal patterns", when: "~April 1", name: "Storm King Art Center opens", where: "Mountainville", mi: 5, note: "The marquee local anchor reopens; members preview late March." },
    { group: "Seasonal patterns", when: "Late September", name: "Newburgh Open Studios", where: "Citywide, Newburgh", mi: 6, note: "Artist studios and pop-up galleries open to the public." },
    { group: "Seasonal patterns", when: "October weekends", name: "Pumpkin season — Jones Farm & Lawrence Farms", where: "Cornwall & Newburgh", mi: 5, note: "Cider donuts, pumpkins and the hay-bale maze. Weekdays are calmer." },
    { group: "Seasonal patterns", when: "Early November", name: "Beacon Bonfire Music + Art Festival", where: "20+ venues, Beacon", mi: 12, note: "400+ artists over several days; 2026 dates not yet posted." },
    { group: "Seasonal patterns", when: "Fall weekends", name: "LEGOLAND Brick-or-Treat", where: "Goshen", mi: 18, note: "Family Halloween event, included with admission; dates TBA." },
    { group: "Seasonal patterns", when: "Year-round calendar", name: "Walkway Over the Hudson events", where: "Poughkeepsie–Highland", mi: 18, note: "Walkway at Night, Pride in the Sky and the Walkway Marathon." },
    { group: "Seasonal patterns", when: "Signature weekends", name: "Mohonk Mountain House events", where: "New Paltz", mi: 25, note: "Oktoberfest, Halloween Haunts, summer Music Week. Mostly stay-based." }
  ],

  eventLinks: [
    { name: "Village of Cornwall-on-Hudson calendar", url: "https://cornwall-on-hudson.gov/Calendar-Notices/Calendar", note: "Authoritative for RiverFest, tree lighting and bandstand concerts." },
    { name: "The Highlands Current community calendar", url: "https://highlandscurrent.org/highlands-calendar/", note: "Best source for Cold Spring and Beacon — nonprofit local paper." },
    { name: "A Little Beacon Blog", url: "https://www.alittlebeaconblog.com/annual-events", note: "The definitive Beacon local guide, incl. the Second Saturday roundup." },
    { name: "Chronogram events", url: "https://calendar.chronogram.com/hudsonvalley/eventsearch", note: "The strongest broad regional arts/music calendar." },
    { name: "Orange County Tourism (PICKOCNY)", url: "https://www.pickocny.com/", note: "Official county tourism — events and seasonal guides." },
    { name: "Hudson Valley Magazine — Things to Do", url: "https://hvmag.com/things-to-do/", note: "Events plus day-trip guides, including a Cornwall piece." }
  ],

  /* ---------------- EAT & DRINK ---------------- */
  eat: [
    { name: "Painter's Tavern", town: "Cornwall-on-Hudson", kind: "Village pick", lat: 41.4445, lon: -74.0175,
      address: "266 Hudson St, Cornwall-on-Hudson", price: "$$",
      blurb: "A Cornwall institution since 1985 — restaurant and art gallery in one, restored and reopened in 2024.",
      signature: "Buttermilk fried chicken, house-braised short ribs, warm goat cheese salad — plus a globe-trotting menu with new blackboard specials every other week.",
      texture: "The walls are covered in rotating local art, there's a working pinball machine and 100+ beers. Sunday brunch is the village move — it comes with complimentary mimosas.",
      tags: ["Kid-friendly", "Brunch", "Local art"] },

    { name: "2 Alices Coffee Lounge", town: "Cornwall-on-Hudson", kind: "Cafe", lat: 41.4440, lon: -74.0185,
      address: "311 Hudson St, Cornwall-on-Hudson", price: "$",
      hours: "Opens 7am Mon–Sat, 8am Sun.",
      blurb: "The village's social hub — serious espresso, plus beer and wine, bagels, pastries and soup.",
      texture: "A real third place: live music a couple of weekend nights a month, Thursday trivia, monthly karaoke. Everyone in Cornwall seems to run into each other here.",
      tags: ["Kid-friendly", "Coffee", "Walkable"] },

    { name: "Storm King Lounge and Fare", town: "Cornwall-on-Hudson", kind: "American", lat: 41.4455, lon: -74.0165,
      address: "2 Idlewild Ave, Cornwall-on-Hudson", price: "$$$",
      hours: "Dinner Tue–Sat 5–10; Sunday brunch. Closed Mon.",
      blurb: "The village's newest serious kitchen (2022), in the old Storm King Theatre building — elevated New American.",
      signature: "Za'atar-crusted sea scallops, roasted beet bruschetta; a casual bar menu of burgers and ribs. Sunday brunch shakshuka and eggs Benedict.",
      texture: "Same complex holds Pepettini (the Italian side) and a Storm King Market for grab-and-go — picnic supplies before the Art Center or a hike.",
      tags: ["Date night", "Brunch"] },

    { name: "Village Pizzeria & Restaurant", town: "Cornwall-on-Hudson", kind: "Pizza", lat: 41.4435, lon: -74.0195,
      address: "194 Hudson St, Cornwall-on-Hudson", price: "$",
      hours: "Daily 10:30am–9pm.",
      blurb: "The everyday village pizza-and-pasta joint — gourmet and Sicilian pies, calzones, heroes, plus gluten-free and whole-wheat crust.",
      texture: "Your reliable weeknight takeout and delivery. Has a party room and does catering.",
      tags: ["Kid-friendly", "Takeout", "Closest"] },

    { name: "Jones Farm café & bakery", town: "Cornwall", kind: "Farm", lat: 41.4550, lon: -74.0600,
      address: "190 Angola Rd, Cornwall", price: "$",
      hours: "Wed–Sun 8–5 (café to 3); closed Mon–Tue.",
      blurb: "Grandma Phoebe's Kitchen bakery plus a café doing homemade breakfast and lunch, on a working family farm since 1914.",
      signature: "The apple cider donuts and the baked-goods case.",
      texture: "Go for the bakery and the gift barn as much as the food — don't show up Monday or Tuesday. A family destination, not just a meal.",
      tags: ["Kid-friendly", "Bakery", "Fall"] },

    { name: "Capri Restaurant & Pizzeria", town: "New Windsor", kind: "Italian", lat: 41.4700, lon: -74.0800,
      address: "Windsor Highway, New Windsor", price: "$$",
      blurb: "A New Windsor mainstay for nearly 30 years — neighborhood red-sauce Italian and pizza, about 10–15 minutes out.",
      tags: ["Kid-friendly", "Italian-American"] },

    { name: "Il Cenàcolo", town: "Newburgh", kind: "Fine dining", lat: 41.4900, lon: -74.0600,
      address: "228 S Plank Rd, Newburgh", price: "$$$",
      blurb: "The renowned destination Italian of the area since 1988, famous for an enormous list of daily specials recited tableside.",
      signature: "Polletto al limone, filetto al pepe nero, house lobster ravioli, fettuccine with Dungeness crab — and tiramisu to finish.",
      texture: "Locals say there are around 40 specials a day. Go for a real sit-down Tuscan evening, not a quick bite.",
      tags: ["Date night", "Italian"] },

    { name: "Newburgh Brewing Company", town: "Newburgh", kind: "Brewery", lat: 41.4993, lon: -74.0122,
      address: "88 S Colden St, Newburgh", price: "$$",
      hours: "Roughly Thu–Sun; live music Fri/Sat 7pm, Sun 2pm.",
      blurb: "A fourth-floor taproom with sweeping Hudson views, 20+ house beers and a hearty shareables kitchen.",
      signature: "The Empire Smash Burger.",
      texture: "Best at golden hour for the river view down to the bridge — and it's a genuinely family-welcome brewery, not a bar scene.",
      tags: ["Kid-friendly", "Beer", "View"] },

    { name: "Blu Pointe", town: "Newburgh", kind: "Fine dining", lat: 41.5020, lon: -74.0080,
      address: "Front St (waterfront), Newburgh", price: "$$$$",
      blurb: "The upscale waterfront special-occasion spot from the Bonura family — farm-to-table seafood and steak — in the space that was Torches.",
      texture: "Reclaimed barn wood, a bluestone fireplace and a temperature-controlled wine vault holding ~3,000 bottles where the old saltwater aquarium used to be. Sit on the river side.",
      tags: ["Date night", "Waterfront", "Seafood"] },

    { name: "The Wherehouse", town: "Newburgh", kind: "American", lat: 41.5030, lon: -74.0120,
      address: "119 Liberty St, Newburgh", price: "$$",
      hours: "Closed Mondays.",
      blurb: "A fun, beer-forward 'cosmic American comfort' spot on the Liberty St dining strip — 50+ Angus burgers with pop-culture names and a genuinely good vegan lineup.",
      texture: "In-house smoked meats, 16 rotating drafts, vegan onion soup and chili. Unpretentious downtown Newburgh anchor.",
      tags: ["Kid-friendly", "Burgers", "Vegan options"] },

    { name: "Ms. Fairfax", town: "Newburgh", kind: "Cafe", lat: 41.5030, lon: -74.0121,
      address: "105 Liberty St, Newburgh", price: "$$",
      blurb: "A trendy, locally sourced brunch-to-dinner spot built around crêpes, with a pretty back patio — the surviving sibling of the Liberty Street Bistro team.",
      tags: ["Kid-friendly", "Brunch", "Crêpes"] },

    { name: "Blacc Vanilla Cafe", town: "Newburgh", kind: "Cafe", lat: 41.4980, lon: -74.0180,
      address: "197 South St, Newburgh", price: "$",
      hours: "Fri–Sun 7am–3pm (confirm).",
      blurb: "A laid-back Black-owned cafe with a bespoke house coffee blend and an always-changing menu.",
      signature: "Chicken and waffles with a hit of hot sauce; the BV breakfast burrito.",
      tags: ["Kid-friendly", "Coffee", "Breakfast"] },

    { name: "The Roundhouse", town: "Beacon", kind: "Fine dining", lat: 41.5060, lon: -73.9720,
      address: "Main & East Main St, Beacon", price: "$$$$",
      blurb: "Modern American farm-to-table dining literally above a waterfall, with floor-to-ceiling windows over the cascade. Also a boutique hotel.",
      texture: "Request a window/waterfall table — the setting is the draw. A true special-occasion room.",
      tags: ["Date night", "Waterfall", "Across the river"] },

    { name: "Brother's Trattoria", town: "Beacon", kind: "Italian", lat: 41.5060, lon: -73.9650,
      address: "465 Main St, Beacon", price: "$$",
      blurb: "A Beacon fixture since 1998, often ranked the #1 restaurant in town — three spaces under one roof: a pizza room, a Tuscan dining room and a fireplace bar.",
      texture: "Pizza up front, full Italian dinner in back — you can aim casual or special-occasion in the same building.",
      tags: ["Kid-friendly", "Italian", "Pizza"] },

    { name: "Quinn's", town: "Beacon", kind: "American", lat: 41.5050, lon: -73.9680,
      address: "330 Main St, Beacon", price: "$$",
      blurb: "A cult favorite — Japanese soul food (ramen, curry, donburi) in a moody former-diner space, and one of the Hudson Valley's premier small live-music rooms.",
      signature: "The chashu ramen; weekly jazz sessions.",
      texture: "Go on a music night, but expect a wait at peak ramen hours. Quirky, beloved, very Beacon.",
      tags: ["Ramen", "Live music"] },

    { name: "Ziatun", town: "Beacon", kind: "American", lat: 41.5040, lon: -73.9700,
      address: "244 Main St, Beacon", price: "$$",
      blurb: "Authentic Palestinian cooking with strong vegan and vegetarian options — a distinctive cuisine for the area.",
      tags: ["Kid-friendly", "Palestinian", "Vegan options"] },

    { name: "Meyer's Olde Dutch", town: "Beacon", kind: "Burgers", lat: 41.5050, lon: -73.9690,
      address: "Main St, Beacon", price: "$",
      blurb: "Smash-style burgers, fries, fried chicken sandwiches and draft beer — casual and reliable on Beacon's Main Street.",
      tags: ["Kid-friendly", "Burgers"] },

    { name: "Beacon Bread Company", town: "Beacon", kind: "Cafe", lat: 41.5040, lon: -73.9710,
      address: "193 Main St, Beacon", price: "$",
      blurb: "A bakery cafe baking fresh breads daily since 2014, with a brunch built on thick brioche French toast and chicken-and-waffles.",
      texture: "The bakery case is the move for pastries and bread to take home.",
      tags: ["Kid-friendly", "Bakery", "Brunch"] },

    { name: "Cold Spring Depot", town: "Cold Spring", kind: "American", lat: 41.4200, lon: -73.9560,
      address: "1 Depot Square, Cold Spring", price: "$$",
      blurb: "Family-friendly classic-American fare in the 1893 train station, with a patio that's the summer hangout — trains still run right by.",
      texture: "The most kid-and-crowd-friendly option in Cold Spring; live music and a lively patio in warm months.",
      tags: ["Kid-friendly", "Trains", "Patio"] },

    { name: "Hudson House River Inn", town: "Cold Spring", kind: "Fine dining", lat: 41.4200, lon: -73.9570,
      address: "2 Main St, Cold Spring", price: "$$$",
      blurb: "Riverside dining in one of the oldest continuously operating inns on the Hudson (1832) — prime dry-aged steaks and fresh seafood.",
      texture: "Right at the river end of Main St — pair with a Cold Spring walk. Special-occasion feel.",
      tags: ["Date night", "Riverfront", "Steak"] },

    { name: "Cathryn's Tuscan Grill", town: "Cold Spring", kind: "Italian", lat: 41.4200, lon: -73.9540,
      address: "91 Main St, Cold Spring", price: "$$$",
      blurb: "Contemporary Tuscan with a big pasta menu and a notable raw bar of East and West Coast oysters.",
      signature: "Adventurous specials — pulled rabbit pappardelle in grappa sauce, grilled partridge with blackberries.",
      texture: "Ask about the off-menu specials; the kitchen goes beyond the printed list. Lovely patio in season.",
      tags: ["Italian", "Raw bar", "Patio"] },

    { name: "Brasserie Le Bouchon", town: "Cold Spring", kind: "Fine dining", lat: 41.4200, lon: -73.9545,
      address: "Main St, Cold Spring", price: "$$$",
      blurb: "A proper French bistro tucked among the antique shops — Parisian charm on a Hudson Valley Main Street.",
      tags: ["Date night", "French"] },

    { name: "Ward's Bridge Inn", town: "Montgomery", kind: "Fine dining", lat: 41.5270, lon: -74.2360,
      address: "135 Ward St, Montgomery", price: "$$$",
      blurb: "'Montgomery's living room' — repeatedly voted the area's #1 restaurant in reader polls. Steaks, seafood and poultry, about 20–25 minutes west.",
      texture: "The special-night-out spot for western Orange County. Reservations recommended.",
      tags: ["Date night", "Steak"] },

    { name: "Bellvale Farms Creamery", town: "Warwick", kind: "Ice cream", lat: 41.2300, lon: -74.3200,
      address: "1390 NY-17A, Warwick", price: "$",
      hours: "Seasonal — check hours.",
      blurb: "Farm ice cream atop Mount Peter with sweeping valley views, made from the on-site dairy's own milk (family-farmed since 1819).",
      signature: "Bellvale Bog — dark chocolate, brownie dough and fudge swirl. 50+ house flavors and house waffle cones.",
      texture: "The farthest pick but a genuine destination — it's ranked near the top of best-ice-cream-in-America lists. A summer-evening drive.",
      tags: ["Kid-friendly", "Ice cream", "View"] }
  ],

  /* ---------------- HOME, HARDWARE & GARDEN ---------------- */
  home: [
    { name: "Cornwall Power Equipment (B&B Power Equipment)", town: "Cornwall", kind: "Hardware", lat: 41.4426, lon: -74.0246,
      address: "317 Main St, Cornwall, NY 12518", phone: "845-458-5512",
      hours: "Roughly Mon–Fri 8–6:30, Sat 8–5; closed Sun. Confirm.",
      blurb: "The closest hardware-category store to the village — an outdoor power-equipment dealer (Stihl, Ariens) with propane exchange, soil and basics.",
      texture: "Barely 3 miles down the hill, but it skews to power equipment and repair rather than nuts-and-bolts hardware, and at least one listing says it has rebranded as B&B. Call before driving over.",
      tags: ["Power equipment", "Propane", "Closest"], confidence: "medium" },

    { name: "Brett's True Value", town: "New Windsor", kind: "Hardware", lat: 41.4699, lon: -74.0801,
      address: "115 Temple Hill Rd, New Windsor, NY 12553", phone: "845-391-8198", web: "https://brettstruevalue.shoptruevalue.com",
      hours: "Mon–Fri 7:30–7, Sat 8–6, Sun 9–5.",
      blurb: "Your nearest real full-line hardware store — tools, fasteners, plumbing, electrical, paint matching, key cutting and propane.",
      texture: "About 15 minutes via Route 32 and Temple Hill Rd. This is the everyday hardware run; it stocks a deep general inventory, not just power equipment.",
      tags: ["Hardware", "Paint", "Keys", "Closest full"] },

    { name: "Werner's True Value", town: "Newburgh", kind: "Hardware", lat: 41.5251, lon: -74.0356,
      address: "59 N Plank Rd, Newburgh, NY 12550", phone: "845-562-3234",
      blurb: "A second True Value north of the river, an authorized Benjamin Moore retailer with a strong paint and stain department.",
      texture: "Handy if you're already on the North Plank Rd side of Newburgh. Confirm current hours by phone.",
      tags: ["Hardware", "Paint"], confidence: "medium" },

    { name: "Heights Lumber Center", town: "New Windsor", kind: "Building supply", lat: 41.4828, lon: -74.0241,
      address: "3 Windsor Hwy, New Windsor, NY 12553", phone: "845-561-1750", web: "https://www.heightslumber.com",
      hours: "Mon–Fri 7:30–5, Sat 7:30–1; closed Sun. Confirm.",
      blurb: "A family-owned independent lumberyard and building-materials supplier — the close-in alternative to the big boxes.",
      texture: "On Windsor Highway toward Vails Gate, about 8–10 minutes away. Better for contractor-grade lumber and personal advice than for browsing.",
      tags: ["Lumber", "Building materials", "Family-owned"] },

    { name: "The Home Depot", town: "Newburgh", kind: "Building supply", lat: 41.5304, lon: -74.0876,
      address: "1220 Route 300, Newburgh, NY 12550", web: "https://www.homedepot.com/l/Newburgh/NY/Newburgh/12550/1250",
      hours: "Daily (typically 6am–10pm). Confirm.",
      blurb: "The nearest big-box home-improvement store — lumber, hardware, appliances, paint, garden, flooring and fixtures.",
      texture: "On the busy Route 300 strip, about 15–18 minutes out, essentially across the lot from Lowe's. The default for anything Brett's doesn't carry.",
      tags: ["Big-box", "Lumber", "Appliances", "Garden"] },

    { name: "Lowe's Home Improvement", town: "Newburgh", kind: "Building supply", lat: 41.5311, lon: -74.0884,
      address: "1239 Route 300, Newburgh, NY 12550", phone: "845-567-2860", web: "https://www.lowes.com/store/NY-Newburgh/1584",
      hours: "Mon–Sat 6–10, Sun 7–8. Confirm.",
      blurb: "The other major big-box on Route 300 — appliances, lumber, paint, lighting, flooring and an appliance-parts counter.",
      texture: "Directly opposite Home Depot, so locals hit both in one trip. Good fallback for lighting fixtures and ceiling fans, which the area otherwise lacks a showroom for.",
      tags: ["Big-box", "Appliances", "Lighting"] },

    { name: "Dain's Lumber", town: "Peekskill", kind: "Building supply", lat: 41.2898, lon: -73.9293,
      address: "2 N Water St, Peekskill, NY 10566", phone: "914-737-2000", web: "https://www.dainslumber.com",
      hours: "Mon–Fri 7:30–4:30, Sat 8–1; closed Sun. Confirm.",
      blurb: "A family-run lumber, building-materials and hardware supplier established in 1848.",
      texture: "Farther south (about 30–35 minutes), but notable for 177 years of service and a newer Philipstown warehouse off Route 9 that brings it closer to the Cold Spring side.",
      tags: ["Lumber", "Building materials", "Historic"] },

    { name: "Devitt's Nursery & Supply", town: "New Windsor", kind: "Garden center", lat: 41.4855, lon: -74.0699,
      address: "56 Devitt Circle, New Windsor, NY 12553", phone: "845-561-1968", web: "https://devittsnsy.com",
      hours: "Roughly Mon–Fri 7:30–5, Sat 7:30–4, Sun 9–3 (seasonal). Confirm.",
      blurb: "A 25-acre full-service garden center since 1951 — annuals, perennials, landscape-size trees, bulk mulch and soil, pavers and wallstone.",
      signature: "The bulk landscape yard and a big hardscape selection (pavers, wallstone, specialty stone).",
      texture: "The serious local garden-and-landscape stop, named among the country's top 100 garden centers. Year-round delivery of topsoil, sand and rock salt makes it useful past planting season. About 10–12 minutes away.",
      tags: ["Nursery", "Mulch", "Pavers", "Trees"] },

    { name: "Adams Fairacre Farms — garden center", town: "Newburgh", kind: "Garden center", lat: 41.5226, lon: -74.0746,
      address: "1240 NY-300, Newburgh, NY 12550", phone: "845-569-0303", web: "https://adamsfarms.com",
      blurb: "The region's largest independent garden center and nursery, wrapped around the famous gourmet market (also in Eat/Shopping).",
      signature: "A huge nursery yard plus houseplants, a seasonal greenhouse, Weber grills and patio furniture.",
      texture: "Worth the 15-minute drive for both plants and food. Staff give real horticultural advice — a destination, not a quick in-and-out.",
      tags: ["Nursery", "Houseplants", "Patio", "Grills"] },

    { name: "Flora Good Times", town: "Beacon", kind: "Garden center", lat: 41.5046, lon: -73.9698,
      address: "Main St, Beacon, NY 12508 (confirm number)",
      blurb: "A small Beacon plant shop for houseplants, unconventional plants and flower arrangements.",
      texture: "A boutique plant shop for houseplants and gifts rather than landscaping; pair it with Beacon's home-decor shops across the river. Verify the exact address.",
      tags: ["Plants", "Houseplants", "Boutique"], confidence: "medium" },

    { name: "Habitat for Humanity ReStore", town: "Newburgh", kind: "Thrift", lat: 41.5095, lon: -74.0606,
      address: "38 S Plank Rd (Route 52), Newburgh, NY 12550", phone: "845-565-1789", web: "https://habitatnewburgh.org/restore/welcome.html",
      hours: "Tue–Sat 10–5 (donations to 4).",
      blurb: "A nonprofit home-improvement resale store — donated and surplus furniture, appliances, building materials and home accessories at deep discounts.",
      texture: "The first stop for home goods on a budget or reusable building materials. Inventory is hit-or-miss and turns over fast, so it rewards repeat visits. Proceeds fund local home building.",
      tags: ["Thrift", "Salvage", "Furniture", "Budget"] },

    { name: "Hudson Valley House Parts", town: "Newburgh", kind: "Salvage", lat: 41.5037, lon: -74.0123,
      address: "201 Ann St, Newburgh, NY 12550", web: "https://www.hvhouseparts.com",
      hours: "Limited days (often weekends). Confirm.",
      blurb: "Architectural salvage and restoration — salvaged building elements, antique lighting, specialty plumbing, mantels, hardware and lime mortars.",
      signature: "Salvaged chandeliers, vintage tubs and ornate mirrors, plus historic-restoration supplies and workshops.",
      texture: "A genuine architectural-salvage wonderland in Newburgh's historic district, aimed at DIYers, designers and old-house owners. Hours are limited, so check before going.",
      tags: ["Salvage", "Reclaimed", "Old-house"] },

    { name: "Shapiro's Furniture Barn", town: "Newburgh", kind: "Furniture", lat: 41.5028, lon: -74.0107,
      address: "71-75 Chambers St, Newburgh, NY 12550", phone: "845-562-8400", web: "https://www.shapirosfurniturebarn.com",
      hours: "Mon–Fri 9–5, Sat 10–4; closed Sun.",
      blurb: "A century-old family furniture store with a 30,000-square-foot showroom of bedroom, living-room and dining-room furniture.",
      texture: "More than 100 years in Newburgh and still a local institution — good for actually sitting on sofas before buying. About 18 minutes north.",
      tags: ["Furniture", "Showroom", "Family-owned"] },

    { name: "Newburgh Vintage Emporium", town: "Newburgh", kind: "Antiques", lat: 41.5489, lon: -74.0466,
      address: "5006 Route 9W, Newburgh, NY 12550", phone: "845-562-5200", web: "https://www.newburghvintageemporium.com",
      hours: "Roughly 10–6, closed Tue. Confirm.",
      blurb: "A large multi-dealer vintage and antiques market with furniture, decor and locally made goods.",
      texture: "Its separate Ware-House (10 Route 17K) packs 75-plus dealers and 30,000 square feet spanning the 1700s to the 1970s. A strong day-out for furniture and decor, about 20–25 minutes away.",
      tags: ["Antiques", "Vintage", "Furniture", "Multi-dealer"] },

    { name: "Cold Spring antiques district", town: "Cold Spring", kind: "Antiques", lat: 41.4201, lon: -73.9543,
      address: "Main St, Cold Spring, NY 10516 (start at the Antiques Center, 77 Main St)",
      blurb: "The region's antiquing destination — the Cold Spring Antiques Center (30-plus dealers since 1987) anchors a Main Street walk of antique and vintage shops.",
      texture: "Pair the Antiques Center with Antique Alley (93 Main St) and Once Upon a Time (112 Main St), all walkable from the train station. About 20–25 minutes across the river via the Bear Mountain Bridge. Weekend-heavy hours.",
      tags: ["Antiques", "Multi-dealer", "Main Street"] },

    { name: "188 Main (Beacon)", town: "Beacon", kind: "Antiques", lat: 41.5041, lon: -73.9712,
      address: "188 Main St, Beacon, NY 12508", web: "https://188main.com",
      blurb: "A Main Street antiques and vintage shop packed with estate-sale and flea-market finds — cameras, typewriters, vinyl, maps, jewelry.",
      texture: "A good anchor for a Beacon antiquing-and-decor walk (with Finders Keepers and Knot Too Shabby). Beacon is a strong cross-river complement to Cold Spring.",
      tags: ["Antiques", "Vintage", "Decor"], confidence: "medium" },

    { name: "Sohns Appliance Center", town: "Walden", kind: "Appliances", lat: 41.5601, lon: -74.1879,
      address: "23 Main St, Walden, NY 12586", phone: "845-778-7124", web: "https://www.sohnsappliancecenter.com",
      hours: "Mon–Fri 9–5:30 (Thu to 8), Sat 9–4; closed Sun.",
      blurb: "An independent appliance dealer selling major brands with its own in-house service department.",
      texture: "The closest dedicated independent appliance store with real service, about 25–30 minutes northwest — worth it for a knowledgeable salesperson who will fix what they sell.",
      tags: ["Appliances", "Service", "Family-owned"] },

    { name: "AM Appliance Group (scratch & dent)", town: "Newburgh", kind: "Appliances", lat: 41.5095, lon: -74.0606,
      address: "Newburgh, NY (confirm exact address)", web: "https://www.amappliancegroup.com/amag-scratch-dent-appliances-newburgh-ny/",
      blurb: "A dealer in new scratch-and-dent and used major appliances at discount prices.",
      texture: "The budget play if you don't mind a dent on the side facing the wall. Verify the current address and stock by phone — scratch-and-dent inventory turns over fast.",
      tags: ["Appliances", "Scratch-and-dent", "Budget"], confidence: "medium" },

    { name: "Village Paint Supply", town: "Newburgh", kind: "Paint", lat: 41.5046, lon: -74.0614,
      address: "179 S Plank Rd, Newburgh, NY 12550", phone: "845-562-0757", web: "https://www.villagepaintsupply2.com",
      blurb: "An independent Benjamin Moore paint and decorating store since 1961.",
      texture: "A dedicated paint store, not a paint counter — it matters for color matching and pro-grade product. About 15 minutes north on South Plank Rd.",
      tags: ["Paint", "Benjamin Moore", "Family-owned"] },

    { name: "Affordable Floors of NY", town: "New Windsor", kind: "Flooring", lat: 41.4699, lon: -74.0801,
      address: "389 Windsor Hwy, New Windsor, NY 12553", phone: "845-565-2000",
      blurb: "A local flooring store selling and installing carpet, tile, hardwood and vinyl.",
      texture: "On the Windsor Highway flooring strip about 10 minutes away — one of the nearer flooring options. Carpet Mill Outlet is also on this strip for remnants and stair runners. Call to confirm hours.",
      tags: ["Flooring", "Tile", "Hardwood"], confidence: "medium" }
  ],

  /* ---------------- REPAIRS & HOME SERVICES ----------------
     Verified to exist and to serve this area — NOT endorsements.
     Always confirm a current NY license, insurance and price. */
  services: [
    { name: "Talbot Electric", town: "New Windsor", kind: "Electrical", lat: 41.4747, lon: -74.0871,
      address: "19 Hannah Lane, New Windsor, NY 12553", phone: "845-569-0456", web: "https://talbotelectricny.com",
      blurb: "A licensed electrical contractor handling panel upgrades, generators, lighting, pool wiring and violation removal.",
      texture: "Service area explicitly includes Cornwall and New Windsor; holds City of Newburgh electrical license #70. Work stated to meet or exceed the National Electric Code.",
      tags: ["Licensed", "Residential", "Generators"] },

    { name: "RPC Electric", town: "Cornwall", kind: "Electrical", lat: 41.4459, lon: -74.0185,
      address: "PO Box 6, Cornwall, NY 12518", phone: "845-476-0321",
      blurb: "A Cornwall-based licensed electrical contractor on the City of Newburgh's roster of licensed electricians (#105).",
      texture: "A genuinely local, verifiably licensed electrician with no standalone website — confirm current availability by phone.",
      tags: ["Licensed", "Local", "Cornwall-based"] },

    { name: "Hudson Valley Electrical (James Paquin)", town: "Cornwall", kind: "Electrical", lat: 41.4459, lon: -74.0185,
      address: "21 Poplar St, Cornwall, NY 12518", phone: "845-800-3773",
      blurb: "A Cornwall-based licensed electrician on the City of Newburgh's 2026 licensed-electrician roster (#97).",
      texture: "A strong local pick. Note the same trade name appears for a separate Milton-based licensee, so confirm you're reaching the Cornwall (Paquin) operation.",
      tags: ["Licensed", "Local", "Cornwall-based"] },

    { name: "Neighborhood Plumbing, Heating & Cooling", town: "New Windsor", kind: "Plumbing", lat: 41.4747, lon: -74.0871,
      address: "PO Box 4304, New Windsor, NY 12553", phone: "845-527-0077", web: "https://www.neighborhoodplumbing-hvac.com",
      blurb: "A family-run licensed plumbing, heating and cooling company since 2010 — boilers, water heaters, drains and mini-splits.",
      texture: "Holds NY Master Plumber's License #108 and explicitly lists Cornwall and Mountainville; offers 24/7 emergency service. A strong pick for both plumbing and HVAC.",
      tags: ["Master plumber", "HVAC", "Emergency", "Local"] },

    { name: "Vincent J. Cestaro & Son", town: "Newburgh", kind: "Plumbing", lat: 41.4859, lon: -74.0254,
      address: "705 South St, Newburgh, NY 12550", phone: "845-534-2725", web: "https://www.newburghplumbingheatingcooling.com",
      blurb: "A 70-plus-year plumbing and HVAC contractor — boilers, well pumps, water filtration and softeners.",
      texture: "Keeps a dedicated Cornwall phone line (845-534-2725) and prices by the job, not hourly. Decades of local operation make it low-risk.",
      tags: ["Plumbing", "HVAC", "Well pumps", "Established"] },

    { name: "JES Heating and Cooling", town: "Washingtonville", kind: "HVAC", lat: 41.4287, lon: -74.1665,
      address: "16 Hampshire Dr, Washingtonville, NY 10992", phone: "914-325-8848", web: "https://jesheatingandcooling.com",
      blurb: "A family-owned HVAC company and Daikin factory-authorized dealer — AC, furnaces, boilers, heat pumps and ductless systems.",
      texture: "Service area explicitly lists Cornwall, New Windsor and Newburgh. Verify licensing and insurance before hiring, as with any HVAC contractor.",
      tags: ["HVAC", "Heat pumps", "Ductless"] },

    { name: "TruBlue of Mid Hudson Valley", town: "Cornwall", kind: "Handyman", lat: 41.4459, lon: -74.0185,
      phone: "845-420-5659", web: "https://www.trublueally.com/mid-hudson-valley",
      blurb: "A handyman and home-maintenance service — punch-list repairs, kitchen and bath fixes, decks, seasonal work and senior home modifications.",
      texture: "Service area explicitly names Cornwall, Cornwall-on-Hudson and New Windsor. A franchise rather than a solo handyman, so confirm pricing up front. A good fit for a new homeowner's to-do list.",
      tags: ["Handyman", "Home maintenance", "Decks"] },

    { name: "Benninger Landscaping", town: "Cornwall-on-Hudson", kind: "Landscaping", lat: 41.4447, lon: -74.0189,
      address: "18 Partridge Rd, Cornwall-on-Hudson, NY 12520", phone: "845-534-2085", web: "https://benningerlandscaping.com",
      blurb: "A Cornwall-on-Hudson-based landscape design, lawn maintenance, hardscaping and poolscape company.",
      texture: "Owner Dave Benninger is a lifelong village resident and the business is based right in 12520 — about as local as it gets. Often the kind of firm that also handles seasonal snow plowing for existing clients; ask in the fall.",
      tags: ["Landscaping", "Hardscaping", "Lawn care", "Local"] },

    { name: "Hill Treekeepers", town: "Newburgh", kind: "Tree service", lat: 41.5340, lon: -74.0760,
      address: "1662 Route 300, Ste 110, Newburgh, NY 12550", phone: "914-214-7045", web: "https://www.hilltreekeepers.com",
      blurb: "A tree-care company since 2009 with ISA Certified Arborists — pruning, removal, stump grinding, pest and disease treatment and emergency service.",
      texture: "Employs nationally ISA-certified arborists and holds a Commercial Pesticide Business Registration; serves Cornwall-on-Hudson and New Windsor. Using a certified arborist matters for valuable or hazardous trees.",
      tags: ["Tree service", "Certified arborist", "Emergency"] },

    { name: "Mid Hudson Appliance Repair", town: "Cornwall-on-Hudson", kind: "Appliance repair", lat: 41.4447, lon: -74.0189,
      phone: "845-498-1755", web: "https://www.midhudsonappliancerepair.com/cornwall-on-hudson-appliance-repair/",
      blurb: "Same-day appliance repair for washers, dryers, refrigerators, ovens, ranges, dishwashers and microwaves across major brands.",
      texture: "States it serves all of the Village of Cornwall-on-Hudson within 12520. No physical storefront published, so confirm a real appointment window when you call.",
      tags: ["Appliance repair", "Same-day"], confidence: "medium" },

    { name: "Griffen Pump Service", town: "Wappingers Falls", kind: "Septic & well", lat: 41.5965, lon: -73.9210,
      address: "3 Nancy Ct, Ste 3, Wappingers Falls, NY 12590", phone: "845-897-3107", web: "https://www.griffenpumpservice.com",
      blurb: "A family-owned well and pump specialist since 1997 — well-pump repair, pressure tanks, water filtration and emergency water-system service.",
      texture: "Explicitly lists New Windsor and Cornwall and services all major well-pump brands — the closest well specialist found. For septic pumping specifically, confirm they cover your need versus pump and water work.",
      tags: ["Well pump", "Water filtration", "Emergency"] },

    { name: "Tim Mills American Pest Control", town: "Middletown", kind: "Pest control", lat: 41.4459, lon: -74.4229,
      address: "174 Highland Ave, Middletown, NY 10940", phone: "845-344-3288", web: "https://www.timmills-americanpestcontrol.com/cornwall-ny-pest-control-services/",
      blurb: "An Orange County pest-control company — ants, termites, bedbugs, mice, rats, roaches and bees, with least-toxic and pet-sensitive options.",
      texture: "Service area explicitly includes Cornwall (12518) and Cornwall-on-Hudson (12520). Based in Middletown, so it serves the village rather than being based there.",
      tags: ["Pest control", "Termites", "Rodents"] },

    { name: "Complete Chimney", town: "Monroe", kind: "Chimney", lat: 41.3334, lon: -74.1868,
      address: "62 Hawxhurst Rd, Monroe, NY 10950", phone: "845-675-6612", web: "https://completechimneyny.com",
      blurb: "A chimney company since the mid-1980s — chimney sweeps, repairs and related masonry across several counties.",
      texture: "Markets Cornwall service but is physically based in Monroe, so treat the Cornwall branding as a service area. Confirm CSIA certification of the sweep if that matters to you.",
      tags: ["Chimney sweep", "Repair", "Masonry"], confidence: "medium" },

    { name: "Ashcraft's Lock and Door Hardware", town: "Newburgh", kind: "Locksmith", lat: 41.5034, lon: -74.0104,
      phone: "845-562-4554", web: "https://ashcraftsny.com",
      blurb: "An established locksmith and door-hardware company since 1982 — lock installation, rekeying, lockouts and access-control systems.",
      texture: "Coverage explicitly lists New Windsor, Vails Gate and Cornwall; 40-plus years in the area. No street address shown online, so call ahead if you need a counter.",
      tags: ["Locksmith", "Rekeying", "Established"] },

    { name: "Overhead Door Company of Hudson River Valley", town: "Poughkeepsie", kind: "Garage doors", lat: 41.6612, lon: -73.8987,
      address: "29 Firemans Way, Poughkeepsie, NY 12603", phone: "845-740-5055", web: "https://overheaddoorgf.com/overhead-door-company-of-hudson-river-valley/",
      blurb: "Residential and commercial garage-door installation and repair — openers, springs, panels and same-day emergency service.",
      texture: "Part of the established Overhead Door brand; serves Cornwall and New Windsor. Based in Poughkeepsie, so confirm response time for non-emergencies.",
      tags: ["Garage doors", "Openers", "Spring repair"] },

    { name: "L.I.K. Seamless Gutter Co.", town: "Monroe", kind: "Gutters", lat: 41.3334, lon: -74.1868,
      address: "69 Peter Bush Dr, Monroe, NY 10950", phone: "845-782-7675", web: "https://www.likgutters.com",
      blurb: "A family-run seamless-gutter company (40-plus years) — 5-inch, 6-inch, half-round and copper gutters plus leaf protection, soffit and fascia.",
      texture: "Serves Orange County and Cornwall; operates from Monroe, so it serves the village rather than being based there. A long track record for a low-stakes job.",
      tags: ["Gutters", "Seamless", "Established"], confidence: "medium" },

    { name: "Village Auto Repair", town: "Cornwall-on-Hudson", kind: "Auto repair", lat: 41.4436, lon: -74.0228,
      address: "172 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-3500", web: "https://villageautorepair.net",
      blurb: "The independent neighborhood garage right in the village — general repair, tires, oil changes and NY state inspections.",
      texture: "Reviewers (4.5 stars) praise honesty and fair pricing; a couple note a strict, by-the-book inspector. Hours aren't reliably published, so call ahead.",
      tags: ["Auto repair", "NY inspection", "In the village", "Closest"] },

    { name: "Valley Automotive Service", town: "Cornwall", kind: "Auto repair", lat: 41.4400, lon: -74.0290,
      address: "234 Main St, Cornwall, NY 12518", phone: "845-534-7435",
      blurb: "A long-running independent repair shop and NY inspection station handling domestic and import makes.",
      texture: "About 5 minutes from the village on Main Street. Jimmy and Chris come up repeatedly in reviews as honest and reasonable — the classic trusted-local-mechanic reputation.",
      tags: ["Auto repair", "NY inspection", "Imports"] },

    { name: "Levine's Garage", town: "New Windsor", kind: "Auto repair", lat: 41.4790, lon: -74.0210,
      address: "262 Quassaick Ave (Route 94), New Windsor, NY 12553", phone: "845-562-0707", web: "https://www.autorepairnewwindsorny.com",
      hours: "Mon–Fri 8–5:30, Sat 8–12.",
      blurb: "A family-owned full-service auto repair and NY inspection shop since 1979.",
      texture: "About 10 minutes toward Vails Gate. Insider tip: no-appointment NY state inspections every morning 8–10am, handy if you want to skip waiting for a slot.",
      tags: ["Auto repair", "NY inspection", "Walk-in inspection"] },

    { name: "Vails Gate Tire & Auto", town: "New Windsor", kind: "Auto repair", lat: 41.4583, lon: -74.0840,
      address: "898 Blooming Grove Tpke, New Windsor, NY 12553", phone: "845-522-8434", web: "https://www.vailsgatetireandauto.com",
      hours: "Mon–Fri 7:30–6, Sat 7:30–5; closed Sun.",
      blurb: "A family-owned auto and tire shop — tires, brakes, struts, shocks and oil changes.",
      texture: "In the Vails Gate section of New Windsor, a short drive from Cornwall; a 4.9-star rating across 165 reviews.",
      tags: ["Auto repair", "Tires", "Brakes"] },

    { name: "Depew Energy (Depew Oil)", town: "Newburgh", kind: "Oil/propane delivery", lat: 41.5612, lon: -74.0290,
      address: "5182 Route 9W, Newburgh, NY 12550", phone: "845-568-0072", web: "https://www.depewoil.com",
      blurb: "A Hudson Valley heating-oil and propane dealer that also installs and services boilers, furnaces, AC, water heaters and generators.",
      texture: "Serves Orange County with automatic delivery and tank monitoring. Compare per-gallon pricing and contract terms before signing on.",
      tags: ["Heating oil", "Propane", "Automatic delivery"], confidence: "medium" }
  ],

  /* ---------------- THE OUTDOORS / NATURAL FEATURES ---------------- */
  nature: [
    { name: "Storm King Mountain (Storm King State Park)", town: "Cornwall", kind: "Mountain", lat: 41.4231, lon: -74.0010,
      address: "Route 9W upper parking pulloff, Cornwall, NY 12518", web: "https://parks.ny.gov/visit/state-parks/storm-king-state-park",
      hours: "Dawn to dusk, free.",
      blurb: "The home mountain itself — a rocky 1,340-foot summit rising straight off the Hudson with some of the best river views in the Highlands.",
      signature: "The open-rock overlook of Newburgh Bay, Bannerman's Castle, the Newburgh-Beacon Bridge and the distant Catskills.",
      texture: "Moderate with a few steep rocky scrambles; the Stillman Trail loop over Butter Hill and Storm King is about 2.5 miles with roughly 900 ft of gain. The Route 9W pulloff holds about 20 cars and fills early on clear weekends. For fit hikers and sure-footed older kids, not strollers; slick when icy.",
      tags: ["Hike", "Views", "Free"] },

    { name: "Black Rock Forest", town: "Cornwall", kind: "Preserve", lat: 41.4187, lon: -74.0105,
      address: "70 Reservoir Rd (off Route 9W), Cornwall, NY 12518", web: "https://www.blackrockforest.org",
      hours: "Dawn to dusk; $5 daily parking; closed during deer-hunting season.",
      blurb: "A 3,900-acre research forest laced with about 30 miles of trails, a chain of reservoirs and a rocky summit overlook.",
      signature: "The Black Rock summit overlook, with views of the Hudson, the Newburgh-Beacon Bridge and Schunnemunk Mountain.",
      texture: "The classic reservoir-and-summit loop is about 5.4 miles with roughly 1,000 ft of gain; shorter variations exist. Pay station $5/car (free for Friends members); dogs on leash, carry in carry out, no swimming. Good for fit families and dog walkers, too long for toddlers.",
      tags: ["Hike", "Views", "Dog-OK"] },

    { name: "Donahue Memorial Park", town: "Cornwall-on-Hudson", kind: "Waterfront", lat: 41.4470, lon: -74.0100,
      address: "Foot of Shore Rd, Cornwall-on-Hudson, NY 12520 (launch permit at Village Hall)", web: "https://cornwall-on-hudson.gov/Village-Clerk/Donahue-Memorial-Park",
      hours: "Dawn to dusk, free; launch permit required.",
      blurb: "The village's own riverfront park — a gazebo, picnic tables, grills and a car-top boat ramp on the Hudson.",
      texture: "Flat, grassy and stroller-friendly, and a beloved trainspotting spot as the active rail line runs right along the water. A permit from Village Hall is needed to launch, and ramp parking is very limited in summer.",
      tags: ["Waterfront", "Kayak", "Stroller-OK", "Free"], confidence: "medium" },

    { name: "Storm King Highway (Route 218)", town: "Cornwall", kind: "Scenic drive", lat: 41.4205, lon: -73.9905,
      address: "NY-218 between Cornwall-on-Hudson and West Point", web: "https://en.wikipedia.org/wiki/Storm_King_Highway",
      hours: "Open road, free.",
      blurb: "A historic 1916 cliff-hugging road cut into the side of Storm King, with small pullouts hundreds of feet above the river.",
      signature: "Panoramic pullout views up to 420 feet above the Hudson toward Breakneck Ridge and Bull Hill.",
      texture: "A roughly 3-mile scenic drive (not a hike) with a handful of small pullouts; narrow and winding, so go slow. It washed out in the July 2023 flood and has since been rebuilt and reopened. Spectacular in fall foliage.",
      tags: ["Scenic drive", "Views", "Free"] },

    { name: "Kowawese Unique Area at Plum Point", town: "New Windsor", kind: "Waterfront", lat: 41.4730, lon: -74.0030,
      address: "Plum Point Lane (off Route 9W), New Windsor, NY 12553", web: "https://www.orangecountygov.com/1478/Kowawese-Unique-Area-at-Plum-Point",
      hours: "Normally dawn to dusk — but see note.",
      blurb: "A 102-acre Hudson waterfront with a long sandy beach and a dramatic view of the river gorge toward Storm King.",
      texture: "Easy flat shoreline walking near the beach, plus Revolutionary War cannon-battery sites; car-top boats only, no swimming. IMPORTANT: as of this research the county lists it 'closed until further notice for public safety reasons' — verify status before visiting.",
      tags: ["Waterfront", "Beach", "Verify"], confidence: "medium" },

    { name: "Schunnemunk Mountain State Park", town: "Mountainville", kind: "Mountain", lat: 41.4075, lon: -74.0816,
      address: "Taylor Rd trailhead off NY-32, near 300 Taylor Rd, Mountainville, NY 10953", web: "https://parks.ny.gov/visit/state-parks/schunnemunk-state-park",
      hours: "Daylight hours, free.",
      blurb: "Orange County's highest peak — a long conglomerate-rock ridge crossed by the Jessup Trail and the Long Path.",
      signature: "The 1,664-foot summit ridge and the 'megaliths' — large purple-pink puddingstone formations off the Jessup Trail.",
      texture: "A real hike for fit hikers, not toddlers — eight marked trails over 20 miles, and a summit outing is a sustained climb of several hours over bare rock following cairns. A Metro-North-accessible trailhead sits off Otterkill Rd. Exposed and hot in summer.",
      tags: ["Hike", "Views", "Free"] },

    { name: "Moodna Viaduct", town: "Salisbury Mills", kind: "Overlook", lat: 41.4303, lon: -74.0992,
      address: "View from Orrs Mills Rd and Jackson Ave, Salisbury Mills, NY 12577", web: "https://en.wikipedia.org/wiki/Moodna_Viaduct",
      hours: "Free; active rail bridge — view from public roads only.",
      blurb: "A 3,200-foot-long steel railroad trestle rising 193 feet over the Moodna Creek valley, built 1906–1909 and still carrying Metro-North trains.",
      texture: "A roadside landscape overlook, not a hike — informal pulloff parking is limited, so use caution, and the trestle itself is railroad property. A classic fall-foliage photo. (It's the second-tallest railroad trestle east of the Mississippi, not the tallest, despite local lore.)",
      tags: ["Scenic drive", "Views", "Free"] },

    { name: "Stewart State Forest", town: "New Windsor", kind: "Forest", lat: 41.4870, lon: -74.1320,
      address: "Maple Ave access off NY-207, New Windsor, NY (near Stewart Airport)", web: "https://dec.ny.gov/places/stewart-state-forest",
      hours: "Dawn to dusk, free, year-round.",
      blurb: "A roughly 6,700-acre DEC state forest of meadows, old farm woodlands and wetlands with miles of mostly flat gravel roads.",
      signature: "One of the region's best grassland birding and butterfly areas — a designated Watchable Wildlife site.",
      texture: "Mostly flat and easy, good for relaxed walks and family bike rides on gravel roads. Wear blaze orange and check hunting dates in fall. Exposed and buggy in midsummer.",
      tags: ["Walk", "Birding", "Bike", "Free"] },

    { name: "Bull Hill / Mount Taurus (Washburn–Cornish loop)", town: "Cold Spring", kind: "Mountain", lat: 41.4265, lon: -73.9657,
      address: "Washburn Trail lot, east side of Route 9D just north of Cold Spring", web: "https://parks.ny.gov/parks/hudsonhighlands/",
      hours: "Sunrise to sunset, free.",
      blurb: "A steep, rewarding loop just north of Cold Spring with sweeping river overlooks and the ruins of the Cornish Estate.",
      signature: "Open-rock viewpoints over the Hudson toward Storm King, plus the historic Cornish Estate and quarry ruins.",
      texture: "Moderate to strenuous — the full loop is about 5.9 miles with roughly 1,500 ft of gain (shorter variants near 4.4). The marquee OPEN alternative to closed Breakneck just up the road; the small shared lot fills early.",
      tags: ["Hike", "Views", "Free"] },

    { name: "Little Stony Point", town: "Cold Spring", kind: "Waterfront", lat: 41.4265, lon: -73.9657,
      address: "Parking on the west side of Route 9D just north of Cold Spring", web: "https://www.scenichudson.org/explore-the-valley/outdoor-adventures/adventure/little-stony-point/",
      hours: "Sunrise to sunset, free.",
      blurb: "A flat, easy walk to a small rocky knob and sandy Hudson beach, with a short spur to a viewpoint facing Storm King.",
      texture: "The shoreline loop is about a mile and largely flat — family-friendly, though the sand-and-rock surface and short summit spur aren't reliably stroller-friendly. No swimming. Parking is limited and fills fast on weekends.",
      tags: ["Waterfront", "Beach", "Walk", "Free"] },

    { name: "Cold Spring waterfront", town: "Cold Spring", kind: "Waterfront", lat: 41.4205, lon: -73.9565,
      address: "Foot of Main St, Cold Spring, NY 10516 (Metro-North Cold Spring adjacent)", web: "https://www.scenichudson.org/explore-the-valley/scenic-hudson-parks/foundry-dock-park/",
      hours: "Dawn to dusk, free.",
      blurb: "A flat, walkable riverfront at the end of Main Street with a bandstand, fishing pier and big views across to Storm King and West Point.",
      texture: "Fully level and easily stroller- and toddler-friendly, two minutes from the Metro-North station, with village restaurants and restrooms steps away. Summer Sunday-evening bandstand concerts. Take the train — village parking fills on weekends.",
      tags: ["Waterfront", "Stroller-OK", "Transit", "Free"] },

    { name: "Constitution Marsh Audubon Sanctuary", town: "Garrison", kind: "Marsh", lat: 41.4055, lon: -73.9415,
      address: "127 Warren Landing Rd, Garrison; park via Boscobel, 1601 Route 9D", web: "https://www.audubon.org/constitution-marsh/visit",
      hours: "Trails sunrise to sunset, free; canoe tours by reservation.",
      blurb: "A 270-acre Hudson tidal marsh with a trail down to a long boardwalk over the wetland, rich in birdlife and framed by the Highlands.",
      signature: "The boardwalk reaching out into the tidal marsh, with more than 200 bird species recorded.",
      texture: "The trail to the marsh is under a mile but has steep rocky sections, so it's not stroller-friendly though the boardwalk is flat. No on-site general parking — use Boscobel (paid). Guided canoe tours run select dates spring through fall; reserve at 845-265-2601.",
      tags: ["Marsh", "Birding", "Walk"] },

    { name: "Indian Brook Falls", town: "Garrison", kind: "Waterfall", lat: 41.4075, lon: -73.9355,
      address: "Trailhead at 113 Indian Brook Rd, Garrison, NY 10524 (about 8 spaces)", web: "https://parks.ny.gov/parks/hudsonhighlands/",
      hours: "Sunrise to sunset, free.",
      blurb: "A short, easy walk along a brook to a single-drop waterfall tumbling into a rocky pool.",
      texture: "About 0.6 mile round-trip, but the path narrows near the falls and some spots require stepping on rocks in the water — fine for sure-footed kids, not strollers, and slippery when wet. Parking is only about 8 spaces. VERIFY ACCESS before going — AllTrails has flagged the trail closed and it couldn't be independently confirmed.",
      tags: ["Waterfall", "Walk", "Verify"], confidence: "medium" },

    { name: "Stonecrop Gardens", town: "Cold Spring", kind: "Garden", lat: 41.4445, lon: -73.8985,
      address: "81 Stonecrop Lane (off Route 301), Cold Spring, NY 10516", web: "https://www.stonecrop.org/visitor-information/",
      hours: "Mon, Wed, Fri, Sat plus one Sunday monthly, 10–5 (last entry 4:30); adults $10.",
      blurb: "A 12-acre hilltop display garden with woodland and water gardens, alpine beds, a cliff garden and a glasshouse.",
      texture: "A leisurely strolling garden, not a hike, but many areas are inaccessible to strollers because paths are narrow and uneven. Allow 1–2 hours; reservations requested for Saturdays and the monthly Sunday.",
      tags: ["Garden", "Walk"] },

    { name: "Mount Beacon Park", town: "Beacon", kind: "Mountain", lat: 41.4957, lon: -73.9564,
      address: "Parking at Route 9D and Howland Ave, Beacon, NY 12508", web: "https://www.scenichudson.org/explore-the-valley/scenic-hudson-parks/mount-beacon-park/",
      hours: "Dawn to dusk, free.",
      blurb: "A steep, history-rich climb up the route of a former funicular to a restored fire tower with sweeping valley views.",
      signature: "The restored South Beacon fire tower, plus the casino and Incline Railway ruins partway up.",
      texture: "Moderate to strenuous — about 200 stairs along the old incline, then natural terrain; commonly cited around 4–4.5 miles round-trip with roughly 1,000 ft of gain. The lot fills very early on clear weekends. The casino-ruins overlook is the first big payoff; the fire-tower summit is the longer objective.",
      tags: ["Hike", "Views", "Free"] },

    { name: "Bear Mountain State Park", town: "Bear Mountain", kind: "State park", lat: 41.3120, lon: -73.9887,
      address: "Bear Mountain Inn area, off Palisades Pkwy or Route 9W, Bear Mountain, NY 10911", web: "https://parks.ny.gov/visit/state-parks/bear-mountain-state-park",
      hours: "Dawn to dusk, year-round; $10 per vehicle when staffed.",
      blurb: "A landmark Highlands park anchored by Hessian Lake, the historic Inn and a summit reachable on foot or by the seasonal Perkins Memorial Drive.",
      signature: "Bear Mountain summit and Perkins Tower, the Trailside Zoo, an indoor carousel and a seasonal ice rink.",
      texture: "Two outings in one: the flat ~1.5-mile Hessian Lake loop is the stroller and toddler option, while the climb to the summit is for fit hikers. Note: trail detours near the Inn affect the Appalachian and Major Welch trails through Summer 2027, and the pool opening is delayed to July 2026.",
      tags: ["Hike", "Views", "Stroller-OK", "Family"] },

    { name: "Harriman State Park", town: "Southfields", kind: "State park", lat: 41.2516, lon: -74.1108,
      address: "Many entrances; Tiorati Circle, 2300 Seven Lakes Dr, Southfields, NY 10975", web: "https://parks.ny.gov/visit/state-parks/harriman-state-park",
      hours: "Year-round, daylight hours; seasonal beach and parking fees.",
      blurb: "The state's second-largest park — 31 lakes and reservoirs and roughly 200 miles of hiking trails.",
      signature: "Swimming beaches at Lakes Tiorati and Sebago, plus the Appalachian Trail running the length of the park.",
      texture: "Something for everyone, from beach-day families to long-distance hikers on the Long Path and AT. Beaches charge seasonal fees. About a 35–45 minute drive south.",
      tags: ["Hike", "Lake", "Beach", "Family"] },

    { name: "Orange Heritage Trail", town: "Goshen to Harriman", kind: "Rail trail", lat: 41.4020, lon: -74.3240,
      address: "Trailheads in Goshen, Chester, Monroe and Harriman (former Erie Railroad bed)", web: "https://www.orangecountygov.com/1475/Heritage-Trail",
      hours: "Dawn to dusk, free.",
      blurb: "A paved 19.5-mile rail trail on the former Erie Railroad through wildlife sanctuary, streams and rolling meadows.",
      texture: "Flat and paved end to end — genuinely good for strollers, wheelchairs and easy family bike rides, in any length you like from four trailheads with parking. The best flat, stroller-and-bike-friendly route in the area, about 25–35 minutes west.",
      tags: ["Rail trail", "Bike", "Stroller-OK", "Free"] },

    { name: "Sterling Forest State Park", town: "Tuxedo", kind: "State park", lat: 41.1980, lon: -74.2630,
      address: "Lautenberg Visitor Center, 116 Old Forge Rd, Tuxedo, NY 10987", web: "https://parks.ny.gov/visit/state-parks/sterling-forest-state-park",
      hours: "Visitor center 8–4:30 daily; seasonal vehicle fees.",
      blurb: "A roughly 21,900-acre forested park in the Ramapo Mountains with a lakeside visitor center, miles of trails and exceptional wildlife habitat.",
      signature: "Sterling Lake and the historic fire tower, with nationally regarded birding.",
      texture: "A genuine hiking destination, not a stroller park — terrain from gentle lake paths to a sustained tower climb. Call 845-351-5907 to confirm the tower is open to climbing. The farthest feature here, about 25–35 miles southwest.",
      tags: ["Hike", "Lake", "Birding", "Views"] }
  ],

  /* ---------------- HEALTHCARE ---------------- */
  health: [
    { name: "Montefiore St. Luke's Cornwall — Newburgh Campus (ER)", town: "Newburgh", kind: "Hospital", lat: 41.5030, lon: -74.0180,
      address: "70 Dubois St, Newburgh, NY 12550", phone: "845-561-4400", web: "https://www.montefioreslc.org/our-services/emergency-department/",
      hours: "Emergency room open 24/7.",
      blurb: "The nearest full-service hospital emergency room — a 242-bed acute-care hospital and Level III trauma center.",
      texture: "Your closest real ER, roughly 4–5 miles north (10–15 min). Do NOT confuse it with the Cornwall campus on Laurel Ave, which has no emergency room. For any true emergency, Dubois Street in Newburgh is the address.",
      tags: ["Hospital", "Emergency room", "Closest ER"] },

    { name: "Montefiore St. Luke's Cornwall — Cornwall Campus (outpatient, no ER)", town: "Cornwall", kind: "Hospital", lat: 41.4420, lon: -74.0400,
      address: "19 Laurel Ave, Cornwall, NY 12518", phone: "845-534-7711", web: "https://www.montefioreslc.org/our-services/outpatient-services/",
      blurb: "The outpatient center closest to the village — Littman Cancer Center, cardiac and pulmonary rehab, sleep medicine, physical therapy and pain management.",
      texture: "Physically the closest hospital building (1–2 miles), but it is outpatient only with NO emergency room. Listed so it isn't mistaken for an ER.",
      tags: ["Outpatient", "Cancer center", "Rehab", "No ER"] },

    { name: "Garnet Health Medical Center", town: "Middletown", kind: "Hospital", lat: 41.4670, lon: -74.3920,
      address: "707 East Main St, Middletown, NY 10940", phone: "845-333-1000", web: "https://www.garnethealth.org/location/emergency-department-garnet-health-medical-center",
      hours: "Emergency room open 24/7.",
      blurb: "A 383-bed hospital and Orange County's first Level II adult trauma center.",
      texture: "A higher trauma level than Newburgh, but much farther west (about 20–25 miles, 35–45 min). Worth knowing for a serious trauma case. Formerly Orange Regional Medical Center.",
      tags: ["Hospital", "Emergency room", "Level II trauma"] },

    { name: "Vassar Brothers Medical Center", town: "Poughkeepsie", kind: "Hospital", lat: 41.7030, lon: -73.9330,
      address: "45 Reade Place, Poughkeepsie, NY 12601", web: "https://www.nuvancehealth.org/locations/vassar-brothers-medical-center",
      hours: "Emergency room open 24/7.",
      blurb: "A 350-bed hospital on the Hudson — Level II trauma center with the region's only Level III NICU and a cardiothoracic surgery program.",
      texture: "The big east-of-river referral hospital, about 20–25 miles over the Newburgh-Beacon Bridge. Strong for cardiac and neonatal care. Ownership recently moved from Nuvance to Northwell Health, so signage may be in transition.",
      tags: ["Hospital", "Across the river", "Cardiac", "NICU"] },

    { name: "MidHudson Regional Hospital", town: "Poughkeepsie", kind: "Hospital", lat: 41.7170, lon: -73.9180,
      address: "241 North Rd, Poughkeepsie, NY 12601", web: "https://www.wmchealth.org/locations/midhudson-regional-hospital",
      hours: "Emergency room open 24/7.",
      blurb: "A 243-bed WMCHealth hospital with a Level II trauma center on the east side of the river.",
      texture: "Across the river, roughly 18–22 miles via the bridge. A real option if you're already on the east side, but the bridge crossing makes Newburgh faster from the village.",
      tags: ["Hospital", "Across the river"] },

    { name: "Emergency One Urgent Care", town: "New Windsor", kind: "Urgent care", lat: 41.4660, lon: -74.0640,
      address: "306 Windsor Hwy, New Windsor, NY 12553", phone: "845-787-1400", web: "https://eonekingston.com",
      hours: "Mon–Fri 8–8, Sat–Sun 8–4.",
      blurb: "A locally owned walk-in urgent care with on-site X-ray and labs for most injuries and illnesses.",
      texture: "The closest dedicated urgent care, about 5–6 miles via Windsor Highway (about 12 min).",
      tags: ["Urgent care", "Walk-in", "X-ray", "Closest"] },

    { name: "Crystal Run Healthcare — Newburgh", town: "Newburgh", kind: "Urgent care", lat: 41.5390, lon: -74.0750,
      address: "1200 Route 300, Newburgh, NY 12550", phone: "845-787-0863", web: "https://www.crystalrunhealthcare.com/locations/newburgh",
      hours: "Mon–Sat 8–7:30, Sun 8–5:30.",
      blurb: "Walk-in urgent care inside a large multispecialty office — primary care, pediatrics, imaging and 50-plus specialties.",
      texture: "About 7–8 miles north on Route 300. Now part of Optum (UnitedHealth) and on Epic/MyChart since 2025, so check insurance. A one-stop site if you might need imaging or specialty follow-up.",
      tags: ["Urgent care", "Multispecialty", "Imaging"] },

    { name: "WellNow Urgent Care", town: "Newburgh", kind: "Urgent care", lat: 41.5410, lon: -74.0770,
      address: "1425 Route 300, Newburgh, NY 12550", phone: "845-674-9735", web: "https://www.wellnow.com/urgent-care-centers/new-york/newburgh/1425-route-300-12550/",
      hours: "Daily 8–8.",
      blurb: "A national-chain walk-in urgent care for minor illness and injury on the Route 300 corridor.",
      texture: "Right next to Crystal Run. Open until 8pm seven days — the latest of the nearby options and handy for a weekend evening.",
      tags: ["Urgent care", "Open late", "Weekends"] },

    { name: "The Medical Group at Montefiore St. Luke's — Cornwall", town: "Cornwall", kind: "Primary care", lat: 41.4440, lon: -74.0180,
      address: "19 Laurel Ave, Cornwall, NY 12518", phone: "845-534-7080", web: "https://www.slcmedgroup.com/services/primary-care/",
      blurb: "Primary care plus specialties (oncology, rheumatology, infectious disease, women's health) in the Montefiore system.",
      texture: "The closest full primary-care practice, essentially in the village's backyard. Offers same-day appointments and walk-ins.",
      tags: ["Primary care", "Same-day", "Closest"] },

    { name: "Horizon Family Medical Group — New Windsor", town: "New Windsor", kind: "Primary care", lat: 41.4800, lon: -74.0300,
      address: "Multiple New Windsor offices (e.g. 270 Quassaick Ave; 905 Little Britain Rd)", web: "https://horizonfamilymedical.com/locations",
      blurb: "A large independent multi-site family and primary-care group with several New Windsor offices plus weekend care.",
      texture: "A strong nearby independent alternative to the hospital groups, about 5–10 min south. Their Cornwall office (55 Quaker Ave) is ophthalmology only, so for primary care go to New Windsor; confirm the office and provider by phone.",
      tags: ["Primary care", "Family medicine", "Weekend hours"], confidence: "medium" },

    { name: "Orange Pediatric Care", town: "New Windsor", kind: "Pediatrics", lat: 41.4790, lon: -74.0250,
      address: "3206 Route 9W, New Windsor, NY 12553", phone: "845-561-5227", web: "https://bchp.childrenshospital.org/practices/orange-pediatric-care",
      hours: "Mon 9–5, Tue 9–6, Wed–Thu 9–5, Fri 9–6.",
      blurb: "A pediatric primary-care practice affiliated with Boston Children's Health Physicians.",
      texture: "The nearest dedicated pediatric practice, about 5–10 min south on Route 9W. There's no standalone practice literally named 'Cornwall Pediatrics' — this is the closest real pediatric group.",
      tags: ["Pediatrics", "Children", "Closest peds"] },

    { name: "Dr. Michael A. Seitz, DDS", town: "Cornwall-on-Hudson", kind: "Dentist", lat: 41.4440, lon: -74.0200,
      address: "255 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-2100", web: "https://michaelseitzdds.com",
      hours: "Mon 9–7, Tue 9–5, Thu–Fri 9–5; closed Wed.",
      blurb: "A long-established general, family and cosmetic dental practice — the dentist physically in the village.",
      texture: "Walking distance for many residents; roughly 30 years serving Cornwall with a conservative-treatment philosophy.",
      tags: ["Dentist", "Family dentistry", "Walkable"] },

    { name: "Creating Dental Excellence Cornwall", town: "Cornwall", kind: "Dentist", lat: 41.4440, lon: -74.0130,
      address: "222 Main St, Cornwall, NY 12518", phone: "845-534-3828", web: "https://www.cornwalldentalexcellence.com",
      blurb: "General and cosmetic dentistry with implants, Invisalign, sedation dentistry, root canals and family care.",
      texture: "On Main Street, just up the hill from the village. The broader-service cosmetic-and-implant option locally. Call to confirm hours.",
      tags: ["Dentist", "Cosmetic", "Implants", "Invisalign"] },

    { name: "Jules Vision Vails Gate", town: "Vails Gate", kind: "Optometrist", lat: 41.4560, lon: -74.0730,
      address: "384 Windsor Hwy, Vails Gate, NY 12584", phone: "845-561-6305", web: "https://julesvisionvailsgate.com",
      hours: "Mon–Fri 10–6, Sat 10–5.",
      blurb: "A family-owned (since 1978) optical and eye-care center with optometrists on staff and an on-site finishing lab.",
      texture: "About 10–15 min away, attached to the Vails Gate ShopRite plaza. Same-hour eyewear is possible via the in-house lab; they also do walk-in driver's-license vision screenings.",
      tags: ["Optometrist", "Eye exam", "Glasses"] },

    { name: "Access Physical Therapy & Wellness — New Windsor", town: "New Windsor", kind: "Physical therapy", lat: 41.4800, lon: -74.0300,
      phone: "845-913-7152", web: "https://accessphysicaltherapywellness.com/location/new-windsor-ny/",
      hours: "Mon–Thu 7–6, Fri 7–12.",
      blurb: "An outpatient physical-therapy clinic with an orthopedic and sports-medicine focus, part of the regional Access network.",
      texture: "The nearest branded PT clinic, about 10 min south, with strong local reviews. Confirm the exact address and direct phone when booking.",
      tags: ["Physical therapy", "Sports medicine", "Orthopedic"], confidence: "medium" }
  ],

  /* ---------------- EVERYDAY ESSENTIALS ---------------- */
  essentials: [
    { name: "Village Nursery School", town: "Cornwall-on-Hudson", kind: "Preschool", lat: 41.4430, lon: -74.0130,
      address: "222 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-9254", web: "https://villagenurseryschool.net",
      blurb: "A church-sponsored but secular-curriculum nursery school for ages 2 to 4, using a play-based approach.",
      texture: "The closest preschool to the village center, walkable from much of Cornwall-on-Hudson. Celebrating 60-plus years and actively enrolling.",
      tags: ["Preschool", "Ages 2-4", "In the village", "Half-day"] },

    { name: "Butterhill Day School", town: "Cornwall-on-Hudson", kind: "Childcare", lat: 41.4390, lon: -74.0100,
      address: "336 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-2341", web: "https://butterhilldayschool.com",
      blurb: "A full-spectrum day school and daycare in the village, serving infants through school-age children.",
      texture: "In-village full-day care, useful if you need more than a half-day nursery school. A Cornwall district Universal Pre-K provider, so a 4-year-old placed here via the lottery attends tuition-free.",
      tags: ["Childcare", "Daycare", "Infants", "UPK", "Full-day"] },

    { name: "Cornwall Central School District — Universal Pre-K", town: "Cornwall-on-Hudson", kind: "Pre-K", lat: 41.4440, lon: -74.0170,
      address: "District office: 24 Idlewild Ave, Cornwall-on-Hudson, NY 12520", web: "https://www.cornwallschools.com/upk-faqs",
      hours: "6 hours/day, Mon–Fri, 180 days.",
      blurb: "Free grant-funded Universal Pre-K, delivered through five contracted community providers (not in a district building).",
      texture: "The key entry for free Pre-K. Child must turn 4 by December 1; placement is by lottery and you provide transportation. Ask about a fall-2026 waitlist and watch for the next window around February.",
      tags: ["Pre-K", "Free", "School district", "Lottery"] },

    { name: "Windsor Academy", town: "New Windsor", kind: "Childcare", lat: 41.4910, lon: -74.0220,
      address: "271 Quassaick Ave, New Windsor, NY 12553", phone: "845-562-3711", web: "https://windsoracademy.org",
      hours: "Mon–Fri 6:30am–6pm, year-round.",
      blurb: "Full-day, year-round private childcare for ages 8 weeks to pre-K, plus summer camp.",
      texture: "About 10 min away. The early-open, late-close hours make it realistic for two working parents — a different niche than the half-day village nursery school. Also a Cornwall district UPK provider.",
      tags: ["Childcare", "Daycare", "Infants", "Full-day"] },

    { name: "Little Friends Learning Loft (Newburgh JCC)", town: "Newburgh", kind: "Preschool", lat: 41.5160, lon: -74.0380,
      address: "290 North St, Newburgh, NY 12550", phone: "845-561-6602", web: "https://newburghjcc.org/learingloft",
      blurb: "A Montessori-based preschool for ages 3 to 6 at the Newburgh JCC, with an AMS-certified lead teacher.",
      texture: "About 15 min away and open to all families, not only JCC members — a genuine Montessori option closer than the Dutchess County schools.",
      tags: ["Preschool", "Montessori", "Ages 3-6"] },

    { name: "Walden Savings Bank — Cornwall", town: "Cornwall-on-Hudson", kind: "Bank", lat: 41.4350, lon: -74.0180,
      address: "321 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-457-7700", web: "https://waldensavings.bank/locations/cornwall",
      hours: "Lobby Mon–Thu 9–4, Fri 9–5; drive-up opens 8:30.",
      blurb: "A full-service community bank branch with drive-up ATM, instant-issue debit cards and notary service.",
      texture: "The ONLY bank physically in Cornwall-on-Hudson, about 0.7 mi from the village center on Hudson Street. Every other major bank is a 10-minute drive to the Vails Gate / Windsor Highway corridor.",
      tags: ["Bank", "Community bank", "In the village", "Closest"] },

    { name: "Chase — New Windsor", town: "New Windsor", kind: "Bank", lat: 41.4640, lon: -74.0580,
      address: "353 Windsor Hwy, New Windsor, NY 12553", phone: "845-565-5380", web: "https://www.chase.com/locator/banking/us/ny/new-windsor/353-windsor-hwy",
      blurb: "A full-service Chase branch with ATM on the Windsor Highway retail strip.",
      texture: "The closest Chase, about 10–12 min away in the Vails Gate banking cluster.",
      tags: ["Bank", "National bank", "ATM"] },

    { name: "KeyBank — Vails Gate", town: "New Windsor", kind: "Bank", lat: 41.4520, lon: -74.0690,
      address: "119 Temple Hill Rd, New Windsor, NY 12553", phone: "845-565-8714", web: "https://www.key.com/locations/ny/new-windsor/BRCH32900961/119-temple-hill-rd",
      blurb: "A full-service KeyBank branch with ATM — the closest KeyBank to Cornwall.",
      texture: "About 10 min via Route 32 / Temple Hill. The older KeyBank at 65 Quaker Ave in Cornwall appears closed, so use Vails Gate.",
      tags: ["Bank", "National bank", "ATM"] },

    { name: "M&T Bank — Newburgh", town: "Newburgh", kind: "Bank", lat: 41.5300, lon: -74.0200,
      address: "5075 Route 9W, Newburgh, NY 12550", phone: "845-565-3000", web: "https://locations.mtb.com/ny/newburgh",
      hours: "Lobby Mon–Thu 9–4, Fri 9–5, Sat 9–12.",
      blurb: "A full-service M&T branch with drive-up; a second branch is at 56 Route 17K.",
      texture: "M&T's closest staffed branch is in Newburgh, about 15 min away. There's a closer M&T ATM-only point at 170 Windsor Highway in New Windsor.",
      tags: ["Bank", "National bank", "Drive-up"] },

    { name: "Hudson Valley Credit Union — New Windsor", town: "New Windsor", kind: "Credit union", lat: 41.4660, lon: -74.0580,
      address: "265 Windsor Hwy, New Windsor, NY 12553", web: "https://www.hvcu.org/about-us/branches-atms/new-windsor-branch/",
      hours: "Mon–Wed 9–5:30, Thu–Fri 9–6, Sat 9–2.",
      blurb: "A full-service credit union branch on the Windsor Highway corridor.",
      texture: "About 10–12 min away, confirmed open on HVCU's own site despite a stale Yelp closed tag under the old name.",
      tags: ["Credit union", "ATM"] },

    { name: "Mid-Hudson Valley Federal Credit Union — Newburgh", town: "Newburgh", kind: "Credit union", lat: 41.5400, lon: -74.0750,
      address: "1224 Route 300, Newburgh, NY 12550", phone: "845-336-4444", web: "https://www.mhvfcu.com/mid-hudson-valley-credit-union-locations/newburgh-branch",
      hours: "Mon–Fri 9–5, Sat 9–2.",
      blurb: "A full-service MHVFCU branch on the Route 300 corridor.",
      texture: "The closest MHVFCU branch, about 15–18 min north. Their Orange County branches are Newburgh and Middletown only.",
      tags: ["Credit union", "ATM"] },

    { name: "Cumberland Farms", town: "Cornwall-on-Hudson", kind: "Gas station", lat: 41.4320, lon: -74.0150,
      address: "263 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-4458", web: "https://locations.cumberlandfarms.com/us/ny/cornwall-on-hudson/263-hudson-st",
      hours: "Daily ~6am–11pm.",
      blurb: "A convenience store with gas pumps right on Hudson Street in the village.",
      texture: "The closest place to actually buy gas to the village center. It's small and reviewers note prices can run higher than the Vails Gate stations; the SmartPay app gives a per-gallon discount.",
      tags: ["Gas station", "Convenience", "In the village", "Closest"] },

    { name: "Vails Gate Sunoco", town: "New Windsor", kind: "Gas station", lat: 41.4640, lon: -74.0580,
      address: "362 Windsor Hwy, New Windsor, NY 12553", phone: "845-569-8051", web: "https://www.sunoco.com/locations/store/362-windsor-hgwy-new-windsor-ny-0853941300",
      hours: "Daily ~6am–11pm.",
      blurb: "A reliable Sunoco fill-up on the Route 32 / Windsor Highway corridor.",
      texture: "About 10 min from the village, clustered with the Vails Gate banks — often cheaper than the in-village Cumberland Farms.",
      tags: ["Gas station"] },

    { name: "Anytime Fitness", town: "Cornwall", kind: "Gym", lat: 41.4430, lon: -74.0400,
      address: "29 Quaker Rd, Cornwall, NY 12518", phone: "845-237-7016", web: "https://www.anytimefitness.com/gyms/2870/cornwall-ny-12518/",
      hours: "Open 24 hours (staffed hours vary).",
      blurb: "A 24-hour-access gym with cardio and strength equipment, personal training and group classes.",
      texture: "The closest full gym, on the Quaker Ave fitness strip about 5–7 min away. The 24/7 keyfob access is the draw for off-hours workouts.",
      tags: ["Gym", "24 hour", "Closest"] },

    { name: "Rapid Fire Fitness", town: "Cornwall", kind: "Gym", lat: 41.4430, lon: -74.0400,
      address: "55 Quaker Ave, Ste 100, Cornwall, NY 12518", phone: "845-534-2344", web: "https://www.ocrapidfirefitness.com",
      blurb: "A group-fitness and personal-training studio — boot camp, cross training and Olympic weightlifting.",
      texture: "On the same Quaker Ave strip as Anytime Fitness. The boutique, class-based counterpoint to Anytime's open-gym model.",
      tags: ["Gym", "Group fitness", "Personal training"] },

    { name: "Studio 208", town: "Cornwall-on-Hudson", kind: "Yoga", lat: 41.4320, lon: -74.0150,
      address: "208 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-1208", web: "http://www.studio208hudson.com",
      blurb: "A multi-discipline movement studio — yoga, Pilates, Nia, Tai Chi, MELT and meditation.",
      texture: "The one mind-body studio actually in the village, walkable for in-village residents, with an eclectic class mix rather than a pure yoga studio.",
      tags: ["Yoga", "Pilates", "In the village"] },

    { name: "Planet Fitness — New Windsor", town: "New Windsor", kind: "Gym", lat: 41.4650, lon: -74.0570,
      address: "374 Windsor Hwy, Ste 160, New Windsor, NY 12553", phone: "845-247-5549", web: "https://www.planetfitness.com/gyms/newburgh-ny/",
      blurb: "A large budget chain gym with cardio and strength machines.",
      texture: "The closest Planet Fitness, about 10 min away beside the Vails Gate banks. The big-box option if the Cornwall studios are too small.",
      tags: ["Gym", "Budget", "Chain"] },

    { name: "Main Street Veterinary Clinic", town: "Cornwall-on-Hudson", kind: "Veterinarian", lat: 41.4450, lon: -74.0220,
      address: "350 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-3644",
      blurb: "A small-animal (dog and cat) veterinary clinic right in the village.",
      texture: "The only vet actually in Cornwall-on-Hudson. Active in directories with 100-plus reviews, but no first-party site to confirm 2026 hours, and two phone numbers appear across listings — call ahead.",
      tags: ["Veterinarian", "Small animal", "In the village"], confidence: "medium" },

    { name: "Cornwall Veterinary Hospital", town: "Cornwall", kind: "Veterinarian", lat: 41.4510, lon: -74.0380,
      address: "2020 NY-32, Cornwall, NY 12518", phone: "845-534-8991", web: "https://www.cornwallveterinaryhospital.com",
      hours: "Mon/Wed/Fri 8:30–6, Tue/Thu 8:30–12 & 1–6, Sat 8:30–1:30.",
      blurb: "A full-service small-animal hospital serving the area since 1980 and accepting new clients.",
      texture: "On Route 32, 5–10 min from the village — the established full-service general vet for the immediate area.",
      tags: ["Veterinarian", "Full service", "Accepting clients"] },

    { name: "VCA Flannery Animal Hospital", town: "New Windsor", kind: "Veterinarian", lat: 41.4910, lon: -74.0640,
      address: "789 Little Britain Rd, New Windsor, NY 12553", phone: "845-565-7387", web: "https://vcahospitals.com/flannery",
      hours: "24 hours Mon–Thu; Fri to 10pm; Sat 8–6; Sun 8–midnight.",
      blurb: "A full-service animal hospital that also provides urgent and emergency care with 24-hour weekday coverage.",
      texture: "The practical emergency and after-hours vet closest to the village, about 15 min away — the nearest 24-hour-capable option (a dedicated ER, Guardian Veterinary Emergency, is farther out in Middletown).",
      tags: ["Veterinarian", "Emergency", "24 hour"] },

    { name: "Foam & Wash Car Wash — Vails Gate", town: "Vails Gate", kind: "Car wash", lat: 41.4660, lon: -74.0490,
      address: "409 Windsor Hwy, Vails Gate, NY 12553", phone: "845-562-9970", web: "https://foamandwash.com/location-vails-gate/",
      hours: "Tunnel Mon–Sat 7:30–7, Sun 8–6; touchless and self-serve bays 24 hours.",
      blurb: "A full-service soft-cloth tunnel plus a 24-hour touchless automatic and two self-serve bays with vacuums.",
      texture: "The closest real car wash, about 10 min out — staffed tunnel by day, self-serve or touchless any hour. Unlimited monthly memberships available.",
      tags: ["Car wash", "Self-serve", "24 hour"] },

    { name: "Vails Gate Cleaners — Cornwall drop store", town: "Cornwall", kind: "Laundry", lat: 41.4395, lon: -74.0270,
      address: "295 Main St, Cornwall, NY 12518", phone: "845-534-9000", web: "https://vgcleaners.com/locations/",
      hours: "Mon–Fri 8–5, Sat 9–3.",
      blurb: "A neighborhood drop store for dry cleaning, wash-dry-fold, tailoring and shoe repair.",
      texture: "The closest dry-cleaning drop-off, on Main Street about 5 min away. No self-service machines here — for coin laundry use their Vails Gate location.",
      tags: ["Dry cleaner", "Wash-and-fold", "Alterations"] },

    { name: "Vails Gate Cleaners — 24-hour laundromat", town: "Vails Gate", kind: "Laundry", lat: 41.4640, lon: -74.0560,
      address: "115 Temple Hill Rd, New Windsor, NY 12553", phone: "845-565-5130", web: "https://vgcleaners.com/locations/",
      hours: "Attended Mon–Fri 7–7, Sat 7–5, Sun 9–3; self-service open 24 hours.",
      blurb: "A full laundromat with self-service machines plus drop-off dry cleaning and tailoring.",
      texture: "About 10 min away — the nearest place to wash your own laundry, open 24 hours. A second 24-hour laundromat, Laundry Zone (407 Blooming Grove Tpke), is nearby as a backup.",
      tags: ["Laundromat", "Self-service", "24 hour"] },

    { name: "Hudson Street Hair Company", town: "Cornwall-on-Hudson", kind: "Salon", lat: 41.4465, lon: -74.0155,
      address: "261 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-7636", web: "https://www.facebook.com/HudsonStreetHair/",
      hours: "Tue–Fri 9–8, Sat 9–4; closed Sun–Mon.",
      blurb: "A full-service hair salon — cuts, color, highlights, perms and waxing.",
      texture: "The closest salon to the village center, genuinely walkable. Late weeknight hours (to 8pm) make it easy after work.",
      tags: ["Salon", "Hair", "In the village", "Closest"] },

    { name: "Fresh Cuts Barber Shop", town: "Cornwall", kind: "Salon", lat: 41.4400, lon: -74.0300,
      address: "308 Main St, Cornwall, NY 12518", phone: "845-534-1200", web: "https://freshcutbarbercornwall.com",
      hours: "Mon–Fri 10–7, Sat 8–5, Sun 9–3.",
      blurb: "A traditional men's and family barber shop on Main Street — walk-ins and online booking.",
      texture: "About 5 min from the village; the go-to neighborhood barber, open 7 days. Heads-up: cash only, but there's an ATM on premises.",
      tags: ["Barber", "Men's haircut", "Walk-in", "Cash only"] }
  ],

  /* ---------------- GETTING SET UP (civic & official) ---------------- */
  civic: [
    { name: "Village of Cornwall-on-Hudson (Village Hall)", town: "Cornwall-on-Hudson", kind: "Government", lat: 41.4445, lon: -74.0190,
      address: "325 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-4200", web: "https://cornwall-on-hudson.gov",
      hours: "Mon–Fri 8:30–4:30.",
      blurb: "Your village government — clerk, mayor and Village Board, plus village police, fire and public works. This is the right government for a 10 Abbott Lane address.",
      texture: "The Village Board meets twice a month on Monday nights (work session 2nd Monday, business meeting 3rd Monday). Distinct from the Town of Cornwall. Start here for water, sewer, trash and permits.",
      tags: ["Village", "Clerk", "Mayor", "Primary"] },

    { name: "Town of Cornwall (Town Hall)", town: "Cornwall", kind: "Government", lat: 41.4490, lon: -74.0290,
      address: "183 Main St, Cornwall, NY 12518", phone: "845-534-3760", web: "https://cornwallny.gov",
      hours: "Mon–Fri 8:30–4:30.",
      blurb: "The Town of Cornwall government (separate from the Village) — supervisor, town clerk, highway and sanitation, town police and justice court.",
      texture: "Town Clerk 845-534-9100. The town surrounds and is distinct from the village; some services (town court, town highway, a mobile DMV stop) run from 183 Main St.",
      tags: ["Town", "Supervisor", "Town clerk"] },

    { name: "Cornwall Public Library", town: "Cornwall", kind: "Library", lat: 41.4467, lon: -74.0263,
      address: "395 Hudson St, Cornwall, NY 12518", phone: "845-534-8282", web: "https://www.cornwallpubliclibrary.org",
      hours: "Mon–Thu 9–8, Fri 9–6, Sat 9–4, Sun 1–4 (Sunday seasonal).",
      blurb: "The public library serving Cornwall and Cornwall-on-Hudson — programs, materials, story times and meeting space.",
      texture: "A great first stop for a new family — get a card, check the story-time and after-school schedule. Sunday hours are often suspended in summer.",
      tags: ["Library", "Programs", "Story time", "Free"] },

    { name: "Cornwall Central School District", town: "Cornwall-on-Hudson", kind: "School", lat: 41.4430, lon: -74.0210,
      address: "District office: 24 Idlewild Ave, Cornwall-on-Hudson, NY 12520", phone: "845-534-8009", web: "https://www.cornwallschools.com",
      blurb: "The K-12 public school district for Cornwall, Cornwall-on-Hudson and parts of New Windsor and Woodbury.",
      texture: "Schools: Cornwall-on-Hudson Elementary, Cornwall Elementary, Willow Avenue Elementary, Cornwall Middle School (122 Main St) and Cornwall Central High School (10 Dragon Dr, New Windsor). Parent communication runs through ParentSquare and the Parent Portal.",
      tags: ["Schools", "District", "Parents", "K-12"] },

    { name: "Emergency — call 911", town: "Cornwall-on-Hudson", kind: "Emergency", lat: null, lon: null,
      phone: "911",
      blurb: "For any fire, medical or police emergency, dial 911. A village address is served by the Cornwall-on-Hudson police and fire departments.",
      texture: "Cornwall EMS is staffed 24/7 (operated with New Windsor Volunteer Ambulance Corps for paramedic-level care). For a gas odor, call 911 or Central Hudson at 800-942-8274.",
      tags: ["Emergency", "911", "Fire", "Police", "EMS"] },

    { name: "Village of Cornwall-on-Hudson Police (non-emergency)", town: "Cornwall-on-Hudson", kind: "Emergency", lat: 41.4445, lon: -74.0190,
      address: "325 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-8100", web: "https://cornwall-on-hudson.gov/Departments/Police",
      hours: "Dispatch 24/7. Use 911 for emergencies.",
      blurb: "The village police department covering 10 Abbott Lane; the Town of Cornwall has its own separate department.",
      texture: "Directories list 845-534-8100 for the village PD, but the same number also appears for the Town PD (183 Main St) — they may share dispatch, so confirm the right desk when calling non-emergency.",
      tags: ["Police", "Non-emergency", "Village"], confidence: "medium" },

    { name: "Orange County Sheriff's Office", town: "Goshen", kind: "Emergency", lat: 41.4023, lon: -74.3243,
      address: "110 Wells Farm Rd, Goshen, NY 10924", phone: "911", web: "https://www.orangecountygov.com",
      blurb: "Countywide law enforcement and corrections, backing up the local Cornwall police.",
      texture: "Confirm the current non-emergency administrative line on the county site; the Goshen campus is the long-standing county-seat location.",
      tags: ["Sheriff", "County"], confidence: "medium" },

    { name: "Greater Cornwall Chamber of Commerce", town: "Cornwall", kind: "Chamber", lat: 41.4467, lon: -74.0263,
      address: "PO Box 700, Cornwall, NY 12518 (mailing)", phone: "845-675-5014", web: "https://cornwallchamber.org/business-directory/",
      blurb: "The local chamber, whose online business directory is a handy index of Cornwall-area shops, trades and services.",
      texture: "Email info@cornwallchamber.org. The directory and a community calendar cover Cornwall and Cornwall-on-Hudson — useful for finding established local businesses and tradespeople (membership is paid, not a vetting).",
      tags: ["Chamber", "Business directory", "Trades"] },

    { name: "The Cornwall Local (newspaper)", town: "Cornwall", kind: "News", lat: 41.4467, lon: -74.0263,
      address: "PO Box 518, Cornwall, NY 12518", phone: "845-534-7771", web: "https://www.timeshudsonvalley.com/cornwall-local/",
      blurb: "Cornwall's community newspaper since 1888, now published under Times Hudson Valley Media.",
      texture: "Ownership moved to Times Hudson Valley Media, so older 'Straus News' branding is dated. Verify the current newsroom contact before relying on it.",
      tags: ["News", "Local newspaper"] },

    { name: "The Highlands Current", town: "Cold Spring", kind: "News", lat: 41.4202, lon: -73.9543,
      web: "https://highlandscurrent.org",
      blurb: "A nonprofit regional news outlet covering the Hudson Highlands (Philipstown and Beacon focus, with Highlands-wide coverage).",
      texture: "Primarily covers the east-bank Highlands but useful regional context, and its community calendar is one of the best around.",
      tags: ["News", "Regional", "Nonprofit"] },

    { name: "Times Herald-Record", town: "Middletown", kind: "News", lat: 41.4459, lon: -74.4229,
      web: "https://www.recordonline.com",
      blurb: "The regional daily covering Orange County and the mid-Hudson, including occasional Cornwall coverage.",
      texture: "Largely paywalled; good for broader county news.",
      tags: ["News", "Regional", "Daily"] },

    { name: "Cornwall-on-Hudson Post Office", town: "Cornwall-on-Hudson", kind: "Post office", lat: 41.4452, lon: -74.0205,
      address: "237 Hudson St, Ste 1, Cornwall-on-Hudson, NY 12520", phone: "845-534-9783", web: "https://tools.usps.com/locations/details/1359299",
      hours: "Mon–Fri 8:30–5, Sat 8–12.",
      blurb: "The USPS branch for the 12520 (Cornwall-on-Hudson) ZIP serving 10 Abbott Lane.",
      texture: "The village's own post office. A separate Cornwall (12518) office at 33 Quaker Ave serves the town side. Confirm retail hours on USPS.",
      tags: ["Post office", "USPS", "12520"] },

    { name: "Orange County DMV — Newburgh", town: "Newburgh", kind: "Government", lat: 41.5034, lon: -74.0104,
      address: "128 Broadway, Newburgh, NY 12550", phone: "845-568-5230", web: "https://www.orangecountygov.com/190/Motor-Vehicles-DMV",
      hours: "Mon–Wed 9–4:30, Thu 9–7:30, Fri 9–4:30 (by appointment).",
      blurb: "The nearest full-service DMV; Goshen and Middletown also have offices.",
      texture: "A Mobile DMV Unit also periodically visits Town Hall (183 Main St, Cornwall) for registration, renewals and REAL ID — check the county DMV page for the current schedule.",
      tags: ["DMV", "Motor vehicles", "Mobile DMV"] },

    { name: "Orange County Board of Elections", town: "Goshen", kind: "Government", lat: 41.4023, lon: -74.3243,
      address: "75 Webster Ave, Goshen, NY 10924", phone: "845-360-6500", web: "https://www.orangecountygov.com/783/Board-of-Elections",
      hours: "Mon–Fri 9–5.",
      blurb: "The county elections office — voter registration, absentee ballots and polling-place info for Cornwall residents.",
      texture: "Register to vote and get your poll-site assignment here; registration forms are also at any town hall or post office.",
      tags: ["Voting", "Elections", "Registration"] },

    { name: "Central Hudson Gas & Electric", town: "Poughkeepsie", kind: "Utility", lat: 41.5034, lon: -74.0104,
      phone: "800-527-2714", web: "https://www.cenhud.com",
      hours: "Outage reporting 24/7.",
      blurb: "The electric and natural-gas utility for Cornwall-on-Hudson — set up service here when you move in.",
      texture: "Report outages at 800-527-2714 or text OUT to 236483; outage map at outagemap.cenhud.com. Gas odor: 911 or 800-942-8274. This is Central Hudson territory, not Con Ed or Orange & Rockland.",
      tags: ["Electric", "Gas", "Utility", "Outage"] },

    { name: "Spectrum (Charter) — internet & cable", town: "Cornwall area", kind: "Utility", lat: null, lon: null,
      phone: "833-267-6094", web: "https://www.spectrum.com",
      blurb: "The dominant wired internet and cable provider across this part of Orange County.",
      texture: "The common wired ISP for the area; confirm availability and plans by your exact address. Listed as a practical setup resource, not an official municipal source.",
      tags: ["Internet", "Cable", "ISP"], confidence: "medium" },

    { name: "Village DPW & trash / recycling", town: "Cornwall-on-Hudson", kind: "Waste & recycling", lat: 41.4445, lon: -74.0190,
      address: "Via Village Hall, 325 Hudson St, Cornwall-on-Hudson, NY 12520", phone: "845-534-4200", web: "https://cornwall-on-hudson.gov/Departments/Public-Works",
      blurb: "The Village Department of Public Works — the right authority for trash, recycling, water and sewer at a village address like 10 Abbott Lane.",
      texture: "Confirm your exact pickup days and water/sewer billing through Village Hall. Do NOT assume the Town of Cornwall's Tuesday/Friday schedule applies inside the village — the village runs its own collection.",
      tags: ["Trash", "Recycling", "Water", "Sewer", "Village"], confidence: "medium" },

    { name: "Town of Cornwall Recreation Department", town: "Cornwall", kind: "Recreation", lat: 41.4490, lon: -74.0290,
      web: "https://cornwallrecreation.com",
      blurb: "Runs the community pool, youth and adult programs, the senior center and Summer Music in the Park.",
      texture: "Facilities include the community pool, Little League complex, tennis and basketball courts, a playground and the Munger Cottage Senior & Community Center. Register via cornwall.recdesk.com.",
      tags: ["Recreation", "Pool", "Senior center", "Programs"] },

    { name: "Cornwall Presbyterian Church", town: "Cornwall-on-Hudson", kind: "Worship", lat: 41.4451, lon: -74.0182,
      address: "222 Hudson St, Cornwall-on-Hudson, NY 12520", web: "https://cornwallpresbyterian.org",
      blurb: "A Presbyterian (PCUSA) congregation in the village.",
      texture: "A representative mainline Protestant option in walking distance of the village center; service times on the church site.",
      tags: ["Worship", "Presbyterian"] },

    { name: "St. Marianne Cope Parish (St. Thomas of Canterbury)", town: "Cornwall-on-Hudson", kind: "Worship", lat: 41.4456, lon: -74.0166,
      address: "340 Hudson St, Cornwall-on-Hudson, NY 12520", web: "https://stmariannecope.com",
      blurb: "The Roman Catholic parish — the St. Thomas of Canterbury church in the village, paired with St. Joseph in New Windsor.",
      texture: "Mass times on the parish site.",
      tags: ["Worship", "Catholic", "Parish"] },

    { name: "St. John's Episcopal Church", town: "Cornwall", kind: "Worship", lat: 41.4489, lon: -74.0312,
      address: "66 Clinton St, Cornwall, NY 12518", web: "https://www.episcopalassetmap.org/dioceses/diocese-new-york/list/st-johns-episcopal-church-cornwall",
      blurb: "An Episcopal (Diocese of New York) congregation on the town side of Cornwall.",
      texture: "A representative Episcopal option; confirm a current parish site and service times before going.",
      tags: ["Worship", "Episcopal"], confidence: "medium" }
  ],

  /* ---------------- COMMUNITY & GROUPS ----------------
     Facebook links may ask you to log in or to search the
     group name; public/private status verified where noted. */
  community: [
    { name: "Living in Cornwall, NY", kind: "Facebook group", web: "https://www.facebook.com/groups/1470024856560229/",
      blurb: "The main neighbors-helping-neighbors group for Cornwall and Cornwall-on-Hudson.",
      texture: "A confirmed public group and the single best place to ask for a plumber, electrician or handyman — the same trusted names get recommended repeatedly. Search before you post.",
      tags: ["Community", "Recommendations", "Ask a neighbor"] },

    { name: "Cornwall & Cornwall-On-Hudson Community Bulletin Board", kind: "Facebook group", web: "https://www.facebook.com/groups/2196890527200427/",
      blurb: "A community bulletin board for local happenings, questions, notices and neighbor chatter.",
      texture: "A good cross-check against the main 'Living in Cornwall' group; different members surface different recommendations. If the link asks you to log in, search the group name.",
      tags: ["Community", "Bulletin board", "Events"] },

    { name: "Explore Cornwall NY", kind: "Facebook page", web: "https://www.facebook.com/explorecornwallny/",
      blurb: "Events and things-to-do, run by the Town's Economic Development committee — Art Walk, Farmers Market, RiverFest and a community calendar.",
      texture: "Tied to ExploreCornwallNY.com. The best single follow for 'what's going on in Cornwall.'",
      tags: ["Events", "Things to do", "Official-ish"] },

    { name: "Village of Cornwall on Hudson (official)", kind: "Facebook page", web: "https://www.facebook.com/VillageOfCornwallOnHudson/",
      blurb: "The official Village page for announcements, alerts and notices.",
      texture: "The best follow for village-specific notices — water and road work, meeting reminders and emergencies relevant to a Cornwall-on-Hudson address.",
      tags: ["Official", "Village", "Alerts"] },

    { name: "Town of Cornwall, New York (official)", kind: "Facebook page", web: "https://www.facebook.com/townofcornwallny/",
      blurb: "The official Town page with town news, pickup schedules and notices.",
      texture: "Useful for town-wide services (highway, sanitation, town court) even though 10 Abbott Lane is inside the village.",
      tags: ["Official", "Town", "Notices"] },

    { name: "Cornwall Central School District (CornwallCSD)", kind: "Facebook page", web: "https://www.facebook.com/CornwallCSD/",
      blurb: "The official district page for school news, closings and announcements.",
      texture: "The primary follow for parents. The district also uses ParentSquare for direct messaging.",
      tags: ["Schools", "Parents", "Closings"] },

    { name: "Nextdoor — Cornwall-on-Hudson", kind: "Nextdoor", web: "https://nextdoor.com/city/cornwall-on-hudson--ny/",
      blurb: "The address-verified neighborhood network — recommendations, lost pets, free stuff and local notices.",
      texture: "Verification is address-based, so a 10 Abbott Lane resident lands in the matching Cornwall-on-Hudson neighborhood. Especially strong for handyman, contractor and snow-plow referrals.",
      tags: ["Neighborhood", "Recommendations", "Local"] },

    { name: "Cornwall, NY Area Local & Home-Based Businesses", kind: "Facebook group", web: "https://www.facebook.com/groups/560364457399852/",
      blurb: "A group for finding and promoting local and home-based businesses in the Cornwall area.",
      texture: "Useful for finding small vendors and service providers; complements the Chamber directory. Confirm the privacy setting when you join.",
      tags: ["Local business", "Services", "Trades"], confidence: "medium" },

    { name: "Buy Nothing (Cornwall area)", kind: "Facebook group", web: "https://www.facebook.com/search/groups/?q=buy%20nothing%20cornwall%20ny",
      blurb: "A hyperlocal gift economy — give, receive and lend within the Cornwall area.",
      texture: "Buy Nothing groups are private and hyperlocal by design, and reshuffle by geography, so search 'Buy Nothing Cornwall NY' and join the one matching your exact location. (This link runs that search.)",
      tags: ["Buy Nothing", "Free", "Hyperlocal"], confidence: "medium" },

    { name: "Facebook Marketplace — Cornwall-on-Hudson", kind: "Facebook page", web: "https://www.facebook.com/marketplace/103721099667397/",
      blurb: "The localized Marketplace feed for buying and selling used and new items nearby.",
      texture: "The de-facto local buy/sell channel — several 'Cornwall Buy & Sell' groups in search are actually Cornwall, Ontario or the UK, so this localized Marketplace is the reliable option. Requires a Facebook account.",
      tags: ["Buy sell", "Marketplace", "Classifieds"], confidence: "medium" }
  ]
};
