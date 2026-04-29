import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import VideoEmbed from "@/components/elements/VideoEmbed/VideoEmbed"
import VideoObjectSchema from "@/components/elements/VideoEmbed/VideoObjectSchema"
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
  const { video } = data
  return (
    <div className={styles.main}>
      <FaqJsonLd items={data.faq} />
      {video ? <VideoObjectSchema {...video} /> : null}
      <HeroSection {...data.hero} />
      {video ? (
        <section className={styles.video}>
          <Container>
            <div className={styles.videoInner}>
              {video.eyebrow ? (
                <span className={styles.videoEyebrow}>{video.eyebrow}</span>
              ) : null}
              {video.heading ? (
                <h2 className={styles.videoHeading}>{video.heading}</h2>
              ) : null}
              {video.subheading ? (
                <p className={styles.videoSub}>{video.subheading}</p>
              ) : null}
              <VideoEmbed
                videoId={video.videoId}
                title={video.name}
                thumbnailUrl={video.thumbnailUrl}
                priority
              />
            </div>
          </Container>
        </section>
      ) : null}
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
