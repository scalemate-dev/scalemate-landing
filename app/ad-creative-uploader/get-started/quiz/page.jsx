"use client"

import { useState, useMemo, useEffect } from "react"
import { useQuizTracking } from "@/hooks/useQuizTracking"
import { useQuizSubmit } from "@/hooks/useQuizSubmit"
import styles from "../quiz-v1/quiz.module.scss"

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
      "Marketing Agency",
      "Mobile Apps",
      "E-commerce / DTC",
      "Freelance Marketer",
    ],
  },
  {
    title: 'What\'s your most common "overtime" trigger?',
    key: "overtimeTrigger",
    type: "radio",
    options: [
      "Last-minute urgent launches",
      "Waiting for assets to start the routine",
      "Urgent scaling/cutting during weekends",
      "Downloading/uploading creative files",
    ],
  },
  {
    title: "How many new ads do you launch per week?",
    key: "adsPerWeek",
    type: "slider",
  },
  {
    title: "How much time do you spend on campaign setup and creative uploads?",
    key: "timeWasted",
    type: "radio",
    options: ["< 1hr/week", "2–5 hrs/week", ">5 hrs/week"],
  },
  {
    title: "What's the №1 Frustration with Meta Ads Manager?",
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

const TOTAL_SEGMENTS = steps.length + 2

const QUIZ_ID = "ad-uploader-quiz"

export default function QuizV1Page() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    spend: null,
    niche: null,
    overtimeTrigger: null,
    adsPerWeek: 25,
    timeWasted: null,
    frustration: [],
  })
  const [processingStatus, setProcessingStatus] = useState(0)
  const { trackStart, trackStepCompleted, trackStepBack, trackSubmitted, trackError } =
    useQuizTracking({ quizId: QUIZ_ID, totalSteps: steps.length })
  const { email, setEmail, emailError, setEmailError, submitting, isValidEmail, handleSubmit } =
    useQuizSubmit({
      totalSteps: steps.length,
      stepTitle: "Your audit is ready.",
      buildRedirectUrl: (a) => `/ad-creative-uploader/get-started/quiz/results?ads=${a.adsPerWeek}`,
      trackStepCompleted,
      trackSubmitted,
      trackError,
    })

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

  useEffect(() => {
    trackStart()
  }, [trackStart])

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

  const hasAnswer =
    isEmailStep || isProcessingStep
      ? false
      : step.type === "slider"
        ? true
        : step.type === "multi"
          ? answers[step.key]?.length > 0
          : answers[step.key] !== null
  const currentZone = useMemo(
    () => getZone(answers.adsPerWeek),
    [answers.adsPerWeek],
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
    trackStepCompleted({
      stepNumber: currentStep + 1,
      stepName: step.key,
      stepTitle: step.title,
      stepType: step.type === "multi" ? "multi_select" : step.type,
      answer: step.type === "slider" ? answers.adsPerWeek : answers[step.key],
    })
    setCurrentStep((s) => s + 1)
  }

  function handleBack() {
    if (!isFirst) {
      trackStepBack({
        stepNumber: currentStep + 1,
        stepName: step?.key || (isEmailStep ? "email" : "processing"),
      })
      setEmailError("")
      setCurrentStep((s) => s - 1)
    }
  }

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
            <h1 className={styles.title}>Your audit is ready.</h1>
            <p className={styles.subtitle}>
              Enter your work email to view your personalized results.
            </p>

            <form className={styles.emailForm} onSubmit={(e) => handleSubmit(e, answers)}>
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
              <div className={styles.sliderValueRow}>
                <span
                  className={styles.sliderValue}
                  style={{ color: currentZone.color }}
                >
                  {answers.adsPerWeek}
                </span>
                <span className={styles.sliderUnit}>ads / week</span>
              </div>

              <div
                className={styles.zoneBadge}
                style={{ background: currentZone.color }}
              >
                {currentZone.label}
              </div>

              <div className={styles.sliderTrackWrapper}>
                <div className={styles.sliderZones}>
                  {SLIDER_ZONES.map((zone) => (
                    <div
                      key={zone.label}
                      className={styles.sliderZoneSegment}
                      style={{
                        left: `${(zone.min / 500) * 100}%`,
                        width: `${((zone.max - zone.min) / 500) * 100}%`,
                        background: zone.color,
                        opacity: answers.adsPerWeek >= zone.min ? 1 : 0.15,
                      }}
                    />
                  ))}
                </div>

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
                    <span className={styles.sliderLabelText}>{zone.label}</span>
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
              <button className={styles.nextButton} onClick={handleNext}>
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
