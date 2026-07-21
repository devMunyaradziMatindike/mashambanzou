import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { LatestStories } from "@/components/LatestStories";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";

export const metadata = {
  title: "Latest stories | Mashambanzou Care Trust",
  description: "Latest photos, videos and updates from Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

export default async function LatestStoriesPage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("latest_stories.hero.title")}
        gradientText={t("latest_stories.hero.gradient_text")}
        subtitle={t("latest_stories.hero.subtitle")}
        primaryCta={t("latest_stories.hero.primary_cta")}
        primaryHref="https://paynow.co.zw/mashambanzou"
      />

      <PageSection className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white">
                {t("latest_stories.section.title")}
              </h2>
              <ContentText
                contentKey="latest_stories.section.subtitle"
                value={t("latest_stories.section.subtitle")}
                as="p"
                className="text-white/80 mt-2"
              />
            </div>
          </div>
          <LatestStories />
        </div>
      </PageSection>
    </>
  );
}
