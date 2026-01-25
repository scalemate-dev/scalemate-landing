"use client"

import { useState, useCallback } from "react"
import useDrivePicker from "react-google-drive-picker"
import { config } from "@/lib/config"

/**
 * Hook for Google Drive Picker integration.
 * Uses react-google-drive-picker library.
 */
export function useGooglePicker() {
  const [openPicker, authResponse] = useDrivePicker()

  const [selectedFiles, setSelectedFiles] = useState([])
  const [error, setError] = useState(null)
  const [isPickerOpen, setIsPickerOpen] = useState(false)

  console.log("process env:", {
    devkey: process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY,
  })
  const handleOpenPicker = useCallback(() => {
    setError(null)
    setIsPickerOpen(true)

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
    getFilesForApi,
  }
}

export default useGooglePicker
