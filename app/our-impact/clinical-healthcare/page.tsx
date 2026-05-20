import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Clinical Healthcare (MCU) | Mashambanzou Care Trust",
  description:
    "30-bed Mashambanzou Care Unit, palliative care, HIV testing, opportunistic infection treatment and VIAC cervical cancer screening in Harare.",
};

export const dynamic = "force-dynamic";

export default async function ClinicalHealthcarePage() {
  const media = await getWebsiteMedia();

  return (
    <>
      <Hero
        title="Integrated Health Service Delivery"
        subtitle="The 30-bed Mashambanzou Care Unit and outreach services—palliative care, HIV care and VIAC screening."
        backgroundImageSrc="/review-pics/mashambanzou care unit.jpg"
        backgroundImageAlt="Clinical care services at Mashambanzou Care Unit"
        mediaKey="clinical-healthcare.hero"
      />

      {/* Quick stats */}
      <PageSection className="py-10 sm:py-12 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { value: "30", label: "Bed Care Unit (MCU)" },
            { value: "2023", label: "VIAC service added" },
            { value: "Integrated", label: "Clinical + outreach model" },
            { value: "Multi-site", label: "Harare, Zvimba & Goromonzi" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5 sm:p-6">
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-white">{s.value}</div>
              <div className="text-xs sm:text-sm font-medium text-white/75 uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* MCU feature */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                Mashambanzou Care Unit (MCU)
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5">
                A safe haven for comprehensive HIV care
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                MCU is a 30 bedded unit caring for patients from marginalised communities who are living with HIV. The
                Care Unit provides a safe haven for those who are not able to afford health care services at public
                health institutions, as they receive services courtesy of MCT funding partners.
              </p>
              <div className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6">
                <div className="text-sm font-semibold text-white mb-4">Core clinical services</div>
                <ul className="space-y-3 text-white/80">
                  {[
                    "Treatment of opportunistic infections",
                    "Palliative care and supportive care",
                    "TB blood tests and diagnostics support",
                    "VIAC cervical cancer screening",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-2.5 h-2.5 rounded-full bg-brand-sunlight flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "clinical-healthcare.mcu-feature", {
                  src: "/review-pics/mashambanzou care unit.jpg",
                  alt: "Clinical care services at Mashambanzou Care Unit",
                }).src}
                alt={imageFromMedia(media, "clinical-healthcare.mcu-feature", {
                  src: "/review-pics/mashambanzou care unit.jpg",
                  alt: "Clinical care services at Mashambanzou Care Unit",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-heading text-xl sm:text-2xl font-semibold leading-tight">
                  Compassion-led inpatient and outpatient care
                </p>
                <p className="text-white/80 text-sm mt-2">
                  Clinical excellence supported by follow-up, counselling and referrals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service cards */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Services we deliver
              </h2>
              <p className="text-white/80 mt-2 max-w-2xl">
                A continuum of care—from prevention and early diagnosis to treatment, screening and community follow-up.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "HIV Testing & Counselling",
                icon: "🧪",
                copy:
                  "Early diagnosis and linkage to care are vital. We provide testing and counselling to help individuals protect their health and their partners.",
                bullets: ["Testing & counselling", "Linkage to treatment", "Supportive follow-up"],
              },
              {
                title: "VIAC Screening",
                icon: "🩺",
                copy:
                  "Since April 26, 2023, we offer VIAC (Visual Inspection with Acetic Acid and Cervicography) free of charge at MCU and through outreach programmes.",
                bullets: ["Free screening", "Available at MCU", "Outreach delivery"],
              },
              {
                title: "AHF Pop-up Clinics",
                icon: "📍",
                copy:
                  "With AHF funding, we increase demand and uptake of HIV, TB and Hep C services through pop-up clinics and hotspot outreaches.",
                bullets: ["Hotspot pop-ups", "Screening & treatment", "STI & OI care"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-7 sm:p-8 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl mb-5">
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-5">{card.copy}</p>
                <ul className="space-y-2 text-sm text-white/75">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 rounded-full bg-brand-sunlight flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Outreach feature */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "clinical-healthcare.outreach-feature", {
                  src: "/review-pics/outreach.png",
                  alt: "Outreach clinic providing health services in the community",
                }).src}
                alt={imageFromMedia(media, "clinical-healthcare.outreach-feature", {
                  src: "/review-pics/outreach.png",
                  alt: "Outreach clinic providing health services in the community",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                Outreach clinics
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5">
                Bringing services closer to communities
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                We operate outreach clinics as part of our Family Centred Support project to deliver comprehensive care
                and support services to individuals and communities affected by HIV and AIDS.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Mbare",
                  "Glen Norah",
                  "Highfield",
                  "Dzivarasekwa",
                  "Dzivarasekwa Extension",
                  "Hopley",
                  "Mabvuku",
                  "Tafara",
                ].map((place) => (
                  <span
                    key={place}
                    className="inline-flex items-center px-3.5 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                  >
                    {place}
                  </span>
                ))}
              </div>
              <p className="text-white/75 text-sm mt-6">
                Also serving hard-to-reach wards in Zvimba (24, 25, 26, 35) and parts of Goromonzi (Caledonia and
                Domboshava).
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection className="py-14 sm:py-16 px-4 sm:px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-2">
                Need support or referral?
              </h2>
              <p className="text-slate-300">
                Contact our Projects team or the Mashambanzou Care Unit for help and guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+263711492343"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 hover:border-white/30 transition-colors"
              >
                Call Projects
              </a>
              <a
                href="tel:+263777681186"
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-sunlight text-brand-dark font-medium hover:opacity-90 transition-opacity"
              >
                Call Care Unit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact details
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/our-impact" className="text-slate-300 font-medium hover:text-brand-sunlight transition-colors">
              ← Back to Our Impact
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
