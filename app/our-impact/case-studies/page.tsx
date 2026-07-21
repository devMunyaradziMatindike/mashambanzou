import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donor Projects | Mashambanzou Care Trust",
  description: "Donor-supported projects including Care to Share and Care for Health at Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

const careToShareFocusIndices = [0, 1, 2, 3] as const;
const careForHealthFocusIndices = [0, 1, 2, 3] as const;

export default async function DonorProjectsPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  const donorProjects = [
    {
      titleKey: "donor_projects.care_to_share.title",
      donorKey: "donor_projects.care_to_share.donor",
      detailDonorKey: "donor_projects.detail.0.donor",
      summaryKey: "donor_projects.care_to_share.summary",
      detailsKey: "donor_projects.care_to_share.details",
      focusPrefix: "donor_projects.care_to_share.focus",
      focusIndices: careToShareFocusIndices,
      imageSrc: "/review-pics/Care to Share beneficiary during graduation.jpg",
      imageAlt: "Care to Share beneficiary during graduation",
    },
    {
      titleKey: "donor_projects.care_for_health.title",
      donorKey: "donor_projects.care_for_health.donor",
      detailDonorKey: "donor_projects.detail.1.donor",
      summaryKey: "donor_projects.care_for_health.summary",
      detailsKey: "donor_projects.care_for_health.details",
      focusPrefix: "donor_projects.care_for_health.focus",
      focusIndices: careForHealthFocusIndices,
      imageSrc: "/review-pics/care-for-health-project-training.png",
      imageAlt: "AHF and Mashambanzou Care Trust teams during health services training",
    },
  ] as const;

  return (
    <>
      <Hero
        title={t("donor_projects.hero.title")}
        gradientText={t("donor_projects.hero.gradient_text")}
        subtitle={t("donor_projects.hero.subtitle")}
        primaryCta={t("donor_projects.hero.primary_cta")}
        primaryHref="https://paynow.co.zw/mashambanzou"
        secondaryCta={t("donor_projects.hero.secondary_cta")}
        secondaryHref="/get-involved/partner"
        backgroundImageSrc="/review-pics/care-for-health-project-training.png"
        backgroundImageAlt="Mashambanzou Care Trust and AHF training session"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
              {t("donor_projects.intro.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              {t("donor_projects.intro.title")}
            </h2>
            <ContentText
              contentKey="donor_projects.intro.body"
              value={t("donor_projects.intro.body")}
              as="p"
              className="text-white/80 text-lg leading-relaxed"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {donorProjects.map((project) => (
              <article
                key={project.titleKey}
                className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
              >
                <div className="relative aspect-[16/10] bg-white/10">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-brand-dark/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex rounded-full bg-brand-sunlight px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
                      {t(project.donorKey)}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t(project.titleKey)}</h3>
                  <ContentText
                    contentKey={project.summaryKey}
                    value={t(project.summaryKey)}
                    as="p"
                    className="mt-4 text-white/80 leading-relaxed"
                  />
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.focusIndices.map((index) => (
                      <span
                        key={index}
                        className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80"
                      >
                        {t(`${project.focusPrefix}.${index}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide space-y-12">
          {donorProjects.map((project, index) => (
            <div key={project.titleKey} className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                  {t(project.detailDonorKey)}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{t(project.titleKey)}</h2>
                <ContentText
                  contentKey={project.detailsKey}
                  value={t(project.detailsKey)}
                  as="p"
                  className="mt-4 text-white/85 leading-relaxed"
                />
              </div>

              <div
                className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3] ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/5 to-transparent" />
              </div>
            </div>
          ))}

          <div className="rounded-[2.5rem] border border-white/10 bg-brand-green p-6 sm:p-10 text-white text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold">{t("donor_projects.closing.title")}</h2>
            <ContentText
              contentKey="donor_projects.closing.body"
              value={t("donor_projects.closing.body")}
              as="p"
              className="mt-3 max-w-3xl mx-auto text-white/85 leading-relaxed"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}
