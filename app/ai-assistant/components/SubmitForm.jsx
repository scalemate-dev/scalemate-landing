"use client"
import { getGAClientId } from "@/helpers/getGAClientId"
import React, { useState, Suspense } from "react"
import styles from "../page.module.scss"
import Input from "@/components/elements/Input/Input"
import Button from "@/components/elements/Button/Button"
import { validateEmail } from "@/helpers/emails"
import { IconCheck } from "@tabler/icons-react"
import { hashString } from "@/helpers/hashString"
import { useSearchParams } from "next/navigation"

// Create a component that safely uses useSearchParams
function FormWithSearchParams({
  onSubmit,
  email,
  error,
  isLoading,
  isSuccess,
  handleChange,
}) {
  const searchParams = useSearchParams()
  console.log("searchParams", searchParams.get("skip_send"))

  const handleSubmit = async (e) => {
    e.preventDefault()
    await onSubmit(searchParams)
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
          "Try for free"
        )}
      </Button>
    </form>
  )
}

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

  const handleSubmit = async (searchParams) => {
    setIsLoading(true)
    try {
      await validateEmail(email)

      if (!searchParams.get("skip_send")) await sendForm({ email })

      await trackTTFormSubmit(email)
      setIsSuccess(true)
      setIsLoading(false)
      redirectToSignup(email)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  const redirectToSignup = (email) => {
    window.location.href = `https://app.scalemate.co/create-account?email=${email}`
  }

  const handleChange = (value) => {
    setEmail(value)
    setError("")
  }

  return (
    <Suspense fallback={<div className={styles.heroForm}>Loading...</div>}>
      <FormWithSearchParams
        onSubmit={handleSubmit}
        email={email}
        error={error}
        isLoading={isLoading}
        isSuccess={isSuccess}
        handleChange={handleChange}
      />
    </Suspense>
  )
}

export const trackTTFormSubmit = async (email) => {
  const normalizedEmail = email.toLowerCase().trim()
  const hashedEmail = await hashString(normalizedEmail)
  const hashedClientId = await hashString(getGAClientId())

  window.dataLayer = window.dataLayer || []

  console.log("trackTTFormSubmit", {
    email: hashedEmail,
    clientId: hashedClientId,
  })

  dataLayer.push({ ecommerce: null })
  dataLayer.push({
    event: "SubmitForm",
    tt_external_id: hashedClientId,
    user_data: {
      sha256_email_address: hashedEmail,
      external_id: hashedClientId,
    },
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
  })
}
