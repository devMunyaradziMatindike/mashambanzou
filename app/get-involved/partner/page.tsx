import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Mashambanzou Care Trust",
  description: "Corporate and institutional partnerships with Mashambanzou Care Trust.",
};

export default function PartnerPage() {
  return (
    <>
      <Hero
        title="Partner With Us"
        subtitle="Corporate and institutional partnerships for lasting impact."
      />
      <PageSection className="section-padding">
        <p className="text-brand-dark/80">
          We work with institutional donors (e.g. OAK Foundation, CAFOD, Misean Cara, Caritas Australia), government
          departments and corporate partners. Partnership can include funding, in-kind support, employee engagement and
          advocacy. We maintain transparency and reporting standards that meet donor due diligence.
        </p>
        <p className="mt-4">
          <Link href="/contact" className="text-brand-warm font-medium hover:underline">
            Discuss a partnership →
          </Link>
        </p>
      </PageSection>
    </>
  );
}
