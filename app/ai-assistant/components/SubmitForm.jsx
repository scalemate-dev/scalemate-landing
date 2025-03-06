"use client"
import { getGAClientId } from "@/helpers/getGAClientId"
import React, { useState } from "react"
import styles from "../page.module.scss"
import Input from "@/components/elements/Input/Input"
import Button from "@/components/elements/Button/Button"
import { validateEmail } from "@/helpers/emails"
import { IconCheck } from "@tabler/icons-react"
import { hashString } from "@/helpers/hashString"
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
      await sendForm({ email })
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
  const normalizedEmail = email.toLowerCase().trim()
  const hashedEmail = await hashString(normalizedEmail)
  const hashedClientId = await hashString(getGAClientId())

  window.dataLayer = window.dataLayer || []

  dataLayer.push({ ecommerce: null })
  dataLayer.push({
    event: "submit_early_access_form",
    user_data: { sha256_email_address: hashedEmail },
    ecommerce: {
      value: 20,
      currency: "USD",
      ecommerce: {
        value: 20,
        currency: "USD",
        items: [
          {
            item_id: "waitlist_request",
            item_name: "AI Assistant waitlist request",
            price: 20,
            quantity: 1,
          },
        ],
      },
    },
    tt_external_id: hashedClientId,
  })
}
