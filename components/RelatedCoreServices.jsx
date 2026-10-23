import Link from "next/link";

const RELATED_SERVICES = {
  ecommerce: [
    ["Custom web application architecture", "/services/web-applications"],
    ["Hire Next.js developers in India", "/hire-nextjs-developers-india"],
  ],
  webApps: [
    ["AI chatbot and RAG development", "/services/ai-chatbot"],
    ["Hire Next.js developers in India", "/hire-nextjs-developers-india"],
  ],
  ai: [["Custom web application development", "/services/web-applications"]],
  nextjs: [
    ["Custom web application development", "/services/web-applications"],
    ["Headless e-commerce development", "/services/ecommerce"],
    ["AI chatbot and RAG development", "/services/ai-chatbot"],
  ],
  technicalSeo: [
    ["Local SEO services", "/services/local-seo"],
    ["SEO content strategy", "/services/content-strategist"],
    ["Custom web applications", "/services/web-applications"],
  ],
  mobile: [
    ["Custom web applications", "/services/web-applications"],
    ["AI chatbot development", "/services/ai-chatbot"],
  ],
  crm: [
    ["Business workflow automation", "/services/business-automation"],
    ["API integration services", "/services/api-integration"],
    ["Custom web applications", "/services/web-applications"],
  ],
  automation: [
    ["Custom CRM and business software", "/services/crm-custom-software"],
    ["API integration services", "/services/api-integration"],
    ["AI chatbot development", "/services/ai-chatbot"],
  ],
  businessWebsite: [
    ["Landing page design and development", "/services/landing-pages"],
    ["Technical SEO services", "/services/technical-seo"],
    ["Custom web applications", "/services/web-applications"],
  ],
  branding: [
    ["Business website development", "/services/business-website"],
    ["Landing page design and development", "/services/landing-pages"],
  ],
  content: [
    ["Technical SEO services", "/services/technical-seo"],
    ["Local SEO services", "/services/local-seo"],
    ["E-commerce SEO", "/services/ecommerce-seo"],
  ],
  landingPages: [
    ["Business website development", "/services/business-website"],
    ["Headless e-commerce development", "/services/ecommerce"],
    ["Technical SEO services", "/services/technical-seo"],
  ],
};

export default function RelatedCoreServices({ page }) {
  const services = RELATED_SERVICES[page] ?? [];
  if (!services.length) return null;

  return (
    <nav aria-label="Related services" className="px-6 py-10 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">Related services</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {services.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="text-sm font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
