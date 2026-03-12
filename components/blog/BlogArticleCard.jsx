"use client"

import Link from "next/link"
import Image from "next/image"
import { IconArrowRight } from "@tabler/icons-react"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import styles from "@/app/blog/page.module.scss"

export default function BlogArticleCard({ article, position }) {
  const { slug, title, excerpt, createdAt, coverUrl, coverWidth, coverHeight, coverAlt } = article

  const date = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handleClick = () => {
    trackMixpanelEvent(EVENTS.BLOG_ARTICLE_CARD_CLICKED, {
      article_slug: slug,
      article_title: title,
      card_position: position,
    })
  }

  return (
    <Link href={`/blog/${slug}`} className={styles.card} onClick={handleClick}>
      {coverUrl && (
        <div className={styles.cardImage}>
          <Image
            src={coverUrl}
            alt={coverAlt}
            width={coverWidth}
            height={coverHeight}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <span className={styles.cardDash} />
        <span className={styles.date}>{date}</span>
        <h2 className={styles.cardTitle}>{title}</h2>
        {excerpt && <p className={styles.cardExcerpt}>{excerpt}</p>}
        <span className={styles.readMore}>
          Read article
          <IconArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
