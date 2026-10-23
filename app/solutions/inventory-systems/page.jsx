import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Inventory & Warehouse Management Software Development",
  description: "Eliminate stockouts and manual spreadsheet errors. Custom inventory management software, multi-warehouse barcode/RFID tracking and real-time ERP sync.",
  keywords: ["custom inventory management software","warehouse management system development"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/inventory-systems" },
  openGraph: { title: "Custom Inventory & Warehouse Management Software Development | Anavya Infotech", description: "Eliminate stockouts and manual spreadsheet errors. Custom inventory management software, multi-warehouse barcode/RFID tracking and real-time ERP sync.", url: "https://www.anavyainfotech.com/solutions/inventory-systems", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Inventory, Supply Chain & Warehouse Management","description":"Eliminate stockouts and manual spreadsheet errors. Custom inventory management software, multi-warehouse barcode/RFID tracking and real-time ERP sync.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const INVENTORY_SYSTEMS_FAQS = [
  {
    "question": "What features are included in a custom inventory management system?",
    "answer": "Features include real-time stock level tracking, barcode/QR scanner integration, low-stock alerts, multi-warehouse sync, and supplier PO management."
  },
  {
    "question": "Can the inventory system connect to our e-commerce store and marketplaces?",
    "answer": "Yes! Stock levels automatically update across your website, Amazon, Flipkart, and physical store POS in real time."
  },
  {
    "question": "Can warehouse staff scan products using mobile smartphones?",
    "answer": "Yes, we build web-based camera barcode scanning modules so staff can scan stock directly from mobile devices without expensive hardware."
  },
  {
    "question": "Does the system generate automated purchase orders when stock is low?",
    "answer": "Yes, automated triggers alert managers and generate draft purchase orders when inventory reaches predefined reorder thresholds."
  },
  {
    "question": "How long does it take to build a custom inventory system?",
    "answer": "Custom inventory management solutions take 4 to 6 weeks to deploy."
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
          <Breadcrumbs items={[{ label: "Solutions", href: "/#solutions" }, { label: "Inventory Systems", href: "/solutions/inventory-systems" }]} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Solutions Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Inventory, Supply Chain & Warehouse Management</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Spreadsheet-based supply chains contribute to stockouts, shrinkage, and delayed fulfillment. We build inventory and warehouse systems with barcode scanning, low-stock triggers, and multi-location synchronization.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Total Operational Visibility: Custom Inventory & Warehouse Management Software</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Real-Time Multi-Location Inventory</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Barcode & QR Code Integration</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Vendor & Purchase Order Automation</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>E-Commerce & ERP Integration</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Real-Time Multi-Location Inventory</h3><p className="mt-2 text-sm leading-6 text-stone-600">Synchronized stock across retail locations and warehouse hubs.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Barcode & QR Code Integration</h3><p className="mt-2 text-sm leading-6 text-stone-600">Mobile scanning with offline synchronization.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Vendor & Purchase Order Automation</h3><p className="mt-2 text-sm leading-6 text-stone-600">Supplier management and automated reorder workflows.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">E-Commerce & ERP Integration</h3><p className="mt-2 text-sm leading-6 text-stone-600">Real-time inventory synchronization with Shopify, Amazon, and ERPs.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Inventory Systems FAQs"
        subtitle="Common questions about inventory systems technology and project delivery."
        faqs={INVENTORY_SYSTEMS_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Build a solution designed for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Talk with our team about a platform tailored to your workflows and growth plans.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


