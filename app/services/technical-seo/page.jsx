import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Terminal } from "lucide-react";

export const metadata = {
  title: "Technical SEO & Core Web Vitals Speed Optimization Services",
  description:
    "Resolve search console indexing errors, crawl budget bottlenecks, Core Web Vitals, dynamic JSON-LD schemas, and server response times with technical SEO services from Anavya Infotech.",
  keywords: [
    "technical SEO services",
    "Core Web Vitals optimization",
    "site speed optimization",
    "schema markup audit",
    "search console indexing fix",
    "crawl budget optimization",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/technical-seo",
  },
  openGraph: {
    title: "Technical SEO & Core Web Vitals Speed Optimization Services",
    description:
      "Resolve search console indexing errors, crawl budget bottlenecks, Core Web Vitals, dynamic JSON-LD schemas, and server response times with technical SEO services from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/technical-seo",
    type: "website",
  },
};



const TECHNICAL_SEO_FAQS = [
  {
    "question": "How is technical SEO different from regular SEO?",
    "answer": "Technical SEO fixes the site's underlying structure and performance so Google can properly crawl, index, and rank it — it's the foundation that on-page and content SEO build on top of."
  },
  {
    "question": "Can you fix Core Web Vitals issues, or just report them?",
    "answer": "We implement the fixes ourselves (code-level optimization), not just hand you a report."
  },
  {
    "question": "Do you provide the audit as a standalone service?",
    "answer": "Yes — we offer standalone technical SEO audits as well as ongoing technical SEO retainers."
  }
];


const serviceSchemas = createServiceSchema({
  name: "Technical SEO Audit & Services | Core Web Vitals Experts",
  description: "Technical SEO audits & fixes — crawlability, indexing, Core Web Vitals & site speed — for businesses in India & the USA. Fix what's blocking your rankings.",
  slug: "technical-seo",
  faqs: TECHNICAL_SEO_FAQS,
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left">
      {/* Search Engine Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Technical SEO", href: "/services/technical-seo" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Services / Technical SEO
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Technical SEO — Fix What&apos;s Silently Blocking Your Rankings
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Great content can&apos;t rank if Google can&apos;t crawl, index, or load your site fast enough to care. Anavya Infotech&apos;s technical SEO service finds and fixes the structural issues — broken crawl paths, slow Core Web Vitals, indexing errors, duplicate content — that quietly cap your rankings no matter how much content you publish.
          </p>
        </div>
      </section>

      {/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Why Technical SEO Is the Foundation
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              You can publish the best content in your industry, but if your site has redirect chains, missing schema, or a 6-second load time, Google will rank a competitor&apos;s mediocre content over your excellent content simply because their site performs better technically. We start every SEO engagement with this layer because it&apos;s the multiplier on everything else.
            </p>
          </div>

          {/* Right Block: Benefits Checklist Card */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Terminal className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What&apos;s Included in Technical SEO
              </div>
            </div>

            <ul className="space-y-4" aria-label="Key deliverables">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Full crawl audit (Screaming Frog-level analysis of every URL)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Core Web Vitals optimization (LCP, CLS, INP) for real Google ranking impact</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Indexing and crawl budget audit (orphan pages, redirect chains, robots.txt issues)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Structured data / schema markup implementation</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Site architecture and internal linking optimization</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>HTTPS, mobile usability, and canonicalization fixes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Technical SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 01</span>
              <h3 className="text-base font-medium text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Full technical crawl and Core Web Vitals audit.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 02</span>
              <h3 className="text-base font-medium text-stone-900">Prioritize</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Prioritized fix list (highest-impact issues first).</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 03</span>
              <h3 className="text-base font-medium text-stone-900">Implementation</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Code-level fixes and server optimizations, not just reports.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 04</span>
              <h3 className="text-base font-medium text-stone-900">Monitoring</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Re-audit and ongoing technical monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Technical SEO FAQs"
        subtitle="Frequently asked questions about Technical SEO and Core Web Vitals."
        faqs={TECHNICAL_SEO_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Get a Technical SEO Audit
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Uncover and resolve the underlying issues quietly capping your Google rankings.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get a Technical SEO Audit →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
