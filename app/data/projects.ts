export type ProjectLinks = {
  repository?: string
  website?: string
  aplikasi?: string
}

export type Project = {
  slug: string
  name: string
  category: string
  summary: string
  headline: string
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
  links?: ProjectLinks
}

export const projects: Project[] = [
  {
    slug: 'snapcal-vision-ai',
    name: 'SnapCal Vision AI',
    category: 'Android • Computer Vision',
    summary: 'AI-assisted food logging untuk mempercepat dan menyederhanakan pencatatan kalori.',
    headline: 'SnapCal mengotomatisasi pencatatan kalori lewat identifikasi visual, memangkas proses manual yang membosankan menjadi satu langkah mudah.',
    description:
      'SnapCal dirancang untuk mengurangi friksi dalam proses pencatatan nutrisi harian. Sistem ini menggunakan model computer vision untuk mengidentifikasi makanan dari gambar, lalu memanfaatkan AI API untuk menghasilkan estimasi nutrisi berbasis konteks. Pipeline backend mengelola proses inferensi, normalisasi data, dan penyimpanan sehingga alur input menjadi lebih cepat dan tetap fleksibel untuk koreksi oleh pengguna.',
    year: '2025',
    status: 'Live prototype',
    role: 'AI integration, backend architecture, mobile flow',
    techStack: ['Express.js', 'FastAPI', 'Gemini AI', 'YOLO', 'Android', 'MongoDB', 'Firebase'],
    highlights: [
      'Identifikasi makanan berbasis computer vision (YOLO) dari input gambar',
      'Estimasi nutrisi menggunakan AI dengan konteks tambahan dari pengguna',
      'Pipeline backend untuk orkestrasi inferensi dan penyimpanan data',
      'User-driven correction untuk meningkatkan akurasi data logging',
    ],
    metrics: [
      { label: 'Fokus', value: 'Reducing input friction' },
      { label: 'Approach', value: 'AI-assisted estimation' },
      { label: 'System', value: 'Vision + LLM pipeline' },
    ],
    cover: '/projects/snapcal/s6.png',
    gallery: ['/projects/snapcal/s1.png', '/projects/snapcal/s2.png', '/projects/snapcal/s3.png', '/projects/snapcal/s4.png', '/projects/snapcal/s5.png'],
    accent: 'from-purple-500/20 to-fuchsia-500/10',
    links: {
      repository: 'https://github.com/farelyudapratama/snapcal-firebase-gemini',
      website: 'https://snapcal.yudev.my.id',
    },
  },
  {
    slug: 'apothecary-system',
    name: 'Apothecary System',
    category: 'Web / Mobile • Healthcare',
    summary: 'Digitalisasi inventaris dan transaksi apotek terpusat dengan dukungan AI.',
    headline: 'Sistem manajemen apotek yang terintegrasi dengan AI untuk operasional lebih rapi dan efisien.',
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
    cover: '/images/blog/cover-ai-bisnis.png',
    gallery: ['/projects/ismine/l1.jpg', '/projects/ismine/l2.jpg', '/projects/ismine/l3.webp'],
    accent: 'from-emerald-500/20 to-lime-500/10',
    links: {
      repository: 'https://github.com/yourusername/apothecary-system',
    },
  },
  {
    slug: 'stockup-inventory',
    name: 'Stockup Inventory',
    category: 'Web App • Inventory',
    summary: 'Sistem stok modern dengan pelacakan real-time untuk gudang dan retail.',
    headline: 'Dashboard inventori yang cepat dan akurat untuk operasional retail dan gudang.',
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
    links: {
      website: 'https://stockup.example.com',
      repository: 'https://github.com/yourusername/stockup',
    },
  },
  {
    slug: 'aturdana-landing-system',
    name: 'Aturdana',
    category: 'Landing Page • Business',
    summary: 'Landing page yang disusun untuk presentasi brand dan konversi cepat.',
    headline: 'Wajah digital Aturdana yang ringkas, meyakinkan, dan fokus ke konversi.',
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
    links: {
      website: 'https://aturdana.com',
      repository: 'https://github.com/yourusername/aturdana',
    },
  },
  {
    slug: 'media-cms',
    name: 'Media CMS',
    category: 'Web • Headless CMS',
    summary: 'Headless CMS berbasis Next.js dengan workflow editorial untuk tim penulis dan editor.',
    headline: 'Media CMS menyediakan platform manajemen konten dengan alur review terstruktur dari draft hingga publikasi.',
    description:
      'Media CMS dirancang sebagai platform headless content management yang mendukung kolaborasi tim editorial. Sistem ini menerapkan role-based access control (WRITER, EDITOR, ADMIN) dengan workflow artikel yang ketat: draft -> review -> publish. Backend menggunakan Next.js App Router dengan API routes berbasis cookie session, database SQLite via Prisma ORM, dan rich text editor TipTap. Frontend publik mengonsumsi konten melalui JSON API endpoints yang terpisah dari dashboard admin.',
    year: '2026',
    status: 'Active development',
    role: 'Full-stack architecture, API design, workflow system',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'SQLite', 'TipTap', 'Tailwind CSS 4', 'Zod'],
    highlights: [
      'Role-based workflow: WRITER -> EDITOR -> ADMIN dengan akses terdiferensiasi',
      'Session-based authentication via httpOnly cookie, tanpa JWT',
      'Public JSON API untuk frontend consumption dengan pagination dan search',
      'Rich text content stored as HTML dari TipTap editor',
      'Auto-slug generation dengan uniqueness enforcement',
      'Dashboard server-first: server components untuk rendering, client components untuk interaktivitas',
    ],
    metrics: [
      { label: 'Roles', value: '3 (Writer, Editor, Admin)' },
      { label: 'Approach', value: 'Server-first headless CMS' },
      { label: 'Database', value: 'SQLite + Prisma ORM' },
    ],
    cover: '/projects/media-cms/dashboard.png',
    gallery: [
      '/projects/media-cms/article-editor.png',
      '/projects/media-cms/article-workspace.png',
    ],
    accent: 'from-emerald-500/20 to-teal-500/10',
    links: {
      repository: 'https://github.com/username/media-cms',
    },
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
