"use client";

import { useState, FormEvent } from "react";

export function DonateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/donate-inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(json.error || `Request failed (${res.status})`);
      setStatus("success");
      setMessage("Thank you — check your inbox for a confirmation email.");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="donate-name" className="block text-sm font-medium text-white">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="donate-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand-sunlight focus:outline-none focus:ring-2 focus:ring-brand-sunlight/25"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="donate-email" className="block text-sm font-medium text-white">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="donate-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand-sunlight focus:outline-none focus:ring-2 focus:ring-brand-sunlight/25"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="donate-phone" className="block text-sm font-medium text-white">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="donate-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+263 ..."
          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-brand-sunlight focus:outline-none focus:ring-2 focus:ring-brand-sunlight/25"
        />
      </div>
      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-brand-green" : "text-red-600"}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "loading" ? "Sending…" : "Send details"}
      </button>
    </form>
  );
}
