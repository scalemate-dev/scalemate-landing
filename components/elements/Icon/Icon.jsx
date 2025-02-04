import React from "react"
import styles from "./Icon.module.scss"
import cn from "classnames"

export default function Icon({ children, className, style }) {
  return (
    <div className={cn(styles.icon, className)} style={style}>
      {children}
    </div>
  )
}
