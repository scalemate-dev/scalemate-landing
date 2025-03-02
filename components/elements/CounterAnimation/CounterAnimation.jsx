"use client"

import { useState, useEffect, useRef } from "react"

export default function CounterAnimation({
  value,
  duration = 2000,
  className,
  decimals = 0,
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const targetValueRef = useRef(null)
  const startTimeRef = useRef(null)
  const frameRef = useRef(null)
  const containerRef = useRef(null)

  // Parse the value string to extract numeric value and suffix
  useEffect(() => {
    // Reset animation when value changes
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }

    // Reset animation complete status
    setIsAnimationComplete(false)

    const numeric = parseFloat(value.replace(/[^\d.-]/g, ""))
    const suffix = value.replace(/[\d.-]/g, "")

    targetValueRef.current = { numeric, suffix }
    startTimeRef.current = null

    // Set a fixed width based on the target value to prevent jumping
    if (containerRef.current) {
      // Store the original width if not already set
      if (!containerRef.current.dataset.originalWidth) {
        containerRef.current.dataset.originalWidth =
          containerRef.current.offsetWidth
      }

      // Create a temporary span to measure the final width
      const tempSpan = document.createElement("span")
      tempSpan.style.visibility = "hidden"
      tempSpan.style.position = "absolute"
      tempSpan.style.whiteSpace = "nowrap"
      tempSpan.innerHTML = formatNumber(numeric.toFixed(decimals)) + suffix
      document.body.appendChild(tempSpan)

      // Set the width to the maximum of the current target width or original width
      const targetWidth = Math.max(
        parseInt(containerRef.current.dataset.originalWidth),
        tempSpan.offsetWidth,
      )
      containerRef.current.style.minWidth = `${targetWidth}px`

      document.body.removeChild(tempSpan)
    }

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
        setIsAnimationComplete(true)
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

  // Format number with thousand separators (using spaces)
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  // Only show suffix when animation is complete
  const formattedValue = formatNumber(displayValue)
  const suffix = isAnimationComplete ? targetValueRef.current?.suffix || "" : ""

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ display: "inline-block" }}
    >
      {formattedValue}
      {suffix}
    </span>
  )
}
