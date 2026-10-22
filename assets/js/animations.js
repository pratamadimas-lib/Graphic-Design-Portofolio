(() => {
  const init = () => {
    const targets = document.querySelectorAll(".reveal, .experience-item, .certificate-card");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach(el => el.classList.add("is-visible")); return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach(el => observer.observe(el));
    // Content rendered after initial observation (portfolio, experience, certificates).
    const dynamicObserver = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      const revealNodes = [ ...(node.matches?.(".reveal, .experience-item, .certificate-card") ? [node] : []), ...node.querySelectorAll?.(".reveal, .experience-item, .certificate-card") || [] ];
      revealNodes.forEach(el => { if (!el.classList.contains("is-visible")) observer.observe(el); });
    })));
    ["project-grid","experience-list","certificate-grid"].forEach(id => { const el = document.getElementById(id); if (el) dynamicObserver.observe(el,{childList:true,subtree:true}); });
  };
  document.addEventListener("DOMContentLoaded", init);
})();