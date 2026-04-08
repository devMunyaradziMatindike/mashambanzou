"use client";

import { useState, FormEvent } from "react";

export function DonateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="donate-name" className="block text-sm font-medium text-brand-dark">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="donate-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder-slate-400 focus:border-brand-sunlight focus:outline-none focus:ring-2 focus:ring-brand-sunlight/20"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="donate-email" className="block text-sm font-medium text-brand-dark">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="donate-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder-slate-400 focus:border-brand-sunlight focus:outline-none focus:ring-2 focus:ring-brand-sunlight/20"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="donate-phone" className="block text-sm font-medium text-brand-dark">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="donate-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+263 ..."
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder-slate-400 focus:border-brand-sunlight focus:outline-none focus:ring-2 focus:ring-brand-sunlight/20"
        />
      </div>
    </form>
  );
}
