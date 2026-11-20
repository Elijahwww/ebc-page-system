# ITER-20261120-006 · 双模式开关、必看基准截图门禁、LP 密度硬尺与双轨视觉分流（v0.5.0）

| 字段 | 内容 |
|---|---|
| **Trigger** | 真实项目 `2026-11-us-stocks-ant-lp`（美股 + Anthropic/ANT 新上市推广页）中，Codex、Claude 与 Gemini 三家模型的 V1 初版**全部**将常规投放 LP 写成了“2000 字白底产品说明书”（堆砌长段落、多行要点、12 张大卡、机制账本与 FAQ 手风琴），用户明确反馈「内容太多、像说明书完全不能用」，直到对照历史 `design/pc.png` 截图压字重构后 V2 才对味。 |
| **Scope** | `AGENTS.md`、`PILOT.md`、`CLAUDE.md`、`GEMINI.md`、`.cursor/rules/ebc-page-pilot.mdc`、`README.md`、`research/page-structures/README.md`、`research/page-structures/landing-pages/product-lp-common.md`、`content/rules/review-rubric.md`、`design/README.md`、`design/methods/visual-direction-and-iteration.md`、`.claude/skills/pm-page-strategy/SKILL.md`、`.claude/skills/ebc-web-design/SKILL.md` |
| **Evidence** | ① 用户 2026-11-20 跨三模型对比反馈（Codex / Claude / Gemini 初版同质化膨胀为说明书，而对照 `sources/landing-pages/{etf,oil}/design/pc.png` 重构后的 V2 框架与密度获认可）；② 实际目检 4 张历史设计图（`etf/A`, `etf/B`, `oil/B`, `copy-trading/A`）证实 EBC 投放 LP 具有高度一致的深酒红渐变首屏、融合监管条、短卡密度（1 标题 + 1 短句）与 250–450 字篇幅；③ 仓库规则审计发现 `design/tokens.css` 浅白 Apple 基线与真实 LP 深酒红皮肤冲突、且缺少“必看截图”和“说明书化否决项”。 |
| **V1 → V2** | ① 新增 **双模式开关**：`Mode 1 · STANDARD_PRODUCTION`（默认用于 `LP_PRODUCT` / 常规活动页）vs `Mode 2 · EXPLORATORY_REDESIGN`（官网/品牌/内部平台/明确大改版）；② 新增 **必看视觉基准截图门禁 + 10 行开工回执（Pre-Flight Contract）**；③ 将 `LP_PRODUCT` 从容易吓退模型的 `STRUCTURE_CANDIDATE` 升级为 **`DEFAULT_PRODUCTION_BASELINE`**，并在 `product-lp-common.md` 固化「LP 内容密度硬尺表」；④ 在 `content/rules/review-rubric.md` 新增第 5 项硬否决 **`LP_BLOAT_FAIL`**（即使每句事实正确，说明书化也直接判 FAIL 强制压字剪枝）；⑤ 在 `design/` 拆出 **轨道 A（官网浅白 Apple 探索）vs 轨道 B（投放 LP 深酒红现行皮肤）**，消除规范打架。 |
| **Why** | 先前规则过度强调“防盲目套模板（全部未锁定）”与“合规完整性”，只管“不能写错”，没管“不能写多”，同时没有强制看 PNG 截图；导致所有模型在自由度过高与防错压力下，把 `pm-decision.md` 的深度推演直接泄漏到页面 UI。反证：若锁死全部页面类型会压抑官网创新——因此采用**双模式分流**，只收紧成熟投放 LP（Mode 1），保留官网与明确改版任务（Mode 2）的完整探索自由度。 |
| **Status** | `USER_CONFIRMED`（2026-11-20 用户明确批准直接在 `main` 推进 v0.5 规范升级；仍不替代公司正式上线合规审批）。 |
| **Validation** | `projects/2026-11-us-stocks-ant-lp` V1→V2 已验证按截图与密度硬尺重构后框架与密度符合用户预期；下一轮需用新 LP 需求在 Codex / Claude / Gemini 上实测“首轮即出 V2 密度”的回归效果（`NEXT_RUN_PENDING`）。 |
| **Compatibility** | 密度硬尺与轨道 B 视觉皮肤**仅适用于 `Mode 1` 常规产品投放 LP（及待确认的活动页）**；不适用于 `WEB_PRODUCT` 官网产品频道页、SEO 深度说明页、品牌页、内部工作台或用户明确提出的大改版任务（均走 `Mode 2` / 轨道 A）。 |
| **PR / Commit** | 直接修订于 `main`（待用户确认是否提交并推送远端）；**零修改 `sources/` 原始代码与设计图**。 |
