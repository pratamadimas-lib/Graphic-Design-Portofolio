(() => {
  const data = () => window.PORTFOLIO_DATA || {};
  const getPageSize = () => {
    const settings = data().siteSettings || {};
    const candidate = settings.itemsPerPage ?? settings.projectsPerPage ?? data().itemsPerPage ?? data().projectsPerPage;
    const val = Number(candidate);
    return Number.isFinite(val) && val > 0 ? val : 12;
  };
  const state = { category: "All Projects", query: "", sort: "manual", visibleCount: 12, activeProject: null, lightboxImages: [], lightboxIndex: 0, lastFocused: null };
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const safeUrl = value => {
    if (!value || typeof value !== "string") return "";
    try { const url = new URL(value, window.location.href); return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol) ? value : ""; } catch { return ""; }
  };
  const projects = () => (Array.isArray(data().portfolio) ? data().portfolio : []).filter(p => p && p.visible !== false && p.id && p.title);
  const imageFallback = (img, title) => {
    img.addEventListener("error", () => { img.src = "assets/images/image-placeholder.svg"; img.alt = title ? `Gambar tidak tersedia: ${title}` : "Gambar tidak tersedia"; img.dataset.fallback = "true"; }, { once: true });
  };
  const getCategories = () => {
    const declared = Array.isArray(data().categories) ? data().categories : [];
    const used = projects().map(p => p.category).filter(Boolean);
    return ["All Projects", ...new Set([...declared, ...used])];
  };
  const filtered = () => {
    let list = projects().filter(p => (state.category === "All Projects" || p.category === state.category) &&
      `${p.title} ${p.description || ""} ${p.category || ""} ${(p.tools || []).join(" ")}`.toLowerCase().includes(state.query.toLowerCase()));
    if (state.sort === "newest") list.sort((a, b) => String(b.year || "").localeCompare(String(a.year || "")) || (a.order ?? 999) - (b.order ?? 999));
    else if (state.sort === "oldest") list.sort((a, b) => String(a.year || "").localeCompare(String(b.year || "")) || (a.order ?? 999) - (b.order ?? 999));
    else if (state.sort === "az") list.sort((a, b) => String(a.title).localeCompare(String(b.title)));
    else list.sort((a, b) => Number(a.order ?? 999) - Number(b.order ?? 999));
    return list;
  };
  const renderFilters = () => {
    const host = $("#category-filters"); if (!host) return;
    host.replaceChildren();
    getCategories().forEach(category => {
      const button = document.createElement("button"); button.type = "button"; button.className = "filter-button" + (category === state.category ? " is-active" : "");
      button.textContent = category; button.setAttribute("aria-pressed", String(category === state.category));
      button.addEventListener("click", () => { state.category = category; state.visibleCount = getPageSize(); renderFilters(); renderGrid(); });
      host.append(button);
    });
  };

  const cardMarkup = p => `<article class="project-card" tabindex="0" role="button" data-project-id="${esc(p.id)}" aria-label="Lihat detail proyek ${esc(p.title)}">
    <div class="project-image-wrap"><img src="${esc(p.image || "assets/images/image-placeholder.svg")}" alt="${esc(p.alt || p.title)}" loading="lazy" width="600" height="800"><span class="project-image-overlay"></span>${p.featured ? '<span class="featured-pill">✦ FEATURED</span>' : ""}<span class="project-open" aria-hidden="true">↗</span></div></article>`;

  const renderGrid = () => {
    const host = $("#project-grid"); if (!host) return;
    const list = filtered();
    const shown = list.slice(0, state.visibleCount);

    if (!shown.length) {
      host.innerHTML = '<div class="empty-state"><strong>Belum ada karya yang cocok.</strong><p>Coba kata kunci lain atau pilih kategori berbeda.</p></div>';
    } else {
      host.innerHTML = shown.map(cardMarkup).join("");
      $$(".project-card", host).forEach(card => {
        const open = () => openProject(card.dataset.projectId);
        card.addEventListener("click", open);
        card.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        });
        const img = $("img", card);
        imageFallback(img, card.dataset.projectId);
      });
    }

    const count = $("#project-count");
    if (count) count.textContent = `Menampilkan ${shown.length} dari ${list.length} karya`;
    const more = $("#load-more");
    if (more) more.hidden = shown.length >= list.length;
  };

  const openProject = id => {
    const p = projects().find(item => item.id === id); if (!p) return;
    const dialog = $("#project-dialog"); const host = $("#dialog-content"); if (!dialog || !host) return;
    state.lastFocused = document.activeElement; state.activeProject = p;
    const projectUrl = safeUrl(p.projectUrl);
    host.replaceChildren();

    // 1. Satu gambar utama dengan rasio 3:4
    const imageWrap = document.createElement("div");
    imageWrap.className = "dialog-image-wrap";
    const image = document.createElement("img");
    image.className = "dialog-hero-image";
    image.src = p.image || "assets/images/image-placeholder.svg";
    image.alt = p.alt || p.title;
    image.loading = "eager";
    imageFallback(image, p.title);
    imageWrap.append(image);
    host.append(imageWrap);

    // 2. Judul proyek dan metadata
    const heading = document.createElement("div");
    heading.className = "dialog-heading";
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = `${p.category || "PROJECT"} / ${p.year || "—"}`;
    const title = document.createElement("h2");
    title.id = "dialog-title";
    title.textContent = p.title;
    heading.append(eyebrow, title);
    host.append(heading);

    const details = document.createElement("div");
    details.className = "dialog-details";
    [["ROLE", p.role || "—"], ["TOOLS", (p.tools || []).join(", ") || "—"], ["CLIENT", p.client || "—"]].forEach(([label, value]) => {
      const box = document.createElement("div");
      const l = document.createElement("span");
      l.className = "dialog-detail-label";
      l.textContent = label;
      const v = document.createElement("span");
      v.className = "dialog-detail-value";
      v.textContent = value;
      box.append(l, v);
      details.append(box);
    });
    host.append(details);

    // 3. Deskripsi lengkap proyek di bawah gambar & informasi
    const description = document.createElement("p");
    description.className = "dialog-description";
    description.textContent = p.fullDescription || p.description || "Deskripsi proyek belum ditambahkan.";
    host.append(description);

    if (projectUrl) {
      const link = document.createElement("a");
      link.className = "dialog-link";
      link.href = projectUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Lihat proyek eksternal ↗";
      host.append(link);
    }

    if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
    $(".dialog-close", dialog)?.focus();
  };

  const closeProject = () => { const dialog = $("#project-dialog"); if (dialog?.open) dialog.close(); state.lastFocused?.focus?.(); };
  const openLightbox = (images, index, caption) => {
    state.lightboxImages = images; state.lightboxIndex = index; state.lightboxCaption = caption;
    updateLightbox();
    const dialog = $("#image-dialog"); if (typeof dialog?.showModal === "function") dialog.showModal(); else dialog?.setAttribute("open", "");
  };
  const updateLightbox = () => {
    const img = $("#lightbox-image"), cap = $("#lightbox-caption"); if (!img) return;
    img.src = state.lightboxImages[state.lightboxIndex] || "assets/images/image-placeholder.svg"; img.alt = `${state.lightboxCaption || "Gambar"} — ${state.lightboxIndex + 1}`;
    if (cap) cap.textContent = `${state.lightboxCaption || "Pratinjau"} · ${state.lightboxIndex + 1}/${state.lightboxImages.length}`;
    const multi = state.lightboxImages.length > 1; $(".lightbox-prev").hidden = !multi; $(".lightbox-next").hidden = !multi;
  };
  const stepLightbox = direction => { if (!state.lightboxImages.length) return; state.lightboxIndex = (state.lightboxIndex + direction + state.lightboxImages.length) % state.lightboxImages.length; updateLightbox(); };
  const init = () => {
    state.visibleCount = getPageSize();
    renderFilters(); renderGrid();
    $("#project-search")?.addEventListener("input", e => { state.query = e.target.value.trim(); state.visibleCount = getPageSize(); renderGrid(); });
    $("#sort-projects")?.addEventListener("change", e => { state.sort = e.target.value; renderGrid(); });
    $("#load-more")?.addEventListener("click", () => { state.visibleCount += getPageSize(); renderGrid(); });
    $$(".dialog-close", $("#project-dialog")).forEach(btn => btn.addEventListener("click", closeProject));
    $("#project-dialog")?.addEventListener("click", e => { if (e.target === e.currentTarget) closeProject(); });
    $("#image-dialog .image-dialog-close")?.addEventListener("click", () => $("#image-dialog").close());
    $("#image-dialog")?.addEventListener("click", e => { if (e.target === e.currentTarget) e.currentTarget.close(); });
    $(".lightbox-prev")?.addEventListener("click", () => stepLightbox(-1)); $(".lightbox-next")?.addEventListener("click", () => stepLightbox(1));
    document.addEventListener("keydown", e => { if ($("#image-dialog")?.open && e.key === "ArrowLeft") stepLightbox(-1); if ($("#image-dialog")?.open && e.key === "ArrowRight") stepLightbox(1); });
    document.addEventListener("portfolio:open-lightbox", e => openLightbox(e.detail.images, e.detail.index || 0, e.detail.caption || ""));
  };
  window.PortfolioUI = { openProject, openLightbox, getSafeUrl: safeUrl, escapeHtml: esc };
  document.addEventListener("DOMContentLoaded", init);
})();
