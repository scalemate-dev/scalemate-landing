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
      "A bulk ad launch tool automates the creation and deployment of multiple ad sets simultaneously, replacing the manual process of building each campaign element by hand inside an ad platform. Instead of configuring each ad set individually \u2014 selecting creatives, setting targeting, assigning budgets \u2014 the tool applies one configuration across hundreds of ad sets at once. This is especially valuable for teams running multi-language, multi-concept campaigns where combinations multiply quickly.",
  },
  {
    question: "How many ads can Scalemate launch at once?",
    answer:
      "There\u2019s no fixed cap \u2014 teams have launched over 56 ad sets in a single batch with Scalemate. The limit depends on campaign structure and account settings, not the tool itself. Most teams scale batch size gradually as they build confidence in their setup and naming conventions.",
  },
  {
    question: "What campaign structures does Scalemate support?",
    answer:
      "It\u2019s not limited to one structure. Teams define how ads get distributed across campaigns and ad sets based on their own approach. For example, all creatives from one concept can go into a single ad set or campaign, with AI diversifying variations automatically. One-ad-per-ad-set is also fully supported, it gives teams control over spend per creative and ensuring each ad gets enough impressions for fair testing.",
  },
  {
    question: "Can teams create ads in bulk for Meta (Facebook & Instagram)?",
    answer:
      "Yes. Scalemate is a bulk facebook ad creation tool that integrates directly with Meta\u2019s advertising infrastructure. It enables mass campaign deployment across both Facebook and Instagram placements from a single configuration. Teams create ads in bulk meta without switching between multiple interfaces.",
  },
  {
    question: "Which cloud storage platforms does Scalemate integrate with?",
    answer:
      "Google Drive and NextCloud are supported natively, with custom integrations available for other storage providers. The connection runs through a direct API sync \u2014 no browser extensions, plugins, or manual exports required. Once connected, teams select which folders or files to push into Meta\u2019s Media Library, with automatic deduplication handling the rest.",
  },
  {
    question: "How long does it take to set up a bulk ad launch?",
    answer:
      "Initial onboarding includes dedicated setup and configuration. Once live, the launch ads at scale tool deploys hundreds of ads in minutes \u2014 compared to the days or weeks required manually. Most teams complete onboarding and run their first bulk launch within the first week.",
  },
  {
    question: "Which ad platforms are supported for bulk ad launch?",
    answer:
      "Scalemate currently supports bulk ad launch across Meta (Facebook & Instagram), TikTok, and Google Ads. The same workflow applies \u2014 configure once, deploy across ad sets in minutes.",
  },
  {
    question:
      "How is this different from Facebook Ads Manager's bulk features?",
    answer:
      "Facebook\u2019s native tools support basic duplication but lack cloud-to-platform sync, structural automation at scale (like one-ad-per-ad-set across hundreds of ad sets), and deduplication. Scalemate is purpose-built for high-volume marketing teams that need speed and structural control beyond what the native platform offers. Where Ads Manager requires assembling each ad set through its interface, Scalemate generates campaign structures in bulk from a single configuration \u2014 including naming conventions, placements, and budget allocation.",
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
