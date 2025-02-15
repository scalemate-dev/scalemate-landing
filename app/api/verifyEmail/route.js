import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get("email")
  const secret = "1ADBMslZqtDCKWAamEuHe"

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 })
  }

  try {
    const remoteResponse = await fetch(
      `https://apps.emaillistverify.com/api/verifyEmail?secret=${secret}&email=${encodeURIComponent(
        email,
      )}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )

    const clonedResponse = remoteResponse.clone()
    const responseText = await clonedResponse.text()

    if (remoteResponse.status !== 200) {
      console.warn(
        `Email verification skipped: received HTTP ${remoteResponse.status} for email ${email}.`,
      )
      return NextResponse.json({ skip: true }, { status: 200 })
    }

    return NextResponse.json({ email_status: responseText }, { status: 200 })
  } catch (error) {
    console.warn(
      `Email verification API error: ${error.message}. Skipping email check for ${email}.`,
    )
    return NextResponse.json({ skip: true }, { status: 200 })
  }
}
