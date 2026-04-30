// app/server/routes/rss.xml.ts
import { defineEventHandler, setHeader } from 'h3'
import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  
  const baseUrl = 'https://yudev.my.id'
  const escapeXml = (value: unknown) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
  const normalizePath = (path: string) => (path.startsWith('/') ? path : `/${path}`)
  
  let posts: any[] = []
  try {
    posts = await queryCollection(event, 'blog')
      .order('date', 'DESC')
      .limit(20)
      .all()
  } catch (e) {
    console.error('Error fetching blog posts:', e)
  }
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Yudev - Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Membantu transformasi bisnis Anda melalui pengembangan website, aplikasi Android, dan sinkronisasi sistem yang terpadu di era digital.</description>
    <language>id</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${posts.map(post => {
  const postPath = normalizePath(post.path || post._path || `/blog/${post.slug || ''}`)
  const postUrl = `${baseUrl}${postPath}`
  const pubDate = new Date(post.date || post._mtime).toUTCString()
  const safeBody = String(post.body?.raw || '').replace(/]]>/g, ']]]]><![CDATA[>')
  
  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.summary || post.description || '')}</description>
      <content:encoded><![CDATA[${safeBody}]]></content:encoded>
    </item>`
}).join('\n')}
  </channel>
</rss>`
  
  return rssXml
})
