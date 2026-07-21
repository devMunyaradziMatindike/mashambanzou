export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavChild = {
  label: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Translator = (key: string, fallback?: string) => string;

export function buildMainNav(t: Translator): NavItem[] {
  return [
    {
      label: t("nav.main.our_identity", "Our Identity"),
      href: "/our-identity",
      children: [
        { label: t("nav.main.our_identity.story", "Our Story"), href: "/our-identity" },
        { label: t("nav.main.our_identity.management", "Our Management"), href: "/our-identity/team" },
        { label: t("nav.main.our_identity.governance", "Board & Governance"), href: "/our-identity/board-and-governance" },
      ],
    },
    {
      label: t("nav.main.focus_areas", "Our Focus Areas"),
      href: "/our-impact",
      children: [
        { label: t("nav.main.focus_areas.overview", "Overview"), href: "/our-impact" },
        { label: t("nav.main.focus_areas.clinical", "Integrated Health Service Delivery"), href: "/our-impact/clinical-healthcare" },
        { label: t("nav.main.focus_areas.ovc", "Orphans and Vulnerable Children (OVC) Support"), href: "/our-impact/child-protection-education" },
        { label: t("nav.main.focus_areas.human_rights", "Promotion of Human Rights"), href: "/our-impact/empowerment-advocacy" },
        { label: t("nav.main.focus_areas.community", "Community Strengthening"), href: "/our-impact/community-support" },
        { label: t("nav.main.focus_areas.institutional", "Institutional Development"), href: "/our-impact/institutional-development" },
        { label: t("nav.main.focus_areas.donor_projects", "Donor Projects"), href: "/our-impact/case-studies" },
      ],
    },
    {
      label: t("nav.main.services", "Our Services"),
      href: "/our-impact",
      children: [
        {
          label: t("nav.main.services.mcu", "Mashambanzou Care Unit (MCU)"),
          href: "/our-impact/clinical-healthcare",
          imageSrc: "/review-pics/mashambanzou care unit.jpg",
          imageAlt: "Mashambanzou Care Unit facility",
        },
        {
          label: t("nav.main.services.outreach", "Outreach clinics"),
          href: "/our-impact/community-support",
          imageSrc: "/review-pics/outreach.png",
          imageAlt: "Outreach clinic visit in the community",
        },
        {
          label: t("nav.main.services.houses", "Houses of Safety"),
          href: "/our-impact/child-protection-education",
          imageSrc: "/review-pics/House of Safety.jpg",
          imageAlt: "Houses of Safety temporary safe accommodation",
        },
      ],
    },
    { label: t("nav.main.success_stories", "Success Stories"), href: "/success-stories" },
    { label: t("nav.main.contact", "Contact us"), href: "/contact" },
  ];
}

export function buildSecondaryNav(t: Translator): NavItem[] {
  return [
    { label: t("nav.secondary.careers", "Careers"), href: "/careers" },
    { label: t("nav.secondary.tenders", "Invitation to Tenders"), href: "/invitation-to-tenders" },
    { label: t("nav.secondary.noticeboard", "Noticeboard"), href: "/noticeboard" },
  ];
}

export function buildFooterNav(t: Translator): NavItem[] {
  return [
    { label: t("nav.footer.story", "Our Story"), href: "/our-identity" },
    { label: t("nav.footer.services", "Our Services"), href: "/our-impact" },
    { label: t("nav.footer.careers", "Careers"), href: "/careers" },
    { label: t("nav.footer.tenders", "Invitation to Tenders"), href: "/invitation-to-tenders" },
    { label: t("nav.footer.noticeboard", "Noticeboard"), href: "/noticeboard" },
    { label: t("nav.footer.donate", "Donate"), href: "https://paynow.co.zw/mashambanzou" },
    { label: t("nav.footer.contact", "Contact"), href: "/contact" },
  ];
}

// Static fallbacks for imports that predate CMS wiring
export const mainNav = buildMainNav((key, fallback) => fallback ?? key);
export const secondaryNav = buildSecondaryNav((key, fallback) => fallback ?? key);
export const footerNav = buildFooterNav((key, fallback) => fallback ?? key);
