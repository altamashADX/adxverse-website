# ADXverse Website

The official digital experience for **ADXverse — ALTAMASH DESIGNING XVERSE**.

This is a fresh implementation based on the approved ADXverse Master Website Development Prompt. The legacy `ADXverse-V1` repository is reference material only and is not the application foundation.

## Experience principles

- Premium, editorial, integrated-studio experience.
- Deep charcoal surfaces, warm-white typography and restrained gold accents.
- Spacious composition, strong contrast and deliberate hierarchy.
- Customer-first navigation and clear enquiry pathways.
- Accurate representation of in-house capabilities and specialist-partner delivery.
- No fabricated projects, clients, testimonials, credentials, statistics or contact details.

## Technology

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- ESLint and Prettier
- Structured TypeScript content initially; CMS evaluation is deferred.

## Local development

**Requirements:** Node.js 20.9 or later and npm.

```bash
git clone https://github.com/altamashADX/adxverse-website.git
cd adxverse-website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before submitting changes, run:

```bash
npm run lint
npm run typecheck
npm run build
npm run format:check
```

## Project documentation

- `docs/DEVELOPMENT_LOG.md` — milestone progress and validation.
- `docs/DECISION_REGISTER.md` — approved technical and product decisions.

## Status

**Current milestone:** Milestone 0 — Project Foundation  
**Repository:** `altamashADX/adxverse-website`  
**Default branch:** `main`

The current home screen is a temporary foundation placeholder, not the final approved homepage.
