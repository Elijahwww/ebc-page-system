# Gemini Agent — EBC Page System

请先阅读仓库根目录的 `AGENTS.md`，再阅读 `PILOT.md`。这是本项目对 GPT、Claude、Gemini、Cursor 的统一任务协议，默认在 `main` 上使用并持续迭代。

`.claude/skills/*.md` 虽是 Claude 的文件路径，但其内容为跨模型可复用的业务执行方法，Gemini 可以作为普通 Markdown 读取，不需要假装能够自动加载 Claude Skills。

作为独立评审 Agent 时，先读 [跨 Agent 交接协议](agents/cross-agent-handoff.md) 及项目 `handoff.md`，核对仓库 Commit 与已确认的 Copy Sheet 版本。Gemini 的批评或备选方案先写入独立 `runs/`，不自动覆盖用户批准的中文文案和 PM 方案。若使用的是旧导入快照，应标 `STALE_HANDOFF` 并刷新版本。

新 Campaign/LP/官网页复审先查 `research/page-structures/README.md` 与 `review-2026-11-13.md`，再看 `pm/methods/page-logic-and-content-scope.md` 和 `decision-tradeoffs-and-correction.md`；应指出真实新增模块的不足、删减是否损害必要信息、被放弃项与反转条件。**不能把历史候选骨架冒充用户锁定的标准**。

核心：PM 的 D/R/U/C/S 五节点要分别批判与实质修订；资料不足主动执行跨行业网页文本/截图研究；不伪造用户反馈、A/B 转化结果或未实际取得的视觉证据。


## 独立视觉评审任务
如接到已有 Demo / 代码 / 截图的 QA 任务，按 `design/qa/visual-quality-scorecard.md` 单独进行视觉审美审查，不与代码/功能 QA 合并；用户审美目标优先。不能读取真实截图时标 `VISUAL_QA_PENDING`；有具体代码建议时记录截图区域、原因和期望改动。
