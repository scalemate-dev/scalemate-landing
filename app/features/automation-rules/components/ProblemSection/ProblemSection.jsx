import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

const problems = [
  {
    number: "01",
    title: "Checking dashboards all day",
    description:
      "Running 30+ campaigns means reviewing each one by hand. The hours that should go to creative testing and strategy get consumed by dashboard checks. Campaign by campaign, metric by metric.",
  },
  {
    number: "02",
    title: "Reacting too late to performance drops",
    description:
      "A campaign drops at 2 AM. It gets caught at 11 AM, nine hours of budget burning on a dead ad set. Pausing ads too late is the most expensive pattern in performance marketing, and the cost compounds with every campaign added.",
  },
  {
    number: "03",
    title: "Manual budget adjustments slow everything down",
    description:
      "Spot a winner, raise budget cautiously, wait for results, repeat. Manual budget adjustments slow every scaling decision. By the time the budget catches up, the creative is already fatiguing. The scaling window closes before the team captures it.",
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
              What Automated Ad Optimization Rules{" "}
              <span className={styles.accent}>Replace</span>
            </h2>
            <p className={styles.subtitle}>
              Every{" "}
              <Link href="/solutions/media-buyers">media buyer</Link> knows
              the loop: open dashboards, scan metrics, decide, act, repeat. At
              ten campaigns, monitoring campaigns manually is manageable. At
              thirty-plus, the loop breaks, and without an automated campaign
              monitoring tool, budget leaks through the cracks.
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
