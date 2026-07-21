import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional Development | Mashambanzou Care Trust",
  description:
    "Institutional development at Mashambanzou Care Trust: sustainable, visible, effective and efficient service delivery for vulnerable communities.",
};

export const dynamic = "force-dynamic";

const incomeItemIndices = [0, 1, 2, 3] as const;
const priorityIndices = [0, 1, 2, 3] as const;
const galleryIndices = [0, 1, 2, 3] as const;

const galleryImages = [
  {
    src: "/review-pics/MCTR @ 35 celebrations in 2025.jpg",
    alt: "Mashambanzou Care Trust 35th anniversary celebration",
  },
  {
    src: "/review-pics/MCT Management pose for a picture with patients during World AIDS Day cake cutting process.jpg",
    alt: "MCT management with patients during a World AIDS Day activity",
  },
  {
    src: "/review-pics/Institutional Income Generating project.jpg",
    alt: "Institutional income generating project",
  },
  {
    src: "/review-pics/MCT and faith.jpg",
    alt: "Mashambanzou Care Trust faith and community activity",
  },
] as const;

export default async function InstitutionalDevelopmentPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("institutional.hero.title")}
        gradientText={t("institutional.hero.gradient_text")}
        subtitle={t("institutional.hero.subtitle")}
        primaryCta={t("institutional.hero.primary_cta")}
        primaryHref="/get-involved/partner"
        secondaryCta={t("institutional.hero.secondary_cta")}
        secondaryHref="/contact"
        backgroundImageSrc="/review-pics/MCTR @ 35 celebrations in 2025.jpg"
        backgroundImageAlt="Mashambanzou Care Trust 35th anniversary celebration"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("institutional.income.eyebrow")}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                {t("institutional.income.title")}
              </h2>
              <ContentText
                contentKey="institutional.income.body"
                value={t("institutional.income.body")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {incomeItemIndices.map((index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5">
                    <div className="text-sm font-semibold text-white">{t(`institutional.income.items.${index}.title`)}</div>
                    <ContentText
                      contentKey={`institutional.income.items.${index}.desc`}
                      value={t(`institutional.income.items.${index}.desc`)}
                      as="div"
                      className="text-xs text-white/75 mt-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/review-pics/Institutional Income Generating project.jpg"
                alt="Income-generating project supporting institutional sustainability"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-brand-dark/5 to-transparent" />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("institutional.development.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5">
                {t("institutional.development.title")}
              </h2>
              <ContentText
                contentKey="institutional.development.body.0"
                value={t("institutional.development.body.0")}
                as="p"
                className="text-white/85 text-lg leading-relaxed"
              />
              <ContentText
                contentKey="institutional.development.body.1"
                value={t("institutional.development.body.1")}
                as="p"
                className="mt-4 text-white/80 leading-relaxed"
              />
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/review-pics/MCT Management pose for a picture with patients during World AIDS Day cake cutting process.jpg"
                alt="MCT management with patients during World AIDS Day"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorityIndices.map((index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15"
              >
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
                  {t(`institutional.priorities.${index}.title`)}
                </h3>
                <ContentText
                  contentKey={`institutional.priorities.${index}.body`}
                  value={t(`institutional.priorities.${index}.body`)}
                  as="p"
                  className="mt-3 text-white/75 leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("institutional.visibility.title")}
            </h2>
            <ContentText
              contentKey="institutional.visibility.body"
              value={t("institutional.visibility.body")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {galleryIndices.map((index) => (
              <figure
                key={index}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
              >
                <div className="relative aspect-[16/10] bg-white/10">
                  <Image
                    src={galleryImages[index].src}
                    alt={galleryImages[index].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-brand-dark/10 to-transparent" />
                </div>
                <figcaption className="p-5 text-sm text-white/75 leading-relaxed">
                  <ContentText
                    contentKey={`institutional.gallery.${index}.caption`}
                    value={t(`institutional.gallery.${index}.caption`)}
                  />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-brand-green p-6 sm:p-10 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-white/75 font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("institutional.cta.eyebrow")}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-3">{t("institutional.cta.title")}</h3>
              <ContentText
                contentKey="institutional.cta.body"
                value={t("institutional.cta.body")}
                as="p"
                className="text-white/85 max-w-2xl leading-relaxed"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/get-involved/partner"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-brand-green font-semibold hover:bg-white/90 transition-colors w-full sm:w-auto"
              >
                {t("institutional.cta.partner")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {t("institutional.cta.contact")}
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
