(function () {
  "use strict";

  var BATCH = 8;
  var data = Array.isArray(window.FEED) ? window.FEED : [];
  var IMG = {
    "slant-pocket": "img/16556943.jpg",
    "flap-pocket": "img/nmaahc_2013_11_1.jpg",
    "tcu1963": "img/nmaahc_2025_29_1_1-_2.jpg",
    "sateen": "img/nmah_1062076.jpg",
    "og107": "img/1076130.jpg",
    "buttons": "img/placket.jpg",
    "drawcord": "img/m65.jpg",
    "hbt": "img/hbt.jpg",
    "flat-felled": "img/flatseam.jpg",
    "safari-belt": "img/bush.jpg",
    "khaki": "img/khaki.jpg",
    "m43": "img/m1943.jpg",
    "bdu": "img/bdu.jpg",
    "erdl": "img/erdl.jpg",
    "ripstop": "img/ripstop.jpg",
    "epaulette": "img/epaulette.jpg",
    "cuff-tab": "img/m1943.jpg",
    "bellows": "img/diagram-bellows.svg",
    "poplin": "img/poplin.jpg",
    "pom": "img/pom.jpg",
    "m42": "img/m42.jpg",
    "margiela": "img/margiela-top.jpg",
    "yohji": "img/grailed-yohji.jpg",
    "junya": "img/grailed-junya.jpg",
    "cdg": "img/grailed-cdg.jpg",
    "hysteric": "img/grailed-hysteric.jpg",
    "mihara": "img/grailed-mihara.jpg",
    "ventile": "img/grailed-ventile.jpg",
    "redkap": "img/grailed-redkap.jpg",
    "gas-flap": "img/diagram-gasflap.svg",
    "drain-eyelet": "img/diagram-draineyelet.svg",
    "m41-jacket": "img/m41.jpg",
    "n1-jacket": "img/grailed-n1-jacket.jpg",
    "sailor-trousers": "img/grailed-sailor-trousers.jpg",
    "og107-trousers": "img/grailed-og107-trousers.jpg",
    "m65-trousers": "img/grailed-m65-trousers.jpg",
    "m51-parka": "img/m51-parka.jpg",
    "tanker-jacket": "img/tanker-ima.jpg",
    "hbt-trousers": "img/hbt-trousers.jpg",
    "jungle-trousers": "img/jungle-trousers.jpg",
    "rei-kawakubo": "img/grailed-rei-kawakubo.jpg",
    "raf-simons": "img/grailed-raf-simons.jpg",
    "helmut-lang": "img/grailed-helmut-lang.jpg",
    "undercover": "img/grailed-undercover.jpg",
    "issey-miyake": "img/grailed-issey-miyake.jpg"
  };
  /* Kredit gambar — wajib, mengikuti provenance sumber. */
  var CREDIT = {
    "slant-pocket": "US Marine on patrol, Vietnam 1967 · US National Archives, PD",
    "flap-pocket": "US Army fatigue shirt, 1970 · Smithsonian NMAAHC, CC0",
    "tcu1963": "Jungle tiger fatigues, 1968–69 · Smithsonian NMAAHC, CC0",
    "sateen": "OD field jacket · Smithsonian NMAH, CC0",
    "og107": "OG-107 utility uniform, Korea 1952–53 · PD",
    "buttons": "Placket sampler, Germany 1871 · Cooper Hewitt, PD",
    "drawcord": "US M-65 field jacket · PD",
    "hbt": "US HBT one-piece suit, OD No.7 · Smithsonian NMAH, CC0",
    "flat-felled": "Flat seam, dressmaking illustration 1921 · PD",
    "safari-belt": "Bush jacket (Teba) · CC0",
    "khaki": "British officer in khaki · PD",
    "m43": "US M-1943 field jacket · Smithsonian NMAH 2002.1735, CC0",
    "bdu": "Battle Dress Uniform · PD",
    "erdl": "ERDL camouflage pattern · PD",
    "ripstop": "US Army in Vietnam, OG-107 · NARA, PD",
    "epaulette": "French brigadier-general epaulettes, 1945–54 · Paris Musées, CC0",
    "cuff-tab": "US M-1943 field jacket — buttoned cuff tabs · Smithsonian NMAH, CC0",
    "bellows": "US Army cargo pocket · PD (US Army)",
    "poplin": "Poplin, plain-weave macro · PD",
    "pom": "A tailor measures a uniform · FSA/OWI (Esther Bubley), PD",
    "m42": "Eisenhower with 502nd PIR paratroopers, England 1944 · US Army Signal Corps, PD",
    "margiela": "1997 Maison Margiela semi-couture top · CC0",
    "yohji": "Yohji Yamamoto military long jacket, gabardine — photo shows a sold/listed item, not an institutional record. Listing photo, @HideOnBush4869, Grailed, https://www.grailed.com/listings/110865533, accessed 2026-11-13.",
    "junya": "Junya Watanabe Man SS19 utility-pocket poncho — photo shows a sold/listed item, not an institutional record. Listing photo, @whoisvegas, Grailed, https://www.grailed.com/listings/76861329, accessed 2026-11-13.",
    "cdg": "CDG Homme Plus A/W 1984–85 staff bomber — photo shows a sold/listed item, not an institutional record. Listing photo, @undergroundmen, Grailed, https://www.grailed.com/listings/28362089, accessed 2026-11-13.",
    "hysteric": "Hysteric Glamour Napoleon military jacket — photo shows a sold/listed item, not an institutional record. Listing photo, @style_c0re, Grailed, https://www.grailed.com/listings/94610908, accessed 2026-11-13.",
    "mihara": "Mihara Yasuhiro cotton/corduroy long jacket — photo shows a sold/listed item, not an institutional record. Listing photo, @PARCOS30_exported, Grailed, https://www.grailed.com/listings/60734222, accessed 2026-11-13.",
    "ventile": "Stone Island Ventile liner jacket — photo shows a sold/listed item, not an institutional record. Listing photo, @ELITEOUTERWEARII, Grailed, https://www.grailed.com/listings/86006890, accessed 2026-11-13.",
    "redkap": "Red Kap work coat — photo shows a sold/listed item, not an institutional record. Listing photo, @TheFlex, Grailed, https://www.grailed.com/listings/77260569, accessed 2026-11-13.",
    "gas-flap": "Original diagram, garmentsucks — inner placket section, schematic",
    "drain-eyelet": "Original diagram, garmentsucks — pocket base and eyelet, schematic",
    "m41-jacket": "US M-1941 field jacket · Paris Musées, CC0",
    "n1-jacket": "USN N-1 deck jacket, WWII issue — photo shows a sold/listed item, not an institutional record. Listing photo, @VintagecollectionsID, Grailed, https://www.grailed.com/listings/87694552, accessed 2026-11-13.",
    "sailor-trousers": "USN wool bell-bottom trousers, WWII issue — photo shows a sold/listed item, not an institutional record. Listing photo, @coveManor, Grailed, https://www.grailed.com/listings/95633828, accessed 2026-11-13.",
    "og107-trousers": "OG-107 utility trousers, 1970s — photo shows a sold/listed item, not an institutional record. Listing photo, @vintage_estate, Grailed, https://www.grailed.com/listings/75525594, accessed 2026-11-13.",
    "m65-trousers": "Cargo pants Army Green (M65) — photo shows a sold/listed item, not an institutional record. Listing photo, @sosadon, Grailed, https://www.grailed.com/listings/19347509, accessed 2026-11-13.",
    "m51-parka": "M-51 fishtail parka · Wikimedia Commons, PD (TheModGy1964)",
    "tanker-jacket": "Original U.S. WWII Winter Combat Jacket listed on IMA-USA — photo shows a listed item, not an institutional record. Listing photo, IMA-USA, ima-usa.com, https://www.ima-usa.com/products/original-u-s-wwii-winter-combat-tanker-jacket-in-excellent-condition-with-tactical-markings, accessed 2026-11-13.",
    "hbt-trousers": "American HBT fatigue trousers for female personnel (Madeleine Collomb) · Paris Musées, CC0",
    "jungle-trousers": "199th Light Infantry Brigade, Operation Rang Dong, Vietnam 1967 · NARA, PD",
    "rei-kawakubo": "CDG Homme Plus SS06 tartan jacket — photo shows a sold/listed item, not an institutional record. Listing photo, @whoisvegas, Grailed, https://www.grailed.com/listings/80004972, accessed 2026-11-13.",
    "raf-simons": "Raf Simons Stakker Humanoid bomber — photo shows a sold/listed item, not an institutional record. Listing photo, @davatros, Grailed, https://www.grailed.com/listings/94479129, accessed 2026-11-13.",
    "helmut-lang": "Helmut Lang 1999SS packable nylon jacket — photo shows a sold/listed item, not an institutional record. Listing photo, @SEVENSTARCLOTHING, Grailed, https://www.grailed.com/listings/98203993, accessed 2026-11-13.",
    "undercover": "Undercover AW1998 Small Parts fleece — photo shows a sold/listed item, not an institutional record. Listing photo, @AlexMaxamenko, Grailed, https://www.grailed.com/listings/60077006, accessed 2026-11-13.",
    "issey-miyake": "Issey Miyake 1990s denim jacket — photo shows a sold/listed item, not an institutional record. Listing photo, @DMC99, Grailed, https://www.grailed.com/listings/98589544, accessed 2026-11-13."
  };
  var CATS = [
    ["all", "All"],
    ["details", "Details"],
    ["closure", "Closures"],
    ["fabric", "Fabric"],
    ["history", "History"],
    ["brands", "Brands"],
    ["howto", "How-to"]
  ];

  var state = { cat: "all", q: "", shown: 0 };
  var feed = document.getElementById("feed");
  var sentinel = document.getElementById("sentinel");
  var countEl = document.getElementById("count");
  var qEl = document.getElementById("q");
  var chipsEl = document.getElementById("chips");
  var PRINT_ALL = new URLSearchParams(location.search).get("all") === "1";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function filtered() {
    var q = state.q.trim().toLowerCase();
    var words = q ? q.split(/\s+/) : [];
    return data.filter(function (c) {
      if (state.cat !== "all" && c.cat !== state.cat) return false;
      if (!words.length) return true;
      var hay = [c.title, c.dek, c.body, c.era, c.src, c.cat].join(" ").toLowerCase();
      return words.every(function (w) { return hay.indexOf(w) !== -1; });
    });
  }

  function cardHTML(c) {
    var src = IMG[c.id] || "";
    var href = "card/" + c.id + ".html";
    var img = src ? '<a class="card-hit" href="' + href + '"><img src="' + src + '" alt="" loading="lazy"></a>' : "";
    var cred = src && CREDIT[c.id] ? '<p class="cap">' + esc(CREDIT[c.id]) + "</p>" : "";
    var conf = c.conf || "probable";
    return '<article class="card">' + img + cred +
      '<div class="meta"><span>' + esc(c.cat) + '</span><span class="era">' + esc(c.era) + '</span></div>' +
      '<h3><a href="' + href + '">' + esc(c.title) + '</a></h3>' +
      '<p class="dek">' + esc(c.dek) + '</p>' +
      '<p class="conf-row"><span class="conf conf-' + esc(conf) + '">' + esc(conf) + '</span></p>' +
      '<a class="read" href="' + href + '">Read the essay →</a></article>';
  }

  function updateCount(total) {
    countEl.textContent = total + (total === 1 ? " entry" : " entries");
  }

  function renderMore() {
    var items = filtered();
    var slice = items.slice(state.shown, state.shown + BATCH);
    if (slice.length) {
      feed.insertAdjacentHTML("beforeend", slice.map(cardHTML).join(""));
      state.shown += slice.length;
    }
    updateCount(items.length);
    sentinel.style.display = state.shown >= items.length ? "none" : "block";
  }

  function reset() {
    feed.innerHTML = "";
    state.shown = 0;
    if (PRINT_ALL) {
      var items = filtered();
      feed.innerHTML = items.map(cardHTML).join("");
      updateCount(items.length);
      sentinel.style.display = "none";
      return;
    }
    renderMore();
  }

  function buildChips() {
    chipsEl.innerHTML = CATS.map(function (pair) {
      var key = pair[0], label = pair[1];
      return '<button class="chip" type="button" data-cat="' + key + '" aria-pressed="' +
        (key === state.cat ? "true" : "false") + '">' + label + "</button>";
    }).join("");
    chipsEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state.cat = btn.getAttribute("data-cat");
      Array.prototype.forEach.call(chipsEl.querySelectorAll(".chip"), function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      reset();
    });
  }

  var debounce = null;
  qEl.addEventListener("input", function () {
    clearTimeout(debounce);
    debounce = setTimeout(function () {
      state.q = qEl.value;
      reset();
    }, 140);
  });

  if ("IntersectionObserver" in window && !PRINT_ALL) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) renderMore();
    }, { rootMargin: "400px 0px" });
    io.observe(sentinel);
  }

  buildChips();
  if (feed.children.length > 0 && !PRINT_ALL) {
    /* kartu sudah dirender statis oleh build_pages.mjs — biarkan agar crawler & pembaca
       langsung melihat isinya; filter/search akan mengganti saat dipakai. */
    sentinel.style.display = "none";
    updateCount(data.length);
  } else {
    reset();
  }
})();
