"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryHref = "/donate",
  secondaryHref = "/get-involved",
  badge,
  gradientText,
  backgroundImageSrc,
  backgroundImageAlt,
}: {
  title: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  primaryHref?: string;
  secondaryHref?: string;
  badge?: string;
  /** If set, title is shown then a line break and this text with gradient */
  gradientText?: string;
  /** Optional background image for hero section */
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
}) {
  return (
    <header className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-white">
      {backgroundImageSrc && (
        <>
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/35 to-white/70" />
        </>
      )}

      {/* Background blobs - sunlight & nature (dawn of a new day) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[50vw] h-[50vw] bg-brand-sunlight/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[40vw] h-[40vw] bg-brand-green/20 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sunlight/20 text-brand-dark text-xs font-semibold uppercase tracking-wide mb-8 border border-brand-sunlight/30"
          >
            <span className="w-2 h-2 rounded-full bg-brand-sunlight animate-pulse" />
            {badge}
          </motion.div>
        )}

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95] mb-6 sm:mb-8 text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {gradientText ? (
            <>
              {title} <br />
              <span className="bg-gradient-to-r from-brand-sunlight via-brand-green to-brand-earth text-transparent bg-clip-text italic">
                {gradientText}
              </span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {primaryCta && (
            isExternalHref(primaryHref) ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-full text-base font-medium hover:bg-brand-sunlight hover:text-brand-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-sunlight/20"
              >
                {primaryCta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ) : (
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-full text-base font-medium hover:bg-brand-sunlight hover:text-brand-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-sunlight/20"
              >
                {primaryCta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )
          )}
          {secondaryCta && (
            isExternalHref(secondaryHref) ? (
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-brand-green text-brand-dark rounded-full text-base font-medium hover:bg-brand-green/10 hover:border-brand-green transition-all"
              >
                {secondaryCta}
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-brand-green text-brand-dark rounded-full text-base font-medium hover:bg-brand-green/10 hover:border-brand-green transition-all"
              >
                {secondaryCta}
              </Link>
            )
          )}
        </motion.div>
      </div>
    </header>
  );
}
