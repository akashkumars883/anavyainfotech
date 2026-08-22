"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  Activity, 
  MousePointerClick, 
  Users, 
  Globe, 
  RefreshCw, 
  Layers, 
  ArrowUpRight,
  Trash2,
  ShieldCheck
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AdminAnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [purging, setPurging] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [data, setData] = useState({
    stats: {
      totalClicks: 0,
      uniqueVisitors: 0,
      topElements: [],
      topPages: [],
    },
    events: [],
  });

  const loadData = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const res = await fetch("/api/admin/analytics");
      const result = await res.json();
      if (result.success) {
        setData({
          stats: result.stats || { totalClicks: 0, uniqueVisitors: 0, topElements: [], topPages: [] },
          events: result.events || [],
        });
      }
    } catch (err) {
      console.error("Failed to load live analytics:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    
    async function init() {
      try {
        const res = await fetch("/api/admin/analytics");
        const result = await res.json();
        if (isMounted && result.success) {
          setData({
            stats: result.stats || { totalClicks: 0, uniqueVisitors: 0, topElements: [], topPages: [] },
            events: result.events || [],
          });
        }
      } catch (err) {
        console.error("Failed to load live analytics:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    init();
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-refresh interval every 5 seconds
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      loadData(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRefresh, loadData]);

  const handlePurgeOldLogs = async () => {
    if (!window.confirm("Purge click tracking logs older than 30 days from Turso database?")) {
      return;
    }
    setPurging(true);
    try {
      const res = await fetch("/api/admin/analytics", { method: "DELETE" });
      const result = await res.json();
      if (res.ok && result.success) {
        alert("30-day retention cleanup complete! Old logs purged successfully.");
        loadData(true);
      } else {
        alert(result.error || "Failed to purge old logs.");
      }
    } catch (err) {
      console.error("Purge error:", err);
    } finally {
      setPurging(false);
    }
  };

  return (
    <div className="space-y-4 text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-md border border-stone-200">
        <div className="space-y-2">
          <Breadcrumbs items={[{ label: "Admin Dashboard", href: "/admin" }, { label: "Live Tracking Analytics", href: "/admin/analytics" }]} />
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Real-Time Event Stream (30-Day Auto Retention)
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Live Click &amp; Visitor Tracking
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`px-3 py-2 text-xs font-bold rounded-md border transition-all cursor-pointer ${
              autoRefresh
                ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                : "bg-stone-100 border-stone-200 text-stone-600 hover:bg-stone-200"
            }`}
          >
            {autoRefresh ? "⚡ Auto-Refresh On (5s)" : "⏸️ Auto-Refresh Off"}
          </button>

          <button
            onClick={handlePurgeOldLogs}
            disabled={purging}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 text-xs font-bold transition-all cursor-pointer"
            title="Clean logs older than 30 days"
          >
            <Trash2 className="h-3.5 w-3.5 text-amber-700" />
            <span>{purging ? "Purging..." : "Clean 30+ Day Logs"}</span>
          </button>

          <button
            onClick={() => loadData(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-stone-900 text-white hover:bg-black text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin text-blue-400" : ""}`} />
            <span>Refresh Now</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-xs text-stone-500 flex items-center justify-center gap-2 bg-white rounded-md border border-stone-200">
          <RefreshCw className="h-4 w-4 animate-spin text-blue-700" />
          <span>Loading real-time analytics data...</span>
        </div>
      ) : (
        <>
          {/* Key Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-md border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-stone-500 text-xs font-semibold">
                <span>Total Live Clicks</span>
                <MousePointerClick className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-3xl font-extrabold text-stone-900">{data.stats.totalClicks}</p>
              <p className="text-[11px] text-stone-500">Captured across all pages</p>
            </div>

            <div className="bg-white p-5 rounded-md border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-stone-500 text-xs font-semibold">
                <span>Unique Visitors</span>
                <Users className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-3xl font-extrabold text-stone-900">{data.stats.uniqueVisitors}</p>
              <p className="text-[11px] text-stone-500">Distinct visitor sessions</p>
            </div>

            <div className="bg-white p-5 rounded-md border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-stone-500 text-xs font-semibold">
                <span>Most Active Route</span>
                <Globe className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-lg font-bold text-stone-900 truncate">
                {data.stats.topPages[0]?.page_path || "/"}
              </p>
              <p className="text-[11px] text-stone-500">
                {data.stats.topPages[0]?.count || 0} clicks recorded
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-stone-500 text-xs font-semibold">
                <span>Top Clicked Element</span>
                <Activity className="h-4 w-4 text-amber-600" />
              </div>
              <p className="text-base font-bold text-stone-900 truncate">
                {data.stats.topElements[0]?.element_text || "Navigation / CTA"}
              </p>
              <p className="text-[11px] text-stone-500">
                {data.stats.topElements[0]?.count || 0} interactions
              </p>
            </div>
          </div>

          {/* Top Rankings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Clicked Elements */}
            <div className="bg-white p-6 rounded-md border border-stone-200 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <MousePointerClick className="h-4 w-4 text-blue-600" />
                  <span>Top Clicked Buttons &amp; Links</span>
                </h3>
                <span className="text-[11px] font-semibold text-stone-400">By Rank</span>
              </div>

              {data.stats.topElements.length === 0 ? (
                <p className="text-xs text-stone-400 py-4 text-center">No element clicks recorded yet. Click anywhere on website to test!</p>
              ) : (
                <div className="space-y-3">
                  {data.stats.topElements.map((el, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-stone-50 border border-stone-100 text-xs">
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="font-mono text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase">
                          {el.element_tag || "btn"}
                        </span>
                        <span className="font-medium text-stone-900 truncate">{el.element_text}</span>
                      </div>
                      <span className="font-extrabold text-stone-900 bg-white px-2.5 py-1 rounded border border-stone-200">
                        {el.count} Clicks
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Top Visited Pages */}
            <div className="bg-white p-6 rounded-md border border-stone-200 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-600" />
                  <span>Most Popular Page Routes</span>
                </h3>
                <span className="text-[11px] font-semibold text-stone-400">By Route</span>
              </div>

              {data.stats.topPages.length === 0 ? (
                <p className="text-xs text-stone-400 py-4 text-center">No page activity recorded yet.</p>
              ) : (
                <div className="space-y-3">
                  {data.stats.topPages.map((pg, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-stone-50 border border-stone-100 text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span className="font-mono text-stone-900 font-medium truncate">{pg.page_path}</span>
                      </div>
                      <span className="font-extrabold text-stone-900 bg-white px-2.5 py-1 rounded border border-stone-200">
                        {pg.count} Events
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Real-time Click Events Stream Table */}
          <div className="bg-white border border-stone-200 rounded-md overflow-hidden space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-purple-600" />
                  <span>Real-Time Click Activity Stream (Auto-Purged &gt; 30 Days)</span>
                </h3>
                <p className="text-xs text-stone-500 font-light">Showing recent 50 captured click events with screen coordinates and visitor IP.</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  <ShieldCheck className="h-3.5 w-3.5" /> 30-Day Retention Policy
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  Total Events: {data.events.length}
                </span>
              </div>
            </div>

            {data.events.length === 0 ? (
              <div className="p-8 text-center text-xs text-stone-400 space-y-2">
                <MousePointerClick className="h-8 w-8 mx-auto text-stone-300" />
                <p className="font-bold text-stone-600">No Live Click Events Yet</p>
                <p>Open the website in another tab and click any button to see live events stream here in real-time!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-stone-700">
                  <thead className="bg-stone-50 border-b border-stone-200 text-[10px] uppercase font-bold text-stone-600 tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Time</th>
                      <th className="py-3 px-4">Page Route</th>
                      <th className="py-3 px-4">Clicked Element</th>
                      <th className="py-3 px-4">Tag</th>
                      <th className="py-3 px-4">Position (X, Y)</th>
                      <th className="py-3 px-4">Visitor IP</th>
                      <th className="py-3 px-4">Visitor ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {data.events.map((evt) => (
                      <tr key={evt.id} className="hover:bg-stone-50/80 transition-colors">
                        <td className="py-3 px-4 whitespace-nowrap text-stone-500 font-mono text-[11px]">
                          {evt.created_at ? new Date(evt.created_at).toLocaleTimeString() : "-"}
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-stone-900 whitespace-nowrap">
                          {evt.page_path}
                        </td>
                        <td className="py-3 px-4 font-bold text-stone-900 max-w-[200px] truncate">
                          {evt.element_text || <span className="text-stone-400 font-normal italic">Element click</span>}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="font-mono text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase">
                            {evt.element_tag || "btn"}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-stone-600 whitespace-nowrap">
                          {typeof evt.click_x === "number" ? `${evt.click_x}px, ${evt.click_y}px` : "-"}
                        </td>
                        <td className="py-3 px-4 font-mono text-stone-600 whitespace-nowrap">
                          {evt.user_ip}
                        </td>
                        <td className="py-3 px-4 font-mono text-stone-400 text-[10px] whitespace-nowrap truncate max-w-[120px]">
                          {evt.visitor_id}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
