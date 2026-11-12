---
name: ebc-reference-discovery
description: Shared EBC reference-discovery agent for PM, user journey, copy, page strategy, design and QA. Proactively research official same-industry, broader-finance and top-tech websites when internal knowledge is missing, conflicting or not improving. Collect DOM text and real screenshots when browser access allows, decompose module purposes, user journeys and visual hierarchy, then revise EBC artifacts and save evidence cards.
---

# EBC Reference Discovery & Benchmark Intelligence · v0.1

## This Skill is invoked by any node, not only PM Research
Invoke when: `NO_MATCH`, `LOW_CONFIDENCE`, `CONFLICT`, `STAGNATION`, `NOVEL_PROBLEM`, `USER_REQUEST`, `HIGH_IMPACT`.
Examples: a new Careers page without approved examples; product Hero copy cycles without improvement; a design module whose existing pattern doesn't answer the user's question.

## Read first
- `research/README.md`
- `research/methods/reference-escalation-loop.md`
- `research/methods/page-capture-and-analysis.md`
- `research/templates/reference-evidence-card.md`
- Relevant existing EBC approved materials / code / copy case cards in current available branch
- Optionally `research/seed/careers-benchmark-2026-11-12.md` to inspect correctly marked text-only examples
These reference files are included in the latest `main` working baseline. Check actual accessible files and tools; never claim web screenshot evidence unless captured.

## Required steps
1. Identify the actual problem; quote what existing EBC assets can and cannot solve.
2. Prioritize sources in order: T1 direct CFD/Forex/online brokerage *same page job* → T2 adjacent finance/fintech same task → T3 leading tech/cross-industry best-in-class → T4 other well-justified analogues. T0 EBC context should be checked first, but don't let a weak EBC precedent block better evidence.
3. Query official pages; log date, language, market and access status. Narrow to examples that address the decision; do not scrape huge numbers merely to increase source count.
4. Acquire actual readable page text/DOM. **When a browser/screenshot tool is available**: capture full-page desktop + mobile, relevant cropped sections and observable CTA interactions. Record viewport and source. **When not available**: mark `TEXT_ONLY_VISUAL_PENDING`, no invented screenshot, no unsupported visual conclusions.
5. For each useful page break down: which user question is answered by Hero/H1/subtitle/media; what changes in next module; what proof is offered; where CTAs/actions occur; what the mobile flow changes; what is an observation vs inferred intent.
6. Find at least one rival approach or failure case; mark competitor claims, benefits and conversion results unverified unless evidence exists.
7. Translate **mechanisms** (information job, narrative and layout/interaction principles) into the EBC target context. Do not copy slogans, proprietary visuals, team photos, claims or source code.
8. Replay EBC users' likely journey as explicit hypotheses. Route back to the relevant D/R/U/C/S/Design node and **actually rewrite/restructure the V1 artifact into V2**.
9. If still no credible answer, expand the tier or change the research question. If evidence supports a useful next step, stop and report.
10. Save only useful discoveries in dated reference-evidence cards with URLs, visual-evidence status, constraints, applicability, alternative interpretations and revised decision.

## Never claim
- HTML text equals actual mobile/desktop screenshot inspection;
- external webpage copy equals approved EBC language or proves better conversion;
- a popular brand's solution is a universal rule;
- user's missing approval can be inferred from historic code alone;
- "analyzed visual hierarchy" if browser/image proof is unavailable.

## Agent outputs (compact)
`RESEARCH_GAP → TIERS/SOURCES → MODULE JOBS + SCREENSHOT STATUS → USER PATH → BEST / RIVAL MECHANISM → EBC V1→V2 → UNCERTAINTY → EVIDENCE CARD`.

## First phase runtime verification
Use `research/tests/reference-escalation-acceptance.md` when available. The existence of this Skill is not proof that a model with web/text-only tools has visual browsing capabilities. If screenshot capture must happen, invoke a real browser-capable tool or mark it pending.
