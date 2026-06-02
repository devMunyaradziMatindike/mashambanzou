import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWebsiteMedia, imageFromMedia, imagesFromMedia } from "@/lib/website-media";

export const metadata: Metadata = {
  title: "Promotion of Human Rights | Mashambanzou Care Trust",
  description:
    "Care to Share vocational training, livelihoods and advocacy for human rights and stigma reduction.",
};

export const dynamic = "force-dynamic";

export default async function EmpowermentAdvocacyPage() {
  const media = await getWebsiteMedia();

  return (
    <>
      <Hero
        title="Promotion of Human Rights"
        subtitle="Care to Share vocational training, income-generating activities and advocacy—building resilience and opportunity."
        primaryCta="Donate"
        primaryHref="/donate"
        secondaryCta="Contact"
        secondaryHref="/contact"
        backgroundImageSrc="/review-pics/advocacy.jpg"
        backgroundImageAlt="World AIDS Day advocacy and community engagement"
        mediaKey="human-rights.hero"
      />

      {/* Intro + at a glance */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Skills, income and a stronger voice
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
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
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-7 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Care to Share */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15 relative aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src={imageFromMedia(media, "human-rights.care-to-share", {
                  src: "/review-pics/Care to Share beneficiary during graduation.jpg",
                  alt: "Vocational and life-skills learning",
                }).src}
                alt={imageFromMedia(media, "human-rights.care-to-share", {
                  src: "/review-pics/Care to Share beneficiary during graduation.jpg",
                  alt: "Vocational and life-skills learning",
                }).alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                Care to Share (youth empowerment)
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                In partnership with Young Africa International in Caledonia, we deliver 6-month TVET-based vocational
                training and community mastercrafter internships. Graduates receive Certificates of Competency in trades
                such as carpentry, tailoring and agriculture, supporting sustainable livelihoods.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6">
                <h3 className="font-heading text-lg font-semibold text-white">Programme highlights</h3>
                <ul className="mt-3 space-y-2 text-white/80">
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

      {/* Advocacy + gallery */}
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">Advocacy & SRHR</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              We advocate for human rights, challenge stigma and promote SRHR through community outreach, media and
              policy engagement—ensuring the voices of those we serve inform our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {imagesFromMedia(media, "human-rights.gallery", [
              {
                src: "/review-pics/advocacy.jpg",
                alt: "World AIDS Day advocacy",
                label: "Community awareness and stigma reduction through public events and outreach.",
              },
              {
                src: "/review-pics/MCT and faith.jpg",
                alt: "Community members holding documents",
                label: "Linking people to services and documentation through community support.",
              },
              {
                src: "/review-pics/outreach.png",
                alt: "Community outreach programme",
                label: "Advocacy that meets people where they are—listening, informing and responding.",
              },
            ]).map((item) => (
              <figure
                key={item.src}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-white/10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5 text-sm text-white/75 leading-relaxed">{item.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
                Get involved
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-3">
                Support empowerment and rights
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Governance
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
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
