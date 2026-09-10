import { createClient } from "@libsql/client";

const url = "libsql://anavya-infotech-anavyainfotech.aws-ap-south-1.turso.io";
const authToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODc0MjU2MjMsImlkIjoiMDFhMDJhZGMtZjAwMS03NThiLTg0NDAtNjZhNTFlODk3NjNkIiwia2lkIjoiNGtyc01Yc1B6NU9pcGZzUG5ZQkMwcHBtT04yQVl0bFl4c3VGc0dZc3Z5WSIsInJpZCI6IjBhYjUwNGQxLWZlNzUtNDcyMS05YTJmLTEyYjY4OGJkOGU4OCJ9.xKBRx3M85b-WXqwFRw9tSoAxlm2HSYcewNsCLtz0DnO56VZg43nUaLteik88J4HD5oxnM0aN2RrcE5y7e4mKBA";

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
