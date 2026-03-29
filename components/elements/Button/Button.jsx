"use client"

import cn from "classnames"
import Link from "next/link"
import { trackMixpanelEvent } from "@/helpers/analytics/mixpanel"
import { appendTrackingParams } from "@/helpers/forwardParams"
import Spinner from "../Spinner/Spinner"
import styles from "./Button.module.scss"

const Button = ({
  color,
  submit,
  href,
  wide,
  loading,
  disabled,
  children,
  onClick,
  outline,
  className,
  float,
  darkTheme,
  trackEvent,
  trackProps,
  ...props
}) => {
  const classNames = cn(
    styles.button,
    {
      [styles[color]]: color,
      [styles.wide]: wide,
      [styles.disabled]: disabled,
      [styles.outline]: outline,
      ["float"]: float,
      [styles.darkTheme]: darkTheme,
    },
    className,
  )

  const handleClick = (e) => {
    if (disabled) return

    if (trackEvent) {
      trackMixpanelEvent(trackEvent, {
        cta_text: typeof children === "string" ? children : undefined,
        cta_destination: href || undefined,
        ...trackProps,
      })
    }

    onClick?.(e)
  }

  const resolvedHref =
    href && typeof href === "string" && href.includes("app.scalemate.co")
      ? appendTrackingParams(href)
      : href

  if (href) {
    return (
      <Link href={resolvedHref} className={classNames} onClick={handleClick}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={handleClick}
      type={submit ? "submit" : "button"}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  )
}

export default Button
