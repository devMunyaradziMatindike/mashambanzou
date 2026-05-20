import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia, imagesFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Orphans and Vulnerable Children (OVC) Support | Mashambanzou Care Trust",
  description:
    "Education for Life, Houses of Safety, OVC support and Putting Children First in Harare and beyond.",
};

export const dynamic = "force-dynamic";

export default async function ChildProtectionEducationPage() {
  const media = await getWebsiteMedia();
  const ndccImages = imagesFromMedia(media, "child-protection.ndcc-gallery", [
    {
      src: "/review-pics/putting children first.jpg",
      alt: "Children supported through Mashambanzou Care Trust programmes",
      label: "NDCC main image",
    },
    {
      src: "/review-pics/ovc support.jpg",
      alt: "Orphans and vulnerable children support",
      label: "OVC support",
    },
    {
      src: "/review-pics/child protection.jpg",
      alt: "Child protection and learning support",
      label: "Child protection",
    },
  ]);

  return (
    <>
      <Hero
        title="Orphans and Vulnerable Children (OVC) Support"
        subtitle="Education for Life, Houses of Safety and OVC support—putting children first."
        badge="Putting children first"
        primaryCta="Donate"
        primaryHref="/donate"
        secondaryCta="Contact"
        secondaryHref="/contact"
        backgroundImageSrc="/review-pics/putting children first.jpg"
        backgroundImageAlt="Teaching and mentoring girls"
        mediaKey="child-protection.hero"
      />

      {/* Intro + at a glance */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Safety, learning and opportunity
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              We protect children, strengthen households and expand access to education—supporting vulnerable children
              and survivors of abuse through practical services and community accountability.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Education for Life",
                desc: "Support that helps children remain in school and thrive.",
              },
              {
                title: "OVC support",
                desc: "Support for orphans and vulnerable children to reach their potential.",
              },
              {
                title: "NDCC / NECDS",
                desc: "Early childhood care, meals and basic education for vulnerable children.",
              },
              {
                title: "Houses of Safety",
                desc: "Temporary safe homes for children at risk while plans are made.",
              },
              {
                title: "Child protection",
                desc: "Community safeguarding, awareness and accountability mechanisms.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Education for Life + OVC */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "child-protection.education-feature", {
                  src: "/review-pics/ovc support.jpg",
                  alt: "A child learning practical skills",
                }).src}
                alt={imageFromMedia(media, "child-protection.education-feature", {
                  src: "/review-pics/ovc support.jpg",
                  alt: "A child learning practical skills",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                Education for Life & OVC support
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                MCT’s areas of implementation are characterised by extreme poverty where parents/guardians cannot afford
                to pay school fees for their children. To address this challenge, MCT initiated various projects to offer
                support ranging from school fees payments, provision of school uniforms and other learning materials, and
                registration of birth certificates and national identity cards.
              </p>
              <p className="mt-4 text-white/85 leading-relaxed">
                The government of Zimbabwe encourages access to basic quality education for every child through BEAM
                (Basic Education Assistance Module). However, BEAM funding is not adequate to assist every orphan and
                vulnerable child—so, to complement government efforts, MCT initiated the Education for Life project.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["School fees", "Uniforms", "Learning materials", "Civil registration"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Nenyere Day Care Centre */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-3 shadow-sm shadow-brand-dark/15">
              <div className="grid gap-3">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] bg-white/10">
                  <Image
                    src={ndccImages[0]?.src ?? "/review-pics/putting children first.jpg"}
                    alt={ndccImages[0]?.alt ?? "Children supported through Mashambanzou Care Trust programmes"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-white/10">
                    <Image
                      src={ndccImages[1]?.src ?? "/review-pics/ovc support.jpg"}
                      alt={ndccImages[1]?.alt ?? "Orphans and vulnerable children support"}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-white/10">
                    <Image
                      src={ndccImages[2]?.src ?? "/review-pics/child protection.jpg"}
                      alt={ndccImages[2]?.alt ?? "Child protection and learning support"}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-7 sm:p-10 shadow-sm shadow-brand-dark/15">
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                Nenyere Day Care Centre (NDCC)
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                Early childhood care for vulnerable children
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                Established as the Nenyere Day Care Centre (NDCC), now known as the Nenyere Early Childhood Development
                Centre (NECDS), the centre is registered under the Ministry of Primary and Secondary Education. It offers
                orphans and vulnerable children at least two hot meals a day and basic education while their parents or
                guardians work for livelihoods.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Two hot meals a day", "Basic education", "OVC support", "Registered ECD centre"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
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
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">Houses of Safety</h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                Mashambanzou Care Trust (MCT) plays a crucial role in providing care and support for vulnerable children
                in Zimbabwe. One of its key initiatives is the establishment of Houses of Safety, which serve as
                temporary homes for orphaned and vulnerable children (OVC) who are survivors of abuse whilst the
                Department of Social Development maps a way forward for their safe keeping.
              </p>
              <p className="mt-4 text-white/85 leading-relaxed">
                In collaboration with the Department of Social Development, family assessments are conducted before
                placement of these children in houses of safety.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6">
                <h3 className="font-heading text-lg font-semibold text-white">Care & protection</h3>
                <ul className="mt-3 space-y-2 text-white/80">
                  <li>Temporary safe accommodation</li>
                  <li>Family assessment and placement planning</li>
                  <li>Coordination with Social Development</li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "child-protection.houses-of-safety", {
                  src: "/review-pics/House of Safety.jpg",
                  alt: "A family visiting during care",
                }).src}
                alt={imageFromMedia(media, "child-protection.houses-of-safety", {
                  src: "/review-pics/House of Safety.jpg",
                  alt: "A family visiting during care",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Child protection + Putting Children First */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">Child protection</h2>
              <p className="mt-4 text-white/85 leading-relaxed">
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
                  <div key={item} className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-5">
                    <div className="text-sm font-semibold text-white">{item}</div>
                    <div className="text-xs text-white/75 mt-1">Awareness, prevention and response pathways.</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 shadow-sm shadow-brand-dark/20">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 aspect-[16/10] mb-7">
                  <Image
                    src={imageFromMedia(media, "child-protection.putting-children-first", {
                      src: "/review-pics/Putting Children First ( blur faces) copy.jpg",
                      alt: "Putting Children First programme participants",
                    }).src}
                    alt={imageFromMedia(media, "child-protection.putting-children-first", {
                      src: "/review-pics/Putting Children First ( blur faces) copy.jpg",
                      alt: "Putting Children First programme participants",
                    }).alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-brand-dark/10 to-transparent" />
                </div>
                <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                  Putting Children First
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                  Protecting children in marginalised communities
                </h3>
                <p className="text-white/80 leading-relaxed">
                  This Caritas Australia/CAFOD-funded initiative operates in Southern Harare (Mbare, Hopley, Glen Norah),
                  focusing on healthcare, child protection and the rights of children in severely marginalised
                  communities.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Healthcare", "Child protection", "Rights", "Community support"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                Get involved
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
                Help keep children safe and learning
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
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
