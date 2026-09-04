"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Users, Phone, Mail, Search, RefreshCw, Calendar, Globe, Download, X, 
  MessageSquare, Bot, Code2, Copy, Check, LogOut, Sparkles, Sliders, 
  Layers, Upload, Terminal, ShieldCheck, Zap, Activity, HelpCircle, FileText
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

function ClientDashboardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [siteId, setSiteId] = useState(searchParams.get("siteId") || "demo");
  const [user, setUser] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Bot Customizer state (watsonx Assistant style)
  const [botName, setBotName] = useState("Alex AI Assistant");
  const [primaryColor, setPrimaryColor] = useState("#1d4ed8");
  const [welcomeMessage, setWelcomeMessage] = useState("Hello! How can I assist you with our services today?");
  const [crawlUrl, setCrawlUrl] = useState("");
  const [crawling, setCrawling] = useState(false);
  const [crawlStatus, setCrawlStatus] = useState(null);

  useEffect(() => {
    const sessionRaw = localStorage.getItem("anavya_client_session");
    if (sessionRaw) {
      try {
        const parsed = JSON.parse(sessionRaw);
        setUser(parsed);
        if (!searchParams.get("siteId") && parsed.siteId) {
          setSiteId(parsed.siteId);
        }
      } catch (e) {
        console.warn("Session parse error:", e);
      }
    }
  }, [searchParams]);

  const fetchClientLeads = async () => {
    if (!siteId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/client/leads?siteId=${encodeURIComponent(siteId)}`);
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to fetch client leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientLeads();
    // 5-Second Real-Time Auto Polling for Live Chatbot Leads
    const interval = setInterval(() => {
      fetchClientLeads();
    }, 5000);
    return () => clearInterval(interval);
  }, [siteId]);

  // Load custom bot settings from localStorage if available
  useEffect(() => {
    if (!siteId) return;
    try {
      const savedBotName = localStorage.getItem(`__watsonx_bot_name_${siteId}`);
      const savedWelcome = localStorage.getItem(`__watsonx_bot_welcome_${siteId}`);
      const savedColor = localStorage.getItem(`__watsonx_bot_color_${siteId}`);
      if (savedBotName) setBotName(savedBotName);
      if (savedWelcome) setWelcomeMessage(savedWelcome);
      if (savedColor) setPrimaryColor(savedColor);
    } catch (e) {}
  }, [siteId]);

  const handleSaveBotSettings = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem(`__watsonx_bot_name_${siteId}`, botName);
      localStorage.setItem(`__watsonx_bot_welcome_${siteId}`, welcomeMessage);
      localStorage.setItem(`__watsonx_bot_color_${siteId}`, primaryColor);
      alert(`Bot custom styling saved! Name: "${botName}", Color: ${primaryColor}`);
    } catch (e) {}
  };

  const handleLogout = () => {
    localStorage.removeItem("anavya_client_session");
    router.push("/client/login");
  };

  const handleCrawlWebsite = async (e) => {
    e.preventDefault();
    if (!crawlUrl) return;
    setCrawling(true);
    setCrawlStatus(null);
    try {
      const res = await fetch("/api/widget/crawl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteUrl: crawlUrl, siteId }),
      });
      const data = await res.json();
      if (res.ok) {
        setCrawlStatus(`Successfully indexed ${data.pagesCrawled} pages from ${data.siteUrl}!`);
        setCrawlUrl("");
      } else {
        throw new Error(data.error || "Failed to crawl site");
      }
    } catch (err) {
      setCrawlStatus(`Error: ${err.message}`);
    } finally {
      setCrawling(false);
    }
  };

  const scriptTag = `<script src="https://www.anavyainfotech.com/widget.js" data-site-id="${siteId}" async></script>`;

  const copyScript = () => {
    navigator.clipboard.writeText(scriptTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone_email?.toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = "Name,Contact (Phone/Email),Date\n";
    const rows = leads
      .map((l) => `"${l.name || ""}","${l.phone_email || ""}","${l.created_at || ""}"`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${siteId}-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex selection:bg-blue-600/20 selection:text-blue-950 font-sans">
      {/* Anavya AI Sidebar Navigation (Light Theme) */}
      <aside className="w-64 bg-white text-stone-700 flex flex-col justify-between shrink-0 border-r border-stone-200 hidden md:flex">
        <div className="space-y-6">
          {/* Top Brand Block */}
          <div className="p-5 border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-blue-700 flex items-center justify-center text-white font-bold shadow-xs">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-stone-900 tracking-tight">Anavya AI Studio</div>
                <div className="text-[10px] text-stone-500 font-mono">Enterprise Control v2.4</div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="px-3 space-y-1">
            <div className="px-3 py-2 text-[10px] font-bold text-stone-400 uppercase tracking-wider">Studio Workspace</div>
            {[
              { id: "overview", label: "Overview & Analytics", icon: Activity },
              { id: "knowledge", label: "Knowledge Catalog (RAG)", icon: Layers },
              { id: "customizer", label: "Actions & Styling", icon: Sliders },
              { id: "deployments", label: "Integrations & Embed", icon: Code2 },
              { id: "leads", label: "Captured Leads", icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-blue-700 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Account Block */}
        <div className="p-4 border-t border-stone-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-stone-500 px-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Multi-Tenant System</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-all border border-stone-200 cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-stone-200 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {/* Mobile Tab Navigation */}
            <div className="md:hidden flex items-center gap-2 overflow-x-auto py-1">
              {[
                { id: "overview", label: "Overview", icon: Activity },
                { id: "knowledge", label: "Knowledge", icon: Layers },
                { id: "customizer", label: "Actions", icon: Sliders },
                { id: "deployments", label: "Embed", icon: Code2 },
                { id: "leads", label: "Leads", icon: Users },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap ${
                    activeTab === tab.id ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-stone-500">
              <span>Assistant Studio</span>
              <span>/</span>
              <span className="font-bold text-stone-900 capitalize">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchClientLeads}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium border border-stone-200 transition-all cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Sync Data</span>
            </button>

            <div className="h-4 w-px bg-stone-200" />
            <div className="text-xs font-semibold text-stone-700 hidden sm:block">
              {user?.name || siteId}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW & TELEMETRY */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Top Banner */}
              <div className="bg-stone-900 text-white p-6 rounded-md border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-600 text-[10px] font-bold uppercase tracking-wider text-white">
                    IBM watsonx AI Core
                  </div>
                  <h2 className="text-xl font-bold">Welcome to {user?.name || siteId} Control Center</h2>
                  <p className="text-xs text-stone-400">Manage autonomous AI RAG knowledge, custom styling, and captured visitor leads.</p>
                </div>
                <button
                  onClick={() => setActiveTab("deployments")}
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Code2 className="h-4 w-4" />
                  <span>Get Embed Code</span>
                </button>
              </div>

              {/* Stats 4 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-stone-200 rounded-md p-5 space-y-2">
                  <div className="flex items-center justify-between text-stone-500">
                    <span className="text-xs font-medium">Captured Leads</span>
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-stone-900">{leads.length}</div>
                  <p className="text-[11px] text-emerald-600 font-medium">100% Isolated Data</p>
                </div>

                <div className="bg-white border border-stone-200 rounded-md p-5 space-y-2">
                  <div className="flex items-center justify-between text-stone-500">
                    <span className="text-xs font-medium">AI Model Engine</span>
                    <Zap className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="text-base font-bold text-stone-900">Llama 3.3 + Gemini</div>
                  <p className="text-[11px] text-stone-500">Dual LLM Fallback</p>
                </div>

                <div className="bg-white border border-stone-200 rounded-md p-5 space-y-2">
                  <div className="flex items-center justify-between text-stone-500">
                    <span className="text-xs font-medium">Knowledge Store</span>
                    <Layers className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="text-base font-bold text-stone-900">Vector TF-IDF RAG</div>
                  <p className="text-[11px] text-blue-600 font-medium">Zero OpenAI API Fee</p>
                </div>

                <div className="bg-white border border-stone-200 rounded-md p-5 space-y-2">
                  <div className="flex items-center justify-between text-stone-500">
                    <span className="text-xs font-medium">System Status</span>
                    <Activity className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div className="text-base font-bold text-emerald-600 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Operational
                  </div>
                  <p className="text-[11px] text-stone-500">Latency &lt; 250ms</p>
                </div>
              </div>

              {/* Status Details */}
              <div className="bg-white border border-stone-200 rounded-md p-6 space-y-4">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600" /> Assistant Architecture &amp; Privacy Safeguards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 rounded-md bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-semibold text-stone-800">1. Web Crawler RAG</div>
                    <p className="text-stone-500">Scrapes website headings, paragraphs, and list items for instant answers.</p>
                  </div>
                  <div className="p-3 rounded-md bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-semibold text-stone-800">2. Conversational Lead Handoff</div>
                    <p className="text-stone-500">Asks visitor name and phone/email before answering detailed queries.</p>
                  </div>
                  <div className="p-3 rounded-md bg-stone-50 border border-stone-200 space-y-1">
                    <div className="font-semibold text-stone-800">3. Shadow DOM Embed</div>
                    <p className="text-stone-500">Zero CSS collision with host website styles or framework scripts.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KNOWLEDGE BASE & RAG CRAWLER */}
          {activeTab === "knowledge" && (
            <div className="bg-white border border-stone-200 rounded-md p-6 space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1 border-b border-stone-100 pb-4">
                <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-600" /> Knowledge Catalog &amp; Web Scraper RAG
                </h2>
                <p className="text-xs text-stone-500">Train your Assistant by indexing website URLs into local TF-IDF vector memory.</p>
              </div>

              <form onSubmit={handleCrawlWebsite} className="space-y-4 max-w-2xl">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Enter Website URL to Index</label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      required
                      placeholder="https://yourwebsite.com"
                      value={crawlUrl}
                      onChange={(e) => setCrawlUrl(e.target.value)}
                      className="flex-1 px-3.5 py-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600"
                    />
                    <button
                      type="submit"
                      disabled={crawling}
                      className="px-4 py-2 rounded-md bg-stone-900 text-white font-semibold text-xs hover:bg-stone-800 disabled:opacity-50 cursor-pointer flex items-center gap-2 shrink-0"
                    >
                      <RefreshCw className={`h-3.5 w-3.5 ${crawling ? "animate-spin" : ""}`} />
                      <span>{crawling ? "Scraping Pages..." : "Index Site Knowledge"}</span>
                    </button>
                  </div>
                </div>
              </form>

              {crawlStatus && (
                <div className={`p-3 rounded-md text-xs font-medium ${crawlStatus.startsWith("Error") ? "bg-red-50 text-red-700 border border-red-200" : "bg-emerald-50 text-emerald-800 border border-emerald-200"}`}>
                  {crawlStatus}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BOT ACTIONS & CUSTOMIZER */}
          {activeTab === "customizer" && (
            <div className="bg-white border border-stone-200 rounded-md p-6 space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1 border-b border-stone-100 pb-4">
                <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Sliders className="h-5 w-5 text-blue-600" /> Assistant Actions &amp; Styling
                </h2>
                <p className="text-xs text-stone-500">Configure bot name, primary theme color, and initial greeting message.</p>
              </div>

              <form onSubmit={handleSaveBotSettings} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Bot Name</label>
                    <input
                      type="text"
                      value={botName}
                      onChange={(e) => setBotName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Primary Color Theme</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="h-9 w-14 rounded cursor-pointer border border-stone-200"
                      />
                      <span className="text-xs font-mono font-bold text-stone-700">{primaryColor}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Welcome Message</label>
                    <textarea
                      rows={3}
                      value={welcomeMessage}
                      onChange={(e) => setWelcomeMessage(e.target.value)}
                      className="w-full p-3 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Save &amp; Apply Bot Styling
                  </button>
                </div>

                {/* Live Preview */}
                <div className="bg-stone-50 border border-stone-200 rounded-md p-5 space-y-3">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Live Preview</span>
                  <div className="bg-white border border-stone-200 rounded-md p-4 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                      <div className="h-6 w-6 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: primaryColor }}>
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-bold text-xs text-stone-900">{botName}</span>
                    </div>
                    <div className="p-3 rounded-md text-xs text-stone-800 bg-stone-50 border border-stone-200 leading-relaxed">
                      {welcomeMessage}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: DEPLOYMENTS & EMBED */}
          {activeTab === "deployments" && (
            <div className="bg-stone-900 text-white border border-stone-800 rounded-md p-6 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold">Deploy Assistant Code</h2>
                  <p className="text-xs text-stone-400">Copy and paste this script snippet before the closing &lt;/body&gt; tag on your website.</p>
                </div>
              </div>

              <div className="relative">
                <pre className="bg-black/60 border border-stone-800 rounded-md p-4 text-xs font-mono text-blue-300 overflow-x-auto">
                  {scriptTag}
                </pre>
                <button
                  onClick={copyScript}
                  className="absolute right-3 top-3 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Code"}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: CAPTURED LEADS */}
          {activeTab === "leads" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-white border border-stone-200 rounded-md p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search className="h-4 w-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by name or contact..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  onClick={exportCSV}
                  disabled={leads.length === 0}
                  className="px-4 py-2 rounded-md bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-50 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>

              {/* Table */}
              <div className="bg-white border border-stone-200 rounded-md overflow-hidden">
                {loading ? (
                  <div className="p-8 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
                    <RefreshCw className="h-4 w-4 animate-spin text-blue-600" />
                    <span>Loading verified leads...</span>
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="p-8 text-center text-xs text-stone-500">
                    No captured leads found for site instance: <span className="font-mono text-stone-900 font-bold">{siteId}</span>
                  </div>
                ) : (
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 font-semibold uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5">Visitor Name</th>
                        <th className="p-3.5">Contact Details</th>
                        <th className="p-3.5">Captured At</th>
                        <th className="p-3.5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {filteredLeads.map((lead, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                          <td className="p-3.5 font-bold text-stone-900">{lead.name || "Anonymous Visitor"}</td>
                          <td className="p-3.5 font-mono text-blue-600">{lead.phone_email || "N/A"}</td>
                          <td className="p-3.5 text-stone-500">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5 text-stone-400" />
                              <span>{lead.created_at ? new Date(lead.created_at).toLocaleString("en-IN") : "Just Now"}</span>
                            </div>
                          </td>
                          <td className="p-3.5 text-right">
                            {lead.phone_email?.includes("@") ? (
                              <a
                                href={`mailto:${lead.phone_email}`}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 text-[11px] font-semibold transition-colors"
                              >
                                <Mail className="h-3 w-3" /> Email
                              </a>
                            ) : (
                              <a
                                href={`tel:${lead.phone_email}`}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[11px] font-semibold transition-colors"
                              >
                                <Phone className="h-3 w-3" /> Call
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ClientDashboardPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-stone-500">Loading Enterprise Studio...</div>}>
      <ClientDashboardContent />
    </Suspense>
  );
}

