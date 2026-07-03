'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { quickLaunchApi } from '@/lib/api'
import { trackMixpanelEvent } from '@/helpers/analytics/mixpanel'
import { EVENTS } from '@/helpers/analytics/mixpanel.events'

const POLL_INTERVAL = 2500
const MAX_POLL_ATTEMPTS = 120 // ~5 minutes, then give up

function friendlyError(err) {
  const status = err?.status
  const msg = err?.data?.error || err?.message || ''
  if (status === 401) return 'Session expired. Please reconnect.'
  if (status === 404) return 'Resource not found. Please try again.'
  if (status === 422) return msg || 'Invalid request. Please check your input.'
  if (status === 429) return 'Too many requests. Please wait a moment.'
  if (status >= 500) return 'Something went wrong. Please try again later.'
  if (msg.toLowerCase().includes('failed to fetch')) return 'Network error. Please check your connection.'
  return msg || 'Something went wrong. Please try again.'
}
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'video/mp4']
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'mp4']
const MAX_FILE_BYTES = 50 * 1024 * 1024 // 50MB

/**
 * Validate a File against allowed types and size.
 */
function isAccepted(file) {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  return ALLOWED_EXTENSIONS.includes(ext) && file.size <= MAX_FILE_BYTES
}

/**
 * Extract Google Drive file IDs from pasted links.
 * Supports: /file/d/ID, /open?id=ID, id=ID query param
 */
function parseDriveLinks(text) {
  const ids = new Set()
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/g,
    /[?&]id=([a-zA-Z0-9_-]+)/g,
  ]
  for (const re of patterns) {
    let match
    while ((match = re.exec(text)) !== null) {
      ids.add(match[1])
    }
  }
  return [...ids]
}

/**
 * Public, account-agnostic thumbnail for a Drive file id.
 * (The API's thumbnailLink 403s for files owned by another account.)
 */
const driveThumbnailUrl = (id) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w200`

/**
 * Upload a single file to DO Spaces via presigned POST.
 * fields + file appended as FormData; file MUST be last (S3 POST requirement).
 */
async function uploadToSpaces(upload, file) {
  const form = new FormData()
  Object.entries(upload.fields).forEach(([k, v]) => form.append(k, v))
  form.append('file', file, file.name)

  try {
    const res = await fetch(upload.url, {
      method: 'POST',
      body: form,
      credentials: 'omit',
    })
    // S3/Spaces POST returns 204 on success
    if (!res.ok && res.status !== 204) {
      throw new Error(`Upload failed (${res.status})`)
    }
  } catch (err) {
    // CORS blocks the response on localhost but the upload still succeeds
    // (Spaces returns 204). Retry with no-cors as a fire-and-forget fallback.
    if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
      const retryForm = new FormData()
      Object.entries(upload.fields).forEach(([k, v]) => retryForm.append(k, v))
      retryForm.append('file', file, file.name)
      await fetch(upload.url, {
        method: 'POST',
        body: retryForm,
        mode: 'no-cors',
        credentials: 'omit',
      })
      // no-cors gives opaque response — we assume success
      return
    }
    throw err
  }
}

/**
 * Manages dual upload paths (local presigned + Google Drive) with job polling.
 *
 * Files are tracked as "creatives" with statuses:
 *   pending → uploading → uploaded | failed
 *
 * After all jobs finish, `uploadedCreatives` contains the creative_file_ids
 * needed for the launch payload.
 */
export function useQuickLaunchUpload() {
  // Each creative: { clientRef, name, source: 'local'|'drive'|'public', status, creativeFileId?, error?, thumbnailUrl? }
  const [creatives, setCreatives] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState(null)

  // Active jobs: Map<jobId, { status, resultsMap, failedDetails }>
  const jobsRef = useRef(new Map())
  // Batches currently between "start" and "jobs registered" — their creatives
  // are 'uploading' but not yet tied to a job, so don't mark them as orphans.
  const activeBatchesRef = useRef(0)
  const pollRef = useRef(null)
  const mountedRef = useRef(true)
  const creativesRef = useRef([])

  useEffect(() => {
    creativesRef.current = creatives
  }, [creatives])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [])

  // ── Update creative status by clientRef ──
  const updateCreative = useCallback((clientRef, patch) => {
    setCreatives((prev) =>
      prev.map((c) => (c.clientRef === clientRef ? { ...c, ...patch } : c))
    )
  }, [])

  // ── Polling ──

  // All jobs are done (or we gave up): stop the interval, mark any creative
  // still stuck in "uploading" as failed, report completion.
  const finishPolling = useCallback((timedOut = false) => {
    clearInterval(pollRef.current)
    pollRef.current = null
    if (!mountedRef.current) return
    if (activeBatchesRef.current > 0) return // another batch is mid-flight
    setIsUploading(false)
    setCreatives((prev) => {
      const done = prev.map((c) =>
        c.status === 'uploading'
          ? {
              ...c,
              status: 'failed',
              error: timedOut
                ? 'Upload timed out. Please try again.'
                : 'Upload did not complete. Please try again.',
            }
          : c
      )
      trackMixpanelEvent(EVENTS.QUICK_LAUNCH_UPLOAD_COMPLETED, {
        uploaded_count: done.filter((c) => c.status === 'uploaded').length,
        failed_count: done.filter((c) => c.status === 'failed').length,
        timed_out: timedOut,
      })
      return done
    })
  }, [])

  const startPolling = useCallback(() => {
    if (pollRef.current) return // already polling
    let attempts = 0

    const poll = async () => {
      const pending = [...jobsRef.current.entries()].filter(
        ([, j]) => j.status === 'pending'
      )
      if (pending.length === 0) {
        finishPolling()
        return
      }

      if (++attempts > MAX_POLL_ATTEMPTS) {
        finishPolling(true)
        return
      }

      for (const [jobId] of pending) {
        try {
          const data = await quickLaunchApi.getUploadStatus(jobId)
          jobsRef.current.set(jobId, {
            status: data.status,
            resultsMap: data.results_map || {},
            failedDetails: data.failed_details || {},
          })

          if (data.status !== 'pending' && mountedRef.current) {
            // Resolve creatives for this job
            const resultsMap = data.results_map || {}
            const failedDetails = data.failed_details || {}

            setCreatives((prev) =>
              prev.map((c) => {
                if (resultsMap[c.clientRef] !== undefined) {
                  return {
                    ...c,
                    status: 'uploaded',
                    creativeFileId: resultsMap[c.clientRef],
                  }
                }
                if (failedDetails[c.clientRef]) {
                  return {
                    ...c,
                    status: 'failed',
                    error: failedDetails[c.clientRef],
                  }
                }
                return c
              })
            )
          }
        } catch (err) {
          // Non-fatal: keep polling, job might recover
          console.error(`Poll error for job ${jobId}:`, err)
        }
      }

      // Check if all jobs are done
      const allDone = [...jobsRef.current.values()].every(
        (j) => j.status !== 'pending'
      )
      if (allDone) {
        finishPolling()
      }
    }

    pollRef.current = setInterval(poll, POLL_INTERVAL)
    // Run immediately too
    poll()
  }, [finishPolling])

  // ── Add local files (from drag-and-drop / file input) ──
  const addLocalFiles = useCallback((fileList) => {
    const files = Array.from(fileList)
    const accepted = []
    const rejected = []

    files.forEach((file) => {
      if (isAccepted(file)) {
        accepted.push(file)
      } else {
        rejected.push(file.name)
      }
    })

    const newCreatives = accepted.map((file) => ({
      clientRef: crypto.randomUUID(),
      name: file.name,
      source: 'local',
      status: 'pending',
      creativeFileId: null,
      error: null,
      file, // keep reference for upload
      thumbnailUrl: file.type.startsWith('image/')
        ? URL.createObjectURL(file)
        : null,
    }))

    setCreatives((prev) => [...prev, ...newCreatives])
    return { accepted: newCreatives, rejected }
  }, [])

  // ── Add Google Drive files (from picker) ──
  const addDriveFiles = useCallback((pickerFiles) => {
    const existing = new Set(creativesRef.current.map((c) => c.clientRef))
    const fresh = pickerFiles
      .filter((f) => !f.rejected && !existing.has(f.id))
      .map((f) => ({
        clientRef: f.id,
        name: f.name,
        source: 'drive',
        status: 'pending',
        creativeFileId: null,
        error: null,
        thumbnailUrl: driveThumbnailUrl(f.id),
      }))

    setCreatives((prev) => [...prev, ...fresh])
    return fresh
  }, [])

  // ── Parse and add public Drive links ──
  const addPublicLinks = useCallback((text) => {
    const ids = parseDriveLinks(text)
    if (ids.length === 0) return { count: 0, added: [] }

    const existing = new Set(creativesRef.current.map((c) => c.clientRef))
    const fresh = ids
      .filter((id) => !existing.has(id))
      .map((id) => ({
        clientRef: id,
        name: `Drive file ${id.slice(0, 8)}...`,
        source: 'public',
        status: 'pending',
        creativeFileId: null,
        error: null,
        thumbnailUrl: driveThumbnailUrl(id),
      }))

    setCreatives((prev) => [...prev, ...fresh])
    return { count: fresh.length, added: fresh }
  }, [])

  // ── Remove a creative ──
  const removeCreative = useCallback((clientRef) => {
    setCreatives((prev) => {
      const c = prev.find((x) => x.clientRef === clientRef)
      if (c?.thumbnailUrl?.startsWith('blob:')) {
        URL.revokeObjectURL(c.thumbnailUrl)
      }
      return prev.filter((x) => x.clientRef !== clientRef)
    })
  }, [])

  // ── Clear all creatives ──
  const clearCreatives = useCallback(() => {
    setCreatives((prev) => {
      prev.forEach((c) => {
        if (c.thumbnailUrl?.startsWith('blob:')) URL.revokeObjectURL(c.thumbnailUrl)
      })
      return []
    })
    jobsRef.current.clear()
    activeBatchesRef.current = 0
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
    setIsUploading(false)
    setUploadError(null)
  }, [])

  // ── Upload a specific batch of creatives ──
  const uploadBatch = useCallback(
    async (adAccountId, batch) => {
      const pending = batch.filter((c) => c.status === 'pending')
      if (pending.length === 0) return
      const batchRefs = new Set(pending.map((c) => c.clientRef))

      setIsUploading(true)
      setUploadError(null)
      activeBatchesRef.current += 1

      // Mark batch as uploading
      setCreatives((prev) =>
        prev.map((c) =>
          batchRefs.has(c.clientRef) ? { ...c, status: 'uploading' } : c
        )
      )

      try {
        // ── Local files path ──
        const localCreatives = pending.filter((c) => c.source === 'local')
        if (localCreatives.length > 0) {
          const presignData = await quickLaunchApi.presign(
            adAccountId,
            localCreatives.map((c) => ({
              client_ref: c.clientRef,
              filename: c.name,
              size: c.file.size,
            }))
          )

          // Mark rejected
          ;(presignData.rejected || []).forEach((r) => {
            updateCreative(r.client_ref, {
              status: 'failed',
              error: r.reason || 'rejected',
            })
          })

          // Upload accepted to Spaces in parallel
          const uploads = presignData.uploads || []
          const fileByRef = new Map(localCreatives.map((c) => [c.clientRef, c.file]))
          const staged = []

          await Promise.all(
            uploads.map(async (u) => {
              const file = fileByRef.get(u.client_ref)
              if (!file) return
              try {
                await uploadToSpaces(u, file)
                staged.push({
                  client_ref: u.client_ref,
                  key: u.key,
                  name: file.name,
                })
              } catch {
                updateCreative(u.client_ref, {
                  status: 'failed',
                  error: 'upload_failed',
                })
              }
            })
          )

          // Complete → get job_id
          if (staged.length > 0) {
            const completeData = await quickLaunchApi.complete(
              adAccountId,
              staged
            )
            ;(completeData.rejected || []).forEach((r) => {
              updateCreative(r.client_ref, {
                status: 'failed',
                error: r.reason || 'rejected',
              })
            })
            if (completeData.job_id) {
              jobsRef.current.set(completeData.job_id, { status: 'pending' })
            }
          }
        }

        // ── Drive files path (authenticated via session token) ──
        const driveCreatives = pending.filter((c) => c.source === 'drive')
        if (driveCreatives.length > 0) {
          const data = await quickLaunchApi.uploadDriveFiles(
            adAccountId,
            driveCreatives.map((c) => ({ hash: c.clientRef }))
          )
          if (data.job_id) {
            jobsRef.current.set(data.job_id, { status: 'pending' })
          }
        }

        // ── Public Drive links path ──
        const publicCreatives = pending.filter((c) => c.source === 'public')
        if (publicCreatives.length > 0) {
          const data = await quickLaunchApi.uploadDriveFiles(
            adAccountId,
            publicCreatives.map((c) => ({ hash: c.clientRef })),
            true
          )
          if (data.job_id) {
            jobsRef.current.set(data.job_id, { status: 'pending' })
          }
        }

        // Jobs registered — batch is no longer "in flight"
        activeBatchesRef.current = Math.max(0, activeBatchesRef.current - 1)

        // Start polling if we have any jobs
        const hasPendingJobs = [...jobsRef.current.values()].some(
          (j) => j.status === 'pending'
        )
        if (hasPendingJobs) {
          startPolling()
        } else if (activeBatchesRef.current === 0) {
          setIsUploading(false)
        }
      } catch (err) {
        activeBatchesRef.current = Math.max(0, activeBatchesRef.current - 1)
        const friendlyMsg = friendlyError(err)
        setUploadError({
          message: friendlyMsg,
          status: err?.status,
          raw: err?.data?.error || err?.message || '',
        })
        if (activeBatchesRef.current === 0 && !pollRef.current) {
          setIsUploading(false)
        }
        setCreatives((prev) =>
          prev.map((c) =>
            batchRefs.has(c.clientRef) && c.status === 'uploading'
              ? { ...c, status: 'failed', error: friendlyMsg }
              : c
          )
        )
      }
    },
    [updateCreative, startPolling]
  )

  // ── Upload all pending creatives ──
  const uploadAll = useCallback(
    (adAccountId) => uploadBatch(adAccountId, creativesRef.current),
    [uploadBatch]
  )

  // ── Reset all creatives to pending (e.g. after ad account switch) ──
  const resetCreativesForReupload = useCallback(() => {
    jobsRef.current.clear()
    activeBatchesRef.current = 0
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
    setIsUploading(false)
    setUploadError(null)
    const reset = creativesRef.current.map((c) => ({
      ...c,
      status: 'pending',
      creativeFileId: null,
      error: null,
    }))
    setCreatives(reset)
    return reset
  }, [])

  // ── Derived values ──
  const uploadedCreatives = creatives.filter((c) => c.status === 'uploaded')
  const pendingCreatives = creatives.filter(
    (c) => c.status === 'pending' || c.status === 'uploading'
  )
  const failedCreatives = creatives.filter((c) => c.status === 'failed')

  return {
    creatives,
    uploadedCreatives,
    pendingCreatives,
    failedCreatives,
    isUploading,
    uploadError,
    addLocalFiles,
    addDriveFiles,
    addPublicLinks,
    removeCreative,
    clearCreatives,
    uploadAll,
    uploadBatch,
    resetCreativesForReupload,
  }
}
