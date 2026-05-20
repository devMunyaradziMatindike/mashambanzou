import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where We Work | Mashambanzou Care Trust",
  description:
    "Harare Metropolitan, Zvimba and Goromonzi—see our geographic footprint and operational areas.",
};

const regions = [
  {
    name: "Harare Metropolitan",
    subtitle: "High-density communities and outreach corridors",
    imageSrc: "/review-pics/outreach.png",
    imageAlt: "Community outreach programme in Harare",
    areas: ["Tafara", "Mabvuku", "Glen Norah", "Highfield", "Hopley", "Mbare", "Dzivarasekwa Main", "Dzivarasekwa Extension"],
    highlights: ["Outreach clinics", "Family Centred Support", "SRHR education"],
  },
  {
    name: "Zvimba Rural District",
    subtitle: "Peri-urban and rural wards with hard-to-reach outreach",
    imageSrc: "/review-pics/outreach-programme-board-governance.jpeg",
    imageAlt: "Outreach programme in a rural community",
    areas: ["Wards 24", "Wards 25", "Wards 26", "Wards 35"],
    highlights: ["OVC support", "Community mobilisation", "Referrals & follow-up"],
  },
  {
    name: "Goromonzi Rural District",
    subtitle: "Care to Share youth empowerment and community services",
    imageSrc: "/review-pics/Disability inclusion.jpg",
    imageAlt: "Community support and care services",
    areas: ["Caledonia", "Domboshava"],
    highlights: ["Care to Share (TVET)", "Livelihoods support", "Community advocacy"],
  },
] as const;

export default function WhereWeWorkPage() {
  return (
    <>
      <Hero
        title="Where We Work"
        subtitle="Our operational footprint across Harare Metropolitan, Zvimba and Goromonzi."
        backgroundImageSrc="/review-pics/outreach.png"
        backgroundImageAlt="Community outreach programme"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-4 block">
                Geographic footprint
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                Services that meet people where they are
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We operate across Harare Metropolitan, Zvimba and Goromonzi—delivering clinical services, family support,
                child protection and livelihoods programmes through a mix of facility-based care and outreach.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {regions.map((r) => (
                  <span
                    key={r.name}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white"
                  >
                    {r.name}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: "3", label: "District focus areas" },
                  { value: "Multi-ward", label: "Hard-to-reach outreach" },
                  { value: "Integrated", label: "Health + social support" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5">
                    <div className="font-heading text-2xl font-semibold text-white">{s.value}</div>
                    <div className="text-sm text-white/75 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/review-pics/outreach.png"
                alt="Community outreach programme"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-heading text-xl sm:text-2xl font-semibold leading-tight">
                  Outreach and follow-up across communities
                </p>
                <p className="text-white/80 text-sm mt-2">
                  Clinics, counselling, referrals and family-centred support in the places that need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-brand-dark">
                Operational areas
              </h2>
              <p className="text-white/80 mt-2 max-w-2xl">
                Our programmes are tailored to each district’s needs while staying connected through an integrated model of care.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {regions.map((region) => (
              <div key={region.name} className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow">
                <div className="relative aspect-[16/10] bg-white/10">
                  <Image
                    src={region.imageSrc}
                    alt={region.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-heading text-xl font-semibold">{region.name}</div>
                    <div className="text-white/80 text-sm mt-1">{region.subtitle}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mb-3">Areas</div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {region.areas.map((a) => (
                      <span key={a} className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/85">
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mb-3">Focus</div>
                  <ul className="space-y-2 text-sm text-white/80">
                    {region.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 rounded-full bg-brand-sunlight flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-black">
              <video
                controls
                preload="metadata"
                className="w-full h-auto"
                poster="/review-pics/outreach.png"
              >
                <source src="/website/hiv-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10">
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                In the field
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">
                What outreach looks like
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Outreach is where care becomes accessible—bringing HIV services, counselling, referrals and follow-up closer to
                families and individuals in the communities we serve.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="text-sm font-semibold text-white mb-2">Why this matters</div>
                <p className="text-sm text-white/75 leading-relaxed">
                  It reduces barriers to treatment, strengthens trust, and helps ensure continuity of care—especially for people who
                  face cost, distance or stigma challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
