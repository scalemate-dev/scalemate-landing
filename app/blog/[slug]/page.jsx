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
  const fullTitle = article.absoluteTitle ? title : `${title} | Scalemate Blog`
  const description =
    article.metaDescription || `Read about ${title.toLowerCase()} on the Scalemate blog.`

  const ogImage = article.ogImage || article.coverImage || "/og-image.png"
  const articleUrl = `https://www.scalemate.co/blog/${slug}`

  return {
    title: fullTitle,
    description,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    alternates: {
      canonical: articleUrl,
      languages: {
        en: articleUrl,
        "x-default": articleUrl,
      },
    },
    openGraph: {
      url: articleUrl,
      title: fullTitle,
      description,
      locale: "en_US",
      type: "article",
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      ...(article.section && { section: article.section }),
      ...(article.tags.length > 0 && { tags: article.tags }),
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
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

  const articleUrl = `https://www.scalemate.co/blog/${slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || undefined,
    url: articleUrl,
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
    ...(article.tags.length > 0 && {
      about: article.tags.slice(0, 3).map((tag) => ({
        "@type": "Thing",
        name: tag,
      })),
    }),
    ...(article.tags.length > 0 && { keywords: article.tags.join(", ") }),
    inLanguage: "en",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article p:first-of-type", ".faq-answer"],
    },
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
