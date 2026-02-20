import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./HeroSection.module.scss"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <span className={styles.label}>Ads launcher</span>

          <h1>
            Launch Hundreds of Ads with{" "}
            <span className={styles.accent}>Bulk Ad Launch tool</span>
          </h1>

          <p className={styles.description}>
            A bulk ad launch tool removes the manual grind from campaign
            deployment, no more slow launches or hours spent on repetitive
            setup. One setup covers the full workflow:
          </p>

          <ul className={styles.features}>
            <li className={styles.feature}>
              <span className={styles.featureText}>
                Hundreds of ad sets from one setup
              </span>
            </li>
            <li className={styles.feature}>
              <span className={styles.featureText}>
                Sync creatives from cloud storage
              </span>
            </li>
            <li className={styles.feature}>
              <span className={styles.featureText}>
                Full control over campaign structure
              </span>
            </li>
          </ul>

          <p className={styles.aside}>
            The entire process, from creative sync to live campaigns, runs in
            minutes. No more assembling ad sets by hand or waiting days for a
            launch.
          </p>

          <div className={styles.cta}>
            <Button color="accent" href="/book-a-demo">
              Book a Demo
            </Button>
            <Button outline href="https://app.scalemate.co/create-account">
              Start Free Trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
