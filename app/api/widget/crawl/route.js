import { NextResponse } from "next/server";
import { saveSiteKnowledge } from "@/lib/aiVectorStore";
import * as cheerio from "cheerio";

export const dynamic = "force-dynamic";

// Helper to sanitize & extract rich text using Cheerio
function parseHtmlWithCheerio(html, baseUrl) {
  const $ = cheerio.load(html);

  // Remove noise elements
  $("script, style, svg, iframe, noscript, nav, footer, form").remove();

  // Extract Page Title
  const title = $("title").text().trim() || $("h1").first().text().trim() || baseUrl;

  // Extract Key Headings & Paragraphs cleanly
  const contentBlocks = [];
  
  $("h1, h2, h3, h4, p, li").each((_, el) => {
    const text = $(el).text().replace(/\s+/g, " ").trim();
    if (text.length > 15) {
      contentBlocks.push(text);
    }
  });

  const fullText = contentBlocks.join("\n");

  return {
    url: baseUrl,
    title,
    text: fullText.slice(0, 8000), // Rich 8000 chars context window per page
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
    const homepageData = parseHtmlWithCheerio(html, siteUrl);
    const pages = [homepageData];

    // 2. Discover Sub-pages with Cheerio (e.g., /contact, /pricing, /about, /services)
    try {
      const $ = cheerio.load(html);
      const parsedBase = new URL(siteUrl);
      const discoveredUrls = new Set();

      $("a[href]").each((_, el) => {
        const href = $(el).attr("href");
        if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) {
          return;
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
      });

      // Crawl up to 25 discovered sub-pages concurrently (Deep Website Knowledge Scrape)
      const subPageUrls = Array.from(discoveredUrls).slice(0, 25);
      const subPagePromises = subPageUrls.map(async (url) => {
        try {
          const subRes = await fetch(url, {
            headers: { "User-Agent": "AnavyaAiBot/1.0 (+https://www.anavyainfotech.com)" },
            next: { revalidate: 0 },
          });
          if (subRes.ok) {
            const subHtml = await subRes.text();
            return parseHtmlWithCheerio(subHtml, url);
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

