import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Palette, Compass, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Corporate Branding Services & Digital Brand Identity Agency",
  description:
    "Elevate your corporate presence with bespoke digital branding services, visual design systems, logo assets, and UI/UX guidelines from Anavya Infotech.",
  keywords: [
    "branding agency",
    "corporate branding services",
    "digital brand identity",
    "logo design services",
    "UI UX design agency",
    "brand strategy company",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/branding",
  },
  openGraph: {
    title: "Corporate Branding Services & Digital Brand Identity Agency",
    description:
      "Elevate your corporate presence with bespoke digital branding services, visual design systems, logo assets, and UI/UX guidelines from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/branding",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Branding & Visual Identity Design Services",
  "description": "Corporate branding, visual identity systems, brand positioning, UI/UX design systems, and digital asset engineering by Anavya Infotech.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Anavya Infotech",
    "url": "https://www.anavyainfotech.com"
  }
};

const BRANDING_FAQS = [
  {
    question: "What is included in your corporate branding packages?",
    answer: "Our packages include logo design, brand positioning guidelines, typography systems, color palettes, social media kits, and UI design tokens."
  },
  {
    question: "How long does a complete brand identity redesign take?",
    answer: "Corporate branding projects typically take 2 to 4 weeks from discovery moodboards to final asset handoff."
  },
  {
    question: "Do you deliver vector source files and brand guidelines books?",
    answer: "Yes, you receive all original vector source files (SVG, EPS, AI), high-res PNGs, and a comprehensive PDF brand guideline manual."
  },
  {
    question: "Can you align our brand identity with our website UI/UX?",
    answer: "Yes! We specialize in cohesive digital brand systems that translate seamlessly into modern, responsive web application interfaces."
  }
];

const subServices = [
  {
    title: "Brand Identity",
    description: "Strategic market positioning, core narrative architecture, and value proposition blueprints.",
    href: "/services/branding",
    icon: Compass,
    features: ["Brand Voice & Narrative", "Market Gap Analysis", "Audience Personas", "Strategic Taglines"]
  },
  {
    title: "Logo Design",
    description: "Iconic vector logo mark design, typography hierarchies, and curated color palettes.",
    href: "/services/branding",
    icon: Palette,
    features: ["Vector Logo Marks (SVG/AI)", "HSL Color Specifications", "WebFont Licensing Guides", "Dark & Light Mode Variants"]
  },
  {
    title: "Corporate Guidelines",
    description: "Comprehensive brand book manuals detailing asset usage rules, spacing grid specs, and stationery templates.",
    href: "/services/branding",
    icon: ShieldCheck,
    features: ["Brand Manual PDF", "Social Media Asset Kits", "Email & Document Templates", "Stationery Print Layouts"]
  },
  {
    title: "Visual Strategy",
    description: "Standardized Figma design systems, accessible color specifications, and product UI kit component libraries.",
    href: "/services/branding",
    icon: Layers,
    features: ["Figma Component Kits", "WCAG 2.1 Color Specs", "Micro-interaction Tokens", "Responsive Breakpoints"]
  }
];

export default function CorporateBrandingPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:pt-20 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Header Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Branding", href: "/services/branding" }]} />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-700 shadow-xs">
              <Palette className="h-3.5 w-3.5 text-blue-700" /> Branding Hub
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
              Corporate Branding &amp; <br />
              <span className="text-blue-700">Visual Identity Design</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              Craft a commanding corporate presence. We design high-impact visual identities, brand strategy blueprints, digital UI systems, and design guidelines that position your business for market leadership.
            </p>
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
              Core Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Branding &amp; Visual Identity Capabilities
            </h2>
            <p className="text-sm text-stone-600 font-light">
              Build an unforgettable brand identity across print, web, and product touchpoints.
            </p>
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

      {/* FAQ Section */}
      <FaqSection
        title="Corporate Branding Services FAQs"
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
