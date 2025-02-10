"use client"

import cn from "classnames"
import styles from "./Input.module.scss"

const Input = ({
  textarea,
  value,
  placeholder,
  leftPadding,
  type = "text",
  disabled,
  autocomplete,
  label,
  required,
  name,
  onChange,
}) => {
  const handleChange = (e) => {
    onChange?.(e.target.value)
  }

  const inputClasses = cn(styles.inputField, {
    [styles.leftPadding]: leftPadding,
    [styles.disabled]: disabled,
    [styles.textarea]: textarea,
  })

  return (
    <div className={styles.input}>
      {label && (
        <div className={styles.inputLabel}>
          <span>{label}</span>
          {required ? " *" : ""}
        </div>
      )}
      {textarea ? (
        <textarea
          className={inputClasses}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autocomplete}
          onChange={handleChange}
        />
      ) : (
        <input
          className={inputClasses}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autocomplete}
          onChange={handleChange}
        />
      )}
    </div>
  )
}

export default Input
