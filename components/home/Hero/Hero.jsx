"use client"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"

import Image from "next/image"
import Button from "@/components/shared/Button/Button"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.hero}>
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
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Find winning ads
          <br /> to <span>triple-scale</span> your app
        </h1>
        <div className={styles.heroDescription}>
          Creatives testing automation assistant for mobile app publishers and
          marketing agencies. Born to erase performance marketing routine and
          save you 3 hours daily.
        </div>
        <Button
          color="accent"
          className={styles.heroSubmit}
          href="/book-a-demo"
        >
          Schedule a call <span style={{ marginLeft: "4px" }}>🗓️</span>
        </Button>
      </div>
    </div>
  )
}

export default Hero
