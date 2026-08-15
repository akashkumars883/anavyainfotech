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

// Pre-seeded rich knowledge base for Anavya Infotech
const ANAVYA_DEFAULT_KNOWLEDGE = {
  siteId: "anavyainfotech-com",
  siteUrl: "https://anavyainfotech.com",
  pages: [
    {
      title: "Anavya Infotech Services & SEO Pricing Packages",
      url: "https://anavyainfotech.com/pricing",
      text: `ANAVYA INFOTECH OVERVIEW: Premier Custom Software, Web Development, AI Chatbots, and SEO Agency.

SEO MONTHLY RETAINER PRICING & PLANS:
1. BASIC PLAN ($750.00 / month - Regular $1000/mo, Save 25%):
- Scope: 30 primary & secondary keywords analysis, initial website audit, competitor backlink & website analysis.
- On-Page: 10 pages Title & Meta Tag optimization, 20 images ALT tags, 10 pages Heading tags, Schema implementation, Speed analysis, Canonical tags, XML sitemap & robots.txt, 404 page & broken links redirection, 2 Onsite Blog Posts/month, Google Webmaster & Analytics setup.

2. PLUS PLAN ($1250.00 / month - Regular $1500/mo, Save 17% - MOST POPULAR):
- Scope: 40 primary & secondary keywords analysis, competitor audits, 2 competitor backlink checks.
- On-Page: 20 pages Title & Meta Tag optimization, 40 images ALT tags, 20 pages Heading tags, Content interlinking & optimization, Bing Webmaster tools setup, 2 Onsite Blog Posts/month.
- Off-Page: 3 Guest Posts (15 promotions), 3 Article Writing/Posts (20 promotions), 3 Blog Submissions (20 promotions), 7 Quora/Reddit answers, 15 Image submissions, 10 Video submissions, 15 Classified ads, 15 PPT/PDF submissions.
- AI Search Visibility: AI Visibility Score, AI Monthly Audience telemetry, AI Competitor visibility comparison, AI Share of Voice & Sentiment analysis.
- SMO Activities: Facebook & Instagram profile creation + 8 monthly posts/sharing.
- Reports: Monthly Analytics, Keyword Ranking, and Off-Page Submission reports.

3. PRO / ENTERPRISE PLAN ($1750.00 / month - Regular $2000/mo, Save 13%):
- Scope: 50 primary & secondary keywords analysis, 3 competitor backlink & website audits.
- On-Page: 40 pages Title & Meta Tag optimization, 60 images ALT tags, 30 pages Heading tags, Advanced Structured Data & Schema setup, 3 Onsite Blog Posts/month, Content interlinking.
- Off-Page: 2 Guest Posts, 10 Infographics Creation/Month, 10 PPT/PDF submissions, 10 Image/Video submissions, 10 Classified ads.
- AI Search Visibility: Full AI Visibility score, AI Monthly Audience, AI Competitor comparison, AI Share of voice & Sentiment.
- SMO & Reports: Facebook & Instagram 4 posts/mo, Monthly Analytics, Keyword Ranking & Off-Page reports.

DEVELOPMENT & CUSTOM SOFTWARE:
- Business Websites, Mobile Apps (React Native/Flutter), Enterprise Web Apps (React/Next.js/Node.js/PostgreSQL), AI Chatbots, Custom CRM/ERP software, API Integrations. Custom software pricing is quoted via milestone proposals.

CONTACT & LOCATION:
- Location: Delhi NCR, Noida, India (Serving Global Clients).
- Contact: Reach out at https://anavyainfotech.com/contact to get a free technical consultation or proposal.`
    }
  ],
  updatedAt: new Date().toISOString()
};

/**
 * Fetch knowledge base for a specific siteId
 */
export async function getSiteKnowledge(siteId) {
  const cleanSiteId = siteId ? siteId.toLowerCase().trim() : "";
  
  // Return rich default knowledge for anavyainfotech / demo
  if (!cleanSiteId || cleanSiteId.includes("anavya") || cleanSiteId === "demo" || cleanSiteId === "default") {
    return ANAVYA_DEFAULT_KNOWLEDGE;
  }

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

  return ANAVYA_DEFAULT_KNOWLEDGE;
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
