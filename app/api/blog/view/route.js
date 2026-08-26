import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";
import { delCache } from "@/lib/redis";

export async function POST(request) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Increment views_count in Turso DB
    await tursoClient.execute({
      sql: "UPDATE blogs SET views_count = COALESCE(views_count, 0) + 1 WHERE slug = ?",
      args: [slug],
    });

    // Invalidate blog detail cache
    try {
      await delCache(`blog:slug:${slug}`);
    } catch {}

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error incrementing blog view count:", error);
    return NextResponse.json({ error: "Failed to increment view count" }, { status: 500 });
  }
}
