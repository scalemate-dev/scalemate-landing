import Container from "@/components/elements/Container/Container"
import styles from "./CtaSection.module.scss"

export default function CtaSection({ title, description }) {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>{title}</h2>
            <p>{description}</p>
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
