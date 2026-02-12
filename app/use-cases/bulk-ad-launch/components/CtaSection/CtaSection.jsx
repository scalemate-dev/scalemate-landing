import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./CtaSection.module.scss"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Ready to launch at scale?</h2>
            <p>
              Stop assembling ads by hand. Deploy hundreds of campaigns in
              minutes.
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
