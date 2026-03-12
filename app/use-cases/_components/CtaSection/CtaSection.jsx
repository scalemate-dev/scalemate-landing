import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
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
              <Button
                href={
                  secondaryCta?.href ??
                  "https://app.scalemate.co/create-account"
                }
                className={styles.ctaButton}
                trackEvent="cta_clicked"
                trackProps={{ cta_location: "use_case_cta_section" }}
              >
                {secondaryCta?.label ?? "Try Scalemate"}
              </Button>
              <Button
                href="/book-a-demo"
                className={styles.ctaButtonOutline}
                trackEvent="cta_clicked"
                trackProps={{ cta_location: "use_case_cta_section" }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
