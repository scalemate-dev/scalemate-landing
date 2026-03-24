"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter } from "next/navigation"
import { validateEmail } from "../../../../helpers/emails"
import { submitQuizAnswers } from "../../../../lib/api/quizApi"
import styles from "./quiz.module.scss"

const steps = [
  {
    title: "What slows your team down the most when launching new creatives?",
    key: "bottleneck",
    type: "radio",
    options: [
      "Uploading files to each platform manually",
      "Setting up campaigns and ad sets from scratch every time",
      "Coordinating creatives across multiple ad accounts",
      "All of the above — it's the whole process",
    ],
  },
  {
    title: "How many new ads do you launch per week?",
    key: "adsPerWeek",
    type: "slider",
  },
  {
    title: "What happens when your team has to launch 20+ creatives at once?",
    key: "consequence",
    type: "radio",
    options: [
      "We just push through it manually — it takes forever",
      "Things get rushed, and mistakes slip through",
      "We delay the launch because setup takes too long",
      "We limit how many creatives we test",
    ],
  },
  {
    title: "How does your team handle ad ops today?",
    key: "workaround",
    type: "radio",
    options: [
      "Manually — no tools, just hands and patience",
      "Internal scripts or spreadsheets",
      "We hired more people to keep up",
      "We've tried tools, but nothing covered the full workflow",
    ],
  },
  {
    title: "What best describes your role?",
    key: "role",
    type: "radio",
    options: [
      "I run ads hands-on every day",
      "I manage a performance team",
      "I'm responsible for marketing growth and scaling",
      "I'm a founder handling ads myself",
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

// Determine result profile based on quiz answers
function determineProfile(answers) {
  const { bottleneck, consequence, workaround, role, adsPerWeek } = answers

  // Decision Maker: manages team/growth + hired people
  if (
    (role === "I manage a performance team" ||
      role === "I'm responsible for marketing growth and scaling") &&
    workaround === "We hired more people to keep up"
  ) {
    return "decision-maker"
  }

  // Error-Prone Operator: mistakes + fragile scripts
  if (
    consequence === "Things get rushed, and mistakes slip through" &&
    workaround === "Internal scripts or spreadsheets"
  ) {
    return "error-prone"
  }

  // Scaling Bottleneck: multi-account + delays/limits + scaling/high volume
  if (
    bottleneck === "Coordinating creatives across multiple ad accounts" &&
    (consequence === "We delay the launch because setup takes too long" ||
      consequence === "We limit how many creatives we test") &&
    adsPerWeek >= 30
  ) {
    return "scaling-bottleneck"
  }

  // Manual Grinder: upload pain / everything painful + push through + no tools
  if (
    (bottleneck === "Uploading files to each platform manually" ||
      bottleneck === "All of the above — it's the whole process") &&
    consequence === "We just push through it manually — it takes forever" &&
    workaround === "Manually — no tools, just hands and patience"
  ) {
    return "manual-grinder"
  }

  // Fallback: determine by strongest signals
  if (
    consequence === "Things get rushed, and mistakes slip through" ||
    workaround === "Internal scripts or spreadsheets"
  ) {
    return "error-prone"
  }

  if (
    bottleneck === "Coordinating creatives across multiple ad accounts" ||
    consequence === "We delay the launch because setup takes too long" ||
    consequence === "We limit how many creatives we test"
  ) {
    return "scaling-bottleneck"
  }

  // Default to manual grinder
  return "manual-grinder"
}

const TOTAL_SEGMENTS = steps.length + 2 // quiz steps + processing + email step

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    bottleneck: null,
    adsPerWeek: 25,
    consequence: null,
    workaround: null,
    role: null,
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
      : answers[step.key] !== null
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const currentZone = useMemo(
    () => getZone(answers.adsPerWeek),
    [answers.adsPerWeek]
  )

  function handleSelect(option) {
    setAnswers((prev) => ({ ...prev, [step.key]: option }))
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
      sessionStorage.setItem("quiz_answers", JSON.stringify(answers))
      const profile = determineProfile(answers)
      router.push(
        `/ad-creative-uploader/get-started/quiz/results?ads=${answers.adsPerWeek}&profile=${profile}`
      )
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
              Your ad ops assessment is ready
            </h1>
            <p className={styles.subtitle}>
              See where your workflow is leaking time — and how to fix it.
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
                {submitting ? "Submitting..." : "See my results"}
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
