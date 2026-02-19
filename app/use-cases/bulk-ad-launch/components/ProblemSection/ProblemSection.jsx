import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

const problems = [
  {
    title: "Every Campaign is the same repetitive workflow",
    description:
      "Launching ads one by one means repeating the same sequence per ad set – creative, resolutions, targeting – multiplying errors across every language and placement.",
  },
  {
    title: "New Ad Creatives wait days before testing starts",
    description:
      "Mass ad campaign creation still means building each ad set by hand – manual campaign setup takes hours, and every day creatives sit untested is a day without data.",
  },
  {
    title: "More Scale = More People?",
    description:
      "Scaling ads without hiring buyers is possible when tooling removes the bottleneck – without it, slow campaign launches become the norm.",
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
              Three bottlenecks keep media buyers stuck: repetitive setup, slow
              creative-to-campaign handoff, and the pressure to hire just to
              keep up.
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
