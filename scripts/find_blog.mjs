import { createClient } from "@libsql/client";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const url = process.env.TURSO_DATABASE_URL || "";
const authToken = process.env.TURSO_AUTH_TOKEN || "";

const tursoClient = createClient({ url, authToken });

async function query() {
  const res = await tursoClient.execute("SELECT id, slug, title FROM blogs WHERE slug LIKE '%seo-reseller%'");
  console.log(res.rows);
}

query();
