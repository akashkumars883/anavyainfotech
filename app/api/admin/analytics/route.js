import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";

export async function GET() {
  try {
    // 1. Fetch total clicks
    const totalClicksRes = await tursoClient.execute("SELECT count(*) as total FROM click_events");
    const totalClicks = totalClicksRes.rows?.[0]?.total || 0;

    // 2. Fetch total unique visitors
    const uniqueVisitorsRes = await tursoClient.execute("SELECT count(DISTINCT visitor_id) as total FROM click_events");
    const uniqueVisitors = uniqueVisitorsRes.rows?.[0]?.total || 0;

    // 3. Fetch top clicked elements
    const topElementsRes = await tursoClient.execute(`
      SELECT element_text, element_tag, count(*) as count 
      FROM click_events 
      WHERE element_text IS NOT NULL AND element_text != ''
      GROUP BY element_text, element_tag 
      ORDER BY count DESC 
      LIMIT 6
    `);

    // 4. Fetch top visited pages
    const topPagesRes = await tursoClient.execute(`
      SELECT page_path, count(*) as count 
      FROM click_events 
      GROUP BY page_path 
      ORDER BY count DESC 
      LIMIT 6
    `);

    // 5. Fetch recent 50 click events
    const recentEventsRes = await tursoClient.execute(`
      SELECT * FROM click_events 
      ORDER BY created_at DESC 
      LIMIT 50
    `);

    return NextResponse.json({
      success: true,
      stats: {
        totalClicks,
        uniqueVisitors,
        topElements: topElementsRes.rows || [],
        topPages: topPagesRes.rows || [],
      },
      events: recentEventsRes.rows || [],
    });
  } catch (err) {
    console.error("Analytics API Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch analytics data", message: err.message },
      { status: 500 }
    );
  }
}
