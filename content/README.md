# EBC Website Copy Intelligence · v0.1

> 状态：EVIDENCE_BACKED_CANDIDATE，创建 2026-11-12。定位：把 EBC 官网页面和推广页**真实文案决策**变成可审查、可复用、可进化的生产资产。不是一份仅写“专业 / 克制 / 苹果风格”的品牌口号清单。
> 本分支独立于 PM PR #1、原始资产 PR #3、Design PR #4；三者尚未合并 main。引用跨分支文件应以分支 URL 读取，不能假定在 main 可用。

## 关键结论
当前 PM v1.0 的 Copy 节点已定义“2–3 种策略 → 质疑 → 重写”，但**没有具备足够来源、用户确认状态、反例、决策原因的真实 EBC 文案库**。新增本体系是补全经验模型，不取代 PM 的 D/R/U/C/S 循环。

## 使用顺序
1. [证据分级与决策记录法](methods/extraction-and-governance.md)：明确谁确认、哪一版、为何修改。
2. [对话中有明确用户判断的文案卡片](corpus/dialogue-decision-cards.md)：与各项目的明确审查意见对应，包含否定理由、重新使用边界。
3. [历史 LP 源码文案结构对照](corpus/landing-page-copy-anatomy.md)：ETF A/B/C、Oil A/B、Copy Trading A/B；**CODE_OBSERVED，非用户审美批准**。
4. [官网线上文案样本](corpus/website-snapshots-2026-11-12.md)：首页、About、产品总览、美股产品、Anthropic 的公开抓取样本；**LIVE_OBSERVED，不代替实时、已批准内容**。
5. [可量化的审查量表](rules/review-rubric.md)：判断信息任务、逻辑、可证据性、表意、叙事层级、用户匹配和 CTA。
6. [文案逆向拆解与重写操作](methods/copy-review-protocol.md)：一条文案为何成立、换场景为何失效。
7. [决策卡模板](templates/copy-decision-card.md)：新项目每次审查自动积累原句、修改、原因。
8. [回归测试](tests/copy-standard-regression.md)：用真实已确认的修改作为评测案例。
9. [.claude/skills/ebc-copy-evidence/SKILL.md](../.claude/skills/ebc-copy-evidence/SKILL.md)：使 Claude Code 按需读取本资产。

## 文案状态：不混淆！
- `USER_CONFIRMED_IN_CHAT`：用户明确采用或认可对应**句子与情境**；不自动代表已在线上发布。
- `USER_POSITIVE_DIRECTION`：用户认可表达方向或关键词，但没有最终定稿。
- `USER_REJECTED`：用户明确否定的旧版本，作为负面教训。
- `LIVE_OBSERVED`：网站公开页面在某次抓取中可见；不自动等于用户/合规最终批准，也不等于今天实时版本。
- `CODE_OBSERVED`：历史页面仓库语言文件/模板中出现；不是表现更优、转化验证或公司事实审批。
- `DRAFT_ONLY`：AI/同事的未确认候选。
- `UNRESOLVED_CONFLICT`：对话最终决定与线上抓取/旧代码冲突，**不能由 AI 静默选优**。
- `EVIDENCE_GAP`：缺原始审批记录、当前链接、时间、真实业务效果或具体旧文案。

## Agent 默认行为
- 先查询同类型页面、同样用户任务和已确认 Copy Decision Cards，**必须找到“为何这样写”**；
- 阅读当前 Page Brief 和来源，再选可复用的**写法机制**，不可照抄不适用的句子、产品承诺或数值；
- 正文和标题各自写明“改变了用户什么认知”，审查一稿、反驳、修订、再走用户路径；
- 没有已确认范例则标 `NO_VERIFIED_EBC_EXAMPLE`，可创作但不能称符合已批准 EBC 标准；
- 审查结果优先表现为具体编辑动作（删什么、补什么、为何、修改后），而非“更克制 / 更高级 / 更 Apple”；
- 不把字符数当 KPI：仅记录同类样本的分布，基于当前信息任务和语言确定篇幅；
- 审核后的项目文案，按模块建立可追溯决策卡；不能凭空说“经用户批准”。

## 当前范围与边界
- 涵盖目前可检索的项目历史判断、PR #3 的历史源代码和案例、可抓取的官网页面；并不宣称已穷尽每一条历史对话及全部线上页面。
- 没有归档原始对话全文时，聊天确认以当前可检索的项目摘要为依据，标 `DIALOGUE_SUMMARY`，后续可补准确的会话 URL/截图。
- 没有真实 A/B、数据追踪或正式品牌文案手册，就不能给出“更高转化”或“最终批准”结论。
- 金融真实性最低要求：正确品牌/监管名称及实体、真实产品状态与基本性质；产品费用、优惠、杠杆与收益主张不能虚构或从旧版照搬。
