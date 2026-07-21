import Image from "next/image";
import { DonateForm } from "@/components/DonateForm";
import { Hero } from "@/components/Hero";
import { PageSection } from "@/components/PageSection";
import { ContentText } from "@/components/ContentText";
import { getWebsiteContent, createContentTranslator } from "@/lib/website-content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Mashambanzou Care Trust",
  description:
    "Support Mashambanzou Care Trust. Donate online and support our work, or give in-kind donations (wish list). Equipment, nutritional support, vehicles, toiletries.",
};

export const dynamic = "force-dynamic";

const paynowDonateUrl = "https://paynow.co.zw/mashambanzou";
const featureIndices = [0, 1, 2] as const;
const wishlistIndices = [0, 1, 2, 3] as const;
const wishlistItemCounts = [5, 4, 4, 5] as const;
const wishlistIcons = ["🧰", "🥣", "🚐", "🧼"] as const;
const tagIndices = [0, 1, 2, 3] as const;

export default async function DonatePage() {
  const content = await getWebsiteContent();
  const t = createContentTranslator(content);

  return (
    <>
      <Hero
        title={t("donate.hero.title")}
        subtitle={t("donate.hero.subtitle")}
        backgroundImageSrc="/review-pics/donation page.jpg"
        backgroundImageAlt="Patient receiving a farewell hamper upon discharge"
      />
      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 shadow-sm shadow-brand-dark/20">
              <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
                {t("donate.online.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                {t("donate.online.title")}
              </h2>
              <ContentText
                contentKey="donate.online.body"
                value={t("donate.online.body")}
                as="p"
                className="text-white/80 text-lg leading-relaxed mb-8"
              />

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href={paynowDonateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block focus:outline-none focus:ring-2 focus:ring-brand-sunlight focus:ring-offset-2 rounded-lg transition opacity-95 hover:opacity-100"
                  aria-label={t("donate.online.paynow")}
                >
                  <Image
                    src="/button_donate_large.svg"
                    alt={t("donate.online.paynow")}
                    width={320}
                    height={130}
                    className="h-auto w-[280px] sm:w-[320px]"
                  />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white text-base font-medium hover:bg-white/10 transition-colors"
                >
                  {t("donate.online.help")}
                </Link>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {featureIndices.map((index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="text-sm font-semibold text-white">
                      {t(`donate.online.features.${index}.title`)}
                    </div>
                    <ContentText
                      contentKey={`donate.online.features.${index}.desc`}
                      value={t(`donate.online.features.${index}.desc`)}
                      as="div"
                      className="text-xs text-white/75 mt-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/10 overflow-hidden shadow-sm shadow-brand-dark/15">
              <div className="relative aspect-[16/10] sm:aspect-[4/3]">
                <Image
                  src="/review-pics/donation page.jpg"
                  alt="Donation support being handed over to community members"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover blur-sm"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-heading text-xl sm:text-2xl font-semibold leading-tight">
                    {t("donate.side.image.title")}
                  </p>
                  <ContentText
                    contentKey="donate.side.image.subtitle"
                    value={t("donate.side.image.subtitle")}
                    as="p"
                    className="text-white/80 text-sm mt-2"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 bg-brand-dark/15 backdrop-blur">
                <div className="flex flex-wrap gap-2">
                  {tagIndices.map((index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                    >
                      {t(`donate.side.tags.${index}`)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="section-padding bg-brand-dark/10 backdrop-blur">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-4 block">
              {t("donate.wishlist.eyebrow")}
            </span>
            <h2 className="font-heading heading-section text-white mb-4">{t("donate.wishlist.title")}</h2>
            <ContentText
              contentKey="donate.wishlist.body"
              value={t("donate.wishlist.body")}
              as="p"
              className="text-white/85 text-lg leading-relaxed"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {wishlistIndices.map((index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-7 sm:p-8 shadow-sm shadow-brand-dark/15 hover:shadow-lg hover:shadow-brand-dark/25 transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
                    {wishlistIcons[index]}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {t(`donate.wishlist.${index}.title`)}
                    </h3>
                    <ContentText
                      contentKey={`donate.wishlist.${index}.desc`}
                      value={t(`donate.wishlist.${index}.desc`)}
                      as="p"
                      className="text-sm text-white/75 mt-1"
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-white/85">
                  {Array.from({ length: wishlistItemCounts[index] }, (_, itemIndex) => (
                    <li key={itemIndex}>{t(`donate.wishlist.${index}.items.${itemIndex}`)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto mt-12">
            <div className="rounded-[2.5rem] border border-white/10 bg-brand-dark/20 backdrop-blur p-6 sm:p-10 flex flex-col gap-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                    {t("donate.inkind.title")}
                  </h3>
                  <ContentText
                    contentKey="donate.inkind.body"
                    value={t("donate.inkind.body")}
                    as="p"
                    className="text-white/80"
                  />
                </div>
              </div>
              <DonateForm />
            </div>
            <ContentText
              contentKey="donate.thank_you"
              value={t("donate.thank_you")}
              as="p"
              className="text-center text-white/80 italic mt-10"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}
