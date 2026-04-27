<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-post-${route.path}`, () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

useSeoMeta({
  title: `${post.value.title} — YuDev`,
  description: post.value.description
})

const articleTone = computed(() => post.value?.layout || 'editorial')
</script>

<template>
  <main class="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">

    <!-- Spacer divider -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full h-20 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
    </div>

    <!-- Navigation Bar -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 px-5 py-5 sm:px-6 md:px-10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <NuxtLink to="/blog" class="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-white hover:shadow-sm group">
            <Icon name="i-heroicons-arrow-left" class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
            Kembali ke Blog
          </NuxtLink>
        </div>
      </UContainer>
    </div>

    <!-- Article Header -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div class="grid grid-cols-1 md:grid-cols-12">

            <!-- Meta Info Left Sidebar -->
            <div class="md:col-span-4 p-5 sm:p-6 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
              <p class="text-sm uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 font-bold mb-6">Detail Artikel</p>

              <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-5 sm:gap-4 md:gap-5">
                <div v-if="post?.date" class="flex flex-col gap-1">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Tanggal</span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ post.date }}</span>
                </div>
                <div v-if="post?.layout" class="flex flex-col gap-1">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Format</span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white capitalize">{{ post.layout }}</span>
                </div>
                <div v-if="post?.readingTime" class="flex flex-col gap-1">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Estimasi Baca</span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ post.readingTime }}</span>
                </div>
                <div v-if="post?.accent" class="flex flex-col gap-1">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Aksen</span>
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ post.accent }}</span>
                </div>
              </div>
            </div>

            <!-- Title Right Panel -->
            <div class="md:col-span-8 p-5 sm:p-6 md:p-10 lg:p-12 flex flex-col justify-center">
              <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <span class="font-bold capitalize">{{ articleTone }}</span>
              </UBadge>

              <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                {{ post?.title }}
              </h1>
              <p class="mt-4 md:mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-200/80">
                {{ post?.description }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Cover Image -->
    <div v-if="post?.cover" class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 overflow-hidden relative">
          <div class="relative aspect-video md:aspect-21/9">
            <img :src="post.cover" :alt="post.title" class="h-full w-full object-cover" />
            <div class="absolute inset-0 bg-linear-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Article Body -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
          <div class="max-w-3xl mx-auto px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14">
            <ContentRenderer
              v-if="post"
              :value="post"
              class="article-body prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-white prose-blockquote:border-primary-500 prose-blockquote:bg-primary-500/5 prose-blockquote:rounded-2xl prose-blockquote:px-6 prose-blockquote:py-4 prose-hr:border-gray-200 dark:prose-hr:border-gray-700 prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-li:text-gray-600 dark:prose-li:text-gray-400"
            />
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Back to Blog Footer -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative z-10">
      <UContainer>
        <div class="border-x border-gray-200 dark:border-gray-800 px-5 py-6 sm:px-6 sm:py-8 md:px-10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
          <div class="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-linear-to-r from-white/80 via-gray-50/70 to-white/75 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/75 px-5 py-5 sm:px-6 md:px-6 md:py-6">
            <div class="pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full bg-primary-500/10 blur-2xl"></div>
            <div class="pointer-events-none absolute -bottom-16 -left-8 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl"></div>

            <div class="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="max-w-xl">
                <h3 class="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-1">Selesai membaca? Ada lebih banyak lagi.</h3>
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-200/80 leading-relaxed">Lihat artikel lain yang mungkin relevan dengan masalah yang sedang Anda hadapi.</p>
              </div>
              <NuxtLink to="/blog" class="self-start sm:self-auto shrink-0">
                <UButton size="lg" color="primary" class="rounded-xl px-5 sm:px-6 py-3 font-bold tracking-wide whitespace-nowrap">
                  Lihat Semua Artikel
                </UButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Bottom divider -->
    <div class="border-t border-gray-200 dark:border-gray-800 w-full relative">
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>
    </div>

  </main>
</template>

<style scoped>
.article-body :deep(h2) {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgb(229 231 235 / 0.5);
  font-size: 1.75rem;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

:is(.dark) .article-body :deep(h2) {
  border-color: rgb(55 65 81 / 0.5);
}

.article-body :deep(h3) {
  margin-top: 2rem;
  font-size: 1.25rem;
  line-height: 1.25;
}

.article-body :deep(figure) {
  margin: 2.25rem 0;
}

.article-body :deep(img) {
  border-radius: 1rem;
  border: 1px solid rgb(229 231 235 / 0.6);
}

:is(.dark) .article-body :deep(img) {
  border-color: rgb(55 65 81 / 0.6);
}

.article-body :deep(iframe),
.article-body :deep(video) {
  width: 100%;
  min-height: 22rem;
  border: 0;
  border-radius: 1rem;
  background: #f3f4f6;
}

:is(.dark) .article-body :deep(iframe),
:is(.dark) .article-body :deep(video) {
  background: #1f2937;
}

.article-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 1rem;
}

.article-body :deep(th),
.article-body :deep(td) {
  border-color: rgb(229 231 235 / 0.5);
}

:is(.dark) .article-body :deep(th),
:is(.dark) .article-body :deep(td) {
  border-color: rgb(55 65 81 / 0.5);
}

.article-body :deep(pre) {
  border-radius: 1rem;
  border: 1px solid rgb(229 231 235 / 0.5);
  background: rgb(249 250 251 / 0.8);
}

:is(.dark) .article-body :deep(pre) {
  border: 1px solid rgb(55 65 81 / 0.4);
  background: rgb(17 24 39 / 0.8);
}

.article-body :deep(code:not(pre code)) {
  background: rgb(243 244 246 / 0.8);
  border: 1px solid rgb(229 231 235 / 0.5);
  border-radius: 0.375rem;
  padding: 0.125rem 0.375rem;
  font-size: 0.875em;
}

:is(.dark) .article-body :deep(code:not(pre code)) {
  background: rgb(31 41 55 / 0.6);
  border-color: rgb(55 65 81 / 0.5);
}
</style>
