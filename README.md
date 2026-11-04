# Portofolio — Prilly Ester Intan Sinaga

Website portofolio satu halaman, dibangun dengan [Astro](https://astro.build)
(situs statis, tanpa server). Tema pink & putih dengan hiasan bunga lily.

## Menjalankan di komputer

Butuh Node.js 22 atau lebih baru.

```bash
npm install
npm run dev      # buka http://localhost:4321
npm run build    # hasil statis di folder dist/
npm run preview  # cek hasil build
```

## Mengubah konten

**Semua teks website ada di satu file:** `src/data/portfolio.ts`.
Ubah isinya, simpan, dan website ikut berubah tanpa menyentuh kode tampilan.

| Bagian website                        | Properti di `portfolio.ts`                          |
| ------------------------------------- | --------------------------------------------------- |
| Nama, role, tagline, kontak, link CV  | `site`                                              |
| Bio, kutipan, kartu info singkat      | `site.bio`, `site.quote`, `site.meta`               |
| Pita skill berjalan                   | `skillsMarquee`                                     |
| Pengalaman                            | `experiences`                                       |
| Tools                                 | `toolkit`                                           |
| Pendidikan                            | `education`                                         |
| Galeri dokumentasi                    | `documentation`                                     |
| Proyek unggulan                       | `featuredWork`                                      |
| Karya lainnya                         | `works`                                             |

Nomor telepon dan akun TikTok bersifat opsional. Kosongkan nilainya
(`phone: ""`) dan bagian itu otomatis tidak tampil.

### Menambah item

Salin satu blok `{ ... }` di dalam daftar yang sama, lalu ubah isinya.
Untuk `works`, `tone` menentukan warna kartu (`blush`, `rose`, `pink`, `ink`, `white`).
Tambahkan `image: "/images/nama-file.jpg"` kalau karya punya thumbnail; tanpa itu
kartu menampilkan nomor besar.

## Mengganti foto dan file

Semua gambar ada di `public/images/` dan dipanggil dengan awalan `/images/`.

| File                      | Dipakai di                              |
| ------------------------- | --------------------------------------- |
| `portrait.jpg`            | Hero dan About                          |
| `beauty-class.jpg`        | Galeri dan proyek unggulan              |
| `binus-untuk-negeri.jpg`  | Galeri                                  |
| `roxst-photoshoot.jpg`    | Galeri                                  |
| `widemoore-live.jpg`      | Galeri                                  |

Cara paling mudah: simpan foto baru dengan **nama file yang sama** untuk menimpa
yang lama. Atau pakai nama baru dan ubah field `image` di `portfolio.ts`.
Gunakan JPG atau WebP, lebar sekitar 1600–1800px, dan di bawah 400 KB per foto
supaya website tetap cepat.

File CV ada di `public/cv-prilly-ester-intan-sinaga.pdf`. Timpa dengan nama
yang sama untuk memperbarui tombol "Unduh CV".

## Struktur project

```
src/
  data/portfolio.ts      # semua konten
  components/            # Hero, About, Experience, Education, Documentation, Works, Contact, Lily
  layouts/Layout.astro   # judul halaman, font, meta
  pages/index.astro      # urutan section
  styles/global.css      # warna, font, tata letak
public/
  images/                # foto
  favicon.svg            # ikon tab (monogram PS)
```

Warna dan font utama ada di bagian `DESIGN TOKENS` paling atas
`src/styles/global.css`.

## Deploy

Website ini statis, jadi bisa di-host gratis di Cloudflare Pages, Netlify, atau Vercel.

- Build command: `npm run build`
- Output directory: `dist`

Setelah repo dihubungkan, setiap perubahan yang di-push ke branch `main`
akan men-deploy ulang otomatis. Kalau memakai domain sendiri, isi `site` di
`astro.config.mjs` dengan alamat lengkapnya (contoh `https://namadomain.com`).
