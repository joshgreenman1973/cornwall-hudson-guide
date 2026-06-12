/* ============================================================
   Highlands — content. All facts web-verified June 2026 by
   research agents; "confirm" notes flag anything time-sensitive.
   Coordinates are approximate, for relative distance only.
   ============================================================ */
window.DATA = {
  meta: {
    homeNote: "Your address sits on Storm King Mountain, where the Abbott family was one of the prominent early-20th-century households — alongside the Stillmans, Ledoux and Matthiessens — who kept The Storm King School afloat through the Depression. The lane almost certainly carries their name.",
    about: "Researched and verified in June 2026. Listings can go stale — this stretch of the valley has heavy restaurant turnover, and hours, fares, prices and program details all change. Treat this as a smart starting point, not gospel: call ahead or tap a website before a long drive. Spectrum-services listings confirm each organization exists and its general scope, but always verify current intake, age ranges, insurance and specific therapies (like ABA) directly."
  },

  notes: {
    eat: "Sorted by distance — the village is walkable. This stretch had heavy restaurant turnover in 2025–26, so a quick 'still open?' check before a long drive is wise. Closed spots (Canterbury Brook, Liberty Street Bistro, Caffe Macchiato, The Would, Whistling Willie's) are left off.",
    arts: "You live inside the motif — the Highlands outside the door are the subject of the founding canvases of American landscape painting. Filter by University museum for the teaching collections (the Loeb's Magoon Hudson River School holdings, Bard's Hessel), or Hudson River School for Olana, Cole and the painted viewsheds. A few need planning: West Point (REAL ID), Newington-Cropsey and Manitoga (appointment/seasonal).",
    kids: "Sorted by distance from home. The nature museum's village campus is practically walkable.",
    shopping: "Yarn, books and toys first — then where to actually buy groceries.",
    movies: "The art-house and the drive-ins. Note: Newburgh's Downing Film Center closed in 2023.",
    spectrum: "Start with the OPWDD Front Door for eligibility, then services flow from there. Call ahead — programs and ABA availability change; confirm before relying on any listing."
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
      blurb: "America's oldest military museum (public since 1854) — and, less obviously, a node in Hudson River School history. The closest major institution to home, ~8 miles south.",
      signature: "Robert Walter Weir taught drawing here for 42 years; his pupils included James McNeill Whistler. His son John Ferguson Weir painted 'View of the Highlands from West Point.' The academy holds significant American art and Highlands views across its buildings.",
      texture: "Access changed: as of March 2026 there are 100% ID checks. Non-DoD visitors must get a local-area credential at the Visitor Control Center first — bring a REAL ID and budget extra time.",
      access: "REAL ID required; obtain a visitor credential at the Visitor Control Center before entering.",
      tags: ["Free", "American art", "Hudson River School", "Plan ahead"] },

    { name: "CMA Gallery, Mount Saint Mary College", town: "Newburgh", kind: "Galleries", lat: 41.5080, lon: -74.0250,
      address: "Aquinas Hall, 330 Powell Ave, Newburgh, NY 12550", web: "https://www.msmc.edu/cma-gallery",
      hours: "Mon–Fri business hours or by appointment. Free.",
      blurb: "A college gallery six miles away showing working artists from Newburgh, Beacon and the Valley — a rotating contemporary program.",
      tags: ["Free", "Contemporary", "Close to home"] },

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
    { name: "The Storm King case — where environmental law was born", kicker: "On this mountain", town: "Storm King Mountain", lat: 41.4280, lon: -74.0200,
      body: [
        "In September 1962 Consolidated Edison announced it would blast a 2,000-megawatt pumped-storage hydroelectric plant — then the largest in the world — into the face of Storm King Mountain, the very mountain your house sits on.",
        "Opponents formed the Scenic Hudson Preservation Conference. In 1965 the U.S. Court of Appeals for the Second Circuit ruled in 'Scenic Hudson v. Federal Power Commission' that citizens had legal standing to sue on aesthetic and environmental grounds — an unprecedented holding.",
        "That decision is widely credited with launching modern environmental law: it established the public's right to take part in environmental disputes and helped inspire the National Environmental Policy Act. The 17-year fight ended when Con Ed abandoned the plant; the settlement was signed in December 1980."
      ] },

    { name: "Storm King Highway (Route 218)", kicker: "Engineering feat", town: "Cornwall · West Point", lat: 41.4180, lon: -73.9870,
      body: [
        "The dramatic cliffside road clinging to Storm King's eastern face. Construction began in 1916 and it opened on September 25, 1922, shortening the trip between Newburgh and West Point by 22 miles.",
        "Surveyors literally rappelled down the cliffs to mark the route. The project survived contractor bankruptcies and WWI labor shortages — and the constant hazard of boulders dropping onto the railroad below. The overlooks rise to roughly 420 feet above the river."
      ] },

    { name: "Butter Hill becomes Storm King", kicker: "How it got its name", town: "Cornwall-on-Hudson", lat: 41.4270, lon: -74.0150,
      body: [
        "Dutch colonists called the mountain 'Boterberg' — Butter Hill — because it looked like a lump of butter.",
        "In the mid-19th century the magazine writer Nathaniel Parker Willis proposed the name 'Storm King,' noting that a morning cloud-beard on the summit reliably foretold a coming storm. Willis built his estate 'Idlewild' (designed by Calvert Vaux) near Canterbury Creek in 1852 and his writing helped turn Cornwall into a fashionable 19th-century country and health resort."
      ] },

    { name: "Edward Payson Roe — bestselling novelist, famous fruit-grower", kicker: "Local character", town: "Cornwall-on-Hudson", lat: 41.4450, lon: -74.0160,
      body: [
        "The Rev. Edward Payson Roe (1838–1888) moved to Cornwall-on-Hudson in 1874 and lived a genuine double life: he wrote runaway-bestselling fiction ('Barriers Burned Away') while running greenhouses and growing roses and small fruits.",
        "He was as famous for his garden books — 'Success with Small Fruits,' 'The Home Acre' — as for his novels. A megaselling author who was equally celebrated as a horticulturist, right here in the village."
      ] },

    { name: "Black Rock Forest & the Stillmans", kicker: "The forest next door", town: "Cornwall", lat: 41.4030, lon: -74.0270,
      body: [
        "Dr. Ernest G. Stillman, son of a powerful banker, inherited vast Cornwall acreage in 1918 and established Black Rock Forest in 1929 as a forest-research preserve, later donating roughly 3,800 acres plus an endowment to Harvard.",
        "Per his will, his ashes were scattered in the forest. Today it's a 3,900-acre preserve run by the Black Rock Forest Consortium — open daily, rarely crowded, with several family-friendly 3–4 mile routes."
      ] },

    { name: "The Great Chain across the Hudson", kicker: "Revolutionary War", town: "West Point", lat: 41.3910, lon: -73.9560,
      body: [
        "In 1778 the Continental Army strung a 65-ton iron chain — links two feet long and 114 pounds each, some 600 yards in total — between West Point and Constitution Island to block British warships.",
        "The river's sharp westward bend at West Point forced sailing ships to slow and tack, exposing them to cannon fire. The chain was never tested by the Royal Navy. Surviving links are displayed at Trophy Point."
      ] },

    { name: "Washington's Headquarters & the Purple Heart", kicker: "Newburgh, 1782", town: "Newburgh", lat: 41.5010, lon: -74.0090, address: "84 Liberty St, Newburgh, NY 12550",
      body: [
        "The Hasbrouck House in Newburgh was Washington's headquarters from April 1782 to August 1783 — his longest stay anywhere. In 1850 it became the first publicly owned historic site in the United States.",
        "Here, on August 7, 1782, Washington created the Badge of Military Merit — the direct ancestor of the Purple Heart. The nearby New Windsor Cantonment was the army's final winter camp and the site of Washington's calming 'Newburgh Address'; the National Purple Heart Hall of Honor stands there today."
      ] },

    { name: "Bannerman Castle on Pollepel Island", kicker: "The ruin in the river", town: "Hudson River off Cornwall", lat: 41.4550, lon: -73.9880,
      body: [
        "A tiny island in the Hudson, long steeped in ghost legend. In 1900 Francis Bannerman VI — a military-surplus dealer who couldn't legally store 30 million cartridges and black powder within New York City limits — bought the island and built a Scottish-style arsenal 'castle.'",
        "It's now a romantic ruin. The Bannerman Castle Trust runs seasonal boat and walking tours from Newburgh and Beacon."
      ] },

    { name: "West Point Foundry & the Parrott gun", kicker: "Civil War industry", town: "Cold Spring", lat: 41.4150, lon: -73.9530,
      body: [
        "The West Point Foundry in Cold Spring (1818–1911) became the nation's largest artillery maker by the end of the Civil War. Robert Parker Parrott invented the Parrott rifle, a cannon strengthened by a wrought-iron band shrunk around the breech.",
        "The ruins are now the West Point Foundry Preserve, with interpretive trails winding through the archaeology — a quiet, under-visited walk."
      ] },

    { name: "Newburgh's East End & the Freedom Church", kicker: "Architecture & Black history", town: "Newburgh", lat: 41.5030, lon: -74.0100,
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
      texture: "The closest attraction to home. Pair it with the museum's Outdoor Discovery Center a few miles away for trails and the Grasshopper Grove play area.",
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
      blurb: "The closest full playground to home — baseball fields, a wading pool, tennis and basketball courts.",
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
      blurb: "A ~2.25-mile loop on the Orange/Stoney Lonesome trails with short rock scrambles and big Hudson views — minutes from home.",
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
      texture: "A serious strategy-game wall (chess, backgammon, Katamino, Quarto), engineering model kits, and a grown-up side with blacksmith-made tavern puzzles and local woodwork. A real destination, not a chain — and the nearest truly independent toy store.",
      tags: ["Toys", "Wooden toys", "Games"] },

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
      tags: ["Butcher", "Eggs", "Thanksgiving"] }
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
        "Salisbury Mills-Cornwall (1600 NY-94) is the closest station to home — about 10–15 minutes, no river crossing, with a large 677-space park-and-ride.",
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
     mi = approx miles from home (for the radius toggle). drive:true = beyond 30mi. */
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
  ]
};
