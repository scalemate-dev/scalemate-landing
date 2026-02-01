"use client"

import { useState, useCallback, useRef, useEffect } from 'react'
import { guestSessionApi } from '@/lib/api/guestSession'

const POLL_INTERVAL = 5000
const TERMINAL_STATUSES = ['completed', 'failed', 'with_errors']

export function useUploadProgress() {
  const [jobId, setJobId] = useState(null)
  const [status, setStatus] = useState(null)
  const [totalFiles, setTotalFiles] = useState(0)
  const [completedFiles, setCompletedFiles] = useState(0)
  const [failedFiles, setFailedFiles] = useState(0)
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)
  const [isStarting, setIsStarting] = useState(false)

  const pollRef = useRef(null)

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
  }, [])

  const fetchStatus = useCallback(async () => {
    try {
      const data = await guestSessionApi.getUploadStatus()
      setStatus(data.status)
      setTotalFiles(data.total_files)
      setCompletedFiles(data.completed_files)
      setFailedFiles(data.failed_files)
      setResults(data.results || [])

      if (TERMINAL_STATUSES.includes(data.status)) {
        stopPolling()
      }
    } catch (err) {
      if (err.status === 410) {
        setError('Session expired. Please start a new upload.')
        stopPolling()
      } else if (err.status === 429) {
        setError('Too many requests. Please wait a moment.')
      } else {
        setError(err.message)
        stopPolling()
      }
    }
  }, [stopPolling])

  const startUpload = useCallback(async () => {
    setIsStarting(true)
    setError(null)
    setStatus(null)
    setResults([])

    try {
      const data = await guestSessionApi.startUpload()
      setJobId(data.job_id)
      setTotalFiles(data.files_count)
      setStatus('in_progress')

      stopPolling()
      pollRef.current = setInterval(fetchStatus, POLL_INTERVAL)
      await fetchStatus()

      return data
    } catch (err) {
      if (err.status === 409) {
        setError('Upload already started for this session.')
      } else if (err.status === 410) {
        setError('Session expired. Please start a new session.')
      } else if (err.status === 422) {
        setError(err.data?.error || 'Missing required data. Please complete all steps.')
      } else if (err.status === 429) {
        setError(err.data?.error || 'Upload limit reached. Please try again later.')
      } else {
        setError(err.message)
      }
      throw err
    } finally {
      setIsStarting(false)
    }
  }, [fetchStatus, stopPolling])

  const reset = useCallback(() => {
    stopPolling()
    setJobId(null)
    setStatus(null)
    setTotalFiles(0)
    setCompletedFiles(0)
    setFailedFiles(0)
    setResults([])
    setError(null)
    setIsStarting(false)
  }, [stopPolling])

  const isComplete = status === 'completed'
  const hasFailed = status === 'failed'
  const hasErrors = status === 'with_errors'
  const isUploading = status === 'in_progress' || status === 'pending'
  const isTerminal = TERMINAL_STATUSES.includes(status)
  const progress = totalFiles > 0 ? Math.round((completedFiles / totalFiles) * 100) : 0

  useEffect(() => {
    return stopPolling
  }, [stopPolling])

  return {
    jobId,
    status,
    totalFiles,
    completedFiles,
    failedFiles,
    results,
    error,
    isStarting,
    isComplete,
    hasFailed,
    hasErrors,
    isUploading,
    isTerminal,
    progress,
    startUpload,
    reset,
  }
}
