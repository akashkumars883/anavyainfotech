"use client";

import { useState, useEffect } from "react";
import { Users, Phone, Mail, Search, RefreshCw, Calendar, Globe, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AdminLeadsDashboardPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/widget/lead");
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter(
    (l) =>
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone_email?.toLowerCase().includes(search.toLowerCase()) ||
      l.site_id?.toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = "Name,Contact (Phone/Email),Site ID,Date\n";
    const rows = leads
      .map((l) => `"${l.name}","${l.phone_email}","${l.site_id}","${l.created_at}"`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `anavya-chatbot-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <main className="min-h-screen bg-stone-50 pt-24 md:pt-20 pb-16 text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <section className="py-10 bg-white border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumbs items={[{ label: "Widget Builder", href: "/widget-builder" }, { label: "Admin Leads", href: "/admin/leads" }]} />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                <Users className="h-3.5 w-3.5" /> AI Chatbot Lead Management
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Captured Customer Leads ({leads.length})
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchLeads}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                <span>Refresh Leads</span>
              </button>

              <button
                onClick={exportCSV}
                disabled={leads.length === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-stone-900 text-white hover:bg-black text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 pt-8 space-y-6">
        
        {/* Search Bar & Stats */}
        <div className="bg-white border border-stone-200 rounded-md p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="relative w-full sm:w-80">
            <Search className="h-4 w-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads by name, phone, or site..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-700 focus:bg-white"
            />
          </div>

          <div className="text-xs font-medium text-stone-500">
            Showing <strong className="text-stone-900 font-bold">{filteredLeads.length}</strong> of <strong className="text-stone-900 font-bold">{leads.length}</strong> total leads
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white border border-stone-200 rounded-md overflow-hidden shadow-xs">
          {loading ? (
            <div className="p-12 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin text-blue-700" />
              <span>Loading captured leads...</span>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <Users className="h-10 w-10 text-stone-300 mx-auto" />
              <div className="text-sm font-bold text-stone-700">No Chatbot Leads Found</div>
              <p className="text-xs text-stone-500 font-light max-w-sm mx-auto">
                When visitors interact with the AI chatbot and share their contact details, their leads will automatically appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
                    <th className="py-3.5 px-6">Customer Name</th>
                    <th className="py-3.5 px-6">Contact (Phone / Email)</th>
                    <th className="py-3.5 px-6">Site ID</th>
                    <th className="py-3.5 px-6">Date &amp; Time</th>
                    <th className="py-3.5 px-6 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs">
                  {filteredLeads.map((lead, idx) => (
                    <tr key={lead.id || idx} className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-stone-900">
                        {lead.name}
                      </td>
                      <td className="py-4 px-6 text-blue-700 font-semibold">
                        {lead.phone_email}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700">
                          <Globe className="h-3 w-3 text-stone-400" /> {lead.site_id}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-stone-500 font-light">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-stone-400" />
                          <span>{new Date(lead.created_at).toLocaleString("en-IN")}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        {lead.phone_email?.includes("@") ? (
                          <a
                            href={`mailto:${lead.phone_email}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 text-[11px] font-bold transition-colors"
                          >
                            <Mail className="h-3 w-3" /> Email Customer
                          </a>
                        ) : (
                          <a
                            href={`tel:${lead.phone_email}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-green-50 text-green-700 hover:bg-green-100 text-[11px] font-bold transition-colors"
                          >
                            <Phone className="h-3 w-3" /> Call Customer
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
