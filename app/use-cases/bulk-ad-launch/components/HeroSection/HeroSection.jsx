import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./HeroSection.module.scss"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <span className={styles.label}>Bulk Ad Launch Tool</span>

          <h1>
            Launch <span className={styles.accent}>Hundreds of Ads</span> in
            minutes without manual setup
          </h1>

          <p className={styles.description}>
            A <strong>bulk ad launch tool</strong> removes the manual grind from
            campaign deployment, no more slow launches or hours spent on
            repetitive setup. One setup covers the full workflow:
          </p>

          <ul className={styles.features}>
            <li className={styles.feature}>
              <span className={styles.featureNum}>01</span>
              <span className={styles.featureText}>
                Bulk-create hundreds of ad sets from a single setup
              </span>
            </li>
            <li className={styles.feature}>
              <span className={styles.featureNum}>02</span>
              <span className={styles.featureText}>
                Sync creatives from cloud storage directly to ad platforms
              </span>
            </li>
            <li className={styles.feature}>
              <span className={styles.featureNum}>03</span>
              <span className={styles.featureText}>
                Full control over campaign structure, including
                one-ad-per-ad-set
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
