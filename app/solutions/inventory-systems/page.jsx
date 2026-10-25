import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Custom Inventory and Warehouse Software",
  description: "Reduce stock shortages and spreadsheet errors with custom inventory software. Track barcodes/RFID across warehouses and sync data with your ERP in real time.",
  keywords: ["custom inventory management software","warehouse management system development"],
  alternates: { canonical: "https://www.anavyainfotech.com/solutions/inventory-systems" },
  openGraph: { title: "Custom Inventory and Warehouse Software | Anavya Infotech", description: "Reduce stock shortages and spreadsheet errors with custom inventory software. Track barcodes/RFID across warehouses and sync data with your ERP in real time.", url: "https://www.anavyainfotech.com/solutions/inventory-systems", type: "website" },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Custom Inventory, Supply Chain & Warehouse Management","description":"Eliminate stockouts and manual spreadsheet errors. Custom inventory management software, multi-warehouse barcode/RFID tracking and real-time ERP sync.","provider":{"@type":"ProfessionalService","name":"Anavya Infotech","url":"https://www.anavyainfotech.com"}};


const INVENTORY_SYSTEMS_FAQS = [
  {
    "question": "What features are included in a custom inventory management system?",
    "answer": "Features include live stock tracking, barcode and QR code scanning, low-stock alerts, updates across warehouses, and supplier purchase order management."
  },
  {
    "question": "Can the inventory system connect to our online store and marketplaces?",
    "answer": "Yes. Stock levels update across your website, Amazon, Flipkart, and in-store POS system in real time."
  },
  {
    "question": "Can warehouse staff scan products with their phones?",
    "answer": "Yes. We build barcode scanning tools that use a phone?s camera, so staff can scan items without buying special equipment."
  },
  {
    "question": "Can the system prepare purchase orders when stock is low?",
    "answer": "Yes. When stock reaches a set level, the system alerts managers and prepares draft purchase orders."
  },
  {
    "question": "How long does it take to build an inventory system?",
    "answer": "We usually launch custom inventory systems in 4 to 6 weeks."
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] max-w-5xl">Custom Inventory, Supply Chain, and Warehouse Software</h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-3xl leading-relaxed">Spreadsheets can lead to stock shortages, lost items, and late orders. We build inventory and warehouse systems with barcode scanning, low-stock alerts, and updates across locations.</p>
        </div>
      </section>

<section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-8"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="space-y-5 lg:col-span-7"><h2 className="text-2xl font-normal leading-tight tracking-tight text-stone-900 sm:text-3xl">Track Inventory Across Your Business</h2></div><div className="rounded-md border border-stone-200 bg-stone-50 p-6 lg:col-span-5"><h3 className="mb-4 text-lg font-normal text-stone-900">Core Capabilities</h3><ul className="space-y-3"><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Live Inventory Across Locations</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Barcode & QR Code Integration</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Automatic Supplier and Purchase Orders</span></li><li className="flex items-start gap-3 text-sm text-stone-700"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true"/><span>Connect Online Stores and ERP Systems</span></li></ul></div></div></div></section>

      <section className="border-b border-stone-100 bg-white px-6 py-12"><div className="mx-auto max-w-7xl space-y-6"><div className="max-w-4xl"><h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl">Core Capabilities</h2></div><div className="grid gap-4 md:grid-cols-2"><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Live Inventory Across Locations</h3><p className="mt-2 text-sm leading-6 text-stone-600">Keep stock levels in sync across stores and warehouses.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Barcode & QR Code Integration</h3><p className="mt-2 text-sm leading-6 text-stone-600">Scan items on a phone, even when offline. Updates sync when the device reconnects.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Automatic Supplier and Purchase Orders</h3><p className="mt-2 text-sm leading-6 text-stone-600">Manage suppliers and automatically prepare new orders when stock is low.</p></article><article className="rounded-md border border-stone-200 bg-white p-5 shadow-sm"><Zap className="mb-3 h-8 w-8 text-blue-700" aria-hidden="true"/><h3 className="text-lg font-normal text-stone-900">Connect Online Stores and ERP Systems</h3><p className="mt-2 text-sm leading-6 text-stone-600">Keep inventory up to date across Shopify, Amazon, and ERP systems.</p></article></div></div></section>

      {/* FAQ Section */}
      <FaqSection title="Inventory Systems FAQs"
        subtitle="Answers to common questions about inventory tools and our projects."
        faqs={INVENTORY_SYSTEMS_FAQS}
      />

      {/* CTA */}
      <section className="py-10 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-md blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let?s build the right solution for your business.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Tell our team how you work and where you want to grow. We?ll help plan a platform that fits.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-lg"
            >
              Talk About Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


