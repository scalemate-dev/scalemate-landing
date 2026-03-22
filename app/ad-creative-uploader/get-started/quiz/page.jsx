"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter } from "next/navigation"
import { validateEmail } from "../../../../helpers/emails"
import { submitQuizAnswers } from "../../../../lib/api/quizApi"
import styles from "./quiz.module.scss"

const steps = [
  {
    title: "What's your average monthly spend on Meta, Google and TikTok?",
    key: "spend",
    type: "radio",
    options: ["<$10k", "$10k–$50k", "$50k–$250k", "$250k+"],
  },
  {
    title: "What's your main niche?",
    key: "niche",
    type: "radio",
    options: [
      "E-commerce / DTC",
      "Lead Gen (RE, Finance)",
      "Mobile Apps",
      "Affiliate (Nutra, Gambl.)",
    ],
  },
  {
    title: "How many new ads do you launch per week?",
    key: "adsPerWeek",
    type: "slider",
  },
  {
    title:
      "How much time is wasted on 'technical work' (bulk creation, post ID copying, naming)?",
    key: "timeWasted",
    type: "radio",
    options: ["<1 hr/week", "2–5 hrs/week", ">5 hrs/week (High Routine)"],
  },
  {
    title: "What's the #1 frustration with Meta Ads Manager?",
    key: "frustration",
    type: "multi",
    options: [
      "Interface lag & platform bugs",
      "Endless copy-pasting ads",
      "Manual naming & Post ID setup",
      "Downloading & re-uploading ads",
    ],
  },
]

// Slider zone config
const SLIDER_ZONES = [
  { min: 0, max: 30, label: "Starter", color: "#9C9890" },
  { min: 30, max: 100, label: "Scaling", color: "#f97316" },
  { min: 100, max: 500, label: "High Volume", color: "#ea580c" },
]

function getZone(value) {
  for (let i = SLIDER_ZONES.length - 1; i >= 0; i--) {
    if (value >= SLIDER_ZONES[i].min) return SLIDER_ZONES[i]
  }
  return SLIDER_ZONES[0]
}

const TOTAL_SEGMENTS = steps.length + 2 // quiz steps + processing + email step

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    spend: null,
    niche: null,
    adsPerWeek: 25,
    timeWasted: null,
    frustration: [],
  })
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [processingStatus, setProcessingStatus] = useState(0)
  const router = useRouter()

  const isProcessingStep = currentStep === steps.length
  const isEmailStep = currentStep === steps.length + 1
  const step = !isProcessingStep && !isEmailStep ? steps[currentStep] : null
  const isFirst = currentStep === 0

  const processingStatuses = [
    "Mapping your ad launch workflow...",
    "Calculating manual time per creative...",
    "Estimating automation coverage...",
    "Benchmarking against industry averages...",
    "Generating your personalized audit...",
  ]

  // Processing step auto-advance
  useEffect(() => {
    if (!isProcessingStep) return
    setProcessingStatus(0)
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step >= processingStatuses.length) {
        clearInterval(interval)
        setTimeout(() => setCurrentStep((s) => s + 1), 1200)
      } else {
        setProcessingStatus(step)
      }
    }, 1500)
    return () => clearInterval(interval)
  }, [isProcessingStep])

  const hasAnswer = isEmailStep || isProcessingStep
    ? false
    : step.type === "slider"
      ? true
      : step.type === "multi"
        ? answers[step.key]?.length > 0
        : answers[step.key] !== null
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const currentZone = useMemo(
    () => getZone(answers.adsPerWeek),
    [answers.adsPerWeek]
  )

  function handleSelect(option) {
    setAnswers((prev) => ({ ...prev, [step.key]: option }))
  }

  function handleMultiSelect(option) {
    setAnswers((prev) => {
      const current = prev[step.key] || []
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option]
      return { ...prev, [step.key]: next }
    })
  }

  function handleSliderChange(e) {
    setAnswers((prev) => ({ ...prev, adsPerWeek: Number(e.target.value) }))
  }

  function handleNext() {
    if (isEmailStep) return
    if (!hasAnswer) return
    setCurrentStep((s) => s + 1)
  }

  function handleBack() {
    if (!isFirst) {
      setEmailError("")
      setCurrentStep((s) => s - 1)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isValidEmail) {
      setEmailError("Please enter a valid business email.")
      return
    }
    setEmailError("")
    setSubmitting(true)

    try {
      await validateEmail(email)
    } catch (err) {
      setEmailError(err.message)
      setSubmitting(false)
      return
    }

    try {
      await submitQuizAnswers(email, answers)
      sessionStorage.setItem("quiz_email", email)
      router.push(`/ad-creative-uploader/get-started/quiz/results?ads=${answers.adsPerWeek}`)
    } catch (err) {
      setEmailError(err.message || "Something went wrong. Please try again.")
      setSubmitting(false)
    }
  }

  // Slider fill percentage (0-500)
  const sliderPercent = (answers.adsPerWeek / 500) * 100

  return (
    <div className={styles.quizPage}>
      <div className={styles.quizPanel}>
        <div className={styles.logo}>Scalemate.</div>

        <div className={styles.progressBar}>
          {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => (
            <div
              key={i}
              className={`${styles.progressSegment} ${
                i <= currentStep ? styles.active : ""
              }`}
            />
          ))}
        </div>

        {isProcessingStep ? (
          <div className={styles.processingScreen}>
            <div className={styles.processingLoader}>
              <svg className={styles.processingSpinner} viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  strokeWidth="3"
                  className={styles.processingTrack}
                />
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={styles.processingArc}
                />
              </svg>
            </div>
            <h1 className={styles.processingTitle}>
              Analyzing your manual launch routine...
            </h1>
            <p className={styles.processingStatus} key={processingStatus}>
              {processingStatuses[processingStatus]}
            </p>
            <div className={styles.processingDots}>
              {processingStatuses.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.processingDot} ${
                    i <= processingStatus ? styles.processingDotActive : ""
                  }`}
                />
              ))}
            </div>
          </div>
        ) : isEmailStep ? (
          <>
            <h1 className={styles.title}>
              Your audit is ready.
            </h1>
            <p className={styles.subtitle}>
              Enter your work email to view your personalized results.
            </p>

            <form className={styles.emailForm} onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  className={`${styles.emailInput} ${emailError ? styles.inputError : ""}`}
                  placeholder="Business Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError("")
                  }}
                  autoFocus
                />
                {emailError && (
                  <span className={styles.errorText}>{emailError}</span>
                )}
              </div>

              <button
                type="submit"
                className={`${styles.submitButton} ${!isValidEmail || submitting ? styles.disabled : ""}`}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Unlock My Report"}
              </button>

              <span className={styles.microCopy}>
                No spam. Just your report + a Desktop magic link.
              </span>
            </form>

            <div className={styles.nav}>
              <button className={styles.backButton} onClick={handleBack}>
                Back
              </button>
              <span />
            </div>
          </>
        ) : step.type === "slider" ? (
          <>
            <h1 className={styles.title}>{step.title}</h1>

            <div className={styles.sliderBlock}>
              {/* Value display */}
              <div className={styles.sliderValueRow}>
                <span
                  className={styles.sliderValue}
                  style={{ color: currentZone.color }}
                >
                  {answers.adsPerWeek}
                </span>
                <span className={styles.sliderUnit}>ads / week</span>
              </div>

              {/* Zone badge */}
              <div
                className={styles.zoneBadge}
                style={{
                  background: currentZone.color,
                }}
              >
                {currentZone.label}
              </div>

              {/* Slider track */}
              <div className={styles.sliderTrackWrapper}>
                {/* Zone color segments */}
                <div className={styles.sliderZones}>
                  {SLIDER_ZONES.map((zone) => (
                    <div
                      key={zone.label}
                      className={styles.sliderZoneSegment}
                      style={{
                        left: `${(zone.min / 500) * 100}%`,
                        width: `${((zone.max - zone.min) / 500) * 100}%`,
                        background: zone.color,
                        opacity:
                          answers.adsPerWeek >= zone.min ? 1 : 0.15,
                      }}
                    />
                  ))}
                </div>

                {/* Actual range input */}
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="1"
                  value={answers.adsPerWeek}
                  onChange={handleSliderChange}
                  className={styles.sliderInput}
                  style={{
                    "--fill": `${sliderPercent}%`,
                    "--thumb-color": currentZone.color,
                  }}
                />
              </div>

              {/* Zone labels under track */}
              <div className={styles.sliderLabels}>
                {SLIDER_ZONES.map((zone) => (
                  <div
                    key={zone.label}
                    className={`${styles.sliderLabel} ${
                      currentZone.label === zone.label
                        ? styles.sliderLabelActive
                        : ""
                    }`}
                  >
                    <span className={styles.sliderLabelText}>
                      {zone.label}
                    </span>
                    <span className={styles.sliderLabelRange}>
                      {zone.min}–{zone.max}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.nav}>
              <button
                className={styles.backButton}
                onClick={handleBack}
                disabled={isFirst}
              >
                Back
              </button>
              <button
                className={styles.nextButton}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </>
        ) : step.type === "multi" ? (
          <>
            <h1 className={styles.title}>{step.title}</h1>

            <div className={styles.options}>
              {step.options.map((option) => (
                <label
                  key={option}
                  className={`${styles.option} ${
                    answers[step.key]?.includes(option) ? styles.selected : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name={step.key}
                    checked={answers[step.key]?.includes(option) || false}
                    onChange={() => handleMultiSelect(option)}
                  />
                  <span className={styles.checkbox} />
                  <span className={styles.optionText}>{option}</span>
                </label>
              ))}
            </div>

            <div className={styles.nav}>
              <button
                className={styles.backButton}
                onClick={handleBack}
                disabled={isFirst}
              >
                Back
              </button>
              <button
                className={`${styles.nextButton} ${!hasAnswer ? styles.disabled : ""}`}
                onClick={handleNext}
                disabled={!hasAnswer}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className={styles.title}>{step.title}</h1>

            <div className={styles.options}>
              {step.options.map((option) => (
                <label
                  key={option}
                  className={`${styles.option} ${
                    answers[step.key] === option ? styles.selected : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={step.key}
                    checked={answers[step.key] === option}
                    onChange={() => handleSelect(option)}
                  />
                  <span className={styles.indicator} />
                  <span className={styles.optionText}>{option}</span>
                </label>
              ))}
            </div>

            <div className={styles.nav}>
              <button
                className={styles.backButton}
                onClick={handleBack}
                disabled={isFirst}
              >
                Back
              </button>
              <button
                className={`${styles.nextButton} ${!hasAnswer ? styles.disabled : ""}`}
                onClick={handleNext}
                disabled={!hasAnswer}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
