import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFeatureIcon from "@/components/ServiceFeatureIcon";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Code } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Business Website Development Company | High-Converting Custom Sites",
  description: "Transform your corporate digital presence with custom business websites engineered for speed, search rankings, and lead generation. Sub-second load times on Next.js.",
  keywords: ["business website development company","custom business website design","corporate website design agency","responsive business web development","conversion focused website design","Next.js corporate site"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/business-website",
  },
  openGraph: {
    title: "Business Website Development Company in India & USA - Anavya Infotech",
    description:
      "Custom business website design & development for companies in Delhi NCR, Faridabad, Noida & USA. Fast, SEO-ready, mobile-first sites built on modern stacks.",
    url: "https://www.anavyainfotech.com/services/business-website",
    type: "website",
  },
};

const BUSINESS_WEBSITE_FAQS = [
  {
    "question": "Why choose Next.js for a business website instead of WordPress?",
    "answer": "Next.js offers superior page rendering speed, tighter security, and cleaner code structures. It eliminates plugin reliance and delivers sub-second page performance that directly improves SEO rankings and user conversions."
  },
  {
    "question": "Can our marketing team update site content without developer assistance?",
    "answer": "Yes. We integrate headless CMS platforms like Sanity or Strapi, enabling non-technical team members to create pages, publish blog posts, and update copy effortlessly."
  },
  {
    "question": "How long does a custom corporate website project take?",
    "answer": "A custom corporate website development project typically takes 4 to 8 weeks from discovery to final deployment, depending on page volume and custom integration needs."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Business Website Development Services",
  description: "Transform your corporate digital presence with custom business websites engineered for speed, search rankings, and lead generation. Sub-second load times on Next.js.",
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
    { num: "01", title: "Discovery & UX Strategy", desc: "We study your business, competitors, and target customer before writing a single line of code." },
    { num: "02", title: "Website Architecture & UI Design", desc: "Sitemap, wireframes, and high-fidelity UI mockups for your approval." },
    { num: "03", title: "Agile Web Development", desc: "Weekly frontend and backend builds you can review, not a black box for 6 weeks." },
    { num: "04", title: "SEO Optimization & Launch", desc: "Speed audit, security check, local SEO setup, and final go-live." },
  ];

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950 service-page" data-service="business-website">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Business Website", href: "/services/business-website" }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600 shadow-xs">
              <Code className="h-3.5 w-3.5 text-blue-700" /> Business Website Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Custom Business Website Development Company
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Your website is usually the first interaction a prospective customer has with your business. At Anavya Infotech, we design and build business websites for companies across India, Delhi NCR, and the USA that load fast, rank on Google, and are built to convert visitors into leads and paying customers, not just look good.
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
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Why Businesses in Faridabad &amp; Delhi NCR Choose Anavya Infotech
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light max-w-4xl leading-relaxed">
            Local businesses often lose customers to competitors simply because their website is slow, outdated, or invisible on Google. We fix all three: our sites are engineered for speed and Core Web Vitals, built with on-page SEO from the first line of code, and designed to make it easy for a customer scrolling on their phone to call or message you in one tap. We&apos;ve delivered business websites for real estate firms (<Link href="/case-studies/nakul-properties" className="text-blue-700 underline">Nakul Properties</Link>), fintech platforms, and local service businesses — each launched with a documented SEO and speed audit before go-live.
          </p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Websites That Close Deals: Custom Corporate Web Engineering for Growth-Driven Businesses</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">A corporate website serves as the primary digital anchor for high-intent business buyers, partners, and enterprise clients. Outdated platforms with slow performance, bloated codebases, and passive messaging fail to convert incoming traffic into pipeline opportunities.</p><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Anavya Infotech operates as a specialized business website development company. We engineer sub-second, custom-designed corporate websites powered by Next.js and headless CMS architectures to maximize organic search visibility and convert decision-makers into sales inquiries.</p></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">The Broke Template Syndrome: Why $500 WordPress Templates Repel High-Value B2B Buyers</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Relying on generic pre-built WordPress themes introduces hidden technical liabilities that limit commercial growth:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Excessive Code Bloat" /><span><strong className="text-stone-900">Excessive Code Bloat:</strong> Pre-built page builders execute massive unused CSS and JavaScript packages, degrading mobile Core Web Vitals performance.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Generic Visual Layouts" /><span><strong className="text-stone-900">Generic Visual Layouts:</strong> Standard template structures fail to communicate distinct value propositions, making your business indistinguishable from competitors.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Security Vulnerabilities" /><span><strong className="text-stone-900">Security Vulnerabilities:</strong> Reliance on multiple third-party plugins increases attack surfaces and exposes sites to malicious exploits and downtime.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Poor Conversion Architecture" /><span><strong className="text-stone-900">Poor Conversion Architecture:</strong> Rigid template blocks lack optimized call-to-action (CTA) paths, leading to high drop-off rates on core decision-making pages.</span></div></div></div></div></section>
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
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">The Anavya 4-Stage Web Engineering Methodology</h2></div><div className="space-y-4"><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">Our structured development lifecycle balances strategic positioning with clean code implementation:</p><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Discovery &amp; Wireframing" /><span><strong className="text-stone-900">Discovery &amp; Wireframing:</strong> Complete analysis of user journeys, target buyer personas, competitive gaps, and conversion funnels.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Bespoke Figma UI/UX Design" /><span><strong className="text-stone-900">Bespoke Figma UI/UX Design:</strong> Crafting custom design systems, responsive page layouts, and interactive prototypes tailored to your brand identity.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Next.js &amp; Headless Development" /><span><strong className="text-stone-900">Next.js &amp; Headless Development:</strong> Building server-side rendered (SSR) web pages paired with manageable headless content backends (Sanity, Strapi, or Contentful).</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Conversion Rate Optimization (CRO) Integration" /><span><strong className="text-stone-900">Conversion Rate Optimization (CRO) Integration:</strong> Deploying high-converting web forms, tracking infrastructure, fast page speed delivery, and accessibility compliance (WCAG).</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Engineering Comparison: Generic Template vs. Anavya Custom Corporate Site</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Performance Metric" /><span>Performance Metric</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Generic Agency WordPress Site" /><span>Generic Agency WordPress Site</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Anavya Engineered Next.js Corporate Site" /><span>Anavya Engineered Next.js Corporate Site</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Mobile Page Load Speed" /><span>Mobile Page Load Speed</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="5s – 6.0s (Fails Core Web Vitals)" /><span>5s – 6.0s (Fails Core Web Vitals)</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="&lt; 0.8s (Passes All Core Web Vitals)" /><span>&lt; 0.8s (Passes All Core Web Vitals)</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Security &amp; Maintenance" /><span>Security &amp; Maintenance</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="High plugin dependency &amp; patch risk" /><span>High plugin dependency &amp; patch risk</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Static edge generation; immune to plugin exploits" /><span>Static edge generation; immune to plugin exploits</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Customization Freedom" /><span>Customization Freedom</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Restricted by builder blocks" /><span>Restricted by builder blocks</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="100% full-stack bespoke React design" /><span>100% full-stack bespoke React design</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Search Engine Indexing" /><span>Search Engine Indexing</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Heavy, unoptimized client DOM" /><span>Heavy, unoptimized client DOM</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Instant SSR HTML pre-rendering" /><span>Instant SSR HTML pre-rendering</span></div></div></div></div></section>
<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Performance &amp; Conversion Metrics: Nakul Properties Case Study</h2></div><div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 "><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Client Challenge" /><span><strong className="text-stone-900">Client Challenge:</strong> Nakul Properties struggled with low online lead volume and high bounce rates on an outdated corporate site.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Engineering Solution" /><span><strong className="text-stone-900">Engineering Solution:</strong> Anavya Infotech redesigned the digital experience using a custom Next.js frontend with dynamic project filtering and fast inquiry forms.</span></div><div className="group flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-stone-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 service-feature-card"><ServiceFeatureIcon label="Measured Results" /><span><strong className="text-stone-900">Measured Results:</strong> Achieved a +45% increase in qualified inbound leads within 60 days, while mobile load speeds improved by 78%.</span></div></div></div></div></section>

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

