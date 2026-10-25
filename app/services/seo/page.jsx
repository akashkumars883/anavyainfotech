import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "SEO Services in India - Anavya Infotech",
  description:
    "SEO services for businesses in Delhi NCR, Faridabad, Noida, and the USA. We improve technical SEO, page content, and search rankings to grow website traffic.",
  keywords: "SEO company India, search engine optimization services, SEO agency Delhi NCR Faridabad Noida",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/seo",
  },
  openGraph: {
    title: "SEO Services in India - Anavya Infotech",
    description:
      "SEO services for businesses in Delhi NCR, Faridabad, Noida, and the USA. We improve technical SEO, page content, and search rankings to grow website traffic.",
    url: "https://www.anavyainfotech.com/services/seo",
    type: "website",
  },
};

const SEO_FAQS = [
  {
    question: "How long does SEO take to show results?",
    answer: "SEO usually takes 3–6 months to improve rankings. The timeline depends on your competition and your site's current condition. We will give you an estimate after the audit."
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer: "No reliable SEO agency can promise a specific ranking because no one controls Google's algorithm. We focus on and report changes in traffic and conversions instead."
  },
  {
    question: "Is SEO better than paid ads for my business?",
    answer: "They serve different purposes. SEO can bring more traffic over time and lower the cost of getting leads. Ads bring traffic right away. Many businesses benefit from using both."
  },
  {
    question: "Do you offer specialized SEO for e-commerce or local businesses?",
    answer: "Yes — see E-Commerce SEO, Local SEO, and Technical SEO."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Search Engine Optimization Services",
  description: "Data-driven SEO services for businesses in Delhi NCR, Faridabad, Noida & the USA. Technical, on-page & content SEO to rank higher and grow organic traffic.",
  slug: "seo",
  serviceType: "SEO Services",
  faqs: SEO_FAQS,
  breadcrumbLabel: "SEO",
});

export default function SeoServicePage() {
  const inclusions = [
    "Full technical SEO audit (crawlability, indexing, Core Web Vitals, structured data)",
    "Keyword research mapped to actual buyer intent, not just search volume",
    "On-page optimization: title tags, meta descriptions, internal linking, content gaps",
    "Content strategy and SEO-optimized blog/content production",
    "Local SEO (Google Business Profile, citations) where relevant",
    "Monthly reporting on rankings, traffic, and conversions — not vanity metrics",
  ];

  const processSteps = [
    { num: "01", title: "SEO Review", desc: "Check your site's technical setup, competitors, and Core Web Vitals." },
    { num: "02", title: "Keywords & Content Plan", desc: "Find useful business keywords and identify content your site needs." },
    { num: "03", title: "Improve Website Pages", desc: "Update page titles, structured data, and content." },
    { num: "04", title: "Build Links & Track Results", desc: "Improve your site over time, build links, and report on business results." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="seo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "SEO", href: "/services/seo" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Globe className="h-3.5 w-3.5 text-blue-700" /> Search Engine Optimization
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Top SEO Services Company in India
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Ranking for a keyword only matters if it brings customers. Anavya Infotech plans SEO campaigns to attract visitors who are likely to take action. Our services include technical checks, page improvements, content planning, and link building for businesses across India, Delhi NCR, and the USA.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Get a Free SEO Audit → <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/growth-illustration.jpg"
              alt="SEO Services Company India"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>
{/* EEAT Content Section */}
      <section className="py-12 md:py-16 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Trusted Search Engine Optimization Services
          </h2>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            <p>
              Strong search visibility takes more than basic marketing. As an <strong>SEO company in India</strong>, Anavya Infotech fixes technical problems instead of using spammy links. We can audit your site to find issues that stop search engines from reading it, or help your business reach local B2B customers in Delhi NCR. Our plans use data to support steady growth in unpaid search traffic.
            </p>
            <p>
              We share clear reports focused on business results. We do not promise specific rankings; we track changes in traffic and conversions. Our team also improves Next.js and React websites for search and follows Google&apos;s EEAT guidelines. We run <Link href="/blog/white-label-seo-reseller-program-agency-scaling-guide" className="text-blue-700 underline font-medium">White Label SEO Reseller programs</Link> for agencies that need SEO work delivered under their own brand.
            </p>
          </div>
        </div>
      </section>

      
      

      <section className="py-12 bg-white border-b border-stone-100 px-6 service-process-section">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3">
                <div className="service-process-number">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about search engine optimization."
        faqs={SEO_FAQS}
      />

      {/* Contact Trigger Block */}
      
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to double your organic search traffic?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Get a free technical SEO audit and custom ranking strategy for your platform.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get a Free SEO Audit →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
