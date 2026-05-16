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
    <div className="min-h-[calc(100vh-120px)] bg-brand-dark/10 backdrop-blur pb-24 pt-28 sm:pt-32">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-[2rem] border border-white/10 bg-brand-dark/20 backdrop-blur shadow-sm shadow-brand-dark/20 overflow-hidden">
          <div className="p-8 sm:p-10 border-b border-white/10">
            <h1 className="text-3xl font-heading font-semibold text-white">Seller sign in</h1>
            <p className="text-white/80 mt-2">
              Registration and sign-in are for sellers (authorized publishers) only. Buyers and visitors do not create
              accounts—browse and donate without signing up.
            </p>
            <p className="text-white/80 mt-3 text-sm">Enter your seller email and password to continue.</p>
          </div>

          <form onSubmit={onSubmit} className="p-8 sm:p-10 space-y-5">
            {error && (
              <div className="rounded-2xl border border-red-200/30 bg-red-500/15 px-5 py-4 text-red-50">{error}</div>
            )}

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@mashambanzou.co.zw"
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-4 focus:ring-brand-sunlight/25"
                autoFocus
                autoComplete="username"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-semibold text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-4 focus:ring-brand-sunlight/25"
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

            <p className="text-xs text-white/70">
              Seller accounts only. If you need publisher access, contact the site administrator.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

