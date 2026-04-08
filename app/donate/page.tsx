import Image from "next/image";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Mashambanzou Care Trust",
  description:
    "Support Mashambanzou Care Trust. Donate online and support our work, or give in-kind donations (wish list). Equipment, nutritional support, vehicles, toiletries.",
};

const paynowDonateUrl = "https://paynow.co.zw/mashambanzou";

export default function DonatePage() {
  return (
    <>
      <Hero
        title="Donate"
        subtitle="Your contribution helps us provide comprehensive HIV services, OVC support and community strengthening."
        backgroundImageSrc="/website/discharge-hamper-1.jpg"
        backgroundImageAlt="Patient receiving a farewell hamper upon discharge"
      />
      <PageSection className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
              <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-4 block">
                Donate online
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-brand-dark mb-4">
                Make a secure donation via PayNow
              </h2>
              <p className="text-brand-dark/80 text-lg leading-relaxed mb-8">
                Your gift supports integrated healthcare, outreach, child protection and community strengthening.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href={paynowDonateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block focus:outline-none focus:ring-2 focus:ring-brand-sunlight focus:ring-offset-2 rounded-lg transition opacity-95 hover:opacity-100"
                  aria-label="Donate via PayNow"
                >
                  <Image
                    src="/button_donate_large.svg"
                    alt="Donate via PayNow"
                    width={320}
                    height={130}
                    className="h-auto w-[280px] sm:w-[320px]"
                  />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-green text-brand-dark text-base font-medium hover:bg-brand-green/10 transition-colors"
                >
                  Need help?
                </Link>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {[
                  { title: "Secure", desc: "Opens PayNow in a new tab" },
                  { title: "Fast", desc: "Quick checkout and confirmation" },
                  { title: "Direct", desc: "Funds support our programmes" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-brand-dark">{item.title}</div>
                    <div className="text-xs text-brand-dark/70 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-100 overflow-hidden shadow-sm">
              <div className="relative aspect-[16/10] sm:aspect-[4/3]">
                <Image
                  src="/website/outreach-program-1.jpg"
                  alt="Community outreach programme"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-heading text-xl sm:text-2xl font-semibold leading-tight">
                    Your donation meets urgent needs
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    From clinical care to outreach support—your gift helps communities thrive.
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8 bg-white">
                <div className="flex flex-wrap gap-2">
                  {["Healthcare", "Outreach", "Children", "Livelihoods"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-brand-cream/60 border border-slate-200 text-sm text-brand-dark/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-4 block">
              Wish List
            </span>
            <h2 className="font-heading heading-section text-brand-dark mb-4">
              Wish List
            </h2>
            <p className="text-brand-dark/90 text-lg leading-relaxed">
              At Mashambanzou Care Trust, we believe in the power of tangible contributions to make a real difference in
              the lives of those in need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl">🧰</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-dark">Equipment</h3>
                  <p className="text-sm text-brand-dark/70 mt-1">Tools that improve care delivery and coordination.</p>
                </div>
              </div>
              <ul className="space-y-2 text-brand-dark/85">
                <li>Laptops</li>
                <li>Hospital equipment</li>
                <li>VIAC equipment</li>
                <li>Office equipment</li>
                <li>Camera and camera equipment</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl">🥣</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-dark">Nutritional Support</h3>
                  <p className="text-sm text-brand-dark/70 mt-1">Nutrition support for recovery and stability.</p>
                </div>
              </div>
              <ul className="space-y-2 text-brand-dark/85">
                <li>MCU patients nutritional support</li>
                <li>Mlambo and House of Safety nutritional support</li>
                <li>Nenyere ECD Learning Center nutritional support</li>
                <li className="text-brand-dark/70 italic">(Starches, proteins, vitamins)</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl">🚐</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-dark">Vehicles</h3>
                  <p className="text-sm text-brand-dark/70 mt-1">Transport that expands reach and responsiveness.</p>
                </div>
              </div>
              <ul className="space-y-2 text-brand-dark/85">
                <li>Project vehicles</li>
                <li>Ambulance vehicle</li>
                <li>Containers for outreach clinics</li>
                <li>Containers for District office use</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-2xl">🧼</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-dark">Toiletries & Detergents</h3>
                  <p className="text-sm text-brand-dark/70 mt-1">Hygiene items for facilities and households.</p>
                </div>
              </div>
              <ul className="space-y-2 text-brand-dark/85">
                <li>Hospital detergents</li>
                <li>Laundry detergents</li>
                <li>Patients toiletries</li>
                <li>House of Safety toiletries</li>
                <li>Nenyere ECD Learning Center toiletries</li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-12">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-brand-dark mb-2">
                  Want to donate items?
                </h3>
                <p className="text-brand-dark/80">
                  We’ll help you coordinate drop-off or delivery and share the most urgent needs.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors"
              >
                Contact us
              </Link>
            </div>
            <p className="text-center text-brand-dark/70 italic mt-10">
              Thank you for visiting our site, God bless you.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
