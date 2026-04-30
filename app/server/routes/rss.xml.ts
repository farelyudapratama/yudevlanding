// app/server/routes/rss.xml.ts
import { defineEventHandler, setHeader } from 'h3'
import { queryCollection } from '#content/server'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  
  const baseUrl = 'https://yudev.my.id'
  
  let posts: any[] = []
  try {
    posts = await queryCollection('blog')
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
  const slug = post._path?.split('/').pop() || post.slug
  const postUrl = `${baseUrl}/blog/${slug}`
  const pubDate = new Date(post.date || post._mtime).toUTCString()
  
  return `    <item>
      <title>${post.title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${post.summary || post.description || ''}</description>
      <content:encoded><![CDATA[${post.body?.raw || ''}]]></content:encoded>
    </item>`
}).join('\n')}
  </channel>
</rss>`
  
  return rssXml
})
