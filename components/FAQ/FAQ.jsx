"use client"
import cn from "classnames"
import React, { useState } from "react"
import styles from "./FAQ.module.scss"

const FAQ = ({
  faqItems = FAQ_ITEMS,
  title = "Frequently Asked Questions",
  theme = "dark",
}) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Split items into two columns
  const midpoint = Math.ceil(faqItems.length / 2)
  const leftColumnItems = faqItems.slice(0, midpoint)
  const rightColumnItems = faqItems.slice(midpoint)

  // Render a column of FAQ items
  const renderColumn = (items, startIndex) => (
    <div className={styles.column}>
      {items.map((item, index) => {
        const actualIndex = startIndex + index
        return (
          <div key={actualIndex} className={styles.item}>
            <button
              className={cn(styles.question, {
                [styles.active]: openIndex === actualIndex,
              })}
              onClick={() => toggleAccordion(actualIndex)}
              aria-expanded={openIndex === actualIndex}
              aria-controls={`faq-answer-${actualIndex}`}
              type="button"
            >
              {item.question}
              <span className={styles.icon} aria-hidden="true">
                {openIndex === actualIndex ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${actualIndex}`}
              className={cn(styles.answer, {
                [styles.open]: openIndex === actualIndex,
                [styles.closed]: openIndex !== actualIndex,
              })}
              role="region"
              aria-labelledby={`faq-question-${actualIndex}`}
            >
              <p className={styles.answerText}>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <section
      className={cn(styles.container, { [styles.dark]: theme === "dark" })}
    >
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.list}>
        {renderColumn(leftColumnItems, 0)}
        {renderColumn(rightColumnItems, midpoint)}
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
