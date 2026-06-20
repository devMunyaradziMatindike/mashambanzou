import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { formatDeadline, getCareers } from "@/lib/careers-tenders";

export const metadata: Metadata = {
  title: "Careers | Mashambanzou Care Trust",
  description: "Current job openings and career opportunities at Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <>
      <Hero
        title="Careers"
        subtitle="Join our team and help deliver compassionate care, community support and lasting impact."
        primaryCta="Contact us"
        primaryHref="/contact"
        secondaryCta="Partner with us"
        secondaryHref="/get-involved/partner"
        backgroundImageSrc="/review-pics/careers-hero.jpg"
        backgroundImageAlt="Care to Share vocational training and livelihoods"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">Current openings</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Explore available roles below. Application deadlines are shown for each position.
            </p>
          </div>

          {careers.length ? (
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {careers.map((career) => (
                <article
                  key={career.id}
                  className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
                >
                  {career.image_url ? (
                    <div className="relative aspect-[16/9] bg-white/10">
                      <Image
                        src={career.image_url}
                        alt={career.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex rounded-full bg-brand-sunlight px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
                        {career.is_expired ? "Closed" : "Open"}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-white">{career.title}</h3>
                    <p className="mt-3 text-white/80">
                      Application deadline: {formatDeadline(career.application_deadline)}
                    </p>
                    {!career.is_expired ? (
                      <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green/90 transition-colors"
                      >
                        Apply / enquire
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-8 text-center text-white/85">
              No career openings are published yet. Check back soon or contact us to express interest.
            </div>
          )}
        </div>
      </PageSection>
    </>
  );
}
