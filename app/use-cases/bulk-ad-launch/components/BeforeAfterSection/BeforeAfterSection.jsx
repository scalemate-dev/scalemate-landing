import Container from "@/components/elements/Container/Container"
import styles from "./BeforeAfterSection.module.scss"

const metrics = [
  { value: "3x", prefix: "faster", desc: "than manual campaign setup" },
  { value: "65%", prefix: "faster", desc: "creative deployment" },
  { value: "25%+", prefix: "reduction", desc: "in weekly operational hours" },
]

export default function BeforeAfterSection() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>The Difference</span>
          <h2 className={styles.title}>What changes with Scalemate</h2>
          <p className={styles.subtitle}>
            The gap between manual and automated deployment is measurable.
          </p>
        </header>

        <div className={styles.comparison}>
          <div className={styles.beforeSide}>
            <span className={styles.sideLabel}>Before</span>
            <h3 className={styles.sideTitle}>Manual setup eats entire week</h3>
            <p className={styles.sideText}>
              One concept, ten markets – ten ad sets, each built by hand. 3–5x
              longer than it should take.
            </p>
          </div>

          <div className={styles.afterSide}>
            <span className={`${styles.sideLabel} ${styles.sideLabelAccent}`}>
              After
            </span>
            <h3 className={styles.sideTitle}>Hundreds of Ads from one setup</h3>
            <p className={styles.sideText}>
              Scalemate&apos;s <strong>bulk ad launch tool</strong> automates
              the entire deployment – creatives sync from cloud storage,
              campaign structures configured once, applied across hundreds of ad
              sets.
            </p>
          </div>
        </div>

        <div className={styles.resultsBlock}>
          <p className={styles.resultsLabel}>The shift is measurable:</p>
          <ul className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <li key={i} className={styles.metric}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricDesc}>
                  <strong>{m.prefix}</strong> {m.desc}
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.resultsLeadIn}>
            What used to be a repetitive ad creation workflow now runs
            automatically. No more launching ads one by one —{" "}
            <strong>mass ad campaign creation</strong> becomes the default.
          </p>
        </div>
      </Container>
    </section>
  )
}
