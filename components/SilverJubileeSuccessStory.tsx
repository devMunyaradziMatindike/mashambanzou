import Image from "next/image";

export function SilverJubileeSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          14 February 2026
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Celebrating a Legacy of Service: Sister Ellen Maseve&apos;s Silver Jubilee
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/silver-jubilee-sister-ellen-maseve.jpg"
              alt="MCT staff with Sister Ellen Maseve at her Silver Jubilee celebrations"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Figure 1. MCT staff pose for a picture with Sister Ellen Maseve at her Silver Jubilee Celebrations.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            Mashambanzou Care Trust was honoured to join in celebrating the Silver Jubilee of religious profession of
            Sister Ellen Maseve on 14 February 2026. The thanksgiving mass, held at Our Lady of Wayside Roman Catholic
            Church, brought together members of the Little Company of Mary Sisters of the Queen of Peace Region,
            alongside invited guests and well-wishers.
          </p>
          <p>
            This remarkable milestone marks 25 years of Sister Ellen&apos;s unwavering dedication, faith, and service to
            humanity. Her commitment has been a source of inspiration, not only within the religious community but also to
            organisations like Mashambanzou Care Trust that continue to benefit from her guidance and compassion.
          </p>
          <p>
            The Mashambanzou Care Trust Board, Management, and Staff extend their heartfelt gratitude for her selfless
            leadership and enduring support over the years. Sister Ellen&apos;s journey reflects a life devoted to
            uplifting others and strengthening communities.
          </p>
          <p>
            As we celebrate this significant achievement, we wish her many more years of impactful service, inspiring
            leadership, and boundless compassion.
          </p>
        </div>
      </div>
    </article>
  );
}
