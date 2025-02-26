import WaitList from "@/components/home/WaitList/WaitList"
import FAQ from "@/components/FAQ/FAQ"
import Container from "@/components/elements/Container/Container"
import Hero from "@/components/Hero/Hero"
import Features from "./components/Features"
import styles from "./page.module.scss"

export default function AssistantPage() {
  return (
    <div className={styles.main}>
      <Hero
        title={
          <>
            Supercharge Your <span>Campaigns</span> with AI Precision
          </>
        }
        description="Unlock insights, automate optimizations, and supercharge your campaigns on Facebook, Google, TikTok, and more. Join our waitlist for early access to the ultimate AI toolkit for performance marketers"
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
      <WaitList />
    </div>
  )
}
