import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Mashambanzou Care Trust",
  description:
    "Donate, volunteer, partner with us or host an event—support AIDS-free, resilient communities.",
};

const actions = [
  {
    title: "Donate",
    href: "https://paynow.co.zw/mashambanzou",
    summary: "Give once or monthly. PayNow, PayPal and international options available.",
  },
  {
    title: "Partner With Us",
    href: "/get-involved/partner",
    summary: "Corporate and institutional partnerships for lasting impact.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Hero
        title="Get Involved"
        subtitle="Donate, volunteer, partner or host an event—your support helps realise AIDS-free, resilient and empowered communities."
      />
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="block p-7 sm:p-8 rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 hover:border-white/20 transition-all"
            >
              <h2 className="font-heading text-xl font-semibold text-white hover:text-brand-warm transition-colors">
                {action.title}
              </h2>
              <p className="mt-2 text-white/80">{action.summary}</p>
              <span className="mt-3 inline-flex items-center text-brand-warm font-medium">
                Learn more
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
