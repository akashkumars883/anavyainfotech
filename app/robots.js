export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/_next/"],
        crawlDelay: 2,
      },
    ],
    sitemap: "https://www.anavyainfotech.com/sitemap.xml",
    host: "https://www.anavyainfotech.com",
  };
}
