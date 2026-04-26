import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md', 
      schema: z.object({
        featured: z.boolean().optional(),
        date: z.string().optional(),
        cover: z.string().optional(),
        layout: z.enum(['editorial', 'immersive', 'compact']).optional(),
        accent: z.string().optional(),
        readingTime: z.string().optional(),
      })
    })
  }
})