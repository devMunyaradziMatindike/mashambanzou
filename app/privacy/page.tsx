import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mashambanzou Care Trust",
  description: "Privacy policy and data protection for Mashambanzou Care Trust.",
};

export default function PrivacyPage() {
  return (
    <>
      <Hero title="Privacy Policy" subtitle="How we collect, use and protect your information." />
      <PageSection className="section-padding">
        <div className="container-narrow">
          <div className="prose prose-lg font-body text-brand-dark/90">
          <p>
            Mashambanzou Care Trust is committed to protecting your privacy. Given the sensitivity of medical and
            survivor data (including HIV status and SGBV), we apply robust data protection protocols. Contact form
            submissions and donation data are handled in line with our internal policies and applicable law.
          </p>
          <p className="mt-4">
            A full Privacy Policy document—compliant with international data protection standards—will be published here
            once approved. The site uses SSL encryption and secure, role-based access for any backend administration.
          </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
