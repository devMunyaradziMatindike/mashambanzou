import Image from "next/image";

export function NyabiraMobileRegistrationSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          Nyabira · 17–18 March 2026
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          A Life-Changing Moment for a 17-year-old who acquired a birth certificate through MCT mobile registration
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/nyabira-mobile-registration-ovc.png"
              alt="MCT social worker and community care giver stand with a 17-year-old and their family after receiving documentation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Figure 1. Picture with MCT social worker, community care giver and the 17-year-old with her grandmother and
            mother.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            Excitement and hope filled Nyabira from 17–18 March 2026 as Mashambanzou Care Trust partnered with the Zvimba
            District Registrar&apos;s Department to conduct a mobile birth certificate and national identity registration
            exercise. The outreach, supported under the Family Centred Support Project funded by the Oak Foundation,
            assisted over 100 Orphan and Vulnerable Children (OVCs) and adults, bringing essential services closer to
            those who need them most.
          </p>
          <p>
            Among the many lives touched was that of a 17-year-old boy who had lived most of his life without a birth
            certificate. Raised by his grandmother after his mother remarried, he had been excluded from his stepfather&apos;s
            home. With his father unknown and no documentation ever secured, his future remained uncertain.
          </p>
          <p>
            Through the persistence of a Mashambanzou community care giver, the boy&apos;s mother was encouraged to come
            forward. For the first time, she realised she could use her own details to register her son&apos;s birth — a step
            she had never thought possible. With guidance and support, the process was completed.
          </p>
          <p>
            Because he was above 16, the registration also enabled him to begin the national ID process — an important
            next step now that he has a birth certificate.
          </p>
          <p>
            Moments later, the young boy emerged from the registration room overwhelmed with joy, shouting, &ldquo;I am now
            counted as a Zimbabwean! I can now look for formal employment without fear or having to explain myself.&rdquo;
          </p>
          <p>
            His grandmother, visibly relieved, shared her gratitude: &ldquo;This issue troubled me deeply, but I had no means
            or support to help my grandson. Today, I am at peace.&rdquo;
          </p>
          <p>
            This powerful story reflects the transformative impact of ensuring access to a basic human right, legal
            identity. Mashambanzou Care Trust remains committed to reaching more vulnerable individuals, with similar
            mobile registration exercises planned for Nyabira Primary School and Lumanda in the coming quarter.
          </p>
          <p>
            Through partnerships and community-driven interventions, lives are being changed — one identity, one future
            at a time.
          </p>
        </div>
      </div>
    </article>
  );
}

