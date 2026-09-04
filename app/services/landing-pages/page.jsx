import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layout } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "High-Converting Landing Page Design & Development | Anavya Infotech",
  description:
    "Conversion-focused landing pages for ad campaigns, product launches & lead generation. Fast-loading, A/B testable, built for India & USA marketing teams.",
  keywords:
    "landing page design services, high converting landing pages, Next.js landing page development, CRO landing page agency, lead generation landing page, PPC landing page design",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/landing-pages",
  },
  openGraph: {
    title: "High-Converting Landing Page Design & Development | Anavya Infotech",
    description:
      "Conversion-focused landing pages for ad campaigns, product launches & lead generation. Fast-loading, A/B testable, built for India & USA marketing teams.",
    url: "https://www.anavyainfotech.com/services/landing-pages",
    type: "website",
  },
};

const LANDING_PAGES_FAQS = [
  {
    question: "Can you write the copy too, or do I need to provide it?",
    answer: "We can handle copywriting, or work from your brief — whichever gets you a stronger converting page faster."
  },
  {
    question: "Do you set up conversion tracking for Google/Meta Ads?",
    answer: "Yes, GA4, Meta Pixel, and Google Ads conversion tracking are included as standard."
  },
  {
    question: "How fast can a landing page be delivered?",
    answer: "Typically 5–10 business days depending on design complexity and content readiness."
  }
];

const serviceSchemas = createServiceSchema({
  name: "High-Converting Landing Page Design & Development",
  description: "Conversion-focused landing pages for ad campaigns, product launches & lead generation. Fast-loading, A/B testable, built for India & USA marketing teams.",
  slug: "landing-pages",
  serviceType: "Landing Page Development",
  faqs: LANDING_PAGES_FAQS,
  breadcrumbLabel: "Landing Pages",
});

export default function ServicePage() {
  const inclusions = [
    "Conversion-focused copywriting and layout structure (above-the-fold offer clarity)",
    "Mobile-first design — most ad traffic in India comes from mobile",
    "Fast load times to protect your Google/Meta ad Quality Score",
    "Lead capture forms, WhatsApp CTAs, or e-commerce checkout integration",
    "A/B testing setup for headline, CTA, and layout variants",
    "Analytics and conversion tracking (GA4, Meta Pixel, Google Ads conversion tags)",
  ];

  const processSteps = [
    { num: "01", title: "Discover", desc: "Understand your offer, audience, and traffic source." },
    { num: "02", title: "Architecture", desc: "Wireframe and copy structured around one conversion goal." },
    { num: "03", title: "Build & Sync", desc: "Build, integrate tracking, and connect to your CRM/WhatsApp/email." },
    { num: "04", title: "Launch & Iterate", desc: "Launch and support A/B test iterations." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Landing Pages", href: "/services/landing-pages" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <Layout className="h-3.5 w-3.5 text-blue-700" /> Landing Page Development
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Landing Pages Built to Convert Clicks Into Leads
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light max-w-4xl leading-relaxed">
            A landing page has one job: convert. Anavya Infotech designs and builds high-converting landing pages for paid ad campaigns, product launches, and lead-generation funnels — pages engineered around a single clear action, loaded in under two seconds, and structured to match exactly what your ad promised.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              Get a Landing Page Quote → <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, index) => (
              <div key={index} className="p-4 rounded-md bg-stone-50 border border-stone-100 flex items-start gap-3 text-xs sm:text-sm text-stone-800 font-medium">
                <CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Why It Matters for Your Ad Spend
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light max-w-4xl leading-relaxed">
            A slow or unfocused landing page silently burns ad budget — every second of load time and every distracting nav link reduces your conversion rate. We build landing pages stripped down to what drives action, so the traffic you're already paying for actually converts.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3">
                <div className="text-2xl font-bold text-blue-700">{step.num}</div>
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
        subtitle="Common questions about high-converting landing page development."
        faqs={LANDING_PAGES_FAQS}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to maximize your ad campaign ROI?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Let's design a high-converting landing page tailored to your target audience.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get a Landing Page Quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
