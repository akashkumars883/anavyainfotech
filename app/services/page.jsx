import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Cpu,
  TrendingUp,
  Palette,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Search,
  Globe,
  Bot,
  Laptop,
  Flame,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Full-Spectrum Software, AI & Growth Services",
  description:
    "Explore our complete range of services: Custom Web & Mobile App Development, Enterprise AI Automation, Next.js Engineering, Technical SEO, and Brand Strategy.",
  alternates: {
    canonical: "https://www.anavyainfotech.com/services",
  },
  openGraph: {
    title: "Full-Spectrum Software, AI & Growth Services | Anavya Infotech",
    description:
      "Enterprise-grade software development, AI chatbots, high-impact SEO, and modern corporate branding tailored for high-growth businesses.",
    url: "https://www.anavyainfotech.com/services",
    type: "website",
  },
};

const SERVICE_GROUPS = [
  {
    category: "Development",
    tagline: "High-Performance Digital Products & Scalable Architecture",
    icon: Code2,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    hubLink: "/services/development",
    heroImage: "/development-illustration.jpg",
    items: [
      {
        name: "Business Website",
        desc: "Ultra-fast corporate websites engineered on Next.js to turn high-intent visitors into booked meetings.",
        href: "/services/business-website",
        metric: "Sub-1s Load Time",
        icon: Globe,
      },
      {
        name: "Mobile App Development",
        desc: "Native-grade iOS & Android applications built with React Native and Flutter for maximum engagement.",
        href: "/services/app-development",
        metric: "iOS & Android",
        icon: Laptop,
      },
      {
        name: "Web Applications",
        desc: "Complex SaaS portals, role-based dashboards, and custom client portals with rock-solid security.",
        href: "/services/web-applications",
        metric: "Enterprise Grade",
        icon: Layers,
      },
      {
        name: "Landing Pages",
        desc: "Conversion-optimized PPC and product launch funnels designed to minimize CAC and boost ROI.",
        href: "/services/landing-pages",
        metric: "2x Conversions",
        icon: Flame,
      },
      {
        name: "E-Commerce Stores",
        desc: "Custom headless storefronts, Shopify Plus, and scalable checkouts with automated payment gateways.",
        href: "/services/ecommerce",
        metric: "Zero Downtime",
        icon: Zap,
      },
    ],
  },
  {
    category: "Technology & AI",
    tagline: "Automate Repetitive Workflows & Embed Intelligent Agents",
    icon: Cpu,
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    hubLink: "/services/technology",
    heroImage: "/technology-illustration.jpg",
    items: [
      {
        name: "Autonomous AI Chatbots",
        desc: "RAG-powered conversational bots trained on your company data to resolve customer queries 24/7.",
        href: "/services/ai-chatbot",
        metric: "24/7 Support",
        icon: Bot,
      },
      {
        name: "Business Automation",
        desc: "End-to-end integration across CRM, ERP, and payment pipelines eliminating hundreds of manual hours.",
        href: "/services/business-automation",
        metric: "Save 30+ hrs/wk",
        icon: Zap,
      },
      {
        name: "Custom CRM & Software",
        desc: "Tailored internal operations tools built for your specific workflow without restrictive SaaS seat licenses.",
        href: "/services/crm-custom-software",
        metric: "100% Code Ownership",
        icon: Shield,
      },
      {
        name: "API & Cloud Integration",
        desc: "Robust microservices, webhook pipelines, and third-party API orchestrations built for scale.",
        href: "/services/api-integration",
        metric: "99.99% Uptime",
        icon: Layers,
      },
    ],
  },
  {
    category: "Growth & SEO",
    tagline: "Dominate Search Results & Generate Predictable Organic Revenue",
    icon: TrendingUp,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    hubLink: "/services/growth",
    heroImage: "/growth-illustration.jpg",
    items: [
      {
        name: "Enterprise SEO",
        desc: "Full-funnel search marketing strategy focused on ranking commercial keywords with measurable pipeline growth.",
        href: "/services/seo",
        metric: "Top 3 Rankings",
        icon: Search,
      },
      {
        name: "Local & Multi-Location SEO",
        desc: "Dominate Google Maps and local 3-pack search in Delhi NCR, Noida, Gurgaon, or US target cities.",
        href: "/services/local-seo",
        metric: "+250% Inquiries",
        icon: Globe,
      },
      {
        name: "E-Commerce SEO",
        desc: "Category page optimization, product schema, and faceted navigation indexing for online stores.",
        href: "/services/ecommerce-seo",
        metric: "Revenue Focused",
        icon: Flame,
      },
      {
        name: "Technical SEO Audit",
        desc: "Deep Core Web Vitals remediation, crawl budget optimization, and JavaScript rendering audits.",
        href: "/services/technical-seo",
        metric: "100 PageSpeed",
        icon: Zap,
      },
      {
        name: "Content Strategy & Copy",
        desc: "Search-intent matched topical authority maps and conversion copywriting that educates and closes.",
        href: "/services/content-strategist",
        metric: "High Intent",
        icon: Sparkles,
      },
    ],
  },
  {
    category: "Branding & Visuals",
    tagline: "Build a Memorable, Authoritative Brand That Demands Premium Pricing",
    icon: Palette,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    hubLink: "/services/branding",
    heroImage: "/branding-illustration.jpg",
    items: [
      {
        name: "Brand Identity Design",
        desc: "Distinctive visual language, color systems, and modern typography guidelines built for scale.",
        href: "/services/branding",
        metric: "Complete Kit",
        icon: Palette,
      },
      {
        name: "UI/UX & Product Design",
        desc: "Intuitive Figma wireframes, interactive prototypes, and design systems crafted for high conversion.",
        href: "/services/branding",
        metric: "Figma Ready",
        icon: Layers,
      },
      {
        name: "Corporate Guidelines",
        desc: "Strict brand compliance books ensuring consistency across presentations, web, and social touchpoints.",
        href: "/services/branding",
        metric: "Brand Standard",
        icon: Shield,
      },
    ],
  },
];

const SERVICES_PAGE_FAQS = [
  {
    question: "Can I combine multiple services into an integrated monthly retainer?",
    answer:
      "Yes. Most of our clients combine custom Next.js engineering with ongoing technical SEO and AI automation. This keeps your engineering and marketing perfectly synced under a single dedicated team.",
  },
  {
    question: "Do you offer complete source code ownership?",
    answer:
      "Absolutely. You retain 100% intellectual property rights, database access, and full repository ownership from day one. There are zero recurring per-user software licensing fees.",
  },
  {
    question: "How do we get started and what is the typical onboarding timeline?",
    answer:
      "We begin with a discovery strategy session. Within 48 hours, we provide an architectural blueprint, scope breakdown, and milestone schedule. Active sprint development begins immediately upon kickoff.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900 selection:bg-blue-600/20 selection:text-blue-950">
      {/* Hero Section with Ambient Visual Accents */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-white border-b border-stone-200/70 pt-8 pb-16 px-6">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full border border-blue-600/10 bg-blue-500/5 blur-sm pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-semibold uppercase tracking-wider text-blue-700 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-700 animate-pulse" />
              Comprehensive Technology & Growth Services
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.12]">
              Engineered for Speed. <br />
              <span className="text-blue-700 font-semibold">Designed for Real Growth.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
              We eliminate the friction between engineering, design, and search marketing. Explore our 4 core disciplines below or jump directly to the specific solution your team needs.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#development"
                className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-stone-100 hover:bg-blue-50 hover:text-blue-700 text-stone-700 border border-stone-200 transition-colors"
              >
                01. Development
              </a>
              <a
                href="#technology"
                className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-stone-100 hover:bg-blue-50 hover:text-blue-700 text-stone-700 border border-stone-200 transition-colors"
              >
                02. AI & Technology
              </a>
              <a
                href="#growth"
                className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-stone-100 hover:bg-blue-50 hover:text-blue-700 text-stone-700 border border-stone-200 transition-colors"
              >
                03. Growth & SEO
              </a>
              <a
                href="#branding"
                className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-stone-100 hover:bg-blue-50 hover:text-blue-700 text-stone-700 border border-stone-200 transition-colors"
              >
                04. Corporate Branding
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Deep-Dive */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-24">
        {SERVICE_GROUPS.map((group, gIdx) => {
          const GroupIcon = group.icon;
          const sectionId = group.category.toLowerCase().split(" ")[0].replace("&", "");

          return (
            <div
              key={gIdx}
              id={sectionId}
              className="scroll-mt-24 rounded-xl border border-stone-200/90 bg-white p-6 sm:p-10 shadow-sm transition-all hover:shadow-md"
            >
              {/* Category Header with Hero Image Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-stone-100">
                <div className="lg:col-span-8 space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border ${group.badgeColor}`}>
                      <GroupIcon className="h-4 w-4" />
                      {group.category}
                    </span>
                    <span className="text-xs text-stone-600 font-semibold uppercase tracking-wider">
                      0{gIdx + 1} / 04
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                    {group.tagline}
                  </h2>

                  <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
                    Designed to replace clunky legacy workflows with lightweight, cloud-native applications that convert visitors and run autonomously.
                  </p>

                  <div className="pt-2">
                    <Link
                      href={group.hubLink}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-800 group"
                    >
                      <span>Explore all {group.category} solutions</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center items-center">
                  <div className="relative w-full max-w-[280px] h-[180px] rounded-lg overflow-hidden border border-stone-200/80 bg-stone-50 p-2 shadow-xs">
                    <Image
                      src={group.heroImage}
                      alt={group.category}
                      fill
                      className="object-contain p-2 mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>

              {/* Sub-services Interactive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
                {group.items.map((item, itemIdx) => {
                  const ItemIcon = item.icon;

                  return (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="group relative flex flex-col justify-between rounded-lg border border-stone-200 bg-stone-50/50 p-6 transition-all duration-300 hover:bg-white hover:border-blue-600 hover:shadow-md text-left"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="h-10 w-10 rounded-md bg-white border border-stone-200 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-colors shadow-2xs">
                            <ItemIcon className="h-5 w-5" />
                          </div>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                            {item.metric}
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="text-lg font-semibold text-stone-900 group-hover:text-blue-700 transition-colors flex items-center justify-between">
                            <span>{item.name}</span>
                            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-700" />
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-stone-200/60 flex items-center text-xs font-semibold text-stone-600 group-hover:text-blue-700 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Trust & Methodology Value Cards */}
      <section className="bg-stone-50 py-16 px-6 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto space-y-12 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-semibold uppercase tracking-wider text-stone-600">
              Why Partner With Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
              No Rotating Support Tickets. <br />
              <span className="text-blue-700 font-semibold">Direct Access to Senior Engineers.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-lg border border-stone-200 shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">100% Code & Asset Ownership</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Zero lock-ins or proprietary hosting hostage situations. You receive full GitHub repository access, database privileges, and deployment configurations from day 1.
              </p>
            </div>

            <div className="bg-white p-7 rounded-lg border border-stone-200 shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">Guaranteed Core Web Vitals</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Every website and application is engineered with sub-second page delivery, SSR/Turbopack, and clean semantic structure to score 90+ on Google PageSpeed Insights.
              </p>
            </div>

            <div className="bg-white p-7 rounded-lg border border-stone-200 shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">Predictable Milestone Pricing</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Transparent weekly sprints and clear deliverables. No hidden billing surprises, ambiguous hour markups, or scope creeping delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FaqSection
        title="Services & Engagement FAQs"
        subtitle="Clear answers about our development standards, engagement models, and support structure."
        faqs={SERVICES_PAGE_FAQS}
      />

      {/* Bottom Conversion Form */}
      <ContactForm />
    </main>
  );
}
