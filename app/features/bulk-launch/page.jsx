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
import AudienceSection from "./components/AudienceSection/AudienceSection"
import ProofSection from "./components/ProofSection/ProofSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title:
    "Bulk Ad Creation Tool \u2014 Launch Hundreds of Ads in Minutes | Scalemate",
  description:
    "Create multiple ads at once on Meta and TikTok. Scalemate\u2019s bulk campaign builder deploys hundreds of ad variations from templates \u2014 no manual setup, no duplicate campaign creation.",
  alternates: {
    canonical: "https://www.scalemate.co/use-cases/bulk-ad-launch",
  },
  openGraph: {
    url: "https://www.scalemate.co/features/bulk-launch",
    title:
      "Bulk Ad Creation Tool \u2014 Launch Hundreds of Ads in Minutes | Scalemate",
    description:
      "Create multiple ads at once on Meta and TikTok. Scalemate\u2019s bulk campaign builder deploys hundreds of ad variations from templates \u2014 no manual setup, no duplicate campaign creation.",
    type: "website",
    images: [{ url: "/og-bulk-ad-launch.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bulk Ad Creation Tool \u2014 Launch Hundreds of Ads in Minutes | Scalemate",
    description:
      "Create multiple ads at once on Meta and TikTok. Scalemate\u2019s bulk campaign builder deploys hundreds of ad variations from templates \u2014 no manual setup, no duplicate campaign creation.",
    images: ["/og-bulk-ad-launch.png"],
  },
}

const faqItems = [
  {
    question: "What is a bulk ad creation tool?",
    answer:
      "A bulk ad creation tool automates the process of building multiple ad sets and campaigns from a single template. Instead of creating each ad set manually (selecting targeting, uploading creatives, setting budgets one by one), the tool generates all variations in a single action. Scalemate\u2019s version supports full matrix creation: concept \u00d7 language \u00d7 GEO \u00d7 format, deployed across Meta and TikTok from one workflow.",
  },
  {
    question: "How does Scalemate\u2019s bulk campaign builder work?",
    answer:
      "The process runs in three steps. First, define a campaign template with the preferred structure: targeting, bids, budgets, naming. Second, add creatives from Google Drive. The system generates all combinations automatically. Third, launch with one click. Every ad set deploys with consistent naming and labeling for tracking. The entire flow from template to live ads takes minutes, not days.",
  },
  {
    question: "Can teams create multiple ads at once on Meta?",
    answer:
      "Yes. Scalemate connects directly to Meta\u2019s API to deploy hundreds of ad sets in a single batch. Each ad set maintains the team\u2019s preferred structure, whether that\u2019s one creative per ad set, multiple creatives per ad set, or any custom configuration. The system handles the multiplication while preserving the exact campaign architecture the team needs.",
  },
  {
    question: "How does Google Drive integration work?",
    answer:
      "Creatives sync directly from Google Drive into Scalemate\u2019s ad library. Upload images and videos to a designated Drive folder, and the system pulls them in automatically. From there, creatives map to campaign templates and deploy without manual file handling. No dragging files into the ads manager, no re-uploading across platforms.",
  },
  {
    question:
      "What\u2019s the difference between Scalemate and Meta\u2019s native bulk creation?",
    answer:
      "Meta\u2019s built-in tools handle basic duplication within a single account and platform. Scalemate adds template-based launches, cross-platform deployment (Meta + TikTok), Google Drive integration, automatic naming conventions, and full matrix creation across concepts, languages, and GEOs. The gap widens at scale: the more campaigns a team runs, the more time Scalemate saves compared to native tools.",
  },
  {
    question: "Does bulk ad launch work on TikTok?",
    answer:
      "Yes. The same template and workflow logic applies to TikTok campaigns. Define the structure once, and deploy across both Meta and TikTok from the same dashboard. No rebuilding templates per platform, no switching between interfaces. Teams running cross-platform campaigns manage everything in one place.",
  },
  {
    question: "How does bulk ad launch connect to automation rules?",
    answerText:
      "Bulk ad launch handles deployment. Automation rules handle what happens next: monitoring performance, pausing underperformers, scaling winners, and adjusting bids 24/7. Together, they cover the full campaign lifecycle: launch at scale, then optimize on autopilot. Teams using both features report the highest time savings and the lowest manual intervention rates. For a side-by-side category view across the market, see the 13 best Facebook ads automation tools comparison.",
    answer: (
      <>
        Bulk ad launch handles deployment. Automation rules handle what happens
        next: monitoring performance, pausing underperformers, scaling winners,
        and adjusting bids 24/7. Together, they cover the full campaign
        lifecycle: launch at scale, then optimize on autopilot. Teams using
        both features report the highest time savings and the lowest manual
        intervention rates. For a side-by-side category view across the
        market, see the{" "}
        <Link href="/blog/best-facebook-ads-automation-tools">
          13 best Facebook ads automation tools comparison
        </Link>
        .
      </>
    ),
  },
]

const relatedLinks = [
  {
    label: "Bulk Ad Launch",
    href: "/use-cases/bulk-ad-launch",
  },
  {
    label: "Scale Ad Campaigns Faster",
    href: "/use-cases/scale-ad-campaigns-faster",
  },
  {
    label: "Automate Creative Upload for Meta Ads",
    href: "/use-cases/automated-creative-upload-meta",
  },
  {
    label: "Automated Ad Optimization Rules",
    href: "/features/automation-rules",
  },
  {
    label: "Solutions for Media Buyers",
    href: "/solutions/media-buyers",
  },
]

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scalemate Bulk Ad Creation Tool",
  description:
    "Create multiple ads at once on Meta and TikTok. Scalemate\u2019s bulk campaign builder deploys hundreds of ad variations from templates \u2014 no manual setup, no duplicate campaign creation.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.scalemate.co/features/bulk-launch",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free plan available with limited usage",
    url: "https://www.scalemate.co/features/bulk-launch",
  },
  featureList: [
    "Launch hundreds of ad sets from one reusable campaign template",
    "Matrix creation across concepts, languages, GEOs, and formats",
    "Sync creatives directly from Google Drive to ad library",
    "Launch creatives to Meta and TikTok from a single workflow",
    "Auto-label every ad set by concept, language, and GEO",
    "Save campaign structure as a template with targeting, bids, and budgets",
  ],
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
      name: "Bulk Ad Creation Tool",
      item: "https://www.scalemate.co/features/bulk-launch",
    },
  ],
}

export default function BulkLaunchPage() {
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
        videoId="qM4rEFX7pBo"
        name="Bulk Launch Facebook Ads — 100s in Minutes (Scalemate Demo)"
        description="Demo of Scalemate's bulk ad launch tool: launch hundreds of Meta and TikTok ad sets from one campaign template. Sync creatives from Google Drive, set targeting once, deploy at scale."
        uploadDate="2026-04-30T00:00:00+00:00"
        duration="PT55S"
      />

      <HeroSection />

      <section className={styles.video}>
        <Container>
          <div className={styles.videoInner}>
            <span className={styles.videoEyebrow}>55-second demo</span>
            <h2 className={styles.videoHeading}>
              Launch hundreds of ads in minutes, not days
            </h2>
            <p className={styles.videoSub}>
              One campaign template, hundreds of ad sets across Meta and
              TikTok. Creatives sync straight from Google Drive — no manual
              setup, no platform switching.
            </p>
            <VideoEmbed
              videoId="qM4rEFX7pBo"
              title="Bulk Launch Facebook Ads — 100s in Minutes (Scalemate Demo)"
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
      <AudienceSection />
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
