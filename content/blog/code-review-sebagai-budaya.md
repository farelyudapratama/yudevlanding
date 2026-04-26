---
title: "Code Review Bukan Sekadar Cari Bug"
description: "Tentang budaya code review yang sehat — bukan soal siapa yang salah, tapi bagaimana tim bisa berkembang bersama."
date: "2026-04-18"
cover: ""
layout: "compact"
readingTime: "4 menit"
accent: "engineering culture"
---

# Review yang Membangun

Ada momen yang sering terjadi di tim engineering: seseorang membuat pull request, lalu reviewer langsung mencari yang salah. Hasilnya? Diskusi jadi defensif, dan yang direview merasa dihakimi.

Code review seharusnya bukan sidang, melainkan percakapan.

## Tujuan Sebenarnya

Code review punya tiga tujuan utama:

1. **Menangkap kesalahan logika** sebelum sampai ke production.
2. **Menyebarkan pengetahuan** — reviewer belajar konteks, author belajar perspektif baru.
3. **Menjaga standar** — tapi standar yang disepakati, bukan yang dipaksakan satu orang.

> Review terbaik bukan yang menemukan paling banyak kesalahan, melainkan yang membuat author lebih percaya diri setelahnya.

## Anti-Pattern yang Sering Muncul

### 1. Nitpicking Tanpa Konteks
Mengomentari nama variabel yang kurang sesuai bisa berguna — tapi tidak kalau komentar itu datang tanpa penjelasan *kenapa* nama itu penting, dan diberikan bersamaan dengan 20 komentar serupa.

### 2. Ghosting
Lebih buruk dari komentar kasar adalah tidak ada komentar sama sekali. PR yang dibiarkan berminggu-minggu tanpa review adalah sinyal bahwa kontribusi seseorang tidak dihargai.

### 3. Approval Tanpa Baca
Klik approve tanpa benar-benar membaca kode sama buruknya. Ini bukan review — ini formalitas yang memberi ilusi keamanan.

## Prinsip Review yang Sehat

**Empat prinsip yang membantu:**

- **Mulai dengan apa yang baik** — apresiasi sebelum kritik.
- **Bedakan preferensi dan standar** — kalau hanya soal gaya, tandai sebagai "nit" dan jangan block merge.
- **Tulis komentar seperti saran, bukan perintah** — "Bagaimana kalau..." lebih efektif dari "Harusnya..."
- **Batasi scope review** — fokus pada perubahan yang ada, bukan seluruh arsitektur.

## Soal Tone

Nada tulisan di komentar PR sering disalahartikan karena tidak ada intonasi suara. Beberapa tips:

- Gunakan emoji secukupnya untuk menunjukkan nada (🤔, 👍, 🎉)
- Hindari kalimat imperatif tanpa konteks
- Kalau komentar mulai panjang, pindahkan ke percakapan langsung

## Budaya, Bukan Aturan

Code review yang sehat bukan soal checklist. Ini soal **budaya tim** yang menghargai proses belajar bersama. Tim yang reviewnya menyenangkan cenderung lebih cepat berkembang — bukan karena tidak pernah salah, tapi karena tidak takut untuk mencoba.

---

Satu hal yang selalu saya ingat: code review pertama-tama adalah tentang manusia, baru tentang kode.
