const { createClient } = require("@supabase/supabase-js");

const url = "https://juvkrpmrmjhhbnhxuwmd.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dmtycG1ybWpoaGJuaHh1d21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTE1Mjg5NSwiZXhwIjoyMDkwNzI4ODk1fQ.THCIZkcz6-AUng9b7rJ7kMjkBy_GL4ct88o0Ildis7o";

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
    "click_events"
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
