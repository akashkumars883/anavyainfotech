import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";
import { checkRateLimit } from "@/lib/redis";
import { sendLeadNotificationEmails } from "@/lib/email";

async function verifyTurnstileToken(token) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY || "0x4AAAAAAERZCchNh4IS0w8cg2mP-59i9_I";
  if (!secretKey || !token) return true;

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const outcome = await res.json();
    return outcome.success === true;
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return true;
  }
}

export async function POST(request) {
  try {
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "anon";
    const rateCheck = await checkRateLimit(clientIp, "contact_submit", 5, 60);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: "Too many submission attempts. Please wait 60 seconds before trying again." },
        { status: 429 }
      );
    }
    let body;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        service: formData.get("service") || "",
        budget: formData.get("budget") || "",
        message: formData.get("message") || "",
        turnstileToken: formData.get("cf-turnstile-response") || "",
      };
    }

    const { name, email, service, budget, message, turnstileToken } = body;

    if (turnstileToken) {
      const isValidHuman = await verifyTurnstileToken(turnstileToken);
      if (!isValidHuman) {
        return NextResponse.json(
          { error: "Security check failed. Automated submission detected." },
          { status: 403 }
        );
      }
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 }
      );
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const createdAt = new Date().toISOString();
    const serviceVal = service || "General Consultation";
    const messageVal = message || (budget ? `Budget: ${budget}` : "");

    // Insert directly into Turso 'leads' table
    try {
      await tursoClient.execute({
        sql: "INSERT INTO leads (id, created_at, name, email, service, message, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: [leadId, createdAt, name, email, serviceVal, messageVal, "new"],
      });
    } catch (dbErr) {
      console.error("Turso leads insert error:", dbErr.message);
    }

    // Automatically Forward & Capture Lead into Anavya CRM
    try {
      const crmUrl = process.env.CRM_WEBHOOK_URL || "http://localhost:3000/api/v1/leads";
      await fetch(crmUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service: serviceVal,
          message: messageVal,
          budget: budget || 0,
          source: "Anavya Infotech Website Form",
        }),
      });
    } catch (crmErr) {
      console.error("CRM Auto-Sync Error:", crmErr);
    }

    // Dispatch emails via SMTP
    try {
      await sendLeadNotificationEmails({
        name,
        email,
        service: serviceVal,
        message: messageVal,
        source: "Contact Form Submission",
      });
    } catch (e) {
      console.error("Email send trigger error:", e);
    }

    if (!contentType.includes("application/json")) {
      return NextResponse.redirect(new URL("/contact?success=true", request.url), 303);
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      data: { id: leadId, name, email, service: serviceVal, message: messageVal, created_at: createdAt },
    });
  } catch (err) {
    console.error("API contact submission error:", err);
    return NextResponse.json({ error: "Server processing error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const res = await tursoClient.execute("SELECT * FROM leads ORDER BY created_at DESC");
    return NextResponse.json({ inquiries: res.rows || [] });
  } catch (err) {
    console.error("API contact GET error:", err);
    return NextResponse.json({ inquiries: [] });
  }
}
