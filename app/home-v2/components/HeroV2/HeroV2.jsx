import Link from "next/link"
import { IconChevronRight } from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import FloatingPaths from "./FloatingPaths"
import styles from "./HeroV2.module.scss"

const FEATURES = [
  {
    eyebrow: "Launch system",
    label: "Bulk launches, structured for any test matrix",
  },
  {
    eyebrow: "Optimization system",
    label: "Set your strategy. Engine runs it 24/7",
  },
  {
    eyebrow: "Integration layer",
    label: "Connects to your Drive, MMP, and internal stack",
  },
]

export default function HeroV2() {
  return (
    <section className={styles.hero}>
      <FloatingPaths />

      <Container>
        <div className={styles.content}>
          <Link href="/ad-creative-uploader" className={styles.badge}>
            <span className={styles.badgePill}>FREE</span>
            <span className={styles.badgeText}>Ad Uploader</span>
            <IconChevronRight size={14} className={styles.badgeChevron} />
          </Link>

          <h1 className={styles.title}>
            Ad-ops infrastructure{" "}
            <span className={styles.titleQualifier}>
              for performance marketing
            </span>
          </h1>

          <p className={styles.description}>
            Plug production-grade automation and AI into your daily ad
            operations. Eliminate repetitive manual work and scale ad
            campaigns faster.
          </p>

          <div className={styles.cta}>
            <Button
              color="accent"
              href="https://app.scalemate.co/create-account"
              trackEvent="cta_clicked"
              trackProps={{ cta_location: "home_v2_hero" }}
            >
              Try for free
            </Button>
            <Button
              outline
              darkTheme
              href="/book-a-demo"
              trackEvent="cta_clicked"
              trackProps={{ cta_location: "home_v2_hero" }}
            >
              Book a Demo
            </Button>
          </div>

          <ul className={styles.features}>
            {FEATURES.map((f) => (
              <li key={f.eyebrow} className={styles.feature}>
                <span className={styles.featureEyebrow}>{f.eyebrow}</span>
                <span className={styles.featureLabel}>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
