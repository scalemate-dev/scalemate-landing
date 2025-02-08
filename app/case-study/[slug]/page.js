import { createClient } from "contentful"
import RichTextElements from "@/components/contentful/RichText/RichTextElements"
import Hero from "@/components/CaseStudy/Hero/Hero"
import WaitList from "@/components/home/WaitList/WaitList"
import Container from "@/components/shared/Container/Container"
import Overview from "@/components/CaseStudy/Overview/Overview"
import { notFound } from "next/navigation"

const accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
const space = process.env.CONTENTFUL_SPACE_ID
const environment = process.env.CONTENTFUL_ENVIRONMENT

const client = createClient({
  space,
  environment,
  accessToken,
})

async function AppPage({ params }) {
  const { slug } = await params
  const locale = "en-US"

  const entries = await client.getEntries({
    content_type: "caseStudy",
    "fields.slug": slug,
    locale,
    include: 10,
  })

  if (!entries.items.length) {
    return notFound()
  }

  const caseStudy = entries.items[0]

  console.log("caseStudy", caseStudy.fields.content)

  return (
    <main style={{ width: "100%" }}>
      <Hero title={caseStudy.fields.title} label="Case Study" />
      <Overview
        industry={caseStudy.fields.industry}
        useCase={caseStudy.fields.useCase}
        logo={caseStudy.fields.clientLogo.fields.file.url}
        companyInfo={caseStudy.fields.companyInformation}
      />
      <Container>
        <RichTextElements document={caseStudy.fields.content} />
      </Container>
      <WaitList />
    </main>
  )
}

export default AppPage
