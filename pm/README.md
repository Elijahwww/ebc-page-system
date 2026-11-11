# PM Knowledge & Skills · v0.1

> 状态：WORKING_DRAFT；最后审查：2026-11-11。适用 EBC 官网与推广/活动页面。此处是**候选 PM 资产**，不是公司正式 SOP。

## 阅读顺序
1. [业务与事实边界](context/ebc-business-background.md)
2. [行业、用户与转化背景](context/forex-cfd-industry-and-users.md)
3. [竞品观察索引](research/competitor-landscape.md)
4. [需求诊断](methods/requirement-diagnosis.md)
5. [页面策略](methods/page-strategy-and-conversion.md)
6. [PM Brief 模板](templates/pm-brief.md)
7. [内部 SOP 待整合](sop/README.md)

Claude Code 可调用根目录下的 [PM Skill](../.claude/skills/pm-page-strategy/SKILL.md)；独立 Agent 也可直接读取以上文件。

## 知识分层
- `SOURCE`：原始页面、源文件、法规/官方资料；不能由 AI 改写冒充原文。
- `FACT_VERIFIED`：有证据并在适用范围内确认的事实；须携带来源、日期与适用司法管辖区。
- `INTERNAL_PENDING`：公司内部事实/SOP 尚待提供或审批。
- `OBSERVATION`：页面或竞品中可观察到的做法。
- `HYPOTHESIS`：推断与可验证假设。
- `RULE_CANDIDATE`：AI 提议的通用原则，**未经审批不得升级**。
- `APPROVED_RULE`：负责人与指定审核环节批准的规范，记录批准人、日期、版本和适用范围。
- `DEPRECATED`：历史规则，保留撤销原因与来源，不再默认调用。

## 决策优先级
**当前项目的已获批准材料/合规要求 > 有效的公司事实库 > 已批准的分类标准 > 候选最佳实践 > 竞品/案例观察 > AI 推断。**
如果材料冲突，输出 `CONFLICT` 并请求确认；不要自行“修正”为统一答案。

## 规则更新
- 新案例先进入 sources/cases（未来由 Claude 资产提取工作流导入），再生成洞察/候选规则。
- 变更须注明：规则 ID、旧版、新版、证据、适用页面/地区、受影响项目、审批状态、回滚路径。
- 涉及事实和监管的变更需重新核验来源；涉及视觉趋势的改变不应篡改历史版本。
- 用独立分支 + Draft PR 审核，禁止自动合并 main。
- 公司内部 SOP 送达后优先保留原文、标注 Owner 和有效期，再提出对现有方法的修订。

## 不在当前范围
不把缺少来源的过往对话、行业传闻或竞品文案当作 EBC 已批准事实；不生成生产可发布文案；不替代法务/合规确认；不包含客户个人信息和凭证。
