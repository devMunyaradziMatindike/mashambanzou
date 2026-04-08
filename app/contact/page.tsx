import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mashambanzou Care Trust",
  description:
    "Contact Mashambanzou Care Trust. Phone, email, address and map. 40 Sandowns Rd, Waterfalls, Harare. Enquiries, donations and partnerships.",
};

const ADDRESS = "40 Sandowns Rd, Waterfalls, Harare";
const GOOGLE_MAPS_QUERY = encodeURIComponent(ADDRESS);
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${GOOGLE_MAPS_QUERY}&output=embed`;
const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${GOOGLE_MAPS_QUERY}`;

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact Us" subtitle="Get in touch for enquiries, support or partnership." />

      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border-2 border-brand-green/20 bg-brand-cream/30 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-brand-dark mb-2">
                  Get help fast
                </h2>
                <p className="text-brand-dark/80">
                  Projects: 8am – 5pm (weekdays only) • Mashambanzou Care Unit: Opens everyday
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+263711492343"
                  className="inline-flex items-center px-5 py-3 rounded-full bg-white border-2 border-brand-green text-brand-dark font-medium hover:bg-brand-sunlight hover:border-brand-sunlight transition-colors"
                >
                  Call Projects: +263 711 492 343
                </a>
                <a
                  href="tel:+263777681186"
                  className="inline-flex items-center px-5 py-3 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-sunlight hover:text-brand-dark transition-colors"
                >
                  Call Care Unit: +263 777 681 186
                </a>
                <Link
                  href={MAPS_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-full border-2 border-brand-sunlight text-brand-dark font-medium hover:bg-brand-sunlight transition-colors"
                >
                  Open in Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection className="section-padding bg-white">
        <div className="container-wide max-w-5xl">
          <p className="text-brand-dark/80 text-lg mb-12 text-center">
            For general enquiries, donation details, volunteer opportunities, partnership discussions or media
            requests, please use the contact details below.
          </p>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <div className="rounded-2xl border-2 border-brand-green/20 bg-brand-cream/30 p-8 sm:p-10">
              <h2 className="font-heading text-xl font-semibold text-brand-dark mb-6">Contact information</h2>
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm font-medium text-brand-dark/70 uppercase tracking-wide mb-1">Phone</dt>
                  <dd className="text-brand-dark">
                    <div className="space-y-1">
                      <div>
                        <span className="text-brand-dark/70 text-sm">Projects:</span>{" "}
                        <a href="tel:+263711492343" className="hover:text-brand-sunlight transition-colors">
                          +263 711 492 343
                        </a>
                      </div>
                      <div>
                        <span className="text-brand-dark/70 text-sm">Care Unit:</span>{" "}
                        <a href="tel:+263777681186" className="hover:text-brand-sunlight transition-colors">
                          +263 777 681 186
                        </a>
                      </div>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-brand-dark/70 uppercase tracking-wide mb-1">Email</dt>
                  <dd>
                    <a
                      href="mailto:info@mashambanzou.co.zw"
                      className="text-brand-dark hover:text-brand-sunlight transition-colors"
                    >
                      info@mashambanzou.co.zw
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-brand-dark/70 uppercase tracking-wide mb-1">Address</dt>
                  <dd className="text-brand-dark">{ADDRESS}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-brand-dark/70 uppercase tracking-wide mb-1">
                    Working hours
                  </dt>
                  <dd className="text-brand-dark">
                    <div className="space-y-1">
                      <div>
                        <span className="text-brand-dark/70 text-sm">Projects:</span> 8am – 5pm (weekdays only)
                      </div>
                      <div>
                        <span className="text-brand-dark/70 text-sm">Mashambanzou Care Unit:</span> Opens everyday
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border-2 border-brand-green/20 overflow-hidden bg-slate-100 min-h-[280px] sm:min-h-[320px]">
              <iframe
                title="Mashambanzou Care Trust location map"
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[280px] sm:min-h-[320px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <p className="text-center">
            <Link
              href={MAPS_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-green font-medium hover:text-brand-sunlight transition-colors"
            >
              Open in Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  );
}
