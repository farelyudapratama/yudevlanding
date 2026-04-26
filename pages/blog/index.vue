<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

useSeoMeta({
  title: 'Blog & Insight',
  description: 'Tulisan seputar web development, arsitektur backend, dan teknologi terbaru.'
})
</script>

<template>
  <main class="min-h-screen py-32 px-6">
    <UContainer>
      <div class="mb-16 text-center animate-fade-in-up">
        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 transition-colors">
          Latest <span class="text-primary-500">Insights</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 transition-colors">
          Eksplorasi teknologi, tutorial, dan pengalaman membangun produk digital.
        </p>
      </div>

      <UBlogPosts v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <UBlogPost
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.cover"
          :date="post.date ? new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : ''"
          :badge="{ label: post.accent || post.layout || 'artikel', color: 'primary', variant: 'subtle' }"
          variant="subtle"
          class="bg-gray-50 dark:bg-[#131E3A]/40 backdrop-blur-md border border-gray-100 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-[2rem] overflow-hidden"
          :ui="{
            image: 'aspect-video object-cover',
            title: 'text-gray-900 dark:text-white font-bold text-xl mb-2 transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400',
            description: 'text-gray-600 dark:text-gray-400 line-clamp-3 transition-colors',
            date: 'text-gray-500 dark:text-gray-500 text-sm font-medium'
          }"
        />
        
      </UBlogPosts>

      <div v-else class="text-center py-20 text-gray-500 dark:text-gray-400">
        Belum ada artikel yang dipublikasikan.
      </div>

    </UContainer>
  </main>
</template>