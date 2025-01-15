import Hero from "../components/home/Hero/Hero"
import HowCanHelp from "../components/home/HowCanHelp/HowCanHelp"
import Features from "../components/home/Features/Features"
import WithScalemate from "../components/home/WithScalemate/WithScalemate"
import ROICalculator from "../components/home/ROICalculator/ROICalculator"
import WaitList from "../components/home/WaitList/WaitList"
import Footer from "@/components/shared/Footer/Footer"
import styles from "./page.module.scss"
import { pageMetadata } from "./metadata"

export const metadata = pageMetadata.home

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
      <WithScalemate />
      <ROICalculator />
      <HowCanHelp />
      <Features />
      <WaitList />
    </div>
  )
}
