# Mashambanzou Care Trust

Website for Mashambanzou Care Trust—HIV services, OVC support, and community strengthening in Harare and beyond.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Fonts:** Lora (headings), Source Sans 3 (body), via `next/font/google`
- **Laravel + MySQL** (`laravel/`) for the success stories CMS and website image manager

## Structure (Giving Kitchen–inspired)

- **Our Identity** — Our Story, Team, Board & Governance, News & Press
- **Our Impact** — Overview, Integrated Health Service Delivery, Community Strengthening, Orphans and Vulnerable Children (OVC) Support, Promotion of Human Rights, Where We Work
- **Stories** — Success stories and narratives
- **Why Mashambanzou** — Vision, mission, differentiation
- **Get Involved** — Donate, Fundraise, Volunteer, Host an Event, Partner, Patron Society
- **Events** — Upcoming events
- **Transparency** — Governance and documents
- **Contact** / **Privacy**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment

For static content, no env vars are required. To show MySQL-backed success stories and admin-managed website images from the Laravel CMS, run the Laravel app and add this to `.env.local`:

```env
LARAVEL_API_URL=http://127.0.0.1:8000
```

Laravel setup details are in `laravel/README-MASHAMBANZOU.md`.
