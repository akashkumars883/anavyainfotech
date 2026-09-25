"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoLoader({ fullScreen = false }) {
  // If fullScreen is true, it covers the whole screen
  const containerClass = fullScreen 
    ? "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
    : "flex items-center justify-center p-4";

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
      {fullScreen && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-700"
        >
          Loading...
        </motion.p>
      )}
    </div>
  );
}
