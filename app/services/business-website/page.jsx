import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Code } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Business Website Design & Development",
  description:
    "Get a custom business website built to load quickly, appear in search results, and bring in leads. Built with Next.js.",
  keywords: [
    "business website development company",
    "custom business website design",
    "corporate website design agency",
    "responsive business web development",
    "conversion focused website design",
    "Next.js corporate site",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/business-website",
  },
  openGraph: {
    title:
      "Business Website Design & Development | Anavya Infotech",
    description:
      "Custom websites for businesses in Delhi NCR, Faridabad, Noida, and the USA. Fast, mobile-friendly, and ready for search.",
    url: "https://www.anavyainfotech.com/services/business-website",
    type: "website",
  },
};

const BUSINESS_WEBSITE_FAQS = [
  {
    question: "Why choose Next.js for a business website instead of WordPress?",
    answer:
      "Next.js can help pages load quickly, improve security, and keep code simple. It also reduces the need for plugins, which can help visitors and search engines.",
  },
  {
    question:
      "Can our marketing team update the website without a developer?",
    answer:
      "Yes. We can connect a CMS such as Sanity or Strapi so your team can create pages, publish blog posts, and update text without a developer.",
  },
  {
    question: "How long does a custom corporate website project take?",
    answer:
      "A custom business website usually takes 4 to 8 weeks. The timeline depends on how many pages you need and which tools the site must connect to.",
  },
];

const serviceSchemas = createServiceSchema({
  name: "Business Website Development Services",
  description:
    "Transform your corporate digital presence with custom business websites engineered for speed, search rankings, and lead generation. Sub-second load times on Next.js.",
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
    '100% code ownership — no vendor lock-in, no recurring "seat fees"',
  ];

  const processSteps = [
    {
      num: "01",
      title: "Learn About Your Business",
      desc: "We learn about your business, competitors, and customers before development starts.",
    },
    {
      num: "02",
      title: "Plan and Design the Website",
      desc: "We prepare the site map and page designs for you to review.",
    },
    {
      num: "03",
      title: "Build the Website",
      desc: "We share regular updates so you can review the work as we build it.",
    },
    {
      num: "04",
      title: "Check and Launch",
      desc: "We check speed and security, set up local SEO, and launch the site.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page"
      data-service="business-website"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs
              items={[
                { label: "Services", href: "/#services" },
                {
                  label: "Business Website",
                  href: "/services/business-website",
                },
              ]}
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Code className="h-3.5 w-3.5 text-blue-700" /> Business Website
              Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Custom Websites for Your Business
            </h1>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Start Your Website Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/development-illustration.jpg"
              alt="Business Website Development Company"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply rounded-md shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>
      {/* Local Advantage Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="max-w-none text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Why Businesses in Faridabad &amp; Delhi NCR Choose Anavya Infotech
          </h2>
          <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
            Local businesses can lose customers if their website is slow,
            outdated, or hard to find on Google. We build fast sites, improve
            Core Web Vitals, and include on-page SEO from the start. We also
            make it easy for phone users to call or message you. We&apos;ve
            built business websites for real
            estate firms
            <Link
              href="/case-studies/nakul-properties"
              className="text-blue-700"
            >
              Nakul Properties
            </Link>
            , fintech platforms, and local service businesses — each launched
            with a documented SEO and speed audit before go-live.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="max-w-none text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Websites That Help You Win Customers <br /> Custom Business Sites
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
              Your business website is often the first place customers,
              partners, and other companies learn about you. Slow, outdated
              websites with unclear messages can fail to turn visitors into
              potential customers.
            </p>
            <p className="max-w-7xl text-sm leading-7 text-stone-600 sm:text-base">
              Anavya Infotech builds custom business websites with Next.js and
              headless CMS platforms. These sites load quickly, help customers
              find your business through search, and make it easy to contact
              your team.
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
              <div
                key={idx}
                className="p-6 bg-stone-50 border border-stone-100 rounded-md space-y-3"
              >
                <div className="service-process-number">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Problems With Generic Website Templates
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              Ready-made WordPress themes can create technical problems that
              make it harder for your business to grow:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Excessive Code Bloat" />
                <span>
                  <strong className="text-stone-900">
                    Too Much Unused Code:
                  </strong>{" "}
                  Page builders can load large amounts of CSS and JavaScript
                  that the page does not need, which can slow mobile pages.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Generic Visual Layouts" />
                <span>
                  <strong className="text-stone-900">
                    Common Design Templates:
                  </strong>{" "}
                  Standard layouts may not explain what makes your business
                  different from competitors.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Security Vulnerabilities" />
                <span>
                  <strong className="text-stone-900">
                    Security Risks:
                  </strong>{" "}
                  Using many outside plugins can create more security risks and
                  increase the chance of site problems or downtime.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Poor Conversion Architecture" />
                <span>
                  <strong className="text-stone-900">
                    Unclear Paths to Contact:
                  </strong>{" "}
                  Fixed page layouts may not guide visitors to contact you,
                  causing them to leave before taking action.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Our Four-Step Website Process
            </h2>
          </div>
          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">
              Our process combines careful planning with clear, reliable
              development:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Discovery &amp; Wireframing" />
                <span>
                  <strong className="text-stone-900">
                    Planning &amp; Page Sketches:
                  </strong>{" "}
                  Review how customers use your site, who you want to reach, and
                  how your website compares with others.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Bespoke Figma UI/UX Design" />
                <span>
                  <strong className="text-stone-900">
                    Custom Figma Design:
                  </strong>{" "}
                  Create your design system, page layouts, and interactive
                  previews to match your brand.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Next.js &amp; Headless Development" />
                <span>
                  <strong className="text-stone-900">
                    Next.js &amp; Headless Development:
                  </strong>{" "}
                  Build web pages with server-side rendering (SSR) and connect
                  them to a content system such as Sanity, Strapi, or Contentful.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Conversion Rate Optimization (CRO) Integration" />
                <span>
                  <strong className="text-stone-900">
                    Conversion Improvements:
                  </strong>{" "}
                  Add clear forms, visitor tracking, fast page loading, and
                  accessibility checks using WCAG guidance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-stone-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Performance &amp; Conversion Metrics: Nakul Properties Case Study
            </h2>
          </div>
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 ">
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Client Challenge" />
                <span>
                  <strong className="text-stone-900">Client Challenge:</strong>{" "}
                  Nakul Properties struggled with low online lead volume and
                  high bounce rates on an outdated corporate site.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Engineering Solution" />
                <span>
                  <strong className="text-stone-900">
                    Engineering Solution:
                  </strong>{" "}
                  Anavya Infotech redesigned the digital experience using a
                  custom Next.js frontend with dynamic project filtering and
                  fast inquiry forms.
                </span>
              </div>
              <div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card">
                <ServiceFeatureIcon label="Measured Results" />
                <span>
                  <strong className="text-stone-900">Measured Results:</strong>{" "}
                  Achieved a +45% increase in qualified inbound leads within 60
                  days, while mobile load speeds improved by 78%.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}

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
                Talk with our team about your website and get a clear project
                quote.
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
