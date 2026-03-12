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
  const isPreview = preview === previewAccessToken
  const article = await getArticle(slug, preview)

  if (!article) {
    return {}
  }

  const title = article.fields.title
  const description =
    article.fields.metaDescription || `Read about ${title.toLowerCase()} on the Scalemate blog.`

  const authorField = article.fields.author
  const author = typeof authorField === "string"
    ? authorField
    : authorField?.fields?.name || "Scalemate Team"

  const cover = article.fields.imageCover?.fields?.file
  const ogImage = cover?.url
    ? cover.url.startsWith("//") ? `https:${cover.url}` : cover.url
    : "/og-image.png"

  return {
    title: `${title} | Scalemate Blog`,
    description,
    alternates: {
      canonical: `https://www.scalemate.co/blog/${slug}`,
    },
    ...(isPreview && { robots: { index: false, follow: false } }),
    openGraph: {
      url: `https://www.scalemate.co/blog/${slug}`,
      title: `${title} | Scalemate Blog`,
      description,
      type: "article",
      publishedTime: article.sys.createdAt,
      modifiedTime: article.sys.updatedAt,
      authors: [author],
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

  const cover = article.fields.imageCover?.fields?.file
  const coverUrl = cover?.url
    ? cover.url.startsWith("//") ? `https:${cover.url}` : cover.url
    : null

  const isPersonAuthor = typeof authorField !== "string" && authorField?.fields?.name

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: article.fields.metaDescription || undefined,
    url: `https://www.scalemate.co/blog/${slug}`,
    ...(coverUrl && { image: coverUrl }),
    author: isPersonAuthor
      ? { "@type": "Person", name: author }
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
    datePublished: article.sys.createdAt,
    dateModified: article.sys.updatedAt,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: "https://www.scalemate.co/blog" },
      { "@type": "ListItem", position: 2, name: title, item: `https://www.scalemate.co/blog/${slug}` },
    ],
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
