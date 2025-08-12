import { type NextRequest, NextResponse } from "next/server"
import { saveKeywords, getKeywords } from "@/lib/neon"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { searchTerm, campaignId = 1 } = body

    if (!searchTerm) {
      return NextResponse.json({ error: "Search term is required" }, { status: 400 })
    }

    // Generate keyword suggestions (same logic as before)
    const keywords = await generateKeywordSuggestions(searchTerm)

    // Save keywords to database
    await saveKeywords(campaignId, keywords)

    return NextResponse.json({
      keywords,
      searchTerm,
      totalResults: keywords.length,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Keyword research error:", error)
    return NextResponse.json({ error: "Failed to research keywords" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const campaignId = searchParams.get("campaignId")

    if (!campaignId) {
      return NextResponse.json({ success: false, error: "Campaign ID is required" }, { status: 400 })
    }

    const keywords = await getKeywords(Number.parseInt(campaignId))

    return NextResponse.json({
      success: true,
      keywords,
    })
  } catch (error) {
    console.error("Error fetching keywords:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch keywords" }, { status: 500 })
  }
}

async function generateKeywordSuggestions(searchTerm: string) {
  const variations = [
    `${searchTerm} strategy`,
    `best ${searchTerm} tools`,
    `${searchTerm} tips`,
    `${searchTerm} guide`,
    `${searchTerm} examples`,
    `${searchTerm} software`,
    `${searchTerm} services`,
    `${searchTerm} agency`,
    `${searchTerm} consultant`,
    `${searchTerm} course`,
    `${searchTerm} training`,
    `${searchTerm} certification`,
    `how to ${searchTerm}`,
    `${searchTerm} best practices`,
    `${searchTerm} trends`,
  ]

  return variations.map((keyword) => ({
    keyword,
    volume: Math.floor(Math.random() * 50000) + 1000,
    difficulty: Math.floor(Math.random() * 100),
    cpc: Number.parseFloat((Math.random() * 10 + 0.5).toFixed(2)),
    trend: ["up", "down", "stable"][Math.floor(Math.random() * 3)],
    competition: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
    opportunity: Math.floor(Math.random() * 40) + 60,
  }))
}
