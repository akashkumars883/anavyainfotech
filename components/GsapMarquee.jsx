"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapMarquee({ items = [], speed = 25, className = "" }) {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={marqueeRef} className={`w-full overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={trackRef} className="inline-flex gap-8 items-center will-change-transform">
        {/* Duplicate items for seamless continuous looping */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-2 shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
