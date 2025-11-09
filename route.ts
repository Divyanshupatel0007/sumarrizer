import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { text, length } = await request.json()

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return Response.json({ error: "Invalid input: text is required" }, { status: 400 })
    }

    if (!["short", "medium", "long"].includes(length)) {
      return Response.json({ error: "Invalid length: must be short, medium, or long" }, { status: 400 })
    }

    // Length constraints for different summary types
    const lengthConstraints = {
      short: "2-3 sentences",
      medium: "1 paragraph (3-5 sentences)",
      long: "2-3 paragraphs (5-8 sentences)",
    }

    const constraint = lengthConstraints[length as keyof typeof lengthConstraints]

    const { text: summary } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: `Please summarize the following text in exactly ${constraint}. Be clear, concise, and capture the main ideas:

${text}`,
      temperature: 0.7,
      maxTokens: 500,
    })

    return Response.json({ summary })
  } catch (error) {
    console.error("[v0] Summarization error:", error)
    return Response.json({ error: "Failed to summarize text. Please try again." }, { status: 500 })
  }
}
