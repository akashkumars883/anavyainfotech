export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/cdn-cgi/"],
      },
    ],
    sitemap: "https://www.anavyainfotech.com/sitemap.xml",
  };
}
