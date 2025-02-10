export const trackDemoFormSubmit = (userData) => {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ userData })
    window.dataLayer.push({ event: "DemoFormSubmitted" })
  } catch (error) {
    Sentry.captureException(error)
  }
}
