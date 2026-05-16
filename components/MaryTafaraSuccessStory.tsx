import Image from "next/image";

export function MaryTafaraSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          16 February 2026
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Mary&apos;s Journey: Restored Hope in Tafara
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/mary-tafara-restored-hope.png"
              alt="Mary with Mashambanzou Care Trust colleagues at her wheelchair donation in Tafara, with an MCT banner"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Mashambanzou Care Trust accompanies Mary during the wheelchair handover supported by Harare Cheer Fund and
            partners.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            The month of February marked a moment of restored hope in Tafara, as Mary (not her real name) received a
            life-changing gift of a wheelchair after years of immobility and getting assistance to move from one place to
            the other from her two brothers.
          </p>
          <p>
            Mary&apos;s journey has been one of deep struggle and remarkable resilience. Her first husband died in 2004 and
            left her with a child. She later returned to her parents&apos; home as her own health began to decline in 2005. In
            2007, after encouragement by her friend she sought medical help at Mashambanzou Care Trust, and was diagnosed
            HIV positive. She received treatment and was further referred to Wilkins Hospital for further care. For a
            time, she regained strength and worked to support her family.
          </p>
          <p>
            But her health took a devastating turn. She began losing power in her legs (&quot;kushaya simba&quot;). The pain
            intensified (&quot;tsinga dzakatanga kurwadza&quot;) and soon she could not walk. She lost weight, vomited
            frequently, and even the smell of food made her ill.
          </p>
          <blockquote className="border-l-2 border-white/25 pl-4 sm:pl-5 italic text-white/95">
            &ldquo;I could not carry a bucket of water; even 2 kilograms was too heavy for me,&rdquo; she recalls.
          </blockquote>
          <p>
            Her condition worsened until she was completely immobile, her legs bending and deforming. Unable to walk or
            use her hands, Mary became fully dependent on her two brothers and child for everyday care. Yet through it all,
            she never defaulted on her treatment.
          </p>
          <p>
            Since 2017, Mashambanzou Care Trust through the funding from the Little Company of Mary Sisters of the Roman
            Catholic Church has stood by Mary through its home-based care programme and outreach clinics, walking every
            step of this difficult journey with her.
          </p>
          <p>
            That journey took a hopeful turn when, through the generosity of the Mayor of the City of Harare Cheer Fund,
            led by the Mayoress, Mrs Elizabeth Mafume, and with support from Green Light International Trust,
            Mashambanzou Care Trust received mobility aids to support vulnerable clients. On 16 February 2026, Mary was
            gifted with one of the donated wheelchairs.
          </p>
          <p>
            This simple yet powerful intervention is more than just a wheelchair, it is a gateway to dignity and renewed
            life. It will allow Mary to move again, feel the warmth of the sun, and reconnect with her community. It also
            brings relief to her brothers, who had carried her from place to place for years.
          </p>
          <p>
            Mary&apos;s story is one of endurance, love, and restored hope, a powerful reminder that even in the most
            difficult circumstances, compassion and support can transform lives.
          </p>
        </div>
      </div>
    </article>
  );
}
