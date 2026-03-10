import Container from "@/components/elements/Container/Container"
import {
  IconChartBar,
  IconFlask,
  IconUsers,
} from "@tabler/icons-react"
import styles from "./AudienceSection.module.scss"

const audiences = [
  {
    icon: IconChartBar,
    title: "Media buyers running high-volume ad operations",
    description:
      "More tests, more apps, more markets. Same setup time. Templates handle the matrix. The buyer focuses on performance, not repetition.",
  },
  {
    icon: IconFlask,
    title: "Performance teams with weekly creative testing",
    description:
      "New creatives every week, dozens of variations to launch. Bulk creation keeps the testing cadence without eating the team\u2019s week.",
  },
  {
    icon: IconUsers,
    title: "Heads of marketing who need output without bottlenecks",
    description:
      "Higher volume, more products, more tests. Same team. Strategy scales. Setup doesn\u2019t.",
  },
]

export default function AudienceSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Who Is It For</span>
          <h2>Who Uses the Bulk Ad Creation Tool</h2>
        </div>

        <div className={styles.grid}>
          {audiences.map((audience, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <audience.icon size={24} />
              </div>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
