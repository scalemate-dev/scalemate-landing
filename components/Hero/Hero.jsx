import bubble from "@/assets/icons/hero-linear-background.svg"
import Input from "@/components/elements/Input/Input"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import Image from "next/image"
import Button from "@/components/elements/Button/Button"
import Container from "@/components/elements/Container/Container"
import Link from "next/link"
import { IconChevronRight } from "@tabler/icons-react"
import styles from "./Hero.module.scss"
import cn from "classnames"

const Hero = ({
  title,
  description,
  type = "primary",
  fullHeight,
  image,
  CTALink,
  CTAButtonText,
  ctaForm,
  showTrial = true,
  className,
  badge,
}) => {
  const renderCTA = () => {
    if (ctaForm) {
      return ctaForm
    }
    return (
      <>
        <Button
          color="accent"
          className={styles.heroSubmit}
          href={CTALink ?? "https://app.scalemate.co/create-account"}
        >
          {CTAButtonText ?? "Try for free"}
          <span style={{ marginLeft: "4px" }}>🚀</span>
        </Button>
      </>
    )
  }
  const renderPrimaryHero = () => (
    <div
      className={cn(styles.hero, styles.primary, className, {
        [styles.fullHeight]: fullHeight,
      })}
    >
      <Image
        className={styles.linearBackground1}
        src={bubble}
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
      />
      <Image
        className={styles.linearBackground2}
        src={bubble2}
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
      />
      <Container className={styles.hero}>
        {badge && (
          <Link href={badge.link} className={styles.heroBadge}>
            <span>NEW</span>
            {badge.text}
            <IconChevronRight size={16} className={styles.chevron} />
          </Link>
        )}
        <h1>{title}</h1>
        <div className={styles.heroDescription}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        {renderCTA()}
      </Container>
    </div>
  )

  const renderSecondaryHero = () => (
    <div className={cn(styles.hero, type === "secondary" && styles.secondary)}>
      <Image
        className={styles.linearBackground1}
        src={bubble}
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
      />
      <Image
        className={styles.linearBackground2}
        src={bubble2}
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
      />
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <h1>{title}</h1>
            <div className={styles.heroDescription}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            {renderCTA()}
          </div>
          {/* <div className={styles.heroImageContainer}> */}
          {image && (
            <Image
              className={styles.heroImage}
              src={image}
              objectFit="contain"
              alt="Scalemate automated workflow"
            />
          )}
          {/* </div> */}
        </div>
      </Container>
    </div>
  )

  return type === "primary" ? renderPrimaryHero() : renderSecondaryHero()
}

export default Hero
