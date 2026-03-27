import Container from "@/components/elements/Container/Container"
import CtaSection from "@/app/use-cases/_components/CtaSection/CtaSection"
import BlogArticleCard from "@/components/blog/BlogArticleCard"
import { getAllArticles } from "@/lib/blog"
import { pageMetadata } from "../metadata"
import styles from "./page.module.scss"

export const metadata = pageMetadata.blog

export default function BlogPage() {
  const articles = getAllArticles()

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
            {articles.map((article, index) => (
              <BlogArticleCard key={article.id} article={article} position={index + 1} />
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
