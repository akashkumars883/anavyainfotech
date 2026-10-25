import { createServiceSchema } from "@/lib/serviceSchema";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

export const metadata = {
  title: "SEO Content Strategy Services | Anavya Infotech",
  description: "Build useful topic groups and improve your search visibility. We plan content around what B2B customers search for and need to know.",
  keywords: ["seo content strategy services","topical authority consulting","semantic seo agency","content cluster strategy","b2b seo content marketing","answer engine optimization consulting"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/content-strategist",
  },
  openGraph: {
    title: "SEO Content Strategy Services | Anavya Infotech",
    description:
      "Plan useful SEO content around what your customers search for, from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/content-strategist",
    type: "website",
  },
};

const CONTENT_STRATEGIST_FAQS = [
  {
    "question": "What does topical authority mean in SEO?",
    "answer": "Topical authority means covering a subject clearly and in enough detail. Search engines look at how complete and well-organized your related content is."
  },
  {
    "question": "How do topic clusters differ from traditional blogging?",
    "answer": "Traditional blogs often publish separate posts in date order. Topic clusters link a main guide to related articles, helping readers and search engines understand how the content fits together."
  },
  {
    "question": "How long does it take to build topical authority in competitive industries?",
    "answer": "You may see more unpaid search traffic within 60 to 120 days after we organize related content and review how topics and key terms are covered."
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

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Content Strategy", href: "/services/content-strategist" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Megaphone className="h-3.5 w-3.5 text-blue-700" /> SEO Content Strategy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Content Strategy Built Around Search Intent, Not Guesswork
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Publishing blog posts without a plan may not improve rankings or sales. Anavya Infotech plans content around what people search for and where they are in the buying process. Each article, guide, or landing page has a clear audience, keyword, and business goal.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Build Your Content Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <img
              src="/growth-illustration.jpg"
              alt="SEO Content Strategy Services"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Plan Helpful Blog Content That Covers Each Topic</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Search engines look for useful, complete information about a subject. Separate articles with no clear links or structure can make it harder for readers and search engines to understand your coverage.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech plans SEO content using topic groups, clear links between related pages, and information people are searching for. We also prepare content for search engines and AI tools.</p></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Why Publishing Many Short Articles May Not Help</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Publishing many articles without a clear plan can hurt your website:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Pages Competing for the Same Search" /><span><strong className="text-stone-900">Pages Competing for the Same Search:</strong> Articles about the same keyword can compete with each other and make it harder for search engines to choose a page.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Topics Need More Detail" /><span><strong className="text-stone-900">Topics Need More Detail:</strong> Short, general content may leave out important details that readers need and miss useful search terms.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Pages Search Engines Cannot Find" /><span><strong className="text-stone-900">Pages Search Engines Cannot Find:</strong> Low-value pages can use up the time search engines spend reviewing your site and may lose visibility after search updates.</span></div></div></div></div></section>

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Content Strategy Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">01</div>
              <h3 className="text-lg font-semibold text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Content and competitor gap audit.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">02</div>
              <h3 className="text-lg font-semibold text-stone-900">Calendar</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Keyword-mapped editorial calendar.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">03</div>
              <h3 className="text-lg font-semibold text-stone-900">Production</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Content briefs and production.</p>
            </div>
            <div className="p-6 bg-white border border-stone-100 rounded-md space-y-3">
              <div className="service-process-number">04</div>
              <h3 className="text-lg font-semibold text-stone-900">Performance</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Performance tracking and iteration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">How We Organize Related Content</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We organize related pages to show how your content covers each topic:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Main Guides and Related Articles" /><span><strong className="text-stone-900">Main Guides and Related Articles:</strong> Link a main guide to related articles so readers can explore the topic and understand how the pages connect.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Add Important Industry Terms" /><span><strong className="text-stone-900">Add Important Industry Terms:</strong> Use relevant industry terms, natural language processing (NLP), and structured data to help search engines understand your content.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Match Content to What People Need" /><span><strong className="text-stone-900">Match Content to What People Need:</strong> Organize each page around what readers are looking for, whether they need information or are ready to buy.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Review and Update Older Content" /><span><strong className="text-stone-900">Review and Update Older Content:</strong> Update outdated pages and combine pages that cover the same topic.</span></div></div></div></div></section>
      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Example: Growth from an Agency Guide</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Challenge" /><span><strong className="text-stone-900">Challenge:</strong> A B2B service firm experienced flat search impressions despite maintaining a weekly publishing routine.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Execution" /><span><strong className="text-stone-900">Execution:</strong> We restructured 30 articles into 3 focused topic clusters, consolidated overlapping content, and optimized entity relationships for target search intent.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Result" /><span><strong className="text-stone-900">Result:</strong> Organic search click-through rates (CTR) jumped by +9.5%, while primary page keyword rankings reached the top 3 within 90 days.</span></div></div></div></div></section>

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
              Build Your Content Strategy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
