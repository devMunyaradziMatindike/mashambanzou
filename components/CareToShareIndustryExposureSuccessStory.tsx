import Image from "next/image";

export function CareToShareIndustryExposureSuccessStory() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
          Care to Share · Harare CBD attachments
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
          Opening Doors to Opportunity, From Training to Industry Exposure
        </h2>

        <figure className="mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
            <Image
              src="/review-pics/care-to-share-industry-exposure.png"
              alt="Care to Share trainees gain industry exposure in clothing and motor mechanics (collage)"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
          </div>
          <figcaption className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Care to Share graduates during industrial attachments in Harare&apos;s CBD.
          </figcaption>
        </figure>

        <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
          <p>
            The Care to Share Project, implemented by Mashambanzou Care Trust and funded by Oak Foundation through Young
            Africa International, continues to demonstrate its transformative impact on vulnerable youths by bridging the
            gap between training and formal employment. Out of the 29 young people who completed the six-month training
            programme, 3 successfully transitioned into four-month industrial attachments with formally registered
            companies in the Harare Central Business District (CBD). This milestone reflects not only the quality of the
            training provided but also the growing confidence of industry players in the skills of these young graduates.
            Among them are Nyasha Gumunhu, Elisha Rutsito and Tanaka Gwatidzo, whose journeys highlight empowerment,
            resilience and opportunity.
          </p>

          <p>
            Nyasha Gumunhu, a young mother of a two-year-old son, is currently attached at a clothing manufacturing
            company where she specialises in clothing and textiles. Within just two months, she has mastered the use of
            an overlock machine and is now focusing on producing tracksuits and uniforms. Drawing from both the
            theoretical lessons from Ruwa Vocational Training Centre and practical training from a community master craft
            person, Nyasha has developed a deeper understanding of fabrics and their applications. Reflecting on her
            experience, she shared, &ldquo;The attachment has really improved my skills and boosted my confidence. I now
            understand different types of materials and which ones are best for different designs.&rdquo; Her attachment has
            not only strengthened her technical abilities but also positioned her competitively within the fashion
            industry.
          </p>

          <p>
            Elisha Rutsito, a 23-year-old aspiring fashion designer, is also thriving in his attachment within the CBD.
            Despite facing academic setbacks after failing his O-Level examinations, Elisha has found his passion and
            purpose in the fashion industry. He can now confidently sew tracksuits and T-shirts and operate multiple
            industrial machines, including the elasticator and flosser machines. His supervisor has described him as a
            fast learner who quickly adapts to new techniques. Elisha attributes his growth to both the technical
            training and the life skills sessions, particularly budgeting lessons that have helped him manage his income.
            &ldquo;I want to make a name for myself first in the fashion industry before starting my own business, I want to
            show the world that young people if given the opportunity they can really thrive. Thank you Mashambanzou for
            believing in us&rdquo; he explained. In addition to his attachment, Elisha runs a small side business rearing road
            runner chicken, with a current stock of 15, which he sells to support himself, demonstrating entrepreneurial
            initiative beyond the programme.
          </p>

          <p>
            Tanaka, a 19-year-old young woman working in the motor mechanics field, is breaking barriers in a
            male-dominated industry. Having started her attachment in mid-January at a formal automotive workshop in
            Harare CBD, she is now able to perform full vehicle servicing and suspension work under supervision. Coming
            from a disadvantaged background where she had to drop out of school due to financial constraints, Tanaka has
            embraced this opportunity with determination. She lives with her mother and sibling following the passing of
            her father when she was 7 years old, and her mother struggles to provide for the family. Despite these
            challenges, Tanaka has gained confidence and found her voice in the workplace. &ldquo;At first it was difficult
            because it&apos;s a male-dominated environment, but now I can speak out, ask questions and do the work,&rdquo; she
            said. She is now planning to obtain a driver&apos;s licence to further enhance her career prospects.
          </p>

          <p>
            The success of Nyasha, Elisha and Tanaka illustrates the tangible impact of the Care to Share Project in
            empowering vulnerable youth with marketable skills and facilitating their entry into formal industry spaces.
            Their placements in registered companies within Harare&apos;s CBD signify a critical shift from informal survival
            strategies to structured career pathways. These opportunities not only enhance their technical competencies
            but also open doors for long-term employment, entrepreneurship and self-reliance. Through such outcomes, the
            project continues to transform lives, restore hope and build a generation of skilled, confident and
            economically active young people.
          </p>
        </div>
      </div>
    </article>
  );
}

