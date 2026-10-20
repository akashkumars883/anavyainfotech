import { NextResponse } from "next/server";
import { lookup } from "node:dns/promises";
import { saveSiteKnowledge } from "@/lib/aiVectorStore";
import * as cheerio from "cheerio";
import { readClientSession } from "@/lib/clientAuth";
import { checkRateLimit } from "@/lib/redis";
import { isIP } from "node:net";

export const dynamic = "force-dynamic";

function isPublicAddress(address) {
  const ipVersion = isIP(address);
  if (ipVersion === 4) {
    const octets = address.split(".").map(Number);
    const [a, b] = octets;
    return !(a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && (b === 0 || b === 168)) ||
      (a === 198 && (b === 18 || b === 19 || b === 51)) ||
      (a === 203 && b === 0));
  }
  if (ipVersion === 6) {
    const normalized = address.toLowerCase();
    if (normalized.startsWith("::ffff:")) {
      return isPublicAddress(normalized.slice(7));
    }
    return !(normalized === "::" || normalized === "::1" ||
      /^(fc|fd|fe[89ab]|ff)/.test(normalized));
  }
  return false;
}

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
    const client = readClientSession(req);
    if (!client) return NextResponse.json({ error: "Sign in to crawl your website." }, { status: 401 });
    const rate = await checkRateLimit(client.email, "client_crawl", 3, 60);
    if (!rate.allowed) return NextResponse.json({ error: "Crawl limit reached. Please try again in one minute." }, { status: 429 });

    const body = await req.json();
    let { siteUrl, siteId } = body;

    if (siteId !== client.siteId) {
      return NextResponse.json({ error: "You can only crawl the website assigned to your account." }, { status: 403 });
    }

    if (!siteUrl) {
      return NextResponse.json({ error: "siteUrl is required" }, { status: 400 });
    }

    // Format Site URL
    if (!siteUrl.startsWith("http://") && !siteUrl.startsWith("https://")) {
      siteUrl = "https://" + siteUrl;
    }

    let target;
    try {
      target = new URL(siteUrl);
    } catch {
      return NextResponse.json({ error: "Enter a valid website URL." }, { status: 400 });
    }
    if (target.protocol !== "https:" || target.username || target.password ||
        target.hostname === "localhost" || target.hostname.endsWith(".local") ||
        target.hostname.endsWith(".internal") || /^\d{1,3}(\.\d{1,3}){3}$/.test(target.hostname) || target.hostname.startsWith("[")) {
      return NextResponse.json({ error: "Use a public HTTPS website URL." }, { status: 400 });
    }
    try {
      const addresses = await lookup(target.hostname, { all: true, verbatim: true });
      if (!addresses.length || addresses.some(({ address }) => !isPublicAddress(address))) {
        return NextResponse.json({ error: "Use a public HTTPS website URL." }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ error: "The website hostname could not be resolved." }, { status: 400 });
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
      redirect: "error",
      signal: AbortSignal.timeout(10000),
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
    if (response.headers.get("content-type") && !response.headers.get("content-type").includes("text/html")) {
      return NextResponse.json({ error: "The URL did not return an HTML page." }, { status: 400 });
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

