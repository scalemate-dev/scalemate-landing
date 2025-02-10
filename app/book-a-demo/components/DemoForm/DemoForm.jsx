"use client"
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

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobPosition: "",
    companyName: "",
    monthlyBudget: "",
    message: "",
  })
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
      // Implement your form submission logic here
      await sendForm(formData)
      setFormSent(true)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  const sendForm = async (data) => {
    // await fetch("https://submit-form.com/S3mkBrhnv", {
    //   // info@scalemate.co oauth
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    trackDemoFormSubmit(data)
  }

  const handleChange = (field) => (value) => {
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
            placeholder="Jack Divinson"
            value={formData.name}
            onChange={handleChange("name")}
          />
          <Input
            required
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange("email")}
          />
          <Select
            label="Job position"
            value={formData.jobPosition}
            onChange={handleChange("jobPosition")}
            placeholder="Select your position"
            options={jobPositionOptions}
          />
          <Input
            label="Company Name"
            name="company-name"
            type="text"
            placeholder="Scalemate"
            value={formData.companyName}
            onChange={handleChange("companyName")}
          />
          <Select
            label="Monthly ad budget"
            value={formData.monthlyBudget}
            onChange={handleChange("monthlyBudget")}
            placeholder="Select your ad monthly budget"
            options={monthlyBudgetOptions}
          />
          <Input
            textarea
            label="Message"
            name="message"
            placeholder="Your message here.."
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
            {formSent ? "All Set! We'll Reach Out Soon 👍" : "Book a demo"}
          </Button>
        </form>
      </div>
      <WaitList noButton />
    </div>
  )
}

export default DemoForm
