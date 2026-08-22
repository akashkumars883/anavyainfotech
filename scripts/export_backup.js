const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const envContent = fs.readFileSync(path.join(__dirname, "../.env.local"), "utf8");
const envVars = {};
envContent.split("\n").forEach((line) => {
  const parts = line.split("=");
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join("=").trim();
    envVars[key] = val;
  }
});

const url = envVars["NEXT_PUBLIC_SUPABASE_URL"];
const key = envVars["SUPABASE_SERVICE_ROLE_KEY"] || envVars["NEXT_PUBLIC_SUPABASE_ANON_KEY"];

console.log("Connecting to Supabase:", url);
const supabase = createClient(url, key);

async function exportData() {
  const backupDir = path.join(__dirname, "../db_backup");
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const tables = ["blogs", "contacts", "newsletter", "leads", "widget_leads"];
  const exportSummary = {};

  for (const table of tables) {
    try {
      const { data, error } = await supabase.from(table).select("*");
      if (error) {
        console.log(`Table '${table}' query info:`, error.message);
        exportSummary[table] = { status: "error", error: error.message };
      } else {
        const filePath = path.join(backupDir, `${table}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`✓ Exported '${table}' (${data.length} rows) -> db_backup/${table}.json`);
        exportSummary[table] = { status: "success", count: data.length };
      }
    } catch (e) {
      console.log(`Exception on table '${table}':`, e.message);
    }
  }

  fs.writeFileSync(
    path.join(backupDir, "summary.json"),
    JSON.stringify(exportSummary, null, 2)
  );
  console.log("\nBackup process finished! Check 'db_backup/' directory.");
}

exportData();
