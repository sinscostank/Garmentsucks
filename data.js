/* garmentsucks — feed data
   Setiap kartu punya tingkat keyakinan (conf):
     established — bukti primer/institusional + korroborasi
     probable    — kuat tapi satu sumber atau inferensial
     unresolved  — sumber bertentangan / legenda / belum ada bukti
   Aturan: klaim tanpa sumber tidak boleh naik kelas demi narasi. */

window.FEED = [
  {
    id: "slant-pocket", cat: "details", era: "1942", conf: "probable",
    title: "Why the chest pocket is slanted",
    dek: "The angle looks like style. The records describe biomechanics under a harness.",
    body: "Dealer and museum records of the M-1942 jump jacket describe the breast pockets as angled inward so the opposite hand can reach them while the trooper wears field equipment. The jungle jacket kept the slant on every pattern. The angle on surviving garments varies; the 15° figure is a working specification, not a documented constant.",
    src: "M-1942 records (museum/dealer) · jungle jacket observations"
  },
  {
    id: "flap-pocket", cat: "closure", era: "1964", conf: "probable",
    title: "The flap was added to stop snagging",
    dek: "First-pattern jungle jackets had exposed buttons. The fix is dated — by one authority.",
    body: "On the first pattern the pocket buttons sat proud of the cloth, and field complaints described them catching on undergrowth and catching light. Shelby Stanton's chronology places the change to covered flaps on 26 August 1964. That date rests on a single secondary authority until a spec revision is found.",
    src: "Shelby Stanton chronology (secondary)"
  },
  {
    id: "bellows", cat: "details", era: "1942", conf: "probable",
    title: "The pleat that absorbed a parachute",
    dek: "An expanding pocket survives loading. Airborne accounts say the stress was real.",
    body: "A bellows pocket gives capacity without tearing, because the pleat lets the front wall move away. Repro and collector accounts describe M-1942 pockets blowing out on parachute-opening shock, and riggers hand-reinforcing them before D-Day. The engineering logic is sound; the specific anecdote is not yet backed by a primary document.",
    src: "M-1942 construction · airborne rigger accounts (anecdotal)"
  },
  {
    id: "drain-eyelet", cat: "construction", era: "1960s", conf: "unresolved",
    title: "A pocket with a hole in the bottom",
    dek: "The function is clear. Which patterns carried it is not.",
    body: "A bellows pocket in a monsoon holds water, and the eyelet lets it out. The idea is older than the jacket — WWI gas-mask bags carried brass drain grommets. But which jungle-jacket patterns had the holes is disputed: collectors record them on the first and fourth patterns, say the third omitted them, and disagree about the second. Publish the function, not the pattern history, until an object-level check settles it.",
    src: "Pattern records — sources conflict"
  },
  {
    id: "buttons", cat: "closure", era: "1960s", conf: "probable",
    title: "Buttons, not zippers — and the legend",
    dek: "The famous WWI zipper story is folklore. The design logic is real.",
    body: "The tale says zippers jammed on mud and blood and were abandoned after WWI. The zipper was not mainstream until the 1930s, so mass zippered WWI uniforms are unlikely; treat the story as legend. What the records do show: the tropical jacket kept a button front and, from the second pattern, hid the buttons behind flaps — buttons don't corrode in monsoon humidity and can be re-sewn in the field.",
    src: "Zipper history (Sundbäck 1913) · tropical jacket patterns"
  },
  {
    id: "gas-flap", cat: "closure", era: "1918", conf: "probable",
    title: "The ghost of Ypres",
    dek: "An inner strip behind the buttons, meant to keep gas out.",
    body: "The gas flap is a second internal door behind the placket, sizing the gaps between buttons. It traces to WWI chemical warfare — a 1918 British officer's jacket carries one at the collar. Collectors record an inner gas flap on early Vietnam tropical jackets and its removal on the third pattern. Institutional confirmation of the exact pattern is still open.",
    src: "1918 Service Dress · collector documentation"
  },
  {
    id: "epaulette", cat: "details", era: "1763", conf: "probable",
    title: "The epaulette began as a rifle strap",
    dek: "Before rank, it stopped the sling sliding off the shoulder.",
    body: "French army epaulettes appear around 1763 as officer marking, but their origin is a shoulder belt that held a rifle sling or ammunition belt in place. Over a century the functional ribbon widened and gilded into a badge of rank. The general lineage is well covered; the exact date is conventional rather than precise.",
    src: "Epaulette origin · military dress history"
  },
  {
    id: "cuff-tab", cat: "closure", era: "1943", conf: "probable",
    title: "The wrist is a valve",
    dek: "Sealed against rain and brush; opened for air.",
    body: "Buttoned cuffs keep wind, rain, insects and thorns out. Opened, they ventilate and let the sleeve roll on a gusset. Military field jackets carried the buttoned cuff from the M-1943 through the M-51; the M-65 moved to Velcro. The jungle jacket used an adjustable button closure at the cuff.",
    src: "M-1943 / M-51 / M-65 lineage · AWM records"
  },
  {
    id: "drawcord", cat: "closure", era: "1943", conf: "probable",
    title: "The invisible belt",
    dek: "A cord inside the waist: warmth, seal, fit over webbing.",
    body: "An internal drawcord closes the gap where heat escapes and wind enters, and keeps a loaded jacket from catching on gear. The M-1943 had one; the M-1951 added a second at the hem and holes to adjust from outside; the M-65 kept it inside. The sequence is consistently described across references but rests on secondary literature.",
    src: "Field jacket lineage references (secondary)"
  },
  {
    id: "safari-belt", cat: "details", era: "1902", conf: "unresolved",
    title: "The safari belt is a hinge between function and fiction",
    dek: "It holds loaded pockets up — and it may be theatre.",
    body: "The belted bush jacket descends from khaki-drill uniforms of the Boer War, and the belt transfers loaded-pocket weight to the hips. But the real ammunition weight rode on a separate cartridge belt, and some outfitters call the self-belt pure fashion: 'no one uses the belt in the bush.' The practical-versus-decorative question is genuinely disputed.",
    src: "Safari jacket history · F.M. Allen (disputed)"
  },
  {
    id: "poplin", cat: "fabric", era: "1963", conf: "established",
    title: "Poplin: the cloth that dries",
    dek: "Plain weave, light, and it does not cling when wet.",
    body: "The tropical combat jacket was specified as 'Coat, Man's, Cotton Wind Resistant Poplin, OG-107'. Poplin's open plain weave and fine twisted yarns move air and release moisture, and the crisp hand means it does not stick to the body when soaked — the property that matters in humid heat. Commercial and military poplin runs roughly 150–170 gsm.",
    src: "Garment nomenclature · MIL-C-507 poplin"
  },
  {
    id: "ripstop", cat: "fabric", era: "1967", conf: "probable",
    title: "Ripstop: a grid that stops a tear",
    dek: "Durability without density — the grid is the whole trick.",
    body: "A heavier reinforcing yarn is woven at regular intervals, so a snag becomes a pinhole instead of a torn panel, and the base cloth stays as open as plain cotton. Dealer and repro accounts place the jungle jacket's switch from poplin to ripstop around 1967; the exact month and specification are still open.",
    src: "TCU pattern accounts · ripstop textile references"
  },
  {
    id: "sateen", cat: "fabric", era: "1943", conf: "established",
    title: "Sateen: the wrong cloth for the jungle",
    dek: "A wind fabric, not a heat fabric. Dense, warm, slow to dry.",
    body: "The M-1943 field jacket used a close, wind-resistant cotton sateen in a darkened olive — excellent for a European winter fought in layers, a liability in the tropics. The tight face blocks air movement and holds water. This is the clearest example of a correct answer to the wrong climate: the Army kept issuing light HBT in the jungle instead.",
    src: "M-1943 field jacket records · museum holdings"
  },
  {
    id: "ventile", cat: "fabric", era: "1943", conf: "established",
    title: "Ventile: waterproof without a membrane",
    dek: "Extra-long-staple cotton, woven so tightly that wet fibres swell shut.",
    body: "Developed at the Shirley Institute in 1943 for RAF airmen, Ventile uses low-twist ELS cotton in a high-density weave. Dry, it breathes; wet, the fibres swell and close the pores. No coating, no plastic membrane — a different answer to wind and water without a sweatbox.",
    src: "Ventile history · Shirley Institute"
  },
  {
    id: "hbt", cat: "fabric", era: "1941", conf: "established",
    title: "Herringbone twill: the first modern fatigue cloth",
    dek: "Open twill, abrasion-resistant, mass-produced.",
    body: "HBT's broken twill is more open than plain weave or sateen, so it ventilates while the diagonal ribs resist abrasion. It became the US utility uniform cloth of WWII — P-41, P-42, P-44 — and its cut informed the later jungle jacket.",
    src: "US WWII HBT utilities · Navy spec 55-J-9"
  },
  {
    id: "khaki", cat: "history", era: "1848", conf: "established",
    title: "Khaki was born in the dust",
    dek: "1848, Peshawar: the first uniform colour chosen to disappear.",
    body: "Lieutenant Harry Lumsden dressed the Corps of Guides in loose, dust-coloured cloth on the North-West Frontier. Khaki means 'dust'. It was the first time a European army deliberately chose a uniform colour to blend into terrain rather than be seen.",
    src: "Corps of Guides · National Army Museum"
  },
  {
    id: "og107", cat: "history", era: "1952", conf: "probable",
    title: "OG-107 is a colour, not a cloth",
    dek: "That confusion is why many reproductions fail.",
    body: "Olive Green 107 is a shade code, not a fabric. The utility uniform in OG-107 was cotton sateen; the tropical combat jacket in the same shade was poplin and later ripstop. Same colour, opposite behaviour in humidity. The 1952 standardisation date is consistently cited but should be checked against the original colour standard.",
    src: "OG-107 references · ERDL standardisation (secondary)"
  },
  {
    id: "erdl", cat: "history", era: "1948", conf: "probable",
    title: "ERDL waited nineteen years",
    dek: "Drawn in 1948, issued in 1967.",
    body: "The four-colour leaf-and-twig pattern was developed at ERDL in 1948 and shelved. Solid OG-107 persisted until Vietnam, where a single dark green on wet cloth reads as one dark mass. Accounts place ERDL issue to recon and special operations from 1967, USMC adoption in 1968, and its evolution into M81 woodland in 1981.",
    src: "ERDL pattern history (secondary)"
  },
  {
    id: "m42", cat: "history", era: "1942", conf: "probable",
    title: "The jungle jacket's accidental ancestor",
    dek: "It was built for men who jumped out of aircraft.",
    body: "The M-1942 jump jacket answered one question: what does a man need landing behind enemy lines and fighting alone? Four cargo pockets, a pleated action back, gussets, a waist belt, split cuffs — and thin poplin, because weight kills a jumper. Museum and dealer records agree on the features; the wider lineage is inference.",
    src: "M-1942 records · Musée de l'Armée"
  },
  {
    id: "m43", cat: "history", era: "1943", conf: "probable",
    title: "The right answer to the wrong question",
    dek: "M-1943 was a layering system for a European winter.",
    body: "Cut loose to stack wool and a liner, with a wind-resistant sateen shell, the M-1943 was a system, not a coat. Its virtues were all cold-weather virtues, which is why it could not simply be reissued in the jungle. The Army kept issuing light HBT there instead.",
    src: "Quartermaster Corps history · M-1943 records"
  },
  {
    id: "tcu1963", cat: "history", era: "1963", conf: "probable",
    title: "A uniform built by engineers, not designers",
    dek: "June 1963, Quartermaster Research & Engineering Command — per one institutional record.",
    body: "The IWM's catalogue entry dates the Tropical Combat Uniform to June 1963 and describes it as 'based closely on the design of the M-1942 Parachutist Uniform'. Four expandable pockets with concealed-button flaps, convertible collar, button cuff tabs. That is one institutional source; a Quartermaster or DA document would make it established.",
    src: "IWM object records (institutional, single source)"
  },
  {
    id: "bdu", cat: "history", era: "1981", conf: "established",
    title: "The late answer: durability over comfort",
    dek: "NYCO ripstop, 1981 — the tropical jacket's compromise era.",
    body: "The BDU traded pure cotton comfort for a nylon-cotton blend that dries faster and resists abrasion. It is the end point of the story that starts with khaki: each generation optimises for a different threat — heat, wear, or cost.",
    src: "BDU specification · NYCO ripstop"
  },
  {
    id: "yohji", cat: "brands", era: "1990s", conf: "probable",
    title: "Yohji Yamamoto: drape as deconstruction",
    dek: "Gabardine, raw-cut edges, volume that falls away from the body.",
    body: "Yohji's military references are built on high-density cotton and wool gabardine, cut oversized so the cloth falls away from the shoulder, with raw-cut edges used as ornament. Y's Resort 2023 turned cotton-twill cut edges into decoration and replaced structured canvas with soft linen.",
    src: "Yohji Yamamoto archive · Y's Resort 2023"
  },
  {
    id: "junya", cat: "brands", era: "2000s", conf: "probable",
    title: "Junya Watanabe: upgrade the archetype",
    dek: "Hybrids, reversibles, and technical membranes over military cloth.",
    body: "Junya treats utility as raw material: a reversible MA-1/denim hybrid, a parka/cape silhouette, and an M-65 upgraded with GORE-TEX and Dyneema. FIT's museum describes his codes as exposed raw seams, cut-out darts, and garment insides turned into details.",
    src: "FIT Museum · Junya Watanabe archive"
  },
  {
    id: "cdg", cat: "brands", era: "1980s", conf: "probable",
    title: "Comme des Garçons Homme Plus: anti-tailoring",
    dek: "Military sleeves and pockets cut apart, then sewn onto tailoring.",
    body: "Rei Kawakubo's FW25 notes were to break down army symbols — uniform shapes, colour, camouflage, helmets — with field jackets and officer coats deconstructed and recombined. The house also works in light 'tropical-weight' wool for hot climates.",
    src: "CDG Homme Plus FW25 · retailer archive"
  },
  {
    id: "mihara", cat: "brands", era: "2010s", conf: "probable",
    title: "Mihara Yasuhiro: docking and sun-fade",
    dek: "Two garments stitched together, then faded like a field jacket.",
    body: "Mihara's signature is assembly: denim and MA-1 stitched front-to-back, details 'docked' onto a shell, garments stripped of their original purpose. His sun-faded cotton military jacket uses finish — not print — to signal age.",
    src: "Mihara Yasuhiro SS26 / AW26"
  },
  {
    id: "hysteric", cat: "brands", era: "1990s", conf: "probable",
    title: "Hysteric Glamour: repro, then lighten it",
    dek: "Reproduce the spec cloth, then drop the weight for daily wear.",
    body: "Hysteric reproduces military-spec materials — an air-force nylon twill MA-1, a third-pattern fatigue shirt — then rebalances them. Its HG1963 fatigue shirt keeps the four flap pockets but uses an 80/20 cotton-weather cloth so it layers like a shirt.",
    src: "Hysteric Glamour line notes"
  },
  {
    id: "redkap", cat: "brands", era: "1920s", conf: "established",
    title: "Red Kap: the baseline everyone dismantles",
    dek: "Spec-sheet workwear — the control group.",
    body: "Red Kap builds to spec: 7.5 oz poly-cotton twill, 5 oz poplin, 4.25 oz ripstop, bartacked pockets, action-back pleats. It produced combat fatigues and field jackets during WWII. It is useful precisely because it is un-deconstructed: the fashion labels keep its pocket architecture and remove its stiffness.",
    src: "Red Kap product specifications"
  },
  {
    id: "flat-felled", cat: "howto", era: "—", conf: "established",
    title: "How a flat-felled seam works",
    dek: "No raw edge, twice the cloth at the stress line.",
    body: "Sew a plain seam, trim one allowance, wrap the wider one over it, and stitch again so two rows show on the face. The fold encloses both raw edges — nothing frays — and doubles the fabric where stress concentrates. It is the load-bearing seam of the military vocabulary: about 15 mm allowance, 8 mm finished.",
    src: "Seam construction · ISO 4916 2.04.06"
  },
  {
    id: "pom", cat: "howto", era: "—", conf: "probable",
    title: "The five measurements that decide a jacket",
    dek: "Chest, shoulder, length, sleeve, cuff — in that order.",
    body: "A jungle-fatigue jacket in size M measures roughly: chest 110 cm relaxed, shoulder 47, body 73, sleeve 63, cuff 13 flat — figures drawn from reproduction size charts and original contract labels. Get shoulder and chest right and the jacket reads correctly; everything else is refinement.",
    src: "Reproduction size charts · original contract labels"
  }
];
