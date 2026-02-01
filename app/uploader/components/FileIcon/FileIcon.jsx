import { IconVideo, IconPhoto } from "@tabler/icons-react"
import cn from "classnames"
import styles from "./FileIcon.module.scss"

const VIDEO_PATTERN = /\.(mp4|mov|avi|webm|mkv)$/i

const FileIcon = ({ fileName, size = 16 }) => {
  const isVideo = VIDEO_PATTERN.test(fileName || "")

  return (
    <div className={cn(styles.fileIcon, isVideo ? styles.video : styles.image)}>
      {isVideo ? <IconVideo size={size} /> : <IconPhoto size={size} />}
    </div>
  )
}

export default FileIcon
