"use client"
import { useState } from "react"
import Container from "@/components/elements/Container/Container"
import StepCard from "./StepCard"
import StepScreen from "./StepScreen"
import { steps } from "./steps"
import styles from "./HowItWorksSection.module.scss"

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className={styles.howItWorks}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>How ad creative uploader works</h2>
          <p>Three simple steps to transform your creative workflow</p>
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                isActive={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>

          <div className={styles.screensColumn}>
            <div className={styles.screensSticky}>
              {steps.map((step, index) => (
                <StepScreen
                  key={step.id}
                  stepId={step.id}
                  isActive={index === activeStep}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
