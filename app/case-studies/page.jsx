import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import PortfolioFilterClient from "@/components/PortfolioFilterClient";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Featured Software Project Case Studies",
  description:
    "See how Anavya Infotech built web apps, real estate CRMs, AI agents, e-commerce sites, and business analytics tools.",
  keywords:
    "software engineering case studies, custom CRM case study, AI chatbot case study, Next.js e-commerce case study, web application metrics",
  alternates: {
    canonical: "https://www.anavyainfotech.com/case-studies",
  },
  openGraph: {
    title: "Software Project Case Studies - Anavya Infotech",
    description:
      "See the challenges, software designs, and results from our custom software projects.",
    url: "https://www.anavyainfotech.com/case-studies",
    type: "website",
  },
};

const CASE_STUDY_FAQS = [
  {
    question: "What types of custom software projects are featured in your case studies?",
    answer:
      "Our case studies show work for businesses, including CRM software, AI support agents, Next.js e-commerce stores, real estate websites, and business analytics dashboards.",
  },
  {
    question: "Are the performance metrics and speed improvements in your case studies verified?",
    answer:
      "Yes. The Core Web Vitals scores, support ticket reductions, conversion gains, and server response times were measured when each project launched.",
  },
  {
    question: "Can Anavya Infotech build custom software tailored to my specific niche?",
    answer:
      "Yes. We can build custom data structures, API connections, and screens that fit your team's work and industry rules.",
  },
  {
    question: "How do you measure success and return on investment for your builds?",
    answer:
      "We track clear results, such as page load speed, growth in Google search traffic, lead conversion rates, and time saved through automation.",
  },
  {
    question: "What was the typical development timeline for these featured case studies?",
    answer:
      "Projects took 3 to 6 weeks for simpler web apps and AI integrations, and 8 to 12 weeks for larger CRM platforms with several parts.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Hero Section */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <Briefcase className="h-3.5 w-3.5 text-blue-700" /> Featured Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Software built <br />
            <span className="text-blue-700">to grow with your business.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Explore our projects, from custom CRM platforms and AI support agents to Next.js online stores and business analytics tools.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Projects Grid (Client Component) */}
      <section className="py-8 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <PortfolioFilterClient />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Case Study Questions"
        subtitle="Answers about project results, timelines, and the tools we use."
        faqs={CASE_STUDY_FAQS}
      />

      {/* CTA Section */}
      <section className="py-10 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-3 max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Have a custom software project?</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk with our engineering team about your project plan, costs, and schedule.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get a Project Proposal
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
