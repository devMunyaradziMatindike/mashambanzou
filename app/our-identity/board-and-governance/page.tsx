import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import type { Metadata } from "next";
import Image from "next/image";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import { getWebsiteMedia, imageFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Board & Governance | Mashambanzou Care Trust",
  description: "Board of Trustees and governance structure of Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

const trustees = [
  { name: "Ms Regai Thandiwe Hove", role: "Chairperson (Legal)", photoSrc: "/hove.jpeg", mediaKey: "board.member.regai-hove" },
  { name: "Mr John G. Sampson", role: "Vice Chairperson, Trustee (Finance)", photoSrc: "/simson.jpeg", mediaKey: "board.member.john-sampson" },
  {
    name: "Sr Silindiwe Shamu",
    role: "LCM Founding member Representative",
    photoSrc: "/board/sister-silindiwe-shamu.png",
    mediaKey: "board.member.silindiwe-shamu",
  },
  { name: "Ms Abi Belaye Kebra", role: "Trustee (Programming)", photoSrc: "/belaye.png", mediaKey: "board.member.abi-belaye" },
  { name: "Dr. Clemence Duri", role: "Trustee (Medical)", photoSrc: "/duri.jpeg", mediaKey: "board.member.clemence-duri" },
  { name: "Mrs Flavia Muyambo", role: "Trustee (Human Resources)", photoSrc: "/board/mrs-flavia-muyambo.png", mediaKey: "board.member.flavia-muyambo" },
];

const governancePillarIndices = [0, 1, 2, 3] as const;
const highlightIndices = [0, 1, 2, 3] as const;
const slideshowIndices = [0, 1, 2] as const;

const slideshowDefaults = [
  { src: "/review-pics/house-of-safety-board-governance.jpg", alt: "House of Safety facility" },
  { src: "/review-pics/disability-inclusion-board-governance.jpg", alt: "Disability inclusion facility" },
  { src: "/review-pics/outreach-programme-board-governance.jpeg", alt: "Community outreach programme support" },
] as const;

function initials(name: string) {
  const parts = name
    .replace(/[().,]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  const letters = parts
    .filter((p) => !/^ms$/i.test(p) && !/^mr$/i.test(p) && !/^mrs$/i.test(p) && !/^sr$/i.test(p))
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return letters || "MCT";
}

export default async function BoardAndGovernancePage() {
  const [content, media] = await Promise.all([getWebsiteContent(), getWebsiteMedia()]);
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("board.hero.title")}
        gradientText={t("board.hero.gradient_text")}
        badge={t("board.hero.badge")}
        subtitle={t("board.hero.subtitle")}
        primaryCta={t("board.hero.primary_cta")}
        primaryHref="https://paynow.co.zw/mashambanzou"
        secondaryCta={t("board.hero.secondary_cta")}
        secondaryHref="/latest-stories"
        backgroundImages={slideshowIndices.map((index) => ({
          src: slideshowDefaults[index].src,
          alt: slideshowDefaults[index].alt,
          label: t(`board.hero.slideshow.${index}.label`),
        }))}
        mediaSectionKey="board.hero.slideshow"
      />

      {/* Trustees */}
      <PageSection className="py-16 sm:py-20 bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div className="max-w-2xl">
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("board.trustees.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                {t("board.trustees.title")}
              </h2>
              <ContentText
                contentKey="board.trustees.body"
                value={t("board.trustees.body")}
                as="p"
                className="text-white/80 mt-3"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trustees.map((trustee) => (
              <article
                key={trustee.name}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="p-6 sm:p-7 text-center">
                  <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/10 bg-white/10 relative shadow-sm">
                    {"photoSrc" in trustee && trustee.photoSrc ? (
                      <Image
                        src={imageFromMedia(media, trustee.mediaKey, { src: trustee.photoSrc, alt: trustee.name }).src}
                        alt={imageFromMedia(media, trustee.mediaKey, { src: trustee.photoSrc, alt: trustee.name }).alt}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/20">
                        <span className="font-heading font-semibold text-white text-xl">{initials(trustee.name)}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mt-5">{trustee.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mt-2">{trustee.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Governance overview */}
      <PageSection className="py-16 sm:py-20 bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
                {t("board.governance.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                {t("board.governance.title")}
              </h2>
              <ContentText
                contentKey="board.governance.body"
                value={t("board.governance.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed mt-4 max-w-2xl"
              />

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {governancePillarIndices.map((index) => (
                  <div key={index} className="rounded-3xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5">
                    <div className="text-sm font-semibold text-white">
                      {t(`board.governance.pillars.${index}.title`)}
                    </div>
                    <ContentText
                      contentKey={`board.governance.pillars.${index}.body`}
                      value={t(`board.governance.pillars.${index}.body`)}
                      as="div"
                      className="text-sm text-white/75 mt-1 leading-relaxed"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-brand-dark/20 backdrop-blur shadow-sm shadow-brand-dark/20 overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight">
                    {t("board.highlights.eyebrow")}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white mt-2">
                    {t("board.highlights.title")}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 grid grid-cols-2 gap-4 bg-brand-dark/10">
                  {highlightIndices.map((index) => (
                    <div key={index} className="rounded-3xl border border-white/10 bg-white/10 p-4">
                      <div className="text-xs text-white/70 font-semibold uppercase tracking-wide">
                        {t(`board.highlights.${index}.label`)}
                      </div>
                      <div className="text-lg font-heading font-semibold text-white mt-1">
                        {t(`board.highlights.${index}.value`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={imageFromMedia(media, "board.governance.image", {
                      src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                      alt: "Mashambanzou Care Trust programme activity",
                    }).src}
                    alt={imageFromMedia(media, "board.governance.image", {
                      src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                      alt: "Mashambanzou Care Trust programme activity",
                    }).alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-brand-dark/5 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-white">{t("board.image.title")}</div>
                  <ContentText
                    contentKey="board.image.body"
                    value={t("board.image.body")}
                    as="div"
                    className="text-sm text-white/75 mt-1 leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
