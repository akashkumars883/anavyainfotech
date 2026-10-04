import { supabaseAdmin } from "@/lib/supabase";
import { ANAVYA_MASTER_KNOWLEDGE_MAP } from "@/lib/siteKnowledgeMap";
import fs from "fs";
import path from "path";

// Global in-memory knowledge store cache
const globalKnowledgeStore = globalThis._aiKnowledgeStore || new Map();
if (!globalThis._aiKnowledgeStore) {
  globalThis._aiKnowledgeStore = globalKnowledgeStore;
}

const LOCAL_STORE_FILE = path.join(process.cwd(), "lib", "localKnowledgeStore.json");

// Helper to load local disk knowledge
function loadDiskStore() {
  try {
    if (fs.existsSync(LOCAL_STORE_FILE)) {
      const raw = fs.readFileSync(LOCAL_STORE_FILE, "utf8");
      const json = JSON.parse(raw);
      Object.keys(json).forEach((key) => {
        globalKnowledgeStore.set(key, json[key]);
      });
    }
  } catch (e) {
    console.warn("Disk knowledge load notice:", e.message);
  }
}

// Helper to save local disk knowledge
function saveDiskStore() {
  try {
    const obj = {};
    globalKnowledgeStore.forEach((value, key) => {
      obj[key] = value;
    });
    fs.writeFileSync(LOCAL_STORE_FILE, JSON.stringify(obj, null, 2), "utf8");
  } catch (e) {
    console.warn("Disk knowledge save notice:", e.message);
  }
}

// Initial load from disk
loadDiskStore();

// Pre-seeded rich knowledge base for Nakul Properties
const NAKUL_PROPERTIES_KNOWLEDGE = {
  siteId: "nakul-properties",
  siteUrl: "http://nakulproperties.com",
  pages: [
    {
      title: "Nakul Properties - Top Real Estate Agent & Property Consultant in Faridabad",
      url: "http://nakulproperties.com",
      text: `ABOUT NAKUL PROPERTIES:
Nakul Properties is a leading real estate advisory and property dealership based in Faridabad & Greater Faridabad, Delhi NCR, India.
We specialize in buying, selling, and renting premier residential plots, luxury builder floors, apartments, and commercial properties.

SERVICES & PROPERTY OFFERINGS:
1. Residential Plots & Land (Sector 14, 15, 16, 21, 65, 81-89, Neharpar Faridabad).
2. Luxury Builder Floors & Flats (Ready to move 2BHK, 3BHK, 4BHK floors with modern amenities).
3. High-Street Commercial Properties & Shops (Mathura Road, Sector 65, commercial plots & retail spaces).
4. Rental & Property Management (Assisted property renting, lease agreements, property valuation).

KEY LOCATIONS SERVED:
Faridabad, Greater Faridabad (Neharpar), BPTP Projects, Sector 14, Sector 15, Sector 16, Sector 21, Sector 65, Sector 81 to 89, Delhi NCR.

CONTACT NAKUL PROPERTIES:
- Phone / Call / WhatsApp: +91-9811548267
- Email: adlakhanakul@gmail.com / info@nakulproperties.com
- Office Address: Sector 65, Faridabad, Haryana 121004, India
- Operating Hours: Monday to Saturday (09:00 AM - 08:00 PM)`
    }
  ],
  updatedAt: new Date().toISOString()
};

// Seed Nakul Properties into store
globalKnowledgeStore.set("nakul-properties", NAKUL_PROPERTIES_KNOWLEDGE);

// Pre-seeded rich knowledge base for Anavya Infotech
const ANAVYA_DEFAULT_KNOWLEDGE = {
  siteId: "anavyainfotech-com",
  siteUrl: "https://www.anavyainfotech.com",
  pages: [
    {
      title: "Anavya Infotech Complete Master Knowledge Base",
      url: "https://www.anavyainfotech.com",
      text: ANAVYA_MASTER_KNOWLEDGE_MAP,
    }
  ],
  updatedAt: new Date().toISOString()
};

async function getGeminiEmbedding(text) {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (!geminiApiKey) return null;
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${geminiApiKey.trim()}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "models/text-embedding-004",
        content: { parts: [{ text: text.substring(0, 9000) }] } // Limit to API token size
      })
    });
    if (res.ok) {
      const data = await res.json();
      return data.embedding?.values;
    }
  } catch (err) {
    console.warn("Gemini Embedding Error:", err.message);
  }
  return null;
}

function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Save scraped site pages and content into the knowledge store (WITH EMBEDDINGS)
 */
export async function saveSiteKnowledge(siteId, siteUrl, pages) {
  const cleanSiteId = siteId.toLowerCase().trim();
  
  // Vectorize pages using Gemini Embeddings
  const vectorPages = [];
  for (const page of pages) {
    const textToEmbed = (page.title + "\n" + page.text).trim();
    const embedding = await getGeminiEmbedding(textToEmbed);
    vectorPages.push({ ...page, embedding });
  }

  const siteData = {
    siteId: cleanSiteId,
    siteUrl,
    pages: vectorPages, // Now contains vector embeddings
    updatedAt: new Date().toISOString(),
  };

  // Cache in-memory and persist to disk
  globalKnowledgeStore.set(cleanSiteId, siteData);
  saveDiskStore();

  // Attempt to persist in Supabase if configured
  try {
    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      await supabaseAdmin.from("ai_knowledge_bases").upsert({
        site_id: cleanSiteId,
        site_url: siteUrl,
        content: JSON.stringify(pages),
        updated_at: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.warn("Supabase knowledge base fallback save notice:", err.message);
  }

  return siteData;
}

/**
 * Fetch knowledge base for a specific siteId
 */
export async function getSiteKnowledge(siteId) {
  const cleanSiteId = siteId ? siteId.toLowerCase().trim() : "";
  
  // Return rich default knowledge for anavyainfotech / demo
  if (!cleanSiteId || cleanSiteId.includes("anavya") || cleanSiteId === "demo" || cleanSiteId === "default") {
    return ANAVYA_DEFAULT_KNOWLEDGE;
  }

  if (cleanSiteId === "nakul-properties" || cleanSiteId.includes("nakul")) {
    if (globalKnowledgeStore.has(cleanSiteId)) {
      return globalKnowledgeStore.get(cleanSiteId);
    }
    return NAKUL_PROPERTIES_KNOWLEDGE;
  }

  // 1. Check in-memory / disk cache
  if (globalKnowledgeStore.has(cleanSiteId)) {
    return globalKnowledgeStore.get(cleanSiteId);
  }

  // 2. Check Supabase DB
  try {
    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { data } = await supabaseAdmin
        .from("ai_knowledge_bases")
        .select("*")
        .eq("site_id", cleanSiteId)
        .maybeSingle();

      if (data && data.content) {
        const pages = typeof data.content === "string" ? JSON.parse(data.content) : data.content;
        const siteData = {
          siteId: cleanSiteId,
          siteUrl: data.site_url,
          pages,
          updatedAt: data.updated_at,
        };
        globalKnowledgeStore.set(cleanSiteId, siteData);
        saveDiskStore();
        return siteData;
      }
    }
  } catch (err) {
    console.warn("Supabase knowledge base read notice:", err.message);
  }

  return null;
}

/**
 * Advanced Semantic Vector Search + TF-IDF Fallback
 */
export async function extractRelevantContext(knowledge, userQuestion) {
  if (!knowledge || !knowledge.pages || knowledge.pages.length === 0) {
    return "";
  }

  let scoredPages = [];
  const rawQuery = userQuestion.toLowerCase();

  // Try Vector Semantic Search First
  const queryEmbedding = await getGeminiEmbedding(rawQuery);
  if (queryEmbedding) {
    scoredPages = knowledge.pages.map((page) => {
      let score = 0;
      if (page.embedding) {
        score = cosineSimilarity(queryEmbedding, page.embedding);
      }
      return { ...page, score };
    });
  } else {
    // Fallback to TF-IDF if embeddings are disabled/unavailable
    const queryTerms = rawQuery
      .replace(/[^\w\s]/gi, " ")
      .split(/\s+/)
      .filter((t) => t.length > 2);

    scoredPages = knowledge.pages.map((page) => {
      const titleText = page.title.toLowerCase();
      const bodyText = page.text.toLowerCase();
      let score = 0;

      queryTerms.forEach((term) => {
        if (titleText.includes(term)) score += 3;
        const occurrences = bodyText.split(term).length - 1;
        score += Math.min(occurrences, 10);
      });

      if (bodyText.includes(rawQuery)) score += 15;
      return { ...page, score };
    });
  }

  // Sort by highest relevance score
  scoredPages.sort((a, b) => b.score - a.score);

  // Build context snippet from top matching pages
  const topPages = scoredPages.slice(0, 4);
  const contextSnippet = topPages
    .map((p) => `[Page Title: ${p.title} | Source: ${p.url}]\n${p.text.slice(0, 1500)}`)
    .join("\n\n---\n\n");

  return contextSnippet;
}

