"use client"

import { useState, useCallback } from 'react'
import { guestSessionApi } from '@/lib/api/guestSession'

/**
 * Hook for managing guest session state and API interactions.
 *
 * @returns {Object} Guest session state and methods
 */
export function useGuestSession() {
  const [session, setSession] = useState(null)
  const [adAccounts, setAdAccounts] = useState([])
  const [selectedAccountId, setSelectedAccountId] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  /**
   * Create a new guest session.
   */
  const createSession = useCallback(async ({ platformType, platformToken, platformUserId }) => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await guestSessionApi.create({
        platformType,
        platformToken,
        platformUserId,
      })

      setSession({ token: data.guest_token })
      setAdAccounts(data.ad_accounts || [])

      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  /**
   * Select an ad account.
   */
  const selectAccount = useCallback(async (accountId) => {
    setIsLoading(true)
    setError(null)

    try {
      await guestSessionApi.update({ selectedAccountId: accountId })
      setSelectedAccountId(accountId)
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  /**
   * Update selected files with Google token.
   */
  const updateFiles = useCallback(async ({ googleToken, files }) => {
    setIsLoading(true)
    setError(null)

    try {
      await guestSessionApi.update({ googleToken, files })
      setSelectedFiles(files)
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  /**
   * Clear session and reset state.
   */
  const clearSession = useCallback(() => {
    guestSessionApi.clear()
    setSession(null)
    setAdAccounts([])
    setSelectedAccountId(null)
    setSelectedFiles([])
    setError(null)
  }, [])

  /**
   * Redirect to app with guest token.
   */
  const redirectToApp = useCallback((path) => {
    guestSessionApi.redirectToApp(path)
  }, [])

  /**
   * Check if session exists.
   */
  const hasSession = guestSessionApi.exists()

  /**
   * Check if ready to upload (has account and files).
   */
  const isReadyToUpload = hasSession && selectedAccountId && selectedFiles.length > 0

  return {
    // State
    session,
    adAccounts,
    selectedAccountId,
    selectedFiles,
    isLoading,
    error,
    hasSession,
    isReadyToUpload,

    // Actions
    createSession,
    selectAccount,
    updateFiles,
    clearSession,
    redirectToApp,
  }
}

export default useGuestSession
