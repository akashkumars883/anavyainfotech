const { Client } = require("pg");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgresql://postgres.qzxvkjoepduumckpjpqo:Akash@72779684@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres";

async function createTable() {
  const client = new Client({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });

  try {
    console.log("Connecting to Supabase PostgreSQL database...");
    await client.connect();

    const query = `
      CREATE TABLE IF NOT EXISTS click_events (
        id BIGSERIAL PRIMARY KEY,
        visitor_id TEXT NOT NULL,
        page_path TEXT NOT NULL,
        element_tag TEXT,
        element_text TEXT,
        element_id TEXT,
        element_class TEXT,
        data_track TEXT,
        click_x INT,
        click_y INT,
        screen_width INT,
        screen_height INT,
        user_ip TEXT,
        user_agent TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS idx_click_events_page ON click_events(page_path);
      CREATE INDEX IF NOT EXISTS idx_click_events_visitor ON click_events(visitor_id);
      CREATE INDEX IF NOT EXISTS idx_click_events_created ON click_events(created_at DESC);
    `;

    await client.query(query);
    console.log("SUCCESS: click_events table and indexes created in Supabase database!");
  } catch (err) {
    console.error("ERROR creating table:", err.message);
  } finally {
    await client.end();
  }
}

createTable();
