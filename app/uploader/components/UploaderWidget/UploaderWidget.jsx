"use client"

import { useState } from "react"
import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconCheck,
  IconCloudUpload,
  IconArrowRight,
  IconAlertCircle,
  IconLoader2,
  IconVideo,
  IconPhoto,
  IconX,
} from "@tabler/icons-react"
import cn from "classnames"
import { useFacebookAuth } from "@/hooks/useFacebookAuth"
import { useTikTokAuth } from "@/hooks/useTikTokAuth"
import { useGooglePicker } from "@/hooks/useGooglePicker"
import { useGuestSession } from "@/hooks/useGuestSession"
import styles from "./UploaderWidget.module.scss"

// Google Drive icon as inline SVG component
const GoogleDriveIcon = () => (
  <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
      fill="#0066da"
    />
    <path
      d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
      fill="#00ac47"
    />
    <path
      d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
      fill="#ea4335"
    />
    <path
      d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
      fill="#00832d"
    />
    <path
      d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
      fill="#2684fc"
    />
    <path
      d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
      fill="#ffba00"
    />
  </svg>
)

// Meta icon
const MetaIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 18c0-3.15 1.05-5.85 2.55-7.65 1.2-1.45 2.7-2.35 4.35-2.35 1.35 0 2.55.55 3.6 1.55 1.35 1.3 2.7 3.35 4.05 6.1.9 1.85 1.65 3.55 2.25 5.05.45 1.15.85 2.2 1.2 3.15.6-.95 1.25-2.05 1.95-3.35.85-1.55 1.55-2.95 2.15-4.2.9-1.9 1.55-3.5 1.9-4.75.3-1.05.45-1.95.45-2.7 0-1.05-.3-1.9-.85-2.55-.5-.6-1.2-.9-2.05-.9-1.5 0-2.85.9-4.05 2.7-.55.8-1.05 1.75-1.55 2.85l-2.3-1.2c.6-1.3 1.25-2.45 1.95-3.45 1.75-2.5 3.85-3.75 6.3-3.75 1.75 0 3.15.6 4.2 1.8 1.1 1.25 1.65 2.85 1.65 4.8 0 1.1-.2 2.3-.6 3.6-.45 1.5-1.2 3.25-2.25 5.3-.7 1.35-1.5 2.85-2.4 4.5-.75 1.35-1.45 2.55-2.1 3.55l-2.15-1.15c.4-.6.85-1.35 1.35-2.25-.35-.9-.7-1.8-1.1-2.75-.6-1.5-1.3-3.15-2.15-4.95-1.25-2.6-2.45-4.5-3.6-5.65-.75-.75-1.5-1.1-2.25-1.1-1 0-1.95.6-2.85 1.8-1.15 1.55-1.75 3.65-1.75 6.35 0 2.1.4 3.9 1.2 5.35.7 1.25 1.6 1.9 2.7 1.9.9 0 1.75-.4 2.55-1.15.55-.55 1.1-1.25 1.6-2.15l2.15 1.3c-.65 1.15-1.35 2.1-2.15 2.85-1.25 1.2-2.7 1.8-4.3 1.8-1.95 0-3.55-.95-4.8-2.85-1.25-1.85-1.85-4.3-1.85-7.3z"
      fill="#0081FB"
    />
  </svg>
)

const UploaderWidget = () => {
  // OAuth hooks
  const {
    isConnected: isFacebookConnected,
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
    isLoading: isSessionLoading,
    error: sessionError,
    redirectToApp,
    clearSession,
    hasSession,
  } = useGuestSession()

  // Local UI state
  const [connectedPlatform, setConnectedPlatform] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  // Computed states
  const isConnected =
    (connectedPlatform === "tiktok" && hasSession && adAccounts.length > 0) ||
    (connectedPlatform === "facebook" &&
      isFacebookConnected &&
      adAccounts.length > 0)
  const hasSelectedAccount = !!selectedAccountId
  const hasFiles = pickerFiles.length > 0
  const canUpload = hasSelectedAccount && hasFiles

  // Combined error
  const error = facebookError || tiktokError || googleError || sessionError

  // Handlers
  const handleFacebookConnect = async () => {
    try {
      const { token, userId } = await connectFacebook()
      await createSession({
        platformType: "facebook",
        platformToken: token,
        platformUserId: userId,
      })
      setConnectedPlatform("facebook")
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
      setConnectedPlatform("tiktok")
    } catch (err) {
      console.error("TikTok connect error:", err)
    }
  }

  const handleAccountSelect = async (accountId) => {
    await selectAccount(accountId)
  }

  const handleGooglePicker = () => {
    openPicker()
  }

  const handleDisconnect = async () => {
    if (connectedPlatform === "facebook") {
      await disconnectFacebook()
    }
    clearFiles()
    clearSession()
    setConnectedPlatform(null)
  }

  const handleUpload = async () => {
    setIsUploading(true)
    try {
      if (pickerFiles.length > 0) {
        await updateFiles({ googleToken, files: getFilesForApi() })
      }
      redirectToApp("/create-account")
    } catch (err) {
      console.error("Upload error:", err)
      setIsUploading(false)
    }
  }

  const handleRemoveFile = () => {
    // This would need to be implemented in useGooglePicker
    // For now, we'll just clear all files
    clearFiles()
  }

  // Get file icon based on type
  const getFileIcon = (file) => {
    const name = file.name?.toLowerCase() || ""
    if (name.match(/\.(mp4|mov|avi|webm|mkv)$/)) {
      return <IconVideo size={18} />
    }
    return <IconPhoto size={18} />
  }

  const getFileIconClass = (file) => {
    const name = file.name?.toLowerCase() || ""
    if (name.match(/\.(mp4|mov|avi|webm|mkv)$/)) {
      return styles.video
    }
    return styles.image
  }

  return (
    <div className={styles.widget}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Ad Creative Uploader</h2>
        <p>
          Select files from Google Drive and upload them to your ad accounts.
        </p>
      </div>

      {/* Error banner */}
      {error && (
        <div className={styles.errorBanner}>
          <IconAlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className={styles.content}>
        {/* Left Column - File Selection */}
        <div className={styles.filesSection}>
          <div className={styles.sectionHeader}>
            <div
              className={cn(styles.stepBadge, { [styles.completed]: hasFiles })}
            >
              {hasFiles ? <IconCheck size={14} /> : "1"}
            </div>
            <span className={styles.sectionTitle}>Choose files</span>
          </div>

          <button
            className={cn(styles.dropzone, { [styles.hasFiles]: hasFiles })}
            onClick={handleGooglePicker}
            disabled={isPickerOpen}
          >
            <div className={styles.dropzoneIcon}>
              {isPickerOpen ? (
                <IconLoader2 size={32} className={styles.spinner} />
              ) : (
                <GoogleDriveIcon />
              )}
            </div>
            <span className={styles.dropzoneText}>
              {hasFiles
                ? `${pickerFiles.length} files selected`
                : "Browse Google Drive"}
            </span>
            <span className={styles.dropzoneHint}>
              Accepted formats: jpg, png, mp4
            </span>
          </button>

          {/* File List */}
          {hasFiles && (
            <div className={styles.fileList}>
              <div className={styles.fileListHeader}>
                <span className={styles.fileCount}>
                  {pickerFiles.length} files selected
                </span>
                <button className={styles.clearBtn} onClick={clearFiles}>
                  Remove all
                </button>
              </div>
              <div className={styles.files}>
                {pickerFiles.map((file, index) => (
                  <div key={index} className={styles.fileItem}>
                    <div
                      className={cn(styles.fileIcon, getFileIconClass(file))}
                    >
                      {getFileIcon(file)}
                    </div>
                    <span className={styles.fileName}>{file.name}</span>
                    <button
                      className={styles.fileRemove}
                      onClick={() => handleRemoveFile(index)}
                    >
                      <IconX size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Center Divider with Arrow */}
        <div className={styles.divider}>
          <div
            className={cn(styles.arrowCircle, { [styles.ready]: canUpload })}
          >
            <IconArrowRight size={20} />
          </div>
          <span className={styles.arrowLabel}>{canUpload ? "Ready" : ""}</span>
        </div>

        {/* Right Column - Destinations */}
        <div className={styles.destinationsSection}>
          <div className={styles.sectionHeader}>
            <div
              className={cn(styles.stepBadge, {
                [styles.completed]: hasSelectedAccount,
              })}
            >
              {hasSelectedAccount ? <IconCheck size={14} /> : "2"}
            </div>
            <span className={styles.sectionTitle}>Select destinations</span>
          </div>

          {isConnected ? (
            <>
              {/* TikTok Accounts */}
              {connectedPlatform === "tiktok" && adAccounts.length > 0 && (
                <div className={styles.platformGroup}>
                  <div className={styles.platformHeader}>
                    <div className={cn(styles.platformIcon, styles.tiktok)}>
                      <IconBrandTiktok size={24} />
                    </div>
                    <span className={styles.platformName}>TikTok Ads</span>
                  </div>
                  <div className={styles.accountsList}>
                    {adAccounts.map((account) => (
                      <button
                        key={account.id}
                        className={cn(styles.accountItem, {
                          [styles.selected]: selectedAccountId === account.id,
                        })}
                        onClick={() => handleAccountSelect(account.id)}
                      >
                        <div className={styles.checkbox}>
                          {selectedAccountId === account.id && (
                            <IconCheck size={12} />
                          )}
                        </div>
                        <div className={styles.accountInfo}>
                          <div className={styles.accountName}>
                            {account.name}
                          </div>
                          <div className={styles.accountId}>{account.id}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Facebook Accounts */}
              {connectedPlatform === "facebook" && adAccounts.length > 0 && (
                <div className={styles.platformGroup}>
                  <div className={styles.platformHeader}>
                    <div className={cn(styles.platformIcon, styles.facebook)}>
                      <IconBrandFacebook size={24} />
                    </div>
                    <span className={styles.platformName}>Meta Ads</span>
                  </div>
                  <div className={styles.accountsList}>
                    {adAccounts.map((account) => (
                      <button
                        key={account.id}
                        className={cn(styles.accountItem, {
                          [styles.selected]: selectedAccountId === account.id,
                        })}
                        onClick={() => handleAccountSelect(account.id)}
                      >
                        <div className={styles.checkbox}>
                          {selectedAccountId === account.id && (
                            <IconCheck size={12} />
                          )}
                        </div>
                        <div className={styles.accountInfo}>
                          <div className={styles.accountName}>
                            {account.name}
                          </div>
                          <div className={styles.accountId}>{account.id}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                className={styles.disconnectLink}
                onClick={handleDisconnect}
              >
                Disconnect account
              </button>
            </>
          ) : (
            <div className={styles.connectPlatforms}>
              <div className={styles.connectLabel}>Connect platforms</div>
              <div className={styles.platformButtons}>
                <button
                  className={cn(styles.platformBtn, styles.tiktok)}
                  onClick={handleTikTokConnect}
                  disabled={isTikTokConnecting || isSessionLoading}
                >
                  {isTikTokConnecting || isSessionLoading ? (
                    <IconLoader2 size={18} className={styles.spinner} />
                  ) : (
                    <IconBrandTiktok size={18} />
                  )}
                  TikTok Ads
                </button>

                <button
                  className={cn(styles.platformBtn, styles.facebook)}
                  onClick={handleFacebookConnect}
                  disabled={isFacebookConnecting || isSessionLoading}
                >
                  {isFacebookConnecting ? (
                    <IconLoader2 size={18} className={styles.spinner} />
                  ) : (
                    <MetaIcon />
                  )}
                  Meta Ads
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with Upload Button */}
      <div className={styles.footer}>
        <button
          className={styles.uploadBtn}
          disabled={!canUpload || isUploading}
          onClick={handleUpload}
        >
          {isUploading ? (
            <IconLoader2 size={20} className={styles.spinner} />
          ) : (
            <IconCloudUpload size={20} />
          )}
          {isUploading ? "Uploading..." : "Upload files"}
        </button>
      </div>
    </div>
  )
}

export default UploaderWidget
