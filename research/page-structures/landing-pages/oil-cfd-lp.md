# Page Structure · 原油 CFD 推广页

| 字段 | 内容 |
|---|---|
| Page Type ID | `LP_PRODUCT` / 产品 `OIL_CFD` |
| 结构状态 | `STRUCTURE_CANDIDATE`（待 GPT 复审 + 用户确认） |
| 证据 | `sources/landing-pages/oil/{A,B}/code/oil-trading-{a,b}/+Page.vue`（本轮重读）；`design/pc.png` A、B 与 `design/mobile.png` B（本轮目检）；逐字文案出自 `asset-review/cases/CASE-002.md`（`REPORT_DERIVED`） |
| 先读 | [product-lp-common.md](product-lp-common.md) |

---

## A. 页面类型定义

- **适用场景**：原油 CFD（WTI、布伦特）的广告获客页。
- **主要目标**：注册开户。
- **版本**：OIL-A 小白投资者（`/oil-trading-a/zh`）；OIL-B 专业投资者（`/oil-trading-b/zh`）。同一产品、同一模板，一致项记为 `CROSS_CASE_CONFIRMED（2/2 版本，单一产品）`。

## B. 标准模块结构

```
G1 riskWarning · G2 Anchor Nav（4 项 + "如何开始"）
M01 Hero
M02 Regulation Strip（代码有；A、B 的 PC 设计图里没有，见 EX-10）
B1 WHY-CARE   原油为什么值得关注      #section2
B2 PRODUCT    两大原油产品 + 行情     #section3
B3 WHY-EBC    为什么选择 EBC         #section4
── ClosingSection ──
M06 运营数据条（100% / 24/7）
M07 全球合作伙伴
M08 三步开户
L1 版权 + 风险提示
G3 吸底条 + PC 停靠条 · G4 注册弹窗
```

A、B 两版的模块组成与顺序完全相同（`SOURCE_OBSERVED` 2/2）。人群差异全部在模块内部。

## C. 模块标准表（原油正文位）

### OIL-WHY · 市场认知四卡（`WHY-CARE`，B1）

| 项 | 内容 |
|---|---|
| 职责 | A：原油与日常生活的关系；B：什么在驱动油价 |
| 状态 | Required（2/2） |
| 必要字段 | H2（PC 与 Mobile 各一套断行）+ 4 张卡（标题 + 一行说明 + 3D 图标） |
| Variant | A：交通运输 / 制造生产 / 能源供应 / 日常消费。B：供应调整 / 库存变化 / 需求前景 / 美元走势 |
| PC / Mobile | PC 2×2；Mobile 2 列（B 版 Mobile 设计图） |
| 可变 | H2、4 张卡的主题与图标、底色（A 深色、B 浅色） |
| 证据 | 两版 `#section2` `section2Cards`；PC 设计图第 2 屏 |

### OIL-PRODUCT · 产品卡 + 迷你行情（`PRODUCT`，B2）

| 项 | 内容 |
|---|---|
| 职责 | 展示两个可交易产品及入场条件 |
| 状态 | Required（2/2） |
| 必要字段 | H2 + 2 张产品卡（WTI、布伦特）：产品名 + 一句说明 + 2 个指标 + 实时价格 + 迷你走势图 |
| Variant | A：指标用金额与倍数（"10美金 即可交易"、"100倍 杠杆高达"）。B：指标用手数、杠杆比、交易时间（"0.01手起"、"100:1"、"周一至周五"），并在模块下方加**交易条件脚注** |
| 交互 | 进入视口后加载 Lightweight Charts，请求行情接口并定时刷新 |
| PC / Mobile | PC 两卡并排；Mobile 两卡纵向 |
| 可变 | 指标口径、标题、背景 |
| 注意 | 需要真实行情接口；历史代码在前端硬编码了接口 token（入库时已脱敏）。新项目不得复现这种做法 |
| 证据 | 两版 `#section3` `section3Cards`、`fetchQuoteBars`；B 版 `.section3-note` |

### OIL-WHYEBC · 为什么选择 EBC（`WHY-EBC`，B3）

| 项 | 内容 |
|---|---|
| 职责 | 平台层面的信任理由 |
| 状态 | Required（2/2） |
| Variant | A：3 项功能（TradingView 专业图表 / Trading Central 市场洞察 / 多重监管保障），单一面板。B：4 个数据卡（87.6% / 0.0 pips / 20 ms / 50+），第一项带说明浮层 |
| 交互 | B 版：数据说明 tooltip（PC 悬浮，Mobile 另一套文案） |
| PC / Mobile | A：PC 一行 3 项；B：PC 2×2，Mobile 单列 4 行 |
| 可变 | 证据类型（工具或执行数据）、数量 3–4 |
| 证据 | 两版 `#section4`；B 版 `section4Cards`、`.section4-tooltip` |

### 共用模块在原油的取值

| 模块 | 取值 | 证据 |
|---|---|---|
| G2 导航 | A：原油影响 / 原油产品 / EBC 优势 / 合作伙伴 / 如何开始。B：市场机会 / 原油产品 / 交易优势 / 合作伙伴 / 如何开始。"如何开始"仅在 locale 有 `word6` 时出现 | `linkList` |
| M01 Hero | CTA：A"立即开户"，B"立即注册"；Mobile 均为"开始交易原油" | `.hero-btn-pc`、`.hero-btn-m` |
| M06–L1 | `ClosingSection` + `JoinSteps`。B 版三步标题为两行"简单三步 / 开始原油交易"，A 版为"如何参与" | `<ClosingSection>`；PC 设计图 |
| G3 | PC：滚过 B1 顶部后出现停靠条 `pc-dock`；另有收尾吸底条"开始交易原油 + 立即开户" | `updatePcDock` |

## D. 跨版本比较

- **完全共用**：全部模块的组成与顺序。
- **同一模块的 Variant**：B1 的四卡主题、B2 的指标口径、B3 的证据类型。同一事实按人群换度量单位（金额 ↔ 手数）。
- **只是内容替换**：H1、主视觉（油桶 + 行情浮层 / 油桶 + 上涨柱）、深浅底色、CTA 文案。
- **有业务原因的差异**：B 版增加交易条件脚注与数据说明浮层，属于模块内字段，不是新模块。

## E. 做新的原油（或同类大宗商品）推广页时

1. 骨架不变：`WHY-CARE → PRODUCT → WHY-EBC` + `ClosingSection` 收尾组。
2. 只更新：H1 与副标题、主视觉、B1 四卡主题、B2 的产品与指标口径、B3 的证据项、CTA 文案。
3. 小白人群用金额与生活场景；专业人群用手数、杠杆比、执行数据，并保留条件脚注。
4. 不新增：行情大图、新闻或分析区、FAQ、合约规格表。
5. 杠杆、最低金额、执行数据、出金与客服数字先核事实（`asset-review/05-GAPS-AND-CONFLICTS.md`）。

## F. 证据缺口

- locale 文案本轮未重读；OIL-A 的 Mobile 设计图未目检。
- `ClosingSection`、`JoinSteps` 无源码，M06–L1 的内部顺序依据设计图。
- 监管条在设计图中缺失，线上是否显示未核实。
