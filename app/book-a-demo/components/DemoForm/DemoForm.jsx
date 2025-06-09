"use client"

import { validateEmail } from "@/helpers/emails"
import WaitList from "@/components/home/WaitList/WaitList"

import { useState } from "react"
import Image from "next/image"
import Input from "@/components/elements/Input/Input"
import Select from "@/components/elements/Select/Select"
import Button from "@/components/elements/Button/Button"
import styles from "./DemoForm.module.scss"
import demoLinearBackground from "@/assets/icons/demo-linear-background.svg"
import demoLinearBackground2 from "@/assets/icons/demo-linear-background-2.svg"
import { trackDemoFormSubmit } from "@/helpers/trackGTM"
import { useSearchParams } from "next/navigation"

const DemoForm = () => {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan")

  console.log(plan)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobPosition: "",
    companyName: "",
    monthlyBudget: "",
    message: "",
    error: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [formSent, setFormSent] = useState(false)

  const jobPositionOptions = [
    "C-level",
    "Team lead / Head (management)",
    "User acquisition manager",
    "Creative designer",
    "Other",
  ]

  const monthlyBudgetOptions = [
    "Less than $20,000",
    "$20,001 - $50,000",
    "$50,001 - $100,000",
    "$100,001 - $500,000",
    "Over $500,000",
    "Prefer not to answer",
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await validateEmail(formData.email)
      if (plan === "custom") {
        sendForm(formData)
      } else {
        redirectToSignup(formData.email, formData.name)
      }
      setFormSent(true)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const redirectToSignup = (email, name) => {
    const [firstName = "", lastName = ""] = name.split(" ")
    window.location.href = `https://app.scalemate.co/create-account?email=${email}&firstName=${firstName}&lastName=${lastName}`
  }

  const sendForm = async (data) => {
    await fetch("https://submit-form.com/S3mkBrhnv", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    trackDemoFormSubmit(data)
  }

  const handleChange = (field) => (value) => {
    setError("")
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className={styles.demo}>
      <Image
        className={styles.linearBackground1}
        src={demoLinearBackground}
        alt=""
        width={500}
        height={500}
        priority
      />
      <Image
        className={styles.linearBackground2}
        src={demoLinearBackground2}
        alt=""
        width={500}
        height={500}
      />

      <div className={styles.demoForm}>
        <div className={styles.demoHero}>
          <h1 className={styles.demoTitle}>Get started today</h1>
          <p className={styles.demoDescription}>
            Join the community of advertisers to learn how you can triple-scale
            your marketing with Scalemate
          </p>
        </div>

        <form className={styles.demoContainer} onSubmit={handleSubmit}>
          <Input
            required
            label="Name"
            name="name"
            type="text"
            placeholder="Enter youe name"
            value={formData.name}
            onChange={handleChange("name")}
          />
          <Input
            required
            error={error}
            label="Work Email"
            name="email"
            type="email"
            placeholder="Enter your business email"
            value={formData.email}
            onChange={handleChange("email")}
          />
          <Input
            label="Company name"
            name="company-name"
            type="text"
            placeholder="Your company name"
            value={formData.companyName}
            onChange={handleChange("companyName")}
          />
          <Select
            label="Job position"
            value={formData.jobPosition}
            onChange={handleChange("jobPosition")}
            placeholder="Your job position"
            options={jobPositionOptions}
          />

          <Select
            label="Monthly ad budget"
            value={formData.monthlyBudget}
            onChange={handleChange("monthlyBudget")}
            placeholder="Your avarage ad spend"
            options={monthlyBudgetOptions}
          />
          <Input
            textarea
            label="Message"
            name="message"
            placeholder="Anything you'd like to add?"
            value={formData.message}
            onChange={handleChange("message")}
          />
          <Button
            color="accent"
            outline={formSent}
            wide
            submit
            loading={loading}
            disabled={formSent}
          >
            {formSent ? "Done 👍" : "Try for free 🚀"}
          </Button>
          <p className={styles.error}>{error}</p>
        </form>
      </div>
      <WaitList noButton />
    </div>
  )
}

export default DemoForm
