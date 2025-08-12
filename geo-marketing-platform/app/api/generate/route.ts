import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { contentType, topic, targetKeywords, tone, length, audience, purpose } = body

    if (!contentType || !topic) {
      return NextResponse.json({ error: "Content type and topic are required" }, { status: 400 })
    }

    // Build the prompt based on content type and parameters
    const prompt = buildPrompt({
      contentType,
      topic,
      targetKeywords,
      tone,
      length,
      audience,
      purpose,
    })

    // Generate content using AI SDK
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      system: `You are an expert marketing content creator specializing in SEO-optimized content. 
               Create engaging, high-quality content that ranks well in search engines while 
               providing genuine value to readers. Focus on natural keyword integration and 
               compelling storytelling.`,
    })

    // Calculate SEO score (simplified scoring algorithm)
    const seoScore = calculateSEOScore(text, targetKeywords)

    // Extract keywords from generated content
    const extractedKeywords = extractKeywords(text)

    return NextResponse.json({
      content: text,
      seoScore,
      keywords: extractedKeywords,
      metadata: {
        wordCount: text.split(" ").length,
        readingTime: Math.ceil(text.split(" ").length / 200),
        contentType,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Content generation error:", error)
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 })
  }
}

function buildPrompt(params: any) {
  const { contentType, topic, targetKeywords, tone, length, audience, purpose } = params

  let prompt = `Create ${contentType} content about "${topic}".`

  if (targetKeywords) {
    prompt += ` Include these keywords naturally: ${targetKeywords}.`
  }

  if (tone) {
    prompt += ` Use a ${tone} tone.`
  }

  if (length) {
    const lengthMap = {
      short: "100-300 words",
      medium: "300-800 words",
      long: "800+ words",
    }
    prompt += ` Target length: ${lengthMap[length as keyof typeof lengthMap] || "medium length"}.`
  }

  if (audience) {
    prompt += ` Target audience: ${audience}.`
  }

  if (purpose) {
    prompt += ` Content purpose: ${purpose}.`
  }

  prompt += ` Ensure the content is SEO-optimized, engaging, and provides real value to readers.`

  return prompt
}

function calculateSEOScore(content: string, keywords: string): number {
  let score = 60 // Base score

  const wordCount = content.split(" ").length
  const sentences = content.split(/[.!?]+/).length

  // Word count scoring
  if (wordCount >= 300 && wordCount <= 2000) score += 10
  if (wordCount >= 500) score += 5

  // Readability scoring
  const avgWordsPerSentence = wordCount / sentences
  if (avgWordsPerSentence >= 10 && avgWordsPerSentence <= 20) score += 10

  // Keyword density scoring
  if (keywords) {
    const keywordList = keywords
      .toLowerCase()
      .split(",")
      .map((k) => k.trim())
    const contentLower = content.toLowerCase()

    keywordList.forEach((keyword) => {
      const occurrences = (contentLower.match(new RegExp(keyword, "g")) || []).length
      const density = (occurrences / wordCount) * 100

      if (density >= 0.5 && density <= 2.5) score += 5
    })
  }

  // Structure scoring
  if (content.includes("#")) score += 5 // Has headings
  if (content.includes("- ") || content.includes("1. ")) score += 5 // Has lists

  return Math.min(score, 100)
}

function extractKeywords(content: string): string[] {
  // Simple keyword extraction (in production, use more sophisticated NLP)
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3)

  const wordFreq: { [key: string]: number } = {}
  words.forEach((word) => {
    wordFreq[word] = (wordFreq[word] || 0) + 1
  })

  return Object.entries(wordFreq)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word)
}
