import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Mashambanzou Care Trust",
  description:
    "The story of Sister Noreen's founding in 1989 and the Kushamba Nzou narrative—washing the elephant—symbolising renewal and strength for AIDS-free, resilient communities.",
};

const values = [
  { name: "Participation", description: "Communities at the centre of what we do", color: "brand-sunlight" },
  { name: "Compassion", description: "Dignity and care in every interaction", color: "brand-green" },
  { name: "Transparency and Accountability", description: "To beneficiaries, donors and partners", color: "brand-sunlight" },
  { name: "Human Dignity", description: "Every person valued and respected", color: "brand-green" },
  { name: "Empowerment", description: "Enabling people and communities to thrive", color: "brand-sunlight" },
];

const highlights = [
  {
    label: "Founded",
    value: "1989",
    description: "Built on compassion, dignity, and community care.",
  },
  {
    label: "Approach",
    value: "Family‑centred support",
    description: "Holistic care for people living with HIV and their families.",
  },
  {
    label: "Where we work",
    value: "Harare & beyond",
    description: "Urban and rural communities across our operational areas.",
  },
  {
    label: "Focus",
    value: "Health • Protection • Rights",
    description: "Comprehensive services that strengthen resilience.",
  },
] as const;

const timeline = [
  {
    year: "1989",
    title: "Founded in Harare",
    description:
      "Mashambanzou Care Trust was established through the vision of Sr. Noreen and dedicated volunteers.",
  },
  {
    year: "1990s–2000s",
    title: "Expanded from outreach to integrated support",
    description:
      "From direct care and counselling to broader family-centred models supporting communities.",
  },
  {
    year: "Today",
    title: "A catalyst for change",
    description:
      "A multifaceted organisation advancing inclusive, resilient communities through comprehensive HIV services and protection work.",
  },
] as const;

export default function OurIdentityPage() {
  return (
    <>
      <Hero
        title="Our Story"
        gradientText="Our identity."
        subtitle="The legacy of Kushamba Nzou—washing the elephant—and our journey toward AIDS-free, resilient and empowered communities."
        badge="Since 1989"
      />

      {/* Overview */}
      <PageSection className="section-padding bg-white">
        <div className="container-narrow">
          <p className="text-brand-dark/90 text-lg leading-relaxed">
            Mashambanzou Care Trust (MCT) is a faith and welfare based, non-governmental organisation that focuses
            mainly on the dissemination of accurate information, care, support for people living with HIV (PLWHIV) and
            prevention of the spread of HIV. MCT recognised the effects of the disease and innovatively created a Family
            Centred Support model.
          </p>
        </div>
      </PageSection>

      {/* At a glance */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark mb-4">At a glance</h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              The essentials partners and communities often want to know first.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-green/20 transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{item.label}</div>
                <div className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-brand-dark">
                  {item.value}
                </div>
                <p className="mt-3 text-brand-dark/75 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Kushamba Nzou – name and symbolism */}
      <PageSection className="section-padding bg-brand-cream/50">
        <div className="container-narrow">
          <div className="rounded-2xl border-2 border-brand-green/30 bg-white p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Mashambanzou Care Trust"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-4">
                  Kushamba Nzou
                </h2>
                <p className="text-brand-dark/90 leading-relaxed">
                  The name Mashambanzou comes from a fusion of two Shona words &ldquo;kushamba&rdquo; (to wash) and
                  &ldquo;nzou&rdquo; (elephant). Together they form a powerful idiom symbolising the dawn of a new day,
                  inspired by the image of elephants going down to the river to wash at first light, a daily act of
                  renewal, strength and cleansing. This symbolism reflects the spirit of Mashambanzou Care Trust (MCT), a
                  beacon of hope and new beginnings for those living with HIV and AIDS.
                </p>
                <div className="mt-6 rounded-2xl border border-brand-sunlight/40 bg-brand-sunlight/10 p-5 sm:p-6">
                  <p className="text-brand-dark/90 leading-relaxed">
                    <span className="font-semibold text-brand-dark">A daily act of renewal</span> — strength, cleansing
                    and a new beginning at first light.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Our founding – Sr. Noreen and 1989 */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark text-center mb-12">
            Our founding
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[3/4] max-w-md mx-auto md:mx-0 relative">
              <Image
                src="/founder.jpg"
                alt="Sr. Noreen (Founder of Mashambanzou Care Trust)"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                priority={false}
              />
            </div>
            <div className="space-y-6 text-brand-dark/90">
              <p className="leading-relaxed">
                Through the Vision of Sr. Noreen and the cooperation of a group of dedicated Volunteers, Mashambanzou
                Care Trust was founded in 1989, in Harare. Sr. Noreen and her co-workers were touched by the plight of
                people living with HIV, subjected as they were, to stigmatisation, rejection and discrimination. Their
                aim was to offer comfort and reassurance to people Living with HIV and their family members, thereby
                enhancing the quality of their lives and when the time would come, enable them to die with dignity and
                the knowledge that they were loved.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Timeline */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark mb-4">Our journey</h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              Key milestones that shaped Mashambanzou Care Trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-slate-200 pl-6 space-y-10">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-sunlight border-4 border-white shadow-sm" />
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="font-heading text-xl font-semibold text-brand-dark">{item.title}</h3>
                      <span className="text-sm font-semibold text-slate-500">{item.year}</span>
                    </div>
                    <p className="mt-3 text-brand-dark/80 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PageSection>

      {/* From outreach to catalyst for change */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-narrow space-y-6 text-brand-dark/90">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">
            From outreach to catalyst for change
          </h2>
          <p className="leading-relaxed">
            What began as a humble outreach to provide emotional and physical support has grown into a dynamic,
            multifaceted organisation that continues to walk alongside the most vulnerable. From helping individuals live
            meaningfully to supporting families and communities in healing and resilience, MCT remains rooted in the
            same values that inspired its founding.
          </p>
          <p className="leading-relaxed">
            Today, Mashambanzou Care Trust stands not only as a care provider but as a catalyst for change—empowering
            lives, restoring dignity and championing the rights of those too often left behind.
          </p>
        </div>
      </PageSection>

      {/* Vision & Mission – two callout cards */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border-2 border-brand-sunlight/40 bg-brand-sunlight/5 p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-brand-sunlight/20 flex items-center justify-center text-2xl mb-6">
                ☀️
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-brand-dark mb-4">Our Vision</h2>
              <p className="text-lg font-medium text-brand-dark">
                AIDS free, resilient and empowered communities.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-brand-green/40 bg-brand-green/5 p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center text-2xl mb-6">
                🌱
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-brand-dark mb-4">Our Mission</h2>
              <p className="text-brand-dark/90">
                To realise healthy, socially inclusive communities, free of AIDS through provision of comprehensive HIV
                services, Orphans Vulnerable Children support services, promotion of Human Rights and community
                strengthening.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Our Values – grid of cards */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.name}
                className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-green/20 transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-full mb-4 ${
                    value.color === "brand-sunlight" ? "bg-brand-sunlight/30" : "bg-brand-green/30"
                  }`}
                  aria-hidden
                />
                <h3 className="font-heading text-lg font-semibold text-brand-dark mb-2">{value.name}</h3>
                <p className="text-brand-dark/80 text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Operational Areas */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark text-center mb-10">
            Operational Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl" aria-hidden>
                  📍
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-dark">Harare Metropolitan</h3>
                  <p className="mt-2 text-brand-dark/80 leading-relaxed">
                    Tafara, Mabvuku, Glen Norah, Highfield, Hopley, Mbare, Dzivarasekwa Main and Dzivarasekwa Extension.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl" aria-hidden>
                  🌿
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-dark">Zvimba Rural District</h3>
                  <p className="mt-2 text-brand-dark/80 leading-relaxed">Wards 24, 25, 26 and 35.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl" aria-hidden>
                  🧭
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-dark">Goromonzi Rural District</h3>
                  <p className="mt-2 text-brand-dark/80 leading-relaxed">Caledonia.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/where-we-work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors"
            >
              See where we work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </PageSection>

      {/* Why us – closing strip with CTA */}
      <PageSection className="section-padding bg-brand-green text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Integrated care, rooted in community
          </h2>
          <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">
            We combine the 30-bed Mashambanzou Care Unit with deep community outreach across Harare Metropolitan and
            beyond—differentiating our integrated, person-centred approach in the region.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/our-impact"
              className="inline-flex items-center px-6 py-3 bg-white text-brand-dark rounded-full font-medium hover:bg-brand-sunlight transition-colors"
            >
              Our Impact
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="/our-identity/team"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
