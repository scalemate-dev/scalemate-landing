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
  className,
  float,
  darkTheme,
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
    onClick?.(e)
  }

  if (href) {
    return (
      <Link href={href} className={classNames} onClick={handleClick}>
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
