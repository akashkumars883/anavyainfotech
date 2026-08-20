"use client";

import { useState, useEffect } from "react";
import { Users, Phone, Mail, Search, RefreshCw, Calendar, Globe, Download, Eye, X, MessageSquare, Briefcase, FileText } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AdminLeadsDashboardPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);

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
      l.site_id?.toLowerCase().includes(search.toLowerCase()) ||
      l.message?.toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = "Name,Contact (Phone/Email),Source/Service,Message,Date\n";
    const rows = leads
      .map((l) => `"${l.name || ""}","${l.phone_email || ""}","${l.site_id || ""}","${(l.message || "").replace(/"/g, '""')}","${l.created_at || ""}"`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `anavya-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <main className="min-h-screen bg-stone-50 pt-24 md:pt-20 pb-16 text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <section className="py-10 bg-white border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumbs items={[{ label: "Admin Dashboard", href: "/admin" }, { label: "Captured Customer Leads", href: "/admin/leads" }]} />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                <Users className="h-3.5 w-3.5" /> Customer Lead Management
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
              placeholder="Search by name, contact, message..."
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
              <span>Loading captured customer leads...</span>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <Users className="h-10 w-10 text-stone-300 mx-auto" />
              <div className="text-sm font-bold text-stone-700">No Customer Leads Found</div>
              <p className="text-xs text-stone-500 font-light max-w-sm mx-auto">
                When visitors interact with the AI chatbot or submit forms, their detailed leads will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
                    <th className="py-3.5 px-6">Customer Name</th>
                    <th className="py-3.5 px-6">Contact Details</th>
                    <th className="py-3.5 px-6">Source / Service</th>
                    <th className="py-3.5 px-6">Captured Message</th>
                    <th className="py-3.5 px-6">Date &amp; Time</th>
                    <th className="py-3.5 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs">
                  {filteredLeads.map((lead, idx) => (
                    <tr 
                      key={lead.id || idx} 
                      onClick={() => setSelectedLead(lead)}
                      className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-6 font-bold text-stone-900">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                            {(lead.name || "U")[0].toUpperCase()}
                          </div>
                          <span className="group-hover:text-blue-700 transition-colors">{lead.name || "Website Visitor"}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-blue-700 font-semibold">
                        {lead.phone_email || "N/A"}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700">
                          <Globe className="h-3 w-3 text-stone-400" /> {lead.site_id || "Direct Inquiry"}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-stone-600 max-w-xs truncate">
                        {lead.message || <span className="text-stone-400 italic">Click to view details</span>}
                      </td>
                      <td className="py-4 px-6 text-stone-500 font-light">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-stone-400" />
                          <span>{lead.created_at ? new Date(lead.created_at).toLocaleString("en-IN") : "Recent"}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-stone-900 text-white hover:bg-black text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5" /> View Full Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Customer Full Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 rounded-lg max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-base">
                  {(selectedLead.name || "U")[0].toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{selectedLead.name || "Website Visitor"}</h3>
                  <p className="text-xs text-stone-400">Captured Customer Lead</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-xs text-stone-700">
              {/* Contact Info Card */}
              <div className="bg-stone-50 border border-stone-200 rounded-md p-4 space-y-3">
                <div className="flex items-center gap-2 font-bold text-stone-900 text-xs border-b border-stone-200 pb-2">
                  <Mail className="h-4 w-4 text-blue-700" /> Contact Information
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Customer Name</span>
                    <strong className="text-stone-900 font-semibold">{selectedLead.name || "N/A"}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Phone / Email</span>
                    <strong className="text-blue-700 font-bold">{selectedLead.phone_email || "N/A"}</strong>
                  </div>
                </div>
              </div>

              {/* Source & Date Card */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-stone-50 border border-stone-200 rounded-md p-3.5 space-y-1">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold flex items-center gap-1">
                    <Globe className="h-3 w-3 text-stone-500" /> Source / Service
                  </span>
                  <span className="font-semibold text-stone-900 font-mono text-[11px] block truncate">
                    {selectedLead.site_id || "Direct Inquiry"}
                  </span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-md p-3.5 space-y-1">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-stone-500" /> Date Captured
                  </span>
                  <span className="font-semibold text-stone-900 text-[11px] block">
                    {selectedLead.created_at ? new Date(selectedLead.created_at).toLocaleString("en-IN") : "Recent"}
                  </span>
                </div>
              </div>

              {/* Message & Requirement Details */}
              <div className="bg-stone-50 border border-stone-200 rounded-md p-4 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900 text-xs border-b border-stone-200 pb-2">
                  <MessageSquare className="h-4 w-4 text-blue-700" /> Full Requirements / Message
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded text-stone-800 font-light leading-relaxed whitespace-pre-wrap min-h-[80px]">
                  {selectedLead.message || "Customer left no specific message."}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="bg-stone-100 px-6 py-4 border-t border-stone-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 rounded bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 font-bold text-xs cursor-pointer"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                {selectedLead.phone_email?.includes("@") ? (
                  <a
                    href={`mailto:${selectedLead.phone_email}?subject=Response%20to%20your%20Inquiry%20-%20Anavya%20Infotech`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" /> Email Customer
                  </a>
                ) : (
                  <a
                    href={`tel:${selectedLead.phone_email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-green-700 hover:bg-green-800 text-white font-bold text-xs transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" /> Call Customer
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

