"use client"

import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./PricingContent.module.scss"

export default function CtaSection() {
  return (
    <div className={styles.ctaWrapper}>
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Ready to scale your ad operations?</h2>
            <p>
              Start free or talk to our team about a setup built for your
              workflow.
            </p>
            <div className={styles.ctaButtons}>
              <Button
                href="https://app.scalemate.co/create-account"
                className={styles.ctaButtonAccent}
                trackEvent="cta_clicked"
                trackProps={{ cta_location: "pricing_bottom_cta" }}
              >
                Get Started Free
              </Button>
              <Button
                href="/book-a-demo"
                className={styles.ctaButtonOutline}
                trackEvent="cta_clicked"
                trackProps={{ cta_location: "pricing_bottom_cta" }}
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
