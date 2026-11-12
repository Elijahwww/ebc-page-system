# EBC Page System · 版本与关键变化

## v0.2.0 · 2026-11-12 · 可检验的视觉设计方向与 AI Coding 反模板循环
- 提取用户历史 Figma Make Pre-IPO SKILL 的「精确层级/版心/间距/组件与桌面手机并审」机制，明确产品事实、固定 5600px/900px 等不是全站规则。
- 研究 Anthropic frontend-design、Impeccable、UI UX Pro Max、Vercel Web Guidelines、shadcn、React Bits、21st.dev，以及可核查的 X 实践讨论；热度仅为研究线索，不作为有效性证明。
- 新增 `design/methods/visual-direction-and-iteration.md`、`design/qa/visual-quality-scorecard.md`、`design/tests/visual-quality-regression.md`；更新现有 EBC Design Skill、Design System、QA 与跨模型入口。
- 强制区分 **审美方向 / Visual Critique** 与 **功能/工程 QA**，真实截图修订优先；详见 [ITER-20261112-004](iterations/2026-11-12-visual-quality-v0-2.md)。
- 初始文档和文件引用已验证；真实多模型运行测试及用户对具体页面的视觉认可仍为 `NOT_RUN`。

## v0.1.2 · 2026-11-12 · 跨 AI Agent 上下文交接和确认稿保护
- 新增 `agents/cross-agent-handoff.md`、`projects/HANDOFF-TEMPLATE.md` 和五组行为回归测试，统一 GPT / Claude Desktop / Gemini / Grok 的任务交接、文件版本、锁定文案与反馈回流。
- 主要入口 `AGENTS.md`、`PILOT.md`、`README.md`、`projects/README.md`、`CLAUDE.md`、`GEMINI.md` 只引用统一协议，不各自另造相互冲突的规则。
- 详情见 [ITER-20261112-003](iterations/2026-11-12-cross-agent-handoff.md)；模型端真实交接行为尚未执行测试。

## v0.1.1 · 2026-11-12 · 中文主稿优先和地区化策略解耦

- 根据用户明确确认的工作流，普通项目先用中文完成 D/R/U/C/S 和中文 Copy Sheet 审查，翻译作为后续独立本地化任务，禁止直接逐字转换。
- 明确 `working_language=zh-CN` **不等于** `target_market=China`；日本等专属市场需在中文方案前先读取当地用户、竞品与渠道证据。
- 保留通用 PM 方法、设计系统和组件，仅对有依据的市场差异做局部 Override；缺少本地规范应主动调研并标明假设。
- 更新主入口、PM/Copy/Design/Research Skills、Localization 状态与回归测试，详见 [ITER-20261112-002](iterations/2026-11-12-chinese-first-market-overrides.md)。

## v0.1 · 2026-11-12 · 首个可持续生产基线

- 从六个独立知识资产分支整合：PM 五节点双向审查、EBC 文案决策库、逐层行业参考与网页证据、Apple-inspired 设计规范、原始页面案例及源码。
- 建立跨 Agent 入口：`AGENTS.md`、`CLAUDE.md`、`GEMINI.md` 和 Cursor 规则文件。
- **工作模式调整**：`main` 保存最新可用知识基线；真实项目使用 `projects/` 持续产出；`iterations/` 保存修改前后、证据与决策，必要时通过 PR 迭代，而不是长期将全部资源放在 Draft 分支。
- 当前能力状态：文档与仓库结构整合已核对；不同模型真实端到端执行、浏览器截图、真实转化成效仍需后续任务验证。
- 来源和具体切换记录：[ITER-20261112-001](iterations/2026-11-12-baseline-to-main.md)。

后续新增条目遵守：日期 / 版本 / 变更对象 / 触发原因 / 关联项目 / 证据 / 验证状态 / PR 或 Commit。
