import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, Layout } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Landing Page Design & Development | Anavya Infotech",
  description: "Get fast landing pages for Google Ads and Meta Ads. We create clear forms, test different page versions, and help turn more visitors into customers.",
  keywords: ["landing page development services","high converting landing page agency","PPC landing page design","Next.js landing pages","conversion rate optimization landing page","ad campaign landing page agency"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/landing-pages",
  },
  openGraph: {
    title: "Landing Page Design & Development | Anavya Infotech",
    description:
      "Fast landing pages for ad campaigns, product launches, and lead generation. Built for marketing teams in India and the USA.",
    url: "https://www.anavyainfotech.com/services/landing-pages",
    type: "website",
  },
};

const LANDING_PAGES_FAQS = [
  {
    "question": "Why choose Next.js landing pages instead of Unbounce or WordPress?",
    "answer": "Next.js landing pages can load faster, avoid some platform limits, and connect directly with custom CRMs and tracking APIs."
  },
  {
    "question": "How quickly can a custom landing page be built for an active ad campaign?",
    "answer": "Our team can design, build, and deploy a high-converting campaign landing page within 5 to 10 business days."
  },
  {
    "question": "How do high-speed landing pages lower cost-per-click (CPC) in Google Ads?",
    "answer": "Google Ads looks at page speed and user experience when setting Quality Scores. A fast page that matches your ad can earn a higher score, which may help you get a better ad position without bidding as much."
  }
];

const serviceSchemas = createServiceSchema({
  name: "High-Converting Landing Page Design & Development",
  description: "Double your Google Ads & Meta Ads ROAS with high-speed, conversion-engineered landing pages. Sub-second load times, dynamic form funnels & A/B testing infrastructure.",
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
    { num: "01", title: "Offer & Audience Discovery", desc: "Understand your offer, audience, and traffic source to align messaging." },
    { num: "02", title: "Conversion Architecture Wireframing", desc: "Wireframe and copy structured tightly around one primary conversion goal." },
    { num: "03", title: "High-Speed Development & Tracking", desc: "Build, integrate CRM/tracking, and optimize for sub-2-second load times." },
    { num: "04", title: "A/B Testing & Iteration", desc: "Launch and support continuous A/B testing for higher conversion rates." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="landing-pages">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Landing Pages", href: "/services/landing-pages" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Layout className="h-3.5 w-3.5 text-blue-700" /> Landing Page Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Landing Pages Designed to Turn Visitors Into Customers
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              A landing page should help visitors take action. Anavya Infotech builds pages for paid ads, product launches, and lead generation. Each page has one clear goal, loads in under two seconds, and matches the promise in your ad.
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
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/growth-illustration.jpg"
              alt="High Converting Landing Page Design"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
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
            A slow or unclear landing page can waste your ad budget. Long load times and distracting links make visitors less likely to take action. We focus each page on what matters so more of your paid visitors can become customers.
          </p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Get More From Your Ad Budget With Fast Landing Pages</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Sending paid ad visitors to a general homepage or slow landing page can waste your budget. Every delay gives visitors another reason to leave and can raise the cost of finding new customers on Google, Meta, and LinkedIn.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech builds fast landing pages designed for ad campaigns. We use Next.js, clear offers, and simple forms to help more visitors take action and improve your return on ad spend (ROAS).</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Why General Homepages Can Waste Your Ad Budget</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Sending ad visitors to a general website page can make it harder to get leads:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Navigation Can Distract Visitors" /><span><strong className="text-stone-900">Navigation Can Distract Visitors:</strong> Menus give visitors many places to go and can draw them away from your contact form.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Slow Page Loading" /><span><strong className="text-stone-900">Slow Page Loading:</strong> Large tracking scripts and images can make pages slow on phones and cause visitors to leave.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Ad and Page Do Not Match" /><span><strong className="text-stone-900">Ad and Page Do Not Match:</strong> If your page does not match your ad, Google Ads may give it a lower Quality Score and you may pay more per click (CPC).</span></div></div></div></div></section>
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
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Six Things We Include in Our Landing Pages</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Our landing pages include useful features to help visitors take action:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Fast Page Loading" /><span><strong className="text-stone-900">Fast Page Loading:</strong> Lightweight Next.js pages designed to load quickly on mobile networks.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Clear Offer at the Top of the Page" /><span><strong className="text-stone-900">Clear Offer at the Top of the Page:</strong> Clear headlines, details about your offer, and a visible main action button (CTA).</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Direct Booking &amp; Chat Routing" /><span><strong className="text-stone-900">Booking and Chat Connections:</strong> Connect to WhatsApp, Calendly, and your CRM so visitors can book or contact you.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Simple Lead Forms" /><span><strong className="text-stone-900">Simple Lead Forms:</strong> Forms can ask for useful lead details in a few simple steps.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Helpful On-Page Prompts" /><span><strong className="text-stone-900">Helpful On-Page Prompts:</strong> Small page features that guide visitors to the next step.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Advanced Pixel &amp; Event Tracking" /><span><strong className="text-stone-900">Track Visitor Actions:</strong> Track actions with Google Tag Manager and conversion APIs (CAPI) to see which ads lead to results.</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Conversion Rate Benchmarks: Industry Average vs. Anavya High-Performance Build</h2></div><div className="overflow-x-auto rounded-md border border-stone-200"><table aria-label="Conversion rate and performance comparison" className="w-full min-w-[680px] border-collapse text-left text-sm"><thead className="bg-stone-50 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Conversion Factor</th><th scope="col" className="px-5 py-4 font-semibold">Industry Average Paid Ad Page</th><th scope="col" className="px-5 py-4 font-semibold">Anavya High-Performance Build</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Average Conversion Rate</th><td className="px-5 py-4">2.3% – 3.8%</td><td className="px-5 py-4 font-medium text-blue-800">8.5% – 14.2% (Targeted Traffic)</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Mobile Load Time</th><td className="px-5 py-4">3.2 seconds</td><td className="px-5 py-4 font-medium text-blue-800">&lt; 0.6 seconds</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Tracking Reliability</th><td className="px-5 py-4">Client-side script block losses</td><td className="px-5 py-4 font-medium text-blue-800">Server-side Conversion API (CAPI) parity</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">Ad Quality Score Impact</th><td className="px-5 py-4">Average (Higher CPCs)</td><td className="px-5 py-4 font-medium text-blue-800">High (Lowers overall CPC rates)</td></tr></tbody></table></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Live Campaign Results: Paid Search Acquisition Boost</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Execution" /><span><strong className="text-stone-900">Execution:</strong> We replaced a client&apos;s standard WordPress landing page with a fast Next.js campaign build integrated with server-side lead validation and direct booking options.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Outcome" /><span><strong className="text-stone-900">Outcome:</strong> Cost per acquisition (CPA) fell by 38%, while total monthly inbound inquiries grew by 112% on identical ad spend budgets.</span></div></div></div></div></section>

      {/* Process Section */}
      

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
                Let&apos;s design a high-converting landing page tailored to your target audience.
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
