require("@next/env").loadEnvConfig(process.cwd());
const { createClient } = require("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(url, key);

async function checkTables() {
  const possibleTables = [
    "blogs",
    "leads",
    "contacts",
    "newsletter",
    "widget_leads",
    "ai_knowledge_bases",
    "keywords",
    "seo_keywords",
    "services",
    "users",
    "analytics",
    "events",
  ];

  console.log("Checking all potential table names in old Supabase DB...\n");

  for (const table of possibleTables) {
    try {
      const { data, error, count } = await supabase.from(table).select("*", { count: "exact", head: false }).limit(2);
      if (!error && data) {
        console.log(`✓ Table FOUND: '${table}' -> ${data.length} sample row(s) fetched`);
        if (data.length > 0) {
          console.log(`   Sample keys:`, Object.keys(data[0]));
        }
      } else {
        console.log(`- Table '${table}': ${error ? error.message : "Not found"}`);
      }
    } catch (e) {
      console.log(`- Table '${table}': Exception - ${e.message}`);
    }
  }
}

checkTables();
