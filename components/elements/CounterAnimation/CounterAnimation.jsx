"use client"

import { useState, useEffect, useRef } from "react"

export default function CounterAnimation({
  value,
  duration = 2000,
  className,
  decimals = 0,
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const targetValueRef = useRef(null)
  const startTimeRef = useRef(null)
  const frameRef = useRef(null)

  // Parse the value string to extract numeric value and suffix
  useEffect(() => {
    // Reset animation when value changes
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }

    const numeric = parseFloat(value.replace(/[^\d.-]/g, ""))
    const suffix = value.replace(/[\d.-]/g, "")

    targetValueRef.current = { numeric, suffix }
    startTimeRef.current = null

    // Start animation
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1,
      )

      const currentValue = progress * targetValueRef.current.numeric
      setDisplayValue(currentValue.toFixed(decimals))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        // Ensure we end exactly at the target value
        setDisplayValue(targetValueRef.current.numeric.toFixed(decimals))
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [value, duration, decimals])

  // Format the displayed value with the suffix
  const formattedValue = `${displayValue}${
    targetValueRef.current?.suffix || ""
  }`

  return <span className={className}>{formattedValue}</span>
}
