"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoLoader({ fullScreen = false }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!fullScreen) return;

    let frameId;
    let startedAt;
    const duration = 2000;
    const updateCount = (timestamp) => {
      if (startedAt === undefined) startedAt = timestamp;
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      setCount(Math.max(1, Math.ceil(progress * 100)));
      if (progress < 1) frameId = window.requestAnimationFrame(updateCount);
    };

    frameId = window.requestAnimationFrame(updateCount);
    return () => window.cancelAnimationFrame(frameId);
  }, [fullScreen]);

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        role="status"
      >
        <span className="sr-only">Loading</span>
        <span aria-hidden="true" className="font-mono text-5xl sm:text-6xl font-light tabular-nums tracking-tight text-stone-900">
          {count}
        </span>
      </div>
    );
  }

  const containerClass = "flex items-center justify-center p-4";

  return (
    <div className={containerClass}>
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative h-16 w-16 sm:h-20 sm:w-20"
      >
        <Image 
          src="/logo.png" 
          alt="Anavya Infotech Loading" 
          fill
          priority
          sizes="(max-width: 768px) 64px, 80px"
          className="object-contain drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
}
