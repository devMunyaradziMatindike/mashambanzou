import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mashambanzou Care Trust",
  description: "Privacy policy and data protection for Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

const bodyIndices = [0, 1] as const;

export default async function PrivacyPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero title={t("privacy.hero.title")} subtitle={t("privacy.hero.subtitle")} />
      <PageSection className="section-padding">
        <div className="container-narrow">
          <div className="prose prose-lg font-body text-brand-dark/90">
            {bodyIndices.map((index) => (
              <ContentText
                key={index}
                contentKey={`privacy.body.${index}`}
                value={t(`privacy.body.${index}`)}
                as="p"
                className={index > 0 ? "mt-4" : undefined}
              />
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
