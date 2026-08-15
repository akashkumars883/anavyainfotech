import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phoneEmail, siteId } = body;

    if (!name || !phoneEmail) {
      return NextResponse.json({ error: "Name and Phone/Email are required" }, { status: 400 });
    }

    const leadRecord = {
      site_id: siteId || "general",
      name,
      contact: phoneEmail,
      created_at: new Date().toISOString(),
    };

    // Save lead to Supabase if available
    try {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        await supabaseAdmin.from("chatbot_leads").insert([
          {
            site_id: siteId || "general",
            name,
            phone_email: phoneEmail,
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
