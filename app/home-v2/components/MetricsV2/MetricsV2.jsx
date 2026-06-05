import Container from "@/components/elements/Container/Container"
import styles from "./MetricsV2.module.scss"

const METRICS = [
  { value: "2M+", label: "Ads launched" },
  { value: "53k", label: "hours saved, avg per team" },
  { value: "32%", label: "budget saved with automation" },
  { value: "+30%", label: "employee satisfaction" },
  { value: "−90%", label: "cost per ad created" },
  { value: "+54%", label: "faster reporting" },
]

export default function MetricsV2() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>By the numbers</span>
          <h2 className={styles.title}>
            With Scalemate, ad management becomes easy,{" "}
            <em className={styles.titleAccent}>cutting time by over 62%.</em>
          </h2>
        </header>

        <ul className={styles.grid}>
          {METRICS.map((m) => (
            <li key={m.label} className={styles.metric}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
