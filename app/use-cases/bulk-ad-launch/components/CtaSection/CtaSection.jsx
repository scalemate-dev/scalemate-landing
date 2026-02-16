import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./CtaSection.module.scss"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Book a Demo — Bulk Ad Launch Tool</h2>
            <p>
              Replace slow campaign launches with a{" "}
              <strong>bulk ad launch tool</strong> built for high-volume
              marketing teams.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/book-a-demo" className={styles.ctaButton}>
                Book a Demo
              </a>
              <a
                href="https://app.scalemate.co/create-account"
                className={styles.ctaButtonOutline}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
