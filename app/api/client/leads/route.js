import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const siteId = searchParams.get("siteId");

    if (!siteId) {
      return NextResponse.json({ error: "siteId query param is required" }, { status: 400 });
    }

    const cleanSiteId = siteId.toLowerCase().trim();
    let siteLeads = [];

    // 1. Fetch from global in-memory chatbot leads store
    if (globalThis._chatbotLeadsStore) {
      siteLeads = [...globalThis._chatbotLeadsStore];
    }

    // 2. Fetch from Supabase 'leads' table
    try {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const { data } = await supabaseAdmin
          .from("leads")
          .select("*")
          .order("created_at", { ascending: false });

        if (data && data.length > 0) {
          const sbMatched = data.map((item) => ({
            id: item.id,
            site_id: item.service || item.site_id || "anavya-infotech",
            name: item.name || "Website Visitor",
            phone_email: item.phone_email || item.email || item.message || "N/A",
            message: item.message || "",
            created_at: item.created_at,
          }));

          siteLeads = [...sbMatched, ...siteLeads];
        }
      }
    } catch (e) {
      console.warn("Client leads Supabase fetch notice:", e.message);
    }

    // 3. Fetch from Turso database fallback
    try {
      const { tursoClient } = await import("@/lib/turso");
      const tursoRes = await tursoClient.execute("SELECT * FROM leads ORDER BY created_at DESC LIMIT 50");
      if (tursoRes.rows && tursoRes.rows.length > 0) {
        const tursoLeads = tursoRes.rows.map((item) => ({
          id: item.id,
          site_id: item.service || "anavya-infotech",
          name: item.name || "Website Visitor",
          phone_email: item.email || item.phone_email || "N/A",
          message: item.message || "",
          created_at: item.created_at,
        }));
        siteLeads = [...siteLeads, ...tursoLeads];
      }
    } catch (tErr) {
      console.warn("Turso client leads notice:", tErr.message);
    }

    // Filter leads to strictly return Chatbot Widget captured leads
    const chatbotOnlyLeads = siteLeads.filter((l) => {
      const s = (l.site_id || "").toLowerCase();
      const m = (l.message || "").toLowerCase();
      const p = (l.phone_email || "").toLowerCase();

      // Check if lead was captured via chatbot widget
      const isChatbotSource = s.includes("anavya") || s.includes("chatbot") || s.includes("widget") || m.includes("chatbot") || m.includes("contact:");
      const matchesTenant = cleanSiteId === "anavya-infotech" || s.includes(cleanSiteId) || cleanSiteId.includes(s) || cleanSiteId === "demo";

      return isChatbotSource || matchesTenant;
    });

    // Deduplicate leads
    const seen = new Set();
    const uniqueLeads = chatbotOnlyLeads.filter((l) => {
      const key = `${l.name}_${l.phone_email}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return NextResponse.json({
      success: true,
      siteId: cleanSiteId,
      count: uniqueLeads.length,
      leads: uniqueLeads,
    });
  } catch (err) {
    console.error("Client Leads API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
