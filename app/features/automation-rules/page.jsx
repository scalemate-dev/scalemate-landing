import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./components/HeroSection/HeroSection"
import ProblemSection from "./components/ProblemSection/ProblemSection"
import BottleneckSection from "./components/BottleneckSection/BottleneckSection"
import SolutionSection from "./components/SolutionSection/SolutionSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import UseCasesSection from "./components/UseCasesSection/UseCasesSection"
import ProofSection from "./components/ProofSection/ProofSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title:
    "Automated Ad Optimization Rules — 24/7 Campaign Protection | Scalemate",
  description:
    "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in rollback.",
  alternates: {
    canonical: "https://www.scalemate.co/features/automation-rules",
  },
  openGraph: {
    url: "https://www.scalemate.co/features/automation-rules",
    title:
      "Automated Ad Optimization Rules — 24/7 Campaign Protection | Scalemate",
    description:
      "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in rollback.",
    type: "website",
    images: [
      { url: "/og-automation-rules.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automated Ad Optimization Rules — 24/7 Campaign Protection | Scalemate",
    description:
      "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in rollback.",
    images: ["/og-automation-rules.png"],
  },
}

const faqItems = [
  {
    question: "What are automated ad optimization rules?",
    answer:
      "Conditional triggers that execute actions when performance metrics cross set thresholds: pause, scale, adjust bids, or alert. Rules run continuously, nights, weekends, holidays, replacing the manual check-and-react cycle. Each rule is configurable per campaign or account: threshold, time window, and action type adjust to the team's targets and risk tolerance.",
  },
  {
    question:
      "How do Scalemate's rules differ from Meta's built-in rules?",
    answer:
      "Meta's native rules handle basic conditions within one platform: no rollback, no scaling logic, no advanced automation. Scalemate adds automated scaling with rollback, budget safeguards, and Slack/email alerts. Teams that automate facebook ads rules beyond basic pause-on-threshold see the difference at scale.",
  },
  {
    question: "Can rules auto-pause ads based on ROAS?",
    answer:
      "Yes. Set a ROAS floor and time window, below 1.2 for 24 hours, for example, and the system pauses the ad set automatically. Threshold, window, and action are configurable per campaign or account-wide.",
  },
  {
    question: "How does budget scaling with rollback work?",
    answer:
      "When a campaign hits targets, rules increase budget by a configured percentage. If performance drops after the increase, rollback fires automatically. No manual reversal needed. The system corrects faster than any manual review cycle.",
  },
  {
    question:
      "What's the difference between auto-execute and alert-only?",
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
      "Most automation tools require adapting workflows to their interface. Scalemate wraps around the team's existing process — custom rules replace rigid templates. The goal isn't faster routine. It's removing routine so buyers can auto optimize campaigns meta while focusing on creatives and testing strategy.",
  },
]

const relatedLinks = [
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
]

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scalemate Automation Rules",
  description:
    "Set conditions on ROAS, CPI, or any metric. Scalemate's automation rules pause, scale, and adjust bids 24/7 across Meta Ads, with built-in rollback.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.scalemate.co/features/automation-rules",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
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

      <HeroSection />
      <ProblemSection />
      <BottleneckSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ProofSection />

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
          <span className={styles.relatedHeader}>Related</span>
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
