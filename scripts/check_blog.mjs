import { createClient } from "@libsql/client";

const url = "libsql://anavya-infotech-anavyainfotech.aws-ap-south-1.turso.io";
const authToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODc0MjU2MjMsImlkIjoiMDFhMDJhZGMtZjAwMS03NThiLTg0NDAtNjZhNTFlODk3NjNkIiwia2lkIjoiNGtyc01Yc1B6NU9pcGZzUG5ZQkMwcHBtT04yQVl0bFl4c3VGc0dZc3Z5WSIsInJpZCI6IjBhYjUwNGQxLWZlNzUtNDcyMS05YTJmLTEyYjY4OGJkOGU4OCJ9.xKBRx3M85b-WXqwFRw9tSoAxlm2HSYcewNsCLtz0DnO56VZg43nUaLteik88J4HD5oxnM0aN2RrcE5y7e4mKBA";

const tursoClient = createClient({ url, authToken });

async function checkLatestBlog() {
  try {
    const res = await tursoClient.execute(
      "SELECT title, slug, created_at FROM blogs ORDER BY created_at DESC LIMIT 1"
    );
    if (res.rows && res.rows.length > 0) {
      console.log("Latest Blog Uploaded:");
      console.log(JSON.stringify(res.rows[0], null, 2));
    } else {
      console.log("No blogs found in the database.");
    }
  } catch (err) {
    console.error("Error fetching blogs", err);
  }
}

checkLatestBlog();
