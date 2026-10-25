import Link from "next/link";
import { ArrowRight, Users, Star, Globe, Clock, ShieldCheck, Cpu, Code2, Zap, Rocket, CheckCircle2 } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import GsapCounter from "@/components/GsapCounter";
import TechBrandIcon from "@/components/TechBrandIcon";

export const metadata = {
  title: "About Anavya Infotech – Software Company in India",
  description:
    "Learn about Anavya Infotech, a software and digital services company in India. We build web apps, AI tools, CRM systems, e-commerce sites, and provide technical SEO for businesses around the world.",
  keywords:
    "about Anavya Infotech, custom software company India, web development agency, AI development company, SEO agency India, software engineering team",
  alternates: {
    canonical: "https://www.anavyainfotech.com/about",
  },
  openGraph: {
    title: "About Anavya Infotech – Software Company in India",
    description:
      "We build web apps, AI tools, and custom CRM systems, and help businesses in India and around the world improve their SEO.",
    url: "https://www.anavyainfotech.com/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Anavya Infotech",
  "url": "https://www.anavyainfotech.com/about",
  "description":
    "Anavya Infotech is a software company in India. We work with businesses around the world on web apps, AI tools, and technical SEO.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Anavya Infotech",
    "foundingDate": "2020",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "10-50" },
    "knowsAbout": [
      "Custom Software Development",
      "Web Application Engineering",
      "AI Chatbot & Automation",
      "Search Engine Optimization",
      "Headless E-Commerce Solutions",
      "Enterprise CRM & SaaS Systems",
    ],
  },
};

const ABOUT_FAQS = [
  {
    question: "Where is Anavya Infotech located and do you serve international clients?",
    answer:
      "Anavya Infotech is headquartered in India with primary delivery hubs across Delhi NCR and Noida. We serve clients globally across North America, Europe, Australia, and Asia with 100% remote agility.",
  },
  {
    question: "What makes Anavya Infotech different from traditional web agencies?",
    answer:
      "We build fast software with tools like Next.js, Node.js, and AI APIs. Our work includes technical SEO, no extra seat fees, and full code ownership.",
  },
  {
    question: "What size of companies do you typically collaborate with?",
    answer:
      "We work with startups building MVPs, growing businesses that want more online sales, and large companies that need custom CRM or updated internal tools.",
  },
  {
    question: "Who owns the intellectual property and code upon project completion?",
    answer:
      "You retain 100% full code ownership and intellectual property rights. Upon final delivery, all GitHub repositories, database credentials, and server configurations are transferred to your team.",
  },
  {
    question: "How do you handle communication and milestone tracking during development?",
    answer:
      "We share weekly progress updates, clear project dashboards, Slack or WhatsApp channels, and direct access to senior engineers while we build your product.",
  },
];

const stats = [
  { value: <GsapCounter end={100} suffix="+" />, label: "Projects Delivered", icon: <Star className="h-5 w-5 text-blue-700" /> },
  { value: <GsapCounter end={50} suffix="+" />, label: "Global Clients", icon: <Globe className="h-5 w-5 text-blue-700" /> },
  { value: <GsapCounter end={5} suffix="+" />, label: "Years Experience", icon: <Clock className="h-5 w-5 text-blue-700" /> },
  { value: <GsapCounter end={15} suffix="+" />, label: "Senior Engineers", icon: <Users className="h-5 w-5 text-blue-700" /> },
];

const coreValues = [
  {
    icon: <Code2 className="h-6 w-6 text-blue-700" />,
    title: "Clean Code & Quality",
    description: "Well-organized, documented code that is easy to maintain and built to support future growth.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-700" />,
    title: "Full Code Ownership",
    description: "You own the code, repositories, and deployment rights. It stays your product.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-blue-700" />,
    title: "Modern Tech Stack",
    description: "Next.js, React, Node.js, TypeScript, Python, AI APIs, and cloud-native infrastructure — tools built for scale.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-700" />,
    title: "Performance & SEO First",
    description: "Fast load times and strong Core Web Vitals, planned from the start.",
  },
];

const technologies = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React.js", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "Docker", slug: "docker" },
  { name: "AWS Cloud", slug: "amazonaws" },
  { name: "OpenAI", slug: "openai" },
  { name: "Claude", slug: "anthropic" },
  { name: "GraphQL", slug: "graphql" },
  { name: "REST APIs" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero Section */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            About Anavya Infotech
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            Building Digital Products That Grow With Your Business.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">
            Anavya Infotech builds websites, AI tools, and marketing systems for businesses in India and around the world. We make products designed to work well for real customers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-left space-y-3 p-6 bg-stone-50 rounded-md border border-stone-100">
                <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{stat.value}</div>
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision / Our Why Section */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              Our Why
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              Enterprise-Ready Software, Without the Extra Costs.
            </h2>
            <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
              Every growing business deserves custom software, automated tasks, and a fast website that people can find, without high monthly fees or layers of account managers.
            </p>
            <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
              From Delhi NCR, our senior engineers work directly with clients across North America, Europe, Asia, and Australia. We support the full project, from planning and UI/UX design to cloud launch and search visibility.
            </p>
          </div>

          {/* Feature Highlight Box */}
          <div className="p-8 rounded-md bg-white border border-stone-100 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-700" />
              What You Get When You Work With Us
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Clear updates.", desc: "See our progress throughout the project, with no unclear status reports." },
                { title: "Talk directly to senior engineers.", desc: "You can speak with the people building your product." },
                { title: "No unnecessary extras.", desc: "Fast, clean code without tools your product does not need." },
                { title: "SEO from the start.", desc: "Schema markup, Core Web Vitals, and a site built to work well in search." },
                { title: "Support after launch.", desc: "We can keep your software working well with ongoing support and maintenance." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                  <span><strong>{item.title}</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-10 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="p-6 rounded-md bg-stone-50 border border-stone-100 space-y-4">
                <div className="h-10 w-10 rounded-md bg-white border border-stone-100 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-900">{value.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Leadership Team */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
              Meet the Leadership Team
            </h2>
            <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
              Work directly with experienced people who know how to help your business grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Akash Kumar",
                role: "Founder & Chief Architect",
                bio: "Software engineer who builds Next.js apps, SaaS products, and AI tools for businesses.",
              },
              {
                name: "Sarah Jenkins",
                role: "Head of SEO & Growth",
                bio: "SEO specialist who helps businesses grow search traffic through data and programmatic SEO.",
              },
              {
                name: "David Chen",
                role: "Lead UI/UX Designer",
                bio: "Designer who makes websites easier to use and helps more visitors become customers.",
              }
            ].map((member, i) => (
              <div key={i} className="p-6 rounded-md bg-stone-50 border border-stone-100 space-y-5 flex flex-col group">
                <div className="h-14 w-14 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-800 font-bold text-lg tracking-widest shrink-0 shadow-sm group-hover:border-blue-500 group-hover:text-blue-700 transition-colors">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">{member.role}</p>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light flex-grow">
                  {member.bio}
                </p>
                <div className="pt-4 border-t border-stone-200">
                  <a href="#" className="inline-flex items-center gap-1.5 text-[10px] font-bold text-stone-400 hover:text-blue-700 transition-colors uppercase tracking-widest">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg> LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">Technologies We Master</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light">Tools and frameworks we use to build reliable software.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {technologies.map(({ name, slug }) => (
              <span
                key={name}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 text-center text-sm font-semibold text-stone-800 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                {slug && <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-100 bg-stone-50"><TechBrandIcon slug={slug} size={28} /></span>}
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Questions About Us"
        subtitle="Learn more about our agency background, engagement models, and engineering standards."
        faqs={ABOUT_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Have a project in mind?</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Whether you need a custom web platform, AI tool, or business automation, our engineers are ready to help.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get Free Technical Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
