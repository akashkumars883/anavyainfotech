import { getBlogPosts } from "@/lib/blogData";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolioData";

export default async function sitemap() {
  const BASE_URL = "https://www.anavyainfotech.com";

  // Static core pages
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "daily" },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/case-studies`, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE_URL}/pricing`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/budget-calculator`, priority: 0.95, changeFrequency: "daily" },
    { url: `${BASE_URL}/hire-nextjs-developers-india`, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/offshore-software-development-company`, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/ecommerce-offer`, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/careers`, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE_URL}/careers/openings`, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE_URL}/blog`, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/terms-of-service`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/refund-policy`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${BASE_URL}/sitemap`, priority: 0.6, changeFrequency: "weekly" },
  ];

  // Case Study pages
  const caseStudyPages = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${BASE_URL}/case-studies/${project.slug}`,
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
    ...(post.isoDate ? { lastModified: new Date(post.isoDate) } : {}),
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
    priority: 0.85,
    changeFrequency: "weekly",
  }));

  // Location pages
  const { LOCATIONS_DATA } = require("@/lib/locationsData");
  const locationPages = LOCATIONS_DATA.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  return [
    ...staticPages,
    ...caseStudyPages,
    ...blogPages,
    ...servicePages,
    ...solutionPages,
    ...locationPages,
  ];
}

