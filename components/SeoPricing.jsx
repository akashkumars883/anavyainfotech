"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles, ChevronDown, ChevronUp, Bot, Share2, FileBarChart, Zap } from "lucide-react";
import Link from "next/link";

export default function SeoPricing() {
  const [expandedPlan, setExpandedPlan] = useState(null);

  const seoPlans = [
    {
      id: "basic",
      name: "BASIC",
      price: 750,
      originalPrice: 1000,
      discount: "SAVE 25%",
      desc: "Essential search engine optimization for growing local businesses and new websites.",
      featured: false,
      scopeOfWork: [
        "Initial Website Audit & SEO Checklist Check - 1",
        "Keyword Analysis & Finalization (Primary & Secondary) - 30",
        "Competitor Backlink Analysis - 1",
        "Competitor Website Analysis - 1",
        "Website Backlink Audit - 1",
      ],
      onPage: [
        "Title Tag Optimization - 10 pages",
        "Meta Tag Optimization - 10 pages",
        "Image Optimization (ALT Tag) - 20 images",
        "Heading Tags Optimization - 10 pages",
        "Schema Implementation",
        "Website Speed Analysis & Recommendations",
        "Website Canonical Tag Analysis",
        "XML Sitemap & Robots File Optimization",
        "SEO Friendly URL & Site Navigation Setup",
        "404 Page & Broken Link Redirections",
        "Google Indexed Pages Analysis",
        "Website Responsiveness Audit",
        "On Site Blog Section Creation",
        "Onsite Blog Posting & Optimization - 2/mo",
        "Google Webmaster & Analytics Setup",
      ],
      offPage: [
        "Directory Submissions - 10",
        "Social Bookmarking - 10",
        "Search Engine Submissions - 10",
        "Article Writing & Posting - 1",
      ],
      aiSearch: [
        "AI Visibility Audit",
      ],
      smo: [
        "Facebook & Instagram Profile Setup",
      ],
      reports: [
        "Monthly Website Analytics Report",
        "Monthly Keywords Ranking Report",
      ],
    },
    {
      id: "plus",
      name: "PLUS",
      price: 1250,
      originalPrice: 1500,
      discount: "SAVE 17%",
      desc: "Accelerated SEO & AI Search Visibility package built to dominate regional search results.",
      featured: true,
      popularTag: "MOST POPULAR",
      scopeOfWork: [
        "Initial Website Audit & SEO Checklist Check - 1",
        "Keyword Analysis & Finalization (Primary & Secondary) - 40",
        "Competitor Backlink Analysis - 2",
        "Competitor Website Analysis - 2",
        "Website Backlink Audit - 1",
      ],
      onPage: [
        "Title Tag Optimization - 20 pages",
        "Meta Tag Optimization - 20 pages",
        "Image Optimization (ALT Tag) - 40 images",
        "Heading Tags Optimization - 20 pages",
        "Schema Implementation",
        "Website Speed Analysis & Recommendations",
        "Website Canonical Tag Analysis",
        "XML Sitemap & Robots File Optimization",
        "SEO Friendly URL & Site Navigation Analysis",
        "404 Page Implementation & Broken Link Redirections",
        "Google Webmaster & Analytics Setup",
        "Bing Webmaster Tools Setup",
        "On Site Blog Section Creation",
        "Onsite Blog Posting & Optimization - 2/mo",
        "Website Content Interlinking & Optimization",
      ],
      offPage: [
        "Guest Post - 3 (Promotion - 15)",
        "Article Writing & Posting - 3 (Promotion - 20)",
        "Blog Writing & Submission - 3 (Promotion - 20)",
        "Quora Q&A / Reddit Submissions - 7",
        "Image Submissions - 15, Video Submissions - 10",
        "Classified Ads - 15",
        "Social Bookmarking & Sharing - 15",
        "PPT & PDF Submissions - 15",
      ],
      aiSearch: [
        "AI Visibility Score",
        "AI Monthly Audience Telemetry",
        "AI Competitor Visibility Comparison",
        "AI Share of Voice Tracking",
        "AI Sentiment Analysis",
      ],
      smo: [
        "Facebook Profile & Fan Page Creation",
        "Facebook Posting & Sharing - 8/mo",
        "Instagram Profile Creation & Management",
      ],
      reports: [
        "Monthly Website Analytics Report",
        "Monthly Keywords Ranking Report",
        "Monthly Off Page Submission Report",
      ],
    },
    {
      id: "pro",
      name: "PRO / ENTERPRISE",
      price: 1750,
      originalPrice: 2000,
      discount: "SAVE 13%",
      desc: "Maximum organic search dominance with full AI Visibility, high DA links, and content production.",
      featured: false,
      scopeOfWork: [
        "Initial Website Audit & SEO Checklist Check - 1",
        "Keyword Analysis & Finalization (Primary & Secondary) - 50",
        "Competitor Backlink Analysis - 3",
        "Competitor Website Analysis - 3",
        "Website Backlink Audit - 1",
      ],
      onPage: [
        "Title Tag Optimization - 40 pages",
        "Meta Tag Optimization - 40 pages",
        "Image Optimization (ALT Tag) - 60 images",
        "Heading Tags Optimization - 30 pages",
        "Advanced Structured Data & Schema Setup",
        "Website Speed Analysis & Recommendations",
        "Website Canonical Tag Analysis",
        "XML Sitemap & Robots File Optimization",
        "SEO Friendly URL & Site Navigation Fixes",
        "404 Page Implementation & Broken Link Redirections",
        "Google Webmaster & Analytics Setup",
        "Bing Webmaster Tools Setup",
        "On Site Blog Section Creation",
        "Onsite Blog Posting & Optimization - 3/mo",
        "Full Website Content Interlinking & Optimization",
      ],
      offPage: [
        "Guest Post - 2 (Promotion - 10)",
        "Article Writing & Posting - 2 (Promotion - 10)",
        "Blog Writing & Submission - 2 (Promotion - 10)",
        "Quora Q&A / Reddit Submissions - 5",
        "Image Submissions - 10, Video Submissions - 8",
        "Classified Ads - 10",
        "Social Bookmarking & Sharing - 10",
        "PPT & PDF Submissions - 10",
        "Infographics Creation/Month - 10",
      ],
      aiSearch: [
        "AI Visibility Score",
        "AI Monthly Audience Telemetry",
        "AI Competitor Visibility Comparison",
        "AI Share of Voice Tracking",
        "AI Sentiment Analysis",
      ],
      smo: [
        "Facebook Profile & Fan Page Creation",
        "Facebook Posting & Sharing - 4/mo",
        "Instagram Profile Creation & Management",
      ],
      reports: [
        "Monthly Website Analytics Report",
        "Monthly Keywords Ranking Report",
        "Monthly Off Page Submission Report",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-stone-100 text-left">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Sparkles className="h-3.5 w-3.5" /> Organic Search &amp; AI Visibility Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            SEO &amp; Growth Retainer Plans. <br />
            <span className="text-blue-700">Fixed monthly pricing, zero contracts.</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Data-backed SEO campaigns featuring On-Page Optimization, High DA Off-Page Link Building, AI Search Engine Visibility, and SMO Activities.
          </p>
        </div>

        {/* SEO Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {seoPlans.map((plan) => {
            const isExpanded = expandedPlan === plan.id;
            return (
              <div
                key={plan.id}
                className={`rounded-md p-8 flex flex-col justify-between border transition-all duration-300 relative ${
                  plan.featured
                    ? "bg-[#09090b] border-blue-600 text-white shadow-2xl ring-2 ring-blue-600/30"
                    : "bg-stone-50/60 border-stone-200 text-stone-900 hover:bg-white hover:border-blue-700/50 hover:shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {plan.popularTag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-blue-700 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    {plan.popularTag}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Card Header & Price */}
                  <div className="space-y-4 border-b pb-6 border-stone-200/60 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black tracking-tight">{plan.name}</h3>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        plan.featured ? "bg-blue-700/30 text-blue-400 border border-blue-500/30" : "bg-blue-50 border border-blue-200 text-blue-700"
                      }`}>
                        {plan.discount}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black tracking-tight">${plan.price}.00</span>
                        <span className={`text-xs line-through ${plan.featured ? "text-zinc-500" : "text-stone-400"}`}>
                          ${plan.originalPrice}.00
                        </span>
                        <span className={`text-xs font-semibold ${plan.featured ? "text-zinc-400" : "text-stone-500"}`}>
                          / month
                        </span>
                      </div>
                      <p className={`text-xs font-light leading-relaxed pt-1 ${plan.featured ? "text-zinc-400" : "text-stone-600"}`}>
                        {plan.desc}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm ${
                        plan.featured
                          ? "bg-blue-700 text-white hover:bg-blue-600"
                          : "bg-stone-900 text-white hover:bg-black"
                      }`}
                    >
                      <span>Buy Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Scope of Work Section */}
                  <div className="space-y-3">
                    <div className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      plan.featured ? "text-blue-400" : "text-blue-700"
                    }`}>
                      <Zap className="h-3.5 w-3.5" /> Scope of Work
                    </div>
                    <ul className="space-y-2">
                      {plan.scopeOfWork.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium leading-tight">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Summary */}
                  <div className="space-y-3 pt-4 border-t border-stone-200/60 dark:border-zinc-800">
                    <div className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      plan.featured ? "text-blue-400" : "text-blue-700"
                    }`}>
                      <Bot className="h-3.5 w-3.5" /> On-Page &amp; Technical SEO
                    </div>
                    <ul className="space-y-2">
                      {plan.onPage.slice(0, 6).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium leading-tight">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand / Collapse Full Features Breakdown */}
                  {isExpanded && (
                    <div className="space-y-6 pt-4 border-t border-stone-200/60 dark:border-zinc-800 animate-fadeIn">
                      {/* Remaining On-Page Items */}
                      <div className="space-y-2">
                        <div className={`text-[10px] font-bold uppercase tracking-wider ${plan.featured ? "text-zinc-400" : "text-stone-400"}`}>
                          More On-Page Activities
                        </div>
                        <ul className="space-y-2">
                          {plan.onPage.slice(6).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs font-medium leading-tight">
                              <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Off-Page Activities */}
                      {plan.offPage && plan.offPage.length > 0 && (
                        <div className="space-y-2">
                          <div className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                            plan.featured ? "text-blue-400" : "text-blue-700"
                          }`}>
                            <Share2 className="h-3.5 w-3.5" /> Off-Page Optimization
                          </div>
                          <ul className="space-y-2">
                            {plan.offPage.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-medium leading-tight">
                                <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* AI Search Visibility */}
                      {plan.aiSearch && plan.aiSearch.length > 0 && (
                        <div className="space-y-2">
                          <div className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                            plan.featured ? "text-blue-400" : "text-blue-700"
                          }`}>
                            <Bot className="h-3.5 w-3.5" /> AI Search Visibility
                          </div>
                          <ul className="space-y-2">
                            {plan.aiSearch.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-medium leading-tight">
                                <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* SMO Activities */}
                      {plan.smo && plan.smo.length > 0 && (
                        <div className="space-y-2">
                          <div className={`text-[10px] font-bold uppercase tracking-wider ${plan.featured ? "text-zinc-400" : "text-stone-400"}`}>
                            SMO Activities
                          </div>
                          <ul className="space-y-2">
                            {plan.smo.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-medium leading-tight">
                                <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Reports */}
                      {plan.reports && plan.reports.length > 0 && (
                        <div className="space-y-2">
                          <div className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                            plan.featured ? "text-blue-400" : "text-blue-700"
                          }`}>
                            <FileBarChart className="h-3.5 w-3.5" /> Monthly Reports
                          </div>
                          <ul className="space-y-2">
                            {plan.reports.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-medium leading-tight">
                                <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Toggle Details Button */}
                <div className="pt-6 border-t border-stone-200/60 dark:border-zinc-800 mt-6">
                  <button
                    type="button"
                    onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                    className={`w-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-colors ${
                      plan.featured ? "text-zinc-300 hover:text-white" : "text-stone-700 hover:text-blue-700"
                    }`}
                  >
                    <span>{isExpanded ? "Hide Full Scope" : "View Full Checklist"}</span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
