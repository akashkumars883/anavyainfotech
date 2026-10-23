import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ServiceProcess from "@/components/ServiceProcess";
import RelatedCoreServices from "@/components/RelatedCoreServices";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Palette, Compass, Layers, ShieldCheck, CheckCircle2, ChartNoAxesCombined } from "lucide-react";
import { createServiceSchema } from "@/lib/serviceSchema";

export const metadata = {
  title: "Corporate Branding & Visual Identity Design | Anavya Infotech",
  description:
    "Build a cohesive, authoritative brand identity that commands premium market pricing. Logo design, corporate style guidelines, Figma design systems & digital assets.",
  keywords: ["corporate branding agency","visual identity design services","b2b brand identity","logo design and brand guidelines","ui ux design systems figma","enterprise branding services"],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/branding",
  },
  openGraph: {
    title: "Corporate Branding & Visual Identity Design | Anavya Infotech",
    description:
      "Build a cohesive, authoritative brand identity that commands premium market pricing. Logo design, corporate style guidelines, Figma design systems & digital assets.",
    url: "https://www.anavyainfotech.com/services/branding",
    type: "website",
  },
};

const BRANDING_FAQS = [
  {
    question: "What is included in a corporate visual identity package?",
    answer: "Our packages include brand strategy positioning, primary and secondary logo suites, color palette tokens, typography rules, Figma UI component libraries, corporate collateral templates, and brand style manuals."
  },
  {
    question: "How does a Figma design system accelerate software engineering?",
    answer: "A tokenized Figma design system matches frontend code variables directly, eliminating design handoff confusion and ensuring consistent UI components across web and mobile platforms."
  },
  {
    question: "How long does a full corporate branding engagement take?",
    answer: "A complete corporate branding and visual system engagement typically takes 3 to 6 weeks from initial research to final asset delivery."
  }
];

const serviceSchemas = createServiceSchema({
  name: "Corporate Branding & Visual Identity Design Services",
  description: "Corporate branding, visual identity systems, brand positioning, UI/UX design systems, and digital asset engineering by Anavya Infotech.",
  slug: "branding",
  serviceType: "Corporate Branding & Design Services",
  faqs: BRANDING_FAQS,
  breadcrumbLabel: "Branding",
});

const subServices = [
  {
    title: "Brand Identity",
    description: "A cohesive visual language across every customer touchpoint — not just a logo file.",
    href: "/services/branding",
    icon: Compass,
    features: ["Brand Voice & Narrative", "Market Gap Analysis", "Audience Personas", "Strategic Taglines"]
  },
  {
    title: "Logo Design",
    description: "Distinct, memorable marks designed to work at any size, on any surface.",
    href: "/services/branding",
    icon: Palette,
    features: ["Vector Logo Marks (SVG/AI)", "HSL Color Specifications", "WebFont Licensing Guides", "Dark & Light Mode Variants"]
  },
  {
    title: "Corporate Guidelines",
    description: "A documented brand system your whole team can execute consistently, without guessing.",
    href: "/services/branding",
    icon: ShieldCheck,
    features: ["Brand Manual PDF", "Social Media Asset Kits", "Email & Document Templates", "Stationery Print Layouts"]
  },
  {
    title: "Visual Strategy",
    description: "Design decisions grounded in how your audience actually perceives your category — not just what looks nice.",
    href: "/services/branding",
    icon: Layers,
    features: ["Figma Component Kits", "WCAG 2.1 Color Specs", "Micro-interaction Tokens", "Responsive Breakpoints"]
  }
];

export default function CorporateBrandingPage() {
  return (
    <main className="min-h-screen bg-white text-left service-page" data-service="branding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Branding", href: "/services/branding" }]} />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-700 shadow-xs">
              <Palette className="h-3.5 w-3.5 text-blue-700" /> Branding Hub
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              A Logo Isn&apos;t a Brand. We Build the Whole System.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Your website, your pitch deck, and your business card should all look like they belong to the same company. We design the full visual identity — so credibility isn&apos;t something you have to explain, it&apos;s something people see immediately.
                 </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
              >
                Start Your Brand <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/branding-illustration.jpg"
              alt="Corporate Branding Services Illustration"
              className="max-h-[340px] w-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>
{/* Sub-Services Listing Grid */}
      <section className="py-16 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              What We Build
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Identity Systems Built to Scale With You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-stone-50/60 border border-stone-200/90 rounded-md p-8 flex flex-col justify-between hover:bg-white hover:border-blue-700/50 hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-md bg-white border border-stone-200 shadow-xs flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Link
                        href={service.href}
                        className="h-9 w-9 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-blue-700 hover:border-blue-300 transition-all shadow-xs"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-stone-900 group-hover:text-blue-700 transition-colors">
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-200/60 space-y-2.5">
                      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                        Key Deliverables
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-700 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-200/60">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverable Kit Showcase */}
      <ServiceProcess service="branding" />
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">What You Receive</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light">Complete brand ownership documentation and production-ready design asset kits.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Complete Brand Style Guide PDF",
              "Vector Logos & Social Avatars",
              "Figma UI Component Kit & Tokens",
              "Custom Email & Document Templates",
              "Typography & WebFont Bundles",
              "Color System Swatches (HEX/RGB/HSL)",
              "Iconography & Pattern Assets",
              "100% Full IP Transfer Rights",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-md bg-white border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-blue-700 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service copy sections */}
            <section className="px-6 py-14 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto ">
<article className="min-w-0 space-y-10">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 md:col-span-2">A Logo Is Not a Brand: We Engineer Authoritative Visual Identity Systems</h2>
        <p className="text-stone-700 leading-relaxed md:col-span-2">A disconnected visual identity creates immediate doubt during high-stakes sales conversations. Modern B2B buyers form impressions within seconds based on design quality, consistency, and professional positioning across digital touchpoints.</p>
      </section>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:col-span-2">
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">+40%</p><p className="mt-1 text-sm text-stone-600">Frontend delivery speed</p></div>
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">One system</p><p className="mt-1 text-sm text-stone-600">Shared design tokens</p></div>
            <div className="group rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><p className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Enterprise</p><p className="mt-1 text-sm text-stone-600">Sales-ready identity</p></div>
          </div>
      <section className="space-y-4">
        <p className="text-stone-700 leading-relaxed">Anavya Infotech provides comprehensive visual identity design services. We build complete, tokenized design systems, corporate identity guidelines, and digital brand assets that establish immediate authority and support premium pricing power.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">The Credibility Gap: How Inconsistent Design Subconsciously Erodes Enterprise Trust</h2>
        <p className="text-stone-700 leading-relaxed">Inconsistent visual assets weaken commercial potential across the sales funnel:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Fragmented Brand Impressions:</strong> Discrepancies between pitch decks, websites, and sales collateral project a lack of operational polish.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Inability to Command Premium Fees:</strong> Generic visual presentation signals low differentiation, inviting price resistance from potential clients.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Development Inefficiencies:</strong> Building digital products without a centralized design system leads to repeated UI redos and slower feature releases.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Comprehensive Brand Deliverables We Build</h2>
        <p className="text-stone-700 leading-relaxed">We deliver scalable brand architecture engineered for enterprise application:</p>
      </section>
      <section className="space-y-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Brand Strategy &amp; Positioning:</strong> Defining market differentiation, tone of voice, messaging hierarchy, and competitive positioning.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Logo Suite &amp; Typography System:</strong> Vector logo variations (primary, stacked, monochrome) paired with web-optimized typography standards.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Tokenized Figma UI/UX Design Systems:</strong> Reusable component libraries, color variables, spacing rules, and interactive UI patterns for engineering handoff.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Corporate Collateral &amp; Sales Assets:</strong> Executive presentation decks, digital whitepapers, business cards, social media kits, and brand documentation.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Brand Deliverables Comparison: Freelance Logo vs. Enterprise Brand System</h2>

        <div className="overflow-x-auto rounded-md border border-stone-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <tbody>
              <tr className={"bg-stone-100 font-semibold text-stone-900"}>
                <th className="px-4 py-3 align-top">Scope Component</th>
                <th className="px-4 py-3 align-top">Freelance Logo Graphic</th>
                <th className="px-4 py-3 align-top">Anavya Enterprise Brand System</th>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Deliverable Focus</td>
                <td className="px-4 py-3 align-top">Standalone image file</td>
                <td className="px-4 py-3 align-top">Complete visual strategy &amp; UI token system</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">UI/UX Integration</td>
                <td className="px-4 py-3 align-top">None; requires separate design work</td>
                <td className="px-4 py-3 align-top">Tokenized Figma components ready for code</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Brand Governance</td>
                <td className="px-4 py-3 align-top">No guidelines supplied</td>
                <td className="px-4 py-3 align-top">Comprehensive Brand Style Manual</td>
              </tr>
              <tr className={"border-t border-stone-200"}>
                <td className="px-4 py-3 align-top">Market Positioning</td>
                <td className="px-4 py-3 align-top">Decorative design</td>
                <td className="px-4 py-3 align-top">Positioned for enterprise authority</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Case Evidence: Elevating Perceived Value in B2B Tech</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><Palette className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Strategic Shift:</strong> We repositioned a growing fintech startup by replacing fragmented graphics with an enterprise-grade Figma design system and unified brand strategy.</li>
          <li className="group rounded-xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-700 group-hover:text-white"><ChartNoAxesCombined className="h-5 w-5" aria-hidden="true" /></span><strong className="text-stone-900">Impact Delivered:</strong> The updated identity increased client win rates in enterprise sales cycles and accelerated frontend development speed by 40% using tokenized UI components.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Transform Your Brand Authority</h2>
        <p className="text-stone-700 leading-relaxed">Establish a memorable visual identity engineered to build market trust and support enterprise growth.</p>
      </section>
      <section className="space-y-4">
        <div className="flex flex-wrap gap-3 pt-2"><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md">Book Brand Identity Consultation<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">View Design Systems<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </section>
        </article>
        </div>
      </section>
            

      <RelatedCoreServices page="branding" />

      {/* FAQ Section */}


      <FaqSection title="Corporate Branding Services FAQs"
        subtitle="Questions about brand strategy, visual identities, and UI design kits."
        faqs={BRANDING_FAQS}
      />

      {/* CTA Trigger */}
      <section className="py-12 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to elevate your corporate brand identity?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Schedule a consultation with our lead brand designers to discuss your market positioning and visual design goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Request Branding Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
