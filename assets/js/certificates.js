(() => {
  let lastFocused = null;
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
  const safeUrl = value => {
    if (!value || typeof value !== "string") return "";
    try {
      const u = new URL(value, window.location.href);
      return ["http:", "https:", "mailto:", "tel:"].includes(u.protocol) ? value : "";
    } catch {
      return "";
    }
  };

  const imageFallback = (img, title) => {
    img.addEventListener("error", () => {
      img.src = "assets/images/image-placeholder.svg";
      img.alt = title ? `Gambar tidak tersedia: ${title}` : "Gambar tidak tersedia";
      img.dataset.fallback = "true";
    }, { once: true });
  };

  const init = () => {
    const data = window.PORTFOLIO_DATA || {};
    const settings = data.siteSettings || {};
    const host = document.getElementById("certificate-grid");
    const section = document.getElementById("certificates");
    const dialog = document.getElementById("certificate-dialog");
    const dialogHost = document.getElementById("certificate-dialog-content");

    if (!host || !section) return;

    const list = (Array.isArray(data.certificates) ? data.certificates : []).filter(c => c && c.visible !== false && c.title && c.issuer)
      .sort((a,b) => Number(a.order ?? 999) - Number(b.order ?? 999));

    if (!list.length) {
      if (!settings.showCertificatesWhenEmpty) section.hidden = true;
      else host.innerHTML = '<p class="certificate-empty">Sertifikat akan ditampilkan di sini.</p>';
      return;
    }

    const cardMarkup = c => `
      <article class="certificate-card reveal" tabindex="0" role="button" data-certificate-id="${esc(c.id)}" aria-label="Lihat detail sertifikat ${esc(c.title)}">
        <div class="certificate-image">
          <img src="${esc(c.image || "assets/images/image-placeholder.svg")}" alt="${esc(c.alt || c.title)}" loading="lazy" width="880" height="560">
          <span class="certificate-image-overlay" aria-hidden="true"></span>
          <span class="certificate-open" aria-hidden="true">↗</span>
        </div>
        <div class="certificate-meta">
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.issuer)}${c.date ? " · " + esc(c.date) : ""}</p>
          <div class="certificate-foot">
            <span>${esc(c.credentialId || "CERTIFICATE")}</span>
            <span class="certificate-action">Lihat detail ↗</span>
          </div>
        </div>
      </article>
    `;

    host.innerHTML = list.map(cardMarkup).join("");

    const openCertificate = id => {
      const c = list.find(item => item.id === id);
      if (!c || !dialog || !dialogHost) return;

      lastFocused = document.activeElement;
      const verifyUrl = safeUrl(c.verifyUrl);
      dialogHost.replaceChildren();

      // 1. Gambar sertifikat dengan rasio F4 landscape (11:7)
      const imageWrap = document.createElement("div");
      imageWrap.className = "certificate-dialog-image-wrap";
      const image = document.createElement("img");
      image.className = "certificate-dialog-image";
      image.src = c.image || "assets/images/image-placeholder.svg";
      image.alt = c.alt || c.title;
      image.loading = "eager";
      imageFallback(image, c.title);
      imageWrap.append(image);
      dialogHost.append(imageWrap);

      // 2. Judul sertifikat dan metadata
      const heading = document.createElement("div");
      heading.className = "dialog-heading";
      const eyebrow = document.createElement("p");
      eyebrow.className = "eyebrow";
      eyebrow.textContent = `${c.issuer || "CERTIFICATE"} / ${c.date || "—"}`;
      const title = document.createElement("h2");
      title.id = "certificate-dialog-title";
      title.textContent = c.title;
      heading.append(eyebrow, title);
      dialogHost.append(heading);

      const details = document.createElement("div");
      details.className = "dialog-details";
      [
        ["PENERBIT", c.issuer || "—"],
        ["TANGGAL / TAHUN", c.date || "—"],
        ["ID KREDENSIAL", c.credentialId || "—"]
      ].forEach(([label, value]) => {
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
      dialogHost.append(details);

      // 3. Deskripsi sertifikat (jika ada)
      if (c.description) {
        const description = document.createElement("p");
        description.className = "dialog-description";
        description.textContent = c.description;
        dialogHost.append(description);
      }

      // 4. Tombol verifikasi sertifikat eksternal jika tersedia
      if (verifyUrl) {
        const link = document.createElement("a");
        link.className = "dialog-link";
        link.href = verifyUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Verifikasi sertifikat resmi ↗";
        dialogHost.append(link);
      }

      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      dialog.querySelector(".dialog-close")?.focus();
    };

    const closeCertificate = () => {
      if (dialog?.open) dialog.close();
      lastFocused?.focus?.();
    };

    host.querySelectorAll(".certificate-card").forEach(card => {
      const id = card.dataset.certificateId;
      card.addEventListener("click", () => openCertificate(id));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCertificate(id);
        }
      });
      const img = card.querySelector("img");
      if (img) imageFallback(img, id);
    });

    dialog?.querySelectorAll(".dialog-close").forEach(btn => {
      btn.addEventListener("click", closeCertificate);
    });

    dialog?.addEventListener("click", e => {
      if (e.target === e.currentTarget) closeCertificate();
    });

    document.addEventListener("certificate:open", e => {
      if (e.detail?.id) openCertificate(e.detail.id);
    });

    window.CertificateUI = { openCertificate, closeCertificate };
  };

  document.addEventListener("DOMContentLoaded", init);
})();
