(() => {
  // --- Mobile menu toggle ---
  const btn = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-list");

  const closeMenu = () => {
    if (!btn || !list) return;
    list.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    if (!btn || !list) return;
    list.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  };

  if (btn && list) {
    // Safety: if button is ever inside a form, prevent unintended submit behavior
    if (!btn.getAttribute("type")) btn.setAttribute("type", "button");

    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't let it count as "outside click"
      const isOpen = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when clicking a nav link
    list.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => closeMenu())
    );

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      const clickedInsideNav =
        e.target.closest(".nav-toggle") || e.target.closest(".nav-list");
      if (!clickedInsideNav) closeMenu();
    });

    // Close menu on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // --- Footer year ---
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // --- Smooth scroll for in-page anchors ---
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      // Back to top
      if (href === "#top") {
        e.preventDefault();
        closeMenu();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
