import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

export default function ProblemSection({ label = "The Problem", title, titleAccent, subtitle, problems }) {
  return (
    <section className={styles.problem}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.headerMain}>
              <span className={styles.label}>{label}</span>
              <h2>
                {title}{" "}
                <em className={styles.accent}>{titleAccent}</em>
              </h2>
            </div>
            <p className={styles.subtitle}>{subtitle}</p>
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
