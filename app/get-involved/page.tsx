import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Mashambanzou Care Trust",
  description:
    "Donate, volunteer, partner with us or host an event—support AIDS-free, resilient communities.",
};

export const dynamic = "force-dynamic";

const actionIndices = [0, 1] as const;
const actionHrefs = ["https://paynow.co.zw/mashambanzou", "/get-involved/partner"] as const;

export default async function GetInvolvedPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero title={t("get_involved.hero.title")} subtitle={t("get_involved.hero.subtitle")} />
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {actionIndices.map((index) => (
              <Link
                key={actionHrefs[index]}
                href={actionHrefs[index]}
                className="block p-7 sm:p-8 rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 hover:border-white/20 transition-all"
              >
                <h2 className="font-heading text-xl font-semibold text-white hover:text-brand-warm transition-colors">
                  {t(`get_involved.actions.${index}.title`)}
                </h2>
                <ContentText
                  contentKey={`get_involved.actions.${index}.summary`}
                  value={t(`get_involved.actions.${index}.summary`)}
                  as="p"
                  className="mt-2 text-white/80"
                />
                <span className="mt-3 inline-flex items-center text-brand-warm font-medium">
                  {t(`get_involved.actions.${index}.link`)}
                  <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
