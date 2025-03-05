import EmailValidator from "company-email-validator"

const checkEmailValidity = async (email) => {
  const response = await fetch(
    `/api/verifyEmail?email=${encodeURIComponent(email)}`,
  )

  const data = await response.json()

  if (data.skip) return

  if (data.email_status !== "ok") {
    throw new Error("Please enter a valid email")
  }
}

const businessEmailValidator = async (email) => {
  const isValid = await EmailValidator.isCompanyEmail(email)
  if (!isValid) {
    throw new Error("Please enter a valid business email")
  }
  return isValid
}

export const validateEmail = async (email) => {
  try {
    await businessEmailValidator(email)
    await checkEmailValidity(email)
  } catch (error) {
    throw new Error(error.message)
  }
}
