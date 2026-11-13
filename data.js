/* garmentsucks — feed data
   Setiap kartu punya tingkat keyakinan (conf):
     established — bukti primer/institusional + korroborasi
     probable    — kuat tapi satu sumber atau inferensial
     unresolved  — sumber bertentangan / legenda / belum ada bukti
   Aturan: klaim tanpa sumber tidak boleh naik kelas demi narasi. */

window.FEED = [
  {
    id: "slant-pocket", cat: "details", era: "1942", conf: "unresolved",
    title: "The slanted chest pocket: a shape without a documented reason",
    dek: "The slant is real on surviving jackets; the explanation usually given for it is not documented.",
    body: "The chest pocket of the tropical jacket is cut at an inward slant. The slant can be observed on surviving garments; the functional explanation comes from dealer descriptions only, and the angle figures used on this site are a reproduction working sheet.",
    src: "IWM catalogue descriptions · dealer descriptions · site working spec"
  },
  {
    id: "flap-pocket", cat: "closure", era: "1964", conf: "established",
    title: "The buttons were hidden in 1964",
    dek: "The flaps were already there. What changed was the exposure of the buttons.",
    body: "The first pattern carried pocket flaps, but the buttons sat exposed on them. Shelby Stanton's chronology places the approval of coat pocket flaps over pocket buttons at 26 August 1964 to prevent snagging, and the IWM's catalogue text corroborates the sequence: buttons exposed on Type I, concealed in Type II (1964–65). The flap existed; the cover is what the change added.",
    src: "Stanton chronology · IWM catalogue description"
  },
  {
    id: "bellows", cat: "details", era: "1942", conf: "probable",
    title: "The pleat that absorbed a parachute",
    dek: "An expanding pocket survives loading. Airborne accounts say the stress was real.",
    body: "A bellows pocket gives capacity without tearing, because the pleat lets the front wall move away. Repro and collector accounts describe M-1942 pockets blowing out on parachute-opening shock, and riggers hand-reinforcing them before D-Day. The engineering logic is sound; the specific anecdote is not yet backed by a primary document. On a garment, look for the two fold lines inside the pocket edge — that is the pleat.",
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
    body: "The separable fastener was designed by Gideon Sundbäck in 1913 and patented in 1917, and it did not become common in clothing until the 1930s. The story that First World War soldiers were trapped in zippered coats is therefore treated here as legend rather than record. What the documents do show is that the tropical jacket kept a button front through every pattern and, from the second, hid the buttons behind flaps: a button does not corrode shut in monsoon humidity and can be re-sewn in the field.",
    src: "Patent records (Sundbäck, US 1,219,881) · IWM catalogue description"
  },
  {
    id: "gas-flap", cat: "closure", era: "1942", conf: "probable",
    title: "The gas flap: an anti-gas panel behind the buttons",
    dek: "An inner panel behind the front opening, documented on the 1942 anti-gas shirt and deleted from the tropical jacket by 1966-67.",
    body: "A gas flap is an inner panel behind the front opening, closing the gaps between buttons. An institutional catalogue records it among the anti-gas features added to the 1942 M-1943 Special flannel shirt; early tropical jackets carried one and the third pattern removed it.",
    src: "1918 Service Dress · collector documentation"
  },
  {
    id: "epaulette", cat: "details", era: "1763", conf: "probable",
    title: "The epaulette began as a rifle strap",
    dek: "Before rank, it stopped the sling sliding off the shoulder.",
    body: "French army epaulettes appear around 1763 as officer marking, but their origin is a shoulder belt that held a rifle sling or ammunition belt in place. Over a century the functional ribbon widened and gilded into a badge of rank. The general lineage is well covered; the exact date is conventional rather than precise. On a field jacket the epaulette is a short strap across the shoulder, buttoned at the neck end — and the jungle jacket dropped it on the third pattern because it snagged in brush.",
    src: "Epaulette origin · military dress history"
  },
  {
    id: "cuff-tab", cat: "closure", era: "1943", conf: "probable",
    title: "The wrist is a valve",
    dek: "Sealed against rain and brush; opened for air.",
    body: "Buttoned cuffs keep wind, rain, insects and thorns out. Opened, they ventilate and let the sleeve roll on a gusset. Military field jackets carried the buttoned cuff from the M-1943 through the M-51; the M-65 moved to Velcro. The jungle jacket used an adjustable button closure at the cuff — look for one button and a short tab at the sleeve end.",
    src: "M-1943 / M-51 / M-65 lineage · AWM records"
  },
  {
    id: "drawcord", cat: "closure", era: "1965", conf: "probable",
    title: "The drawcord: waist and hem, no buckle",
    dek: "A cord inside a stitched channel at the waist and hem of the M-65 cold weather coat, recorded in the maintenance manual.",
    body: "A drawcord runs inside a stitched channel at the waist or hem; the M-65 cold weather coat (MIL-C-43455) is recorded as having waist and hem drawcords. The manual also lists MIL-T-43303 elastic cord among materials.",
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
    id: "ripstop", cat: "fabric", era: "1967", conf: "established",
    title: "Ripstop: a grid that stops a tear",
    dek: "The grid is specified, not decorative — MIL-C-342 names it.",
    body: "A heavier reinforcing yarn is woven at regular intervals, so a snag becomes a pinhole instead of a torn panel, and the base cloth stays as open as plain cotton. The US specification MIL-C-342 (NSN 8305-00-132-1080) describes a wind-resistant poplin in a ripstop weave, OG-107 both sides, 5.7–6.7 oz/yd² (roughly 193–227 gsm), mercerized and shrunk. When exactly the jacket switched from plain poplin still rests on secondary accounts placing it around 1967.",
    src: "MIL-C-342 / NSN 8305-00-132-1080 · TCU pattern accounts"
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
    id: "khaki", cat: "history", era: "1848", conf: "probable",
    title: "Khaki was born in the dust",
    dek: "1848, Peshawar: the first uniform colour chosen to disappear.",
    body: "Khaki was introduced in 1848 by the Corps of Guides on the North-West Frontier, and it spread through Indian regiments until it was standard issue there by 1885. The colour took its name from the Urdu and Persian word for dust, and it matched the ground. It was not the first attempt at concealment — rifle regiments had worn green since the late eighteenth century — but it was the first widely adopted dust-coloured service uniform, which is a narrower and defensible claim.",
    src: "Corps of Guides · National Army Museum"
  },
  {
    id: "og107", cat: "history", era: "1952", conf: "probable",
    title: "OG-107 is a colour, not a cloth",
    dek: "A shade code that keeps being mistaken for a fabric.",
    body: "Olive Green 107 is a shade code, not a fabric. The utility uniform in OG-107 was cotton sateen; the tropical combat jacket in the same shade was poplin and later ripstop. Same colour, opposite behaviour in humidity. One fabric datasheet for a wind-resistant poplin carries a 'low infra red dye formulation' note in its special features, which suggests the colour was engineered rather than merely chosen — a single source, so the claim stays probable.",
    src: "NSN 8305-00-132-1080 datasheet (MIL-C-342) · OG-107 references"
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
    title: "The tropical combat uniform: 1963, then two revisions",
    dek: "Introduced in June 1963 and revised twice within four years — exposed buttons, then concealed, then the gas flap and epaulettes removed.",
    body: "Tropical Combat Uniform: introduced June 1963 after development by the QM Research and Engineering Command, based closely on the M-1942 Parachutist Uniform, in thin cotton-poplin. Type I exposed pocket buttons; Type II concealed them (1964-65); Type III removed the gas flap and shoulder epaulettes (1966-67).",
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
    id: "yohji", cat: "designers", era: "1981", conf: "probable",
    title: "Yohji Yamamoto: drape as deconstruction",
    dek: "Gabardine, raw-cut edges, volume that falls away from the body.",
    body: "Yohji Yamamoto showed in Paris from the early 1980s, and the military reference arrives in his work turned inside out. The oversized volume is better traced to two sources than to one: Japanese flat-pattern cutting, and the American over-garments — the M-51 fishtail parka and the M-65 — which were cut large because they were worn over other clothing. The house takes that volume, cuts it in heavy cotton or wool gabardine, and leaves raw edges as ornament.",
    src: "Yohji Yamamoto archive · Y's Resort 2023"
  },
  {
    id: "junya", cat: "designers", era: "2000s", conf: "probable",
    title: "Junya Watanabe: upgrade the archetype",
    dek: "Hybrids, reversibles, and technical membranes over military cloth.",
    body: "Junya treats utility as raw material: a reversible MA-1/denim hybrid, a parka/cape silhouette, and an M-65 upgraded with GORE-TEX and Dyneema. FIT's museum describes his codes as exposed raw seams, cut-out darts, and garment insides turned into details.",
    src: "FIT Museum · Junya Watanabe archive"
  },
  {
    id: "cdg", cat: "designers", era: "1980s", conf: "probable",
    title: "Comme des Garçons Homme Plus: anti-tailoring",
    dek: "Military sleeves and pockets cut apart, then sewn onto tailoring.",
    body: "Rei Kawakubo's FW25 notes were to break down army symbols — uniform shapes, colour, camouflage, helmets — with field jackets and officer coats deconstructed and recombined. The house also works in light 'tropical-weight' wool for hot climates.",
    src: "CDG Homme Plus FW25 · retailer archive"
  },
  {
    id: "mihara", cat: "designers", era: "2026", conf: "probable",
    title: "Mihara Yasuhiro: docking and sun-fade",
    dek: "Two garments stitched together, then faded like a field jacket.",
    body: "Mihara's signature is assembly: denim and MA-1 stitched front-to-back, details 'docked' onto a shell, garments stripped of their original purpose. His sun-faded cotton military jacket uses finish — not print — to signal age.",
    src: "Mihara Yasuhiro SS26 / AW26"
  },
  {
    id: "hysteric", cat: "brands", era: "1984", conf: "probable",
    title: "Hysteric Glamour: repro, then lighten it",
    dek: "Reproduce the spec cloth, then drop the weight for daily wear.",
    body: "Hysteric reproduces military-spec materials — an air-force nylon twill MA-1, a third-pattern fatigue shirt — then rebalances them. Its HG1963 fatigue shirt keeps the four flap pockets but uses an 80/20 cotton-weather cloth so it layers like a shirt.",
    src: "Hysteric Glamour line notes"
  },
  {
    id: "redkap", cat: "brands", era: "1920s", conf: "established",
    title: "Red Kap: the baseline everyone dismantles",
    dek: "Spec-sheet workwear — the control group.",
    body: "Red Kap builds to a specification sheet: poly-cotton twill, bartacked pockets, action-back pleats, reinforced seams. It produced combat fatigues and field jackets during the Second World War. It is useful here as a control — the un-deconstructed version of the same construction vocabulary. The claim that designers dismantle Red Kap specifically is not supported; the houses in this archive dismantle military uniform and tailoring, and borrow the workwear basics without naming them.",
    src: "Red Kap product specifications"
  },
  {
    id: "flat-felled", cat: "howto", era: "—", conf: "probable",
    title: "How a flat-felled seam is built",
    dek: "A self-finished seam: trim one allowance, wrap the other over it, stitch again — two rows on the face, no raw edge.",
    body: "A flat-felled seam trims one allowance, wraps the other over it and stitches again, so no raw edge is exposed and the seam takes two rows on the face. Documented in sewing textbooks and classified in ISO 4916; no military specification was opened.",
    src: "Seam construction · ISO 4916 2.04.06"
  },
  {
    id: "pom", cat: "howto", era: "—", conf: "probable",
    title: "The five flat measurements that describe a jacket",
    dek: "Chest, shoulder, body length, sleeve and cuff — measured flat, at defined points, in the same order every time.",
    body: "Five flat measurements — chest, shoulder, body length, sleeve and cuff — describe a jacket well enough to compare garments. The figures used on this site are a reproduction working sheet, not a period document.",
    src: "Reproduction size charts (commercial) · original contract labels"
  },
  {
    id: "margiela", cat: "designers", era: "1988", conf: "probable",
    title: "Maison Margiela: the label that is not a logo",
    dek: "Four white stitches at the back, a blank label, and a house that let the clothes speak.",
    body: "Maison Martin Margiela was founded in Paris in 1988 with Jenny Meirens. Its signature is four white corner stitches set at the back, holding a blank white label inside the garment — the stitches are visible from outside, which is the opposite of a logo. Collections were sorted by number rather than name, and the Artisanal line was made from found and vintage clothing. Margiela left in 2009; John Galliano led the house from 2014 to 2024, and Glenn Martens was appointed in January 2025.",
    src: "Maison Margiela product notes (four stitches) · Vogue Business/Vogue (Martens appointment, 2025)"
  },
  {
    id: "m41-jacket", cat: "history", era: "1941", conf: "probable",
    title: "M-1941 field jacket: the first American field jacket",
    dek: "Jacket, Field, O.D., M-1941 — a short light cotton field jacket, confirmed as an object record by the Imperial War Museums.",
    body: "M-1941 field jacket, Jacket, Field, O.D.: short light cotton field jacket of the Second World War. Designation confirmed by an IWM object record; development story and cut details remain unverified.",
    src: "Paris Musées object record (2002.1766) · museum records"
  },
  {
    id: "n1-jacket", cat: "construction", era: "1944", conf: "probable",
    title: "N-1 deck jacket: jungle cloth, pile lining, zip front",
    dek: "The short US Navy deck jacket, described by its reproducers as 1944 issue: cotton jungle-cloth shell, alpaca and wool pile lining.",
    body: "N-1 deck jacket: cotton jungle-cloth shell over alpaca and wool pile, zip front, short cut. No T1 specification or museum record found; dating and materials per marketplace listings and reproducer notes.",
    src: "Grailed listing (WWII issue) · USN clothing records"
  },
  {
    id: "sailor-trousers", cat: "construction", era: "1943", conf: "probable",
    title: "The sailor's bell-bottoms: wool, fall front, wide hem",
    dek: "US Navy enlisted dress blue trousers in wool, cut high with a buttoned fall front and a bell-shaped hem.",
    body: "US Navy enlisted dress blue trousers in wool, high rise, buttoned broad fall front, bell-shaped hem. Material and designation recorded in museum metadata; cut details not found in an opened document.",
    src: "Grailed listing (WWII issue) · USN uniform records"
  },
  {
    id: "og107-trousers", cat: "history", era: "1970", conf: "probable",
    title: "OG-107 utility trousers: not the M-65 field trousers",
    dek: "Sateen work trousers in the OG-107 shade, with slash and rear pockets and no cargo pockets — a different garment from the M-65 field trousers (MIL-T-43497).",
    body: "OG-107 utility trousers: cotton sateen work trousers with slash and rear pockets and no cargo pockets. They are not the M-65 field trousers (MIL-T-43497, cargo pockets). Specification designation per Smithsonian catalogue excerpt; shape details per marketplace listings.",
    src: "Grailed listing (1970s issue) · uniform references"
  },
  {
    id: "m65-trousers", cat: "construction", era: "1965", conf: "probable",
    title: "M-65 field trousers: the manual records the cloth, not the date",
    dek: "Cotton-nylon sateen, cargo pockets, a hem drawcord — and a 1965 date that only secondary sources give.",
    body: "M-65 field trousers: cotton-nylon wind-resistant sateen in OG-107, cargo pockets, hem drawcord. The maintenance manual records the name, cloth, stock numbers and liner; the 1965 date and the pocket details come from commercial sources only.",
    src: "TM 10-8400-201-23 (transcription) · commercial secondary sources"
  },
  {
    id: "m51-parka", cat: "history", era: "1951", conf: "probable",
    title: "M-51: the fishtail parka",
    dek: "A Korean War over-garment that ended up on the backs of English Mods.",
    body: "The M-1951 parka was designed as an outer layer to be worn over the field jacket: a cotton shell with a detachable hood and liner, a fishtail hem that could be drawn between the legs or snapped up, and a front closure covered by a storm flap. It was issued in the Korean War and stayed in service long after. In the 1960s it was bought surplus in Britain and became the coat of the Mod movement — the fishtail worn over a suit, a use the army never intended. It is the clearest example in this archive of a garment leaving its issue and becoming a style.",
    src: "Wikimedia Commons (PD photograph) · M-1951 parka references"
  },
  {
    id: "tanker-jacket", cat: "construction", era: "1941", conf: "probable",
    title: "The tanker jacket: short body, knit seals, zip front",
    dek: "The Winter Combat Jacket issued to US armoured crews — and a specification story that does not agree with itself.",
    body: "Jacket, Combat, Winter: short cotton-twill jacket with wool blanket lining, zip front, knit collar, cuffs and waistband, and slash pockets, issued to US armoured crews in the Second World War. Specification number and dates rest on conflicting reproducer accounts.",
    src: "NARA period photograph (PD) · armoured-crew clothing records"
  },
  {
    id: "hbt-trousers", cat: "construction", era: "1942", conf: "probable",
    title: "HBT trousers: the utility half",
    dek: "Herringbone twill trousers, issued to women as well as men.",
    body: "The herringbone twill fatigue trousers were the lower half of the American utility uniform: a button fly, two front pockets, two back pockets, and a loose straight leg in a cloth that resisted abrasion and ventilated better than sateen. They were issued in the P-41 and P-42 uniforms and worn in the Pacific, where the open twill mattered. This pair belonged to Madeleine Collomb and was cut for female personnel — a reminder that the utility uniform was issued to women during the war, and that the archive's 'military clothing' is not automatically menswear.",
    src: "Paris Musées object record 2012.0.4 (CC0) · HBT uniform references"
  },
  {
    id: "jungle-trousers", cat: "details", era: "1963", conf: "probable",
    title: "Jungle fatigue trousers: cargo pockets and a drawcord hem",
    dek: "The trousers half of the tropical uniform: expandable cargo pockets, waist adjusters and drawstring cuffs.",
    body: "Tropical combat trousers: thin cotton poplin, zip fly with waist button, waist adjuster straps, seven belt loops, rear slash pockets with concealed flaps, large expandable cargo pockets with concealed two-button flaps, and drawstring cuff adjusters. Features per an institutional catalogue description of Type III examples.",
    src: "NARA period photograph (PD) · tropical uniform records"
  },
  {
    id: "rei-kawakubo", cat: "designers", era: "1969", conf: "probable",
    title: "Rei Kawakubo: the designer who refuses the brief",
    dek: "Comme des Garçons was founded in Tokyo in 1969; the Paris debut in 1981 changed what a show could be.",
    body: "Rei Kawakubo founded Comme des Garçons in Tokyo in 1969 and showed in Paris for the first time in 1981, alongside Yohji Yamamoto. The clothes were black, oversized and deliberately unfinished — in a city built on couture, they read as an insult and then as a new standard. Since then the house has grown into many lines, but the mainline remains Kawakubo's argument: that a garment can be a question about the body rather than a decoration of it. The 1997 collection known as Body Meets Dress, Dress Meets Body, with its padded lumps, is the clearest example.",
    src: "Comme des Garçons history (secondary) · Grailed listing photograph"
  },
  {
    id: "raf-simons", cat: "designers", era: "1995", conf: "probable",
    title: "Raf Simons: youth culture as a cutting pattern",
    dek: "Antwerp, 1995 — a menswear label built from school uniforms, parkas and the music of the moment.",
    body: "Raf Simons founded his label in Antwerp in 1995 after studying industrial design. The early collections took the codes of youth tribes — school uniforms, MA-1 bombers, parkas, narrow trousers — and cut them long or slim so the reference stayed legible but the proportion became his. Music was part of the structure rather than the soundtrack. He went on to lead Jil Sander, Dior and Calvin Klein, and to share the creative direction of Prada from 2020. Early Raf pieces were made in small runs and are now among the most collected garments of the period.",
    src: "Raf Simons archive references (secondary) · Grailed listing photograph"
  },
  {
    id: "helmut-lang", cat: "designers", era: "1986", conf: "probable",
    title: "Helmut Lang: the engineer of the 1990s",
    dek: "Vienna to New York — minimalist tailoring that treated clothing as equipment.",
    body: "Helmut Lang founded his label in Vienna in 1986 and moved to New York in the late 1990s. His work stripped tailoring down and added the language of equipment: technical nylon, straps, packable jackets, sealed seams, a palette of black, white and grey. A 1999 jacket that folds into its own pocket and can be carried like a bag is the clearest example — military utility turned into a design principle rather than a costume. Lang was also early to the internet, showing and selling collections online before most houses had a website. Prada acquired the label in 1999; Lang left in 2005.",
    src: "Helmut Lang archive references (secondary) · Grailed listing photograph"
  },
  {
    id: "undercover", cat: "designers", era: "1990", conf: "probable",
    title: "Undercover: punk, but engineered",
    dek: "Jun Takahashi's Tokyo label, from a Harajuku store to the Paris runway.",
    body: "Jun Takahashi founded Undercover in Tokyo in 1990, from the Ura-Harajuku scene, with the slogan 'We make noise not clothes'. The method is hybridisation: a shirt bonded to a cardigan, detachable parts borrowed from children's toys, seams and padding exposed, punk graphics on tailored pieces. The label showed in Paris from the early 2000s and has been backed by Prada Group since 2009. Late-1990s pieces such as the 1998 'Small Parts' collection are now archive objects, and the mainline and Undercoverism lines make different arguments.",
    src: "Undercover archive references (secondary) · Grailed listing photograph"
  },
  {
    id: "issey-miyake", cat: "designers", era: "1970", conf: "probable",
    title: "Issey Miyake: cloth as technology",
    dek: "Hiroshima-born, Paris-trained — the designer who made pleats a material.",
    body: "Issey Miyake was born in Hiroshima in 1938, studied in Tokyo, then went to Paris and worked with Givenchy before founding Miyake Design Studio in 1970. His subject was cloth rather than silhouette: permanent pleating (Pleats Please, 1993), garments that pack flat, and A-POC, a computer-controlled process that turns a single tube of fabric into clothing. He died in 2022. In this archive he is the clearest case of a designer who treats material as the idea, not the supplier of it.",
    src: "Issey Miyake archive references (secondary) · Grailed listing photograph"
  }
];
