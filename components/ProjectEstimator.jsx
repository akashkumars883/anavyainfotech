"use client";

import { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, Clock, Zap, Cpu, Code2, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState("web-app");
  const [selectedStage, setSelectedStage] = useState("mvp");
  const [needAi, setNeedAi] = useState(true);

  const services = [
    { id: "web-app", name: "Custom Web Application", icon: Code2, baseDays: 14, baseRoi: "300% Conversion Lift" },
    { id: "ai-chatbot", name: "AI Chatbot & Automation", icon: Cpu, baseDays: 7, baseRoi: "85% Ticket Deflection" },
    { id: "ecommerce", name: "Headless E-Commerce", icon: Zap, baseDays: 18, baseRoi: "< 0.2s Page Load Speed" },
    { id: "crm", name: "Enterprise CRM Platform", icon: Calculator, baseDays: 24, baseRoi: "10x Team Efficiency" },
  ];

  const stages = [
    { id: "mvp", name: "Startup / Early MVP", multiplier: 1 },
    { id: "smb", name: "Growing Business / SMB", multiplier: 1.3 },
    { id: "enterprise", name: "Enterprise / Scaled App", multiplier: 1.8 },
  ];

  const currentService = services.find((s) => s.id === selectedService) || services[0];
  const currentStage = stages.find((s) => s.id === selectedStage) || stages[0];

  const totalDays = Math.round(currentService.baseDays * currentStage.multiplier + (needAi ? 3 : 0));

  return (
    <section className="py-12 bg-stone-900 text-white relative z-10 overflow-hidden border-t border-b border-stone-800">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl text-left space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-blue-400">
            <Sparkles className="h-3.5 w-3.5" /> Interactive Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
            Estimate your project timeline &amp; ROI <br />
            <span className="text-blue-500 font-semibold">in seconds.</span>
          </h2>
          <p className="text-sm text-stone-400 font-light max-w-2xl leading-relaxed">
            Select your target solution specs below to get an instant estimated engineering timeline and benchmark metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Service */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-2">
                <span>1. Select Service Category</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = selectedService === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-4 rounded-md border text-left transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? "bg-blue-600/20 border-blue-500 text-white shadow-md"
                          : "bg-white/5 border-white/10 text-stone-300 hover:bg-white/10"
                      }`}
                    >
                      <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${isSelected ? "text-blue-400" : "text-stone-400"}`} />
                      <div>
                        <div className="text-xs font-bold">{srv.name}</div>
                        <div className="text-[10px] text-stone-400 font-light pt-0.5">{srv.baseRoi}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Stage */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-400">
                2. Business / Product Scale
              </label>
              <div className="grid grid-cols-3 gap-3">
                {stages.map((stg) => {
                  const isSelected = selectedStage === stg.id;
                  return (
                    <button
                      key={stg.id}
                      type="button"
                      onClick={() => setSelectedStage(stg.id)}
                      className={`p-3 rounded-md border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "bg-blue-600/20 border-blue-500 text-white shadow-md font-bold"
                          : "bg-white/5 border-white/10 text-stone-300 hover:bg-white/10 text-xs font-medium"
                      }`}
                    >
                      <span className="text-xs">{stg.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: AI Toggle */}
            <div className="p-4 rounded-md bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="space-y-0.5 text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Cpu className="h-4 w-4 text-blue-400" /> Include OpenAI / Custom AI Workflows
                </div>
                <div className="text-[11px] text-stone-400 font-light">
                  Add smart vector search, OpenAI API, or automated CRM AI actions.
                </div>
              </div>
              <button
                type="button"
                onClick={() => setNeedAi(!needAi)}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  needAi ? "bg-blue-600" : "bg-stone-700"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${
                    needAi ? "left-6.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Result Output Card */}
          <div className="lg:col-span-5 bg-black border border-stone-800 rounded-md p-6 sm:p-8 space-y-6 text-left shadow-2xl relative">
            <div className="space-y-1 border-b border-stone-800 pb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                Instant Architecture Estimate
              </span>
              <h3 className="text-xl font-bold text-white pt-1">{currentService.name}</h3>
              <p className="text-xs text-stone-400 font-light">Tailored for {currentStage.name}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-blue-400" /> Est. Delivery
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{totalDays} Days</div>
                <div className="text-[10px] text-stone-400">Sprint Delivery</div>
              </div>

              <div className="p-4 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1">
                  <Zap className="h-3.5 w-3.5 text-blue-400" /> Targeted ROI
                </div>
                <div className="text-sm font-bold text-emerald-400 pt-1 leading-snug">{currentService.baseRoi}</div>
                <div className="text-[10px] text-stone-400">Guaranteed Speed</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-stone-300 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                <span>Next.js 16 App Router &amp; Server Components</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                <span>100/100 Core Web Vitals Lighthouse Benchmark</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                <span>Schema Markup &amp; Technical SEO Included</span>
              </div>
            </div>

            <Link
              href={`/contact?service=${selectedService}&stage=${selectedStage}&ai=${needAi}`}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-md bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg cursor-pointer"
            >
              <span>Get Detailed Proposal For This Estimate</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
