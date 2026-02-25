import Container from "@/components/elements/Container/Container"
import styles from "./CtaSection.module.scss"

export default function CtaSection({ title, description, secondaryCta }) {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={styles.ctaButtons}>
              <a
                href={secondaryCta?.href ?? "https://app.scalemate.co/create-account"}
                className={styles.ctaButton}
              >
                {secondaryCta?.label ?? "Start Free Trial"}
              </a>
              <a href="/book-a-demo" className={styles.ctaButtonOutline}>
                Book a Demo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
