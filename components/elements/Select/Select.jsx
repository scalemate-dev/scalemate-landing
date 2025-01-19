"use client";

import cn from "classnames";
import styles from "./Select.module.scss";

const Select = ({
  label,
  required,
  options = [],
  value = "",
  placeholder = "Select",
  onChange,
}) => {
  const handleChange = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      {label && (
        <div className={styles.selectLabel}>
          <span>{label}</span>
          {required ? "*" : ""}
        </div>
      )}
      <div className={styles.select}>
        <div className={styles.selectIcon}>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 1L7 7.5L13.5 1" stroke="black" />
          </svg>
        </div>
        <select
          tabIndex={0}
          className={cn(styles.selectElement, {
            [styles.hasValue]: value.length > 0,
          })}
          value={value}
          onChange={handleChange}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
