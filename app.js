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
    "bdu": "img/70334857.jpg"
  };
  /* Ilustrasi untuk kartu tanpa foto — per kategori. */
  var ILL = {
    details: "img/ill-details.svg",
    closure: "img/ill-closure.svg",
    fabric: "img/ill-fabric.svg",
    history: "img/ill-history.svg",
    brands: "img/ill-brands.svg",
    howto: "img/ill-howto.svg",
    construction: "img/ill-details.svg"
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
    var src = IMG[c.id] || ILL[c.cat] || "";
    var img = src ? '<img src="' + src + '" alt="" loading="lazy">' : "";
    var conf = c.conf || "probable";
    return '<article class="card">' + img +
      '<div class="meta"><span>' + esc(c.cat) + '</span><span class="era">' + esc(c.era) + '</span></div>' +
      '<h3>' + esc(c.title) + '</h3>' +
      '<p class="dek">' + esc(c.dek) + '</p>' +
      '<p class="conf-row"><span class="conf conf-' + esc(conf) + '">' + esc(conf) + '</span></p>' +
      '<details><summary>Read</summary><p>' + esc(c.body) + '</p>' +
      '<p class="src">' + esc(c.src) + '</p></details></article>';
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
  reset();
})();
