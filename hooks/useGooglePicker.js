"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import useDrivePicker from "react-google-drive-picker"
import { guestSessionApi } from "@/lib/api/guestSession"
import { getStoredToken, storeToken } from "@/helpers/googleDriveToken"

export function useGooglePicker({ onFilesSelected } = {}) {
  const [openPicker, authResponse] = useDrivePicker()

  const [selectedFiles, setSelectedFiles] = useState([])
  const [error, setError] = useState(null)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const scrollPositionRef = useRef(0)

  const handleOpenPicker = useCallback(() => {
    setError(null)
    setIsPickerOpen(true)

    scrollPositionRef.current = window.scrollY
    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollPositionRef.current}px`
    document.body.style.width = "100%"

    console.log(
      "NEXT_PUBLIC_GOOGLE_CLIENT_ID :: ",
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    )
    console.log(
      "process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY :: ",
      process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY,
    )

    const GOOGLE_PROJECT_NUMBER =
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?.split("-")[0]

    const pickerConfig = {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      viewId: "DOCS_IMAGES_AND_VIDEOS",
      appId: GOOGLE_PROJECT_NUMBER,
      developerKey: process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY,
      showUploadView: false,
      showUploadFolders: false,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        setIsPickerOpen(false)

        document.body.style.overflow = ""
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        window.scrollTo(0, scrollPositionRef.current)

        if (data.action === "cancel") return

        if (data.action === "picked" && data.docs) {
          const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "video/mp4"]

          const files = data.docs.map((doc) => ({
            id: doc.id,
            name: doc.name,
            mimeType: doc.mimeType,
            url: doc.url,
            rejected: !ALLOWED_MIME_TYPES.includes(doc.mimeType),
          }))

          setSelectedFiles(files)
          onFilesSelected?.(files.filter((f) => !f.rejected))
        }
      },
    }

    const storedToken = getStoredToken()
    if (storedToken) {
      pickerConfig.token = storedToken
    }

    openPicker(pickerConfig)
  }, [openPicker])

  // Persist new Google token and sync to backend when auth happens
  useEffect(() => {
    const newToken = authResponse?.access_token
    if (!newToken) return

    storeToken(newToken)
    guestSessionApi.update({ googleToken: newToken }).catch(() => {})
  }, [authResponse?.access_token])

  const clearFiles = useCallback(() => {
    setSelectedFiles([])
  }, [])

  const removeFile = useCallback((index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const getFilesForApi = useCallback(() => {
    return selectedFiles
      .filter((file) => !file.rejected)
      .map((file) => ({
        hash: file.id,
        name: file.name,
        type: file.mimeType,
      }))
  }, [selectedFiles])

  return {
    // State
    isPickerOpen,
    selectedFiles,
    accessToken: authResponse?.access_token || getStoredToken(),
    error,
    hasFiles: selectedFiles.some((f) => !f.rejected),

    // Actions
    openPicker: handleOpenPicker,
    clearFiles,
    removeFile,
    getFilesForApi,
  }
}
