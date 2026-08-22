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

console.log("Connecting to NEW Supabase DB:", url);
const supabase = createClient(url, key);

async function importData() {
  const backupDir = path.join(__dirname, "../db_backup");
  if (!fs.existsSync(backupDir)) {
    console.error("Error: db_backup folder not found!");
    return;
  }

  const files = fs.readdirSync(backupDir).filter((f) => f.endsWith(".json") && f !== "summary.json");

  for (const file of files) {
    const tableName = file.replace(".json", "");
    const filePath = path.join(backupDir, file);
    const records = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (!records || records.length === 0) {
      console.log(`Skipping empty table backup: ${file}`);
      continue;
    }

    console.log(`Importing ${records.length} records into '${tableName}'...`);
    const { data, error } = await supabase.from(tableName).upsert(records);

    if (error) {
      console.error(`✗ Error importing into '${tableName}':`, error.message);
    } else {
      console.log(`✓ Successfully imported ${records.length} rows into '${tableName}'!`);
    }
  }

  console.log("\nData Migration Complete!");
}

importData();
