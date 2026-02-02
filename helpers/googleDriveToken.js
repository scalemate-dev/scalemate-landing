const SESSION_TOKEN_KEY = "google_access_token"
const SESSION_TOKEN_TIMESTAMP_KEY = "google_access_token_timestamp"
const TOKEN_EXPIRY_MS = 50 * 60 * 1000 // 50 minutes (tokens last 1 hour, be safe)

export function getStoredToken() {
  if (typeof window === "undefined") return null
  const token = sessionStorage.getItem(SESSION_TOKEN_KEY)
  const timestamp = sessionStorage.getItem(SESSION_TOKEN_TIMESTAMP_KEY)

  if (!token || !timestamp) return null

  const tokenAge = Date.now() - parseInt(timestamp, 10)
  if (tokenAge > TOKEN_EXPIRY_MS) {
    clearStoredToken()
    return null
  }

  return token
}

export function storeToken(token) {
  if (typeof window === "undefined" || !token) return
  sessionStorage.setItem(SESSION_TOKEN_KEY, token)
  sessionStorage.setItem(SESSION_TOKEN_TIMESTAMP_KEY, Date.now().toString())
}

export function clearStoredToken() {
  if (typeof window === "undefined") return
  sessionStorage.removeItem(SESSION_TOKEN_KEY)
  sessionStorage.removeItem(SESSION_TOKEN_TIMESTAMP_KEY)
}
