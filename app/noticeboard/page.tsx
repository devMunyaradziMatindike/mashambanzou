import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import { formatNoticeDate, getNotices } from "@/lib/notices";

export const metadata: Metadata = {
  title: "Noticeboard | Mashambanzou Care Trust",
  description: "Official notices and announcements from Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

export default async function NoticeboardPage() {
  const [content, notices] = await Promise.all([getWebsiteContent(), getNotices()]);
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("noticeboard.hero.title")}
        gradientText={t("noticeboard.hero.gradient_text")}
        subtitle={t("noticeboard.hero.subtitle")}
        primaryCta={t("noticeboard.hero.primary_cta")}
        primaryHref="/contact"
        backgroundImageSrc="/review-pics/noticeboard-hero.jpg"
        backgroundImageAlt="Children at an Education For All community event"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide max-w-4xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("noticeboard.latest.title")}
            </h2>
            <ContentText
              contentKey="noticeboard.latest.subtitle"
              value={t("noticeboard.latest.subtitle")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          {notices.length ? (
            <div className="space-y-8">
              {notices.map((notice, index) => (
                <article
                  key={notice.id}
                  className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
                >
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mb-3">
                      {formatNoticeDate(notice.published_at)}
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{notice.title}</h3>

                    {notice.image_url ? (
                      <figure className="mt-6">
                        <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] bg-white/10">
                          <Image
                            src={notice.image_url}
                            alt={notice.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 896px"
                            priority={index === 0}
                          />
                        </div>
                      </figure>
                    ) : null}

                    {notice.excerpt ? (
                      <p className="mt-6 text-white/85 text-lg leading-relaxed">{notice.excerpt}</p>
                    ) : null}

                    <div className="mt-6 space-y-4 text-white/90 leading-relaxed">
                      {(notice.body || "")
                        .split(/\n{2,}/)
                        .filter(Boolean)
                        .map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <ContentText
              contentKey="noticeboard.empty"
              value={t("noticeboard.empty")}
              as="div"
              className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-8 text-center text-white/85"
            />
          )}

          <p className="mt-10 text-center text-white/70 text-sm">
            {t("noticeboard.footer.intro")}{" "}
            <Link href="/careers" className="text-brand-sunlight font-medium hover:underline">
              {t("noticeboard.footer.careers")}
            </Link>{" "}
            or{" "}
            <Link href="/invitation-to-tenders" className="text-brand-sunlight font-medium hover:underline">
              {t("noticeboard.footer.tenders")}
            </Link>
            .
          </p>
        </div>
      </PageSection>
    </>
  );
}
