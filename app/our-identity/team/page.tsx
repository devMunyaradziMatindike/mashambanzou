import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Our Management | Mashambanzou Care Trust",
  description:
    "Executive Management of Mashambanzou Care Trust—leadership driving our mission every day.",
};

export const dynamic = "force-dynamic";

const management = [
  {
    name: "Constance Chigwamba",
    role: "Executive Director",
    bio: "A seasoned Educationist and Trainer Programme Facilitator especially Logframe and IRBM processes. Strategic Planner, Human Resources Practitioner, Public Sector Administrator, Negotiator and Counsellor.",
    photoSrc: "/management/director.jpg",
    mediaKey: "management.constance-chigwamba",
  },
  {
    name: "Mercy Muirimi",
    role: "Programmes Manager",
    bio: "A Public Health specialist with vast experience in both Public and Private Institutional nursing with exposure in NHS nursing in the UK. Experienced Supervisor and Coordinator in the nursing profession and HIV programming at council clinic and NGO.",
    photoSrc: "/management/programmes-manager.png",
    mediaKey: "management.mercy-muirimi",
  },
  {
    name: "Mercyline Dzinemarira",
    role: "Operations and Resource Mobilisation Manager",
    bio: "A holder of a Masters in Professional Accounting and Corporate Governance. Graduateship of Institute of Chartered Secretaries & Administrators in Zimbabwe (ICAZ) Bachelor of Accountancy Honours degree. Diploma in Business and Accounting Studies (IBAS).",
    photoSrc: "/management/mercyline-dzinemarira.jpeg",
    mediaKey: "management.mercyline-dzinemarira",
  },
];

export default async function TeamPage() {
  const media = await getWebsiteMedia();

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
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-narrow">
          <h2 className="heading-section text-white text-center">Leadership team</h2>
          <p className="mt-5 text-white/80 text-lg leading-relaxed text-center">
            Our management team provides strategic leadership, operational oversight and accountability across programmes,
            finance and service delivery.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed text-center">
            Looking for governance information? Visit{" "}
            <Link href="/our-identity/board-and-governance" className="link-underline text-white font-medium">
              Board & Governance
            </Link>
            .
          </p>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {management.map((person) => (
              <article
                key={person.name}
                className="group rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="p-6 sm:p-7 text-center border-b border-white/10 bg-brand-dark/10">
                  <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/10 bg-white/10 relative shadow-sm">
                    <Image
                      src={imageFromMedia(media, person.mediaKey, { src: person.photoSrc, alt: person.name }).src}
                      alt={imageFromMedia(media, person.mediaKey, { src: person.photoSrc, alt: person.name }).alt}
                      fill
                      sizes="112px"
                      className="object-cover"
                      priority={person.role === "Executive Director"}
                    />
                  </div>
                  <div className="mt-4 inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs font-semibold border border-white/15">
                    {person.role}
                  </div>
                  <h3 className="mt-3 font-heading text-xl sm:text-2xl font-semibold text-white leading-tight">
                    {person.name}
                  </h3>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-white/85 leading-relaxed">
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
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border-2 border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
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
    </>
  );
}
