import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import WaitList from "@/components/home/WaitList/WaitList"
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

  const articles = response.items.map((item) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    createdAt: item.sys.createdAt,
  }))

  return (
    <div className={styles.container}>
      <Container className={styles.headingContainer}>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.subheading}>
          Insights on ad automation, scaling strategies, and performance
          marketing.
        </p>
      </Container>

      <Container>
        <div className={styles.grid}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
      <WaitList href="/book-a-demo" buttonText="Book a demo" />
    </div>
  )
}

function ArticleCard({ article }) {
  const { slug, title, createdAt } = article

  const date = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.cardContent}>
        <span className={styles.date}>{date}</span>
        <h2 className={styles.cardTitle}>{title}</h2>
        <span className={styles.readMore}>Read article &rarr;</span>
      </div>
    </Link>
  )
}
