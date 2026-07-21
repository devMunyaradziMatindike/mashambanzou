import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia, imagesFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Promotion of Human Rights | Mashambanzou Care Trust",
  description:
    "Care to Share vocational training, livelihoods and advocacy for human rights and stigma reduction.",
};

export const dynamic = "force-dynamic";

const cardIndices = [0, 1, 2, 3] as const;
const careToShareHighlightIndices = [0, 1, 2, 3] as const;
const galleryIndices = [0, 1, 2] as const;

export default async function EmpowermentAdvocacyPage() {
  const [media, content] = await Promise.all([getWebsiteMedia(), getWebsiteContent()]);
  const t = createContentTranslator(content);

  const galleryImages = imagesFromMedia(media, "human-rights.gallery", [
    {
      src: "/review-pics/advocacy.jpg",
      alt: "World AIDS Day advocacy",
      label: t("human_rights.gallery.0.caption"),
    },
    {
      src: "/review-pics/MCT and faith.jpg",
      alt: "Community members holding documents",
      label: t("human_rights.gallery.1.caption"),
    },
    {
      src: "/review-pics/outreach.png",
      alt: "Community outreach programme",
      label: t("human_rights.gallery.2.caption"),
    },
  ]);

  return (
    <>
      <Hero
        title={t("human_rights.hero.title")}
        subtitle={t("human_rights.hero.subtitle")}
        primaryCta={t("human_rights.hero.primary_cta")}
        primaryHref="/donate"
        secondaryCta={t("human_rights.hero.secondary_cta")}
        secondaryHref="/contact"
        backgroundImageSrc="/review-pics/advocacy.jpg"
        backgroundImageAlt="World AIDS Day advocacy and community engagement"
        mediaKey="human-rights.hero"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("human_rights.intro.title")}
            </h2>
            <ContentText
              contentKey="human_rights.intro.body"
              value={t("human_rights.intro.body")}
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
                  {index === 0 ? "🧰" : index === 1 ? "🌱" : index === 2 ? "📣" : "🧠"}
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                  {t(`human_rights.cards.${index}.title`)}
                </h3>
                <ContentText
                  contentKey={`human_rights.cards.${index}.desc`}
                  value={t(`human_rights.cards.${index}.desc`)}
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
                src={imageFromMedia(media, "human-rights.care-to-share", {
                  src: "/review-pics/Care to Share beneficiary during graduation.jpg",
                  alt: "Vocational and life-skills learning",
                }).src}
                alt={imageFromMedia(media, "human-rights.care-to-share", {
                  src: "/review-pics/Care to Share beneficiary during graduation.jpg",
                  alt: "Vocational and life-skills learning",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                {t("human_rights.care_to_share.title")}
              </h2>
              <ContentText
                contentKey="human_rights.care_to_share.body"
                value={t("human_rights.care_to_share.body")}
                as="p"
                className="mt-4 text-white/85 leading-relaxed"
              />
              <div className="mt-6 rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {t("human_rights.care_to_share.highlights.title")}
                </h3>
                <ul className="mt-3 space-y-2 text-white/80">
                  {careToShareHighlightIndices.map((index) => (
                    <li key={index}>{t(`human_rights.care_to_share.highlights.${index}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("human_rights.advocacy.title")}
            </h2>
            <ContentText
              contentKey="human_rights.advocacy.body"
              value={t("human_rights.advocacy.body")}
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
                    contentKey={`human_rights.gallery.${galleryIndices[index]}.caption`}
                    value={t(`human_rights.gallery.${galleryIndices[index]}.caption`)}
                  />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("human_rights.get_involved.eyebrow")}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
                {t("human_rights.get_involved.title")}
              </h3>
              <ContentText
                contentKey="human_rights.get_involved.body"
                value={t("human_rights.get_involved.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed max-w-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors w-full sm:w-auto"
              >
                {t("human_rights.get_involved.donate")}
              </Link>
              <Link
                href="/our-identity/board-and-governance"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {t("human_rights.get_involved.governance")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                {t("human_rights.get_involved.contact")}
              </Link>
            </div>
          </div>

          <p className="text-center mt-10">
            <Link href="/our-impact" className="text-brand-warm font-medium hover:underline">
              {t("human_rights.back")}
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  );
}
