import { NextResponse } from "next/server";

function extractFaqsFromContent(title = "", content = "", category = "") {
  const faqs = [];
  const cleanTitle = title.trim() || "Software & Digital Services";
  const plainText = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const lowerTitle = cleanTitle.toLowerCase();

  // 1. Definition / Core Concept Query (People Also Ask #1)
  faqs.push({
    question: `What is ${cleanTitle.replace(/\s*\(.*?\)/g, "").trim()} and why is it important in 2026?`,
    answer:
      plainText.length > 50
        ? plainText.slice(0, 260).trim() + "..."
        : `This complete guide explains ${cleanTitle}, detailing architectural patterns, business benefits, and technical implementation steps for modern platforms.`,
  });

  // 2. High-Intent Pricing & Cost Query (People Also Ask #2)
  if (lowerTitle.includes("cost") || lowerTitle.includes("price") || lowerTitle.includes("pricing") || lowerTitle.includes("guide")) {
    faqs.push({
      question: `How much does ${cleanTitle.split(":")[0].split("(")[0].trim()} cost?`,
      answer:
        "Costs typically range based on project scope, custom database complexity, third-party API integrations, and ongoing support retainers. Contact our team for an exact quotation tailored to your specifications.",
    });
  } else {
    faqs.push({
      question: `What are the main financial and operational benefits of ${cleanTitle.slice(0, 35)}?`,
      answer:
        "Implementing modern engineering solutions reduces operational friction, improves conversion rates, minimizes manual maintenance, and delivers measurable ROI through scalable architecture.",
    });
  }

  // 3. Technical Implementation & Timeline Query (People Also Ask #3)
  faqs.push({
    question: `How long does implementation take and what is the process?`,
    answer:
      "Development timelines range from 2 to 6 weeks depending on custom feature requirements. The workflow follows discovery, UI/UX architecture, sprint development, QA testing, and live deployment.",
  });

  // 4. Comparison / Best Practice Query (People Also Ask #4)
  if (category.toLowerCase().includes("seo") || lowerTitle.includes("seo")) {
    faqs.push({
      question: "How long before SEO optimizations show measurable organic rank improvements?",
      answer:
        "Technical audit fixes and site health improvements reflect in Google Search Console within 2 to 3 weeks. Competitive keyword ranking growth compounds over 3 to 6 months.",
    });
  } else if (category.toLowerCase().includes("ai") || lowerTitle.includes("ai")) {
    faqs.push({
      question: "How do custom AI solutions protect user data privacy and security?",
      answer:
        "Our AI systems enforce zero-data-retention, encrypted REST API channels, and private vector database storage to maintain 100% data privacy compliance.",
    });
  } else {
    faqs.push({
      question: `Why choose Anavya Infotech for ${category || 'software engineering'}?`,
      answer:
        "Anavya Infotech combines lead software architects, modern Next.js/React engineering, transparent milestones, and cost-effective delivery to build production-grade platforms.",
    });
  }

  return faqs;
}

export async function POST(request) {
  try {
    const { title, content, category } = await request.json();

    if (!title || !title.trim()) {
      return NextResponse.json({ error: "Article title is required to generate FAQs." }, { status: 400 });
    }

    const groqApiKey = process.env.GROQ_API_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY;

    const prompt = `You are a Senior Technical SEO & Search Intent Researcher.
Analyze the following article topic and generate 4 to 5 Frequently Asked Questions (FAQs) and detailed, authoritative answers based on real Google "People Also Ask" (PAA) search queries.

Article Title: "${title}"
Category: "${category || 'Technology'}"
Article Content Summary: "${(content || '').replace(/<[^>]+>/g, ' ').slice(0, 1000)}"

STRICT SEARCH INTENT INSTRUCTIONS:
1. Base questions on actual queries people search on Google regarding "${title}".
2. Include top intent queries:
   - Definition & Core Value ("What is...", "Why is...")
   - Pricing & Cost Breakdown ("How much does...", "What is the cost of...")
   - Implementation Timeline & Workflow ("How long does it take...", "What is the step-by-step process...")
   - Security, ROI, or Competitive Comparison.
3. Provide crisp, authoritative 2-3 sentence answers with concrete facts.
4. Output Format: Return ONLY a raw JSON array of objects with keys "question" and "answer". Do not include markdown codeblocks or conversational preamble.
Example:
[
  {"question": "...", "answer": "..."},
  {"question": "...", "answer": "..."}
]`;

    // 1. Try GROQ API if key exists
    if (groqApiKey && groqApiKey.trim().length > 10) {
      try {
        const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqApiKey.trim()}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.2,
            max_tokens: 800,
          }),
        });

        if (groqRes.ok) {
          const groqData = await groqRes.json();
          const rawText = groqData.choices?.[0]?.message?.content || "";
          const cleanedText = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();
          const parsedFaqs = JSON.parse(cleanedText);
          if (Array.isArray(parsedFaqs) && parsedFaqs.length > 0) {
            return NextResponse.json({ success: true, faqs: parsedFaqs, source: "groq_ai" });
          }
        }
      } catch (groqErr) {
        console.warn("Groq FAQ generation failed:", groqErr.message);
      }
    }

    // 2. Try Gemini API if key exists
    if (geminiApiKey && geminiApiKey.length > 10) {
      try {
        const aiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${geminiApiKey.trim()}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
          }
        );

        if (aiRes.ok) {
          const aiData = await aiRes.json();
          const rawText = aiData.candidates?.[0]?.content?.parts?.[0]?.text || "";
          const cleanedText = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();

          const parsedFaqs = JSON.parse(cleanedText);
          if (Array.isArray(parsedFaqs) && parsedFaqs.length > 0) {
            return NextResponse.json({ success: true, faqs: parsedFaqs, source: "gemini_ai" });
          }
        }
      } catch (aiErr) {
        console.warn("Gemini FAQ generation failed:", aiErr.message);
      }
    }

    // Fallback smart extraction logic
    const extractedFaqs = extractFaqsFromContent(title, content, category);
    return NextResponse.json({ success: true, faqs: extractedFaqs, source: "smart_extractor" });
  } catch (error) {
    console.error("Error generating FAQs:", error);
    return NextResponse.json({ error: "Failed to generate FAQs." }, { status: 500 });
  }
}
