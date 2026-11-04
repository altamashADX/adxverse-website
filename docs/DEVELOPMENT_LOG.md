# ADXverse Website — Development Log

## Milestone 0 — Project Foundation

**Status:** Complete — locally validated and synchronized with GitHub.

### Established

- Fresh repository: `altamashADX/adxverse-website`.
- Next.js App Router with React and TypeScript.
- Tailwind CSS v4 through the official PostCSS integration.
- ESLint flat configuration and Prettier.
- `src/` application structure and `@/*` import alias.
- Root layout, metadata, viewport defaults and initial global design tokens.
- Environment variable example and baseline ignore/editor configuration.
- Temporary foundation landing screen; this is not the approved final homepage.

### Local validation reported

The developer ran the following commands successfully on Windows PowerShell:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run format:check`

The production build generated the home route and Next.js not-found route as static output. The local Git working tree was clean after commit `037efd6` was pushed to `main`.

### Environment note

Next.js reported an advisory that it detected an empty parent-level lockfile at `C:\Users\altam\package-lock.json`. The project lockfile at the repository root is tracked. The parent lockfile was left untouched. This warning did not prevent the production build.

---

## Milestone 1 — Design System

**Status:** First visual direction rejected after review; revised exploration 02 committed for local review.

### Exploration 01 — rejected\n\n- The initial preview was reviewed by the user and not approved.\n- Feedback: typography felt generic and the overall direction lacked a distinctive identity.\n- No page templates or global navigation will be built on this rejected visual direction.\n\n### Exploration 02 — architectural contemporary\n\n- Reworked the palette around graphite, carbon, iron, warm ivory and restrained champagne.\n- Replaced the Helvetica-led typography with a stronger local system-font stack led by Bahnschrift for display and Aptos / Segoe UI for supporting text.\n- Rebuilt the preview around larger typographic statements, asymmetrical composition, a twelve-column grid and more deliberate surface contrast.\n- Kept the typography stack provisional until it is inspected on the user's Windows environment and other target devices.\n\n### Previous implementation details (superseded)

- Expanded the global token layer for colour, typography, container width, spacing, radii and motion.
- Added shared UI primitives: `Container`, `Button` and `SectionHeading`.
- Added a dedicated design-system preview at `/design-system`.
- Added preview sections for colour, type hierarchy, spacing, buttons, surfaces and design principles.
- Added visible keyboard focus treatment and reduced-motion handling.
- Kept the font family provisional pending visual review and final font selection.

### Review requirements

- Review the preview at desktop and mobile widths.
- Confirm colour, contrast, typography direction and spacing.
- Run lint, typecheck, production build and formatting checks locally.
- Record any changes before treating the system as approved.

### Next

Review exploration 02 at desktop and mobile widths. Confirm the display font rendering, hierarchy, composition and colour balance before approving the design system. Do not proceed to global navigation or the full homepage until approval.
