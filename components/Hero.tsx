"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { imagesFromMedia } from "@/lib/website-media";
import { useWebsiteMedia } from "@/lib/useWebsiteMedia";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

type BackgroundImage = {
  src: string;
  alt: string;
  label?: string;
};

type SidePanel = {
  eyebrow?: string;
  title?: string;
  body: string;
};

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
  backgroundImages,
  mediaKey,
  mediaSectionKey,
  backgroundRotateMs = 7000,
  sidePanel,
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
  /** Optional rotating background images (preferred when set). */
  backgroundImages?: BackgroundImage[];
  /** Admin-managed single image key from Laravel Website Images. */
  mediaKey?: string;
  /** Admin-managed slideshow/gallery key from Laravel Website Images. */
  mediaSectionKey?: string;
  /** Rotation interval for backgroundImages. */
  backgroundRotateMs?: number;
  /** Optional turquoise content block displayed to the right when no gallery is present. */
  sidePanel?: SidePanel;
}) {
  const prefersReducedMotion = useReducedMotion();
  const media = useWebsiteMedia(mediaSectionKey ?? mediaKey);

  const images = useMemo(() => {
    const list = Array.isArray(backgroundImages) ? backgroundImages.filter(Boolean) : [];
    const fallbacks = list.length > 0 ? list : backgroundImageSrc ? [{ src: backgroundImageSrc, alt: backgroundImageAlt ?? "" }] : [];
    const key = mediaSectionKey ?? mediaKey;
    if (key) return imagesFromMedia(media, key, fallbacks);
    if (fallbacks.length > 0) return fallbacks;
    return [];
  }, [backgroundImages, backgroundImageAlt, backgroundImageSrc, media, mediaKey, mediaSectionKey]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [images.length]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (images.length <= 1) return;
    if (paused) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, Math.max(2500, backgroundRotateMs));
    return () => window.clearInterval(id);
  }, [backgroundRotateMs, images.length, paused, prefersReducedMotion]);

  const hasGallery = images.length > 0;
  const active = hasGallery ? images[activeIndex] : undefined;

  function goNext() {
    if (images.length <= 1) return;
    setActiveIndex((i) => (i + 1) % images.length);
  }
  function goPrev() {
    if (images.length <= 1) return;
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <header className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-brand-cream">
      {hasGallery && (
        <div className="absolute inset-0">
          {/* Soft-focus cinematic backdrop */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={active?.src ?? activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.9 }}
              className="absolute inset-0"
            >
              <Image
                src={active?.src ?? ""}
                alt=""
                aria-hidden
                fill
                priority={activeIndex === 0}
                sizes="100vw"
                className="object-cover scale-[1.06] blur-[10px] opacity-50"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/90 via-brand-cream/70 to-brand-cream/95" />
          <div className="absolute inset-0 bg-brand-cream/10" />
        </div>
      )}

      {/* Background blobs - sunlight & nature (dawn of a new day) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[50vw] h-[50vw] bg-brand-sunlight/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[40vw] h-[40vw] bg-brand-sunlight/15 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial column */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="rounded-[2.25rem] border border-brand-green/20 bg-brand-green/95 backdrop-blur-md shadow-xl shadow-brand-green/20 p-7 sm:p-10">
              {badge && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sunlight/25 text-white text-xs font-semibold uppercase tracking-wide mb-7 border border-brand-sunlight/30"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-sunlight animate-pulse" />
                  {badge}
                </motion.div>
              )}

              <motion.h1
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[0.95] text-white"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                {gradientText ? (
                  <>
                    {title}{" "}
                    <span className="bg-gradient-to-r from-brand-sunlight via-white to-brand-sunlight text-transparent bg-clip-text italic">
                      {gradientText}
                    </span>
                  </>
                ) : (
                  title
                )}
              </motion.h1>

              {subtitle && (
                <motion.p
                  className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-prose"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  {subtitle}
                </motion.p>
              )}

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                {primaryCta &&
                  (isExternalHref(primaryHref) ? (
                    <a
                      href={primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-full text-base font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-all duration-300 shadow-lg shadow-brand-sunlight/20"
                    >
                      {primaryCta}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={primaryHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-full text-base font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-all duration-300 shadow-lg shadow-brand-sunlight/20"
                    >
                      {primaryCta}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  ))}

                {secondaryCta &&
                  (isExternalHref(secondaryHref) ? (
                    <a
                      href={secondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-full text-base font-medium hover:bg-white/15 hover:border-white/30 transition-all"
                    >
                      {secondaryCta}
                    </a>
                  ) : (
                    <Link
                      href={secondaryHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-full text-base font-medium hover:bg-white/15 hover:border-white/30 transition-all"
                    >
                      {secondaryCta}
                    </Link>
                  ))}
              </motion.div>
            </div>
          </div>

          {/* Gallery / side content column */}
          <div className="lg:col-span-6 xl:col-span-7">
            {hasGallery ? (
              <div className="rounded-[2.5rem] border border-brand-green/15 bg-white shadow-2xl shadow-brand-dark/10 overflow-hidden">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-brand-cream">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={active?.src ?? activeIndex}
                      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.01 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={active?.src ?? ""}
                        alt={active?.alt ?? ""}
                        fill
                        priority={activeIndex === 0}
                        sizes="(max-width: 1024px) 100vw, 720px"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-brand-dark/10 to-transparent" />

                  {/* Progress */}
                  {images.length > 1 && !prefersReducedMotion ? (
                    <div className="absolute top-5 left-5 right-5">
                      <div className="h-1.5 rounded-full bg-white/30 overflow-hidden">
                        <motion.div
                          key={`${activeIndex}-${paused ? "paused" : "play"}`}
                          initial={{ width: "0%" }}
                          animate={{ width: paused ? "0%" : "100%" }}
                          transition={{ duration: paused ? 0 : backgroundRotateMs / 1000, ease: "linear" }}
                          className="h-full bg-brand-sunlight"
                        />
                      </div>
                    </div>
                  ) : null}

                  {/* Controls */}
                  {images.length > 1 ? (
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                      <div className="text-white">
                        <div className="text-sm font-semibold">
                          {active?.label ?? `Slide ${activeIndex + 1}`}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={goPrev}
                          aria-label="Previous image"
                          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition"
                        >
                          <span className="sr-only">Previous</span>
                          <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaused((p) => !p)}
                          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition"
                        >
                          {paused ? (
                            <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 5v14l11-7z"
                              />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h3v12H8z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 6h3v12h-3z" />
                            </svg>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          aria-label="Next image"
                          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition"
                        >
                          <span className="sr-only">Next</span>
                          <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 6l6 6-6 6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Thumbnails */}
                {images.length > 1 ? (
                  <div className="p-4 sm:p-5 bg-white">
                    <div className="grid grid-cols-5 gap-2">
                      {images.slice(0, 5).map((img, i) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => setActiveIndex(i)}
                          className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition ${
                            i === activeIndex
                              ? "border-brand-sunlight ring-2 ring-brand-sunlight/40"
                              : "border-white/15 hover:border-white/30"
                          }`}
                          aria-label={`Show ${img.label ?? `image ${i + 1}`}`}
                        >
                          <Image src={img.src} alt="" aria-hidden fill sizes="140px" className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-transparent to-transparent" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : sidePanel ? (
              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.55 }}
                className="rounded-[2.25rem] border border-brand-green/20 bg-brand-green/95 shadow-2xl shadow-brand-green/20 p-7 sm:p-10 text-white"
              >
                {sidePanel.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-4">{sidePanel.eyebrow}</p>
                ) : null}
                {sidePanel.title ? (
                  <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight mb-4">
                    {sidePanel.title}
                  </h2>
                ) : null}
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">{sidePanel.body}</p>
              </motion.aside>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
