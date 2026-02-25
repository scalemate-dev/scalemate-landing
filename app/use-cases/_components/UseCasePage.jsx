import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./HeroSection/HeroSection"
import ProblemSection from "./ProblemSection/ProblemSection"
import BeforeAfterSection from "./BeforeAfterSection/BeforeAfterSection"
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection"
import ResultsSection from "./ResultsSection/ResultsSection"
import AudienceSection from "./AudienceSection/AudienceSection"
import CtaSection from "./CtaSection/CtaSection"
import styles from "./UseCasePage.module.scss"

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

export default function UseCasePage({ data }) {
  return (
    <div className={styles.main}>
      <FaqJsonLd items={data.faq} />
      <HeroSection {...data.hero} />
      <ProblemSection {...data.problem} />
      <BeforeAfterSection {...data.beforeAfter} />
      <HowItWorksSection {...data.howItWorks} />
      <ResultsSection {...data.results} />
      <AudienceSection {...data.audience} />
      <section className={styles.faq}>
        <Container>
          <FAQ faqItems={data.faq} title="FAQ" theme="light" multiOpen />
        </Container>
      </section>
      <CtaSection {...data.cta} />
    </div>
  )
}
