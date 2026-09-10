"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";

export default function JobOpeningsClient() {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dynamic active openings from API
  useEffect(() => {
    async function fetchOpenings() {
      try {
        const res = await fetch("/api/careers/openings?active=true");
        const data = await res.json();
        if (data.openings) {
          setOpenings(data.openings);
        }
      } catch (err) {
        console.error("Failed to fetch openings:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchOpenings();
  }, []);

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <section className="py-12 bg-stone-50 border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs
            items={[
              { label: "Careers", href: "/careers" },
              { label: "Open Roles", href: "/careers/openings" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Briefcase className="h-3.5 w-3.5" />
            Current Job Openings
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.15] max-w-4xl">
            Explore Active Positions <span className="font-semibold text-blue-600">&amp; Opportunities</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light max-w-3xl leading-relaxed">
            Discover roles in Engineering, Design, Sales, and Marketing. Join us to build scalable enterprise solutions and AI-driven applications.
          </p>
        </div>
      </section>

      {/* Job Openings List Section */}
      <section className="py-16 bg-white border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20 text-stone-500">Loading open positions...</div>
          ) : openings.length === 0 ? (
            <div className="text-center py-20 text-stone-500">No active job openings at the moment. Please check back later.</div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {openings.map((job) => {
                const tagList = Array.isArray(job.tags)
                  ? job.tags
                  : typeof job.tags === "string"
                  ? job.tags.split(",").map((t) => t.trim()).filter(Boolean)
                  : [];

                return (
                  <div
                    key={job.id}
                    className="border border-stone-200 bg-stone-50/70 rounded-md hover:border-stone-300 hover:bg-white hover:shadow-sm transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="space-y-3.5 max-w-3xl flex-1">
                      {/* Meta Pills & Badges */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-stone-600 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-stone-600 font-medium">
                          <Clock className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                          {job.experience}
                        </span>
                      </div>

                      {/* Job Title & Type Badge */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                          {job.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {job.type || "Full-Time"}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-2">
                        {job.description}
                      </p>

                      {/* Skill Tags */}
                      {tagList.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                          {tagList.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-md font-medium border border-stone-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                      <Link
                        href={`/careers/jobs/${job.id}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-blue-600 transition-colors w-full md:w-auto"
                      >
                        View Details & Apply
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
