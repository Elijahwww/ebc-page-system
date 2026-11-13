# EBC PM Knowledge System · v1.0（以深度决策为核心）

状态：WORKING_DRAFT / CORE_AGENT_REVIEW_REQUIRED。项目方向来自用户 2026-11-12 明确要求：需求、调研、用户心理/路径、文案、方案分别执行**独立反复审查循环**，不是线性流程。
此仓库所有 PM 方法均是可演进工作资产，未获公司正式 SOP 认定。

## 中文主稿与目标市场
默认以中文运行 D/R/U/C/S、审查并确认中文 Copy Sheet；之后才进入单独 Localization 流程。**中文工作语言不意味着目标受众是中国大陆用户**：若项目指定日本等地区，R/U/S 从开始就使用当地市场证据和规范，但依然可用中文交付内部方案。共用视觉和组件，仅针对当地真实差异做局部适配。详见 `localization/chinese-first-and-market-overrides.md`。

## 一、为什么优先建设 PM，而非 UI/开发
真正高成本的返工往往是需求问题没找对、研究没证据、用户预期被误解、文案与用户心理错位、方案结构缺乏反证。只让 Agent 生成 UI 或填写 Brief 不能解决这种问题。
PM Agent 应当让模型先完成可检查的策略性工作，帮助人工集中处理真正需要判断的分叉。视觉遵循 design/ 基线；开发以组件化与工程 QA 为主。

## 二、从哪里进入（不要按文件列表线性运行）
**执行入口**：[Claude PM Skill](../.claude/skills/pm-page-strategy/SKILL.md)。
**强制运行协议**：[五节点思考引擎](operating-system/iterative-pm-engine.md)。

每个节点独立版本循环，但能相互回退：
- D 需求挑战：[requirement-diagnosis.md](methods/requirement-diagnosis.md)
- R 研究与证据：[evidence-led-research-loop.md](research/evidence-led-research-loop.md)
- U 用户心理和路径：[user-psychology-and-journey-simulation.md](methods/user-psychology-and-journey-simulation.md)
- C 文案创作/批评/重写：[copywriting-critique-loop.md](methods/copywriting-critique-loop.md)
- S 方案比较、逆向走查：[strategy-debate-and-scenario-testing.md](methods/strategy-debate-and-scenario-testing.md)

不是 D→R→U→C→S 一条流水线，而是互相指向的循环网络；每个相关节点要经 Draft → Attack → Verify → Revise → Review。

**审查记录**：[iteration-review-log.md](templates/iteration-review-log.md)，**首期行为验收**：[pm-agent-acceptance.md](tests/pm-agent-acceptance.md)。

## 独立节点 Skill（可由主 Skill 编排，也可单独调用）
- [需求挑战](../.claude/skills/ebc-pm-demand/SKILL.md)
- [证据调研](../.claude/skills/ebc-pm-research/SKILL.md)
- [用户心理与路径](../.claude/skills/ebc-pm-user-journey/SKILL.md)
- [文案批评与重写](../.claude/skills/ebc-pm-copy-critique/SKILL.md)
- [方案竞争](../.claude/skills/ebc-pm-strategy-debate/SKILL.md)

每个 Skill 都必须先提出反对意见、实质性修订，再给出当前建议；“自我评审通过”而没有更改不能算完成。

## 三、业务知识与案例（输入，不是制定规则的直接证据）
- [EBC 业务背景](context/ebc-business-background.md)
- [Forex/CFD 与受众假设](context/forex-cfd-industry-and-users.md)
- [竞品参考矩阵](research/competitor-landscape.md)
- [当前事实冲突](context/fact-verification-issues.md)
- `sources/` 与 `asset-review/` 已作为历史证据纳入当前 `main` 工作基线。它们证明“以前怎么做”，**不证明那个版本转化效果更好**。

## 页面结构与决策取舍（2026-11-13）

- [页面类型匹配 × Hero 表单/CTA × 行业调研](../research/page-structures/matching-and-hero-contract.md)：每个新页面先判用途、活动机制、首屏转化方式；无法匹配时 EBC 官网 → CFD → 数字货币 → 金融行业按需研究，用户明确 CTA 覆盖历史表单。
- [路由回归测试（尚未真实运行）](tests/page-family-hero-routing-regression.md)：交易大赛默认与 CTA 例外、主站 Hero、不匹配时研究顺序。
- [历史 Page Structure 候选](../research/page-structures/README.md)：分类为交易激励、产品 LP 与官网单例，**没有任何用户锁定结构**；[源码/locale 复审](../research/page-structures/review-2026-11-13.md) 强调 7 个 LP 的三个正文位不是强制最佳。
- [Page Logic & Content Scope](methods/page-logic-and-content-scope.md)：研究内容不自动进入网页；优先现有模块/Variant，新增模块做独立职责和必要信息审查。
- [Decision Tradeoffs & Correction](methods/decision-tradeoffs-and-correction.md)：方案必须明确“选中、放弃、代价、失败/反转信号”；不追求全维度伪完美。
- **已锁定结构时**保留模块职责，比较同结构内策略；**候选结构时**允许基于真实任务提出例外并保留记录。必要风险和产品事实不能因极简被删。

## 四、其他资产位于“后半段”
- [页面策略/归因基础](methods/page-strategy-and-conversion.md)
- [项目执行与交付](workflows/pm-page-delivery.md)
- [PM 执行门禁清单](checklists/pm-stage-gates.md)
- [历史 LP 路由与归因](references/lp-routing-and-attribution.md)
- [历史转化问题诊断](methods/conversion-diagnosis.md)
- [简明 Brief](templates/pm-brief.md)
- [实际 SOP 待整合](sop/README.md)

Checklist 管的是实现遗漏；**不能代替**需求批判、心理推演、文案竞争和方案竞争。合规在探索阶段聚焦基本事实真实、监管/实体正确、不可误导；若未来正式发布，再完成项目适用的必要审查。

## 五、证据状态
- SOURCE：原始材料与真实数据（不擅自改写）。
- FACT_VERIFIED：确有对应范围与时间来源核验的事实。
- OBSERVATION：可观察界面/代码行为，不代表有效性。
- HYPOTHESIS：合理但未验证的解释。
- COUNTERFACTUAL_SIMULATION：推演的用户路径，**不是实际用户反馈**。
- RULE_CANDIDATE：待验证方法；APPROVED_RULE：有审核来源、日期和范围的有效规范；DEPRECATED：已废弃。
- CONFLICT / UNKNOWN：必须明示而不静默统一。

注意：“Agent 自己多次审查”并非独立外部实验证据；最终对转化的因果判断仍需要用户研究/实验数据。

## 六、输出优先级
默认优先给出：重构的问题 → 关键研究证据与反证 → 用户路径及最大障碍 → 文案修订结果 → 竞争策略和推荐结构 → 重大不确定性。
随后才是设计与开发交接。**不能以列完全部字段/阶段为完成标准**。
对较小问题，可 QUICK 深度聚焦主要节点；对新页面，D/R/U/C/S 全节点必须有有效批评和修订。
