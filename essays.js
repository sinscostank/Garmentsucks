/* garmentsucks — long-form essays for every card page.
   Nada: pengamat garmen — tenang, spesifik, tidak menjual. Konsisten dengan label `conf`. */

window.ESSAYS = {

  "slant-pocket": {
    lede: "A slant exists on surviving jackets. The explanation usually given for it is not documented.",
    paras: [
      "Look at a tropical combat jacket and the chest line reads before anything else: two pockets tilted inward. The slant is real and it is on the surviving garments. What is much less certain is why.",
      "The usual account is biomechanical. Dealer and museum descriptions of the M-1942 jump jacket say the breast pockets were angled inward so a trooper wearing a parachute harness, pistol belt and suspenders could reach them with the opposite hand. That is a plausible reading of an object, but it is not a specification we could open, and the same descriptions are written by people with an interest in the garment being special.",
      "A second reason is often offered: an inward slant turns the pocket mouth up and toward the centre, so a man bending or prone is less likely to tip his contents out. Field evaluations of clothing pockets do recommend slanted openings for exactly that reason — for trousers. Applying it to the chest pocket is inference.",
      "The numbers on this site are a construction choice, not a period figure. 15° with a ±1° working tolerance, 120 mm below the shoulder seam, 50 mm from the centre front: that is what a reproduction pattern might do, and it should be labelled as such. Period garments vary widely, and no open document states a millimetre figure.",
      "So treat this card as a question rather than an answer. The slant is evidence of a design decision; the reason for it is still being argued."
    ],
    fig2: { src: "img/diagram-slant.svg", cap: "Geometry of the slanted chest pocket as a working specification — not a period figure.", credit: "Original diagram, garmentsucks" },
    look: "Measure the slant against the horizontal on any jacket you handle. Record it as an observation, not a specification — and do not use an angle alone to date a garment.",
    claims: [
      { c: "Slant present on surviving M-1942 and tropical jackets", s: "Object observations in dealer and museum descriptions", u: "https://www.ima-usa.com/products/original-u-s-wwii-101st-airborne-division-m1942-paratrooper-jump-jacket-with-laundry-number" },
      { c: "Biomechanical explanation for the slant", s: "Dealer descriptions - unverified", u: "https://www.ima-usa.com/products/original-u-s-wwii-101st-airborne-division-m1942-paratrooper-jump-jacket-with-laundry-number" },
      { c: "15 degrees / 120 mm / 50 mm figures", s: "Site working specification for a reproduction pattern - not a period figure", u: "" }
    ],
    sources: ["Dealer and museum descriptions of the M-1942 jump jacket", "US Army field evaluation of trouser pockets (NLM scan)", "Site construction spec — reproduction working figures, not period spec"]
  },

  "flap-pocket": {
    lede: "The flaps were already there. In 1964 the buttons on them were covered — and the record for that is unusually clean.",
    paras: [
      "A pocket without a flap is a cup. It works in a shop and badly in a jungle: the mouth catches on vines, the button catches the light, and everything inside ends up on the ground the first time its owner crawls.",
      "The first pattern of the tropical combat jacket carried pocket flaps, but the buttons sat exposed on them. Shelby Stanton's chronology places the approval of coat pocket flaps over pocket buttons at 26 August 1964, explicitly to prevent snagging. The Imperial War Museums' catalogue text corroborates the sequence independently: buttons exposed on Type I, concealed in Type II, introduced in 1964–65. Two records, different kinds — that is what supports a date.",
      "What the army did not do is instructive. It did not switch the front closure to a zip. It kept the buttons and covered them, because a button that snags can be re-sewn in the field while a zipper that seizes cannot.",
      "On a garment, look at the flap twice: once for shape — period flaps are asymmetric and pointed — and once for the buttons. On the Type III USMC jacket in the IWM collection, each flap closes with two buttons, which means two buttonholes. A single snap is a later, cheaper solution, not a period one."
    ],
    look: "Flap shape, button count, whether buttons sit proud or covered. Exposed buttons indicate the first pattern; covered flaps and two buttonholes per lower flap indicate Type II or later.",
    claims: [
      { c: "Flaps over pocket buttons approved 26 August 1964, to prevent snagging", s: "Stanton chronology", u: "https://arsipmiliter.com/2023/01/03/jungle-jacket-an-introduction/" },
      { c: "Buttons exposed on Type I; concealed on Type II, 1964-65", s: "IWM object 30096162", u: "https://www.iwm.org.uk/collections/item/object/30096162" },
      { c: "Two buttons per flap on a Type III USMC tropical jacket", s: "IWM object 30097577", u: "https://www.iwm.org.uk/collections/item/object/30097577" }
    ],
    sources: ["Shelby Stanton chronology (secondary)", "IWM object 30097577 — description of a Type III USMC tropical jacket (two buttons per flap)", "IWM object 30096162 — Tropical Combat Uniform pattern sequence"]
  },

  "bellows": {
    lede: "A pocket that grows is a pocket that survives. The bellows pleat is the most quietly engineered detail on a military jacket.",
    paras: [
      "A flat patch pocket is limited by its own footprint: cram a magazine, a dressing or a ration tin into it and the seams pull at the corners. A bellows pocket folds a pleat into the side of the pocket bag, so the front wall can move away from the body when the pocket is loaded and lie flat again when it is empty. Capacity without tearing — the whole trick is a fold.",
      "The idea is older than the tropical jacket. Airborne accounts describe M-1942 pockets blowing out on parachute-opening shock, and riggers hand-reinforcing them in staging areas before D-Day. The engineering logic is sound; the specific anecdote is anecdotal. What is certain is the consequence: an expanding pocket concentrates stress at four corners, which is why every corner is bartacked.",
      "On a finished garment the pleat is easy to find once you know where to look. Turn the pocket inside out, or simply run a finger along the side edge: two fold lines, pressed flat, releasing into the pocket body. If the pleat is missing, the 'bellows' is a lie printed on a product page.",
      "For a maker, the pleat is where a jacket becomes a tool. Keep it deep enough to be useful — around 40 mm on a lower cargo pocket — and reinforce the corners. A shallow pleat is decoration; a deep one is cargo capacity."
    ],
    fig2: { src: "img/diagram-bellows.svg", cap: "Section through a bellows pocket: pleat depth, flap, bartacked corners, drain eyelet.", credit: "Original diagram, garmentsucks" },
    look: "Two pressed fold lines at the pocket's side edge, corners bartacked, and a pocket that lies flat when empty. A shallow crease with no volume is a costume detail.",
    sources: ["M-1942 construction records", "US Army cargo pocket photograph (PD)", "Bellows and cargo pocket construction references"]
  },

  "drain-eyelet": {
    lede: "A hole in the bottom of a pocket is not a mistake. In a monsoon it is the difference between a jacket and a bucket.",
    paras: [
      "Water is heavy, and it rots. A bellows pocket in steady rain becomes a small reservoir; two litres is two kilograms pulling at the shoulders, and standing water mildews cotton and rots stitching. The drain eyelet lets it out. It is drainage, not waterproofing — a distinction that matters, because a pocket that traps water and a pocket that sheds it age very differently.",
      "The idea was borrowed, not invented. First World War gas-mask bags carried brass drainage grommets in the bottom, and the same solution appears on later canvas equipment. Putting an eyelet in a garment pocket is a transfer of proven kit logic into clothing.",
      "How consistently the tropical jacket carried these holes is the part collectors disagree about. Accounts place them on early and late patterns and describe them missing from an intermediate one, but the pattern-by-pattern sequence is not settled in any open document. Treat the function as established and the chronology as unresolved.",
      "Look at the base of a cargo pocket. A small metal eyelet, set slightly off centre, with no fray around it, is the honest version. A punched hole with raw edges is a shortcut; a printed circle is theatre."
    ],
    fig2: { src: "img/ripstop.jpg", cap: "Jungle fatigues in the field: the kind of weather that made a drain hole necessary.", credit: "NARA, public domain" },
    look: "A small eyelet at the pocket base, set cleanly through the cloth. Pattern-level dating is disputed — do not use the hole alone to date a jacket.",
    sources: ["Jungle jacket pattern records (sources conflict)", "WWI gas-mask bag construction", "Field photographs, NARA (PD)"]
  },

  "buttons": {
    lede: "In the jungle the button outlived the zipper — and the famous story about why is mostly legend.",
    paras: [
      "The separable fastener was designed by Gideon Sundbäck in 1913 and patented in 1917; it did not become common in clothing until the 1930s. That timeline matters, because the story that First World War soldiers were trapped in zippered coats is almost certainly folklore — there were no mass-issued zippered combat uniforms to be trapped in.",
      "What the record shows is more interesting. The tropical combat jacket kept a button front through every pattern, and from the second the buttons were hidden behind flaps. A button does not corrode shut in monsoon humidity, does not seize on grit, and can be re-sewn with a needle and thread in the field. A zipper is a single continuous mechanism: one damaged tooth and the garment is finished.",
      "The placket itself is a small system. A folded strip stiffens the front, buttonholes are worked keyhole-shaped so the shank has room, and the mouth of the jacket can be left partly open for airflow — a ventilation feature disguised as a closure.",
      "When you handle a jacket, work the buttons. Tight, evenly spaced, keyhole buttonholes with a bartack at the end suggest a maker who understood the load. Loose shanks and round holes tell you the front is a decoration."
    ],
    look: "Five buttons on the period pattern, keyhole buttonholes, bartacked ends, and a placket that can be worn open. A zip on the main closure is a later, non-tropical decision.",
    claims: [
      { c: "Separable fastener designed 1913, patent granted 1917 (US 1,219,881)", s: "Patent US1219881", u: "https://patents.google.com/patent/US1219881A/en" },
      { c: "Button front and concealed buttons from the second pattern", s: "IWM object 30096162", u: "https://www.iwm.org.uk/collections/item/object/30096162" }
    ],
    sources: ["Gideon Sundbäck — separable fastener designed 1913, patent granted 1917 (US 1,219,881)", "IWM catalogue description, tropical uniform types", "Garment records, Smithsonian"]
  },

  "gas-flap": {
    lede: "A strip of cloth behind the buttons, sewn for a war that never came to the jungle.",
    paras: [
      "The gas flap is a second internal door. Behind the button placket, an extra panel overlaps the closure line so that no gap remains between the buttons. It exists because in the First World War men learned that the air itself could kill, and that a buttonhole is a doorway for it. A 1918 British service-dress jacket carries one at the collar.",
      "The idea travelled forward. Collectors describe an inner gas flap on early Vietnam-era tropical jackets, and institutional catalogue text records its removal on the third pattern in 1966–67 — a detail deleted when the garment was simplified for the field, where gas was not the threat and bulk was.",
      "It is one of the few details on the jacket that is pure inheritance: not a response to Vietnam, but a habit carried from the trenches. That makes it useful evidence when dating a garment, and a small lesson in how military clothing accumulates history instead of redesigning from scratch.",
      "On a garment, the gas flap is invisible from the outside. Unbutton the front and look behind the button row: a strip of cloth that overlaps the opening, finished on both edges, is what you are looking for. Reproduction makers often skip it because nobody sees it."
    ],
    fig2: { src: "img/m41.jpg", cap: "The M-41 field jacket closed with a zip behind a band of five buttons — a placket logic related to, but not the same as, the inner gas flap.", credit: "Paris Musées, CC0" },
    look: "Inside the front placket: an extra overlapping strip, finished on both edges. Absent on late patterns where it was deliberately removed.",
    sources: ["1918 British service dress (rights-managed record)", "IWM catalogue description, tropical uniform types", "Collector documentation on tropical jacket patterns"]
  },

  "epaulette": {
    lede: "Before it signified rank, the epaulette stopped a rifle sling from sliding off a shoulder.",
    paras: [
      "The epaulette is a fossil of a more practical world. French army epaulettes appear around 1763 as a way of marking officers, but their origin is a shoulder belt: a strap that carried a rifle sling or an ammunition belt and had to be kept from slipping. Over a century the functional ribbon widened, stiffened and was gilded into a badge of rank.",
      "By the twentieth century the military had reversed the logic. A field jacket's shoulder strap no longer holds rank in the field; it holds webbing, a rifle sling, or the strap of a pack. It is a small piece of equipment that happens to look like decoration.",
      "The tropical jacket is a useful case study because the strap did not survive. Catalogue records describe shoulder straps present on early patterns and removed on the third, along with the gas flap — both deleted because they snagged on undergrowth. Function that catches on a vine stops being function.",
      "On a jacket, an epaulette is a short strap across the shoulder, buttoned at the neck end, sometimes with a second button at the shoulder seam. If it is missing on a garment that claims to be an early pattern, that is a dating signal rather than a fault."
    ],
    fig2: { src: "img/epaulette.jpg", cap: "A pair of full-dress French brigadier-general epaulettes, 1945–54 — the ceremonial end of the same object.", credit: "Paris Musées, CC0" },
    look: "A short shoulder strap buttoned at the neck end; present on early tropical patterns, removed on the third. A missing strap is a dating clue, not necessarily damage.",
    sources: ["Epaulette origin and military dress history", "IWM catalogue description (shoulder straps removed on Type III)", "Paris Musées object record (CC0)"]
  },

  "cuff-tab": {
    lede: "The wrist is the smallest door in a jacket, and the one a soldier opens most often.",
    paras: [
      "A buttoned cuff does two opposite jobs. Closed, it seals the sleeve against wind, rain, brush and insects; opened, it ventilates and lets the sleeve roll on a gusset. It is the only closure on a field jacket that a wearer adjusts for comfort rather than protection, which is why it survives on garments that have shed almost everything else.",
      "The lineage is consistent: buttoned cuffs on the M-1943 and M-1951 field jackets, then velcro on the M-1965 — a change that traded repairability for speed. The tropical jacket kept an adjustable button closure at the cuff, and on camouflage versions the cuff could be opened fully on a gusset so the sleeve could be rolled.",
      "A cuff tab is also a manufacturing tell. It requires a separate pattern piece, a buttonhole and a bartack, and it is one of the first details a cheaper factory simplifies away. Which means: on a reproduction, the cuff tells you what kind of maker you are dealing with.",
      "Look at the sleeve end. One button and a short tab, with a small gusset behind it, is the period answer. A plain hem or an elasticated cuff belongs to a different tradition."
    ],
    fig2: { src: "img/m1943.jpg", cap: "The M-1943 field jacket, whose cuffs carry tightening tabs and waterproof gussets.", credit: "Smithsonian NMAH 2002.1735, CC0" },
    look: "One button plus tab, gusset behind the opening, buttonhole bartacked. Simplification here usually signals cost-cutting.",
    sources: ["M-1943 / M-51 / M-65 lineage references", "Australian War Memorial records", "Paris Musées M-41 object record (CC0)"]
  },

  "drawcord": {
    lede: "The invisible belt: a cord inside the waist that does what a belt does without the buckle.",
    paras: [
      "An internal drawcord closes the gap where body heat escapes and wind enters, and keeps a loaded jacket from swinging away from the body. Because it sits inside the waistband, it adds no hardware to snag on webbing and no buckle to dig into a pack strap.",
      "The lineage is a single idea refined three times. The M-1943 carried an internal drawstring; the M-1951 added a second at the hem and holes so the waist could be adjusted from outside; the M-1965 kept the cord inside. Each generation moved the same cord a few centimetres and called it progress.",
      "There is a design lesson here about restraint. A belt is visible and fashionable; a drawcord is invisible and functional. The military chose the one you cannot see, because the garment was being worn under equipment, not photographed.",
      "On a jacket, feel inside the waistband for a cord with two exits, usually near the side seams. If it is missing on a garment described as a field jacket, the waist has been simplified — which changes how the jacket sits when loaded."
    ],
    fig2: { src: "img/m65.jpg", cap: "The M-65: the drawcord lives inside the waistband, invisible from the outside.", credit: "Public domain" },
    look: "A cord inside the waistband with two exits; a second cord at the hem on later patterns. Hardware-free by design.",
    sources: ["Field jacket lineage references (secondary)", "M-1943 / M-51 / M-65 records"]
  },

  "safari-belt": {
    lede: "The safari belt is the most glamorous closure in menswear, and its practical value is genuinely disputed.",
    paras: [
      "A belted bush jacket descends from khaki-drill uniforms worn in hot colonies: loose cloth, many pockets, a belt to keep the whole assembly from flapping. The belt transfers the weight of loaded pockets toward the hips and stops the jacket swinging into thorn-scrub. That is the functional account.",
      "The sceptical account is equally old. The real weight of ammunition rode on a separate cartridge belt, and some specialist outfitters insist the self-belt was always more fashion than function — one told a newspaper plainly that nobody uses the belt in the bush. Both stories can be true at once: a garment can carry a practical detail that becomes a costume.",
      "What is not disputed is the cultural afterlife. Theodore Roosevelt's African safari, outfitted in 1909–10, fixed the belted khaki jacket in the popular imagination, and from there it travelled into civilian wardrobes and eventually onto runways as the safari jacket.",
      "When you look at one, notice whether the belt is self-fabric with a buckle, or a drawstring, or absent. Each belongs to a different decade of the same idea, and the difference is usually more informative than the label."
    ],
    fig2: { src: "img/khaki.jpg", cap: "Khaki and the colonial wardrobe from which the bush jacket emerged.", credit: "Public domain" },
    look: "Self-fabric belt with buckle or D-rings, four bellows pockets, epaulettes. The belt's practical weight is disputed — treat it as period styling as much as function.",
    sources: ["Safari jacket history", "Boer War khaki drill references", "F.M. Allen, quoted on the self-belt (disputed)"]
  },

  "poplin": {
    lede: "Poplin is the cloth that made the tropics survivable — light, crisp, and unwilling to cling.",
    paras: [
      "Poplin is a plain weave with a fine warp and a thicker weft, which gives it a faint crosswise rib and a crisp hand. In the American tropical uniform it was the specified shell: a wind-resistant cotton poplin, light enough to dry quickly and tight enough to stop a breeze.",
      "The distinction that matters in humid heat is not how much air passes through the cloth but how it behaves when wet. A 1945 Quartermaster study of jungle uniform fabrics found that varying air permeability made no consistent difference to skin temperature or sweat rates. What separated good cloths from bad was drying speed and whether they clung. Poplin dries and does not cling; dense sateen does neither.",
      "The weight that appears in period documents is around five ounces per square yard for the wartime jungle uniform — roughly 170 grams per square metre, which is also where a modern reproduction should land. Heavier poplin turns into a jacket that traps heat; lighter turns into a shirt that tears.",
      "Look at the cloth against the light: a fine, even weave with a slight rib running across the width. Then wet a corner. If it darkens, stays heavy and sticks to your hand, it is not the cloth the specification had in mind."
    ],
    fig2: { src: "img/poplin.jpg", cap: "Plain-weave poplin under magnification: fine, even, with a faint crosswise rib.", credit: "Public domain" },
    look: "Fine even plain weave, faint crosswise rib, around 150–170 gsm. Wet it: it should dry fast and not cling.",
    claims: [
      { c: "June 1945: 5-ounce poplin diverted to jungle uniforms", s: "Quartermaster Corps history (archive.org scan)", u: "https://ia600506.us.archive.org/28/items/quartermastercor01risc/quartermastercor01risc.pdf" },
      { c: "Air permeability 12-40 cfm made no consistent difference to skin temperature or sweat", s: "Quartermaster Corps, Jungle Uniform - Physiological Appraisal of Ten Types of Fabrics (1945), NLM", u: "https://collections.nlm.nih.gov/pdf/nlm:nlmuid-22310030RX24-leaf" }
    ],
    sources: ["MIL-C-507 poplin (specification)", "Quartermaster Corps history (5-ounce poplin, 1945)", "1945 jungle uniform fabric study (NLM)"]
  },

  "ripstop": {
    lede: "Ripstop is a weave, not a fibre — and the American specification for the tropical cloth names the grid outright.",
    paras: [
      "A ripstop cloth is a plain weave with a heavier reinforcing yarn worked in at regular intervals, so a tear arriving at the grid stops instead of running the length of the panel. The trick is that the grid adds almost nothing to weight or density: the base cloth stays as open as ordinary cotton, which is why the jungle jacket could gain strength without gaining heat.",
      "The specification is unusually explicit. MIL-C-342, catalogued as NSN 8305-00-132-1080, describes a wind-resistant poplin in a solid-colour woven ripstop pattern, OG-107 on both sides, between 5.7 and 6.7 ounces per square yard — roughly 193 to 227 grams per square metre — mercerized and shrunk, in a 45-inch width. The same entry records that the cloth is required with a low infra-red dye formulation. The colour was engineered, not just chosen.",
      "What the specification cannot tell you is the day the jacket changed over. The switch from plain poplin to ripstop is consistently placed around 1967 by collectors and reproduction makers, and the dating of surviving labels supports that window, but the exact month has not surfaced in an open document. The cloth is established; the date is probable.",
      "For anyone sourcing fabric today, the useful part is the number. Ask for a 190–230 gsm cotton ripstop in a tight plain weave, and hold the swatch against the light: a real ripstop grid is visible as a faint lattice, not a printed check."
    ],
    fig2: { src: "img/hbt.jpg", cap: "A different answer to the same problem: herringbone twill, the WWII utility cloth that preceded the ripstop era.", credit: "Smithsonian NMAH, CC0" },
    look: "Hold the cloth to a light. A woven grid casts a faint lattice; a printed grid sits on the surface. Weight 190–230 gsm, OG shade both sides, mercerized and shrunk.",
    claims: [
      { c: "Ripstop poplin specification and weight range", s: "NSN 8305-00-132-1080 datasheet (MIL-C-342)", u: "https://nationalstocknumber.parts/en/catalog/textile-fabrics/8305-00-132-1080/mil-c-342" },
      { c: "Switch from plain poplin to ripstop around 1967", s: "Collector and reproduction accounts - unverified", u: "" }
    ],
    sources: ["MIL-C-342 / NSN 8305-00-132-1080 (specification record)", "Tropical Combat Uniform pattern accounts", "Textile references on ripstop construction"]
  },

  "sateen": {
    lede: "Sateen is the right cloth for the wrong climate — a wind fabric asked to do a heat job.",
    paras: [
      "Sateen is a satin weave: several weft yarns float over one warp, packing the surface into a smooth, lustrous face. It is dense, it sheds wind, and it takes dye beautifully. That combination made it the shell of the M-1943 field jacket, a garment designed to be worn over wool in a European winter.",
      "The same properties fail in the tropics. A tight face blocks air movement and holds water, so the cloth turns heavy and stays damp. Collectors describe it, unkindly but accurately, as a sponge in subtropical humidity. The American army did not send M-1943 sateen to the jungle; it issued light herringbone twill instead.",
      "The lesson is about systems rather than fabrics. Sateen was not a bad cloth; it was a cold-weather cloth. When a maker today copies an M-65 silhouette in the same sateen and sells it for tropical wear, they are reproducing a decision made for a different place.",
      "Look at the face: smooth, slightly shiny, with a tight weave you can barely see through. If the label claims tropical use, ask what it is lined with and how it dries."
    ],
    fig2: { src: "img/m1943.jpg", cap: "The M-1943 field jacket in cotton sateen: excellent for a European winter, wrong for the monsoon.", credit: "Smithsonian NMAH 2002.1735, CC0" },
    look: "Lustrous, tight face; holds water and dries slowly. A cold-weather cloth, not a tropical one.",
    sources: ["M-1943 field jacket records", "MOA / museum object descriptions", "Textile references on sateen construction"]
  },

  "ventile": {
    lede: "Ventile solved the oldest problem in outerwear: how to stop wind and water without making a plastic bag.",
    paras: [
      "Ventile is a high-density plain weave made from extra-long-staple cotton spun into low-twist yarn. Dry, the cloth breathes. Wet, the fibres swell and close the pores, and the garment becomes weatherproof — no coating, no membrane, no lamination.",
      "It was developed at the Shirley Institute in 1943 for RAF aircrew, who needed clothing that stayed comfortable in a cockpit but would not soak through if they ended up in the sea. That brief is quietly a hot-climate brief as well: a garment that blocks weather without becoming a sweatbox is exactly what a humid country needs.",
      "The trade-offs are real. Extra-long-staple cotton is a small fraction of the world crop, so Ventile is expensive; it is heavier than a synthetic shell; and it needs a little care to keep its performance. What it buys is a different feel: quiet, matte, cotton, with none of the rustle of nylon.",
      "Look for a dense, matte cotton with a slight stiffness when wet, and be sceptical of anything described as Ventile that feels like a coated synthetic. The name belongs to a specific cloth, not a marketing mood."
    ],
    look: "Dense matte cotton, stiffens when wet, breathes when dry. A trademarked cloth — check the maker, not the adjective.",
    sources: ["Ventile history (Shirley Institute, 1943)", "Textile references on high-density cotton", { label: "Stone Island Ventile liner jacket — listing photo © @ELITEOUTERWEARII", url: "https://www.grailed.com/listings/86006890" }]
  },

  "erdl": {
    lede: "ERDL was drawn in 1948 and issued in 1967 — nineteen years of waiting for a war that caught up with the pattern.",
    paras: [
      "The four-colour leaf-and-twig pattern was developed at the Engineer Research and Development Laboratories and then shelved. American forces went to Vietnam in a solid olive green, and in the wet undergrowth a single dark tone reads as one dark mass.",
      "The pattern arrived in two moods: a green-dominant version for lowland vegetation and a brown-dominant version for highland terrain. It was printed on the same tropical poplin and ripstop as the solid uniforms, which is why the same jacket appears in both. The Marines adopted the green-dominant version in 1968, and after the war the pattern was enlarged and recoloured into the woodland camouflage of 1981.",
      "The story is a good corrective to the idea that camouflage is designed. ERDL was designed in 1948, ignored for a generation, and adopted because the climate and the fabric made solid colour fail. The pattern was waiting; the need was not.",
      "When you look at a tropical jacket, the print tells you the era more reliably than the cut. Solid OG-107 places it earlier; four-colour leaf places it after 1967."
    ],
    fig2: { src: "img/nmaahc_2025_29_1_1-_2.jpg", cap: "Jungle fatigues in tiger stripe — a different, unofficial pattern from the same war.", credit: "Smithsonian NMAAHC, CC0" },
    look: "Four-colour leaf-and-twig print, green- or brown-dominant, on poplin or ripstop. Solid OG-107 is the earlier answer.",
    sources: ["ERDL pattern history (secondary)", "USMC adoption accounts, 1968", "M81 woodland evolution"]
  },

  "m42": {
    lede: "The M-1942 jump jacket was designed for men who jumped out of aircraft — and accidentally became the ancestor of the jungle jacket.",
    paras: [
      "Airborne troops needed a garment that could carry everything and still let them move. The M-1942 answered with four cargo pockets, an action back with expansion pleats, gussets and split cuffs — and a thin cotton poplin shell, because weight kills a jumper. It was a pack you could wear.",
      "The details read like a list of later tropical features: the slanted chest pockets, the pleated back, the room to move. When the tropical uniform was drawn up in 1963, the catalogue record is explicit that it was based closely on the M-1942 parachutist uniform. The jungle jacket is the jump jacket translated for climate.",
      "Its fabric did not survive the translation. The poplin proved too fragile in service — museum records note it wearing through prematurely during the North African landings of 1942 — and the lesson, that light cotton is right for mobility and fragile under abuse, echoed into the ripstop decision twenty-five years later.",
      "Look for the pleated back and the four pocket mouths. If a garment has the pockets but not the pleats, it is wearing the costume of the jump jacket without its engineering."
    ],
    fig2: { src: "img/m42.jpg", cap: "Paratroopers of the 502nd PIR with Eisenhower, England 1944: the jump uniform in use.", credit: "US Army Signal Corps, public domain" },
    look: "Four cargo pockets, action-back pleats, gussets, split cuffs, thin poplin. The pleats are the structural tell.",
    claims: [
      { c: "Four cargo pockets, action back, thin poplin", s: "Musee de l'Armee object record", u: "https://basedescollections.musee-armee.fr/ark:/66008/2021272/" },
      { c: "Tropical uniform based closely on the M-1942 parachutist uniform", s: "IWM object 30096162", u: "https://www.iwm.org.uk/collections/item/object/30096162" }
    ],
    sources: ["M-1942 records (Musée de l'Armée)", "IWM catalogue description (TCU based on M-1942)", "Airborne period photographs (NARA/US Army)"]
  },

  "m43": {
    lede: "The M-1943 was a system, not a coat — and its virtues were exactly why it could not be reissued in the jungle.",
    paras: [
      "The M-1943 field jacket was built around layering. Cut loose on purpose, it took a wool shirt, a sweater and a removable liner underneath, with a hood and neck flap for wind and an Ike jacket over the top. It was the first American combat uniform designed as a system rather than a single garment.",
      "Its shell was wind-resistant cotton sateen in a darkened olive — dense, smooth, made to keep weather out. Every one of those qualities is a cold-weather virtue. In humid heat the same density blocks airflow and holds water, which is why the army kept issuing light twill in the jungle instead.",
      "That makes the M-1943 the most useful negative example in the story: a correct answer to the wrong question. Its design logic survives in every field jacket since; its fabric logic is exactly what the tropical uniform had to abandon.",
      "On a garment, the M-1943 tells you what it is by its liner buttons, drawcord and buttoned cuffs — a jacket assembled from parts. When a reproduction of it is described as suitable for hot climates, the specification and the marketing are disagreeing."
    ],
    fig2: { src: "img/nmah_1062076.jpg", cap: "Cotton sateen, the M-1943 shell: smooth, dense, wind-resistant, slow to dry.", credit: "Smithsonian NMAH, CC0" },
    look: "Liner buttons, internal drawcord, buttoned cuffs, wind-resistant sateen. A layering garment, not a tropical one.",
    sources: ["Quartermaster Corps history", "M-1943 records (Paris Musées, CC0)", "Field jacket lineage references"]
  },

  "tcu1963": {
    lede: "The tropical combat uniform was an engineering project, not a design gesture — and the record says so.",
    paras: [
      "By the early 1960s American troops in Vietnam were wearing utility clothing built for other climates. The army's research and engineering command was asked for a functional hot-weather uniform, and the tropical combat uniform entered service in June 1963.",
      "The catalogue record is unusually direct: the garment was based closely on the M-1942 parachutist uniform of the Second World War. It kept the four expandable pockets with concealed-button flaps, the convertible collar and the buttoned cuff tabs, and changed the cloth — poplin first, ripstop from around 1967.",
      "It then evolved by subtraction. Type I had exposed buttons; Type II, in 1964–65, hid them behind flaps; Type III, in 1966–67, removed the gas flap and the shoulder straps. Each change answered a complaint from the field. Very little was added.",
      "Look at the details in order and you can almost date the jacket: exposed buttons are early, covered buttons later, no shoulder straps later still. The garment is a record of what soldiers asked to have taken away."
    ],
    fig2: { src: "img/nmaahc_2025_29_1_1-_2.jpg", cap: "Jungle fatigues, 1968–69: four pockets, flaps, the mature pattern.", credit: "Smithsonian NMAAHC, CC0" },
    look: "Four bellows pockets with concealed-button flaps, convertible collar, cuff tabs. Exposed buttons and shoulder straps indicate an earlier pattern.",
    claims: [
      { c: "Introduced June 1963; Quartermaster Research and Engineering Command; based closely on the M-1942 parachutist uniform", s: "IWM object 30096162", u: "https://www.iwm.org.uk/collections/item/object/30096162" },
      { c: "Type III (1966-67) removed the gas flap and shoulder straps", s: "IWM object 30096162", u: "https://www.iwm.org.uk/collections/item/object/30096162" },
      "A caution about specifications: military clothing is also a compromise. Details survive because a contractor, a stock position or a procurement decision allowed them, not only because they worked, and soldiers modified garments in theatre — sleeves shortened, pockets moved for helicopter work. A guide that reads only the issued pattern is reading half the garment."
    ],
    sources: ["IWM catalogue records (30096162, 30150059)", "Shelby Stanton chronology", "Smithsonian object records"]
  },

  "bdu": {
    lede: "The Battle Dress Uniform was the late compromise: durability bought with comfort.",
    paras: [
      "By 1981 the American army had replaced pure cotton tropical cloth with a nylon-cotton blend in a ripstop weave, printed in a four-colour woodland pattern. The BDU dried faster, resisted abrasion better and held its colour longer than the OG-107 garments it replaced.",
      "It also gave something up. The cotton face of the older cloth was softer and more comfortable in heat; the blend is crisper and, in still air, warmer. Collectors and wearers note the trade-off clearly: better wear, less comfort.",
      "The BDU is where the story that began with khaki arrives at its modern form — a garment optimised for durability, cost and camouflage rather than for a single climate. In that sense it is the first truly general-issue uniform, and the end of the tropical jacket as a special case.",
      "On a garment, the woodland print and the 50/50 nylon-cotton hand are the tells. If a seller describes a BDU as pure cotton, they are probably thinking of its predecessor."
    ],
    fig2: { src: "img/erdl.jpg", cap: "ERDL: the four-colour pattern that the woodland print of 1981 would enlarge and recolour.", credit: "Public domain" },
    look: "Woodland print, crisp nylon-cotton hand, ripstop grid. The 1981 answer to durability, not to heat.",
    sources: ["BDU specification references", "NYCO ripstop textile data"]
  },

  "yohji": {
    lede: "Yohji Yamamoto treats cloth as the subject, and the body as something it falls past.",
    paras: [
      "The military reference is unmistakable in much of Yohji's work, but it arrives turned inside out. Instead of copying a field jacket, the house takes a proportion — volume through the body, a long hem, a shoulder that sits away from the body — and cuts it in high-density cotton or wool gabardine heavy enough to hang.",
      "The dropped shoulder is worth being precise about. It is not a feature of the standard M-65 or M-1943 field jacket, which are boxy but set-in at the shoulder. The over-garments are different: the M-51 fishtail parka and the M-65 were cut large because they were worn over other clothing and equipment. Yohji's volume can be traced to both that over-garment logic and to Japanese flat-pattern cutting, which builds a garment from rectangles rather than a tailored shoulder.",
      "The construction follows the fabric. Raw-cut edges are left as ornament, structure is removed so the garment moves, and linings are replaced with softer cloth. Y's Resort 2023 used cotton twill with cut edges exposing coloured weft threads, and swapped hair canvas for wrinkled linen. Y's is a separate line from the main collection; the example belongs to the line, not to the house as a whole.",
      "For a maker the transferable move is the one every serious label copies: keep the pocket architecture, drop the cloth weight and the stiffness, and let the seams show."
    ],
    look: "Volume through the body, dropped shoulder, raw-cut hems, heavy drape. Garment reads military at a distance, textile at close range.",
    sources: ["Y's Resort 2023 collection notes (cotton twill, raw-cut edges)", "Yohji Yamamoto archive references (secondary)", { label: "Yohji Yamamoto Pour Homme military long jacket (gabardine) — listing photo © @HideOnBush4869", url: "https://www.grailed.com/listings/110865533" }]
  },

  "junya": {
    lede: "Junya Watanabe upgrades the archetype instead of deconstructing it.",
    paras: [
      "Where other labels take a military jacket apart, Junya Watanabe tends to make it better at being itself: a reversible MA-1 with a denim side, a parka cut with a cape volume, an M-65 rebuilt with technical membranes.",
      "The method is hybridisation. Two garments become one, seams are exposed as features, and linings are chosen to be seen. The Fashion Institute of Technology's collection notes describe the codes plainly: unconventional construction, exposed raw seams, cut-out darts, garment insides turned into details.",
      "What distinguishes the approach is that the utility is not ironic. The jacket still works as a jacket; the technical fabric is there for a reason. It is design as engineering, with a sense of humour about the source material.",
      "For a maker, Junya is the model for upgrading a tropical jacket with a membrane rather than more cloth — function added at the material level, not the silhouette.",
      "The politics are quieter than Kawakubo's but present: upgrading a military jacket with a membrane treats utility as something to be improved rather than mourned. The garment stays functional; the commentary sits in the fabrication."
    ],
    fig2: { src: "img/m65.jpg", cap: "The M-65: the archetype Junya's technical reissues start from.", credit: "Public domain" },
    look: "Reversible construction, mixed materials, exposed seams, technical membranes. Utility kept functional rather than quoted.",
    sources: ["FIT Museum object notes", "Junya Watanabe archive references", { label: "Junya Watanabe Man SS19 utility-pocket poncho — listing photo © @whoisvegas", url: "https://www.grailed.com/listings/76861329" }]
  },

  "cdg": {
    lede: "Comme des Garçons Homme Plus treats the uniform as a set of symbols to be taken apart.",
    paras: [
      "Rei Kawakubo's menswear line has returned to military clothing repeatedly, but never to reproduce it. The brief for one recent collection was to break down army symbols — uniform shapes, colour, camouflage patterns, helmets — and recombine what was left.",
      "The technique is anti-tailoring: sleeves and pockets cut from one garment and grafted onto another, structure removed, seams exposed, hems left raw. The house also works in light tropical-weight wool, which keeps a jacket crisp while weighing almost nothing — a hot-climate answer made of tailoring cloth rather than technical fabric.",
      "What makes the work useful for study is that the source is legible. You can see the field jacket in the object, and you can see exactly which decision was reversed. That legibility is rarer than it sounds.",
      "For a maker, the lesson is to deconstruct deliberately: choose one structural rule — the shoulder line, the pocket placement, the closure — and break only that.",
      "The politics matter. Kawakubo is not honouring the uniform; she is disarming it — taking apart the symbols that make soldiering legible (rank, camouflage, the helmet silhouette) and reassembling them as tailoring. Read as homage the work is merely clever; read as refusal it explains why the results are difficult on purpose."
    ],
    look: "Asymmetric seams, grafted pockets, raw hems, tropical-weight wool. The source garment should still be legible.",
    sources: ["CDG Homme Plus collection notes (FW25)", "Retailer archive descriptions", { label: "CDG Homme Plus A/W 1984-85 staff bomber — listing photo © @undergroundmen", url: "https://www.grailed.com/listings/28362089" }]
  },

  "mihara": {
    lede: "Mihara Yasuhiro builds garments by joining two that should not meet.",
    paras: [
      "The signature is assembly. A denim jacket and an MA-1 stitched front to back; details docked onto a shell that never had them; garments stripped of their original purpose and given a new one. The seams where the two halves meet are left visible, because the join is the design.",
      "The finishes reinforce the idea. Sun-faded cotton reads as a garment that has already lived outdoors; dyeing and washing do the work that a print cannot. A jacket becomes convincing not because of its insignia but because of its wear.",
      "There is a practical lesson buried in the theatrics. Splicing a cotton front to a nylon back is a way of putting weather-resistance where it is needed and breathability where it is not — an engineering solution wearing the costume of a collage.",
      "For a maker, the move to copy is the splice: change the fabric across a seam line rather than across the whole garment.",
      "The joining is also an argument. If two garments can be sewn into one, the categories the industry sells — jacket, bomber, denim — are conventions rather than facts. The visible seam is the evidence."
    ],
    look: "Visible joins, mixed fabrics across seams, sun-faded or washed finishes. The construction is the concept.",
    sources: ["Mihara Yasuhiro SS26 / AW26 references", "Archive retailer descriptions", { label: "Mihara Yasuhiro cotton and corduroy long jacket — listing photo © @PARCOS30_exported", url: "https://www.grailed.com/listings/60734222" }]
  },

  "hysteric": {
    lede: "Hysteric Glamour reproduces the specification, then quietly lightens it.",
    paras: [
      "The house's military work is archival on the fabric side: an air-force nylon twill MA-1 developed to military specification, a third-pattern fatigue shirt reproduced pocket for pocket. Then it rebalances the garment for everyday wear.",
      "The clearest example is the fatigue shirt: it keeps the four flap pockets and the pleated construction but swaps the cloth for an 80/20 cotton-weather blend, so it layers like a shirt rather than a jacket. The specification survives; the weight does not.",
      "That is a genuinely useful model for anyone reissuing military clothing in a hot climate. You do not need to abandon the pattern to make it wearable; you need to change the cloth and keep the grammar.",
      "On a garment, the tell is the hand: a fatigue shirt that feels like shirting rather than canvas has been through this translation.",
      "The motive differs from the Paris houses. Hysteric's reissues are affectionate and commercial: a Japanese label reproducing American military and workwear for a market that treats those objects as culture. Lightening the cloth is not critique; it is wearability."
    ],
    look: "Period pocket architecture in a lighter cloth. The pattern should be intact even if the fabric has been modernised.",
    sources: ["Hysteric Glamour line notes", "Smithsonian fatigue shirt record", { label: "Hysteric Glamour Napoleon military jacket — listing photo © @style_c0re", url: "https://www.grailed.com/listings/94610908" }]
  },

  "redkap": {
    lede: "Red Kap is the control group: workwear built to a specification sheet, with nothing removed.",
    paras: [
      "Red Kap makes uniforms for people who are paid to work in them, and the construction reflects that: poly-cotton twill, bartacked pockets, action-back pleats, reinforced seams, performance finishes. During the Second World War the company produced combat fatigues and field jackets.",
      "It is useful here precisely because it is not deconstructed. The fashion labels in this archive keep its pocket architecture, its bartacks and its action back, and remove the stiffness. Comparing the two is the clearest way to see what 'fashion' actually does to a work garment.",
      "The cost difference is instructive too. The same stitch pattern — a dense bartack at a pocket corner — appears on a modest work shirt and on a jacket costing ten times as much. Construction is not what separates them; context is.",
      "When you look at a workwear reproduction, check the bartacks and the action back first. Those are the places where the specification is either honoured or imitated.",
      "It is worth separating the two traditions. Military clothing was state-funded, standardised and built for short-term survival; industrial workwear evolved through market cost-efficiency and long service life. Treating them as a single 'utility' ancestor is convenient and slightly false."
    ],
    fig2: { src: "img/flatseam.jpg", cap: "A flat seam, from a 1921 dressmaking manual: the same construction logic workwear still uses.", credit: "Public domain" },
    look: "Bartacked pockets, action-back pleats, reinforced seams. The baseline that fashion labels dismantle.",
    sources: ["Red Kap product specifications", "WWII production records", { label: "Red Kap work coat — listing photo © @TheFlex", url: "https://www.grailed.com/listings/77260569" }]
  },

  "flat-felled": {
    lede: "The flat-felled seam is why a uniform survives being washed, dragged and repaired.",
    paras: [
      "Sew a plain seam, trim one allowance, wrap the wider one over it and stitch again. The result shows two rows on the face and one inside, with no raw edge anywhere. Nothing can fray because nothing is exposed, and the stress line carries two layers of cloth instead of one.",
      "That is why it is the load-bearing seam of military clothing: shoulders, yokes, side seams, sleeve seams. It is also why the allowance must be wider than usual — around 15 mm, trimmed to 8 mm on the inside — because the fold needs cloth to wrap with. Grade it down to 10 mm and the seam will not close.",
      "The French seam is the alternative for very light cloth: two passes, fully enclosed, softer against the body but limited to straight seams and not strong enough for a shoulder.",
      "On a garment, look at the inside of a side seam. If you can see a clean folded edge and a second row of stitching, the maker spent the time. If you see an overlocked edge, they did not."
    ],
    fig2: { src: "img/diagram-flatfelled.svg", cap: "Cross-section of a flat-felled seam: no exposed edge, two stitch rows, allowance 15 mm trimmed to 8 mm.", credit: "Original diagram, garmentsucks" },
    look: "Inside a side seam: folded edge, second row, no overlocking. Allowance 15 mm, finished 8 mm, 10–12 stitches per inch.",
    sources: ["ISO 4916 seam classification", "Flat seam illustration (1921, PD)", "Military garment seam records"]
  },

  "pom": {
    lede: "Five numbers decide whether a jacket reads correctly, before any styling begins.",
    paras: [
      "Chest, shoulder, body length, sleeve, cuff. Get the first two right and the garment reads as the thing it is meant to be; the rest is refinement. A jungle-fatigue jacket in a modern size M measures roughly 110 cm chest, 47 cm shoulder, 73 cm body, 63 cm sleeve and 13 cm cuff, flat.",
      "Those figures come from reproduction size charts and original contract labels, and they differ from what a fashion label might use. A modern cut narrows the shoulder and lengthens the body; the military pattern is boxier and shorter. Neither is wrong; they are answers to different questions.",
      "Tolerance matters as much as the number. A centimetre and a half on the chest is a production reality; half a centimetre on a pocket is a specification. Confusing the two is how garments end up technically within tolerance and visibly wrong.",
      "When you measure a jacket, lay it flat, close the front, and measure the chest at a fixed point below the armhole — then double it. Consistency of method matters more than the exact figure."
    ],
    fig2: { src: "img/pom.jpg", cap: "A tailor takes measurements for a uniform (FSA/OWI, Esther Bubley).", credit: "Library of Congress, public domain" },
    look: "Measure flat, chest ×2 at a fixed point, shoulder edge to edge. Tolerances: body ±1 cm, pockets ±0.5 cm.",
    claims: [
      { c: "Chest 110 / shoulder 47 / body 73 / sleeve 63 / cuff 13 cm", s: "Author's compilation from commercial reproduction size charts - a working spec, not a period specification", u: "" }
    ],
    sources: ["Reproduction size charts (1960s TCU)", "Original contract label measurements"]
  },

  "margiela": {
    lede: "A white label inside, four white stitches outside, and a house that let the clothes speak.",
    paras: [
      "Maison Martin Margiela was founded in Paris in 1988 by the Belgian designer Martin Margiela and Jenny Meirens. It arrived with a set of refusals: no portrait of the designer, no logo, no seasonal narrative, no bow at the end of the show.",
      "The signature is easy to get wrong. It is four white stitches set at the back, holding a blank white label inside the garment — and the stitches are meant to be seen from the outside, which is the opposite of a logo. The house has described the point plainly: so that someone meeting the garment for the first time reacts to its form and energy, not to the idea of 'brand' expressed through a label.",
      "The output was organised in numbers rather than names, so that a category could be treated as a category rather than a campaign. The Artisanal line, its most radical, was made from found and vintage garments re-cut into new pieces. The tabi boot, a split-toe shoe derived from Japanese work socks, became the house's most recognisable object.",
      "The anonymity was a working method, not mystique for its own sake. Margiela trained with Jean Paul Gaultier, where the designer was already a public figure; the new house chose the opposite. If the clothes were the only evidence, the clothes had to do the talking.",
      "It is worth stating the timeline, because the site's first version did not. Margiela left the house in 2009, and it was collectively designed without a nominated creative director until John Galliano was appointed in 2014. Galliano led it until December 2024; Glenn Martens was named creative director in January 2025. Any sentence describing the house as 'still anonymous' is describing the past, not the present.",
      "For someone starting in fashion, Margiela remains the most useful first case because it separates the two things beginners tend to fuse: the clothes and the person. Study the garments first."
    ],
    look: "Four white stitches at the back holding a blank label inside, no external logo, numeric line codes. Note the date range: Margiela 1988–2009, Galliano 2014–2024, Martens from 2025.",
    claims: [
      { c: "Four white stitches at the back holding a blank label inside the garment", s: "Maison Margiela product notes", u: "https://www.maisonmargiela.com/en-gb/four-stitches-cardholder-SA1VX0009P4745T8013.html" },
      { c: "House statement on the purpose of the four stitches", s: "Shrimpton Couture object description", u: "https://www.shrimptoncouture.com/products/fabulous-recent-maison-margiela-by-john-galliano-line-4-full-length-red-sheath-dress" },
      { c: "John Galliano 2014-2024; Glenn Martens appointed January 2025", s: "Vogue, 28 January 2025", u: "https://www.vogue.co.uk/article/glenn-martens-creative-director-maison-margiela" }
    ],
    sources: ["Maison Margiela product notes on the four stitches", "Shrimpton Couture, object description quoting the house on the four stitches", "Vogue, 28 Jan 2025 — Glenn Martens appointed creative director"]
  },

  "hbt": {
    lede: "Herringbone twill was the American army's first modern fatigue cloth — cheap, open, and unexpectedly elegant.",
    paras: [
      "The name describes the weave: a twill whose diagonal reverses direction at intervals, producing a broken zigzag that looks like a fish skeleton. In American service it was a cotton cloth, and its virtue was a rare combination — more open than a tight plain weave or a satin, so it ventilated, while the diagonal ribs resisted abrasion.",
      "It clothed the utility uniforms of the Second World War: the P-41, P-42 and P-44 fatigues, the Navy's N-3 trousers, and the paratrooper's M-42 jacket whose cut reappears later in the tropical uniform. In 1943 the cotton was darkened to olive drab shade 7 for better concealment in the South Pacific — a colour change, not a weave change.",
      "Its decline is equally instructive. HBT was a compromise: durable enough for utility wear, but still a comparatively heavy cotton. The tropical jacket moved to poplin and then ripstop, chasing weight and drying speed rather than abrasion resistance.",
      "For a maker, HBT is the shirt-jacket cloth. It takes a flat-felled seam beautifully, softens with washing, and its diagonal texture reads at a distance without needing a print. The tell is the direction of the zigzag: real herringbone reverses, and the reversal should be visible across the width of the cloth."
    ],
    fig2: { src: "img/ripstop.jpg", cap: "Its successor in the field: a ripstop tropical uniform in Vietnam, decades later.", credit: "NARA, public domain" },
    look: "Hold the cloth at an angle to the light: the zigzag should change direction in visible bands. A printed herringbone has no depth and does not catch light.",
    sources: ["US WWII HBT utility uniform records", "Navy specification 55-J-9", "Tropical Combat Uniform lineage"]
  },

  "khaki": {
    lede: "Before camouflage patterns there was dust-coloured cloth, chosen so that men would disappear into the ground they stood on.",
    paras: [
      "In 1848, on the North-West Frontier near Peshawar, a British officer named Harry Lumsden dressed his Corps of Guides in loose, earth-coloured clothing instead of the scarlet tunic. The cloth was cotton, dyed locally; the colour took its name from the Urdu and Persian word for dust.",
      "It was not the first attempt at concealment in uniform. Rifle regiments had worn green since the late eighteenth century, and the 95th Rifles are the famous example. Khaki's claim is narrower and still significant: it was the first dust-coloured service uniform to be adopted widely, spreading through Indian regiments and carried into the Second Afghan War, so that by 1885 it was standard issue in India.",
      "The practical logic was twofold. A pale, dusty tone reflects sunlight better than a dark tunic, and it matched the ground. Both properties matter in the same climate, which is why khaki is often called the first modern camouflage — an overstatement, but a useful one.",
      "When you look at khaki today, look at the cloth rather than the colour. Khaki drill is a stout cotton twill, heavier than the later jungle fabrics; khaki poplin and khaki cotton-linen belong to different garments entirely."
    ],
    look: "Check the weave before the shade. Drill is a heavy twill with a pronounced diagonal; poplin is fine and crisp. Khaki as a colour spans a wide range of cloths.",
    claims: [
      { c: "Khaki introduced 1848 by the Corps of Guides; standard in India by 1885", s: "National Interest - khaki as camouflage", u: "https://nationalinterest.org/blog/reboot/khaki-uniforms-were-original-military-camouflage-186291" },
      { c: "Rifle green worn by rifle regiments from the 18th century", s: "Shades of green - reference summary", u: "https://en.wikipedia.org/wiki/Shades_of_green" }
    ],
    sources: ["National Army Museum, khaki and the Corps of Guides", "Shades of green — rifle green adopted by rifle regiments in the 18th century", "Period uniform references (Brayley, Khaki Drill & Jungle Green)"]
  },

  "og107": {
    lede: "OG-107 is a shade code that keeps being mistaken for a cloth — and one fabric datasheet suggests the colour was engineered.",
    paras: [
      "Two garments share the name. The utility uniform in Olive Green 107 was cotton sateen: dense, wind-resistant, and a poor choice in humid heat. The tropical combat jacket in the same shade was poplin, and later ripstop. Same colour, opposite behaviour in humidity — and most of the reproduction market's confusion begins here.",
      "The colour itself is a code, not a fabric. The American olive family runs from the lighter Olive Drab No. 3 of the early war years to the darker No. 7 adopted in 1943, and then to the standardised shade that clothed every service from the 1950s. The exact standardisation date belongs in a proper colour-standard citation, and this site does not yet have one.",
      "A fabric datasheet for a wind-resistant ripstop poplin — NSN 8305-00-132-1080, MIL-C-342 — lists 'low infra red dye formulation' under special features, alongside a weight of 5.7 to 6.7 ounces per square yard and mercerising and shrinking. That is one record, not two, and it is a catalogue datasheet rather than the specification itself. It is enough to suggest the colour was engineered; it is not enough to claim a reflectance curve.",
      "What this means for a buyer is simpler than the chemistry. When a jacket is described as OG-107, ask which OG-107: the sateen utility or the tropical poplin. One is a sponge in the monsoon and the other is the reason the tropical uniform worked."
    ],
    look: "Identify the cloth before the colour. Sateen has a smooth, lustrous face and holds water; poplin is crisp and dries; ripstop shows a woven grid.",
    claims: [
      { c: "Wind-resistant ripstop poplin, OG-107 both sides, 5.7-6.7 oz/sq yd, low infra red dye formulation", s: "NSN 8305-00-132-1080 datasheet (MIL-C-342)", u: "https://nationalstocknumber.parts/en/catalog/textile-fabrics/8305-00-132-1080/mil-c-342" },
      { c: "Tropical jacket described as olive green poplin, OG-107", s: "IWM object 30097577", u: "https://www.iwm.org.uk/collections/item/object/30097577" }
    ],
    sources: ["NSN 8305-00-132-1080 datasheet (MIL-C-342 field data, opened 13 Nov 2026)", "OG-107 and olive drab colour references (secondary)", "Museum object records for the M-1943 and utility uniforms"]
  }

};
