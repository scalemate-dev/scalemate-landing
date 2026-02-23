"use client"

import { useState, useEffect } from "react"
import { IconLoader2 } from "@tabler/icons-react"
import cn from "classnames"
import { useFacebookAuth } from "@/hooks/useFacebookAuth"
import { useTikTokAuth } from "@/hooks/useTikTokAuth"
import { useGooglePicker } from "@/hooks/useGooglePicker"
import { useGuestSession } from "@/hooks/useGuestSession"
import { useUploadProgress } from "@/hooks/useUploadProgress"
import UploadProgress from "../UploadProgress/UploadProgress"
import UploadComplete from "../UploadComplete/UploadComplete"
import FormView from "./FormView"
import styles from "./UploaderWidget.module.scss"

const VIEWS = {
  FORM: "form",
  PROGRESS: "progress",
  COMPLETE: "complete",
}

const SUBTITLES = {
  [VIEWS.FORM]:
    "Select files from Google Drive and upload them to your ad account.",
  [VIEWS.PROGRESS]: "Your files are being uploaded to the ad account",
  [VIEWS.COMPLETE]: "Upload complete",
}

const UploaderWidget = () => {
  const {
    isConnecting: isFacebookConnecting,
    connect: connectFacebook,
    disconnect: disconnectFacebook,
    error: facebookError,
  } = useFacebookAuth({ autoInit: false })

  const {
    isConnecting: isTikTokConnecting,
    error: tiktokError,
    connect: connectTikTok,
  } = useTikTokAuth()

  const {
    openPicker,
    selectedFiles: pickerFiles,
    isPickerOpen,
    clearFiles,
    removeFile,
    error: googleError,
    accessToken: googleToken,
    getFilesForApi,
  } = useGooglePicker()

  const {
    createSession,
    selectAccount,
    updateFiles,
    adAccounts,
    selectedAccountId,
    connectedPlatform,
    isLoading: isSessionLoading,
    isRestoring,
    error: sessionError,
    clearSession,
    hasSession,
  } = useGuestSession()

  const upload = useUploadProgress()

  const [view, setView] = useState(VIEWS.FORM)

  const isConnected = !!connectedPlatform && hasSession && adAccounts.length > 0
  const hasFiles = pickerFiles.length > 0
  const canUpload = !!selectedAccountId && hasFiles

  const error = facebookError || tiktokError || googleError || sessionError

  useEffect(() => {
    if (view === VIEWS.PROGRESS && upload.isTerminal) {
      setView(VIEWS.COMPLETE)
    }
  }, [view, upload.isTerminal])

  const handleFacebookConnect = async () => {
    try {
      const { token, userId } = await connectFacebook()
      await createSession({
        platformType: "facebook",
        platformToken: token,
        platformUserId: userId,
      })
    } catch (err) {
      console.error("Facebook connect error:", err)
    }
  }

  const handleTikTokConnect = async () => {
    try {
      const { auth_code } = await connectTikTok()
      await createSession({
        platformType: "tiktok",
        platformToken: auth_code,
      })
    } catch (err) {
      console.error("TikTok connect error:", err)
    }
  }

  const handleDisconnect = async () => {
    if (connectedPlatform === "facebook") {
      await disconnectFacebook()
    }
    clearFiles()
    clearSession()
  }

  const handleUpload = async () => {
    try {
      if (pickerFiles.length > 0) {
        await updateFiles({ googleToken, files: getFilesForApi() })
      }
      await upload.startUpload()
      setView(VIEWS.PROGRESS)
    } catch (err) {
      console.error("Upload error:", err)
    }
  }

  const handleUploadMore = () => {
    upload.reset()
    clearFiles()
    setView(VIEWS.FORM)
  }

  const renderContent = () => {
    if (isRestoring) {
      return (
        <div className={cn(styles.content, styles.restoring)}>
          <IconLoader2 size={32} className={styles.spinner} />
        </div>
      )
    }

    if (view === VIEWS.PROGRESS) {
      return (
        <UploadProgress
          totalFiles={upload.totalFiles}
          completedFiles={upload.completedFiles}
          failedFiles={upload.failedFiles}
          results={upload.results}
          progress={upload.progress}
          error={upload.error}
        />
      )
    }

    if (view === VIEWS.COMPLETE) {
      return (
        <UploadComplete
          totalFiles={upload.totalFiles}
          completedFiles={upload.completedFiles}
          failedFiles={upload.failedFiles}
          results={upload.results}
          onUploadMore={handleUploadMore}
        />
      )
    }

    return (
      <FormView
        error={error}
        uploadError={upload.error}
        hasFiles={hasFiles}
        pickerFiles={pickerFiles}
        openPicker={openPicker}
        isPickerOpen={isPickerOpen}
        clearFiles={clearFiles}
        removeFile={removeFile}
        canUpload={canUpload}
        selectedAccountId={selectedAccountId}
        isConnected={isConnected}
        connectedPlatform={connectedPlatform}
        adAccounts={adAccounts}
        selectAccount={selectAccount}
        onDisconnect={handleDisconnect}
        onTikTokConnect={handleTikTokConnect}
        onFacebookConnect={handleFacebookConnect}
        isTikTokConnecting={isTikTokConnecting}
        isSessionLoading={isSessionLoading}
        isFacebookConnecting={isFacebookConnecting}
        isStarting={upload.isStarting}
        onUpload={handleUpload}
      />
    )
  }

  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <h2>Ad Creative Uploader</h2>
        <p>{SUBTITLES[view]}</p>
      </div>
      {renderContent()}
    </div>
  )
}

export default UploaderWidget
