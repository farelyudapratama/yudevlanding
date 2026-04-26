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
  title: post.value.title,
  description: post.value.description
})

const articleTone = computed(() => post.value?.layout || 'editorial')
</script>

<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-10 text-gray-900 dark:text-white">
    <div class="border-t border-gray-200 dark:border-gray-800" />

    <UContainer class="max-w-5xl">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 transition hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-white">
        Kembali ke blog
      </NuxtLink>

      <article class="mt-10 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
        <div v-if="post?.cover" class="relative aspect-video">
          <img :src="post.cover" :alt="post.title" class="h-full w-full object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-gray-900/30 via-transparent to-transparent" />
        </div>

        <div class="px-6 py-8 md:px-10 md:py-12">
          <div class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            <span v-if="post?.date">{{ post.date }}</span>
            <span v-if="post?.layout">• {{ post.layout }}</span>
            <span v-if="post?.readingTime">• {{ post.readingTime }}</span>
            <span v-if="post?.accent">• {{ post.accent }}</span>
          </div>

          <h1 class="mt-4 text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            {{ post?.title }}
          </h1>
          <p class="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            {{ post?.description }}
          </p>

          <div class="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-5 text-sm text-gray-600 dark:text-gray-400">
            Artikel ini dibaca dengan gaya {{ articleTone }}. Gambar dan video di dalam markdown akan mengikuti ritme visual yang lebih longgar, jadi media bisa tampil sebagai bagian dari narasi, bukan hanya sisipan.
          </div>

          <ContentRenderer
            v-if="post"
            :value="post"
            class="prose prose-lg dark:prose-invert mt-10 max-w-none prose-headings:scroll-mt-28 prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-white prose-blockquote:border-primary-500 prose-blockquote:bg-primary-500/5 prose-blockquote:rounded-2xl prose-blockquote:px-6 prose-blockquote:py-4 prose-hr:border-gray-200 dark:prose-hr:border-gray-700"
          />
        </div>
      </article>
    </UContainer>

    <div class="border-t border-gray-200 dark:border-gray-800" />
  </main>
</template>

<style scoped>
.article-content :deep(h2) {
  margin-top: 2.5rem;
  font-size: 1.6rem;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.article-content :deep(h3) {
  margin-top: 2rem;
  font-size: 1.25rem;
  line-height: 1.25;
}

.article-content :deep(p) {
  color: rgba(107, 114, 128, 1);
}

.article-content :deep(figure) {
  margin: 2.25rem 0;
}

.article-content :deep(img) {
  border-radius: 1.5rem;
  border: 1px solid rgba(209, 213, 219, 0.5);
}

.article-content :deep(iframe),
.article-content :deep(video) {
  width: 100%;
  min-height: 22rem;
  border: 0;
  border-radius: 1.5rem;
  background: #f3f4f6;
}

.article-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 1rem;
}

.article-content :deep(th),
.article-content :deep(td) {
  border-color: rgba(209, 213, 219, 0.5);
}

.article-content :deep(pre) {
  border-radius: 1.25rem;
  border: 1px solid rgba(209, 213, 219, 0.5);
  background: rgba(243, 244, 246, 0.8);
}
</style>
