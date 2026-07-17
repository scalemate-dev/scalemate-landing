import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import HeroSection from "./components/HeroSection/HeroSection"
import ProblemSection from "./components/ProblemSection/ProblemSection"
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection"
import ResultsSection from "./components/ResultsSection/ResultsSection"
import AudienceSection from "./components/AudienceSection/AudienceSection"
import CtaSection from "./components/CtaSection/CtaSection"
import styles from "./page.module.scss"

// NOTE: staging page. Upgraded free ad-uploader experience built on /quick-launch
// (reusing the /ad-creative-uploader design), to migrate onto /ad-creative-uploader.
// noindex while staging.
export const metadata = {
  title: "Free Ad Uploader — Bulk Upload Ads to Meta from Drive",
  description:
    "Free ad uploader for Meta — clone a proven ad, drop your Google Drive creatives, and new ads go live in your campaigns. No login, 10 a day. No Ads Manager.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.scalemate.co/quick-launch" },
  openGraph: {
    url: "https://www.scalemate.co/quick-launch",
    title: "Free Ad Uploader — Bulk Upload Ads to Meta from Drive",
    description:
      "A free, no-login ad uploader for Meta. Clone a proven ad, drop Drive creatives, and your new ads go live — 10 a day, no Ads Manager.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Ad Uploader — Bulk Upload Ads to Meta from Drive",
    description:
      "A free, no-login ad uploader for Meta. Clone a proven ad, drop Drive creatives, and your new ads go live — 10 a day, no Ads Manager.",
  },
}

const COMPARE = [
  { label: "Free / no login", free: "✓", signup: "✓", paid: "✗ 7-day trial, then $39–370/mo" },
  { label: "Multi-account", free: "1 account", signup: "Multiple", paid: "Multiple" },
  { label: "Platforms", free: "Meta (FB + IG)", signup: "Meta + TikTok", paid: "Meta only" },
  { label: "Reusable templates", free: "✗", signup: "✓", paid: "✓" },
  { label: "CSV / Sheets per ad", free: "✗", signup: "✓", paid: "✓" },
  { label: "Analytics", free: "✗", signup: "✗", paid: "✓" },
]

const TIERS = [
  { label: "Ads into your existing Meta campaigns", free: "✓", signup: "✓" },
  { label: "Ads per day", free: "10", signup: "More" },
  { label: "Ad accounts", free: "1", signup: "Multiple" },
  { label: "New campaigns via templates", free: "✗", signup: "✓" },
  { label: "CSV / Google Sheets per ad", free: "✗", signup: "✓" },
]

const faqItems = [
  {
    question: "What is an ad uploader?",
    answerText:
      "An ad uploader is a tool that creates many Meta ads at once instead of building each one by hand (campaign, ad set and ad) in Ads Manager. This one clones a reference ad, swaps in creatives from your Google Drive, and launches the new ads into your existing campaign. Free, no login, up to 10 a day.",
    answer:
      "An ad uploader is a tool that creates many Meta ads at once instead of building each one by hand (campaign, ad set and ad) in Ads Manager. This one clones a reference ad, swaps in creatives from your Google Drive, and launches the new ads into your existing campaign. Free, no login, up to 10 a day.",
  },
  {
    question: "Does this actually create the ads, or just upload files?",
    answerText:
      "It creates live ads. Your creatives don't just land in a media library. They become real, running ads in your existing Meta campaign, inheriting the reference ad's copy, targeting, placements and UTMs. If you only need to move creative files into the library, that's a different job (bulk creative upload).",
    answer: (
      <>
        It creates live ads. Your creatives don&apos;t just land in a media
        library. They become real, running ads in your existing Meta campaign,
        inheriting the reference ad&apos;s copy, targeting, placements and UTMs.
        If you only need to move creative files into the library, that&apos;s a
        different job:{" "}
        <Link href="/use-cases/automated-creative-upload-meta">
          see bulk creative upload
        </Link>
        .
      </>
    ),
  },
  {
    question: "How is this different from Meta's native bulk upload?",
    answerText:
      "No spreadsheet and no Ads Manager. Meta's native bulk import makes you download an XLSX template, fill it in offline, and re-upload through Ads Manager. Media buyers call it \"half broken.\" Here you pick a proven ad, drop a Drive folder, and the ads go live. No login required. For the full walkthrough, see how to bulk upload creatives to Meta and TikTok.",
    answer: (
      <>
        No spreadsheet and no Ads Manager. Meta&apos;s native bulk import makes
        you download an XLSX template, fill it in offline, and re-upload through
        Ads Manager. Media buyers call it &ldquo;half broken.&rdquo; Here
        you pick a proven ad, drop a Drive folder, and the ads go live. No login
        required. For the full walkthrough, see{" "}
        <Link href="/blog/bulk-upload-creatives-meta-tiktok">
          how to bulk upload creatives to Meta &amp; TikTok
        </Link>
        .
      </>
    ),
  },
  {
    question: "Is it really free? Do I need to sign up?",
    answerText:
      "Yes, genuinely free: no card, no login, no trial timer. You get 10 ads a day into one ad account. Sign up (still free) only when you want more per day, multiple accounts, new campaigns via templates, or CSV/Sheets per-ad control.",
    answer:
      "Yes, genuinely free: no card, no login, no trial timer. You get 10 ads a day into one ad account. Sign up (still free) only when you want more per day, multiple accounts, new campaigns via templates, or CSV/Sheets per-ad control.",
  },
  {
    question: "Is my account at risk? Are you an official Meta partner?",
    answerText:
      "No risk. We're a verified Meta app running on the official Meta Marketing API, the same way Ads Manager does it. Your files are never stored, and nothing happens to your account that you couldn't do by hand.",
    answer:
      "No risk. We're a verified Meta app running on the official Meta Marketing API, the same way Ads Manager does it. Your files are never stored, and nothing happens to your account that you couldn't do by hand.",
  },
  {
    question: "What's the difference between bulk upload and bulk launch?",
    answerText:
      "They're the same job described two ways. \"Bulk upload\" is how people search for it; \"bulk launch\" is what actually happens: the ads don't sit as drafts, they go live in your campaign. This tool does both in one step.",
    answer:
      "They're the same job described two ways. “Bulk upload” is how people search for it; “bulk launch” is what actually happens: the ads don't sit as drafts, they go live in your campaign. This tool does both in one step.",
  },
  {
    question: "Does it work with TikTok?",
    answerText:
      "The free, no-login tool covers Meta (Facebook and Instagram). TikTok is supported too: sign up for a free account and you can upload ads to TikTok as well as Meta.",
    answer:
      "The free, no-login tool covers Meta (Facebook and Instagram). TikTok is supported too: sign up for a free account and you can upload ads to TikTok as well as Meta.",
  },
]

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Scalemate — Free Ad Uploader",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.scalemate.co/quick-launch",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: [
    "Bulk upload ads to Meta from Google Drive",
    "Clone a reference ad and create new live ads",
    "Add ads into existing campaigns",
    "No login required",
    "10 ads per day free",
  ],
  description:
    "Free ad uploader for Meta. Clone a reference ad, drop creatives from Google Drive, and launch new ads into your existing campaigns. No signup, 10 ads a day.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answerText },
  })),
}

function renderCell(v) {
  if (v === "✓") return <span className={styles.check}>✓</span>
  if (v === "✗") return <span className={styles.dash}>✗</span>
  return v
}

export default function QuickLaunchPage() {
  return (
    <div className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <HeroSection />

      {/* Trust strip */}
      <div className={styles.trust}>
        <Container>
          <ul className={styles.trustList}>
            <li>Verified Meta app — official Meta Marketing API</li>
            <li>2M+ ads launched</li>
            <li>Your files are never stored</li>
          </ul>
        </Container>
      </div>

      <ProblemSection />
      <HowItWorksSection />

      {/* How we compare */}
      <section className={styles.band}>
        <Container>
          <div className={styles.bandHead}>
            <span className={styles.eyebrow}>How we compare</span>
            <h2>What you get free — and what the paid tools charge for</h2>
          </div>
          <div className={styles.compare}>
            <div className={`${styles.cmpRow} ${styles.cmpHead}`}>
              <span />
              <span className={styles.cmpHi}>This tool (free)</span>
              <span>Sign up</span>
              <span>Typical paid tool</span>
            </div>
            {COMPARE.map((r) => (
              <div key={r.label} className={styles.cmpRow}>
                <span className={styles.cmpLabel}>{r.label}</span>
                <span className={styles.cmpHi}>{renderCell(r.free)}</span>
                <span>{renderCell(r.signup)}</span>
                <span className={styles.cmpMuted}>{renderCell(r.paid)}</span>
              </div>
            ))}
          </div>
          <p className={styles.bandNote}>
            We&apos;re the launch step, not an analytics suite, so we don&apos;t
            do reporting.{" "}
            <Link href="/use-cases/bulk-ad-launch">
              See how ScaleMate handles the whole workflow →
            </Link>
          </p>
        </Container>
      </section>

      {/* Free vs Sign up + Need more */}
      <section className={styles.band}>
        <Container>
          <div className={styles.bandHead}>
            <span className={styles.eyebrow}>Free vs. sign up</span>
            <h2>Free forever at 10 a day. Sign up when you outgrow it.</h2>
          </div>
          <div className={styles.tier}>
            <div className={`${styles.tierRow} ${styles.tierHead}`}>
              <span />
              <span className={styles.tierHi}>Free · no login</span>
              <span>Sign up</span>
            </div>
            {TIERS.map((r) => (
              <div key={r.label} className={styles.tierRow}>
                <span className={styles.tierLabel}>{r.label}</span>
                <span className={styles.tierHi}>{renderCell(r.free)}</span>
                <span>{renderCell(r.signup)}</span>
              </div>
            ))}
          </div>

          <div className={styles.needMore}>
            <div>
              <h3>Need new campaigns, more accounts, or a unique link per ad?</h3>
              <p>Sign up (still free) and the ceiling lifts:</p>
              <ul>
                <li>TikTok too: upload ads to TikTok as well as Meta.</li>
                <li>Reusable templates: set a new campaign up once, launch into it again and again.</li>
                <li>CSV / Google Sheets import: a unique link, headline and settings for every ad. Built for ecommerce catalogs and web-to-app funnels.</li>
                <li>Multiple ad accounts: switch between clients without re-connecting.</li>
              </ul>
            </div>
            <a href="https://app.scalemate.co/create-account" className={styles.needMoreBtn}>
              Sign up for more
            </a>
          </div>
        </Container>
      </section>

      <AudienceSection />
      <ResultsSection />

      <section className={styles.faq}>
        <Container>
          <FAQ faqItems={faqItems} title="Ad uploader — quick answers" subtitle="Everything about the free tool" theme="light" multiOpen />
        </Container>
      </section>

      <CtaSection />
    </div>
  )
}
