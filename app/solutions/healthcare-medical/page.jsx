import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Healthcare Software Development Company | HIPAA Compliant",
  description: "Engineer secure, HIPAA-compliant healthcare software. Custom EHR/EMR integrations, telemedicine apps, patient portals & HL7/FHIR standards on modern Next.js cloud stacks.",
  keywords: ["custom healthcare software development company","medical software development services","HIPAA compliant software development","telemedicine app developers","EHR EMR integration services","hospital management software India"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/healthcare-medical" },
  openGraph: { title: "Custom Healthcare Software Development Company | HIPAA Compliant | Anavya Infotech", description: "Engineer secure, HIPAA-compliant healthcare software. Custom EHR/EMR integrations, telemedicine apps, patient portals & HL7/FHIR standards on modern Next.js cloud stacks.", url: "https://www.anavyainfotech.com/solutions/healthcare-medical", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Healthcare & Medical Software Development","description":"Engineer secure, HIPAA-compliant healthcare software. Custom EHR/EMR integrations, telemedicine apps, patient portals & HL7/FHIR standards on modern Next.js cloud stacks.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const HEALTHCARE_MEDICAL_FAQS = [
  {
    "question": "What measures ensure our software remains HIPAA compliant?",
    "answer": "We build privacy and security controls into the engineering workflow, including TLS 1.3 in transit, AES-256 at rest, role-based access, session timeouts, and audit logging. BAAs are established with applicable cloud infrastructure providers."
  },
  {
    "question": "Can you integrate modern portals with legacy EHR systems?",
    "answer": "Yes. We build integrations using HL7 v2/v3 and FHIR REST APIs to normalize and exchange clinical data with systems such as Epic, Cerner, and Allscripts."
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
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Modern healthcare providers face an increasingly complex technical landscape. Standard software packages frequently fail to satisfy regulatory requirements while meeting clinician workflow demands. Anavya Infotech engineers scalable medical platforms with fault tolerance and strong data protection.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Secure, Resilient Healthcare Software: HIPAA-Compliant Digital Health Solutions</h2><p className="max-w-4xl text-sm leading-7 text-stone-600 sm:text-base">As a custom healthcare software development company, we build clinical software that bridges complex health data systems and intuitive user interfaces, helping reduce operational bottlenecks and streamline secure patient care.</p></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Custom EHR/EMR Integration & FHIR/HL7 Data Bridges</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Telehealth & Remote Patient Monitoring Platforms</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Secure Patient Portals & Appointment Triage</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Medical Billing & Insurance Claims</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">The Regulatory & Security Stakes: Why Generic Software Fails in Clinical Environments</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Generic web frameworks are not designed to handle protected health information without careful encryption, audit logs, and granular access controls.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">PHI protection</h3><p className="mt-2 text-sm leading-6 text-stone-600">Unencrypted communications and unvetted cloud storage can expose protected health information and create regulatory and reputational risk.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Interoperability bottlenecks</h3><p className="mt-2 text-sm leading-6 text-stone-600">Legacy medical systems often operate in isolated data silos. Non-standardized exchange disrupts clinical workflows and creates manual re-entry.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Patient and provider experience</h3><p className="mt-2 text-sm leading-6 text-stone-600">Slow administrative interfaces complicate clinical documentation. Patients expect mobile-friendly access to scheduling, consultations, and records.</p></article></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Healthcare Engineering Disciplines</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">Our medical software development services use modern digital architecture to solve mission-critical healthcare engineering challenges.</p></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Custom EHR/EMR Integration & FHIR/HL7 Data Bridges</h3><p className="mt-2 text-sm leading-6 text-stone-600">Secure middleware connects web applications to Epic, Cerner, Allscripts, and Athenahealth.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Implement HL7 v2/v3 and FHIR REST APIs.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Synchronize patient demographics, clinical notes, lab results, and medication records.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Normalize data for cross-institutional research and analytics.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Telehealth & Remote Patient Monitoring Platforms</h3><p className="mt-2 text-sm leading-6 text-stone-600">Deliver low-latency virtual consultations in secure web and mobile apps.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>End-to-end encrypted audio and video using WebRTC.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Receive RPM telemetry from ECG, pulse oximeters, and glucose meters.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Support clinical notes, e-prescriptions, and collaborative whiteboards.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Secure Patient Portals & Appointment Triage</h3><p className="mt-2 text-sm leading-6 text-stone-600">Give patients self-service tools that simplify administration.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>MFA access to medical histories, lab reports, and prescriptions.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Symptom triage that routes patients to specialists or urgent care.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Automated SMS, email, and push reminders.</span></li></ul></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Medical Billing & Insurance Claims</h3><p className="mt-2 text-sm leading-6 text-stone-600">Automate revenue-cycle workflows through clearinghouse connections.</p><ul className="mt-4 space-y-2"><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Eligibility verification through EDI 270/271.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>ICD-10/ICD-11 and CPT validation to help reduce claim rejections.</span></li><li className="flex gap-2 text-sm leading-6 text-stone-600"><span className="text-blue-700">•</span><span>Claim submission via EDI 837 and remittance via EDI 835.</span></li></ul></article></div></div></section>

      <section className="border-b border-stone-100 bg-stone-50 px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Compliance & Security Benchmark Matrix</h2><div className="overflow-x-auto rounded-md border border-stone-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead className="bg-stone-100 text-stone-900"><tr><th scope="col" className="px-5 py-4 font-semibold">Regulatory Standard</th><th scope="col" className="px-5 py-4 font-semibold">Engineering Implementation</th><th scope="col" className="px-5 py-4 font-semibold">Verification & Audit</th></tr></thead><tbody className="divide-y divide-stone-200 text-stone-700"><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">HIPAA Privacy & Security</th><td className="px-5 py-4">AES-256 encryption at rest and TLS 1.3 in transit.</td><td className="px-5 py-4">BAAs, penetration testing, and automated vulnerability scans.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">HITECH Act</th><td className="px-5 py-4">Access logging, session timeouts, and role-based access.</td><td className="px-5 py-4">Immutable timestamped cloud audit trails.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">GDPR / DPDP</th><td className="px-5 py-4">Pseudonymization, consent flows, and data-erasure workflows.</td><td className="px-5 py-4">Data lineage, export tools, and privacy impact assessments.</td></tr><tr><th scope="row" className="px-5 py-4 font-medium text-stone-900">SOC-2 Type II</th><td className="px-5 py-4">Zero-trust infrastructure and continuous configuration tracking.</td><td className="px-5 py-4">Third-party review of security, availability, and confidentiality controls.</td></tr></tbody></table></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Technical Architecture: Production Cloud Architecture</h2><p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">A decoupled technology stack supports uptime, low latency, and privacy controls across the clinical platform.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">High-Performance Frontend</h3><p className="mt-2 text-sm leading-6 text-stone-600">Next.js server-side rendering and responsive delivery for medical staff and remote patients.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Secure API Layer</h3><p className="mt-2 text-sm leading-6 text-stone-600">Python FastAPI and Node.js microservices process clinical transactions.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Database & Encryption</h3><p className="mt-2 text-sm leading-6 text-stone-600">PostgreSQL and MongoDB with transparent encryption, continuous backups, and isolated connections.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-4 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-base font-semibold text-stone-900">Security Mechanisms</h3><p className="mt-2 text-sm leading-6 text-stone-600">Zero-trust networks, strict CSP, managed secrets, and isolated audit logs.</p></article></div></div></section>

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
                Schedule a Healthcare Engineering Discovery Session
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Plan secure healthcare software around your clinical workflows with our solution architects.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Schedule a Discovery Session
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


