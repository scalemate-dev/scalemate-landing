export default function sitemap() {
  return [
    {
      url: "https://scalemate.co",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://scalemate.co/book-a-demo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]
}
