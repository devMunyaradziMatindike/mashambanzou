import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Management | Mashambanzou Care Trust",
  description:
    "Executive Management of Mashambanzou Care Trust—leadership driving our mission every day.",
};

const management = [
  {
    name: "Constance Chigwamba",
    role: "Executive Director",
    bio: "A seasoned Educationist and Trainer Programme Facilitator especially Logframe and IRBM processes. Strategic Planner, Human Resources Practitioner, Public Sector Administrator, Negotiator and Counsellor.",
    photoSrc: "/management/constance-chigwamba.jpg",
  },
  {
    name: "Mercy Muirimi",
    role: "Programmes Manager",
    bio: "A Public Health specialist with vast experience in both Public and Private Institutional nursing with exposure in NHS nursing in the UK. Experienced Supervisor and Coordinator in the nursing profession and HIV programming at council clinic and NGO.",
    photoSrc: "/management/mercy-muirimi.jpg",
  },
  {
    name: "Mercyline Dzinemarira",
    role: "Accountant",
    bio: "A holder of a Masters in Professional Accounting and Corporate Governance. Graduateship of Institute of Chartered Secretaries & Administrators in Zimbabwe (ICAZ) Bachelor of Accountancy Honours degree. Diploma in Business and Accounting Studies (IBAS).",
    photoSrc: "/management/mercyline-dzinemarira.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <Hero
        title="Our Management"
        subtitle="Executive leadership driving our mission every day."
        badge="Leadership"
        primaryCta="Contact us"
        primaryHref="/contact"
        secondaryCta="Board & Governance"
        secondaryHref="/our-identity/board-and-governance"
      />
      <PageSection className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-section text-brand-dark text-center">Leadership team</h2>
          <p className="mt-5 text-brand-dark/80 text-lg leading-relaxed text-center">
            Our management team provides strategic leadership, operational oversight and accountability across programmes,
            finance and service delivery.
          </p>
          <p className="mt-4 text-brand-dark/70 leading-relaxed text-center">
            Looking for governance information? Visit{" "}
            <Link href="/our-identity/board-and-governance" className="link-underline text-brand-dark font-medium">
              Board & Governance
            </Link>
            .
          </p>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {management.map((person) => (
              <article
                key={person.name}
                className="group rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-shadow"
              >
                <div className="relative aspect-[4/5] bg-slate-100">
                  <Image
                    src={person.photoSrc}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={person.role === "Executive Director"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-80" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-800 border border-white/50">
                      {person.role}
                    </div>
                    <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold text-white leading-tight">
                      {person.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-brand-dark/85 leading-relaxed">
                    {person.bio}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-dark text-white text-sm font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/our-identity/board-and-governance"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border-2 border-brand-green text-brand-dark text-sm font-medium hover:bg-brand-green/10 transition-colors"
                    >
                      Governance
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-cream/50">
        <div className="container-wide">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-3 block">
                Partners & donors
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-3">
                Need organisational documents for due diligence?
              </h2>
              <p className="text-brand-dark/80 text-lg leading-relaxed max-w-2xl">
                Visit our Transparency page or contact us for the documents you need.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/transparency"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors w-full sm:w-auto"
              >
                Transparency
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-green text-brand-dark font-medium hover:bg-brand-green/10 transition-colors w-full sm:w-auto"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
