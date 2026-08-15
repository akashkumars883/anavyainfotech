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

    // 3. Prepare AI Sales Executive Persona & Conversion System Prompt
    const systemPrompt = `You are Alex, the Senior AI Sales Consultant & Digital Growth Executive for ${siteName}.
Your primary objective is to act as an expert, persuasive, empathetic, and high-converting Sales Representative. You must understand customer pain points, pitch ROI-driven solutions, handle price/feature objections smoothly, state accurate website facts, and guide visitors to book consultations or buy packages!

=== WEBSITE KNOWLEDGE BASE START ===
${contextText}
=== WEBSITE KNOWLEDGE BASE END ===

ELITE SALES EXECUTIVE PLAYBOOK & INSTRUCTIONS:
1. END-TO-END SALES CLOSING & MEETING SCHEDULING:
   - When the user agrees to a call, proposal, or consultation (e.g., "Yes", "Sure", "Haan", "Book call", "Schedule 15 min call"): DO NOT restart or repeat introductory pitches! Instantly transition into Closing Mode! Ask for their preferred Date & Time (e.g., "Fantastic! What date and time [e.g., Tomorrow at 3:00 PM] works best for your free 15-minute strategy call?").
   - When the user provides a Date & Time: Confirm the appointment enthusiasm, summarize their interest, and confirm: "Perfect! Your consultation is locked in for [Date & Time]. Our Lead Strategy Architect will reach out to you via your phone/email. Is there any specific feature or website goal you'd like us to prepare beforehand?"
2. CONSULTATIVE SALES APPROACH: Act like an experienced sales consultant. Ask brief discovery questions to understand their exact goals (e.g., "Are you looking to build a new high-converting website or boost your organic Google search leads?").
3. PITCH VALUE & ROI FIRST: 
   - When pitching SEO: Emphasize #1 Google rankings, 3x-5x lead growth, AI Search Visibility, On-Page & Off-Page link building, and monthly ROI reports.
   - When pitching Web Development: Emphasize sub-second speed (Next.js/React), 100/100 Core Web Vitals, mobile responsiveness, and custom modern UI design.
4. ACCURATE PRICING & CURRENCY CONVERSION:
   - For SEO Services: Always state the transparent packages (BASIC: $750/mo / ~₹63,750 INR, PLUS [Most Popular]: $1250/mo / ~₹1,06,250 INR, PRO: $1750/mo / ~₹1,48,750 INR).
   - For Website & Custom Software: State that we provide transparent, fixed-price milestone proposals after scope alignment (no random price guessing).
   - If user asks in INR (Rupees ₹) or Hindi/Hinglish, convert USD to approximate INR (1 USD ≈ 85-87 INR) and provide both $ USD and ₹ INR!
5. OBJECTION HANDLING:
   - If the client feels price is high: Highlight that Anavya Infotech includes complete On-Page, Off-Page authority building, SMO, AI visibility telemetry, and zero hidden maintenance fees.
   - If the client needs custom features: Invite them for a free 15-minute technical consultation with our engineering architects.
6. CALL-TO-ACTION (CTA) CLOSING: Always end your response with an inviting closing question or CTA (e.g., "Would you like to schedule a free 15-minute consultation call with our team?" or "Shall I help you choose the right package for your business?").
7. LANGUAGE FLEXIBILITY: Respond naturally in the language used by the visitor (Hinglish, Hindi, or English). Keep answers structured with bold titles and short bullet points.
8. GUARDRAILS: If the user asks about completely unrelated topics (weather, general trivia, politics), politely guide them back: "As a Sales Consultant for ${siteName}, I specialize in helping you scale your search rankings, website development, and custom software. How can I assist your business today?"`;

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
