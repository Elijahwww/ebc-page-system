# Design 证据来源、结论分级和未决项 · 2026-11-11

> 目的：避免将“Apple 网站看起来如此”误写成 Apple 正式发布的网页参数，也避免历史 EBC LP 模板压制后续创意。
> 状态：SOURCE_AUDIT / DESIGN_PROPOSAL

## 一、Apple 与 W3C 的外部来源
### APPLE_OFFICIAL_PRINCIPLE（Apple 官方公开原则，主要面向 Apple 平台 UX）
- Apple HIG / Design principles：https://developer.apple.com/design/human-interface-guidelines/design-principles
  - 强调 simplicity / hierarchy / craft / inclusivity；不是一个公开 CSS token 规格。
- Apple HIG / Layout：https://developer.apple.com/design/human-interface-guidelines/layout
  - 强调适应不同尺寸、方向与输入方式；网页宽度 1200px / 卡片间距 24px 并非由此规定。
- Apple HIG / Typography：https://developer.apple.com/design/human-interface-guidelines/typography
  - 字体可读性、视觉层级原则；不允许据此认定 EBC 网页可直接打包 Apple 的受限字体文件。
- Apple HIG / Color：https://developer.apple.com/design/human-interface-guidelines/color
  - 颜色应传达状态和品牌意义，不仅靠红绿表达涨跌；考虑不同文化解释。
- Apple HIG / Buttons：https://developer.apple.com/design/human-interface-guidelines/buttons
  - 明确动作、交互状态、足够点击空间；其中 44×44pt 是 Apple 平台控件一般建议，不是 W3C 网站硬门槛，更不是 44×44 CSS px 的直接换算。
- Apple 官网产品/品牌页（页面示例，随时更新）：https://www.apple.com/sg/mac/
  - 可观察页面结构、版式、层次、留白、产品主视觉，而非复刻设计与素材。

### W3C_WEB_REQUIREMENT（网页可访问性标准）
- WCAG 2.2：https://www.w3.org/TR/WCAG22/
- Contrast minimum：https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
  - 一般文本 4.5:1；大字 3:1（AA）；非文字 UI 对比另以 1.4.11 为准。
- Target size minimum：https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum
  - WCAG 2.2 AA 指针目标一般至少 24×24 CSS px 或满足间距/例外；本项目推荐 44×44 CSS px 是更方便触控的自选基线，不应称官方 AA 最低值。

## 二、EBC_HISTORICAL_OBSERVATION（本次已入库历史资料，PR #3）
- sources/INDEX.md：7 个 LP 版本（ETF A/B/C、OIL A/B、Copy Trading A/B）+ 官网美股 D 设计 + 归属待确定 usstocks X 代码。
- asset-review/02-CROSS-CASE-ANALYSIS.md 第 5 章：历史代码使用 Inter/Noto Sans；1920/750 的 vw-rem 缩放；996px 断点；卡片 24/32rem；两套按钮红色。
- asset-review/04-COMPONENT-ANALYSIS.md 第 4 章：CSS 回退出现 #FF4B4E、#5D2333、#A52933、#CC333F、#7B1E26。**不是已获审批的公司全局品牌手册**。
- asset-review/03-RULE-CANDIDATES.md：RC-004/Hero 两行、RC-008/每屏数字、RC-014/固定 rem/996，都是历史观察或候选，**本设计系统不强制采用**。
- 旧共享组件的实现源码并未完整进入仓库（registryFormSSR、jianguan、SignalList、@img、@style 等），本 v0.1 不依赖它们。
- US-D 只有设计图没有对应的产品页真实源码；X-usstocks-code 与官网设计不匹配，不应直接推断完整 UI/工程。

## 三、EBC_PROPOSED_TOKEN（项目自定初始参数）
- 1200px 版心、3 类响应式区间、12/8/4 栅格、4px 间距节奏、clamp 字号、默认浅色背景与品牌红按钮、组件高度与动效时长：全部属于待验证的 EBC 项目建议。
- 白字对 #A52933 计算对比约 7.08:1；白字对 #FF4B4E 约 3.30:1。后者不能用作普通白字按钮的可访问配色。
- 简约不是减少必需金融产品说明；不能使用模糊/不完整的事实换取视觉“高级感”。

## 四、需要后续评估而非阻塞 v0.1 的问题
1. EBC 正式品牌颜色、字体许可、Logo/留白及暗色模块规范（Brand Owner 审批）。
2. 具体页面类型的容器宽度和 Typography 是否在真实设备上协调，中文/英文/小语种对齐情况。
3. 注册弹窗/CTA、导航、卡片等是否复用现有代码，或建立新的组件库（前端 Owner）。
4. 投放渠道、司法管辖区、法律实体、风险披露与数据来源（PM/Compliance/Trading）。
5. 用户研究与真实 A/B 数据（测试后决定覆盖规则，不能提前自称最优）。
6. Figma 交付还是代码直接出 Demo：按项目需求选择，不设硬性前置条件。

## 五、版本管理建议
- 每次调整：状态、来源证据、受影响场景、风险、变更前后示例、是否通过设计/PM Review。
- 规则可标记 APPROVED / EXPERIMENT / OVERRIDDEN / DEPRECATED；默认值不以“Apple 官方精确尺寸”名义发布。
