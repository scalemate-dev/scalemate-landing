import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./HeroSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.bubble1}
        src={bubble}
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
      />
      <Image
        className={styles.bubble2}
        src={bubble2}
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
      />

      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <h1>
              Launch Hundreds of Ads
              <br />
              in Minutes — <span>Without Manual Setup</span>
            </h1>
            <p>
              A <strong>bulk ad launch tool</strong> removes the manual grind
              from campaign deployment — so UA teams spend time on strategy, not
              copy-paste. New creatives shouldn&apos;t sit in folders waiting to
              go live.
            </p>
          </div>

          <ul className={styles.valueProps}>
            <li>
              <span className={styles.checkIcon}>&#10003;</span>
              Bulk-create hundreds of ad sets from a single setup
            </li>
            <li>
              <span className={styles.checkIcon}>&#10003;</span>
              Sync creatives from cloud storage directly to ad platforms
            </li>
            <li>
              <span className={styles.checkIcon}>&#10003;</span>
              Full control over campaign structure — including one-ad-per-ad-set
            </li>
          </ul>

          <div className={styles.heroCta}>
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
