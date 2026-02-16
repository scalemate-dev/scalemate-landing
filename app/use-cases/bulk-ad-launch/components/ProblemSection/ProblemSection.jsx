import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

const problems = [
  {
    title: "Repetitive Ad Creation Workflow",
    description:
      "Launching ads one by one means repeating the same sequence per ad set: creative, resolutions, targeting. Multiply by languages — days of clicking. Volume compounds micro-mistakes into budget waste.",
  },
  {
    title: "The Platform Keeps Breaking",
    description:
      "Facebook Ads Manager wasn't built for mass ad campaign creation at this scale. Five concepts across fifteen languages means seventy-five combinations — each requiring a separate ad set built by hand. The platform lags, crashes mid-upload, or drops assets.",
  },
  {
    title: "More Scale = More People?",
    description:
      "When campaign volume outgrows capacity, the default is hiring — another buyer, another coordinator, same mechanical tasks. But scaling ads without hiring buyers is possible when tooling removes the bottleneck.",
  },
]

export default function ProblemSection() {
  return (
    <section className={styles.problem}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.headerMain}>
              <span className={styles.label}>The Problem</span>
              <h2>
                Why Manual Ad Launches{" "}
                <em className={styles.accent}>Don&apos;t Scale</em>
              </h2>
            </div>
            <p className={styles.subtitle}>
              Three bottlenecks keep media buyers stuck — repetitive setup,
              platform limitations, and the pressure to hire just to keep up.
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.grid}>
            {problems.map((problem) => (
              <div key={problem.title} className={styles.item}>
                <span className={styles.dash} />
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
