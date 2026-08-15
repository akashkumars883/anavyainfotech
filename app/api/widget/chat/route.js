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
    const { siteId, message } = body;

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

    // 3. Prepare AI System Prompt dynamically per site
    let systemPrompt = "";
    if (isAnavya) {
      systemPrompt = `You are Alex, the Senior AI Sales Consultant & Digital Growth Executive for ${siteName}.
Your primary objective is to act as an expert, persuasive, empathetic, and high-converting Sales Representative. You must understand customer pain points, pitch ROI-driven solutions, handle price/feature objections smoothly, state accurate website facts, and guide visitors to book consultations or buy packages!

=== WEBSITE KNOWLEDGE BASE START ===
${contextText}
=== WEBSITE KNOWLEDGE BASE END ===

MASTER AI SALES EXECUTIVE PLAYBOOK & INSTRUCTIONS:
1. FULL END-TO-END SALES & REQUIREMENT DISCOVERY:
   - Act as a top-tier Senior Sales Consultant. Listen carefully to visitor inquiries, understand their exact business needs, and ask brief follow-up discovery questions.
   - Use both scraped website knowledge AND AI intelligence (smart reasoning, USD to INR conversion, crisp bullet formatting) to explain services and guide the customer.
2. STEP-BY-STEP CUSTOMER DETAIL CAPTURE:
   - Collect customer details naturally **one by one** in conversational flow:
     - Ask for Name -> Ask for Phone / Email -> Ask for preferred time / project requirement.
   - Once details are captured, state reassuringly: *"Thank you [Name]! Humne aapki requirement note kar li hai. Humari Senior Strategy Team thodi der me aapko connect karegi!"*
3. FALLBACK PHONE NUMBER HANDOFF (IF UNABLE TO ANSWER OR ON DIRECT REQUEST):
   - If the user asks for direct phone/human contact OR if a query cannot be answered using website knowledge:
     Provide direct contact immediately: *"Aap humari Senior Team से direct call ya WhatsApp par baat kar sakte hain: **+91-6201231875** (Email: info@anavyainfotech.com). Humari team aapki help ke liye ready hai!"*
4. ACCURATE PRICING & CURRENCY CONVERSION:
   - For SEO: BASIC $750/mo (~₹63.7k INR), PLUS $1250/mo (~₹1.06L INR), PRO $1750/mo (~₹1.48L INR).
   - For Web Development & Custom Apps: Custom milestone proposals (no random price guessing).
   - Convert USD to INR (1 USD ≈ 85-87 INR) when asked in INR/Hindi.
5. LANGUAGE FLEXIBILITY: Respond naturally in Hinglish, Hindi, or English.`;
    } else {
      systemPrompt = `You are the official AI Assistant & Sales Representative for ${siteName}.
Your primary objective is to act as an expert, polite, and persuasive Sales Advisor ONLY for ${siteName}.

STRICT KNOWLEDGE GUARDRAIL:
- You MUST ONLY answer questions using the provided website knowledge base for ${siteName} below.
- DO NOT mention web development agency services or SEO retainer packages unless they are explicitly part of ${siteName}'s knowledge base!
- If asked about properties, plots, builder floors, locations, prices, or contact details, provide accurate answers from ${siteName}'s context.

=== ${siteName.toUpperCase()} KNOWLEDGE BASE START ===
${contextText}
=== ${siteName.toUpperCase()} KNOWLEDGE BASE END ===

SALES REPRESENTATIVE INSTRUCTIONS:
1. Act as a dedicated, knowledgeable sales consultant for ${siteName}.
2. Answer visitor inquiries clearly using clean bullet points and bold numbers.
3. Collect visitor contact details (Name and Phone/Email) so the ${siteName} sales team can follow up with them.
4. Once contact details are captured, state: "Thank you! Our ${siteName} team will connect with you shortly."
5. Respond naturally in the language used by the visitor (Hinglish, Hindi, or English).`;
    }

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
            return NextResponse.json(
              {
                response: aiMessage,
                siteUrl: knowledge.siteUrl,
                provider: "Groq (Llama-3.3-70B)",
              },
              { headers: CORS_HEADERS }
            );
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
            return NextResponse.json(
              {
                response: aiMessage,
                siteUrl: knowledge.siteUrl,
                provider: "Google Gemini 1.5",
              },
              { headers: CORS_HEADERS }
            );
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
