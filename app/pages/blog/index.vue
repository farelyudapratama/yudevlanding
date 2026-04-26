<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

const featuredPost = computed(() => posts.value?.find(post => post.featured) ?? posts.value?.[0])

const otherPosts = computed(() => {
  if (!posts.value) {
    return []
  }

  return posts.value.filter(post => post.path !== featuredPost.value?.path)
})

const layoutClassMap: Record<string, string> = {
  immersive: 'md:col-span-2 lg:col-span-2',
  editorial: 'md:col-span-1',
  compact: 'md:col-span-1'
}

const layoutAspectClassMap: Record<string, string> = {
  immersive: 'aspect-video',
  editorial: 'aspect-4/3',
  compact: 'aspect-4/3'
}

useSeoMeta({
  title: 'Blog & Insight',
  description: 'Tulisan seputar web development, arsitektur backend, dan teknologi terbaru.'
})
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 px-6 py-20 text-gray-900 dark:text-white">
    <div class="border-t border-gray-200 dark:border-gray-800" />

    <UContainer>
      <section class="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <UBadge variant="subtle" color="primary" size="lg" class="w-fit mb-6 flex items-center gap-2 rounded-full px-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <span class="font-bold">Blog & Insight</span>
          </UBadge>

          <h1 class="max-w-3xl text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
            Tulisan yang dirancang seperti <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">experience</span>, bukan arsip biasa.
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400 md:text-xl">
            Pilihan artikel di bawah ini dibuat dengan tingkat energi yang berbeda: ada yang padat, ada yang naratif, dan ada yang lebih visual.
          </p>
        </div>

        <div v-if="featuredPost" class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <NuxtLink :to="featuredPost.path" class="group block overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
            <div class="relative aspect-4/5 sm:aspect-video">
              <img v-if="featuredPost.cover" :src="featuredPost.cover" :alt="featuredPost.title" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-linear-to-t from-gray-900/50 via-transparent to-transparent" />
              <div class="absolute inset-x-0 bottom-0 p-6">
                <div class="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  <span class="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1">Featured</span>
                  <span v-if="featuredPost.layout" class="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1">{{ featuredPost.layout }}</span>
                  <span v-if="featuredPost.readingTime" class="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1">{{ featuredPost.readingTime }}</span>
                </div>
                <h2 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white md:text-3xl">
                  {{ featuredPost.title }}
                </h2>
                <p class="mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400 md:text-base">
                  {{ featuredPost.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <section v-if="otherPosts.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="post in otherPosts"
          :key="post.path"
          :to="post.path"
          class="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition duration-300 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg"
          :class="layoutClassMap[post.layout || 'compact']"
        >
          <div class="relative mb-4 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800" :class="layoutAspectClassMap[post.layout || 'compact']">
            <img v-if="post.cover" :src="post.cover" :alt="post.title" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-linear-to-t from-gray-900/30 via-transparent to-transparent opacity-70" />
          </div>

          <div class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            <span v-if="post.date">{{ post.date }}</span>
            <span v-if="post.layout">• {{ post.layout }}</span>
            <span v-if="post.readingTime">• {{ post.readingTime }}</span>
          </div>
          <h3 class="mt-3 text-xl font-semibold leading-tight text-gray-900 dark:text-white transition group-hover:text-primary-500">
            {{ post.title }}
          </h3>
          <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {{ post.description }}
          </p>
        </NuxtLink>
      </section>

      <div v-else class="py-20 text-center text-gray-500 dark:text-gray-400">
        Belum ada artikel yang dipublikasikan.
      </div>
    </UContainer>

    <div class="border-t border-gray-200 dark:border-gray-800" />
  </main>
</template>
