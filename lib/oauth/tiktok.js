import { OAuthPopup } from './popup'

/**
 * TikTok Business API OAuth module.
 * Uses popup-based OAuth flow for better UX.
 */

const TIKTOK_APP_ID = process.env.NEXT_PUBLIC_TIKTOK_APP_ID
const TIKTOK_REDIRECT_URI = process.env.NEXT_PUBLIC_TIKTOK_REDIRECT_URI

/**
 * Build TikTok Business API authorization URL.
 *
 * @returns {string}
 */
export function buildAuthUrl() {
  if (!TIKTOK_APP_ID || !TIKTOK_REDIRECT_URI) {
    throw new Error('TikTok configuration is incomplete: NEXT_PUBLIC_TIKTOK_APP_ID and NEXT_PUBLIC_TIKTOK_REDIRECT_URI are required')
  }

  const params = new URLSearchParams({
    app_id: TIKTOK_APP_ID,
    redirect_uri: TIKTOK_REDIRECT_URI,
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
  const popup = new OAuthPopup('tiktok', TIKTOK_REDIRECT_URI)

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
