"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Briefcase,
  ArrowRight,
  Users,
  Rocket,
  Award,
  Heart,
  FileCheck,
  Code,
  UserCheck,
  Sparkle
} from "lucide-react";

const SELECTION_PROCESS = [
  {
    step: "01",
    icon: FileCheck,
    title: "Application Review",
    description: "Submit your resume & portfolio. Our hiring lead reviews your real-world projects and technical stack alignment within 48 hours."
  },
  {
    step: "02",
    icon: Code,
    title: "Technical Assessment",
    description: "A short, practical code challenge or design review focusing on clean architecture, performance, and problem-solving skills."
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Team & Culture Discussion",
    description: "A 30-minute interactive conversation with team leads to discuss work culture, career growth expectations, and project roles."
  },
  {
    step: "04",
    icon: Sparkle,
    title: "Formal Offer & Onboarding",
    description: "Transparent offer discussion followed by smooth digital onboarding, workspace setup, and mentorship pairing."
  }
];

const PERKS = [
  {
    icon: Rocket,
    title: "Accelerated Career Growth",
    desc: "Work directly on high-impact enterprise projects, modern AI frameworks, and scale production systems.",
  },
  {
    icon: Users,
    title: "Flat & Transparent Culture",
    desc: "Collaborate in a flat hierarchy where great ideas win over titles, with open channels and constructive feedback.",
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    desc: "Above-market salary packages, performance bonuses, quarterly incentives, and timely career appraisals.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    desc: "Flexible working hours, hybrid/remote flexibility, paid time off, and employee wellness initiatives.",
  },
];

export default function CareersClient() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Hero Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <Breadcrumbs items={[{ label: "Careers", href: "/careers" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                <Briefcase className="h-3.5 w-3.5" />
                Careers at Anavya Infotech
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.15]">
                Build the Future of Digital &amp; AI Solutions <span className="font-semibold text-blue-600">With Us</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
                At Anavya Infotech, we engineer custom web applications, AI automation, and high-performance digital marketing campaigns. We value passion, continuous learning, and clean engineering.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/careers/openings"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-blue-600 transition-colors"
                >
                  View Open Roles
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs text-stone-500 font-medium">
                  Active Position Available (Business Development Intern)
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-stone-100 aspect-[4/3]">
                <Image
                  src="/careers-hero.png"
                  alt="Anavya Infotech Engineering Team Collaboration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection & Hiring Process Section */}
      <section className="py-16 bg-white border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Hiring Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
              Our 4-Step Selection Process
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              We respect your time. Our hiring process is streamlined, fast, and transparent so you always know where you stand at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SELECTION_PROCESS.map((proc, idx) => {
              const IconComponent = proc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-stone-50 border border-stone-200 space-y-4 relative flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-2xl font-bold text-stone-300">{proc.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-stone-900">{proc.title}</h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life & Company Culture Visual Section */}
      <section className="py-16 bg-stone-50 border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-stone-100 aspect-[4/3]">
                <Image
                  src="/careers-workspace.png"
                  alt="Modern Tech Development Workspace at Anavya Infotech"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Company Culture &amp; Environment
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
                Freedom to Innovate &amp; Create Real Impact
              </h2>
              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                At Anavya Infotech, we build an environment where engineers, designers, and strategists thrive. We focus on modern frameworks, autonomous ownership of tasks, and an empathetic work environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {PERKS.map((perk, i) => {
                  const IconComp = perk.icon;
                  return (
                    <div key={i} className="p-5 rounded-lg bg-white border border-stone-200 space-y-2">
                      <div className="h-9 w-9 rounded-md bg-blue-600 flex items-center justify-center text-white shrink-0">
                        <IconComp className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-sm font-semibold text-stone-900">{perk.title}</h3>
                      <p className="text-xs text-stone-600 font-light leading-relaxed">{perk.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Open Roles Navigation Banner */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-900 text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-stone-800">
            <div className="space-y-3 max-w-2xl text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Explore Current Openings
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ready to Join Our Team?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Check out all active job openings in Engineering, AI, Marketing, Design, and Sales on our dedicated Open Roles page.
              </p>
            </div>
            <Link
              href="/careers/openings"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0"
            >
              View Open Roles →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
