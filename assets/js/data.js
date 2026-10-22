/*
 * PUSAT KUSTOMISASI WEBSITE — edit data di file ini saja untuk mengganti konten.
 * 1) Identitas: ubah profile.name, role, location, description, photo, specialty.
 * 2) Proyek: tambahkan objek baru ke portfolio atau hapus objek yang tidak diperlukan.
 * 3) Gambar: taruh file di assets/images/ lalu isi path relatif, mis. assets/images/portfolio/karya.webp.
 * 4) Unggulan: set featured: true untuk proyek pilihan.
 * 5) Kategori: ubah category pada proyek; kategori filter dibuat otomatis dari proyek yang terlihat.
 * 6) Pengalaman: tambahkan objek ke experience dengan company, role, logo, start, end, description.
 * 7) Sertifikat: tambahkan objek ke certificates dengan title, issuer, date, image, verifyUrl opsional.
 * 8) Kontak: ubah email, whatsapp (format angka internasional tanpa +), dan tautan media sosial.
 * 9) Sembunyikan konten tanpa menghapus: set visible: false.
 * 10) Urutan manual: ubah order (angka kecil tampil lebih dulu). Jika order sama, urutan file dipakai.
 * Gunakan tanda kutip untuk teks. Jangan menghapus koma antarproperti. Isi contoh di bawah adalah demonstrasi visual,
 * bukan klaim pengalaman/sertifikat nyata. Ganti atau hapus sebelum menerbitkan website.
 */
window.PORTFOLIO_DATA = {
  siteSettings: {
    title: "Dimas Pratama — Graphic Designer",
    description: "Portofolio desain grafis dan karya visual Dimas Pratama.",
    canonicalUrl: "",
    themeColor: "#0b1220",
    showExperienceWhenEmpty: false,
    showCertificatesWhenEmpty: false,
    projectsPerPage: 12,
    contactDescription: "Punya ide, proyek, atau cerita yang ingin diwujudkan? Mari mulai percakapan."
  },
  profile: {
    name: "Dimas Pratama",
    logo: "assets/images/logo.png",
    role: "Graphic Designer",
    location: "Pekanbaru, Indonesia",
    description: "Desainer grafis yang tertarik pada komunikasi visual, identitas, dan karya digital yang memiliki tujuan.",
    photo: "assets/images/profile.svg",
    specialty: "Branding · Digital · Editorial"
  },
  hero: {
    eyebrow: "DESIGNER & VISUAL CREATIVE",
    titleLine1: "Ideas made",
    titleLine2: "visually meaningful.",
    description: "Saya merancang visual yang jernih, berkarakter, dan memiliki tujuan — dari identitas brand hingga komunikasi digital.",
    primaryButton: "Jelajahi karya",
    secondaryButton: "Mari berkolaborasi"
  },
  categories: ["Social Media Design", "Logo Design", "Art Design"],
  portfolio: [
    // ======================== 01
    { id: "sm-porto-01", title: "Social Media Design 01", category: "Social Media Design", year: "2026", description: "", fullDescription: "", image: "assets/images/portfolio/usti-01.jpg", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Universitas Sains dan Teknologi Indonesia", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-02", title: "Social Media Design 02", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-01.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Pondok Pesantren Daarut Taukhid Al Maktub", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-03", title: "Social Media Design 03", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/usti-03.jpg", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Universitas Sains dan Teknologi Indonesia", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-04", title: "Social Media Design 04", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-02.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Pondok Pesantren Daarut Taukhid Al Maktub", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-05", title: "Social Media Design 05", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/usti-05.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Universitas Sains dan Teknologi Indonesia", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-06", title: "Social Media Design 06", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-03.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Pondok Pesantren Daarut Taukhid Al Maktub", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-07", title: "Social Media Design 07", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/usti-04.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Universitas Sains dan Teknologi Indonesia", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-08", title: "Social Media Design 08", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-05.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Pondok Pesantren Daarut Taukhid Al Maktub", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-09", title: "Social Media Design 09", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/usti-06.jpg", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Universitas Sains dan Teknologi Indonesia", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-10", title: "Social Media Design 10", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-04.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Pondok Pesantren Daarut Taukhid Al Maktub", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-11", title: "Social Media Design 11", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/usti-02.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Universitas Sains dan Teknologi Indonesia", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    { id: "sm-porto-12", title: "Social Media Design 12", category: "Social Media Design", year: "2026", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-06.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "Pondok Pesantren Daarut Taukhid Al Maktub", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    // ======================== 02
    { id: "l-porto-01", title: "Lorem Ipsum", category: "Social Media Design", year: "2024", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-06.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" },
    // ======================== 03
    { id: "a-porto-01", title: "Lorem Ipsum", category: "Social Media Design", year: "2024", description: "", fullDescription: "Lorem Ipsum", image: "assets/images/portfolio/dta-06.png", alt: "Lorem Ipsum", featured: false, visible: true, order: 1, tools: ["Adobe Photoshop"], role: "Graphic Design", client: "", gallery: ["assets/images/portfolio/project-04-detail.svg"], projectUrl: "" }
  ],
  experience: [
    { id: "exp-01", visible: true, order: 1, logo: "assets/images/experience/logo-usti.png", company: "Universitas Sains dan Teknologi Indonesia — Full Time", role: "Staf Media", location: "Pekanbaru, Indonesia", start: "Nov 2024", end: "Sekarang", current: true,
      description: "Bertanggung jawab atas kebutuhan desain, publikasi, dan dokumentasi Universitas Sains dan Teknologi Indonesia. Membuat konten media sosial, materi promosi cetak, serta mendokumentasikan berbagai kegiatan kampus.",
      responsibilities: ["", ""], tools: ["Adobe Photoshop", "Adobe Illustrator", "Corel Draw"] },

    { id: "exp-02", visible: true, order: 1, logo: "assets/images/experience/logo-dta.png", company: "Pondok Pesantren Daarut Taukhid Al Maktub — Remote", role: "Graphic Designer", location: "Pekanbaru, Indonesia", start: "Jan 2025", end: "Sekarang", current: true,
      description: "Bertanggung jawab memenuhi kebutuhan desain grafis Pondok Pesantren Daarut Taukhid Al Maktub, meliputi pembuatan konten media sosial untuk promosi, branding, dan informasi kegiatan, serta materi desain cetak seperti spanduk, banner, baliho, dan merchandise. Menghasilkan desain yang kreatif, komunikatif, dan sesuai kebutuhan publikasi.",
      responsibilities: ["", ""], tools: ["Adobe Photoshop", "Adobe Illustrator", "Corel Draw"] },

    { id: "exp-03", visible: true, order: 1, logo: "assets/images/experience/logo-macc.png", company: "Marketing, Admission, and career Centre USTI — Internship", role: "System Developer and Social Media Specialist", location: "Pekanbaru, Indonesia", start: "Aug 2025", end: "Sep 2025", current: false,
      description: "Bertanggung jawab dalam perancangan dan pengembangan sistem manajemen konten berbasis web di Universitas Sains dan Teknologi Indonesia, meliputi analisis kebutuhan, desain antarmuka, pengembangan fitur, pengelolaan basis data, dan implementasi sistem. Selain itu, turut memproduksi konten visual untuk media sosial guna mendukung promosi, branding, dan publikasi informasi kampus.",
      responsibilities: ["", ""], tools: ["Figma", "HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"] }
  ],
  certificates: [
    { id: "cert-01", visible: true, order: 1, title: "Graphic Design Professional Skill", issuer: "MySkill", date: "10 October 2026", expiry: "", credentialId: "MS-20261010-1XcqsRrmceUxdbWrpmra", verifyUrl: "", image: "assets/images/certificates/cert-01.jpg", alt: "", description: "" },
    { id: "cert-02", visible: true, order: 1, title: "Adobe Photoshop", issuer: "MySkill", date: "03 October 2026", expiry: "", credentialId: "MS-20261003-ltbEde5WWX1rWDtJIYnE", verifyUrl: "", image: "assets/images/certificates/cert-02.jpg", alt: "", description: "" },
    { id: "cert-03", visible: true, order: 1, title: "Adobe Ilustrator", issuer: "MySkill", date: "10 October 2026", expiry: "", credentialId: "MS-20261010-BcRRM980K1FOazC8zuj6", verifyUrl: "", image: "assets/images/certificates/cert-03.jpg", alt: "", description: "" },
    { id: "cert-04", visible: true, order: 1, title: "MACC Internship", issuer: "MACC", date: "14 August 2026", expiry: "", credentialId: "160/MACC/USTI/VIII/2026", verifyUrl: "", image: "assets/images/certificates/cert-04.jpg", alt: "", description: "" },
    { id: "cert-05", visible: true, order: 1, title: "UKM KERTAS", issuer: "KERTAS", date: "01 November 2024", expiry: "", credentialId: "248.KERTAS.IX.24", verifyUrl: "", image: "assets/images/certificates/cert-05.jpg", alt: "", description: "" },
    { id: "cert-06", visible: true, order: 1, title: "Conference Committee", issuer: "INTI International University & Collages", date: "29 October 2025", expiry: "", credentialId: "", verifyUrl: "", image: "assets/images/certificates/cert-06.jpg", alt: "", description: "" }
  ],
  contact: {
    email: "pratama.d.must@gmail.com",
    whatsapp: "6282297677707",
    whatsappMessage: "Halo Dimas, saya tertarik untuk berdiskusi tentang proyek desain.",
    instagram: "https://instagram.com/____pratama_",
    linkedin: "https://www.linkedin.com/in/dimas-pratama-63a6a92b8/",
    behance: "",
    dribbble: "",
    emailSubject: "Diskusi proyek desain",
    emailCta: "Start a conversation"
  }
};