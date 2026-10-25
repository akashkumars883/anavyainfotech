import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export const metadata = {
  title: "Technical SEO Services | Anavya Infotech",
  description: "Fix crawling and indexing errors, improve Core Web Vitals, and help search engines understand your site. We work with Next.js and React websites.",
  keywords: ["technical seo services","core web vitals optimization company","website speed optimization","crawl budget optimization","javascript seo nextjs","technical seo agency india"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/technical-seo",
  },
  openGraph: {
    title: "Technical SEO Services | Anavya Infotech",
    description:
      "Fix indexing errors, crawling issues, Core Web Vitals, structured data, and slow server responses with technical SEO services from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/technical-seo",
    type: "website",
  },
};

const TECHNICAL_SEO_FAQS = [
  {
    "question": "What are Core Web Vitals and why do they impact rankings?",
    "answer": "Core Web Vitals are Google's measures of page experience: Largest Contentful Paint (LCP) measures loading speed, Interaction to Next Paint (INP) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability. These scores can affect search rankings and conversions."
  },
  {
    "question": "How do you optimize JavaScript framework websites (Next.js/React) for SEO?",
    "answer": "We set up Server-Side Rendering (SSR) or Incremental Static Regeneration (ISR) so search engines can read ready-made page content. We also reduce JavaScript size, delay scripts that are not needed right away, and fix errors when pages load in the browser."
  },
  {
    "question": "How long does it take to see organic results after a technical SEO audit?",
    "answer": "Search engines may notice indexing and Core Web Vitals improvements within 2 to 4 weeks. Traffic gains from technical fixes often take 60 to 90 days, as search engines revisit and update your pages."
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
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="technical-seo">
      {/* Search Engine Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Technical SEO", href: "/services/technical-seo" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Terminal className="h-3.5 w-3.5 text-blue-700" /> Technical SEO & Core Web Vitals
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Technical SEO: Fix Problems That Hold Back Your Rankings
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Great content may not rank if Google cannot find, read, or load your pages quickly. Anavya Infotech finds and fixes technical problems such as broken links, slow Core Web Vitals, indexing errors, and duplicate content that can limit your rankings.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Get a Technical SEO Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <img
              src="/growth-illustration.jpg"
              alt="Technical SEO Services"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Build a Strong Technical Foundation for Search</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Search rankings depend on more than keywords and links. Your website also needs to load quickly, let search engines find its pages, and make it easy for them to understand the content.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech fixes technical problems and improves Core Web Vitals. We also improve how your site displays pages so search engines can find and index its important content.</p></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Common Technical Problems That Can Hurt Rankings</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Websites built with React, Next.js, and Vue can have search indexing problems if they are not set up correctly:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client-Side Rendering (CSR) Delays" /><span><strong className="text-stone-900">Client-Side Rendering (CSR) Delays:</strong> Search engines may take longer to read and index pages that need JavaScript to display content. This can delay ranking changes.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Hydration Mismatches & Layout Shifts" /><span><strong className="text-stone-900">Hydration Mismatches &amp; Layout Shifts:</strong> Hydration means adding browser features to a page after it loads. If this changes the page layout, the Cumulative Layout Shift (CLS) score can get worse.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Crawl Budget Depletion" /><span><strong className="text-stone-900">Crawl Budget Depletion:</strong> Large sites may use up Google&apos;s time checking duplicate links, session details, or filter pages instead of their most important pages.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Render-Blocking Resources" /><span><strong className="text-stone-900">Render-Blocking Resources:</strong> Large CSS files and outside tracking tools can slow down the time it takes for a page to respond (INP) or show its main content (LCP).</span></div></div></div></div></section>

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Technical SEO Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">01</div>
              <h3 className="text-lg font-semibold text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Review how search engines access your site and check Core Web Vitals.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">02</div>
              <h3 className="text-lg font-semibold text-stone-900">Prioritize</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">List the most important fixes first.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">03</div>
              <h3 className="text-lg font-semibold text-stone-900">Implementation</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Fix issues in the code and improve the server, not just report what is wrong.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">04</div>
              <h3 className="text-lg font-semibold text-stone-900">Monitoring</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Check the site again and monitor it for new problems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Five Areas We Check in a Technical SEO Review</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We review your site to find speed and indexing problems:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Architecture & Indexation Audit" /><span><strong className="text-stone-900">Architecture &amp; Indexation Audit:</strong> Check canonical tags, robots.txt files, XML sitemaps, redirects, and links so search engines can find the right pages.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Core Web Vitals Optimization (LCP, INP, CLS)" /><span><strong className="text-stone-900">Core Web Vitals Optimization (LCP, INP, CLS):</strong> Use caching, smaller images, split code, and faster CSS to help pages load in under a second.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="JavaScript SEO & SSR Configuration" /><span><strong className="text-stone-900">JavaScript SEO &amp; SSR Configuration:</strong> Set up Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), or Dynamic Rendering so Next.js and React pages are easier for search engines to read.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Schema & Semantic Entity Graph Architecture" /><span><strong className="text-stone-900">Schema &amp; Semantic Entity Graph Architecture:</strong> Add JSON-LD structured data to explain your business and content to search engines and support enhanced search listings.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Server Log File & Crawl Analysis" /><span><strong className="text-stone-900">Server Log File &amp; Crawl Analysis:</strong> Review server logs to see how often Googlebot visits your site and which sections it checks.</span></div></div></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Example: Technical Improvements and Search Visibility</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Profile" /><span><strong className="text-stone-900">Client Profile:</strong> A SaaS platform had little growth in unpaid search traffic, despite publishing new content.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Technical Challenge" /><span><strong className="text-stone-900">Technical Challenge:</strong> A React website took Googlebot up to three weeks to index new pages. The average mobile LCP was 4.6 seconds.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Engineering Execution" /><span><strong className="text-stone-900">Engineering Execution:</strong> Moved key marketing pages to Next.js App Router with Server-Side Rendering (SSR), set up Cloudflare caching, and added structured data.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Measured Outcome" /><span><strong className="text-stone-900">Measured Outcome:</strong> Mobile LCP improved to 0.9 seconds. Search impressions grew by 145% in 90 days, and pages were indexed in under 6 hours instead of 21 days.</span></div></div></div></div></section>

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
                Find and fix the technical problems that may be holding back your Google rankings.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get a Technical SEO Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
