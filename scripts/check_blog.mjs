import { createClient } from "@libsql/client";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const url = process.env.TURSO_DATABASE_URL || "";
const authToken = process.env.TURSO_AUTH_TOKEN || "";

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
