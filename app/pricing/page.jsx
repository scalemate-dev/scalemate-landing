import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import PricingContent from "./PricingContent"
import CtaSection from "./CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title: "Pricing – Free Ad Automation for Meta & TikTok  | Scalemate",
  description:
    "Launch and manage ads for free – 1 ad account, 2 automation rules, 100 ad launches/month, 50 AI messages, unlimited uploads. No credit card required. Custom plans for teams that need more.",
  openGraph: {
    title: "Pricing – Free Ad Automation | Scalemate",
    description:
      "Start free with bulk ad launches, creative uploads, and AI-powered automation across Meta and TikTok. Custom plans for teams at scale.",
  },
}

const FAQ_ITEMS = [
  {
    question: "Is the Free plan really free – no credit card, no catch?",
    answer:
      "Yes. 1 ad account, 2 active rules, 100 ad launches per month, 50 AI messages, unlimited uploads – $0/month. No credit card, no trial expiration. Use it as long as you need.",
  },
  {
    question: "Which ad platforms does Scalemate support?",
    answer:
      "Meta (Facebook & Instagram) and TikTok. You can bulk-launch ads, upload creatives, and automate campaign operations across both platforms from one dashboard.",
  },
  {
    question:
      "What can I actually do with 100 ad launches and 2 rules per month?",
    answer:
      "Enough to cover most testing cycles for a single account. 100 launches lets you bulk-deploy new creative sets, test audiences, and rotate winners weekly. Two active rules automate your most critical operations – pausing underperformers or scaling top ads by ROAS.",
  },
  {
    question: "When does it make sense to move to a Custom plan?",
    answer:
      "When you're running multiple ad accounts, launching more than 100 ad sets a month, or need more automation rules running simultaneously. Custom plans also include dedicated support – useful for teams building scalable ad operations.",
  },
  {
    question: "How much time does Scalemate actually save?",
    answer:
      "Teams report 260% faster campaign launches, 7x faster creative uploads, and 35+ hours saved per month. Instead of setting up each ad one by one in Ads Manager, you configure once and deploy across hundreds of ad sets in minutes.",
  },
  {
    question: "Is my ad account data safe?",
    answer:
      "All data is anonymized before processing and never shared with third parties. Scalemate connects via official platform APIs with permissions you control. You can revoke access or request data deletion at any time.",
  },
  {
    question: "How do I get started with a Custom plan?",
    answer:
      "Book a demo. We'll review your current operations, recommend the right setup, and get your team live – most are up and running within a week.",
  },
]

export default function PricingPage() {
  return (
    <div className={styles.main}>
      <PricingContent />
      <section className={styles.faq}>
        <Container>
          <FAQ faqItems={FAQ_ITEMS} title="FAQ" theme="light" multiOpen />
        </Container>
      </section>
      <CtaSection />
    </div>
  )
}
