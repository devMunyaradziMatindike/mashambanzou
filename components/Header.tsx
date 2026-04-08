"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center border border-slate-100 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          className="text-xl sm:text-2xl font-semibold tracking-tighter flex items-center gap-3 font-heading text-brand-dark"
        >
          <Image
            src="/logo.png"
            alt="Mashambanzou Care Trust"
            width={40}
            height={40}
            className="h-8 w-auto object-contain"
          />
          <span className="hidden sm:block leading-tight">
            <span className="block">Mashambanzou</span>
            <span className="block text-sm font-medium text-brand-dark/80">Care Trust</span>
          </span>
          <span className="sm:hidden block leading-tight text-base">
            <span className="block">Mashambanzou</span>
            <span className="block text-xs font-medium text-brand-dark/80">Care Trust</span>
          </span>
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {"children" in item && item.children ? (
                <>
                  <button
                    className="text-sm font-medium text-slate-700 hover:text-brand-sunlight transition-colors"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 py-2 bg-white rounded-2xl shadow-xl border border-slate-100"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm hover:bg-slate-50 rounded-lg mx-1 ${
                              pathname === child.href ? "text-brand-sunlight font-medium" : "text-slate-700"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-brand-sunlight" : "text-slate-700 hover:text-brand-sunlight"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/donate"
            className="group relative px-6 py-2.5 bg-brand-dark text-white rounded-full text-sm font-medium overflow-hidden hover:scale-105 transition-transform"
          >
            <span className="relative z-10">Donate</span>
            <div className="absolute inset-0 bg-brand-sunlight transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
          <Link
            href="/get-involved"
            className="px-6 py-2.5 bg-white border-2 border-brand-green text-brand-dark rounded-full text-sm font-medium hover:bg-brand-green/10 hover:border-brand-green transition-all"
          >
            Get Involved
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 mx-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl overflow-hidden"
          >
            <nav className="p-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {mainNav.map((item) => (
                <div key={item.label}>
                  {"children" in item && item.children ? (
                    <>
                      <div className="px-3 py-2 text-sm font-medium text-slate-500">{item.label}</div>
                      <div className="pl-4 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2.5 px-3 rounded-lg text-sm ${
                              pathname === child.href ? "text-brand-sunlight font-medium bg-brand-cream/50" : "text-slate-700"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                        pathname === item.href ? "text-brand-sunlight bg-brand-cream/50" : "text-slate-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex gap-3">
                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-3 text-sm font-medium text-white bg-brand-dark rounded-full hover:bg-brand-sunlight transition-colors"
                >
                  Donate
                </Link>
                <Link
                  href="/get-involved"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-3 text-sm font-medium border-2 border-brand-green rounded-full text-brand-dark hover:bg-brand-green/10"
                >
                  Get Involved
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
