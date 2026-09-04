"use client";

import { useState } from "react";
import { Bot, Mail, Lock, User, Globe, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ClientLoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let siteId = "";
      if (siteUrl) {
        try {
          const parsed = new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`);
          siteId = parsed.hostname.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
        } catch {
          siteId = email.split("@")[0];
        }
      } else {
        siteId = email.split("@")[0];
      }

      const res = await fetch("/api/client/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: isRegister ? "register" : "login",
          email,
          password,
          name,
          siteId,
          siteUrl: siteUrl ? (siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`) : "",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Store client session in localStorage
      localStorage.setItem("anavya_client_session", JSON.stringify(data.user));

      // Redirect to Client Dashboard
      router.push(`/client/dashboard?siteId=${data.user.siteId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-center items-center p-6">
      <div className="max-w-sm w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">
            {isRegister ? "Create Client Account" : "Client Portal Login"}
          </h1>
          <p className="text-xs text-stone-500">
            {isRegister
              ? "Sign up to deploy your AI Chatbot"
              : "Sign in to access your AI Chatbot Studio"}
          </p>
        </div>

        {/* Form Container - Flat Clean White Card, Border Only, NO Shadow */}
        <div className="bg-white border border-stone-200 rounded-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-stone-700">
                  Full Name / Company
                </label>
                <div className="relative">
                  <User className="h-4 w-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-stone-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="h-4 w-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-stone-700">
                Password
              </label>
              <div className="relative">
                <Lock className="h-4 w-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {isRegister && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-stone-700">
                  Website URL (Optional)
                </label>
                <div className="relative">
                  <Globe className="h-4 w-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="https://yourwebsite.com"
                    value={siteUrl}
                    onChange={(e) => setSiteUrl(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="p-2.5 rounded-md bg-red-50 border border-red-200 text-red-600 text-xs">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-md bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{loading ? "Processing..." : isRegister ? "Create Account" : "Sign In"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Switch Toggle */}
          <div className="mt-4 pt-4 border-t border-stone-100 text-center text-xs text-stone-500">
            {isRegister ? (
              <span>
                Already have an account?{" "}
                <button
                  onClick={() => setIsRegister(false)}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  Sign In
                </button>
              </span>
            ) : (
              <span>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setIsRegister(true)}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  Create Account
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
