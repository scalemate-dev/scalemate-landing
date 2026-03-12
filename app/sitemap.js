import { client } from "@/lib/contentful"

export default async function sitemap() {
  // Fetch all case studies
  const response = await client.getEntries({
    content_type: "caseStudy",
    locale: "en-US",
  })

  // Generate dynamic entries for case studies
  const caseStudyEntries = response.items.map((item) => {
    return {
      url: `https://www.scalemate.co/customers/${item.fields.slug}`,
      lastModified: new Date(item.sys.updatedAt || item.sys.createdAt),
      changeFrequency: "monthly",
      priority: 0.8,
    }
  })

  // Fetch all blog articles
  const articlesResponse = await client.getEntries({
    content_type: "blogpost",
    locale: "en-US",
  })

  const articleEntries = articlesResponse.items.map((item) => ({
    url: `https://www.scalemate.co/blog/${item.fields.slug}`,
    lastModified: new Date(item.sys.updatedAt || item.sys.createdAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  // Static pages
  const staticPages = [
    {
      url: "https://www.scalemate.co",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.scalemate.co/ai-assistant",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.scalemate.co/launch",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.scalemate.co/book-a-demo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: "https://www.scalemate.co/pricing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.scalemate.co/customers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.scalemate.co/ad-creative-uploader",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.scalemate.co/use-cases/bulk-ad-launch",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.scalemate.co/use-cases/automated-creative-upload-meta",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.scalemate.co/use-cases/scale-ad-campaigns-faster",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.scalemate.co/use-cases/ad-campaign-automation-rules",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.scalemate.co/features/automation-rules",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.scalemate.co/features/bulk-launch",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.scalemate.co/solutions/media-buyers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.scalemate.co/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  // Combine static and dynamic entries
  return [...staticPages, ...caseStudyEntries, ...articleEntries]
}
