"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { IntroVideo } from "@/components/IntroVideo";
import { CareersTeaser } from "@/components/CareersTeaser";
import { LatestStories } from "@/components/LatestStories";
import { imageFromMedia } from "@/lib/website-media";
import { useWebsiteMedia } from "@/lib/useWebsiteMedia";
import { currentPartners, pastDonors } from "@/lib/partners";
import { useSiteContent } from "@/components/ContentProvider";
import { ContentText } from "@/components/ContentText";

const marqueeKeys = [
  "home.marquee.0",
  "home.marquee.1",
  "home.marquee.2",
  "home.marquee.3",
  "home.marquee.4",
  "home.marquee.5",
  "home.marquee.6",
  "home.marquee.7",
  "home.marquee.8",
] as const;

const bentoItems = [
  {
    titleKey: "home.bento.clinical.title",
    subtitleKey: "home.bento.clinical.subtitle",
    labelKey: "home.bento.clinical.label",
    href: "/our-impact/clinical-healthcare",
    className: "lg:col-span-8",
    aspect: "aspect-[16/10] sm:aspect-[4/3]",
    bg: "bg-brand-sunlight/10",
    imageSrc: "/review-pics/mashambanzou care unit.jpg",
    imageAlt: "Clinical care at Mashambanzou Care Trust",
    mediaKey: "home.impact.clinical",
  },
  {
    titleKey: "home.bento.community.title",
    subtitleKey: "home.bento.community.subtitle",
    labelKey: "home.bento.community.label",
    href: "/our-impact/community-support",
    className: "lg:col-span-4 mt-8 md:mt-0",
    aspect: "aspect-[3/4]",
    bg: "bg-brand-green/10",
    imageSrc: "/review-pics/community-strengthening-home.png",
    imageAlt: "Community outreach workers meeting with women during a field consultation",
    mediaKey: "home.impact.community",
  },
  {
    titleKey: "home.bento.ovc.title",
    subtitleKey: "home.bento.ovc.subtitle",
    labelKey: "home.bento.ovc.label",
    href: "/our-impact/child-protection-education",
    className: "lg:col-span-5",
    aspect: "aspect-square",
    bg: "bg-brand-dark/10",
    imageSrc: "/review-pics/ovc-support-home.png",
    imageAlt: "Young people and children receiving teddy bear gifts at a Mashambanzou Care Trust support activity",
    mediaKey: "home.impact.ovc",
  },
  {
    titleKey: "home.bento.human_rights.title",
    subtitleKey: "home.bento.human_rights.subtitle",
    labelKey: "home.bento.human_rights.label",
    href: "/our-impact/empowerment-advocacy",
    className: "lg:col-span-7",
    aspect: "aspect-[16/10]",
    bg: "bg-brand-dark",
    imageSrc: "/review-pics/Institutional Income Generating project.jpg",
    imageAlt: "Livelihoods and income-generating project",
    mediaKey: "home.impact.human-rights",
  },
];

const stats = [
  { valueKey: "home.stats.0.value", labelKey: "home.stats.0.label", gradient: "from-brand-sunlight to-brand-green" },
  { valueKey: "home.stats.1.value", labelKey: "home.stats.1.label", gradient: "from-brand-green to-brand-sunlight" },
  { valueKey: "home.stats.2.value", labelKey: "home.stats.2.label", gradient: "from-brand-sunlight to-brand-earth" },
  { valueKey: "home.stats.3.value", labelKey: "home.stats.3.label", gradient: "from-brand-green to-brand-earth" },
];

const serviceCards = [
  {
    titleKey: "home.services.integrated.title",
    descriptionKey: "home.services.integrated.description",
    itemKeys: ["home.services.integrated.item.0", "home.services.integrated.item.1", "home.services.integrated.item.2"],
    icon: "🩺",
    bg: "bg-brand-dark/15 border border-white/10 backdrop-blur",
    accent: "bg-brand-sunlight/25 text-white",
    imageSrc: "/review-pics/mashambanzou care unit.jpg",
    imageAlt: "Patient receiving a farewell hamper upon discharge",
    mediaKey: "home.impact.clinical",
  },
  {
    titleKey: "home.services.community.title",
    descriptionKey: "home.services.community.description",
    itemKeys: ["home.services.community.item.0", "home.services.community.item.1", "home.services.community.item.2"],
    icon: "🤝",
    bg: "bg-brand-green text-white",
    accent: "bg-white/20 text-brand-sunlight",
    featured: true,
    imageSrc: "/review-pics/community-strengthening-home.png",
    imageAlt: "Community outreach workers meeting with women during a field consultation",
    mediaKey: "home.impact.community",
  },
  {
    titleKey: "home.services.human_rights.title",
    descriptionKey: "home.services.human_rights.description",
    itemKeys: ["home.services.human_rights.item.0", "home.services.human_rights.item.1", "home.services.human_rights.item.2"],
    icon: "⚡",
    bg: "bg-brand-dark/15 border border-white/10 backdrop-blur",
    accent: "bg-white/15 text-white",
    imageSrc: "/review-pics/advocacy.jpg",
    imageAlt: "Community advocacy event",
    mediaKey: "home.impact.human-rights",
  },
];

export default function HomePage() {
  const media = useWebsiteMedia();
  const { t } = useSiteContent();

  return (
    <>
      <Hero
        title={t("home.hero.title")}
        gradientText={t("home.hero.gradient_text")}
        subtitle={t("home.hero.subtitle")}
        primaryCta={t("home.hero.primary_cta")}
        secondaryCta={t("home.hero.secondary_cta")}
        primaryHref="/get-involved"
        secondaryHref="https://paynow.co.zw/mashambanzou"
        backgroundImages={[
          { src: "/review-pics/MCTR @ 35 celebrations in 2025.jpg", alt: "Mashambanzou Care Trust 35th anniversary celebration", label: "Care Unit (MCU)" },
          { src: "/review-pics/advocacy.jpg", alt: "Community advocacy and awareness activities", label: "Advocacy" },
          { src: "/review-pics/hiv testing.jpg", alt: "HIV testing and counselling support", label: "HIV testing" },
          { src: "/review-pics/caretoshare.jpg", alt: "Care to Share vocational training and livelihoods", label: "Livelihoods" },
        ]}
        mediaSectionKey="home.hero.slideshow"
      />

      {/* Vision | Mission | Values strip */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-sunlight mb-2">
                {t("home.vision.label")}
              </h3>
              <ContentText
                contentKey="home.vision.text"
                value={t("home.vision.text")}
                as="p"
                className="text-white font-medium"
              />
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90 mb-2">
                {t("home.mission.label")}
              </h3>
              <ContentText
                contentKey="home.mission.text"
                value={t("home.mission.text")}
                as="p"
                className="text-white/85 text-sm leading-relaxed"
              />
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-sunlight mb-2">
                {t("home.values.label")}
              </h3>
              <ContentText
                contentKey="home.values.text"
                value={t("home.values.text")}
                as="p"
                className="text-white/85 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-[16/10] sm:aspect-[4/3] max-h-[320px] relative">
              <Image
                src={imageFromMedia(media, "home.who-we-are.image", {
                  src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                  alt: "Mashambanzou Care Trust community care",
                }).src}
                alt={imageFromMedia(media, "home.who-we-are.image", {
                  src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                  alt: "Mashambanzou Care Trust community care",
                }).alt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">
                {t("home.who_we_are.title")}
              </h2>
              <ContentText
                contentKey="home.who_we_are.body"
                value={t("home.who_we_are.body")}
                as="p"
                className="text-white/85 text-lg leading-relaxed mb-4"
              />
              <Link
                href="/our-identity"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
              >
                {t("home.who_we_are.cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IntroVideo />

      {/* Marquee - renewal, nature (green) */}
      <div className="py-8 sm:py-12 bg-brand-green -rotate-1 overflow-hidden border-y-2 border-brand-dark/20">
        <div className="whitespace-nowrap flex gap-10 animate-marquee no-scrollbar">
          {[...marqueeKeys, ...marqueeKeys].map((key, i) => (
            <span key={i} className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white flex items-center gap-6 font-heading">
              {t(key)}
              <span className="w-3 h-3 rounded-full bg-brand-sunlight flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* UVP / What makes us different */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("home.different.eyebrow")}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
                {t("home.different.title")}
              </h2>
              <ContentText
                contentKey="home.different.body"
                value={t("home.different.body")}
                as="p"
                className="text-white/85 text-lg leading-relaxed mb-4"
              />
              <Link
                href="/our-impact"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
              >
                {t("home.different.cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-[16/10] sm:aspect-[4/3] relative">
              <Image
                src={imageFromMedia(media, "home.impact.clinical", {
                  src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                  alt: "Mashambanzou Care Trust clinical care",
                }).src}
                alt={imageFromMedia(media, "home.impact.clinical", {
                  src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                  alt: "Mashambanzou Care Trust clinical care",
                }).alt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help - Bento */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 sm:mb-16">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">
                {t("home.how_we_help.title")}
              </h2>
              <p className="text-white/80 text-lg">{t("home.how_we_help.subtitle")}</p>
            </div>
            <Link
              href="/our-impact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide border-b-2 border-white/40 pb-1 hover:text-brand-sunlight hover:border-brand-sunlight transition-colors"
            >
              {t("home.how_we_help.cta")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7h-10v10" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {bentoItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${item.className} group cursor-pointer`}>
                <div
                  className={`relative overflow-hidden rounded-[2.5rem] ${item.bg} ${item.aspect} mb-6 hover-pop border border-white/15`}
                >
                  <Image
                    src={imageFromMedia(media, item.mediaKey, { src: item.imageSrc, alt: item.imageAlt }).src}
                    alt={imageFromMedia(media, item.mediaKey, { src: item.imageSrc, alt: item.imageAlt }).alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                  <div className="absolute top-6 left-6 bg-brand-dark/25 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/10">
                    {t(item.labelKey)}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white font-heading">{t(item.titleKey)}</h3>
                    <p className="text-white/80 text-sm">{t(item.subtitleKey)}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-dark/40 group-hover:text-white group-hover:border-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Why Mashambanzou */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur rounded-[3rem] mx-2 sm:mx-4 mb-4 border border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
              {t("home.expertise.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-white">
              {t("home.expertise.title")}
            </h2>
            <p className="text-white/80 text-lg md:text-xl">
              {t("home.expertise.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <div
                key={card.titleKey}
                className={`p-6 sm:p-10 rounded-[2rem] shadow-sm transition-all duration-300 group ${
                  card.featured ? "bg-brand-green text-white md:-translate-y-4 shadow-xl" : card.bg
                } hover:shadow-xl overflow-hidden`}
              >
                <div className="rounded-xl overflow-hidden bg-white/10 aspect-video mb-6 border border-white/10 relative">
                  <Image
                    src={imageFromMedia(media, card.mediaKey, { src: card.imageSrc, alt: card.imageAlt }).src}
                    alt={imageFromMedia(media, card.mediaKey, { src: card.imageSrc, alt: card.imageAlt }).alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${card.accent} group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4">{t(card.titleKey)}</h3>
                <ContentText
                  contentKey={card.descriptionKey}
                  value={t(card.descriptionKey)}
                  as="p"
                  className={`leading-relaxed mb-6 ${
                    card.featured ? "text-white/85" : "text-white/80"
                  }`}
                />
                <ul className="space-y-3">
                  {card.itemKeys.map((itemKey) => (
                    <li
                      key={itemKey}
                      className={`flex items-center gap-3 text-sm font-medium ${
                        card.featured ? "text-white/90" : "text-white/90"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full flex-shrink-0 ${card.featured ? "bg-brand-sunlight/50" : "bg-brand-sunlight/30"}`} />
                      {t(itemKey)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              className="p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className={`font-heading text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} mb-2`}
              >
                {t(stat.valueKey)}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Where we work */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">
                {t("home.where_we_work.title")}
              </h2>
              <ContentText
                contentKey="home.where_we_work.regions"
                value={t("home.where_we_work.regions")}
                as="p"
                className="text-white/85 mb-6"
              />
              <ContentText
                contentKey="home.where_we_work.areas"
                value={t("home.where_we_work.areas")}
                as="p"
                className="text-white/80 text-sm mb-6"
              />
              <Link
                href="/where-we-work"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
              >
                {t("home.where_we_work.cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-video relative">
              <Image
                src="/review-pics/where-we-work-community.png"
                alt="Community members at a Mashambanzou Care Trust outreach programme"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest stories */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div className="max-w-2xl">
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("home.latest_stories.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {t("home.latest_stories.title")}
              </h2>
              <ContentText
                contentKey="home.latest_stories.body"
                value={t("home.latest_stories.body")}
                as="p"
                className="text-white/80 mt-3"
              />
            </div>
            <Link
              href="/latest-stories"
              className="inline-flex items-center px-6 py-3 bg-white/10 border-2 border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/15 hover:border-white/30 transition-all"
            >
              {t("home.latest_stories.cta")}
            </Link>
          </div>

          <LatestStories limit={3} />
        </div>
      </section>

      {/* Partners & Funders */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              {t("home.partners.title")}
            </h2>
            <ContentText
              contentKey="home.partners.body"
              value={t("home.partners.body")}
              as="p"
              className="text-white/80"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                {t("home.partners.current.title")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                {currentPartners.map((logo) => (
                  <a
                    key={logo.src}
                    href="/get-involved/partner"
                    className="group flex items-center justify-center rounded-xl bg-white/10 border border-white/15 p-4 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                    aria-label={logo.alt}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={320}
                      height={120}
                      className="max-h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                {t("home.partners.past.title")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                {pastDonors.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex items-center justify-center rounded-xl bg-white/10 border border-white/15 p-4 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={260}
                      height={120}
                      className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CareersTeaser />

      {/* Governance / Donors teaser */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-brand-cream/50">
        <div className="max-w-3xl mx-auto text-center">
          <ContentText
            contentKey="home.governance.body"
            value={t("home.governance.body")}
            as="p"
            className="text-brand-dark/90 text-lg mb-4"
          />
          <Link
            href="/our-identity/board-and-governance"
            className="inline-flex items-center gap-2 text-brand-green font-medium hover:text-brand-sunlight transition-colors"
          >
            {t("home.governance.cta")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-green text-white rounded-[3rem] mt-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-sunlight/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            {t("home.get_involved.title")}
          </h2>
          <ContentText
            contentKey="home.get_involved.body"
            value={t("home.get_involved.body")}
            as="p"
            className="text-white/85 max-w-xl mx-auto mb-10"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://paynow.co.zw/mashambanzou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-dark rounded-full text-base font-medium hover:bg-brand-sunlight hover:text-brand-dark hover:scale-105 transition-all duration-300"
            >
              {t("home.get_involved.cta_donate")}
            </a>
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-base font-medium hover:bg-white/10 transition-all"
            >
              {t("home.get_involved.cta_partner")}
            </Link>
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-base font-medium hover:bg-white/10 transition-all"
            >
              {t("home.get_involved.cta_partner_with_us")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-base font-medium hover:bg-white/10 transition-all"
            >
              {t("home.get_involved.cta_contact")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
