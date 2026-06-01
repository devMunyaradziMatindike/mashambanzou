export const mainNav = [
  {
    label: "Our Identity",
    href: "/our-identity",
    children: [
      { label: "Our Story", href: "/our-identity" },
      { label: "Our Management", href: "/our-identity/team" },
      { label: "Board & Governance", href: "/our-identity/board-and-governance" },
  ]},
  {
    label: "Our Impact",
    href: "/our-impact",
    children: [
      { label: "Overview", href: "/our-impact" },
      { label: "Integrated Health Service Delivery", href: "/our-impact/clinical-healthcare" },
      { label: "Orphans and Vulnerable Children (OVC) Support", href: "/our-impact/child-protection-education" },
      { label: "Promotion of Human Rights", href: "/our-impact/empowerment-advocacy" },
      { label: "Community Strengthening", href: "/our-impact/community-support" },
      { label: "Institutional Development", href: "/our-impact/institutional-development" },
    ],
  },
  {
    label: "Our Services",
    href: "/our-impact",
    children: [
      {
        label: "Mashambanzou Care Unit (MCU)",
        href: "/our-impact/clinical-healthcare",
        imageSrc: "/review-pics/mashambanzou care unit.jpg",
        imageAlt: "Mashambanzou Care Unit facility",
      },
      {
        label: "Outreach clinics",
        href: "/our-impact/community-support",
        imageSrc: "/review-pics/outreach.png",
        imageAlt: "Outreach clinic visit in the community",
      },
      {
        label: "Putting Children First",
        href: "/our-impact/child-protection-education",
        imageSrc: "/review-pics/putting children first.jpg",
        imageAlt: "Putting Children First programme support",
      },
      {
        label: "Nenyere Day Care Centre (NDCC)",
        href: "/our-impact/child-protection-education",
        imageSrc: "/review-pics/ovc support.jpg",
        imageAlt: "Children supported through Nenyere Day Care Centre",
      },
      {
        label: "Income generating activities",
        href: "/our-impact/empowerment-advocacy",
        imageSrc: "/review-pics/Institutional Income Generating project.jpg",
        imageAlt: "Income generating activities project",
      },
    ],
  },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact us", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Our Story", href: "/our-identity" },
  { label: "Our Services", href: "/our-impact" },
  { label: "Donate", href: "https://paynow.co.zw/mashambanzou" },
  { label: "Contact", href: "/contact" },
];
