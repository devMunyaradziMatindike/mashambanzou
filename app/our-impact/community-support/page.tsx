import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Family Support | Mashambanzou Care Trust",
  description:
    "Family Centred Support, psychosocial support for SGBV survivors and SRHR outreach for adolescents.",
};

export default function CommunitySupportPage() {
  return (
    <>
      <Hero
        title="Community & Family Support"
        subtitle="Family Centred Support, psychosocial support and SRHR outreach—strengthening resilience in our communities."
        badge="Community-led"
        primaryCta="Donate"
        primaryHref="/donate"
        secondaryCta="Contact"
        secondaryHref="/contact"
        backgroundImageSrc="/website/child-knitting.jpg"
        backgroundImageAlt="A child learning practical skills"
      />

      {/* Intro + at a glance */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark mb-4">
              Practical support, rooted in dignity
            </h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              Our Community & Family Support work strengthens household resilience, protects children and adolescents,
              and supports survivors through community-based psychosocial care and referrals.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Family Centred Support",
                desc: "Household strengthening and integrated community support for PLWHIV and families.",
                icon: "🏠",
              },
              {
                title: "Psychosocial Support",
                desc: "Support for survivors of SGBV and other forms of abuse using a multi-sectoral approach.",
                icon: "🤝",
              },
              {
                title: "SRHR Education",
                desc: "Outreach with adolescents to improve knowledge, agency and safer choices.",
                icon: "🧠",
              },
              {
                title: "Advocacy",
                desc: "Challenging stigma, promoting rights and strengthening community accountability.",
                icon: "📣",
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

      {/* Family Centred Support + PSS */}
      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-100 overflow-hidden shadow-sm relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/website/outreach-programme-3.jpg"
                alt="Community outreach and family support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">
                Family Centred Support (FCS) & Psychosocial Support (PSS)
              </h2>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                The Family Centered Support (FCS) Project focuses on improving the lives of PLWHIV, supporting Orphans and
                Vulnerable Children (OVC) to reach their full potential and building the capacity of communities to
                effectively deal with Sexual and Reproductive Health Rights (SRHR) issues.
              </p>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                MCT offers Psychosocial Support (PSS) to survivors of Sexual Gender Based Violence (SGBV) and other forms
                of abuse using the multi-sectoral approach in the management of these cases.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-brand-dark">What this includes</h3>
                <ul className="mt-3 space-y-2 text-brand-dark/80">
                  <li>Case management and referrals with partners</li>
                  <li>Household-level support and follow-up</li>
                  <li>Protection pathways for survivors</li>
                  <li>Community sessions and coordinated outreach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* SRHR */}
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark">
                SRHR education for adolescents
              </h2>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                Teen pregnancies have been prevalent in Zimbabwe due to poverty, cultural and religious beliefs which
                hinder educational advancement of women and girls, leaving them vulnerable to economic hardships and
                abuse.
              </p>
              <p className="mt-4 text-brand-dark/85 leading-relaxed">
                MCT came up with a project, supported by LCM USA to reduce the vulnerability of young women and girls,
                offering SRHR education during outreaches to help them make informed choices about their sexuality.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Knowledge", "Safety", "Agency", "Referrals"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-brand-cream/60 border border-slate-200 text-sm text-brand-dark/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-slate-200 bg-slate-100 overflow-hidden shadow-sm relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/website/img-7782.jpg"
                alt="Youth session and community education"
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
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-dark mb-4">Advocacy & dignity</h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              We advocate for HIV and AIDS awareness, social justice and human rights—reducing stigma and strengthening
              community accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/website/img-0037.jpg",
                alt: "Community members holding documents",
                caption: "Access to services and documentation through community outreach.",
              },
              {
                src: "/website/opening-male-toilets.jpg",
                alt: "Opening of male toilets facility",
                caption: "Improving dignity and safe environments in community spaces.",
              },
              {
                src: "/website/outreach-tablets.jpg",
                alt: "Community support and outreach visit",
                caption: "Integrated outreach that links people to care and follow-up.",
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
                Support families and strengthen resilience
              </h3>
              <p className="text-brand-dark/80 text-lg leading-relaxed max-w-2xl">
                Your support helps us deliver community-based services, protection pathways and practical outreach in
                hard-to-reach communities.
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
