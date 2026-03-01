"use client"
import cn from "classnames"
import React, { useState } from "react"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"
import styles from "./FAQ.module.scss"

const FAQ = ({
  faqItems = FAQ_ITEMS,
  title = "Frequently Asked Questions",
  theme = "dark",
  multiOpen = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState(new Set())

  const toggleAccordion = (index) => {
    const isOpening = !openIndexes.has(index)
    trackMixpanelEvent(EVENTS.FAQ_ITEM_TOGGLED, {
      question: faqItems[index]?.question,
      action: isOpening ? "opened" : "closed",
    })
    setOpenIndexes((prev) => {
      if (multiOpen) {
        const next = new Set(prev)
        if (next.has(index)) {
          next.delete(index)
        } else {
          next.add(index)
        }
        return next
      }
      // Single-open: close current if clicking the same, otherwise open only the new one
      return prev.has(index) ? new Set() : new Set([index])
    })
  }

  return (
    <section
      className={cn(styles.container, { [styles.dark]: theme === "dark" })}
    >
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.list}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={cn(styles.question, {
                [styles.active]: openIndexes.has(index),
              })}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndexes.has(index)}
              aria-controls={`faq-answer-${index}`}
              type="button"
            >
              {item.question}
              <span
                className={cn(styles.icon, {
                  [styles.iconOpen]: openIndexes.has(index),
                })}
                aria-hidden="true"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={cn(styles.answer, {
                [styles.open]: openIndexes.has(index),
                [styles.closed]: !openIndexes.has(index),
              })}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <p className={styles.answerText}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const FAQ_ITEMS = [
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

export default FAQ
