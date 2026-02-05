"use client"
import { useEffect, useRef, useState } from "react"
import Container from "@/components/elements/Container/Container"
import styles from "./HowItWorksSection.module.scss"
import { IconBrandGoogleDrive, IconCheck, IconLink } from "@tabler/icons-react"

const steps = [
  {
    number: "01",
    iconType: "google-drive",
    title: "Select",
    description: "Pick creatives from your Google Drive",
    accentColor: "#4285F4",
  },
  {
    number: "02",
    iconType: "link",
    title: "Connect",
    description: "Link your TikTok or Meta ad accounts",
    accentColor: "#F97316",
  },
  {
    number: "03",
    iconType: "check",
    title: "Upload",
    description: "One click—files go to your ad accounts",
    accentColor: "#22C55E",
  },
]

function StepIcon({ type }) {
  const iconProps = {
    size: 24,
    strokeWidth: 1.75,
    className: styles.icon
  }

  switch (type) {
    case "google-drive":
      return <IconBrandGoogleDrive {...iconProps} />
    case "link":
      return <IconLink {...iconProps} />
    case "check":
      return <IconCheck {...iconProps} />
    default:
      return null
  }
}

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className={styles.howItWorks}>
      <Container>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>Simple workflow</span>
          <h2>How it works</h2>
          <p>Three steps. That's all it takes.</p>
        </div>

        <div className={`${styles.stepsContainer} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.step} ${index === activeStep ? styles.active : ""} ${index < activeStep ? styles.completed : ""}`}
                onClick={() => setActiveStep(index)}
                style={{
                  "--delay": `${index * 0.12}s`,
                  "--accent": step.accentColor,
                  "--accent-light": `${step.accentColor}15`
                }}
              >
                {/* Large background number */}
                <span className={styles.bgNumber}>{step.number}</span>

                {/* Card header with icon and number */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <StepIcon type={step.iconType} />
                  </div>
                  <span className={styles.stepNumber}>Step {step.number}</span>
                </div>

                {/* Title */}
                <h3 className={styles.stepTitle}>{step.title}</h3>

                {/* Description */}
                <p className={styles.stepDesc}>{step.description}</p>

                {/* Bottom indicator */}
                <div className={styles.cardFooter}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressInner} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connector lines between cards */}
          <div className={styles.connectors}>
            <div className={`${styles.connector} ${activeStep >= 1 ? styles.active : ""}`}>
              <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 L100,10" className={styles.connectorPath} />
              </svg>
            </div>
            <div className={`${styles.connector} ${activeStep >= 2 ? styles.active : ""}`}>
              <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 L100,10" className={styles.connectorPath} />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
