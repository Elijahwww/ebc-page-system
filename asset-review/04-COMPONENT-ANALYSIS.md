# 04 组件分析（Component Analysis）

日期：2026-11-11。分为三类：① 已存在的共享组件（代码 import，但源码不在本地）；② 页面内重复实现、应抽象的模式；③ 页面特有创意（不建议组件化）。
数值均来自代码；无法从代码确认的标为 NV。

---

## 1. 已存在的共享组件（源码缺失，仅能从调用方式推断）

| 组件 | 使用页面 | 调用方式（FACT） | 推断职责（INF） | 待补资料 |
|---|---|---|---|---|
| `registryFormSSR` | 7 推广页 + usstocks | `<client-only><registryForm @sumbited="…"/></client-only>`；usstocks 传 `lanListMeta` | 注册/留资表单，提交后回调 | 字段、校验、提交接口、埋点 |
| `topMenuNoA` | 7 推广页 | `:linkList` `:showRegister="false"` `:registerAutoToTop="false"` `:showRightArrow` `@register-click` | 推广页锚点导航 + 注册按钮 | 吸顶行为、MB 菜单 |
| `jianguan` | 6 推广页 + usstocks（ETF-B 用页面内 honor-list 替代） | `<jianguan theme="white"/>` 或默认主题 | 四地监管信息条 | 内容源、是否按语言过滤 |
| `riskWarning` | 6 推广页 + usstocks（ETF-B 未用） | 页面顶部 | 顶部风险提示 | 文案 |
| `footerEs` | 6 推广页 + usstocks（ETF-B 未用） | 页面底部 | 西语市场页脚（可能按 locale 显示） | 显示条件 |
| `ClosingSection` | 002-A/B、003-A/B | props `show-bottom-tips` `bar-text` `bar-btn`，事件 `@register`，默认插槽放 `JoinSteps` | 收尾区：数据条（100%/24/7）+ 合作伙伴轮播 + 版权/风险 + 吸底条 | 结构、样式 |
| `JoinSteps` | 002-A/B | props `steps` `title` | 三步开户 | — |
| `SignalList` | 003-A/B | `:show-note1` `@follow` | 跟单信号卡列表 + 指标说明 | **数据来源（接口/静态）** |
| `countTo` | 003-B | `:num` `:duration` | 数字滚动 | SSR 初始值 |

`INF` 原油/跟单页（较新）已将收尾区抽象为 `ClosingSection`；ETF 页（较早）仍在页面内实现 section5/6 + 吸底条 —— 组件化正在演进中。

## 2. 页面内重复实现、建议抽象的模式

| 候选组件 | 出现次数 | 关键规格（FACT） | 变体 | 建议 |
|---|---|---|---|---|
| **注册弹窗 RegisterModal** | 7/7 | 遮罩 `rgba(0,0,0,.6)`；面板 PC 500rem / MB 686rem、圆角 24/32rem；关闭按钮右上；打开时锁滚动并用 `padding-right` 补偿滚动条、拦截 touchmove/wheel/键盘；允许 `.register-modal-panel` 与 `.el-popper` 内滚动 | 无 | 优先抽象（约 70 行逐页复制） |
| **Hero** | 7/7 | H1 PC 56–62rem/600–700；MB 54–64rem；单 CTA；背景图按断点切换并 `preload` | ETF（亮红按钮 `#FF4B4E`、56rem 高）/ 原油&跟单（酒红 `#a52933`、50rem、圆角 59rem）；PC/MB CTA 文案可不同（002） | 抽象布局与 props（title/subtitle/cta/ctaMobile/bg/bgMobile） |
| **吸底/悬浮 CTA 条** | 7/7 | ETF `etf-footer` 120rem 高、背景图、首屏按钮离开视口出现；原油 `pc-dock` 滚过 Section2 出现 | 文案 + 图标 | 并入 ClosingSection 或独立 StickyCTA |
| **特性卡网格 FeatureGrid（2×2）** | 001-A/B/C、002-A/B | 标题 + 描述 + 右侧图标；圆角 24rem；深色 `#3e3e45` / 浅色 `#F7F7F7` | 深/浅；带大数字（002-B 87.6% 等）；带 tooltip | 抽象 |
| **数据指标卡 MetricCard** | 002-B、003-A/B、ClosingSection | 大数字 + 单位 + 说明 + 可选 tooltip | 单位样式（`%` `pips` `ms` `+`） | 抽象 |
| **对比卡 CompareCard** | 001-A/C（ETF vs 固收）、003-A（自己交易 vs 跟单）、usstocks（美股券商 vs EBC） | 左浅右深 / 左 × 右 ✓ | 数值对比 / 清单对比 | 抽象为两种变体 |
| **品牌合作轮播 PartnerCarousel** | 7/7 | ETF：PC 三态位移（卡宽 632rem、间距 48rem、左留白 360rem），MB Swiper + 指示条；ClosingSection 内为无限轮播 | 卡片数 3–5、zh 专属卡（CCTV） | 统一数据源与卡片集合（见 05 CONFLICT-07） |
| **三步开户 JoinSteps** | 5/7 + 官网 | 图标 + 序号 + 文案 | 横排 / 竖排；"注册开户/身份验证/开始交易" vs "注册账户/提交个人信息/入金交易"（官网） | 已有组件，统一文案 |
| **倒计时 Countdown** | 001-A/B/C | 目标时间常量写死在页面；到期后整块隐藏 | 深/浅底 | 抽象并接入活动配置（含到期下线文案） |
| **迷你行情图 MiniQuoteChart** | 002-A/B、test.html | lightweight-charts 面积图，线色 `#319f75`，隐藏坐标，末点圆点，30s 刷新，进入视口才加载 | 有/无涨跌色 | 抽象前先解决 token 与 CDN 依赖 |
| **滚动淡入 scroll-fade-up** | 001 | IntersectionObserver 添加 `.in-view` | — | 工具函数 |
| **rem 布局容器** | 7/7 | `.rem-wrapper` 左右 360rem；`-all-padding` 160rem 360rem；MB 30rem | — | 进入全局样式 |

## 3. 页面特有创意（不建议组件化）

- ETF：VGT/XLF 金属盒 Hero、0% 金属字、ETF vs 固收收益卡视觉（001）
- 原油：金属油桶系列 3D 图标（002）
- 跟单：手机 App 截图 + 玻璃拟态浮层（003）；风控亏损上限打字演示（003-B，交互可复用为"功能演示"模式，但内容特有）
- 官网：AI 产业链分类卡、热门股票摄影墙（004-D）

`INF` 创意资产集中在 Hero 主视觉与图标，属于"每个主题重做"的部分；骨架与功能组件属于"可沉淀"的部分。这与 Elijah 已陈述的"2–3 个模块固定、Hero 和第二屏按主题变化"一致。

## 4. 设计 token（候选，来自 CSS 变量回退值）

| Token | 值 | 出处 |
|---|---|---|
| `--Brand-Primary` | `#FF4B4E` | ETF |
| `--Brand-Primary-Burgundy` | `#5D2333` | ETF / 原油 / 跟单 |
| `--Brand-Secondary-Red` | `#a52933` | 全部 |
| `--Functional-Active-Hover` | `#cc333f` | 全部 |
| `--Functional-Active-Pressed` | `#7b1e26` | 全部 |
| `--Brand-Accent-Coral` | `#FF4B4E`（与 Brand-Primary 回退值相同） | ETF-C |
| `--Text-Primary` / `--Text-Primary_White` | `#000` / `#fff` 或 `#F7F7F7` | ETF |
| 行情上涨色 | `#319f75` | 原油 |
| 字体 | Inter, Noto Sans, Noto Sans SC（日文 Noto Sans JP） | 全部 |

`NV` 全局样式表（`@style/page/*.scss`、主题变量定义）未提供，以上为页面内回退值，不等于正式设计规范。
