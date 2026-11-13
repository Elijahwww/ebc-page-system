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

## Structure matching before discovery

For page requests first read `research/page-structures/README.md`, `research/page-structures/matching-and-hero-contract.md`, and the relevant structure case. If a suitable EBC baseline exists, don't force an exhaustive competitor sweep. If it does not match the user job/market/Hero requirement, do focused T0→T1→T2→T3→T4 research. **A user-specified CTA-only Campaign Hero must not be replaced by the historical embedded form.**

## Locale-aware discovery
When `target_market` is explicitly Japan or another local market, search and capture official examples relevant to that locale within each industry tier first (same industry → finance → top tech), then broaden geography if evidence is insufficient. Reports may remain in Chinese as the working language; Chinese does not imply Chinese users. Do not create a Japan-specific rule without a source. The workflow lives in `localization/chinese-first-and-market-overrides.md`.

## Required steps
1. Identify the actual problem; quote what existing EBC assets can and cannot solve.
2. Prioritize in order: **T0 EBC official website + verified EBC Campaign/LP online pages + EBC source/archive** → **T1 CFD/Forex/online broker** with the same page job → **T2 crypto/digital asset trading platforms** (structure/interaction only, note legal transfer risk) → **T3 wider finance** (securities, banking, asset management, payments, fintech) → **T4 other tech/cross-industry** only as needed. Do not assume the EBC public homepage is the only EBC website source; validate claimed official domains. Stop once sufficient evidence answers the current question.
3. Query official pages; log date, language, market and access status. Narrow to examples that address the decision; do not scrape huge numbers merely to increase source count.
4. Acquire actual readable page text/DOM. **When a browser/screenshot tool is available**: capture full-page desktop + mobile, relevant cropped sections and observable CTA interactions. Record viewport and source. **When not available**: mark `TEXT_ONLY_VISUAL_PENDING`, no invented screenshot, no unsupported visual conclusions.
5. For each relevant page provide an **ordered MODULE_MAP** (Hero, reward/prize, qualifying conditions, mechanism/leaderboard, participation steps, rules, disclosures, optional modules). Capture **Hero desktop left and right roles**, whether right panel contains an embedded registration form or only CTA, CTA destination/interaction, and mobile order. Distinguish visible/captured evidence from source-only inference; page family, campaign mechanic and Hero conversion are separate variables; see `research/page-structures/matching-and-hero-contract.md`.
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
