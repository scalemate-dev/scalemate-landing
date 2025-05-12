import { NextResponse } from "next/server"

/**
 * GET handler for fetching pricing plans
 */
export async function GET() {
  try {
    const response = await fetch(
      "https://api.scalemate.co/api/v1/payment/billings/plans",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InR5cGUiOiJtYWluIn0sInN1YiI6MiwidG9rZW5fdmVyc2lvbiI6MSwiZXhwIjo0OTAwMTU2MDg2fQ.moKHNFsKyHMxG8FWaYNptkA19w5hRCviJ8TYs5yFCyM",
        },
      },
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const plans = await response.json()
    return NextResponse.json({ plans }, { status: 200 })
  } catch (error) {
    console.error("Error fetching pricing plans:", error)
    return NextResponse.json(
      { error: "Failed to fetch pricing plans" },
      { status: 500 },
    )
  }
}
