# 用户 Figma Make 既有 SKILL：可迁移的视觉机制与不能复制的内容（2026-11-12）

> 来源：用户在本次会话上传 `SKILL(5).md`，文件 metadata 名称为 `ebc-preipo-cfd-apple-product-page`，约 854 行；原适用范围为 EBC Pre-IPO CFD 产品页、Figma Make、中文、Claude Opus 4.7。**该文件为用户提供的历史特定项目规范，原件未自动同步至 GitHub**。
> 状态：USER_SUPPLIED_REFERENCE / EXTRACTED_VISUAL_PRINCIPLES / HISTORICAL_PRODUCT_FACTS_NOT_AUTHORIZED。

## 从原文件确认的优秀实践
1. 第 2 节：克制、中性舞台、重要产品视觉、清楚的图文层次；明确“premium 不等于重渐变/赛博朋克/复杂图表”；
2. 第 2.3 节：每一屏一个主要用户认知问题，Hero/为何关注/产品介绍/交易平台/步骤/FAQ 互不代替；
3. 第 3 节：把设计语言写成可执行的版心、12/4 栅格、不同文字角色及行高、8px 节奏、色彩职责、圆角/阴影层级；即使参数会调整，这种**明确职责**可迁移；
4. 第 4 节：为按钮、卡片、产品视觉、信息块、步骤、FAQ 分别明确结构和移动端处理，不只写“做得高级”；
5. 第 6 节：对 Hero、产品卡、设备展示、FAQ、CTA 做滚动节奏/图文权重安排；
6. 第 7/9/10 节：主动规定合适/不合适的媒体、PC+Mobile 同时交付、最终视觉核验。

## 不应全球化的旧内容
- 原文件第 1、5、8 节包含**历史产品事实、所有 Pre-IPO 公司/代码/MT5/交易状态、费率、FAQ 和产品法规文案**，不能当 2026-11 的正式 EBC 内容；尤其原稿中的立即交易、0 手续费、SpaceX/OpenAI/Anthropic 并列产品，与当前最新产品状态和用词审查可能冲突。
- 曾出现“无需实际持有股票”等措辞，当前用户的最新具体产品页面可能不接受该种突出表达；设计 Skill 不应硬编码。
- `1440px` Frame、`5600px` 最小页高、`900px` Hero、`1180px` 内容宽和 `128px` Section Gap 是**一次项目的候选**而非全站最优配置。
- `#0071E3` Apple-like Blue Primary CTA 和 `#B79A5B` gold 只是该历史视觉提案，不能覆盖 EBC 正式品牌/市场按钮规则；不得称 Apple 官方 Web Token。
- 禁用所有衬线字体、禁止城市/真实人物、所有 section 单一居中、所有产品卡固定数量等，只对当时题材有意义；不能施加给工作台、Careers、集团故事、Campaign 等其他页面。
- 与旧稿相比，2026 的真实交易事实、授权、业务 CTA、产品状态都必须从项目当前事实/中文已确认 Copy Sheet 重取。

## 对新 EBC Design System 的具体迁移
| 原来强约束的优点 | 新全局形式 |
|---|---|
| One idea per section | 每模块一条主要用户任务/认知职责，允许需要时保留完整条件信息 |
| 精确字体/版心/间距 | 全局**候选** Design Tokens + 项目级 Design Override，不能跨类型机械固定 |
| 页面视觉主角清晰 | 在 Art Direction Brief 选择一个主视觉/视觉命题，配套内容降噪 |
| 反面清单 | 写针对**项目**的 negative references，不能永久封杀某种颜色/材质 |
| PC/Mobile 全页 | 真实代码/渲染截图分别验收，不能用纯代码猜测视觉 |
| 最终质量检查 | 将 aesthetic specificity/visual critique 与工程 QA 独立执行 |

**结论**：保留这份 SKILL 的**高质量约束写法和信息节奏**，不保留它对单个产品、特定图片、固定屏数或 UI 色值的全局绑定。
