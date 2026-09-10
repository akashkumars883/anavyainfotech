import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { LOCATIONS_DATA } from "@/lib/locationsData";
import { notFound } from "next/navigation";

// Generate static params for build time optimization
export async function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({
    slug: location.slug,
  }));
}

// Dynamically generate SEO metadata for each location
export async function generateMetadata({ params }) {
  const { slug } = params;
  const location = LOCATIONS_DATA.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | Anavya Infotech",
    };
  }

  const url = `https://www.anavyainfotech.com/locations/${slug}`;

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: url,
      type: "website",
    },
  };
}

export default function LocationPage({ params }) {
  const { slug } = params;
  const location = LOCATIONS_DATA.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  // Schema for LocalBusiness or ProfessionalService targeting this region
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Anavya Infotech - ${location.name}`,
    "url": `https://www.anavyainfotech.com/locations/${location.slug}`,
    "image": "https://www.anavyainfotech.com/og-image.jpg",
    "description": location.metaDescription,
    "telephone": "+91-6201231875",
    "areaServed": location.name,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.anavyainfotech.com/locations/${location.slug}`
    }
  };

  return (
    <main className="min-h-screen bg-white text-left selection:bg-blue-600/20 selection:text-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Header Area */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Locations", href: "/#locations" }, { label: location.name, href: `/locations/${location.slug}` }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            <MapPin className="h-3.5 w-3.5 text-blue-700" /> Serving {location.name}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">
            {location.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light max-w-4xl leading-relaxed">
            {location.heroDescription}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md"
            >
              Discuss Your Project in {location.name} → <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Core Expertise for {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {location.inclusions.map((item, index) => (
              <div key={index} className="p-4 rounded-md bg-stone-50 border border-stone-100 flex items-start gap-3 text-xs sm:text-sm text-stone-800 font-medium">
                <CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {location.processSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-100 rounded-md space-y-3 shadow-sm hover:shadow-md transition-shadow">
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
        title={`Questions about working with us in ${location.name}`}
        subtitle="We ensure transparent communication and scalable solutions for all our regional and international clients."
        faqs={location.faqs}
      />

      {/* Contact Trigger Block */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to elevate your business in {location.name}?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with our expert team for a free technical consultation and customized digital strategy.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Get a Free Consultation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
