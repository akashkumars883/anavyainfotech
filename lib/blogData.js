import { cache } from "react";
import { unstable_cache } from "next/cache";
import { tursoClient } from "@/lib/turso";
import { getCache, setCache } from "@/lib/redis";

export const STATIC_BLOG_POSTS = [];
export const BLOG_POSTS = [];

// Fallback high quality topic images
const FALLBACK_IMAGES = {
  ai: "/technology-illustration.jpg",
  seo: "/growth-illustration.jpg",
  marketing: "/branding-illustration.jpg",
  web: "/development-illustration.jpg",
};

function resolveBlogImage(url, title = "", category = "") {
  if (url && typeof url === "string" && url.trim().length > 0) {
    const trimmed = url.trim();
    if (
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("/") ||
      trimmed.startsWith("data:") ||
      trimmed.startsWith("blob:")
    ) {
      return trimmed;
    }
  }

  const text = (title + " " + category).toLowerCase();
  if (text.includes("ai") || text.includes("agent") || text.includes("predictive")) {
    return FALLBACK_IMAGES.ai;
  }
  if (text.includes("seo") || text.includes("search") || text.includes("analytics")) {
    return FALLBACK_IMAGES.seo;
  }
  if (text.includes("marketing") || text.includes("brand")) {
    return FALLBACK_IMAGES.marketing;
  }
  return FALLBACK_IMAGES.web;
}

function cleanImageUrl(url, title = "", category = "") {
  if (url && typeof url === "string" && url.trim().length > 0) {
    const trimmed = url.trim();
    if (trimmed.startsWith("data:") && trimmed.length > 200000) {
      return resolveBlogImage("", title, category);
    }
    if (
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("/") ||
      trimmed.startsWith("blob:") ||
      trimmed.startsWith("data:")
    ) {
      return trimmed;
    }
  }
  return resolveBlogImage("", title, category);
}

function cleanContentHtml(html = "") {
  if (!html || typeof html !== "string") return "";
  return html.replace(/src=["']data:image\/[^;]+;base64,([^"']+)["']/gi, (match, base64Str) => {
    if (base64Str.length > 300000) {
      return 'src="/development-illustration.jpg"';
    }
    return match;
  });
}

function formatDbPost(dbPost, index) {
  const formattedDate = dbPost.created_at
    ? new Date(dbPost.created_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "August 2026";

  const resolvedImage = cleanImageUrl(dbPost.image_url, dbPost.title, dbPost.category);
  const sanitizedContent = cleanContentHtml(dbPost.content || "");

  let parsedTags = [];
  if (dbPost.tags) {
    if (Array.isArray(dbPost.tags)) {
      parsedTags = dbPost.tags;
    } else if (typeof dbPost.tags === "string") {
      try {
        parsedTags = JSON.parse(dbPost.tags);
      } catch {
        parsedTags = [dbPost.tags];
      }
    }
  }

  let parsedFaqs = [];
  if (dbPost.faqs) {
    if (Array.isArray(dbPost.faqs)) {
      parsedFaqs = dbPost.faqs;
    } else if (typeof dbPost.faqs === "string") {
      try {
        parsedFaqs = JSON.parse(dbPost.faqs);
      } catch {
        parsedFaqs = [];
      }
    }
  }

  const rawViews = Number(dbPost.views_count) || 0;

  return {
    id: dbPost.id,
    slug: dbPost.slug,
    title: dbPost.title,
    category: dbPost.category || "Engineering",
    date: formattedDate,
    readTime: "5 min read",
    author: {
      name: dbPost.author || "Team Anavya Infotech",
      role: "Software Architect",
      avatar: "/logo.png",
    },
    description: dbPost.excerpt || dbPost.title,
    image: resolvedImage,
    imageAlt: dbPost.title,
    featured: index === 0,
    content: sanitizedContent,
    tags: parsedTags,
    faqs: parsedFaqs,
    views_count: rawViews,
  };
}

// Internal function to fetch published blog listing summaries from Turso
async function fetchBlogPostsFromDb() {
  const cacheKey = "blog:all_posts";
  const cached = await getCache(cacheKey);
  if (cached && Array.isArray(cached) && cached.length > 0) {
    return cached;
  }

  let dbFormattedPosts = [];
  try {
    const res = await tursoClient.execute(
      "SELECT id, slug, title, category, author, excerpt, image_url, tags, is_published, created_at, views_count FROM blogs WHERE is_published = 1 ORDER BY created_at DESC"
    );

    if (res.rows && res.rows.length > 0) {
      dbFormattedPosts = res.rows.map((row, idx) => formatDbPost(row, idx));
    }
  } catch (err) {
    console.error("Error fetching blog posts from Turso:", err);
  }

  const mergedPosts = dbFormattedPosts.map((post, idx) => ({ ...post, featured: idx === 0 }));
  
  if (mergedPosts.length > 0) {
    await setCache(cacheKey, mergedPosts, 300);
  }

  return mergedPosts;
}

export const getBlogPosts = cache(
  unstable_cache(
    fetchBlogPostsFromDb,
    ["all-blog-posts-summary-cache"],
    {
      revalidate: 60,
      tags: ["blogs"],
    }
  )
);

async function fetchSinglePostFromDb(slug) {
  if (!slug) return null;
  const cacheKey = `blog:slug:${slug}`;
  const cached = await getCache(cacheKey);
  if (cached) return cached;

  try {
    const res = await tursoClient.execute({
      sql: "SELECT * FROM blogs WHERE slug = ? AND is_published = 1 LIMIT 1",
      args: [slug],
    });

    if (res.rows && res.rows.length > 0) {
      const formatted = formatDbPost(res.rows[0], 0);
      await setCache(cacheKey, formatted, 300);
      return formatted;
    }
  } catch (err) {
    console.error("Error fetching blog post by slug from Turso:", err);
  }

  return null;
}

export const getBlogPostBySlug = cache((slug) => {
  if (!slug) return Promise.resolve(null);
  return unstable_cache(
    () => fetchSinglePostFromDb(slug),
    [`blog-post-slug-${slug}`],
    {
      revalidate: 60,
      tags: ["blogs", `blog-${slug}`],
    }
  )();
});
