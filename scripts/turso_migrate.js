const { createClient } = require("@libsql/client");
const fs = require("fs");
const path = require("path");

const url = "libsql://anavya-infotech-anavyainfotech.aws-ap-south-1.turso.io";
const authToken =
  "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODc0MjU2MjMsImlkIjoiMDFhMDJhZGMtZjAwMS03NThiLTg0NDAtNjZhNTFlODk3NjNkIiwia2lkIjoiNGtyc01Yc1B6NU9pcGZzUG5ZQkMwcHBtT04yQVl0bFl4c3VGc0dZc3Z5WSIsInJpZCI6IjBhYjUwNGQxLWZlNzUtNDcyMS05YTJmLTEyYjY4OGJkOGU4OCJ9.xKBRx3M85b-WXqwFRw9tSoAxlm2HSYcewNsCLtz0DnO56VZg43nUaLteik88J4HD5oxnM0aN2RrcE5y7e4mKBA";

const turso = createClient({ url, authToken });

async function migrate() {
  console.log("Connecting to Turso Database...");

  // 1. Create Tables
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS blogs (
      id TEXT PRIMARY KEY,
      title TEXT,
      slug TEXT UNIQUE,
      excerpt TEXT,
      content TEXT,
      image_url TEXT,
      author TEXT,
      category TEXT,
      is_published INTEGER DEFAULT 1,
      created_at TEXT,
      tags TEXT
    );
  `);
  console.log("✓ 'blogs' table created/verified.");

  await turso.execute(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      created_at TEXT,
      name TEXT,
      email TEXT,
      service TEXT,
      message TEXT,
      status TEXT DEFAULT 'new'
    );
  `);
  console.log("✓ 'leads' table created/verified.");

  await turso.execute(`
    CREATE TABLE IF NOT EXISTS click_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visitor_id TEXT NOT NULL,
      page_path TEXT NOT NULL,
      element_tag TEXT,
      element_text TEXT,
      element_id TEXT,
      element_class TEXT,
      data_track TEXT,
      click_x INTEGER,
      click_y INTEGER,
      screen_width INTEGER,
      screen_height INTEGER,
      user_ip TEXT,
      user_agent TEXT,
      created_at TEXT
    );
  `);
  console.log("✓ 'click_events' table created/verified.");

  // 2. Import Blogs
  const blogsPath = path.join(__dirname, "../db_backup/blogs.json");
  if (fs.existsSync(blogsPath)) {
    const blogs = JSON.parse(fs.readFileSync(blogsPath, "utf8"));
    console.log(`Importing ${blogs.length} blogs into Turso...`);

    for (const blog of blogs) {
      await turso.execute({
        sql: `INSERT OR REPLACE INTO blogs (id, title, slug, excerpt, content, image_url, author, category, is_published, created_at, tags)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          blog.id,
          blog.title,
          blog.slug,
          blog.excerpt || "",
          blog.content || "",
          blog.image_url || "",
          blog.author || "",
          blog.category || "",
          blog.is_published ? 1 : 0,
          blog.created_at || new Date().toISOString(),
          Array.isArray(blog.tags) ? JSON.stringify(blog.tags) : blog.tags || "[]",
        ],
      });
    }
    console.log(`✓ Successfully imported ${blogs.length} blogs!`);
  }

  // 3. Import Leads
  const leadsPath = path.join(__dirname, "../db_backup/leads.json");
  if (fs.existsSync(leadsPath)) {
    const leads = JSON.parse(fs.readFileSync(leadsPath, "utf8"));
    console.log(`Importing ${leads.length} leads into Turso...`);

    for (const lead of leads) {
      await turso.execute({
        sql: `INSERT OR REPLACE INTO leads (id, created_at, name, email, service, message, status)
              VALUES (?, ?, ?, ?, ?, ?, ?)`,
        args: [
          lead.id,
          lead.created_at || new Date().toISOString(),
          lead.name || "",
          lead.email || "",
          lead.service || "",
          lead.message || "",
          lead.status || "new",
        ],
      });
    }
    console.log(`✓ Successfully imported ${leads.length} leads!`);
  }

  console.log("\n🎉 MIGRATION TO TURSO COMPLETE!");
}

migrate().catch((err) => console.error("Migration Error:", err));
