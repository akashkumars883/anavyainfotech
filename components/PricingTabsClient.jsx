"use client";

import { useState } from "react";
import WebDevPricing from "@/components/WebDevPricing";
import SeoPricing from "@/components/SeoPricing";
import { Code2, TrendingUp } from "lucide-react";

export default function PricingTabsClient() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <div className="space-y-6">
      {/* Category Tab Switcher Bar */}
      <div className="bg-stone-50 border-b border-stone-200/80 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
            Select Category Pricing
          </div>

          <div className="inline-flex items-center p-1.5 rounded-md bg-stone-200/70 border border-stone-300/80 gap-1 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("development")}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTab === "development"
                  ? "bg-stone-900 text-white shadow-md"
                  : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              }`}
            >
              <Code2 className="h-4 w-4 text-blue-400" />
              <span>Software &amp; Web Development</span>
            </button>

            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTab === "seo"
                  ? "bg-stone-900 text-white shadow-md"
                  : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              }`}
            >
              <TrendingUp className="h-4 w-4 text-blue-400" />
              <span>SEO &amp; Growth Retainers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Render Active Component */}
      {activeTab === "development" ? <WebDevPricing /> : <SeoPricing />}
    </div>
  );
}
