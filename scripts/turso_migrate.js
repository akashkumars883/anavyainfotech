require("@next/env").loadEnvConfig(process.cwd());
const { createClient } = require("@libsql/client");
const fs = require("fs");
const path = require("path");

const url = process.env.TURSO_DATABASE_URL || "";
const authToken = process.env.TURSO_AUTH_TOKEN || "";

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
