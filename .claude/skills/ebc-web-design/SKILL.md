---
name: ebc-web-design
description: Plan, design and QA EBC corporate/product/advertising web pages with Apple-inspired clarity and EBC-proposed executable design tokens. Use after PM brief and content approval. Applies to both exploratory demos and production-bound page handoff.
---

# EBC Web Design Skill · v0.1

## Required references
1. design/README.md
2. design/foundations/web-design-system.md
3. design/foundations/tokens.css
4. design/patterns/page-types.md
5. design/qa/design-review-checklist.md
6. design/research/provenance-and-decisions.md

## Read task inputs first
- PM Brief / user request, page type (corporate, product, performance LP, campaign)
- target market(s), languages, audience, device priorities, channel, live vs demo status
- approved copy and linked fact/claim restrictions; primary/secondary CTA destinations
- media inventory + rights, constraints from legal entity/risk/SEO/tracking
- any project-specific style override and existing design system assets

When needed, consult sources/INDEX.md, the relevant version manifest and asset-review cases **on the original-sources branch or after it is merged**. These are history, not a template to copy verbatim.

## Execution
1. Summarize the page's one main job and each section's one distinct user question. Do not invent copy, product status, facts, permissions or returns.
2. Select a page-type pattern and write Design Override: what defaults apply, what changes, and why.
3. Use Apple-inspired principles (hierarchy, whitespace, precision, restrained motion) and EBC proposed tokens. **Never claim token numbers are Apple's official webpage specifications.**
4. Make desktop and mobile layouts together. Define H1/body/CTA, media crops, stacking, spacing, responsive behavior, forms, FAQ, states and transitions.
5. For functional UI, explicitly document click destinations, input validation, disabled/loading/error/focus states and keyboard navigation. Real APIs only if provided and authorized; otherwise mark Demo.
6. Prefer semantic accessible HTML, responsive CSS Grid/Flex + clamp; do not force historic 1920/750 vw-rem, 996 breakpoint, 3D Hero, H1 two lines or fixed screen counts.
7. Check text contrast, risk notices, 44px recommended target size, 200% zoom, long translated strings, reduced motion, responsive imagery and legal information legibility.
8. Hand off structured layout specs + token overrides + component/state list + media/source list + QA report; for code tasks produce working responsive front-end.

## Handoff output format
- Page type / audience / language / primary action
- Module plan: section name, user question, content source, visual concept, media and CTA behavior
- Layout tokens & deviations: container, grid, typography, spacing, colors, breakpoint decision
- Responsive map: desktop/tablet/mobile differences, source order, long-text handling
- Interaction matrix: component × trigger × success/failure/disabled/focus behavior
- Content/legal/data blockers; evidence URLs and owner
- QA PASS/FAIL/TO_CONFIRM; review-ready demo or implementation details

## Priorities / stops
- Demo can be visually explored with explicitly labeled placeholders; it is not publishable.
- Approved copy, current product facts, legal entity, risk requirements and user conversion logic take precedence over aesthetic novelty.
- Never silently reuse invalid historic claims, expired promotions, fake numerical advantages, live quote placeholders or secrets.
- Do not bundle Apple SF Pro font files, Apple webpage images or branded assets.
- Do not write a global rule because it appeared in one historic page.
- New shared components may be created; do not assume missing historical shared components are available.
- Figma is optional unless explicitly requested.
- Keep visual feedback tied to information clarity, usability or testable product goals; pure taste changes are not an automatic blocker.
