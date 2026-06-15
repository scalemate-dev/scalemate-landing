import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import VideoEmbed from "@/components/elements/VideoEmbed/VideoEmbed"
import VideoObjectSchema from "@/components/elements/VideoEmbed/VideoObjectSchema"
import HeroSection from "./components/HeroSection/HeroSection"
import ProblemSection from "./components/ProblemSection/ProblemSection"
import BottleneckSection from "./components/BottleneckSection/BottleneckSection"
import SolutionSection from "./components/SolutionSection/SolutionSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import UseCasesSection from "./components/UseCasesSection/UseCasesSection"
import ProofSection from "./components/ProofSection/ProofSection"
import CtaSection from "./components/CtaSection/CtaSection"
import RulesLibraryPromo from "@/components/home/RulesLibraryPromo/RulesLibraryPromo"
import styles from "./page.module.scss"

export const metadata = {
  title: "Facebook Ads Automation Rules — Auto-Pause + Scale 24/7",
  description:
    "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in budget safeguards.",
  alternates: {
    canonical: "https://www.scalemate.co/use-cases/ad-campaign-automation-rules",
  },
  openGraph: {
    url: "https://www.scalemate.co/features/automation-rules",
    title: "Facebook Ads Automation Rules — Auto-Pause + Scale 24/7",
    description:
      "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in budget safeguards.",
    type: "website",
    images: [
      { url: "/og-ad-campaign-automation-rules.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads Automation Rules — Auto-Pause + Scale 24/7",
    description:
      "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in budget safeguards.",
    images: ["/og-ad-campaign-automation-rules.png"],
  },
}

const faqItems = [
  {
    question: "What are automated ad optimization rules?",
    answer:
      "Conditional triggers that execute actions when performance metrics cross set thresholds: pause, scale, adjust bids, or alert. Rules run continuously, nights, weekends, holidays, replacing the manual check-and-react cycle. Each rule is configurable per campaign or account: threshold, time window, and action type adjust to the team's targets and risk tolerance.",
  },
  {
    question: "How do Scalemate's rules differ from Meta's built-in rules?",
    answerText:
      "Meta's native rules handle basic conditions within one platform: no budget safeguards, no scaling logic, no advanced automation. Scalemate adds automated scaling with auto-cut rules, budget protection, and Slack/email alerts. Teams that automate facebook ads rules beyond basic pause-on-threshold see the difference at scale. For specifics on when native rules aren't enough, see the full setup guide.",
    answer: (
      <>
        Meta's native rules handle basic conditions within one platform: no
        budget safeguards, no scaling logic, no advanced automation. Scalemate
        adds automated scaling with auto-cut rules, budget protection, and
        Slack/email alerts. Teams that automate facebook ads rules beyond
        basic pause-on-threshold see the difference at scale. Browse the{" "}
        <Link href="/automation-rules-library">
          20 production-tested automation rules
        </Link>{" "}
        for ready-to-copy setups.
      </>
    ),
  },
  {
    question: "Can rules auto-pause ads based on ROAS?",
    answer:
      "Yes. Set a ROAS floor and time window, below 1.2 for 24 hours, for example, and the system pauses the ad set automatically. Threshold, window, and action are configurable per campaign or account-wide.",
  },
  {
    question: "How do budget safeguards work when scaling?",
    answer:
      "When a campaign hits targets, rules increase budget by a configured percentage. If performance drops after the increase, a separate rule cuts the budget back automatically. No manual reversal needed. The system corrects faster than any manual review cycle.",
  },
  {
    question: "What's the difference between auto-execute and alert-only?",
    answer:
      "Auto-execute fires immediately: budget protection, overnight optimization, and time-sensitive scenarios. Alert-only notifies via Slack or email without acting, preserving human review. Most teams combine both: auto-execute for safeguards, alert-only for scaling decisions.",
  },
  {
    question: "Which platforms does the rules engine support?",
    answer:
      "Meta (Facebook and Instagram), with all rules managed from one dashboard. Custom integrations available on request.",
  },
  {
    question:
      "How is Scalemate different from Revealbot and other automation tools?",
    answer:
      "Most automation tools require adapting workflows to their interface. Scalemate wraps around the team's existing process – custom rules replace rigid templates. The goal isn't faster routine. It's removing routine so buyers can auto optimize campaigns meta while focusing on creatives and testing strategy.",
  },
  {
    question: "When should I use third-party Facebook ad automation tools?",
    answer:
      "When decisions depend on CPA, ROAS, spend pacing, or intraday performance shifts. Meta's native rules can't act on custom thresholds, combine multiple metrics in one condition, or apply logic across accounts. Third-party automation fills the gap: faster reactions, broader coverage, and actions Meta doesn't support natively.",
  },
]

const relatedLinks = [
  {
    label: "Case study: How Appflame automates creative testing on Meta",
    href: "/customers/appflame-automation-rules",
  },
  {
    label: "Browse production-tested Meta automation rules",
    href: "/automation-rules-library",
  },
  {
    label: "Ad Campaign Automation Rules",
    href: "/use-cases/ad-campaign-automation-rules",
  },
  {
    label: "Scale Ad Campaigns Faster",
    href: "/use-cases/scale-ad-campaigns-faster",
  },
  {
    label: "Automate Creative Upload for Meta Ads",
    href: "/use-cases/automated-creative-upload-meta",
  },
  { label: "Bulk Ad Launch Tool", href: "/use-cases/bulk-ad-launch" },
  {
    label: "Solutions for Media Buyers",
    href: "/solutions/media-buyers",
  },
]

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scalemate Automation Rules",
  description:
    "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in budget safeguards.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.scalemate.co/features/automation-rules",
  image: "https://www.scalemate.co/og-ad-campaign-automation-rules.png",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier available",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answerText ?? item.answer,
    },
  })),
}

const breadcrumbSchema = {
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
      name: "Features",
      item: "https://www.scalemate.co/features",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Automation Rules",
      item: "https://www.scalemate.co/features/automation-rules",
    },
  ],
}

export default function AutomationRulesPage() {
  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <VideoObjectSchema
        videoId="R6gn5zSILwM"
        name="Facebook Ad Automation Rules — Auto-Pause & Scale (Scalemate Demo)"
        description="Demo of Scalemate's automation rules engine: rule conditions, action types, and rollback. Pause low-ROAS ads, scale winners, protect daily budget across Meta and TikTok."
        uploadDate="2026-04-29T00:00:00+00:00"
        duration="PT1M"
      />

      <HeroSection />

      <section className={styles.video}>
        <Container>
          <div className={styles.videoInner}>
            <span className={styles.videoEyebrow}>60-second demo</span>
            <h2 className={styles.videoHeading}>
              Pause losers, scale winners, protect daily budget
            </h2>
            <p className={styles.videoSub}>
              Set ROAS, CPI, or spend thresholds once. Rules fire pause and
              scale actions automatically — running 24/7 with no manual
              checks.
            </p>
            <VideoEmbed
              videoId="R6gn5zSILwM"
              title="Facebook Ad Automation Rules — Auto-Pause & Scale (Scalemate Demo)"
              priority
            />
          </div>
        </Container>
      </section>

      <ProblemSection />
      <BottleneckSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ProofSection />
      <RulesLibraryPromo />

      <section className={styles.faq}>
        <Container>
          <FAQ
            faqItems={faqItems}
            title="Frequently Asked Questions"
            theme="light"
            multiOpen
          />
        </Container>
      </section>

      <section className={styles.relatedLinks}>
        <Container>
          <span className={styles.relatedHeader}>Related pages</span>
          <div className={styles.relatedList}>
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.relatedLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  )
}
