import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowLeft } from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import MarkdownContent from "@/components/blog/MarkdownContent"
import TableOfContents from "@/components/blog/TableOfContents/TableOfContents"
import BlogArticleTracker from "@/components/blog/BlogArticleTracker"
import FAQ from "@/components/FAQ/FAQ"
import CtaSection from "@/app/use-cases/_components/CtaSection/CtaSection"
import { getArticleBySlug, getAllSlugs } from "@/lib/blog"
import styles from "./page.module.scss"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = (await params)
  const article = getArticleBySlug(slug)

  if (!article) {
    return {}
  }

  const title = article.title
  const description =
    article.metaDescription || `Read about ${title.toLowerCase()} on the Scalemate blog.`

  const ogImage = article.coverImage || "/og-image.png"

  return {
    title: `${title} | Scalemate Blog`,
    description,
    alternates: {
      canonical: `https://www.scalemate.co/blog/${slug}`,
    },
    openGraph: {
      url: `https://www.scalemate.co/blog/${slug}`,
      title: `${title} | Scalemate Blog`,
      description,
      type: "article",
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Scalemate Blog`,
      description,
      images: [ogImage],
    },
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = (await params)
  const article = getArticleBySlug(slug)

  if (!article) {
    return notFound()
  }

  const date = new Date(article.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const isPersonAuthor = article.author !== "Scalemate Team"

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || undefined,
    url: `https://www.scalemate.co/blog/${slug}`,
    ...(article.coverImage && { image: article.coverImage }),
    author: isPersonAuthor
      ? { "@type": "Person", name: article.author }
      : { "@type": "Organization", name: "Scalemate", url: "https://www.scalemate.co" },
    publisher: {
      "@type": "Organization",
      name: "Scalemate",
      url: "https://www.scalemate.co",
      logo: {
        "@type": "ImageObject",
        url: "https://www.scalemate.co/logo.png",
      },
    },
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: "https://www.scalemate.co/blog" },
      { "@type": "ListItem", position: 2, name: article.title, item: `https://www.scalemate.co/blog/${slug}` },
    ],
  }

  const faqSchema =
    article.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <div>
      <BlogArticleTracker slug={slug} title={article.title} author={article.author} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className={styles.hero}>
        <Container>
          <div className={styles.nav}>
            <Link href="/blog" className={styles.backLink}>
              <IconArrowLeft size={16} />
              All posts
            </Link>
          </div>
          <div className={styles.heroContent}>
            <time className={styles.date} dateTime={article.createdAt}>
              {date}
            </time>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.byline}>by {article.author}</p>
          </div>
        </Container>
      </section>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.layout}>
            {article.headings.length > 0 && (
              <aside className={styles.sidebar}>
                <TableOfContents headings={article.headings} />
              </aside>
            )}
            <article className={styles.article}>
              <MarkdownContent html={article.html} />
            </article>
          </div>
        </Container>
      </section>

      {article.faqItems.length > 0 && <FAQ faqItems={article.faqItems} theme="light" />}

      <CtaSection
        title="Scale your ad launches today"
        description="Automate creative uploads, bulk launch campaigns, and manage rules — all from one platform."
      />
    </div>
  )
}
