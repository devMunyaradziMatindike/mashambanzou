import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { currentPartners, pastDonors } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partner With Us | Mashambanzou Care Trust",
  description: "Corporate and institutional partnerships with Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

const proofPointIndices = [0, 1, 2, 3] as const;
const proofPointIcons = ["✅", "🤝", "📍", "📈"] as const;
const pathwayIndices = [0, 1, 2, 3] as const;
const pathwayIcons = ["🏛️", "🏢", "📦", "🧑‍🤝‍🧑"] as const;
const pathwayBulletCounts = [3, 3, 3, 3] as const;

export default async function PartnerPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("partner.hero.title")}
        subtitle={t("partner.hero.subtitle")}
        badge={t("partner.hero.badge")}
        primaryCta={t("partner.hero.primary_cta")}
        primaryHref="/contact"
        secondaryCta={t("partner.hero.secondary_cta")}
        secondaryHref="/our-identity/board-and-governance"
        backgroundImageSrc="/review-pics/outreach.png"
        backgroundImageAlt="Community outreach programme"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("partner.intro.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                {t("partner.intro.title")}
              </h2>
              <ContentText
                contentKey="partner.intro.body"
                value={t("partner.intro.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed"
              />

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors w-full sm:w-auto"
                >
                  {t("partner.intro.start")}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="/mct-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  {t("partner.intro.brochure")}
                </a>
              </div>

              <ContentText
                contentKey="partner.intro.email_note"
                value={t("partner.intro.email_note")}
                as="p"
                className="mt-6 text-sm text-white/70"
              />
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {proofPointIndices.map((index) => (
                  <div
                    key={index}
                    className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl"
                      aria-hidden
                    >
                      {proofPointIcons[index]}
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                      {t(`partner.proof_points.${index}.title`)}
                    </h3>
                    <ContentText
                      contentKey={`partner.proof_points.${index}.desc`}
                      value={t(`partner.proof_points.${index}.desc`)}
                      as="p"
                      className="mt-2 text-white/75 leading-relaxed"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
              {t("partner.pathways.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("partner.pathways.title")}
            </h2>
            <ContentText
              contentKey="partner.pathways.body"
              value={t("partner.pathways.body")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {pathwayIndices.map((index) => (
              <div
                key={index}
                className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl"
                    aria-hidden
                  >
                    {pathwayIcons[index]}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-white">
                      {t(`partner.pathways.${index}.title`)}
                    </h3>
                    <ContentText
                      contentKey={`partner.pathways.${index}.desc`}
                      value={t(`partner.pathways.${index}.desc`)}
                      as="p"
                      className="mt-2 text-white/75 leading-relaxed"
                    />
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-white/80">
                  {Array.from({ length: pathwayBulletCounts[index] }, (_, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <span className="mt-2 w-2.5 h-2.5 rounded-full bg-brand-sunlight flex-shrink-0" />
                      <span>{t(`partner.pathways.${index}.bullets.${bulletIndex}`)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="text-brand-warm font-semibold hover:underline">
                    {t(`partner.pathways.${index}.link`)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
              {t("partner.partners.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("partner.partners.title")}
            </h2>
            <ContentText
              contentKey="partner.partners.body"
              value={t("partner.partners.body")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                {t("partner.partners.current.title")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                {currentPartners.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-5 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={260}
                      height={120}
                      className="max-h-14 w-auto object-contain opacity-95"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                {t("partner.partners.past.title")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                {pastDonors.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-5 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={260}
                      height={120}
                      className="max-h-14 w-auto object-contain opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="py-14 sm:py-16 px-4 sm:px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("partner.cta.eyebrow")}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
                {t("partner.cta.title")}
              </h2>
              <ContentText
                contentKey="partner.cta.body"
                value={t("partner.cta.body")}
                as="p"
                className="text-slate-300 leading-relaxed max-w-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 hover:border-white/30 transition-colors w-full sm:w-auto"
              >
                {t("partner.cta.contact")}
              </Link>
              <Link
                href="/our-impact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {t("partner.cta.focus_areas")}
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
