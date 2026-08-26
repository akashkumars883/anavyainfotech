"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Image as ImageIcon, Upload, X, Check, Zap, Sparkles, Plus, Trash2, HelpCircle } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";
import { compressImageToWebP, compressHtmlContentImages } from "@/lib/imageOptimizer";

export default function EditBlogPage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [generatingFaqs, setGeneratingFaqs] = useState(false);
  const [compressionStats, setCompressionStats] = useState(null);
  const [uploadType, setUploadType] = useState("file"); // "file" or "url"

  const [formData, setFormData] = useState({
    id: id,
    title: "",
    slug: "",
    category: "Engineering",
    author: "Team Anavya Infotech",
    excerpt: "",
    image_url: "",
    content: "",
    is_published: true,
    faqs: [],
  });

  const handleGenerateFaqs = async () => {
    if (!formData.title.trim()) {
      alert("Please enter an Article Title first before generating FAQs.");
      return;
    }

    setGeneratingFaqs(true);
    try {
      const res = await fetch("/api/admin/generate-faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          category: formData.category,
        }),
      });

      const data = await res.json();
      if (res.ok && data.faqs && Array.isArray(data.faqs)) {
        setFormData((prev) => ({
          ...prev,
          faqs: data.faqs,
        }));
      } else {
        alert(data.error || "Failed to generate FAQs.");
      }
    } catch (err) {
      console.error("Error generating FAQs:", err);
      alert("An error occurred while generating FAQs.");
    } finally {
      setGeneratingFaqs(false);
    }
  };

  const handleAddFaqItem = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const handleUpdateFaqItem = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.faqs];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, faqs: updated };
    });
  };

  const handleRemoveFaqItem = (index) => {
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  useEffect(() => {
    async function loadBlog() {
      try {
        const res = await fetch("/api/admin/blogs");
        const data = await res.json();
        const existing = (data.blogs || []).find((b) => String(b.id) === String(id));
        if (existing) {
          let loadedFaqs = [];
          if (existing.faqs) {
            if (Array.isArray(existing.faqs)) loadedFaqs = existing.faqs;
            else if (typeof existing.faqs === "string") {
              try { loadedFaqs = JSON.parse(existing.faqs); } catch { loadedFaqs = []; }
            }
          }
          setFormData({
            id: existing.id,
            title: existing.title || "",
            slug: existing.slug || "",
            category: existing.category || "Engineering",
            author: existing.author || "Team Anavya Infotech",
            excerpt: existing.excerpt || "",
            image_url: existing.image_url || "",
            content: existing.content || "",
            is_published: existing.is_published !== false,
            faqs: loadedFaqs,
          });
        }
      } catch (err) {
        console.error("Error loading blog details for editing:", err);
      } finally {
        setLoading(false);
      }
    }
    loadBlog();
  }, [id]);

  // Convert computer file upload to compressed WebP format
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert("Image file size should be less than 15MB.");
      return;
    }

    setCompressing(true);
    try {
      const result = await compressImageToWebP(file, { maxWidth: 1000, quality: 0.75 });

      // Convert compressed Base64 to Blob & upload to Supabase Storage Bucket
      const blobRes = await fetch(result.dataUrl);
      const blob = await blobRes.blob();
      const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".webp", { type: "image/webp" });

      const uploadFormData = new FormData();
      uploadFormData.append("file", compressedFile);

      const uploadRes = await fetch("/api/admin/upload", {
        method: "POST",
        body: uploadFormData,
      });

      const uploadJson = await uploadRes.json();
      if (uploadRes.ok && uploadJson.url) {
        setFormData((prev) => ({ ...prev, image_url: uploadJson.url }));
      } else {
        setFormData((prev) => ({ ...prev, image_url: result.dataUrl }));
      }

      setCompressionStats({
        originalKb: result.originalSizeKb,
        compressedKb: result.compressedSizeKb,
        savings: result.savingsPercent,
      });
    } catch (err) {
      console.error("Error compressing image to WebP:", err);
      alert("Failed to compress and upload image file.");
    } finally {
      setCompressing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // 1. Automatically compress any embedded Base64 images inside the article content body to WebP
      let sanitizedContent = formData.content || "";
      if (sanitizedContent.includes("data:image/")) {
        sanitizedContent = await compressHtmlContentImages(sanitizedContent);
      }

      const payload = {
        ...formData,
        content: sanitizedContent,
      };

      // 2. Pre-flight payload size check (< 3.5MB to stay safely under Vercel 4.5MB serverless limit)
      const payloadString = JSON.stringify(payload);
      const payloadMb = (payloadString.length * 0.75) / (1024 * 1024);

      if (payloadMb > 3.5) {
        alert(`Article payload is too large (${payloadMb.toFixed(1)}MB). Vercel limits requests to 4.5MB. Please remove large inline image attachments from the body.`);
        setSaving(false);
        return;
      }

      const res = await fetch("/api/admin/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: payloadString,
      });

      const result = await res.json();
      if (res.ok && result.success) {
        alert("Blog article updated successfully!");
        router.push("/admin/blogs");
      } else {
        alert(result.error || "Failed to update blog post.");
      }
    } catch (err) {
      console.error("Error updating blog post:", err);
      alert("Error updating blog post.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-10 text-center text-stone-500 text-xs font-light">
        Loading article details for editing...
      </div>
    );
  }

  return (
    <div className="w-full min-w-full space-y-8 font-sans block">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div>
          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-black transition-colors mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to All Articles
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Edit Article: {formData.title}
          </h1>
          <p className="text-xs text-stone-500 font-light">
            Update content, metadata, or status for this article in your database.
          </p>
        </div>
      </div>

      {/* Form Card - 100% Full Width */}
      <form onSubmit={handleSubmit} className="w-full bg-white border border-stone-200 rounded-md p-6 sm:p-10 space-y-6 block">
        {/* Title */}
        <div className="space-y-1.5 w-full">
          <label htmlFor="edit-title" className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            Article Title
          </label>
          <input
            id="edit-title"
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-900 font-semibold focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Slug & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="space-y-1.5 w-full">
            <label htmlFor="edit-slug" className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
              URL Slug
            </label>
            <input
              id="edit-slug"
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-800 font-mono focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="space-y-1.5 w-full">
            <label htmlFor="edit-category" className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
              Category
            </label>
            <select
              id="edit-category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-black transition-colors cursor-pointer"
            >
              <option value="Engineering">Engineering</option>
              <option value="Web Development">Web Development</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="SEO & Growth">SEO & Growth</option>
              <option value="Business Automation">Business Automation</option>
              <option value="Custom Software">Custom Software</option>
            </select>
          </div>
        </div>

        {/* Author Name */}
        <div className="space-y-1.5 w-full">
          <label htmlFor="edit-author" className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            Author Name
          </label>
          <input
            id="edit-author"
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Cover Image Upload Options (Computer File vs URL) */}
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <ImageIcon className="h-3.5 w-3.5 text-blue-700" /> Article Cover Image
            </label>

            {/* Toggle Tabs */}
            <div className="inline-flex rounded-md bg-stone-100 p-0.5 text-[10px] font-semibold">
              <button
                type="button"
                onClick={() => setUploadType("file")}
                className={`px-3 py-1 rounded-md transition-all ${
                  uploadType === "file" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500 hover:text-stone-900"
                }`}
              >
                Upload from Computer
              </button>
              <button
                type="button"
                onClick={() => setUploadType("url")}
                className={`px-3 py-1 rounded-md transition-all ${
                  uploadType === "url" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500 hover:text-stone-900"
                }`}
              >
                Paste Image URL
              </button>
            </div>
          </div>

          {uploadType === "file" ? (
            <div className="relative border-2 border-dashed border-stone-200 rounded-md p-6 text-center bg-stone-50/50 hover:bg-stone-50 hover:border-stone-400 transition-all cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={compressing}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              />
              <div className="space-y-2 pointer-events-none">
                <div className="h-10 w-10 rounded-md bg-white border border-stone-200 flex items-center justify-center mx-auto text-stone-600">
                  {compressing ? <Zap className="h-5 w-5 text-blue-700 animate-pulse" /> : <Upload className="h-5 w-5 text-blue-700" />}
                </div>
                <div className="text-xs font-semibold text-stone-800">
                  {compressing ? "Compressing & converting to WebP..." : "Click to select new image file from computer or drag & drop"}
                </div>
                <p className="text-[10px] text-stone-400">Auto-converts PNG, JPG, GIF to compressed WebP (Max 15MB)</p>
              </div>
            </div>
          ) : (
            <input
              type="text"
              placeholder="https://images.unsplash.com/photo-..."
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-black transition-colors"
            />
          )}

          {/* Image Preview Window */}
          {formData.image_url && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-stone-600 gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-green-600">
                    <Check className="h-3.5 w-3.5" /> Cover Image Active
                  </span>
                  {compressionStats && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-bold text-[10px] uppercase tracking-wider">
                      <Zap className="h-3 w-3 text-blue-600" /> WebP Compressed ({compressionStats.compressedKb}KB, Saved {compressionStats.savings}%)
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, image_url: "" });
                    setCompressionStats(null);
                  }}
                  className="text-red-500 hover:text-red-700 text-[11px] font-bold flex items-center gap-1"
                >
                  <X className="h-3.5 w-3.5" /> Remove Image
                </button>
              </div>
              <div className="h-56 w-full rounded-md overflow-hidden bg-stone-100 border border-stone-200 relative">
                <img
                  src={formData.image_url}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Excerpt / Summary */}
        <div className="space-y-1.5 w-full">
          <label htmlFor="edit-excerpt" className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            Short Summary / Excerpt
          </label>
          <textarea
            id="edit-excerpt"
            rows={2}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-black transition-colors resize-none"
          />
        </div>

        {/* Full Article Content Editor with Toolbar */}
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between w-full">
            <label className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
              Full Article Body (Rich Text Toolbar Enabled)
            </label>
            <span className="text-[10px] text-stone-400">Click toolbar buttons to insert H1, H2, H3, Bold, Lists, Links, Quotes</span>
          </div>

          <RichTextEditor
            value={formData.content}
            onChange={(val) => setFormData({ ...formData, content: val })}
            placeholder="Edit your article content here..."
            rows={16}
          />
        </div>

        {/* AI FAQ Generator & Interactive Editor Section */}
        <div className="space-y-4 w-full bg-stone-50 border border-stone-200 rounded-md p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <div>
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-blue-700" /> Article FAQs (Frequently Asked Questions)
              </h3>
              <p className="text-[11px] text-stone-500 font-light">
                Generated FAQs automatically inject Google FAQPage Schema for search ranking snippets.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleGenerateFaqs}
                disabled={generatingFaqs}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 transition-colors cursor-pointer"
              >
                <Sparkles className={`h-3.5 w-3.5 ${generatingFaqs ? "animate-spin" : ""}`} />
                <span>{generatingFaqs ? "Generating..." : "Auto-Generate AI FAQs"}</span>
              </button>

              <button
                type="button"
                onClick={handleAddFaqItem}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <Plus className="h-3.5 w-3.5 text-stone-600" /> Add Question
              </button>
            </div>
          </div>

          {/* List of FAQ Q&As */}
          {formData.faqs.length === 0 ? (
            <div className="text-center py-6 border border-dashed border-stone-200 rounded-md bg-white text-stone-400 text-xs">
              No FAQs added yet. Click &quot;Auto-Generate AI FAQs&quot; to automatically create 4-5 search-focused questions and answers!
            </div>
          ) : (
            <div className="space-y-4">
              {formData.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-md p-4 space-y-3 relative group">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      FAQ #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFaqItem(idx)}
                      className="text-stone-400 hover:text-red-600 transition-colors"
                      title="Remove Question"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-stone-500 uppercase">Question</label>
                    <input
                      type="text"
                      placeholder="e.g. What is custom software development?"
                      value={faq.question}
                      onChange={(e) => handleUpdateFaqItem(idx, "question", e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-2 text-xs font-semibold text-stone-900 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-stone-500 uppercase">Answer</label>
                    <textarea
                      rows={2}
                      placeholder="Clear, informative answer..."
                      value={faq.answer}
                      onChange={(e) => handleUpdateFaqItem(idx, "answer", e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-2 text-xs text-stone-800 focus:outline-none focus:border-black resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status Toggle & Save */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100 w-full">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.is_published}
              onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
              className="h-4 w-4 rounded border-stone-300 text-blue-700 focus:ring-blue-600 cursor-pointer"
            />
            <span className="text-xs font-semibold text-stone-700">
              Published on website &amp; sitemap
            </span>
          </label>

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving Changes..." : "Save Changes"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
