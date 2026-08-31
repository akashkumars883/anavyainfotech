import { createServiceSchema } from "@/lib/serviceSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Globe, Smartphone, Layout, ShoppingCart, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Full-Stack Web & Custom Software Development Company",
  description:
    "Full-stack custom web software engineering, modern JS frameworks, cloud microservices backends, and robust API development from Anavya Infotech.",
  keywords: [
    "full stack development company",
    "custom software development",
    "web application engineering",
    "scalable cloud backend development",
    "software engineering services",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/services/development",
  },
  openGraph: {
    title: "Full-Stack Web & Custom Software Development Company",
    description:
      "Full-stack custom web software engineering, modern JS frameworks, cloud microservices backends, and robust API development from Anavya Infotech.",
    url: "https://www.anavyainfotech.com/services/development",
    type: "website",
  },
};


const DEVELOPMENT_FAQS = [
  {
    question: "What core development services do you provide?",
    answer: "We specialize in custom web applications (React, Next.js, Node.js), mobile app development (iOS & Android via React Native/Flutter), business websites, high-converting landing pages, and scalable e-commerce storefronts."
  },
  {
    question: "How long does a typical software development project take?",
    answer: "Landing pages take 1-2 weeks, business websites take 2-4 weeks, mobile apps take 4-8 weeks, and enterprise web applications take 6-12 weeks depending on features."
  },
  {
    question: "Do you offer full code ownership and documentation?",
    answer: "Yes, 100% code ownership with zero recurring seat fees, clean developer documentation, and zero-downtime production deployment pipelines."
  },
  {
    question: "How do you ensure application performance and SEO?",
    answer: "We build with Next.js App Router, serverless edge compute layers, optimized image pipelines, and clean CSS styling to guarantee sub-second load times and perfect Core Web Vitals scores."
  }
];

const subServices = [
  {
    title: "Business Website",
    description: "High-converting corporate websites tailored to represent your brand and generate qualified inbound leads.",
    href: "/services/business-website",
    icon: Globe,
    features: ["Custom Next.js & React", "SEO & Speed Optimized", "Responsive Mobile Layouts", "Lead Generation Forms"]
  },
  {
    title: "App Development",
    description: "High-performance iOS, Android, and cross-platform mobile apps engineered for speed, engagement, and scale.",
    href: "/services/app-development",
    icon: Smartphone,
    features: ["React Native & Flutter", "Real-time Push Notifications", "App Store & Play Store Publishing", "Secure Cloud Backends"]
  },
  {
    title: "Web Applications",
    description: "Scalable, secure cloud software, client portals, and multi-role web apps built on modern JavaScript frameworks.",
    href: "/services/web-applications",
    icon: Code2,
    features: ["PostgreSQL & Supabase DB", "Role-based Authentication", "Third-party API Integration", "Real-time Telemetry"]
  },
  {
    title: "Landing Pages",
    description: "Laser-focused, high-converting landing pages engineered to boost ad campaign ROI and capture leads.",
    href: "/services/landing-pages",
    icon: Layout,
    features: ["Sub-second Page Speeds", "A/B Testing Frameworks", "CRM & Analytics Sync", "Ultra Crisp UX Design"]
  },
  {
    title: "E-Commerce",
    description: "Bespoke digital storefronts, custom checkout flows, inventory sync, and secure payment gateway integrations.",
    href: "/services/ecommerce",
    icon: ShoppingCart,
    features: ["Stripe & Razorpay Integration", "Real-time Inventory Sync", "Headless Commerce Architecture", "Conversion Optimized"]
  }
];


const serviceSchemas = createServiceSchema({
  name: "Custom Development & Software Engineering Services",
  description: "Full-stack web applications, mobile app development, business websites, landing pages, and e-commerce platforms engineered by Anavya Infotech.",
  slug: "development",
  faqs: DEVELOPMENT_FAQS,
});

export default function DevelopmentCategoryPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      {/* Hero Header Area */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Development", href: "/services/development" }]} />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-700 shadow-xs">
              <Code2 className="h-3.5 w-3.5 text-blue-700" /> Development Hub
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">
              Custom Software &amp; <br />
              <span className="text-blue-700">App Development Services</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
              We design and code scalable web applications, mobile apps, business websites, landing pages, and e-commerce platforms engineered for speed, conversion, and global scale.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center p-4">
            <SafeImage
              src="/development-illustration.jpg"
              alt="Development Services Illustration"
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
              Development Capabilities &amp; Services
            </h2>
            <p className="text-sm text-stone-600 font-light">
              Explore our specialized software engineering offerings built for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        Key Features
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

      {/* FAQ Section */}
      <FaqSection
        title="Development Engineering FAQs"
        subtitle="Common questions about custom web app development, mobile apps, and business websites."
        faqs={DEVELOPMENT_FAQS}
      />

      {/* CTA Trigger */}
      <section className="py-12 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to build your next custom software system?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with our lead architects to discuss tech stacks, database schemas, and fixed-price timelines.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Start Development Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
