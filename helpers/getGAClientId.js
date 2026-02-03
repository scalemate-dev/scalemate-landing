/**
 * Gets Google Analytics client ID from various sources
 * Supports both GA4 and Universal Analytics
 * @returns {Promise<string>} The client ID or a fallback ID
 */
export async function getGAClientId() {
  // Check if we're in browser environment
  if (typeof window === "undefined") {
    return "server_" + Math.random().toString(36).substr(2, 9)
  }

  try {
    // Try GA4 first (gtag)
    const ga4ClientId = await getGA4ClientId()
    if (ga4ClientId) return ga4ClientId

    // Try Universal Analytics
    const uaClientId = getUniversalAnalyticsClientId()
    if (uaClientId) return uaClientId

    // Try cookie-based fallback
    const cookieClientId = getClientIdFromCookie()
    if (cookieClientId) return cookieClientId

    // Try dataLayer fallback
    const dataLayerClientId = getClientIdFromDataLayer()
    if (dataLayerClientId) return dataLayerClientId
  } catch (e) {
    console.error("Error getting GA client ID:", e)
  }

  // Generate a fallback ID if nothing else works
  return "anonymous_" + Math.random().toString(36).substr(2, 9)
}

/**
 * Gets GA4 client ID using gtag
 * @returns {Promise<string|null>}
 */
async function getGA4ClientId() {
  if (typeof gtag === "undefined") return null

  // Get tracking ID from Next.js public env var
  const trackingId = process.env.NEXT_PUBLIC_GTAG_ID

  if (!trackingId) return null

  return new Promise((resolve) => {
    try {
      const timeout = setTimeout(() => resolve(null), 1000) // 1 second timeout

      gtag("get", trackingId, "client_id", (clientId) => {
        clearTimeout(timeout)
        resolve(clientId || null)
      })
    } catch (e) {
      console.log("GA4 gtag call failed:", e)
      resolve(null)
    }
  })
}

/**
 * Gets Universal Analytics client ID
 * @returns {string|null}
 */
function getUniversalAnalyticsClientId() {
  if (typeof ga === "undefined") return null

  try {
    const trackers = ga.getAll()
    if (trackers && trackers.length > 0) {
      return trackers[0].get("clientId")
    }
  } catch (e) {
    console.log("Universal Analytics call failed:", e)
  }

  return null
}

/**
 * Gets client ID from GA cookies
 * @returns {string|null}
 */
function getClientIdFromCookie() {
  try {
    // GA4 cookie format: _ga_<MEASUREMENT_ID>=GS1.1.clientId.timestamp
    const ga4Match = document.cookie.match(
      /_ga_[A-Z0-9]+=[^;]*\.([0-9]+\.[0-9]+)/i,
    )
    if (ga4Match && ga4Match[1]) {
      return ga4Match[1]
    }

    // Universal Analytics cookie format: _ga=GA1.2.clientId
    const gaMatch = document.cookie.match(/_ga=GA[^;]*\.([0-9]+\.[0-9]+)/i)
    if (gaMatch && gaMatch[1]) {
      return gaMatch[1]
    }
  } catch (e) {
    console.log("Cookie parsing failed:", e)
  }

  return null
}

/**
 * Gets client ID from dataLayer
 * @returns {string|null}
 */
function getClientIdFromDataLayer() {
  if (!window.dataLayer) return null

  try {
    // Look for client_id in recent dataLayer events (GA4)
    for (let i = window.dataLayer.length - 1; i >= 0; i--) {
      const event = window.dataLayer[i]
      if (event && event.client_id) {
        return event.client_id
      }
    }

    // Fallback to js_id
    for (let i = window.dataLayer.length - 1; i >= 0; i--) {
      const event = window.dataLayer[i]
      if (event && event.js_id) {
        return event.js_id
      }
    }
  } catch (e) {
    console.log("DataLayer parsing failed:", e)
  }

  return null
}
