import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Board & Governance | Mashambanzou Care Trust",
  description: "Board of Trustees and governance structure of Mashambanzou Care Trust.",
};

const trustees = [
  { name: "Ms Regai Thandiwe Hove", role: "Chairperson (Legal)", photoSrc: "/hove.jpeg" },
  { name: "Mr John G. Sampson", role: "Vice Chairperson, Trustee (Finance)", photoSrc: "/simson.jpeg" },
  { name: "Sr Silindiwe Shamu", role: "LCM Founding member Representative" },
  { name: "Ms Abi Kebra Belaya", role: "Trustee (Programming)", photoSrc: "/belaye.png" },
  { name: "Mr Clemence Duri", role: "Trustee (Medical)", photoSrc: "/duri.jpeg" },
  { name: "Mrs Flavia Muyambo", role: "Trustee (Human Resources)" },
];

function initials(name: string) {
  const parts = name
    .replace(/[().,]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  const letters = parts
    .filter((p) => !/^ms$/i.test(p) && !/^mr$/i.test(p) && !/^mrs$/i.test(p) && !/^sr$/i.test(p))
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return letters || "MCT";
}

export default function BoardAndGovernancePage() {
  return (
    <>
      <Hero
        title="Board & Governance"
        gradientText="Accountability"
        badge="Transparency & Oversight"
        subtitle="Independent oversight, responsible stewardship and clear decision-making that guide our strategy, compliance and safeguarding."
        primaryCta="Donate"
        primaryHref="https://paynow.co.zw/mashambanzou"
        secondaryCta="Latest stories"
        secondaryHref="/latest-stories"
        backgroundImageSrc="/website/outreach-programme-feature.jpg"
        backgroundImageAlt="Community outreach programme"
      />

      {/* Trustees */}
      <PageSection className="py-16 sm:py-20 bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div className="max-w-2xl">
              <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-3 block">
                Board of Trustees
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark">Meet the board</h2>
              <p className="text-brand-dark/70 mt-3">
                Trustees bring oversight across legal, finance, medical, programming and organisational leadership.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trustees.map((trustee) => (
              <article
                key={trustee.name}
                className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-6 sm:p-7 text-center">
                  <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-slate-200 bg-slate-100 relative shadow-sm">
                    {"photoSrc" in trustee && trustee.photoSrc ? (
                      <Image
                        src={trustee.photoSrc}
                        alt={trustee.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-cream/70 via-white to-white">
                        <span className="font-heading font-semibold text-brand-green text-xl">{initials(trustee.name)}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-brand-dark mt-5">{trustee.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mt-2">{trustee.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Governance overview */}
      <PageSection className="py-16 sm:py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-3 block">
                How we govern
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark">
                Clear oversight. Strong safeguards. Responsible stewardship.
              </h2>
              <p className="text-brand-dark/80 text-lg leading-relaxed mt-4 max-w-2xl">
                Our Board of Trustees provides strategic direction and governance, ensuring accountability, compliance and
                safeguarding across our programmes and partnerships.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Strategy & oversight", body: "Guides long-term direction and monitors performance against mission." },
                  { title: "Financial governance", body: "Ensures responsible stewardship and oversight of resources." },
                  { title: "Safeguarding & ethics", body: "Promotes safe, respectful services and ethical decision-making." },
                  { title: "Compliance & risk", body: "Strengthens controls, policies and risk management practices." },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm font-semibold text-brand-dark">{item.title}</div>
                    <div className="text-sm text-brand-dark/70 mt-1 leading-relaxed">{item.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">Governance highlights</div>
                  <h3 className="font-heading text-2xl font-semibold text-brand-dark mt-2">At a glance</h3>
                </div>
                <div className="p-6 sm:p-8 grid grid-cols-2 gap-4 bg-gradient-to-br from-brand-cream/50 via-white to-white">
                  {[
                    { k: "Trustees", v: String(trustees.length) },
                    { k: "Focus", v: "Accountability" },
                    { k: "Coverage", v: "Programs & Finance" },
                    { k: "Commitment", v: "Safeguarding" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-3xl border border-slate-200 bg-white p-4">
                      <div className="text-xs text-brand-dark/60 font-semibold uppercase tracking-wide">{s.k}</div>
                      <div className="text-lg font-heading font-semibold text-brand-dark mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/website/img-4136.jpg"
                    alt="Mashambanzou Care Trust programme activity"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-brand-dark/5 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-brand-dark">Leadership that supports the mission</div>
                  <div className="text-sm text-brand-dark/70 mt-1 leading-relaxed">
                    We uphold transparent, people-first governance—grounded in human dignity, compassion and community impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Commitment strip */}
      <PageSection className="py-12 sm:py-14 bg-brand-cream/50">
        <div className="container-wide">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">Transparency</div>
                <div className="text-sm text-brand-dark/70 mt-2">Clear reporting and accountable decision-making.</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">Human dignity</div>
                <div className="text-sm text-brand-dark/70 mt-2">People-first policies and safeguarding culture.</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">Impact</div>
                <div className="text-sm text-brand-dark/70 mt-2">Oversight that strengthens services and outcomes.</div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
