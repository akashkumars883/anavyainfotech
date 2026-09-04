import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight, MapPin, Building, Star, Compass } from "lucide-react";

export const metadata = {
  title: "Local SEO Agency in India | Best Local SEO Services & Company in Delhi NCR",
  description:
    "Anavya Infotech is the best local SEO agency in India and top local SEO company in Delhi NCR & Noida. Dominate Google Maps 3-Pack and neighborhood search results with our local SEO services.",
  keywords:
    "local SEO agency, local SEO company, local SEO services, local SEO agency in India, best local SEO agency in India, SEO agency in Noida, SEO company in Delhi NCR, digital marketing agency in Noida",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Agency in India | Best Local SEO Services & Company",
    description:
      "Dominate Google Maps local pack and high-intent regional searches with local SEO services from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/local-seo",
    type: "website",
  },
};


const LOCAL_SEO_FAQS = [
  {
    "question": "What's the difference between SEO and local SEO?",
    "answer": "Local SEO specifically targets \"near me\" and location-based searches and Google Maps results, while general SEO targets broader organic search rankings."
  },
  {
    "question": "Do I need a Google Business Profile even if I already have a website?",
    "answer": "Yes — for local businesses, your Google Business Profile often drives more calls and visits than your website's organic ranking alone."
  },
  {
    "question": "How soon can I expect more local calls or visits?",
    "answer": "Google Business Profile optimizations can show movement within 4–8 weeks; full local pack rankings usually take longer depending on competition."
  }
];


const serviceSchemas = createServiceSchema({
  name: "Local SEO Company for Faridabad, Noida, Gurgaon & Delhi NCR",
  description: "Rank higher in local Google search & Maps for your Delhi NCR business. Google Business Profile optimization, citations & local content by Anavya Infotech.",
  slug: "local-seo",
  faqs: LOCAL_SEO_FAQS,
});

export default function LocalSeoServicePage() {
  
  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Local SEO", href: "/services/local-seo" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <MapPin className="h-3.5 w-3.5 text-blue-700" /> Services / Local SEO
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Local SEO to Get Found by Customers Searching Near You
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            When someone searches &quot;website development in Sector 62 Noida&quot; or &quot;best clothing store near me,&quot; Google shows a local pack of 3 businesses — and most searchers never scroll past it. Anavya Infotech&apos;s local SEO service is built to get your business into that local pack for Faridabad, Noida, Gurgaon, and the wider Delhi NCR region.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900 leading-tight">
              Why Local SEO Matters in Delhi NCR
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Delhi NCR businesses compete in a dense, hyper-local market — a customer in Sector 15 Faridabad rarely cares about a business across the city. Local SEO ensures your business shows up specifically for searches happening near you, which typically converts far higher than generic organic traffic. Read our full guide: <Link href="/blog/local-seo-for-delhi-ncr-businesses-a-complete-guide-for-noida-gurgaon-faridabad-2026" className="text-blue-700 font-medium underline">Local SEO for Delhi NCR Businesses (2026)</Link>.
            </p>
          </div>

          <div className="lg:col-span-6 bg-stone-50 border border-stone-100 rounded-md p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                <Compass className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                What&apos;s Included in Our Local SEO
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Google Business Profile setup and full optimization</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Local citation building across relevant Indian directories</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Localized on-page SEO (city/area-specific landing pages where relevant)</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Review generation strategy and reputation management</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>NAP (Name, Address, Phone) consistency audit across the web</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                <Zap className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Local keyword tracking and monthly reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Local SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 01</span>
              <h3 className="text-base font-medium text-stone-900">Audit</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Google Business Profile and local presence audit.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 02</span>
              <h3 className="text-base font-medium text-stone-900">Citations & NAP</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Citation building and NAP consistency cleanup across Indian platforms.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 03</span>
              <h3 className="text-base font-medium text-stone-900">Localized On-Page</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Localized content and on-page optimization for target regions.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Step 04</span>
              <h3 className="text-base font-medium text-stone-900">Reviews & Growth</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Review generation and ongoing local rank tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Local SEO FAQs"
        subtitle="Frequently asked questions about Local SEO services for Delhi NCR, Noida, Faridabad & Gurgaon."
        faqs={LOCAL_SEO_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Get Found by Local Customers
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with Anavya Infotech today and put your business on the map in Faridabad, Noida, Gurgaon & Delhi NCR.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get Found by Local Customers →
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

