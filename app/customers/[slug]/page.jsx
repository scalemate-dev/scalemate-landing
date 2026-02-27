import { createClient } from "contentful"
import Layout from "@/components/CaseStudy/Layout/Layout"

import RichTextElements from "@/components/contentful/RichText/RichTextElements"
import Hero from "@/components/CaseStudy/Hero/Hero"
import WaitList from "@/components/home/WaitList/WaitList"
import CompanyCard from "@/components/CaseStudy/CompanyCard/CompanyCard"
import Overview from "@/components/CaseStudy/Overview/Overview"
import { notFound } from "next/navigation"

const accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
const space = process.env.CONTENTFUL_SPACE_ID
const environment = process.env.CONTENTFUL_ENVIRONMENT

const client = createClient({
  space,
  environment,
  accessToken,
})

const previewClient = createClient({
  space,
  environment,
  accessToken: previewAccessToken,
  host: "preview.contentful.com",
})

export const revalidate = 86400

export async function generateStaticParams() {
  const entries = await client.getEntries({
    content_type: "caseStudy",
    locale: "en-US",
    select: "fields.slug",
  })

  return entries.items.map((item) => ({
    slug: item.fields.slug,
  }))
}

// Function to fetch case study data
async function getCaseStudy(slug, preview = false) {
  const isPreview = preview === previewAccessToken
  const currentClient = isPreview ? previewClient : client
  const locale = "en-US"

  const entries = await currentClient.getEntries({
    content_type: "caseStudy",
    "fields.slug": slug,
    locale,
    include: 10,
  })

  if (!entries.items.length) {
    return null
  }

  return entries.items[0]
}

// Generate metadata for the page
export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params
  const { preview } = await searchParams

  const caseStudy = await getCaseStudy(slug, preview)

  if (!caseStudy) {
    return {}
  }

  const description = caseStudy.fields.seoDescription

  const imageUrl =
    caseStudy.fields.previewImage?.fields.file.url || "/og-image.png"

  const fullImageUrl = imageUrl.startsWith("//")
    ? `https:${imageUrl}`
    : imageUrl

  return {
    title: `${caseStudy.fields.clientName}: How They Scaled Ad Campaigns with Scalemate`,
    description,
    alternates: {
      canonical: `https://www.scalemate.co/customers/${slug}`,
    },
    openGraph: {
      url: `https://www.scalemate.co/customers/${slug}`,
      title: `${caseStudy.fields.clientName}: How They Scaled Ad Campaigns with Scalemate`,
      description,
      images: [{ url: fullImageUrl }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.fields.clientName}: How They Scaled Ad Campaigns with Scalemate`,
      description,
      images: [fullImageUrl],
    },
  }
}

async function AppPage({ params, searchParams }) {
  const { slug } = await params
  const { preview } = await searchParams
  const locale = "en-US"

  const isPreview = preview === previewAccessToken
  const currentClient = isPreview ? previewClient : client

  const entries = await currentClient.getEntries({
    content_type: "caseStudy",
    "fields.slug": slug,
    locale,
    include: 10,
  })

  if (!entries.items.length) {
    return notFound()
  }

  const caseStudy = entries.items[0]

  const { challenge, solution, results, metrics } = caseStudy.fields

  const imageUrl =
    caseStudy.fields.previewImage?.fields.file.url || "/og-image.png"
  const fullImageUrl = imageUrl.startsWith("//")
    ? `https:${imageUrl}`
    : `https://www.scalemate.co${imageUrl}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.fields.title,
    description: caseStudy.fields.seoDescription,
    image: fullImageUrl,
    url: `https://www.scalemate.co/customers/${slug}`,
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
    datePublished: caseStudy.sys.createdAt,
    dateModified: caseStudy.sys.updatedAt,
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Hero title={caseStudy.fields.title} label="Case Study" />
      <Layout
        side={
          <CompanyCard
            companyName={caseStudy.fields.clientName}
            industry={caseStudy.fields.industry}
            useCase={caseStudy.fields.useCase}
            logo={caseStudy.fields.clientLogo.fields.file.url}
          />
        }
      >
        <Overview
          industry={caseStudy.fields.industry}
          useCase={caseStudy.fields.useCase}
          logo={caseStudy.fields.clientLogo.fields.file.url}
          companyInfo={caseStudy.fields.companyInformation}
          metrics={metrics}
        />
        {[challenge, solution, results].map((item, index) => (
          <RichTextElements key={index} document={item} />
        ))}
      </Layout>
      <WaitList
        href="https://app.scalemate.co/create-account"
        buttonText="Try Scalemate Now"
      />
    </main>
  )
}

export default AppPage
