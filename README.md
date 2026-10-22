# Portfolio Website — Static Graphic Designer

Website portofolio statis dengan HTML, CSS, dan JavaScript vanilla. Tidak membutuhkan backend, database, Node.js, npm, atau proses build.

## Menjalankan secara lokal

1. Ekstrak folder proyek.
2. Buka `index.html` langsung di browser. Untuk hasil yang lebih konsisten, jalankan server statis sederhana:
   - **VS Code:** pasang ekstensi Live Server (opsional), klik kanan `index.html` → **Open with Live Server**.
   - **Python:** buka terminal pada folder proyek lalu jalankan `python -m http.server 8000`, kemudian buka `http://localhost:8000`.
3. Edit konten di `assets/js/data.js`.

## Struktur penting

- `index.html` — struktur semantik halaman.
- `assets/js/data.js` — sumber konfigurasi konten.
- `assets/js/` — interaksi navigasi, galeri, pengalaman, sertifikat, kontak, dan animasi.
- `assets/css/variables.css` — warna, font, radius, easing, durasi, dan lebar konten.
- `assets/images/` — aset gambar lokal.
- `docs/CUSTOMIZATION.md` — panduan kustomisasi terperinci.

## Catatan

Konten proyek/sertifikat yang bertanda demo di konfigurasi hanyalah contoh visual. Ganti dengan karya dan pengalaman sebenarnya atau set `visible: false` / hapus entri sebelum website dipublikasikan. Email dan WhatsApp sengaja kosong agar tidak mengarang informasi kontak.

## Deploy ke static hosting

- **GitHub Pages:** unggah isi folder ke repository, lalu Settings → Pages → pilih branch dan root folder.
- **Netlify / Cloudflare Pages:** unggah folder proyek atau hubungkan repository. Tidak perlu build command; publish directory adalah root proyek.
- Setelah memiliki domain, ganti `example.com` pada `sitemap.xml` dan `robots.txt`, lalu isi `siteSettings.canonicalUrl` di `data.js`.
- Google Fonts digunakan sebagai peningkatan opsional; jika tidak tersedia, font sistem menjadi fallback.

## Pemeriksaan

Periksa Console browser untuk error. Uji filter, pencarian, sorting, pergantian tampilan, detail proyek, modal gambar, menu mobile, dan tautan kontak setelah mengisi data sendiri.
