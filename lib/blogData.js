import { cache } from "react";
import { unstable_cache } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";

export const STATIC_BLOG_POSTS = [
  {
    id: "static-1",
    slug: "custom-software-development-cost-in-india-worldwide-2026-guide",
    title: "Custom Software Development Cost in India & Worldwide (2026 Complete Guide)",
    category: "Engineering",
    date: "August 2026",
    readTime: "8 min read",
    author: {
      name: "Anavya Infotech",
      role: "Software Architect",
      avatar: "/logo.png",
    },
    description:
      "A detailed 2026 pricing and cost breakdown for custom web applications, mobile apps, enterprise CRMs, and AI chatbot integrations.",
    image: "/development-illustration.jpg",
    imageAlt: "Custom Software Development Cost Guide 2026",
    featured: true,
    tags: ["Custom Software", "Development Cost", "Next.js", "App Architecture"],
    content: `
      <h2>How Much Does Custom Software Development Cost in 2026?</h2>
      <p>Custom software development costs typically range from <strong>$499 to $2,999+ (₹35,000 to ₹2,25,000+)</strong> depending on scope, database complexity, third-party API integrations, and AI features.</p>
      
      <h3>Cost Breakdown by Project Type:</h3>
      <ul>
        <li><strong>High-Converting Business Website:</strong> $499 – $999 (₹35,000 – ₹70,000)</li>
        <li><strong>Custom Web Application (Next.js & React):</strong> $1,299 – $2,499 (₹95,000 – ₹1,80,000)</li>
        <li><strong>Cross-Platform Mobile App (iOS & Android):</strong> $1,999 – $3,500 (₹1,50,000 – ₹2,50,000)</li>
        <li><strong>Autonomous AI Support Agent & RAG Pipeline:</strong> $1,499 – $3,000 (₹1,10,000 – ₹2,20,000)</li>
      </ul>

      <p>Partnering with an Indian software engineering firm like Anavya Infotech delivers enterprise-grade code quality with up to 60% cost efficiency compared to US/EU agency rates.</p>
    `,
  },
  {
    id: "static-2",
    slug: "nextjs-app-router-performance-seo-optimization-blueprint",
    title: "Next.js App Router Performance & SEO Blueprint",
    category: "Web Engineering",
    date: "August 2026",
    readTime: "6 min read",
    author: {
      name: "Anavya Infotech",
      role: "Lead Frontend Engineer",
      avatar: "/logo.png",
    },
    description:
      "Architectural blueprints for achieving perfect 100 Lighthouse scores, Core Web Vitals optimization, and dynamic JSON-LD schema injections.",
    image: "/development-illustration.jpg",
    imageAlt: "Next.js App Router SEO Optimization",
    featured: false,
    tags: ["Next.js", "SEO", "Core Web Vitals", "React"],
    content: "<p>In-depth technical guide for optimizing Next.js App Router applications...</p>",
  },
  {
    id: "static-3",
    slug: "how-to-build-custom-ai-support-chatbot-rag-architecture-2026",
    title: "How to Build a Custom AI Support Agent with RAG Architecture",
    category: "AI & Automation",
    date: "August 2026",
    readTime: "7 min read",
    author: {
      name: "Anavya Infotech",
      role: "AI Systems Engineer",
      avatar: "/logo.png",
    },
    description:
      "Step-by-step technical guide for building zero-data-retention AI support bots powered by OpenAI GPT-4, Qdrant vector search, and custom REST APIs.",
    image: "/technology-illustration.jpg",
    imageAlt: "AI Support Agent RAG Architecture",
    featured: false,
    tags: ["AI Agents", "RAG Architecture", "OpenAI", "Python"],
    content: "<p>Technical architectural blueprint for building custom RAG support agents...</p>",
  },
  {
    id: "static-4",
    slug: "white-label-seo-reseller-program-agency-scaling-guide",
    title: "White Label SEO Reseller Program: Scaling Digital Agencies in 2026",
    category: "SEO & Growth",
    date: "August 2026",
    readTime: "5 min read",
    author: {
      name: "Anavya Infotech",
      role: "SEO Strategist",
      avatar: "/logo.png",
    },
    description:
      "How digital marketing agencies resell enterprise SEO packages, technical audits, and link authority building under their own brand.",
    image: "/growth-illustration.jpg",
    imageAlt: "White Label SEO Reseller Program Guide",
    featured: false,
    content: "<p>Guide to scaling agency fulfillment with white label SEO programs...</p>",
  },
];

export const BLOG_POSTS = STATIC_BLOG_POSTS;

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

// Internal function to fetch published blog listing summaries from Supabase
async function fetchBlogPostsFromDb() {
  let dbFormattedPosts = [];
  try {
    const { data: dbPosts, error } = await supabaseAdmin
      .from("blogs")
      .select("id, slug, title, category, author, excerpt, image_url, tags, is_published, created_at")
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (!error && dbPosts && dbPosts.length > 0) {
      dbFormattedPosts = dbPosts.map((post, idx) => formatDbPost(post, idx));
    }
  } catch (err) {
    console.error("Error fetching blog posts from Supabase:", err);
  }

  // Merge DB posts with static posts, deduplicating by slug
  const dbSlugs = new Set(dbFormattedPosts.map((p) => p.slug));
  const missingStaticPosts = STATIC_BLOG_POSTS.filter((p) => !dbSlugs.has(p.slug));
  
  const mergedPosts = [...dbFormattedPosts, ...missingStaticPosts];
  return mergedPosts.map((post, idx) => ({ ...post, featured: idx === 0 }));
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

    if (!error && dbPost) {
      return formatDbPost(dbPost, 0);
    }
  } catch (err) {
    console.error("Error fetching blog post by slug:", err);
  }

  // Fallback to static blog posts array if DB post is not found
  const staticPost = STATIC_BLOG_POSTS.find((p) => p.slug === slug);
  return staticPost || null;
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

// Backwards compatibility export handled via STATIC_BLOG_POSTS alias
