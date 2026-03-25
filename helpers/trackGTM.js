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
    window.dataLayer.push({ event: "Funnel_1_Quiz_Click_AuditStarted" })
  } catch (error) {
    console.error("Failed to track audit started:", error)
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
