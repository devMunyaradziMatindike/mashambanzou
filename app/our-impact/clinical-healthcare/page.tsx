import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Clinical Healthcare (MCU) | Mashambanzou Care Trust",
  description:
    "30-bed Mashambanzou Care Unit, palliative care, HIV testing, opportunistic infection treatment and VIAC cervical cancer screening in Harare.",
};

export const dynamic = "force-dynamic";

const statIndices = [0, 1, 2, 3] as const;
const mcuServiceIndices = [0, 1, 2, 3] as const;
const serviceCardIndices = [0, 1, 2] as const;
const outreachPlaceIndices = [0, 1, 2, 3, 4, 5, 6, 7] as const;

export default async function ClinicalHealthcarePage() {
  const [media, content] = await Promise.all([getWebsiteMedia(), getWebsiteContent()]);
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("clinical.hero.title")}
        subtitle={t("clinical.hero.subtitle")}
        backgroundImageSrc="/review-pics/mashambanzou care unit.jpg"
        backgroundImageAlt="Clinical care services at Mashambanzou Care Unit"
        mediaKey="clinical-healthcare.hero"
      />

      <PageSection className="py-10 sm:py-12 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {statIndices.map((index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5 sm:p-6">
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                {t(`clinical.stats.${index}.value`)}
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/75 uppercase tracking-wide mt-1">
                {t(`clinical.stats.${index}.label`)}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("clinical.mcu.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5">
                {t("clinical.mcu.title")}
              </h2>
              <ContentText
                contentKey="clinical.mcu.body"
                value={t("clinical.mcu.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed mb-6"
              />
              <div className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6">
                <div className="text-sm font-semibold text-white mb-4">{t("clinical.mcu.services.title")}</div>
                <ul className="space-y-3 text-white/80">
                  {mcuServiceIndices.map((index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 w-2.5 h-2.5 rounded-full bg-brand-sunlight flex-shrink-0" />
                      <span>{t(`clinical.mcu.services.${index}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "clinical-healthcare.mcu-feature", {
                  src: "/review-pics/mashambanzou care unit.jpg",
                  alt: "Clinical care services at Mashambanzou Care Unit",
                }).src}
                alt={imageFromMedia(media, "clinical-healthcare.mcu-feature", {
                  src: "/review-pics/mashambanzou care unit.jpg",
                  alt: "Clinical care services at Mashambanzou Care Unit",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-heading text-xl sm:text-2xl font-semibold leading-tight">
                  {t("clinical.mcu.image.title")}
                </p>
                <p className="text-white/80 text-sm mt-2">{t("clinical.mcu.image.subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {t("clinical.services.title")}
              </h2>
              <ContentText
                contentKey="clinical.services.subtitle"
                value={t("clinical.services.subtitle")}
                as="p"
                className="text-white/80 mt-2 max-w-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {serviceCardIndices.map((index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-7 sm:p-8 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl mb-5">
                  {index === 0 ? "🧪" : index === 1 ? "🩺" : "📍"}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-3">
                  {t(`clinical.services.cards.${index}.title`)}
                </h3>
                <ContentText
                  contentKey={`clinical.services.cards.${index}.copy`}
                  value={t(`clinical.services.cards.${index}.copy`)}
                  as="p"
                  className="text-white/80 leading-relaxed mb-5"
                />
                <ul className="space-y-2 text-sm text-white/75">
                  {[0, 1, 2].map((bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 rounded-full bg-brand-sunlight flex-shrink-0" />
                      <span>{t(`clinical.services.cards.${index}.bullets.${bulletIndex}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "clinical-healthcare.outreach-feature", {
                  src: "/review-pics/outreach.png",
                  alt: "Outreach clinic providing health services in the community",
                }).src}
                alt={imageFromMedia(media, "clinical-healthcare.outreach-feature", {
                  src: "/review-pics/outreach.png",
                  alt: "Outreach clinic providing health services in the community",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("clinical.outreach.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5">
                {t("clinical.outreach.title")}
              </h2>
              <ContentText
                contentKey="clinical.outreach.body"
                value={t("clinical.outreach.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed mb-6"
              />
              <div className="flex flex-wrap gap-2">
                {outreachPlaceIndices.map((index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3.5 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                  >
                    {t(`clinical.outreach.places.${index}`)}
                  </span>
                ))}
              </div>
              <ContentText
                contentKey="clinical.outreach.note"
                value={t("clinical.outreach.note")}
                as="p"
                className="text-white/75 text-sm mt-6"
              />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="py-14 sm:py-16 px-4 sm:px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-2">
                {t("clinical.cta.title")}
              </h2>
              <ContentText
                contentKey="clinical.cta.body"
                value={t("clinical.cta.body")}
                as="p"
                className="text-slate-300"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+263711492343"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 hover:border-white/30 transition-colors"
              >
                {t("clinical.cta.call_projects")}
              </a>
              <a
                href="tel:+263777681186"
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-sunlight text-brand-dark font-medium hover:opacity-90 transition-opacity"
              >
                {t("clinical.cta.call_care_unit")}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                {t("clinical.cta.contact")}
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/our-impact" className="text-slate-300 font-medium hover:text-brand-sunlight transition-colors">
              {t("clinical.cta.back")}
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
