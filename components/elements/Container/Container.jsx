import React from "react"
import styles from "./Container.module.scss"
import cn from "classnames"

export default function Container({ children, className, paddingBottom }) {
  return (
    <div className={cn(styles.container, className)} style={{ paddingBottom }}>
      {children}
    </div>
  )
}
