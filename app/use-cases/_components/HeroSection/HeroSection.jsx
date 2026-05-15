import Link from "next/link"
import { IconChevronRight } from "@tabler/icons-react"
import Container from "@/components/elements/Container/Container"
import Button from "@/components/elements/Button/Button"
import styles from "./HeroSection.module.scss"

export default function HeroSection({
  label,
  title,
  titleAccent,
  description,
  features,
  aside,
  secondaryCta,
  platforms,
  Visual,
  accentFirst,
  badge,
}) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={Visual ? styles.heroTop : undefined}>
            <div>
              {badge && (
                <Link href={badge.link} className={styles.heroBadge}>
                  <span>FREE</span>
                  {badge.text}
                  <IconChevronRight size={16} className={styles.heroBadgeChevron} />
                </Link>
              )}
              <span className={styles.label}>{label}</span>
              <h1>
                {accentFirst ? (
                  <><span className={styles.accent}>{titleAccent}</span> {title}</>
                ) : (
                  <>{title} <span className={styles.accent}>{titleAccent}</span></>
                )}
              </h1>
            </div>

            {Visual && (
              <div className={styles.heroVisual} aria-hidden="true">
                <Visual />
              </div>
            )}
          </div>

          <p className={styles.description}>{description}</p>

          <ul className={styles.features}>
            {features.map((feature) => (
              <li key={feature} className={styles.feature}>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>

          <p className={styles.aside}>{aside}</p>

          <div className={styles.cta}>
            <Button
              color="accent"
              href={
                secondaryCta?.href ?? "https://app.scalemate.co/create-account"
              }
              trackEvent="cta_clicked"
              trackProps={{ cta_location: "use_case_hero" }}
            >
              {secondaryCta?.label ?? "Start for Free"}
            </Button>
            <Button
              outline
              href="/book-a-demo"
              trackEvent="cta_clicked"
              trackProps={{ cta_location: "use_case_hero" }}
            >
              Book a Demo
            </Button>
          </div>

          {platforms && (
            <div className={styles.platforms}>
              <span className={styles.platformsLabel}>Works with</span>
              <div className={styles.platformsLogos}>
                {platforms.map((p) => (
                  <img
                    key={p.alt}
                    src={p.src}
                    alt={p.alt}
                    className={styles.platformLogo}
                    style={p.height ? { height: p.height } : undefined}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
