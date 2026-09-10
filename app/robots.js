export default function robots() {
  return {
    rules: {
      userAgent: ["*", "Googlebot", "Bingbot", "Yandex", "YandexBot", "DuckDuckBot", "Brave", "Baiduspider", "Slurp"],
      allow: "/",
      disallow: ["/api/", "/admin/", "/cdn-cgi/"],
    },
    sitemap: "https://www.anavyainfotech.com/sitemap.xml",
  };
}
