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

  return (
    <main>
      <Hero title={caseStudy.fields.title} label="Case Study" />
      <Layout
        side={
          <CompanyCard
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
      <WaitList />
    </main>
  )
}

export default AppPage
