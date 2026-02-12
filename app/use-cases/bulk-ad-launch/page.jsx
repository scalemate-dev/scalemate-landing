import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./components/HeroSection/HeroSection"
import ProblemSection from "./components/ProblemSection/ProblemSection"
import BeforeAfterSection from "./components/BeforeAfterSection/BeforeAfterSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import ResultsSection from "./components/ResultsSection/ResultsSection"
import AudienceSection from "./components/AudienceSection/AudienceSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title:
    "Bulk Ad Launch Tool — Launch Hundreds of Ads in Minutes | Scalemate",
  description:
    "A bulk ad launch tool that removes the manual grind from campaign deployment. Bulk-create hundreds of ad sets, sync creatives from cloud storage, and launch at scale.",
  alternates: { canonical: "https://www.scalemate.co/use-cases/bulk-ad-launch" },
  openGraph: {
    title:
      "Bulk Ad Launch Tool — Launch Hundreds of Ads in Minutes | Scalemate",
    description:
      "A bulk ad launch tool that removes the manual grind from campaign deployment. Bulk-create hundreds of ad sets and launch at scale.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bulk Ad Launch Tool — Launch Hundreds of Ads in Minutes | Scalemate",
    description:
      "Bulk-create hundreds of ad sets, sync creatives from cloud storage, and launch at scale with Scalemate.",
  },
}

const faqItems = [
  {
    question: "What is a bulk ad launch tool?",
    answer:
      "A bulk ad launch tool automates the creation and deployment of multiple ad sets simultaneously, replacing the manual process of building each campaign element by hand inside an ad platform.",
  },
  {
    question: "How many ads can Scalemate launch at once?",
    answer:
      "There's no fixed cap. Teams routinely launch hundreds of ads and ad sets in a single batch.",
  },
  {
    question: "Does Scalemate support one-ad-per-ad-set structure?",
    answer:
      "Yes. Custom campaign structures — including one-creative-per-ad-set — are fully supported. This setup is commonly used by UA teams for granular performance isolation.",
  },
  {
    question: "Can teams create ads in bulk for Meta (Facebook & Instagram)?",
    answer:
      "Scalemate integrates directly with Meta's advertising infrastructure, enabling mass campaign deployment across both Facebook and Instagram placements from a single configuration.",
  },
  {
    question: "Which cloud storage platforms does Scalemate integrate with?",
    answer:
      "Google Drive and NextCloud are supported natively, with custom integrations available for other storage providers.",
  },
  {
    question: "How long does it take to set up a bulk ad launch?",
    answer:
      "Initial onboarding includes dedicated setup and configuration. Once live, launching a batch of hundreds of ads takes minutes — compared to the days or weeks required manually.",
  },
  {
    question:
      "How is this different from Facebook Ads Manager's bulk features?",
    answer:
      "Facebook's native tools support basic duplication but lack cloud-to-platform sync, structural automation at scale (like one-ad-per-ad-set across hundreds of ad sets), and deduplication. Scalemate is purpose-built for high-volume UA teams that need speed and structural control beyond what the native platform offers.",
  },
]

export default function BulkAdLaunchPage() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <ProblemSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <ResultsSection />
      <AudienceSection />
      <section className={styles.faq}>
        <Container>
          <FAQ faqItems={faqItems} title="FAQ" theme="light" multiOpen />
        </Container>
      </section>
      <CtaSection />
    </div>
  )
}
