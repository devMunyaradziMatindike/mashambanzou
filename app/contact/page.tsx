import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mashambanzou Care Trust",
  description:
    "Contact Mashambanzou Care Trust. Phone, email, address and map. 40 Sandowns Rd, Waterfalls, Harare. Enquiries, donations and partnerships.",
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);
  const address = t("contact.info.address");
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <>
      <Hero title={t("contact.hero.title")} subtitle={t("contact.hero.subtitle")} />

      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-white/15 bg-brand-dark/15 backdrop-blur p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2">
                  {t("contact.quick_help.title")}
                </h2>
                <ContentText
                  contentKey="contact.quick_help.hours"
                  value={t("contact.quick_help.hours")}
                  as="p"
                  className="text-white/80"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+263711492343"
                  className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border-2 border-white/20 text-white font-medium hover:bg-white/15 hover:border-white/30 transition-colors"
                >
                  {t("contact.quick_help.call_projects")}
                </a>
                <a
                  href="tel:+263777681186"
                  className="inline-flex items-center px-5 py-3 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors"
                >
                  {t("contact.quick_help.call_care_unit")}
                </a>
                <Link
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/15 hover:border-white/30 transition-colors"
                >
                  {t("contact.quick_help.maps")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide max-w-5xl">
          <ContentText
            contentKey="contact.intro"
            value={t("contact.intro")}
            as="p"
            className="text-white/80 text-lg mb-12 text-center"
          />

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="rounded-2xl border border-white/15 bg-brand-dark/15 backdrop-blur p-8 sm:p-10">
              <h2 className="font-heading text-xl font-semibold text-white mb-6">{t("contact.info.title")}</h2>
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm font-medium text-white/70 uppercase tracking-wide mb-1">
                    {t("contact.info.phone.label")}
                  </dt>
                  <dd className="text-white">
                    <div className="space-y-1">
                      <div>
                        <span className="text-white/70 text-sm">{t("contact.info.phone.projects_label")}</span>{" "}
                        <a href="tel:+263711492343" className="hover:text-brand-sunlight transition-colors">
                          {t("contact.info.phone.projects")}
                        </a>
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">{t("contact.info.phone.care_unit_label")}</span>{" "}
                        <a href="tel:+263777681186" className="hover:text-brand-sunlight transition-colors">
                          {t("contact.info.phone.care_unit")}
                        </a>
                      </div>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-white/70 uppercase tracking-wide mb-1">
                    {t("contact.info.email.label")}
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${t("contact.info.email")}`}
                      className="text-white hover:text-brand-sunlight transition-colors"
                    >
                      {t("contact.info.email")}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-white/70 uppercase tracking-wide mb-1">
                    {t("contact.info.address.label")}
                  </dt>
                  <dd className="text-white">{address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-white/70 uppercase tracking-wide mb-1">
                    {t("contact.info.hours.label")}
                  </dt>
                  <dd className="text-white">
                    <div className="space-y-1">
                      <div>
                        <span className="text-white/70 text-sm">{t("contact.info.hours.projects_label")}</span>{" "}
                        {t("contact.info.hours.projects")}
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">{t("contact.info.hours.care_unit_label")}</span>{" "}
                        {t("contact.info.hours.care_unit")}
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/15 overflow-hidden bg-white/10 min-h-[280px] sm:min-h-[320px]">
              <iframe
                title="Mashambanzou Care Trust location map"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[280px] sm:min-h-[320px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <p className="text-center">
            <Link
              href={mapsLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
            >
              {t("contact.maps_link")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  );
}
