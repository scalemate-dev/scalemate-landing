"use client"

import { useState, useCallback, useEffect } from 'react'
import { facebookOAuth } from '@/lib/oauth/facebook'

/**
 * Hook for Facebook OAuth authentication.
 *
 * @param {Object} [options]
 * @param {boolean} [options.autoInit=true] - Auto-initialize SDK on mount
 * @returns {Object} Facebook auth state and methods
 */
export function useFacebookAuth(options = {}) {
  const { autoInit = true } = options

  const [isInitialized, setIsInitialized] = useState(false)
  const [isInitializing, setIsInitializing] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  /**
   * Initialize Facebook SDK.
   */
  const initialize = useCallback(async () => {
    if (isInitialized || isInitializing) return

    setIsInitializing(true)
    setError(null)

    try {
      await facebookOAuth.init()
      setIsInitialized(true)

      // Check existing login status
      const status = await facebookOAuth.getLoginStatus()
      if (status.status === 'connected') {
        setIsConnected(true)
        const userInfo = await facebookOAuth.getUserInfo()
        setUser(userInfo)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsInitializing(false)
    }
  }, [isInitialized, isInitializing])

  /**
   * Connect with Facebook (login).
   */
  const connect = useCallback(async () => {
    setIsConnecting(true)
    setError(null)

    try {
      if (!isInitialized) {
        await initialize()
      }

      const { token, userId } = await facebookOAuth.login()
      setIsConnected(true)

      // Get user info
      const userInfo = await facebookOAuth.getUserInfo()
      setUser(userInfo)

      return { token, userId }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsConnecting(false)
    }
  }, [isInitialized, initialize])

  /**
   * Disconnect from Facebook (logout).
   */
  const disconnect = useCallback(async () => {
    try {
      await facebookOAuth.logout()
    } finally {
      setIsConnected(false)
      setUser(null)
    }
  }, [])

  // Auto-initialize on mount
  useEffect(() => {
    if (autoInit && typeof window !== 'undefined') {
      initialize()
    }
  }, [autoInit, initialize])

  return {
    // State
    isInitialized,
    isInitializing,
    isConnecting,
    isConnected,
    user,
    error,

    // Actions
    initialize,
    connect,
    disconnect,
  }
}

export default useFacebookAuth
