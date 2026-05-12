import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import styles from "./RulesLibraryPromo.module.scss"

export default function RulesLibraryPromo() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDash} />
              Scalemate library
            </span>
            <h2 className={styles.title}>
              12 automation rules.
              <br />
              <span className={styles.titleAccent}>Ready to copy.</span>
            </h2>
            <p className={styles.subhead}>
              Real Facebook ads accounts. Real thresholds. Real Meta limits
              noted on every card. Free, no signup.
            </p>
            <Link
              href="/automation-rules-library"
              className={styles.cta}
            >
              Browse the library
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </Link>
          </div>

          <aside className={styles.cardStack} aria-hidden="true">
            <div className={`${styles.card} ${styles.cardBehind}`}>
              <div className={styles.cardTopline}>
                <span className={styles.cardIndex}>№ 12</span>
                <span className={styles.cardChip}>Scale winners</span>
              </div>
              <h3 className={styles.cardTitle}>
                Increase budget when CPA holds under target
              </h3>
            </div>

            <div className={`${styles.card} ${styles.cardFront}`}>
              <div className={styles.cardTopline}>
                <span className={styles.cardIndex}>№ 06</span>
                <div className={styles.cardChips}>
                  <span className={styles.cardChip}>Kill losers</span>
                  <span className={styles.cardChipNeutral}>Ad</span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>
                Pause ad when CPC climbs above your bid ceiling
              </h3>
              <dl className={styles.cardGrid}>
                <div className={styles.gridRow}>
                  <dt>If</dt>
                  <dd><code>CPC &gt; $5.50 AND Amount spent &gt; $10</code></dd>
                </div>
                <div className={styles.gridRow}>
                  <dt>Window</dt>
                  <dd><code>today</code></dd>
                </div>
                <div className={styles.gridRow}>
                  <dt>Then</dt>
                  <dd><code>Pause ad</code></dd>
                </div>
                <div className={styles.gridRow}>
                  <dt>Schedule</dt>
                  <dd><code>Every hour</code></dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
