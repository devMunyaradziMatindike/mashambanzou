"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, secondaryNav } from "@/lib/nav";

type NavChild = {
  label: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

function hasImages(children: readonly NavChild[]) {
  return children.some((c) => Boolean(c.imageSrc));
}

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
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-5 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-3xl px-4 sm:px-6 py-3 sm:py-4 border border-brand-dark/10 transition-all duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-md shadow-lg shadow-brand-dark/10" : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center gap-4">
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
              <span className="block text-sm font-medium text-brand-dark/70">Care Trust</span>
            </span>
            <span className="sm:hidden block leading-tight text-base">
              <span className="block">Mashambanzou</span>
              <span className="block text-xs font-medium text-brand-dark/70">Care Trust</span>
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
                      className="text-sm font-medium text-brand-dark hover:text-brand-green transition-colors"
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
                          className={`absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-brand-dark/15 border border-brand-dark/10 overflow-hidden ${
                            hasImages(item.children as unknown as readonly NavChild[]) ? "w-[34rem]" : "w-56 py-2"
                          }`}
                        >
                          {hasImages(item.children as unknown as readonly NavChild[]) ? (
                            <div className="p-3 grid grid-cols-2 gap-3">
                              {(item.children as unknown as readonly NavChild[]).map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`group rounded-2xl border border-brand-dark/10 bg-white hover:bg-brand-cream transition-colors overflow-hidden ${
                                    pathname === child.href ? "ring-2 ring-brand-sunlight/40" : ""
                                  }`}
                                >
                                  <div className="relative h-24 bg-white/10">
                                    {child.imageSrc ? (
                                      <Image
                                        src={child.imageSrc}
                                        alt={child.imageAlt ?? child.label}
                                        fill
                                        sizes="(max-width: 1280px) 240px, 280px"
                                        className="object-cover"
                                      />
                                    ) : null}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/25 via-brand-dark/5 to-transparent" />
                                  </div>
                                  <div className="px-4 py-3">
                                    <div
                                      className={`text-sm font-semibold leading-tight ${
                                        pathname === child.href ? "text-brand-green" : "text-brand-dark"
                                      }`}
                                    >
                                      {child.label}
                                    </div>
                                    <div className="mt-1 text-xs text-brand-dark/60 group-hover:text-brand-dark/80">Open</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            (item.children as unknown as readonly NavChild[]).map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-4 py-2.5 text-sm hover:bg-brand-cream rounded-lg mx-1 ${
                                  pathname === child.href ? "text-brand-green font-medium" : "text-brand-dark"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.href ? "text-brand-green" : "text-brand-dark hover:text-brand-green"
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
              href="/contact"
              className="px-6 py-2.5 bg-white/70 border-2 border-brand-dark/15 text-brand-dark rounded-full text-sm font-medium hover:bg-white hover:border-brand-green/40 transition-all"
            >
              Contact us
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-brand-dark"
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

        <div className="hidden lg:flex justify-center gap-8 border-t border-brand-dark/10 mt-3 pt-3">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-brand-green" : "text-brand-dark hover:text-brand-green"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 mx-4 rounded-2xl bg-white/90 backdrop-blur-md border border-brand-dark/10 shadow-xl shadow-brand-dark/15 overflow-hidden"
          >
            <nav className="p-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {mainNav.map((item) => (
                <div key={item.label}>
                  {"children" in item && item.children ? (
                    <>
                      <div className="px-3 py-2 text-sm font-medium text-brand-dark/70">{item.label}</div>
                      <div className="pl-4 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2.5 px-3 rounded-lg text-sm ${
                              pathname === child.href
                                ? "text-brand-green font-medium bg-brand-cream"
                                : "text-brand-dark hover:bg-brand-cream"
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
                        pathname === item.href ? "text-brand-green bg-brand-cream" : "text-brand-dark hover:bg-brand-cream"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="border-t border-brand-dark/10 pt-3 mt-2 space-y-0.5">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                      pathname === item.href ? "text-brand-green bg-brand-cream" : "text-brand-dark hover:bg-brand-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-4 flex gap-3">
                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-3 text-sm font-medium text-white bg-brand-dark rounded-full hover:bg-brand-sunlight transition-colors"
                >
                  Donate
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-3 text-sm font-medium border-2 border-brand-dark/15 rounded-full text-brand-dark hover:bg-brand-cream"
                >
                  Contact us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
