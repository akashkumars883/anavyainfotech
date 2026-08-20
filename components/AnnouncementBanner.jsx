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
    <div className="bg-black text-white px-4 sm:px-6 py-2.5 text-xs relative z-50 border-b border-stone-800 overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          white-space: nowrap;
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Desktop View: Clean Left Aligned */}
        <div className="hidden sm:flex items-center gap-3 text-left truncate">
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

        {/* Mobile View: Smooth Ticker Marquee Auto-Scroll */}
        <div className="sm:hidden flex-1 overflow-hidden relative">
          <div className="animate-marquee">
            <span className="font-medium text-stone-200 pr-8 inline-flex items-center gap-2">
              <span>{banner.text}</span>
              {banner.link && (
                <Link href={banner.link} className="font-bold text-blue-400 underline ml-1">
                  Learn More &rarr;
                </Link>
              )}
            </span>
            {/* Duplicate span for seamless looping scroll */}
            <span className="font-medium text-stone-200 pr-8 inline-flex items-center gap-2" aria-hidden="true">
              <span>{banner.text}</span>
              {banner.link && (
                <Link href={banner.link} className="font-bold text-blue-400 underline ml-1">
                  Learn More &rarr;
                </Link>
              )}
            </span>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2 z-10 bg-black rounded"
          title="Close banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
