import Hero from "../../components/Hero/Hero"
import Pathway from "@/components/Launch/Pathway/Pathway"
import Features from "../../components/Launch/Features/Features"
import launchSchema from "@/assets/images/launch/launch-schema.png"

import Metrics from "@/components/Metrics/Metrics"
import WaitList from "../../components/home/WaitList/WaitList"
import styles from "@/assets/styles/shared.module.scss"
import { pageMetadata } from "../metadata"
import Advantages from "@/components/Launch/Advantages/Advantages"
// import Slider from "@/components/elements/Slider/Slider"
// import creativeLibrary from "@/assets/images/home/creative-library.png"
import rulesImage from "@/assets/images/launch/rules-dashboard.png"
import campaignStructure from "@/assets/images/launch/campaign-structure-v1.png"
import cloudSync from "@/assets/images/home/cloud-sync.png"
import smartFlow from "@/assets/images/home/smart-flow.png"
import pacImg from "@/assets/images/launch/pac.png"
import launchHeroImg from "@/assets/images/launch/launch-hero.png"
import SmartFlowImg from "@/assets/images/home/smart-flow.png"

const features = [
  {
    image: launchSchema,
    title: "Launch ads faster with automated workflow",
    description: `Automate ad launches with workflows. Manage campaigns with simple rules. Find out what works and what doesn't. Scale winning ads and head on to the next testing round!`,
    callToAction: {
      href: "/book-a-demo",
      label: "Try Bulk Launch",
    },
  },
]

const advantages = [
  {
    image: campaignStructure,
    title: "Keep your campaign scheme",
    badge: {
      label: "Smart Launches",
      background: "#FFF1F3",
      color: "#C01048",
    },
    description:
      "Continue using your preferred setup, like launching with 1 ad set and 1 ad to maintain control over every ad’s spending.",
  },
  {
    image: rulesImage,
    title: "Setup your Rules",
    badge: {
      label: "Target Rules",
      background: "#F4F3FF",
      color: "#5925DC",
    },
    description:
      "Define rules to pause, scale, or adjust bids for ads based on performance",
  },
  {
    image: pacImg,
    badge: {
      label: "Advanced Automation",
      background: "#ECFDF3",
      color: "#027A48",
    },
    title: "Use Placement Asset Customization",
    description:
      "Scalemate automatically detects and groups unique assets with different resolutions into one ad using AI.",
  },
]

export const metadata = pageMetadata.launch
export default function Launch() {
  const renderTitle = () => {
    return (
      <>
        <span>One click</span> to Launch them all
      </>
    )
  }
  const description = `Easily create multiple ad sets and variations. Bulk upload your images and videos for seamless automated launches. `
  return (
    <div className={styles.main}>
      <Hero
        type="secondary"
        title={renderTitle()}
        description={description}
        image={launchHeroImg}
      />
      <Metrics />
      <Pathway />
      <Features features={features} />
      <Advantages />
      <Features
        features={advantages}
        title="Customize Workflows Without Compromise"
        description="Scalemate adapts to your existing campaign strategies, automating every step while letting you stick to the workflows you already have as top performing ones."
      />
      {/* <Slider /> */}
      <WaitList />
    </div>
  )
}
