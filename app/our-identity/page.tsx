import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { HandHeart, HeartHandshake, ShieldCheck, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Mashambanzou Care Trust",
  description:
    "The story of Sister Noreen's founding in 1989 and the Kushamba Nzou narrative—washing the elephant—symbolising renewal and strength for AIDS-free, resilient communities.",
};

export const dynamic = "force-dynamic";

const valueIcons: { color: "brand-sunlight" | "brand-green"; icon: LucideIcon }[] = [
  { color: "brand-sunlight", icon: Users },
  { color: "brand-green", icon: HeartHandshake },
  { color: "brand-sunlight", icon: ShieldCheck },
  { color: "brand-green", icon: HandHeart },
  { color: "brand-sunlight", icon: Zap },
];

const timelineIndices = [0, 1, 2, 3, 4] as const;
const glanceIndices = [0, 1, 2, 3] as const;
const operationalAreaIndices = [0, 1, 2] as const;

export default async function OurIdentityPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("our_identity.hero.title")}
        gradientText={t("our_identity.hero.gradient_text")}
        badge={t("our_identity.hero.badge")}
        sidePanel={{
          eyebrow: t("our_identity.hero.side_panel.eyebrow"),
          title: t("our_identity.hero.side_panel.title"),
          body: t("our_identity.hero.side_panel.body"),
        }}
      />

      {/* Vision & Mission – two callout cards */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/15 bg-brand-dark/20 backdrop-blur p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-brand-sunlight/20 flex items-center justify-center text-2xl mb-6">
                ☀️
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-4">
                {t("our_identity.vision.title")}
              </h2>
              <ContentText
                contentKey="our_identity.vision.text"
                value={t("our_identity.vision.text")}
                as="p"
                className="text-lg font-medium text-white"
              />
            </div>
            <div className="rounded-2xl border border-white/15 bg-brand-dark/20 backdrop-blur p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl mb-6">
                🌱
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-4">
                {t("our_identity.mission.title")}
              </h2>
              <ContentText
                contentKey="our_identity.mission.text"
                value={t("our_identity.mission.text")}
                as="p"
                className="text-white/85"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Our Values – grid of cards */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white text-center mb-12">
            {t("our_identity.values.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueIcons.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl bg-brand-dark/15 backdrop-blur p-6 sm:p-8 border border-white/10 shadow-sm shadow-brand-dark/15 hover:shadow-md hover:shadow-brand-dark/25 hover:border-white/20 transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-full mb-4 flex items-center justify-center ${
                    value.color === "brand-sunlight" ? "bg-brand-sunlight/20" : "bg-brand-green/20"
                  }`}
                  aria-hidden
                >
                  <value.icon
                    className={value.color === "brand-sunlight" ? "w-5 h-5 text-white" : "w-5 h-5 text-white"}
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {t(`our_identity.values.${index}.name`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* At a glance */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("our_identity.glance.title")}
            </h2>
            <ContentText
              contentKey="our_identity.glance.subtitle"
              value={t("our_identity.glance.subtitle")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {glanceIndices.map((index) => (
              <div
                key={index}
                className="rounded-2xl bg-brand-dark/15 backdrop-blur p-6 sm:p-7 border border-white/10 shadow-sm shadow-brand-dark/15 hover:shadow-md hover:shadow-brand-dark/25 hover:border-white/20 transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  {t(`our_identity.glance.${index}.label`)}
                </div>
                <div className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-white">
                  {t(`our_identity.glance.${index}.value`)}
                </div>
                <ContentText
                  contentKey={`our_identity.glance.${index}.description`}
                  value={t(`our_identity.glance.${index}.description`)}
                  as="p"
                  className="mt-3 text-white/75 text-sm sm:text-base leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Kushamba Nzou – name and symbolism */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-narrow">
          <div className="rounded-2xl border border-white/10 bg-brand-dark/20 backdrop-blur p-8 sm:p-10 shadow-sm shadow-brand-dark/20">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Mashambanzou Care Trust"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {t("our_identity.kushamba.title")}
                </h2>
                <ContentText
                  contentKey="our_identity.kushamba.body"
                  value={t("our_identity.kushamba.body")}
                  as="p"
                  className="text-white/85 leading-relaxed"
                />
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-5 sm:p-6">
                  <ContentText
                    contentKey="our_identity.kushamba.callout"
                    value={t("our_identity.kushamba.callout")}
                    as="p"
                    className="text-white/85 leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Our founder – Sr. Noreen and 1989 */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white text-center mb-12">
            {t("our_identity.founder.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 aspect-[3/4] max-w-md mx-auto md:mx-0 relative">
              <Image
                src="/founder-sr-noreen.png"
                alt="Sr. Noreen (Founder of Mashambanzou Care Trust)"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                priority={false}
              />
            </div>
            <div className="space-y-6 text-white/85">
              <ContentText
                contentKey="our_identity.founder.body"
                value={t("our_identity.founder.body")}
                as="p"
                className="leading-relaxed"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Timeline */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("our_identity.journey.title")}
            </h2>
            <ContentText
              contentKey="our_identity.journey.subtitle"
              value={t("our_identity.journey.subtitle")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-white/20 pl-6 space-y-10">
              {timelineIndices.map((index) => (
                <li key={index} className="relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-sunlight border-4 border-brand-green shadow-sm" />
                  <div className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="font-heading text-xl font-semibold text-white">
                        {t(`our_identity.timeline.${index}.title`)}
                      </h3>
                      <span className="text-sm font-semibold text-white/70">
                        {t(`our_identity.timeline.${index}.year`)}
                      </span>
                    </div>
                    <ContentText
                      contentKey={`our_identity.timeline.${index}.description`}
                      value={t(`our_identity.timeline.${index}.description`)}
                      as="p"
                      className="mt-3 text-white/80 leading-relaxed"
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PageSection>

      {/* Operational Areas */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark text-center mb-10">
            {t("our_identity.operational_areas.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {operationalAreaIndices.map((index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-dark">
                  {t(`our_identity.operational_areas.${index}`)}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/where-we-work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors"
            >
              {t("our_identity.operational_areas.cta")}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </PageSection>

      {/* Why us – closing strip with CTA */}
      <PageSection className="section-padding bg-brand-green text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {t("our_identity.closing.title")}
          </h2>
          <ContentText
            contentKey="our_identity.closing.body"
            value={t("our_identity.closing.body")}
            as="p"
            className="max-w-2xl mx-auto text-white/90 text-lg mb-8"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/our-impact"
              className="inline-flex items-center px-6 py-3 bg-white text-brand-dark rounded-full font-medium hover:bg-brand-sunlight transition-colors"
            >
              {t("our_identity.closing.cta_focus_areas")}
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="/our-identity/team"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              {t("our_identity.closing.cta_team")}
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
