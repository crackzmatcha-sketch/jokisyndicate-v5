// Edit harga & kontak di sini. Tidak perlu menyentuh komponen lain.

export const WA_NUMBER = "6282319874362";
export const WA_DISPLAY = "+62 823-1987-4362";
export const waLink = (text = "Halo Joki Syndicate, saya mau konsultasi") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const TESTIMONI = "3245+";
export const FREE_REVISI = "1x";

export const MEMBER = {
  price: "Rp400K",
  benefits: ["Potongan harga 10-20% untuk setiap tugas", `Gratis revisi ${FREE_REVISI}`],
};

// price: teks harga. ask: true berarti harga ditanyakan ke admin.
export const CATEGORIES = [
  {
    id: "data",
    label: "Olah Data",
    note: `Gratis revisi ${FREE_REVISI}.`,
    items: [
      { name: "Uji SPSS", desc: "Data mentah", price: "Rp50K" },
      { name: "Full Uji SPSS", desc: "Data 100% valid", price: "Rp80K" },
      { name: "Full Uji + BAB 4", desc: "Uji lengkap dan pembahasan", price: "Rp145K" },
      { name: "Full Uji + BAB 4 & 5", desc: "Uji, pembahasan, kesimpulan", price: "Rp200K" },
      { name: "SmartPLS", desc: "Sesuai kompleksitas model", ask: true },
    ],
  },
  {
    id: "akademik",
    label: "Akademik",
    note: `Gratis revisi ${FREE_REVISI}. Harga akhir menyesuaikan jumlah halaman dan tingkat kesulitan.`,
    items: [
      { name: "Makalah", price: "Rp30K - 40K" },
      { name: "PPT", price: "Rp15K - 30K" },
      { name: "RPP", price: "Rp40K - 50K" },
      { name: "Artikel Ilmiah & Jurnal", price: "Rp40K - 150K" },
      { name: "Laporan PKL", price: "Rp50K" },
      { name: "Laporan Magang", price: "Rp50K" },
      { name: "Cari Jurnal", desc: "Per jurnal", price: "Rp7K" },
      { name: "Ketik / Rangkum", desc: "Per halaman", price: "Rp10K" },
      { name: "Essay", ask: true },
    ],
  },
  {
    id: "skripsi",
    label: "Perskripsian",
    note: `Gratis revisi ${FREE_REVISI}. Butuh BAB 4 dan 5? Lihat paket Olah Data.`,
    items: [
      { name: "BAB 1", desc: "Pendahuluan", price: "Rp150K - 180K" },
      { name: "BAB 2", desc: "Tinjauan pustaka", price: "Rp150K" },
      { name: "BAB 3", desc: "Metodologi", price: "Rp120K" },
      { name: "Revisi Skripsi", desc: "Sesuai catatan dosen", ask: true },
      { name: "Bimbingan Pra-Sidang", desc: "Zoom privat", price: "Rp100K" },
      { name: "Perapian Skripsi", desc: "Format dan tata tulis", price: "Rp5K - 50K" },
    ],
  },
  {
    id: "desain",
    label: "Desain",
    note: `Gratis revisi ${FREE_REVISI}.`,
    items: [
      { name: "CV", price: "Rp20K" },
      { name: "Poster", price: "Rp20K - 50K" },
      { name: "Desain Lainnya", ask: true },
    ],
  },
];

export const SERVICES = [
  { icon: "∑", title: "Olah Data SPSS", text: "Uji validitas, reliabilitas, regresi, dan uji lainnya. SmartPLS sesuai permintaan." },
  { icon: "✎", title: "Tugas Kuliah & Sekolah", text: "Makalah, PPT, RPP, artikel ilmiah, jurnal, laporan PKL dan magang." },
  { icon: "↻", title: "Revisi Tugas", text: "Perbaikan tugas, laporan, dan skripsi sesuai catatan dosen atau guru." },
  { icon: "▤", title: "Penyusunan Skripsi", text: "Open jasa penyusunan skripsi per BAB, plus bimbingan pra-sidang." },
  { icon: "◐", title: "Desain", text: "CV, poster, dan desain lain sesuai kebutuhan." },
];

export const STEPS = [
  { title: "Chat admin", text: "Ceritakan tugasmu lewat WhatsApp." },
  { title: "Dapat estimasi", text: "Kami cek detail tugas, lalu kirim harga." },
  { title: "Sepakati detail", text: "Deadline dan ketentuan disetujui bersama." },
  { title: "Pengerjaan & revisi", text: `Hasil dikirim, gratis revisi ${FREE_REVISI}.` },
];

export const FAQ = [
  { q: "Boleh konsultasi dulu sebelum order?", a: "Boleh. Chat admin lewat WhatsApp, ceritakan kebutuhanmu, lalu kami kasih estimasi." },
  { q: "Bagaimana dengan keamanan file saya?", a: "File hanya dipakai untuk pengerjaan yang disepakati. Hindari mengirim data sensitif yang tidak diperlukan." },
  { q: "Berapa lama pengerjaannya?", a: "Tergantung jenis dan tingkat kesulitan tugas. Lama pengerjaan dibahas saat konsultasi." },
  { q: "Revisi gratis berapa kali?", a: `Semua layanan mendapat gratis revisi ${FREE_REVISI}.` },
  { q: "Apa keuntungan jadi Member?", a: `Dengan biaya ${MEMBER.price}, kamu mendapat potongan harga 10-20% untuk setiap tugas.` },
];

export const SOCIALS = [
  { name: "WhatsApp", handle: WA_DISPLAY, href: `https://wa.me/${WA_NUMBER}` },
  { name: "TikTok", handle: "@jokisyndicate", href: "https://www.tiktok.com/@jokisyndicate" },
  { name: "Instagram", handle: "@joki.syndicate", href: "https://www.instagram.com/joki.syndicate" },
];
