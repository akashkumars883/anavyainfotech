import { createClient } from "@libsql/client";

const url = "libsql://anavya-infotech-anavyainfotech.aws-ap-south-1.turso.io";
const authToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODc0MjU2MjMsImlkIjoiMDFhMDJhZGMtZjAwMS03NThiLTg0NDAtNjZhNTFlODk3NjNkIiwia2lkIjoiNGtyc01Yc1B6NU9pcGZzUG5ZQkMwcHBtT04yQVl0bFl4c3VGc0dZc3Z5WSIsInJpZCI6IjBhYjUwNGQxLWZlNzUtNDcyMS05YTJmLTEyYjY4OGJkOGU4OCJ9.xKBRx3M85b-WXqwFRw9tSoAxlm2HSYcewNsCLtz0DnO56VZg43nUaLteik88J4HD5oxnM0aN2RrcE5y7e4mKBA";

const tursoClient = createClient({ url, authToken });

async function updateLinks() {
  const slug = 'white-label-seo-reseller-program-agency-scaling-guide';
  const res = await tursoClient.execute({
    sql: "SELECT content FROM blogs WHERE slug = ?",
    args: [slug]
  });
  
  if (res.rows.length === 0) {
    console.log("Blog not found");
    return;
  }
  
  let content = res.rows[0].content;
  
  // Replacements
  content = content.replace(
    "our guide to local SEO for Delhi NCR businesses",
    "[our guide to local SEO for Delhi NCR businesses](/blog/local-seo-for-delhi-ncr-businesses-a-complete-guide-for-noida-gurgaon-faridabad-2026)"
  );
  content = content.replace(
    "our local SEO agency service",
    "[our local SEO agency service](/services/local-seo)"
  );
  content = content.replace(
    "answer engine optimization guide",
    "[answer engine optimization guide](/blog/how-to-use-answer-engine-optimization-in-6-easy-steps-2026)"
  );
  content = content.replace(
    "future-proofing against AI Overviews",
    "[future-proofing against AI Overviews](/blog/future-proofing-your-website-against-ai-overviews-in-2026)"
  );
  content = content.replace(
    "Delhi NCR digital marketing page",
    "[Delhi NCR digital marketing page](/locations/digital-marketing-agency-delhi-ncr)"
  );
  content = content.replace(
    "India vs USA cost guide",
    "[India vs USA cost guide](/blog/website-development-cost-in-2026-india-vs-usa-guide)"
  );
  content = content.replace(
    "12 questions to ask before hiring an SEO agency",
    "[12 questions to ask before hiring an SEO agency](/blog/12-questions-to-ask-before-hiring-a-web-development-or-seo-agency-in-delhi-ncr-2026)"
  );

  const updateRes = await tursoClient.execute({
    sql: "UPDATE blogs SET content = ? WHERE slug = ?",
    args: [content, slug]
  });
  
  console.log("Updated rows:", updateRes.rowsAffected);
}

updateLinks();
