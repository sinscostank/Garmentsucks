/* garmentsucks — long-form essays for every card page.
   Nada: pengamat garmen — tenang, spesifik, tidak menjual. Konsisten dengan label `conf`. */

window.ESSAYS = {

      "slant-pocket": {
    type: "details",
    lede: "The shape is real on surviving garments; the reason behind it is not documented.",
    blocks: [
      { h: "1. Summary", p: [
        "The chest pocket of the tropical jacket is cut at an inward slant, and that slant can be observed on surviving garments.",
        "The institutional records found so far describe slanted chest pockets on a USMC airborne HBT variant, not on the M-1942; the functional explanation usually quoted comes from marketplace listings. Confidence: unresolved."
      ] },
      { h: "2. What this is", p: [
        "A slant pocket: a patch pocket whose mouth is not horizontal, usually covered by a flap (a buttoned cover) across the opening. On tropical garments the pocket sits on the chest and is sewn at an angle toward the centre front. Other terms used here: mouth (the opening the hand enters), flap (the buttoned cover), bartack (a dense stitch at a stress point)."
      ] },
      { h: "3. Origin and context", p: [
        "The slant is associated with the M-1942, the Second World War parachutist jacket. Marketplace listings say it let the opposite hand reach the pocket while the wearer was in a parachute harness and equipment belt — a claim not found in any specification document.",
        "The link to the 1963 tropical uniform is stronger: an IWM catalogue description states that the Tropical Combat Uniform was introduced in June 1963 by the Quartermaster Research and Engineering Command and was based closely on the design of the M-1942 Parachutist Uniform. That description does not mention the slant. An untested possibility: the angle may be a pattern adaptation from the parachutist jacket rather than a separate functional decision. No document distinguishes the two."
      ] },
      { h: "4. How it works", p: [
        "Mechanically, an angled mouth follows the diagonal sweep of the hand rather than a straight drop. A second possibility: a mouth that turns upward and toward the centre makes contents less likely to spill when the wearer bends or lies prone.",
        "Both are inferences from shape, not statements from a document. No field evaluation of an angled chest pocket was found; the closest source found was an evaluation of trouser pockets, which does not discuss chest pockets."
      ] },
      { h: "5. Construction", p: [
        "The pocket is cut as a patch with a diagonal mouth, covered by a buttoned flap and sewn to the front panel. Work order: mark the pocket line on the panel, sew the pocket, attach the flap, bartack the mouth ends, then attach the button.",
        "Mouth width and pocket depth affect how easily the hand enters, and the flap adds a layer at the mouth that has to be lifted before the hand reaches the contents. This work order is inferred from garment construction; no document states it."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/origin", "Difference", "Source status"], rows: [
        ["M-1942 jump jacket", "1942, US", "reported to have slanted chest pockets", "unverified institutionally"],
        ["Tropical Combat Uniform", "1963, US", "flap with button; catalogue does not mention the slant", "IWM description"],
        ["HBT airborne USMC variant (P1944)", "1944, US", "slanted chest pockets with flaps", "verified (IWM 30100972)"],
        ["Modern reproduction", "present", "often a level pocket", "market observation"]
      ] }, p: [] },
      { h: "Competing accounts", p: [
        "The T1 records prove that slanted chest pockets existed on a USMC airborne garment, not that the M-1942 had them. The M-1942 claim and the harness explanation rest on T3 descriptions. A dated specification or a documented M-1942 example would settle it; the evidence currently favours the feature's existence in airborne clothing, not its specific attribution."
      ], table: { cols: ["Account", "Source (tier)", "What it claims", "Evidence offered", "Weak point"], rows: [
        ["Marketplace / dealer descriptions", "T3", "The M-1942 had slanted chest pockets so the opposite hand could reach them under a harness", "product and dealer descriptions", "no specification; commerce context"],
        ["IWM 30100972", "T1", "A USMC airborne HBT variant has slanted chest pockets with flaps", "object record", "different garment; does not describe the M-1942"],
        ["IWM TCU records", "T1", "Tropical garments have pocket flaps and buttons; no mention of a slant", "object records", "silent on the slant"]
      ] } },
      { h: "7. Telling an original from a reproduction", p: [
        "Look for the mouth angle, the flap covering it and a bartack at the mouth end. A level pocket, a shallow flap and no bartack indicate a reproduction.",
        "Look at the hem: a channel with a cord; on the thigh, a cargo pocket with a pleat and bartacks; on the label, stock numbers 8405-782-29xx. No drawcord and light cloth means a reproduction.",
        "Measure the pocket mouth against the horizontal and compare it with period photographs. Note the direction of the bartack as well: on a slanted pocket it usually sits at the lower end of the mouth, where stress gathers when the hand enters.",
        "On an original the flap covers the mouth and the bartack is visible at the mouth end; on a cheap reproduction the pocket is level, the flap is shallow, and the bartack is missing."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "Myth one: the angle figures in circulation are period figures. No document giving them was found. Myth two: the parachute-harness explanation is treated as fact; its source is marketplace listings. Mistake three: ignoring the flap when comparing pockets."
      ] },
      { h: "9. How to read it in wear", p: [
        "Try putting a hand into the pocket with the jacket buttoned: the slant changes the entry angle and feels different when the jacket is worn with a shoulder bag or a harness. With the jacket open, the angle also changes how the pocket reads from the front — the pocket line points to the centre rather than down."
      ] },
      { h: "10. Modern designer trail", p: [
        "Designers who rework military jackets often keep pocket geometry as a sign of origin, then change the proportion. The designers cards on this site show that pattern; no direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column is empty because no figure is recorded in a source. The right column is a reproduction working sheet."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["not found", "15° from horizontal, working tolerance ±1°"],
        ["not found", "120 mm below the shoulder seam"],
        ["not found", "50 mm from the centre front"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) What angle does the pocket on a jacket you own make, and against which line are you measuring it? 2) Is there a source for that figure, or only a blog and a shop? 3) Why does this card stay unresolved when the shape can be seen?"
      ] }
    ],
    glossary: [
      { t: "Slant pocket", d: "Pocket whose mouth is not horizontal." },
      { t: "Flap", d: "Buttoned cover over the pocket mouth." },
      { t: "Bartack", d: "Dense stitch bar at a stress point." },
      { t: "Harness", d: "Body rig for a parachute or equipment." }
    ],
    fig2: { src: "img/diagram-slant.svg", cap: "Geometry of the slanted pocket as a reproduction working sheet — the figures on the diagram are not period figures.", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] IWM 30150059 — Trousers, Combat, Tropical (Type III), description of the 1963 TCU", url: "https://www.iwm.org.uk/collections/item/object/30150059" },
      { label: "[S2] [T1] IWM 30096162 — Trousers, Combat, Tropical (Type III ERDL), UNI 4198, 1969", url: "https://www.iwm.org.uk/collections/item/object/30096162" },
      { label: "[S3] [T1] IWM 30100972 — Jacket, Utility, HBT P1944 USMC: slanted chest pockets with flaps", url: "https://www.iwm.org.uk/collections/item/object/30100972" },
      { label: "[S4] [T1] Smithsonian NMAH 1990.0221.01 — Model 1942, Jacket; Army; Airborne", url: "https://americanhistory.si.edu/collections/object/nmah_1060643" },
      { label: "[S5] [T3] IMA-USA — M-1942 jump jacket (four expandable cargo pockets)", url: "https://www.ima-usa.com/products/original-u-s-wwii-101st-airborne-division-m1942-paratrooper-jump-jacket-with-laundry-number" },
      { label: "[S6] [T3] Timechine — Para-42 Jump Jacket (slanted pockets)", url: "https://www.timechineco.com/product/para-42-jump-jacket-khaki/" },
      { label: "[S7] [T4] Traces de guerre — La mythique M-1942 Jump Jacket", url: "http://tracesdeguerre.com/la-mythique-m-1942-jump-jacket/" },
      { label: "[S8] [T2] NLM — evaluation of trouser pockets (inference context)", url: "https://collections.nlm.nih.gov/pdf/nlm:nlmuid-22310030RX24-leaf" }
    ],
    claims: [
      { c: "TCU introduced June 1963 by the QM R&E Command, based closely on the M-1942 Parachutist Uniform", s: "IWM 30150059 (catalogue description)", u: "https://www.iwm.org.uk/collections/item/object/30150059", tier: "T1", st: "verified (institutional)" },
      { c: "The M-1942 has slanted chest pockets", s: "Timechine; IMA; HuntingGunSupply", u: "https://www.timechineco.com/product/para-42-jump-jacket-khaki/", tier: "T3", st: "contested" },
      { c: "Reason: hand access under a parachute harness", s: "Dealer description", u: "https://www.ima-usa.com/products/original-u-s-wwii-101st-airborne-division-m1942-paratrooper-jump-jacket-with-laundry-number", tier: "T3", st: "unverified" },
      { c: "The USMC airborne HBT variant has slanted chest pockets with flaps", s: "IWM 30100972", u: "https://www.iwm.org.uk/collections/item/object/30100972", tier: "T1", st: "verified (institutional, different garment)" },
      { c: "The figures 15° / 120 mm / 50 mm", s: "Site reproduction working sheet", u: "", tier: "—", st: "not found in any document" },
      { c: "The slant survived on every pattern", s: "—", u: "", tier: "—", st: "unverified" }
    ]
  },

  "flap-pocket": {
    lede: "The flaps were already there. In 1964 the buttons on them were covered — and the record for that is unusually clean.",
    paras: [
      "A pocket without a flap is a cup. It works in a shop and badly in a jungle: the mouth catches on vines, the button catches the light, and everything inside ends up on the ground the first time its owner crawls.",
      "The first pattern of the tropical combat jacket carried pocket flaps, but the buttons sat exposed on them. Shelby Stanton's chronology places the approval of coat pocket flaps over pocket buttons at 26 August 1964, explicitly to prevent snagging. The Imperial War Museums' catalogue text corroborates the sequence independently: buttons exposed on Type I, concealed in Type II, introduced in 1964–65. Two records, different kinds — that is what supports a date.",
      "What the army did not do is instructive. It did not switch the front closure to a zip. It kept the buttons and covered them, because a button that snags can be re-sewn in the field while a zipper that seizes cannot.",
      "On a garment, look at the flap twice: once for shape — period flaps are asymmetric and pointed — and once for the buttons. The IWM record for a Type III USMC jacket does not state a button count; the two-button arrangement is reported by collectors, not by the record. A single snap is a later, cheaper solution, not a period one."
    ],
    look: "Flap shape, button count, whether buttons sit proud or covered. Exposed buttons indicate the first pattern; covered flaps and two buttonholes per lower flap indicate Type II or later.",
    claims: [
      { c: "Flaps over pocket buttons approved 26 August 1964, to prevent snagging", s: "Stanton chronology", u: "https://arsipmiliter.com/2023/01/03/jungle-jacket-an-introduction/" },
      { c: "Buttons exposed on Type I; concealed on Type II, 1964-65", s: "IWM 30096162 — Trousers, Combat, Tropical (Type III ERDL), UNI 4198, 1969 (record description covers the TCU sequence)", u: "https://www.iwm.org.uk/collections/item/object/30096162" },
      { c: "Two buttons per flap on a Type III USMC tropical jacket (reported, not in the record)", s: "IWM 30097577 — Jacket, Combat, Tropical (Type III, Class 1), UNI 5730", st: "unverified", u: "https://www.iwm.org.uk/collections/item/object/30097577" }
    ],
    sources: ["Shelby Stanton chronology (secondary)", "IWM 30097577 — Jacket, Combat, Tropical (Type III, Class 1), UNI 5730 (record does not state a button count)", "IWM 30096162 — Trousers, Combat, Tropical (Type III ERDL), UNI 4198, 1969 (record description covers the TCU sequence)"]
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
      { c: "Button front and concealed buttons from the second pattern", s: "IWM 30096162 — Trousers, Combat, Tropical (Type III ERDL), UNI 4198, 1969 (record description covers the TCU sequence)", u: "https://www.iwm.org.uk/collections/item/object/30096162" }
    ],
    sources: ["Gideon Sundbäck — separable fastener designed 1913, patent granted 1917 (US 1,219,881)", "IWM catalogue description, tropical uniform types", "Garment records, Smithsonian"]
  },

    "gas-flap": {
    type: "closure",
    lede: "An inner panel behind the buttons, sewn so the button line cannot leak.",
    blocks: [
      { h: "1. Summary", p: [
        "A gas flap is a second panel of cloth behind the front opening of a garment, closing the gaps between the buttons.",
        "An institutional catalogue describes it as part of the anti-gas features added to the M-1943 Special flannel shirt in 1942; early tropical jackets carried one and the third pattern removed it. Confidence: probable — the Second World War evidence is institutional, but the earlier First World War origin has no opened source."
      ] },
      { h: "2. What this is", p: [
        "Gas flap: an internal panel sewn behind the button placket so that no slit remains between the buttons. The same term covers a smaller flap under a cuff opening and the rear collar buttons used to attach a gas hood.",
        "Placket: the reinforced strip that carries the buttons. Convertible collar: a turn-down collar that can be buttoned closed."
      ] },
      { h: "3. Origin and context", p: [
        "The Imperial War Museums catalogue a Shirt, Flannel, OD, Coat Style (Special), M-1943, UNI 5233, made by The Shirt Company on 7 June 1943. The record describes a version introduced in 1942 with anti-gas features: two buttons at the rear of the collar for a gas hood, a gas flap behind the front opening, and gas flaps beneath the cuff openings.",
        "For the tropical jacket, the catalogue text records that the gas flap was among the details removed on the third pattern (1966–67), a subtraction rather than an addition."
      ] },
      { h: "4. How it works", p: [
        "The flap overlaps the closure line behind the buttons, so air travelling through the buttonholes meets a second layer of cloth. With the collar buttoned and a gas hood attached, the garment is sealed at the neck, front and cuffs.",
        "That sealing function is what the catalogue's anti-gas description establishes. How much protection it actually gave is not measured by any source opened for this card."
      ] },
      { h: "5. Construction", p: [
        "Work order readable from the garment: sew the placket, attach a second panel behind it with finished edges, then set the collar and cuff flaps. The inner panel must be wider than the button spacing so that it covers the gap at every button.",
        "This sequence is inferred from garment construction; no document opened for this card states it."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["First World War service dress", "1918, Britain", "reported gas flap at the collar", "not found in an opened source"],
        ["M-1943 Special flannel shirt", "1942–43, US", "gas flap behind the front opening; cuff gas flaps; collar hood buttons", "IWM UNI 5233 (object record; description excerpt)"],
        ["Tropical combat jacket, early patterns", "1963–65, US", "inner gas flap behind the buttons", "IWM catalogue description (excerpt)"],
        ["Third pattern tropical jacket", "1966–67, US", "gas flap removed", "IWM catalogue description (excerpt)"]
      ] }, p: [] },
      { h: "Competing accounts", p: [
        "The common account makes the gas flap a First World War invention; the only institutional evidence found documents it as a 1942 addition to an American shirt. A dated specification or a surviving First World War example with a catalogue record would settle the lineage. The evidence currently supports the 1942 anti-gas construction, not the earlier origin."
      ], table: { cols: ["Account", "Source (tier)", "What it claims", "Evidence offered", "Weak point"], rows: [
        ["Common account", "T4", "Gas flaps entered service in the First World War, after gas attacks", "general narrative", "no named document or object"],
        ["IWM catalogue", "T1", "The 1942 Special shirt added anti-gas features including a gas flap behind the front opening", "object record and description", "describes the 1942 shirt only; silent on earlier usage"]
      ] } },
      { h: "7. Telling an original from a reproduction", p: [
        "Unbutton the front and look behind the button row: an inner panel with finished edges, wider than the button spacing, is the flap. Check the cuffs from the inside and the rear collar for the hood buttons.",
        "A reproduction often omits the inner panel because it is invisible, or replaces it with a simple facing strip that leaves the buttonholes open."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The first mistake is calling every inner facing a gas flap: a facing finishes the edge, a gas flap overlaps the closure line.",
        "The second is assuming every tropical jacket had one; the catalogue records its removal on the third pattern."
      ] },
      { h: "9. How to read it in wear", p: [
        "With the jacket buttoned to the neck and the collar closed, the difference shows: a gas-flap garment feels sealed across the chest, where a plain placket lets air through the button slits."
      ] },
      { h: "10. Modern designer trail", p: [
        "The inner flap survives in some field jackets and in tailoring as a hidden closure detail; more often it is deleted as an economy. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records what a source states; no reproduction figures are proposed."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Gas flap behind the front opening; gas flaps beneath cuff openings; two rear collar buttons for a gas hood (IWM UNI 5233)", "—"],
        ["Gas flap removed on the third pattern of the tropical jacket, 1966–67 (IWM catalogue text)", "—"],
        ["First World War gas flap at the collar: not found in an opened source", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Unbutton a jacket and look behind the button row: is there an inner panel? 2) Does the inner panel overlap the buttonholes or only finish the edge? 3) Are there rear collar buttons for a hood?"
      ] }
    ],
    glossary: [
      { t: "Gas flap", d: "Inner panel behind the front opening." },
      { t: "Placket", d: "Strip carrying the buttons." },
      { t: "Gas hood", d: "Hood attached to collar buttons." },
      { t: "Facing", d: "Strip finishing an edge, not sealing a line." }
    ],
    fig2: { src: "img/m41.jpg", cap: "Front closure of an M-1941 jacket: the placket is visible; the inner gas flap is not visible in this photograph.", credit: "Paris Musées, CC0" },
    sources: [
      { label: "[S1] [T1] IWM 30097116 — Shirt, Flannel, OD, Coat Style (Special), M-1943, UNI 5233; object details opened, description via excerpt", url: "https://www.iwm.org.uk/collections/item/object/30097116" },
      { label: "[S2] [T1] IWM 30150059 / 30096162 — TCU label text: gas flap removed on Type III (excerpt)", url: "https://www.iwm.org.uk/collections/item/object/30150059" }
    ],
    claims: [
      { c: "Object: Shirt, Flannel, OD, Coat Style (Special), M-1943; made 7 June 1943 by The Shirt Company; UNI 5233", s: "IWM 30097116", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30097116", st: "verified (object details)" },
      { c: "1942 Special version added anti-gas features: gas flap behind the front opening, cuff gas flaps, rear collar hood buttons", s: "IWM 30097116 (description excerpt)", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30097116", st: "partially verified (excerpt)" },
      { c: "Gas flap removed on the third pattern of the tropical jacket, 1966–67", s: "IWM catalogue label text", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30150059", st: "partially verified (excerpt)" },
      { c: "First World War origin of the gas flap", s: "no opened source", tier: "—", u: "", st: "not found" }
    ]
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
    look: "One button plus tab, gusset behind the opening, buttonhole bartacked. Simplification here usually signals cost-cutting.",
    sources: ["M-1943 / M-51 / M-65 lineage references", "Australian War Memorial records", "Paris Musées M-41 object record (CC0)"]
  },

    "drawcord": {
    type: "closure",
    lede: "The invisible belt: a cord inside the waistband that does what a belt does without the buckle.",
    blocks: [
      { h: "1. Summary", p: [
        "A drawcord is a cord running inside a channel at the waist or hem, tightened to close the garment against weather and to change its fit.",
        "The US Army maintenance manual describes the M-65 cold weather coat as having waist and hem drawcords. Confidence: probable — the manual records the presence; why they were fitted is inference."
      ] },
      { h: "2. What this is", p: [
        "Drawcord: a cord inside a stitched channel, with exits at one or both sides so it can be pulled and tied. A toggle is a small slider that holds the cord. The channel is the folded and stitched strip that keeps the cord in place.",
        "The cord may be a flat braid or an elastic braid; the manual's commodity list includes MIL-T-43303, Cord, Elastic, Cotton."
      ] },
      { h: "3. Origin and context", p: [
        "The manual identifies the Coat, Cold Weather as cotton and nylon wind-resistant sateen, MIL-C-43455, class 1, Army Shade OG-107, with NSNs 8415-00-782-2933 through 8415-00-782-2945, and states that waist and hem drawcords are provided.",
        "The same document's maintenance instructions for the extreme cold weather parka advise fastening the drawstrings at the waist and bottom for maximum warmth, and loosening them to ventilate."
      ] },
      { h: "4. How it works", p: [
        "Closing the waist stops warm air leaving at the largest gap in the garment; closing the hem stops it leaving at the second largest. A third gap, the sleeve cuff, is handled by a separate closure, which is why the cuff tabs exist on the same coat. Tightening also changes the silhouette, which is why the same feature appears on field clothing and on fashion outerwear.",
        "The warmth argument comes from the maintenance instructions; the fit argument is inference from wear."
      ] },
      { h: "5. Construction", p: [
        "Work order readable from the garment: fold and stitch the channel, leave two openings for the cord, thread the cord, fit the toggle, then close the channel ends. The channel must be stitched on both sides or the cord will pull the fabric.",
        "This sequence is inferred from garment construction; no document opened for this card states it. The manual lists the cord and the drawcords as supplied components rather than describing the sewing order."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["Internal drawstring, M-1943 field jacket", "1943, US", "single cord inside the waistband", "not verified in an opened source"],
        ["M-65 cold weather coat", "1965, US", "waist and hem drawcords (MIL-C-43455)", "TM 10-8400-201-23, p. 186 (opened)"],
        ["Extreme cold weather parka", "later, US", "waist and hem drawstrings with ventilation instructions", "TM 10-8400-201-23, p. 197 (excerpt)"],
        ["Modern reproduction", "present", "narrow channel, flat cord, missing toggle", "market observation"]
      ] }, p: [] },
      { h: "7. Telling an original from a reproduction", p: [
        "Feel inside the waistband and hem for a cord with two exits; look for a stitched channel on both sides and a toggle or cord lock. On the M-65 coat both waist and hem should be present.",
        "Reproductions often simplify: one cord instead of two, a channel stitched only at the top, or a plain elastic band."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The first mistake is treating the drawcord as a belt: it is not meant to carry load, only to close the gap.",
        "The second is assuming the cord is elastic; the manual lists elastic cord as a material but does not state that the coat's drawcords use it."
      ] },
      { h: "9. How to read it in wear", p: [
        "Tighten the waist and the jacket stops riding; tighten the hem and the skirt of the coat stops flapping. Both changes are visible from the side, where a plain jacket hangs straight."
      ] },
      { h: "10. Modern designer trail", p: [
        "Drawcords are among the most-borrowed functional details in modern outerwear; the buckle-free closure reads as technical even when the garment is not."
      ] },
      { h: "11. Specification", p: [
        "The left column records what the manual states; the right column is a reproduction suggestion only."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Coat, Cold Weather: MIL-C-43455, cotton/nylon wind-resistant sateen, OG-107, NSNs 8415-00-782-2933 to 2945 (TM 10-8400-201-23, p. 186)", "Cord diameter 3 mm, flat braid"],
        ["Waist and hem drawcords are provided (TM p. 186)", "Channel width 10 mm, stitched both sides"],
        ["Commodity list includes MIL-T-43303 Cord, Elastic, Cotton (TM p. 186)", "Two exits per channel, toggle on each"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) How many cords does the jacket in front of you have? 2) Is the channel stitched on both sides? 3) Does the cord carry load, or only close a gap?"
      ] }
    ],
    glossary: [
      { t: "Drawcord", d: "Cord inside a channel for closing." },
      { t: "Channel", d: "Folded strip that holds the cord." },
      { t: "Toggle", d: "Slider that grips the cord." },
      { t: "MIL-C-43455", d: "Cloth specification for the cold-weather coat." }
    ],
    fig2: { src: "img/diagram-drawcord.svg", cap: "Schematic: waist and hem channels, cord exits and toggles. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] TM 10-8400-201-23, Identification and Description, p. 186 — cold weather coat, MIL-C-43455, waist and hem drawcords (opened)", url: "https://clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_186.htm" },
      { label: "[S2] [T1] TM 10-8400-201-23, p. 197 — parka drawstrings and ventilation instructions (excerpt)", url: "https://clothingandindividualequipment.tpub.com//TM-10-8400-201-23/css/TM-10-8400-201-23_197.htm" }
    ],
    claims: [
      { c: "Coat, Cold Weather: MIL-C-43455, cotton/nylon wind-resistant sateen, OG-107, NSNs 8415-00-782-2933 to 2945", s: "TM 10-8400-201-23, p. 186", tier: "T1", u: "https://clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_186.htm", st: "verified" },
      { c: "Waist and hem drawcords are provided", s: "TM 10-8400-201-23, p. 186", tier: "T1", u: "https://clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_186.htm", st: "verified" },
      { c: "Commodity list includes MIL-T-43303 Cord, Elastic, Cotton", s: "TM 10-8400-201-23, p. 186", tier: "T1", u: "https://clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_186.htm", st: "verified (listed; not stated for the coat's drawcords)" },
      { c: "Parka instructions: fasten drawstrings at waist and bottom for warmth", s: "TM 10-8400-201-23, p. 197", tier: "T1", u: "https://clothingandindividualequipment.tpub.com//TM-10-8400-201-23/css/TM-10-8400-201-23_197.htm", st: "partially verified (excerpt)" },
      { c: "Drawcord's purpose is warmth and fit", s: "inference from maintenance instructions", tier: "—", u: "", st: "inference" }
    ]
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
      { c: "Tropical uniform based closely on the M-1942 parachutist uniform", s: "IWM 30096162 — Trousers, Combat, Tropical (Type III ERDL), UNI 4198, 1969 (record description covers the TCU sequence)", u: "https://www.iwm.org.uk/collections/item/object/30096162" }
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
    type: "history",
    lede: "A uniform built by engineers: introduced in June 1963, then revised twice in four years.",
    blocks: [
      { h: "1. Summary", p: [
        "The Tropical Combat Uniform was introduced in June 1963 after development and testing by the US Army Quartermaster Research and Engineering Command, based closely on the M-1942 Parachutist Uniform.",
        "Three types followed: exposed pocket buttons on Type I, concealed buttons on Type II (1964–65), and on Type III (1966–67) the gas flap and shoulder epaulettes were removed. Confidence: probable — a single institutional catalogue text records the sequence; no independent corroboration was found."
      ] },
      { h: "2. What this is", p: [
        "The Tropical Combat Uniform (TCU): the light cotton uniform issued for hot, humid climates, comprising jacket and trousers in OG-107 and, later, ERDL camouflage. Type I, II and III are successive patterns, not separate garments.",
        "OG-107 is the olive-green shade code; ERDL is the four-colour leaf pattern. A gas flap is an inner panel behind the front closure; an epaulette is the shoulder strap."
      ] },
      { h: "3. Origin and context", p: [
        "The catalogue text records that the uniform was introduced in June 1963 after extensive development and testing by the Quartermaster Research and Engineering Command, and that it was based closely on the M-1942 Parachutist Uniform worn by airborne troops in the Second World War.",
        "It was made of thin cotton-poplin, with three types eventually entering service. Types I and II were produced exclusively in Army Shade OG-107; Type III was produced in both OG-107 and ERDL camouflage."
      ] },
      { h: "4. How it works", p: [
        "Thin poplin dries quickly and packs small; a convertible collar and a button front let the jacket be opened for ventilation. The later changes were subtractions: buttons covered so they did not catch, a gas flap deleted when it was no longer needed, shoulder straps removed because they snagged.",
        "The snagging explanation is inference from the changes; the catalogue describes what changed, not why."
      ] },
      { h: "5. Construction", p: [
        "The trousers are described as having a zip fly with a waist button, waist adjuster straps, seven belt loops, hip and rear slash pockets with concealed button flaps, and large expandable cargo pockets with concealed two-button flaps.",
        "This describes Type III examples; the earlier types' pocket details are not described in the sources opened. The work order is inferred from garment construction."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Type", "Date", "Change", "Source status"], rows: [
        ["Type I", "1963", "pocket flaps with exposed buttons; OG-107 only", "IWM catalogue text"],
        ["Type II", "1964–65", "buttons concealed; OG-107 only", "IWM catalogue text"],
        ["Type III", "1966–67", "gas flap and shoulder epaulettes removed; OG-107 and ERDL", "IWM catalogue text"],
        ["Modern reproduction", "present", "often simplified closures and flaps", "market observation"]
      ] }, p: [] },
      { h: "7. Telling an original from a reproduction", p: [
        "The fastest test is the front closure: exposed buttons place a jacket before the Type II change; concealed buttons with a flap place it from 1964–65 onward. Shoulder straps that are present suggest an earlier type; their absence suggests Type III.",
        "Check the label and the cloth as well: thin poplin with a crisp hand, and period stamping inside the waistband."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The first mistake is calling every jungle jacket a Type III: the three types differ in closure and fittings, and the differences survive on the garment.",
        "The second is repeating the dates without the source: June 1963, 1964–65 and 1966–67 all come from one institutional description, not from three independent documents."
      ] },
      { h: "9. How to read it in wear", p: [
        "The uniform reads through the front and the pockets: buttons visible or hidden, flaps present or absent, straps on the shoulders or not. Open the collar and the jacket becomes a shirt-jacket; close it and it reads as a field garment."
      ] },
      { h: "10. Modern designer trail", p: [
        "The jungle jacket is a standard reference for designers reworking military outerwear, usually keeping the four pockets and changing the cloth or the proportion. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records what the catalogue states; the right column is empty because no reproduction figures are proposed."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Introduced June 1963 by the QM Research and Engineering Command; based closely on the M-1942 Parachutist Uniform (IWM catalogue text)", "—"],
        ["Thin cotton-poplin; Types I–II OG-107 only; Type III OG-107 and ERDL (IWM catalogue text)", "—"],
        ["Type I exposed buttons; Type II concealed buttons 1964–65; Type III gas flap and epaulettes removed 1966–67 (IWM catalogue text)", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Are the pocket buttons on a jacket you own exposed or covered by a flap? 2) Are there shoulder straps? 3) Which type would those two answers indicate, and where would you check the label?"
      ] }
    ],
    glossary: [
      { t: "TCU", d: "Tropical Combat Uniform, 1963 onward." },
      { t: "OG-107", d: "US olive-green shade code." },
      { t: "ERDL", d: "Four-colour leaf camouflage pattern." },
      { t: "Gas flap", d: "Inner panel behind the front closure." },
      { t: "Epaulette", d: "Shoulder strap on a jacket." }
    ],
    fig2: { src: "img/diagram-tcu1963.svg", cap: "Schematic timeline of the three types: exposed buttons, concealed buttons, then removal of the gas flap and epaulettes. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] IWM 30150059 — Trousers, Combat, Tropical (Type III, Class 1); label text on the TCU sequence (index excerpt)", url: "https://www.iwm.org.uk/collections/item/object/30150059" },
      { label: "[S2] [T1] IWM 30096162 — Trousers, Combat, Tropical (Type III, Class 2 ERDL); same label text (index excerpt)", url: "https://www.iwm.org.uk/collections/item/object/30096162" },
      { label: "[Photo] Smithsonian NMAAHC — jungle tiger fatigues, CC0", url: "https://nmaahc.si.edu/object/nmaahc_2025.29.1.1-.2" }
    ],
    claims: [
      { c: "TCU introduced June 1963 after development and testing by the QM Research and Engineering Command", s: "IWM catalogue label text", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30150059", st: "verified (catalogue statement)" },
      { c: "Based closely on the M-1942 Parachutist Uniform", s: "IWM catalogue label text", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30150059", st: "verified (catalogue statement)" },
      { c: "Thin cotton-poplin; Types I–II OG-107 only; Type III OG-107 and ERDL", s: "IWM catalogue label text", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30096162", st: "verified (catalogue statement)" },
      { c: "Type I exposed buttons; Type II concealed 1964–65; Type III gas flap and epaulettes removed 1966–67", s: "IWM catalogue label text", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30150059", st: "verified (catalogue statement)" }
    ]
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
    type: "howto",
    lede: "The seam that encloses its own raw edges and takes two rows of stitches on the face.",
    blocks: [
      { h: "1. Summary", p: [
        "A flat-felled seam joins two pieces, trims one allowance, wraps the other over it and stitches again, so no raw edge is exposed.",
        "The construction is documented in sewing textbooks and classified in ISO 4916; no military specification was opened for this card. Confidence: probable — the method is well documented in T2 sources, the numbers are a working sheet."
      ] },
      { h: "2. What this is", p: [
        "Flat-felled seam: a self-finished seam with two rows of stitching on the face and one inside, used where the seam takes load and must not fray. French seam: a different self-finished seam, sewn twice with the raw edges enclosed inside a tube.",
        "Seam allowance: the cloth left beyond the stitching line. Grade: to trim one allowance shorter than the other so the seam lies flat."
      ] },
      { h: "3. Standards and origin", p: [
        "ISO 4916 classifies seams; the flat seam is class 4, and the lap-felled type is described as a strong seam made with one stitching operation that protects edges from fraying. The ISO standard itself was not opened; the classification is cited from an industry reference that summarises it.",
        "Sewing textbooks describe the same construction in practice, including the allowances used on shirts: one section 1/4 inch, the other 5/8 inch, with a finished seam of 3/8 inch."
      ] },
      { h: "4. Tools and materials", p: [
        "A sewing machine with a straight stitch; matching thread; an iron and pressing surface; a seam gauge or ruler; the two garment pieces with an allowance wide enough to wrap — around 15 mm for a 8 mm finished seam.",
        "A sharp needle and a slightly longer stitch help on heavy cloth; pressing after each step is what makes the seam lie flat."
      ] },
      { h: "5. How it works: the steps", p: [
        "1) Sew a plain seam with the wider allowance on the underlayer. 2) Grade: trim the underlayer allowance to about half. 3) Press the wider allowance over the trimmed one, folding it around the raw edge. 4) Stitch close to the fold. 5) Stitch a second row at the width that gives a straight, even seam, and press again.",
        "The fold must wrap completely; if the trimmed allowance is still wider than the folded one, the raw edge will show after washing."
      ] },
      { h: "6. Variants of the method", table: { cols: ["Method", "Operations", "Where used"], rows: [
        ["Flat-felled seam", "two stitching rows; one allowance wrapped over the other", "shirts, workwear, military garments"],
        ["French seam", "two stitching rows; raw edges enclosed inside a tube", "light cloth, straight seams"],
        ["Lap-felled seam", "one stitching operation; edges folded together", "jeans and heavy workwear"],
        ["Plain seam, overlocked", "one row, raw edges overlocked", "cheap production, not a felled seam"]
      ] }, p: [] },
      { h: "Competing accounts", p: [
        "Textbook practice and this site's working sheet use different allowance pairs, because they describe different garments. A shirt example uses 1/4 inch and 5/8 inch for a 3/8 inch finished seam; the site's field-jacket sheet uses 15 mm and 8 mm for a heavier cloth. Neither is a military specification. A dated garment specification with a stated seam allowance would settle the figures for a particular garment."
      ], table: { cols: ["Account", "Source (tier)", "What it claims", "Evidence offered", "Weak point"], rows: [
        ["Sewing textbook", "T2", "Shirt sleeve: allowances 1/4 inch and 5/8 inch; finished seam 3/8 inch", "worked example with steps", "general textbook, not a garment specification"],
        ["Site working sheet", "—", "Allowance 15 mm, finished 8 mm, 10–12 stitches per inch", "site's own working figures", "no external source"]
      ] } },
      { h: "7. Telling a correct seam from a wrong one", p: [
        "Correct: two even rows on the face, a folded edge inside, no raw edge visible, no puckering, and the seam lies flat after pressing. Wrong: an overlocked edge inside, a single row with a raw edge, or a fold that does not cover the trimmed allowance.",
        "Check the inside of a side seam on any garment; the presence of a fold and a second row is the test."
      ] },
      { h: "8. Common mistakes", p: [
        "Cutting the allowance too narrow to wrap; forgetting to grade the underlayer; starting the second row before pressing the fold; catching the fold unevenly so the seam twists.",
        "On heavy cloth, a fifth mistake is using a needle too fine for the layers, which bends the stitch line instead of penetrating it."
      ] },
      { h: "9. How to read it in wear", p: [
        "A felled seam keeps its shape through washing and takes abrasion without opening; a plain overlocked seam shows a ridge and frays at the edges over time."
      ] },
      { h: "10. Modern designer trail", p: [
        "The felled seam is the construction detail behind much of the visual language of workwear: visible double stitching exists because the seam must hold, not because it decorates."
      ] },
      { h: "11. Specification", p: [
        "The left column records what a source states; the right column is the site's working sheet."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["ISO 4916: flat seam class 4; lap-felled seam described as one stitching operation (standard not opened)", "Allowance 15 mm, trimmed to 8 mm"],
        ["Shirt example: allowances 1/4 inch and 5/8 inch, finished seam 3/8 inch (textbook)", "Finished seam 8 mm; 10–12 stitches per inch"],
        ["—", "Two rows on the face, one inside"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Turn a side seam inside out: can you see a folded edge and a second row? 2) Is the folded allowance wide enough to cover the trimmed one? 3) What would happen to this seam after ten washes?"
      ] }
    ],
    glossary: [
      { t: "Flat-felled seam", d: "Self-finished seam with two face rows." },
      { t: "French seam", d: "Self-finished seam enclosing edges in a tube." },
      { t: "Seam allowance", d: "Cloth beyond the stitching line." },
      { t: "Grade", d: "Trim one allowance shorter to reduce bulk." }
    ],
    fig2: { src: "img/diagram-flatfelled.svg", cap: "Cross-section: two rows on the face, folded allowance inside, no raw edge. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T2] Sewing textbook excerpt — self-finished seams, allowances and steps", url: "https://www.pearson.de/media/muster/ext/9781292055336.pdf" },
      { label: "[S2] [T3] Coats Group — seam types and ISO 4916 classification", url: "https://www.coats.com/pl/info-hub/seam-types" }
    ],
    claims: [
      { c: "Flat-felled seam construction: plain seam, grade one allowance, wrap the other, stitch again", s: "Sewing textbook excerpt", tier: "T2", u: "https://www.pearson.de/media/muster/ext/9781292055336.pdf", st: "partially verified (excerpt)" },
      { c: "Shirt example: allowances 1/4 inch and 5/8 inch, finished 3/8 inch", s: "Sewing textbook excerpt", tier: "T2", u: "https://www.pearson.de/media/muster/ext/9781292055336.pdf", st: "partially verified (excerpt)" },
      { c: "ISO 4916 class 4 flat seam; lap-felled type with one stitching operation", s: "Coats Group summary", tier: "T3", u: "https://www.coats.com/pl/info-hub/seam-types", st: "partially verified (standard not opened)" },
      { c: "Site figures: 15 mm allowance, 8 mm finished, 10–12 SPI", s: "site working sheet", tier: "—", u: "", st: "working specification" }
    ]
  },

    "pom": {
    type: "howto",
    lede: "Five measurements decide whether a jacket reads correctly, before any styling begins.",
    blocks: [
      { h: "1. Summary", p: [
        "Five flat measurements — chest, shoulder, body length, sleeve and cuff — describe a jacket well enough to compare one garment with another.",
        "The figures used on this site are a reproduction working specification, not a period document. Confidence: probable — the method is standard practice; the numbers are a working sheet."
      ] },
      { h: "2. What this is", p: [
        "Point of measure (POM): a defined place on a garment where a tape is placed, so that two people measuring the same jacket get the same number. A flat measurement is taken with the garment closed and lying flat; a body measurement is taken on a person.",
        "HPS is the high point of shoulder, the seam where the shoulder meets the collar. Half-chest is the chest measured across the front and doubled."
      ] },
      { h: "3. Standards and origin", p: [
        "Body measurement points are defined in standards: ISO 8559-1:2017 and ASTM D5219-15 both give named points and procedures. The standards themselves were not opened for this card; the definitions are cited through a published comparison that quotes them.",
        "Flat garment measurement is a trade convention rather than one universal standard, which is why sellers publish their own measurement charts."
      ] },
      { h: "4. Tools and materials", p: [
        "A flexible, non-stretch tape measure; a flat surface large enough to lay the garment out; the garment itself, buttoned or zipped closed; a notepad or a spreadsheet to record the numbers in the same order each time.",
        "No specialist tool is needed. A second pair of hands helps with long sleeves and with holding the tape level."
      ] },
      { h: "5. How it works: the five steps", p: [
        "1) Close the front and lay the jacket flat, smoothing out folds without stretching the cloth. 2) Chest: measure straight across from one armhole seam to the other at a fixed point below the armhole, then double it. 3) Shoulder: measure from shoulder seam to shoulder seam across the back. 4) Body length: measure from the HPS straight down to the hem. 5) Sleeve: measure from the shoulder seam to the cuff edge; cuff: measure the cuff opening flat.",
        "Record the numbers in the same order every time. Consistency of method matters more than the exact figure: a jacket measured at a different point is not comparable."
      ] },
      { h: "6. Variants of measurement", table: { cols: ["Measure", "How taken", "Use"], rows: [
        ["Chest (flat)", "armhole to armhole below the armhole, doubled", "the first comparison between two jackets"],
        ["Shoulder", "seam to seam across the back", "checks whether the shoulder line will sit on the wearer's shoulder"],
        ["Body length", "HPS to hem", "reads as short, regular or long"],
        ["Sleeve", "shoulder seam to cuff", "checks whether the cuff reaches the wrist"],
        ["Cuff", "cuff opening flat", "checks whether it will close over a sleeve"]
      ] }, p: [] },
      { h: "7. Telling a correct measurement from a wrong one", p: [
        "A correct chart states the points and whether chest is doubled. A wrong chart gives one number with no method, mixes body and flat measurements, or rounds inconsistently.",
        "Check by measuring a garment you own and comparing it with the chart of the same size: if the numbers differ by more than the tolerance, the charts use different points."
      ] },
      { h: "8. Common mistakes", p: [
        "Measuring across the armpits instead of a fixed point below them; forgetting to double the chest; measuring a knit while stretched; mixing centimetres and inches; rounding one figure and not the next.",
        "A fifth mistake is measuring a garment while it is hanging, which stretches the body and shortens the length."
      ] },
      { h: "9. How to read it in wear", p: [
        "Two jackets with the same chest can hang differently if the shoulder and length differ; the measurements read as a set, not as a single number."
      ] },
      { h: "10. Modern designer trail", p: [
        "Grading a collection means moving these points by fixed increments per size; the measurement sheet is where a design becomes a product. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records what a source states; the right column is the site's working sheet."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Body measurement points defined by ISO 8559-1:2017 and ASTM D5219-15 (standards not opened)", "Chest 110 cm, shoulder 47 cm, body 73 cm"],
        ["Flat garment measurement is a trade convention, not one universal standard", "Sleeve 63 cm, cuff 13 cm (working sheet, size M)"],
        ["—", "Tolerance ±1 cm body, ±0.5 cm pockets"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Measure a jacket you own with the five steps and write the numbers down. 2) Measure it again tomorrow: do you get the same numbers? 3) Which of your numbers would you trust least, and why?"
      ] }
    ],
    glossary: [
      { t: "Point of measure", d: "Defined place where the tape is placed." },
      { t: "HPS", d: "High point of shoulder, where shoulder meets collar." },
      { t: "Half-chest", d: "Chest measured across and doubled." },
      { t: "Tolerance", d: "Allowed variation around a target figure." }
    ],
    fig2: { src: "img/diagram-pom.svg", cap: "Schematic: the five measurement points on a jacket. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] ISO 8559-1:2017 and ASTM D5219-15 — body measurement points (specification-type sources; not opened, cited via a published comparison)", url: "https://ruor.uottawa.ca/bitstreams/2c518609-2235-486d-a58a-01cc19f76286/download" },
      { label: "[S2] [T3] Reproduction size charts (commercial) — working figures", url: "" }
    ],
    claims: [
      { c: "Body measurement points are defined by ISO 8559-1:2017 and ASTM D5219-15", s: "published comparison quoting the standards", tier: "T1", u: "https://ruor.uottawa.ca/bitstreams/2c518609-2235-486d-a58a-01cc19f76286/download", st: "partially verified (standards not opened)" },
      { c: "Flat garment measurement is a trade convention, not one universal standard", s: "no standard opened", tier: "—", u: "", st: "inference" },
      { c: "Chest 110 / shoulder 47 / body 73 / sleeve 63 / cuff 13 cm", s: "site working sheet", tier: "—", u: "", st: "working specification, not a period document" },
      { c: "Tolerances ±1 cm body, ±0.5 cm pockets", s: "site working sheet", tier: "—", u: "", st: "working specification" }
    ]
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
    fig2: { src: "img/grailed-hbt.jpg", cap: "French M-47 herringbone twill field jacket, 1950s-60s issue: an original-issue example of the cloth.", credit: "Listing photo © @ROAMWALK, Grailed" },
    look: "Hold the cloth at an angle to the light: the zigzag should change direction in visible bands. A printed herringbone has no depth and does not catch light.",
    sources: ["US WWII HBT utility uniform records", "Navy specification 55-J-9", "Tropical Combat Uniform lineage", { label: "French M-47 HBT field jacket — listing photo © @ROAMWALK", url: "https://www.grailed.com/listings/101120408" }]
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
,
    "m41-jacket": {
    type: "history",
    ogImage: "img/diagram-m41-jacket.png",
    lede: "The first American field jacket, and the object record that proves what it was called.",
    blocks: [
      { h: "1. Summary", p: [
        "The M-1941 field jacket — Jacket, Field, O.D. — replaced the long service coat with a short cotton jacket for field wear in the Second World War.",
        "An Imperial War Museums object record confirms the designation and the wartime association; the development story and the garment's features were not found in an opened primary source. Confidence: probable — the designation is verified by an object record, but the development story is T3-only."
      ] },
      { h: "2. What this is", p: [
        "Jacket, Field, O.D., M-1941: a short, light cotton field jacket with a front closure and four pockets, worn over the shirt instead of the wool service coat.",
        "O.D. is the olive-drab shade family; the M-1941 is often called the Parsons jacket after the officer credited with its design."
      ] },
      { h: "3. Origin and context", p: [
        "An Imperial War Museums record (UNI 13235) catalogues a Jacket, Field, OD, M-1941 associated with the US Army 2nd Ranger Battalion in the Second World War. The record confirms the designation and the period association; it does not describe the cut or the development history.",
        "A museum object record aggregated by the Digital Public Library of America describes a Jacket, Field, od, Stock No. 55-J-200-55-J-304 with the designer named as Major General J. K. Parsons, and states that the jacket was later designated the M-1941. That record was reachable only as an excerpt.",
        "Marketplace listings place the authorisation of development in November 1939 and describe the design as based on a civilian windbreaker suggested by Parsons. Those details are T3 and stay unverified."
      ] },
      { h: "4. How it works", p: [
        "A short jacket moves with the torso instead of binding at the thigh, and light cotton packs small. The field jacket was a compromise between warmth and mobility: the wool service coat was warmer but heavier and longer.",
        "The mobility argument is inference from the garment's role; no period evaluation was opened for this card."
      ] },
      { h: "5. Construction", p: [
        "The work order readable from the garment type: cut the body, attach the four pockets with flaps, build the front closure and collar, set the sleeves, then the hems and hardware.",
        "This sequence is inferred from garment construction; no document opened for this card describes it. Features often listed for the M-1941 — a zip hidden behind a button placket, four flap pockets, shoulder straps — were not confirmed from an opened source and are not asserted here."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["M-1941 field jacket", "1941, US", "short light cotton field jacket", "designation per IWM object record"],
        ["M-1943 field jacket", "1943, US", "heavier sateen shell, layering system", "site card m43; independent record"],
        ["M-1951 field jacket", "1951, US", "post-war revision of the field jacket", "not found"],
        ["Modern reproduction", "present", "often heavier cotton, corrected hardware", "market observation"]
      ] }, p: [] },
      { h: "Competing accounts", p: [
        "The museum record supports Parsons as the designer but does not date the authorisation; the 1939 date comes only from a dealer. A dated authorisation, a Quartermaster specification, or a contract would settle it. The evidence currently favours Parsons as designer; the 1939 authorisation stays unverified."
      ], table: { cols: ["Account", "Source (tier)", "What it claims", "Evidence offered", "Weak point"], rows: [
        ["Weitze (dealer)", "T3", "Development authorised in November 1939; based on a civilian windbreaker by Parsons", "dealer description", "no document; commerce context"],
        ["DPLA / History Colorado", "T1", "Designer named as Maj. Gen. J. K. Parsons; later designated M-1941; stock number given", "museum record excerpt", "no authorisation date; excerpt only"],
        ["Encyclopaedic summary", "T4", "Phased in from 1941 and replaced around 1943", "summary text", "no citation"]
      ] } },
      { h: "7. Telling an original from a reproduction", p: [
        "Check the label and the stock number if one survives; an original will carry a period stock number and contractor marking. Compare the cloth weight: the M-1941 is a light cotton, not a heavy sateen.",
        "Reproductions tend to be heavier and cleaner, and often add features from the later M-43."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The common mistake is describing the M-1941 from the M-1943: the later jacket is a different cloth and a different system.",
        "A second mistake is repeating the Parsons story as if it were documented in a primary source; on this card it rests on a museum record excerpt and dealer descriptions."
      ] },
      { h: "9. How to read it in wear", p: [
        "The jacket reads as a light layer: short body, plain front, four pockets. It sits under a coat rather than over one."
      ] },
      { h: "10. Modern designer trail", p: [
        "The field jacket's proportions are a standard reference in menswear. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records only what a source states; no reproduction figures are proposed."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Jacket, Field, OD, M-1941 (IWM UNI 13235; object record opened)", "—"],
        ["Stock No. 55-J-200-55-J-304; designer named as Maj. Gen. J. K. Parsons (DPLA museum record excerpt)", "—"],
        ["Cut and closure details: not found in opened sources", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Does a jacket you own carry a stock number, and can you read it? 2) Is the cloth light enough to fold into a small bundle? 3) Which claims here are T1, and which are T3?"
      ] }
    ],
    glossary: [
      { t: "Field jacket", d: "Short jacket worn over the shirt in the field." },
      { t: "Service coat", d: "Long wool coat the field jacket replaced." },
      { t: "O.D.", d: "Olive-drab shade family." },
      { t: "Stock number", d: "Quartermaster catalogue number on a label." }
    ],
    fig2: { src: "img/diagram-m41-jacket.svg", cap: "Schematic of the M-1941 field jacket: short body, four flap pockets, front closure. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] IWM object 30101005 — Jacket, Field, OD, M-1941, UNI 13235 (opened)", url: "https://www.iwm.org.uk/collections/item/object/30101005" },
      { label: "[S2] [T1] DPLA / History Colorado record — Jacket, Field, od, Stock No. 55-J-200-55-J-304, designer J. K. Parsons (excerpt; original record not opened)", url: "https://dp.la/search?subject=%22World+War+II%22%7C%22Jacket%22&type=%22physical+object%22" },
      { label: "[S3] [T3] Weitze — US M-41 jacket descriptions (1939 authorisation; Parsons windbreaker)", url: "https://www.weitze.com/militaria/88/USA_World_War_2_USMC_M_41_Jacket_for_a_Marines_named_W_R_Weathersby__526588.html" },
      { label: "[Photo] Paris Musées — US M-1941 field jacket, CC0", url: "https://basedescollections.musee-armee.fr/ark:/66008/2021272/" }
    ],
    claims: [
      { c: "Designation: Jacket, Field, OD, M-1941; WWII association (2nd Ranger Battalion)", s: "IWM 30101005, UNI 13235", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30101005", st: "verified" },
      { c: "Stock No. 55-J-200-55-J-304; designer named as Maj. Gen. J. K. Parsons; later designated M-1941", s: "DPLA/History Colorado record", tier: "T1", u: "https://dp.la/search?subject=%22World+War+II%22%7C%22Jacket%22&type=%22physical+object%22", st: "partially verified (excerpt)" },
      { c: "Development authorised in November 1939; based on a civilian windbreaker", s: "Weitze (dealer)", tier: "T3", u: "https://www.weitze.com/militaria/88/USA_World_War_2_USMC_M_41_Jacket_for_a_Marines_named_W_R_Weathersby__526588.html", st: "contested" },
      { c: "Zip behind button placket, four flap pockets, shoulder straps", s: "no opened source", tier: "—", u: "", st: "not found" },
      { c: "Replaced by the M-1943", s: "secondary accounts only", tier: "T4", u: "", st: "unverified" }
    ]
  },

    "n1-jacket": {
    type: "construction",
    ogImage: "img/diagram-n1-jacket.png",
    lede: "The deck jacket built for men working in freezing spray — as its reproducers describe it.",
    blocks: [
      { h: "1. Summary", p: [
        "The N-1 is a short US Navy deck jacket: a cotton jungle-cloth shell over an alpaca and wool pile lining, closed with a zip.",
        "No specification, manual or museum record was found or opened for this garment, so the dating and materials rest on reproducer notes and marketplace listings. Confidence: probable — no T1 source was found; the dating and materials rest on T3 notes."
      ] },
      { h: "2. What this is", p: [
        "Jacket, Deck, Zip, Type N-1: a hip-length jacket for crews working on open decks. Jungle cloth is a tightly woven cotton grosgrain with a pronounced rib; the pile lining is a deep wool-alpaca fleece.",
        "Reproducer notes describe a Navy Department label, a metal zip and urea buttons as period details."
      ] },
      { h: "3. Origin and context", p: [
        "Per marketplace listings, the navy-blue model was adopted in 1944 and a khaki model was issued in 1945; the colour change also dropped some alpaca details and simplified the cord fittings.",
        "No T1 source was found: neither a Navy specification nor a museum object record for the N-1 was located. The 1944 date therefore stays unverified and is stated in the essay as per marketplace listings."
      ] },
      { h: "4. How it works", p: [
        "A tight cotton shell blocks wind; a pile lining traps air next to the body and keeps working when damp. The short body stays clear of a deck and of equipment. The knit cuffs and collar close the two places where cold air enters and where cloth would otherwise trail into machinery, and the zip front can be opened from the top for ventilation while the jacket stays on.",
        "The wind and warmth mechanism is a property of the materials as described by the reproducer; the reason for the short cut is inference."
      ] },
      { h: "5. Construction", p: [
        "The work order readable from the garment: cut the shell, attach the lining, set the sleeves and knit cuffs, assemble the front zip, then the knit collar and hem.",
        "This sequence is inferred from garment construction; no document opened for this card states it. Period details claimed by reproducers include a Talon-style metal zip and a Navy Department label."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["N-1, navy blue", "1944 (per marketplace listings), US", "jungle cloth, alpaca/wool pile, zip front", "unverified (T3 only)"],
        ["N-1, khaki", "1945 (per marketplace listings), US", "colour change; some alpaca details deleted", "unverified (T3 only)"],
        ["N-2 / N-3", "later 1940s, US", "other deck and cold-weather jackets in the N series", "not found"],
        ["Modern reproduction", "present", "heavier cloth, cleaner finish", "market observation"]
      ] }, p: [] },
      { h: "7. Telling an original from a reproduction", p: [
        "Per marketplace listings and reproducer photographs: check the jungle-cloth rib, the pile lining, the knit cuffs and collar, and the label. Reproductions tend to be cleaner, heavier and warmer than the originals ever were, and their labels are usually modern prints rather than period stamps.",
        "No period hardware was examined for this card, so the only safe test is comparing a candidate against the photographs on the listing pages cited here."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The common mistake is dating an N-1 from a reproduction's label or from the 1944 figure seen on retail pages: those pages are T3.",
        "A second mistake is assuming every short knit-cuffed jacket is an N-1; the N-2 and N-3 are different garments."
      ] },
      { h: "9. How to read it in wear", p: [
        "The jacket reads from the hem and cuffs: short body, ribbed finishes, zip front. Worn over heavy knitwear, the short cut is the point."
      ] },
      { h: "10. Modern designer trail", p: [
        "The deck jacket's shape — short body, knit collar, zip — is a recurring outerwear reference. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records what reproducer notes state; the right column is empty because no reproduction figures are proposed."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Shell: cotton jungle cloth (cotton grosgrain); lining: alpaca and wool pile (per reproducer notes, T3)", "—"],
        ["Front zip: metal, Talon-type; buttons: urea (per reproducer notes, T3)", "—"],
        ["Date: navy model 1944, khaki 1945 (per marketplace listings, T3; no T1 found)", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Can you find a Navy Department label in a jacket you own? 2) Does the lining read as pile or as synthetic fleece? 3) Which claims on this card would change if a Navy specification were found?"
      ] }
    ],
    glossary: [
      { t: "Jungle cloth", d: "Tight cotton grosgrain with a pronounced rib." },
      { t: "Pile lining", d: "Deep fleece, here alpaca and wool." },
      { t: "Deck jacket", d: "Short jacket for crews working on open decks." },
      { t: "Navy Department label", d: "Period label type cited by reproducers." }
    ],
    fig2: { src: "img/diagram-n1-jacket.svg", cap: "Schematic section: jungle-cloth shell, pile lining, knit cuff and collar, zip front. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T3] Buzz Rickson's — Type N-1 Navy jacket notes (1944 navy model, 1945 khaki; jungle cloth; alpaca and wool pile; Talon zip; Navy Department label)", url: "https://www.buzzricksons.jp/news/2969/" },
      { label: "[S2] [T3] Hinoya — Buzz Rickson's N-1 materials listing", url: "https://hinoya.shop/ja-cn/collections/outer/products/br15340" },
      { label: "[S3] [T3] Grailed listing 87694552 — listing photo, @VintagecollectionsID, Grailed, accessed 2026-11-13", url: "https://www.grailed.com/listings/87694552" }
    ],
    claims: [
      { c: "Navy model adopted 1944; khaki model issued 1945", s: "Buzz Rickson's; Hinoya", tier: "T3", u: "https://www.buzzricksons.jp/news/2969/", st: "unverified (no T1 found)" },
      { c: "Shell is cotton jungle cloth; lining is alpaca and wool pile", s: "Buzz Rickson's; Hinoya", tier: "T3", u: "https://hinoya.shop/ja-cn/collections/outer/products/br15340", st: "unverified (no T1 found)" },
      { c: "Metal zip and urea buttons; Navy Department label", s: "Buzz Rickson's", tier: "T3", u: "https://www.buzzricksons.jp/news/2969/", st: "unverified" },
      { c: "Short cut keeps the jacket clear of a deck", s: "inference from garment", tier: "—", u: "", st: "inference" }
    ]
  },

    "sailor-trousers": {
    type: "construction",
    ogImage: "img/diagram-sailor-trousers.png",
    lede: "The widest trousers in uniform, and an engineering answer to working at sea.",
    blocks: [
      { h: "1. Summary", p: [
        "US Navy dress blue trousers for enlisted sailors are wool, cut with a high rise, a buttoned broad fall front and a bell-shaped hem.",
        "The wool and the dress-blue designation are recorded in a museum catalogue; the cut details were not found in a document opened for this card. Confidence: probable — wool and designation come from museum metadata; the cut was not found."
      ] },
      { h: "2. What this is", p: [
        "Dress blue trousers: the dark-blue lower half of the Navy dress uniform, worn by enlisted sailors. The broad fall front is a flap that buttons across the belly instead of a fly; the bell-bottom is a hem that widens toward the shoe.",
        "Wool flannel is a soft, brushed wool with a warm hand; it insulates even when damp, which is why naval clothing stayed wool long after field clothing moved to cotton."
      ] },
      { h: "3. Origin and context", p: [
        "The 1941 US Navy Uniform Regulations, issued on 31 May 1941, define the dress uniforms of the period. The regulations are an official publication, but this card did not open the full text, so no wording from them is quoted here.",
        "A Smithsonian National Museum of American History record catalogues a pair of enlisted dress blue trousers in wool with a WWII association (object 2017.0228.02). The record was reachable only as metadata, not as an opened page."
      ] },
      { h: "4. How it works", p: [
        "A wide hem can be rolled up over a boot, and it sheds quickly in water. The high rise and the fall front keep the waist clear of a jumper and a belt.",
        "That explanation is inference from the garment, not a statement from a document. The surviving evidence establishes the material and the uniform designation; it does not establish why the hem was shaped this way."
      ] },
      { h: "5. Construction", p: [
        "The work order readable from the garment: cut the legs wide, join the fall front to the waistband with buttons, set the pockets into the side seams, close the legs, then face and finish the hem at the bell width.",
        "This sequence is inferred from garment construction; no document opened for this card states it. Original wool is heavy and slightly hairy, and the fall front closes with a row of buttons rather than a zip."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["Dress blue trousers, wool", "WWII period, US", "wool, high rise, fall front, bell hem", "material and designation per museum metadata; cut unverified"],
        ["White dress trousers", "same period, US", "cotton drill for summer dress", "not found"],
        ["Dungarees / working blues", "same period, US", "denim work trousers, not dress", "not found"],
        ["Modern reproduction", "present", "lighter wool, shorter rise", "market observation"]
      ] }, p: [] },
      { h: "7. Telling an original from a reproduction", p: [
        "On a genuine pair the wool is thick and soft, the fall front is a full flap rather than a fly, and the hem is cut wide. Reproductions often use lighter wool, a zip fly, or a narrower hem.",
        "Check the inside waistband for a contractor stamp or name; the absence of a stamp is not proof either way on a garment this old."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The first myth is that the flare is decorative. It has a working purpose, though the sources on this card do not state it in writing.",
        "The second is treating every dark-blue Navy trouser as the same garment: officers' service trousers are a different cut and cloth from the enlisted dress blue."
      ] },
      { h: "9. How to read it in wear", p: [
        "The trousers read through the hem: how wide the leg falls over the shoe, and how high the waist sits under a jumper. A narrow hem changes the whole uniform."
      ] },
      { h: "10. Modern designer trail", p: [
        "The wide-leg sailor trouser is a recurring reference in workwear and avant-garde collections, usually with the rise lowered and the wool replaced. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records only what a source states. No reproduction figures are proposed."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Enlisted dress blue trousers; wool (Smithsonian NMAH 2017.0228.02; metadata excerpt)", "—"],
        ["Dress uniform defined by US Navy Uniform Regulations, 31 May 1941 (official publication; full text not opened)", "—"],
        ["Cut details (rise, fall front, bell hem): not found in opened sources", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Is the fly on a pair you own a fall front or a zip? 2) Does the wool feel heavy and soft, or thin and dry? 3) Which claims on this card would change if the 1941 regulations were opened?"
      ] }
    ],
    glossary: [
      { t: "Fall front", d: "Flap that buttons across the belly instead of a fly." },
      { t: "Bell-bottom", d: "Hem that widens toward the shoe." },
      { t: "Wool flannel", d: "Soft brushed wool with a warm hand." },
      { t: "Rise", d: "Distance from crotch to waistband." }
    ],
    fig2: { src: "img/diagram-sailor-trousers.svg", cap: "Schematic of the dress blue trouser: high rise, buttoned fall front, bell hem. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] Smithsonian NMAH, object 2017.0228.02 — Enlisted dress blue trousers, wool, WWII (metadata excerpt; page not opened)", url: "https://americanhistory.si.edu/collections/object/nmah_1846409" },
      { label: "[S2] [T1] US Navy Uniform Regulations, 31 May 1941 (official publication; PDF not opened)", url: "https://media.defense.gov/2022/Apr/01/2002968209/-1/-1/0/1941_USN-UNIFORM_REGS_W_CG_ADDITIONS.PDF" },
      { label: "[S3] [T3] Grailed listing 95633828 — listing photo, @coveManor, Grailed, accessed 2026-11-13", url: "https://www.grailed.com/listings/95633828" }
    ],
    claims: [
      { c: "Enlisted dress blue trousers; wool; WWII association", s: "Smithsonian NMAH 2017.0228.02", tier: "T1", u: "https://americanhistory.si.edu/collections/object/nmah_1846409", st: "partially verified (metadata excerpt)" },
      { c: "Dress uniform defined by US Navy Uniform Regulations, 31 May 1941", s: "US Navy Uniform Regulations 1941", tier: "T1", u: "https://media.defense.gov/2022/Apr/01/2002968209/-1/-1/0/1941_USN-UNIFORM_REGS_W_CG_ADDITIONS.PDF", st: "unverified (full text not opened)" },
      { c: "High rise, buttoned fall front, bell-shaped hem", s: "no opened source", tier: "—", u: "", st: "not found" },
      { c: "Flare allows the leg to be rolled or shed in water", s: "inference from garment", tier: "—", u: "", st: "inference" }
    ]
  },

    "og107-trousers": {
    type: "history",
    ogImage: "img/diagram-og107-utility.png",
    lede: "The utility trousers that carried the OG-107 colour — and are not the M-65 field trousers.",
    blocks: [
      { h: "1. Summary", p: [
        "The OG-107 utility trousers are sateen work trousers in the US olive-green shade, with slash and rear pockets and no cargo pockets.",
        "They belong to the utility uniform, not to the M-65 field clothing system: the M-65 field trousers (specification MIL-T-43497) are a separate cotton-nylon wind-resistant sateen garment with cargo pockets. Confidence: probable — the specification designation appears in a museum catalogue record, but the shape details rest on marketplace listings and reproducer notes."
      ] },
      { h: "2. What this is", p: [
        "Trousers, Utility, often called fatigue trousers: straight-leg work trousers in cotton sateen, dyed Army Shade OG-107, closed with a button fly and cut with slash pockets at the side seams and buttoned pockets at the rear.",
        "The sateen is a tight weave with a smooth face; OG-107 is the shade code, not the cloth. A cargo pocket is a large patch pocket with a pleat, attached to the thigh — the utility trousers do not have one."
      ] },
      { h: "3. Origin and context", p: [
        "A Smithsonian National Museum of American History catalogue record describes a pair as Trousers, Utility, with the designer number OLIVE GREEN 107 and MIL-T-838-A; the credit line is the U.S. Army Quartermaster Museum. The record was reachable only as a catalogue excerpt, not as an opened page.",
        "Marketplace listings and reproducer notes date the sateen version to the mid-1950s and describe the trousers as remaining in issue until the mid-1970s, when they were followed by OG-507. No specification document was found or opened for this garment, so the dating is per marketplace listings."
      ] },
      { h: "4. How it works", p: [
        "Sateen is dense: it blocks wind and resists abrasion, which suits work and garrison use, but it holds water and dries slowly. The slash pocket sits where a hand falls; the rear pockets are buttoned so contents stay put when seated.",
        "The climate argument is an inference from the cloth, not a statement from a document: in humid heat the same density that makes sateen useful in winter makes it a poor field cloth."
      ] },
      { h: "5. Construction", p: [
        "The work order readable from the garment: cut the legs, attach the slash pocket bags at the side seams, build the rear pockets with flaps, sew the fly and waistband, close the leg seams, then the hems.",
        "This sequence is inferred from garment construction; no document opened for this card describes the manufacturing order. The pocket set is the identifying feature: two slash pockets, two rear pockets, no thigh cargo pockets."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["Utility trousers, OG-107", "mid-1950s to mid-1970s, US", "cotton sateen; slash and rear pockets; no cargo pockets", "spec designation per museum excerpt; dates per marketplace listings"],
        ["M-65 field trousers", "1965, US", "MIL-T-43497 cotton-nylon wind-resistant sateen; cargo pockets; snap front and rear pockets", "TM 10-8400-201-23 excerpt; a different garment"],
        ["Utility trousers, OG-507", "mid-1970s onward, US", "polyester-cotton replacement", "per marketplace listings"],
        ["Modern reproduction", "present", "often tighter sateen, corrected pockets", "market observation"]
      ] }, p: [] },
      { h: "7. Telling an original from a reproduction", p: [
        "Look for the sateen face, the button fly, and the absence of thigh cargo pockets. Original pairs carry a stamped/printed stock label inside the waistband; the shade should read as a flat olive rather than a warm khaki.",
        "Per marketplace listings, reproductions often use a lighter sateen, add cargo pockets for a field look, or print the OG-107 designation without a stock number."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The most common error is treating the OG-107 utility trousers as M-65 field trousers: the two share the shade and the word sateen but differ in specification, closure, pockets and weight.",
        "A second error is assuming that a cargo pocket belongs to the utility pattern; it does not."
      ] },
      { h: "9. How to read it in wear", p: [
        "The straight leg and flat pocket set read as workwear; the same trousers become a field garment only when paired with the jungle jacket. Check how the waistband sits when a jacket hangs over it."
      ] },
      { h: "10. Modern designer trail", p: [
        "The utility trouser is the quieter half of the military wardrobe: designers borrow its plain front and straight leg rather than its insignia. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records only what a source states; the right column is empty because no reproduction figures are proposed for this card."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Trousers, Utility; designer number OLIVE GREEN 107, MIL-T-838-A (Smithsonian NMAH catalogue excerpt)", "—"],
        ["Cotton sateen, OG-107 shade (museum excerpt; consistent with marketplace listings)", "—"],
        ["Not this garment: M-65 field trousers, MIL-T-43497, cargo pockets (TM 10-8400-201-23 excerpt)", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Does a pair you own have cargo pockets? If so, it is not this garment. 2) Can you find a stock label inside the waistband, and does it carry a number? 3) Which source on this card is T1, and what does it actually prove?"
      ] }
    ],
    glossary: [
      { t: "Utility uniform", d: "Work clothing for garrison and fatigue duties." },
      { t: "Sateen", d: "Tight weave with a smooth face; wind-resistant, slow to dry." },
      { t: "OG-107", d: "US olive-green shade code." },
      { t: "Cargo pocket", d: "Large thigh pocket with a side pleat." },
      { t: "MIL-T-43497", d: "Specification for the M-65 field trousers, not this garment." }
    ],
    fig2: { src: "img/diagram-og107-utility.svg", cap: "Schematic layout of utility trousers: slash and rear pockets, straight leg, no cargo pocket. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] Smithsonian NMAH, record nmah_444668 — Trousers, Utility, OLIVE GREEN 107, MIL-T-838-A (catalogue excerpt; page not opened)", url: "https://collections.si.edu/search/detail/edanmdm:nmah_444668" },
      { label: "[S2] [T1] TM 10-8400-201-23, Identification and Description, p. 187 — M-65 field trousers, MIL-T-43497 (excerpt; page did not open on retry)", url: "https://www.clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_187.htm" },
      { label: "[S3] [T3] The Real McCoy's — TROUSERS, MEN'S, COTTON SATEEN, OG-107 notes (sateen from the mid-1950s; issue to the mid-1970s; OG-507)", url: "https://therealmccoys.jp/products/mp26005/150-olv" },
      { label: "[Photo] Grailed listing 75525594 — listing photo, @vintage_estate, Grailed, accessed 2026-11-13", url: "https://www.grailed.com/listings/75525594" }
    ],
    claims: [
      { c: "Trousers, Utility; designer number OLIVE GREEN 107, MIL-T-838-A", s: "Smithsonian NMAH nmah_444668", tier: "T1", u: "https://collections.si.edu/search/detail/edanmdm:nmah_444668", st: "partially verified (catalogue excerpt; page not opened)" },
      { c: "Cotton sateen in OG-107", s: "Smithsonian excerpt; The Real McCoy's", tier: "T1", u: "", st: "partially verified" },
      { c: "Sateen version dated from the mid-1950s; issue to the mid-1970s; replaced by OG-507", s: "The Real McCoy's", tier: "T3", u: "https://therealmccoys.jp/products/mp26005/150-olv", st: "unverified" },
      { c: "Slash and rear pockets, no cargo pockets", s: "Marketplace listings and images", tier: "T3", u: "", st: "unverified (per marketplace listings)" },
      { c: "M-65 field trousers are MIL-T-43497 with cargo pockets — not this garment", s: "TM 10-8400-201-23, p. 187", tier: "T1", u: "https://www.clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_187.htm", st: "partially verified (excerpt)" }
    ]
  },

      "m65-trousers": {
    type: "construction",
    ogImage: "img/diagram-m65-trousers.png",
    lede: "M-65 field trousers: the manual records the cloth, not the date.",
    blocks: [
      { h: "1. Summary", p: [
        "The M-65 field trousers are the lower half of the M-65 system: cotton-nylon wind-resistant sateen in OG-107, cargo pockets, and a drawcord at the hem.",
        "Only part of that can be proved from documents. The maintenance manual records the name, the cloth, the stock numbers and the liner; the 1965 date and the pocket details come from commercial sources. Confidence: probable — identity and cloth verified, date and features not."
      ] },
      { h: "2. What this is", p: [
        "The M-65 field trouser: the lower half of the M-65 field jacket, worn over ordinary trousers or with a liner. Terms: cargo pocket (a large patch pocket with a side pleat), drawcord (a cord inside the hem channel used to close the leg), sateen (a tight weave with a smooth face), OG-107 (the US olive-green colour code), liner (a separate warm layer buttoned inside)."
      ] },
      { h: "3. Origin and context", p: [
        "Per marketplace listings, the adoption year is 1965; no document opened for this card states it. The US Army maintenance manual TM 10-8400-201-23 lists TROUSERS, MEN'S COTTON-NYLON WIND RESISTANT SATEEN, OG107 with stock numbers by size, and lists a Liner, Cold Weather Trouser Field, Arctic, M-65.",
        "No official specification number was found for the trousers. MIL-T-43566 was checked and rejected: it covers Oxford nylon cloth and wet-weather parka and trousers, not the M-65 trousers, so the number must not be used here."
      ] },
      { h: "4. How it works", p: [
        "The tight sateen blocks wind without turning stiff; two cargo pockets move load onto the thighs so the contents stay reachable when seated or inside a vehicle; the hem drawcord closes the gap above a boot. The mechanism makes sense from the construction, but no document explains the design intent."
      ] },
      { h: "5. Construction: how it is made", p: [
        "The work order readable from the garment: cut the leg panels, attach the cargo pockets (side pleat, flap, bartacks at four corners), sew the inner and outer leg seams, build the hem drawcord channel, then the waistband and fly. This sequence is inferred from garment construction; no document states it.",
        "The main cloth is cotton-nylon sateen; the liner is a separate component fastened with buttons. The hem channel is usually made by folding the cloth twice and stitching two rows, so the cord does not rub against a raw edge. Cargo pockets are attached before the leg seam is closed, because the inside of the pocket has to be caught by that seam."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Technical difference", "Source status"], rows: [
        ["M-51 field trousers", "1951, US", "predecessor system, heavier cloth", "not verified in documents opened"],
        ["M-65 OG-107", "1965 (per marketplace listings), US", "cotton-nylon sateen OG-107, separate liner", "name and cloth: manual; date: per marketplace listings"],
        ["M-65 woodland / BDU", "1981, US", "woodland pattern, NYCO ripstop cloth", "secondary"],
        ["Modern reproduction", "present", "often no drawcord, lighter cloth", "market observation"]
      ] }, p: [] },
      { h: "Competing accounts", p: [
        "There is no competing date so much as a missing one: the T1 manual describes the garment, the cloth and the stock numbers but gives no year, while T3 listings give 1965. A dated specification or a contract would settle it. Until then the date stays unverified rather than contested against a named alternative."
      ], table: { cols: ["Account", "Source (tier)", "What it claims", "Evidence offered", "Weak point"], rows: [
        ["Marketplace listings", "T3", "Adoption year 1965", "reseller product notes", "no document; resellers repeat one another"],
        ["TM 10-8400-201-23", "T1", "Names the trousers, cloth, stock numbers and liner; gives no date", "manual excerpt", "silent on the adoption date"]
      ] } },
      { h: "7. Telling an original from a reproduction", p: [
        "On an original: sateen with a smooth face and a stiff fall, a label carrying stock numbers 8405-782-2948 to 8405-782-2960 (short/regular sizes), liner buttons, and a drawcord channel at the hem.",
        "On a reproduction: lighter cloth, no drawcord, cargo pockets without a pleat, few or no bartacks. Check the liner buttons inside the waistband as well; reproductions often omit them because they are not visible in wear."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "Myth one: the M-65 trouser cloth is poplin. The manual says sateen; poplin is the jacket cloth. Myth two: 1965 is a date recorded in the specification; only marketplace listings give it. Mistake three: treating a reproduction as issue without checking the stock-number label."
      ] },
      { h: "9. How to read it in wear", p: [
        "Look at the hem: does the leg still fall straight when the drawcord is tightened, and do the cargo pockets stay flat when empty. This garment is read from the lower silhouette, not from the jacket above it."
      ] },
      { h: "10. Modern designer trail", p: [
        "The cargo pocket and the drawcord are the two details streetwear borrows most; the one that usually disappears is the drawcord, because silhouette matters more than function."
      ] },
      { h: "11. Specification", p: [
        "The left column holds only what is recorded in a source; the right column is a reproduction working suggestion, not a period figure."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Cloth: cotton-nylon wind resistant sateen, OG-107 (TM 10-8400-201-23)", "Drawcord length 90–110 cm, cord 4 mm"],
        ["Stock numbers 8405-782-2948 … 8405-782-2960 (short/regular)", "Hem channel width 15 mm"],
        ["Liner: Cold Weather Trouser Field, Arctic, M-65, stock 8405-00-935-0546/0547", "Cargo pocket 18 × 20 cm, pleat 28 mm"],
        ["1965 date: not in any document opened", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Check the hem of a pair you own: is there a channel and a cord, or only a seam? 2) Find the stock-number label and compare it with the manual table — does it match? 3) Why does this card keep the 1965 date when no document gives it? The answer is in the claims table."
      ] }
    ],
    glossary: [
      { t: "Cargo pocket", d: "Large thigh patch pocket with a side pleat that expands." },
      { t: "Drawcord", d: "Cord inside the hem channel, used to close the leg." },
      { t: "Sateen", d: "Tight weave with a smooth face; wind-resistant, slow to dry." },
      { t: "OG-107", d: "US olive-green colour code." },
      { t: "Liner", d: "Separate warm layer buttoned inside." }
    ],
    fig2: { src: "img/diagram-m65-trousers.svg", cap: "Schematic construction diagram: hem drawcord channel and cargo pocket. Original diagram, garmentsucks (CC0); not a period photograph.", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] TM 10-8400-201-23, labeling of men's trousers, p. 185", url: "https://clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_203.htm" },
      { label: "[S2] [T1] TM 10-8400-201-23, cold weather liner label (index excerpt), p. 186", url: "https://clothingandindividualequipment.tpub.com//TM-10-8400-201-23/css/TM-10-8400-201-23_254.htm" },
      { label: "[S3] [T3] Maisonspecial — M-65 field pants, 1965", url: "https://maisonspecial.co.jp/en/collections/special-gift-men/products/26ss-pre-orderfrieren-stripeprime-wide-two-tuck-trousers-4" },
      { label: "[S4] [T3] FUDGE.jp — history of the M-65 field pants", url: "https://fudge.jp/fashion/feature/240166/" },
      { label: "[S5] [T3] WorthPoint — M-65 trousers, 50/50 cotton-nylon", url: "https://www.worthpoint.com/worthopedia/65-cold-weather-field-trousers-small-1946674537" },
      { label: "[Photo] Grailed listing 19347509 — listing photo, @sosadon, Grailed, accessed 2026-11-13", url: "https://www.grailed.com/listings/19347509" }
    ],
    claims: [
      { c: "M-65 trousers: cotton-nylon wind resistant sateen, OG-107", s: "TM 10-8400-201-23, p. 185 (transcription)", u: "https://clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_203.htm", tier: "T1", st: "verified" },
      { c: "Stock numbers 8405-782-2948 … 8405-782-2960", s: "TM 10-8400-201-23", u: "https://clothingandindividualequipment.tpub.com/TM-10-8400-201-23/css/TM-10-8400-201-23_203.htm", tier: "T1", st: "verified" },
      { c: "Liner Cold Weather Trouser Field, Arctic, M-65 (stock 8405-00-935-0546/0547)", s: "TM 10-8400-201-23, p. 186 (index excerpt)", u: "https://clothingandindividualequipment.tpub.com//TM-10-8400-201-23/css/TM-10-8400-201-23_254.htm", tier: "T1", st: "partially verified" },
      { c: "Adoption date 1965", s: "Maisonspecial; FUDGE", u: "https://fudge.jp/fashion/feature/240166/", tier: "T3", st: "unverified (no primary source)" },
      { c: "Two thigh cargo pockets; hem drawcord", s: "Maisonspecial; FUDGE", u: "https://maisonspecial.co.jp/en/collections/special-gift-men/products/26ss-pre-orderfrieren-stripeprime-wide-two-tuck-trousers-4", tier: "T3", st: "unverified (no primary source)" },
      { c: "50/50 cotton-nylon composition", s: "WorthPoint (reseller)", u: "https://www.worthpoint.com/worthopedia/65-cold-weather-field-trousers-small-1946674537", tier: "T3", st: "unverified" },
    ]
  }
,
  "m51-parka": {
    lede: "A Korean War over-garment that ended up on the backs of English Mods.",
    paras: [
      "The M-1951 parka was built as an outer layer, not as a coat. It went over the field jacket and its liner: a cotton shell, a detachable hood, a storm flap over the front closure, and a fishtail hem that could be drawn between the legs for warmth or snapped up out of the way. It was issued during the Korean War and remained in service long after.",
      "The fishtail is the detail that explains the garment. A parka long enough to cover the thighs would flap and catch; splitting the hem into two tails let the wearer tie it down or fold it up. It is a piece of field engineering that reads, at a distance, as a silhouette.",
      "That silhouette is why the parka left the army. Surplus M-51s were cheap in 1960s Britain, and Mods wore them over suits — a use the quartermaster never planned. The same garment that kept a soldier warm in Korea became a way of protecting a new suit on a scooter, and the military origin became part of the style.",
      "For a maker, the lesson is that a garment can change meaning without changing a stitch. The fishtail was designed to be tied; it became a shape people recognised."
    ],
    look: "Detachable hood, storm flap, fishtail hem, cotton shell. Original issue is heavy and stiff; the Mod-era surplus is the same garment, often altered.",
    sources: ["Wikimedia Commons: M-51 fishtail parka photograph (PD, uploader TheModGy1964)", "M-1951 parka references (secondary)"]
  },

    "tanker-jacket": {
    type: "construction",
    ogImage: "img/diagram-tanker-jacket.png",
    lede: "The winter combat jacket: short body, knit seals, zip front — and a specification story that does not agree with itself.",
    blocks: [
      { h: "1. Summary", p: [
        "The Winter Combat Jacket — the tanker jacket — is a short, lightly padded jacket with a zip front, knit collar, cuffs and waistband, issued to US armoured crews in the Second World War.",
        "An object record confirms the designation and materials; the specification number and model dates come from reproducer accounts that contradict each other. Confidence: probable — the object record verifies designation and materials; the specification number and dating rest on conflicting T3 accounts."
      ] },
      { h: "2. What this is", p: [
        "Jacket, Combat, Winter: a hip-length jacket in cotton twill with a wool blanket lining, closed with a zip, with knit collar, cuffs and waistband and slash pockets.",
        "The opening visible in the listing photograph is a plain zip with a knit collar — no lapels and no storm collar. Knit seals are the ribbed cuffs, waistband and collar that close the garment at wrist, waist and neck."
      ] },
      { h: "3. Origin and context", p: [
        "A Smithsonian record catalogues a Jacket, Combat, Winter; Model 1942 with a wool lining, cotton overall material, brass zipper and light olive drab colour, used in 1942.",
        "Reproducer accounts place its introduction in 1941 or 1942 and disagree on the specification: one describes QMC P.Q.D. Spec. No. 26 as the first model from early 1941 and 26A as the more common model from early 1942; another states the jacket was designated 26 March 1942 as P.Q.D. Spec. No. 26. Both are T3, and the conflict is recorded rather than resolved."
      ] },
      { h: "4. How it works", p: [
        "The knit hems seal the jacket at the three places where air enters — neck, wrists and waist — while the short body keeps it clear of a hatch, a seat and a weapon. A wool blanket lining traps air next to the body.",
        "The sealing and mobility argument is inference from the construction and from the garment's issue to armoured crews; no document opened for this card states the design intent."
      ] },
      { h: "5. Construction", p: [
        "Visible in the listing photograph: a central zip, a knit collar, knit cuffs and a ribbed knit waistband, two slash pockets at the waist, and a short body finishing at the hip. A stencilled triangle mark and a number are visible on the chest in the inset.",
        "Per reproducer descriptions: cotton twill shell, wool blanket lining, two-needle seams, back pleats for arm movement, and an early patch-pocket type versus a later slash-pocket type. These details are T3 and marked unverified."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["Winter Combat Jacket, early model", "1941–42, US", "patch pockets; spec number disputed (26 or 26A)", "T3 only; conflicting"],
        ["Winter Combat Jacket, later model", "1942 onward, US", "slash pockets; wool-backed wind flap", "T3 only"],
        ["M-1943 field jacket", "1943, US", "longer field jacket, different system", "site card m43"],
        ["Modern reproduction", "present", "heavier shell, cleaner finish", "market observation"]
      ] }, p: [] },
      { h: "Competing accounts", p: [
        "Both accounts come from reproducers, not from Quartermaster documents. The museum record confirms the garment and its materials but is silent on the specification. A dated specification, a contract label, or a surviving label carrying a P.Q.D. number would settle it. The evidence currently favours neither account; the number and date stay unresolved."
      ], table: { cols: ["Account", "Source (tier)", "What it claims", "Evidence offered", "Weak point"], rows: [
        ["AtTheFront", "T3", "Spec. No. 26 is the first model, early 1941; the more common model is 26A, early 1942", "reproducer product notes", "no document cited; commerce context"],
        ["Bronson", "T3", "Designated 26 March 1942 as P.Q.D. Spec. No. 26", "reproducer product notes", "no document cited; conflicts with the account above"],
        ["Smithsonian NMAH", "T1", "Jacket, Combat, Winter; Model 1942, cotton with wool lining", "object metadata", "silent on the specification number and date"]
      ] } },
      { h: "7. Telling an original from a reproduction", p: [
        "Look at the knit parts first: original knit is dense and often felted, and the waistband is a wide rib rather than a narrow elastic band. Then the zip and the label: period hardware and a Quartermaster label.",
        "Reproductions tend to be heavier and cleaner; some replace the knit waistband with elastic or drop the back pleats."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The common mistake is repeating a specification number as fact: the reproducer accounts disagree, so the number stays unresolved on this card.",
        "A second mistake is treating the tanker jacket as the M-1943 field jacket: they are different garments with different bodies and closures."
      ] },
      { h: "9. How to read it in wear", p: [
        "The jacket reads through the knit seals and the short body: it stops at the hip and grips at the waist, so it sits above a belt and under a coat. Worn with high-waisted trousers it shortens the torso; worn over a longer shirt it reads as a bomber."
      ] },
      { h: "10. Modern designer trail", p: [
        "The tanker jacket's shape — short body, knit collar and cuffs, zip front — has been a recurring reference in menswear. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records what a source states; the right column is empty because no reproduction figures are proposed."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Jacket, Combat, Winter; Model 1942; cotton, wool lining, brass zipper, light olive drab (Smithsonian NMAH 1992.3091.05; metadata excerpt)", "—"],
        ["Knit collar, cuffs and waistband; zip front; slash pockets; short body (visible in the listing photograph)", "—"],
        ["Specification number/date: 26 (1941) vs 26A (1942) vs 26 designated March 1942 (T3 reproducer accounts; conflicting)", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Is the waistband on a jacket you own knit or elastic? 2) Does the zip have a wind flap behind it? 3) Which of the two specification accounts would you need a primary document to settle?"
      ] }
    ],
    glossary: [
      { t: "Tanker jacket", d: "Collector name for the Winter Combat Jacket." },
      { t: "Knit seals", d: "Ribbed collar, cuffs and waistband." },
      { t: "Wool blanket lining", d: "Heavy wool lining used instead of a thin lining." },
      { t: "Specification number", d: "Quartermaster document number for a garment." }
    ],
    fig2: { src: "img/diagram-tanker-jacket.svg", cap: "Schematic: short body, knit collar/cuffs/waist, zip front, slash pockets, wool lining. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] Smithsonian NMAH 1992.3091.05 — Jacket, Combat, Winter; Model 1942 (metadata excerpt; page not opened)", url: "https://americanhistory.si.edu/collections/object/nmah_686618" },
      { label: "[S2] [T1] Smithsonian NMAH AF.74757M — Jacket, Tankers; Jacket, Combat, associated date 1941–1945 (metadata excerpt)", url: "https://americanhistory.si.edu/collections/object/nmah_447097" },
      { label: "[S3] [T3] AtTheFront — Winter Combat Jacket notes (Spec. 26 first model 1941; 26A more common 1942)", url: "https://www.atthefront.com/product-p/usujtank.htm" },
      { label: "[S4] [T3] Bronson — Winter Combat Jacket notes (designated 26 March 1942 as P.Q.D. Spec. No. 26)", url: "https://bronsonshop.com/products/bronson-replica-world-war-ii-mens-military-taxi-driver-model-tank-winter-combat-jacket" },
      { label: "[Photo] Listing photo, IMA-USA, ima-usa.com, https://www.ima-usa.com/products/original-u-s-wwii-winter-combat-tanker-jacket-in-excellent-condition-with-tactical-markings, accessed 2026-11-13", url: "https://www.ima-usa.com/products/original-u-s-wwii-winter-combat-tanker-jacket-in-excellent-condition-with-tactical-markings" }
    ],
    claims: [
      { c: "Jacket, Combat, Winter; Model 1942; cotton, wool lining, brass zipper, light olive drab", s: "Smithsonian NMAH 1992.3091.05", tier: "T1", u: "https://americanhistory.si.edu/collections/object/nmah_686618", st: "partially verified (metadata excerpt)" },
      { c: "Object associated with 1941–1945", s: "Smithsonian NMAH AF.74757M", tier: "T1", u: "https://americanhistory.si.edu/collections/object/nmah_447097", st: "partially verified (metadata excerpt)" },
      { c: "Knit collar, cuffs and waistband; zip front; slash pockets; short body", s: "Listing photograph (IMA-USA)", tier: "T3", u: "https://www.ima-usa.com/products/original-u-s-wwii-winter-combat-tanker-jacket-in-excellent-condition-with-tactical-markings", st: "visible in photo" },
      { c: "Spec. No. 26 (1941) / 26A (1942)", s: "AtTheFront", tier: "T3", u: "https://www.atthefront.com/product-p/usujtank.htm", st: "contested" },
      { c: "Designated 26 March 1942 as P.Q.D. Spec. No. 26", s: "Bronson", tier: "T3", u: "https://bronsonshop.com/products/bronson-replica-world-war-ii-mens-military-taxi-driver-model-tank-winter-combat-jacket", st: "contested" },
      { c: "Early patch-pocket type and later slash-pocket type; back pleats; wool-backed wind flap", s: "Reproducer descriptions", tier: "T3", u: "", st: "unverified" }
    ]
  },

  "hbt-trousers": {
    lede: "The lower half of the utility uniform, in a cloth chosen for abrasion and air.",
    paras: [
      "Herringbone twill trousers were the bottom of the American utility uniform: a button fly, two front pockets, two back pockets and a loose straight leg. The cloth was a cotton twill whose diagonal reverses at intervals, which makes it more open than sateen and more resistant to abrasion than a plain weave.",
      "That combination is why HBT was issued for work and for the Pacific. It ventilated, it softened with washing, and it took a flat-felled seam well. The trousers were part of the P-41 and P-42 uniforms and were worn long after the jacket was replaced.",
      "This particular pair belonged to Madeleine Collomb and was cut for female personnel. That matters for the archive: the utility uniform was issued to women during the war, and treating military clothing as automatically menswear is a mistake the market keeps making.",
      "For a collector, HBT trousers are identified by the weave, the button fly and the stamp. For a maker, they are the cheapest way to study a felled seam on a garment that was made to be worn out."
    ],
    look: "Herringbone zigzag visible on the reverse, button fly, two front and two back pockets. The cloth should soften, not shine.",
    sources: ["Paris Musées object record 2012.0.4: American HBT fatigue trousers for female personnel (CC0)", "US HBT utility uniform references (secondary)"]
  },

    "jungle-trousers": {
    type: "details",
    lede: "The trousers half of the tropical uniform: cargo pockets, a drawcord hem, and a zip fly.",
    blocks: [
      { h: "1. Summary", p: [
        "The tropical combat trousers are light cotton trousers with large expandable cargo pockets and drawstring adjusters at the cuffs.",
        "The features below come from an institutional catalogue description of Type III examples; the first pattern is not described in the sources opened. Confidence: probable — a single institutional source, and it describes the later type."
      ] },
      { h: "2. What this is", p: [
        "Trousers, Combat, Tropical: the lower half of the Tropical Combat Uniform, cut in thin cotton poplin and closed with a zip fly and a button at the waist.",
        "Cargo pocket: a large patch pocket with a pleated side that expands. Drawcord: a cord inside the hem channel. Poplin: a plain weave with a fine crosswise rib."
      ] },
      { h: "3. Origin and context", p: [
        "The uniform was introduced in June 1963 after development and testing by the US Army Quartermaster Research and Engineering Command, and was based closely on the M-1942 Parachutist Uniform. The trousers share that ancestry.",
        "Two Imperial War Museums records describe surviving Type III trousers. The Class 1 record (olive green) describes thin cotton-poplin trousers; the Class 2 record (ERDL camouflage) describes the same construction in ERDL poplin."
      ] },
      { h: "4. How it works", p: [
        "Cargo pockets put load on the thigh instead of the hip, so the contents stay reachable when seated or moving through vegetation. The drawcord closes the hem against insects and weather, and the waist adjuster straps let the trousers be worn without a belt.",
        "That reasoning is inference from the construction; no document opened for this card explains the design intent."
      ] },
      { h: "5. Construction", p: [
        "The catalogue description lists: zip fly with button fastening at the waist; adjuster straps to either side of the waist with sliding metal fasteners; seven belt loops; hip pockets; rear slash pockets with concealed button flaps; large expandable cargo pockets with concealed two-button flaps; drawstring adjusters through the cuff hems.",
        "The ERDL record adds double-pleated cargo pockets, an additional smaller pocket inside the left cargo pocket, and drawstring adjusters at the cuffs. The work order is inferred from garment construction; no document states the sequence."
      ] },
      { h: "6. Variants across eras", table: { cols: ["Variant", "Year/country", "Difference", "Source status"], rows: [
        ["TCU trousers, Types I–II (OG-107)", "1963–65, US", "poplin; early pocket and flap details", "not described in the records opened"],
        ["TCU trousers, Type III (OG-107)", "1966–67, US", "poplin; concealed-flap cargo pockets; waist adjusters; hem drawcords", "IWM 30150059 (catalogue description)"],
        ["TCU trousers, Type III (ERDL)", "1966–67, US", "ERDL poplin; double-pleated cargo pockets; inner pocket; hem drawcords", "IWM 30096162 (catalogue description)"],
        ["Modern reproduction", "present", "heavier cloth, simplified pockets", "market observation"]
      ] }, p: [] },
      { h: "7. Telling an original from a reproduction", p: [
        "On the Type III examples described by the IWM: a zip fly with a waist button, sliding metal waist adjusters, seven belt loops, concealed button flaps on the rear pockets, and cargo pockets that expand with a pleated side. The hem carries a drawcord channel.",
        "A reproduction often simplifies the pocket flaps to a single button, drops the waist adjusters, or replaces the drawcord with a plain hem."
      ] },
      { h: "8. Common mistakes and myths", p: [
        "The first mistake is assuming the jungle trousers are the OG-107 utility trousers: the utility pattern has slash and rear pockets and no cargo pockets.",
        "The second is treating the popularity of the cargo pocket as evidence that every pattern had one; the records here describe Type III only."
      ] },
      { h: "9. How to read it in wear", p: [
        "The trousers read from the pocket line and the hem: cargo pockets sit on the thigh, and the drawcord changes how the leg falls over a boot. Tighten the hem and the silhouette becomes a blouse; leave it open and the leg falls straight."
      ] },
      { h: "10. Modern designer trail", p: [
        "The cargo pocket and the drawcord hem are the two details designers borrow most from this garment. No direct-influence claim is made here."
      ] },
      { h: "11. Specification", p: [
        "The left column records what the catalogue states; no reproduction figures are proposed."
      ], table: { cols: ["Recorded in sources", "Reproduction suggestion"], rows: [
        ["Thin cotton-poplin trousers; zip fly with waist button (IWM 30150059, Type III Class 1)", "—"],
        ["Waist adjuster straps with sliding metal fasteners; seven belt loops; hip pockets; rear slash pockets with concealed button flaps (IWM 30150059)", "—"],
        ["Large expandable cargo pockets with concealed two-button flaps; drawstring cuff adjusters (IWM 30150059/30096162)", "—"],
        ["ERDL version: double-pleated cargo pockets; inner pocket in the left cargo pocket (IWM 30096162)", "—"]
      ] } },
      { h: "12. Questions and exercises", p: [
        "1) Does the cargo pocket on a pair you own have a pleated side? 2) Count the buttonholes on a cargo flap: one or two? 3) Is the hem a drawcord channel or a plain hem?"
      ] }
    ],
    glossary: [
      { t: "Cargo pocket", d: "Large thigh pocket with a pleated side that expands." },
      { t: "Drawcord", d: "Cord inside the hem channel, used to close the leg." },
      { t: "Poplin", d: "Plain weave with a fine crosswise rib." },
      { t: "Concealed flap", d: "Flap whose buttons are hidden from the outside." }
    ],
    fig2: { src: "img/diagram-jungle-trousers.svg", cap: "Schematic of the tropical trousers: cargo pockets with two-button flaps, waist adjusters, zip fly, drawcord hem. Original diagram, garmentsucks (CC0).", credit: "Original diagram, garmentsucks" },
    sources: [
      { label: "[S1] [T1] IWM 30150059 — Trousers, Combat, Tropical (Type III, Class 1), physical description (index excerpt)", url: "https://www.iwm.org.uk/collections/item/object/30150059" },
      { label: "[S2] [T1] IWM 30096162 — Trousers, Combat, Tropical (Type III, Class 2 ERDL), physical description (index excerpt)", url: "https://www.iwm.org.uk/collections/item/object/30096162" },
      { label: "[Photo] NARA period photograph — public domain; jacket and trousers in wear, not a studio object", url: "" }
    ],
    claims: [
      { c: "Thin cotton-poplin trousers; zip fly with waist button", s: "IWM 30150059", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30150059", st: "verified (catalogue description)" },
      { c: "Waist adjuster straps, seven belt loops, hip pockets, rear slash pockets with concealed flaps", s: "IWM 30150059", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30150059", st: "verified (catalogue description)" },
      { c: "Large expandable cargo pockets with concealed two-button flaps; drawstring cuff adjusters", s: "IWM 30150059; IWM 30096162", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30096162", st: "verified (catalogue description)" },
      { c: "ERDL version: double-pleated cargo pockets; inner pocket; cuff drawstrings", s: "IWM 30096162", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30096162", st: "verified (catalogue description)" },
      { c: "Uniform introduced June 1963 by the QM Research and Engineering Command", s: "IWM catalogue label text", tier: "T1", u: "https://www.iwm.org.uk/collections/item/object/30150059", st: "verified (catalogue statement)" }
    ]
  }
,

  "rei-kawakubo": {
    lede: "Comme des Garçons was founded in 1969, but the shock arrived in Paris in 1981.",
    paras: [
      "Rei Kawakubo opened her first Tokyo shop in 1969 and showed in Paris for the first time in 1981, in the same season as Yohji Yamamoto. The clothes were black, oversized and visibly unfinished. In a city built on couture, that read first as an insult, then as a new standard.",
      "The method is not decoration. Kawakubo works on the garment's structure as a question about the body: asymmetry, padding, holes, seams turned outside, cloth that does not follow the figure. The 1997 collection usually called Body Meets Dress, Dress Meets Body — dresses with padded lumps — is the clearest single statement of the idea.",
      "The house complicates the word 'designer'. Comme des Garçons became a company with many lines, some commercial and some experimental, and the mainline is where the argument happens. For a learner, that distinction is the useful one: the licensed line and the runway line are making different claims, and only one of them is Kawakubo's.",
      "It matters to this archive because the military reference in Comme des Garçons Homme Plus is treated as a set of symbols to be taken apart — authority, conformity, camouflage, the helmet silhouette — not as a heritage to be reproduced. That is the opposite of the reproduction market, and it is why the two should not be read the same way.",
      "Study the mainline first. The logo on a T-shirt is a licence; the collection is an argument."
    ],
    look: "Asymmetry, raw edges, inside-out construction, padding, black. Distinguish the mainline from Homme Plus, SHIRT and Play lines before comparing pieces.",
    sources: ["Comme des Garçons history (secondary)", { label: "CDG Homme Plus SS06 tartan jacket — listing photo © @whoisvegas", url: "https://www.grailed.com/listings/80004972" }]
  }
,
  "raf-simons": {
    lede: "Raf Simons made menswear out of the codes of youth — and then cut them so they became something else.",
    paras: [
      "Raf Simons studied industrial design in Antwerp, not fashion, and started his label in 1995. The first collections were shown on young men in rooms that looked like schools or clubs, and the clothes took their vocabulary from the tribes around them: school uniforms, bomber jackets, parkas, narrow trousers.",
      "The method is translation, not costume. A MA-1 or a parka is not reproduced; it is lengthened, narrowed, layered and combined with a graphic from a band or a slogan from a record sleeve. The reference survives, but the proportion does. That is why a Raf piece reads as both familiar and wrong.",
      "The archive value follows from the production. Early collections were made in small numbers and sold through a handful of shops; dozens of pieces survive, not thousands. That scarcity, plus the clarity of the reference, is why the market treats late-1990s Raf as canonical.",
      "He later interpreted other houses — Jil Sander, Dior, Calvin Klein, and Prada from 2020 — which is a useful lesson in itself: the same method (take a code, cut it apart, keep the emotion) works at couture scale too.",
      "For a learner, Raf is the case where the reference is the start of the sentence, not the sentence."
    ],
    look: "Wrong proportion on a familiar garment, band or slogan graphics, narrow trousers, oversized parkas. Early pieces are small-run; check the label era before trusting a description.",
    sources: ["Raf Simons archive references (secondary)", { label: "Raf Simons Stakker Humanoid bomber — listing photo © @davatros", url: "https://www.grailed.com/listings/94479129" }]
  },

  "helmut-lang": {
    lede: "Helmut Lang treated clothing as equipment — and made minimalism feel technical.",
    paras: [
      "Helmut Lang founded his label in Vienna in 1986 and moved his operation to New York in the late 1990s. His clothes stripped tailoring down and then added the vocabulary of kit: technical nylon, straps, sealed seams, packable constructions, black and grey.",
      "The 1999 nylon jacket that folds into its own pocket and can be carried on the back is the perfect example. It is military utility in the way equipment is utility — not a copied field jacket, but the logic of a field jacket applied to a fashion garment.",
      "Lang was also early to the network. He showed and sold collections online in the late 1990s, before most houses had a working website, and he moved his show date away from the official calendar. Both decisions treated the industry's conventions as things that could be redesigned, like a seam.",
      "Prada acquired the label in 1999 and Lang left in 2005. What survives is the archive — garments that still look like the future because their logic was function, not trend.",
      "For a maker, Lang is the lesson that utility does not need to look military. It needs to behave like equipment."
    ],
    look: "Technical nylon, straps, packable construction, sealed seams, narrow palette. A garment that can be folded into itself is the tell.",
    sources: ["Helmut Lang archive references (secondary)", { label: "Helmut Lang 1999SS packable nylon jacket — listing photo © @SEVENSTARCLOTHING", url: "https://www.grailed.com/listings/98203993" }]
  },

  "undercover": {
    lede: "Jun Takahashi's Undercover took punk and made it engineered.",
    paras: [
      "Undercover began in Tokyo in 1990, in the Ura-Harajuku scene, with Jun Takahashi and the slogan 'We make noise not clothes'. The early garments were punk in attitude, but the construction was studied: hybrid pieces, exposed seams, padding, graphics over tailoring.",
      "The hybrid is the method. A shirt bonded to a cardigan, a fleece with detachable parts borrowed from children's toys, a jacket that is also a cape. The deconstruction only works because the base garment is recognisable — you have to know what a shirt is to feel it being broken.",
      "The label showed in Paris from the early 2000s and has been backed by Prada Group since 2009. The mainline and Undercoverism make different arguments: one is a collection, the other a wardrobe, and collectors treat them differently.",
      "Late-1990s pieces such as the 1998 'Small Parts' collection are now archive objects precisely because they were small runs of an idea that has since been absorbed into the mainstream.",
      "For a learner, Undercover is the case where the reference is punk but the technique is tailoring."
    ],
    look: "Hybrid garments, detachable parts, exposed construction, graphics on tailored bases. Check which line the piece belongs to before comparing.",
    sources: ["Undercover archive references (secondary)", { label: "Undercover AW1998 Small Parts fleece — listing photo © @AlexMaxamenko", url: "https://www.grailed.com/listings/60077006" }]
  },

  "issey-miyake": {
    lede: "Issey Miyake started with the cloth, not the body.",
    paras: [
      "Issey Miyake was born in Hiroshima in 1938, studied in Tokyo, and went to Paris in the 1960s, where he worked with Givenchy before founding Miyake Design Studio in 1970. From the beginning his subject was material: how a cloth behaves, folds, pleats, packs and moves.",
      "The pleats are the famous result. Pleats Please, from 1993, makes permanent pleating a wearable material rather than a couture finish: garments that stretch, pack flat and survive a suitcase. The technique is the design.",
      "A-POC, from 1999, went further: a computer-controlled process that turns a single tube of fabric into clothing, with the wearer cutting the garment out. The factory became part of the design, and the garment became a process.",
      "Miyake died in 2022, but the studio's logic remains: research first, garment second. In this archive he is the clearest case of a designer for whom fabric is the idea rather than the supplier of it.",
      "For a maker, the lesson is uncomfortable and useful: before drawing a jacket, decide what the cloth does."
    ],
    look: "Permanent pleats, packable garments, single-piece constructions. The cloth should do something no other cloth does.",
    sources: ["Issey Miyake archive references (secondary)", { label: "Issey Miyake 1990s denim jacket — listing photo © @DMC99", url: "https://www.grailed.com/listings/98589544" }]
  }

};