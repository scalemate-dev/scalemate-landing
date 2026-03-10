import Container from "@/components/elements/Container/Container"
import { IconClock, IconAlertTriangle, IconBolt } from "@tabler/icons-react"
import styles from "./BottleneckSection.module.scss"

const costs = [
  {
    icon: IconClock,
    label: "Time",
    stat: "3\u20135 days",
    statSuffix: "per launch",
    description:
      "A full launch (5 concepts \u00d7 15 languages \u00d7 3 formats) takes 3\u20135 working days in ads manager. Without mass ad creation software, most of the week goes to campaign creation instead of analysis.",
  },
  {
    icon: IconAlertTriangle,
    label: "Errors",
    stat: "Every",
    statSuffix: "manual copy",
    description:
      "Each manual copy risks wrong targeting, misconfigured budgets, or outdated creatives. Undetected until the next review.",
  },
  {
    icon: IconBolt,
    label: "Speed to market",
    stat: "Days",
    statSuffix: "\u2192 minutes",
    description:
      "The gap between \u201ccreative is ready\u201d and \u201ccreative is live\u201d determines how much value each winner delivers. Mass ad creation software closes that gap from days to minutes.",
  },
]

export default function BottleneckSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Real Cost</span>
          <h2>The Cost of a Slow Ad Setup Process</h2>
          <p className={styles.subtitle}>
            Without a bulk ad creation tool, manual setup costs
            add up across three dimensions:
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
