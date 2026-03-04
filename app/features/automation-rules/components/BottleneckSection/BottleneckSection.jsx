import Container from "@/components/elements/Container/Container"
import { IconClock, IconCurrencyDollar, IconTrendingUp } from "@tabler/icons-react"
import styles from "./BottleneckSection.module.scss"

const costs = [
  {
    icon: IconClock,
    label: "Time cost",
    stat: "15–20 hrs",
    statSuffix: "/week",
    description:
      "Media buyers managing 30+ campaigns spend 15–20 hours per week on monitoring and manual adjustments. That's half the workweek on tasks a rule can handle in seconds.",
  },
  {
    icon: IconCurrencyDollar,
    label: "Budget cost",
    stat: "$3K–4.5K",
    statSuffix: "leaked",
    description:
      "At $100K monthly ad spend, a single overnight performance drop leaks $3,000–4,500 before anyone reacts. Multiply by the number of campaigns running, and late reactions become a monthly line item.",
  },
  {
    icon: IconTrendingUp,
    label: "Opportunity cost",
    stat: "48–72 hr",
    statSuffix: "window",
    description:
      "A winning creative has a 48–72 hour window before fatigue sets in. Manual budget increases capture a fraction of that window. Every hour of delay is revenue left on the table.",
  },
]

export default function BottleneckSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Real Cost</span>
          <h2>
            The Cost of Manual Campaign Optimization
          </h2>
          <p className={styles.subtitle}>
            Without an automated campaign monitoring tool, the cost of
            manual optimization stays hidden, spread across hours, leaked
            budget, and missed scaling windows.
          </p>
        </div>

        <div className={styles.grid}>
          {costs.map((cost, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <cost.icon size={22} />
                </div>
                <span className={styles.cardLabel}>{cost.label}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.stat}>{cost.stat}</span>
                <span className={styles.statSuffix}>{cost.statSuffix}</span>
              </div>
              <p className={styles.cardDesc}>{cost.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
