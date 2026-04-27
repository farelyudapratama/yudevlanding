<script setup lang="ts">
import { computed, ref } from 'vue'

const PAGE_SIZE = 6
const INITIAL_BATCH_SIZE = PAGE_SIZE + 1

const { data: initialPosts } = await useAsyncData('blog-list-initial', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .limit(INITIAL_BATCH_SIZE)
    .all()
})

const loadedPosts = ref<any[]>(initialPosts.value ?? [])
const isLoadingMore = ref(false)
const hasMorePosts = ref((initialPosts.value?.length ?? 0) === INITIAL_BATCH_SIZE)
const loadMoreHoverIntent = ref(false)
const loadMoreAnimationState = ref<'idle' | 'entering' | 'filled' | 'leaving'>('idle')

const featuredPost = computed(() => loadedPosts.value[0])

const visiblePosts = computed(() => loadedPosts.value.slice(1))

async function loadMorePosts() {
  if (!hasMorePosts.value || isLoadingMore.value) {
    return
  }

  isLoadingMore.value = true

  const nextBatch = await queryCollection('blog')
    .order('date', 'DESC')
    .skip(loadedPosts.value.length)
    .limit(PAGE_SIZE)
    .all()

  loadedPosts.value = [...loadedPosts.value, ...(nextBatch as any[])]
  hasMorePosts.value = nextBatch.length === PAGE_SIZE
  isLoadingMore.value = false
}

function beginLoadMoreEnter() {
  loadMoreHoverIntent.value = true

  if (loadMoreAnimationState.value === 'idle') {
    loadMoreAnimationState.value = 'entering'
  }

  if (loadMoreAnimationState.value === 'leaving') {
    return
  }
}

function beginLoadMoreLeave() {
  loadMoreHoverIntent.value = false

  if (loadMoreAnimationState.value === 'filled') {
    loadMoreAnimationState.value = 'leaving'
  }
}

function onLoadMoreAnimationEnd() {
  if (loadMoreAnimationState.value === 'entering') {
    loadMoreAnimationState.value = loadMoreHoverIntent.value ? 'filled' : 'leaving'
    return
  }

  if (loadMoreAnimationState.value === 'leaving') {
    loadMoreAnimationState.value = loadMoreHoverIntent.value ? 'entering' : 'idle'
  }
}

const loadMoreButtonTextClass = computed(() => {
  return loadMoreAnimationState.value === 'filled'
    ? 'text-white dark:text-gray-900'
    : 'text-gray-700 dark:text-gray-200'
})

const loadMoreOverlayClass = computed(() => {
  switch (loadMoreAnimationState.value) {
    case 'entering':
      return 'translate-x-0'
    case 'filled':
      return 'translate-x-0'
    case 'leaving':
      return 'translate-x-full'
    default:
      return '-translate-x-full'
  }
})

// Varied micro-copy CTAs based on article accent/layout
const ctaLabels = [
  'Lihat Hasilnya',
  'Pelajari Metodenya',
  'Baca Selengkapnya',
  'Lihat Prosesnya',
  'Temukan Caranya',
  'Lihat Studi Kasusnya',
  'Baca Pengalamannya',
  'Simak Strateginya'
]

function getCtaLabel(index: number): string {
  return ctaLabels[index % ctaLabels.length] ?? 'Baca Selengkapnya'
}

useSeoMeta({
  title: 'Blog — YuDev',
  description: 'Bagaimana kami membantu bisnis berkembang dengan teknologi. Studi kasus, panduan, dan pelajaran dari proyek digital.'
})
</script>

<template>
  <main class="min-h-screen overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">

    <!-- Spacer divider -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
    </div>

    <!-- Header Section -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 px-5 py-10 sm:px-8 md:px-12 md:py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Blog</span>
          </UBadge>

          <h1 class="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Bagaimana kami membantu bisnis <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-emerald-500 dark:from-primary-400 dark:to-emerald-400">berkembang</span> dengan teknologi.
          </h1>
          <p class="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-200/80">
            Studi kasus, panduan praktis, dan pelajaran dari proyek digital — ditulis untuk Anda yang ingin tahu apa yang terjadi di balik layar sebelum mengambil keputusan.
          </p>
        </div>
      </UContainer>
    </div>

    <!-- Featured Post Section -->
    <div v-if="featuredPost" class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <NuxtLink :to="featuredPost.path" class="group grid grid-cols-1 md:grid-cols-12 border-x border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 relative overflow-hidden">

          <!-- Hover gradient overlay -->
          <div class="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <!-- Text Panel -->
          <div class="md:col-span-5 px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12 lg:py-14 flex flex-col justify-center relative z-10">
            <div class="mb-5">
              <span class="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.2em] bg-primary-500 text-white shadow-lg shadow-primary-500/25 px-4 py-1.5 rounded-full">
                Featured
              </span>
            </div>

            <h2 class="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
              {{ featuredPost.title }}
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-200/80 text-sm sm:text-base leading-relaxed max-w-lg">
              {{ featuredPost.description }}
            </p>

            <div class="mt-8">
              <span class="inline-flex items-center gap-2 rounded-full bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 px-5 py-2.5 text-sm font-bold group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                Baca Selengkapnya
                <Icon name="i-heroicons-arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>

          <!-- Image Panel — controlled max height -->
          <div class="md:col-span-7 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 relative min-h-56 sm:min-h-64 md:min-h-72 md:max-h-105">
            <img v-if="featuredPost.cover" :src="featuredPost.cover" :alt="featuredPost.title" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white/20 dark:to-gray-900/30 pointer-events-none" />
          </div>
        </NuxtLink>
      </UContainer>
    </div>

    <!-- All Posts Grid — 2 columns with vertical gap -->
    <div v-if="visiblePosts.length > 0" class="w-full relative">
      <UContainer>
        <div class="border-x border-t border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm relative z-10">
          <div class="blog-grid grid grid-cols-1 md:grid-cols-2">
            <NuxtLink
              v-for="(post, index) in visiblePosts"
              :key="post.path"
              :to="post.path"
              class="group flex flex-col border-b border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 transition-all duration-500 relative overflow-hidden hover:z-20"
            >
              <!-- Hover gradient -->
              <div class="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <!-- Image -->
              <div class="relative z-10 overflow-hidden">
                <div class="relative aspect-16/10">
                  <img v-if="post.cover" :src="post.cover" :alt="post.title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div v-else class="h-full w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Icon name="i-heroicons-document-text" class="w-10 h-10 text-gray-300 dark:text-gray-600" />
                  </div>
                  <div class="absolute inset-0 bg-linear-to-t from-gray-900/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <!-- Content -->
              <div class="px-5 pt-6 pb-3 sm:px-8 sm:pt-8 sm:pb-4 md:px-9 flex-1 flex flex-col relative z-10">
                <div class="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-4">
                  <span v-if="post.date">{{ post.date }}</span>
                </div>

                <h3 class="text-xl sm:text-2xl font-bold leading-snug text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ post.title }}
                </h3>
                <p class="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-500 dark:text-gray-200/70 line-clamp-3 mb-auto">
                  {{ post.description }}
                </p>
              </div>

              <!-- Footer CTA -->
              <div class="px-5 sm:px-8 md:px-9 py-5 sm:py-6 relative z-10 mt-auto border-t border-gray-100 dark:border-gray-800/50">
                <span class="inline-flex items-center gap-2.5 rounded-full border border-primary-200 dark:border-primary-500/30 bg-primary-50/60 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 px-5 py-2 text-sm font-bold group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300">
                  {{ getCtaLabel(index) }}
                  <Icon name="i-heroicons-arrow-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Load more button — fetches next batch on demand -->
    <div v-if="hasMorePosts" class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 overflow-hidden">
          <button
            type="button"
            class="cursor-pointer group relative flex w-full items-center justify-center overflow-hidden rounded-none border-0 bg-transparent px-6 py-5 font-bold transition-colors duration-300"
            :class="loadMoreButtonTextClass"
            :disabled="isLoadingMore"
            @click="loadMorePosts"
            @mouseenter="beginLoadMoreEnter"
            @mouseleave="beginLoadMoreLeave"
          >
            <span
              class="pointer-events-none absolute inset-0 bg-emerald-500 transition-transform duration-500 ease-out"
              :class="loadMoreOverlayClass"
              @transitionend="onLoadMoreAnimationEnd"
            />

            <span class="relative z-10 flex items-center gap-2">
              <Icon name="i-heroicons-arrow-down" class="w-4 h-4" />
              {{ isLoadingMore ? 'Memuat Artikel...' : 'Lihat Semua Artikel' }}
            </span>
          </button>
        </div>
      </UContainer>
    </div>

    <!-- CTA — attract clients -->
    <div v-if="visiblePosts.length > 0" class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 px-5 py-8 sm:px-8 sm:py-10 md:px-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <div class="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-linear-to-r from-white/80 via-gray-50/70 to-white/75 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/75 px-5 py-6 sm:px-8 sm:py-8 md:px-10">
            <div class="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-primary-500/10 blur-2xl"></div>
            <div class="pointer-events-none absolute -bottom-16 -left-8 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl"></div>

            <div class="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div class="max-w-xl">
                <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                  Butuh website yang benar-benar bekerja untuk bisnis Anda?
                </h3>
                <p class="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-200/80">
                  Kami bantu dari konsep sampai live — landing page, web system, hingga integrasi AI. Diskusi awal gratis, tanpa kewajiban.
                </p>
              </div>

              <div class="self-start sm:self-auto shrink-0">
                <UButton
                  size="lg"
                  color="primary"
                  icon="i-logos-whatsapp-icon"
                  class="rounded-xl px-6 py-3 font-bold tracking-wide whitespace-nowrap shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Diskusi Proyek Anda
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Empty state -->
    <div v-if="!visiblePosts.length && !featuredPost" class="border-t border-gray-200 dark:border-gray-800 w-full">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 py-20 text-center text-gray-500 dark:text-gray-400">
          Belum ada artikel yang dipublikasikan.
        </div>
      </UContainer>
    </div>

    <!-- Bottom divider -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full"></div>

  </main>
</template>

<style scoped>

/* Column separator between 2-col items on md+ */
@media (min-width: 768px) {
  .blog-grid > a:nth-child(odd) {
    border-right: 1px solid rgb(229 231 235);
  }
}

:is(.dark) .blog-grid > a:nth-child(odd) {
  border-right-color: rgb(31 41 55);
}
@media (max-width: 767px) {
  .blog-grid > a:nth-child(odd) {
    border-right: none !important;
  }
}
</style>
