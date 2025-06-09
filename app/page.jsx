import Hero from "../components/Hero/Hero"
import HowCanHelp from "../components/home/HowCanHelp/HowCanHelp"
import Features from "../components/home/Features/Features"
import WithScalemate from "../components/home/WithScalemate/WithScalemate"
import ROICalculator from "../components/home/ROICalculator/ROICalculator"
import WaitList from "../components/home/WaitList/WaitList"
import cn from "classnames"
import styles from "./page.module.scss"
import { pageMetadata } from "./metadata"

export const metadata = {
  ...pageMetadata.home,
  alternates: { canonical: "https://www.scalemate.co" },
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

  const badge = {
    link: "/ai-assistant",
    text: "Meet Marketing AI Agent",
  }
  return (
    <div className={cn(styles.main, styles.home)}>
      <Hero
        title={renderTitle()}
        description={description}
        fullHeight
        badge={badge}
      />
      <WithScalemate title="With Scalemate, ad management becomes easy, cutting time by over 62%." />
      <Features />
      <HowCanHelp />
      <ROICalculator />
      <WaitList href="/book-a-demo" />
    </div>
  )
}
