import Hero from "../../components/Hero/Hero"
import Features from "../../components/home/Features/Features"

import Metrics from "@/components/Metrics/Metrics"
import WaitList from "../../components/home/WaitList/WaitList"
import styles from "@/assets/styles/shared.module.scss"
import { pageMetadata } from "../metadata"
import Advantages from "@/components/Launch/Advantages/Advantages"
import Slider from "@/components/elements/Slider/Slider"
import SmartFlowImg from "@/assets/images/home/smart-flow.png"

export const metadata = pageMetadata.home

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
      <Advantages />
      <Features />
      <Slider />
      <WaitList />
    </div>
  )
}
