"use client";

import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="bg-brand-green text-white py-20 sm:py-24 px-4 sm:px-6 rounded-[3rem] mt-12 relative overflow-hidden">
      {/* Footer blob - sunlight & renewal */}
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-brand-sunlight/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-brand-green/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-6">
              Ready to <br /> <span className="text-brand-sunlight">make a difference?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/85 max-w-md mb-8">
              Donate, volunteer, or partner with us. Together we build AIDS-free, resilient and empowered communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full text-base font-semibold hover:bg-white/15 hover:border-white/30 transition-colors"
              >
                Donate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/get-involved/partner"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full text-base font-semibold hover:border-brand-sunlight hover:text-brand-sunlight transition-colors"
              >
                Partner with us
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-base sm:text-lg font-medium border-b border-white/20 pb-1 hover:border-brand-sunlight hover:text-brand-sunlight transition-all"
              >
                Contact us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border border-white/20">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-dark/70">Get involved</div>
                <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">
                  Choose how you want to help
                </h3>
                <p className="mt-3 text-brand-dark/75 leading-relaxed">
                  Donate, partner, or explore our transparency and impact work. We’ll guide you to the right place.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/donate"
                className="rounded-2xl border border-brand-dark/10 bg-white/10 p-5 hover:bg-white/20 transition-colors"
              >
                <div className="text-sm font-semibold text-brand-dark">Donate</div>
                <div className="text-xs text-brand-dark/70 mt-1">Support services and outreach.</div>
              </Link>
              <Link
                href="/get-involved/partner"
                className="rounded-2xl border border-brand-dark/10 bg-white/10 p-5 hover:bg-white/20 transition-colors"
              >
                <div className="text-sm font-semibold text-brand-dark">Partner</div>
                <div className="text-xs text-brand-dark/70 mt-1">Work with us for lasting impact.</div>
              </Link>
              <Link
                href="/our-identity/board-and-governance"
                className="rounded-2xl border border-brand-dark/10 bg-white/10 p-5 hover:bg-white/20 transition-colors"
              >
                <div className="text-sm font-semibold text-brand-dark">Board & governance</div>
                <div className="text-xs text-brand-dark/70 mt-1">Leadership and governance information.</div>
              </Link>
              <Link
                href="/our-impact"
                className="rounded-2xl border border-brand-dark/10 bg-white/10 p-5 hover:bg-white/20 transition-colors"
              >
                <div className="text-sm font-semibold text-brand-dark">Our Focus Areas</div>
                <div className="text-xs text-brand-dark/70 mt-1">Programmes and outcomes.</div>
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Community-led", "Accountability", "Protection & dignity"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-brand-dark/10 text-xs text-brand-dark/75"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Mashambanzou Care Trust"
              width={24}
              height={24}
              className="h-6 w-auto object-contain"
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-semibold text-white">Mashambanzou Care Trust © 2026</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <a
                href="https://nessosystems.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-sunlight transition-colors"
              >
                Designed by Nesso Systems Pvt. Ltd.
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
