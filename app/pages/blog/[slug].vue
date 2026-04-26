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
  <main class="min-h-screen bg-[#070B18] px-6 py-10 text-white">
    <div class="absolute inset-x-0 top-0 -z-10 h-112 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.2),transparent_55%),linear-gradient(180deg,rgba(7,11,24,0.98),rgba(7,11,24,1))]" />

    <UContainer class="max-w-5xl">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white">
        Kembali ke blog
      </NuxtLink>

      <article class="mt-10 overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
        <div v-if="post?.cover" class="relative aspect-video">
          <img :src="post.cover" :alt="post.title" class="h-full w-full object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-[#070B18] via-[#070B18]/40 to-transparent" />
        </div>

        <div class="px-6 py-8 md:px-10 md:py-12">
          <div class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/45">
            <span v-if="post?.date">{{ post.date }}</span>
            <span v-if="post?.layout">• {{ post.layout }}</span>
            <span v-if="post?.readingTime">• {{ post.readingTime }}</span>
            <span v-if="post?.accent">• {{ post.accent }}</span>
          </div>

          <h1 class="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {{ post?.title }}
          </h1>
          <p class="mt-5 max-w-3xl text-lg leading-8 text-white/70">
            {{ post?.description }}
          </p>

          <div class="mt-10 rounded-[1.5rem] border border-white/10 bg-[#0B132A]/70 p-5 text-sm text-white/65">
            Artikel ini dibaca dengan gaya {{ articleTone }}. Gambar dan video di dalam markdown akan mengikuti ritme visual yang lebih longgar, jadi media bisa tampil sebagai bagian dari narasi, bukan hanya sisipan.
          </div>

          <ContentRenderer
            v-if="post"
            :value="post"
            class="article-content prose prose-invert prose-lg mt-10 max-w-none prose-headings:scroll-mt-28 prose-a:text-sky-300 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-sky-400 prose-blockquote:bg-white/5 prose-blockquote:rounded-2xl prose-blockquote:px-6 prose-blockquote:py-4 prose-hr:border-white/10"
          />
        </div>
      </article>
    </UContainer>
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
  color: rgba(255, 255, 255, 0.76);
}

.article-content :deep(figure) {
  margin: 2.25rem 0;
}

.article-content :deep(img) {
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.article-content :deep(iframe),
.article-content :deep(video) {
  width: 100%;
  min-height: 22rem;
  border: 0;
  border-radius: 1.5rem;
  background: #000;
}

.article-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 1rem;
}

.article-content :deep(th),
.article-content :deep(td) {
  border-color: rgba(255, 255, 255, 0.1);
}

.article-content :deep(pre) {
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(3, 7, 18, 0.8);
}

.article-content :deep(.media-grid) {
  display: grid;
  gap: 1rem;
  margin: 2.5rem 0;
}

@media (min-width: 768px) {
  .article-content :deep(.media-grid) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
  }
}

.article-content :deep(.media-breakout) {
  margin-inline: calc(50% - 50vw);
  width: 100vw;
  padding-inline: 1.5rem;
}

.article-content :deep(.media-card) {
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

.article-content :deep(.media-card figcaption) {
  padding: 0.9rem 1rem 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.58);
}
</style>
