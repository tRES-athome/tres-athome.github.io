/* tRES site scripts: mobile navigation and list filters.
   All content is visible without JavaScript; scripts only add convenience. */
(function () {
  "use strict";

  // ---- Mobile navigation ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var close = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { close(); toggle.focus(); }
    });
    window.addEventListener("resize", function () { if (window.innerWidth >= 980) close(); });
  }

  // ---- Filters ----
  // <div class="filters" data-filter-target="#list" data-filter-key="team"> with buttons
  // <button class="filter-btn" data-value="all|sobits|...">. Items carry data-team="sobits erasers".
  document.querySelectorAll(".filters[data-filter-target]").forEach(function (bar) {
    var root = document.querySelector(bar.getAttribute("data-filter-target"));
    var key = bar.getAttribute("data-filter-key");
    if (!root || !key) return;
    var status = bar.querySelector("[data-filter-status]");
    var buttons = bar.querySelectorAll(".filter-btn");

    function apply(value) {
      var shown = 0;
      root.querySelectorAll("[data-" + key + "]").forEach(function (item) {
        var values = (item.getAttribute("data-" + key) || "").split(" ");
        var visible = value === "all" || values.indexOf(value) !== -1;
        item.hidden = !visible;
        if (visible) shown++;
      });
      // Hide year groups that have no visible entries.
      root.querySelectorAll(".year-group").forEach(function (group) {
        var any = group.querySelector(".entry:not([hidden])");
        group.hidden = !any;
      });
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-value") === value ? "true" : "false");
      });
      if (status) status.textContent = shown + (shown === 1 ? " entry shown" : " entries shown");
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-value")); });
    });
  });
})();
