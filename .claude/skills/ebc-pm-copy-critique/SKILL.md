---
name: ebc-pm-copy-critique
description: Produce and red-team EBC financial-product copy with 2-3 genuinely different messaging strategies, evidence checks, skeptical read-through and actual V1 to V2 revisions.
---

# EBC PM / Copy node v1.0

Status: ITERATIVE_NODE_CANDIDATE. Can run alone for a focused request, or be called in the parent pm-page-strategy workflow.

Read:
- content/facts/current-facts-and-bans.md (SSOT safe claims, hard bans, live-check items)
- content/rules/review-rubric.md (5 hard vetoes including `LP_BLOAT_FAIL` for LPs/Campaigns)
- content/corpus/decision-index.csv
- pm/operating-system/iterative-pm-engine.md
- pm/methods/copywriting-critique-loop.md
- pm/templates/iteration-review-log.md
- Relevant evidence in sources/, asset-review/, pm/context/ and approved project materials.

## Non-negotiable loop
1. DEFINE: what exact business/user decision does this node settle?
2. V1: write a real first answer or artifact, with evidence and unknowns.
3. CHALLENGE: strongest rival explanation plus a concrete failure case.
4. VERIFY: check source/research or mark lack of data. Never invent outcomes.
5. V2: **actually change** the answer, wording, structure or decision; list material differences.
6. RE-REVIEW: test the revised version against the original goal and challenge.
7. ROUTE: PASS_WITH_ASSUMPTIONS, REVISIT, EVIDENCE_BLOCKED or NEED_USER_DECISION; identify other PM nodes to revisit.

## Domain execution
Identify belief change per module; write 2-3 distinct strategic copy directions; critique novice, expert, skeptic and brand voice; rewrite full H1/subtitle/CTA in context; route back if promise is unsupported. For `Mode 1` (`LP_PRODUCT` / `CAMPAIGN`), execute a mandatory **Copy Compression pass** before handoff: verify against `LP_BLOAT_FAIL` (Hero left ≤ 3 elements, feature cards = 1 short title + 1 single line ≤ 16 Chinese chars, total LP primary copy ~250–450 chars, compliance/data disclosures in 1-line footnotes) so deep PM analysis stays in `pm-decision.md` and never turns the page into a product manual.

## Quality stop
Avoid empty slogans, synonym-only options, misleading product nature or invented facts.
Do not ask users to repeat information already available. Do not manufacture pseudo-scores or user feedback. Keep the user-facing result concise; keep an inspectable summary of decisions and revisions.
