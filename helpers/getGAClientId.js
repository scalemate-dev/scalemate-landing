export function getGAClientId() {
  // Try to get GA4 client ID
  try {
    // For GA4
    if (typeof gtag !== "undefined") {
      let clientId = ""
      gtag("get", process.env.GTAG_ID, "client_id", (id) => {
        clientId = id
      })
      if (clientId) return clientId
    }

    // For Universal Analytics
    if (typeof ga !== "undefined") {
      let tracker = ga.getAll()[0]
      if (tracker) return tracker.get("clientId")
    }

    // Try to get from cookies (Universal Analytics)
    const gaCookie = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("_ga="))
    if (gaCookie) {
      const gaValue = gaCookie.split("=")[1]
      const parts = gaValue.split(".")
      if (parts.length > 2) {
        return parts.slice(2).join(".")
      }
    }
  } catch (e) {
    console.error("Error getting GA client ID:", e)
  }

  // Fallback to dataLayer.js_id if available
  try {
    for (let i = 0; i < window.dataLayer.length; i++) {
      if (window.dataLayer[i].js_id) {
        return window.dataLayer[i].js_id
      }
    }
  } catch (e) {
    console.error("Error getting dataLayer js_id:", e)
  }

  return persistentId
}
