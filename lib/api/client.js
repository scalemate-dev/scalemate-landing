/**
 * API Error class for handling API errors.
 */
export class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

/**
 * Base API client for making requests to the backend.
 * Uses local Next.js API routes as proxy to avoid CORS issues.
 */
class ApiClient {
  constructor() {
    if (typeof window === 'undefined') return
    const legacy = sessionStorage.getItem('guest_token')
    if (legacy) {
      if (!localStorage.getItem('guest_token')) {
        localStorage.setItem('guest_token', legacy)
      }
      sessionStorage.removeItem('guest_token')
    }
  }

  getGuestToken() {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('guest_token')
  }

  setGuestToken(token) {
    if (typeof window === 'undefined') return
    localStorage.setItem('guest_token', token)
  }

  clearGuestToken() {
    if (typeof window === 'undefined') return
    localStorage.removeItem('guest_token')
  }

  /**
   * Build headers for API requests.
   */
  buildHeaders(options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    const guestToken = this.getGuestToken()
    if (guestToken && !options.skipAuth) {
      headers['X-Guest-Token'] = guestToken
    }

    return headers
  }

  /**
   * Make an API request.
   */
  async request(endpoint, options = {}) {
    const { skipAuth, ...fetchOptions } = options

    const response = await fetch(endpoint, {
      ...fetchOptions,
      headers: this.buildHeaders({ headers: fetchOptions.headers, skipAuth }),
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      throw new ApiError(
        data?.error || data?.message || 'An error occurred',
        response.status,
        data
      )
    }

    return data
  }

  /**
   * GET request.
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' })
  }

  /**
   * POST request.
   */
  async post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  /**
   * PATCH request.
   */
  async patch(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    })
  }

  /**
   * DELETE request.
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' })
  }
}

// Export singleton instance
export const apiClient = new ApiClient()

export default apiClient
