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

    // 1. Crawl Target Homepage
    const response = await fetch(siteUrl, {
      headers: {
        "User-Agent": "AnavyaAiBot/1.0 (+https://www.anavyainfotech.com)",
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
    const homepageData = parseHtmlContent(html, siteUrl);
    const pages = [homepageData];

    // 2. Discover Sub-pages (e.g., /contact, /pricing, /about, /services)
    try {
      const parsedBase = new URL(siteUrl);
      const linkRegex = /href=["']([^"']+)["']/gi;
      const discoveredUrls = new Set();
      let match;

      while ((match = linkRegex.exec(html)) !== null) {
        const href = match[1];
        if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) {
          continue;
        }

        try {
          const resolvedUrl = new URL(href, siteUrl);
          if (
            resolvedUrl.hostname === parsedBase.hostname &&
            resolvedUrl.pathname !== "/" &&
            resolvedUrl.pathname !== parsedBase.pathname &&
            !resolvedUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|pdf|zip)$/i)
          ) {
            discoveredUrls.add(resolvedUrl.href);
          }
        } catch {}
      }

      // Crawl top 5 discovered sub-pages in parallel
      const subPageUrls = Array.from(discoveredUrls).slice(0, 5);
      const subPagePromises = subPageUrls.map(async (url) => {
        try {
          const subRes = await fetch(url, {
            headers: { "User-Agent": "AnavyaAiBot/1.0 (+https://www.anavyainfotech.com)" },
            next: { revalidate: 0 },
          });
          if (subRes.ok) {
            const subHtml = await subRes.text();
            return parseHtmlContent(subHtml, url);
          }
        } catch {
          return null;
        }
      });

      const subPagesData = await Promise.all(subPagePromises);
      subPagesData.forEach((p) => {
        if (p && p.text && p.text.length > 50) {
          pages.push(p);
        }
      });
    } catch (e) {
      console.warn("Subpage discovery notice:", e.message);
    }

    // 3. Save All Pages into Knowledge Base
    await saveSiteKnowledge(siteId, siteUrl, pages);

    const scriptTag = `<script src="https://www.anavyainfotech.com/widget.js" data-site-id="${siteId}" async></script>`;

    return NextResponse.json({
      success: true,
      siteId,
      siteUrl,
      pagesCrawled: pages.length,
      pageTitle: homepageData.title,
      crawledPages: pages.map((p) => ({ title: p.title, url: p.url })),
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
