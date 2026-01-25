import { config, validateConfig } from '../config'
import { OAuthPopup } from './popup'

/**
 * TikTok Business API OAuth module.
 * Uses popup-based OAuth flow for better UX.
 */

/**
 * Build TikTok Business API authorization URL.
 *
 * @returns {string}
 */
export function buildAuthUrl() {
  if (!validateConfig('tiktok')) {
    throw new Error('TikTok configuration is incomplete')
  }

  const params = new URLSearchParams({
    app_id: config.tiktok.appId,
    redirect_uri: config.tiktok.redirectUri,
  })

  return `https://business-api.tiktok.com/portal/auth?${params.toString()}`
}

/**
 * Initiate TikTok OAuth flow via popup.
 * Returns auth_code on success.
 *
 * @returns {Promise<{auth_code: string}>}
 */
export async function login() {
  if (typeof window === 'undefined') {
    throw new Error('TikTok login can only be initiated in browser')
  }

  const authUrl = buildAuthUrl()
  const popup = new OAuthPopup('tiktok', config.tiktok.redirectUri)

  const result = await popup.open(authUrl)

  if (result.error) {
    throw new Error(result.error_description || result.error)
  }

  if (!result.auth_code) {
    throw new Error('No authorization code received')
  }

  return { auth_code: result.auth_code }
}

export const tiktokOAuth = {
  buildAuthUrl,
  login,
}

export default tiktokOAuth
