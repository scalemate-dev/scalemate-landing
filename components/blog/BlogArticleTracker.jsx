"use client"

import { useEffect } from "react"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"

export default function BlogArticleTracker({ slug, title, author }) {
  useEffect(() => {
    trackMixpanelEvent(EVENTS.BLOG_ARTICLE_VIEWED, {
      article_slug: slug,
      article_title: title,
      article_author: author,
    })
  }, [slug, title, author])

  return null
}
