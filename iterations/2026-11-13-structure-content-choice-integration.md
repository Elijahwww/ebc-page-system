# ITER-20261113-005 · EBC 页面结构候选与 PM 取舍/纠错集成

- **触发**：用户指出 GPT Work/Claude 在 Campaign、产品 LP、官网页面产生冗余、空洞与结构失控；希望先从历史 UI/源码/线上得到默认模块、主题只换视觉/文案；又强调 AI 不要输出“面面俱到”的伪完美方案，必须有真实取舍与纠错。
- **Claude 输入**：`research/page-structures/` 十份 2026-11-13 `STRUCTURE_CANDIDATE` 文件，3 组 `sources/campaigns/trading-contest/` 来源；产品 LP ETF A/B/C、OIL A/B、CT A/B 和官网美股两种不同材料；结构未被用户批准。
- **GPT 独立核验**：读三份活动 Vue/locale/备注，七份 LP Vue + 七份中文 locale，US-X 中文 locale；引用 `pm/context/fact-verification-issues.md` 的待核监管实体边界。网上三场 Campaign URL 试图直接访问但工具未成功；本轮未直接渲染所有私有 PNG、未核验共享组件/正式线上。
- **重要发现**：
  1. 三类是抽奖、达标、排名的**交易激励机制**，而非生命周期分类；上层 `CAMPAIGN_TRADING_INCENTIVE`，源文件路径维持 `trading-contest/`；
  2. `Hero+Form → Prize → (Mechanism/Leaderboard) → Steps → Rules` 为 3 例共享**默认候选**，不是所有活动必须“3 步/首屏内嵌表单”的永久规定；
  3. 三个产品、七版 Vue 都有三个主正文 `section2-4`，但共享代码/家族会压低样本独立性，**不能由此证明三模块最优**；
  4. ETF-B 使用不同 `honor-list` 监管信息轮播，不是统一的 `jianguan`；当前牌照/实体须另行批准；
  5. ETF-A 截止 `2026-09-12T00:00:00+03:00` 的历史优惠和 ETF-C 的可能混淆股票/CFD 权益的旧话术不能迁移到新页面；OIL-A 中文 locale 含未使用的跟单遗留键；
  6. 第三活动 PC/Mobile/代码/URL 分属不同场次，不应作为一份完整线上页面；US-X 不等于官网美股设计代码。
- **从草案到集成**：将 Draft PR #12 的 `page-logic-and-content-scope.md`、`decision-tradeoffs-and-correction.md`、六个取舍场景迁入新分支；新增 8 个集成测试场景。不同策略可竞争用户路径/信息深度/证明/CTA/同模块 Variant，不强制两套模块数量不同；新模块需要真实用户缺口、无法在既有模块承接、真实证据、代价与撤销条件。重点同时审查“冗余”与“缺失必要信息”。
- **结构/资产治理**：新增 `research/page-structures/review-2026-11-13.md`，校正总索引和跨模块映射、三个产品分册补中文 locale 复审注意、结构例外登记；新增三份非侵入式活动 `manifest.md`，更新 `sources/INDEX.md`，不删除原始 PNG/Vue。
- **Agent 路由**：`AGENTS.md`、`.claude/skills/pm-page-strategy/SKILL.md`、`.claude/skills/ebc-pm-strategy-debate/SKILL.md`、PM 核心方法、Content、Design、PILOT、README、CLAUDE、GEMINI 等统一增加页面结构和取舍入口。
- **核心取舍**：宁可承担新项目需要小型 PM 结构判断的成本，也不把未经验证的“永远三屏”写成硬法。主动放弃「所有产品页、活动页一键套用固定模板」和「每个研究问题都能成为独立模块」。
- **保留边界**：`STRUCTURE_LOCKED` = 0；真实 Agent 回归测试 NOT_RUN；线上站点行为、第三方/共享组件缺失和受监管营销事实仍需后续业务核验；不能宣称新规则已经提高 CVR。
- **后续**：用真实交易激励活动、复杂新产品 LP、官网产品信息页各做一次跨 Agent 简短测试，分别收集其“主动放弃项/可反转条件/新增模块证明”，再考虑锁定哪些类型。
