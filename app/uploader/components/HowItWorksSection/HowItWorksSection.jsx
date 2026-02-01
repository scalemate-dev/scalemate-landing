import Image from "next/image"
import Container from "@/components/elements/Container/Container"
import styles from "./HowItWorksSection.module.scss"
import bubble from "@/assets/icons/hero-linear-background.svg"
import bubble2 from "@/assets/icons/hero-linear-background-2.svg"
import { IconBrandGoogleDrive, IconCheck, IconLink } from "@tabler/icons-react"

const steps = [
  {
    number: "1",
    iconType: "google-drive",
    title: "Select",
    description: "Pick creatives from your Google Drive",
  },
  {
    number: "2",
    iconType: "link",
    title: "Connect",
    description: "Connect with TikTok or Meta ad accounts",
  },
  {
    number: "3",
    iconType: "check",
    title: "Upload",
    description: "One click and files go to your ad accounts",
  },
]

function StepIcon({ type }) {
  switch (type) {
    case "google-drive":
      return <IconBrandGoogleDrive size={24} />
    case "link":
      return <IconLink size={24} />
    case "check":
      return <IconCheck size={24} />
    default:
      return null
  }
}

export default function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      <Image
        className={styles.howItWorksBubble1}
        src={bubble}
        alt=""
        width={500}
        height={500}
      />
      <Image
        className={styles.howItWorksBubble2}
        src={bubble2}
        alt=""
        width={600}
        height={600}
      />
      <Container>
        <div className={styles.sectionHeader}>
          <h2>How the free ad creative uploader works</h2>
          <p>Your coffee won't even get cold. 3 steps and you're done</p>
        </div>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className={styles.timelineDot}>
                <StepIcon type={step.iconType} />
              </div>
              <div className={styles.timelineNumber}>{step.number}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
