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
    <div className="bg-black text-white px-6 py-2.5 text-xs relative z-50 flex items-center justify-between border-b border-stone-800">
      <div className="flex items-center gap-3 text-left max-w-7xl">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-700 text-[10px] font-extrabold uppercase tracking-wider text-white shrink-0">
          <Sparkles className="h-3 w-3 text-yellow-400" /> Announcement
        </span>
        <span className="font-medium text-stone-200 truncate">{banner.text}</span>
        {banner.link && (
          <Link
            href={banner.link}
            className="inline-flex items-center gap-1 font-bold text-blue-400 hover:text-blue-300 underline underline-offset-4 shrink-0 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-4"
        title="Close banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
