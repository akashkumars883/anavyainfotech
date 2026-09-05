"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import GsapKineticText from "@/components/GsapKineticText";
import GsapMagneticButton from "@/components/GsapMagneticButton";

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
    <section className="relative w-full overflow-hidden bg-white px-6 pt-4 pb-8 md:pt-8 md:pb-16 text-left">
      {/* Soft Pure Ambient Deep Blue Radial Blur & Floating 3D Geometric Accent Shapes */}
      <div className="absolute inset-0 bg-white pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
        
        {/* Floating Ambient Glowing Rings & Glass Geometric Shapes */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full border border-blue-600/15 bg-blue-500/5 blur-sm animate-float-slow pointer-events-none" />
        <div className="absolute top-1/2 -right-16 w-80 h-80 rounded-full border border-blue-700/10 bg-gradient-to-tr from-blue-600/10 to-transparent blur-md animate-float pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-32 h-32 rounded-3xl border border-stone-200/80 bg-white/60 backdrop-blur-xs rotate-45 animate-float-slow pointer-events-none hidden md:block" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

        {/* Left Column: Headline, Subtitle, Badges & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-700 animate-pulse" />
            <span>Premier Custom Software &amp; AI Agency</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.15]">
            <GsapKineticText text="We Engineer Enterprise Software, Custom Apps & AI Solutions" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl"
          >
            Anavya Infotech is a premier software engineering company. We engineer custom web applications, mobile apps, enterprise AI chatbots, CRM software, and performance systems designed to scale businesses globally.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
          >
            <GsapMagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-shadow shadow-md cursor-pointer"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </GsapMagneticButton>

            <GsapMagneticButton>
              <Link
                href="/case-studies"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-semibold uppercase tracking-wider border border-stone-300 bg-stone-50 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-xs"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </GsapMagneticButton>
          </motion.div>

          {/* Clean Static Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3 text-xs font-medium text-stone-600"
          >
            <span className="flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 border border-blue-200 rounded-md font-bold text-blue-950 shadow-2xs">
              <img src="/meta-logo.svg" alt="Meta Logo" className="h-4 w-4 object-contain shrink-0" />
              <span>Meta Business Partner</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 border border-stone-200/80 rounded-md">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-700" /> 100+ Projects Delivered
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 border border-stone-200/80 rounded-md">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-700" /> Enterprise SLA &amp; 100% Code Ownership
            </span>
          </motion.div>
        </div>

        {/* Right Column: Balanced Desktop & Mobile Lottie Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[450px] p-0 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center scale-100 transition-transform duration-300">
              {showLottie ? (
                <DotLottieReact
                  src="/analytics-character.lottie"
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

