import { createInterface } from "node:readline/promises";
import { randomBytes, scryptSync } from "node:crypto";
import { createClient } from "@libsql/client";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const tursoClient = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
});

function hashAdminPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

function promptHidden(label) {
  if (!process.stdin.isTTY || typeof process.stdin.setRawMode !== "function") {
    throw new Error("Run this setup command in an interactive terminal.");
  }

  process.stdout.write(label);
  return new Promise((resolve, reject) => {
    let value = "";
    const stdin = process.stdin;
    const handleInput = (chunk) => {
      for (const character of chunk.toString("utf8")) {
        if (character === "\u0003") {
          cleanup();
          reject(new Error("Setup cancelled."));
          return;
        }
        if (character === "\r" || character === "\n") {
          cleanup();
          process.stdout.write("\n");
          resolve(value);
          return;
        }
        if (character === "\u007f" || character === "\b") {
          value = value.slice(0, -1);
        } else if (character >= " ") {
          value += character;
        }
      }
    };
    const cleanup = () => {
      stdin.off("data", handleInput);
      stdin.setRawMode(false);
      stdin.pause();
    };
    stdin.setRawMode(true);
    stdin.resume();
    stdin.on("data", handleInput);
  });
}

async function main() {
  if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    throw new Error("Set both TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in .env.local before creating an admin account.");
  }

  await tursoClient.execute(`
    CREATE TABLE IF NOT EXISTS admin_users (
      email TEXT PRIMARY KEY,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `);

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const email = (await rl.question("Admin email: ")).trim().toLowerCase();
  rl.close();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email address.");
  }

  const password = await promptHidden("Choose admin password (10-256 characters): ");
  const confirmation = await promptHidden("Confirm password: ");
  if (password.length < 10 || password.length > 256) {
    throw new Error("Password must be between 10 and 256 characters.");
  }
  if (password !== confirmation) throw new Error("Passwords do not match.");

  await tursoClient.execute({
    sql: "INSERT OR REPLACE INTO admin_users (email, password_hash, created_at) VALUES (?, ?, ?)",
    args: [email, hashAdminPassword(password), new Date().toISOString()],
  });
  console.log(`Admin account created for ${email}. The password was stored as a scrypt hash.`);
}

main().catch((error) => {
  console.error(`Admin setup failed: ${error.message}`);
  process.exitCode = 1;
});
