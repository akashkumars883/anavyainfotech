import { supabaseAdmin } from "@/lib/supabase";

// Global in-memory knowledge store cache
const globalKnowledgeStore = globalThis._aiKnowledgeStore || new Map();
if (!globalThis._aiKnowledgeStore) {
  globalThis._aiKnowledgeStore = globalKnowledgeStore;
}

/**
 * Save scraped site pages and content into the knowledge store
 */
export async function saveSiteKnowledge(siteId, siteUrl, pages) {
  const cleanSiteId = siteId.toLowerCase().trim();
  const siteData = {
    siteId: cleanSiteId,
    siteUrl,
    pages, // Array of { url, title, text }
    updatedAt: new Date().toISOString(),
  };

  // Cache in-memory
  globalKnowledgeStore.set(cleanSiteId, siteData);

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
  const cleanSiteId = siteId.toLowerCase().trim();
  
  // 1. Check in-memory cache
  if (globalKnowledgeStore.has(cleanSiteId)) {
    return globalKnowledgeStore.get(cleanSiteId);
  }

  // 2. Check Supabase DB
  try {
    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { data, error } = await supabaseAdmin
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
        return siteData;
      }
    }
  } catch (err) {
    console.warn("Supabase knowledge base read notice:", err.message);
  }

  return null;
}

/**
 * Perform keyword & semantic context retrieval for a user question
 */
export function extractRelevantContext(knowledge, userQuestion) {
  if (!knowledge || !knowledge.pages || knowledge.pages.length === 0) {
    return "";
  }

  const queryTerms = userQuestion.toLowerCase().split(/\s+/).filter(t => t.length > 2);

  // Score pages based on term matches
  const scoredPages = knowledge.pages.map(page => {
    const pageText = (page.title + " " + page.text).toLowerCase();
    let score = 0;
    queryTerms.forEach(term => {
      if (pageText.includes(term)) {
        score += 1;
      }
    });
    return { ...page, score };
  });

  // Sort by highest relevance score
  scoredPages.sort((a, b) => b.score - a.score);

  // Build context snippet from top matching pages
  const topPages = scoredPages.slice(0, 4);
  const contextSnippet = topPages
    .map(p => `[Page: ${p.title} (${p.url})]\n${p.text.slice(0, 1200)}`)
    .join("\n\n");

  return contextSnippet;
}
