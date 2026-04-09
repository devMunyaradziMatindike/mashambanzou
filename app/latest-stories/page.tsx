import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { LatestStories } from "@/components/LatestStories";

export const metadata = {
  title: "Latest stories | Mashambanzou Care Trust",
  description: "Latest photos, videos and updates from Mashambanzou Care Trust.",
};

export default function LatestStoriesPage() {
  return (
    <>
      <Hero
        title="Latest"
        gradientText="stories"
        subtitle="Photos, videos and short updates posted by the team."
        primaryCta="Donate"
        primaryHref="https://paynow.co.zw/mashambanzou"
      />

      <PageSection className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-brand-dark">Latest posts</h2>
              <p className="text-brand-dark/70 mt-2">
                New posts appear here as soon as they’re published from the admin portal.
              </p>
            </div>
          </div>
          <LatestStories />
        </div>
      </PageSection>
    </>
  );
}

