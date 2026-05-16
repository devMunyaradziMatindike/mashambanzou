import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { LatestStories } from "@/components/LatestStories";
import { SilverJubileeSuccessStory } from "@/components/SilverJubileeSuccessStory";
import { MaryTafaraSuccessStory } from "@/components/MaryTafaraSuccessStory";
import { MbareOutreachSuccessStory } from "@/components/MbareOutreachSuccessStory";
import { CareForHealthSuccessStory } from "@/components/CareForHealthSuccessStory";
import { GenderAnalysisTrainingSuccessStory } from "@/components/GenderAnalysisTrainingSuccessStory";
import { LangelihleMoyoSuccessStory } from "@/components/LangelihleMoyoSuccessStory";
import { CareToShareIndustryExposureSuccessStory } from "@/components/CareToShareIndustryExposureSuccessStory";
import { NyabiraMobileRegistrationSuccessStory } from "@/components/NyabiraMobileRegistrationSuccessStory";
import { OperationalPlanningSuccessStory } from "@/components/OperationalPlanningSuccessStory";
import { SawcTechnicalMeetingSuccessStory } from "@/components/SawcTechnicalMeetingSuccessStory";

export const metadata: Metadata = {
  title: "Success stories | Mashambanzou Care Trust",
  description: "Success stories and field updates from Mashambanzou Care Trust.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <Hero
        title="Success"
        gradientText="stories"
        subtitle="Stories, photos and videos that highlight the change happening across our communities."
        primaryCta="Donate"
        primaryHref="https://paynow.co.zw/mashambanzou"
      />

      <PageSection className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white">Success stories</h2>
              <p className="text-white/80 mt-2">
                Curated milestones and reflections from Mashambanzou Care Trust alongside updates from our community
                feed.
              </p>
            </div>
            <Link
              href="/latest-stories"
              className="inline-flex items-center px-6 py-3 bg-white/10 border-2 border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/15 hover:border-white/30 transition-all"
            >
              View latest stories
            </Link>
          </div>

          <SilverJubileeSuccessStory />

          <div className="mt-12 sm:mt-14">
            <MaryTafaraSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <MbareOutreachSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <CareForHealthSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <GenderAnalysisTrainingSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <LangelihleMoyoSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <CareToShareIndustryExposureSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <NyabiraMobileRegistrationSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <OperationalPlanningSuccessStory />
          </div>

          <div className="mt-12 sm:mt-14">
            <SawcTechnicalMeetingSuccessStory />
          </div>

          <div className="mt-14 mb-10">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-6">More stories</h3>
            <LatestStories />
          </div>
        </div>
      </PageSection>
    </>
  );
}

