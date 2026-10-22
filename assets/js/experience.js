(() => {
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
  const PLACEHOLDER_LOGO = "assets/images/experience/company-placeholder.svg";

  const init = () => {
    const data = window.PORTFOLIO_DATA || {}; const settings = data.siteSettings || {};
    const host = document.getElementById("experience-list"); const section = document.getElementById("experience");
    if (!host || !section) return;
    const list = (Array.isArray(data.experience) ? data.experience : []).filter(item => item && item.visible !== false && item.role && item.company)
      .sort((a,b) => Number(a.order ?? 999) - Number(b.order ?? 999));
    if (!list.length) { if (!settings.showExperienceWhenEmpty) section.hidden = true; else host.innerHTML = '<p class="experience-empty">Pengalaman akan ditampilkan di sini.</p>'; return; }
    host.innerHTML = list.map(item => {
      const date = [item.start, item.current ? "Sekarang" : item.end].filter(Boolean).join(" — ");
      const tags = (item.tools || []).map(tool => `<span>${esc(tool)}</span>`).join("");
      const responsibilities = (item.responsibilities || []).filter(Boolean).map(x => esc(x)).join(" · ");
      const description = [item.description, responsibilities].filter(Boolean).join(" ");
      const logoSrc = item.logo ? esc(item.logo) : PLACEHOLDER_LOGO;

      return `<article class="experience-item reveal">
        <div class="experience-date">${esc(date || "—")}</div>
        <div class="experience-main">
          <div class="experience-header">
            <div class="experience-logo-box">
              <img src="${logoSrc}" alt="Logo ${esc(item.company)}" class="experience-logo" loading="lazy" width="48" height="48">
            </div>
            <div class="experience-header-text">
              <h3>${esc(item.role)}</h3>
              <p class="experience-company">${esc(item.company)}</p>
            </div>
          </div>
          <p class="experience-description">${esc(description || "Deskripsi belum ditambahkan.")}</p>
          ${tags ? `<div class="experience-tags">${tags}</div>` : ""}
        </div>
        <div class="experience-location">${esc(item.location || "")}</div>
      </article>`;
    }).join("");

    host.querySelectorAll(".experience-logo").forEach(img => {
      img.addEventListener("error", () => {
        img.src = PLACEHOLDER_LOGO;
        img.alt = "Logo instansi tidak tersedia";
      }, { once: true });
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();