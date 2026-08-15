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

    // 3. Prepare Intent-Aware System Prompt Guardrails
    const systemPrompt = `You are the official AI Assistant for ${siteName}.
Your objective is to understand user buyer intent and answer user questions politely, comprehensively, and directly using the provided website context below.

=== WEBSITE CONTEXT START ===
${contextText}
=== WEBSITE CONTEXT END ===

CRITICAL INSTRUCTIONS FOR USER INTENT:
1. DIRECT PRICING ANSWERS: When the user asks about PRICING, COST, RATES, or PLANS (e.g., "what is the price?", "SEO pricing?", "cost?"), ALWAYS state the exact pricing numbers and figures directly from the context first! (For example, SEO Plans: BASIC at $750/mo, PLUS at $1250/mo, PRO at $1750/mo). NEVER just tell the user to go visit a page without giving them the actual prices first.
2. DIRECT CONTACT DETAILS: When the user asks for CONTACT INFO, PHONE NUMBER, EMAIL, LOCATION, or HOW TO REACH US (e.g., "contact info", "phone number?", "email?", "where are you located?"), ALWAYS provide the direct details: Phone/WhatsApp: +91-6201231875, Email: info@anavyainfotech.com / akashkumar883@gmail.com, Location: Delhi NCR / Noida, Uttar Pradesh, India, Contact Page: https://anavyainfotech.com/contact.
3. CUSTOM SOFTWARE & CRM INTENT: For custom CRM, mobile apps, or enterprise software, explain that development is quoted via fixed-price milestone proposals and invite them to schedule a free technical consultation.
4. CONCISE & READABLE FORMATTING: Use clean bullet points, bold key numbers, and short clear sentences.
5. GUARDRAILS: If the user asks about completely unrelated topics (weather, politics, random coding help), politely say: "I am an AI assistant for ${siteName}. I can only answer questions related to our services, pricing, and custom software offerings!"`;

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
