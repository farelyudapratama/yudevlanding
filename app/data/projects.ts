export type Project = {
  slug: string
  name: string
  category: string
  summary: string
  description: string
  year: string
  status: string
  role: string
  techStack: string[]
  highlights: string[]
  metrics: Array<{ label: string; value: string }>
  cover: string
  gallery: string[]
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'snapcal-vision-ai',
    name: 'SnapCal Vision AI',
    category: 'Android • Computer Vision',
    summary: 'Automasi ekstraksi data nutrisi untuk mempercepat pencatatan kalori harian.',
    description:
      'SnapCal dibuat untuk mengurangi pekerjaan input manual pada alur pencatatan nutrisi. Sistem ini menggabungkan model computer vision dan pipeline API agar data dari makanan bisa diproses lebih cepat, lebih konsisten, dan lebih mudah dipakai tim operasional.',
    year: '2025',
    status: 'Live prototype',
    role: 'AI integration, backend, UI flow',
    techStack: ['Express.js', 'FastAPI', 'Gemini AI', 'YOLO11', 'Android'],
    highlights: [
      'Ekstraksi data nutrisi dari foto makanan',
      'Workflow yang mengurangi proses input manual',
      'Integrasi API untuk validasi dan pemrosesan data',
    ],
    metrics: [
      { label: 'Fokus', value: 'Efisiensi data entry' },
      { label: 'Output', value: 'Proses lebih cepat' },
      { label: 'Stack', value: 'AI + mobile' },
    ],
    cover: '/projects/snapcal/s1.png',
    gallery: ['/projects/snapcal/arsisnapcal.png', '/projects/snapcal/s1.png', '/projects/snapcal/s2.png'],
    accent: 'from-purple-500/20 to-fuchsia-500/10',
  },
  {
    slug: 'apothecary-system',
    name: 'Apothecary System',
    category: 'Web / Mobile • Healthcare',
    summary: 'Digitalisasi inventaris dan transaksi apotek terpusat dengan dukungan AI.',
    description:
      'Apothecary System dirancang untuk membantu operasional apotek berjalan lebih rapi, mulai dari stok, transaksi, hingga rekomendasi farmasi. Fokusnya ada pada akses data yang cepat, tampilan yang mudah dipakai, dan alur kerja yang stabil untuk tim lapangan.',
    year: '2025',
    status: 'Internal deployment',
    role: 'Product flow, system logic, UI implementation',
    techStack: ['Flutter', 'Laravel', 'Firebase', 'AI Assistant'],
    highlights: [
      'Manajemen stok dan transaksi yang terpusat',
      'Tampilan mobile-friendly untuk operasional harian',
      'Struktur data yang siap dikembangkan lebih lanjut',
    ],
    metrics: [
      { label: 'Fokus', value: 'Operasional rapi' },
      { label: 'Output', value: 'Lebih terkontrol' },
      { label: 'Stack', value: 'Mobile + backend' },
    ],
    cover: '/images/blog/cover-fullstack.png',
    gallery: ['/projects/ismine/l1.jpg', '/projects/ismine/l2.jpg', '/projects/ismine/l3.webp'],
    accent: 'from-emerald-500/20 to-lime-500/10',
  },
  {
    slug: 'stockup-inventory',
    name: 'Stockup Inventory',
    category: 'Web App • Inventory',
    summary: 'Sistem stok modern dengan pelacakan real-time untuk gudang dan retail.',
    description:
      'Stockup dibuat untuk mengganti pencatatan stok yang lambat dan rawan salah. Dengan dashboard yang bersih, kontrol data yang lebih terpusat, dan alur operasional yang ringkas, tim bisa memantau inventori dengan lebih cepat.',
    year: '2024',
    status: 'Production ready',
    role: 'Dashboard build, CRUD, data workflow',
    techStack: ['Vue.js', 'Express.js', 'MongoDB', 'Tailwind'],
    highlights: [
      'Dashboard inventori yang responsif',
      'Pengelolaan data stok lebih cepat',
      'Cocok untuk operasional retail dan gudang',
    ],
    metrics: [
      { label: 'Fokus', value: 'Akurasi data' },
      { label: 'Output', value: 'Lebih stabil' },
      { label: 'Stack', value: 'Web app' },
    ],
    cover: '/projects/stockup/stockup-1.png',
    gallery: ['/projects/stockup/stockup-1.png', '/projects/stockup/stockup-2.png', '/projects/stockup/stockup-3.png'],
    accent: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    slug: 'aturdana-landing-system',
    name: 'Aturdana',
    category: 'Landing Page • Business',
    summary: 'Landing page yang disusun untuk presentasi brand dan konversi cepat.',
    description:
      'Aturdana difokuskan sebagai wajah digital yang ringkas namun meyakinkan. Struktur konten, visual, dan call-to-action dirancang agar calon pengguna cepat memahami nilai utama layanan dan masuk ke jalur kontak yang tepat.',
    year: '2024',
    status: 'Published',
    role: 'UI direction, responsive layout, conversion flow',
    techStack: ['Nuxt', 'Tailwind', 'Nuxt UI'],
    highlights: [
      'Tampilan brand yang lebih solid',
      'Struktur konten yang cepat dibaca',
      'CTA dibuat fokus ke konversi',
    ],
    metrics: [
      { label: 'Fokus', value: 'Awareness' },
      { label: 'Output', value: 'Konversi cepat' },
      { label: 'Stack', value: 'Landing page' },
    ],
    cover: '/projects/aturdana/turdan1.png',
    gallery: ['/projects/aturdana/turdan2.png', '/projects/aturdana/turdan3.png', '/projects/aturdana/turdan4.png'],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    slug: 'listnime-catalog',
    name: 'Listnime',
    category: 'Catalog • Product',
    summary: 'Katalog visual yang menonjolkan struktur konten dan eksplorasi yang rapi.',
    description:
      'Listnime dirancang untuk menampilkan data dan katalog dengan cara yang mudah dinavigasi. Fokusnya adalah keterbacaan, ritme visual, dan pengalaman menjelajah yang tidak melelahkan pengguna.',
    year: '2024',
    status: 'UI concept',
    role: 'Catalog layout, visual rhythm, responsive polish',
    techStack: ['Vue', 'Nuxt UI', 'Responsive CSS'],
    highlights: [
      'Penataan visual yang lebih rapi',
      'Mudah dijelajahi di mobile',
      'Cocok untuk katalog atau listing',
    ],
    metrics: [
      { label: 'Fokus', value: 'Keterbacaan' },
      { label: 'Output', value: 'Eksplorasi mudah' },
      { label: 'Stack', value: 'Catalog UI' },
    ],
    cover: '/projects/listnime/la1.png',
    gallery: ['/projects/listnime/la2.png', '/projects/listnime/la1.png', '/projects/listnime/la2.png'],
    accent: 'from-sky-500/20 to-teal-500/10',
  },
  {
    slug: 'pslnot-productivity',
    name: 'PSL Not',
    category: 'Utility • Productivity',
    summary: 'Aplikasi utility sederhana untuk membantu alur kerja lebih cepat.',
    description:
      'PSL Not dibuat sebagai utilitas yang langsung ke inti kebutuhan. Pendekatan desainnya minimal, fokus ke kecepatan akses, dan menghindari distraksi visual yang tidak perlu.',
    year: '2023',
    status: 'Prototype',
    role: 'Feature shaping, UI system, quick interactions',
    techStack: ['Nuxt', 'Tailwind', 'Utility-first UI'],
    highlights: [
      'Ringan dan cepat dipakai',
      'UI dibuat minimal untuk produktivitas',
      'Struktur sederhana, mudah diperluas',
    ],
    metrics: [
      { label: 'Fokus', value: 'Produktivitas' },
      { label: 'Output', value: 'Lebih ringkas' },
      { label: 'Stack', value: 'Utility app' },
    ],
    cover: '/projects/pslnot/1.png',
    gallery: ['/projects/pslnot/2.png', '/projects/pslnot/3.png', '/projects/pslnot/1.png'],
    accent: 'from-stone-500/20 to-neutral-500/10',
  },
]

export const projectCta = {
  headline: 'Punya kebutuhan detail yang lebih spesifik?',
  description:
    'Kami bisa bantu mulai dari pemetaan scope, struktur fitur, sampai penyusunan roadmap implementasi yang realistis.',
  buttonLabel: 'Diskusikan Proyek Anda',
}

export function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug)
}
