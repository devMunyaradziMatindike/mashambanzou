import Image from "next/image";

export function MbareOutreachSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          Mbare · Matapi Flats
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Bringing Care Closer to Home: Transforming Lives Through Outreach Clinics in Mbare
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/mbare-outreach-care-closer.png"
              alt="Beneficiaries and staff consult at Mashambanzou Care Trust outreach in Mbare. Faces blurred for privacy."
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Confidential registration and counselling at the mobile outreach in Mbare, supporting people who prefer care
            away from overstigmatising settings.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            Mashambanzou Care Trust&apos;s outreach clinic, implemented in partnership with the Little Company of Mary
            Sisters of the Roman Catholic Church, is transforming lives in Mbare — one patient at a time.
          </p>
          <p>
            For many people living with HIV in the Matapi Flats area, accessing treatment used to come with fear and
            stigma. Visiting local clinics often meant risking unwanted disclosure within a close-knit community. But
            through Mashambanzou&apos;s mobile outreach services, that narrative is changing.
          </p>
          <p>One beneficiary shared how the programme has brought renewed strength and unity:</p>
          <blockquote className="border-l-2 border-white/25 pl-4 sm:pl-5 italic text-white/95">
            &ldquo;Our community of people living with HIV in Mbare is now stronger. We are able to work again because of
            the treatment we are receiving privately from Mashambanzou Care Trust. We are no longer afraid of stigma from
            local clinics. We are forever grateful.&rdquo;
          </blockquote>
          <p>
            The outreach team conducts mobile clinics in Mbare twice a month, providing not only treatment but also
            holistic care. Patients receive psychosocial support from trained counsellors, while those with complex needs are
            assessed by social workers to ensure tailored assistance.
          </p>
          <p>
            This integrated approach, combining medical care, counselling and social support has helped restore dignity,
            improve health outcomes and rebuild confidence among patients who once felt isolated.
          </p>
          <p>
            The initiative is made possible through the support of the Little Company of Mary Sisters, the Oak
            Foundation&apos;s emergency fund, and other well-wishers. Together, these partnerships are creating safe,
            accessible spaces for care, proving that compassionate, community-based interventions can break barriers and
            change lives.
          </p>
        </div>
      </div>
    </article>
  );
}
