"use client"

import cn from "classnames"
import Link from "next/link"
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
  float,
  ...props
}) => {
  const className = cn(styles.button, {
    [styles[color]]: color,
    [styles.wide]: wide,
    [styles.disabled]: disabled,
    [styles.outline]: outline,
    float: float,
  })

  const handleClick = (e) => {
    if (disabled) return
    onClick?.(e)
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={className}
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
