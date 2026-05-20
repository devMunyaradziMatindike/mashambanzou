import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Mashambanzou Care Trust",
  description: "Corporate and institutional partnerships with Mashambanzou Care Trust.",
};

const proofPoints = [
  {
    title: "Due diligence ready",
    desc: "Clear governance, safeguarding, and reporting expectations for institutional partners.",
    icon: "✅",
  },
  {
    title: "Flexible partnership models",
    desc: "Funding, in-kind support, technical expertise, and employee engagement opportunities.",
    icon: "🤝",
  },
  {
    title: "Community-led impact",
    desc: "Programmes designed with local needs—delivered across Harare, Zvimba and Goromonzi.",
    icon: "📍",
  },
  {
    title: "Accountability & learning",
    desc: "We track outcomes and share progress so partners can learn and improve with us.",
    icon: "📈",
  },
] as const;

const pathways = [
  {
    title: "Institutional funding",
    desc: "Support healthcare, outreach, child protection and livelihoods through programme grants.",
    bullets: ["Restricted or flexible funding", "Reporting cadence agreed", "Site visits welcomed"],
    icon: "🏛️",
  },
  {
    title: "Corporate CSR partnership",
    desc: "Create a partnership that aligns your CSR goals with practical community needs.",
    bullets: ["Multi-year CSR plans", "Campaign partnerships", "Matched giving options"],
    icon: "🏢",
  },
  {
    title: "In-kind support",
    desc: "Contribute equipment, supplies, or services that strengthen day-to-day delivery.",
    bullets: ["Medical & office equipment", "Transport and logistics", "Pro-bono services"],
    icon: "📦",
  },
  {
    title: "Employee engagement",
    desc: "Mobilise teams for volunteering, events, skills transfer and awareness initiatives.",
    bullets: ["Volunteer days", "Skills-based support", "Awareness & advocacy"],
    icon: "🧑‍🤝‍🧑",
  },
] as const;

const currentPartners = [
  { src: "/partners/little-company-of-mary.png", alt: "Little Company of Mary" },
  { src: "/partners/young-africa-international.jpeg", alt: "Young Africa International" },
] as const;

const pastDonors = [
  { src: "/partners/cafod.png", alt: "CAFOD" },
  { src: "/partners/australian-aid.png", alt: "Australian Aid" },
  { src: "/partners/oak-foundation.png", alt: "OAK Foundation" },
  { src: "/partners/sida.png", alt: "Sida (Sweden)" },
  { src: "/partners/misean-cara.jpg", alt: "Misean Cara" },
] as const;

export default function PartnerPage() {
  return (
    <>
      <Hero
        title="Partner With Us"
        subtitle="Corporate and institutional partnerships for lasting impact—funding, in-kind support, employee engagement and advocacy."
        badge="Partnerships"
        primaryCta="Discuss a partnership"
        primaryHref="/contact"
        secondaryCta="Governance"
        secondaryHref="/our-identity/board-and-governance"
        backgroundImageSrc="/review-pics/outreach.png"
        backgroundImageAlt="Community outreach programme"
      />

      {/* Intro + proof points */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-4 block">
                Why partner with MCT
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                Build lasting impact with a trusted implementation partner
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                We work with institutional donors, government departments and corporate partners to deliver integrated
                healthcare, community outreach, child protection and empowerment programmes. Partnerships are designed
                for clarity, credibility and real-world results.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors w-full sm:w-auto"
                >
                  Start a conversation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="/mct-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Download brochure
                </a>
              </div>

              <p className="mt-6 text-sm text-white/70">
                Prefer email? Use the contact page and we’ll route you to the right team.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {proofPoints.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl" aria-hidden>
                      {p.icon}
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-white/75 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Partnership pathways */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
              Partnership options
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Choose the best way to collaborate
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Whether you’re funding a programme, offering in-kind support, or mobilising teams—our model is designed to
              be practical, accountable and impact-focused.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {pathways.map((card) => (
              <div
                key={card.title}
                className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl" aria-hidden>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-white/75 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-white/80">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 w-2.5 h-2.5 rounded-full bg-brand-sunlight flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="text-brand-warm font-semibold hover:underline">
                    Discuss this option →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Partners & donors */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
              Partners & donors
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Trusted by mission-aligned organisations
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              We’re grateful to partners who strengthen our work across Harare, Zvimba and Goromonzi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">Current partners</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                {currentPartners.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-5 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={260}
                      height={120}
                      className="max-h-14 w-auto object-contain opacity-95"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">Past donors</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                {pastDonors.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-5 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={260}
                      height={120}
                      className="max-h-14 w-auto object-contain opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection className="py-14 sm:py-16 px-4 sm:px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                Next step
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
                Let’s design a partnership that works
              </h2>
              <p className="text-slate-300 leading-relaxed max-w-2xl">
                Tell us your goals and timeline—we’ll suggest the best fit (funding, in-kind, CSR, or employee engagement)
                and share what due diligence information you need.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 hover:border-white/30 transition-colors w-full sm:w-auto"
              >
                Contact us
              </Link>
              <Link
                href="/our-impact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Explore our impact
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
