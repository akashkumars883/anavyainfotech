"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X } from "lucide-react";

export default function AnnouncementBanner() {
  const [banner, setBanner] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    async function loadBanner() {
      try {
        const res = await fetch("/api/admin/settings");
        const data = await res.json();
        if (data.settings?.announcementBanner) {
          setBanner(data.settings.announcementBanner);
        }
      } catch (err) {
        console.error("Failed to load announcement banner:", err);
      }
    }
    loadBanner();
  }, []);

  if (!banner || !banner.enabled || dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-blue-900 via-stone-900 to-black text-white px-4 py-2.5 text-xs text-center relative z-50 flex items-center justify-center gap-2 border-b border-blue-900/50 selection:bg-blue-500 selection:text-white">
      <div className="flex items-center gap-2 max-w-5xl truncate">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-600/30 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider text-blue-300 shrink-0">
          <Sparkles className="h-3 w-3" /> Announcement
        </span>
        <span className="font-medium text-stone-200 truncate">{banner.text}</span>
        {banner.link && (
          <Link
            href={banner.link}
            className="inline-flex items-center gap-1 font-bold text-white hover:text-blue-300 underline underline-offset-4 shrink-0 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
        title="Close banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
