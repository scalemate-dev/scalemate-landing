import React from "react"
import styles from "./Container.module.scss"
import cn from "classnames"

export default function Container({ children, className }) {
  return <div className={cn(styles.container, className)}>{children}</div>
}
