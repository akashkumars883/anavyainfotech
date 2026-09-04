"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GsapSpotlightCard from "./GsapSpotlightCard";

export default function SelectedWork() {
  const projects = [
    {
      title: "Automixa AI",
      category: "AI & Automation",
      description: "An AI-powered Meta API automation platform helping Instagram creators auto-reply to DMs and comments in real time, now serving 10,000+ active creators.",
      image: "/automixa-preview.png",
      imageAlt: "Automixa AI Instagram DM and comment automation platform built by Anavya Infotech",
      href: "/case-studies/automixa-ai",
      websiteUrl: "https://www.automixa.in/",
      tags: ["Next.js", "Meta API", "Node.js", "PostgreSQL"],
    },
    {
      title: "Money Capital Finance",
      category: "Fintech & Web Applications",
      description: "A fintech customer portal with live EMI calculators and bank integrations that lifted inquiry conversions by 38% and cut loan processing time to under 24 hours.",
      image: "/money-capital-preview.png",
      imageAlt: "Money Capital Finance portal built by Anavya Infotech",
      href: "/case-studies/money-capital-finance",
      websiteUrl: "https://www.moneycapitalfinances.com/",
      tags: ["Next.js", "Financial Engine", "React", "Tailwind CSS"],
    },
    {
      title: "Nakul Properties",
      category: "Real Estate & Custom Software",
      description: "A real estate directory for Faridabad's luxury and HUDA sector market, driving a 45% increase in qualified lead conversions.",
      image: "/nakul-properties-preview.png",
      imageAlt: "Nakul Properties real estate portal built by Anavya Infotech",
      href: "/case-studies/nakul-properties",
      websiteUrl: "http://nakulproperties.com/",
      tags: ["Next.js", "Sanity CMS", "React", "WhatsApp Integration"],
    },
  ];

  // JSON-LD Portfolio / CreativeWork Schema for search engine indexing
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": projects.length,
    "name": "Anavya Infotech Featured Case Studies",
    "itemListElement": projects.map((proj, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "CreativeWork",
        "name": proj.title,
        "genre": proj.category,
        "description": proj.description,
        "image": `https://www.anavyainfotech.com${proj.image}`
      }
    }))
  };

  return (
    <section 
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-10 bg-white border-b border-stone-100 relative z-10"
    >
      {/* Portfolio Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-100 text-[11px] font-semibold uppercase tracking-wider text-stone-600">
            Featured Live Projects
          </div>
          <h2 
            id="portfolio-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight"
          >
            Real Products, Built for Real Businesses — <br />
            <span className="text-blue-700">Verified Results.</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
            We don't talk in vague case studies. Here's what we've shipped, live, with the outcomes to back it up:
          </p>
        </div>

        {/* 3 Equal Cards Row Grid Layout matching Services card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GsapSpotlightCard key={index} className="rounded-md border border-stone-200 bg-white">
              <div className="group relative h-[380px] sm:h-[400px] w-full text-left cursor-pointer transition-all duration-300 hover:border-blue-700/60 flex flex-col justify-between">
                {/* Full Card Link: Tapping anywhere on mobile or desktop opens the case study */}
                <Link
                  href={project.href}
                  className="absolute inset-0 z-30"
                  aria-label={`View ${project.title} case study`}
                />

                {/* Full Card Image Container (Preserving original project images) */}
                <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center overflow-hidden p-4 pb-20">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover rounded-md opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Top Header Bar (Category Badge & Direct Arrow Button) */}
                <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200 text-[10px] font-semibold text-blue-700 uppercase tracking-wider shadow-2xs">
                    {project.category}
                  </span>
                  <div className="h-9 w-9 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom Card Title & Desktop Hover Description (Black Text) */}
                <div className="relative z-10 p-5 bg-white/95 backdrop-blur-sm border-t border-stone-100 flex flex-col justify-end text-left pointer-events-none transition-all duration-300">
                  {/* Heading - Always pinned at bottom in black text */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                  </div>

                  {/* Description: Expands smoothly on hover in clean dark text */}
                  <div className="grid grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="pt-2 text-xs sm:text-sm text-stone-600 font-light leading-relaxed opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GsapSpotlightCard>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-stone-900 text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
