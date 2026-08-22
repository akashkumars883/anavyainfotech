import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";

export async function POST(req) {
  try {
    let body = {};
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const rawText = await req.text();
      if (rawText) {
        body = JSON.parse(rawText);
      }
    }

    const {
      visitor_id,
      user_email,
      page_path,
      element_tag,
      element_text,
      element_id,
      element_class,
      data_track,
      click_x,
      click_y,
      screen_width,
      screen_height,
      timestamp,
    } = body;

    if (!visitor_id || !page_path) {
      return NextResponse.json(
        { error: "visitor_id and page_path are required" },
        { status: 400 }
      );
    }

    // Ignore tracking for admin panel routes
    if (page_path.startsWith("/admin")) {
      return NextResponse.json({ success: true, ignored: true });
    }

    const user_ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";
    const user_agent = req.headers.get("user-agent") || "";

    // 📍 Geo-Location extraction from Vercel / Edge Headers
    const city = req.headers.get("x-vercel-ip-city");
    const country = req.headers.get("x-vercel-ip-country");
    let user_location = "Unknown";
    if (city && country) {
      user_location = `${decodeURIComponent(city)}, ${country}`;
    } else if (country) {
      user_location = country;
    } else {
      user_location = "India (Web)";
    }

    const createdAt = timestamp || new Date().toISOString();

    try {
      await tursoClient.execute({
        sql: `INSERT INTO click_events 
          (visitor_id, user_email, page_path, element_tag, element_text, element_id, element_class, data_track, click_x, click_y, screen_width, screen_height, user_ip, user_agent, user_location, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          visitor_id,
          user_email || null,
          page_path,
          element_tag || null,
          element_text || null,
          element_id || null,
          element_class || null,
          data_track || null,
          typeof click_x === "number" ? click_x : null,
          typeof click_y === "number" ? click_y : null,
          typeof screen_width === "number" ? screen_width : null,
          typeof screen_height === "number" ? screen_height : null,
          user_ip,
          user_agent,
          user_location,
          createdAt,
        ],
      });

      // 🛡️ 30-Day Auto Retention Cleanup (runs background purge ~10% of requests)
      if (Math.random() < 0.1) {
        tursoClient
          .execute("DELETE FROM click_events WHERE created_at < datetime('now', '-30 days')")
          .catch((err) => console.warn("[ClickTracker Purge Notice]:", err.message));
      }
    } catch (dbErr) {
      console.warn("[ClickTracker] Turso insert error:", dbErr.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[ClickTracker API Error]:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
