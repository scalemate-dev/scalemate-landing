import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import { steps } from "./steps"
import styles from "./HowItWorksSection.module.scss"

export default function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>How the ad uploader works</h2>
          <p>
            Pick a reference ad, drop your Drive creatives, and the new ads go
            live. No XLSX, no Ads Manager, no half-broken bulk import.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={styles.step}
              data-side={index % 2 === 0 ? "right" : "left"}
            >
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>

              <figure className={styles.stepShot}>
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 42vw, 480px"
                  className={styles.shotImage}
                />
              </figure>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
