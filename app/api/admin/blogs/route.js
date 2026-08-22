import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { tursoClient } from "@/lib/turso";
import { getCache, setCache, delCache } from "@/lib/redis";

// GET all blogs (Summary listing for Admin Blog Dashboard with Redis caching)
export async function GET() {
  try {
    const cacheKey = "admin:blogs:list";
    const cached = await getCache(cacheKey);
    if (cached && Array.isArray(cached)) {
      return NextResponse.json({ blogs: cached });
    }

    // Select lightweight list columns (excluding massive content HTML for lightning fast loading)
    const res = await tursoClient.execute(
      "SELECT id, slug, title, category, author, excerpt, image_url, is_published, created_at, tags FROM blogs ORDER BY created_at DESC"
    );

    const formattedBlogs = (res.rows || []).map((row) => ({
      ...row,
      is_published: row.is_published === 1 || row.is_published === true,
      tags: typeof row.tags === "string" ? JSON.parse(row.tags || "[]") : row.tags || [],
    }));

    await setCache(cacheKey, formattedBlogs, 300); // 5 minutes TTL

    return NextResponse.json({ blogs: formattedBlogs });
  } catch (err) {
    console.error("API admin blogs GET error:", err);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST create a new blog
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, slug, category, author, excerpt, image_url, content, is_published, tags } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    // Cover Image Size Validation (Reject base64 images > 300KB)
    if (image_url && typeof image_url === "string" && image_url.startsWith("data:") && image_url.length > 300000) {
      return NextResponse.json(
        { error: "Cover Image is too large (exceeds 300KB limit). Please upload a compressed image or use an image URL." },
        { status: 400 }
      );
    }

    const blogId = `blog_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const blogSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const createdAt = new Date().toISOString();
    const isPublishedVal = is_published !== undefined ? (is_published ? 1 : 0) : 1;
    const tagsJson = JSON.stringify(tags || []);

    await tursoClient.execute({
      sql: `INSERT INTO blogs (id, title, slug, category, author, excerpt, image_url, content, is_published, created_at, tags)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        blogId,
        title,
        blogSlug,
        category || "Engineering",
        author || "Team Anavya Infotech",
        excerpt || title,
        image_url || "/development-illustration.jpg",
        content || "",
        isPublishedVal,
        createdAt,
        tagsJson,
      ],
    });

    // Invalidate Redis cache & revalidate Next.js cache so the live site & admin dashboard update immediately
    try {
      await delCache("admin:blogs:list");
      await delCache("blog:all_posts");
      if (blogSlug) await delCache(`blog:slug:${blogSlug}`);
      revalidateTag("blogs");
      revalidatePath("/blog");
      if (blogSlug) revalidatePath(`/blog/${blogSlug}`);
      revalidatePath("/");
      revalidatePath("/sitemap.js");
      revalidatePath("/sitemap");
    } catch (e) {
      console.warn("Revalidation warning:", e?.message);
    }

    return NextResponse.json({ 
      success: true, 
      blog: { id: blogId, title, slug: blogSlug, category, author, excerpt, image_url, is_published: Boolean(isPublishedVal), created_at: createdAt },
    });
  } catch (err) {
    console.error("API admin blogs POST error:", err);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}

// PUT update an existing blog
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, title, slug, category, author, excerpt, image_url, content, is_published, tags } = body;

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    // Cover Image Size Validation
    if (image_url && typeof image_url === "string" && image_url.startsWith("data:") && image_url.length > 300000) {
      return NextResponse.json(
        { error: "Cover Image is too large (exceeds 300KB limit). Please upload a compressed image or use an image URL." },
        { status: 400 }
      );
    }

    // If updating only is_published status
    if (is_published !== undefined && Object.keys(body).length <= 3) {
      const statusVal = is_published ? 1 : 0;
      await tursoClient.execute({
        sql: "UPDATE blogs SET is_published = ? WHERE id = ?",
        args: [statusVal, id],
      });
    } else {
      const statusVal = is_published !== undefined ? (is_published ? 1 : 0) : 1;
      const tagsJson = JSON.stringify(tags || []);
      const blogSlug = slug || title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

      await tursoClient.execute({
        sql: `UPDATE blogs SET 
              title = COALESCE(?, title),
              slug = COALESCE(?, slug),
              category = COALESCE(?, category),
              author = COALESCE(?, author),
              excerpt = COALESCE(?, excerpt),
              image_url = COALESCE(?, image_url),
              content = COALESCE(?, content),
              is_published = ?,
              tags = ?
              WHERE id = ?`,
        args: [title || null, blogSlug || null, category || null, author || null, excerpt || null, image_url || null, content || null, statusVal, tagsJson, id],
      });
    }

    // Invalidate Redis cache
    try {
      await delCache("admin:blogs:list");
      await delCache("blog:all_posts");
      if (slug) await delCache(`blog:slug:${slug}`);
      revalidateTag("blogs");
      revalidatePath("/blog");
      if (slug) revalidatePath(`/blog/${slug}`);
      revalidatePath("/");
      revalidatePath("/sitemap.js");
      revalidatePath("/sitemap");
    } catch (e) {
      console.warn("Revalidation warning:", e?.message);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API admin blogs PUT error:", err);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE delete a blog
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    await tursoClient.execute({
      sql: "DELETE FROM blogs WHERE id = ?",
      args: [id],
    });

    try {
      await delCache("admin:blogs:list");
      await delCache("blog:all_posts");
      revalidateTag("blogs");
      revalidatePath("/blog");
      revalidatePath("/");
      revalidatePath("/sitemap.js");
      revalidatePath("/sitemap");
    } catch (e) {
      console.warn("Revalidation warning:", e?.message);
    }

    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    console.error("API admin blogs DELETE error:", err);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
