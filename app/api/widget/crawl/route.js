import { NextResponse } from "next/server";
import { saveSiteKnowledge } from "@/lib/aiVectorStore";

export const dynamic = "force-dynamic";

// Helper to sanitize & extract text from HTML content
function parseHtmlContent(html, baseUrl) {
  // Remove script, style, svg, and iframe tags
  const cleanHtml = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "");

  // Extract Title
  const titleMatch = cleanHtml.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : baseUrl;

  // Extract Body Text
  const text = cleanHtml
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    url: baseUrl,
    title,
    text: text.slice(0, 5000), // Limit per page text length
  };
}

export async function POST(req) {
  try {
    const body = await req.json();
    let { siteUrl, siteId } = body;

    if (!siteUrl) {
      return NextResponse.json({ error: "siteUrl is required" }, { status: 400 });
    }

    // Format Site URL
    if (!siteUrl.startsWith("http://") && !siteUrl.startsWith("https://")) {
      siteUrl = "https://" + siteUrl;
    }

    // Format Site ID
    if (!siteId || siteId.trim() === "") {
      try {
        const parsedUrl = new URL(siteUrl);
        siteId = parsedUrl.hostname.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
      } catch {
        siteId = "site-" + Date.now();
      }
    }

    // Crawl target homepage
    const response = await fetch(siteUrl, {
      headers: {
        "User-Agent": "AnavyaAiBot/1.0 (+https://anavyainfotech.com)",
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Unable to fetch target website (HTTP ${response.status})` },
        { status: 400 }
      );
    }

    const html = await response.text();
    const pageData = parseHtmlContent(html, siteUrl);

    // Save Knowledge Base
    const pages = [pageData];
    await saveSiteKnowledge(siteId, siteUrl, pages);

    const scriptTag = `<script src="https://anavyainfotech.com/widget.js" data-site-id="${siteId}" async></script>`;

    return NextResponse.json({
      success: true,
      siteId,
      siteUrl,
      pagesCrawled: pages.length,
      pageTitle: pageData.title,
      scriptTag,
    });
  } catch (err) {
    console.error("Crawl API Error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to crawl target website" },
      { status: 500 }
    );
  }
}
