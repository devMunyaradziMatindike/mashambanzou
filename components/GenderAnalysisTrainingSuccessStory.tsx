import Image from "next/image";

export function GenderAnalysisTrainingSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          25–26 February 2026
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Strengthening Gender Sensitivity in Community-Based Work
        </h2>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            On 25–26 February 2026, Mashambanzou Care Trust successfully hosted a two-day Gender Analysis training aimed at
            strengthening gender responsiveness in community-based work. The training brought together MCT Community Care
            Givers, Peer Mentors, Men of Purpose, and MCT staff, and was facilitated by an experienced Gender Expert.
          </p>
          <p>
            Over the course of the training, participants gained a deeper understanding of what gender analysis entails,
            explored gender roles within communities, and examined how gender dynamics influence the effectiveness of
            community interventions. Emphasis was placed on the importance of objectivity and gender sensitivity in service
            delivery.
          </p>
        </div>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/gender-analysis-training-2026.jpg"
              alt="Participants during Gender Analysis training, with facilitator and Gender Roles slide projected"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Figure 4. Participants during the Gender Analysis training.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            The sessions provided a safe and engaging space for reflection, dialogue, and practical learning. Participants
            critically reflected on how cultural norms and societal expectations shape access to opportunities,
            responsibilities, and decision-making power among women, men, girls, and boys.
          </p>
          <p>
            As a result of the training, the Mashambanzou team is now better equipped to deliver inclusive and equitable
            services, address gender-based barriers in care and support, and promote fairness and dignity in all community
            interventions.
          </p>
          <p>
            MCT remains committed to ensuring that its programmes are responsive, inclusive and sensitive to the diverse
            needs of the communities it serves. Through continued capacity building, the organisation is taking meaningful
            steps towards fostering stronger and more equitable communities.
          </p>
        </div>
      </div>
    </article>
  );
}
