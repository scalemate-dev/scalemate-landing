"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  IconCheck,
  IconCloudUpload,
  IconArrowRight,
  IconAlertCircle,
  IconLoader2,
  IconX,
  IconInfoCircle,
} from "@tabler/icons-react"
import cn from "classnames"
import tiktokWhiteIcon from "@/assets/icons/tiktok-white-icon.svg"
import tiktokBlackIcon from "@/assets/icons/tiktok-icon.svg"
import metaIcon from "@/assets/icons/meta-icon.svg"
import googleDriveIcon from "@/assets/icons/google-drive-icon.svg"
import { guestSessionApi } from "@/lib/api/guestSession"
import { useFacebookAuth } from "@/hooks/useFacebookAuth"
import { useTikTokAuth } from "@/hooks/useTikTokAuth"
import { useGooglePicker } from "@/hooks/useGooglePicker"
import { useGuestSession } from "@/hooks/useGuestSession"
import { useUploadProgress } from "@/hooks/useUploadProgress"
import FileIcon from "../FileIcon/FileIcon"
import UploadProgress from "../UploadProgress/UploadProgress"
import UploadComplete from "../UploadComplete/UploadComplete"
import styles from "./UploaderWidget.module.scss"

const VIEWS = {
  FORM: "form",
  PROGRESS: "progress",
  COMPLETE: "complete",
}

const SUBTITLES = {
  [VIEWS.FORM]:
    "Select files from Google Drive and upload them to your ad account.",
  [VIEWS.PROGRESS]: "Your files are being uploaded to the ad platform.",
  [VIEWS.COMPLETE]: "Upload session finished.",
}

const PLATFORM_CONFIG = {
  tiktok: { icon: tiktokBlackIcon, name: "TikTok Ads" },
  facebook: { icon: metaIcon, name: "Meta Ads" },
}

// --- Sub-components ---

const PlatformAccounts = ({
  platform,
  accounts,
  selectedAccountId,
  onSelect,
}) => {
  const config = PLATFORM_CONFIG[platform]
  if (!config || !accounts.length) return null

  return (
    <div className={styles.platformGroup}>
      <div className={styles.platformHeader}>
        <div className={cn(styles.platformIcon, styles[platform])}>
          <Image src={config.icon} alt="" width={24} height={24} />
        </div>
        <span className={styles.platformName}>{config.name}</span>
      </div>
      <div className={styles.accountsList}>
        {accounts.map((account) => (
          <button
            key={account.id}
            className={cn(styles.accountItem, {
              [styles.selected]: selectedAccountId === account.id,
            })}
            onClick={() => onSelect(account.id)}
          >
            <div className={styles.checkbox}>
              {selectedAccountId === account.id && <IconCheck size={12} />}
            </div>
            <div className={styles.accountInfo}>
              <div className={styles.accountName}>{account.name}</div>
              <div className={styles.accountId}>{account.id}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// --- Main Widget ---

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
        <div className={styles.content} style={{ justifyContent: "center", alignItems: "center", padding: "3rem 0" }}>
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
      <>
        {(error || upload.error) && (
          <div className={styles.errorBanner}>
            <IconAlertCircle size={16} />
            <span>{error || upload.error}</span>
          </div>
        )}

        <div className={styles.content}>
          {/* Left Column - File Selection */}
          <div className={styles.filesSection}>
            <div className={styles.sectionHeader}>
              <div
                className={cn(styles.stepBadge, {
                  [styles.completed]: hasFiles,
                })}
              >
                {hasFiles ? <IconCheck size={14} /> : "1"}
              </div>
              <span className={styles.sectionTitle}>Choose files</span>
            </div>

            <button
              className={cn(styles.dropzone, { [styles.hasFiles]: hasFiles })}
              onClick={openPicker}
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
                      <FileIcon fileName={file.name} size={18} />
                      <span className={styles.fileName}>{file.name}</span>
                      <button
                        className={styles.fileRemove}
                        onClick={() => removeFile(index)}
                      >
                        <IconX size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center Divider */}
          <div className={styles.divider}>
            <div
              className={cn(styles.arrowCircle, { [styles.ready]: canUpload })}
            >
              <IconArrowRight size={20} />
            </div>
            <span className={styles.arrowLabel}>
              {canUpload ? "Ready" : ""}
            </span>
          </div>

          {/* Right Column - Destinations */}
          <div className={styles.destinationsSection}>
            <div className={styles.sectionHeader}>
              <div
                className={cn(styles.stepBadge, {
                  [styles.completed]: !!selectedAccountId,
                })}
              >
                {selectedAccountId ? <IconCheck size={14} /> : "2"}
              </div>
              <span className={styles.sectionTitle}>Select destination</span>
            </div>

            {isConnected ? (
              <>
                <PlatformAccounts
                  platform={connectedPlatform}
                  accounts={adAccounts}
                  selectedAccountId={selectedAccountId}
                  onSelect={selectAccount}
                />
                <button
                  className={styles.disconnectLink}
                  onClick={handleDisconnect}
                >
                  Disconnect account
                </button>
              </>
            ) : (
              <div className={styles.platformButtons}>
                <button
                  className={cn(styles.platformBtn, styles.tiktok)}
                  onClick={handleTikTokConnect}
                  disabled={isTikTokConnecting || isSessionLoading}
                >
                  {isTikTokConnecting || isSessionLoading ? (
                    <IconLoader2 size={18} className={styles.spinner} />
                  ) : (
                    <Image
                      src={tiktokWhiteIcon}
                      alt=""
                      width={18}
                      height={18}
                    />
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
            )}
          </div>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.uploadBtn}
            disabled={!canUpload || upload.isStarting}
            onClick={handleUpload}
          >
            {upload.isStarting ? (
              <IconLoader2 size={20} className={styles.spinner} />
            ) : (
              <IconCloudUpload size={20} />
            )}
            {upload.isStarting ? "Starting upload..." : "Upload files"}
          </button>
          <div className={styles.guestLimits}>
            <IconInfoCircle size={14} />
            <span>Free mode: 20 files/day · 1 destination</span>
            <a
              href={guestSessionApi.getAppRedirectUrl("/signup")}
              className={styles.guestLimitsLink}
            >
              Remove limits
            </a>
          </div>
        </div>
      </>
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
