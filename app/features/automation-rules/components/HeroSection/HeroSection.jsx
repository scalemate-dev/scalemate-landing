import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import { IconRocket, IconChevronRight } from "@tabler/icons-react"
import styles from "./HeroSection.module.scss"

const GlobeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M1.5 6h9M6 1.2C7.3 2.7 8 4.3 8 6s-.7 3.3-2 4.8C4.7 9.3 4 7.7 4 6s.7-3.3 2-4.8Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
  </svg>
)

const TargetIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="5" cy="5" r="1" fill="currentColor" />
  </svg>
)

const ClockIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" />
    <path
      d="M5 3V5.5L6.5 6.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect
      x="1.5"
      y="2"
      width="9"
      height="8"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M1.5 5h9M4 1v2M8 1v2"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
)

export function RuleEngine() {
  return (
    <div className={styles.engine}>
      {/* Card stack — scale card behind, pause card in front */}
      <div className={styles.cardsStack}>
        {/* Back card: Scale */}
        <div className={`${styles.ruleCard} ${styles.ruleCardBack}`}>
          <div className={styles.ruleTop}>
            <div className={styles.toggleTrack}>
              <div className={styles.toggleThumb} />
            </div>
            <span className={styles.accountBadge}>
              <GlobeIcon />
              Web &middot; iOS &middot; Android
            </span>
          </div>
          <div className={styles.ruleName}>Scale winning ad sets</div>
          <div className={styles.ruleTags}>
            <span className={styles.tagOrange}>
              <TargetIcon />
              Ad Set
            </span>
            <span className={styles.tagNeutral}>
              <ClockIcon />
              Every 6h
            </span>
            <span className={styles.tagSlack}>
              <span>#</span>
              slack-alerts
            </span>
          </div>
          <div className={styles.ruleDivider} />
          <div className={styles.ruleFooter}>
            <div className={styles.runInfo}>
              <span className={styles.runLabel}>Last run:</span>
              <span className={styles.runValue}>1 hr ago</span>
            </div>
            <div className={styles.runInfo}>
              <CalendarIcon />
              <span className={styles.runLabel}>Next run:</span>
              <span className={styles.runValue}>in 5 hr</span>
            </div>
          </div>
        </div>

        {/* Front card: Pause */}
        <div className={`${styles.ruleCard} ${styles.ruleCardFront}`}>
          <div className={styles.ruleTop}>
            <div className={styles.toggleTrack}>
              <div className={styles.toggleThumb} />
            </div>
            <span className={styles.accountBadge}>
              <GlobeIcon />
              Web &middot; iOS &middot; Android
            </span>
          </div>
          <div className={styles.ruleName}>Pause low-performing campaigns</div>
          <div className={styles.ruleTags}>
            <span className={styles.tagOrange}>
              <TargetIcon />
              Campaign
            </span>
            <span className={styles.tagNeutral}>
              <ClockIcon />
              Hourly
            </span>
            <span className={styles.tagSlack}>
              <span>#</span>
              slack-alerts
            </span>
          </div>
          <div className={styles.ruleDivider} />
          <div className={styles.ruleFooter}>
            <div className={styles.runInfo}>
              <span className={styles.runLabel}>Last run:</span>
              <span className={styles.runValue}>3 min ago</span>
            </div>
            <div className={styles.runInfo}>
              <CalendarIcon />
              <span className={styles.runLabel}>Next run:</span>
              <span className={styles.runValue}>in 57 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notifications */}
      <div className={`${styles.floater} ${styles.floaterTopRight}`}>
        <div className={styles.floaterDot} data-type="pause" />
        <div className={styles.floaterBody}>
          <span className={styles.floaterAction}>Paused</span>
          <span className={styles.floaterTarget}>Summer_Sale_US_B</span>
        </div>
        <span className={styles.floaterTime}>2:14 AM</span>
      </div>

      <div className={`${styles.floater} ${styles.floaterRight}`}>
        <div className={styles.floaterDot} data-type="scale" />
        <div className={styles.floaterBody}>
          <span className={styles.floaterAction}>Scaled +20%</span>
          <span className={styles.floaterTarget}>Retarget_Lookalike_3</span>
        </div>
        <span className={styles.floaterTime}>4:31 AM</span>
      </div>

      <div className={`${styles.floater} ${styles.floaterBottomRight}`}>
        <div className={styles.floaterDot} data-type="scale" />
        <div className={styles.floaterBody}>
          <span className={styles.floaterAction}>Scaled +15%</span>
          <span className={styles.floaterTarget}>Prospecting_US_V2</span>
        </div>
        <span className={styles.floaterTime}>7:45 AM</span>
      </div>

      {/* Budget saved */}
      {/* <div className={styles.savedCard}>
        <div className={styles.savedAmount}>$12.4K</div>
        <div className={styles.savedLabel}>budget saved this month</div>
      </div> */}
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <Link href="/automation-rules-library" className={styles.heroBadge}>
              <span>FREE</span>
              Browse Rules Library
              <IconChevronRight size={16} className={styles.heroBadgeChevron} />
            </Link>
            <span className={styles.eyebrow}>Automation Rules</span>
            <h1>Automated Ad Optimization Rules</h1>
            <p className={styles.tagline}>The shift that never clocks out</p>
            <p className={styles.description}>
              Automated ad optimization rules that pause underperformers, scale
              winners, and adjust bids. Running 24/7 without manual checks or
              extra headcount:
            </p>
            <ul className={styles.features}>
              <li>Set conditions on any metric: ROAS, CPI, CTR, spend</li>
              <li>Choose auto-execute or alert-only for each rule</li>
              <li>Same logic across all Meta Ads accounts, one dashboard</li>
            </ul>
            <p className={styles.closer}>
              Set the logic once. The rules handle everything from there.
            </p>
            <div className={styles.actions}>
              <Button
                href="https://app.scalemate.co"
                color="accent"
                trackEvent="hero_start_trial"
                trackProps={{ page: "automation-rules" }}
              >
                <IconRocket size={18} />
                Get started for free
              </Button>
              <Button
                href="/book-a-demo"
                outline
                trackEvent="hero_book_demo"
                trackProps={{ page: "automation-rules" }}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <RuleEngine />
          </div>
        </div>
      </Container>
    </section>
  )
}
