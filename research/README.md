# EBC Reference Discovery & Benchmark Intelligence · v0.1

> 状态：CROSS_NODE_CAPABILITY_CANDIDATE / NOT_YET_RUNTIME_VALIDATED。2026-11-12 基于用户明确提出的长期能力需求。
> 目标：让 PM、Research、User、Copy、Strategy、Design、QA 在 EBC 已有案例不足、结论冲突或迭代停滞时，主动检索外部优秀网页，读取正文和**真正的页面截图**，分析每条文案所在位置、模块职责、视觉节奏、路径，并用反证修改内部初稿。
> **不是**一份静态竞品目录，也不是“先抄 Apple，再解释为什么好”。

## 页面结构证据库（2026-11-13）

- [Page Structure System](page-structures/README.md)：交易激励、产品推广、官网单例的**历史模块与 Variant 候选**，用于优先复用，不是硬性模块数量。
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
T0 — EBC 当前已获用户批准的同任务资料/最近页面/产品事实（第一手校准）。若无或不足，启动外部发现。
T1 — **直接同行业且同页面类型**：CFD/Forex/在线交易相关平台的 Careers、About、交易产品、LP 等与当前任务匹配的页面。
T2 — **相邻较大行业、同用户任务**：银行、资产管理、金融科技/金融服务等，补充行业层面的信任、人才、产品叙事方式。
T3 — **头部跨行业标杆**：Apple、Microsoft、Google、Stripe 等，研究可迁移的信息层级、内容节奏、叙事、模块职责和交互。
T4 — 视需要扩展到其他在**同一页面任务**上更优秀的跨行业案例（如 SaaS 定价/报名页/知识库），清楚写明为何有用。

优先搜 T1 再 T2 再 T3，**允许有依据地跳级或回退**：某行业站点缺适用信息时不要为了凑数硬分析；头部科技公司擅长招聘叙事不代表 CFD 产品合规、费用或用户决策可以直接借用。

## 外部证据状态
- `EXTERNAL_HTML_VERIFIED`：访问了官方页面文本/可访问 DOM。
- `SCREENSHOT_CAPTURED`：浏览器实际截图存在，记录视口和文件/位置。
- `TEXT_ONLY_VISUAL_PENDING`：只有文字抓取，**不可写出“截图看到首屏红色大图”这种视觉结论**。
- `UNAVAILABLE`：被拒绝、登录墙、动态加载失败、站点禁止等，不伪造截图。
- `ANALYST_INFERENCE`：模块职责和用户心理是分析推断，不冒充真实用户反馈。
- `BENCHMARK_CANDIDATE`：可以试的跨案例方法，不表示已验证转化。
- `EBC_APPROVED_PATTERN`：经过用户指定范围批准并验证的 EBC 方法。

## 只升级有效发现
检索不是每次都必须访问 20 个站点。目标是找到能改变当前需求/文案/模块/UI 决策的证据。研究最后必须回到 PM 或设计节点，给出 V1→V2 的具体变化；没有变化、没有证据价值时不值得继续抓取。

## 现实限制
网页抓取文本不等于截图。实际可用 Browser / Playwright / 具备截图能力的 Agent 工具时应拍**桌面整页、移动整页、关键区块**；没有工具时记录 `TEXT_ONLY_VISUAL_PENDING`，只给文本层结论，不能声称完成视觉分析。
对第三方版权内容保留内部研究所需的有限摘录、截图链接/受控内部工作副本；不要将整站素材/代码作为 EBC 可发布素材。
自动更新是“新任务触发的按需检索与复核”，不是未经用户设置的后台定时抓取。
