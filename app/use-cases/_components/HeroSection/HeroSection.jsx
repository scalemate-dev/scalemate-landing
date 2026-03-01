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
}) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <span className={styles.label}>{label}</span>

          <h1>
            {title} <span className={styles.accent}>{titleAccent}</span>
          </h1>

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
        </div>
      </Container>
    </section>
  )
}
