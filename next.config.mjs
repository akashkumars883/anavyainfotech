/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@lottiefiles/dotlottie-react",
      "three",
      "lenis",
      "@supabase/supabase-js",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio/:slug*",
        destination: "/case-studies/:slug*",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      // 301 Redirects for Old Location URLs to New SEO URLs
      { source: "/locations/delhi-ncr", destination: "/locations/digital-marketing-agency-delhi-ncr", permanent: true },
      { source: "/locations/noida", destination: "/locations/web-development-company-in-noida", permanent: true },
      { source: "/locations/gurgaon", destination: "/locations/seo-agency-in-gurgaon", permanent: true },
      { source: "/locations/faridabad", destination: "/locations/custom-software-development-faridabad", permanent: true },
      { source: "/locations/mumbai", destination: "/locations/it-solutions-company-in-mumbai", permanent: true },
      { source: "/locations/bangalore", destination: "/locations/custom-software-and-ai-in-bangalore", permanent: true },
      { source: "/locations/usa", destination: "/locations/offshore-software-development-usa", permanent: true },
      { source: "/locations/uk", destination: "/locations/web-development-outsourcing-uk", permanent: true },
      { source: "/locations/uae", destination: "/locations/e-commerce-development-in-uae", permanent: true },
      { source: "/locations/australia", destination: "/locations/hire-dedicated-developers-australia", permanent: true },
      { source: "/locations/canada", destination: "/locations/seo-and-tech-partner-canada", permanent: true },
      { source: "/locations/singapore", destination: "/locations/offshore-web-development-singapore", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
