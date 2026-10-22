(() => {
  const init = () => {
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");
    const nav = document.querySelector(".nav-glass");
    if (!toggle || !links || !nav) return;
    const closeMenu = () => { toggle.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); toggle.setAttribute("aria-label", "Buka menu"); };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
    document.addEventListener("click", e => { if (!nav.contains(e.target) && !links.contains(e.target)) closeMenu(); });
    const updateScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 16);
    updateScroll(); window.addEventListener("scroll", updateScroll, { passive: true });
    const sections = [...document.querySelectorAll("main section[id]")];
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id));
        }
      }), { rootMargin: "-35% 0px -55% 0px" });
      sections.forEach(section => observer.observe(section));
    }
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  };
  document.addEventListener("DOMContentLoaded", init);
})();