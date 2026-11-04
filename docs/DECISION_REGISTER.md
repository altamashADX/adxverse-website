# ADXverse Website — Decision Register

| ID | Decision | Status | Rationale |
| --- | --- | --- | --- |
| ADR-001 | Create a fresh repository named `adxverse-website` | Approved | Keep the new implementation independent from the legacy static site. |
| ADR-002 | Use Next.js App Router, React and TypeScript | Approved | Establish a full-stack-capable, typed application foundation. |
| ADR-003 | Use Tailwind CSS v4 | Approved | Utility styling with a central token layer. |
| ADR-004 | Use structured TypeScript content initially; defer CMS | Approved | Avoid unnecessary infrastructure until editorial needs justify it. |
| ADR-005 | Use a staged, milestone-based development process | Approved | Review each foundation before moving to the next major stage. |
| ADR-006 | Use deep charcoal, warm white and restrained gold | Approved | Preserve the premium dark integrated-studio direction. |
| ADR-007 | Keep the legacy `ADXverse-V1` repository as reference only | Approved | Do not carry forward its architecture or outdated positioning by default. |
| ADR-008 | Build a reusable design-system layer before page templates | Approved | Ensure consistency and review visual foundations independently. |
| ADR-009 | Use an architectural display stack led by Bahnschrift, with Aptos / Segoe UI for supporting text | Provisional | Establish a stronger contemporary voice using locally available system fonts; verify actual rendering on supported devices before final approval. |\n| ADR-010 | Reject the first design-system visual direction and explore bold contemporary + architectural minimalism | In review | The first preview felt generic and its typography lacked the character expected for ADXverse. The replacement uses stronger display hierarchy, asymmetrical composition and a more nuanced graphite / ivory / champagne palette. |

## Open decisions

- Final font family and licensed font assets; the current system stack is a visual prototype, not a final licensed-font decision.
- Whether a dedicated motion library is needed; prefer CSS transitions unless requirements justify a dependency.
- Hosting and deployment provider.
- Enquiry delivery provider and secure upload implementation.
- Whether a CMS is justified after the structured content model is established.
