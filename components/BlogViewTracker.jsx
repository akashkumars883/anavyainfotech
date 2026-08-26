"use client";

import { useEffect } from "react";

export default function BlogViewTracker({ slug }) {
  useEffect(() => {
    if (!slug) return;
    try {
      fetch("/api/blog/view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      }).catch(() => {});
    } catch {}
  }, [slug]);

  return null;
}
