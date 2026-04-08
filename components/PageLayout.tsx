import { Hero } from "./Hero";

export function PageLayout({
  title,
  subtitle,
  children,
  heroSmall,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  heroSmall?: boolean;
}) {
  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        primaryCta={undefined}
        secondaryCta={undefined}
      />
      <div className={heroSmall ? "section-padding" : "section-padding"}>
        <div className="container-narrow">{children}</div>
      </div>
    </>
  );
}
