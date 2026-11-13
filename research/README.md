# EBC Reference Discovery & Benchmark Intelligence · v0.1

> 状态：CROSS_NODE_CAPABILITY_CANDIDATE / NOT_YET_RUNTIME_VALIDATED。2026-11-12 基于用户明确提出的长期能力需求。
> 目标：让 PM、Research、User、Copy、Strategy、Design、QA 在 EBC 已有案例不足、结论冲突或迭代停滞时，主动检索外部优秀网页，读取正文和**真正的页面截图**，分析每条文案所在位置、模块职责、视觉节奏、路径，并用反证修改内部初稿。
> **不是**一份静态竞品目录，也不是“先抄 Apple，再解释为什么好”。

## 页面结构证据库（2026-11-13）

- [Page Structure System](page-structures/README.md)：交易激励、产品推广、官网单例的**历史模块与 Variant 候选**，用于优先复用，不是硬性模块数量。
- [结构匹配与 Hero 转化契约](page-structures/matching-and-hero-contract.md)：先识别页面用途/活动机制/首屏表单或 CTA，再选择候选结构；匹配不到按 EBC 官网 → CFD → 数字币 → 金融行业调研。
- [GPT 跨案例复审](page-structures/review-2026-11-13.md)：Vue/中文 locale 核验、7/7 三正文位历史模板、三种机制及未核实线上/业务事实。
- [PM 页面内容取舍](../pm/methods/page-logic-and-content-scope.md) 与 [决策纠错](../pm/methods/decision-tradeoffs-and-correction.md)：研究结果不等于页面内容；新增模块需要用户需求；好方案必须说明放弃了什么及失败时如何回退。
- **状态提醒**：目前没有用户批准的 `STRUCTURE_LOCKED`；Claude 的 Required 与 CROSS_CASE_CONFIRMED 是研究标签，不自动成为公司强制标准。

## 使用入口
- [检索触发与行业逐级扩展协议](methods/reference-escalation-loop.md)：触发、层级、排序、停止、对抗评审、回流节点。
- [网页 + 截图双通道分析](methods/page-capture-and-analysis.md)：PC/MB 截图、HTML/DOM、文案落位、视觉和交互、失败标记。
- [证据卡模板](templates/reference-evidence-card.md)：原始网页/截图 → 分析 → 哪种 EBC 情境下可借鉴/不该借鉴。
- [招聘页三层级示范](seed/careers-benchmark-2026-11-12.md)：IG/XM → Goldman Sachs → Apple，**当前仅完成公开文本采集，不宣称有视觉截图**。
- [回归测试](tests/reference-escalation-acceptance.md)：触发、扩大范围、截图证据、跨节点回流。
- [Claude Code Skill](../.claude/skills/ebc-reference-discovery/SKILL.md)：各节点共用的调用入口。

## 核心优先级（参考相关性，不是公司规模排名）
T0 — **EBC 自有**：已确认的 Page Structure、历史代码/审稿记录，以及 EBC 官方主站和验证归属的 Campaign/LP 实际页面；优先同类型同市场。
T1 — **CFD/Forex/在线交易**：同类型活动、交易大赛、产品 LP 等。
T2 — **数字货币/加密资产交易平台**：只对标同任务活动/报名/机制/榜单/CTA 结构；币种、获利承诺、监管和活动规则不能直接迁移。
T3 — **更广金融行业**：证券、银行、支付、资产管理、投行、Fintech 等同用户任务页面。
T4 — **科技及其他跨行业**：仅当结构/交互/视觉叙事仍有缺口时参考 Apple、Google、Stripe 等。

先查 EBC 官方和内部证据，再按 CFD → 数字货币 → 金融行业 → 必要时科技扩展，**有足够答案即可停，不机械每层都搜**：某行业站点缺适用信息时不要为了凑数硬分析；头部科技公司擅长招聘叙事不代表 CFD 产品合规、费用或用户决策可以直接借用。

## 外部证据状态
- `EXTERNAL_HTML_VERIFIED`：访问了官方页面文本/可访问 DOM。
- `SCREENSHOT_CAPTURED`：浏览器实际截图存在，记录视口和文件/位置。
- `TEXT_ONLY_VISUAL_PENDING`：只有文字抓取，**不可写出“截图看到首屏红色大图”这种视觉结论**。
- `UNAVAILABLE`：被拒绝、登录墙、动态加载失败、站点禁止等，不伪造截图。
- `ANALYST_INFERENCE`：模块职责和用户心理是分析推断，不冒充真实用户反馈。
- `BENCHMARK_CANDIDATE`：可以试的跨案例方法，不表示已验证转化。
- `EBC_APPROVED_PATTERN`：经过用户指定范围批准并验证的 EBC 方法。

## 只升级有效发现
检索不是每次都必须访问 20 个站点。目标是找到能改变当前需求/文案/模块/UI 决策的证据。对结构研究必须输出按顺序的模块地图，特别区分 Hero 右侧内嵌注册表单与仅使用 CTA 的页面，并记录实际注册/报名去向。研究最后必须回到 PM 或设计节点，给出 V1→V2 的具体变化；没有变化、没有证据价值时不值得继续抓取。

## 现实限制
网页抓取文本不等于截图。实际可用 Browser / Playwright / 具备截图能力的 Agent 工具时应拍**桌面整页、移动整页、关键区块**；没有工具时记录 `TEXT_ONLY_VISUAL_PENDING`，只给文本层结论，不能声称完成视觉分析。
对第三方版权内容保留内部研究所需的有限摘录、截图链接/受控内部工作副本；不要将整站素材/代码作为 EBC 可发布素材。
自动更新是“新任务触发的按需检索与复核”，不是未经用户设置的后台定时抓取。
