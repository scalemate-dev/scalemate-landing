"use client"

import { useState } from "react"
import Image from "next/image"
import {
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
import tiktokWhiteIcon from "@/assets/icons/tiktok-white-icon.svg"
import metaIcon from "@/assets/icons/meta-icon.svg"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"
import { useFacebookAuth } from "@/hooks/useFacebookAuth"
import { useTikTokAuth } from "@/hooks/useTikTokAuth"
import { useGooglePicker } from "@/hooks/useGooglePicker"
import { useGuestSession } from "@/hooks/useGuestSession"
import styles from "./UploaderWidget.module.scss"

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
                <Image src={googleDriveIcon} alt="" width={32} height={32} />
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
                      <Image src={tiktokWhiteIcon} alt="" width={24} height={24} />
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
                      <Image src={metaIcon} alt="" width={24} height={24} />
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
                    <Image src={tiktokWhiteIcon} alt="" width={18} height={18} />
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
                    <Image src={metaIcon} alt="" width={18} height={18} />
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
