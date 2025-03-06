"use client"
import React, { useState } from "react"
import styles from "./FAQ.module.scss"

const FAQ = ({
  faqItems = FAQ_ITEMS,
  title = "Frequently Asked Questions",
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
              className={`${styles.question} ${
                openIndex === actualIndex ? styles.active : ""
              }`}
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
              className={`${styles.answer} ${
                openIndex === actualIndex ? styles.open : styles.closed
              }`}
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
    <section className={styles.container}>
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
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies depending on the scope and requirements of each project. Please contact us for a personalized quote.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines depend on complexity and scope. Simple websites may take 2-4 weeks, while more complex applications can take several months to develop.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your digital product continues to function optimally after launch.",
  },
  {
    question: "How do I get started with your company?",
    answer:
      "You can get started by reaching out to us through our contact form or calling our office. We'll schedule an initial consultation to discuss your project needs.",
  },
]

export default FAQ
