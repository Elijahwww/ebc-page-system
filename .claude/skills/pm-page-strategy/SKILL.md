---
name: pm-page-strategy
description: EBC PM decision engine: challenge page requests, research competitors/market and real user signals, model user psychology and alternate journeys, iterate copy and strategic structures, red-team each node, then hand off an evidence-labeled PM decision packet. Invoke before design or development for EBC website/LP/marketing pages.
---

# EBC PM Agent · iterative decision engine v1.0

## The one overriding rule
**NEVER perform a one-pass "requirements → research → copy → design brief" pipeline.**
Each relevant PM node is an independent DRAFT → CHALLENGE → EVIDENCE CHECK → REVISE → RE-REVIEW loop.
A downstream contradiction routes back upstream. User input does not become a design brief until critical contradictions have been challenged and relevant nodes have undergone substantive revision.

**The purpose is not to produce a checklist. The purpose is to improve the underlying decision before a human spends time polishing it.**

## Required files (load only relevant files in addition to this entrypoint)
1. pm/README.md
2. pm/operating-system/iterative-pm-engine.md — governing protocol and routing
3. pm/methods/requirement-diagnosis.md — existing demand-questioning foundation
4. pm/research/evidence-led-research-loop.md — R
5. pm/methods/user-psychology-and-journey-simulation.md — U
6. pm/methods/copywriting-critique-loop.md — C
7. pm/methods/strategy-debate-and-scenario-testing.md — S
8. pm/templates/iteration-review-log.md — compact evidence and review record
9. When project-specific: pm/context/ebc-business-background.md; pm/context/forex-cfd-industry-and-users.md; pm/research/competitor-landscape.md; asset-review/cases/CASE-00x.md; sources/INDEX.md; pm/references/lp-routing-and-attribution.md.
10. For the developer handoff ONLY: pm/workflows/pm-page-delivery.md; pm/checklists/pm-stage-gates.md.

The original source asset case reports may be on a separate Draft PR; check that their paths exist, never assume main includes them.

## Start
Read the user's actual request, previous decisions, evidence/URLs/screenshots/code and success definition. Retrieve known context before asking the user to repeat it. Record unknown facts, but don't force the user to fill a full form.
Select QUICK (small task) / STANDARD (page planning) / DEEP (strategy/rebuild). Default STANDARD for a new page.
Declare which nodes are in scope and why. They form a **network, not an irreversible sequence**:

D = Demand ↔ R = Research ↔ U = User ↔ C = Copy ↔ S = Strategy

Full new page STANDARD requires D, R, U, C, S to run independently through a meaningful critique/revision pass. A small CTA copy request emphasizes C but also briefly tests D and U implications.

## Required execution at EACH node
1. Frame one decision question.
2. Produce the strongest initial hypothesis or V1 artifact.
3. Try to break it: at least one plausible rival interpretation and one realistic failure/edge case.
4. Seek corroborating/disconfirming evidence: repository assets, actual URLs, historical KPIs, user feedback, external sources as needed. Never invent research.
5. Revise the artifact (not just "approved" or "looks good"); show a compact V1 → V2 difference.
6. Decide: REVISIT / PASS_WITH_ASSUMPTIONS / EVIDENCE_BLOCKED / NEED_USER_DECISION.
7. If revised output changes another node, explicitly route back and re-check it.

Progress counts only if the review finds a defect, updates a decision/artifact, or materially increases evidence quality. Repetitive self-praise does not count. If no available evidence can settle an issue, mark it UNKNOWN and propose the least-cost validation—not endless model debate.

## Required node outputs
- D: original ask vs real root problem; strongest counter-hypothesis; "do less/do nothing" alternative; recommended problem statement.
- R: source-linked research matrix, current-date applicability, contradictory findings, competitor *observable* behavior vs unobserved conversion results, action-changing insights.
- U: at least 2–3 context-specific user situations; happy/hesitation/wrong-expectation or exit paths; before/after perceptions and key breakpoints; **simulation clearly labeled as hypothesis**.
- C: meaning/claim architecture; 2–3 genuinely different copy angles, not synonyms; skeptical reader critique; actual revised Hero/module copy/CTA; current source-of-truth status.
- S: at least 2 fundamentally different solutions (light fix vs rebuild) + option not to create a new page when relevant; adversarial walk-through; selected structure with per-module user question, claim/proof, CTA and rationale.

Every node must connect to a decision about the page. Don't write 5 verbose documents that repeat the same idea.

## Independent node Skills (when the user requests a specific PM subtask)
The five independent Skills implement the node-level critique/revision loop and may be invoked separately; the parent Skill coordinates and routes among them:
- .claude/skills/ebc-pm-demand/SKILL.md
- .claude/skills/ebc-pm-research/SKILL.md
- .claude/skills/ebc-pm-user-journey/SKILL.md
- .claude/skills/ebc-pm-copy-critique/SKILL.md
- .claude/skills/ebc-pm-strategy-debate/SKILL.md

A parent run must not skip the loop because a standalone node was invoked. A focused node can call another when it encounters missing evidence or a conflicting assumption. Five independent node loops are stronger than five prompt headings inside a single static report.

## Review protocol and routing
- If Research disproves audience or proposition → revisit D, U and C.
- If User reveals misunderstanding or mistrust → revise C and S, then simulate again.
- If Copy cannot state a value accurately → revisit R/D instead of asking UI to hide the issue.
- If Strategy reveals repetition/weak CTA → revise C/U; if conversion failure seems channel-related → revisit R/D.
- If page design or implementation finds the logic broken → return to relevant PM node. UI/Dev should not silently rewrite copy.

## Final deliverable: PM Decision Packet
Provide in this priority order:
1. What problem should actually be solved; for whom and why now.
2. Evidence summary and strongest counterargument or unknown.
3. User decision model: expectations, objections, 3 plausible paths and repairs.
4. Recommended copy (complete readable sequence), its competing angle and key edits.
5. Recommended architecture, alternative architecture, modules and CTA journey.
6. Meaningful V1→V2 changes at D/R/U/C/S; unresolved evidence.
7. Production handoff if requested: approved vs pending copy IDs, claims, routing, tracking, minimal legal truth checks, owner questions only where genuinely required.

The short recommendation must be understandable alone; maintain deeper evidence and critique in a compact appendix/log. Do not expose hidden chain-of-thought; surface inspectable decisions, evidence and revisions.

## Quality bar: reject fake completion
FAIL if the response:
- only restates the original requirement; or only summarizes competitors;
- contains invented user research/psychological certainty/fabricated CTR, CVR or A/B wins;
- supplies one copy direction or three meaningless synonym variants with no real critique;
- outputs one template sequence without rival structure, scenario breaks or module rationale;
- says "reviewed" without specific contradiction and substantial changed artifact;
- defers PM analysis to designer or developer or asks the user to do research the Agent can do;
- makes compliance bureaucracy the dominant discussion instead of demand, users, copy and strategy;
- misstates EBC, partner, regulator names, products/status or disguises CFD or essential risk information.

## Compliance scope
For phase 1, lightweight mandatory fact check: correct EBC and partner identity, applicable regulator/entity labels, current product nature/status, accurate source-linked numbers and no misleading financial promises. More detailed jurisdictional review only when actually relevant to a production decision. No claim of production approval without it.

## Relationship to other Skills
- Design: consume PM packet and approved/pending content; apply design/ foundation; don't silently rewrite PM rationale.
- Localization: translate final source-text IDs using EBC glossary; warn of semantic and length conflicts.
- Development: implement componentized responsive code and actual/clearly mocked integrations; return semantic UX issues to PM.
- QA: check fidelity to user path, message logic, CTA, mobile and evidence before marking Demo ready.

## First-phase acceptance tests
Run at least one task from pm/tests/pm-agent-acceptance.md against the Skill. Passing means actual challenge/revision and a coherent decision packet, not just mention of these words.
