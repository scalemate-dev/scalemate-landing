import Container from "@/components/elements/Container/Container"
import QuickLaunchErrorBoundary from "../QuickLaunchWidget/QuickLaunchErrorBoundary"
import QuickLaunchWidget from "../QuickLaunchWidget/QuickLaunchWidget"
import styles from "./HeroSection.module.scss"

export default function HeroSection() {
  return (
    <section className={styles.hero} id="top">
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <span className={styles.label}>Free ad uploader · no login</span>
            <h1>
              Bulk upload ads to{" "}
              <span className={styles.accent}>Meta</span> straight from Google
              Drive
            </h1>
            <p>
              The free ads uploader that clones a proven ad, swaps in your Drive
              creatives, and pushes new ads live into your existing Meta
              campaigns. No XLSX, no Ads Manager, no manual busywork.
            </p>
            <div className={styles.chips}>
              <span>Free</span>
              <span>No login</span>
              <span>Meta</span>
              <span>5 ads/day</span>
              <span>1 account</span>
            </div>
          </div>

          <div className={styles.widgetWrapper}>
            <QuickLaunchErrorBoundary>
              <QuickLaunchWidget />
            </QuickLaunchErrorBoundary>
          </div>
        </div>
      </Container>
    </section>
  )
}
