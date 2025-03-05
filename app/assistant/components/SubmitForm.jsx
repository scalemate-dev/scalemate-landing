"use client"
import React, { useState } from "react"
import styles from "../page.module.scss"
import Input from "@/components/elements/Input/Input"
import Button from "@/components/elements/Button/Button"
import { validateEmail } from "@/helpers/emails"

export default function SubmitForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendForm = async (data) => {
    await fetch("https://submit-form.com/CcXQWUTEJ", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // await validateEmail(email)
      // await sendForm({ email })
      await trackTTFormSubmit(email)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.heroForm}>
      <Input
        placeholder="Enter your business email"
        className={styles.heroFormInput}
        darkTheme
        value={email}
        error={error}
        onChange={setEmail}
      />
      <Button submit loading={isLoading}>
        Get early access
      </Button>
    </form>
  )
}

export const trackTTFormSubmit = async (email) => {
  // Hash the email using SHA-256 with Web Crypto API
  const encoder = new TextEncoder()
  const data = encoder.encode(email.toLowerCase().trim())
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)

  // Convert the hash buffer to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashedEmail = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")

  // Push to dataLayer for GTM to pick up and send to TikTok Pixel
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ ecommerce: null }) // Clear previous ecommerce object
  window.dataLayer.push({
    event: "ttq_form_submit", // Custom event name for GTM trigger
    tiktok_event: "SubmitForm", // TikTok standard event name
    user_data: {
      sha256_email_address: hashedEmail,
    },
    event_id: generateUniqueEventId(), // Optional: generate unique ID for deduplication
    tt_content_type: "product",
  })
}

// Helper function to generate a unique event ID
function generateUniqueEventId() {
  return "tt_" + Date.now() + "_" + Math.random().toString(36).substring(2, 10)
}
