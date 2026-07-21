import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import { formatDeadline, getTenders } from "@/lib/careers-tenders";

export const metadata: Metadata = {
  title: "Invitation to Tenders | Mashambanzou Care Trust",
  description: "Download tender documents and procurement invitations from Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

export default async function InvitationToTendersPage() {
  const [content, tenders] = await Promise.all([getWebsiteContent(), getTenders()]);
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("tenders.hero.title")}
        gradientText={t("tenders.hero.gradient_text")}
        subtitle={t("tenders.hero.subtitle")}
        primaryCta={t("tenders.hero.primary_cta")}
        primaryHref="/contact"
        backgroundImageSrc="/review-pics/operational-plan-review-2026.png"
        backgroundImageAlt="Mashambanzou Care Trust planning and procurement"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide max-w-4xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("tenders.documents.title")}
            </h2>
            <ContentText
              contentKey="tenders.documents.subtitle"
              value={t("tenders.documents.subtitle")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          {tenders.length ? (
            <div className="space-y-4">
              {tenders.map((tender) => (
                <article
                  key={tender.id}
                  className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-8 shadow-sm shadow-brand-dark/15"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex rounded-full bg-brand-sunlight px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
                          {tender.is_expired ? t("tenders.status.closed") : t("tenders.status.open")}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">{tender.title}</h3>
                      <p className="mt-2 text-sm text-white/75">{tender.file_size_label}</p>
                      <p className="mt-1 text-sm text-white/75">{tender.uploaded_label}</p>
                      <p className="mt-3 text-sm text-white/85">
                        {t("tenders.deadline_prefix")} {formatDeadline(tender.application_deadline)}
                      </p>
                    </div>
                    {tender.file_url ? (
                      <a
                        href={tender.file_url}
                        download={tender.original_filename ?? true}
                        className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green/90 transition-colors shrink-0"
                      >
                        {t("tenders.download")}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <ContentText
              contentKey="tenders.empty"
              value={t("tenders.empty")}
              as="p"
              className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-8 text-center text-white/85"
            />
          )}

          <p className="mt-10 text-center text-white/70 text-sm">
            {t("tenders.footer.question")}{" "}
            <Link href="/contact" className="text-brand-sunlight font-medium hover:underline">
              {t("tenders.footer.contact")}
            </Link>
            .
          </p>
        </div>
      </PageSection>
    </>
  );
}
