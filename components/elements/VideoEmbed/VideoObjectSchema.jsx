export default function VideoObjectSchema({
  videoId,
  name,
  description,
  uploadDate,
  duration,
  thumbnailUrl,
}) {
  // Google Search requires ISO 8601 datetime with timezone for VideoObject.
  // Accept date-only "YYYY-MM-DD" and normalize to start-of-day UTC.
  const normalizedUploadDate = /^\d{4}-\d{2}-\d{2}$/.test(uploadDate)
    ? `${uploadDate}T00:00:00+00:00`
    : uploadDate

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: thumbnailUrl ?? [
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    ],
    uploadDate: normalizedUploadDate,
    duration,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
