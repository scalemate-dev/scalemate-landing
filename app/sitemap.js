import { client } from "@/lib/contentful"
import { getAllArticles } from "@/lib/blog"

const VIDEO_ENTRIES = [
  {
    url: "https://www.scalemate.co/features/automation-rules",
    videoId: "R6gn5zSILwM",
    title: "Facebook Ad Automation Rules — Auto-Pause & Scale (Scalemate Demo)",
    description:
      "Demo of Scalemate's automation rules engine: rule conditions, action types, and rollback. Pause low-ROAS ads, scale winners, protect daily budget across Meta and TikTok.",
    duration: 60,
    publicationDate: "2026-04-29",
  },
  {
    url: "https://www.scalemate.co/features/bulk-launch",
    videoId: "qM4rEFX7pBo",
    title: "Bulk Launch Facebook Ads — 100s in Minutes (Scalemate Demo)",
    description:
      "Demo of Scalemate's bulk ad launch tool: launch hundreds of Meta and TikTok ad sets from one campaign template. Sync creatives from Google Drive, set targeting once, deploy at scale.",
    duration: 55,
    publicationDate: "2026-04-30",
  },
  {
    url: "https://www.scalemate.co/use-cases/ad-campaign-automation-rules",
    videoId: "R6gn5zSILwM",
    title: "Facebook Ad Automation Rules — Auto-Pause & Scale (Scalemate Demo)",
    description:
      "Demo of Scalemate's automation rules engine: rule conditions, action types, and rollback. Pause low-ROAS ads, scale winners, protect daily budget across Meta and TikTok.",
    duration: 60,
    publicationDate: "2026-04-29",
  },
  {
    url: "https://www.scalemate.co/use-cases/bulk-ad-launch",
    videoId: "qM4rEFX7pBo",
    title: "Bulk Launch Facebook Ads — 100s in Minutes (Scalemate Demo)",
    description:
      "Demo of Scalemate's bulk ad launch tool: launch hundreds of Meta and TikTok ad sets from one campaign template. Sync creatives from Google Drive, set targeting once, deploy at scale.",
    duration: 55,
    publicationDate: "2026-04-30",
  },
  {
    url: "https://www.scalemate.co/use-cases/automated-creative-upload-meta",
    videoId: "i8JMFCR-lho",
    title: "Bulk Upload Meta & TikTok Ad Creatives from Google Drive (Scalemate Demo)",
    description:
      "How Scalemate auto-syncs creatives from Google Drive to Meta and TikTok ad libraries. Bulk upload happens in seconds, not hours — built for media buyers managing high-volume creative pipelines.",
    duration: 15,
    publicationDate: "2026-04-29",
  },
]

function videosForUrl(url) {
  const entry = VIDEO_ENTRIES.find((v) => v.url === url)
  if (!entry) return undefined
  return [
    {
      title: entry.title,
      thumbnail_loc: `https://i.ytimg.com/vi/${entry.videoId}/hqdefault.jpg`,
      description: entry.description,
      player_loc: `https://www.youtube.com/embed/${entry.videoId}`,
      duration: entry.duration,
      publication_date: entry.publicationDate,
      family_friendly: "yes",
      requires_subscription: "no",
    },
  ]
}

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

  // Blog articles from local markdown files
  const articleEntries = getAllArticles().map((article) => ({
    url: `https://www.scalemate.co/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.createdAt),
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
      url: "https://www.scalemate.co/automation-rules-library",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.scalemate.co/creative-testing-library",
      lastModified: new Date(),
      changeFrequency: "weekly",
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

  // Attach video metadata where applicable (Google video sitemap extension)
  const staticPagesWithVideos = staticPages.map((page) => {
    const videos = videosForUrl(page.url)
    return videos ? { ...page, videos } : page
  })

  // Combine static and dynamic entries
  return [...staticPagesWithVideos, ...caseStudyEntries, ...articleEntries]
}
