"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Quote, CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const testimonials = [
    {
      quote: "Anavya Infotech built our Meta Graph API Instagram automation platform from scratch. Sub-50ms webhook responses and zero account restriction issues — top tier AI engineering team.",
      author: "Aditya Verma",
      role: "Founder & CEO",
      company: "Automixa Inc.",
      industry: "SaaS & AI Automation",
      location: "India & Global",
      verifiedResult: "10,000+ Active Creators",
      caseStudySlug: "automixa-ai",
    },
    {
      quote: "Their team engineered a sub-second loan eligibility portal with interactive EMI calculators. Inquiry conversions jumped 38% and loan processing speed dropped under 24 hours.",
      author: "Rajesh Sharma",
      role: "Managing Director",
      company: "Money Capital Finance",
      industry: "Fintech & Financial Advisory",
      location: "Delhi NCR, India",
      verifiedResult: "15,000+ Monthly Inquiries",
      caseStudySlug: "money-capital-finance",
    },
    {
      quote: "Anavya Infotech transformed our real estate advisory portal with Sanity CMS and instant 1-click WhatsApp lead dispatch. Our property lead conversions increased by 45%.",
      author: "Nakul Singh",
      role: "Principal Consultant",
      company: "Nakul Properties",
      industry: "Real Estate & Advisory",
      location: "Faridabad, India",
      verifiedResult: "+45% Lead Conversions",
      caseStudySlug: "nakul-properties",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [activeIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Transitions slide every 6 seconds
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    startAutoSlide();
  };

  return (
    <section 
      className="py-12 bg-white border-b border-stone-100 relative z-10"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200/80 text-[11px] font-bold uppercase tracking-wider text-stone-700">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-700" /> Verified Case Studies &amp; Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 leading-tight">
            Verified client success stories that <br />
            <span className="text-blue-700">validate our dedication.</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[260px] max-w-5xl text-left flex flex-col justify-between">
          <div className="relative overflow-hidden w-full">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-in-out transform ${
                    isActive
                      ? "opacity-100 translate-x-0 relative block"
                      : "opacity-0 absolute top-0 left-0 w-full pointer-events-none -translate-x-4"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-200/80 text-[11px] font-semibold text-blue-800">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-700" />
                        Verified Enterprise Client
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 text-[11px] font-medium text-stone-700">
                        {item.industry}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 text-[11px] font-medium text-stone-600">
                        {item.verifiedResult}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-stone-800 leading-relaxed font-sans max-w-4xl">
                      "{item.quote}"
                    </blockquote>

                    {/* Author metadata & Case Study Link */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-sm uppercase shadow-xs">
                          {item.author.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="space-y-0.5">
                          <cite className="not-italic text-sm font-bold text-stone-900 block">
                            {item.author}
                          </cite>
                          <span className="text-xs font-light text-stone-600 block">
                            {item.role} &mdash; <strong className="font-semibold text-stone-800">{item.company}</strong> ({item.location})
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/case-studies/${item.caseStudySlug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 hover:text-blue-700 hover:border-blue-300 transition-all self-start sm:self-auto shadow-xs"
                      >
                        Read Verified Case Study
                        <ArrowUpRight className="h-3.5 w-3.5 text-blue-700" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation Control */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-md transition-all duration-300 focus:outline-none cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 bg-blue-700"
                    : "w-2 bg-stone-200 hover:bg-stone-350"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
