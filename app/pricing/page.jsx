import Script from "next/script"
import Link from "next/link"
import Container from "@/components/elements/Container/Container"
import FAQ from "@/components/FAQ/FAQ"
import PricingContent from "./PricingContent"
import CtaSection from "./CtaSection"
import styles from "./page.module.scss"

export const metadata = {
  title:
    "Pricing — Scalemate | Flat-fee ad automation for Meta & TikTok",
  description:
    "Modular flat-fee pricing for Scalemate. Rules from $349/mo, Launches from $279/mo. Bundle both for 30% off. Free tier with 1 ad account and 100 launches/mo. No ad-spend percentage, 12-month price lock.",
  alternates: {
    canonical: "https://www.scalemate.co/pricing",
  },
  openGraph: {
    title:
      "Pricing — Scalemate | Flat-fee ad automation for Meta & TikTok",
    description:
      "Modular flat-fee pricing for Scalemate. Rules from $349/mo, Launches from $279/mo. Bundle both for 30% off. Free tier with 1 ad account and 100 launches/mo. No ad-spend percentage, 12-month price lock.",
    url: "https://www.scalemate.co/pricing",
    type: "website",
    images: [{ url: "/og-pricing.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pricing — Scalemate | Flat-fee ad automation for Meta & TikTok",
    description:
      "Modular flat-fee pricing for Scalemate. Rules from $349/mo, Launches from $279/mo. Bundle both for 30% off. Free tier with 1 ad account and 100 launches/mo. No ad-spend percentage, 12-month price lock.",
    images: ["/og-pricing.png"],
  },
}

const FAQ_ITEMS = [
  {
    question: "How does Scalemate's pricing actually work?",
    answer:
      "Scalemate uses modular flat-fee pricing. There are two paid modules, each available in three tiers (Scale, Pro, or Advanced) sized by capacity. Rules runs $349 / $699 / $1,099 per month per tier. Launches is 20% lower across the board: $279 / $559 / $879 per month per tier.\n\nYou pay only for the modules you use. Buy both and you get an automatic 30% bundle discount. Your price never moves with ad spend — same rate whether you're running $50K/month or $5M/month.",
  },
  {
    question: "Is the Free plan really free — no credit card, no catch?",
    answer:
      "Yes. 1 ad account, 2 active rules, 100 ad launches per month, Facebook only, and unlimited Uploader access — $0/month, no credit card required. There's no trial period counting down and no features that quietly disappear after 14 days.\n\nYou keep access for as long as you need it. If you outgrow the free tier, upgrading is straightforward — but we won't nudge you toward it until it actually makes sense for your volume.",
  },
  {
    question: "What's included in the Rules vs. Launches modules?",
    answer:
      "Rules handles ad operations automation — pausing underperformers, scaling winners, controlling spend during off-peak hours, alerting your team in Slack or email. Tiers are sized by ad accounts (3 / 10 / unlimited) and active rules (10 / 50 / unlimited).\n\nLaunches handles bulk ad creation — deploying creative sets, audiences, and configurations across hundreds of ad sets in one pass. Tiers are sized by ad accounts (3 / 10 / unlimited), ads per month (500 / 2,000 / unlimited), and platforms (Meta + TikTok on Scale and Pro, all platforms on Advanced).\n\nUploader is included in every tier — including Free.",
  },
  {
    question: "How does the 30% bundle discount work?",
    answer:
      "Pick any Rules tier and any Launches tier — the moment both are active on your account, you pay 30% less on the combined price. Tiers can be mixed freely (e.g., Rules Pro at $699 + Launches Scale at $279 = $978 → $685 with bundle applied).\n\nIf you start with one module and add the second later, the discount applies from the next billing cycle. The configurator on this page shows the bundle math live as you toggle tiers.",
  },
  {
    question: "Will my price change as I scale ad spend?",
    answer:
      "No. Scalemate's flat-fee pricing is the core difference from spend-based tools. A team running $240K/month and a team running $2M/month pay the same tier rate — your bill is determined by capacity (accounts, rules, ad volume), not by what you spend on Meta or TikTok.\n\nSpend-based competitors typically take a percentage of ad spend, so the bigger you get, the more they charge. With Scalemate, growth doesn't punish your tooling budget.",
  },
  {
    question: "Can I prepay annually to save more?",
    answer:
      "Yes. Annual prepayment gets you an additional 15% off your monthly rate and locks the price for the full 12-month term. The configurator's Annual toggle shows the discounted total in real time.\n\nNote that annual subscriptions don't qualify for refunds on early cancellation. If you want flexibility month-to-month, the monthly billing option remains fully cancel-anytime.",
  },
  {
    question: "What happens to my price at renewal?",
    answer:
      "Your subscription rate is locked for 12 months from activation. Any pricing changes can only take effect at the next renewal after that 12-month period — and Scalemate sends written notice at least 30 days before any change, with the current rate, the new rate, and the effective date.\n\nIf you don't like the new rate, you can cancel before it takes effect without penalty.",
  },
  {
    question: "Can I upgrade, downgrade, or cancel mid-cycle?",
    answer:
      "Upgrades take effect immediately — you're charged the prorated difference for the remainder of the current billing period. Downgrades take effect at the start of the next billing period (no refunds for the current one). Cancellation works the same way: cancel anytime, access remains through the end of your current period.\n\nAdding a second module mid-cycle qualifies you for the 30% bundle discount, which applies from the next billing cycle.",
  },
  {
    question: "Is there a design-partner or discount program?",
    answer:
      "Yes, but it's invite-based rather than publicly listed. Early adopters and design partners can receive up to 60% off standard pricing in exchange for product feedback, case-study participation, or referral commitments — terms are agreed individually.\n\nIf you're running a high-volume operation or are open to a case study, book a demo and we can walk through whether design-partner terms make sense for your team.",
  },
  {
    question: "How do I get started?",
    answer:
      "Two paths. Start free at app.scalemate.co — 1 ad account, 2 rules, 100 launches/month, no credit card, no time limit. Use it as long as you need it.\n\nFor a paid tier or a bundle, book a demo. We'll review your current ad operations — volume, platforms, team structure — and recommend a tier that fits how your team actually works. Most teams are live within a week of that first call.",
  },
  {
    question: "How does Scalemate compare to other Facebook ads automation tools?",
    answerText:
      "Scalemate is one of 13 Facebook ads automation tools on the market in 2026 — alongside Birch (Revealbot), Madgicx, Kitchn.io, AdManage, AdNova, AdEspresso, Smartly, Trapica, and others. We cover the head-to-head comparison — rules engine depth, auto-revert, bulk launch, creative sync, pricing — in the 13 best Facebook ads automation tools roundup.",
    answer: (
      <>
        Scalemate is one of 13 Facebook ads automation tools on the market in
        2026 — alongside Birch (Revealbot), Madgicx, Kitchn.io, AdManage,
        AdNova, AdEspresso, Smartly, Trapica, and others. We cover the
        head-to-head comparison — rules engine depth, auto-revert, bulk launch,
        creative sync, pricing — in the{" "}
        <Link href="/blog/best-facebook-ads-automation-tools">
          13 best Facebook ads automation tools roundup
        </Link>
        .
      </>
    ),
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
