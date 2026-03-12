import Link from "next/link"
import Image from "next/image"
import { IconArrowRight } from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import CtaSection from "@/app/use-cases/_components/CtaSection/CtaSection"
import { client } from "@/lib/contentful"
import { pageMetadata } from "../metadata"
import styles from "./page.module.scss"

export const metadata = pageMetadata.blog

export const revalidate = 3600

export default async function BlogPage() {
  const response = await client.getEntries({
    content_type: "blogpost",
    locale: "en-US",
    order: ["-sys.createdAt"],
  })

  const articles = response.items.map((item) => {
    const cover = item.fields.imageCover?.fields?.file
    const coverUrl = cover?.url ? (cover.url.startsWith("//") ? `https:${cover.url}` : cover.url) : null
    const coverWidth = cover?.details?.image?.width || 800
    const coverHeight = cover?.details?.image?.height || 450

    const coverAlt =
      item.fields.imageCover?.fields?.description ||
      item.fields.imageCover?.fields?.title ||
      item.fields.title

    return {
      id: item.sys.id,
      slug: item.fields.slug,
      title: item.fields.title,
      excerpt: item.fields.metaDescription || null,
      createdAt: item.sys.createdAt,
      coverUrl,
      coverWidth,
      coverHeight,
      coverAlt,
    }
  })

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Scalemate Blog",
    url: "https://www.scalemate.co/blog",
    description:
      "Insights on ad automation, scaling strategies, and performance marketing from the Scalemate team.",
    publisher: {
      "@type": "Organization",
      name: "Scalemate",
      url: "https://www.scalemate.co",
    },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.label}>Blog</span>
            <h1 className={styles.heading}>
              Insights &amp; <span>Strategies</span>
            </h1>
            <p className={styles.subheading}>
              Ad automation, scaling strategies, and performance marketing — from
              the Scalemate team.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.gridSection}>
        <Container>
          <div className={styles.grid}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Scale your ad launches today"
        description="Automate creative uploads, bulk launch campaigns, and manage rules — all from one platform."
      />
    </div>
  )
}

function ArticleCard({ article }) {
  const { slug, title, excerpt, createdAt, coverUrl, coverWidth, coverHeight, coverAlt } = article

  const date = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
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
