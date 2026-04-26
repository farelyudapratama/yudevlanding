---
title: "Design Token: Strategi Warna yang Tidak Berantakan"
description: "Bagaimana design token membantu tim tetap konsisten tanpa harus meeting setiap ada perubahan warna tombol."
date: "2026-04-21"
cover: "/images/blog/cover-design-token.png"
layout: "editorial"
readingTime: "5 menit"
accent: "design system"
---

# Kenapa Warna Selalu Jadi Masalah?

Setiap proyek yang cukup besar pasti pernah mengalami momen di mana seseorang bertanya: *"Ini pakai warna biru yang mana?"* — lalu tidak ada yang bisa menjawab dengan yakin.

Design token hadir untuk menyelesaikan masalah itu, tanpa memaksamu membuat design system yang terlalu besar.

## Apa Itu Design Token?

Sederhananya, design token adalah **variabel bernama** yang menjadi sumber kebenaran tunggal untuk semua keputusan visual: warna, spacing, border radius, font size.

![Visualisasi design token](/images/blog/cover-design-token.png)
*Token membuat keputusan visual bisa dilacak dan diperbarui di satu tempat.*

> Ketika tombol berubah dari biru ke ungu, kamu cukup mengubah satu file — bukan 47 komponen. Ini bukan soal malas. Ini soal menghormati waktu tim.

## Cara Mulai yang Sederhana

Kamu tidak perlu tool mahal atau setup rumit. Mulai dari ini saja:

```css
:root {
  --color-primary: #6366f1;
  --color-surface: #0f172a;
  --color-text: #e2e8f0;
  --radius-md: 0.75rem;
  --space-unit: 0.5rem;
}
```

Dari sini, semua komponen bisa merujuk ke token yang sama. Ketika brand berubah, kamu hanya perlu mengedit satu file.

## Kapan Harus Naik Level?

**Pertimbangkan upgrade ke token terstruktur** jika:

- Tim sudah lebih dari 3 orang
- Ada lebih dari 2 platform (web + mobile)
- Desainer dan developer mulai punya *bahasa yang berbeda* untuk hal yang sama

### Contoh Struktur Token Berlapis

```json
{
  "color": {
    "brand": {
      "primary": { "value": "#6366f1" },
      "accent": { "value": "#a855f7" }
    },
    "semantic": {
      "success": { "value": "#22c55e" },
      "danger": { "value": "#ef4444" }
    }
  }
}
```

## Penutup

Design token bukan tren sesaat. Ini cara berpikir yang membuat keputusan visual lebih bisa dipertanggungjawabkan — dan lebih mudah berubah ketika bisnis berubah.

*Konsistensi bukan tentang keseragaman yang kaku, tetapi tentang membangun ritme visual yang bisa dipercaya.*
