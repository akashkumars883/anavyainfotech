"use client";

import { useState } from "react";
import { ArrowRight, Laptop, Globe, ShoppingCart, Zap, Code2, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function WebsitePricing({ showHeader = true }) {
  const [currency, setCurrency] = useState("INR");

  const websitePlans = [
    {
      id: "starter",
      name: "Starter",
      icon: Zap,
      priceINR: 7999,
      originalPriceINR: 10000,
      priceUSD: 1499,
      originalPriceUSD: 1999,
      desc: "Ideal for small businesses, freelancers & local shops needing a fast online presence.",
      badge: "Essential",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      featured: false,
    },
    {
      id: "business",
      name: "Business",
      icon: Globe,
      priceINR: 14999,
      originalPriceINR: 20000,
      priceUSD: 2999,
      originalPriceUSD: 3999,
      desc: "Best for startups, SMEs & service companies wanting lead capture & Google setup.",
      badge: "Most Popular",
      popularTag: "MOST POPULAR",
      badgeColor: "bg-blue-700 text-white border-blue-600",
      featured: true,
    },
    {
      id: "ecommerce",
      name: "E-Commerce",
      icon: ShoppingCart,
      priceINR: 29999,
      originalPriceINR: 40000,
      priceUSD: 5999,
      originalPriceUSD: 7999,
      desc: "Complete D2C online store with cart, payment gateway, inventory & WhatsApp orders.",
      badge: "Storefront",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      featured: false,
    },
    {
      id: "custom",
      name: "Custom",
      icon: Code2,
      desc: "Tailored full-stack application or enterprise platform built to your exact requirements.",
      badge: "Bespoke",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      featured: false,
      isCustom: true,
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-stone-100 text-left">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Section Header & Currency Switcher */}
        <div className={`flex flex-col sm:flex-row ${showHeader ? "sm:items-end justify-between" : "justify-end"} gap-6 pb-2 border-b border-stone-100`}>
          {showHeader && (
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                <Laptop className="h-3.5 w-3.5" /> Website Engineering Packages
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
                Web Development Plans. <span className="text-blue-700">Transparent Pricing.</span>
              </h2>
            </div>
          )}

          {/* Currency Switcher */}
          <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-md border border-stone-200 self-start sm:self-auto shrink-0 shadow-2xs">
            <span className="text-xs font-bold text-stone-600 px-2">Currency:</span>
            <button
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                currency === "INR"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-stone-700 hover:text-stone-900"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* 4-Column Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {websitePlans.map((plan) => {
            const Icon = plan.icon;
            const currentPrice = currency === "INR" ? plan.priceINR : plan.priceUSD;
            const originalPrice = currency === "INR" ? plan.originalPriceINR : plan.originalPriceUSD;
            const symbol = currency === "INR" ? "₹" : "$";
            const discount = originalPrice ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100) : 0;

            return (
              <div
                key={plan.id}
                className={`rounded-md p-6 flex flex-col justify-between border transition-all duration-300 relative group hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-[#09090b] border-blue-600 text-white shadow-2xl ring-2 ring-blue-600/30"
                    : "bg-stone-50/60 border-stone-200 text-stone-900 hover:bg-white hover:border-blue-700/50 hover:shadow-xl"
                }`}
              >
                {/* Popular Tag */}
                {plan.popularTag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-md bg-blue-700 text-white text-[9px] font-black uppercase tracking-widest shadow-md">
                    {plan.popularTag}
                  </div>
                )}

                <div className="space-y-5">
                  {/* Card Header & Icon */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-md border ${
                        plan.featured
                          ? "bg-blue-600/20 text-blue-400 border-blue-500/30"
                          : "bg-white text-stone-800 border-stone-200 shadow-2xs group-hover:border-blue-300"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${
                        plan.featured
                          ? "bg-blue-700/30 text-blue-400 border-blue-500/30"
                          : plan.badgeColor
                      }`}>
                        {plan.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
                      <p className={`text-xs font-light leading-relaxed mt-1 min-h-[38px] ${
                        plan.featured ? "text-zinc-400" : "text-stone-600"
                      }`}>
                        {plan.desc}
                      </p>
                    </div>
                  </div>

                  {/* Pricing Details */}
                  <div className={`pt-4 border-t space-y-1 ${
                    plan.featured ? "border-zinc-800" : "border-stone-200/60"
                  }`}>
                    {plan.isCustom ? (
                      <div className="space-y-1 py-1">
                        <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-600 dark:text-blue-400">
                          Custom Quote
                        </span>
                        <p className={`text-[11px] font-medium ${plan.featured ? "text-zinc-400" : "text-stone-500"}`}>
                          Based on requirement
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-semibold tracking-tight">
                            {symbol}{currentPrice.toLocaleString()}
                          </span>
                          <span className={`text-xs line-through ${
                            plan.featured ? "text-zinc-500" : "text-stone-400"
                          }`}>
                            {symbol}{originalPrice.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 pt-0.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                            plan.featured ? "bg-blue-500/20 text-blue-300" : "bg-blue-50 text-blue-700"
                          }`}>
                            SAVE {discount}%
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    href={`/contact?plan=${plan.id}&type=website`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                      plan.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : plan.isCustom
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "bg-stone-900 text-white hover:bg-black"
                    }`}
                  >
                    <span>{plan.isCustom ? "Contact Us" : "Get Started"}</span>
                    {plan.isCustom ? <MessageSquare className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
