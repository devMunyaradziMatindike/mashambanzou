import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional Development | Mashambanzou Care Trust",
  description:
    "Institutional development at Mashambanzou Care Trust: sustainable, visible, effective and efficient service delivery for vulnerable communities.",
};

const priorities = [
  {
    title: "Sustainable",
    body: "Strengthening income-generating capacity, partnerships and internal systems that keep services running for the long term.",
  },
  {
    title: "Visible",
    body: "Maintaining a clear presence in communities, with leadership, staff and partners working alongside the people we serve.",
  },
  {
    title: "Effective",
    body: "Aligning programmes, planning and accountability so services respond to real needs and deliver measurable change.",
  },
  {
    title: "Efficient",
    body: "Using resources responsibly while improving coordination, governance and delivery across all programme areas.",
  },
];

const gallery = [
  {
    src: "/review-pics/MCTR @ 35 celebrations in 2025.jpg",
    alt: "Mashambanzou Care Trust 35th anniversary celebration",
    caption: "A visible and enduring institutional presence built through decades of service.",
  },
  {
    src: "/review-pics/MCT Management pose for a picture with patients during World AIDS Day cake cutting process.jpg",
    alt: "MCT management with patients during a World AIDS Day activity",
    caption: "Leadership and programme teams staying connected to care, visibility and community impact.",
  },
  {
    src: "/review-pics/Institutional Income Generating project.jpg",
    alt: "Institutional income generating project",
    caption: "Sustainability strengthened through institutional income-generating initiatives.",
  },
  {
    src: "/review-pics/MCT and faith.jpg",
    alt: "Mashambanzou Care Trust faith and community activity",
    caption: "Mission-driven service grounded in faith, compassion and accountability.",
  },
];

export default function InstitutionalDevelopmentPage() {
  return (
    <>
      <Hero
        title="Institutional"
        gradientText="Development"
        subtitle="Sustainable, visible, effective and efficient MCT providing services and significantly causing impact to vulnerable communities."
        primaryCta="Partner with us"
        primaryHref="/get-involved/partner"
        secondaryCta="Contact"
        secondaryHref="/contact"
        backgroundImageSrc="/review-pics/MCTR @ 35 celebrations in 2025.jpg"
        backgroundImageAlt="Mashambanzou Care Trust 35th anniversary celebration"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                Income Generating Activities
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                Strengthening institutional sustainability
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                In addition to MCT vital healthcare and social services, Mashambanzou Care Trust has successfully
                implemented a range of income-generating activities that strengthen institutional sustainability and
                support the communities we serve. These activities generate income, foster skills development,
                entrepreneurship and self-reliance among beneficiaries.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Agricultural projects",
                  "Catering and food services",
                  "Skills training and entrepreneurship",
                  "Institutional resilience",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5">
                    <div className="text-sm font-semibold text-white">{item}</div>
                    <div className="text-xs text-white/75 mt-1">
                      Building stability through practical income pathways.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/review-pics/Institutional Income Generating project.jpg"
                alt="Income-generating project supporting institutional sustainability"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-brand-dark/5 to-transparent" />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                Institutional Development
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5">
                Building the organisation behind lasting community impact
              </h2>
              <p className="text-white/85 text-lg leading-relaxed">
                Institutional development strengthens Mashambanzou Care Trust&apos;s ability to serve vulnerable
                communities with continuity, accountability and impact. It supports the systems, leadership, visibility
                and sustainability needed for programmes to reach people consistently and effectively.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed">
                Our focus is a sustainable, visible, effective and efficient MCT, providing services and significantly
                causing impact to vulnerable communities.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/review-pics/MCT Management pose for a picture with patients during World AIDS Day cake cutting process.jpg"
                alt="MCT management with patients during World AIDS Day"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorities.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15"
              >
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-white/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Strengthening visibility, sustainability and service delivery
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Institutional development links governance, planning, financial resilience, staff capacity and community
              presence so MCT can continue delivering meaningful support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
              >
                <div className="relative aspect-[16/10] bg-white/10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-brand-dark/10 to-transparent" />
                </div>
                <figcaption className="p-5 text-sm text-white/75 leading-relaxed">{item.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-brand-green p-6 sm:p-10 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-white/75 font-semibold tracking-widest uppercase text-xs mb-3 block">
                Work with us
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-3">
                Help strengthen the institution that supports vulnerable communities
              </h3>
              <p className="text-white/85 max-w-2xl leading-relaxed">
                Partnerships, technical support and institutional investment help MCT remain resilient, accountable and
                ready to serve.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/get-involved/partner"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-brand-green font-semibold hover:bg-white/90 transition-colors w-full sm:w-auto"
              >
                Partner with us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
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

