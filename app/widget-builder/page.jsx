"use client";

import { useState, useEffect } from "react";
import { Bot, Globe, Copy, Check, Sparkles, Code2, ArrowRight, RefreshCw, AlertCircle, Users } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function StandaloneWidgetBuilderPage() {
  const [siteUrl, setSiteUrl] = useState("");
  const [customSiteId, setCustomSiteId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCrawl = async (e) => {
    e.preventDefault();
    if (!siteUrl || siteUrl.trim() === "") return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/widget/crawl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteUrl, siteId: customSiteId }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to crawl target website");
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyScript = () => {
    if (!result || !result.scriptTag) return;
    navigator.clipboard.writeText(result.scriptTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Embed live script dynamically for preview when result is ready
  useEffect(() => {
    if (result && result.siteId) {
      // Remove any existing preview widget
      const existing = document.getElementById("anavya-ai-widget-root");
      if (existing) existing.remove();

      // Load preview widget script
      const script = document.createElement("script");
      script.src = "/widget.js";
      script.setAttribute("data-site-id", result.siteId);
      script.async = true;
      document.body.appendChild(script);
    }
  }, [result]);

  return (
    <main className="min-h-screen bg-stone-50 pt-6 md:pt-8 pb-16 text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <section className="py-10 bg-white border-b border-stone-200 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumbs items={[{ label: "Widget Builder", href: "/widget-builder" }]} />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                <Bot className="h-3.5 w-3.5" /> Anavya AI Widget Engine
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
                Generate 1-Line AI Chatbot for Any Website
              </h1>
            </div>
            <Link
              href="/admin/leads"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-stone-900 text-white hover:bg-black text-xs font-bold transition-all shadow-md shrink-0"
            >
              <Users className="h-4 w-4 text-blue-400" />
              <span>View Captured Leads</span>
            </Link>
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-2xl">
            Enter your client&apos;s website URL below to crawl site data, train a context-restricted AI assistant, and copy the 1-line script tag.
          </p>
        </div>
      </section>

      {/* Main Builder Area */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Form & Script Tag Output */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-stone-200 rounded-md p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-700" /> Crawl &amp; Train Website
                </h2>
                <p className="text-xs text-stone-500 font-light">
                  Our crawler reads pages and indexes content under strict website guardrails.
                </p>
              </div>

              <form onSubmit={handleCrawl} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Website URL *
                  </label>
                  <input
                    type="text"
                    placeholder="https://clientwebsite.com"
                    value={siteUrl}
                    onChange={(e) => setSiteUrl(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Custom Site ID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. client-brand-name"
                    value={customSiteId}
                    onChange={(e) => setCustomSiteId(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-blue-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-800 disabled:opacity-50 transition-all shadow-md cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Crawling Website &amp; Training AI...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      <span>Crawl Website &amp; Generate Script Tag</span>
                    </>
                  )}
                </button>
              </form>

              {error && (
                <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Generated Script Tag Output Box */}
            {result && (
              <div className="bg-stone-900 text-white border border-stone-800 rounded-md p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-700 text-white uppercase tracking-wider">
                      Ready to Embed
                    </span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-blue-400" /> 1-Line Script Tag
                    </h3>
                  </div>
                  <button
                    onClick={copyScript}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 text-xs font-bold transition-all cursor-pointer"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>

                <div className="bg-black/60 border border-stone-800 rounded p-4 font-mono text-xs text-blue-300 overflow-x-auto leading-relaxed select-all">
                  {result.scriptTag}
                </div>

                <div className="pt-2 text-xs text-stone-400 font-light flex items-center gap-2">
                  <span>Crawled Title:</span>
                  <strong className="text-zinc-200 font-semibold">{result.pageTitle}</strong>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Instructions & Live Widget Preview Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 rounded-md p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-stone-900 border-b pb-3 border-stone-100">
                How It Works
              </h3>

              <ul className="space-y-4">
                {[
                  { step: "1", title: "Crawl & Index", desc: "Our crawler reads text, titles, and services from your target website." },
                  { step: "2", title: "Apply Strict AI Guardrails", desc: "OpenAI system prompt restricts answers strictly to the scraped site context." },
                  { step: "3", title: "Paste 1-Line Code", desc: "Embed the script tag into any HTML, WordPress, Shopify, or React site." },
                  { step: "4", title: "Instant Live Floating Chatbot", desc: "The chatbot appears at the bottom-right of the client site with 0.2s latency." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-md bg-stone-100 border border-stone-200 text-stone-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-stone-900">{item.title}</div>
                      <div className="text-xs text-stone-500 font-light leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {result && (
                <div className="p-4 rounded-md bg-blue-50 border border-blue-200 text-blue-900 space-y-2 text-xs">
                  <div className="font-bold flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-blue-700" /> Live Chatbot Ready!
                  </div>
                  <p className="font-light">
                    Look at the bottom-right corner of this screen! Click the blue chat bubble to test the live AI assistant trained on <strong>{result.siteUrl}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
