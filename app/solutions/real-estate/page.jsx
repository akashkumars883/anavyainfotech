import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Real Estate Portals and Property Software",
  description: "Build real estate websites, property directories, and broker CRMs. Add map search, MLS/IDX listing updates, WhatsApp lead routing, and tools to connect serious buyers with agents.",
  keywords: ["real estate software development company","custom real estate portal development","property marketplace web development","real estate CRM software","MLS IDX integration services","real estate lead generation portal"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/real-estate" },
  openGraph: { title: "Real Estate Portals and Property Software | Anavya Infotech", description: "Build real estate websites, property directories, and broker CRMs. Add map search, MLS/IDX listing updates, WhatsApp lead routing, and tools to connect serious buyers with agents.", url: "https://www.anavyainfotech.com/solutions/real-estate", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Real Estate Portals & Property Marketplaces","description":"Build high-converting real estate portals, property directories & broker CRMs. Fast interactive map search, MLS/IDX sync, WhatsApp lead routing & verified buyer funnels.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const REAL_ESTATE_FAQS = [
  {
    "question": "Can you connect our website to local MLS listing feeds?",
    "answer": "Yes. We use RESO Web API and RETS feeds to keep listing details, photos, and status updates in sync."
  },
  {
    "question": "How can map search stay fast with thousands of listings?",
    "answer": "We use PostgreSQL/PostGIS indexing and vector map tiles, then group nearby listings. This helps the map show relevant properties as users move it."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Real Estate Websites and Property Marketplaces</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Fixed listings and slow property websites can lose the interest of home buyers and investors. Strong property platforms need up-to-date search, interactive maps, and reliable ways to connect buyers with agents.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Build Property Websites That Help Buyers Find Homes</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech builds property marketplaces and broker tools with custom websites, MLS/IDX listing updates, map search, and ways to turn inquiries into clients.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Map Search and Drawn-Area Filters</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automatic MLS / IDX Listing Updates</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>CRM to Manage Broker and Agent Leads</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>WhatsApp Inquiries and Video Tour Booking</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Why Standard Property Websites Lose Buyers</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Slow website designs, outdated listings, and basic forms make it harder for brokers to compete with large property websites.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Slow interactive search</h3><p className="mt-2 text-sm leading-6 text-stone-600">Large page designs and slow database searches make maps and filters frustrating for buyers who are ready to act.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Manual listing updates</h3><p className="mt-2 text-sm leading-6 text-stone-600">Separate databases lead to old or repeated listings and take time to maintain.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Lost buyer leads</h3><p className="mt-2 text-sm leading-6 text-stone-600">Basic forms can send buyer inquiries to inboxes no one checks. Slow assignment delays an agent?s response.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Key Real Estate Platform Features</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Flexible tools for property websites, brokerages, and commercial developers.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Map Search and Drawn-Area Filters</h3><p className="mt-2 text-sm leading-6 text-stone-600">Help users find properties quickly on interactive maps.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Integrate Mapbox GL and Google Maps Platform.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Let users search by drawing an area or choosing a distance from a point.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Group many listings on the map without slowing down the browser.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automatic MLS / IDX Listing Updates</h3><p className="mt-2 text-sm leading-6 text-stone-600">Keep property details up to date across the marketplace.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Connect to RESO Web API, Retsly, and MLS Grid listing services.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Sync additions, price changes, and status updates.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Optimize listing photos and deliver them through global CDNs.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">CRM to Manage Broker and Agent Leads</h3><p className="mt-2 text-sm leading-6 text-stone-600">Manage buyer inquiries and send them to the right people.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Set access for admins, brokers, agents, and buyers.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Assign potential buyers based on area, budget, and agent availability.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Track property views, saved searches, and past conversations.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">WhatsApp Inquiries and Video Tour Booking</h3><p className="mt-2 text-sm leading-6 text-stone-600">Help interested buyers start a conversation with an agent.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Send listing details through the WhatsApp Business API.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Embed Matterport tours and appointment scheduling.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Send property brochures through SMS and email.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Compare Platform Performance</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Feature</th><th scope="col" className="px-5 py-4 font-semibold">Older All-in-One Website</th><th scope="col" className="px-5 py-4 font-semibold">Anavya Next.js Website</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Page Load Time (LCP)</th><td className="px-5 py-4">3.8–6.2 seconds with plugin bloat</td><td className="px-5 py-4">Under 1.2 seconds with server rendering (SSR) and edge CDN</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Map Rendering</th><td className="px-5 py-4">The whole page reloads as users move the map</td><td className="px-5 py-4">Fast map images that group nearby listings</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Mobile Experience</th><td className="px-5 py-4">Slow and difficult to use on phones</td><td className="px-5 py-4">Ready for a PWA, with a PageSpeed score target of 90+</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Lead Routing</th><td className="px-5 py-4">Unverified inquiries sent to a general inbox</td><td className="px-5 py-4">API sends inquiries to WhatsApp and the agent CRM</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Case Study: Rebuilding the Nakul Properties Marketplace</h2><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">The Challenge</h3><p className="mt-2 text-sm leading-6 text-stone-600">Nakul Properties had poor search visibility, slow maps, and few inquiries through its old website. Buyers ready to act were going to larger property websites.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Technical Solution</h3><p className="mt-2 text-sm leading-6 text-stone-600">We rebuilt the site with Next.js, Node.js services, PostgreSQL/PostGIS, and Mapbox GL for map-based property search.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Verified Results</h3><p className="mt-2 text-sm leading-6 text-stone-600">Reached #1 in Google Maps and organic search for selected local searches. Qualified high-value buyer inquiries rose 45% in 120 days. Average load time fell from 4.8 seconds to 0.9 seconds.</p></article></div></div></section>

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
                Get the Real Estate Portal Design Guide
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Plan a property website with fast search, up-to-date listings, and reliable ways to reach buyers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get the Design Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

