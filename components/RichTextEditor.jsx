"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Heading1, 
  Heading2, 
  Heading3, 
  Bold, 
  Italic, 
  Underline,
  List, 
  ListOrdered, 
  Quote, 
  Code, 
  Link as LinkIcon, 
  Image as ImageIcon,
  Upload,
  Zap,
  Check,
  Code2,
  Eye,
  RemoveFormatting
} from "lucide-react";
import { compressImageToWebP } from "@/lib/imageOptimizer";

function convertMarkdownToHtml(content = "") {
  if (!content) return "<p><br></p>";
  
  let formatted = String(content);

  // 1. Convert any Markdown image syntax ![alt](url) to an actual <img> tag immediately
  formatted = formatted.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="rounded-md my-6 max-w-full h-auto shadow-md border border-stone-200" />'
  );

  // 2. Convert Markdown link syntax [text](url) to an actual <a> tag
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline font-semibold">$1</a>'
  );

  // 3. If content does not contain HTML block elements, convert markdown headings, bold, lists
  if (!/<(p|h[1-6]|ul|ol|blockquote|div|pre|table)/i.test(formatted)) {
    formatted = formatted
      .replace(/^\s*####\s+(.*$)/gm, '<h4>$1</h4>')
      .replace(/^\s*###\s+(.*$)/gm, '<h3>$1</h3>')
      .replace(/^\s*##\s+(.*$)/gm, '<h2>$2</h2>')
      .replace(/^\s*#\s+(.*$)/gm, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.*?)__/g, '<strong>$1</strong>')
      .replace(/\*([^\*]+)\*/g, '<em>$1</em>')
      .replace(/_([^_]+)_/g, '<em>$1</em>')
      .replace(/^\s*>\s*(.*$)/gm, '<blockquote>$1</blockquote>')
      .replace(/^\s*[\-\*]\s+(.*$)/gm, '<li>$1</li>')
      .replace(/(<li>.*?<\/li>\s*)+/gs, (match) => `<ul>${match}</ul>`);

    const blocks = formatted.split(/\n\n+/);
    formatted = blocks
      .map((b) => {
        const trimmed = b.trim();
        if (!trimmed) return "";
        if (
          trimmed.startsWith("<h") || 
          trimmed.startsWith("<ul") || 
          trimmed.startsWith("<ol") || 
          trimmed.startsWith("<blockquote") || 
          trimmed.startsWith("<pre") || 
          trimmed.startsWith("<img") || 
          trimmed.startsWith("<p")
        ) {
          return trimmed;
        }
        return `<p>${trimmed}</p>`;
      })
      .join("\n");
  }

  return formatted || "<p><br></p>";
}

export default function RichTextEditor({ value, onChange, placeholder = "Start writing your article here..." }) {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const savedRangeRef = useRef(null);

  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [viewMode, setViewMode] = useState("visual"); // "visual" (WYSIWYG) or "source" (Raw HTML)
  const isInternalChange = useRef(false);

  // Save current selection before opening prompts or file picker
  const saveSelection = () => {
    if (typeof window === "undefined") return;
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedRangeRef.current = sel.getRangeAt(0);
    }
  };

  // Restore cursor selection range
  const restoreSelection = () => {
    if (!savedRangeRef.current || typeof window === "undefined") return;
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    }
  };

  // Sync value from props to editor contentEditable element when changed externally
  useEffect(() => {
    if (isInternalChange.current) {
      isInternalChange.current = false;
      return;
    }
    if (editorRef.current && viewMode === "visual") {
      const currentHtml = editorRef.current.innerHTML;
      const newHtml = convertMarkdownToHtml(value || "");
      if (currentHtml !== newHtml) {
        editorRef.current.innerHTML = newHtml;
      }
    }
  }, [value, viewMode]);

  const emitChange = () => {
    if (!editorRef.current) return;
    isInternalChange.current = true;
    const html = editorRef.current.innerHTML;
    onChange(html);
  };

  const execCmd = (command, value = null) => {
    if (viewMode !== "visual") return;
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    emitChange();
  };

  const formatBlock = (tag) => {
    if (viewMode !== "visual") return;
    editorRef.current?.focus();
    document.execCommand("formatBlock", false, `<${tag}>`);
    emitChange();
  };

  const insertLink = () => {
    if (viewMode !== "visual") return;
    saveSelection();
    const url = prompt("Enter hyperlink URL:", "https://www.anavyainfotech.com");
    if (!url) return;
    
    editorRef.current?.focus();
    restoreSelection();

    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      document.execCommand("createLink", false, url);
    } else {
      const linkHtml = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline font-semibold">${url}</a>`;
      document.execCommand("insertHTML", false, linkHtml);
    }
    emitChange();
  };

  const insertCodeBlock = () => {
    if (viewMode !== "visual") return;
    editorRef.current?.focus();
    const codeHtml = `<pre class="bg-stone-900 text-stone-100 p-4 rounded-md my-4 font-mono text-xs overflow-x-auto"><code>// Write code snippet here</code></pre><p><br></p>`;
    document.execCommand("insertHTML", false, codeHtml);
    emitChange();
  };

  const insertImageUrl = () => {
    if (viewMode !== "visual") return;
    saveSelection();
    const url = prompt("Enter Image URL:", "https://images.unsplash.com/photo-1498050108023-c5249f4df085");
    if (!url) return;
    
    editorRef.current?.focus();
    restoreSelection();

    const imgHtml = `<p><img src="${url}" alt="Article Image" class="rounded-md my-6 max-w-full h-auto shadow-md border border-stone-200" /></p><p><br></p>`;
    
    try {
      document.execCommand("insertHTML", false, imgHtml);
    } catch (e) {
      if (editorRef.current) {
        editorRef.current.innerHTML += imgHtml;
      }
    }
    emitChange();
  };

  const handleComputerImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert("Image size should be less than 15MB.");
      return;
    }

    setUploading(true);
    setUploadStatus("Compressing WebP...");

    try {
      const result = await compressImageToWebP(file, { maxWidth: 1000, quality: 0.8 });
      
      // Try uploading to Supabase storage bucket
      let imageUrl = result.dataUrl;
      try {
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
          imageUrl = uploadJson.url;
        }
      } catch (uploadErr) {
        console.warn("Storage upload fallback to base64:", uploadErr);
      }

      editorRef.current?.focus();
      restoreSelection();

      const imgHtml = `<p><img src="${imageUrl}" alt="${file.name}" class="rounded-md my-6 max-w-full h-auto shadow-md border border-stone-200" /></p><p><br></p>`;
      
      if (viewMode === "visual" && editorRef.current) {
        try {
          document.execCommand("insertHTML", false, imgHtml);
        } catch (e) {
          editorRef.current.innerHTML += imgHtml;
        }
        emitChange();
      } else {
        onChange((value || "") + imgHtml);
      }

      setUploadStatus(`WebP Uploaded (${result.compressedSizeKb}KB, -${result.savingsPercent}%)`);
      setTimeout(() => setUploadStatus(""), 4000);
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Failed to compress and upload image.");
      setUploadStatus("");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const toolbarButtons = [
    { label: "H1", icon: Heading1, action: () => formatBlock("h1"), title: "Heading 1 (Main Title)" },
    { label: "H2", icon: Heading2, action: () => formatBlock("h2"), title: "Heading 2 (Section Title)" },
    { label: "H3", icon: Heading3, action: () => formatBlock("h3"), title: "Heading 3 (Subheading)" },
    { label: "Paragraph", action: () => formatBlock("p"), title: "Normal Paragraph Text", isText: true },
    { type: "divider" },
    { label: "B", icon: Bold, action: () => execCmd("bold"), title: "Bold (Ctrl+B)", style: "font-bold" },
    { label: "I", icon: Italic, action: () => execCmd("italic"), title: "Italic (Ctrl+I)", style: "italic" },
    { label: "U", icon: Underline, action: () => execCmd("underline"), title: "Underline (Ctrl+U)", style: "underline" },
    { type: "divider" },
    { label: "Bullets", icon: List, action: () => execCmd("insertUnorderedList"), title: "Bullet List" },
    { label: "Numbers", icon: ListOrdered, action: () => execCmd("insertOrderedList"), title: "Numbered List" },
    { label: "Quote", icon: Quote, action: () => formatBlock("blockquote"), title: "Blockquote" },
    { label: "Code", icon: Code, action: insertCodeBlock, title: "Code Block" },
    { label: "Link", icon: LinkIcon, action: insertLink, title: "Insert Clickable Link" },
    { label: "Clear", icon: RemoveFormatting, action: () => execCmd("removeFormat"), title: "Clear Formatting" },
    { type: "divider" },
    { 
      label: "Upload Image", 
      icon: Upload, 
      action: () => {
        saveSelection();
        fileInputRef.current?.click();
      }, 
      title: "Upload & Compress Image from Computer",
      highlight: true
    },
    { label: "Image URL", icon: ImageIcon, action: insertImageUrl, title: "Insert Image from URL" },
  ];

  return (
    <div className="w-full border border-stone-200 rounded-md overflow-hidden bg-white shadow-xs">
      {/* Hidden File Input for Computer File Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleComputerImageUpload}
        className="hidden"
      />

      {/* Editor Formatting Toolbar */}
      <div className="p-2.5 bg-stone-100 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 select-none sticky top-0 z-20">
        <div className="flex flex-wrap items-center gap-1">
          {toolbarButtons.map((btn, index) => {
            if (btn.type === "divider") {
              return <div key={index} className="h-4 w-px bg-stone-300 mx-1" />;
            }

            const Icon = btn.icon;
            return (
              <button
                key={btn.label + index}
                type="button"
                onClick={btn.action}
                disabled={uploading || viewMode === "source"}
                title={btn.title}
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer shadow-2xs active:scale-95 disabled:opacity-40 ${
                  btn.highlight 
                    ? "bg-blue-700 text-white border border-blue-700 hover:bg-blue-800" 
                    : "bg-white border border-stone-200 text-stone-700 hover:text-black hover:border-stone-400 hover:bg-stone-50"
                }`}
              >
                {uploading && btn.highlight ? (
                  <Zap className="h-3.5 w-3.5 text-white animate-pulse" />
                ) : Icon ? (
                  <Icon className={`h-3.5 w-3.5 ${btn.highlight ? "text-white" : "text-stone-600"}`} />
                ) : null}
                <span className={`text-[11px] ${btn.style || ""}`}>{btn.label}</span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle Switch (Live Visual Editor vs Raw HTML Source Code) */}
        <div className="flex items-center gap-2">
          {uploadStatus && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-green-50 border border-green-200 text-green-700 font-semibold text-[11px]">
              <Check className="h-3.5 w-3.5 text-green-600" /> {uploadStatus}
            </span>
          )}

          <div className="inline-flex rounded bg-stone-200/80 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                if (viewMode === "source" && editorRef.current) {
                  editorRef.current.innerHTML = convertMarkdownToHtml(value || "");
                }
                setViewMode("visual");
              }}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded transition-all ${
                viewMode === "visual" ? "bg-blue-700 text-white shadow-2xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Eye className="h-3 w-3" /> Live Visual Editor
            </button>
            <button
              type="button"
              onClick={() => setViewMode("source")}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded transition-all ${
                viewMode === "source" ? "bg-stone-900 text-white shadow-2xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Code2 className="h-3 w-3" /> HTML Source Code
            </button>
          </div>
        </div>
      </div>

      {/* Editor Body */}
      {viewMode === "visual" ? (
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={emitChange}
          onBlur={emitChange}
          onKeyUp={saveSelection}
          onMouseUp={saveSelection}
          className="w-full min-h-[420px] p-6 bg-white focus:outline-none text-stone-800 text-sm leading-relaxed prose max-w-none 
            [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-stone-900 [&_h1]:mt-6 [&_h1]:mb-3
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-stone-900 [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:pb-1 [&_h2]:border-b [&_h2]:border-stone-200
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-stone-900 [&_h3]:mt-4 [&_h3]:mb-2
            [&_p]:my-3 [&_p]:leading-relaxed
            [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:my-1
            [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol>li]:my-1
            [&_blockquote]:border-l-4 [&_blockquote]:border-blue-700 [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:my-4 [&_blockquote]:italic [&_blockquote]:bg-blue-50/50 [&_blockquote]:text-stone-700 [&_blockquote]:rounded-r
            [&_img]:rounded-md [&_img]:my-6 [&_img]:max-w-full [&_img]:h-auto [&_img]:shadow-md [&_img]:border [&_img]:border-stone-200 [&_img]:block
            [&_a]:text-blue-700 [&_a]:underline [&_a]:font-semibold"
        />
      ) : (
        <textarea
          rows={18}
          placeholder="<html>Raw HTML code source</html>"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-stone-900 p-6 text-xs font-mono text-stone-100 focus:outline-none transition-colors resize-y leading-relaxed"
        />
      )}
    </div>
  );
}
