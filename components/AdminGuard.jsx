"use client";

import { useState, useEffect } from "react";
import { Lock, ArrowRight, ShieldAlert, KeyRound } from "lucide-react";

export default function AdminGuard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isConfigured, setIsConfigured] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/auth", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        setIsConfigured(data.configured === true);
        setIsAuthenticated(data.authenticated === true);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setIsAuthenticated(true);
        setError(false);
      } else {
        setIsConfigured(response.status !== 503);
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-white flex items-center justify-center text-stone-600 text-sm">Authenticating Admin...</div>;
  }

  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6 py-12 text-left">
        <div className="max-w-md w-full bg-white border border-stone-200 rounded-md p-8 space-y-3">
          <h1 className="text-xl font-bold text-stone-900">Admin login is not configured</h1>
          <p className="text-sm text-stone-600">Configure Turso, then run <code className="rounded bg-stone-100 px-1.5 py-0.5">npm run admin:create</code> in a terminal to create the first admin account.</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6 py-12 text-left selection:bg-blue-600/20">
        <div className="max-w-md w-full bg-white border border-stone-200 rounded-md p-8 space-y-8">
          <div className="space-y-3 text-center">
            <div className="h-12 w-12 rounded-md bg-blue-700/10 border border-blue-700/20 flex items-center justify-center mx-auto text-blue-700">
              <KeyRound className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Admin Portal Login</h1>
            <p className="text-xs text-stone-500 font-light">Sign in with your admin email and password.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-3">
              <label htmlFor="admin-email" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">Admin Email</label>
              <input
                id="admin-email"
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-black"
              />
              <label htmlFor="admin-password" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">Password</label>
              <div className="relative">
                <input
                  id="admin-password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={`w-full bg-stone-50 border rounded-md px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-colors ${error ? "border-red-500 bg-red-50/20" : "border-stone-200 focus:border-black"}`}
                />
                <Lock className="h-4 w-4 text-stone-400 absolute right-3.5 top-3.5" />
              </div>
              {error && <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium pt-1"><ShieldAlert className="h-3.5 w-3.5" /> Invalid email or password, or authentication service unavailable.</div>}
            </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-zinc-800 transition-colors cursor-pointer">
              Sign In to Admin Dashboard <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <div className="text-[11px] text-stone-400 text-center font-light border-t border-stone-100 pt-4">Protected Admin Area - Anavya Infotech</div>
        </div>
      </div>
    );
  }

  return <div className="admin-root w-full h-full min-h-screen">{children}</div>;
}
