"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export function AdminLoginForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => Boolean(email.trim() && password.trim()), [email, password]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(json.error || `Login failed (${res.status})`);

      router.replace(nextPath || "/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50 pb-24 pt-28 sm:pt-32">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="p-8 sm:p-10 border-b border-slate-200">
            <h1 className="text-3xl font-heading font-semibold text-brand-dark">Admin login</h1>
            <p className="text-brand-dark/70 mt-2">Enter your admin email and password to continue.</p>
          </div>

          <form onSubmit={onSubmit} className="p-8 sm:p-10 space-y-5">
            {error && <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">{error}</div>}

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-brand-dark">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@mashambanzou.co.zw"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-brand-dark outline-none focus:ring-4 focus:ring-brand-sunlight/25"
                autoFocus
                autoComplete="username"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-semibold text-brand-dark">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-brand-dark outline-none focus:ring-4 focus:ring-brand-sunlight/25"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit || loading}
              className="w-full inline-flex items-center justify-center rounded-2xl bg-brand-green px-6 py-3 text-white font-semibold shadow-sm hover:bg-brand-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>

            <p className="text-xs text-brand-dark/60">
              This portal is restricted. If you don’t have access, please contact the site administrator.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

