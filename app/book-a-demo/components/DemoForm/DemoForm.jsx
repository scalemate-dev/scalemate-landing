"use client"

import { validateEmail } from "@/helpers/emails"

import { useState, useEffect, useRef, Suspense } from "react"
import Input from "@/components/elements/Input/Input"
import Select from "@/components/elements/Select/Select"
import Button from "@/components/elements/Button/Button"
import FAQ from "@/components/FAQ/FAQ"
import styles from "./DemoForm.module.scss"
import { trackDemoFormSubmit } from "@/helpers/trackGTM"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { EVENTS } from "@/helpers/analytics/mixpanel.events"

const FEATURES = [
  "Your workflow mapped to automation – not a generic product tour",
  "See where manual work drops out of your ad operations",
  "Leave with a clear plan to scale without adding headcount",
]

const DEMO_FAQ_ITEMS = [
  {
    question: "What does the Scalemate demo cover?",
    answer:
      "The demo is a 30-minute walkthrough mapped to your actual workflow. We show how your team can automate campaign setup, bulk ad launches, creative uploads from cloud storage, and scaling rules across Meta and TikTok – so you leave with a clear plan to scale without adding headcount.",
  },
  {
    question: "How does bulk ad launching work in Scalemate?",
    answer:
      "Scalemate's bulk ad launch tool lets you deploy hundreds of ad sets from a single setup. You configure campaign parameters once – budget, targeting, placements, naming conventions – then launch everything at once. Teams like KitUp have launched 15,000+ ads and saved 35 hours per month using this workflow.",
  },
  {
    question: "Which ad platforms does Scalemate support?",
    answer:
      "Scalemate currently supports Meta (Facebook & Instagram) and TikTok. You can manage multiple ad accounts across both platforms from one place – bulk launches, automation rules, and creative uploads all work across supported networks.",
  },
  {
    question:
      "Can Scalemate automatically pause or scale ads based on performance?",
    answer:
      "Yes. Ad campaign automation rules let you set performance thresholds – like ROAS below 1.5 or CPI exceeding your target – and define actions such as auto-pause, auto-scale, or budget alerts. Rules run 24/7, so budget leaks get caught at 2 AM and winners scale before your team logs in. Teams see an average 32% budget savings and 62% less time on routine optimization.",
  },
  {
    question: "How do creative uploads from cloud storage work?",
    answer:
      "Scalemate connects directly to Google Drive, Dropbox, or NextCloud and syncs creatives to your Meta Media Library – no download-then-reupload cycle. Automatic deduplication ensures only new files transfer. Teams upload hundreds of files in one click, making creative-to-campaign handoff 7x faster.",
  },
  {
    question: "Who is Scalemate built for?",
    answer:
      "Scalemate is built for performance marketing teams that run high-volume ad operations – media buyers, UA managers, creative ops, and marketing leaders. It's used across marketing agencies, mobile apps, gaming studios, e-commerce brands, and education platforms. Whether you manage $20K or $500K+ monthly ad spend, the automation scales with you.",
  },
  {
    question: "Is there a free plan or trial available?",
    answer:
      "Yes. Scalemate offers a free plan that includes 1 ad account, 2 automation rules, 100 campaign launches per month, and unlimited creative uploads – no credit card required. You can start a free trial at any time or book a demo to see the full platform first.",
  },
  {
    question: "How quickly can my team get started after the demo?",
    answer:
      "Most teams are live within the same day. Connecting your ad accounts takes minutes via secure OAuth, and cloud storage integration is a one-time setup. There's no lengthy onboarding – the bulk launch and automation tools are designed to fit into your existing workflow immediately.",
  },
]

const DemoFormWithParams = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobPosition: "",
    companyName: "",
    monthlyBudget: "",
    message: "",
    error: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const hasStarted = useRef(false)

  useEffect(() => {
    trackMixpanelEvent(EVENTS.DEMO_FORM_VIEWED, {
      page_name: "Book a Demo",
    })
  }, [])

  const jobPositionOptions = [
    "C-level",
    "Team lead / Head (management)",
    "User acquisition manager",
    "Creative designer",
    "Other",
  ]

  const monthlyBudgetOptions = [
    "Less than $20,000",
    "$20,001 - $50,000",
    "$50,001 - $100,000",
    "$100,001 - $500,000",
    "Over $500,000",
    "Prefer not to answer",
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)

      await validateEmail(formData.email)
      await sendForm(formData)
      setFormSent(true)

      trackMixpanelEvent(EVENTS.DEMO_FORM_SUBMITTED, {
        job_position: formData.jobPosition || "not_provided",
        monthly_budget: formData.monthlyBudget || "not_provided",
        has_message: !!formData.message,
      })
    } catch (error) {
      setError(error.message)
      trackMixpanelEvent(EVENTS.DEMO_FORM_ERRORED, {
        error_message: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const sendForm = async (data) => {
    await fetch("https://submit-form.com/S3mkBrhnv", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    trackDemoFormSubmit(data)
  }

  const handleChange = (field) => (value) => {
    setError("")
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (!hasStarted.current) {
      hasStarted.current = true
      trackMixpanelEvent(EVENTS.DEMO_FORM_STARTED, {
        first_field: field,
      })
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DEMO_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <div className={styles.demo}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className={styles.secondaryGlow} aria-hidden="true" />

      {/* Hero: two-column layout */}
      <div className={styles.heroSection}>
        {/* Left – content column */}
        <div className={styles.contentColumn}>
          <span className={styles.label}>Book a Demo</span>

          <h1 className={styles.title}>
            Scale ads without scaling{" "}
            <span className={styles.titleAccent}>manual&nbsp;work</span>
          </h1>

          <p className={styles.description}>
            See how your team can automate campaign setup, creative uploads, and
            scaling rules – mapped to your actual workflow across Meta and
            TikTok.
          </p>

          <ul className={styles.features}>
            {FEATURES.map((feature, i) => (
              <li key={i} className={styles.feature}>
                <span className={styles.featureNum}>0{i + 1}</span>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>

          <div className={styles.trustBadge}>
            <span className={styles.trustDot} />
            <span>30 minutes. No commitment. Come with your workflow.</span>
          </div>
        </div>

        {/* Right – form column */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            {formSent ? (
              <div className={styles.successState}>
                <div className={styles.successIcon} aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M6 14.5L11.5 20L22 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h2 className={styles.successTitle}>You're booked.</h2>
                <p className={styles.successText}>
                  We'll reach out to <strong>{formData.email}</strong> within 24
                  hours to schedule your demo.
                </p>

                <div className={styles.successNext}>
                  <p className={styles.successNextLabel}>What happens next</p>
                  <p className={styles.successNextText}>
                    Check your inbox for a scheduling link. Pick a time that
                    works for your team – we'll map the demo to how you actually
                    run ads.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Book your demo</h2>
                  <p className={styles.formSubtitle}>
                    We'll reach out within 24 hours to schedule.
                  </p>
                </div>

                <form className={styles.formFields} onSubmit={handleSubmit}>
                  <Input
                    required
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange("name")}
                  />
                  <Input
                    required
                    error={error}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                  />

                  <Select
                    label="Job position"
                    value={formData.jobPosition}
                    onChange={handleChange("jobPosition")}
                    placeholder="Select role"
                    options={jobPositionOptions}
                  />
                  <Select
                    label="Monthly ad budget"
                    value={formData.monthlyBudget}
                    onChange={handleChange("monthlyBudget")}
                    placeholder="Select budget"
                    options={monthlyBudgetOptions}
                  />

                  <Input
                    textarea
                    label="Message"
                    name="message"
                    placeholder="Anything specific you'd like to discuss?"
                    value={formData.message}
                    onChange={handleChange("message")}
                  />

                  <div className={styles.submitButton}>
                    <Button color="accent" wide submit loading={loading}>
                      Book a Demo
                    </Button>
                  </div>

                  <p className={styles.error}>{error}</p>
                </form>

                <div className={styles.formFooter}>
                  <p className={styles.formFooterText}>
                    Prefer to explore on your own?{" "}
                    <a
                      href="https://app.scalemate.co/create-account"
                      className={styles.formFooterLink}
                    >
                      Start free trial &rarr;
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className={styles.faqWrapper}>
        <div className={styles.faqSection}>
          <FAQ
            faqItems={DEMO_FAQ_ITEMS}
            title="Frequently Asked Questions"
            theme="light"
            multiOpen
          />
        </div>
      </div>
    </div>
  )
}

const DemoForm = () => {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <DemoFormWithParams />
    </Suspense>
  )
}

export default DemoForm
