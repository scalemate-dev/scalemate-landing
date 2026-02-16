import Container from "@/components/elements/Container/Container"
import {
  IconClock,
  IconCalendarDown,
  IconChartArrows,
} from "@tabler/icons-react"
import styles from "./BeforeAfterSection.module.scss"

const metrics = [
  {
    value: "65%",
    label: "Faster Deployment",
    description: "Creative deployment speed improvement",
    icon: IconClock,
  },
  {
    value: "25%+",
    label: "Hours Saved Weekly",
    description: "Reduction in weekly operational hours",
    icon: IconCalendarDown,
  },
  {
    value: "3–5x",
    label: "Faster Than Manual",
    description: "Time saved vs. manual assembly line",
    icon: IconChartArrows,
  },
]

export default function BeforeAfterSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>What Changes With Scalemate</h2>
          <p>
            The gap between manual and automated deployment is measurable — in
            hours saved and campaigns launched per week.
          </p>
        </div>

        <div className={styles.comparison}>
          <div className={styles.comparisonCard}>
            <div className={styles.cardLabel}>
              <span className={styles.labelBefore}>Before</span>
            </div>
            <h3>Manual Setup That Eats the Entire Week</h3>
            <p>
              Every ad assembled by hand, matched to the right placement. One
              concept, ten markets — ten ad sets. 3–5x longer than it should
              take.
            </p>
            <div className={styles.painPoints}>
              <div className={styles.painPoint}>
                <span className={styles.painIcon}>&#10005;</span>
                Hours of manual clicking
              </div>
              <div className={styles.painPoint}>
                <span className={styles.painIcon}>&#10005;</span>
                Error-prone copy-paste
              </div>
              <div className={styles.painPoint}>
                <span className={styles.painIcon}>&#10005;</span>
                Creative bottleneck
              </div>
            </div>
          </div>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerIcon}>&#8594;</span>
            <div className={styles.dividerLine} />
          </div>

          <div className={`${styles.comparisonCard} ${styles.afterCard}`}>
            <div className={styles.cardLabel}>
              <span className={styles.labelAfter}>After</span>
            </div>
            <h3>Hundreds of Ads From One Setup</h3>
            <p>
              Scalemate&apos;s <strong>bulk ad launch tool</strong> automates
              the entire deployment. Creatives sync from cloud storage into the
              media library. Campaign structures — including one-ad-per-ad-set —
              configured once, applied across hundreds of ad sets.
            </p>
            <div className={styles.gains}>
              <div className={styles.gain}>
                <span className={styles.gainIcon}>&#10003;</span>
                Minutes instead of days
              </div>
              <div className={styles.gain}>
                <span className={styles.gainIcon}>&#10003;</span>
                Zero manual errors
              </div>
              <div className={styles.gain}>
                <span className={styles.gainIcon}>&#10003;</span>
                Focus shifts to strategy
              </div>
            </div>
          </div>
        </div>

        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.metricIcon}>
                <metric.icon size={24} />
              </div>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
              <p className={styles.metricDescription}>{metric.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
