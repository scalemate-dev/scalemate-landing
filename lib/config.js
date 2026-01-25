/**
 * Centralized configuration for OAuth and API settings.
 * All values are read from environment variables.
 *
 * Client-side variables (NEXT_PUBLIC_*):
 * - These are bundled into the client JS and visible to users
 * - Never put secrets here
 *
 * Server-side variables:
 * - APP_SECRET values should NOT have NEXT_PUBLIC_ prefix
 * - They're only accessible in API routes / server components
 */

export const config = {
  // API - client uses local Next.js API routes (proxy), server uses API_BASE_URL
  apiBaseUrl: "", // Always use same-origin calls, proxied via Next.js API routes
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.scalemate.co",

  // Facebook (requires HTTPS)
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "",
    configId: process.env.NEXT_PUBLIC_FACEBOOK_CONFIG_ID || "",
    sdkVersion: "v23.0",
    sdkUrl: "https://connect.facebook.net/en_US/sdk.js",
  },

  // TikTok Business API
  tiktok: {
    appId: process.env.NEXT_PUBLIC_TIKTOK_APP_ID || "",
    redirectUri: process.env.NEXT_PUBLIC_TIKTOK_REDIRECT_URI || "",
  },

  // Google
  google: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
    developerKey: process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY || "",
    scopes: "https://www.googleapis.com/auth/drive.file",
    sdkUrl: "https://apis.google.com/js/api.js",
    gsiUrl: "https://accounts.google.com/gsi/client",
  },
}

/**
 * Validate that required config values are set.
 * Call this in development to catch missing env vars early.
 */
export function validateConfig(provider) {
  const validators = {
    facebook: () => {
      if (!config.facebook.appId) {
        console.warn("[Config] NEXT_PUBLIC_FACEBOOK_APP_ID is not set")
        return false
      }
      if (!config.facebook.configId) {
        console.warn("[Config] NEXT_PUBLIC_FACEBOOK_CONFIG_ID is not set")
        return false
      }
      return true
    },
    tiktok: () => {
      if (!config.tiktok.appId) {
        console.warn("[Config] NEXT_PUBLIC_TIKTOK_APP_ID is not set")
        return false
      }
      if (!config.tiktok.redirectUri) {
        console.warn("[Config] NEXT_PUBLIC_TIKTOK_REDIRECT_URI is not set")
        return false
      }
      return true
    },
    google: () => {
      if (!config.google.clientId) {
        console.warn("[Config] NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set")
        return false
      }
      if (!config.google.developerKey) {
        console.warn("[Config] NEXT_PUBLIC_GOOGLE_PICKER_API_KEY is not set")
        return false
      }
      return true
    },
  }

  if (provider) {
    return validators[provider]?.() ?? true
  }

  return Object.values(validators).every((validate) => validate())
}

export default config
