# Claude Code — EBC Page System

**请首先完整阅读仓库根目录 [AGENTS.md](AGENTS.md)。它是本项目跨模型工作约定；本文件不另设一套冲突流程。**

本项目的 Claude Skills 位于 `.claude/skills/`，其中：
- `pm-page-strategy`：新页面从 PM 深度循环开始；**先读对应 Page Structure 候选、再做内容取舍和纠错**，不为“完整”强制加屏；
- `ebc-pm-demand` / `ebc-pm-research` / `ebc-pm-user-journey` / `ebc-pm-copy-critique` / `ebc-pm-strategy-debate`：可单独调用的节点；
- `ebc-copy-evidence`：真实 EBC 文案决策和具体审稿量表；
- `ebc-reference-discovery`：内部知识缺口时跨行业搜索网页、截图、反证、回流；
- `ebc-web-design`：EBC 视觉方向反模板审查、实际截图驱动的 Art Direction 循环，以及**分离的视觉 QA 与工程 QA**；参考 `design/methods/visual-direction-and-iteration.md`。

新 Campaign/LP/官网页规划还需**首先**按 `AGENTS.md` §0B 判定执行模式（`Mode 1 · STANDARD_PRODUCTION` vs `Mode 2 · EXPLORATORY_REDESIGN`）并输出 10 行 Pre-Flight 开工回执；做 `LP_PRODUCT` 时**必须实际打开 `sources/landing-pages/etf/B/design/pc.png` 与 `oil/B/design/pc.png`** 对齐密度硬尺与投放视觉皮肤（`LP_PRODUCT` 已升级为 `DEFAULT_PRODUCTION_BASELINE`），严禁把 PM 深度分析泄漏成页面长篇说明书（触发 `LP_BLOAT_FAIL`）。同时阅读 `research/page-structures/matching-and-hero-contract.md`、`research/page-structures/README.md`、对应结构分册、`pm/methods/page-logic-and-content-scope.md`、`pm/methods/decision-tradeoffs-and-correction.md`。其余类型尚未用户锁定；必须区分页面类型、交易激励机制和 Hero 注册表单/CTA，不因旧活动 3/3 右侧表单否定用户指定的 CTA。匹配不到结构按 EBC 官方页→CFD→数字货币→金融行业进行调研；推荐方案应说清选中、舍弃、代价、纠错触发。

使用 Claude Desktop 的 Code 页面处理其他 AI 移交的任务时，先读 [跨 Agent 交接协议](agents/cross-agent-handoff.md) 和对应项目的 `handoff.md`。仅按允许范围实现；已确认的中文 Copy ID / 文案不许为了排版静默改写。若 GitHub Desktop 本地仓库未 Push，其他 Agent 未必可见；遇到版本冲突必须先复核。

处理真实项目先读 `PILOT.md`，正常产出并在 `projects/` 记录版本。禁止把 Draft 研究规则当已批准生产文案，禁止声称从未实际采集的截图可用于视觉分析。
