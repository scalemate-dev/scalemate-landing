import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import { IconRocket } from "@tabler/icons-react"
import styles from "./HeroSection.module.scss"

const FolderIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M1.5 3V9.5a1 1 0 001 1h7a1 1 0 001-1V4.5a1 1 0 00-1-1H6L5 2H2.5a1 1 0 00-1 1Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
  </svg>
)

const LayersIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M6 1.5L1.5 4L6 6.5L10.5 4L6 1.5Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M1.5 6.5L6 9L10.5 6.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.5 8.5L6 11L10.5 8.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GridIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <rect
      x="1"
      y="1"
      width="3"
      height="3"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <rect
      x="6"
      y="1"
      width="3"
      height="3"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <rect
      x="1"
      y="6"
      width="3"
      height="3"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <rect
      x="6"
      y="6"
      width="3"
      height="3"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
)

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path
      d="M2 5.5L4 7.5L8 3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function LaunchEngine() {
  return (
    <div className={styles.engine}>
      {/* Template card stack */}
      <div className={styles.cardsStack}>
        {/* Back card: variations */}
        <div className={`${styles.templateCard} ${styles.templateCardBack}`}>
          <div className={styles.templateTop}>
            <div className={styles.templateBadge}>
              <GridIcon />
              <span>225 ad sets generated</span>
            </div>
          </div>
          <div className={styles.templateName}>Summer_Sale_EN × 15 GEOs</div>
          <div className={styles.templateMeta}>
            <span className={styles.tagGreen}>
              <CheckIcon />
              Deployed
            </span>
            <span className={styles.tagNeutral}>
              <LayersIcon />5 concepts × 15 langs
            </span>
          </div>
        </div>

        {/* Front card: Template */}
        <div className={`${styles.templateCard} ${styles.templateCardFront}`}>
          <div className={styles.templateTop}>
            <div className={styles.statusPill}>
              <div className={styles.statusDot} />
              Ready to launch
            </div>
            <span className={styles.templateBadge}>
              <FolderIcon />
              Google Drive
            </span>
          </div>
          <div className={styles.templateName}>
            Campaign Template: Q1 Prospecting
          </div>
          <div className={styles.templateMeta}>
            <span className={styles.tagOrange}>
              <GridIcon />5 concepts
            </span>
            <span className={styles.tagNeutral}>
              <LayersIcon />
              15 languages
            </span>
            <span className={styles.tagPurple}>
              <span>3</span>
              formats
            </span>
          </div>
          <div className={styles.templateDivider} />
          <div className={styles.templateFooter}>
            <div className={styles.templateInfo}>
              <span className={styles.infoLabel}>Target:</span>
              <span className={styles.infoValue}>Meta + TikTok</span>
            </div>
            <div className={styles.templateInfo}>
              <span className={styles.infoLabel}>Ad sets:</span>
              <span className={styles.infoValue}>225 total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notifications */}
      <div className={`${styles.floater} ${styles.floaterTopRight}`}>
        <div className={styles.floaterDot} data-type="success" />
        <div className={styles.floaterBody}>
          <span className={styles.floaterAction}>Launched</span>
          <span className={styles.floaterTarget}>75 ad sets → Meta</span>
        </div>
        <span className={styles.floaterTime}>0:03s</span>
      </div>

      <div className={`${styles.floater} ${styles.floaterRight}`}>
        <div className={styles.floaterDot} data-type="success" />
        <div className={styles.floaterBody}>
          <span className={styles.floaterAction}>Synced</span>
          <span className={styles.floaterTarget}>42 creatives from Drive</span>
        </div>
        <span className={styles.floaterTime}>just now</span>
      </div>

      <div className={`${styles.floater} ${styles.floaterBottomRight}`}>
        <div className={styles.floaterDot} data-type="info" />
        <div className={styles.floaterBody}>
          <span className={styles.floaterAction}>Auto-labeled</span>
          <span className={styles.floaterTarget}>concept × lang × GEO</span>
        </div>
        <span className={styles.floaterTime}>0:04s</span>
      </div>

      {/* Time saved card */}
      <div className={styles.savedCard}>
        <div className={styles.savedAmount}>3 min</div>
        <div className={styles.savedLabel}>instead of 3–5 days</div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Bulk Ad Creation Tool</span>
            <h1>Bulk Ad Creation Tool</h1>
            <p className={styles.tagline}>
              Launch hundreds of ads. Click once.
            </p>
            <p className={styles.description}>
              A bulk ad creation tool that turns campaign
              templates into hundreds of live ad sets. Define structure once.
              The system handles targeting, creatives, and deployment across
              Meta and TikTok:
            </p>
            <ul className={styles.features}>
              <li>Create multiple ads at once on Meta</li>
              <li>Reusable templates instead of manual setup</li>
              <li>Launch multiple ads automatically from Google Drive</li>
            </ul>
            <div className={styles.actions}>
              <Button
                href="/book-a-demo"
                color="accent"
                trackEvent="hero_book_demo"
                trackProps={{ page: "bulk-launch" }}
              >
                Book a Demo
              </Button>
              <Button
                href="https://app.scalemate.co"
                outline
                trackEvent="hero_start_trial"
                trackProps={{ page: "bulk-launch" }}
              >
                <IconRocket size={18} />
                Get started for free
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <LaunchEngine />
          </div>
        </div>
      </Container>
    </section>
  )
}
