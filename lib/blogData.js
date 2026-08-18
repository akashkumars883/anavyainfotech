import { cache } from "react";
import { unstable_cache } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";

export const STATIC_BLOG_POSTS = [];

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
  return html;
}

// Helper to format Supabase DB record to Blog format
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
    featured: index === 0, // Recent article as featured
    content: sanitizedContent,
    tags: dbPost.tags || [],
  };
}

// Internal function to fetch published blog listing summaries from Supabase (excluding heavy content body)
async function fetchBlogPostsFromDb() {
  try {
    const { data: dbPosts, error } = await supabaseAdmin
      .from("blogs")
      .select("id, slug, title, category, author, excerpt, image_url, tags, is_published, created_at")
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (error || !dbPosts) {
      console.error("Supabase blog fetch error:", error?.message);
      return [];
    }

    return dbPosts.map((post, idx) => formatDbPost(post, idx));
  } catch (err) {
    console.error("Error fetching blog posts from Supabase:", err);
    return [];
  }
}

// Next.js Data Cache + React Request Memoization for Blog Listing (Lightweight, < 50KB)
export const getBlogPosts = cache(
  unstable_cache(
    fetchBlogPostsFromDb,
    ["all-blog-posts-summary-cache"],
    {
      revalidate: 3600, // 1 hour background revalidation
      tags: ["blogs"],  // revalidateTag('blogs') clears this instantly
    }
  )
);

// Internal function to fetch single full blog post with content body from Supabase
async function fetchSinglePostFromDb(slug) {
  if (!slug) return null;
  try {
    const { data: dbPost, error } = await supabaseAdmin
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();

    if (error || !dbPost) {
      return null;
    }

    return formatDbPost(dbPost, 0);
  } catch (err) {
    console.error("Error fetching blog post by slug:", err);
    return null;
  }
}

// Cached single blog post lookup (Individual article cache, ~15KB per post)
export const getBlogPostBySlug = cache((slug) => {
  if (!slug) return Promise.resolve(null);
  return unstable_cache(
    () => fetchSinglePostFromDb(slug),
    [`blog-post-slug-${slug}`],
    {
      revalidate: 3600,
      tags: ["blogs", `blog-${slug}`],
    }
  )();
});

// Backwards compatibility export
export const BLOG_POSTS = [];
