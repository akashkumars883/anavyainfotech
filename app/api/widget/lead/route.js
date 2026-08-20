import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendLeadNotificationEmails } from "@/lib/email";

export const dynamic = "force-dynamic";

// In-memory leads cache array fallback
const globalLeadsStore = globalThis._chatbotLeadsStore || [];
if (!globalThis._chatbotLeadsStore) {
  globalThis._chatbotLeadsStore = globalLeadsStore;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: CORS_HEADERS });
}

// GET API to fetch all chatbot leads from Supabase 'leads' table
export async function GET() {
  try {
    let leads = [...globalLeadsStore];

    // Fetch from Supabase 'leads' table
    try {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const { data, error } = await supabaseAdmin
          .from("leads")
          .select("*")
          .order("created_at", { ascending: false });

        if (data && data.length > 0) {
          leads = data.map((item) => ({
            id: item.id,
            site_id: item.service || item.site_id || "anavyainfotech-com",
            name: item.name || "Website Visitor",
            phone_email: item.phone_email || item.email || item.message || "N/A",
            message: item.message || "",
            created_at: item.created_at,
          }));
        }
      }
    } catch (e) {
      console.warn("Supabase GET leads notice:", e.message);
    }

    return NextResponse.json({ success: true, count: leads.length, leads }, { headers: CORS_HEADERS });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500, headers: CORS_HEADERS });
  }
}

// POST API to capture & store a new chatbot lead into Supabase 'leads' table
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phoneEmail, siteId } = body;

    if (!name || !phoneEmail) {
      return NextResponse.json({ error: "Name and Phone/Email are required" }, { status: 400, headers: CORS_HEADERS });
    }

    const leadRecord = {
      id: "lead-" + Date.now(),
      site_id: siteId || "anavyainfotech-com",
      name: name.trim(),
      phone_email: phoneEmail.trim(),
      created_at: new Date().toISOString(),
    };

    // Store in-memory fallback
    globalLeadsStore.unshift(leadRecord);

    // Store directly into Supabase 'leads' table
    try {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        await supabaseAdmin.from("leads").insert([
          {
            name: name.trim(),
            email: phoneEmail.includes("@") ? phoneEmail.trim() : "phone-contact@anavyainfotech.com",
            service: siteId || "AI Chatbot Lead",
            message: `Phone / Contact: ${phoneEmail.trim()} | Site ID: ${siteId || 'anavyainfotech-com'}`,
            status: "new",
          },
        ]);
      }
    } catch (e) {
      console.warn("Supabase lead save notice:", e.message);
    }

    // Trigger Dual Resend Emails (Admin Alert + Customer Confirmation)
    try {
      sendLeadNotificationEmails({
        name: name.trim(),
        email: phoneEmail.includes("@") ? phoneEmail.trim() : null,
        phone: !phoneEmail.includes("@") ? phoneEmail.trim() : null,
        service: siteId || "AI Chatbot Lead",
        message: `Lead captured via AI Chatbot widget. Phone/Contact: ${phoneEmail.trim()}`,
        source: "AI Chatbot Widget",
      }).catch((e) => console.error("Chatbot email dispatch error:", e));
    } catch (e) {
      console.error("Chatbot email trigger error:", e);
    }

    console.log("New Chatbot Lead Captured & Pushed to Supabase:", leadRecord);

    return NextResponse.json({ success: true, leadRecord }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("Lead Capture API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500, headers: CORS_HEADERS });
  }
}

