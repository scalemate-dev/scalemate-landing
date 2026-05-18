import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import { IconRocket } from "@tabler/icons-react"
import styles from "./HeroSection.module.scss"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"
import metaIcon from "@/assets/icons/meta-icon.svg"
import tiktokIcon from "@/assets/icons/tiktok-icon.svg"

/* ── Pipeline Flow (pure CSS grid, no SVG) ── */

export function PipelineFlow() {
  return (
    <div className={styles.flow}>
      {/* ── Column 1: Source ── */}
      <div className={styles.source}>
        <div className={styles.card}>
          <Image
            src={googleDriveIcon}
            alt="Google Drive"
            width={20}
            height={20}
          />
          <div className={styles.cardBody}>
            <span className={styles.cardTitle}>Google Drive</span>
          </div>
        </div>
      </div>

      {/* ── Arrow 1 ── */}
      <div className={styles.arrow}>
        <div className={styles.arrowLine} />
        <div className={styles.arrowDot} />
      </div>

      {/* ── Column 2: Template ── */}
      <div className={styles.template}>
        <div className={`${styles.card} ${styles.cardTemplate}`}>
          <div className={styles.templateLabel}>Campaign Template</div>
          <div className={styles.templateName}>Creative Testing Campaign</div>
          <div className={styles.templateTags}>
            <span className={styles.tag}>5 concepts</span>
            <span className={styles.tag}>15 languages</span>
            <span className={styles.tag}>3 formats</span>
          </div>
        </div>
      </div>

      {/* ── Arrow 2 (with fork) ── */}
      <div className={styles.arrowFork}>
        <div className={styles.forkLine} />
        <div className={styles.forkBranch} />
        <div className={styles.forkBranch} />
        <div className={styles.arrowDot} />
      </div>

      {/* ── Column 3: Destinations ── */}
      <div className={styles.destinations}>
        <div className={styles.card}>
          <Image src={metaIcon} alt="Meta" width={20} height={20} />
          <div className={styles.cardBody}>
            <span className={styles.cardTitle}>Meta Ads</span>
            <span className={styles.cardSub}>150 ad sets</span>
          </div>
          <span className={styles.statusDot} />
        </div>
        <div className={styles.card}>
          <Image src={tiktokIcon} alt="TikTok" width={18} height={18} />
          <div className={styles.cardBody}>
            <span className={styles.cardTitle}>TikTok Ads</span>
            <span className={styles.cardSub}>75 ad sets</span>
          </div>
          <span className={styles.statusDot} />
        </div>
      </div>

      {/* ── Toast ── */}
      <div className={styles.toast}>
        <div className={styles.toastDot} />
        <span className={styles.toastText}>225 ads created</span>
        <span className={styles.toastTime}>3 min</span>
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
            <span className={styles.eyebrow}>Launch Ads at Scale</span>
            <h1>Bulk Ad Creation Tool</h1>
            <p className={styles.tagline}>
              Launch hundreds of ads. Click once.
            </p>
            <p className={styles.description}>
              A bulk ad creation tool that turns campaign templates into
              hundreds of live ad sets. Define structure once. The system
              handles targeting, creatives, and deployment across Meta and
              TikTok:
            </p>
            <ul className={styles.features}>
              <li>Create multiple ads at once on Meta</li>
              <li>Reusable templates instead of manual setup</li>
              <li>Launch multiple ads automatically from Google Drive</li>
            </ul>
            <div className={styles.actions}>
              <Button
                href="https://app.scalemate.co"
                color="accent"
                trackEvent="hero_start_trial"
                trackProps={{ page: "bulk-launch" }}
              >
                <IconRocket size={18} />
                Get started for free
              </Button>
              <Button
                href="/book-a-demo"
                outline
                trackEvent="hero_book_demo"
                trackProps={{ page: "bulk-launch" }}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <PipelineFlow />
          </div>
        </div>
      </Container>
    </section>
  )
}
