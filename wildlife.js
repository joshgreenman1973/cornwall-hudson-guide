/* ============================================================
   The Cornwall-on-Hudson Guide — wildlife & habitat page.
   Birds, trees, mammals and other wildlife of the Hudson
   Highlands. Species verified against Black Rock Forest, the
   Constitution Marsh Audubon checklist, NY DEC and NOAA
   Fisheries. Photos are Wikimedia Commons (credited).
   ============================================================ */
(function () {
  'use strict';
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var DATA = {
    birds: [
      { name: "Bald eagle", sci: "Haliaeetus leucocephalus", note: "Winters on the Hudson here December to March; 2 to 30 are logged at Constitution Marsh, sometimes on the Storm King cliffs opposite Breakneck. NY Threatened." },
      { name: "Osprey", sci: "Pandion haliaetus", note: "Fishes the Hudson spring through fall, hovering then plunging for fish. NY Special Concern." },
      { name: "Red-tailed hawk", sci: "Buteo jamaicensis", note: "Common year-round resident and breeder; soars over the ridges and roadsides everywhere." },
      { name: "Broad-winged hawk", sci: "Buteo platypterus", note: "Common forest breeder and the hallmark of Hudson Highlands fall hawk migration — September kettles." },
      { name: "Cooper's hawk", sci: "Accipiter cooperii", note: "Resident woodland hawk, named among Black Rock Forest's common predators." },
      { name: "Northern harrier", sci: "Circus hudsonius", note: "Marsh-hunting migrant coursing low over Constitution Marsh. NY Threatened." },
      { name: "Peregrine falcon", sci: "Falco peregrinus", note: "Logged as a migrant at Constitution Marsh; the Highlands cliffs are classic habitat, though no current Storm King eyrie is confirmed. NY Endangered." },
      { name: "Turkey vulture", sci: "Cathartes aura", note: "Common spring through fall, riding thermals over Storm King and Black Rock Forest." },
      { name: "Black vulture", sci: "Coragyps atratus", note: "Resident but uncommon, expanding north up the Hudson; broader-winged and shorter-tailed than the turkey vulture." },
      { name: "Barred owl", sci: "Strix varia", note: "Common resident owl of the forest; its who-cooks-for-you call carries at dusk." },
      { name: "Wild turkey", sci: "Meleagris gallopavo", note: "Abundant resident, called dominant among Black Rock Forest birds; flocks forage forest edges and clearings." },
      { name: "Ruffed grouse", sci: "Bonasa umbellus", note: "Resident of the uplands; listen for the male's drumming in spring. Regionally declining." },
      { name: "Pileated woodpecker", sci: "Dryocopus pileatus", note: "Crow-sized and red-crested; a resident breeder that leaves big rectangular excavations in dead trees." },
      { name: "Red-bellied woodpecker", sci: "Melanerpes carolinus", note: "Common resident with a red nape and a rolling call; expanding north." },
      { name: "Downy woodpecker", sci: "Picoides pubescens", note: "The small common woodpecker of yards and woods year-round." },
      { name: "Great blue heron", sci: "Ardea herodias", note: "Stalks the Black Rock reservoirs and Constitution Marsh shallows; can linger into winter on open water." },
      { name: "Least bittern", sci: "Ixobrychus exilis", note: "Secretive cattail-marsh breeder at Constitution Marsh — a hard-to-see specialty. NY Threatened." },
      { name: "Wood duck", sci: "Aix sponsa", note: "Breeds in the wooded swamp at Constitution Marsh; the drake is ornately patterned." },
      { name: "Common merganser", sci: "Mergus merganser", note: "Fish-eating diving duck wintering on the open Hudson in this reach; best from river overlooks December to March." },
      { name: "Belted kingfisher", sci: "Megaceryle alcyon", note: "Rattles along the marsh channels and shoreline, diving for fish from perches." },
      { name: "Wood thrush", sci: "Hylocichla mustelina", note: "Common forest breeder; its flute-like song is a signature Highlands summer sound." },
      { name: "Scarlet tanager", sci: "Piranga olivacea", note: "Brilliant red-and-black canopy breeder of the mature oak forest, May through summer." },
      { name: "Eastern bluebird", sci: "Sialia sialis", note: "Common breeder in clearings and along bluebird-box trails." },
      { name: "Black-capped chickadee", sci: "Poecile atricapillus", note: "Abundant, tame year-round resident of the woods and feeders." },
      { name: "Northern cardinal", sci: "Cardinalis cardinalis", note: "Year-round resident; the bright red male sings from edges and yards." }
    ],
    trees: [
      { name: "Chestnut oak", sci: "Quercus montana", note: "THE signature ridge tree — it dominates the dry rocky ridgetops and thin-soil slopes across the Highlands." },
      { name: "Northern red oak", sci: "Quercus rubra", note: "The most common canopy tree on lower and mid slopes; co-dominant with chestnut oak." },
      { name: "White oak", sci: "Quercus alba", note: "Common canopy oak on richer mid-slope sites; pale flaky bark and rounded leaf lobes." },
      { name: "Black oak", sci: "Quercus velutina", note: "Drier slopes and ledges; a standard red-oak-group tree of the Highlands oak-hickory canopy." },
      { name: "Tulip tree (yellow poplar)", sci: "Liriodendron tulipifera", note: "A towering straight-trunked tree of moist coves; helps define the oak-tulip tree forest known chiefly in the Hudson Highlands." },
      { name: "American beech", sci: "Fagus grandifolia", note: "Smooth gray bark; holds tan leaves through winter on moist slopes and coves." },
      { name: "Red maple", sci: "Acer rubrum", note: "Ubiquitous — dominant in wet areas and a rising share of the understory, with early-red fall color." },
      { name: "Sugar maple", sci: "Acer saccharum", note: "Richer, moister coves and lower slopes; the classic orange-to-red fall maple." },
      { name: "Black birch (sweet birch)", sci: "Betula lenta", note: "A fast-increasing subcanopy tree, now co-dominant in the shifting understory; wintergreen-scented twigs." },
      { name: "Hickories (shagbark and pignut)", sci: "Carya ovata, Carya glabra", note: "Mid-slope canopy associates of the oak-hickory forest; shagbark has shaggy peeling bark." },
      { name: "Sassafras", sci: "Sassafras albidum", note: "Understory tree of dry-to-moist slopes and edges, with mitten-shaped leaves and a spicy aroma." },
      { name: "Pitch pine", sci: "Pinus rigida", note: "Fire-adapted pine confined to the thinnest, rockiest summit soils where little else grows." },
      { name: "Eastern white pine", sci: "Pinus strobus", note: "Tall five-needled pine scattered through mixed stands and on slopes." },
      { name: "Eastern hemlock", sci: "Tsuga canadensis", note: "A shade-casting conifer of cool stream ravines. Threatened by the invasive hemlock woolly adelgid, and in steep regional decline." },
      { name: "American chestnut", sci: "Castanea dentata", note: "Once THE dominant canopy tree, functionally eliminated by chestnut blight a century ago. A few stump sprouts persist, and Black Rock Forest has hosted restoration research." },
      { name: "Mountain laurel", sci: "Kalmia latifolia", note: "THE signature evergreen understory shrub — it forms dense thickets under chestnut oak and blooms spectacularly in June." },
      { name: "Witch hazel", sci: "Hamamelis virginiana", note: "A tall understory shrub across the slopes; an oddity that blooms yellow in late fall." },
      { name: "Heath shrubs (huckleberry, blueberry)", sci: "Gaylussacia and Vaccinium", note: "The low heath layer on dry acidic ridges and rocky summits, often beneath chestnut oak and pitch pine." }
    ],
    mammals: [
      { name: "White-tailed deer", sci: "Odocoileus virginianus", note: "The most abundant mammal here; browses forest edges, clearings and trails everywhere." },
      { name: "American black bear", sci: "Ursus americanus", note: "Present in the Highlands; DEC calls bears well established in the Hudson Valley, and Black Rock Forest lists them directly." },
      { name: "Eastern coyote", sci: "Canis latrans", note: "Widespread since the mid-1980s; heard yipping at night and caught on forest cameras." },
      { name: "Bobcat", sci: "Lynx rufus", note: "Present but elusive; Black Rock Forest GPS-tags bobcats, and DEC confirms them established in the lower Hudson Valley." },
      { name: "Red fox", sci: "Vulpes vulpes", note: "A common predator of forest floor and edges — the orange fox with a white tail-tip." },
      { name: "Gray fox", sci: "Urocyon cinereoargenteus", note: "A woodland fox that can climb trees; grizzled gray with a black-tipped tail." },
      { name: "Fisher", sci: "Pekania pennanti", note: "A regional recovery success but rare right here; the Black Rock study flags Interstate 87 as a barrier to recolonization." },
      { name: "Raccoon", sci: "Procyon lotor", note: "Common throughout and one of the most-photographed species in the forest camera study." },
      { name: "Virginia opossum", sci: "Didelphis virginiana", note: "New York's only marsupial; nocturnal, often near edges and waterways." },
      { name: "American beaver", sci: "Castor canadensis", note: "Signs — dams, gnawed stumps — along forest waterways and ponds, though the animals are rarely seen." },
      { name: "North American river otter", sci: "Lontra canadensis", note: "Uses Highlands streams, ponds and the Hudson; present but seldom seen." },
      { name: "Eastern gray squirrel", sci: "Sciurus carolinensis", note: "Ubiquitous in the oak-hickory woods and a key acorn disperser." },
      { name: "Eastern chipmunk", sci: "Tamias striatus", note: "Abundant on the forest floor and stone walls — the striped ground squirrel of the trails." },
      { name: "Little brown bat", sci: "Myotis lucifugus", note: "Once New York's most common hibernating bat; populations crashed roughly 90 percent from white-nose syndrome. The hardier big brown bat is now the one more likely to be seen." }
    ],
    other: [
      { name: "Timber rattlesnake", sci: "Crotalus horridus", type: "Reptile", note: "Core Highlands rocky-ridge habitat toward Storm King and Bear Mountain. NY Threatened and fully protected — illegal to capture, kill or possess." },
      { name: "Northern copperhead", sci: "Agkistrodon contortrix mokasen", type: "Reptile", note: "New York's other venomous snake, on lower-Highlands rock ledges and talus; sightings uncommon. A protected native snake." },
      { name: "Eastern box turtle", sci: "Terrapene carolina", type: "Reptile", note: "A woodland turtle of the lower Hudson Valley, hurt by road mortality and collection. NY Special Concern." },
      { name: "Common snapping turtle", sci: "Chelydra serpentina", type: "Reptile", note: "Roughly 1,000 live in Constitution Marsh, nesting on the nearby Boscobel grounds; common in Highlands wetlands." },
      { name: "Eastern newt (red eft)", sci: "Notophthalmus viridescens", type: "Amphibian", note: "Common in Black Rock Forest; the orange terrestrial red-eft stage walks the forest floor after rain." },
      { name: "Spring peeper", sci: "Pseudacris crucifer", type: "Amphibian", note: "A tiny chorus frog whose shrill early-spring calls fill Highlands wetlands at dusk." },
      { name: "Wood frog", sci: "Lithobates sylvaticus", type: "Amphibian", note: "A vernal-pool breeder and one of the first amphibians active in early spring; freeze-tolerant." },
      { name: "Striped bass", sci: "Morone saxatilis", type: "Fish", note: "The iconic anadromous Hudson fish; it runs up the estuary to spawn each spring, with the Highlands reach a key nursery area." },
      { name: "Atlantic sturgeon", sci: "Acipenser oxyrinchus", type: "Fish", note: "Spawns in the Hudson in May and June. ENDANGERED — all fishing and possession prohibited." },
      { name: "Shortnose sturgeon", sci: "Acipenser brevirostrum", type: "Fish", note: "Lives its whole life in the Hudson; the river holds likely the world's largest population. ENDANGERED since 1967." },
      { name: "American shad", sci: "Alosa sapidissima", type: "Fish", note: "A historic Hudson spring run, now severely declined; the largest of the river herrings." },
      { name: "American eel", sci: "Anguilla rostrata", type: "Fish", note: "Catadromous — arrives from the Sargasso Sea as glass eels and lives years in the estuary before returning to sea to spawn." },
      { name: "Monarch butterfly", sci: "Danaus plexippus", type: "Insect", note: "Migratory; Bannerman Island hosts an annual late-August Butterfly Day built around fall-migrating monarchs. Federally proposed Threatened." },
      { name: "Eastern tiger swallowtail", sci: "Papilio glaucus", type: "Insect", note: "A large yellow-and-black butterfly common wherever eastern deciduous forest occurs, including the Highlands." }
    ],
    images: [
      { species: "Bald eagle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/960px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg", credit: "Andy Morffew · CC BY 2.0" },
      { species: "Wild turkey", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/20260428_tom_wild_turkey_matthaei_botanical_gardens_PD08952.jpg/960px-20260428_tom_wild_turkey_matthaei_botanical_gardens_PD08952.jpg", credit: "Paul Danese · CC BY-SA 4.0" },
      { species: "American black bear", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/01_Schwarzb%C3%A4r.jpg", credit: "Diginatur · CC BY-SA 3.0" },
      { species: "White-tailed deer", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/White-tailed_deer.jpg/960px-White-tailed_deer.jpg", credit: "Scott Bauer, USDA · Public Domain" },
      { species: "Pileated woodpecker", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PileatedWoodpeckerFeedingonTree%2C_crop.jpg/960px-PileatedWoodpeckerFeedingonTree%2C_crop.jpg", credit: "Joshlaymon · CC BY-SA 3.0" },
      { species: "Great blue heron", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/GreatBlueHeronInARiver.jpg/960px-GreatBlueHeronInARiver.jpg", credit: "DallasPenner · CC BY-SA 4.0" },
      { species: "Chestnut oak", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Chestnut_Oak.jpg/960px-Chestnut_Oak.jpg", credit: "Mwanner · CC BY-SA 3.0" },
      { species: "Mountain laurel", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Kalmia_Latifolia.jpg", credit: "Arx Fortis · CC BY-SA 3.0" },
      { species: "Eastern hemlock", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Tsuga_canadensis_morton.jpg", credit: "Bruce Marlin · CC BY-SA 3.0" },
      { species: "Timber rattlesnake", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Timber_Rattlesnake_%28Crotalus_horridus%29_-_Flickr_-_2ndPeter.jpg/960px-Timber_Rattlesnake_%28Crotalus_horridus%29_-_Flickr_-_2ndPeter.jpg", credit: "Peter Paplanus · CC BY 2.0" },
      { species: "Monarch butterfly", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Danaus_plexippus_on_flowers_%2848483505276%29.jpg/960px-Danaus_plexippus_on_flowers_%2848483505276%29.jpg", credit: "Mike's Birds · CC BY-SA 2.0" },
      { species: "Eastern chipmunk", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg/960px-Chipmunk_with_stuffed_cheeks_in_Prospect_Park_%2805980%29.jpg", credit: "Rhododendrites · CC BY-SA 4.0" }
    ]
  };

  var imgByName = {};
  DATA.images.forEach(function (im) { imgByName[im.species.toLowerCase()] = im; });
  function imgFor(name) {
    var key = name.toLowerCase();
    if (imgByName[key]) return imgByName[key];
    // match on the leading word(s) before a parenthesis
    var base = key.split('(')[0].trim();
    return imgByName[base] || null;
  }

  function statusBadge(note) {
    var n = note.toLowerCase();
    if (n.indexOf('endangered') >= 0) return '<span class="wstatus endangered">Endangered</span>';
    if (n.indexOf('proposed threatened') >= 0) return '<span class="wstatus threatened">Proposed threatened</span>';
    if (n.indexOf('threatened') >= 0) return '<span class="wstatus threatened">Threatened</span>';
    if (n.indexOf('special concern') >= 0) return '<span class="wstatus concern">Special concern</span>';
    if (n.indexOf('protected') >= 0) return '<span class="wstatus protected">Protected</span>';
    return '';
  }

  function card(item, accent) {
    var im = imgFor(item.name);
    var photo = im ? ('<figure class="wphoto"><img loading="lazy" src="' + im.url + '" alt="' + esc(item.name) + '" onerror="this.closest(\'figure\').remove()"><figcaption>' + esc(im.credit) + '</figcaption></figure>') : '';
    return '<article class="wcard" style="--accent:' + accent + '">' + photo +
      '<div class="wbody">' +
      (item.type ? '<span class="wtype">' + esc(item.type) + '</span>' : '') +
      statusBadge(item.note) +
      '<h3>' + esc(item.name) + '</h3>' +
      '<div class="sci">' + esc(item.sci) + '</div>' +
      '<p>' + esc(item.note) + '</p>' +
      '</div></article>';
  }

  function section(id, kicker, title, note, items, accent) {
    var cards = items.map(function (it) { return card(it, accent); }).join('');
    return '<section class="wsection" id="' + id + '">' +
      '<div class="wsec-head"><div class="wkicker">' + esc(kicker) + '</div><h2>' + esc(title) + '</h2><p class="wnote">' + esc(note) + '</p></div>' +
      '<div class="wgrid">' + cards + '</div></section>';
  }

  var host = document.getElementById('wild');
  host.innerHTML =
    section('birds', 'On the wing', 'Birds', "Constitution Marsh logs 200-plus species and is the region's birding heart; the Hudson draws wintering eagles, the ridges funnel the fall hawk migration, and the oak forest fills with breeding songbirds in spring.", DATA.birds, 'var(--river)') +
    section('trees', 'The forest', 'Trees & plants', "The Highlands are an oak-chestnut forest: chestnut oak rules the dry ridges over a sea of mountain laurel, with tulip tree and beech in the moist coves. Black Rock Forest in Cornwall is a working research forest studying exactly this.", DATA.trees, 'var(--moss)') +
    section('mammals', 'Tracks & trails', 'Mammals', "Deer are everywhere; black bear, bobcat, coyote and both foxes move through the forest mostly unseen. Black Rock Forest's trail-camera study has documented the full cast.", DATA.mammals, 'var(--rust)') +
    section('other', 'River, rock & wetland', 'Reptiles, amphibians, fish & insects', "The rocky ridges hold the Highlands' two venomous snakes (give them room), the vernal pools fill with spring frogs, and the Hudson estuary is a globally important nursery for striped bass and two endangered sturgeons.", DATA.other, 'var(--gold)');
})();
