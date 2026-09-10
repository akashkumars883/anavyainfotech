import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const res = await tursoClient.execute({
      sql: "SELECT * FROM blogs WHERE id = ? LIMIT 1",
      args: [id],
    });

    if (res.rows && res.rows.length > 0) {
      const blog = res.rows[0];
      
      // Parse tags and faqs if they are strings
      let parsedTags = [];
      if (typeof blog.tags === "string") {
        try { parsedTags = JSON.parse(blog.tags); } catch { parsedTags = [blog.tags]; }
      } else { parsedTags = blog.tags || []; }

      let parsedFaqs = [];
      if (typeof blog.faqs === "string") {
        try { parsedFaqs = JSON.parse(blog.faqs); } catch { parsedFaqs = []; }
      } else { parsedFaqs = blog.faqs || []; }

      return NextResponse.json({
        success: true,
        blog: {
          ...blog,
          is_published: blog.is_published === 1 || blog.is_published === true,
          tags: parsedTags,
          faqs: parsedFaqs,
        },
      });
    }

    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  } catch (err) {
    console.error("API admin blogs GET [id] error:", err);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
