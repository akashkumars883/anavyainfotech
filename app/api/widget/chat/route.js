import { NextResponse } from "next/server";
import { getSiteKnowledge, extractRelevantContext } from "@/lib/aiVectorStore";

export const dynamic = "force-dynamic";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: CORS_HEADERS });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { siteId, message, history, visitorName } = body;

    if (!siteId || !message) {
      return NextResponse.json(
        { error: "siteId and message are required" },
        { status: 400, headers: CORS_HEADERS }
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
    const isAnavya = !siteId || siteId.includes("anavya") || siteId === "demo";

    // 3. Analyze website content to determine Persona (Sales vs Informative)
    const rawPagesText = knowledge.pages.map(p => (p.title || "") + " " + (p.content || "")).join(" ").toLowerCase();
    const isEcommerceOrSales = /price|buy|pricing|order|cart|checkout|package|hire|quote|consultation|deal|book/i.test(rawPagesText);
    const siteType = isEcommerceOrSales ? "SALES & GROWTH CONVERSION" : "INFORMATIVE & KNOWLEDGE HELPDESK";

    // 4. Prepare System Prompt (Strict Laser-Focused 1-2 Line Answers + Lead Capture Encouragement)
    let systemPrompt = "";
    if (isAnavya) {
      systemPrompt = `You are Alex, an expert AI representative at ${siteName}. ${visitorName ? `Talking to ${visitorName}.` : ''}

STRICT ANSWER RULES:
1. MAX 1 TO 2 SENTENCES ONLY: Give ONLY the exact direct answer to what the user asked. Keep total answer under 30 words.
2. NO markdown tables, NO long bullet lists, NO big paragraphs.
3. Answer strictly from Knowledge Catalog below.
4. LEAD CAPTURE GUIDELINE: If the user asks about pricing, packages, custom solutions, quotes, hiring, or shows interest in working with us, finish your 1-sentence answer with a polite invitation: "Would you like our team to get in touch with you? Please share your name & contact details!"

VERIFIED KNOWLEDGE CATALOG FOR ${siteName.toUpperCase()}:
=== KNOWLEDGE START ===
${contextText}
=== KNOWLEDGE END ===

EXACT PRICES FOR ANAVYA:
- Website: Starter ₹7,999, Business ₹14,999, E-Commerce ₹29,999.
- SEO: Basic ₹9,999/mo, Plus ₹19,999/mo, Pro ₹29,999/mo.
- Contact: Call/WhatsApp +91-6201231875.

Language: Match user in Hinglish, Hindi, or English seamlessly.`;
    } else {
      systemPrompt = `You are an AI representative for ${siteName}. ${visitorName ? `Talking to ${visitorName}.` : ''}

STRICT ANSWER RULES:
1. MAX 1 TO 2 SENTENCES ONLY: Answer ONLY the exact question asked. Keep total answer under 30 words.
2. NO tables, NO bullet lists, NO long text.
3. Talk ONLY about ${siteName} using Knowledge Catalog below.
4. If user asks about pricing, hiring, or services, invite them to share their name and phone/email for a personal consultation.

=== KNOWLEDGE CATALOG FOR ${siteName.toUpperCase()} ===
${contextText}
=== END KNOWLEDGE CATALOG ===`;
    }

    // 5. Build OpenAI Multi-Turn Messages Array with History Context
    const formattedMessages = [{ role: "system", content: systemPrompt }];
    if (Array.isArray(history) && history.length > 0) {
      history.forEach(h => {
        if (h.role && h.content) {
          formattedMessages.push({ role: h.role === 'assistant' ? 'assistant' : 'user', content: h.content });
        }
      });
    } else {
      formattedMessages.push({ role: "user", content: message });
    }

    // 6. Call GROQ API (Primary fast AI provider from .env.local)
    const groqApiKey = process.env.GROQ_API_KEY;
    if (groqApiKey) {
      const groqModels = ["groq/compound", "groq/compound-mini", "qwen/qwen3.6-27b", "qwen/qwen3.8-27b", "allam-2-7b"];
      for (const groqModel of groqModels) {
        try {
          const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${groqApiKey.trim()}`,
            },
            body: JSON.stringify({
              model: groqModel,
              messages: formattedMessages,
              temperature: 0.1,
              max_tokens: 65,
            }),
          });

          if (groqRes.ok) {
            const data = await groqRes.json();
            const aiMessage = data.choices?.[0]?.message?.content;
            if (aiMessage) {
              return NextResponse.json(
                {
                  response: aiMessage,
                  siteUrl: knowledge.siteUrl,
                  provider: `Groq (${groqModel})`,
                },
                { headers: CORS_HEADERS }
              );
            }
          } else {
            console.warn(`Groq model ${groqModel} warning:`, await groqRes.text());
          }
        } catch (e) {
          console.warn(`Groq fetch error on ${groqModel}:`, e.message);
        }
      }
    }

    // 5. Primary AI Generation via Google Gemini API (gemini-2.0-flash / gemini-1.5-flash)
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (geminiApiKey) {
      const modelsToTry = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
      for (const modelName of modelsToTry) {
        try {
          const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiApiKey.trim()}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      { text: `${systemPrompt}\n\nVisitor Question: ${message}` },
                    ],
                  },
                ],
                generationConfig: {
                  temperature: 0.7,
                  maxOutputTokens: 600,
                },
              }),
            }
          );

          if (geminiRes.ok) {
            const data = await geminiRes.json();
            const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (aiMessage) {
              return NextResponse.json(
                {
                  response: aiMessage,
                  siteUrl: knowledge.siteUrl,
                  provider: `Google Gemini (${modelName})`,
                },
                { headers: CORS_HEADERS }
              );
            }
          } else {
            console.warn(`Gemini API model ${modelName} notice:`, await geminiRes.text());
          }
        } catch (e) {
          console.warn(`Gemini fetch error on ${modelName}:`, e.message);
        }
      }
    }

    // 6. Dynamic RAG Intelligence Fallback
    let fallbackAnswer = "";
    if (contextText && contextText.length > 50) {
      // Intelligently parse matching snippet based on user question
      const cleanSnippet = contextText.split("\n").filter(l => l.length > 20).slice(0, 4).join("\n• ");
      fallbackAnswer = `Hello! Regarding your inquiry on ${siteName}:\n\n• ${cleanSnippet}\n\nWould you like to discuss your specific requirements with our team?`;
    } else {
      fallbackAnswer = `Hello! Thank you for inquiring with ${siteName}. How can I assist you with our services, pricing, or custom solutions today?`;
    }

    return NextResponse.json(
      {
        response: fallbackAnswer,
        siteUrl: knowledge.siteUrl,
      },
      { headers: CORS_HEADERS }
    );
  } catch (err) {
    console.error("Widget Chat API Error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process chat query" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
