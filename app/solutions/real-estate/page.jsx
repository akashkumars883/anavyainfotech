import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Real Estate Portal & Custom Property Software Development",
  description: "Build high-converting real estate portals, property directories & broker CRMs. Fast interactive map search, MLS/IDX sync, WhatsApp lead routing & verified buyer funnels.",
  keywords: ["real estate software development company","custom real estate portal development","property marketplace web development","real estate CRM software","MLS IDX integration services","real estate lead generation portal"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/real-estate" },
  openGraph: { title: "Real Estate Portal & Custom Property Software Development | Anavya Infotech", description: "Build high-converting real estate portals, property directories & broker CRMs. Fast interactive map search, MLS/IDX sync, WhatsApp lead routing & verified buyer funnels.", url: "https://www.anavyainfotech.com/solutions/real-estate", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Real Estate Portals & Property Marketplaces","description":"Build high-converting real estate portals, property directories & broker CRMs. Fast interactive map search, MLS/IDX sync, WhatsApp lead routing & verified buyer funnels.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const REAL_ESTATE_FAQS = [
  {
    "question": "Can you sync our portal with local MLS listing feeds?",
    "answer": "Yes. We integrate RESO Web API and RETS feeds to synchronize listing data, media, and status updates."
  },
  {
    "question": "How does spatial map search remain fast with thousands of listings?",
    "answer": "We use PostgreSQL/PostGIS spatial indexing and vector map tiles with dynamic clustering so the map loads relevant listings as users move around."
  }
];

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Header */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Real Estate Tech", href: "/solutions/real-estate" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Real Estate Portals & Property Marketplaces</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Static listings and slow directory websites struggle to engage modern home buyers and investors. Competitive property platforms need real-time search, interactive maps, and reliable lead routing.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Modern Property Marketplaces: Engineering High-Converting Real Estate Portals</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech engineers property marketplaces and broker systems with custom web architecture, MLS/IDX synchronization, interactive map search, and lead-conversion workflows.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Geo-Spatial Map Search & Polygon Filters</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automated MLS / IDX Property Feeds</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Brokerage & Agent Lead Management CRM</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>WhatsApp Inquiry & Video Tour Booking</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Why Generic Property Themes Fail: The Aggregator Threat and Slow Search Speeds</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Slow templates, disconnected listing data, and generic forms make it harder for brokerages to compete with major property aggregators.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Slow interactive search</h3><p className="mt-2 text-sm leading-6 text-stone-600">Heavy templates and database queries make map rendering and filtering frustrating for high-intent buyers.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Manual listing updates</h3><p className="mt-2 text-sm leading-6 text-stone-600">Disconnected databases create stale or duplicate listings and time-consuming maintenance.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Lost buyer leads</h3><p className="mt-2 text-sm leading-6 text-stone-600">Generic forms can leave leads in unmonitored inboxes. Slow routing delays agent follow-up.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Real Estate Engineering Capabilities</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Scalable platform tools for property marketplaces, brokerages, and commercial developers.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Geo-Spatial Map Search & Polygon Filters</h3><p className="mt-2 text-sm leading-6 text-stone-600">Build fast property discovery on interactive vector maps.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Integrate Mapbox GL and Google Maps Platform.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Let users draw polygon and radius searches.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Cluster large listing sets without slowing the browser.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automated MLS / IDX Property Feeds</h3><p className="mt-2 text-sm leading-6 text-stone-600">Keep listing information accurate across the marketplace.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Connect RESO Web API, Retsly, and MLS Grid endpoints.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Sync additions, price changes, and status updates.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Optimize listing images and deliver through global CDNs.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Brokerage & Agent Lead Management CRM</h3><p className="mt-2 text-sm leading-6 text-stone-600">Manage buyer enquiries with clear roles and routing.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Set access for admins, brokers, agents, and buyers.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Assign leads by neighborhood, budget, and agent availability.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Track views, saved searches, and communication history.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">WhatsApp Inquiry & Video Tour Booking</h3><p className="mt-2 text-sm leading-6 text-stone-600">Turn high-intent browsing into direct conversations.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Route listing details through WhatsApp Business API.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Embed Matterport tours and appointment scheduling.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Send property brochures through SMS and email.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Platform Performance Comparison</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Feature</th><th scope="col" className="px-5 py-4 font-semibold">Legacy Monolithic Portal</th><th scope="col" className="px-5 py-4 font-semibold">Anavya Headless Next.js Portal</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Page Load Speed (LCP)</th><td className="px-5 py-4">3.8–6.2 seconds with plugin bloat</td><td className="px-5 py-4">Under 1.2 seconds with SSR and edge CDN</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Map Rendering</th><td className="px-5 py-4">Whole-page reloads while panning</td><td className="px-5 py-4">Vector rendering with dynamic clusters</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Mobile Experience</th><td className="px-5 py-4">Poor responsive performance</td><td className="px-5 py-4">PWA-ready experience targeting 90+ PageSpeed</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Lead Routing</th><td className="px-5 py-4">Unverified forms to a generic inbox</td><td className="px-5 py-4">API routing to WhatsApp and agent CRM</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Case Evidence: Nakul Properties Marketplace Re-Architecture</h2><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">The Challenge</h3><p className="mt-2 text-sm leading-6 text-stone-600">Nakul Properties had weak search visibility, slow maps, and low conversion on its legacy site, losing high-intent buyers to national aggregators.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Technical Solution</h3><p className="mt-2 text-sm leading-6 text-stone-600">We rebuilt with Next.js, Node.js microservices, PostgreSQL/PostGIS, and Mapbox GL for spatial search.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Verified Results</h3><p className="mt-2 text-sm leading-6 text-stone-600">#1 Google Maps and organic rankings for targeted hyper-local queries. Qualified high-ticket buyer enquiries increased by 45% within 120 days. Average load time improved from 4.8 seconds to 0.9 seconds.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Real Estate FAQs"
        subtitle="Common questions about real estate technology and project delivery."
        faqs={REAL_ESTATE_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Download the Real Estate Portal Architecture Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Plan a property marketplace with fast search, current listings, and reliable lead routing.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Request Architecture Blueprint
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


