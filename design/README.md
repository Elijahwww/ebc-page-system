# EBC Web Design System · v0.1

> 状态：DESIGN_BASELINE_CANDIDATE（待产品/设计负责人审核）
> 创建：2026-11-11
> 目标：为 EBC 官网、产品页、广告落地页和活动页提供可由 AI 设计与 Claude Code 直接执行、可迭代的网页设计基线。
> 范围：Web，而非 iOS/macOS App 原样复刻。

## 先读什么
1. [基础规范与详细参数](foundations/web-design-system.md)：布局、字体、色彩、留白、组件状态、运动、响应式、图像、可访问性。
2. [CSS Design Tokens](foundations/tokens.css)：可复制的参考 token；为推荐初始值，不等于公司批准的品牌规范。
3. [页面类型与场景变体](patterns/page-types.md)：官网、产品页、SEM/社媒 LP、活动页采用不同的信息结构。
4. [导航与品牌标识](patterns/header-brand-and-partnership.md)：EBC 左侧品牌区、巴萨官方合作标识、Desktop/Mobile 导航及素材授权边界。
5. [设计走查](qa/design-review-checklist.md)：设计阶段与实现验收。
6. [证据与决策边界](research/provenance-and-decisions.md)：Apple 官方原则、WCAG Web 标准、EBC 历史案例观察及未核实项。

## 设计立场
- **Apple-inspired, EBC-owned**：学习清晰、层级、排版、留白和克制的动效；不复制 Apple 商标、图片、网站代码、受限制字体或独特网页装饰。
- 当前不依赖旧 EBC 共享组件；可以由 Agent 新建可复用代码，但必须符合本仓库 PM 方案与业务事实。
- 历史源码/设计图是案例，不是生产批准的统一规范：见当前 `main` 的 `sources/` 与 `asset-review/`；历史素材不等于批准的组件或设计规范。
- 不使用“当前历史 LP 一律 H1 两行/3D Hero/996px 断点/每屏一个数字”等强制模板。
- 用户提供的正式文案、事实数据、监管和风险要求优先于视觉偏好。
- 设计产物可以是 Figma 或 HTML/CSS，Figma 并非强制环节。
- 重大例外通过项目级 design-override（附原因）表达；后续迭代走 PR，不悄悄改全局规则。

## Agent 使用次序
PM Brief（包含页面类型/受众/市场/CTA） → 获批文案与事实限制 → 本规范及适用页面模式 → 页面区块规格/响应式 → 可运行设计 Demo → 视觉/可访问性/跨语言 QA → 人工审查。

## 文档状态
- APPLE_OFFICIAL_PRINCIPLE：Apple 官方 HIG 的原则，**并非针对 EBC 网页的像素尺寸**。
- W3C_WEB_REQUIREMENT：WCAG 对网站可访问性要求。
- EBC_HISTORICAL_OBSERVATION：历史 EBC 页面代码/截图观察。
- EBC_PROPOSED_TOKEN：本规范提出的初始数值，待评审验证。
