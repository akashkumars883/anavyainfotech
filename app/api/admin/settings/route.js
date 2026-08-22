import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";

const DEFAULT_SETTINGS = {
  announcementBanner: {
    enabled: true,
    text: "⚡ Special Offer: Get 20% OFF on Custom AI & Web App Development this month!",
    link: "/contact",
  },
  chatbot: {
    enabled: true,
    welcomeMessage: "Hello! 👋 Welcome to Anavya Infotech. How can we help transform your digital product today?",
    systemPrompt: "You are an AI Sales & Technical Consultant for Anavya Infotech. Help users explore web development, AI automation, SEO, and cloud services.",
    quickReplies: ["Get Web App Quote", "AI Automation Services", "Speak with Team"],
  },
  leadSettings: {
    autoReplyEmail: true,
    notificationEmail: "ak706908@gmail.com",
  },
};

export async function GET() {
  try {
    const res = await tursoClient.execute({
      sql: "SELECT data FROM site_settings WHERE id = 'main' LIMIT 1",
    });

    if (res.rows && res.rows.length > 0 && res.rows[0].data) {
      const dbSettings = JSON.parse(res.rows[0].data);
      return NextResponse.json({
        success: true,
        settings: { ...DEFAULT_SETTINGS, ...dbSettings },
      });
    }
  } catch (err) {
    console.warn("[AdminSettings] Turso read notice:", err.message);
  }

  return NextResponse.json({
    success: true,
    settings: DEFAULT_SETTINGS,
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const updatedSettings = {
      ...DEFAULT_SETTINGS,
      ...body,
    };

    const dataJson = JSON.stringify(updatedSettings);

    await tursoClient.execute({
      sql: "INSERT OR REPLACE INTO site_settings (id, data) VALUES ('main', ?)",
      args: [dataJson],
    });

    return NextResponse.json({
      success: true,
      message: "Site settings updated and saved to Turso database!",
      settings: updatedSettings,
    });
  } catch (err) {
    console.error("[AdminSettings] Turso write error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
