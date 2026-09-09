# Interactive Wedding Invitation — "Janji Suci di Tepian Danau Toba"
### Tema: Pernikahan Adat Batak Islam &times; Danau Toba

Website undangan pernikahan digital **immersive, cinematic, interactive, premium, dan responsive** dengan Three.js WebGL fullscreen layered environment, scroll storytelling, YouTube background music API, countdown timer, galeri parallax lightbox, RSVP WhatsApp direct form, dan fitur salin rekening tanda kasih.

---

## 1. Fitur Utama

- **Three.js WebGL World**: Fullscreen 3D world dengan 4 depth layer (Background pegunungan Danau Toba, Mid-background bukit & kabut, Midground Rumah Bolon & Solu boat & wedding arch, Foreground bebatuan & rerumputan Danau Toba).
- **Smooth Scroll Choreography**: Kamera bergerak mulus menelusuri 14 adegan cerita dari pagi berkabut hingga senja di tepian Danau Toba.
- **Atmospheric Fog & Dynamic Lighting**: Perubahan warna dan densitas kabut serta pencahayaan (pagi sejuk &rarr; siang sakral keemasan &rarr; senja terracotta Danau Toba).
- **Animated Lake Water**: Simulasi permukaan air danau yang beriak lembut dan memantulkan kilau cahaya.
- **Golden Light Embers / Particles**: Partikel debu bercahaya dan kelopak bunga melayang dengan level of detail dinamis.
- **YouTube Background Music**: Pemutaran audio tanpa lag/overflow melalui YouTube IFrame API yang aktif saat tamu menekan tombol **BUKA UNDANGAN** dengan floating music controller (ON/OFF).
- **Authentic Cultural Heritage**: Ornamen Batak Gorga (Singa-singa, Boraspati), Tenun Ulos, Rumah Bolon berpadu harmonis dengan ornamen geometris Islam.
- **Fitur Interaktif Tamu**:
  - Countdown timer tersinkronisasi otomatis.
  - RSVP terhubung langsung ke WhatsApp pengantin.
  - Salin nomor rekening 1-klik dengan notifikasi toast.
  - Galeri interaktif dengan mode preview lightbox modal.
  - Petunjuk arah Google Maps.
  - Simpan tanggal ke Google Calendar.
- **100% Static & GitHub Pages Ready**: Siap di-deploy ke GitHub Pages tanpa backend atau database.

---

## 2. Struktur Project

```text
/
├── index.html
├── package.json
├── vite.config.js
│
├── src/
│   ├── main.js
│   │
│   ├── config/
│   │   └── wedding.js              # Pusat konfigurasi semua data pernikahan
│   │
│   ├── three/
│   │   ├── scene.js                # Inisialisasi WebGLRenderer & Scene Three.js
│   │   ├── camera.js               # Choreography kamera & waypoints scroll
│   │   ├── lighting.js             # Ambient, Directional, Hemisphere & Point lights
│   │   ├── environment.js          # Layered parallax environment 3D
│   │   ├── parallax.js             # Micro mouse & touch parallax tracking
│   │   ├── particles.js            # Golden embers & mist particle system
│   │   ├── water.js                # Animated lake water mesh
│   │   ├── fog.js                  # Atmospheric FogExp2 transition
│   │   └── animation.js            # Master requestAnimationFrame loop
│   │
│   ├── sections/
│   │   ├── opening.js              # Scene 01: Hero & Buka Undangan
│   │   ├── quote.js                # Scene 02: QS. Ar-Rum: 21
│   │   ├── couple.js               # Scene 03: Sang Pengantin
│   │   ├── culture.js              # Scene 04: A Journey of Culture
│   │   ├── story.js                # Scene 05: Timeline Kisah Kami
│   │   ├── akad.js                 # Scene 06: Akad Nikah
│   │   ├── reception.js            # Scene 07: Resepsi Adat Batak
│   │   ├── culturalJourney.js      # Scene 08: Cultural Journey
│   │   ├── gallery.js              # Scene 09: Galeri Foto & Lightbox
│   │   ├── countdown.js            # Scene 10: Countdown Timer
│   │   ├── location.js             # Scene 11: Denah Lokasi Maps
│   │   ├── rsvp.js                 # Scene 12: Form RSVP WhatsApp
│   │   ├── gift.js                 # Scene 13: Wedding Gift / Salin Rekening
│   │   └── closing.js              # Scene 14: Penutup & Sunset Danau Toba
│   │
│   ├── music/
│   │   └── youtube.js              # YouTube IFrame Player API controller
│   │
│   ├── styles/
│   │   ├── global.css              # Reset, CSS variables, preloader, canvas
│   │   ├── typography.css          # Serif & Sans typography styling
│   │   ├── navigation.css          # Side dots & floating music button
│   │   ├── sections.css            # Glassmorphism cards & section layouts
│   │   └── responsive.css          # Media queries (Desktop, Tablet, Mobile)
│   │
│   └── utils/
│       ├── animation.js            # Lerp, clamp, smoothstep math utils
│       ├── clipboard.js            # Clipboard copy & toast notifications
│       └── device.js               # Device tier & reduced motion detection
│
├── public/
│   └── assets/
│       ├── environment/            # Danau Toba, Pegunungan, Sunset, Air
│       ├── culture/                # Rumah Bolon, Perahu Solu, Gorga, Ulos
│       ├── nature/                 # Pohon pinus, bebatuan, rerumputan
│       ├── wedding/                # Dekorasi floral & ornamen Islami
│       ├── gallery/                # Foto mempelai & dokumentasi
│       └── decorative/             # SVG dividers & ornamental stars
│
└── .github/
    └── workflows/
        └── deploy.yml              # GitHub Actions automated Pages deployment
```

---

## 3. Cara Menjalankan Project

### A. Development Server
```bash
npm install
npm run dev
```
Buka browser di `http://localhost:3000`.

### B. Build untuk Production
```bash
npm run build
```
File hasil build statis yang siap di-deploy berada di direktori `dist/`.

---

## 4. Cara Deploy ke GitHub Pages

Project ini sudah dilengkapi file workflow otomatis di `.github/workflows/deploy.yml`.

Langkah-langkah:
1. Buat repository baru di GitHub.
2. Push seluruh source code ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Undangan Adat Batak Danau Toba"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
3. Di halaman repository GitHub:
   - Masuk ke **Settings** &rarr; **Pages**.
   - Pada bagian **Build and deployment** &rarr; **Source**, pilih **GitHub Actions**.
4. Website akan otomatis di-build dan tayang di `https://USERNAME.github.io/REPO_NAME/`.

---

## 5. Panduan Kustomisasi Data Pasangan

Semua data tersentralisasi di satu file:
👉 `src/config/wedding.js`

### Mengganti Nama Pasangan & Orang Tua:
```javascript
groom: {
  name: "Muhammad Rizky Siregar, S.T.",
  nickname: "Rizky",
  father: "Bpk. H. Syahrul Siregar",
  mother: "Ibu Hj. Nurhasanah Harahap",
  marga: "Siregar",
  bio: "..."
},
bride: {
  name: "Fathia Annisa Nasution, S.Ked.",
  nickname: "Fathia",
  father: "Bpk. Drs. H. Sofyan Nasution",
  mother: "Ibu Hj. Aminah Lubis",
  marga: "Nasution",
  bio: "..."
}
```

### Mengganti Tanggal & Lokasi Acara:
```javascript
wedding: {
  date: "2026-10-24", // Format YYYY-MM-DD
  day: "Sabtu"
},
akad: {
  venue: "Masjid Raya Al-Mashun Samosir",
  address: "Jl. Putri Lopian, Pangururan, Samosir",
  mapsUrl: "https://maps.google.com/?q=..."
},
reception: {
  venue: "Sopo Bolon Heritage Garden Danau Toba",
  address: "Tuk-Tuk Siadong, Samosir",
  mapsUrl: "https://maps.google.com/?q=..."
}
```

### Mengganti Nomor WhatsApp RSVP:
```javascript
rsvp: {
  whatsapp: "6281234567890" // Gunakan format internasional tanpa tanda +
}
```

### Mengganti Rekening Wedding Gift:
```javascript
gift: {
  bank: "Bank Syariah Indonesia (BSI)",
  accountNumber: "7123456789",
  accountName: "Muhammad Rizky Siregar"
}
```

### Mengganti Musik Latar YouTube:
Cari ID video YouTube (karakter setelah `v=` di URL YouTube), lalu masukkan ke:
```javascript
music: {
  youtubeId: "hTWKbfoikeg",
  autoplayAfterOpening: true,
  loop: true,
  volume: 50
}
```

### Mengganti Foto Galeri & Pasangan:
Cukup gantikan file foto di folder:
- `public/assets/gallery/groom.webp` (Foto Pria)
- `public/assets/gallery/bride.webp` (Foto Wanita)
- `public/assets/gallery/photo-01.webp` s/d `photo-08.webp` (Foto Galeri)
