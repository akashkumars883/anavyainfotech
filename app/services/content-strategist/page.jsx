import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, Share2, Megaphone, Target, BarChart2 } from "lucide-react";

export const metadata = {
  title: "SEO Content Strategy & Topical Authority Consulting | Anavya Infotech",
  description: "Outrank competitors by building unassailable topical authority. Data-driven content clusters, semantic entity mapping & search intent optimization for B2B brands.",
  keywords: ["seo content strategy services","topical authority consulting","semantic seo agency","content cluster strategy","b2b seo content marketing","answer engine optimization consulting"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/content-strategist",
  },
  openGraph: {
    title: "Digital Marketing Agency in India & Delhi NCR - Performance Marketing Services",
    description:
      "Full-funnel performance marketing company, social media marketing agency, and digital marketing services in India & Delhi NCR.",
    url: "https://www.anavyainfotech.com/services/content-strategist",
    type: "website",
  },
};


const CONTENT_STRATEGIST_FAQS = [
  {
    "question": "What is topical authority in modern SEO?",
    "answer": "Topical authority is a measure of how comprehensively a site covers a given subject. Search engines evaluate the breadth, depth, and semantic structure of your content clusters to determine domain expertise."
  },
  {
    "question": "How do topic clusters differ from traditional blogging?",
    "answer": "Traditional blogging creates independent, chronological posts. Topic clusters connect a core pillar page to detailed sub-topic articles via intentional internal links, creating clear contextual relationships for search crawlers."
  },
  {
    "question": "How long does it take to build topical authority in competitive industries?",
    "answer": "Noticeable organic gains typically occur within 60 to 120 days after deploying structured content clusters and completing entity optimization audits."
  }
];


const serviceSchemas = createServiceSchema({
  name: "Content Strategy & SEO Content Services",
  description: "Outrank competitors by building unassailable topical authority. Data-driven content clusters, semantic entity mapping & search intent optimization for B2B brands.",
  slug: "content-strategist",
  faqs: CONTENT_STRATEGIST_FAQS,
});

export default function ContentStrategyPage() {
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="content-strategist">
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
          <Link href="/contact" className="service-hero-cta">Discuss your project <span aria-hidden="true">→</span></Link>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Publishing blog posts without a strategy rarely moves rankings or revenue. Anavya Infotech builds content strategies mapped to actual search intent and buyer journey stages — so every article, guide, or landing page you publish has a specific keyword, audience, and business goal behind it.
          </p>
        </div>
      </section>
<section className="py-12 bg-white border-b border-stone-100 px-6">
        
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Stop Publishing Random Blog Posts: Architect Unassailable Topical Authority</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Modern search engine algorithms prioritize comprehensive domain expertise over isolated keyword targeting. Publishing disconnected articles without structured topical relationships yields diminishing organic visibility in competitive B2B verticals.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech provides data-driven SEO content strategy services and topical authority consulting. We design semantic content hubs, map entity relationships, and optimize content for modern search and AI engine retrieval (LLM indexing).</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">The Content Grind Trap: Why Publishing 50 Thin Articles a Month Fails</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">High-volume, unstrategized content creation hurts site performance under modern Search Quality Rater guidelines:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Keyword Cannibalization" /><span><strong className="text-stone-900">Keyword Cannibalization:</strong> Unstructured articles compete against each other for identical keywords, confusing search crawlers and splitting authority.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Lack of Depth &amp; Entity Coverage" /><span><strong className="text-stone-900">Lack of Depth &amp; Entity Coverage:</strong> Surface-level content fails to address underlying semantic entities, missing primary rankings for high-intent search terms.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Unindexed Waste Content" /><span><strong className="text-stone-900">Unindexed Waste Content:</strong> Low-value pages burn through crawl budgets and risk overall domain suppression during search updates.</span></div></div></div></div></section>
<section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Content Strategy Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">01</span>
              <h3 className="text-base font-medium text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Content and competitor gap audit.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">02</span>
              <h3 className="text-base font-medium text-stone-900">Calendar</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Keyword-mapped editorial calendar.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">03</span>
              <h3 className="text-base font-medium text-stone-900">Production</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Content briefs and production.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="service-process-number">04</span>
              <h3 className="text-base font-medium text-stone-900">Performance</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Performance tracking and iteration.</p>
            </div>
          </div>
        </div>
      </section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Our Semantic Content Architecture Framework</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We build organized content systems designed to demonstrate clear topical dominance:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Pillar &amp; Cluster Mapping" /><span><strong className="text-stone-900">Pillar &amp; Cluster Mapping:</strong> Structuring core pillar pages connected to supporting sub-topic articles via exact semantic internal linking.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Entity Extraction &amp; NLP Optimization" /><span><strong className="text-stone-900">Entity Extraction &amp; NLP Optimization:</strong> Integrating industry terms, natural language processing (NLP) entities, and structured data formats expected by search algorithms.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Search Intent &amp; Journey Alignment" /><span><strong className="text-stone-900">Search Intent &amp; Journey Alignment:</strong> Matching copy structure directly to informational, commercial, or transactional user needs.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Content Decay &amp; Pruning Audits" /><span><strong className="text-stone-900">Content Decay &amp; Pruning Audits:</strong> Updating decaying pages and consolidating overlapping URLs to preserve overall topical health.</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Strategy Comparison: Content Mill vs. Semantic Entity Architecture</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Strategic Focus" /><span>Strategic Focus</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Keyword-Stuffed Content Mill" /><span>Keyword-Stuffed Content Mill</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Semantic Entity Authority Architecture" /><span>Semantic Entity Authority Architecture</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Planning Metric" /><span>Planning Metric</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Individual keyword density" /><span>Individual keyword density</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Topical coverage &amp; NLP entity mapping" /><span>Topical coverage &amp; NLP entity mapping</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Site Architecture" /><span>Site Architecture</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Flat, unlinked blog feed" /><span>Flat, unlinked blog feed</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Structured Pillar-Cluster hub networks" /><span>Structured Pillar-Cluster hub networks</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Search Relevance" /><span>Search Relevance</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Short-term keyword rankings" /><span>Short-term keyword rankings</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Sustainable search &amp; AI answer engine authority" /><span>Sustainable search &amp; AI answer engine authority</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Content Longevity" /><span>Content Longevity</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Decays rapidly post-launch" /><span>Decays rapidly post-launch</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Grows traffic compoundingly over time" /><span>Grows traffic compoundingly over time</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Organic Growth Proof: Agency Scaling Guide Success</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Challenge" /><span><strong className="text-stone-900">Challenge:</strong> A B2B service firm experienced flat search impressions despite maintaining a weekly publishing routine.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Execution" /><span><strong className="text-stone-900">Execution:</strong> We restructured 30 articles into 3 focused topic clusters, consolidated overlapping content, and optimized entity relationships for target search intent.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Result" /><span><strong className="text-stone-900">Result:</strong> Organic search click-through rates (CTR) jumped by +9.5%, while primary page keyword rankings reached the top 3 within 90 days.</span></div></div></div></div></section>

      {/* Process Section */}
      

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


