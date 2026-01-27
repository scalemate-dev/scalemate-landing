import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./components/HeroSection/HeroSection"
import FeaturesSection from "./components/FeaturesSection/FeaturesSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title:
    "Free Ad Creative Uploader | Google Drive to Meta & TikTok Ads | Scalemate",
  description:
    "Upload ad creatives from Google Drive directly to Meta and TikTok Ads. Free bulk upload tool - no downloads needed. Save hours on campaign launches.",
  keywords:
    "bulk upload creatives, Google Drive to Meta ads, Google Drive to TikTok ads, free ad creative uploader, bulk creative upload tool",
  openGraph: {
    title: "Free Creative Uploader | Google Drive to Meta & TikTok Ads",
    description:
      "Upload ad creatives from Google Drive directly to Meta and TikTok Ads. Free bulk upload tool - no downloads needed.",
    type: "website",
  },
}

const faqItems = [
  {
    question: "Is this tool really free?",
    answer:
      "Yes, 100% free. No credit card required, no hidden fees, no upload limits. We built this to help marketers work faster.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Currently we support Meta Ads and TikTok Ads. Google Ads support is coming soon.",
  },
  {
    question: "What file formats can I upload?",
    answer:
      "We support all major formats: JPG, PNG, MP4 – basically anything your ad platforms accept.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We never store your files. They go directly from Google Drive to your ad accounts.",
  },
]

export default function UploaderPage() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />

      <section className={styles.faq}>
        <Container>
          <FAQ faqItems={faqItems} title="Questions & Answers" theme="light" />
        </Container>
      </section>

      <CtaSection />
    </div>
  )
}
