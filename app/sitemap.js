import { getBlogPosts } from "@/lib/blogData";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolioData";
import { LOCATIONS_DATA } from "@/lib/locationsData";

export default async function sitemap() {
  const BASE_URL = "https://www.anavyainfotech.com";
  const now = new Date();

  // Static core pages with realistic lastModified
  const staticPages = [
    { url: BASE_URL, lastModified: now, priority: 1.0, changeFrequency: "daily" },
    { url: `${BASE_URL}/services`, lastModified: now, priority: 0.95, changeFrequency: "daily" },
    { url: `${BASE_URL}/about`, lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/case-studies`, lastModified: now, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE_URL}/pricing`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/budget-calculator`, lastModified: now, priority: 0.95, changeFrequency: "daily" },
    { url: `${BASE_URL}/hire-nextjs-developers-india`, lastModified: now, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/offshore-software-development-company`, lastModified: now, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/ecommerce-offer`, lastModified: now, priority: 0.85, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/careers`, lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/careers/openings`, lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/blog`, lastModified: now, priority: 0.9, changeFrequency: "daily" },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/refund-policy`, lastModified: now, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/sitemap`, lastModified: now, priority: 0.6, changeFrequency: "weekly" },
  ];

  // Case Study pages
  const caseStudyPages = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${BASE_URL}/case-studies/${project.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  // Fetch blog posts
  let blogPosts = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (e) {
    console.error("Error loading blog posts for sitemap:", e);
  }

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.isoDate ? new Date(post.isoDate) : now,
    priority: 0.85,
    changeFrequency: "weekly",
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
    "white-label-seo",
  ];

  const servicePages = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
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
    lastModified: now,
    priority: 0.85,
    changeFrequency: "weekly",
  }));

  // Location pages - Only include canonical indexed URLs (exclude non-canonical redirects)
  const locationPages = LOCATIONS_DATA.filter((loc) => !loc.canonicalTo).map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: now,
    priority: loc.slug.includes("faridabad") || loc.slug.includes("delhi-ncr") ? 0.9 : 0.8,
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
