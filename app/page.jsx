import Hero from "../components/Hero/Hero"
import HowCanHelp from "../components/home/HowCanHelp/HowCanHelp"
import Features from "../components/home/Features/Features"
import WithScalemate from "../components/home/WithScalemate/WithScalemate"
import ROICalculator from "../components/home/ROICalculator/ROICalculator"
import WaitList from "../components/home/WaitList/WaitList"
import Footer from "@/components/elements/Footer/Footer"
import styles from "./page.module.scss"
import { pageMetadata } from "./metadata"

export const metadata = {
  ...pageMetadata.home,
  alternates: {
    canonical: "https://www.scalemate.co",
  },
}

export default function Home() {
  const renderTitle = () => {
    return (
      <>
        Launch Ads Faster
        <br /> to <span>triple-scale</span> your app
      </>
    )
  }
  const description = `Scalemate let you launch hundreds of ads in minutes, scaling campaigns
          faster and smarter. Born to erase marketing routine and save you 3
          hours daily.`
  return (
    <div className={styles.main}>
      <Hero title={renderTitle()} description={description} />
      <WithScalemate />
      <Features />
      <HowCanHelp />
      <ROICalculator />
      <WaitList />
    </div>
  )
}
