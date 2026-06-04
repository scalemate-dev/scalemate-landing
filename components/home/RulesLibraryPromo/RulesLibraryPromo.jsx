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
              12 Facebook automated rules.
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
            <p className={styles.secondary}>
              Comparing tools instead?{" "}
              <Link href="/blog/best-facebook-ads-automation-tools">
                13 best Facebook ads automation tools for 2026 →
              </Link>
            </p>
          </div>

          <aside className={styles.indexStack} aria-hidden="true">
            <article className={`${styles.indexCard} ${styles.indexCardBack}`}>
              <header className={styles.indexCardHead}>
                <span className={styles.indexCardId}>№ 09</span>
                <span className={styles.indexCardSchedule}>Every 3 hours</span>
              </header>
              <p className={styles.indexCardTitle}>
                Pause weak ROAS, trim borderline ROAS on BAU campaigns
              </p>
              <footer className={styles.indexCardFooter}>
                <span className={`${styles.indexTag} ${styles.tagReactivate}`}>
                  Reactivate
                </span>
                <span className={styles.indexLevel}>Campaign</span>
              </footer>
            </article>

            <article className={`${styles.indexCard} ${styles.indexCardMid}`}>
              <header className={styles.indexCardHead}>
                <span className={styles.indexCardId}>№ 03</span>
                <span className={styles.indexCardSchedule}>Every 3 hours</span>
              </header>
              <p className={styles.indexCardTitle}>
                Alert on creative fatigue before CAC suffers
              </p>
              <footer className={styles.indexCardFooter}>
                <span className={`${styles.indexTag} ${styles.tagFatigue}`}>
                  Creative fatigue
                </span>
                <span className={styles.indexLevel}>Campaign</span>
              </footer>
            </article>

            <article className={`${styles.indexCard} ${styles.indexCardFront}`}>
              <header className={styles.indexCardHead}>
                <span className={styles.indexCardId}>№ 01</span>
                <span className={styles.indexCardSchedule}>Every 3 hours</span>
              </header>
              <p className={styles.indexCardTitle}>
                Scale or trim ad set budget by purchase performance
              </p>
              <footer className={styles.indexCardFooter}>
                <span className={`${styles.indexTag} ${styles.tagScale}`}>
                  Scale winners
                </span>
                <span className={styles.indexLevel}>Ad set</span>
              </footer>
            </article>
          </aside>
        </div>
      </Container>
    </section>
  )
}
