import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia, imagesFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Community Strengthening | Mashambanzou Care Trust",
  description:
    "Family Centred Support, psychosocial support for SGBV survivors and SRHR outreach for adolescents.",
};

export const dynamic = "force-dynamic";

const cardIndices = [0, 1, 2, 3] as const;
const fcsIncludeIndices = [0, 1, 2, 3] as const;
const srhrTagIndices = [0, 1, 2, 3] as const;
const galleryIndices = [0, 1, 2] as const;

export default async function CommunitySupportPage() {
  const [media, content] = await Promise.all([getWebsiteMedia(), getWebsiteContent()]);
  const t = createContentTranslator(content);

  const galleryImages = imagesFromMedia(media, "community-support.gallery", [
    {
      src: "/review-pics/MCT and faith.jpg",
      alt: "Community members at a support activity",
      label: t("community.gallery.0.caption"),
    },
    {
      src: "/review-pics/community-strengthening.png",
      alt: "Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach",
      label: t("community.gallery.1.caption"),
    },
    {
      src: "/review-pics/outreach.png",
      alt: "Community support and outreach visit",
      label: t("community.gallery.2.caption"),
    },
  ]);

  return (
    <>
      <Hero
        title={t("community.hero.title")}
        subtitle={t("community.hero.subtitle")}
        primaryCta={t("community.hero.primary_cta")}
        primaryHref="/donate"
        secondaryCta={t("community.hero.secondary_cta")}
        secondaryHref="/contact"
        backgroundImageSrc="/review-pics/community-strengthening.png"
        backgroundImageAlt="Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach"
        mediaKey="community-support.hero"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("community.intro.title")}
            </h2>
            <ContentText
              contentKey="community.intro.body"
              value={t("community.intro.body")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardIndices.map((index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl" aria-hidden>
                  {index === 0 ? "🏠" : index === 1 ? "🤝" : index === 2 ? "🧠" : "📣"}
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                  {t(`community.cards.${index}.title`)}
                </h3>
                <ContentText
                  contentKey={`community.cards.${index}.desc`}
                  value={t(`community.cards.${index}.desc`)}
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
                src={imageFromMedia(media, "community-support.family-feature", {
                  src: "/review-pics/community-strengthening.png",
                  alt: "Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach",
                }).src}
                alt={imageFromMedia(media, "community-support.family-feature", {
                  src: "/review-pics/community-strengthening.png",
                  alt: "Community members supporting a person in a wheelchair at a Mashambanzou Care Trust outreach",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t("community.fcs.title")}</h2>
              <ContentText
                contentKey="community.fcs.paragraph.0"
                value={t("community.fcs.paragraph.0")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <ContentText
                contentKey="community.fcs.paragraph.1"
                value={t("community.fcs.paragraph.1")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6">
                <h3 className="font-heading text-lg font-semibold text-white">{t("community.fcs.includes.title")}</h3>
                <ul className="mt-3 space-y-2 text-white/80">
                  {fcsIncludeIndices.map((index) => (
                    <li key={index}>{t(`community.fcs.includes.${index}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t("community.srhr.title")}</h2>
              <ContentText
                contentKey="community.srhr.paragraph.0"
                value={t("community.srhr.paragraph.0")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <ContentText
                contentKey="community.srhr.paragraph.1"
                value={t("community.srhr.paragraph.1")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {srhrTagIndices.map((index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                  >
                    {t(`community.srhr.tags.${index}`)}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "community-support.srhr-feature", {
                  src: "/review-pics/ovc support.jpg",
                  alt: "Youth session and community education",
                }).src}
                alt={imageFromMedia(media, "community-support.srhr-feature", {
                  src: "/review-pics/ovc support.jpg",
                  alt: "Youth session and community education",
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("community.advocacy.title")}
            </h2>
            <ContentText
              contentKey="community.advocacy.body"
              value={t("community.advocacy.body")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <figure
                key={item.src}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-white/10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5 text-sm text-white/75 leading-relaxed">
                  <ContentText
                    contentKey={`community.gallery.${galleryIndices[index]}.caption`}
                    value={t(`community.gallery.${galleryIndices[index]}.caption`)}
                  />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("community.get_involved.eyebrow")}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
                {t("community.get_involved.title")}
              </h3>
              <ContentText
                contentKey="community.get_involved.body"
                value={t("community.get_involved.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed max-w-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors w-full sm:w-auto"
              >
                {t("community.get_involved.donate")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {t("community.get_involved.contact")}
              </Link>
            </div>
          </div>

          <p className="text-center mt-10">
            <Link href="/our-impact" className="text-brand-warm font-medium hover:underline">
              {t("community.back")}
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  );
}
