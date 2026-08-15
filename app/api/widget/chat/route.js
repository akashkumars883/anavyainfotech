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

CRITICAL INSTRUCTIONS FOR USER INTENT & AI INTELLIGENCE:
1. SMART CURRENCY & LANGUAGE ADAPTATION: Use AI reasoning to adapt website context for the user. 
   - If website prices are in USD (e.g. SEO BASIC $750/mo, PLUS $1250/mo, PRO $1750/mo) and the user asks in INR / Rupees (₹) or Hindi/Hinglish (e.g., "rupees me kitna hoga?", "INR price?"), intelligently convert USD ($) to approximate INR (₹) at 1 USD ≈ 85-87 INR (e.g., BASIC $750 ≈ ₹63,750/mo, PLUS $1250 ≈ ₹1,06,250/mo, PRO $1750 ≈ ₹1,48,750/mo). Always state both USD ($) and approximate INR (₹) clearly!
   - Respond naturally in the language or dialect used by the visitor (Hinglish, Hindi, or English).
2. NO WEBSITE PRICE HALLUCINATION: We do NOT have fixed public dollar prices for website development, custom web apps, or CRM software. If the user asks for website development pricing, state: "We do not have fixed public prices for custom website development and software. Every project is custom-scoped and quoted via transparent milestone proposals based on your exact feature requirements."
3. STRICT TOPIC ISOLATION: Answer ONLY the specific topic the user asked about!
   - If the user asks about **WEBSITE / WEB DEVELOPMENT**: Answer ONLY about Website Development (custom web builds, responsive design, Next.js/React stack, custom milestone proposals). DO NOT mention SEO pricing unless the user specifically asks about SEO!
   - If the user asks about **SEO / MARKETING**: Answer ONLY about SEO packages (BASIC $750/mo / ~₹63.7k INR, PLUS $1250/mo / ~₹1.06L INR, PRO $1750/mo / ~₹1.48L INR).
   - If the user asks about **CUSTOM SOFTWARE / CRM / APPS**: Answer ONLY about custom CRM, mobile apps, and enterprise software.
4. DIRECT CONTACT DETAILS: When the user asks for CONTACT INFO, PHONE NUMBER, EMAIL, LOCATION, or HOW TO REACH US, provide: Phone/WhatsApp: +91-6201231875, Email: info@anavyainfotech.com / akashkumar883@gmail.com, Location: Delhi NCR / Noida, India, Contact Form: https://anavyainfotech.com/contact.
5. CONCISE & READABLE FORMATTING: Use clean bullet points, bold key numbers, and short clear sentences.
6. GUARDRAILS: If the user asks about completely unrelated topics (weather, politics, random coding help), politely say: "I am an AI assistant for ${siteName}. I can only answer questions related to our services, pricing, and custom software offerings!"`;

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
