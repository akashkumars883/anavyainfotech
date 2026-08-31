"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Code2, Globe, Cpu } from "lucide-react";
import GsapMagneticButton from "./GsapMagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function GsapHorizontalScroll({ projects = [] }) {
  const targetRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const target = targetRef.current;
    if (!section || !target) return;

    const totalWidth = target.scrollWidth - window.innerWidth;
    
    if (totalWidth <= 0) return;

    const ctx = gsap.context(() => {
      gsap.to(target, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth + 400}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section ref={sectionRef} className="relative bg-stone-900 text-white overflow-hidden py-20 min-h-screen flex flex-col justify-center">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-8 space-y-2 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider text-blue-400">
          <Sparkles className="h-3.5 w-3.5" /> Horizontal Showcase
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Featured Engineering Case Studies
          </h2>
          <p className="text-xs text-stone-400 font-light max-w-sm">
            Scroll down to explore high-impact web apps, AI tools, and enterprise platforms engineered for global clients.
          </p>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div className="w-full overflow-hidden">
        <div ref={targetRef} className="flex gap-8 px-6 w-max items-center">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[450px] lg:w-[540px] shrink-0 bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl text-left group hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded text-[10px] font-semibold bg-blue-900/40 text-blue-300 border border-blue-800/40 uppercase tracking-wider">
                  {project.category || "Case Study"}
                </span>
                <span className="text-xs text-stone-500 font-mono">0{idx + 1} / 0{projects.length}</span>
              </div>

              {/* Mockup Preview */}
              {project.image && (
                <div className="relative aspect-video rounded-md overflow-hidden bg-stone-900 border border-stone-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Metrics Pills */}
              {project.stats && (
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-stone-800 text-xs">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-stone-900/80 p-2.5 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase font-medium block">{stat.label}</span>
                      <span className="font-semibold text-blue-400 text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <GsapMagneticButton>
                  <Link
                    href={project.link || `/case-studies`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </GsapMagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
