"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, ShieldCheck } from "lucide-react";

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("cookieConsent", "essential_only");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
    setShowBanner(false);
  };


  if (!mounted || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999] p-3 sm:p-5 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="relative overflow-hidden bg-stone-900/95 backdrop-blur-xl border border-stone-800/90 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/60 text-white transition-all duration-300">
          
          {/* Subtle blue ambient glow overlay */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8 relative z-10">
            
            {/* Left Content Area with Cookie Badge */}
            <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
              <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5 sm:mt-0 shadow-inner">
                <Cookie className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    We Value Your Privacy
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider bg-stone-800/90 border border-stone-700/80 px-2.5 py-0.5 rounded-full text-emerald-400">
                    <ShieldCheck className="h-3 w-3" /> Cookie Preferences
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light max-w-4xl">
                  We use cookies and similar technologies to enhance browsing experience, analyze site traffic, and personalize content. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Right Buttons Area */}
            <div className="flex items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0 justify-end pt-2 lg:pt-0 border-t border-stone-800/60 lg:border-0">
              <button
                onClick={handleRejectNonEssential}
                className="flex-1 lg:flex-initial text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-stone-700/80 bg-stone-800/80 text-stone-300 hover:text-white hover:bg-stone-800 hover:border-stone-600 transition-all font-medium text-center"
              >
                Essential Only
              </button>

              <button
                onClick={handleAcceptAll}
                className="flex-1 lg:flex-initial text-xs sm:text-sm px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5"
              >
                <Check className="h-4 w-4" /> Accept All
              </button>

              <button
                onClick={handleRejectNonEssential}
                className="p-2.5 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors hidden sm:block border border-transparent hover:border-stone-700"
                aria-label="Close cookie consent notice"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}


