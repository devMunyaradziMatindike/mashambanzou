import Image from "next/image";

export function CareForHealthSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          Care for Health · AIDS Healthcare Foundation
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Launching the &ldquo;Care for Health Project&rdquo;: Expanding Access, Reducing Stigma
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/care-for-health-project-training.png"
              alt="AHF and Mashambanzou Care Trust teams during hands-on training for HIV and hepatitis C testing"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Figure 3. AHF team during one of the training sessions.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            Mashambanzou Care Trust is proud to announce the launch of the Care for Health Project, a 10-month initiative
            funded by the AIDS Healthcare Foundation. The project will be implemented specifically in Hopley and Kuwadzana,
            and in Goromonzi District, with the goal of increasing demand and uptake of services for HIV, Tuberculosis
            (TB), Hepatitis C, and Sexually Transmitted Infections (STIs).
          </p>
          <p>
            At the heart of the project is strengthening community access to integrated health services. Nurses from three
            local clinics in the targeted areas, working alongside Mashambanzou Care Trust staff, have already received
            specialised training in HIV and Hepatitis C testing. In addition, Community Care Givers have been trained in
            the use of self-test kits, enabling them to support and guide community members in accessing testing services
            more conveniently and confidently.
          </p>
          <p>
            To reach those most at risk, the project will roll out pop-up clinics in identified hotspot areas, as well as
            outreach clinics designed to bring services directly to communities with limited access to healthcare. These
            mobile and community-based approaches aim to close gaps in service delivery and ensure no one is left behind.
          </p>
          <p>
            Counselling services will also form a key component of the programme, offering a comprehensive package of care
            that supports not only physical health but also emotional and psychological well-being.
          </p>
          <p>
            Equally important is the project&apos;s focus on information dissemination and stigma reduction. Through
            targeted awareness campaigns, communities will be equipped with accurate information about HIV, TB, Hepatitis
            C, and STIs, helping to break down misconceptions and encourage early health-seeking behaviour.
          </p>
          <p>
            The Care for Health Project reflects Mashambanzou Care Trust&apos;s continued commitment to improving health
            outcomes through inclusive, community-driven interventions, bringing services closer to the people and
            fostering healthier, stigma-free communities.
          </p>
        </div>
      </div>
    </article>
  );
}
