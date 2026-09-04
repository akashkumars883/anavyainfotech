import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Share2, Megaphone, Target, BarChart2 } from "lucide-react";

export const metadata = {
  title: "Digital Marketing Agency in India & Delhi NCR | Performance & Social Media Marketing",
  description:
    "Anavya Infotech is a top digital marketing agency in India, Delhi NCR & Noida. We provide performance marketing company services, social media marketing services, content strategy, and paid acquisition management.",
  keywords:
    "digital marketing agency, digital marketing company, digital marketing agency in India, digital marketing company in India, best digital marketing agency in India, digital marketing company in Delhi NCR, digital marketing agency in Noida, performance marketing agency, performance marketing company, performance marketing agency in India, performance marketing company in Delhi NCR, social media marketing agency, social media marketing company, social media marketing services, social media marketing agency in India",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/content-strategist",
  },
  openGraph: {
    title: "Digital Marketing Agency in India & Delhi NCR | Performance Marketing Services",
    description:
      "Full-funnel performance marketing company, social media marketing agency, and digital marketing services in India & Delhi NCR.",
    url: "https://www.anavyainfotech.com/services/content-strategist",
    type: "website",
  },
};


const CONTENT_STRATEGIST_FAQS = [
  {
    "question": "Do you write the content, or just provide a strategy?",
    "answer": "Both are available — full-service content production, or strategy and briefs if you have an in-house writer."
  },
  {
    "question": "How do you decide what to write about?",
    "answer": "Based on keyword research tied to real search volume and intent, competitor content gaps, and questions your sales/support team hears most often."
  },
  {
    "question": "Can this work alongside our existing blog?",
    "answer": "Yes — we typically start with an audit of existing content to identify what to keep, update, or replace."
  }
];


const serviceSchemas = createServiceSchema({
  name: "Content Strategy & SEO Content Services",
  description: "SEO content strategy, blog production & content planning for businesses in India & the USA. Content built around real search intent and buyer journeys.",
  slug: "content-strategist",
  faqs: CONTENT_STRATEGIST_FAQS,
});

export default function ContentStrategyPage() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Content Strategy", href: "/services/content-strategist" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <Megaphone className="h-3.5 w-3.5 text-blue-700" /> Services / Content Strategy
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Content Strategy Built Around Search Intent, Not Guesswork
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Publishing blog posts without a strategy rarely moves rankings or revenue. Anavya Infotech builds content strategies mapped to actual search intent and buyer journey stages — so every article, guide, or landing page you publish has a specific keyword, audience, and business goal behind it.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Why Strategy Beats Volume
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Ten well-targeted, well-structured articles typically outperform fifty generic ones. We prioritize content that closes a specific gap — a keyword your competitors rank for and you don&apos;t, or a question your sales team answers on every call that should live on your site instead.
            </p>
          </div>

          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What&apos;s Included in Content Strategy
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Content audit and gap analysis against competitors</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Keyword-to-content mapping across the buyer journey (awareness → decision)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Editorial calendar and content briefs (structure, target keyword, intent)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>SEO-optimized content production (in-house writing or brief-only, your choice)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Content performance tracking tied to rankings and conversions</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>On-page optimization of existing underperforming content</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Content Strategy Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 01</span>
              <h3 className="text-base font-medium text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Content and competitor gap audit.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 02</span>
              <h3 className="text-base font-medium text-stone-900">Calendar</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Keyword-mapped editorial calendar.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 03</span>
              <h3 className="text-base font-medium text-stone-900">Production</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Content briefs and production.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 04</span>
              <h3 className="text-base font-medium text-stone-900">Performance</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Performance tracking and iteration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Content Strategy FAQs"
        subtitle="Frequently asked questions about Content Strategy & SEO content services."
        faqs={CONTENT_STRATEGIST_FAQS}
      />

      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Build Your Content Strategy
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with Anavya Infotech today and build a data-driven content engine that ranks and converts.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Build Your Content Strategy →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

