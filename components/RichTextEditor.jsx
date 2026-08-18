"use client";

import { useRef, useState } from "react";
import { 
  Heading1, 
  Heading2, 
  Heading3, 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Code, 
  Link as LinkIcon, 
  Image as ImageIcon,
  Upload,
  Zap,
  Check,
  Eye,
  Edit3
} from "lucide-react";
import { compressImageToWebP } from "@/lib/imageOptimizer";

function renderPreviewHtml(content = "") {
  if (!content) return "<p class='text-stone-400 italic'>Nothing to preview yet...</p>";

  let formatted = String(content).replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  formatted = formatted
    .replace(/<p>\s*(####?\s+.*?)\s*<\/p>/gi, "$1")
    .replace(/<p>\s*(###?\s+.*?)\s*<\/p>/gi, "$1")
    .replace(/<p>\s*(##?\s+.*?)\s*<\/p>/gi, "$1")
    .replace(/<p>\s*(#?\s+.*?)\s*<\/p>/gi, "$1");

  formatted = formatted.replace(/```([a-z]*)\n([\s\S]*?)```/gi, (match, lang, code) => {
    return `<pre class="bg-stone-900 text-stone-100 p-4 rounded-md my-4 overflow-x-auto"><code class="text-xs font-mono">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;
  });

  formatted = formatted
    .replace(/^\s*####\s+(.*$)/gm, '<h4 class="text-lg font-bold text-stone-900 mt-6 mb-2">$1</h4>')
    .replace(/^\s*###\s+(.*$)/gm, '<h3 class="text-xl font-bold text-stone-900 mt-6 mb-2">$1</h3>')
    .replace(/^\s*##\s+(.*$)/gm, '<h2 class="text-2xl font-bold text-stone-900 mt-8 mb-3 pb-2 border-b border-stone-200">$1</h2>')
    .replace(/^\s*#\s+(.*$)/gm, '<h1 class="text-3xl font-bold text-stone-900 mt-8 mb-4">$1</h1>');

  formatted = formatted
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-stone-900">$1</strong>')
    .replace(/__(.*?)__/g, '<strong class="font-bold text-stone-900">$1</strong>')
    .replace(/\*([^\*]+)\*/g, '<em class="italic">$1</em>')
    .replace(/_([^_]+)_/g, '<em class="italic">$1</em>');

  formatted = formatted.replace(/^\s*>\s*(.*$)/gm, '<blockquote class="border-l-4 border-blue-700 pl-4 py-2 my-4 italic bg-blue-50/50 rounded-r-md text-stone-700">$1</blockquote>');
  formatted = formatted.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-md my-6 max-w-full h-auto shadow-md border border-stone-200" />');
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline font-semibold">$1</a>');

  formatted = formatted.replace(/^\s*[\-\*]\s+(.*$)/gm, '<li class="ml-4 list-disc">$1</li>');
  formatted = formatted.replace(/^\s*\d+\.\s+(.*$)/gm, '<li class="ml-4 list-decimal">$1</li>');
  formatted = formatted.replace(/(<li.*?<\/li>\s*)+/gs, (match) => `<ul class="my-4 space-y-1.5">${match}</ul>`);

  const blocks = formatted.split(/\n\n+/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<img") ||
        trimmed.startsWith("<p>")
      ) {
        return trimmed;
      }
      return `<p class="my-4 text-stone-700 leading-relaxed">${trimmed}</p>`;
    })
    .join("\n");
}

export default function RichTextEditor({ value, onChange, placeholder = "Write your content here...", rows = 14 }) {
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [mode, setMode] = useState("edit"); // "edit" or "preview"

  const insertFormat = (prefix, suffix = "", defaultText = "Text Here") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end) || defaultText;

    const replacement = `${prefix}${selectedText}${suffix}`;
    const newValue = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);

    onChange(newValue);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
    }, 0);
  };

  const handleComputerImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert("Image size should be less than 15MB.");
      return;
    }

    setUploading(true);
    setUploadStatus("Compressing image...");

    try {
      const result = await compressImageToWebP(file, { maxWidth: 1000, quality: 0.8 });
      const markdownImg = `\n![${file.name.split('.')[0]}](${result.dataUrl})\n`;

      const textarea = textareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue = textarea.value.substring(0, start) + markdownImg + textarea.value.substring(end);
        onChange(newValue);
      } else {
        onChange((value || "") + markdownImg);
      }

      setUploadStatus(`Uploaded WebP (${result.compressedSizeKb}KB, Saved ${result.savingsPercent}%)`);
      setTimeout(() => setUploadStatus(""), 4000);
    } catch (err) {
      console.error("Error uploading image into content:", err);
      alert("Failed to process image file.");
      setUploadStatus("");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const toolbarButtons = [
    { label: "H1", icon: Heading1, action: () => insertFormat("\n# ", "\n", "Heading 1"), title: "Main Heading (H1)" },
    { label: "H2", icon: Heading2, action: () => insertFormat("\n## ", "\n", "Section Heading"), title: "Subheading (H2)" },
    { label: "H3", icon: Heading3, action: () => insertFormat("\n### ", "\n", "Subsection Title"), title: "Minor Heading (H3)" },
    { type: "divider" },
    { label: "Bold", icon: Bold, action: () => insertFormat("**", "**", "Bold Text"), title: "Bold" },
    { label: "Italic", icon: Italic, action: () => insertFormat("*", "*", "Italic Text"), title: "Italic" },
    { type: "divider" },
    { label: "Bullet List", icon: List, action: () => insertFormat("\n- ", "\n- Item 2\n- Item 3", "List Item 1"), title: "Bullet List" },
    { label: "Numbered List", icon: ListOrdered, action: () => insertFormat("\n1. ", "\n2. Item 2\n3. Item 3", "First Item"), title: "Numbered List" },
    { type: "divider" },
    { label: "Quote", icon: Quote, action: () => insertFormat("\n> ", "\n", "Important Quote or Key Insight"), title: "Blockquote" },
    { label: "Code", icon: Code, action: () => insertFormat("\n```javascript\n", "\n```", "// Code snippet here"), title: "Code Block" },
    { label: "Link", icon: LinkIcon, action: () => insertFormat("[", "](https://www.anavyainfotech.com)", "Clickable Link Text"), title: "Hyperlink" },
    { type: "divider" },
    { 
      label: "Upload Image", 
      icon: Upload, 
      action: () => fileInputRef.current?.click(), 
      title: "Upload image file from computer",
      highlight: true
    },
    { label: "Image URL", icon: ImageIcon, action: () => insertFormat("![", "](https://images.unsplash.com/photo-1498050108023-c5249f4df085)", "Image Description"), title: "Paste Image URL" },
  ];

  return (
    <div className="w-full border border-stone-200 rounded-md overflow-hidden bg-stone-50">
      {/* Hidden File Input for Local Computer Image Selection */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleComputerImageUpload}
        className="hidden"
      />

      {/* Editor Formatting Toolbar & Mode Switcher */}
      <div className="p-2.5 bg-stone-100/90 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 selection:bg-none">
        <div className="flex flex-wrap items-center gap-1.5">
          {toolbarButtons.map((btn, index) => {
            if (btn.type === "divider") {
              return <div key={index} className="h-4 w-px bg-stone-300 mx-1" />;
            }

            const Icon = btn.icon;
            return (
              <button
                key={btn.label}
                type="button"
                onClick={btn.action}
                disabled={uploading || mode === "preview"}
                title={btn.title}
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-95 disabled:opacity-40 ${
                  btn.highlight 
                    ? "bg-blue-700 text-white border-blue-700 hover:bg-blue-800" 
                    : "bg-white border-stone-200 text-stone-700 hover:text-black hover:border-stone-400 hover:bg-stone-50"
                }`}
              >
                {uploading && btn.highlight ? (
                  <Zap className="h-3.5 w-3.5 text-white animate-pulse" />
                ) : (
                  <Icon className={`h-3.5 w-3.5 ${btn.highlight ? "text-white" : "text-stone-600"}`} />
                )}
                <span className="text-[11px]">{btn.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Upload Status & Mode Switch (Edit vs Live Preview) */}
        <div className="flex items-center gap-2">
          {uploadStatus && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-green-50 border border-green-200 text-green-700 font-semibold text-[11px]">
              <Check className="h-3.5 w-3.5 text-green-600" /> {uploadStatus}
            </span>
          )}

          <div className="inline-flex rounded-md bg-stone-200/70 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setMode("edit")}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-md transition-all ${
                mode === "edit" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Edit3 className="h-3 w-3" /> Edit
            </button>
            <button
              type="button"
              onClick={() => setMode("preview")}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-md transition-all ${
                mode === "preview" ? "bg-blue-700 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Eye className="h-3 w-3" /> Live Preview
            </button>
          </div>
        </div>
      </div>

      {/* Mode View: Textarea Input OR Live HTML Rendered Preview */}
      {mode === "edit" ? (
        <textarea
          ref={textareaRef}
          required
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white p-4 text-xs font-mono text-stone-900 focus:outline-none transition-colors resize-y leading-relaxed"
        />
      ) : (
        <div 
          className="w-full min-h-[350px] p-6 bg-white border-t border-stone-200 prose max-w-none text-stone-800 text-sm overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: renderPreviewHtml(value) }}
        />
      )}
    </div>
  );
}
