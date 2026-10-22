# Panduan Kustomisasi Website

Semua konten utama diatur melalui `assets/js/data.js`. Anda tidak perlu mengubah kode JavaScript untuk mengedit konten sehari-hari.

> **Sebelum publikasi:** entri proyek, pengalaman, dan sertifikat berawalan `sample` atau `demo` adalah contoh visual. Ganti dengan data nyata atau ubah `visible: false`. Jangan menampilkan contoh seolah-olah merupakan pengalaman profesional Anda.

## 1. Mengganti identitas dan hero

Buka `assets/js/data.js`, lalu edit bagian `profile` dan `hero`.

```js
profile: {
  name: "Nama Anda",
  role: "Graphic Designer",
  location: "Pekanbaru, Indonesia",
  description: "Deskripsi profesional Anda.",
  photo: "assets/images/profile.svg",
  specialty: "Branding · Digital · Editorial"
},
hero: {
  eyebrow: "DESIGNER & VISUAL CREATIVE",
  titleLine1: "Ideas made",
  titleLine2: "visually meaningful.",
  description: "Deskripsi singkat pendekatan kreatif Anda.",
  primaryButton: "Jelajahi karya",
  secondaryButton: "Mari berkolaborasi"
},
```

Foto/visual hero saat ini ditampilkan dari `assets/images/hero/hero-art.svg` di HTML. Untuk menggantinya, timpa file tersebut dengan aset Anda memakai nama yang sama, atau ubah atribut `src` di `index.html`. `profile.photo` disiapkan sebagai referensi konfigurasi, namun foto profil bukan elemen hero yang terpisah pada layout awal.

## 2. Menambahkan atau mengubah proyek

Tambahkan objek baru ke array `portfolio`. Gunakan `id` unik untuk setiap proyek.

```js
{
  id: "poster-kampus-2026",
  title: "Poster Acara Kampus",
  category: "Campaign",
  year: "2026",
  description: "Poster promosi acara kampus.",
  fullDescription: "Tujuan, konteks, tantangan, dan solusi desain.",
  image: "assets/images/portfolio/poster-kampus.webp",
  alt: "Poster promosi acara kampus dengan warna biru",
  featured: true,
  visible: true,
  order: 1,
  tools: ["Adobe Photoshop", "Adobe Illustrator"],
  role: "Graphic Design",
  client: "Nama klien (opsional)",
  gallery: ["assets/images/portfolio/poster-kampus-detail.webp"],
  projectUrl: ""
}
```

- **Tambah:** salin objek, tempel di dalam array `portfolio`, dan pastikan ada koma antarobjek.
- **Hapus:** hapus satu objek proyek dari array.
- **Ganti gambar:** letakkan gambar pada `assets/images/portfolio/`, lalu isi `image` dengan path relatif.
- **Galeri:** isi `gallery` dengan daftar path gambar tambahan; jika tidak ada, gunakan `gallery: []`.
- **Unggulan:** `featured: true` menampilkan label Featured pada kartu; `false` menghilangkannya.
- **Kategori:** isi `category`, misalnya `Branding`, `Campaign`, atau kategori baru. Filter dibuat dari daftar kategori dan kategori yang digunakan proyek.
- **Urutan:** angka `order` yang lebih kecil tampil lebih dulu.
- **Sembunyikan:** ubah `visible: true` menjadi `visible: false` agar tidak tampil tanpa menghapus datanya.
- **Tautan:** `projectUrl` boleh kosong. Jika diisi, gunakan URL `https://...`.
- **Kata pencarian:** pencarian memeriksa judul, deskripsi, kategori, dan tools.

## 3. Mengelola sertifikat

Tambahkan objek ke array `certificates`:

```js
{
  id: "sertifikat-desain-2026",
  visible: true,
  order: 1,
  title: "Nama Sertifikat",
  issuer: "Nama lembaga",
  date: "2026",
  expiry: "",
  credentialId: "",
  verifyUrl: "https://example.com/verifikasi",
  image: "assets/images/certificates/sertifikat.webp",
  alt: "Sertifikat pelatihan desain grafis",
  description: ""
}
```

Masukkan gambar ke folder `assets/images/certificates/`. Kartu dan modal detail sertifikat menggunakan rasio F4 landscape (11:7 atau ~1.57:1) dengan `object-fit: contain` sehingga sertifikat tampil utuh tanpa terpotong. `verifyUrl`, `credentialId`, dan `description` bersifat opsional. Untuk menyembunyikan sertifikat, gunakan `visible: false`. Jangan masukkan sertifikat yang tidak benar-benar dimiliki.

## 4. Mengelola pengalaman kerja

Tambahkan objek ke array `experience`:

```js
{
  id: "pengalaman-usti",
  visible: true,
  order: 1,
  logo: "assets/images/experience/usti-logo.svg", // Logo instansi/perusahaan
  company: "Nama perusahaan atau institusi",
  role: "Graphic Designer",
  location: "Pekanbaru, Indonesia",
  start: "2024",
  end: "Sekarang",
  current: true,
  description: "Ringkasan kontribusi dan tanggung jawab.",
  responsibilities: ["Membuat materi visual", "Menjaga konsistensi visual"],
  tools: ["Adobe Photoshop", "Adobe Illustrator"]
}
```

- **Logo instansi (`logo`)**:
  - Letakkan file gambar logo (format `.svg`, `.png`, `.jpg`, atau `.webp`) di dalam folder `assets/images/experience/`.
  - Isi properti `logo` dengan path relatif, misalnya `"assets/images/experience/nama-perusahaan.svg"`.
  - Jika properti `logo` dikosongkan (`logo: ""` atau tidak ditulis) atau gambar gagal dimuat, sistem akan otomatis menampilkan logo placeholder standar (`assets/images/experience/company-placeholder.svg`) yang konsisten tanpa merusak layout.
  - Gambar logo secara otomatis diposisikan dengan `object-fit: contain` sehingga logo dengan bentuk persegi, bulat, ataupun memanjang (horizontal) akan tetap proporsional dan tidak terpotong.
- Isi `current: true` untuk pekerjaan saat ini. Urutan tampilan diatur oleh `order`. Gunakan `visible: false` untuk menyembunyikan entri.

## 5. Mengubah email, WhatsApp, dan media sosial

Di bagian `contact`:

```js
contact: {
  email: "nama@email.com",
  whatsapp: "6281234567890",
  whatsappMessage: "Halo, saya ingin berdiskusi tentang proyek desain.",
  instagram: "https://instagram.com/username",
  linkedin: "https://linkedin.com/in/username",
  behance: "https://behance.net/username",
  dribbble: "",
  emailSubject: "Diskusi proyek desain",
  emailCta: "Start a conversation"
}
```

- WhatsApp harus berupa angka internasional tanpa `+`, spasi, atau tanda hubung. Contoh format: `62812...`.
- Tautan media sosial harus lengkap dengan `https://`.
- Jika email/WhatsApp kosong, tombol terkait tidak akan mengirim pesan. Email menggunakan `mailto:` dan bergantung pada aplikasi email pengunjung.
- WhatsApp membuka aplikasi atau WhatsApp Web dengan pesan awal yang telah disiapkan.
- Form ini tidak menyimpan atau mengirim pesan ke server.

## 6. Mengubah desain

Buka `assets/css/variables.css`:

- `--color-deep-navy`, `--color-midnight`, `--color-lime`: warna utama.
- `--font-body`, `--font-display`: font.
- `--radius-small`, `--radius-medium`, `--radius-large`: kelengkungan sudut.
- `--page-padding`, `--content-width`: jarak tepi dan lebar konten.
- `--duration-fast`, `--duration-normal`, `--duration-reveal`: durasi transisi.
- `--glass-dark`, `--glass-border`: dasar warna permukaan kaca.

Efek blur tambahan berada di `assets/css/layout.css` dan `assets/css/components.css`. Animasi berada di `assets/css/animations.css`.

## 7. Mengatur jumlah proyek dan section kosong

Pada `siteSettings`:

- `projectsPerPage: 6` mengatur jumlah kartu yang ditambahkan setiap kali tombol **Load more** ditekan.
- `showExperienceWhenEmpty: false` menyembunyikan section pengalaman jika tidak ada data.
- `showCertificatesWhenEmpty: false` menyembunyikan section sertifikat jika tidak ada data.
- `contactDescription` mengubah ajakan kontak.
- `title`, `description`, `canonicalUrl`, dan `themeColor` mengatur metadata dasar.

## 8. Mengganti aset

Taruh gambar di folder yang sesuai: `portfolio`, `certificates`, `experience`, atau `hero`. Gunakan nama file sederhana tanpa spasi, misalnya `poster-kampus-2026.webp`. Path relatif dihitung dari lokasi `index.html`, contohnya `assets/images/portfolio/poster-kampus-2026.webp`.

Sediakan teks `alt` yang menjelaskan isi gambar. Website menggunakan fallback jika gambar gagal dimuat. Format WebP direkomendasikan untuk gambar raster; SVG sesuai untuk ilustrasi vektor.

## 9. Menjalankan dan menerbitkan

Buka `index.html` langsung atau gunakan server lokal ringan seperti Live Server di VS Code atau `python -m http.server 8000`. Untuk deployment, unggah seluruh isi folder ke GitHub Pages, Netlify, atau Cloudflare Pages tanpa build command.

Jika sudah menggunakan domain produksi, ganti `example.com` di `robots.txt` dan `sitemap.xml`, lalu isi `canonicalUrl` dengan URL utama website. Periksa hasil deployment dan Console browser setelah perubahan.
