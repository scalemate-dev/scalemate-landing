export const trackDemoFormSubmit = (userData) => {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ userData })
    window.dataLayer.push({ event: "DemoFormSubmitted" })
  } catch (error) {
    console.error("Failed to track demo form submit:", error)
  }
}

export const trackAuditStarted = () => {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "funnel_1_audit_started" })
  } catch (error) {
    console.error("Failed to track audit started:", error)
  }
}

export const trackQuizEmailSent = () => {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "funnel_1_quiz_email_sent" })
  } catch (error) {
    console.error("Failed to track quiz email sent:", error)
  }
}

export const trackQuizLead = () => {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "funnel_1_quiz_lead" })
  } catch (error) {
    console.error("Failed to track quiz lead:", error)
  }
}
