# EBC Web Design System · v0.2（Art Direction + 视觉独立审查）

> 状态：DESIGN_BASELINE_CANDIDATE（待产品/设计负责人审核）
> 创建：2026-11-11
> 目标：为 EBC 官网、产品页、广告落地页和活动页提供可由 AI 设计与 Claude Code 直接执行、可迭代的网页设计基线。
> 范围：Web，而非 iOS/macOS App 原样复刻。

## 先读什么（v0.7.0 强制顺序）
0. **[Apple-Grade 前端视觉与组件基础规范](foundations/apple-ui-component-spec.md)** + **[tokens-apple-ui.css](foundations/tokens-apple-ui.css)**（**所有项目强制先遵守**：字体字重阶梯、纯净中性表面禁止大面积铺渐变色、极细分割线、实心胶囊按钮、`1.5px` 线性 Icon、紧凑 PC 模块高度、无逗号两行标题、Hero 右侧纯视觉元素严禁放文案卡片）。
1. **[视觉方向与真实渲染迭代](methods/visual-direction-and-iteration.md)**：先审美方向，后编码；真实截图批评和实际 V1→V2 重构。
2. **[独立视觉质量评分表](qa/visual-quality-scorecard.md)**：专门检查审美/信息层级/密度，不与功能 QA 混用。
3. [基础规范与详细参数](foundations/web-design-system.md)：布局、字体、色彩、留白、组件状态、运动、响应式、图像、可访问性。
4. [CSS Design Tokens](foundations/tokens.css)：可复制的参考 token；为推荐初始值，不等于公司批准的品牌规范。
5. [页面类型与场景变体](patterns/page-types.md)：官网、产品页、SEM/社媒 LP、活动页采用不同的信息结构。
6. [导航与品牌标识](patterns/header-brand-and-partnership.md)：EBC 左侧品牌区、巴萨官方合作标识、Desktop/Mobile 导航及素材授权边界。
7. [设计走查](qa/design-review-checklist.md)：设计阶段与实现验收。
8. [证据与决策边界](research/provenance-and-decisions.md)：Apple 官方原则、WCAG Web 标准、EBC 历史案例观察及未核实项。

## 语言与地区的设计边界
- 默认以**已审查的中文**信息架构和文案做 PC/Mobile 设计及 Demo；不用等待全部译稿，也不提前强制为每个语言单独制作不同的页面。
- 通用栅格、组件、交互和主要内容流程优先复用；设计需具有合理文字长度弹性，但不因为存在翻译需求就强制每个模块缩短中文。
- 如果项目明确面向日本等本地市场，应先读 `localization/chinese-first-and-market-overrides.md` 及真实有效的当地规范/参考研究，只对视觉、字体、内容顺序或交互中确有证据的差异创建 Design Override。中文仅作为内部审稿稿本，不能把中文市场习惯当本地策略。

9. [用户 Figma Make SKILL 可迁移机制](research/user-figma-make-skill-analysis-2026-11-12.md)：保留节奏与分层，不继承旧 Pre-IPO 事实和固定参数。
10. [GitHub / X 开源参考研究](research/ai-coding-visual-skills-2026-11-12.md)：结合真实来源和适用边界，不直接安装全部技能。

## 设计立场与视觉双轨分流（v0.5 · 2026-11-20）
- **视觉双轨分流（严禁规则打架）**：
  - **轨道 A · 官网 / 品牌页 / 内部平台（`Mode 2 · EXPLORATORY_REDESIGN`）**：默认以 `design/foundations/tokens.css` 的 **Apple-inspired 浅白/浅灰舞台**为起点，执行完整 Art Direction 双方向选型与反模板自审。
  - **轨道 B · 产品投放 LP 与常规活动页（`Mode 1 · STANDARD_PRODUCTION`）**：默认继承 **EBC 现行投放视觉皮肤**（深酒红/黑渐变 Hero + 顶部透明导航 + Hero 底部融合监管条 + 深浅交替 2×2 极简短卡 + 合作横卡 + 简单三步 + 白色吸底 CTA 条），先实际读取 `sources/landing-pages/etf/B/design/pc.png` 与 `oil/B/design/pc.png` 对齐节奏与字数密度；视觉创新聚焦在主视觉、数据图形与局部细节，**未经用户明确要求，禁止将常规 LP 改画成浅白文章流或强制跑两套风格大改**。
- **Art Direction first（适用于轨道 A 与明确要求改版的项目）**：避免只凭“Apple / 科技感 / 高级感”生成统一模板；区分项目真实审美目标和历史页面风格，以真实 UI 和用户评审作反馈。
- **视觉 QA ≠ 工程 QA**：真实代码通过交互和响应式断言，不证明用户认可的审美；需要截图→评审→修订→再次截图。
- **Apple-inspired, EBC-owned**：学习清晰、层级、排版、留白和克制的动效；不复制 Apple 商标、图片、网站代码、受限制字体或独特网页装饰。
- 当前不依赖旧 EBC 共享组件；可以由 Agent 新建可复用代码，但必须符合本仓库 PM 方案与业务事实。
- 历史源码/设计图是案例，不是生产批准的统一规范：见当前 `main` 的 `sources/` 与 `asset-review/`；历史素材不等于批准的组件或设计规范。
- 不使用“当前历史 LP 一律 H1 两行/3D Hero/996px 断点/每屏一个数字”等强制模板。
- 用户提供的正式文案、事实数据、监管和风险要求优先于视觉偏好。
- 设计产物可以是 Figma 或 HTML/CSS，Figma 并非强制环节。
- 重大例外通过项目级 design-override（附原因）表达；后续迭代走 PR，不悄悄改全局规则。

## Agent 使用次序
PM Brief（包含页面类型/受众/市场/CTA/审美目标） → 中文文案/事实限制 → **视觉方向候选及反模板审查** → Token/组件/交互方案 → 可运行 Demo → **真实截图 Visual Critique** → 实质重构并复测 → 独立工程 QA → 人工视觉审查。

## 文档状态
- APPLE_OFFICIAL_PRINCIPLE：Apple 官方 HIG 的原则，**并非针对 EBC 网页的像素尺寸**。
- W3C_WEB_REQUIREMENT：WCAG 对网站可访问性要求。
- EBC_HISTORICAL_OBSERVATION：历史 EBC 页面代码/截图观察。
- EBC_PROPOSED_TOKEN：本规范提出的初始数值，待评审验证。
