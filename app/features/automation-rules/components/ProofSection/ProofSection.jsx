import Container from "@/components/elements/Container/Container"
import styles from "./ProofSection.module.scss"

const stats = [
  {
    value: "32%",
    label: "Budget savings",
    description: "from automated pause and scaling",
  },
  {
    value: "62%",
    label: "Less time",
    description: "spent on manual optimization",
  },
  {
    value: "53K+",
    label: "Hours saved",
    description: "across the platform",
  },
]

export default function ProofSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>Results From Teams Running Automation Rules</h2>
          <p className={styles.subtitle}>
            Across teams using Scalemate as an ad performance automation tool on
            Meta Ads:
          </p>
        </div>

        <ul className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <li key={index} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statDesc}>{stat.description}</span>
            </li>
          ))}
        </ul>

        <p className={styles.footnote}>
          These numbers come from automated ad optimization rules running across
          Meta Ads, not projections.
        </p>
      </Container>
    </section>
  )
}
