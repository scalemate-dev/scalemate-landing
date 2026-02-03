export const trackDemoFormSubmit = (userData) => {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ userData })
    window.dataLayer.push({ event: "DemoFormSubmitted" })
  } catch (error) {
    console.error("Failed to track demo form submit:", error)
  }
}
