import React from "react"
import Container from "../../shared/Container/Container"
import styles from "./Hero.module.scss"

export default function Hero({ title, label }) {
  return (
    <Container>
      <div className={styles.container}>
        <p className={styles.label}>{label}</p>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </Container>
  )
}
