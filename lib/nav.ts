export const mainNav = [
  {
    label: "Our Identity",
    href: "/our-identity",
    children: [
      { label: "Our Story", href: "/our-identity" },
      { label: "Our Management", href: "/our-identity/team" },
      { label: "Board & Governance", href: "/our-identity/board-and-governance" },
      { label: "News & Press", href: "/news-and-press" },
  ]},
  {
    label: "Our Impact",
    href: "/our-impact",
    children: [
      { label: "Overview", href: "/our-impact" },
      { label: "Clinical Healthcare (MCU)", href: "/our-impact/clinical-healthcare" },
      { label: "Community & Family Support", href: "/our-impact/community-support" },
      { label: "Child Protection & Education", href: "/our-impact/child-protection-education" },
      { label: "Empowerment & Advocacy", href: "/our-impact/empowerment-advocacy" },
      { label: "Where We Work", href: "/where-we-work" },
    ],
  },
  { label: "Latest stories", href: "/latest-stories" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Get Involved", href: "/get-involved" },
      { label: "Donate", href: "https://paynow.co.zw/mashambanzou" },
      { label: "Partner With Us", href: "/get-involved/partner" },
    ],
  },
] as const;

export const footerNav = [
  { label: "Our Story", href: "/our-identity" },
  { label: "Our Impact", href: "/our-impact" },
  { label: "Donate", href: "https://paynow.co.zw/mashambanzou" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];
