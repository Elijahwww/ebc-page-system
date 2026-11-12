---
name: ebc-web-design
description: Lead EBC web visual art direction and iterative code-based critique. First assess user aesthetic goal, define and challenge a project-specific direction, then build, actually render screenshots, critique visual quality independently of functional QA, revise and hand off. Covers brand/product/LP/campaign/workspace surfaces.
---

# EBC Web Design Skill · v0.2 (Art Direction + Rendered Visual Critique)

## Required references
1. design/README.md
2. design/foundations/web-design-system.md
3. design/foundations/tokens.css
4. design/patterns/page-types.md
5. design/patterns/header-brand-and-partnership.md
6. design/qa/design-review-checklist.md
7. design/research/provenance-and-decisions.md
8. design/methods/visual-direction-and-iteration.md **(REQUIRED for new or major redesign)**
9. design/qa/visual-quality-scorecard.md **(REQUIRED independent visual QA)**
10. design/research/ai-coding-visual-skills-2026-11-12.md (when planning unfamiliar styles)
11. design/research/user-figma-make-skill-analysis-2026-11-12.md (when applying historical Figma Make material)

## Chinese-first design with local-market exceptions
Use the reviewed Chinese copy and information hierarchy for default Desktop/Mobile design. Do not block Chinese design on missing translations. Shared components, layout and behavior normally remain unchanged across markets; check actual target-language length and fonts at localization QA, with local overrides only where the project requires. For Japan-targeted activity pages, research local-market design/content context while still working in Chinese internally; never treat Chinese text as evidence of China market. Read `localization/chinese-first-and-market-overrides.md`.

## Read task inputs first
- PM Brief / user request, page type (corporate, product, performance LP, campaign)
- target market(s), languages, audience, device priorities, channel, live vs demo status
- approved copy and linked fact/claim restrictions; primary/secondary CTA destinations
- media inventory + rights, constraints from legal entity/risk/SEO/tracking
- any project-specific style override and existing design system assets

When needed, consult `sources/INDEX.md`, relevant version manifests and `asset-review/` on current `main`. These are historical evidence, not reusable approved visual recipes.

## Cross-industry reference discovery when internal design cases are insufficient
Before inventing ungrounded patterns, if the current page type or visual/content relationship is missing, conflicting or stagnating, invoke `.claude/skills/ebc-reference-discovery/SKILL.md` (available in the latest `main` working tree). Search **CFD/Forex same page type → broader finance/fintech → top tech (e.g. Apple)**, analyze information functions and actual page screenshots with desktop/mobile viewports. A text-only web fetch cannot support precise claims about whitespace, typography, image role or screenshot positioning; tag `TEXT_ONLY_VISUAL_PENDING` until browser capture. Extract transferable visual *principles*, not third-party assets or pixel-for-pixel copies. Return new insights as project Design Override and revised page V2, cross-check with PM Copy/User/Strategy.

## Mandatory visual design loop
**This is not just a CSS/layout compliance skill**. For new/high-impact surfaces or a user-rejected design, follow `design/methods/visual-direction-and-iteration.md`:
1. **Brief**: distinguish product/user task, actual aesthetic expectation and negative references; Chinese is the default working language, not target China market.
2. **Art Direction Gate**: present 2 materially different strategies (QUICK edits can use 1 + strongest counterexample). Name the visual hero, typography character, density, color roles, distinctiveness, and rejected AI-default template. Explicit user aesthetic preference outranks unrequested Apple/Linear/Impeccable stylistic defaults.
3. **Build**: produce actual responsive code and project-level design overrides. No fixed 5600px document, 900px hero, forced blue CTA, universal serif bans, universal glass/gradient or identical card grids.
4. **Render**: if the environment can run a browser, capture actual Desktop/Mobile screenshots; inspect first screen, content rhythm, type scale, mobile reorganization, interaction states and Windows fallback when available.
5. **Visual Critique** (independent of engineering tests): assess direction match, information hierarchy, aesthetic specificity, density, motion and image function. Record P1/2 issues by screenshot region and code; revise **real UI** and compare new screenshots. `QA_PASS` does **not** imply `VISUAL_REVIEW_PASSED`.
6. **Engineering Audit**: focus/keyboard, responsiveness, contrast, state, real interactions, reduced motion, performance and no false product claims.
7. **Status**: if user says "still unattractive / not tech enough / too crowded" mark `VISUAL_REVIEW_NOT_PASSED`, not "subjective taste is out of scope". If no browser mark `VISUAL_QA_PENDING`, not pass.

For EBC Share and other workspaces, **do not invent a permanent "admin-dashboard aesthetic"**. It can be a distinctive technology platform and still handle task density accurately. Rework the visual hierarchy first, avoid decorating uniform white cards. The current v2 is only a project experiment, not a globally approved style.

Third-party repositories (Anthropic frontend-design, Impeccable, UI UX Pro Max, React Bits, Vercel, shadcn) are research inputs, not automatic install instructions or design authority. Reuse ideas and principles, not full copyrighted skills or third-party branded assets.

## Execution
1. Summarize the page's one main job and each section's one distinct user question. Do not invent copy, product status, facts, permissions or returns.
2. Select a page-type pattern and write Design Override: what defaults apply, what changes, and why.
3. Use Apple-inspired principles (hierarchy, whitespace, precision, restrained motion) and EBC proposed tokens. **Never claim token numbers are Apple's official webpage specifications.**
4. Specify Header mode (full EBC site header / simplified LP header / no header), and on applicable official site pages include the left EBC + FC Barcelona approved partnership lockup. Use approved brand assets only; mark ASSET_REQUIRED when missing. Make desktop and mobile layouts together. Define H1/body/CTA, media crops, stacking, spacing, responsive behavior, forms, FAQ, states and transitions.
5. For functional UI, explicitly document click destinations, input validation, disabled/loading/error/focus states and keyboard navigation. Real APIs only if provided and authorized; otherwise mark Demo.
6. Prefer semantic accessible HTML, responsive CSS Grid/Flex + clamp; do not force historic 1920/750 vw-rem, 996 breakpoint, 3D Hero, H1 two lines or fixed screen counts.
7. Check text contrast, risk notices, 44px recommended target size, 200% zoom, long translated strings, reduced motion, responsive imagery and legal information legibility.
8. Hand off structured layout specs + token overrides + component/state list + media/source list + **two separate QA outcomes (visual and engineering)**; for code tasks produce working responsive front-end with actual before/after screenshot evidence where tooling allows.

## Handoff output format
- Page type / audience / language / primary action
- Module plan: section name, user question, content source, visual concept, media and CTA behavior
- Layout tokens & deviations: container, grid, typography, spacing, colors, breakpoint decision
- Responsive map: desktop/tablet/mobile differences, source order, long-text handling
- Interaction matrix: component × trigger × success/failure/disabled/focus behavior
- Content/legal/data blockers; evidence URLs and owner
- Art Direction decision and rejected alternative; independent Visual Critique status, rendered screenshots and actual V1→V2 changes
- Engineering QA PASS/FAIL/TO_CONFIRM; review-ready demo or implementation details

## Priorities / stops
- Demo can be visually explored with explicitly labeled placeholders; it is not publishable.
- Approved copy, current product facts, legal entity, risk requirements and user conversion logic take precedence over aesthetic novelty.
- Never silently reuse invalid historic claims, expired promotions, fake numerical advantages, live quote placeholders or secrets.
- Do not bundle Apple SF Pro font files, Apple webpage images or branded assets.
- Do not write a global rule because it appeared in one historic page.
- New shared components may be created; do not assume missing historical shared components are available.
- Figma is optional unless explicitly requested.
- **User aesthetic requirements are first-class acceptance criteria**. A user-rejected visual direction is a real design defect even when functional tests pass. Request/derive actionable feedback, make a genuine revision, preserve product facts and confirmed copy.
