import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { Zap, ArrowRight, MapPin, Building, Star, Compass } from "lucide-react";

export const metadata = {
  title: "Local SEO Services in Delhi NCR, Noida & Gurgaon",
  description:
    "Help local customers find your business on Google Maps and in nearby search results. Local SEO services for businesses in Delhi NCR, Noida, Faridabad, and Gurgaon.",
  keywords: "local SEO services Delhi NCR, local SEO agency Noida, Google Maps SEO Gurgaon",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services in Delhi NCR - Anavya Infotech",
    description:
      "Help local customers find your business on Google Maps and nearby searches with local SEO services from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/local-seo",
    type: "website",
  },
};


const LOCAL_SEO_FAQS = [
  {
    "question": "What's the difference between SEO and local SEO?",
    "answer": "Local SEO helps your business appear in searches tied to a place, such as \"near me,\" and on Google Maps. General SEO targets wider search results."
  },
  {
    "question": "Do I need a Google Business Profile even if I already have a website?",
    "answer": "Yes. For local businesses, a Google Business Profile can bring more calls and visits than website search results alone."
  },
  {
    "question": "How soon can I expect more local calls or visits?",
    "answer": "Changes to your Google Business Profile may show results within 4–8 weeks. Ranking in the local map results often takes longer, depending on competition."
  }
];


const serviceSchemas = createServiceSchema({
  name: "Local SEO Services in Delhi NCR, Noida, Gurgaon & Faridabad",
  description: "Rank higher in local Google search & Maps for your Delhi NCR business. Google Business Profile optimization, citations & local content by Anavya Infotech.",
  slug: "local-seo",
  faqs: LOCAL_SEO_FAQS,
});

export default function LocalSeoServicePage() {

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="local-seo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Local SEO", href: "/services/local-seo" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-blue-700" /> Services / Local SEO
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Best Local SEO Services in Delhi NCR
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              When someone searches for &quot;services in Sector 62 Noida&quot; or &quot;best stores near me,&quot; Google shows three local businesses. Our local SEO service helps your business appear in these results across Faridabad, Noida, Gurgaon, and Delhi NCR. Make it easier for nearby customers to find you.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Boost Local Rankings <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/growth-illustration.jpg"
              alt="Local SEO Services Delhi NCR"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>
<section className="py-12 bg-white border-b border-stone-100 px-6">
        
      </section>

      
      

      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
            Our Local SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2 hover:border-blue-300 transition-colors">
              <span className="service-process-number">01</span>
              <h3 className="text-base font-medium text-stone-900">Local SEO Review</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Review your Google Business Profile and compare your local search presence with competitors.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2 hover:border-blue-300 transition-colors">
              <span className="service-process-number">02</span>
              <h3 className="text-base font-medium text-stone-900">Business Listings &amp; Details</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Add your business to trusted local directories and keep its name, address, and phone number consistent.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2 hover:border-blue-300 transition-colors">
              <span className="service-process-number">03</span>
              <h3 className="text-base font-medium text-stone-900">Local Page Improvements</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Create service pages for the areas you serve, based on what local customers search for.</p>
            </div>
            <div className="bg-white border border-stone-200 p-6 rounded-md space-y-2 hover:border-blue-300 transition-colors">
              <span className="service-process-number">04</span>
              <h3 className="text-base font-medium text-stone-900">Reviews & Map Rankings</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">Encourage customer reviews and track your rankings on Google Maps.</p>
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
