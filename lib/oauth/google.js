import { config, validateConfig } from "../config"

/**
 * Google Picker & OAuth wrapper module.
 */

let gapiLoaded = false
let gsiLoaded = false
let pickerLoaded = false
let gapiLoading = null
let gsiLoading = null

let tokenClient = null
let accessToken = null

/**
 * Load Google API (gapi) script.
 *
 * @returns {Promise<void>}
 */
export function loadGapi() {
  if (gapiLoaded) return Promise.resolve()
  if (gapiLoading) return gapiLoading

  gapiLoading = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Google API can only be loaded in browser"))
      return
    }

    if (window.gapi) {
      gapiLoaded = true
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = config.google.sdkUrl
    script.async = true
    script.defer = true
    script.onload = () => {
      gapiLoaded = true
      resolve()
    }
    script.onerror = () => {
      gapiLoading = null
      reject(new Error("Failed to load Google API"))
    }
    document.head.appendChild(script)
  })

  return gapiLoading
}

/**
 * Load Google Identity Services (GSI) script.
 *
 * @returns {Promise<void>}
 */
export function loadGsi() {
  if (gsiLoaded) return Promise.resolve()
  if (gsiLoading) return gsiLoading

  gsiLoading = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Google GSI can only be loaded in browser"))
      return
    }

    if (window.google?.accounts?.oauth2) {
      gsiLoaded = true
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = config.google.gsiUrl
    script.async = true
    script.defer = true
    script.onload = () => {
      gsiLoaded = true
      resolve()
    }
    script.onerror = () => {
      gsiLoading = null
      reject(new Error("Failed to load Google Identity Services"))
    }
    document.head.appendChild(script)
  })

  return gsiLoading
}

/**
 * Load Google Picker library.
 *
 * @returns {Promise<void>}
 */
export function loadPicker() {
  if (pickerLoaded) return Promise.resolve()

  return new Promise((resolve, reject) => {
    if (!window.gapi) {
      reject(new Error("Google API not loaded"))
      return
    }

    window.gapi.load("picker", {
      callback: () => {
        pickerLoaded = true
        resolve()
      },
      onerror: () => {
        reject(new Error("Failed to load Google Picker"))
      },
    })
  })
}

/**
 * Initialize Google OAuth and Picker.
 *
 * @returns {Promise<void>}
 */
export async function initGoogle() {
  if (!validateConfig("google")) {
    throw new Error("Google configuration is incomplete")
  }

  await Promise.all([loadGapi(), loadGsi()])
  await loadPicker()

  // Initialize token client
  tokenClient = window.google.accounts.oauth2.initTokenClient({
    client_id: config.google.clientId,
    scope: config.google.scopes,
    callback: () => {}, // Will be overridden when requesting token
  })
}

/**
 * Request access token from Google.
 *
 * @returns {Promise<string>} Access token
 */
export function requestAccessToken() {
  return new Promise((resolve, reject) => {
    if (!tokenClient) {
      reject(new Error("Google OAuth not initialized"))
      return
    }

    tokenClient.callback = (response) => {
      if (response.error) {
        reject(new Error(response.error))
        return
      }
      accessToken = response.access_token
      resolve(accessToken)
    }

    tokenClient.requestAccessToken()
  })
}

/**
 * Get current access token (or request new one).
 *
 * @param {boolean} [forceNew=false] - Force requesting a new token
 * @returns {Promise<string>}
 */
export async function getAccessToken(forceNew = false) {
  if (accessToken && !forceNew) {
    return accessToken
  }
  return requestAccessToken()
}

/**
 * Open Google Picker to select files.
 *
 * @param {Object} [options]
 * @param {boolean} [options.multiSelect=true] - Allow multiple file selection
 * @param {Array<string>} [options.mimeTypes] - Filter by MIME types
 * @returns {Promise<Array<{id: string, name: string, mimeType: string, url: string}>>}
 */
export function openPicker(options = {}) {
  const { multiSelect = true, mimeTypes } = options

  return new Promise(async (resolve, reject) => {
    try {
      const token = await getAccessToken()

      const docsView = new window.google.picker.DocsView()
        .setIncludeFolders(false)
        .setSelectFolderEnabled(false)

      if (mimeTypes?.length) {
        docsView.setMimeTypes(mimeTypes.join(","))
      }

      const pickerBuilder = new window.google.picker.PickerBuilder({
        clientId: config.google.clientId,
      })
        .addView(docsView)
        .addView(window.google.picker.ViewId.DOCS_VIDEOS)
        .addView(window.google.picker.ViewId.DOCS_IMAGES)
        .setOAuthToken(token)
        .setDeveloperKey(config.google.developerKey)
        .setCallback((data) => {
          if (data.action === window.google.picker.Action.PICKED) {
            const files = data.docs.map((doc) => ({
              id: doc.id,
              name: doc.name,
              mimeType: doc.mimeType,
              url: doc.url,
            }))
            resolve(files)
          } else if (data.action === window.google.picker.Action.CANCEL) {
            resolve([])
          } else if (
            data.action === "error" ||
            data[window.google.picker.Response.ERROR]
          ) {
            reject(
              new Error("Google Picker error - check API key configuration"),
            )
          }
        })

      if (multiSelect) {
        pickerBuilder.enableFeature(
          window.google.picker.Feature.MULTISELECT_ENABLED,
        )
      }

      const picker = pickerBuilder.build()
      picker.setVisible(true)
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Clear stored access token.
 */
export function clearToken() {
  accessToken = null
}

/**
 * Revoke Google access token.
 *
 * @returns {Promise<void>}
 */
export function revokeToken() {
  return new Promise((resolve) => {
    if (!accessToken) {
      resolve()
      return
    }

    window.google.accounts.oauth2.revoke(accessToken, () => {
      accessToken = null
      resolve()
    })
  })
}

/**
 * Transform picker files to API format.
 *
 * @param {Array} files - Files from picker
 * @returns {Array<{hash: string, name: string, type: string}>}
 */
export function transformFilesForApi(files) {
  return files.map((file) => ({
    hash: file.id,
    name: file.name,
    type: file.mimeType,
  }))
}

export const googleOAuth = {
  loadGapi,
  loadGsi,
  loadPicker,
  init: initGoogle,
  requestAccessToken,
  getAccessToken,
  openPicker,
  clearToken,
  revokeToken,
  transformFilesForApi,
}

export default googleOAuth
