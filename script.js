(() => {
  const btn = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-list");

  const closeMenu = () => {
    if (!btn || !list) return;
    list.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  if (btn && list) {
    if (!btn.getAttribute("type")) btn.setAttribute("type", "button");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    list.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => closeMenu())
    );

    document.addEventListener("click", (e) => {
      const inside = e.target.closest(".nav-toggle") || e.target.closest(".nav-list");
      if (!inside) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

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
