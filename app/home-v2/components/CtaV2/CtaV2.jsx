import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./CtaV2.module.scss"

export default function CtaV2() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>
              Stop running ops.{" "}
              <span className={styles.accent}>Start shipping growth.</span>
            </h2>
            <div className={styles.ctaButtons}>
              <Button
                color="accent"
                href="https://app.scalemate.co"
                className={styles.ctaButton}
                trackEvent="cta_clicked"
                trackProps={{ cta_location: "home_v2_final_cta" }}
              >
                Start for free
              </Button>
              <Button
                href="/book-a-demo"
                className={styles.ctaButtonOutline}
                trackEvent="cta_clicked"
                trackProps={{ cta_location: "home_v2_final_cta" }}
              >
                Book a demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
