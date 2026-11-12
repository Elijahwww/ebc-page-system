# ITER-20261112-003 · 多 AI Agent 交接统一协议与上下文保护

- **触发**：用户计划将 GPT、Claude Desktop、Gemini、Grok 分别应用于 PM、文案、外部研究、UI/开发/QA，要求解决切换 Agent 时上下文丢失、定稿被覆盖的问题。
- **旧状态**：已有 AGENTS.md、PILOT.md 及 projects/README.md 的基本项目目录与独立 runs/，但缺少可执行的“谁交给谁、哪版已确认、版本验证、不能改什么、结果写哪里”的单一交接契约。
- **改动**：
  - 新增 `agents/cross-agent-handoff.md`，统一项目事实优先级、跨平台边界、交接包、READ→VERIFY→WORK→RETURN→LOG 执行规则。
  - 新增 `projects/HANDOFF-TEMPLATE.md`，一屏内能确定最新 Commit/文案版本、明确任务、允许更改范围、验收、下游位置。
  - 新增 `agents/tests/handoff-regression.md`，包括旧快照、已确认中文文案保护、其他 AI 候选意见、无 GitHub 权限等行为测试。
  - 入口文档引用同一份协议，避免每个 Agent 拥有相互冲突的维护规范。
- **主原则**：`brief.md` 保存原始需求；`pm-decision.md` 保存当前推荐/决策；`copy-sheet.md` 是当前中文源稿唯一现行版本；`runs/` 保存各 AI 独立候选；`handoff.md` 是最小交接包；`iterations.md` 保存审查和版本变化。用户已确认的文字需要保留 ID、版本与状态，跨模型不能直接改写。
- **风险和边界**：各 AI 不会自动共享私有聊天；未 Push 的本地文件不能被远程 AI 自动读取；Gemini/Grok 等具体 GitHub 导入可能是快照；本机制不承诺平台间自动通信或实际同步成功。
- **验证**：GitHub 文档链接/文件完整性检查，具体 Agent 端行为测试仍 `NOT_RUN`；未来需用真实 EBC 项目测试 GPT→Claude→Gemini→GPT 的 Version Integrity 和 Copy Lock。
- **状态**：SHARED_WORKFLOW_CANDIDATE，用户支持跨 AI 协作及迭代记录；未宣称全部跨平台能力已验证。
