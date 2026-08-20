import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    // Ensure 'blog-images' storage bucket exists and is public
    try {
      await supabaseAdmin.storage.createBucket("blog-images", { public: true });
    } catch (e) {
      // Ignore if bucket already exists
    }

    const fileExt = file.name ? file.name.split(".").pop() : "webp";
    const fileName = `blog-${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    const filePath = `covers/${fileName}`;

    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload to Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from("blog-images")
      .upload(filePath, buffer, {
        contentType: file.type || "image/webp",
        upsert: true,
      });

    if (error) {
      console.error("Supabase Storage upload error:", error.message);
      return NextResponse.json({ error: `Storage upload failed: ${error.message}` }, { status: 500 });
    }

    // Get Public URL
    const { data: publicUrlData } = supabaseAdmin.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    return NextResponse.json({
      success: true,
      url: publicUrlData.publicUrl,
      path: filePath,
    });
  } catch (err) {
    console.error("API upload error:", err);
    return NextResponse.json({ error: "Failed to upload file to storage" }, { status: 500 });
  }
}
