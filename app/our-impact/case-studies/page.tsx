import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donor Projects | Mashambanzou Care Trust",
  description: "Donor-supported projects including Care to Share and Care for Health at Mashambanzou Care Trust.",
};

const donorProjects = [
  {
    title: "Care to Share",
    donor: "Oak Foundation",
    imageSrc: "/review-pics/Care to Share beneficiary during graduation.jpg",
    imageAlt: "Care to Share beneficiary during graduation",
    summary:
      "A youth empowerment and livelihoods project supporting vulnerable young people with vocational training, life skills and pathways to work.",
    details:
      "Care to Share, supported by Oak Foundation, helps vulnerable youth move from survival strategies into skills development, internships and income pathways. The project connects practical training, psychosocial support and community-based mentorship so beneficiaries can build dignity and self-reliance.",
    focus: ["Vocational training", "Youth empowerment", "Livelihoods", "Industry exposure"],
  },
  {
    title: "Care for Health Project",
    donor: "AIDS Healthcare Foundation",
    imageSrc: "/review-pics/care-for-health-project-training.png",
    imageAlt: "AHF and Mashambanzou Care Trust teams during health services training",
    summary:
      "A health access project expanding demand and uptake of HIV, TB, Hepatitis C and STI services through training, counselling and pop-up clinics.",
    details:
      "The Care for Health Project, funded by AIDS Healthcare Foundation, strengthens community access to integrated health services. It supports training for health workers and community care givers, pop-up clinics in hotspot areas, counselling, testing and health information that reduces stigma and encourages early care seeking.",
    focus: ["HIV testing", "TB and Hepatitis C services", "Pop-up clinics", "Stigma reduction"],
  },
] as const;

export default function DonorProjectsPage() {
  return (
    <>
      <Hero
        title="Donor"
        gradientText="Projects"
        subtitle="Partner-supported work strengthening health, livelihoods and dignity in vulnerable communities."
        primaryCta="Donate"
        primaryHref="https://paynow.co.zw/mashambanzou"
        secondaryCta="Partner with us"
        secondaryHref="/get-involved/partner"
        backgroundImageSrc="/review-pics/care-for-health-project-training.png"
        backgroundImageAlt="Mashambanzou Care Trust and AHF training session"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
              Donor Projects
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Partnerships that make services possible
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              These projects show how donor support helps Mashambanzou Care Trust expand practical care, skills,
              opportunity and health access for vulnerable communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {donorProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2.5rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
              >
                <div className="relative aspect-[16/10] bg-white/10">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-brand-dark/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex rounded-full bg-brand-sunlight px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
                      Donor: {project.donor}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-white/80 leading-relaxed">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.focus.map((item) => (
                      <span
                        key={item}
                        className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide space-y-12">
          {donorProjects.map((project, index) => (
            <div
              key={project.title}
              className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                  {project.donor}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{project.title}</h2>
                <p className="mt-4 text-white/85 leading-relaxed">{project.details}</p>
              </div>

              <div className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 aspect-[16/10] sm:aspect-[4/3] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/5 to-transparent" />
              </div>
            </div>
          ))}

          <div className="rounded-[2.5rem] border border-white/10 bg-brand-green p-6 sm:p-10 text-white text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold">Partner support strengthens impact</h2>
            <p className="mt-3 max-w-3xl mx-auto text-white/85 leading-relaxed">
              Donor partnerships help MCT deliver focused projects that expand access to services, restore dignity and
              build long-term resilience for vulnerable communities.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
