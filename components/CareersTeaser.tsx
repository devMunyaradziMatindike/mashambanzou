"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CareerOpening } from "@/lib/careers-tenders";
import { formatDeadline } from "@/lib/careers-tenders";
import { useSiteContent } from "@/components/ContentProvider";
import { ContentText } from "@/components/ContentText";

export function CareersTeaser() {
  const { t } = useSiteContent();
  const [careers, setCareers] = useState<CareerOpening[]>([]);

  useEffect(() => {
    let active = true;

    fetch("/api/careers", { cache: "no-store" })
      .then((res) => res.json())
      .then((json: { careers?: CareerOpening[] }) => {
        if (!active) return;
        setCareers(Array.isArray(json.careers) ? json.careers.slice(0, 3) : []);
      })
      .catch(() => {
        if (active) setCareers([]);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark/10 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-brand-sunlight font-semibold tracking-widest uppercase text-xs mb-3 block">
              {t("careers_teaser.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">{t("careers_teaser.title")}</h2>
            <ContentText
              contentKey="careers_teaser.subtitle"
              value={t("careers_teaser.subtitle")}
              as="p"
              className="mt-3 text-white/80 max-w-2xl"
            />
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            {t("careers_teaser.view_all")}
          </Link>
        </div>

        {careers.length ? (
          <div className="grid md:grid-cols-3 gap-6">
            {careers.map((career) => (
              <article
                key={career.id}
                className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur overflow-hidden"
              >
                {career.image_url ? (
                  <div className="relative aspect-[16/10] bg-white/10">
                    <Image
                      src={career.image_url}
                      alt={career.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-white">{career.title}</h3>
                  <p className="mt-2 text-sm text-white/75">
                    {t("careers_teaser.deadline_prefix")} {formatDeadline(career.application_deadline)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <ContentText
            contentKey="careers_teaser.empty"
            value={t("careers_teaser.empty")}
            as="div"
            className="rounded-[2rem] border border-white/10 bg-brand-dark/15 backdrop-blur p-8 text-white/80"
          />
        )}
      </div>
    </section>
  );
}
