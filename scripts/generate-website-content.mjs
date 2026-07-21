import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** @type {Array<{key:string,page:string,type:string,label:string,value:string}>} */
const entries = [];

function add(page, type, key, label, value) {
  entries.push({ key, page, type, label, value });
}

function addNav(key, label, value) {
  add("Navigation", "nav", key, label, value);
}

// Navigation
addNav("nav.main.our_identity", "Main nav: Our Identity", "Our Identity");
addNav("nav.main.our_identity.story", "Our Identity: Our Story", "Our Story");
addNav("nav.main.our_identity.management", "Our Identity: Our Management", "Our Management");
addNav("nav.main.our_identity.governance", "Our Identity: Board & Governance", "Board & Governance");
addNav("nav.main.focus_areas", "Main nav: Our Focus Areas", "Our Focus Areas");
addNav("nav.main.focus_areas.overview", "Focus Areas: Overview", "Overview");
addNav("nav.main.focus_areas.clinical", "Focus Areas: Clinical", "Integrated Health Service Delivery");
addNav("nav.main.focus_areas.ovc", "Focus Areas: OVC", "Orphans and Vulnerable Children (OVC) Support");
addNav("nav.main.focus_areas.human_rights", "Focus Areas: Human Rights", "Promotion of Human Rights");
addNav("nav.main.focus_areas.community", "Focus Areas: Community", "Community Strengthening");
addNav("nav.main.focus_areas.institutional", "Focus Areas: Institutional", "Institutional Development");
addNav("nav.main.focus_areas.donor_projects", "Focus Areas: Donor Projects", "Donor Projects");
addNav("nav.main.services", "Main nav: Our Services", "Our Services");
addNav("nav.main.services.mcu", "Services: MCU", "Mashambanzou Care Unit (MCU)");
addNav("nav.main.services.outreach", "Services: Outreach", "Outreach clinics");
addNav("nav.main.services.houses", "Services: Houses of Safety", "Houses of Safety");
addNav("nav.main.success_stories", "Main nav: Success Stories", "Success Stories");
addNav("nav.main.contact", "Main nav: Contact us", "Contact us");
addNav("nav.secondary.careers", "Secondary nav: Careers", "Careers");
addNav("nav.secondary.tenders", "Secondary nav: Tenders", "Invitation to Tenders");
addNav("nav.secondary.noticeboard", "Secondary nav: Noticeboard", "Noticeboard");
addNav("nav.footer.story", "Footer: Our Story", "Our Story");
addNav("nav.footer.services", "Footer: Our Services", "Our Services");
addNav("nav.footer.careers", "Footer: Careers", "Careers");
addNav("nav.footer.tenders", "Footer: Tenders", "Invitation to Tenders");
addNav("nav.footer.noticeboard", "Footer: Noticeboard", "Noticeboard");
addNav("nav.footer.donate", "Footer: Donate", "Donate");
addNav("nav.footer.contact", "Footer: Contact", "Contact");

// Homepage
const home = [
  ["heading", "home.hero.title", "Hero main heading", "We Help Build AIDS-Free, Resilient"],
  ["heading", "home.hero.gradient_text", "Hero gradient text", "Communities."],
  ["paragraph", "home.hero.subtitle", "Hero subtitle", "Mashambanzou Care Trust realises healthy, socially inclusive communities, free of AIDS through comprehensive HIV services, OVC support, and community strengthening."],
  ["cta", "home.hero.primary_cta", "Hero primary CTA", "Ask For Help"],
  ["cta", "home.hero.secondary_cta", "Hero secondary CTA", "Donate"],
  ["heading", "home.vision.label", "Vision label", "Vision"],
  ["paragraph", "home.vision.text", "Vision text", "AIDS free, resilient and empowered communities."],
  ["heading", "home.mission.label", "Mission label", "Mission"],
  ["paragraph", "home.mission.text", "Mission text", "Healthy, socially inclusive communities, free of AIDS through comprehensive HIV services, OVC support and community strengthening."],
  ["heading", "home.values.label", "Values label", "Values"],
  ["paragraph", "home.values.text", "Values text", "Participation • Compassion • Transparency and Accountability • Human Dignity • Empowerment"],
  ["heading", "home.who_we_are.title", "Who we are title", "Who we are"],
  ["paragraph", "home.who_we_are.body", "Who we are body", "Mashambanzou Care Trust (MCT) is a faith and welfare based, non-governmental organisation focused on disseminating accurate information, care and support for people living with HIV (PLWHIV), and prevention of the spread of HIV. MCT recognised the effects of the disease and innovatively created a Family Centred Support model."],
  ["cta", "home.who_we_are.cta", "Who we are CTA", "Our story"],
  ["subheading", "home.different.eyebrow", "Different eyebrow", "What makes us different"],
  ["heading", "home.different.title", "Different title", "30-bed care unit + community outreach"],
  ["paragraph", "home.different.body", "Different body", "In the Harare Metropolitan area, MCT stands out through its 30-bed Mashambanzou Care Unit (MCU) combined with community outreach. We deliver on-site clinical care—HIV testing and counselling, treatment of opportunistic infections, TB testing, palliative care and VIAC cervical cancer screening—plus outreach clinics in Mbare, Hopley, Glen Norah, Highfield, Dzivarasekwa and beyond."],
  ["cta", "home.different.cta", "Different CTA", "Our Focus Areas"],
  ["heading", "home.how_we_help.title", "How we help title", "How We Help"],
  ["subheading", "home.how_we_help.subtitle", "How we help subtitle", "Integrated care across Harare and beyond."],
  ["cta", "home.how_we_help.cta", "How we help CTA", "View All"],
  ["subheading", "home.expertise.eyebrow", "Expertise eyebrow", "Our Expertise"],
  ["heading", "home.expertise.title", "Expertise title", "We don't just provide care. We build resilience."],
  ["subheading", "home.expertise.subtitle", "Expertise subtitle", "Combining clinical excellence with community-centred support and advocacy."],
  ["heading", "home.where_we_work.title", "Where we work title", "Where we work"],
  ["paragraph", "home.where_we_work.regions", "Where we work regions", "Harare Metropolitan • Zvimba Rural District • Goromonzi Rural District"],
  ["paragraph", "home.where_we_work.areas", "Where we work areas", "Tafara, Mabvuku, Glen Norah, Highfield, Hopley, Mbare, Dzivarasekwa Main and Extension; Wards 24, 25, 26, 35 in Zvimba; Caledonia in Goromonzi."],
  ["cta", "home.where_we_work.cta", "Where we work CTA", "See our geographic footprint"],
  ["subheading", "home.latest_stories.eyebrow", "Latest stories eyebrow", "Latest stories"],
  ["heading", "home.latest_stories.title", "Latest stories title", "Photos, videos and updates from the field"],
  ["paragraph", "home.latest_stories.body", "Latest stories body", "The newest posts appear here automatically once they're published from the admin portal."],
  ["cta", "home.latest_stories.cta", "Latest stories CTA", "View all"],
  ["heading", "home.partners.title", "Partners title", "Partners & Funders"],
  ["paragraph", "home.partners.body", "Partners body", "We're grateful for the partners and donors who strengthen our work across Harare, Zvimba and Goromonzi."],
  ["heading", "home.partners.current.title", "Current partners title", "Current partners"],
  ["heading", "home.partners.past.title", "Past donors title", "Past donors"],
  ["paragraph", "home.governance.body", "Governance body", "For institutional donors: governance information, leadership profiles and due diligence materials are available on our Board & Governance page."],
  ["cta", "home.governance.cta", "Governance CTA", "View governance"],
  ["heading", "home.get_involved.title", "Get involved title", "Get Involved"],
  ["paragraph", "home.get_involved.body", "Get involved body", "Donate, volunteer, partner or host an event. Your support helps realise AIDS-free, resilient and empowered communities."],
  ["cta", "home.get_involved.cta_donate", "Get involved donate CTA", "Donate"],
  ["cta", "home.get_involved.cta_partner", "Get involved partner CTA", "Partner"],
  ["cta", "home.get_involved.cta_partner_with_us", "Get involved partner with us CTA", "Partner With Us"],
  ["cta", "home.get_involved.cta_contact", "Get involved contact CTA", "Contact"],
];
home.forEach(([type, key, label, value]) => add("Homepage", type, key, label, value));

const marquee = ["Clinical Healthcare", "VIAC Screening", "Community Strengthening", "OVC Support", "Houses of Safety", "Education for Life", "Care to Share", "Human Rights", "Advocacy"];
marquee.forEach((value, i) => add("Homepage", "subheading", `home.marquee.${i}`, `Marquee item ${i + 1}`, value));

const bento = [
  ["home.bento.clinical", "Clinical Healthcare", "MCU, VIAC & Palliative Care", "Healthcare"],
  ["home.bento.community", "Community Strengthening", "FCS & Psychosocial Support", "Support"],
  ["home.bento.ovc", "Orphans and Vulnerable Children (OVC) Support", "OVC, Houses of Safety", "Children"],
  ["home.bento.human_rights", "Promotion of Human Rights", "Care to Share, Livelihoods", "Empowerment"],
];
bento.forEach(([prefix, title, subtitle, label]) => {
  add("Homepage", "heading", `${prefix}.title`, `${title} card title`, title);
  add("Homepage", "subheading", `${prefix}.subtitle`, `${title} card subtitle`, subtitle);
  add("Homepage", "subheading", `${prefix}.label`, `${title} card label`, label);
});

const services = [
  ["home.services.integrated", "Integrated Healthcare", "30-bed MCU, VIAC cervical cancer screening (since April 2023), palliative care, treatment of opportunistic infections, TB testing. On-site and outreach clinics.", ["MCU Inpatient Care", "VIAC Screening", "Palliative Care"]],
  ["home.services.community", "Community Strengthening", "Family Centred Support (FCS), psychosocial support for SGBV survivors, Houses of Safety with Department of Social Development, and Education for Life in Nyabira and Mt Hampden.", ["FCS & PSS", "Houses of Safety", "OVC Support"]],
  ["home.services.human_rights", "Promotion of Human Rights", "Care to Share TVET partnership with Young Africa in Caledonia, livelihoods, SRHR advocacy and stigma reduction across Harare, Zvimba and Goromonzi.", ["Vocational Training", "Livelihoods", "SRHR Advocacy"]],
];
services.forEach(([prefix, title, desc, items]) => {
  add("Homepage", "heading", `${prefix}.title`, `${title} service title`, title);
  add("Homepage", "paragraph", `${prefix}.description`, `${title} service description`, desc);
  items.forEach((item, i) => add("Homepage", "subheading", `${prefix}.item.${i}`, `${title} item ${i + 1}`, item));
});

const stats = [
  ["30+", "Years of service"],
  ["30", "Bed Mashambanzou Care Unit"],
  ["Multi-ward", "Harare, Zvimba & Goromonzi"],
  ["100%", "Compassion-led"],
];
stats.forEach(([value, label], i) => {
  add("Homepage", "stat", `home.stats.${i}.value`, `Stat ${i + 1} value`, value);
  add("Homepage", "stat", `home.stats.${i}.label`, `Stat ${i + 1} label`, label);
});

// Load page-specific entries from companion module
const pages = (await import("./website-content-pages.mjs")).default;
pages.forEach(([page, type, key, label, value]) => add(page, type, key, label, value));

const fields = Object.fromEntries(
  entries.map(({ key, page, type, label, value }) => [
    key,
    { page, type, label, default: value },
  ])
);

const outPath = path.join(root, "data", "website-content.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ fields }, null, 2));
console.log(`Wrote ${entries.length} fields to ${outPath}`);
