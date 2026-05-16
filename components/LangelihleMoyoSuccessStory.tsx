import Image from "next/image";

export function LangelihleMoyoSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          Care to Share · Oak Foundation · Young Africa International
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          From Survival to Skilled Empowerment: The Journey of Langelihle Moyo
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/langelihle-moyo-caretoshare.png"
              alt="Langelihle at the workshop with colleagues, showcasing teddy bears they assisted in making"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Figure 5. Langelihle at the workshop alongside two of her colleagues showcasing the teddy bears they assisted
            in making.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            The Care to Share Project, implemented by Mashambanzou Care Trust and funded by Oak Foundation through Young
            Africa International, has become a transformative initiative for vulnerable youth seeking sustainable
            livelihoods. Through a six-month integrated training model combining practical skills from community
            craftspersons and theoretical instruction from Ruwa Vocational Training Centre, 29 young people were equipped
            with competencies in motor mechanics and clothing and textiles. After the six months of training, the
            graduates engaged in a four-month internship programme to strengthen their skills. Among these beneficiaries
            is Langelihle Moyo, whose journey reflects resilience, determination and the life-changing impact of targeted
            empowerment programmes.
          </p>
          <p>
            Langelihle&apos;s story begins in a context of vulnerability. Having been married for just over a year, she became
            a survivor of domestic violence, which forced her to leave her marriage in search of safety and independence.
            With a young child aged two years and eight months, she turned to informal vending, selling beans and other
            goods at night to sustain herself and her child. Life was characterised by uncertainty and hardship until a
            Mashambanzou Care Trust community caregiver identified her and introduced her to the Care to Share Project in
            2025. Recognising an opportunity to change her circumstances, Langelihle expressed immediate interest. After
            a vulnerability assessment was conducted with other prospective beneficiaries by social workers, she was
            selected and enrolled in the programme.
          </p>
          <p>
            Despite the demanding nature of her daily life, Langelihle demonstrated exceptional commitment. She attended
            both theoretical classes and practical sessions spearheaded by a community master craftsperson in Caledonia,
            where she stays during the day, while continuing her vending activities at night to provide for her child. In
            addition to technical training in clothing and textiles, she also participated in life skills and
            entrepreneurship classes, equipping her with business and financial management skills essential for long-term
            sustainability.
          </p>
          <p>
            Upon completing the programme, Langelihle secured an attachment at a local workshop specialising in the
            production of teddy bears. Although her training had primarily focused on garment construction such as
            dressmaking, she quickly adapted to this new niche within the textile industry. Leveraging her foundational
            skills, she learnt how to cut and sew teddy bears, expanding her technical versatility and opening up new
            economic opportunities. Her ability to transfer skills across related industries highlights the effectiveness
            of the programme&apos;s holistic training approach.
          </p>
          <p>
            Notably, the workshop owner provides a safe and supportive environment, allowing her to bring her child to
            work. This support has given her peace of mind and enabled her to balance her roles as a mother and a worker
            without compromising either.
          </p>
          <p>
            Looking ahead, Langelihle envisions a future of independence and impact. She noted that, &ldquo;Within the next
            five years, I see myself owning a teddy bear factory which will not only generate income for myself but also
            train other vulnerable youths, just as I was trained by Mashambanzou and partners.&rdquo;
          </p>
          <p>
            Her journey from a survivor of domestic violence to a skilled artisan and aspiring entrepreneur embodies the
            transformative power of opportunity, support and determination.
          </p>
          <p>
            Langelihle&apos;s story is a powerful testament to how targeted interventions like the Care to Share Project can
            restore dignity, build resilience and create pathways out of poverty. It underscores the importance of
            combining technical skills training with psychosocial support and economic empowerment, particularly for
            vulnerable women and young mothers. Through her journey, Langelihle is not only rebuilding her life but also
            laying the foundation to uplift others in her community.
          </p>
        </div>
      </div>
    </article>
  );
}

