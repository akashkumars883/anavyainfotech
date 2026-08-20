"use client";

import { useState, useEffect } from "react";
import { 
  Bot, 
  Megaphone, 
  Mail, 
  Save, 
  RefreshCw, 
  CheckCircle2, 
  Sliders, 
  Sparkles, 
  ShieldAlert,
  MessageSquare
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [settings, setSettings] = useState({
    announcementBanner: {
      enabled: true,
      text: "⚡ Special Offer: Get 20% OFF on Custom AI & Web App Development this month!",
      link: "/contact",
    },
    chatbot: {
      enabled: true,
      welcomeMessage: "Hello! 👋 Welcome to Anavya Infotech. How can we help transform your digital product today?",
      systemPrompt: "You are an AI Sales & Technical Consultant for Anavya Infotech. Help users explore web development, AI automation, SEO, and cloud services.",
      quickReplies: ["Get Web App Quote", "AI Automation Services", "Speak with Team"],
    },
    leadSettings: {
      autoReplyEmail: true,
      notificationEmail: "ak706908@gmail.com",
    },
  });

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
      }
    } catch (err) {
      console.error("Failed to load settings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSavedSuccess(false);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      } else {
        alert(data.error || "Failed to save settings.");
      }
    } catch (err) {
      console.error("Save settings error:", err);
      alert("Network error saving settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 text-left selection:bg-blue-600/20 selection:text-blue-950">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-md border border-stone-200">
        <div className="space-y-2">
          <Breadcrumbs items={[{ label: "Admin Dashboard", href: "/admin" }, { label: "Chatbot & Site Config", href: "/admin/settings" }]} />
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold uppercase tracking-wider text-blue-700">
              <Sliders className="h-3.5 w-3.5" /> Site Configuration & Controls
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Website Controls &amp; AI Chatbot Settings
            </h1>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving || loading}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-stone-900 text-white hover:bg-black text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
        >
          {saving ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin text-blue-400" />
              <span>Saving Changes...</span>
            </>
          ) : savedSuccess ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Saved Successfully!</span>
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              <span>Save Configuration</span>
            </>
          )}
        </button>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-md p-4 flex items-center justify-between text-xs text-emerald-800 font-semibold animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>All website controls, chatbot prompts, and announcement banner settings have been updated!</span>
          </div>
        </div>
      )}

      {loading ? (
        <div className="p-12 text-center text-xs text-stone-500 flex items-center justify-center gap-2 bg-white rounded-md border border-stone-200">
          <RefreshCw className="h-4 w-4 animate-spin text-blue-700" />
          <span>Loading admin configuration...</span>
        </div>
      ) : (
        <form onSubmit={handleSave} className="space-y-8">
          
          {/* Section 1: AI Chatbot Control */}
          <div className="bg-white border border-stone-200 rounded-md p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-stone-900">AI Chatbot Control &amp; Knowledge Base</h2>
                  <p className="text-xs text-stone-500 font-light">Customize how the AI chatbot interacts with your website visitors.</p>
                </div>
              </div>

              {/* Chatbot Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.chatbot.enabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      chatbot: { ...settings.chatbot, enabled: e.target.checked },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                <span className="ml-3 text-xs font-bold text-stone-700">
                  {settings.chatbot.enabled ? "Chatbot Active" : "Chatbot Disabled"}
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-6 text-xs text-stone-700">
              {/* Welcome Message */}
              <div className="space-y-1.5">
                <label className="font-bold text-stone-900 uppercase text-[10px] tracking-wider block">
                  Chatbot Greeting / Welcome Message
                </label>
                <input
                  type="text"
                  value={settings.chatbot.welcomeMessage}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      chatbot: { ...settings.chatbot, welcomeMessage: e.target.value },
                    })
                  }
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-blue-700 focus:bg-white"
                  placeholder="Greeting message shown when user opens chat..."
                />
              </div>

              {/* AI System Prompt / Instructions */}
              <div className="space-y-1.5">
                <label className="font-bold text-stone-900 uppercase text-[10px] tracking-wider block flex items-center justify-between">
                  <span>AI System Prompt &amp; Knowledge Base Persona</span>
                  <span className="text-blue-700 text-[10px] font-normal flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Controls AI Behavior
                  </span>
                </label>
                <textarea
                  rows={4}
                  value={settings.chatbot.systemPrompt}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      chatbot: { ...settings.chatbot, systemPrompt: e.target.value },
                    })
                  }
                  className="w-full bg-stone-50 border border-stone-200 rounded-md p-4 text-xs text-stone-900 focus:outline-none focus:border-blue-700 focus:bg-white leading-relaxed resize-none"
                  placeholder="Tell the AI how to sell your web development, AI & cloud services..."
                />
              </div>
            </div>
          </div>

          {/* Section 2: Top Announcement Banner Control */}
          <div className="bg-white border border-stone-200 rounded-md p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-stone-900">Website Top Announcement Banner</h2>
                  <p className="text-xs text-stone-500 font-light">Promote special offers, discounts, or new product announcements across the website.</p>
                </div>
              </div>

              {/* Banner Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.announcementBanner.enabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      announcementBanner: { ...settings.announcementBanner, enabled: e.target.checked },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                <span className="ml-3 text-xs font-bold text-stone-700">
                  {settings.announcementBanner.enabled ? "Banner Visible" : "Banner Hidden"}
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-700">
              <div className="sm:col-span-2 space-y-1.5">
                <label className="font-bold text-stone-900 uppercase text-[10px] tracking-wider block">
                  Announcement Offer Text
                </label>
                <input
                  type="text"
                  value={settings.announcementBanner.text}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      announcementBanner: { ...settings.announcementBanner, text: e.target.value },
                    })
                  }
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                  placeholder="e.g. ⚡ Special Offer: 20% OFF on Web Apps..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-stone-900 uppercase text-[10px] tracking-wider block">
                  Target Link (HREF)
                </label>
                <input
                  type="text"
                  value={settings.announcementBanner.link}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      announcementBanner: { ...settings.announcementBanner, link: e.target.value },
                    })
                  }
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                  placeholder="/contact"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Lead Notifications & System Settings */}
          <div className="bg-white border border-stone-200 rounded-md p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <div className="h-9 w-9 rounded-md bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">Lead Email Notifications</h2>
                <p className="text-xs text-stone-500 font-light">Set recipient email address for instant customer lead alerts.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-stone-700">
              <div className="space-y-1.5">
                <label className="font-bold text-stone-900 uppercase text-[10px] tracking-wider block">
                  Admin Lead Recipient Email Address
                </label>
                <input
                  type="email"
                  value={settings.leadSettings.notificationEmail}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      leadSettings: { ...settings.leadSettings, notificationEmail: e.target.value },
                    })
                  }
                  className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-purple-700 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="autoReply"
                  checked={settings.leadSettings.autoReplyEmail}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      leadSettings: { ...settings.leadSettings, autoReplyEmail: e.target.checked },
                    })
                  }
                  className="h-4 w-4 text-purple-700 rounded border-stone-300 focus:ring-purple-700 cursor-pointer"
                />
                <label htmlFor="autoReply" className="text-xs font-semibold text-stone-800 cursor-pointer">
                  Automatically send instant confirmation email to customer upon form submission
                </label>
              </div>
            </div>
          </div>

          {/* Bottom Save Action */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-stone-900 text-white hover:bg-black text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <Save className="h-4 w-4" />
              <span>Save &amp; Apply All Settings</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
