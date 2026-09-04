import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Code } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Business Website Development Company in India & USA | Anavya Infotech",
  description:
    "Custom business website design & development for companies in Delhi NCR, Faridabad, Noida & USA. Fast, SEO-ready, mobile-first sites built on modern stacks. Get a free quote.",
  keywords:
    "business website development company, custom website design India, web development agency Faridabad Noida, SEO business website, Next.js web development",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/business-website",
  },
  openGraph: {
    title: "Business Website Development Company in India & USA | Anavya Infotech",
    description:
      "Custom business website design & development for companies in Delhi NCR, Faridabad, Noida & USA. Fast, SEO-ready, mobile-first sites built on modern stacks.",
    url: "https://www.anavyainfotech.com/services/business-website",
    type: "website",
  },
};

const BUSINESS_WEBSITE_FAQS = [
  {
    question: "How much does a business website cost in India?",
    answer: "Pricing depends on the number of pages, custom features, and design complexity. See our Pricing & Plans or use our Budget Calculator for an instant estimate."
  },
  {
    question: "How long does it take to build a business website?",
    answer: "Most business websites are delivered in 2–4 weeks, depending on scope and how quickly content/approvals come back to us."
  },
  {
    question: "Will my website be mobile-friendly and fast on Google PageSpeed?",
    answer: "Yes — every site we ship is tested against Google's Core Web Vitals before launch, since page speed directly affects both rankings and conversion rates."
  },
  {
    question: "Do I own my website's code and content?",
    answer: "Yes, 100%. Unlike many agencies, we don't lock you into proprietary platforms or ongoing licensing fees."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Business Website Development Services",
  description: "Custom business website design & development for companies in Delhi NCR, Faridabad, Noida & USA. Fast, SEO-ready, mobile-first sites built on modern stacks.",
  slug: "business-website",
  serviceType: "Business Website Development",
  faqs: BUSINESS_WEBSITE_FAQS,
  breadcrumbLabel: "Business Website",
});

export default function BusinessWebsitePage() {
  const inclusions = [
    "Custom UI/UX design aligned to your brand — no generic templates",
    "Mobile-first, responsive layouts tested across devices",
    "On-page SEO foundation: meta tags, schema markup, clean URL structure, sitemap",
    "Fast-loading architecture (sub-2-second load times, optimized images, lazy loading)",
    "Lead capture: contact forms, WhatsApp click-to-chat, call tracking",
    "CMS integration so you can update text/images/blog without a developer",
    "SSL, security hardening, and Google Search Console + Analytics setup",
    "100% code ownership — no vendor lock-in, no recurring \"seat fees\"",
  ];

  const processSteps = [
    { num: "01", title: "Discover & Plan", desc: "We study your business, competitors, and target customer before writing a single line of code." },
    { num: "02", title: "Architecture & Design", desc: "Sitemap, wireframes, and high-fidelity UI mockups for your approval." },
    { num: "03", title: "Agile Development", desc: "Weekly builds you can review, not a black box for 6 weeks." },
    { num: "04", title: "Optimize & Launch", desc: "Speed audit, security check, local SEO setup, and go-live." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Section */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Business Website", href: "/services/business-website" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <Code className="h-3.5 w-3.5 text-blue-700" /> Business Website Development
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Business Website Development That Turns Visitors Into Customers
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light max-w-4xl leading-relaxed">
            Your website is usually the first interaction a prospective customer has with your business — and in most cases, it decides whether they call you or scroll to your competitor. At Anavya Infotech, we design and build business websites for companies across India, Delhi NCR, Faridabad, Noida, Gurgaon, and the USA that load fast, rank on Google, and are built to convert visitors into leads and paying customers, not just look good.
          </p>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-4xl leading-relaxed">
            We don't hand you a templated theme with your logo pasted on top. Every business website we build is custom-coded on modern frameworks (Next.js/React), hand-optimized for Core Web Vitals, and structured from day one around your actual sales goals — whether that's phone calls, form fills, WhatsApp enquiries, or online bookings.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              Start Your Website Project → <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            What's Included in Our Business Website Development
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

      {/* Local Advantage Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Why Businesses in Faridabad &amp; Delhi NCR Choose Anavya Infotech
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light max-w-4xl leading-relaxed">
            Local businesses often lose customers to competitors simply because their website is slow, outdated, or invisible on Google. We fix all three: our sites are engineered for speed and Core Web Vitals, built with on-page SEO from the first line of code, and designed to make it easy for a customer scrolling on their phone to call or message you in one tap. We've delivered business websites for real estate firms (<Link href="/case-studies/nakul-properties" className="text-blue-700 underline">Nakul Properties</Link>), fintech platforms, and local service businesses — each launched with a documented SEO and speed audit before go-live.
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
        subtitle="Common questions about business website development in India & USA."
        faqs={BUSINESS_WEBSITE_FAQS}
      />

      {/* CTA Trigger */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to build a website that actually converts?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with a senior engineer to discuss your website requirements and get an itemized quote.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Start Your Website Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
