(() => {
  const safeUrl = value => { try { const u = new URL(value); return ["http:", "https:", "mailto:", "tel:"].includes(u.protocol) ? u.href : ""; } catch { return ""; } };
  const init = () => {
    const data = window.PORTFOLIO_DATA || {}; const contact = data.contact || {}; const settings = data.siteSettings || {};
    const description = document.querySelector("[data-contact='description']"); if (description && settings.contactDescription) description.textContent = settings.contactDescription;
    const emailCta = document.getElementById("contact-email-cta");
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email || "");
    if (emailCta) {
      if (validEmail) { emailCta.href = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject || "Diskusi proyek desain")}`; emailCta.textContent = contact.emailCta || "Start a conversation"; const arrow = document.createElement("span"); arrow.textContent = "↗"; emailCta.append(arrow); }
      else { emailCta.href = "#contact-details"; emailCta.addEventListener("click", e => { e.preventDefault(); showToast("Tambahkan alamat email di assets/js/data.js untuk mengaktifkan tautan email."); }); }
    }
    const wa = document.getElementById("contact-whatsapp-cta");
    const phone = String(contact.whatsapp || "").replace(/\D/g, "");
    if (wa && phone) { wa.hidden = false; wa.href = `https://wa.me/${phone}?text=${encodeURIComponent(contact.whatsappMessage || "Halo, saya ingin berdiskusi tentang proyek desain.")}`; wa.target = "_blank"; wa.rel = "noopener noreferrer"; }
    const host = document.getElementById("contact-details"); if (!host) return;
    const items = [];
    if (validEmail) items.push(detail("EMAIL", contact.email, `mailto:${contact.email}`));
    if (phone) items.push(detail("WHATSAPP", `+${phone}`, `https://wa.me/${phone}`));
    const socials = [["Instagram",contact.instagram],["LinkedIn",contact.linkedin],["Behance",contact.behance],["Dribbble",contact.dribbble]].filter(([,url]) => safeUrl(url));
    if (socials.length) {
      const wrapper = document.createElement("div"); wrapper.className = "contact-detail"; const label = document.createElement("span"); label.textContent = "FIND ME ONLINE";
      const group = document.createElement("div"); group.className = "contact-socials";
      socials.forEach(([name,url]) => { const a = document.createElement("a"); a.href = safeUrl(url); a.textContent = name; a.target = "_blank"; a.rel = "noopener noreferrer"; group.append(a); }); wrapper.append(label,group); host.append(wrapper);
    }
    items.forEach(item => host.append(item));
    if (!items.length && !socials.length) { const note = document.createElement("p"); note.className = "muted-small"; note.textContent = "Lengkapi email, WhatsApp, atau media sosial pada assets/js/data.js agar informasi kontak tampil di sini."; host.append(note); }
  };
  function detail(label, value, href) { const box = document.createElement("div"); box.className = "contact-detail"; const l = document.createElement("span"); l.textContent = label; const a = document.createElement("a"); a.textContent = value; a.href = href; if (href.startsWith("https:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; } box.append(l,a); return box; }
  function showToast(message) { const toast = document.getElementById("toast"); if (!toast) return; toast.textContent = message; toast.classList.add("is-visible"); window.setTimeout(() => toast.classList.remove("is-visible"), 3500); }
  document.addEventListener("DOMContentLoaded", init);
})();