import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import FAQ from "@/components/FAQ/FAQ"
import { IconRocket } from "@tabler/icons-react"
import LibraryClient from "./LibraryClient"
import { METHODS } from "./methods-data"
import styles from "./page.module.scss"

const METHOD_COUNT = METHODS.length

export const metadata = {
  title: `Scalemate Creative Testing Library: ${METHOD_COUNT} Methods by Goal`,
  description: `${METHOD_COUNT} production-tested creative testing methods sorted by goal — 3-3-3, hooks test, bulk CBO, Cheap Geo, Mirror-BAU. Free templates + automation setup for Meta + TikTok teams.`,
  alternates: {
    canonical: "https://www.scalemate.co/creative-testing-library",
  },
  openGraph: {
    url: "https://www.scalemate.co/creative-testing-library",
    type: "website",
    title: `Scalemate Creative Testing Library: ${METHOD_COUNT} Methods by Goal`,
    description: `${METHOD_COUNT} production-tested creative testing methods curated by Scalemate. 3-3-3, hooks test, bulk CBO, Cheap Geo, Mirror-BAU — filter by goal, platform, budget.`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Scalemate Creative Testing Library: ${METHOD_COUNT} Methods by Goal`,
    description: `${METHOD_COUNT} creative testing methods curated for Meta + TikTok teams. Filter by goal, platform, budget. Free.`,
    images: ["/og-image.png"],
  },
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
      name: "Creative Testing Library",
      item: "https://www.scalemate.co/creative-testing-library",
    },
  ],
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scalemate Creative Testing Library",
  description: `${METHOD_COUNT} creative testing methods curated for Meta + TikTok teams — filter by goal, platform, budget. Each includes Scalemate automation setup.`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.scalemate.co/creative-testing-library",
  image: "https://www.scalemate.co/og-image.png",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free reference library",
  },
}

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Creative Testing Methods",
  numberOfItems: METHOD_COUNT,
  itemListElement: METHODS.map((m, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: m.name,
    description: m.summary,
  })),
}

const faqItems = [
  {
    question: "What is the best creative testing framework for Facebook ads?",
    answer:
      "No single method wins for every team. The best framework depends on goal (find winners vs validate vs kill losers), budget level (sub-$1K/mo vs $10K+/mo), team size, and whether you're running on Meta, TikTok, or both. The 3-3-3 method is the most cited starter for Meta-only teams. For teams running 20+ creatives per week post-Andromeda, multi-variant battery testing with broad targeting is the modern default. Use the filters above to pick by goal first, then by budget — every method tags both.",
  },
  {
    question: "How many creatives should I test per week in 2026?",
    answer:
      "Meta's Andromeda update demands creative volume. Teams running Advantage+ with broad targeting now ship 10-30 creatives per ad set per week as the floor. For teams below $5K/mo spend, 5-10 creatives per week across 2-3 ad sets still works. Budget-rich teams ($50K+/mo) ship 50-100 creatives per week to keep up with creative fatigue cycles that compress to 7-14 days under Andromeda.",
  },
  {
    question: "What's the 3-3-3 method in Facebook ads?",
    answer:
      "3-3-3 means 3 ad sets × 3 creatives × 3 days. Each ad set tests 3 creatives in isolation for 72 hours, then the winner moves to a scaling campaign and losers get killed. Popularized by Pilothouse Digital. Strengths: fast decision cycle, clear winner identification, low per-test budget. Weaknesses: 3 days isn't enough to escape Meta's learning phase, so noise vs signal can be high on small budgets. Works best at $50+/day per ad set.",
  },
  {
    question: "Is Meta's Conversion Lift test the same as A/B testing?",
    answer:
      "No. A/B testing compares two campaign variants against each other (both have ads running). Conversion Lift uses a hold-out group — some users see your ads, some don't — to measure how many conversions are truly incremental vs. would have happened anyway. Note that Conversion Lift is not self-serve in Ads Manager for most accounts — it requires a Meta sales rep relationship. A/B Test is the self-serve option you see in Experiments menu, and for most teams it's the right starting point for controlled comparison.",
  },
  {
    question: "How long should I run a creative test before deciding?",
    answer:
      "Depends on the method. 3-3-3 = 72 hours. 3-2-2 sprint = 5 days (high budget) or 14 days canonical. Bulk CBO 2-phase = 6-12 days total. Meta A/B Test = 7-14 days minimum. The biggest mistake: running short tests at low daily budget. If your method calls for <7 day decisions, raise budget per ad set to compress the learning phase, or accept higher noise in early results.",
  },
]

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

const relatedResources = [
  {
    label: "Automation Rules Library — 20+ production-tested rules",
    href: "/automation-rules-library",
  },
  {
    label: "Bulk Ad Launch Use Case",
    href: "/use-cases/bulk-ad-launch",
  },
  {
    label: "13 Best Facebook Ads Automation Tools (2026)",
    href: "/blog/best-facebook-ads-automation-tools",
  },
]

export default function CreativeTestingLibraryPage() {
  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Meta + TikTok &middot; Creative Testing Library
              </span>
              <h1 className={styles.heroTitle}>
                {METHOD_COUNT} creative testing methods.
                <br />
                <span className={styles.heroTitleAccent}>One place to pick from.</span>
              </h1>
              <p className={styles.tagline}>
                Curated industry frameworks — 3-3-3, hooks test, bulk CBO, Cheap Geo, Mirror-BAU — sorted by goal. Each includes the Scalemate automation setup for that flow.
              </p>
              <ul className={styles.heroFeatures}>
                <li>Filter by goal — find winners, validate, kill losers, Andromeda-ready, controlled, mobile UA</li>
                <li>Each method tagged by platform (Meta / TikTok), budget tier, time-to-decision, Andromeda fit</li>
                <li>"How to automate this flow" — concrete Scalemate setup per method</li>
                <li>Public reference, no email gate to browse</li>
              </ul>
              <div className={styles.heroActions}>
                <Button
                  href="https://app.scalemate.co"
                  color="accent"
                  trackEvent="hero_start_trial"
                  trackProps={{ page: "creative-testing-library" }}
                >
                  <IconRocket size={18} />
                  Try Scalemate free
                </Button>
                <Link
                  href="/automation-rules-library"
                  className={styles.heroSecondaryLink}
                >
                  Browse automation rules library →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── LIBRARY ────────────────────────── */}
      <section className={styles.librarySection}>
        <Container>
          <LibraryClient />
        </Container>
      </section>

      {/* ─── RELATED RESOURCES ──────────────── */}
      <section className={styles.relatedSection}>
        <Container>
          <h2 className={styles.relatedHeading}>Related resources</h2>
          <ul className={styles.relatedList}>
            {relatedResources.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.label} →</Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ─── FAQ ────────────────────────────── */}
      <section className={styles.faqSection}>
        <Container>
          <h2 className={styles.faqHeading}>Frequently asked questions</h2>
          <FAQ items={faqItems} />
        </Container>
      </section>

      {/* ─── BOTTOM CTA ─────────────────────── */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaCard}>
            <h2>Apply any method with Scalemate automation</h2>
            <p>
              Bulk-launch test templates, auto-pause rules on goal, auto-revert when conditions reverse. Free tier — Meta + TikTok, no credit card.
            </p>
            <Button
              href="https://app.scalemate.co"
              color="accent"
              trackEvent="footer_start_trial"
              trackProps={{ page: "creative-testing-library" }}
            >
              <IconRocket size={18} />
              Try Scalemate free
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
