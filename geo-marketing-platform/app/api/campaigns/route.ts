import { type NextRequest, NextResponse } from "next/server"
import { getCampaigns, sql } from "@/lib/neon"

export async function GET(request: NextRequest) {
  try {
    // In a real app, get userId from authentication
    const userId = 1 // Mock user ID

    const campaigns = await getCampaigns(userId)

    return NextResponse.json({
      success: true,
      campaigns,
    })
  } catch (error) {
    console.error("Error fetching campaigns:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch campaigns" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, targetKeywords, industry, targetAudience, goals } = body

    // In a real app, get userId from authentication
    const userId = 1 // Mock user ID

    const result = await sql`
      INSERT INTO campaigns (user_id, name, description, target_keywords, industry, target_audience, goals)
      VALUES (${userId}, ${name}, ${description}, ${targetKeywords}, ${industry}, ${targetAudience}, ${goals})
      RETURNING *
    `

    return NextResponse.json({
      success: true,
      campaign: result[0],
    })
  } catch (error) {
    console.error("Error creating campaign:", error)
    return NextResponse.json({ success: false, error: "Failed to create campaign" }, { status: 500 })
  }
}
