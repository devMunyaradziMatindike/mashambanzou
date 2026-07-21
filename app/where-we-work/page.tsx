import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where We Work | Mashambanzou Care Trust",
  description:
    "Harare Metropolitan, Zvimba and Goromonzi—see our geographic footprint and operational areas.",
};

export const dynamic = "force-dynamic";

const regionChipIndices = [0, 1, 2] as const;
const statIndices = [0, 1, 2] as const;
const regionKeys = ["harare", "zvimba", "goromonzi"] as const;
const regionImages = {
  harare: {
    imageSrc: "/review-pics/outreach.png",
    imageAlt: "Community outreach programme in Harare",
  },
  zvimba: {
    imageSrc: "/review-pics/outreach-programme-board-governance.jpeg",
    imageAlt: "Outreach programme in a rural community",
  },
  goromonzi: {
    imageSrc: "/review-pics/Disability inclusion.jpg",
    imageAlt: "Community support and care services",
  },
} as const;
const regionAreaCounts = { harare: 8, zvimba: 4, goromonzi: 2 } as const;
const regionHighlightCounts = { harare: 3, zvimba: 3, goromonzi: 3 } as const;

export default async function WhereWeWorkPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("where_we_work.hero.title")}
        subtitle={t("where_we_work.hero.subtitle")}
        backgroundImageSrc="/review-pics/where-we-work-community.png"
        backgroundImageAlt="Community members at a Mashambanzou Care Trust outreach programme"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("where_we_work.footprint.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                {t("where_we_work.footprint.title")}
              </h2>
              <ContentText
                contentKey="where_we_work.footprint.body"
                value={t("where_we_work.footprint.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed mb-8"
              />

              <div className="flex flex-wrap gap-2.5 mb-10">
                {regionChipIndices.map((index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white"
                  >
                    {t(`where_we_work.regions.${index}.name`)}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {statIndices.map((index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5">
                    <div className="font-heading text-2xl font-semibold text-white">
                      {t(`where_we_work.stats.${index}.value`)}
                    </div>
                    <div className="text-sm text-white/75 mt-1">{t(`where_we_work.stats.${index}.label`)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/review-pics/where-we-work-community.png"
                alt="Community members at a Mashambanzou Care Trust outreach programme"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-heading text-xl sm:text-2xl font-semibold leading-tight">
                  {t("where_we_work.image.title")}
                </p>
                <ContentText
                  contentKey="where_we_work.image.subtitle"
                  value={t("where_we_work.image.subtitle")}
                  as="p"
                  className="text-white/80 text-sm mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-brand-dark">
                {t("where_we_work.operational.title")}
              </h2>
              <ContentText
                contentKey="where_we_work.operational.subtitle"
                value={t("where_we_work.operational.subtitle")}
                as="p"
                className="text-white/80 mt-2 max-w-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {regionKeys.map((key) => (
              <div
                key={key}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="relative aspect-[16/10] bg-white/10">
                  <Image
                    src={regionImages[key].imageSrc}
                    alt={regionImages[key].imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-heading text-xl font-semibold">
                      {t(`where_we_work.regions.${key}.name`)}
                    </div>
                    <ContentText
                      contentKey={`where_we_work.regions.${key}.subtitle`}
                      value={t(`where_we_work.regions.${key}.subtitle`)}
                      as="p"
                      className="text-white/80 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mb-3">
                    {t(`where_we_work.regions.${key}.areas_label`)}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {Array.from({ length: regionAreaCounts[key] }, (_, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/85"
                      >
                        {t(`where_we_work.regions.${key}.areas.${areaIndex}`)}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mb-3">
                    {t(`where_we_work.regions.${key}.focus_label`)}
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    {Array.from({ length: regionHighlightCounts[key] }, (_, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 rounded-full bg-brand-sunlight flex-shrink-0" />
                        <span>{t(`where_we_work.regions.${key}.highlights.${highlightIndex}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-black">
              <video controls preload="metadata" className="w-full h-auto" poster="/review-pics/outreach.png">
                <source src="/website/hiv-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10">
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("where_we_work.field.eyebrow")}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">
                {t("where_we_work.field.title")}
              </h2>
              <ContentText
                contentKey="where_we_work.field.body"
                value={t("where_we_work.field.body")}
                as="p"
                className="text-white/80 leading-relaxed mb-6"
              />
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="text-sm font-semibold text-white mb-2">{t("where_we_work.field.why.title")}</div>
                <ContentText
                  contentKey="where_we_work.field.why.body"
                  value={t("where_we_work.field.why.body")}
                  as="p"
                  className="text-sm text-white/75 leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
