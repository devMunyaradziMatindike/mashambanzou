import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { formatNoticeDate, getNotices } from "@/lib/notices";

export const metadata: Metadata = {
  title: "Noticeboard | Mashambanzou Care Trust",
  description: "Official notices and announcements from Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

export default async function NoticeboardPage() {
  const notices = await getNotices();

  return (
    <>
      <Hero
        title="Notice"
        gradientText="board"
        subtitle="Official notices, announcements and updates from Mashambanzou Care Trust."
        primaryCta="Contact us"
        primaryHref="/contact"
        backgroundImageSrc="/review-pics/advocacy.jpg"
        backgroundImageAlt="Community announcements and outreach"
      />

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide max-w-4xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">Latest notices</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Official announcements published by Mashambanzou Care Trust.
            </p>
          </div>

          {notices.length ? (
            <div className="space-y-8">
              {notices.map((notice, index) => (
                <article
                  key={notice.id}
                  className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
                >
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-sunlight mb-3">
                      {formatNoticeDate(notice.published_at)}
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">{notice.title}</h3>

                    {notice.image_url ? (
                      <figure className="mt-6">
                        <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] bg-white/10">
                          <Image
                            src={notice.image_url}
                            alt={notice.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 896px"
                            priority={index === 0}
                          />
                        </div>
                      </figure>
                    ) : null}

                    {notice.excerpt ? (
                      <p className="mt-6 text-white/85 text-lg leading-relaxed">{notice.excerpt}</p>
                    ) : null}

                    <div className="mt-6 space-y-4 text-white/90 leading-relaxed">
                      {(notice.body || "")
                        .split(/\n{2,}/)
                        .filter(Boolean)
                        .map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-8 text-center text-white/85">
              No notices are published yet. Check back soon or contact us for urgent enquiries.
            </div>
          )}

          <p className="mt-10 text-center text-white/70 text-sm">
            For careers and tenders, visit{" "}
            <Link href="/careers" className="text-brand-sunlight font-medium hover:underline">
              Careers
            </Link>{" "}
            or{" "}
            <Link href="/invitation-to-tenders" className="text-brand-sunlight font-medium hover:underline">
              Invitation to Tenders
            </Link>
            .
          </p>
        </div>
      </PageSection>
    </>
  );
}
