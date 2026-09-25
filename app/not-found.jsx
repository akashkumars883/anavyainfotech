"use client";

import Link from "next/link";
import { Home, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-white px-6 py-24 selection:bg-blue-600/20 selection:text-blue-950">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Animated 404 Graphic */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[150px] font-black text-stone-100 tracking-tighter select-none leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-lg border border-stone-200 shadow-sm">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                Page Not Found
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
            Looks like you're lost in space.
          </h2>
          <p className="text-stone-500 font-light max-w-lg mx-auto text-sm sm:text-base">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link 
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20 uppercase tracking-wider"
          >
            <Home className="h-4 w-4" />
            Back to Homepage
          </Link>
          <Link 
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors uppercase tracking-wider"
          >
            <Mail className="h-4 w-4" />
            Contact Support
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-12 border-t border-stone-100 mt-12 text-sm text-stone-500"
        >
          <p className="mb-4 font-medium text-stone-900">Popular Destinations</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-medium">
            <Link href="/services/web-applications" className="hover:text-blue-600 transition-colors">Web Apps</Link>
            <Link href="/services/seo" className="hover:text-blue-600 transition-colors">SEO Services</Link>
            <Link href="/services/ecommerce" className="hover:text-blue-600 transition-colors">E-Commerce</Link>
            <Link href="/services/ai-chatbot" className="hover:text-blue-600 transition-colors">AI Solutions</Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
