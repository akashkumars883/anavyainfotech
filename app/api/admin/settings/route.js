import { NextResponse } from "next/server";

// In-memory global store for admin site & chatbot settings fallback
if (!globalThis._siteSettingsStore) {
  globalThis._siteSettingsStore = {
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
}

export async function GET() {
  return NextResponse.json({
    success: true,
    settings: globalThis._siteSettingsStore,
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    globalThis._siteSettingsStore = {
      ...globalThis._siteSettingsStore,
      ...body,
    };

    return NextResponse.json({
      success: true,
      message: "Site settings updated successfully!",
      settings: globalThis._siteSettingsStore,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
