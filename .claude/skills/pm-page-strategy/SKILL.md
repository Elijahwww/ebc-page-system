---
name: pm-page-strategy
description: Diagnose EBC website and campaign landing page requests, generate evidence-based PM briefs and conversion strategies using versioned PM knowledge, and flag unresolved business/compliance dependencies before design or code.
---

# PM Page Strategy Skill · v0.1 (candidate)

## When to use
User requests analysis or planning for EBC 官网、产品页、广告推广 LP、活动 LP；包括新建、改版、模块调整、转化问题诊断。

## Read before answering
- `pm/README.md`
- `pm/context/ebc-business-background.md`
- `pm/context/forex-cfd-industry-and-users.md`
- `pm/methods/requirement-diagnosis.md`
- `pm/methods/page-strategy-and-conversion.md`
- When researching competitors: `pm/research/competitor-landscape.md`
- On fact claims: `pm/context/fact-verification-issues.md`
- When user supplies SOP: `pm/sop/README.md` and its future approved SOP attachments

## Inputs
User request, page type, product & status, targeted markets/languages, traffic/CTA goals, available factual source, existing page code/screenshots/URLs and time constraints. Extract known fields first; unknowns stay `UNKNOWN`.

## Method
1. Separate the request's **surface form** from the underlying user/business problem.
2. Check evidence, personas/entry intent, regional entity, product availability, promotion risks and site/CRM handoff.
3. Compare low-cost vs structural options, including doing less; explain tradeoffs.
4. Define one information responsibility per module, CTA path, and measurable acceptance criteria.
5. Mark each factual claim `FACT_VERIFIED` / `INTERNAL_PENDING` / `HYPOTHESIS` / `CONFLICT`; do not invent claims.
6. If needed, perform dated, source-linked competitor research, distinguishing observation from inferred advantage.
7. Output a structured PM brief using `pm/templates/pm-brief.md`, plus a short recommendation and list of **blocking** confirmations only.

## Output contract
- Scope and objectives
- Problem diagnosis and evidence
- User / traffic / language / market
- Recommended structure and module responsibilities
- Conversion journey and key CTA behavior
- Competing options and why chosen
- Fact/risks/unknowns with source references
- Tracking / test / acceptance and handoff dependencies
- Status: `PM_BRIEF_DRAFT` (never self-approve)

## Quality gates (yes/no)
- Is the proposed page solving the real problem?
- Are user, market, product status and CTA goal explicit or visibly marked unknown?
- Does each module have one information job?
- Do claim/source and jurisdiction checks exist?
- Are design, copy and code boundaries explicit?
- Are conversion path and acceptance conditions testable?
- Are unverified decisions flagged instead of silently fixed?

## Anti-patterns
No empty slogan stuffing, no misleading risk-free/guaranteed returns claims, no invented fee/award/regulator/partner/numbers, no universal fixed page count or aesthetic, no assumption that a competitor's page is a proven winner, no unapproved automatic SOP or legal conclusions.
