import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Focus Areas | Mashambanzou Care Trust",
  description:
    "Integrated clinical healthcare, community support, child protection and youth empowerment across Harare, Zvimba and Goromonzi.",
};

function ImpactSection({
  title,
  imageSrc,
  imageAlt,
  images,
  children,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  images?: readonly { src: string; alt: string }[];
  children: React.ReactNode;
}) {
  const list = Array.isArray(images) && images.length ? images : [{ src: imageSrc, alt: imageAlt }];
  return (
    <div className="grid md:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start">
      <div className="max-w-[320px] mx-auto md:mx-0 shrink-0 w-full">
        {list.length > 1 ? (
          <div className="grid grid-cols-2 gap-3">
            {list.slice(0, 3).map((img, idx) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 ${
                  idx === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-brand-dark/5 to-transparent" />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-[16/10] sm:aspect-[4/3] relative">
            <Image
              src={list[0]?.src ?? imageSrc}
              alt={list[0]?.alt ?? imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div>
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">{title}</h2>
        <div className="text-white/85 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function OurImpactPage() {
  return (
    <>
      <Hero
        title="Our Focus Areas"
        subtitle="From the 30-bed MCU to community outreach—we deliver integrated care across Harare Metropolitan, Zvimba and Goromonzi."
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide space-y-16">
          <ImpactSection
            title="Mashambanzou Care Unit (MCU)"
            imageSrc="/review-pics/Mashambanzou Care Trust (blur faces.jpg"
            imageAlt="Clinical care at Mashambanzou Care Unit"
            images={[
              {
                src: "/review-pics/Mashambanzou Care Trust (blur faces.jpg",
                alt: "Mashambanzou Care Trust care and support",
              },
              { src: "/review-pics/mashambanzou care unit.jpg", alt: "Mashambanzou Care Unit exterior" },
              { src: "/review-pics/Mashambanzou Care Unit female ward..jpg", alt: "Mashambanzou Care Unit ward" },
            ]}
          >
            <p>
              MCU is a 30 bedded unit caring for all patients from marginalised communities who are living with HIV. The
              Care Unit provides a safe haven for patients who are not able to afford health care services at the public
              health institutions, as they receive the health care services courtesy of MCT funding partners. The Care
              Unit offers comprehensive and integrated healthcare to People Living with HIV which include but not limited
              to treatment of opportunistic infections, blood tests for TB and VIAC screening.
            </p>
          </ImpactSection>

          <ImpactSection
            title="HIV Testing and Counselling Services"
            imageSrc="/review-pics/hiv testing.jpg"
            imageAlt="HIV testing and counselling support"
          >
            <p>
              In the fight against HIV early diagnosis and access to treatment are vital. Mashambanzou Care Trust is
              playing a crucial role in providing HIV testing and counselling services, ensuring that individuals have
              the knowledge, care, treatment and support needed to protect their health and the well-being of their
              partners.
            </p>
          </ImpactSection>

          <ImpactSection
            title="VIAC Services"
            imageSrc="/review-pics/Recording of  VIAC screening results from Camera.jpg"
            imageAlt="VIAC screening results being recorded"
          >
            <p>
              Mashambanzou Care Trust is committed to providing comprehensive and integrated healthcare services to
              women living with HIV. Since April 26, 2023, we have included VIAC (Visual Inspection with Acetic Acid and
              Cervicography) as part of our diagnostic and treatment offerings. This vital service is provided free of
              charge and is available both at our Mashambanzou Care Unit and through outreach programs in hard-to-reach
              communities.
            </p>
            <p>
              In addition to serving HIV-positive women, the VIAC program is also open to all sexually active women,
              regardless of their HIV status. This initiative ensures early detection and timely treatment, supporting
              the overall well-being and health of women across Zimbabwe.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Outreach Clinics for Opportunistic Infections (OIs) Treatments"
            imageSrc="/review-pics/outreach.png"
            imageAlt="Outreach clinic providing community health services"
          >
            <p>
              Mashambanzou Care Trust operates outreach clinics as part of its FCS project to provide comprehensive care
              and support services to individuals and communities affected by HIV and AIDS in Mbare, Glen Norah,
              Highfield, Dzivarasekwa, Dzivarasekwa Extension, Hopley, Mabvuku, Tafara in Harare; hard-to-reach areas of
              Wards 24, 25, 26 and 35 in Zvimba District; and Caledonia in Goromonzi District.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Family Centred Support (FCS)"
            imageSrc="/review-pics/putting children first.jpg"
            imageAlt="Family centred support in the community"
          >
            <p>
              The Family Centered Support (FCS) Project focuses on improving the lives of PLWHIV, supporting Orphans and
              Vulnerable Children (OVC) to reach their full potential and building the capacity of communities to
              effectively deal with Sexual and Reproductive Health Rights (SRHR) issues. MCT offers Psychosocial Support
              (PSS) to survivors of Sexual Gender Based Violence (SGBV) and other forms of abuse using the multi-sectoral
              approach in the management of these cases.
            </p>
          </ImpactSection>

          <ImpactSection
            title="SRHR, Pregnant Teen Mothers and Adolescent Support"
            imageSrc="/review-pics/putting children first.jpg"
            imageAlt="SRHR education and adolescent support"
          >
            <p>
              Teen pregnancies have been prevalent in Zimbabwe due to poverty, cultural and religious beliefs which
              hindered educational advancement of women and girls, leaving them vulnerable to economic hardships and
              abuse. As a result, MCT came up with a project, supported by LCM USA to reduce the vulnerability of young
              women and girls offering SRHR education during outreaches to help these young women and girls make informed
              choices about their sexuality.
            </p>
          </ImpactSection>

          <ImpactSection
            title="OVC Support"
            imageSrc="/review-pics/ovc support.jpg"
            imageAlt="Support for orphans and vulnerable children"
          >
            <p>
              MCT&apos;s areas of implementation are characterised by extreme poverty where parents/guardians cannot
              afford to pay school fees for their children. To address this challenge, MCT initiated various projects to
              offer support ranging from school fees payments, provision of school uniforms and amongst other learning
              materials, registration of birth certificates and national identity cards.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Houses of Safety"
            imageSrc="/review-pics/House of Safety.jpg"
            imageAlt="A House of Safety supporting vulnerable children"
          >
            <p>
              Mashambanzou Care Trust (MCT) plays a crucial role in providing care and support for vulnerable children
              in Zimbabwe. One of its key initiatives is the establishment of Houses of Safety, which serve as
              temporary homes for orphaned and vulnerable children (OVC) who are survivors of abuse whilst the
              Department of Social Development maps a way forward for their safe keeping. In collaboration with the
              Department of Social Development family assessments are conducted before placement of these children in
              houses of safety.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Institutional Income Generating Activities"
            imageSrc="/review-pics/Institutional Income Generating project.jpg"
            imageAlt="Income generating activities and livelihoods support"
          >
            <p>
              In addition to MCT vital healthcare and social services, Mashambanzou Care Trust has successfully
              implemented a range of income-generating activities that empowered the communities we serve. These
              activities not only generated income but also foster skills development, entrepreneurship and self-reliance
              among beneficiaries. Some of the impactful income-generating initiatives supported by MCT include:
            </p>
            <ol>
              <li>Agricultural Projects</li>
              <li>Catering and Food Services</li>
              <li>Skills Training and Entrepreneurship Development</li>
            </ol>
          </ImpactSection>

          <ImpactSection
            title="Advocacy"
            imageSrc="/review-pics/advocacy.jpg"
            imageAlt="Community advocacy event"
          >
            <p>
              Mashambanzou Care Trust has been at the forefront of advocacy for HIV and AIDS awareness and social
              justice. Guided by its mission to improve the lives of individuals and families affected by HIV and AIDS,
              Mashambanzou engages in impactful advocacy initiatives that aim to challenge stigma, promote human rights
              and drive positive change.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Education for Life"
            imageSrc="/review-pics/ovc support.jpg"
            imageAlt="Education for Life support in schools"
          >
            <p>
              The government of Zimbabwe encourages access to basic quality education for every child through payment of
              fees for vulnerable children under the BEAM (Basic Education Assistance Module) programme. However, the
              funding under this programme is not adequate to assist every orphan and vulnerable child in Zimbabwe so,
              to complement government&apos;s efforts, MCT initiated the Education for Life project. This is a Misean
              Cara funded project which is implemented in selected high-density suburbs of Harare and the peri-urban
              settlements of Zvimba Rural District namely Mbare, Hopley, Dzivarasekwa Extension, Nyabira, Mt Hampden,
              Stapleford. The project seeks to address the challenges faced by orphans and vulnerable children in
              accessing basic education.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Putting Children First"
            imageSrc="/review-pics/Putting Children First ( blur faces) copy.jpg"
            imageAlt="Putting Children First programme participants"
          >
            <p>
              Putting Children First was a Caritas Australia Fund CAFOD funded project that was implemented by MCT in the
              Southern District of Harare namely Mbare, Hopley and Glen Norah. The project was aimed at addressing the
              specific needs and rights of children in impoverished communities. It sought to improve the well-being and
              opportunities available to children, support children&apos;s development and ensure their rights were
              upheld by focusing on various aspects such as education, healthcare and child protection.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Care to Share"
            imageSrc="/review-pics/Care to Share beneficiary during graduation.jpg"
            imageAlt="Skills training and practical work supporting livelihoods"
            images={[
              {
                src: "/review-pics/Care to Share beneficiary during graduation.jpg",
                alt: "Care to Share beneficiary during graduation",
              },
              { src: "/review-pics/caretoshare.jpg", alt: "Care to Share vocational training in action" },
            ]}
          >
            <p>
              Mashambanzou Care Trust, in partnership with Young Africa International, is implementing the Care to
              Share – Youth Empowerment for All project, in Caledonia, Goromonzi District. It aims to empower 30
              disadvantaged youth through a market-driven, TVET-based economic empowerment program. Beneficiaries will
              engage in a six-month vocational training program, which includes theoretical instruction delivered by
              qualified trainers from Ruwa Vocational Training Centre. They will also get hands-on training through
              internships with experienced Mastercraft persons within their own communities. Upon successful completion,
              beneficiaries will be awarded a Certificate of Competency, recognising their skills and enhancing their
              employability or capacity for self-employment.
            </p>
          </ImpactSection>

          <ImpactSection
            title="Child Protection"
            imageSrc="/review-pics/child protection.jpg"
            imageAlt="Child protection programme support"
          >
            <p>
              Mashambanzou Care Trust is actively promoting child protection and safeguarding of children&apos;s rights
              through a comprehensive, community-based approach. The initiative aims to create safer environments for
              children by strengthening awareness, advocacy and local accountability structures.
            </p>
            <p>Key activities include:</p>
            <p>
              Establishment and training of School-Based Child Protection Committees comprising of learners. Empowering the
              committee, educators and school staff to identify, prevent, and respond to child protection concerns.
              These include but not limited to:
            </p>
            <ul>
              <li>Community Dialogue Sessions</li>
              <li>Mobile Roadshows</li>
              <li>Radio Programs</li>
              <li>Policy Engagement</li>
            </ul>
            <p>
              Through these coordinated efforts, Mashambanzou Care Trust is working to build a culture of child
              protection and ensure that every child has the opportunity to grow up in a safe, supportive and
              rights-respecting environment.
            </p>
          </ImpactSection>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-narrow text-center">
          <p className="text-white/80">
            See also our{" "}
            <Link href="/where-we-work" className="text-brand-sunlight font-medium hover:underline">
              geographic footprint
            </Link>{" "}
            and{" "}
            <Link href="/why-mashambanzou" className="text-brand-sunlight font-medium hover:underline">
              why Mashambanzou
            </Link>
            .
          </p>
        </div>
      </PageSection>
    </>
  );
}
