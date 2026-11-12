# Claude Code — EBC Page System

**请首先完整阅读仓库根目录 [AGENTS.md](AGENTS.md)。它是本项目跨模型工作约定；本文件不另设一套冲突流程。**

本项目的 Claude Skills 位于 `.claude/skills/`，其中：
- `pm-page-strategy`：新页面从 PM 深度循环开始；
- `ebc-pm-demand` / `ebc-pm-research` / `ebc-pm-user-journey` / `ebc-pm-copy-critique` / `ebc-pm-strategy-debate`：可单独调用的节点；
- `ebc-copy-evidence`：真实 EBC 文案决策和具体审稿量表；
- `ebc-reference-discovery`：内部知识缺口时跨行业搜索网页、截图、反证、回流；
- `ebc-web-design`：Apple-inspired EBC 网页视觉基线和 Design QA。

先读 `PILOT.md` 再执行真实测试。禁止把 Draft 研究规则当已批准生产文案，禁止声称从未实际采集的截图可用于视觉分析。
