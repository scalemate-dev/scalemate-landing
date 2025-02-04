import React from "react"
import Container from "@/components/elements/Container/Container"
import styles from "./Pathway.module.scss"

export default function Pathway() {
  const steps = [
    "Upload new creatives on drive",
    "Add creatives to Ad Library",
    "Pick Strategy and Launch",
    "Auto-Scale Winning Ads",
    "Repeat and Grow 🚀",
  ]

  return (
    <Container>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span>Lighter Path</span> to Launch campaigns
        </h2>
        <p className={styles.description}>
          Shorten your creative rotation cycle and save more than 13 hours per
          100 creatives.Release your team from the manual job and find the
          winning ad faster
        </p>
        <div className={styles.wrapper}>
          <div className={styles.pathway}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepText}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
