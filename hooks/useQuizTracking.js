"use client"

import { useRef, useEffect, useCallback } from "react"
import {
  trackMixpanelEvent,
  identifyMixpanelUser,
  setMixpanelUserProperties,
  mixpanel,
  initMixpanel,
} from "@/helpers/analytics/mixpanel"
import { extractUtmParams } from "@/helpers/analytics/mixpanel.utils"

export function useQuizTracking({ quizId, totalSteps }) {
  const startTimeRef = useRef(null)
  const submittedRef = useRef(false)
  const lastStepRef = useRef({ number: 0, name: "" })
  const stepsCompletedRef = useRef(0)

  const baseProps = useCallback(
    () => ({ quiz_id: quizId, total_steps: totalSteps }),
    [quizId, totalSteps],
  )

  const trackStart = useCallback(() => {
    if (startTimeRef.current) return
    startTimeRef.current = Date.now()
    const params = new URLSearchParams(window.location.search)
    trackMixpanelEvent("quiz_started", {
      ...baseProps(),
      entry_url: window.location.pathname,
      referrer: document.referrer || null,
      ...extractUtmParams(params),
    })
  }, [baseProps])

  const trackStepCompleted = useCallback(
    ({ stepNumber, stepName, stepTitle, stepType, answer }) => {
      lastStepRef.current = { number: stepNumber, name: stepName }
      stepsCompletedRef.current = stepNumber
      trackMixpanelEvent("quiz_step_completed", {
        ...baseProps(),
        step_number: stepNumber,
        step_name: stepName,
        step_title: stepTitle,
        step_type: stepType,
        answer,
      })
    },
    [baseProps],
  )

  const trackStepBack = useCallback(
    ({ stepNumber, stepName }) => {
      trackMixpanelEvent("quiz_step_back", {
        ...baseProps(),
        step_number: stepNumber,
        step_name: stepName,
      })
    },
    [baseProps],
  )

  const trackSubmitted = useCallback(
    (email) => {
      identifyMixpanelUser(email)
      setMixpanelUserProperties({ $email: email })
      submittedRef.current = true
      trackMixpanelEvent("quiz_submitted", {
        ...baseProps(),
        steps_completed: stepsCompletedRef.current,
        completion_time_sec: Math.round(
          (Date.now() - startTimeRef.current) / 1000,
        ),
      })
    },
    [baseProps],
  )

  const trackError = useCallback(
    ({ stepNumber, stepName, errorType, errorMessage }) => {
      trackMixpanelEvent("quiz_error", {
        ...baseProps(),
        step_number: stepNumber,
        step_name: stepName,
        error_type: errorType,
        error_message: errorMessage,
      })
    },
    [baseProps],
  )

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (submittedRef.current) return
      if (!initMixpanel()) return
      mixpanel.track(
        "quiz_abandoned",
        {
          ...baseProps(),
          last_step_number: lastStepRef.current.number,
          last_step_name: lastStepRef.current.name,
          steps_completed: stepsCompletedRef.current,
          time_spent_sec: Math.round(
            (Date.now() - (startTimeRef.current || Date.now())) / 1000,
          ),
        },
        { transport: "sendBeacon" },
      )
    }
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [baseProps])

  return {
    trackStart,
    trackStepCompleted,
    trackStepBack,
    trackSubmitted,
    trackError,
  }
}
