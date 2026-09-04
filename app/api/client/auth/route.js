import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// In-memory fallback client sessions & users store
const globalClientUsers = globalThis._clientUsersStore || new Map();
if (!globalThis._clientUsersStore) {
  globalThis._clientUsersStore = globalClientUsers;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { action, email, password, name, siteId, siteUrl } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. REGISTER ACTION
    if (action === "register") {
      const cleanSiteId = (siteId || email.split("@")[0]).toLowerCase().replace(/[^a-z0-9-]/g, "-");
      
      const userData = {
        email: cleanEmail,
        name: name || cleanEmail.split("@")[0],
        password, // Basic hashed/plaintext storage for client demo auth
        siteId: cleanSiteId,
        siteUrl: siteUrl || `https://${cleanSiteId}.com`,
        createdAt: new Date().toISOString(),
      };

      globalClientUsers.set(cleanEmail, userData);

      // Save to Supabase client_accounts table if available
      try {
        if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
          await supabaseAdmin.from("client_accounts").upsert({
            email: cleanEmail,
            name: userData.name,
            site_id: cleanSiteId,
            site_url: userData.siteUrl,
            updated_at: new Date().toISOString(),
          });
        }
      } catch (sbErr) {
        console.warn("[Client Auth Supabase Notice]:", sbErr.message);
      }

      return NextResponse.json({
        success: true,
        message: "Registration successful",
        user: {
          email: userData.email,
          name: userData.name,
          siteId: userData.siteId,
          siteUrl: userData.siteUrl,
        },
      });
    }

    // 2. LOGIN ACTION
    let user = globalClientUsers.get(cleanEmail);

    // Fallback: Check Supabase DB for user
    if (!user && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { data } = await supabaseAdmin
          .from("client_accounts")
          .select("*")
          .eq("email", cleanEmail)
          .maybeSingle();

        if (data) {
          user = {
            email: data.email,
            name: data.name || cleanEmail.split("@")[0],
            siteId: data.site_id,
            siteUrl: data.site_url,
          };
          globalClientUsers.set(cleanEmail, user);
        }
      } catch (err) {
        console.warn("Supabase user fetch notice:", err.message);
      }
    }

    // Dynamic auto-login / account creation if user doesn't exist yet
    if (!user) {
      const cleanSiteId = (siteId || cleanEmail.split("@")[0]).toLowerCase().replace(/[^a-z0-9-]/g, "-");
      user = {
        email: cleanEmail,
        name: name || cleanEmail.split("@")[0],
        siteId: cleanSiteId,
        siteUrl: siteUrl || `https://${cleanSiteId}.com`,
        createdAt: new Date().toISOString(),
      };
      globalClientUsers.set(cleanEmail, user);
    }

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
        name: user.name,
        siteId: user.siteId,
        siteUrl: user.siteUrl,
      },
    });
  } catch (err) {
    console.error("Client Auth API Error:", err);
    return NextResponse.json(
      { error: err.message || "Authentication failed" },
      { status: 500 }
    );
  }
}
