import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Protection & Education | Mashambanzou Care Trust",
  description:
    "Education for Life, Houses of Safety, OVC support and Putting Children First in Harare and beyond.",
};

export default function ChildProtectionEducationPage() {
  return (
    <>
      <Hero
        title="Child Protection & Educational Empowerment"
        subtitle="Education for Life, Houses of Safety and OVC support—putting children first."
        badge="Putting children first"
        primaryCta="Donate"
        primaryHref="/donate"
        secondaryCta="Contact"
        secondaryHref="/contact"
        backgroundImageSrc="/website/teaching-girls.jpg"
        backgroundImageAlt="Teaching and mentoring girls"
      />

      {/* Intro + at a glance */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark mb-4">
              Safety, learning and opportunity
            </h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              We protect children, strengthen households and expand access to education—supporting vulnerable children
              and survivors of abuse through practical services and community accountability.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Education for Life",
                desc: "Support that helps children remain in school and thrive.",
                icon: "🎓",
              },
              {
                title: "OVC support",
                desc: "Support for orphans and vulnerable children to reach their potential.",
                icon: "🧒",
              },
              {
                title: "Houses of Safety",
                desc: "Temporary safe homes for children at risk while plans are made.",
                icon: "🏡",
              },
              {
                title: "Child protection",
                desc: "Community safeguarding, awareness and accountability mechanisms.",
                icon: "🛡️",
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

      {/* Education for Life + OVC */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-100 overflow-hidden shadow-sm relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/website/child-knitting.jpg"
                alt="A child learning practical skills"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">
                Education for Life & OVC support
              </h2>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                MCT’s areas of implementation are characterised by extreme poverty where parents/guardians cannot afford
                to pay school fees for their children. To address this challenge, MCT initiated various projects to offer
                support ranging from school fees payments, provision of school uniforms and other learning materials, and
                registration of birth certificates and national identity cards.
              </p>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                The government of Zimbabwe encourages access to basic quality education for every child through BEAM
                (Basic Education Assistance Module). However, BEAM funding is not adequate to assist every orphan and
                vulnerable child—so, to complement government efforts, MCT initiated the Education for Life project.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["School fees", "Uniforms", "Learning materials", "Civil registration"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-brand-cream/60 border border-slate-200 text-sm text-brand-dark/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Houses of Safety */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">Houses of Safety</h2>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                Mashambanzou Care Trust (MCT) plays a crucial role in providing care and support for vulnerable children
                in Zimbabwe. One of its key initiatives is the establishment of Houses of Safety, which serve as
                temporary homes for orphaned and vulnerable children (OVC) who are survivors of abuse whilst the
                Department of Social Development maps a way forward for their safe keeping.
              </p>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                In collaboration with the Department of Social Development, family assessments are conducted before
                placement of these children in houses of safety.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-heading text-lg font-semibold text-brand-dark">Care & protection</h3>
                <ul className="mt-3 space-y-2 text-brand-dark/80">
                  <li>Temporary safe accommodation</li>
                  <li>Family assessment and placement planning</li>
                  <li>Coordination with Social Development</li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-slate-200 bg-slate-100 overflow-hidden shadow-sm relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/website/visiting-hour.jpg"
                alt="A family visiting during care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Child protection + Putting Children First */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">Child protection</h2>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                Mashambanzou Care Trust is actively promoting child protection and safeguarding of children&apos;s rights
                through a comprehensive, community-based approach. Key activities include establishment and training of
                School-Based Child Protection Committees comprising of learners, and empowering educators and school staff
                to identify, prevent, and respond to child protection concerns.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Community Dialogue Sessions",
                  "Mobile Roadshows",
                  "Radio Programs",
                  "Policy Engagement",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="text-sm font-semibold text-brand-dark">{item}</div>
                    <div className="text-xs text-brand-dark/70 mt-1">Awareness, prevention and response pathways.</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
                <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-3 block">
                  Putting Children First
                </span>
                <h3 className="font-heading text-2xl font-semibold text-brand-dark mb-3">
                  Protecting children in marginalised communities
                </h3>
                <p className="text-brand-dark/80 leading-relaxed">
                  This Caritas Australia/CAFOD-funded initiative operates in Southern Harare (Mbare, Hopley, Glen Norah),
                  focusing on healthcare, child protection and the rights of children in severely marginalised
                  communities.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Healthcare", "Child protection", "Rights", "Community support"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-brand-cream/60 border border-slate-200 text-sm text-brand-dark/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-3 block">
                Get involved
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark mb-3">
                Help keep children safe and learning
              </h3>
              <p className="text-brand-dark/80 text-lg leading-relaxed max-w-2xl">
                Your support helps us provide protection pathways, safe placements, education support and community-based
                safeguarding.
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
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-green text-brand-dark font-medium hover:bg-brand-green/10 transition-colors w-full sm:w-auto"
              >
                Contact us
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
