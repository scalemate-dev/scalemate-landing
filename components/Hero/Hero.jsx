import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import Image from "next/image"
import Button from "@/components/elements/Button/Button"
import Container from "@/components/elements/Container/Container"
import styles from "./Hero.module.scss"
import cn from "classnames"

const Hero = ({ title, description, type = "primary", image }) => {
  const renderPrimaryHero = () => (
    <div className={cn(styles.hero, styles.primary)}>
      <Image
        className={styles.linearBackground1}
        src={bubble}
        alt=""
        width={800}
        height={800}
      />
      <Image
        className={styles.linearBackground2}
        src={bubble2}
        alt=""
        width={800}
        height={800}
      />
      <div className={styles.heroContainer}>
        <h1>{title}</h1>
        <div className={styles.heroDescription}>{description}</div>
        <Button
          color="accent"
          className={styles.heroSubmit}
          float
          href="/book-a-demo"
        >
          Try for free <span style={{ marginLeft: "4px" }}>🚀</span>
        </Button>
      </div>
    </div>
  )

  const renderSecondaryHero = () => (
    <div className={cn(styles.hero, type === "secondary" && styles.secondary)}>
      <Image
        className={styles.linearBackground1}
        src={bubble}
        alt=""
        width={800}
        height={800}
      />
      <Image
        className={styles.linearBackground2}
        src={bubble2}
        alt=""
        width={800}
        height={800}
      />
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <h1>{title}</h1>
            <div className={styles.heroDescription}>{description}</div>
            <Button
              color="accent"
              className={styles.heroSubmit}
              float
              href="/book-a-demo"
            >
              Try for free <span style={{ marginLeft: "4px" }}>🚀</span>
            </Button>
          </div>
          <div className={styles.heroImageContainer}>
            {image && (
              <Image
                className={styles.heroImage}
                src={image}
                alt="Scalemate automated workflow "
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  )

  return type === "primary" ? renderPrimaryHero() : renderSecondaryHero()
}

export default Hero
