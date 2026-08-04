import Link from "next/link"
import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import g2Logo from "@/assets/icons/g2-logo.svg"
import FAQ from "@/components/FAQ/FAQ"
import VideoEmbed from "@/components/elements/VideoEmbed/VideoEmbed"
import VideoObjectSchema from "@/components/elements/VideoEmbed/VideoObjectSchema"
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
    "Free ad uploader for Meta — clone a proven ad, drop your Google Drive creatives, and new ads go live in your campaigns. No login, 5 a day. No Ads Manager.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.scalemate.co/quick-launch" },
  openGraph: {
    url: "https://www.scalemate.co/quick-launch",
    title: "Free Ad Uploader — Bulk Upload Ads to Meta from Drive",
    description:
      "A free, no-login ad uploader for Meta. Clone a proven ad, drop Drive creatives, and your new ads go live — 5 a day, no Ads Manager.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Ad Uploader — Bulk Upload Ads to Meta from Drive",
    description:
      "A free, no-login ad uploader for Meta. Clone a proven ad, drop Drive creatives, and your new ads go live — 5 a day, no Ads Manager.",
  },
}

const COMPARE = [
  {
    label: "Free forever",
    free: "✓",
    signup: "✓",
    paid: "7-day trial, then $39–370/mo",
  },
  {
    label: "Multi-account",
    free: "1 account",
    signup: "Multiple",
    paid: "Multiple",
  },
  {
    label: "Platforms",
    free: "Meta (Facebook, Instagram, Threads)",
    signup: "Meta, TikTok",
    paid: "Meta only",
  },
  { label: "Reusable templates", free: "✗", signup: "✓", paid: "✓" },
  { label: "CSV / Sheets per ad", free: "✗", signup: "✓", paid: "✓" },
]

const TIERS = [
  { label: "Ads into your existing Meta campaigns", free: "✓", signup: "✓" },
  { label: "Ad launches", free: "5 per day", signup: "100 per month" },
  { label: "Ad Platforms", free: "Meta", signup: "Meta, TikTok" },
  { label: "Launch new campaigns", free: "✗", signup: "✓" },
  { label: "CSV / XLSX ad launcher", free: "✗", signup: "✓" },
  { label: "Auto-scale / Stop-loss", free: "✗", signup: "✓" },
]

const faqItems = [
  {
    question: "What is an ad uploader?",
    answerText:
      "An ad uploader (or ads uploader) is a tool that creates many Meta ads at once instead of building each one by hand (campaign, ad set and ad) in Ads Manager. This one clones a reference ad, swaps in creatives from your Google Drive, and launches the new ads into your existing campaign. It's the fastest way to bulk upload ads to Meta. Free, no login, up to 5 a day.",
    answer:
      "An ad uploader (or ads uploader) is a tool that creates many Meta ads at once instead of building each one by hand (campaign, ad set and ad) in Ads Manager. This one clones a reference ad, swaps in creatives from your Google Drive, and launches the new ads into your existing campaign. It's the fastest way to bulk upload ads to Meta. Free, no login, up to 5 a day.",
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
      'No spreadsheet and no Ads Manager. Meta\'s native bulk import makes you download an XLSX template, fill it in offline, and re-upload through Ads Manager. Media buyers call it "half broken." Here you pick a proven ad, drop a Drive folder, and the ads go live. No login required. For the full walkthrough, see how to bulk upload creatives to Meta and TikTok.',
    answer: (
      <>
        No spreadsheet and no Ads Manager. Meta&apos;s native bulk import makes
        you download an XLSX template, fill it in offline, and re-upload through
        Ads Manager. Media buyers call it &ldquo;half broken.&rdquo; Here you
        pick a proven ad, drop a Drive folder, and the ads go live. No login
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
      "Yes, genuinely free: no card, no login, no trial timer. You get 5 ads a day into one ad account. Sign up (still free) only when you want more per day, multiple accounts, new campaigns via templates, or CSV/Sheets per-ad control.",
    answer:
      "Yes, genuinely free: no card, no login, no trial timer. You get 5 ads a day into one ad account. Sign up (still free) only when you want more per day, multiple accounts, new campaigns via templates, or CSV/Sheets per-ad control.",
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
      'They\'re the same job described two ways. "Bulk upload" is how people search for it; "bulk launch" is what actually happens: the ads don\'t sit as drafts, they go live in your campaign. This tool does both in one step.',
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
    "5 ads per day free",
  ],
  description:
    "Free ad uploader for Meta. Clone a reference ad, drop creatives from Google Drive, and launch new ads into your existing campaigns. No signup, 5 ads a day.",
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
  if (v === "✗") return <span className={styles.dash}>—</span>
  return v
}

export default function QuickLaunchPage() {
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

      <HeroSection />

      {/* Trust strip */}
      <div className={styles.trust}>
        <Container>
          <div className={styles.trustInner}>
            <Image
              src="/meta-verified-app-badge.png"
              alt="Meta Verified app"
              width={170}
              height={54}
              className={styles.trustBadge}
            />
            <span className={styles.trustDivider} aria-hidden="true" />
            <ul className={styles.trustList}>
              <li>Verified Meta Partner</li>
              <li>2M+ ads launched</li>
            </ul>
            <span className={styles.trustDivider} aria-hidden="true" />
            <a
              href="https://www.g2.com/products/scalemate/reviews"
              target="_blank"
              rel="nofollow noopener"
              className={styles.g2Rating}
            >
              <Image
                src={g2Logo}
                alt="G2"
                width={20}
                height={20}
                className={styles.g2Logo}
              />
              <span
                className={styles.g2Stars}
                aria-label="Rated 5 out of 5 on G2"
              >
                ★★★★★
              </span>
            </a>
          </div>
        </Container>
      </div>

      <ProblemSection />
      <HowItWorksSection />

      {/* See it in action — VIDEO
          TODO(Natalia): confirm exact uploadDate + duration for the schema below. */}
      <section className={styles.band}>
        <VideoObjectSchema
          videoId="bxqfoXlMdEU"
          name="How to Bulk-Launch Meta & TikTok Ads From Google Drive (100 Ads/Min)"
          description="See the free ad uploader in action: clone a reference ad, drop your creatives from Google Drive, and launch new ads live into your existing Meta campaign — no Ads Manager, no spreadsheet."
          uploadDate="2026-07-17"
          duration="PT21S"
        />
        <Container>
          <div className={styles.bandHead}>
            <span className={styles.eyebrow}>See it in action</span>
            <h2>Watch a batch go live in seconds</h2>
          </div>
          <VideoEmbed
            videoId="bxqfoXlMdEU"
            title="How to Bulk-Launch Meta Ads From Google Drive"
            className={styles.videoEmbed}
          />
        </Container>
      </section>

      {/* How we compare */}
      <section className={styles.band}>
        <Container>
          <div className={styles.bandHead}>
            <span className={styles.eyebrow}>How we compare</span>
            <h2>What you get free — and what the paid tools charge for</h2>
            <p className={styles.bandSub}>
              Here&apos;s how the free tool stacks up against a free account and
              the typical paid uploader.
            </p>
          </div>
          <div className={styles.compare}>
            <div className={`${styles.cmpRow} ${styles.cmpHead}`}>
              <span />
              <span>This tool (free)</span>
              <span className={styles.cmpHi}>Free account</span>
              <span>Typical paid tool</span>
            </div>
            {COMPARE.map((r) => (
              <div key={r.label} className={styles.cmpRow}>
                <span className={styles.cmpLabel}>{r.label}</span>
                <span>{renderCell(r.free)}</span>
                <span className={styles.cmpHi}>{renderCell(r.signup)}</span>
                <span className={styles.cmpMuted}>{renderCell(r.paid)}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Free vs Sign up + Need more */}
      <section className={styles.band}>
        <Container>
          <div className={styles.bandHead}>
            <span className={styles.eyebrow}>Free vs. sign up</span>
            <h2>Free at 5 ads a day. Sign up when you outgrow it.</h2>
            <p className={styles.bandSub}>
              The no-login tool launches 5 ads a day into your existing
              campaigns. A free account unlocks the rest.
            </p>
          </div>
          <div className={styles.tier}>
            <div className={`${styles.tierRow} ${styles.tierHead}`}>
              <span />
              <span>Free · no login</span>
              <span className={styles.tierHi}>Free account</span>
            </div>
            {TIERS.map((r) => (
              <div key={r.label} className={styles.tierRow}>
                <span className={styles.tierLabel}>{r.label}</span>
                <span>{renderCell(r.free)}</span>
                <span className={styles.tierHi}>{renderCell(r.signup)}</span>
              </div>
            ))}
            <p className={styles.bandNote}>
              <Link href="/use-cases/bulk-ad-launch">
                See how Scalemate handles the whole workflow →
              </Link>
            </p>
          </div>

          <div className={styles.needMore}>
            <div className={styles.needMorePitch}>
              <span className={styles.needMoreDash} aria-hidden="true" />
              <h3>
                Need new campaigns, more accounts, or a unique link per ad?
              </h3>
              <p>Sign up (still free) and the ceiling lifts.</p>
              <a
                href="https://app.scalemate.co/create-account"
                className={styles.needMoreBtn}
              >
                Sign up for more
              </a>
              <span className={styles.needMoreNote}>
                Free account · no credit card
              </span>
            </div>
            <ul className={styles.needMoreList}>
              <li>
                <strong>TikTok too</strong>
                Upload ads to TikTok as well as Meta.
              </li>
              <li>
                <strong>Reusable templates</strong>
                Set a new campaign up once, launch into it again and again.
              </li>
              <li>
                <strong>CSV / Google Sheets import</strong>A unique link,
                headline and settings for every ad. Built for ecommerce catalogs
                and web-to-app funnels.
              </li>
              <li>
                <strong>Multiple ad accounts</strong>
                Switch between clients without re-connecting.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <AudienceSection />

      {/* Testimonial — verified G2 review (verbatim) */}
      <section className={styles.testimonial}>
        <Container>
          <figure className={styles.quoteCard}>
            <div className={styles.quoteTop}>
              <Image
                src={g2Logo}
                alt="G2"
                width={26}
                height={26}
                className={styles.quoteG2}
              />
              <div className={styles.quoteStars} aria-label="Rated 5 out of 5">
                ★★★★★
              </div>
            </div>
            <blockquote>
              &ldquo;…push at least 40 new creatives a day into it with
              Scalemate, straight from Drive, across different products and 4
              accounts. I used to lose half my week just launching creatives
              instead of doing creative strategy. Now it&apos;s 20 minutes at
              the end of the day instead of a couple of days.&rdquo;
            </blockquote>
            <figcaption>
              Creative Marketing Specialist, Small-Business ·{" "}
              <a
                href="https://www.g2.com/products/scalemate/reviews#reviews"
                target="_blank"
                rel="nofollow noopener"
              >
                Verified G2 review
              </a>
            </figcaption>
          </figure>
        </Container>
      </section>

      <ResultsSection />

      <section className={styles.faq}>
        <Container>
          <FAQ
            faqItems={faqItems}
            title="Ad uploader — quick answers"
            subtitle="Everything about the free tool"
            theme="light"
            multiOpen
          />
        </Container>
      </section>

      <CtaSection />
    </div>
  )
}
