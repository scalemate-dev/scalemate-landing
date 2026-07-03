import Container from "@/components/elements/Container/Container"
import QuickLaunchWidget from "./components/QuickLaunchWidget/QuickLaunchWidget"
import QuickLaunchErrorBoundary from "./components/QuickLaunchWidget/QuickLaunchErrorBoundary"
import styles from "./page.module.scss"

export const metadata = {
  title: "Quick Launch Ads — Launch New Ads in Seconds | Scalemate",
  description:
    "Pick a reference ad, drop your creatives, and launch dozens of new Facebook ads in one click. Free tool — no setup needed.",
  alternates: {
    canonical: "https://www.scalemate.co/quick-launch",
  },
  openGraph: {
    url: "https://www.scalemate.co/quick-launch",
    title: "Quick Launch Ads — Launch New Ads in Seconds | Scalemate",
    description:
      "Pick a reference ad, drop your creatives, and launch dozens of new Facebook ads in one click. Free tool — no setup needed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Launch Ads — Launch New Ads in Seconds | Scalemate",
    description:
      "Pick a reference ad, drop your creatives, and launch dozens of new Facebook ads in one click.",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Quick Launch — Scalemate",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Launch dozens of new Facebook ads by duplicating a reference ad and swapping creatives. Free, no signup required.",
}

export default function QuickLaunchPage() {
  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {/* Hero + Widget */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Launch new ads in seconds
              </h1>
              <p className={styles.heroSubtitle}>
                Pick a reference ad, drop your creatives, hit launch. Each
                creative becomes a new ad with the same copy, targeting, and
                UTMs. No setup, no downloads, no Ads Manager tabs.
              </p>
            </div>

            <div className={styles.widgetWrap}>
              <QuickLaunchErrorBoundary>
                <QuickLaunchWidget />
              </QuickLaunchErrorBoundary>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
