import WaitList from "@/components/home/WaitList/WaitList"
import cn from "classnames"
import FAQ from "@/components/FAQ/FAQ"
import Container from "@/components/elements/Container/Container"
import Hero from "@/components/Hero/Hero"
import Features from "./components/Features"
import styles from "./page.module.scss"

import heroImage from "@/assets/images/assistant/chat.png"
export default function AssistantPage() {
  return (
    <div className={cn(styles.main, styles.darkTheme)}>
      <Hero
        type="secondary"
        image={heroImage}
        title={
          <>
            Scale Smarter <br />
            with your <span>AI Agent</span>
          </>
        }
        description="Experience the next generation of ad management. Get insights, recommendations, and automation for your campaigns at your fingertips. <br/ >Apply for early access!"
        CTAButtonText="Get early access"
        CTALink="/get-early-access"
        showTrial={false}
      />
      <Container paddingBottom={100}>
        <Features />
      </Container>

      <Container>
        <FAQ />
      </Container>
      <WaitList theme="dark" />
    </div>
  )
}
