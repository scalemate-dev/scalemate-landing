import Container from "@/components/elements/Container/Container"
import styles from "./BeforeAfterSection.module.scss"

export default function BeforeAfterSection({ eyebrow = "The Difference", title, subtitle, before, after, metrics, leadIn }) {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.comparison}>
          <div className={styles.beforeSide}>
            <span className={styles.sideLabel}>Before</span>
            <h3 className={styles.sideTitle}>{before.title}</h3>
            <p className={styles.sideText}>{before.text}</p>
          </div>

          <div className={styles.afterSide}>
            <span className={`${styles.sideLabel} ${styles.sideLabelAccent}`}>
              After
            </span>
            <h3 className={styles.sideTitle}>{after.title}</h3>
            <p className={styles.sideText}>{after.text}</p>
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
          <p className={styles.resultsLeadIn}>{leadIn}</p>
        </div>
      </Container>
    </section>
  )
}
