"use client";

import { useState, useEffect } from "react";
import { Sparkles, X, CheckCircle2, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LiveSocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const notifications = [
    {
      icon: Sparkles,
      color: "text-blue-700",
      bg: "bg-blue-50 border-blue-200",
      badge: "Verified Client Activity",
      title: "New AI Chatbot Deployed",
      desc: "Automixa AI handled 12,500+ DMs for an e-commerce brand.",
      link: "/case-studies/automixa-ai",
      time: "4 mins ago",
    },
    {
      icon: TrendingUp,
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-200",
      badge: "Real Estate Portal",
      title: "45+ Leads Generated",
      desc: "Nakul Properties directory reached #1 rank in Faridabad.",
      link: "/case-studies/nakul-properties",
      time: "12 mins ago",
    },
    {
      icon: Zap,
      color: "text-amber-700",
      bg: "bg-amber-50 border-amber-200",
      badge: "Fintech Platform",
      title: "0.2s Page Load Speed",
      desc: "Money Capital Finance achieved 100/100 Core Web Vitals.",
      link: "/case-studies/money-capital-finance",
      time: "28 mins ago",
    },
    {
      icon: ShieldCheck,
      color: "text-purple-700",
      bg: "bg-purple-50 border-purple-200",
      badge: "Consultation Request",
      title: "Technical Architecture Session Booked",
      desc: "A Delhi-NCR founder scheduled a Next.js MVP discussion.",
      link: "/contact",
      time: "1 hour ago",
    },
  ];

  useEffect(() => {
    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 4000);

    // Rotate toasts every 14 seconds
    const interval = setInterval(() => {
      if (!dismissed) {
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
          setVisible(true);
        }, 500);
      }
    }, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed, notifications.length]);

  if (dismissed || !visible) return null;

  const current = notifications[currentIndex];
  const Icon = current.icon;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm w-full animate-slide-down pointer-events-auto">
      <div className="bg-white/95 backdrop-blur-md border border-stone-200 rounded-md p-4 shadow-xl text-left relative group">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-stone-400 hover:text-stone-900 transition-colors p-1 rounded-md"
          aria-label="Close notification"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-start gap-3">
          <div className={`p-2.5 rounded-md border ${current.bg} shrink-0 mt-0.5`}>
            <Icon className={`h-4 w-4 ${current.color}`} />
          </div>

          <div className="space-y-1 pr-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                {current.badge}
              </span>
              <span className="text-[10px] text-stone-400">• {current.time}</span>
            </div>

            <h4 className="text-xs font-bold text-stone-900 leading-tight">
              {current.title}
            </h4>

            <p className="text-[11px] text-stone-600 font-light leading-relaxed">
              {current.desc}
            </p>

            <Link
              href={current.link}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:underline pt-1"
            >
              <span>View details</span>
              <CheckCircle2 className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
