"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Process() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const steps = [
    {
      num: "01",
      title: "Discover & Plan",
      description: "We dig into how your business actually operates, then map requirements into a clear technical blueprint before a single line of code is written.",
    },
    {
      num: "02",
      title: "Architecture & Design",
      description: "Database schemas, high-fidelity UI mockups, and interaction design — so what you approve is what you get.",
    },
    {
      num: "03",
      title: "Agile Development",
      description: "Continuous builds, visible progress, and a team that treats your deadlines like our own.",
    },
    {
      num: "04",
      title: "Optimize & Launch",
      description: "Speed audits, security testing, SEO optimization, and a clean go-live — because launch day should be the easy part.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-10 bg-[#09090b] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-blue-600">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
            From First Call to Live Launch — <br />
            <span className="text-zinc-500">No Black Boxes.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-[#121214] border border-white/5 rounded-md p-8 hover:border-white/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-[250px] text-left"
            >
              {/* Number and Hover Indicator */}
              <div className="flex items-center justify-between">
                <span className="text-4xl font-semibold text-white/10 group-hover:text-blue-600 transition-colors duration-300">
                  {step.num}
                </span>
                <span className="h-1.5 w-1.5 rounded-md bg-white/10 group-hover:bg-blue-600 transition-colors duration-300" />
              </div>

              {/* Title & Desc */}
              <div className="space-y-2 mt-auto">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
