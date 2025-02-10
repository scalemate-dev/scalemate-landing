import styles from "./Metrics.module.scss"
import Container from "@/components/elements/Container/Container"

const Metrics = () => {
  const metrics = [
    {
      value: "5x",
      description: "More advertising tests",
    },
    {
      value: "90%",
      description: "Faster media uploads",
    },
    {
      value: "75%",
      description: "Less time on Ads Launches",
    },
  ]

  return (
    <div className={styles.metrics}>
      <Container className={styles.container}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metric}>
            <div className={styles.value}>{metric.value}</div>
            <div className={styles.description}>{metric.description}</div>
          </div>
        ))}
        <h2 className={styles.title}>
          <span>Scalemate</span> helps marketers do more with less effort.
        </h2>
      </Container>
    </div>
  )
}

export default Metrics
