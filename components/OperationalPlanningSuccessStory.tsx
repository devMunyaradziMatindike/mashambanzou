import Image from "next/image";

export function OperationalPlanningSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          Operational planning · 2026
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Strengthening Impact Through Strategic Planning
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/operational-plan-review-2026.png"
              alt="MCT management and staff in a planning session around a table"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            MCT management and staff during the annual operational plan review and planning meeting.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            Mashambanzou Care Trust (MCT) continues to prioritise effective planning and continuous improvement as it
            holds its annual operational plan review and planning meeting with management and staff. This important
            platform brings the team together to reflect on organisational performance and shape the way forward.
          </p>
          <p>
            During the meeting, the team reviewed 2025 achievements, celebrated good practices, and identified key areas
            that require strengthening. Open discussions also focused on risks that may affect operations, with practical
            strategies being developed to address them and ensure more efficient and responsive service delivery.
          </p>
          <p>
            In addition, MCT was developing its 2026 operational plan, ensuring that all activities are aligned with the
            organisation&apos;s broader strategic plan. This deliberate and inclusive approach to planning reinforces MCT&apos;s
            commitment to accountability, learning, and delivering quality services to the communities it serves.
          </p>
          <p>
            Through structured reflection and forward-thinking strategies, Mashambanzou Care Trust continues to position
            itself for greater impact and sustainable growth.
          </p>
        </div>
      </div>
    </article>
  );
}

