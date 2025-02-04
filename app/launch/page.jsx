import Hero from "../../components/Hero/Hero"
import Pathway from "@/components/Launch/Pathway/Pathway"
import Features from "../../components/Launch/Features/Features"

import Metrics from "@/components/Metrics/Metrics"
import WaitList from "../../components/home/WaitList/WaitList"
import styles from "@/assets/styles/shared.module.scss"
import { pageMetadata } from "../metadata"
import Advantages from "@/components/Launch/Advantages/Advantages"
// import Slider from "@/components/elements/Slider/Slider"
import creativeLibrary from "@/assets/images/home/creative-library.png"
import campaignStructure from "@/assets/images/launch/campaign-structure.png"
import cloudSync from "@/assets/images/home/cloud-sync.png"
import smartFlow from "@/assets/images/home/smart-flow.png"
import SmartFlowImg from "@/assets/images/home/smart-flow.png"

const features = [
  {
    image: smartFlow,

    title: "Launch ads faster with automated workflow",
    description: `Automate ad launches with workflows. Manage campaigns with simple rules. Find out what works and what doesn't. Scale winning ads and head on to the next testing round!`,
  },
]

const advantages = [
  {
    image: campaignStructure,
    title: "Keep your campaign scheme",
    description:
      "Continue using your preferred setup, like launching with 1 ad set and 1 ad to maintain control over every ad’s spending.",
  },
  {
    image: cloudSync,
    title: "Automate campaign growth",
    description:
      "Define rules to pause, scale, or adjust bids for ads based on performance",
  },
  {
    image: smartFlow,
    title: " Use Placement Asset Customization",
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
        image={SmartFlowImg}
      />
      <Metrics />
      <Pathway />
      <Features features={features} />
      <Advantages />
      <Features features={advantages} />
      {/* <Slider /> */}
      <WaitList />
    </div>
  )
}
