import { getBlogPosts } from "@/lib/blogData";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolioData";

export default async function sitemap() {
  const BASE_URL = "https://www.anavyainfotech.com";
  const currentDate = new Date();

  // Static core pages
  const staticPages = [
    { url: BASE_URL, lastModified: currentDate, priority: 1.0, changeFrequency: "daily" },
    { url: `${BASE_URL}/about`, lastModified: currentDate, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/case-studies`, lastModified: currentDate, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE_URL}/pricing`, lastModified: currentDate, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/hire-nextjs-developers-india`, lastModified: currentDate, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/offshore-software-development-company`, lastModified: currentDate, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/blog`, lastModified: currentDate, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/privacy-policy`, lastModified: currentDate, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/terms-of-service`, lastModified: currentDate, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/refund-policy`, lastModified: currentDate, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/sitemap`, lastModified: currentDate, priority: 0.6, changeFrequency: "weekly" },
  ];

  // Case Study pages
  const caseStudyPages = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${BASE_URL}/case-studies/${project.slug}`,
    lastModified: currentDate,
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  // Fetch ALL blog posts directly from Supabase (Includes current & all future published blogs)
  let blogPosts = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (e) {
    console.error("Error loading blog posts for sitemap:", e);
  }

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : currentDate,
    priority: 0.85,
    changeFrequency: "daily",
  }));

  // Services pages
  const servicesSlugs = [
    "development",
    "business-website",
    "app-development",
    "web-applications",
    "landing-pages",
    "ecommerce",
    "technology",
    "ai-chatbot",
    "business-automation",
    "crm-custom-software",
    "api-integration",
    "growth",
    "seo",
    "local-seo",
    "ecommerce-seo",
    "technical-seo",
    "content-strategist",
    "branding",
  ];

  const servicePages = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: currentDate,
    priority: 0.9,
    changeFrequency: "weekly",
  }));

  // Solutions pages
  const solutionsSlugs = [
    "ecommerce-retail",
    "healthcare-medical",
    "real-estate",
    "fintech-finance",
    "edtech-education",
    "startups-mvp",
    "smb",
    "enterprise",
    "customer-portals",
    "inventory-systems",
    "business-intelligence",
    "cloud-saas",
  ];

  const solutionPages = solutionsSlugs.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: currentDate,
    priority: 0.85,
    changeFrequency: "weekly",
  }));

  return [
    ...staticPages,
    ...caseStudyPages,
    ...blogPages,
    ...servicePages,
    ...solutionPages,
  ];
}

