import { useState } from "react"
import { useRouter } from "next/navigation"
import { validateEmail } from "@/helpers/emails"
import { submitQuizAnswers } from "@/lib/api/quizApi"
import { trackQuizEmailSent } from "@/helpers/trackGTM"

export function useQuizSubmit({
  totalSteps,
  stepTitle,
  buildRedirectUrl,
  onBeforeRedirect,
  trackStepCompleted,
  trackSubmitted,
  trackError,
}) {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const emailStepNumber = totalSteps + 2

  async function handleSubmit(e, answers) {
    e.preventDefault()
    if (!isValidEmail) {
      setEmailError("Please enter a valid email.")
      trackError({
        stepNumber: emailStepNumber,
        stepName: "email",
        errorType: "validation",
        errorMessage: "Invalid email address",
      })
      return
    }
    setEmailError("")
    setSubmitting(true)

    try {
      await validateEmail(email)
    } catch (err) {
      trackError({
        stepNumber: emailStepNumber,
        stepName: "email",
        errorType: "api",
        errorMessage: err.message,
      })
      setEmailError(err.message)
      setSubmitting(false)
      return
    }

    try {
      await submitQuizAnswers(email, answers)
      trackStepCompleted({
        stepNumber: emailStepNumber,
        stepName: "email",
        stepTitle,
        stepType: "email",
        answer: email.split("@")[1],
      })
      trackSubmitted(email)
      trackQuizEmailSent()
      sessionStorage.setItem("quiz_email", email)
      onBeforeRedirect?.(answers)
      router.push(buildRedirectUrl(answers))
    } catch (err) {
      trackError({
        stepNumber: emailStepNumber,
        stepName: "email",
        errorType: "api",
        errorMessage: err.message || "Submission failed",
      })
      setEmailError(err.message || "Something went wrong. Please try again.")
      setSubmitting(false)
    }
  }

  return {
    email,
    setEmail,
    emailError,
    setEmailError,
    submitting,
    isValidEmail,
    handleSubmit,
  }
}
