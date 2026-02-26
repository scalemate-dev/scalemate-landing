import WaitList from "@/components/home/WaitList/WaitList"
import SubmitForm from "./components/SubmitForm"
import Image from "next/image"
import cn from "classnames"
import FAQ from "@/components/FAQ/FAQ"
import Container from "@/components/elements/Container/Container"
import Hero from "@/components/Hero/Hero"
import Features from "./components/Features"
import styles from "./page.module.scss"

import heroImage from "@/assets/images/assistant/chat.png"
import { pageMetadata } from "@/app/metadata"

const FAQ_ITEMS = [
  {
    question: "What is the purpose of this AI assistant?",
    answer:
      "The AI assistant is designed speciffically for performance marketers to help you analyze and manage your ad campaigns more efficiently.",
  },
  {
    question: "Can I manage multiple ad accounts and networks?",
    answer:
      "Yes! Scalemate works with Meta (ex-Facebook), TikTok, Google Ads — and we’re expanding. Manage all your accounts in one place with ease.",
  },
  {
    question: "What Bulk Actions are available?",
    answer:
      "You can bulk-upload videos and images from your Cloud or Local Drive to Meta (ex-Facebook) TikTok and Google Ads. Launch creatives using any confiuration, control budgets, and rotate top-performing ads in your campaigns.",
  },
  {
    question: "Is it safe to use for sensitive data?",
    answer:
      "For your security, all data is anonymized before processing – ensuring your private information stays private. Additioinaly, you can request data deletion at any time.",
  },
  {
    question: "Will Scalemate create new ad creatives for me?",
    answer:
      "No way! We handle the tedious tasks – like bulk uploads and ad launches, so you can focus on your creative genius.",
  },

  {
    question: "I have custom analytics dashboard, can I use it with Scalemate?",
    answer:
      "Yes, we can connect Scalemate to your custom analytics system. We'll use your data to help you optimize your campaigns for better results and increase your ROAS.",
  },

  {
    question: "Is Scalemate only for big brands?",
    answer:
      "Whether you’re a small business or a major player, if you juggle multiple ads and campaigns, you’ll save time and stress with our tool.",
  },
  {
    question:
      "I didn't find integration with platform I use, can I request it?",
    answer:
      "Yes, you can request a new integration by contacting our support team.",
  },
]

export const metadata = pageMetadata.assistant

export default function AssistantPage() {
  return (
    <div className={cn(styles.main, styles.darkTheme)} id="request-access">
      <Hero
        className={styles.hero}
        image={heroImage}
        title={
          <>
            Chat your Ads with <br />
            <span> Marketing AI Agent</span>
          </>
        }
        description="Experience future of Ad management: Control budgets, launch campaigns, upload creatives and generate reports. All in one AI-powered chat"
        ctaForm={<SubmitForm />}
        showTrial={false}
        fullHeight
      />
      <Container>
        <div className={styles.heroImageContainer}>
          <Image
            src={heroImage}
            className={styles.heroImage}
            alt="Marketing AI Assistant preview"
          />
        </div>
      </Container>
      <Container paddingBottom={100}>
        <Features />
      </Container>

      <Container>
        <FAQ faqItems={FAQ_ITEMS} />
      </Container>
      <WaitList
        theme="dark"
        href="/ai-assistant#request-access"
        buttonText="Book a demo"
      />
    </div>
  )
}
