"use client"

import { useState, useCallback } from 'react'
import { tiktokOAuth } from '@/lib/oauth/tiktok'

/**
 * Hook for TikTok OAuth authentication via popup.
 *
 * @returns {Object} TikTok auth state and methods
 */
export function useTikTokAuth() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState(null)

  /**
   * Connect with TikTok (opens popup).
   * Returns auth_code on success.
   */
  const connect = useCallback(async () => {
    setIsConnecting(true)
    setError(null)

    try {
      const { auth_code } = await tiktokOAuth.login()
      return { auth_code }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsConnecting(false)
    }
  }, [])

  return {
    // State
    isConnecting,
    error,

    // Actions
    connect,
  }
}

export default useTikTokAuth
