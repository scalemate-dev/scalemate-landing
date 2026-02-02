"use client"

import { useState, useCallback, useEffect, useRef } from 'react'
import { guestSessionApi } from '@/lib/api/guestSession'

export function useGuestSession() {
  const [session, setSession] = useState(null)
  const [adAccounts, setAdAccounts] = useState([])
  const [selectedAccountId, setSelectedAccountId] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [connectedPlatform, setConnectedPlatform] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isRestoring, setIsRestoring] = useState(() => guestSessionApi.exists())
  const [error, setError] = useState(null)
  const restoredRef = useRef(false)

  // Restore session on mount if guest_token exists in localStorage
  useEffect(() => {
    if (restoredRef.current || !guestSessionApi.exists()) {
      setIsRestoring(false)
      return
    }
    restoredRef.current = true

    const restore = async () => {
      try {
        const info = await guestSessionApi.getInfo()

        setSession({ token: guestSessionApi.getToken() })
        setConnectedPlatform(info.platform_type)
        setAdAccounts(info.ad_accounts || [])
        setSelectedAccountId(info.selected_account_id)
        setSelectedFiles(info.selected_files || [])
      } catch (err) {
        // 401/410 — expired or claimed session
        guestSessionApi.clear()
      } finally {
        setIsRestoring(false)
      }
    }

    restore()
  }, [])

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
      setConnectedPlatform(platformType)

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

  const clearSession = useCallback(() => {
    guestSessionApi.clear()
    setSession(null)
    setAdAccounts([])
    setSelectedAccountId(null)
    setSelectedFiles([])
    setConnectedPlatform(null)
    setError(null)
  }, [])

  const redirectToApp = useCallback((path) => {
    guestSessionApi.redirectToApp(path)
  }, [])

  const hasSession = guestSessionApi.exists()
  const isReadyToUpload = hasSession && selectedAccountId && selectedFiles.length > 0

  return {
    session,
    adAccounts,
    selectedAccountId,
    selectedFiles,
    connectedPlatform,
    isLoading,
    isRestoring,
    error,
    hasSession,
    isReadyToUpload,

    createSession,
    selectAccount,
    updateFiles,
    clearSession,
    redirectToApp,
  }
}

export default useGuestSession
