"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { IntroVideo } from "@/components/IntroVideo";
import { LatestStories } from "@/components/LatestStories";

const marqueeItems = [
  "Clinical Healthcare",
  "VIAC Screening",
  "Community Strengthening",
  "OVC Support",
  "Houses of Safety",
  "Education for Life",
  "Care to Share",
  "Human Rights",
  "Advocacy",
];

const bentoItems = [
  {
    title: "Clinical Healthcare",
    subtitle: "MCU, VIAC & Palliative Care",
    href: "/our-impact/clinical-healthcare",
    className: "lg:col-span-8",
    aspect: "aspect-[16/10] sm:aspect-[4/3]",
    bg: "bg-brand-sunlight/10",
    label: "Healthcare",
    imageSrc: "/website/img-8219.jpg",
    imageAlt: "Clinical care at Mashambanzou Care Trust",
  },
  {
    title: "Community Strengthening",
    subtitle: "FCS & Psychosocial Support",
    href: "/our-impact/community-support",
    className: "lg:col-span-4 mt-8 md:mt-0",
    aspect: "aspect-[3/4]",
    bg: "bg-brand-green/10",
    label: "Support",
    imageSrc: "/website/outreach-tablets.jpg",
    imageAlt: "Community outreach support visit",
  },
  {
    title: "Orphans and Vulnerable Children (OVC) Support",
    subtitle: "OVC, Houses of Safety",
    href: "/our-impact/child-protection-education",
    className: "lg:col-span-5",
    aspect: "aspect-square",
    bg: "bg-brand-dark/10",
    label: "Children",
    imageSrc: "/website/school-pads.jpg",
    imageAlt: "School support and dignity packs distribution",
  },
  {
    title: "Promotion of Human Rights",
    subtitle: "Care to Share, Livelihoods",
    href: "/our-impact/empowerment-advocacy",
    className: "lg:col-span-7",
    aspect: "aspect-[16/10]",
    bg: "bg-brand-dark",
    label: "Empowerment",
    imageSrc: "/website/poultry-project.jpg",
    imageAlt: "Livelihoods and income-generating project",
  },
];

const stats = [
  { value: "30+", label: "Years of service", gradient: "from-brand-sunlight to-brand-green" },
  { value: "30", label: "Bed Mashambanzou Care Unit", gradient: "from-brand-green to-brand-sunlight" },
  { value: "Multi-ward", label: "Harare, Zvimba & Goromonzi", gradient: "from-brand-sunlight to-brand-earth" },
  { value: "100%", label: "Compassion-led", gradient: "from-brand-green to-brand-earth" },
];

const serviceCards = [
  {
    title: "Integrated Healthcare",
    description: "30-bed MCU, VIAC cervical cancer screening (since April 2023), palliative care, treatment of opportunistic infections, TB testing. On-site and outreach clinics.",
    items: ["MCU Inpatient Care", "VIAC Screening", "Palliative Care"],
    icon: "🩺",
    bg: "bg-brand-dark/15 border border-white/10 backdrop-blur",
    accent: "bg-brand-sunlight/25 text-white",
    imageSrc: "/website/discharge-hamper-1.jpg",
    imageAlt: "Patient receiving a farewell hamper upon discharge",
  },
  {
    title: "Community Strengthening",
    description: "Family Centred Support (FCS), psychosocial support for SGBV survivors, Houses of Safety with Department of Social Development, and Education for Life in Nyabira and Mt Hampden.",
    items: ["FCS & PSS", "Houses of Safety", "OVC Support"],
    icon: "🤝",
    bg: "bg-brand-green text-white",
    accent: "bg-white/20 text-brand-sunlight",
    featured: true,
    imageSrc: "/website/outreach-program-1.jpg",
    imageAlt: "Outreach programme in the community",
  },
  {
    title: "Promotion of Human Rights",
    description: "Care to Share TVET partnership with Young Africa in Caledonia, livelihoods, SRHR advocacy and stigma reduction across Harare, Zvimba and Goromonzi.",
    items: ["Vocational Training", "Livelihoods", "SRHR Advocacy"],
    icon: "⚡",
    bg: "bg-brand-dark/15 border border-white/10 backdrop-blur",
    accent: "bg-white/15 text-white",
    imageSrc: "/website/world-aids-day.jpg",
    imageAlt: "Community advocacy event",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="We Help Build AIDS-Free, Resilient"
        gradientText="Communities."
        subtitle="Mashambanzou Care Trust realises healthy, socially inclusive communities, free of AIDS through comprehensive HIV services, OVC support, and community strengthening."
        primaryCta="Ask For Help"
        secondaryCta="Donate"
        primaryHref="/get-involved"
        secondaryHref="https://paynow.co.zw/mashambanzou"
        badge="Serving Harare & Beyond"
        backgroundImages={[
          { src: "/review-pics/outreach.png", alt: "Outreach clinic visit in the community", label: "Outreach" },
          { src: "/review-pics/mashambanzou care unit.jpg", alt: "Mashambanzou Care Unit facility", label: "Care Unit (MCU)" },
          { src: "/review-pics/advocacy.jpg", alt: "Community advocacy and awareness activities", label: "Advocacy" },
          { src: "/review-pics/hiv testing.jpg", alt: "HIV testing and counselling support", label: "HIV testing" },
          { src: "/review-pics/Institutional Income Generating project.jpg", alt: "Income-generating activities project", label: "Livelihoods" },
        ]}
      />

      {/* Vision | Mission | Values strip */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-sunlight mb-2">
                Vision
              </h3>
              <p className="text-white font-medium">AIDS free, resilient and empowered communities.</p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90 mb-2">
                Mission
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Healthy, socially inclusive communities, free of AIDS through comprehensive HIV services, OVC support and
                community strengthening.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-sunlight mb-2">
                Values
              </h3>
              <p className="text-white/85 text-sm">
                Participation • Compassion • Transparency and Accountability • Human Dignity • Empowerment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-[16/10] sm:aspect-[4/3] max-h-[320px] relative">
              <Image
                src="/website/discharge-hamper-2.jpg"
                alt="A discharged patient receiving a farewell hamper"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">
                Who we are
              </h2>
              <p className="text-white/85 text-lg leading-relaxed mb-4">
                Mashambanzou Care Trust (MCT) is a faith and welfare based, non-governmental organisation focused on
                disseminating accurate information, care and support for people living with HIV (PLWHIV), and prevention
                of the spread of HIV. MCT recognised the effects of the disease and innovatively created a Family
                Centred Support model.
              </p>
              <Link
                href="/our-identity"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
              >
                Our story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IntroVideo />

      {/* Marquee - renewal, nature (green) */}
      <div className="py-8 sm:py-12 bg-brand-green -rotate-1 overflow-hidden border-y-2 border-brand-dark/20">
        <div className="whitespace-nowrap flex gap-10 animate-marquee no-scrollbar">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white flex items-center gap-6 font-heading">
              {item}
              <span className="w-3 h-3 rounded-full bg-brand-sunlight flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* UVP / What makes us different */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-4 block">
                What makes us different
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
                Integrated 30-bed care unit + deep community outreach
              </h2>
              <p className="text-white/85 text-lg leading-relaxed mb-4">
                In the Harare Metropolitan area, MCT stands out through its integrated 30-bed Mashambanzou Care Unit
                (MCU) combined with deep community outreach. We deliver on-site clinical care—HIV testing and counselling,
                treatment of opportunistic infections, TB testing, palliative care and VIAC cervical cancer screening—plus
                outreach clinics in Mbare, Hopley, Glen Norah, Highfield, Dzivarasekwa and beyond.
              </p>
              <Link
                href="/our-impact"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
              >
                Our impact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-[16/10] sm:aspect-[4/3] relative">
              <Image
                src="/website/img-4136.jpg"
                alt="Mashambanzou Care Trust clinical care"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help - Bento */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 sm:mb-16">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">
                How We Help
              </h2>
              <p className="text-white/80 text-lg">Integrated care across Harare and beyond.</p>
            </div>
            <Link
              href="/our-impact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide border-b-2 border-white/40 pb-1 hover:text-brand-sunlight hover:border-brand-sunlight transition-colors"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7h-10v10" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {bentoItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${item.className} group cursor-pointer`}>
                <div
                  className={`relative overflow-hidden rounded-[2.5rem] ${item.bg} ${item.aspect} mb-6 hover-pop border border-white/15`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                  <div className="absolute top-6 left-6 bg-brand-dark/25 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/10">
                    {item.label}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white font-heading">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-dark/40 group-hover:text-white group-hover:border-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Why Mashambanzou */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur rounded-[3rem] mx-2 sm:mx-4 mb-4 border border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-white">
              We don&apos;t just provide care. We build resilience.
            </h2>
            <p className="text-white/80 text-lg md:text-xl">
              Combining clinical excellence with community-centred support and advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className={`p-6 sm:p-10 rounded-[2rem] shadow-sm transition-all duration-300 group ${
                  card.featured ? "bg-brand-green text-white md:-translate-y-4 shadow-xl" : card.bg
                } hover:shadow-xl overflow-hidden`}
              >
                <div className="rounded-xl overflow-hidden bg-white/10 aspect-video mb-6 border border-white/10 relative">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${card.accent} group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4">{card.title}</h3>
                <p
                  className={`leading-relaxed mb-6 ${
                    card.featured ? "text-white/85" : "text-white/80"
                  }`}
                >
                  {card.description}
                </p>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-3 text-sm font-medium ${
                        card.featured ? "text-white/90" : "text-white/90"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full flex-shrink-0 ${card.featured ? "bg-brand-sunlight/50" : "bg-brand-sunlight/30"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className={`font-heading text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Where we work */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4">
                Where we work
              </h2>
              <p className="text-white/85 mb-6">
                Harare Metropolitan • Zvimba Rural District • Goromonzi Rural District
              </p>
              <p className="text-white/80 text-sm mb-6">
                Tafara, Mabvuku, Glen Norah, Highfield, Hopley, Mbare, Dzivarasekwa Main and Extension; Wards 24, 25, 26, 35 in Zvimba; Caledonia in Goromonzi.
              </p>
              <Link
                href="/where-we-work"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-sunlight transition-colors"
              >
                See our geographic footprint
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 aspect-video relative">
              <Image
                src="/website/outreach-programme-2.jpg"
                alt="Community outreach across our service areas"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest stories */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div className="max-w-2xl">
              <span className="text-white/85 font-semibold tracking-widest uppercase text-xs mb-3 block">
                Latest stories
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Photos, videos and updates from the field
              </h2>
              <p className="text-white/80 mt-3">
                The newest posts appear here automatically once they’re published from the admin portal.
              </p>
            </div>
            <Link
              href="/latest-stories"
              className="inline-flex items-center px-6 py-3 bg-white/10 border-2 border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/15 hover:border-white/30 transition-all"
            >
              View all
            </Link>
          </div>

          <LatestStories limit={3} />
        </div>
      </section>

      {/* Partners & Funders */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Partners &amp; Funders
            </h2>
            <p className="text-white/80">
              We’re grateful for the partners and donors who strengthen our work across Harare, Zvimba and Goromonzi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Current partners
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                <a
                  href="/get-involved/partner"
                  className="group flex items-center justify-center rounded-xl bg-white/10 border border-white/15 p-4 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  aria-label="Little Company of Mary"
                >
                  <Image
                    src="/partners/little-company-of-mary.png"
                    alt="Little Company of Mary"
                    width={320}
                    height={120}
                    className="max-h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="/get-involved/partner"
                  className="group flex items-center justify-center rounded-xl bg-white/10 border border-white/15 p-4 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  aria-label="Young Africa International"
                >
                  <Image
                    src="/partners/young-africa-international.jpeg"
                    alt="Young Africa International"
                    width={220}
                    height={220}
                    className="max-h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-dark/15 backdrop-blur p-6 sm:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Past donors
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                {[
                  { src: "/partners/cafod.png", alt: "CAFOD" },
                  { src: "/partners/australian-aid.png", alt: "Australian Aid" },
                  { src: "/partners/oak-foundation.png", alt: "OAK Foundation" },
                  { src: "/partners/sida.png", alt: "Sida (Sweden Sverige)" },
                  { src: "/partners/misean-cara.jpg", alt: "Misean Cara" },
                ].map((logo) => (
                  <div
                    key={logo.src}
                    className="flex items-center justify-center rounded-xl bg-white/10 border border-white/15 p-4 h-24 hover:border-white/25 hover:bg-white/15 hover:shadow-sm transition-all"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={260}
                      height={120}
                      className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance / Donors teaser */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-brand-cream/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-dark/90 text-lg mb-4">
            For institutional donors: governance information, leadership profiles and due diligence materials are
            available on our Board &amp; Governance page.
          </p>
          <Link
            href="/our-identity/board-and-governance"
            className="inline-flex items-center gap-2 text-brand-green font-medium hover:text-brand-sunlight transition-colors"
          >
            View governance
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-green text-white rounded-[3rem] mt-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-sunlight/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Get Involved
          </h2>
          <p className="text-white/85 max-w-xl mx-auto mb-10">
            Donate, volunteer, partner or host an event. Your support helps realise AIDS-free, resilient and
            empowered communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://paynow.co.zw/mashambanzou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-dark rounded-full text-base font-medium hover:bg-brand-sunlight hover:text-brand-dark hover:scale-105 transition-all duration-300"
            >
              Donate
            </a>
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-base font-medium hover:bg-white/10 transition-all"
            >
              Partner
            </Link>
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-base font-medium hover:bg-white/10 transition-all"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-base font-medium hover:bg-white/10 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
