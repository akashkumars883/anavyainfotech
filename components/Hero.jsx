"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function Hero() {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLottie(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] overflow-hidden bg-white flex items-center justify-center px-6 pt-28 pb-16 md:pt-24 md:pb-16 text-left">
      {/* Soft Pure Ambient Deep Blue Radial Blur Background (NO GRID) */}
      <div className="absolute inset-0 bg-white pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Headline, Subtitle, Badges & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 uppercase tracking-wider"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-700 animate-pulse" />
            <span>Premier Custom Software &amp; AI Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15]"
          >
            We build software, AI &amp; automation solutions <br />
            <span className="text-blue-700">that move businesses forward.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl"
          >
            Anavya Infotech is a premier <strong className="text-stone-900 font-bold">digital marketing agency</strong> and <strong className="text-stone-900 font-bold">website development company in India &amp; USA</strong>. We build custom web applications, AI chatbots, CRM systems, <strong className="text-stone-900 font-bold">SEO services</strong>, local SEO, and performance marketing solutions designed to scale your business globally.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-all shadow-md hover:scale-105"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider border border-stone-200 bg-white text-stone-900 hover:bg-stone-50 transition-all hover:scale-105 shadow-sm"
            >
              View Work
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-stone-500 border-t border-stone-100"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-blue-700" /> 100% Code Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-blue-700" /> Zero Seat Fees
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-700" /> Enterprise SLA Guarantee
            </span>
          </motion.div>
        </div>

        {/* Right Column: Floating Lottie Animation Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative animate-float"
        >
          <div className="relative w-full h-[380px] sm:h-[460px] p-4 sm:p-6 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              {showLottie ? (
                <DotLottieReact
                  src="https://lottie.host/2d4d4b91-732d-4e9a-9c8e-4f9aee2707ab/dfLNNvenUq.lottie"
                  loop
                  autoplay
                />
              ) : (
                <div className="w-full h-full rounded-2xl bg-blue-50/50 animate-pulse border border-blue-100/50" />
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
