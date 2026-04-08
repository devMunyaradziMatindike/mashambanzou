import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board & Governance | Mashambanzou Care Trust",
  description: "Board of Trustees and governance structure of Mashambanzou Care Trust.",
};

const trustees = [
  { name: "Ms Regai Thandiwe Hove", role: "Chairperson (Legal)" },
  { name: "Mr John G. Sampson", role: "Vice Chairperson, Trustee (Finance)" },
  { name: "Sr Silindiwe Shamu", role: "LCM Founding member Representative" },
  { name: "Ms Abi Kebra Belaya", role: "Trustee (Programming)" },
  { name: "Mr Clemence Duri", role: "Trustee (Medical)" },
  { name: "Mrs Flavia Muyambo", role: "Trustee (Human Resources)" },
];

export default function BoardAndGovernancePage() {
  return (
    <>
      <Hero
        title="Board & Governance"
        subtitle="Board of Trustees and governance that guide our strategy and accountability."
      />
      <PageSection className="section-padding bg-white">
        <div className="container-narrow">
          <p className="text-brand-dark/80 mb-12">
            The Board of Trustees oversees the strategic direction and governance of Mashambanzou Care Trust.
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-8">
            Board of Trustees
          </h2>
          <div className="space-y-10">
            {trustees.map((trustee) => (
              <div
                key={trustee.name}
                className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 items-start"
              >
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[3/4] max-w-[220px] mx-auto md:mx-0 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium text-center px-4">
                    Photo to be added
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-brand-dark mb-1">
                    {trustee.name}
                  </h3>
                  <p className="text-brand-sunlight font-semibold uppercase tracking-wide text-sm">
                    {trustee.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-brand-dark/80">
            For detailed governance documents, audited financial statements and strategic plans, see our{" "}
            <Link href="/transparency" className="text-brand-sunlight font-medium hover:underline">
              Transparency & Governance
            </Link>{" "}
            section.
          </p>
        </div>
      </PageSection>
    </>
  );
}
