"use client"
import { getGAClientId } from "@/helpers/getGAClientId"
import React, { useState } from "react"
import styles from "../page.module.scss"
import Input from "@/components/elements/Input/Input"
import Button from "@/components/elements/Button/Button"
import { validateEmail } from "@/helpers/emails"
import { IconCheck } from "@tabler/icons-react"

export default function SubmitForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
      await validateEmail(email)
      // await sendForm({ email })
      await trackTTFormSubmit(email)
      setIsSuccess(true)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  const handleChange = (value) => {
    setEmail(value)
    setError("")
  }

  return (
    <form onSubmit={handleSubmit} className={styles.heroForm}>
      <Input
        placeholder="Enter your business email"
        className={styles.heroFormInput}
        darkTheme
        value={email}
        error={error}
        onChange={handleChange}
      />
      <Button submit loading={isLoading} disabled={isSuccess}>
        {isSuccess ? (
          <>
            Done
            <IconCheck size={20} />
          </>
        ) : (
          "Get early access"
        )}
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

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ ecommerce: null }) // Clear previous ecommerce object
  window.dataLayer.push({
    event: "ttq_form_submit", // Custom event name for GTM trigger
    tiktok_event: "SubmitForm", // TikTok standard event name
    email_hashed: hashedEmail, // Properly formatted for TikTok
    tt_external_id: getGAClientId(),
    value: 20,
    currency: "USD",
    ecommerce: {
      value: 20,
      currency: "USD",
      items: [
        {
          item_id: "waitlist_request",
          item_name: "Waitlist Request",
          price: 20,
          quantity: 1,
        },
      ],
    },
  })
}
