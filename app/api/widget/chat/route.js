import { NextResponse } from "next/server";
import { getSiteKnowledge, extractRelevantContext } from "@/lib/aiVectorStore";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { siteId, message } = body;

    if (!siteId || !message) {
      return NextResponse.json(
        { error: "siteId and message are required" },
        { status: 400 }
      );
    }

    // 1. Fetch site knowledge
    const knowledge = await getSiteKnowledge(siteId);

    if (!knowledge || !knowledge.pages || knowledge.pages.length === 0) {
      return NextResponse.json({
        response: `Hello! I am the AI assistant for ${siteId}. How can I help you regarding our services today?`,
        siteUrl: siteId,
      });
    }

    // 2. Extract matching context
    const contextText = extractRelevantContext(knowledge, message);
    const siteName = knowledge.siteUrl || siteId;

    // 3. Prepare System Prompt Guardrails
    const systemPrompt = `You are the official AI Assistant for ${siteName}.
Your objective is to answer user questions politely, accurately, and STRICTLY using only the provided website context below.

=== WEBSITE CONTEXT START ===
${contextText}
=== WEBSITE CONTEXT END ===

RULES TO FOLLOW:
1. Answer the user's question using ONLY the provided website context.
2. If the user asks something NOT covered by the website context or asks about general unrelated topics (e.g. coding help, weather, general trivia, competitor info), reply politely:
"I can only assist with questions regarding ${siteName} services and offerings. Please let me know how I can help you with our website services!"
3. Keep your answers concise, helpful, and professional.`;

    // 4. Call GROQ API (Primary fast AI provider from .env.local)
    const groqApiKey = process.env.GROQ_API_KEY;
    if (groqApiKey) {
      try {
        const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqApiKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: message },
            ],
            temperature: 0.2,
            max_tokens: 500,
          }),
        });

        if (groqRes.ok) {
          const data = await groqRes.json();
          const aiMessage = data.choices?.[0]?.message?.content;
          if (aiMessage) {
            return NextResponse.json({
              response: aiMessage,
              siteUrl: knowledge.siteUrl,
              provider: "Groq (Llama-3.3-70B)",
            });
          }
        } else {
          console.warn("Groq API warning:", await groqRes.text());
        }
      } catch (e) {
        console.warn("Groq fetch error:", e.message);
      }
    }

    // 5. Fallback to Gemini API if available
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (geminiApiKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    { text: systemPrompt + "\n\nUser Question: " + message },
                  ],
                },
              ],
            }),
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiMessage) {
            return NextResponse.json({
              response: aiMessage,
              siteUrl: knowledge.siteUrl,
              provider: "Google Gemini 1.5",
            });
          }
        }
      } catch (e) {
        console.warn("Gemini fetch error:", e.message);
      }
    }

    // Fallback AI context response generator (if no API key set)
    let fallbackAnswer = `Thank you for reaching out to ${siteName}! `;
    if (contextText && contextText.length > 50) {
      fallbackAnswer += `Based on our website: ${knowledge.pages[0]?.title || siteName} - ${knowledge.pages[0]?.text.slice(0, 200)}... How can we assist you further?`;
    } else {
      fallbackAnswer += `I am trained strictly on ${siteName} services. Please ask any question about our offerings!`;
    }

    return NextResponse.json({
      response: fallbackAnswer,
      siteUrl: knowledge.siteUrl,
    });
  } catch (err) {
    console.error("Widget Chat API Error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process chat query" },
      { status: 500 }
    );
  }
}
