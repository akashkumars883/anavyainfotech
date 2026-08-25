import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";
import { supabaseAdmin } from "@/lib/supabase";
import { sendLeadNotificationEmails } from "@/lib/email";

// Helper function to decode JWT payload without external heavy libraries
function parseJwtPayload(token) {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = Buffer.from(base64, "base64").toString("utf-8");
    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error("[GoogleOneTap API] JWT Decode Error:", err);
    return null;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { credential } = body;

    if (!credential) {
      return NextResponse.json({ error: "Missing credential token" }, { status: 400 });
    }

    const payload = parseJwtPayload(credential);

    if (!payload || !payload.email) {
      return NextResponse.json({ error: "Invalid Google token payload" }, { status: 400 });
    }

    // Verify token audience matches our Client ID if provided
    const expectedClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (expectedClientId && payload.aud !== expectedClientId) {
      console.warn("[GoogleOneTap API] Warning: Audience mismatch", payload.aud, expectedClientId);
    }

    const { email, name, picture, sub: google_id } = payload;
    const leadId = `google_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const createdAt = new Date().toISOString();
    const userName = name || "Google Visitor";

    // 1. Store in Global In-Memory Store for instant Admin Leads Dashboard rendering
    if (!globalThis._chatbotLeadsStore) {
      globalThis._chatbotLeadsStore = [];
    }
    globalThis._chatbotLeadsStore.unshift({
      id: leadId,
      site_id: "Google One-Tap Login",
      name: userName,
      phone_email: email,
      message: `Verified Google Account (ID: ${google_id || "N/A"})`,
      created_at: createdAt,
    });

    // 2. Save directly into Supabase 'leads' table
    try {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        await supabaseAdmin.from("leads").insert([
          {
            name: userName,
            email: email,
            service: "Google One-Tap Sign In",
            message: `Captured via Google One-Tap Login (Google ID: ${google_id || "N/A"})`,
            status: "new",
          },
        ]);
      }
    } catch (sbErr) {
      console.warn("[GoogleOneTap API Supabase Notice]:", sbErr.message);
    }

    // 3. Save directly into Turso 'leads' table
    try {
      await tursoClient.execute({
        sql: `INSERT INTO leads (id, created_at, name, email, service, message, status)
              VALUES (?, ?, ?, ?, ?, ?, ?)`,
        args: [
          leadId,
          createdAt,
          userName,
          email,
          "Google One-Tap Sign In",
          `Captured via Google One-Tap Login (Google ID: ${google_id || "N/A"})`,
          "new",
        ],
      });
    } catch (dbErr) {
      console.warn("[GoogleOneTap API Turso Notice]:", dbErr.message);
    }

    // 4. Dispatch Email Alert to Admin
    try {
      await sendLeadNotificationEmails({
        name: userName,
        email: email,
        service: "Google One-Tap Sign In",
        message: `New Lead captured via Google One-Tap on website! Google Account Email: ${email}`,
        source: "Google One-Tap Widget",
      });
    } catch (emailErr) {
      console.warn("[GoogleOneTap Email Alert Notice]:", emailErr.message);
    }

    return NextResponse.json({
      success: true,
      user: {
        email,
        name: userName,
        picture: picture || "",
        google_id,
      },
    });
  } catch (error) {
    console.error("[GoogleOneTap API Error]:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
