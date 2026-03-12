import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowLeft } from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import RichTextElements from "@/components/contentful/RichText/RichTextElements"
import TableOfContents from "@/components/blog/TableOfContents/TableOfContents"
import FAQ from "@/components/FAQ/FAQ"
import CtaSection from "@/app/use-cases/_components/CtaSection/CtaSection"
import { client, previewClient } from "@/lib/contentful"
import { extractHeadings } from "@/lib/richtext"
import styles from "./page.module.scss"

const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN

export const revalidate = 3600

export async function generateStaticParams() {
  const entries = await client.getEntries({
    content_type: "blogpost",
    locale: "en-US",
    select: "fields.slug",
  })

  return entries.items.map((item) => ({
    slug: item.fields.slug,
  }))
}

async function getArticle(slug, preview = false) {
  const isPreview = preview === previewAccessToken
  const currentClient = isPreview ? previewClient : client

  const entries = await currentClient.getEntries({
    content_type: "blogpost",
    "fields.slug": slug,
    locale: "en-US",
    include: 10,
  })

  if (!entries.items.length) {
    return null
  }

  return entries.items[0]
}

export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params
  const { preview } = await searchParams
  const article = await getArticle(slug, preview)

  if (!article) {
    return {}
  }

  const title = article.fields.title

  return {
    title: `${title} | Scalemate Blog`,
    description: `Read about ${title.toLowerCase()} on the Scalemate blog.`,
    alternates: {
      canonical: `https://www.scalemate.co/blog/${slug}`,
    },
    openGraph: {
      url: `https://www.scalemate.co/blog/${slug}`,
      title: `${title} | Scalemate Blog`,
      type: "article",
      images: [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Scalemate Blog`,
      images: ["/og-image.png"],
    },
  }
}

export default async function ArticlePage({ params, searchParams }) {
  const { slug } = await params
  const { preview } = await searchParams
  const article = await getArticle(slug, preview)

  if (!article) {
    return notFound()
  }

  const title = article.fields.title
  const authorField = article.fields.author
  const author = typeof authorField === "string"
    ? authorField
    : authorField?.fields?.name || "Scalemate Team"

  const date = new Date(article.sys.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const headings = extractHeadings(article.fields.mainContent)

  const faqItems =
    article.fields.faq?.map((item) => ({
      question: item.fields.question,
      answer: item.fields.answer,
    })) || []

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    url: `https://www.scalemate.co/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: "Scalemate",
      url: "https://www.scalemate.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Scalemate",
      url: "https://www.scalemate.co",
    },
    datePublished: article.sys.createdAt,
    dateModified: article.sys.updatedAt,
  }

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
            <time className={styles.date} dateTime={article.sys.createdAt}>
              {date}
            </time>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.byline}>by {author}</p>
          </div>
        </Container>
      </section>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.layout}>
            {headings.length > 0 && (
              <aside className={styles.sidebar}>
                <TableOfContents headings={headings} />
              </aside>
            )}
            <article className={styles.article}>
              <RichTextElements
                document={article.fields.mainContent}
                withHeadingIds
              />
            </article>
          </div>
        </Container>
      </section>

      {faqItems.length > 0 && <FAQ faqItems={faqItems} theme="light" />}

      <CtaSection
        title="Scale your ad launches today"
        description="Automate creative uploads, bulk launch campaigns, and manage rules — all from one platform."
      />
    </div>
  )
}
