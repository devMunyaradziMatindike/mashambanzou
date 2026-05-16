import Image from "next/image";

export function SawcTechnicalMeetingSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          SAWC technical meeting · 18-22 March 2026
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Mashambanzou Care Trust Strengthens Regional Collaboration at SAWC Technical Meeting
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/programmes-manager-sawc-meeting.jpg"
              alt="MCT Programmes Manager presenting during the SAWC stakeholder session in Hatfield, Harare"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Programmes Manager presenting during the SAWC Technical Meeting stakeholder session in Hatfield, Harare.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            Mashambanzou Care Trust recently participated in the Southern Africa Workcamps Cooperation (SAWC) Technical
            Meeting held in Hatfield, Harare, Zimbabwe, from 18 to 22 March 2026, under the invitation of Global Exchange
            Program International (GEPI Zimbabwe). The engagement brought together regional actors committed to community
            development, youth empowerment, environmental sustainability, and volunteer-driven initiatives.
          </p>
          <p>
            The Stakeholder Presentation Day, held on 21 March 2026 at Rockwood Spiritual and Formation Centre (29
            Rockwood Road, Hatfield), provided Mashambanzou Care Trust with a valuable platform to exhibit its work
            alongside other like-minded organisations. The organisation showcased its comprehensive programmes focusing on
            health, social protection, disability inclusion, and community-based care interventions.
          </p>
          <p>
            During the event, the Programmes Manager delivered a presentation highlighting Mashambanzou Care Trust&apos;s
            work, impact areas, and existing opportunities for collaboration with regional and international partners. The
            presentation emphasised the organisation&apos;s commitment to strengthening community systems through integrated
            health and social support services, while also exploring partnerships that enhance sustainable development
            outcomes.
          </p>
          <p>
            In addition to the formal presentation, Mashambanzou Care Trust actively engaged in networking sessions with
            various organisations and stakeholders. These interactions provided a space for exchanging ideas, sharing best
            practices, and identifying potential areas for joint programming and collaboration within the SAWC network.
          </p>
          <p>
            The SAWC Technical Meeting served as an important platform for strengthening regional cooperation and advancing
            the role of volunteerism in community development. Mashambanzou Care Trust&apos;s participation reaffirmed its
            commitment to partnership-driven approaches that enhance impact and promote inclusive, community-centred
            development across Zimbabwe and the region.
          </p>
        </div>
      </div>
    </article>
  );
}

