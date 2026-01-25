import { apiClient } from './client'
import { config } from '../config'

const ENDPOINT = '/api/v1/guest_sessions'

/**
 * Guest Session API module.
 * Handles all guest session related API calls.
 */
export const guestSessionApi = {
  /**
   * Create a new guest session with platform credentials.
   *
   * @param {Object} params
   * @param {'facebook' | 'tiktok'} params.platformType - Platform type
   * @param {string} params.platformToken - Platform access token or auth code
   * @param {string} [params.platformUserId] - Platform user ID (for Facebook)
   * @returns {Promise<{guest_token: string, ad_accounts: Array}>}
   */
  async create({ platformType, platformToken, platformUserId }) {
    const body = {
      platform_type: platformType,
      platform_token: platformToken,
    }

    if (platformUserId) {
      body.platform_user_id = platformUserId
    }

    const data = await apiClient.post(ENDPOINT, body, { skipAuth: true })

    // Store guest token for subsequent requests
    if (data.guest_token) {
      apiClient.setGuestToken(data.guest_token)
    }

    return data
  },

  /**
   * Update guest session with selected account, Google token, or files.
   *
   * @param {Object} params
   * @param {string} [params.selectedAccountId] - Selected ad account ID
   * @param {string} [params.googleToken] - Google OAuth token
   * @param {Array<{hash: string, name: string, type: string}>} [params.files] - Selected files
   * @returns {Promise<Object>}
   */
  async update({ selectedAccountId, googleToken, files }) {
    const body = {}

    if (selectedAccountId) {
      body.selected_account_id = selectedAccountId
    }

    if (googleToken) {
      body.google_session_token = googleToken
    }

    if (files) {
      body.selected_files = files
    }

    return apiClient.patch(ENDPOINT, body)
  },

  /**
   * Get current guest session info.
   *
   * @returns {Promise<Object>}
   */
  async get() {
    return apiClient.get(ENDPOINT)
  },

  /**
   * Clear the current guest session.
   */
  clear() {
    apiClient.clearGuestToken()
  },

  /**
   * Check if a guest session exists.
   *
   * @returns {boolean}
   */
  exists() {
    return !!apiClient.getGuestToken()
  },

  /**
   * Get the stored guest token.
   *
   * @returns {string | null}
   */
  getToken() {
    return apiClient.getGuestToken()
  },

  /**
   * Generate redirect URL to the app with guest token.
   *
   * @param {string} [path='/signup'] - Path to redirect to
   * @returns {string}
   */
  getAppRedirectUrl(path = '/signup') {
    const token = apiClient.getGuestToken()
    if (!token) {
      return `${config.appUrl}${path}`
    }
    return `${config.appUrl}${path}?guest_token=${token}`
  },

  /**
   * Redirect to the app with guest token.
   *
   * @param {string} [path='/signup'] - Path to redirect to
   */
  redirectToApp(path = '/signup') {
    if (typeof window === 'undefined') return
    window.location.href = this.getAppRedirectUrl(path)
  },
}

export default guestSessionApi
