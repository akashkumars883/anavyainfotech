"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import DotGrid from "@/components/DotGrid";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] overflow-hidden bg-white flex items-center justify-center text-center px-6 pt-28 pb-16 md:pt-24 md:pb-16">
      {/* React Bits Interactive Dot Grid Physics Canvas Background */}
      <div className="absolute inset-0 bg-white pointer-events-none">
        <DotGrid
          dotSize={2.5}
          dotSpacing={28}
          dotColor="#cbd5e1"
          activeColor="#1d4ed8"
          interactionRadius={150}
          maxDisplacement={20}
        />
        
        {/* Soft Radial Blue Highlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content with Framer Motion Entrance */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-stone-50 border border-stone-200 text-xs font-bold text-stone-700 uppercase tracking-wider shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-blue-700" />
          <span>Next-Gen Software &amp; AI Engineering</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15]"
        >
          We build software, AI &amp; automation solutions <br className="hidden sm:inline" />
          <span className="text-blue-700">that move businesses forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl font-light leading-relaxed"
        >
          Anavya Infotech is a premier <strong className="text-stone-900 font-bold">digital marketing agency</strong> and <strong className="text-stone-900 font-bold">website development company in India &amp; USA</strong>. We build custom web applications, AI chatbots, CRM systems, <strong className="text-stone-900 font-bold">SEO services</strong>, local SEO, and performance marketing solutions designed to scale your business globally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-bold tracking-wider bg-black text-white hover:bg-zinc-800 transition-all shadow-md hover:scale-105"
          >
            Start a Project
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-bold tracking-wider border border-stone-200 bg-white text-stone-900 hover:bg-stone-50 transition-all hover:scale-105 shadow-sm"
          >
            View Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
