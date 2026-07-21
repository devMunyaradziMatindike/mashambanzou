import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Focus Areas | Mashambanzou Care Trust",
  description:
    "Integrated clinical healthcare, community support, child protection and youth empowerment across Harare, Zvimba and Goromonzi.",
};

export const dynamic = "force-dynamic";

function ImpactSection({
  title,
  imageSrc,
  imageAlt,
  images,
  children,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  images?: readonly { src: string; alt: string }[];
  children: React.ReactNode;
}) {
  const list = Array.isArray(images) && images.length ? images : [{ src: imageSrc, alt: imageAlt }];
  return (
    <div className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start">
      <div className="max-w-[320px] mx-auto md:mx-0 shrink-0 w-full">
        {list.length > 1 ? (
          <div className="grid grid-cols-2 gap-3">
            {list.slice(0, 3).map((img, idx) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 ${
                  idx === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-brand-dark/5 to-transparent" />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-[16/10] sm:aspect-[4/3] relative">
            <Image
              src={list[0]?.src ?? imageSrc}
              alt={list[0]?.alt ?? imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div>
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">{title}</h2>
        <div className="text-white/85 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1">
          {children}
        </div>
      </div>
    </div>
  );
}

const incomeGeneratingListIndices = [0, 1, 2] as const;
const childProtectionListIndices = [0, 1, 2, 3] as const;

export default async function OurImpactPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("our_impact.hero.title")}
        subtitle={t("our_impact.hero.subtitle")}
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide space-y-16">
          <ImpactSection
            title={t("our_impact.sections.mcu.title")}
            imageSrc="/review-pics/Mashambanzou Care Trust (blur faces.jpg"
            imageAlt="Clinical care at Mashambanzou Care Unit"
            images={[
              {
                src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                alt: "Mashambanzou Care Trust care and support",
              },
              { src: "/review-pics/mashambanzou care unit.jpg", alt: "Mashambanzou Care Unit exterior" },
              { src: "/review-pics/Mashambanzou Care Unit female ward..jpg", alt: "Mashambanzou Care Unit ward" },
            ]}
          >
            <ContentText
              contentKey="our_impact.sections.mcu.paragraph.0"
              value={t("our_impact.sections.mcu.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.hiv_testing.title")}
            imageSrc="/review-pics/hiv testing.jpg"
            imageAlt="HIV testing and counselling support"
          >
            <ContentText
              contentKey="our_impact.sections.hiv_testing.paragraph.0"
              value={t("our_impact.sections.hiv_testing.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.viac.title")}
            imageSrc="/review-pics/Recording of  VIAC screening results from Camera.jpg"
            imageAlt="VIAC screening results being recorded"
          >
            <ContentText
              contentKey="our_impact.sections.viac.paragraph.0"
              value={t("our_impact.sections.viac.paragraph.0")}
              as="p"
            />
            <ContentText
              contentKey="our_impact.sections.viac.paragraph.1"
              value={t("our_impact.sections.viac.paragraph.1")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.outreach_ois.title")}
            imageSrc="/review-pics/outreach-tablets-handover.jpeg"
            imageAlt="Outreach worker providing medication to a mother and child"
            images={[
              {
                src: "/review-pics/outreach-tablets-handover.jpeg",
                alt: "Outreach worker providing medication to a mother and child",
              },
              {
                src: "/review-pics/outreach-clinic-consultation.jpeg",
                alt: "Outreach clinic consultation and medication distribution",
              },
            ]}
          >
            <ContentText
              contentKey="our_impact.sections.outreach_ois.paragraph.0"
              value={t("our_impact.sections.outreach_ois.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.fcs.title")}
            imageSrc="/review-pics/family-centred-support-teaching.jpeg"
            imageAlt="Community educator teaching schoolgirls during a Family Centred Support outreach"
          >
            <ContentText
              contentKey="our_impact.sections.fcs.paragraph.0"
              value={t("our_impact.sections.fcs.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.srhr.title")}
            imageSrc="/review-pics/srhr-adolescent-support.jpg"
            imageAlt="Young mothers and adolescents receiving support at a community outreach"
          >
            <ContentText
              contentKey="our_impact.sections.srhr.paragraph.0"
              value={t("our_impact.sections.srhr.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.ovc_support.title")}
            imageSrc="/review-pics/ovc support.jpg"
            imageAlt="Support for orphans and vulnerable children"
          >
            <ContentText
              contentKey="our_impact.sections.ovc_support.paragraph.0"
              value={t("our_impact.sections.ovc_support.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.houses_of_safety.title")}
            imageSrc="/review-pics/House of Safety.jpg"
            imageAlt="A House of Safety supporting vulnerable children"
          >
            <ContentText
              contentKey="our_impact.sections.houses_of_safety.paragraph.0"
              value={t("our_impact.sections.houses_of_safety.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.income_generating.title")}
            imageSrc="/review-pics/Institutional Income Generating project.jpg"
            imageAlt="Income generating activities and livelihoods support"
          >
            <ContentText
              contentKey="our_impact.sections.income_generating.paragraph.0"
              value={t("our_impact.sections.income_generating.paragraph.0")}
              as="p"
            />
            <ol>
              {incomeGeneratingListIndices.map((index) => (
                <li key={index}>{t(`our_impact.sections.income_generating.list.${index}`)}</li>
              ))}
            </ol>
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.advocacy.title")}
            imageSrc="/review-pics/advocacy.jpg"
            imageAlt="Community advocacy event"
          >
            <ContentText
              contentKey="our_impact.sections.advocacy.paragraph.0"
              value={t("our_impact.sections.advocacy.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.education_for_life.title")}
            imageSrc="/review-pics/ovc support.jpg"
            imageAlt="Education for Life support in schools"
          >
            <ContentText
              contentKey="our_impact.sections.education_for_life.paragraph.0"
              value={t("our_impact.sections.education_for_life.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.putting_children_first.title")}
            imageSrc="/review-pics/Putting Children First ( blur faces) copy.jpg"
            imageAlt="Putting Children First programme participants"
          >
            <ContentText
              contentKey="our_impact.sections.putting_children_first.paragraph.0"
              value={t("our_impact.sections.putting_children_first.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.care_to_share.title")}
            imageSrc="/review-pics/Care to Share beneficiary during graduation.jpg"
            imageAlt="Skills training and practical work supporting livelihoods"
            images={[
              {
                src: "/review-pics/Care to Share beneficiary during graduation.jpg",
                alt: "Care to Share beneficiary during graduation",
              },
              { src: "/review-pics/caretoshare.jpg", alt: "Care to Share vocational training in action" },
            ]}
          >
            <ContentText
              contentKey="our_impact.sections.care_to_share.paragraph.0"
              value={t("our_impact.sections.care_to_share.paragraph.0")}
              as="p"
            />
          </ImpactSection>

          <ImpactSection
            title={t("our_impact.sections.child_protection.title")}
            imageSrc="/review-pics/child protection.jpg"
            imageAlt="Child protection programme support"
          >
            <ContentText
              contentKey="our_impact.sections.child_protection.paragraph.0"
              value={t("our_impact.sections.child_protection.paragraph.0")}
              as="p"
            />
            <ContentText
              contentKey="our_impact.sections.child_protection.paragraph.1"
              value={t("our_impact.sections.child_protection.paragraph.1")}
              as="p"
            />
            <ContentText
              contentKey="our_impact.sections.child_protection.paragraph.2"
              value={t("our_impact.sections.child_protection.paragraph.2")}
              as="p"
            />
            <ul>
              {childProtectionListIndices.map((index) => (
                <li key={index}>{t(`our_impact.sections.child_protection.list.${index}`)}</li>
              ))}
            </ul>
            <ContentText
              contentKey="our_impact.sections.child_protection.paragraph.3"
              value={t("our_impact.sections.child_protection.paragraph.3")}
              as="p"
            />
          </ImpactSection>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-narrow text-center">
          <p className="text-white/80">
            See also our{" "}
            <Link href="/where-we-work" className="text-brand-sunlight font-medium hover:underline">
              {t("our_impact.footer.link_geographic")}
            </Link>{" "}
            and{" "}
            <Link href="/why-mashambanzou" className="text-brand-sunlight font-medium hover:underline">
              {t("our_impact.footer.link_why")}
            </Link>
            .
          </p>
        </div>
      </PageSection>
    </>
  );
}
