import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Terminal } from "lucide-react";

export const metadata = {
  title: "Technical SEO Services & Core Web Vitals Optimization | Anavya Infotech",
  description: "Eliminate crawl errors, optimize Core Web Vitals, and dominate search with expert technical SEO. Specialized in Next.js/React SSR, indexation audits & schema architecture.",
  keywords: ["technical seo services","core web vitals optimization company","website speed optimization","crawl budget optimization","javascript seo nextjs","technical seo agency india"],
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
    "question": "What are Core Web Vitals and why do they impact rankings?",
    "answer": "Core Web Vitals are Google's standardized metrics for measuring real-world user experience: Largest Contentful Paint (LCP for load speed), Interaction to Next Paint (INP for responsiveness), and Cumulative Layout Shift (CLS for visual stability). Passing these metrics directly influences organic search rankings and conversion rates."
  },
  {
    "question": "How do you optimize JavaScript framework websites (Next.js/React) for SEO?",
    "answer": "We configure Server-Side Rendering (SSR) or Incremental Static Regeneration (ISR) to serve pre-rendered HTML to search crawlers. Additionally, we optimize bundle sizes, defer non-critical JavaScript, and eliminate client-side hydration errors."
  },
  {
    "question": "How long does it take to see organic results after a technical SEO audit?",
    "answer": "Initial indexing and Core Web Vitals improvements are typically recognized by search crawlers within 2 to 4 weeks. Full organic traffic gains from resolved technical debt usually materialize within 60 to 90 days as search engines recrawl and reindex updated pages."
  }
];


const serviceSchemas = createServiceSchema({
  name: "Technical SEO Audit & Services - Core Web Vitals Experts",
  description: "Eliminate crawl errors, optimize Core Web Vitals, and dominate search with expert technical SEO. Specialized in Next.js/React SSR, indexation audits & schema architecture.",
  slug: "technical-seo",
  faqs: TECHNICAL_SEO_FAQS,
});

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-left service-page" data-service="technical-seo">
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
          <Link href="/contact" className="service-hero-cta">Discuss your project <span aria-hidden="true">→</span></Link>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Great content can&apos;t rank if Google can&apos;t crawl, index, or load your site fast enough to care. Anavya Infotech&apos;s technical SEO service finds and fixes the structural issues — broken crawl paths, slow Core Web Vitals, indexing errors, duplicate content — that quietly cap your rankings no matter how much content you publish.
          </p>
        </div>
      </section>
{/* Detailed Description Grid */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Search Engine Rankings Are Engineered, Not Guessed: Enterprise Technical SEO</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Modern search engine algorithms demand more than keyword placement and backlinks. High-performing websites require resilient technical foundations that facilitate instant crawling, efficient indexing, and sub-second page performance across all user devices.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">At Anavya Infotech, our technical SEO services and Core Web Vitals optimization eliminate structural bottlenecks, optimize server rendering pipelines, and ensure search engines fully understand and index your website's primary content hubs.</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">The Invisible Roadblocks: How JavaScript Hydration, Render-Blocking Assets &amp; Crawl Debt Kill Rankings</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Modern web applications built on React, Next.js, and Vue offer unmatched user experience, but often introduce severe search indexation issues if improperly configured:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client-Side Rendering (CSR) Delays" /><span><strong className="text-stone-900">Client-Side Rendering (CSR) Delays:</strong> Search crawlers defer rendering JavaScript-heavy pages, delaying content indexation and leading to missed ranking opportunities.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Hydration Mismatches &amp; Layout Shifts" /><span><strong className="text-stone-900">Hydration Mismatches &amp; Layout Shifts:</strong> Unoptimized component hydration causes unstable Cumulative Layout Shift (CLS) scores, failing Google's Core Web Vitals assessment.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Crawl Budget Depletion" /><span><strong className="text-stone-900">Crawl Budget Depletion:</strong> Large-scale websites waste crawl capacity on duplicate URLs, session parameters, and unindexed filter states instead of core target pages.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Render-Blocking Resources" /><span><strong className="text-stone-900">Render-Blocking Resources:</strong> Unminified CSS scripts and excessive third-party analytics delay Interaction to Next Paint (INP) and Largest Contentful Paint (LCP) times.</span></div></div></div></div></section>
<section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Technical SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">01</span>
              <h3 className="text-base font-medium text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Full technical crawl and Core Web Vitals audit.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">02</span>
              <h3 className="text-base font-medium text-stone-900">Prioritize</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Prioritized fix list (highest-impact issues first).</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">03</span>
              <h3 className="text-base font-medium text-stone-900">Implementation</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Code-level fixes and server optimizations, not just reports.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">04</span>
              <h3 className="text-base font-medium text-stone-900">Monitoring</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Re-audit and ongoing technical monitoring.</p>
            </div>
          </div>
        </div>
      </section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Our 5-Pillar Technical Audit Framework</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We apply deep engineering diagnostics to identify and resolve performance and indexation issues across your digital ecosystem:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Architecture &amp; Indexation Audit" /><span><strong className="text-stone-900">Architecture &amp; Indexation Audit:</strong> Comprehensive mapping of canonical tags, robots.txt files, XML sitemaps, redirect chains, and URL structures to maximize indexing speed.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Core Web Vitals Optimization (LCP, INP, CLS)" /><span><strong className="text-stone-900">Core Web Vitals Optimization (LCP, INP, CLS):</strong> Edge caching, image compression pipelines, code splitting, and critical path CSS optimization for guaranteed sub-second rendering.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="JavaScript SEO &amp; SSR Configuration" /><span><strong className="text-stone-900">JavaScript SEO &amp; SSR Configuration:</strong> Implementing Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), or Dynamic Rendering for Next.js and React applications.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Schema &amp; Semantic Entity Graph Architecture" /><span><strong className="text-stone-900">Schema &amp; Semantic Entity Graph Architecture:</strong> Deploying nested JSON-LD structured data to establish entity authority and unlock rich search result features.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Server Log File &amp; Crawl Analysis" /><span><strong className="text-stone-900">Server Log File &amp; Crawl Analysis:</strong> Analyzing web server log files to evaluate Googlebot behavior, frequency, and budget distribution across core site sections.</span></div></div></div></div></section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Case Evidence: Technical Debt Removal Drives Organic Visibility</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Profile" /><span><strong className="text-stone-900">Client Profile:</strong> Enterprise SaaS platform experiencing stagnant organic growth despite active content production.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Technical Challenge" /><span><strong className="text-stone-900">Technical Challenge:</strong> Client-side rendered React frontend delayed Googlebot indexation by up to 3 weeks per new page release. Mobile LCP averaged 4.6 seconds.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Engineering Execution" /><span><strong className="text-stone-900">Engineering Execution:</strong> Migrated core marketing pages to Next.js App Router with Server-Side Rendering (SSR), configured edge caching on Cloudflare, and implemented a custom Schema Entity graph.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Measured Outcome" /><span><strong className="text-stone-900">Measured Outcome:</strong> Mobile LCP improved to 0.9 seconds (Pass score). Organic search impressions grew by 145% in 90 days, and page indexation delay dropped from 21 days to under 6 hours.</span></div></div></div></div></section>

      {/* Process Section */}
      

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

