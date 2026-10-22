(() => {
  const init = () => {
    const data = window.PORTFOLIO_DATA || {}; const profile = data.profile || {}; const hero = data.hero || {};
    document.querySelectorAll("[data-profile]").forEach(el => { const key = el.dataset.profile; if (profile[key]) el.textContent = profile[key]; });
    document.querySelectorAll("[data-hero]").forEach(el => { const key = el.dataset.hero; if (hero[key]) el.textContent = hero[key]; });
    document.querySelectorAll("[data-profile='name']").forEach(el => el.textContent = profile.name || "Portfolio");
    if (profile.logo) {
      document.querySelectorAll(".wordmark-logo").forEach(img => {
        img.src = profile.logo;
      });
    }
    document.title = data.siteSettings?.title || `${profile.name || "Portfolio"} — ${profile.role || "Designer"}`;
    const description = document.querySelector('meta[name="description"]'); if (description && data.siteSettings?.description) description.content = data.siteSettings.description;
    const theme = document.querySelector('meta[name="theme-color"]'); if (theme && data.siteSettings?.themeColor) theme.content = data.siteSettings.themeColor;
    const canonical = data.siteSettings?.canonicalUrl;
    if (canonical && /^https?:\/\//i.test(canonical)) { let link = document.querySelector('link[rel="canonical"]'); if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.append(link); } link.href = canonical; }
    const year = document.getElementById("current-year"); if (year) year.textContent = new Date().getFullYear();
    const heroImg = document.querySelector(".hero-art-card img");
    if (heroImg) heroImg.addEventListener("error", () => { heroImg.src = "assets/images/image-placeholder.svg"; }, { once: true });
  };
  document.addEventListener("DOMContentLoaded", init);
})();