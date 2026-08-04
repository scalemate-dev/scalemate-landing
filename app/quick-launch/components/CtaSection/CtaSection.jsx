import Container from "@/components/elements/Container/Container"
import styles from "./CtaSection.module.scss"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Stop hand-building your ads</h2>
            <p>
              Clone a proven ad, drop your Drive creatives, and watch the batch
              go live. Free, no login, 5 ads a day.
            </p>
            <a href="#top" className={styles.ctaButton}>
              Upload ads for free
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
