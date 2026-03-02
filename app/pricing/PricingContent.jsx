"use client"

import { IconCheck } from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./PricingContent.module.scss"

const FREE_FEATURES = [
  "1 Ad account",
  "2 Active rules",
  "100 Ad launches / month",
  "50 AI messages / month",
  "Unlimited uploads",
]

const CUSTOM_FEATURES = []

export default function PricingContent() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Pricing</span>
            <h1>
              Start <span className={styles.accent}>free, </span>
              Scale when you're ready
            </h1>
            <p className={styles.subtitle}>
              Automate repetitive ad operations across Meta and TikTok at no
              cost. Need to scale further? We'll build a plan around your
              workflow
            </p>
          </div>
        </Container>
      </section>

      {/* Cards */}
      <section className={styles.cards}>
        <Container>
          <div className={styles.grid}>
            {/* Free Card */}
            <div className={styles.cardFree}>
              <div className={styles.cardHeader}>
                <span className={styles.planLabel}>Free</span>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>$0</span>
                  <span className={styles.pricePeriod}>/month</span>
                </div>
                <p className={styles.planDesc}>
                  For performance teams ready to cut manual ad work
                </p>
              </div>
              <ul className={styles.featureList}>
                {FREE_FEATURES.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <IconCheck
                      size={18}
                      stroke={2.5}
                      className={styles.checkFree}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="https://app.scalemate.co/create-account"
                className={styles.ctaFree}
                trackEvent="cta_clicked"
                trackProps={{
                  cta_location: "pricing_free_card",
                  cta_text: "Try for free",
                }}
              >
                Try for free
              </Button>
              <span className={styles.noCc}>No credit card required</span>
            </div>

            {/* Custom Card */}
            <div className={styles.cardCustom}>
              <div className={styles.cardHeader}>
                <span className={styles.planLabelCustom}>Custom</span>
                <div className={styles.price}>
                  <span className={styles.priceCustom}>Let's talk</span>
                </div>
                <p className={styles.planDescCustom}>
                  Scale ad operations without scaling your team. We'll set it up
                  with you
                </p>
              </div>
              <ul className={styles.featureList}>
                {CUSTOM_FEATURES.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <IconCheck
                      size={18}
                      stroke={2.5}
                      className={styles.checkCustom}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/book-a-demo"
                className={styles.ctaCustom}
                trackEvent="cta_clicked"
                trackProps={{
                  cta_location: "pricing_custom_card",
                  cta_text: "Book a Demo",
                }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
