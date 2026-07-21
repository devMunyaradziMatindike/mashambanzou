import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia, imagesFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Orphans and Vulnerable Children (OVC) Support | Mashambanzou Care Trust",
  description:
    "Education for Life, Houses of Safety, OVC support and Putting Children First in Harare and beyond.",
};

export const dynamic = "force-dynamic";

const cardIndices = [0, 1, 2, 3, 4] as const;
const housesIncludeIndices = [0, 1, 2] as const;
const educationTagIndices = [0, 1, 2, 3] as const;
const necdcTagIndices = [0, 1, 2, 3] as const;
const protectionActivityIndices = [0, 1, 2, 3] as const;
const puttingChildrenFirstTagIndices = [0, 1, 2, 3] as const;

export default async function ChildProtectionEducationPage() {
  const [media, content] = await Promise.all([getWebsiteMedia(), getWebsiteContent()]);
  const t = createContentTranslator(content);

  const ndccImages = imagesFromMedia(media, "child-protection.ndcc-gallery", [
    {
      src: "/review-pics/putting children first.jpg",
      alt: "Children supported through Mashambanzou Care Trust programmes",
      label: "NECDC main image",
    },
    {
      src: "/review-pics/ovc support.jpg",
      alt: "Orphans and vulnerable children support",
      label: "OVC support",
    },
    {
      src: "/review-pics/child protection.jpg",
      alt: "Child protection and learning support",
      label: "Child protection",
    },
  ]);

  return (
    <>
      <Hero
        title={t("ovc.hero.title")}
        subtitle={t("ovc.hero.subtitle")}
        primaryCta={t("ovc.hero.primary_cta")}
        primaryHref="/donate"
        secondaryCta={t("ovc.hero.secondary_cta")}
        secondaryHref="/contact"
        backgroundImageSrc="/review-pics/putting children first.jpg"
        backgroundImageAlt="Teaching and mentoring girls"
        mediaKey="child-protection.hero"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t("ovc.houses.title")}</h2>
              <ContentText
                contentKey="ovc.houses.paragraph.0"
                value={t("ovc.houses.paragraph.0")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <ContentText
                contentKey="ovc.houses.paragraph.1"
                value={t("ovc.houses.paragraph.1")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6">
                <h3 className="font-heading text-lg font-semibold text-white">{t("ovc.houses.includes.title")}</h3>
                <ul className="mt-3 space-y-2 text-white/80">
                  {housesIncludeIndices.map((index) => (
                    <li key={index}>{t(`ovc.houses.includes.${index}`)}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "child-protection.houses-of-safety", {
                  src: "/review-pics/House of Safety.jpg",
                  alt: "A family visiting during care",
                }).src}
                alt={imageFromMedia(media, "child-protection.houses-of-safety", {
                  src: "/review-pics/House of Safety.jpg",
                  alt: "A family visiting during care",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">{t("ovc.intro.title")}</h2>
            <ContentText
              contentKey="ovc.intro.body"
              value={t("ovc.intro.body")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cardIndices.map((index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <h3 className="font-heading text-xl font-semibold text-white">{t(`ovc.cards.${index}.title`)}</h3>
                <ContentText
                  contentKey={`ovc.cards.${index}.desc`}
                  value={t(`ovc.cards.${index}.desc`)}
                  as="p"
                  className="mt-2 text-white/75 leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "child-protection.education-feature", {
                  src: "/review-pics/ovc support.jpg",
                  alt: "A child learning practical skills",
                }).src}
                alt={imageFromMedia(media, "child-protection.education-feature", {
                  src: "/review-pics/ovc support.jpg",
                  alt: "A child learning practical skills",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t("ovc.education.title")}</h2>
              <ContentText
                contentKey="ovc.education.paragraph.0"
                value={t("ovc.education.paragraph.0")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <ContentText
                contentKey="ovc.education.paragraph.1"
                value={t("ovc.education.paragraph.1")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {educationTagIndices.map((index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                  >
                    {t(`ovc.education.tags.${index}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-3 shadow-sm shadow-brand-dark/15">
              <div className="grid gap-3">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] bg-white/10">
                  <Image
                    src={ndccImages[0]?.src ?? "/review-pics/putting children first.jpg"}
                    alt={ndccImages[0]?.alt ?? "Children supported through Mashambanzou Care Trust programmes"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-white/10">
                    <Image
                      src={ndccImages[1]?.src ?? "/review-pics/ovc support.jpg"}
                      alt={ndccImages[1]?.alt ?? "Orphans and vulnerable children support"}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-white/10">
                    <Image
                      src={ndccImages[2]?.src ?? "/review-pics/child protection.jpg"}
                      alt={ndccImages[2]?.alt ?? "Child protection and learning support"}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-7 sm:p-10 shadow-sm shadow-brand-dark/15">
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("ovc.necdc.eyebrow")}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t("ovc.necdc.title")}</h2>
              <ContentText
                contentKey="ovc.necdc.body"
                value={t("ovc.necdc.body")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {necdcTagIndices.map((index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                  >
                    {t(`ovc.necdc.tags.${index}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t("ovc.protection.title")}</h2>
              <ContentText
                contentKey="ovc.protection.body"
                value={t("ovc.protection.body")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {protectionActivityIndices.map((index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5">
                    <div className="text-sm font-semibold text-white">
                      {t(`ovc.protection.activities.${index}.title`)}
                    </div>
                    <ContentText
                      contentKey={`ovc.protection.activities.${index}.desc`}
                      value={t(`ovc.protection.activities.${index}.desc`)}
                      as="div"
                      className="text-xs text-white/75 mt-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 shadow-sm shadow-brand-dark/20">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 aspect-[16/10] mb-7">
                  <Image
                    src={imageFromMedia(media, "child-protection.putting-children-first", {
                      src: "/review-pics/Putting Children First ( blur faces) copy.jpg",
                      alt: "Putting Children First programme participants",
                    }).src}
                    alt={imageFromMedia(media, "child-protection.putting-children-first", {
                      src: "/review-pics/Putting Children First ( blur faces) copy.jpg",
                      alt: "Putting Children First programme participants",
                    }).alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-brand-dark/10 to-transparent" />
                </div>
                <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                  {t("ovc.putting_children_first.eyebrow")}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                  {t("ovc.putting_children_first.title")}
                </h3>
                <ContentText
                  contentKey="ovc.putting_children_first.body"
                  value={t("ovc.putting_children_first.body")}
                  as="p"
                  className="text-white/80 leading-relaxed"
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {puttingChildrenFirstTagIndices.map((index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                    >
                      {t(`ovc.putting_children_first.tags.${index}`)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("ovc.get_involved.eyebrow")}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
                {t("ovc.get_involved.title")}
              </h3>
              <ContentText
                contentKey="ovc.get_involved.body"
                value={t("ovc.get_involved.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed max-w-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors w-full sm:w-auto"
              >
                {t("ovc.get_involved.donate")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {t("ovc.get_involved.contact")}
              </Link>
            </div>
          </div>

          <p className="text-center mt-10">
            <Link href="/our-impact" className="text-brand-warm font-medium hover:underline">
              {t("ovc.back")}
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  );
}
