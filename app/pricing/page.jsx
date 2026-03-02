import Script from "next/script"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import PricingContent from "./PricingContent"
import CtaSection from "./CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title: "Free Ad Automation Tool for Meta & TikTok – Scalemate Pricing",
  description:
    "Automate Meta and TikTok ad campaigns for free – 1 ad account, 2 rules, 100 launches/month, unlimited creative uploads. No credit card. Custom plans with API access and dedicated support for teams at scale.",
  openGraph: {
    title: "Free Ad Automation for Meta & TikTok – Scalemate Pricing",
    description:
      "Start free with bulk ad launches, creative uploads, and AI-powered automation across Meta and TikTok. Custom plans for teams at scale.",
  },
}

const FAQ_ITEMS = [
  {
    question: "Is the Free plan really free – no credit card, no catch?",
    answer:
      "Yes. 1 ad account, 2 active rules, 100 ad launches per month, 50 AI messages, and unlimited uploads – $0/month, no credit card required. There's no trial period counting down and no features that quietly disappear after 14 days.\n\nYou keep access for as long as you need it. If you outgrow the free tier, upgrading is straightforward – but we won't nudge you toward it until it actually makes sense for your volume.",
  },
  {
    question: "Which ad platforms does Scalemate support?",
    answer:
      "Scalemate currently supports Meta (Facebook and Instagram) and TikTok. From one dashboard, you can bulk-launch ads, upload creatives, and automate campaign operations across both platforms simultaneously.\n\nThis means you're not toggling between Ads Manager and TikTok Ads Manager to run the same workflow twice. Additional platform support is on the roadmap – book a demo if you want to discuss specific requirements.",
  },
  {
    question:
      "What can I actually do with 100 ad launches and 2 rules per month?",
    answer:
      "Quite a lot for a single account. 100 launches lets you bulk-deploy new creative sets, test multiple audiences, and rotate winners on a weekly cadence without touching Ads Manager manually each time.\n\nTwo active rules cover your highest-leverage automations – pausing underperformers below a ROAS threshold, scaling top ads when they hit targets, or controlling spend during off-peak hours. For most single-account performance teams, this is enough to run a structured testing operation without any of the repetitive manual work.",
  },
  {
    question: "When does it make sense to move to a Custom plan?",
    answer:
      "The Free plan works well for a focused single-account operation. Once you're managing multiple ad accounts, consistently hitting the 100-launch ceiling, or need more than two automation rules running in parallel, a Custom plan removes those constraints entirely.\n\nCustom plans also include API access for teams that want to integrate Scalemate into existing workflows, priority feature requests, and dedicated support – which matters when ad operations are a core part of how your business scales. Most teams make the switch when manual workarounds start costing more time than the upgrade is worth.",
  },
  {
    question: "How much time does Scalemate actually save?",
    answer:
      "Based on data from active users, teams see 260% faster campaign launches, 7x faster creative uploads, and 35+ hours saved per month on average. The difference comes from eliminating the per-ad setup process: instead of configuring each ad individually in Ads Manager, you set parameters once and deploy across hundreds of ad sets in a single action.\n\nAutomation rules remove another layer of daily monitoring – you're not logging in to pause spend on poor performers or manually scale what's working. The cumulative effect is that your team spends less time on ad operations and more time on decisions that actually require judgment.",
  },
  {
    question: "Is my ad account data safe?",
    answer:
      "Scalemate connects to Meta and TikTok through their official APIs using only the permissions you explicitly grant. All data is anonymized before processing and is never sold or shared with third parties.\n\nYou remain in control: permissions can be revoked at any time through your connected platforms, and you can request full data deletion if you close your account. If you have specific security or compliance requirements, raise them during your demo and we'll walk through how Scalemate handles them.",
  },
  {
    question: "How do I get started with a Custom plan?",
    answer:
      "Book a demo and we'll start with a review of your current ad operations – volume, platforms, team structure, and where the biggest time costs are. From there, we'll recommend a setup that fits your workflow rather than asking you to adapt to ours.\n\nMost teams are live within a week of that first call. If you have existing processes or integrations you need to preserve, we account for those from the start.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function PricingPage() {
  return (
    <div className={styles.main}>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
