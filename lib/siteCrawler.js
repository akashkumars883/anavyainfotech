import * as cheerio from "cheerio";
import { saveSiteKnowledge, getSiteKnowledge } from "@/lib/aiVectorStore";

// Sanitize & extract clean readable text from HTML (strip script, style, nav, ads)
function parseHtmlPage(html, url) {
  const $ = cheerio.load(html);

  // Remove junk, scripts, SVGs, styles, modals, footers
  $("script, style, svg, iframe, noscript, form, header, footer, nav, [role='dialog'], [aria-hidden='true']").remove();

  // Extract clean title
  const title = $("title").text().trim() || $("h1").first().text().trim() || url;

  // Extract main readable blocks (Headings, Paragraphs, Lists, Table cells)
  const blocks = [];
  $("h1, h2, h3, h4, h5, p, li, td, th").each((_, el) => {
    const text = $(el).text().replace(/\s+/g, " ").trim();
    if (text.length > 20 && !blocks.includes(text)) {
      blocks.push(text);
    }
  });

  const fullText = blocks.join("\n").slice(0, 7000);

  return {
    url,
    title,
    text: fullText,
  };
}

/**
 * Deep Crawl a website: Homepage + internal pages (About, Services, Contact, Pricing, etc.)
 */
export async function crawlAndIndexWebsite(targetUrl, siteId) {
  if (!targetUrl) return null;

  let formattedUrl = targetUrl.trim();
  if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
    formattedUrl = "https://" + formattedUrl;
  }

  let parsedBase;
  try {
    parsedBase = new URL(formattedUrl);
  } catch (e) {
    console.warn("Invalid URL for crawler:", targetUrl);
    return null;
  }

  const cleanSiteId = (siteId || parsedBase.hostname.replace(/[^a-zA-Z0-9]/g, "-")).toLowerCase().trim();

  // 1. Fetch Homepage
  let homeHtml = "";
  try {
    const res = await fetch(formattedUrl, {
      signal: AbortSignal.timeout(10000),
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    homeHtml = await res.text();
  } catch (err) {
    console.warn(`Failed to fetch homepage ${formattedUrl}:`, err.message);
    return null;
  }

  const homeData = parseHtmlPage(homeHtml, formattedUrl);
  const pages = [homeData];

  // 2. Discover internal links (up to 15 key subpages)
  try {
    const $ = cheerio.load(homeHtml);
    const discoveredUrls = new Set();

    $("a[href]").each((_, el) => {
      const href = $(el).attr("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      try {
        const resolved = new URL(href, formattedUrl);
        // Only internal links, not asset files
        if (
          resolved.hostname === parsedBase.hostname &&
          resolved.pathname !== "/" &&
          resolved.pathname !== parsedBase.pathname &&
          !resolved.pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|pdf|zip|mp4|webp)$/i)
        ) {
          discoveredUrls.add(resolved.href);
        }
      } catch {}
    });

    // Crawl top 12 discovered subpages concurrently
    const subUrls = Array.from(discoveredUrls).slice(0, 12);
    const subPromises = subUrls.map(async (subUrl) => {
      try {
        const subRes = await fetch(subUrl, {
          signal: AbortSignal.timeout(6000),
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
          next: { revalidate: 0 },
        });
        if (subRes.ok) {
          const subHtml = await subRes.text();
          return parseHtmlPage(subHtml, subUrl);
        }
      } catch {
        return null;
      }
    });

    const crawledSubs = await Promise.all(subPromises);
    crawledSubs.forEach((page) => {
      if (page && page.text && page.text.length > 50) {
        pages.push(page);
      }
    });
  } catch (err) {
    console.warn("Crawler link discovery error:", err.message);
  }

  // 3. Save into Knowledge Store
  const savedData = await saveSiteKnowledge(cleanSiteId, formattedUrl, pages);
  console.log(`[Auto-Crawler] Indexed ${pages.length} pages for ${cleanSiteId} (${formattedUrl})`);
  return savedData;
}
