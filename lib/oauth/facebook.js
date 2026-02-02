/**
 * Facebook SDK wrapper for OAuth authentication.
 */

const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
const FACEBOOK_CONFIG_ID = process.env.NEXT_PUBLIC_FACEBOOK_CONFIG_ID
const FACEBOOK_SDK_VERSION = "v21.0"
const FACEBOOK_SDK_URL = "https://connect.facebook.net/en_US/sdk.js"

let sdkLoaded = false
let sdkLoading = null

/**
 * Load Facebook SDK script.
 *
 * @returns {Promise<void>}
 */
export function loadFacebookSdk() {
  if (sdkLoaded) return Promise.resolve()
  if (sdkLoading) return sdkLoading

  sdkLoading = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Facebook SDK can only be loaded in browser"))
      return
    }

    // Check if already loaded
    if (window.FB) {
      sdkLoaded = true
      resolve()
      return
    }

    // Setup async init
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: FACEBOOK_SDK_VERSION,
      })
      sdkLoaded = true
      resolve()
    }

    // Load script
    const script = document.createElement("script")
    script.src = FACEBOOK_SDK_URL
    script.async = true
    script.defer = true
    script.crossOrigin = "anonymous"
    script.onerror = () => {
      sdkLoading = null
      reject(new Error("Failed to load Facebook SDK"))
    }
    document.head.appendChild(script)
  })

  return sdkLoading
}

/**
 * Initialize Facebook SDK (loads if not already loaded).
 *
 * @returns {Promise<void>}
 */
export async function initFacebook() {
  if (!FACEBOOK_APP_ID || !FACEBOOK_CONFIG_ID) {
    throw new Error(
      "Facebook configuration is incomplete: NEXT_PUBLIC_FACEBOOK_APP_ID and NEXT_PUBLIC_FACEBOOK_CONFIG_ID are required",
    )
  }
  await loadFacebookSdk()
}

/**
 * Get Facebook login status.
 *
 * @returns {Promise<{status: string, authResponse: Object | null}>}
 */
export function getLoginStatus() {
  return new Promise((resolve) => {
    window.FB.getLoginStatus((response) => {
      resolve(response)
    })
  })
}

/**
 * Perform Facebook login.
 *
 * @returns {Promise<{token: string, userId: string}>}
 */
export function login() {
  return new Promise((resolve, reject) => {
    if (!window.FB) {
      reject(new Error("Facebook SDK not initialized"))
      return
    }

    window.FB.login(
      (response) => {
        console.log("response :: ", response)
        if (response.authResponse) {
          resolve({
            token: response.authResponse.accessToken,
            userId: response.authResponse.userID,
          })
        } else {
          reject(new Error("Facebook login cancelled or failed"))
        }
      },
      { config_id: FACEBOOK_CONFIG_ID },
    )
  })
}

/**
 * Logout from Facebook.
 *
 * @returns {Promise<void>}
 */
export function logout() {
  return new Promise((resolve) => {
    if (!window.FB) {
      resolve()
      return
    }

    window.FB.logout(() => {
      resolve()
    })
  })
}

/**
 * Get Facebook user info.
 *
 * @returns {Promise<{id: string, name: string, email?: string}>}
 */
export function getUserInfo() {
  return new Promise((resolve, reject) => {
    if (!window.FB) {
      reject(new Error("Facebook SDK not initialized"))
      return
    }

    window.FB.api("/me", { fields: "id,name,email" }, (response) => {
      if (response.error) {
        reject(new Error(response.error.message))
      } else {
        resolve(response)
      }
    })
  })
}

export const facebookOAuth = {
  loadSdk: loadFacebookSdk,
  init: initFacebook,
  getLoginStatus,
  login,
  logout,
  getUserInfo,
}

export default facebookOAuth
