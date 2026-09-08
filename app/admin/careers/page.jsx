"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Briefcase,
  Users,
  Search,
  RefreshCw,
  Download,
  Plus,
  Mail,
  Phone,
  Calendar,
  Globe,
  X,
  FileText,
  CheckCircle2,
  Trash2,
  ExternalLink,
  Tag
} from "lucide-react";

export default function AdminCareersDashboardPage() {
  const [activeTab, setActiveTab] = useState("applications"); // 'applications' | 'openings'
  const [applications, setApplications] = useState([]);
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);

  // New Opening Form Modal State
  const [isOpeningModalOpen, setIsOpeningModalOpen] = useState(false);
  const [newOpening, setNewOpening] = useState({
    title: "",
    department: "Sales & Growth",
    location: "Delhi NCR / Remote / Hybrid",
    type: "Full-Time",
    experience: "0-1 Years",
    description: "",
    tags: "",
  });
  const [isSavingOpening, setIsSavingOpening] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [appRes, opRes] = await Promise.all([
        fetch("/api/careers/applications"),
        fetch("/api/careers/openings"),
      ]);

      const appData = await appRes.json();
      const opData = await opRes.json();

      if (appData.applications) setApplications(appData.applications);
      if (opData.openings) setOpenings(opData.openings);
    } catch (err) {
      console.error("Failed to fetch careers admin data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredApps = applications.filter(
    (a) =>
      a.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.email?.toLowerCase().includes(search.toLowerCase()) ||
      a.phone?.toLowerCase().includes(search.toLowerCase()) ||
      a.opening_title?.toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = () => {
    if (applications.length === 0) return;
    const headers = "Name,Email,Phone,Applied Role,Resume URL,Date\n";
    const rows = applications
      .map(
        (a) =>
          `"${a.name || ""}","${a.email || ""}","${a.phone || ""}","${a.opening_title || ""}","${a.resume_url || ""}","${a.created_at || ""}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `candidate-applications-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  const handleCreateOpening = async (e) => {
    e.preventDefault();
    if (!newOpening.title.trim() || !newOpening.description.trim()) return;

    setIsSavingOpening(true);
    try {
      const res = await fetch("/api/careers/openings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOpening),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setOpenings([data.opening, ...openings]);
        setIsOpeningModalOpen(false);
        setNewOpening({
          title: "",
          department: "Sales & Growth",
          location: "Delhi NCR / Remote / Hybrid",
          type: "Full-Time",
          experience: "0-1 Years",
          description: "",
          tags: "",
        });
      }
    } catch (err) {
      console.error("Failed to create opening:", err);
    } finally {
      setIsSavingOpening(false);
    }
  };

  const handleDeleteOpening = async (id) => {
    if (!confirm("Are you sure you want to delete this job opening?")) return;
    try {
      const res = await fetch(`/api/careers/openings?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setOpenings(openings.filter((o) => o.id !== id));
      }
    } catch (err) {
      console.error("Delete opening error:", err);
    }
  };

  return (
    <div className="space-y-4 text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-md border border-stone-200">
        <div className="space-y-2">
          <Breadcrumbs
            items={[
              { label: "Admin Dashboard", href: "/admin" },
              { label: "Careers & Openings", href: "/admin/careers" },
            ]}
          />
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
              <Briefcase className="h-3.5 w-3.5" /> Careers &amp; Recruitment Management
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Careers Portal ({applications.length} Applications, {openings.length} Openings)
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchData}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-bold transition-all cursor-pointer"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>

          {activeTab === "applications" ? (
            <button
              onClick={exportCSV}
              disabled={applications.length === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-stone-900 text-white hover:bg-black text-xs font-bold transition-all cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          ) : (
            <button
              onClick={() => setIsOpeningModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-blue-700 text-white hover:bg-blue-800 text-xs font-bold transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Post New Opening</span>
            </button>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-stone-200 bg-white px-4 pt-3 rounded-t-md">
        <button
          onClick={() => setActiveTab("applications")}
          className={`py-2.5 px-4 text-xs font-bold transition-colors cursor-pointer border-b-2 flex items-center gap-2 ${
            activeTab === "applications"
              ? "border-blue-700 text-blue-700"
              : "border-transparent text-stone-500 hover:text-stone-900"
          }`}
        >
          <Users className="h-4 w-4" />
          <span>Candidate Applications ({applications.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("openings")}
          className={`py-2.5 px-4 text-xs font-bold transition-colors cursor-pointer border-b-2 flex items-center gap-2 ${
            activeTab === "openings"
              ? "border-blue-700 text-blue-700"
              : "border-transparent text-stone-500 hover:text-stone-900"
          }`}
        >
          <Briefcase className="h-4 w-4" />
          <span>Manage Job Openings ({openings.length})</span>
        </button>
      </div>

      {/* TAB 1: APPLICATIONS INBOX */}
      {activeTab === "applications" && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="bg-white border border-stone-200 rounded-md p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="h-4 w-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search candidates by name, email, role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-700 focus:bg-white"
              />
            </div>
            <div className="text-xs font-medium text-stone-500">
              Showing <strong className="text-stone-900 font-bold">{filteredApps.length}</strong> of{" "}
              <strong className="text-stone-900 font-bold">{applications.length}</strong> total applicants
            </div>
          </div>

          {/* Applications Table */}
          <div className="bg-white border border-stone-200 rounded-md overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin text-blue-700" />
                <span>Loading applicant entries...</span>
              </div>
            ) : filteredApps.length === 0 ? (
              <div className="p-12 text-center space-y-3">
                <Users className="h-10 w-10 text-stone-300 mx-auto" />
                <div className="text-sm font-bold text-stone-700">No Job Applications Received Yet</div>
                <p className="text-xs text-stone-500 font-light max-w-sm mx-auto">
                  When candidates submit their application for open roles, their resume details will appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50 border-b border-stone-200 text-[11px] font-bold uppercase tracking-wider text-stone-600">
                      <th className="py-3.5 px-6">Applicant Name</th>
                      <th className="py-3.5 px-6">Applied Role</th>
                      <th className="py-3.5 px-6">Contact Info</th>
                      <th className="py-3.5 px-6">Resume / Portfolio</th>
                      <th className="py-3.5 px-6">Applied Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-xs">
                    {filteredApps.map((app) => (
                      <tr key={app.id} className="hover:bg-stone-50/80 transition-colors">
                        <td
                          onClick={() => setSelectedApp(app)}
                          className="py-4 px-6 font-bold text-stone-900 hover:text-blue-700 cursor-pointer underline underline-offset-4 decoration-blue-300 hover:decoration-blue-700"
                        >
                          {app.name}
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-bold text-[11px]">
                            {app.opening_title || "Business Development Intern"}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-stone-700 font-medium">
                          <div>{app.email}</div>
                          <div className="text-[11px] text-stone-500">{app.phone}</div>
                        </td>
                        <td className="py-4 px-6">
                          {app.resume_url ? (
                            <a
                              href={app.resume_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-blue-700 hover:underline font-semibold text-[11px]"
                            >
                              View Resume <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="text-stone-400 font-light">Not provided</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-stone-500 font-light">
                          {new Date(app.created_at).toLocaleString("en-IN")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: MANAGE OPENINGS */}
      {activeTab === "openings" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {openings.map((op) => (
              <div
                key={op.id}
                className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      {op.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {op.status}
                    </span>
                    <span className="text-xs text-stone-500 font-light">{op.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{op.title}</h3>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">{op.description}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDeleteOpening(op.id)}
                    className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                    title="Delete Opening"
                  >
                    <Trash2 className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Candidate Modal Details */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 rounded-md max-w-xl w-full shadow-2xl overflow-hidden text-left">
            <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-white">{selectedApp.name}</h3>
                <p className="text-xs text-blue-400 font-semibold">{selectedApp.opening_title || "Business Development Intern"}</p>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-stone-700 max-h-[70vh] overflow-y-auto">
              {/* Contact & Location Info */}
              <div className="bg-stone-50 border border-stone-200 rounded-md p-4 space-y-2">
                <div className="font-bold text-stone-900 text-xs border-b border-stone-200 pb-2">
                  Contact &amp; Location Details
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Email Address</span>
                    <strong className="text-blue-700 font-bold">{selectedApp.email}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Phone / WhatsApp</span>
                    <strong className="text-stone-900 font-bold">{selectedApp.phone}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Current Location</span>
                    <span className="font-semibold text-stone-900">{selectedApp.location || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Date Applied</span>
                    <span className="font-semibold text-stone-900">{new Date(selectedApp.created_at).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Education & Links */}
              <div className="bg-stone-50 border border-stone-200 rounded-md p-4 space-y-2">
                <div className="font-bold text-stone-900 text-xs border-b border-stone-200 pb-2">
                  Academic &amp; Profile Links
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">College / Qualification</span>
                    <strong className="text-stone-900 font-bold">{selectedApp.education || "N/A"}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">Graduation Year</span>
                    <span className="font-semibold text-stone-900">{selectedApp.graduation_year || "N/A"}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-1">
                  {selectedApp.linkedin_url && (
                    <div className="truncate">
                      <strong className="text-stone-500">LinkedIn:</strong>{" "}
                      <a
                        href={selectedApp.linkedin_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-700 underline font-semibold"
                      >
                        {selectedApp.linkedin_url}
                      </a>
                    </div>
                  )}
                  {selectedApp.resume_url && (
                    <div className="truncate">
                      <strong className="text-stone-500">Resume / Drive Link:</strong>{" "}
                      <a
                        href={selectedApp.resume_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-700 underline font-semibold"
                      >
                        {selectedApp.resume_url}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills & Experience */}
              {selectedApp.skills && (
                <div className="bg-stone-50 border border-stone-200 rounded-md p-4 space-y-1">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Skills &amp; Relevant Experience</span>
                  <div className="font-medium text-stone-900">{selectedApp.skills}</div>
                </div>
              )}

              {/* Cover Note */}
              <div className="space-y-1">
                <strong className="block text-stone-900">Cover Note / Motivation:</strong>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-md text-stone-800 leading-relaxed font-light whitespace-pre-wrap">
                  {selectedApp.message || "No cover note provided."}
                </div>
              </div>
            </div>

            <div className="bg-stone-100 px-6 py-4 flex items-center justify-between border-t border-stone-200">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2 bg-white border border-stone-300 rounded-md text-xs font-bold cursor-pointer hover:bg-stone-50"
              >
                Close Window
              </button>
              <div className="flex gap-2">
                <a
                  href={`mailto:${selectedApp.email}?subject=Regarding%20your%20Application%20at%20Anavya%20Infotech`}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-xs font-bold flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" /> Email Applicant
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Job Opening Posting Modal */}
      {isOpeningModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 rounded-lg max-w-lg w-full shadow-2xl overflow-hidden">
            <div className="bg-stone-900 text-white p-5 flex items-center justify-between">
              <h3 className="font-bold text-base text-white">Post New Job Opening</h3>
              <button
                onClick={() => setIsOpeningModalOpen(false)}
                className="p-1 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateOpening} className="p-6 space-y-3.5 text-xs text-left">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Job Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Business Development Intern"
                  value={newOpening.title}
                  onChange={(e) => setNewOpening({ ...newOpening, title: e.target.value })}
                  className="w-full p-2.5 border border-stone-200 rounded bg-stone-50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Department</label>
                  <input
                    type="text"
                    value={newOpening.department}
                    onChange={(e) => setNewOpening({ ...newOpening, department: e.target.value })}
                    className="w-full p-2.5 border border-stone-200 rounded bg-stone-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={newOpening.location}
                    onChange={(e) => setNewOpening({ ...newOpening, location: e.target.value })}
                    className="w-full p-2.5 border border-stone-200 rounded bg-stone-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Job Description *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Enter full job description, responsibilities, and requirements..."
                  value={newOpening.description}
                  onChange={(e) => setNewOpening({ ...newOpening, description: e.target.value })}
                  className="w-full p-2.5 border border-stone-200 rounded bg-stone-50 focus:bg-white resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpeningModalOpen(false)}
                  className="px-4 py-2 border border-stone-300 rounded font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingOpening}
                  className="px-6 py-2 bg-blue-700 text-white rounded font-bold cursor-pointer hover:bg-blue-800"
                >
                  {isSavingOpening ? "Posting..." : "Post Opening"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
