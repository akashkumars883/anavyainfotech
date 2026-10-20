import { createClient } from "@libsql/client";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const url = process.env.TURSO_DATABASE_URL || "";
const authToken = process.env.TURSO_AUTH_TOKEN || "";

const tursoClient = createClient({ url, authToken });

async function migrate() {
  try {
    console.log("Adding meta_title...");
    try {
      await tursoClient.execute("ALTER TABLE blogs ADD COLUMN meta_title TEXT;");
      console.log("meta_title added.");
    } catch (e) {
      console.log("meta_title might already exist:", e.message);
    }
    console.log("Migration complete!");
  } catch (err) {
    console.error("Migration failed", err);
  }
}

migrate();
