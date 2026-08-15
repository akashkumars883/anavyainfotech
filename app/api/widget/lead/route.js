import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// In-memory leads cache array
const globalLeadsStore = globalThis._chatbotLeadsStore || [];
if (!globalThis._chatbotLeadsStore) {
  globalThis._chatbotLeadsStore = globalLeadsStore;
}

// GET API to fetch all chatbot leads for Admin Dashboard
export async function GET() {
  try {
    let leads = [...globalLeadsStore];

    // Try fetching from Supabase if available
    try {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const { data, error } = await supabaseAdmin
          .from("chatbot_leads")
          .select("*")
          .order("created_at", { ascending: false });

        if (data && data.length > 0) {
          leads = data;
        }
      }
    } catch (e) {
      console.warn("Supabase GET leads notice:", e.message);
    }

    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST API to capture & store a new chatbot lead
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phoneEmail, siteId } = body;

    if (!name || !phoneEmail) {
      return NextResponse.json({ error: "Name and Phone/Email are required" }, { status: 400 });
    }

    const leadRecord = {
      id: "lead-" + Date.now(),
      site_id: siteId || "anavyainfotech-com",
      name: name.trim(),
      phone_email: phoneEmail.trim(),
      created_at: new Date().toISOString(),
    };

    // Store in-memory
    globalLeadsStore.unshift(leadRecord);

    // Store in Supabase table
    try {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        await supabaseAdmin.from("chatbot_leads").insert([
          {
            site_id: siteId || "anavyainfotech-com",
            name: name.trim(),
            phone_email: phoneEmail.trim(),
            created_at: new Date().toISOString(),
          },
        ]);
      }
    } catch (e) {
      console.warn("Supabase lead save notice:", e.message);
    }

    console.log("New Chatbot Lead Captured:", leadRecord);

    return NextResponse.json({ success: true, leadRecord });
  } catch (err) {
    console.error("Lead Capture API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
