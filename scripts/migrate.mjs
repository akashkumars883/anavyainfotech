import { createClient } from "@libsql/client";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const url = process.env.TURSO_DATABASE_URL || "";
const authToken = process.env.TURSO_AUTH_TOKEN || "";

const tursoClient = createClient({ url, authToken });

async function migrate() {
  try {
    console.log("Adding meta_keywords...");
    try {
      await tursoClient.execute("ALTER TABLE blogs ADD COLUMN meta_keywords TEXT;");
      console.log("meta_keywords added.");
    } catch (e) {
      console.log("meta_keywords might already exist:", e.message);
    }

    console.log("Adding meta_description...");
    try {
      await tursoClient.execute("ALTER TABLE blogs ADD COLUMN meta_description TEXT;");
      console.log("meta_description added.");
    } catch (e) {
      console.log("meta_description might already exist:", e.message);
    }

    console.log("Migration complete!");
  } catch (err) {
    console.error("Migration failed", err);
  }
}

migrate();
