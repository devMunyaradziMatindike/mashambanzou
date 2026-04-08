import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Press | Mashambanzou Care Trust",
  description: "Press releases, news and updates from Mashambanzou Care Trust.",
};

export default function NewsAndPressPage() {
  return (
    <>
      <Hero title="News & Press" subtitle="Latest announcements, press releases and updates." />
      <PageSection className="section-padding">
        <p className="text-brand-dark/80">
          This section will feature press releases, field updates and advocacy statements. Content can be added via your
          CMS or static updates. For success stories and human-interest narratives, visit{" "}
          <Link href="/stories" className="text-brand-warm font-medium hover:underline">
            Stories
          </Link>
          .
        </p>
      </PageSection>
    </>
  );
}
