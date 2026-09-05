"use client";

import { useState } from "react";
import { Check, ArrowRight, Code2, Smartphone, Cpu, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function WebDevPricing() {
  const [currency, setCurrency] = useState("USD");

  const devPlans = [
    {
      id: "starter",
      name: "STARTER WEB & LANDING PAGE",
      usdPrice: 1499,
      inrPrice: "7,999",
      desc: "High-performance Next.js landing pages & business websites engineered for max conversion and sub-second load speeds.",
      featured: false,
      deliverables: [
        "Custom Next.js & React Architecture (No Slow Page Builders)",
        "Mobile-First Responsive Design & Modern UI Styling",
        "Sub-Second Load Speeds (Lighthouse 95+ Core Web Vitals)",
        "Lead Capture Forms & WhatsApp Direct Chat Integration",
        "Local Business Schema Markup & Canonical Tag Setup",
        "Google Analytics GA4 & Search Console Setup",
        "2 Weeks Post-Launch Technical Support",
      ],
    },
    {
      id: "business-app",
      name: "CUSTOM BUSINESS WEB APP",
      usdPrice: 2999,
      inrPrice: "14,999",
      desc: "Comprehensive web applications, headless e-commerce storefronts, and customer portals built on modern cloud backends.",
      featured: true,
      popularTag: "MOST POPULAR FOR GROWTH",
      deliverables: [
        "Next.js App Router Architecture with Server Components",
        "Headless CMS or PostgreSQL / Supabase Cloud Database",
        "Headless E-Commerce Storefront or Product Catalog",
        "Stripe, Razorpay, UPI & Global Payment Gateway Setup",
        "Role-Based Authentication & Admin Control Panel",
        "Full On-Page Technical SEO & Dynamic Schema Injections",
        "30 Days Post-Launch Maintenance & Dedicated Support",
      ],
    },
    {
      id: "enterprise-ai",
      name: "ENTERPRISE SAAS, APP & AI",
      usdPrice: 7999,
      inrPrice: "29,999",
      desc: "Full-scale custom SaaS systems, cross-platform iOS & Android mobile apps, custom CRMs, or autonomous AI chatbot pipelines.",
      featured: false,
      deliverables: [
        "Cross-Platform Mobile App (React Native/Flutter) OR Custom SaaS",
        "Autonomous AI Support Chatbot (OpenAI GPT-4 & RAG Vector Search)",
        "Custom CRM Software / Internal ERP Dashboard without seat fees",
        "High-Throughput REST & GraphQL API Microservice Endpoints",
        "OWASP Security Audit, Data Encryption & RBAC Permissions",
        "Zero-Downtime CI/CD Production Deployment Pipeline",
        "90 Days SLA Support with Dedicated Senior System Architect",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-stone-100 text-left">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Header & Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
              <Code2 className="h-3.5 w-3.5" /> Fixed-Price Software &amp; Web Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Web Dev, Mobile App &amp; AI Plans. <br />
              <span className="text-blue-700">100% transparent quotes, zero hidden fees.</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Full code ownership, zero monthly licensing fees, sub-second edge performance, and production-ready cloud deployment.
            </p>
          </div>

          {/* Currency Switcher Toggle */}
          <div className="inline-flex items-center p-1 rounded-md bg-stone-100 border border-stone-200 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency("INR")}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
                currency === "INR"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {devPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-md p-8 flex flex-col justify-between border transition-all duration-300 relative ${
                plan.featured
                  ? "bg-[#09090b] border-blue-600 text-white shadow-2xl ring-2 ring-blue-600/30"
                  : "bg-stone-50/60 border-stone-200 text-stone-900 hover:bg-white hover:border-blue-700/50 hover:shadow-xl"
              }`}
            >
              {plan.popularTag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-blue-700 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  {plan.popularTag}
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-4 border-b pb-6 border-stone-200/60 dark:border-zinc-800">
                  <h3 className="text-xl font-black tracking-tight">{plan.name}</h3>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight">
                        {currency === "USD" ? `$${plan.usdPrice}` : `₹${plan.inrPrice}`}
                      </span>
                      <span className={`text-xs font-semibold ${plan.featured ? "text-zinc-400" : "text-stone-500"}`}>
                        {plan.id === "enterprise-ai" ? " starting" : " fixed price"}
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
                    <span>Get Free Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    plan.featured ? "text-blue-400" : "text-blue-700"
                  }`}>
                    <Zap className="h-3.5 w-3.5" /> What Is Included
                  </div>
                  <ul className="space-y-2.5">
                    {plan.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-medium leading-relaxed">
                        <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-blue-400" : "text-blue-700"}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200/60 dark:border-zinc-800 mt-6 text-xs text-stone-500 font-light flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-700" /> 100% Code Ownership
                </span>
                <span>Milestone Billing</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
