import React from "react"
import Image from "next/image"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import Container from "@/components/elements/Container/Container"
import styles from "./Hero.module.scss"

export default function Hero({ title, label }) {
  return (
    <Container>
      <div className={styles.bubbleContainer}>
        <Image
          className={styles.linearBackground1}
          src={bubble}
          alt=""
          width={500}
          height={500}
        />
        <Image
          className={styles.linearBackground2}
          src={bubble2}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.label}>{label}</p>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </Container>
  )
}
