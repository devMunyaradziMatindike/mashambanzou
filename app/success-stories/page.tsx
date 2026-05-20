import Image from "next/image";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Success stories | Mashambanzou Care Trust",
  description: "Success stories and field updates from Mashambanzou Care Trust.",
};

export const dynamic = "force-dynamic";

type SuccessStory = {
  id: number | string;
  title: string;
  excerpt?: string | null;
  body?: string | null;
  published_at?: string | null;
  image_url?: string | null;
};

async function getStories(): Promise<SuccessStory[]> {
  const baseUrl = process.env.LARAVEL_API_URL;
  if (!baseUrl) return [];

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/success-stories`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = (await res.json()) as { stories?: SuccessStory[] };
    return Array.isArray(json.stories) ? json.stories : [];
  } catch {
    return [];
  }
}

function formatDate(value?: string | null) {
  if (!value) return "Success story";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function SuccessStoriesPage() {
  const stories = await getStories();

  return (
    <>
      <Hero
        title="Success"
        gradientText="stories"
        subtitle="Stories, photos and videos that highlight the change happening across our communities."
        primaryCta="Donate"
        primaryHref="https://paynow.co.zw/mashambanzou"
      />

      <PageSection className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white">Success stories</h2>
              <p className="text-white/80 mt-2">
                These stories are managed from the admin panel, so updates and deletions appear on the website automatically.
              </p>
            </div>
          </div>

          {stories.length ? (
            <div className="space-y-12 sm:space-y-14">
              {stories.map((story, index) => (
                <article
                  key={story.id}
                  className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden shadow-sm shadow-brand-dark/15"
                >
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
                      {formatDate(story.published_at)}
                    </p>
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-balance">
                      {story.title}
                    </h2>

                    {story.image_url ? (
                      <figure className="mt-8">
                        <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[21/10] bg-white/10">
                          <Image
                            src={story.image_url}
                            alt={story.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 1152px"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 pointer-events-none" />
                        </div>
                      </figure>
                    ) : null}

                    <div className="mt-8 space-y-4 text-white/90 leading-relaxed text-base">
                      {(story.body || story.excerpt || "")
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
            <div className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-8 text-white/85">
              No success stories are published yet. Add stories in the Laravel admin panel to show them here.
            </div>
          )}
        </div>
      </PageSection>
    </>
  );
}

