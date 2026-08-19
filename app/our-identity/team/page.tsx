import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import { getWebsiteMedia, imageFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Our Management | Mashambanzou Care Trust",
  description:
    "Executive Management of Mashambanzou Care Trust—leadership driving our mission every day.",
};

export const dynamic = "force-dynamic";

const managementMedia = [
  { photoSrc: "/management/director.jpg", mediaKey: "management.constance-chigwamba" },
  { photoSrc: "/management/programmes-manager.png", mediaKey: "management.mercy-muirimi" },
  { photoSrc: "/management/mercyline-dzinemarira.jpeg", mediaKey: "management.mercyline-dzinemarira" },
];

export default async function TeamPage() {
  const [content, media] = await Promise.all([getWebsiteContent(), getWebsiteMedia()]);
  const t = createContentTranslator(content);
  const management = managementMedia.map((m, idx) => ({
    ...m,
    name: t(`team.members.${idx}.name`),
    role: t(`team.members.${idx}.role`),
    bio: t(`team.members.${idx}.bio`),
  }));

  return (
    <>
      <Hero
        title={t("team.hero.title")}
        subtitle={t("team.hero.subtitle")}
        badge={t("team.hero.badge")}
        primaryCta={t("team.hero.primary_cta")}
        primaryHref="/contact"
        secondaryCta={t("team.hero.secondary_cta")}
        secondaryHref="/our-identity/board-and-governance"
      />
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-narrow">
          <h2 className="heading-section text-white text-center">{t("team.leadership.title")}</h2>
          <ContentText
            contentKey="team.leadership.body"
            value={t("team.leadership.body")}
            as="p"
            className="mt-5 text-white/80 text-lg leading-relaxed text-center"
          />
          <ContentText
            contentKey="team.leadership.governance_note"
            value={t("team.leadership.governance_note")}
            as="p"
            className="mt-4 text-white/80 leading-relaxed text-center"
          />
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {management.map((person, idx) => (
              <article
                key={person.mediaKey}
                className="group rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="p-6 sm:p-7 text-center border-b border-white/10 bg-brand-dark/10">
                  <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/10 bg-white/10 relative shadow-sm">
                    <Image
                      src={imageFromMedia(media, person.mediaKey, { src: person.photoSrc, alt: person.name }).src}
                      alt={imageFromMedia(media, person.mediaKey, { src: person.photoSrc, alt: person.name }).alt}
                      fill
                      sizes="112px"
                      className="object-cover"
                      priority={person.role === "Executive Director"}
                    />
                  </div>
                  <div className="mt-4 inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs font-semibold border border-white/15">
                    {person.role}
                  </div>
                  <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold text-white leading-tight">
                    {person.name}
                  </h3>
                </div>

                <div className="p-6 sm:p-7">
                  <ContentText
                    contentKey={`team.members.${idx}.bio`}
                    value={person.bio}
                    as="div"
                    className="text-white/85 leading-relaxed [&_p]:m-0"
                  />
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-dark text-white text-sm font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors"
                    >
                      {t("team.card.contact")}
                    </Link>
                    <Link
                      href="/our-identity/board-and-governance"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border-2 border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      {t("team.card.governance")}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
