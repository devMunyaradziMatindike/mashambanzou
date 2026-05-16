import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { LatestStories } from "@/components/LatestStories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies | Mashambanzou Care Trust",
  description: "Case studies and stories of impact from Mashambanzou Care Trust.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        title="Our Impact"
        gradientText="Case studies"
        subtitle="Stories, photos and videos that show what change looks like in the community."
        primaryCta="Donate"
        primaryHref="https://paynow.co.zw/mashambanzou"
      />

      <PageSection className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-brand-dark">Case studies</h2>
              <p className="text-brand-dark/70 mt-2">
                This page highlights longer-form stories and field updates. (For now, it shows the same feed as “Latest
                updates”.)
              </p>
            </div>
            <Link
              href="/latest-stories"
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-brand-green text-brand-dark rounded-full text-sm font-semibold hover:bg-brand-green/10 transition-all"
            >
              View latest updates
            </Link>
          </div>

          <LatestStories />
        </div>
      </PageSection>
    </>
  );
}

