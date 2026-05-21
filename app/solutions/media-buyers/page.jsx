import { data } from "./data"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "@/app/use-cases/_components/HeroSection/HeroSection"
import ProblemSection from "@/app/use-cases/_components/ProblemSection/ProblemSection"
import BeforeAfterSection from "@/app/use-cases/_components/BeforeAfterSection/BeforeAfterSection"
import HowItWorksSection from "@/app/use-cases/_components/HowItWorksSection/HowItWorksSection"
import ResultsSection from "@/app/use-cases/_components/ResultsSection/ResultsSection"
import AudienceSection from "@/app/use-cases/_components/AudienceSection/AudienceSection"
import CtaSection from "@/app/use-cases/_components/CtaSection/CtaSection"
import ucStyles from "@/app/use-cases/_components/UseCasePage.module.scss"
import styles from "./page.module.scss"

export const metadata = {
  ...data.metadata,
  openGraph: {
    siteName: "Scalemate",
    ...data.metadata.openGraph,
    images: [{ url: "/og-media-buyers.png", width: 1200, height: 630 }],
  },
  twitter: {
    ...data.metadata.twitter,
    images: ["/og-media-buyers.png"],
  },
}

function SoftwareSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Scalemate",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Tools for media buyers automation: auto-upload creatives, bulk-launch ads, and automation rules that optimize campaigns 24/7.",
    url: "https://www.scalemate.co/solutions/media-buyers",
    image: "https://www.scalemate.co/og-image.png",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available",
    },
    featureList: [
      "Auto-upload creatives to Meta and TikTok from cloud storage",
      "Bulk-launch hundreds of ad sets from one setup",
      "Automation rules that optimize 24/7",
      "AI agent for reports and actions through chat",
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function BreadcrumbSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.scalemate.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: "https://www.scalemate.co/solutions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Media Buyers",
        item: "https://www.scalemate.co/solutions/media-buyers",
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function AggregateMetrics({ metrics }) {
  return (
    <section className={styles.aggregate}>
      <Container>
        <p className={styles.aggregateLabel}>Across all teams using Scalemate:</p>
        <div className={styles.aggregateGrid}>
          {metrics.map((m, i) => (
            <div key={i} className={styles.aggregateItem}>
              <span className={styles.aggregateValue}>{m.value}</span>
              <span className={styles.aggregateDesc}>{m.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function FaqJsonLd({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answerText ?? item.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function MediaBuyersPage() {
  return (
    <div className={ucStyles.main}>
      <SoftwareSchema />
      <BreadcrumbSchema />
      <FaqJsonLd items={data.faq} />
      <HeroSection {...data.hero} />
      <ProblemSection {...data.problem} />
      <BeforeAfterSection {...data.beforeAfter} />
      <HowItWorksSection {...data.howItWorks} />
      <ResultsSection {...data.results} />
      <AggregateMetrics metrics={data.aggregate.metrics} />
      <AudienceSection {...data.audience} />
      <section className={ucStyles.faq}>
        <Container>
          <FAQ faqItems={data.faq} title="FAQ" theme="light" multiOpen />
        </Container>
      </section>
      <CtaSection {...data.cta} />
    </div>
  )
}
