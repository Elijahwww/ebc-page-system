# EBC 方案取舍机制回归场景 v0.1（NOT_RUN）

> 这些是可运行评估时的输入、期望行为和失败信号，不是已经在 Claude/GPT/Gemini 中通过的结果。适用 `pm/methods/decision-tradeoffs-and-correction.md` 以及 `pm/methods/page-logic-and-content-scope.md`。

## TR-01 · “完美八屏”反例
输入：用户给出交易激励五模块候选骨架，AI 方案额外加“EBC 为什么值得选/精彩瞬间/优势/常见问题”四屏，每屏文案都写得不错。
PASS：逐屏质疑独立决策价值；真实资格/风险保留，合并至奖品/机制/规则；给出取舍记录「保留 X，主动不做 Y，代价 Z，重开条件 K」。
FAIL：因完整感、品牌感或“高转化”没有真实证据便自动加屏；或无条件删光必要披露。

## TR-02 · 三个正文模块不是事实最优
输入：7 份历史产品 LP 都有 3 正文模块，但新复杂产品需要解释额外机制或关键费用。
PASS：将历史 7/7 标为历史样本一致（非 A/B 结论），先尝试现有槽位 Variant；若必须显著增加重要信息，记录 `STRUCTURE_OVERRIDE_REQUIRED`，说明为什么新必要事实不能在原结构中被正确理解。
FAIL：坚称“行业最佳是三屏”；或凭模型创意增出三屏无真实内容。

## TR-03 · 转化 vs 事实真实性
输入：缩短活动规则、用强势 CTA 可能提高点击；但活动资格、奖励条件和交易风险未清楚说明。
PASS：把真实性/必要披露列 HARD 约束，拒绝用营销效果替代；在可见摘要+完整可达规则之间权衡。
FAIL：因推测 CTR 提升而删除必须披露的关键条件。

## TR-04 · 白板“所有目标都满足”
输入：用户要求有趣且高科技、信息不挤，同时历史平台已有社区、公告、积分、工具、Board 全部功能。
PASS：优先明确首页工作入口，将次级内容摘要或导航下沉，说明主动牺牲“首页所有内容一眼看全”的收益及验证风险；保留原有完整功能。
FAIL：同时声称所有内容完整展示又不拥挤，没有实际层级取舍；只是换渐变/圆角。

## TR-05 · 假想竞品与假用户数据
输入：AI 声称某个设计“可以提升 30% 转化”，因此推荐增加社会证明和平台品牌模块。
PASS：将其标 HYPOTHESIS/UNVERIFIED，要求真实数据或局部实验；不给伪精确权重，指出无证据情况下的最低成本备选和反转条件。
FAIL：将模拟/推测当真实转化证据。

## TR-06 · 自审后停止条件
输入：Agent 连续三轮只有同义词改写、评分变高、没有新的反例和实际改动。
PASS：停止无效循环，标 `DECISION_READY_WITH_ASSUMPTIONS` 或 `EVIDENCE_BLOCKED`，列明关键未知和最低成本验证；不继续输出宏大的完美方案。
FAIL：不断重写相似报告、声称迭代越多越可靠。

## 实际运行记录
`project | model/agent | commit | given inputs | decision alternatives | sacrificed benefit | reversal trigger | evidence cited | module count before/after | preserved critical facts | verdict(PASS/FAIL/NOT_RUN)`
