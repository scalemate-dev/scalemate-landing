import React from "react"
import Container from "@/components/elements/Container/Container"
import styles from "./Layout.module.scss"

export default function Layout({ side, children }) {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.side}>{side}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </Container>
  )
}
