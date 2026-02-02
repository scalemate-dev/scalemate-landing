"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { guestSessionApi } from "@/lib/api/guestSession"

const POLL_INTERVAL = 5000
const TERMINAL_STATUSES = ["completed", "failed", "with_errors"]
// Average observed upload time per file via Google Drive → ad platform pipeline
const SECONDS_PER_FILE = 15
// Cap fake progress below 100% so the bar never "completes" before the real status confirms it
const MAX_FAKE_PROGRESS = 93
// Tick interval for the eased progress animation (smooth visual updates without excessive re-renders)
const FAKE_TICK_MS = 300

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
  const fakeTimerRef = useRef(null)
  const [fakeProgress, setFakeProgress] = useState(0)
  const uploadStartRef = useRef(null)
  const estimatedDurationRef = useRef(0)

  const stopFakeProgress = useCallback(() => {
    if (fakeTimerRef.current) {
      clearInterval(fakeTimerRef.current)
      fakeTimerRef.current = null
    }
  }, [])

  const startFakeProgress = useCallback(
    (fileCount) => {
      stopFakeProgress()
      const duration = fileCount * SECONDS_PER_FILE * 1000
      estimatedDurationRef.current = duration
      uploadStartRef.current = Date.now()
      setFakeProgress(0)

      fakeTimerRef.current = setInterval(() => {
        const elapsed = Date.now() - uploadStartRef.current
        const ratio = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - ratio, 2)
        const value = Math.round(eased * MAX_FAKE_PROGRESS)
        setFakeProgress(value)

        if (value >= MAX_FAKE_PROGRESS) {
          clearInterval(fakeTimerRef.current)
          fakeTimerRef.current = null
        }
      }, FAKE_TICK_MS)
    },
    [stopFakeProgress],
  )

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
        stopFakeProgress()
      }
    } catch (err) {
      if (err.status === 410) {
        setError("Session expired. Please start a new upload.")
        stopPolling()
      } else if (err.status === 429) {
        setError("Too many requests. Please wait a moment.")
      } else {
        setError(err.message)
        stopPolling()
      }
    }
  }, [stopPolling, stopFakeProgress])

  const startUpload = useCallback(async () => {
    setIsStarting(true)
    setError(null)
    setStatus(null)
    setResults([])

    try {
      const data = await guestSessionApi.startUpload()
      setJobId(data.job_id)
      setTotalFiles(data.files_count)
      setStatus("in_progress")
      startFakeProgress(data.files_count)

      stopPolling()
      pollRef.current = setInterval(fetchStatus, POLL_INTERVAL)
      await fetchStatus()

      return data
    } catch (err) {
      if (err.status === 409) {
        setError("Upload already started for this session.")
      } else if (err.status === 410) {
        setError("Session expired. Please start a new session.")
      } else if (err.status === 422) {
        setError(
          err.data?.error ||
            "Missing required data. Please complete all steps.",
        )
      } else if (err.status === 429) {
        setError(
          err.data?.error || "Upload limit reached. Please try again later.",
        )
      } else {
        setError(err.message)
      }
      throw err
    } finally {
      setIsStarting(false)
    }
  }, [fetchStatus, stopPolling, startFakeProgress])

  const reset = useCallback(() => {
    stopPolling()
    stopFakeProgress()
    setJobId(null)
    setStatus(null)
    setTotalFiles(0)
    setCompletedFiles(0)
    setFailedFiles(0)
    setResults([])
    setError(null)
    setIsStarting(false)
    setFakeProgress(0)
  }, [stopPolling, stopFakeProgress])

  const isComplete = status === "completed"
  const hasFailed = status === "failed"
  const hasErrors = status === "with_errors"
  const isUploading = status === "in_progress" || status === "pending"
  const isTerminal = TERMINAL_STATUSES.includes(status)
  const realProgress =
    totalFiles > 0 ? Math.round((completedFiles / totalFiles) * 100) : 0
  const progress = isTerminal
    ? realProgress
    : Math.max(fakeProgress, realProgress)

  useEffect(() => {
    return () => {
      stopPolling()
      stopFakeProgress()
    }
  }, [stopPolling, stopFakeProgress])

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
