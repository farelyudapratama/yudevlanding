<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () => {
  return queryCollection('blog').path(`/blog/${route.params.slug}`).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel tidak ditemukan' })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogImage: post.value.cover,
})

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  return new Date(post.value.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>

<template>
  <main v-if="post" class="min-h-screen">
    <UContainer class="py-32">
      <!-- Article Header -->
      <div class="mb-12 max-w-3xl mx-auto text-center animate-fade-in-up">
        <!-- Badge -->
        <UBadge v-if="post.accent" :label="post.accent" variant="subtle" color="primary" size="lg" class="mb-6 rounded-full" />
        
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 transition-colors">
          {{ post.title }}
        </h1>
        
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 transition-colors leading-relaxed">
          {{ post.description }}
        </p>

        <div class="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
          <span>{{ formattedDate }}</span>
          <span v-if="post.readingTime">&bull; {{ post.readingTime }}</span>
        </div>
      </div>

      <!-- Cover Image -->
      <div v-if="post.cover" class="max-w-4xl mx-auto mb-16 rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-white/10 animate-fade-in-up" style="animation-delay: 0.1s;">
        <img :src="post.cover" :alt="post.title" class="w-full h-auto aspect-video object-cover hover:scale-105 transition-transform duration-700" />
      </div>

      <!-- Article Content using standard Typography -->
      <div class="max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s;">
        <!-- Render Markdown content with prose -->
        <div class="prose prose-lg prose-primary dark:prose-invert max-w-none hover:prose-a:text-primary-600 dark:hover:prose-a:text-primary-400 prose-img:rounded-2xl prose-img:shadow-md">
          <ContentRenderer :value="post" />
        </div>
      </div>

      <!-- Footer navigation -->
      <div class="max-w-3xl mx-auto mt-20 pt-8 border-t border-gray-100 dark:border-white/10 animate-fade-in-up" style="animation-delay: 0.3s;">
        <UButton 
          to="/blog" 
          variant="ghost" 
          color="gray" 
          icon="i-heroicons-arrow-left" 
          size="lg"
          class="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Kembali ke semua artikel
        </UButton>
      </div>
    </UContainer>
  </main>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out both;
}
</style>
