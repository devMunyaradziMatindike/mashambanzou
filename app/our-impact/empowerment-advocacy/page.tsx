import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empowerment & Advocacy | Mashambanzou Care Trust",
  description:
    "Care to Share vocational training, livelihoods and advocacy for human rights and stigma reduction.",
};

export default function EmpowermentAdvocacyPage() {
  return (
    <>
      <Hero
        title="Empowerment, Advocacy & Livelihoods"
        subtitle="Care to Share vocational training, income-generating activities and advocacy—building resilience and opportunity."
        badge="Livelihoods & rights"
        primaryCta="Donate"
        primaryHref="/donate"
        secondaryCta="Contact"
        secondaryHref="/contact"
        backgroundImageSrc="/website/world-aids-day.jpg"
        backgroundImageAlt="World AIDS Day advocacy and community engagement"
      />

      {/* Intro + at a glance */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark mb-4">
              Skills, income and a stronger voice
            </h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              We invest in vocational skills, livelihoods and advocacy—so individuals and families can build stability,
              dignity and opportunity while communities strengthen their protection and rights systems.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Care to Share (TVET)",
                desc: "Six-month vocational training and community internships for youth.",
                icon: "🧰",
              },
              {
                title: "Livelihoods",
                desc: "Income-generating activities that support sustainability and self-reliance.",
                icon: "🌱",
              },
              {
                title: "Advocacy",
                desc: "Stigma reduction, human rights promotion and community accountability.",
                icon: "📣",
              },
              {
                title: "SRHR",
                desc: "Outreach and education that helps communities make informed choices.",
                icon: "🧠",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-brand-dark/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Care to Share */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-100 overflow-hidden shadow-sm relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/website/teaching-girls.jpg"
                alt="Vocational and life-skills learning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">
                Care to Share (youth empowerment)
              </h2>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                In partnership with Young Africa International in Caledonia, we deliver 6-month TVET-based vocational
                training and community mastercrafter internships. Graduates receive Certificates of Competency in trades
                such as carpentry, tailoring and agriculture, supporting sustainable livelihoods.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-brand-dark">Programme highlights</h3>
                <ul className="mt-3 space-y-2 text-brand-dark/80">
                  <li>Six-month market-driven vocational training</li>
                  <li>Hands-on placements with community mastercraft persons</li>
                  <li>Certificate of Competency upon completion</li>
                  <li>Pathways to employability and self-employment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Income generating activities */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">
                Institutional income-generating activities
              </h2>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                In addition to MCT vital healthcare and social services, Mashambanzou Care Trust has successfully
                implemented a range of income-generating activities that empower the communities we serve. These
                activities generate income and foster skills development, entrepreneurship and self-reliance among
                beneficiaries.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Agricultural projects",
                  "Catering and food services",
                  "Skills training and entrepreneurship",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm font-semibold text-brand-dark">{item}</div>
                    <div className="text-xs text-brand-dark/70 mt-1">Building stability through practical income pathways.</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-slate-200 bg-slate-100 overflow-hidden shadow-sm relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/website/poultry-project.jpg"
                alt="Income-generating project supporting livelihoods"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Advocacy + gallery */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark mb-4">Advocacy & SRHR</h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              We advocate for human rights, challenge stigma and promote SRHR through community outreach, media and
              policy engagement—ensuring the voices of those we serve inform our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/website/world-aids-day.jpg",
                alt: "World AIDS Day advocacy",
                caption: "Community awareness and stigma reduction through public events and outreach.",
              },
              {
                src: "/website/img-0037.jpg",
                alt: "Community members holding documents",
                caption: "Linking people to services and documentation through community support.",
              },
              {
                src: "/website/outreach-programme-feature.jpg",
                alt: "Community outreach programme",
                caption: "Advocacy that meets people where they are—listening, informing and responding.",
              },
            ].map((item) => (
              <figure
                key={item.src}
                className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-shadow"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5 text-sm text-brand-dark/75 leading-relaxed">{item.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-3 block">
                Get involved
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-3">
                Support empowerment and rights
              </h3>
              <p className="text-brand-dark/80 text-lg leading-relaxed max-w-2xl">
                Your support helps expand skills training, livelihoods and community advocacy—so people can build stable
                futures and live with dignity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors w-full sm:w-auto"
              >
                Donate
              </Link>
              <Link
                href="/our-identity/board-and-governance"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-green text-brand-dark font-medium hover:bg-brand-green/10 transition-colors w-full sm:w-auto"
              >
                Governance
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-green text-brand-dark font-medium hover:bg-brand-green/10 transition-colors w-full sm:w-auto"
              >
                Contact
              </Link>
            </div>
          </div>

          <p className="text-center mt-10">
            <Link href="/our-impact" className="text-brand-warm font-medium hover:underline">
              ← Back to Our Impact
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  );
}
