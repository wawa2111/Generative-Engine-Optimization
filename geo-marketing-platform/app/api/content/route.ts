import { type NextRequest, NextResponse } from "next/server"
import { saveContent, getContent } from "@/lib/neon"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const campaignId = searchParams.get("campaignId")

    if (!campaignId) {
      return NextResponse.json({ success: false, error: "Campaign ID is required" }, { status: 400 })
    }

    const content = await getContent(Number.parseInt(campaignId))

    return NextResponse.json({
      success: true,
      content,
    })
  } catch (error) {
    console.error("Error fetching content:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch content" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const contentData = {
      campaignId: body.campaignId || 1, // Default to first campaign
      title: body.title || "Untitled Content",
      contentType: body.contentType,
      content: body.content,
      seoScore: body.seoScore || 0,
      targetKeywords: body.targetKeywords || [],
      tone: body.tone,
      audience: body.audience,
      wordCount: body.wordCount || 0,
      readingTime: body.readingTime || 0,
      aiModel: body.aiModel || "gpt-4o",
      prompt: body.prompt || "",
    }

    const result = await saveContent(contentData)

    return NextResponse.json({
      success: true,
      content: result,
    })
  } catch (error) {
    console.error("Error saving content:", error)
    return NextResponse.json({ success: false, error: "Failed to save content" }, { status: 500 })
  }
}
