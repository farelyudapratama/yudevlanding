---
title: "30 Hari dari Nol Sampai Live: Timeline Nyata Proyek SaaS Kami"
description: "Bukan tutorial — ini catatan jujur. Termasuk keputusan yang salah, deadline yang nyaris lewat, dan pelajaran yang tidak ada di YouTube."
date: "2026-04-19"
cover: "/images/blog/cover-fullstack.png"
layout: "editorial"
readingTime: "6 menit"
accent: "devops"
---

# 30 Hari, Satu Produk

Ini bukan tutorial. Ini catatan perjalanan — dari ide yang masih samar sampai akhirnya ada orang lain yang benar-benar menggunakan produknya.

## Minggu 1: Sketsa dan Validasi

### Hari 1-3: Coretan di Kertas

Sebelum menyentuh kode, saya menghabiskan tiga hari hanya menggambar alur di kertas. Bukan wireframe cantik — lebih seperti diagram yang hanya saya sendiri yang paham.

Yang dicari bukan solusi sempurna, tapi **pertanyaan yang benar**: siapa yang akan pakai ini, dan apa yang mereka harap terjadi setelah klik pertama?

### Hari 4-7: Prototype Kasar

Buka editor, setup Nuxt, tulis halaman pertama. Tujuannya bukan bikin bagus — tujuannya bikin sesuatu yang bisa diklik dan dinilai.

> Prototipe yang jelek tapi bisa diuji lebih berharga dari mockup yang cantik tapi diam di Figma.


## Minggu 2: Fondasi Teknis

### Hari 8-10: Database & API

Pilih PostgreSQL, buat schema awal, tulis API endpoint pertama. Kunci di fase ini: **jangan overthink normalisasi**. Data bisa diperbaiki nanti, tapi momentum tidak bisa diulang.

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  owner_id UUID REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Hari 11-14: Auth & Middleware

Implementasi JWT + refresh token. Ini bagian yang sering bikin tersandung karena terlihat mudah di tutorial, tapi penuh edge case di dunia nyata.


## Minggu 3: Fitur dan Iterasi

![Proses development](/images/blog/cover-fullstack.png)
*Setiap hari ada keputusan yang harus diambil cepat — bukan karena deadline, tapi karena kalau ditunda, konteksnya hilang.*

> Deploy kecil setiap hari lebih aman daripada deploy besar sekali seminggu. Continuous deployment bukan soal tools — soal kebiasaan.

### Hari 15-21: Fitur Inti

Bangun 3 fitur utama. Masing-masing butuh sekitar 2 hari. Sisa waktu dipakai untuk **testing manual** dan memperbaiki bug yang muncul di flow yang tidak terduga.


## Minggu 4: Polish dan Launch

### Hari 22-27: UI Polish + Error Handling

Fase ini sering diremehkan. Tapi justru di sinilah produk berubah dari *proyek sampingan* menjadi *sesuatu yang bisa dipercaya*.

- Tambahkan loading state di setiap aksi
- Handle semua error API dengan pesan yang manusiawi
- Tes di perangkat mobile sungguhan


### Hari 28-30: Deploy dan Monitoring

Setup CI/CD, konfigurasi domain, pasang monitoring dasar. Lalu duduk dan lihat apakah ada orang yang benar-benar memakainya.


## Pelajaran Paling Mahal dari 30 Hari Ini

Bukan soal teknologi yang dipilih, melainkan kebiasaan yang dibangun. Deploy kecil lebih aman, catatan harian lebih berguna, dan validasi awal lebih penting dari arsitektur sempurna.

30 hari bukan waktu yang lama. Tapi cukup untuk membuktikan bahwa sebuah ide bisa menjadi produk — selama kamu mau berkompromi dengan kesempurnaan demi kecepatan belajar.
