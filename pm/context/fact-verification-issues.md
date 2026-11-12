# 事实核验与冲突登记 · v0.1

> 状态：ACTION_REQUIRED | 2026-11-11
> 此文件不是合规批准或事实主表；记录问题，避免 PM Agent 重复错误。

## ISSUE-001 · 监管披露编号与实体范围
- **当前官方公开来源**：[EBC 中文 About Us](https://www.ebc.com/zh-cn/about-us/)、[EBC Security](https://www.ebc.com/security)、[EBC EN About Us](https://www.ebc.com/about-us/)。
- 当前官网介绍的监管实体与编号包含：英国 FCA（UK Ltd）927552；Cayman CIMA（Cayman Ltd）2038223；Australia ASIC（Australia Pty Ltd）500991；South Africa FSCA（SA (Pty) Ltd）51541。
- 先前 EBC 页面项目讨论的某些监管字段与上述官网展示存在差异。它可能涉及不同类别的公司登记/金融服务牌照、历史版本或页面错误，**原因未核实**。
- **行动**：由负责业务/合规同事提供按法律实体、牌照类型、适用市场划分的获批表；记录核验日期与官网最终使用方式。
- **当前处理**：禁止 PM Agent 自行认定哪组一定正确；禁止将这些编号视为适用于所有市场/全部集团实体的泛化卖点。使用已批准的页面事实源，遇冲突标记 `FACT_CONFLICT`。
- 外部网站提供了公开表述，不等于已完成监管机构登记簿的独立查证。

## ISSUE-002 · 公开页面上的实时商业数字
官网目前存在产品数、执行速度、优化率、获奖数量、交易者规模、杠杆等展示。受时间、统计口径、实体/账户和项目版本影响，不应成为永不过期的 AI 固定事实。
- **行动**：建立事实字段级别的 `source_url / source_owner / market / entity / claim_exact / valid_from / last_verified / expires_at / approval`。
- **当前处理**：在 PM 框架中仅列为“可选事实类型”，正式营销文案须按最新获批素材调用。

## ISSUE-003 · 内部流程缺失
- 需要：需求处理 SOP、审批负责人、Jira 工作流与交付条件、品牌/法律内容发布权限、市场差异矩阵。
- **当前处理**：PM 方法仅为候选工作方法；收到内部 SOP 后先逐字保留，再映射/修订，禁止反向宣称内部规定。
