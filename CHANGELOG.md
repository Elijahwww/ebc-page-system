# EBC Page System · 版本与关键变化

## v0.4.0 · 2026-11-13 · 页面结构自动匹配、Hero 注册表单/CTA 独立选择与行业调研顺序
- 新增 [三维匹配协议](research/page-structures/matching-and-hero-contract.md)：`PAGE_FAMILY / CAMPAIGN_MECHANIC / HERO_CONVERSION` 三个维度分开；交易大赛根据现有 Candidate 匹配活动模块；历史 Campaign 3/3 PC Hero 右侧表单仅为默认候选，**用户明确要求 CTA 时替换入口、无需重建正文或另造右表单**。官网主站不继承活动页表单。
- 匹配不到/证据不足才启动定向网页结构研究，顺序：EBC 官网/核实自有 Campaign/LP → CFD/Forex → 数字货币平台 → 更广金融 → 必要时科技/其他；按顺序记录模块职责、Hero 左右/表单/CTA、报名路径、桌面/手机差异、规则与风险，不复制行业事实/陈述。
- 同步更新 Page Structure/产品 LP/活动分册/跨案例 Hero Variant、AGENTS、PM Skill、Research Skill、PILOT、Claude/Gemini、PM/Research README 与研究证据卡，新增六项 [路由测试](pm/tests/page-family-hero-routing-regression.md)（`NOT_RUN`）。
- **无任何历史源码/设计图改动**；此前的 `STRUCTURE_CANDIDATE` 与合规事实确认边界不变，真实 Agent 行为未运行验证。

## v0.3.0 · 2026-11-13 · Page Structure System × PM 内容取舍与可纠错方案
- Claude 已归档 `research/page-structures/` 十份结构报告及三个 `sources/campaigns/trading-contest/` 来源；GPT 对三份活动 Vue/locale 与七份 LP Vue + 七份中文 locale 和 US-X 中文 locale 做证据复审。三种机制是**抽奖/达标/排名**；七版三正文位是历史模板观察，**不是最佳或全站上限**；官网美股、US-X 单例保持待核。
- 新增 [结构证据复审](research/page-structures/review-2026-11-13.md)、三个活动 Manifest 与 `sources/INDEX.md` 索引，修正监管区形态、历史到期 ETF 优惠、OIL-A locale 遗留等问题；原始源码和 PNG 未改。
- 整合 [PM 页面逻辑/内容取舍](pm/methods/page-logic-and-content-scope.md)、[方案放弃与纠错](pm/methods/decision-tradeoffs-and-correction.md) 并接入 `AGENTS.md`、PM Agent/Strategy Skills、Copy、Design、Research、Claude/Gemini/PILOT。**已有锁定骨架时允许同结构下真正不同的策略**，不强迫另造模块；新增模块需证明现有职责无法承接。
- 推荐方案必须说明 `CHOSEN / REJECTED / SACRIFICE / FAILURE CONDITION`，并审查冗余与必要信息完整性；新增八项回归场景 `NOT_RUN`。
- **状态**：全部结构仍 `STRUCTURE_CANDIDATE` 或 `SINGLE_CASE_CANDIDATE`，无 `STRUCTURE_LOCKED`；三个活动页线上未核验、历史共享组件与正式营销数据未完全取得；真实 Agent 执行和转化结果未验证。
- 过程与取舍见 [ITER-20261113-005](iterations/2026-11-13-structure-content-choice-integration.md)。


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
