/**
 * ============================================================
 *  SEMUA KONTEN WEBSITE ADA DI FILE INI.
 *  Ganti data di bawah untuk mengubah isi website tanpa
 *  menyentuh layout atau kode komponen.
 * ============================================================
 */

export const site = {
  name: "Prilly Ester Intan Sinaga",
  firstName: "Prilly",
  lastName: "Sinaga",
  initials: "PS",
  role: "Digital Marketing & Event Organizer",
  year: "2026",
  location: "Malang, Indonesia",
  university: "BINUS University @Malang",
  availability: "Terbuka untuk magang 2027",
  tagline:
    "Membangun cerita brand lewat konten, event, dan kehadiran di depan kamera.",
  description:
    "Portofolio Prilly Ester Intan Sinaga — mahasiswa Public Relations BINUS University @Malang yang berfokus pada digital marketing, penyelenggaraan event, dan talent media sosial.",
  email: "prillyesterintansinaga@gmail.com",
  phone: "+62 812 5187 0337",
  cv: "/cv-prilly-ester-intan-sinaga.pdf",
  instagram: {
    handle: "@prillyester_",
    url: "https://www.instagram.com/prillyester_/",
  },
  linkedin: {
    label: "Prilly Ester Intan Sinaga",
    url: "https://www.linkedin.com/in/prilly-ester-intan-sinaga-668a22325",
  },
  tiktok: { handle: "@prellyester", url: "https://www.tiktok.com/@prellyester" },
  bio: [
    "Saya mahasiswa Public Relations di BINUS University @Malang yang berfokus pada digital marketing, penyelenggaraan event, dan talent media sosial. Portofolio ini adalah kumpulan event, konten, dan kampanye yang pernah saya kerjakan.",
    "Saya suka mengerjakan sesuatu dari awal sampai akhir, mulai dari perencanaan dan sponsor hingga pengambilan gambar, penyuntingan, dan publikasi. Saya nyaman bekerja di balik maupun di depan kamera.",
  ],
  quote:
    "Good content tells a story, and a good event makes people feel part of it.",
  meta: [
    { label: "Focus", value: "Digital Marketing & Event Management" },
    { label: "Based in", value: "Malang, Jawa Timur" },
    { label: "Education", value: "BINUS University" },
    { label: "Status", value: "Terbuka untuk magang" },
  ],
};

export const skillsMarquee = [
  "Perencanaan Konten",
  "Konten Media Sosial",
  "Penyuntingan Video",
  "Manajemen Event",
  "Sponsorship",
  "Desain Poster",
  "Live Streaming",
  "Talent On-Camera",
];

export const experiences = [
  {
    role: "Event Organizer",
    org: "Beauty Class with Makeover (proyek Event Management, BINUS)",
    place: "Malang",
    period: "April 2026",
    type: "Event",
    summary:
      "Memimpin event secara mandiri dengan dukungan freelancer: 12 peserta, 8 sponsor (dana tunai Rp3,5 juta), promosi media sosial, dan desain.",
  },
  {
    role: "Talent",
    org: "ROXST Indonesia",
    place: "Malang",
    period: "Nov 2024 — Mei 2026",
    type: "Freelance",
    summary:
      "Tampil dalam kampanye klien, termasuk Yamaha dan Loud.id, serta konten storytelling di media sosial ROXST.",
  },
  {
    role: "Talent",
    org: "WIDEMOORE",
    place: "Malang",
    period: "Mar — Mei 2025",
    type: "Freelance",
    summary:
      "Model foto dan video untuk konten media sosial brand, serta host live streaming.",
  },
  {
    role: "Talent Event",
    org: "BINUS University @Malang",
    place: "Malang",
    period: "2024 — Sekarang",
    type: "Event",
    summary:
      "Wajah kampanye BINUS Untuk Negeri dan talent video promosi berbagai event kampus.",
  },
];

export const toolkit = ["Canva", "CapCut", "Microsoft Office", "Spreadsheets"];

export const education = [
  {
    period: "2024 — Sekarang",
    degree: "Public Relations",
    school: "BINUS University @Malang",
    detail:
      "Mempelajari Public Relations dengan fokus pada digital marketing, konten, dan manajemen event. IPK Kumulatif: 3,39/4,00.",
    tag: "S1",
  },
  {
    period: "2021 — 2024",
    degree: "IPA",
    school: "SMAN 7 Banjarmasin",
    detail:
      "Wakil Ketua Smaven Warrior (organisasi dance) dan Juara 2 Youniverse Dance Competition (Nasional, 2022).",
    tag: "High School",
  },
];

export const documentation = [
  {
    number: "01",
    title: "Beauty Class with Makeover",
    year: "2026",
    image: "/images/beauty-class.jpg",
    alt: "Dokumentasi event Beauty Class with Makeover",
  },
  {
    number: "02",
    title: "BINUS Untuk Negeri",
    year: "2026",
    image: "/images/binus-untuk-negeri.jpg",
    alt: "Dokumentasi kampanye BINUS Untuk Negeri",
  },
  {
    number: "03",
    title: "Pemotretan ROXST Indonesia",
    year: "2024 — 2026",
    image: "/images/roxst-photoshoot.jpg",
    alt: "Sesi pemotretan bersama ROXST Indonesia",
  },
  {
    number: "04",
    title: "Live Streaming WIDEMOORE",
    year: "2025",
    image: "/images/widemoore-live.jpg",
    alt: "Sesi live streaming bersama WIDEMOORE",
  },
];

export type Tone = "blush" | "rose" | "pink" | "ink" | "white";

export const works: {
  number: string;
  category: string;
  title: string;
  year: string;
  tone: Tone;
  url: string;
  // Thumbnail karya (opsional); tanpa gambar, kartu menampilkan nomor.
  image?: string;
}[] = [
  {
    number: "02",
    category: "Social",
    title: "Konten Media Sosial Beauty Class",
    year: "2026",
    tone: "rose",
    url: "https://canva.link/29hffthc1mjz8kn",
  },
  {
    number: "03",
    category: "Design",
    title: "Poster & Banner Beauty Class",
    year: "2026",
    tone: "white",
    url: "https://canva.link/29hffthc1mjz8kn",
  },
  {
    number: "04",
    category: "Campaign",
    title: "Kampanye BINUS Untuk Negeri",
    year: "2025",
    tone: "ink",
    // Reel kedua: https://www.instagram.com/reel/DJjY18nz_nl/
    url: "https://www.instagram.com/reel/DKN-u1sTQCM/",
  },
  {
    number: "05",
    category: "Social",
    title: "Konten Storytelling ROXST & Client",
    year: "2025 — 2026",
    tone: "blush",
    // Loud.id: https://www.instagram.com/reel/DaKR8R2zuYT/
    // Yamaha:  https://www.instagram.com/reel/DDmLgcSTup9/
    url: "https://www.instagram.com/reel/DO3bm4xEUWE/",
  },
];

export const featuredWork = {
  number: "01",
  category: "Penyelenggaraan Event & Konten Digital",
  title: "Beauty Class with Makeover",
  year: "2026",
  description:
    "\"Beauty Class with Makeover\" adalah event kecantikan yang saya selenggarakan sendiri sebagai proyek mata kuliah Event Management. Saya menangani sponsorship dan MoU, promosi di media sosial, desain poster dan banner, hingga pelaksanaan event bersama 12 peserta.",
  stats: ["8 sponsor", "12 peserta", "Rp3,5 juta dana sponsor tunai"],
  // Placeholder; ganti dengan foto/poster Beauty Class dari client.
  image: "/images/beauty-class.jpg",
  alt: "Placeholder: dokumentasi event Beauty Class with Makeover",
  url: "https://canva.link/29hffthc1mjz8kn",
};
