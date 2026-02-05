import Container from "@/components/elements/Container/Container"
import styles from "./ProblemSection.module.scss"

const problems = [
  {
    number: "01",
    title: "Download, upload, repeat",
    description:
      "Creatives in Google Drive, ad platforms elsewhere. Download files, then re-upload one by one.",
  },
  {
    number: "02",
    title: "Multiply by every account",
    description:
      "Multiple ad accounts? Repeat the same process for each. Same files, same clicks.",
  },
  {
    number: "03",
    title: "Hours lost on busywork",
    description:
      "A 50-creative launch becomes an hour of clicking. Time better spent on strategy.",
  },
]

export default function ProblemSection() {
  return (
    <section className={styles.problem}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2>The manual workflow holding you back</h2>
          </div>

          <div className={styles.problemList}>
            {problems.map((problem, index) => (
              <div key={index} className={styles.problemItem}>
                <div className={styles.numberColumn}>
                  <span className={styles.number}>{problem.number}</span>
                </div>
                <div className={styles.contentColumn}>
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
