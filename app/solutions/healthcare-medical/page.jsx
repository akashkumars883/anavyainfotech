import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Healthcare Software Development | HIPAA Compliant",
  description: "Build secure healthcare software that supports HIPAA requirements. Connect EHR/EMR systems, telemedicine apps, patient portals, and HL7/FHIR data using modern Next.js cloud tools.",
  keywords: ["custom healthcare software development company","medical software development services","HIPAA compliant software development","telemedicine app developers","EHR EMR integration services","hospital management software India"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/healthcare-medical" },
  openGraph: { title: "Healthcare Software Development | HIPAA Compliant | Anavya Infotech", description: "Build secure healthcare software that supports HIPAA requirements. Connect EHR/EMR systems, telemedicine apps, patient portals, and HL7/FHIR data using modern Next.js cloud tools.", url: "https://www.anavyainfotech.com/solutions/healthcare-medical", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Healthcare & Medical Software Development","description":"Engineer secure, HIPAA-compliant healthcare software. Custom EHR/EMR integrations, telemedicine apps, patient portals & HL7/FHIR standards on modern Next.js cloud stacks.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const HEALTHCARE_MEDICAL_FAQS = [
  {
    "question": "How do you help our software meet HIPAA requirements?",
    "answer": "We include privacy and security checks throughout development. This includes TLS 1.3 to protect data in transit, AES-256 to protect stored data, role-based access, session timeouts, and audit logs. We set up BAAs with the cloud providers that need them."
  },
  {
    "question": "Can you connect new portals to older EHR systems?",
    "answer": "Yes. We use HL7 v2/v3 and FHIR REST APIs to format and exchange clinical data with systems such as Epic, Cerner, and Allscripts."
  }
];

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Header */}
      <section className="py-10 bg-stone-50 border-b border-stone-100 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Healthcare & Medical", href: "/solutions/healthcare-medical" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Healthcare & Medical Software Development</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Healthcare providers must meet complex rules while supporting clinicians? daily work. Standard software may not do both. Anavya Infotech builds medical platforms that can grow, stay available, and protect data.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Secure Healthcare Software That Supports HIPAA Requirements</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">We connect complex health data systems to easy-to-use clinical software. This can reduce delays and make it easier to provide secure patient care.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Connect EHR/EMR Systems with FHIR/HL7</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Telehealth and Remote Patient Monitoring</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Secure Patient Portals and Appointment Support</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Medical Billing & Insurance Claims</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Why Healthcare Software Needs Strong Privacy and Security</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">General web tools need careful encryption, activity records, and detailed access controls to protect health information.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Protecting Health Information</h3><p className="mt-2 text-sm leading-6 text-stone-600">Unprotected messages or poorly checked cloud storage can expose health information and harm trust or compliance.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Difficulty Sharing Data Between Systems</h3><p className="mt-2 text-sm leading-6 text-stone-600">Older medical systems often keep data separate. When they cannot share information in a standard way, staff must repeat work and enter data by hand.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Experience for Patients and Providers</h3><p className="mt-2 text-sm leading-6 text-stone-600">Slow office tools make it harder to record care. Patients also expect to use phones to book visits, talk with clinicians, and view records.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Key Healthcare Software Services</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">We use modern software design to address important healthcare technology needs.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Connect EHR/EMR Systems with FHIR/HL7</h3><p className="mt-2 text-sm leading-6 text-stone-600">Secure software connects websites and apps to Epic, Cerner, Allscripts, and Athenahealth.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Implement HL7 v2/v3 and FHIR REST APIs.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Keep patient details, clinical notes, lab results, and medication records in sync.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Format data consistently for research and analysis across organizations.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Telehealth and Remote Patient Monitoring</h3><p className="mt-2 text-sm leading-6 text-stone-600">Support smooth online appointments in secure websites and mobile apps.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>End-to-end encrypted audio and video using WebRTC.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Collect remote patient monitoring (RPM) readings from ECGs, pulse oximeters, and glucose meters.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Add clinical notes, electronic prescriptions, and shared whiteboards.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Secure Patient Portals and Appointment Support</h3><p className="mt-2 text-sm leading-6 text-stone-600">Give patients online tools to handle routine tasks themselves.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>MFA access to medical histories, lab reports, and prescriptions.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Guide patients based on their symptoms and direct them to a specialist or urgent care.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Automated SMS, email, and push reminders.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Medical Billing & Insurance Claims</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automate billing and payment steps by connecting to clearinghouses.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Check insurance eligibility using EDI 270/271.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Check ICD-10/ICD-11 and CPT codes to help reduce rejected claims.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Send claims through EDI 837 and receive payment details through EDI 835.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Security and Compliance Overview</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Standard</th><th scope="col" className="px-5 py-4 font-semibold">How We Build It</th><th scope="col" className="px-5 py-4 font-semibold">How It Is Checked</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">HIPAA Privacy & Security</th><td className="px-5 py-4">AES-256 encryption protects stored data; TLS 1.3 protects data as it moves.</td><td className="px-5 py-4">Business associate agreements (BAAs), security testing, and automatic scans for weaknesses.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">HITECH Act</th><td className="px-5 py-4">Access records, session timeouts, and permissions based on each user?s role.</td><td className="px-5 py-4">Cloud records with dates and times that cannot be changed.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">GDPR / DPDP</th><td className="px-5 py-4">Replace identifying details where possible, collect consent, and support data removal.</td><td className="px-5 py-4">Track where data comes from, provide export tools, and assess privacy impacts.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">SOC-2 Type II</th><td className="px-5 py-4">Zero-trust security and ongoing checks of system settings.</td><td className="px-5 py-4">An outside review of security, availability, and privacy controls.</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Cloud Technology Behind the Platform</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Separate technology components help the clinical platform stay available, respond quickly, and protect privacy.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Fast, Easy-to-Use Website</h3><p className="mt-2 text-sm leading-6 text-stone-600">Next.js prepares pages on the server and adapts them for medical staff and patients using any device.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Secure API Connections</h3><p className="mt-2 text-sm leading-6 text-stone-600">Python FastAPI and Node.js services handle clinical requests.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Database and Encryption</h3><p className="mt-2 text-sm leading-6 text-stone-600">PostgreSQL and MongoDB with built-in encryption, regular backups, and separate connections.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Security Tools</h3><p className="mt-2 text-sm leading-6 text-stone-600">Zero-trust networks, strict content security policies (CSP), managed passwords and keys, and separate audit records.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Healthcare & Medical FAQs"
        subtitle="Common questions about healthcare & medical technology and project delivery."
        faqs={HEALTHCARE_MEDICAL_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Plan Your Healthcare Software Project
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk with our solution architects about secure software for your clinical workflows.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Plan a Project Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

