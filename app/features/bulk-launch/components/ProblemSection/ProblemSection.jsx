import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

const problems = [
  {
    number: "01",
    title: "Creating ads manually, campaign by campaign",
    description:
      "Duplicate, edit, swap, adjust. Per ad set. Five concepts \u00d7 fifteen languages = weeks of dragging creatives from folders.",
  },
  {
    number: "02",
    title: "Copying campaigns repeatedly slows every launch",
    description:
      "Every duplicate campaign creation introduces risk: wrong GEO, outdated creative, forgotten budget. At scale, the slow ad setup process eats most of a buyer\u2019s week.",
  },
  {
    number: "03",
    title: "Scaling creatives manually keeps the team in setup mode",
    description:
      "More campaigns, same manual process. Scaling creatives manually means buyers spend their week on setup, not on testing, analysis, or strategy.",
  },
]

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>The Problem</span>
            <h2>
              What Bulk Ad Creation{" "}
              <span className={styles.accent}>Replaces</span>
            </h2>
            <p className={styles.subtitle}>
              Every{" "}
              <Link href="/solutions/media-buyers">media buyer</Link> at
              scale hits the same wall. Not strategy, not creative, but setup.
              A bulk ad creation tool removes that wall. Without one, the
              bottleneck compounds week after week.
            </p>
          </div>

          <div className={styles.grid}>
            {problems.map((problem) => (
              <div key={problem.number} className={styles.card}>
                <span className={styles.number}>{problem.number}</span>
                <div className={styles.cardContent}>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
