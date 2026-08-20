import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { checkRateLimit } from "@/lib/redis";
import { sendLeadNotificationEmails } from "@/lib/email";

async function verifyTurnstileToken(token) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY || "0x4AAAAAAERZCchNh4IS0w8cg2mP-59i9_I";
  if (!secretKey || !token) return true; // fallback if not passed or in dev mode

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
    return true; // Graceful fallback
  }
}

export async function POST(request) {
  try {
    // 1. IP Rate Limiting via Upstash Redis (Max 5 submissions per 60s per IP)
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

    // Verify Turnstile Token if provided
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

    // Insert directly into Supabase 'leads' table
    const leadData = {
      name,
      email,
      service: service || "General Consultation",
      message: message || (budget ? `Budget: ${budget}` : ""),
      status: "new",
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert([leadData])
      .select();

    if (error) {
      console.error("Supabase leads insert error:", error.message);
    }

    // Dispatch emails via Resend (Customer Confirmation + Admin Alert)
    try {
      sendLeadNotificationEmails({
        name,
        email,
        service: service || "General Consultation",
        message: message || (budget ? `Budget: ${budget}` : ""),
        source: "Contact Form Submission",
      }).catch((e) => console.error("Background email dispatch error:", e));
    } catch (e) {
      console.error("Email send trigger error:", e);
    }

    // Redirect if form submit
    if (!contentType.includes("application/json")) {
      return NextResponse.redirect(new URL("/contact?success=true", request.url), 303);
    }

    return NextResponse.json({ success: true, message: "Lead submitted successfully", data: data?.[0] || leadData });
  } catch (err) {
    console.error("API contact submission error:", err);
    return NextResponse.json({ error: "Server processing error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      console.error("Supabase fetch leads error:", error?.message);
      return NextResponse.json({ inquiries: [] });
    }

    return NextResponse.json({ inquiries: data });
  } catch (err) {
    console.error("API contact GET error:", err);
    return NextResponse.json({ inquiries: [] });
  }
}
