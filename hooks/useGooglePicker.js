"use client"

import { useState, useCallback, useRef } from "react"
import useDrivePicker from "react-google-drive-picker"

/**
 * Hook for Google Drive Picker integration.
 * Uses react-google-drive-picker library.
 */
export function useGooglePicker() {
  const [openPicker, authResponse] = useDrivePicker()

  const [selectedFiles, setSelectedFiles] = useState([])
  const [error, setError] = useState(null)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const scrollPositionRef = useRef(0)

  const handleOpenPicker = useCallback(() => {
    setError(null)
    setIsPickerOpen(true)

    // Save scroll position and lock body scroll
    scrollPositionRef.current = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPositionRef.current}px`
    document.body.style.width = '100%'

    openPicker({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      viewId: "DOCS_IMAGES_AND_VIDEOS",
      developerKey: process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY,
      showUploadView: false,
      showUploadFolders: false,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        setIsPickerOpen(false)

        // Unlock body scroll and restore position
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollPositionRef.current)

        if (data.action === "cancel") {
          return
        }

        if (data.action === "picked" && data.docs) {
          const files = data.docs.map((doc) => ({
            id: doc.id,
            name: doc.name,
            mimeType: doc.mimeType,
            url: doc.url,
          }))
          setSelectedFiles(files)
        }
      },
    })
  }, [openPicker])

  const clearFiles = useCallback(() => {
    setSelectedFiles([])
  }, [])

  const removeFile = useCallback((index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const getFilesForApi = useCallback(() => {
    return selectedFiles.map((file) => ({
      hash: file.id,
      name: file.name,
      type: file.mimeType,
    }))
  }, [selectedFiles])

  return {
    // State
    isPickerOpen,
    selectedFiles,
    accessToken: authResponse?.access_token || null,
    error,
    hasFiles: selectedFiles.length > 0,

    // Actions
    openPicker: handleOpenPicker,
    clearFiles,
    removeFile,
    getFilesForApi,
  }
}
