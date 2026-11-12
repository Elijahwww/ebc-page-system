# EBC Page System · 版本与关键变化

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
