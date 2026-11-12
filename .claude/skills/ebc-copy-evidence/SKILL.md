---
name: ebc-copy-evidence
description: Read and apply EBC website and landing-page copy that was actually reviewed by the user, observed in live pages, or extracted from historical source code. Decompose why each statement worked in its context, reject vague slogan imitation, red-team and rewrite copy using an evidence-status-aware 8-dimension rubric. Integrates with PM Copy loop.
---

# EBC Copy Intelligence · evidence first v0.1

## Why this Skill exists
EBC copy quality cannot be enforced by saying "professional, restrained, user-centric, Apple style". The real reference standard is the user’s historical *decisions* with page purpose, source version, accepted/rejected wording, and reasons. Distinguish observed published code from user-approved material.

## Read relevant references in order
1. `content/README.md` and `content/corpus/decision-index.csv` to select cases by page type, message job and audience.
2. `content/corpus/dialogue-decision-cards.md` for **precisely scoped user review status** and the *why* behind wording choices.
3. `content/methods/extraction-and-governance.md` for evidence hierarchy, approval semantics and source conflicts.
4. If task resembles an ad LP: `content/corpus/landing-page-copy-anatomy.md`; read the exact matching `sources/landing-pages/.../code/.../locales/zh_CN/index.ts` and `asset-review/cases/CASE-00x.md` if accessible on the source-assets PR/branch.
5. If task resembles a corporate/product site: `content/corpus/website-snapshots-2026-11-12.md`; verify the current official URL when freshness matters.
6. `content/rules/review-rubric.md`; `content/methods/copy-review-protocol.md` and `content/templates/copy-decision-card.md`.
7. To verify behavior after updates: `content/tests/copy-standard-regression.md`.

Copy records exist on the content PR branch until merged. The source-assets branch also may be separate. **Do not assume main has those paths until merge.**

## When the PM Copy node invokes this
1. Define the audience, incoming user expectation, and specific *belief change* the module must accomplish.
2. Retrieve 1–3 relevant EBC historical decisions by **same information job** rather than just the same product keyword.
3. State each reference's provenance: USER_CONFIRMED_IN_CHAT / USER_POSITIVE_DIRECTION / USER_REJECTED / CODE_OBSERVED / LIVE_OBSERVED / DRAFT_ONLY / CONFLICT.
4. Decompose semantic responsibilities of H1, subtitle, proof and CTA. Say explicitly what each sentence adds.
5. Create 2–3 strategically different first drafts, grounded in actual product status/facts; no invented numbers.
6. Run the four hard-stop checks and the 8 × 0/1/2 evidence rubric with concrete problems and candidate changes. This is comparative editorial guidance, **not** conversion prediction.
7. Revise the actual wording and if necessary the module sequence; go back to PM Research/User/Strategy if copy cannot resolve an audience misunderstanding.
8. Return complete recommended copy in context and show what meaning changed from V1 to V2. Only mark USER_CONFIRMED when the user actually approves this new version.
9. Once human review occurs, create a new Copy Decision Card with original/rejected/new text, exact reason, source, validity scope and status.

## Reject vague evaluations
- "More premium / more Apple / more restrained" with no named change.
- "Concise" if shortening removes product nature, eligibility or necessary explanation.
- Reusing a slogan approved for Careers on an ETF LP merely because the sentence is elegant.
- Calling deployed or historical source code approved brand-copy standard.
- Assuming A/B/C historical versions imply tested conversion wins.
- Reusing fixed promotional terms, historical performance, brand numbers or regulator labels without current source.
- Silent replacement of user-approved wording, especially EBC-COPY-002/004/007/008/011.
- Treating 3–4 screens, 2-line H1 or 20-character cap as universal copy rule.

## Minimum output on a focused revision
- Current text + placement and reader goal
- Strongest specific critique, mapped to one real EBC case (include case ID)
- Recommended complete V2 copy + one materially different alternative
- What changed, why, and user misunderstanding it resolves
- Approval/evidence status and any single truly blocking fact
- Optional per-dimension rubric scores when comparing variants

## Working with production or Localization
Respect approved final Copy Sheet ID/version. Translations must use supplied EBC terminology references when present; do not translate slogans mechanically or alter CFD/product semantics. Design cannot edit approved copy simply to fit a layout; it must flag layout pressure and return to PM/Content.
