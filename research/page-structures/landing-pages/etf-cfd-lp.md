# Page Structure · ETF CFD 推广页

| 字段 | 内容 |
|---|---|
| Page Type ID | `LP_PRODUCT` / 产品 `ETF_CFD` |
| 结构状态 | `STRUCTURE_CANDIDATE`（待 GPT 复审 + 用户确认） |
| 证据 | `sources/landing-pages/etf/{A,B,C}/code/etf-{a,b,c}/+Page.vue`（本轮重读）；`design/pc.png` A、B、C 与 `design/mobile.png` A（本轮目检）；逐字文案出自 `asset-review/cases/CASE-001.md`（`REPORT_DERIVED`），ETF-B 文案为模板硬编码（`SOURCE_OBSERVED`） |
| 先读 | [product-lp-common.md](product-lp-common.md)。共用模块 G1–G5、M01、M02、M07、M08、L1 的规格在那里，本文件只写 ETF 的正文位 |

---

## A. 页面类型定义

- **适用场景**：ETF CFD 的广告获客页，按人群拆版本。
- **主要目标**：注册开户（全部 CTA → 注册弹窗）。
- **目标用户与已分析版本**

| 版本 | 人群（目录名） | URL（来自 manifest） |
|---|---|---|
| ETF-A | 小白投资者 | `ebcglobalmarketing.org/etf-a/zh` |
| ETF-B | 中国大陆购买 ETF 的用户 | `ebcglobalmarketing.org/etf-b/zh` |
| ETF-C | 平台现有存量客户 | `ebcglobalmarketing.org/etf-c/zh` |

三个版本属于同一产品、同一模板，跨版本一致记为 `CROSS_CASE_CONFIRMED（3/3 版本，单一产品）`。

---

## B. 标准模块结构

```
G1 riskWarning（A、C）· G2 Anchor Nav（5 项）
M01 Hero
M02 Regulation Strip
B1 / B2 / B3   ← 见下表
M07 Brand（全球品牌影响力 / 全球合作伙伴）
M08 三步开户
L1 版权 + 风险提示
G3 吸底条 · G4 注册弹窗
```

| 版本 | B1 `#section2` | B2 `#section3` | B3 `#section4` |
|---|---|---|---|
| ETF-A | `WHY-CARE` 市场反复验证的长期投资选择 | `PRODUCT` 选择 ETF CFD 发现更多投资优势 | `OFFER` 0 手续费 0 隔夜利息 + 倒计时 |
| ETF-B | `PRODUCT` 享受 ETF CFD 交易的最优条件 | `OFFER` 同上 | `WHY-EBC` 为什么选择 EBC？ |
| ETF-C | `WHY-CARE` 同 A | `PRODUCT` ETF CFD 拓展你的交易策略边界 | `OFFER` 同上 |

ETF 没有 M06 运营数据条（ETF 未使用 `ClosingSection`）。

---

## C. 模块标准表（ETF 正文位）

### ETF-WHY · 长期收益对比（`WHY-CARE`）

| 项 | 内容 |
|---|---|
| 位置 | B1（A、C）；B 版不使用 |
| 职责 | 用历史收益对比建立"为什么是 ETF" |
| 状态 | Conditional：人群尚未认可 ETF 时使用 |
| 必要字段 | H2；左右对比卡（纳指 ETF 年化 vs 传统固收年化 + 口径说明）；实例参考条（说明句 + 两个终值卡）；**数据来源脚注** |
| 交互 | 标题滚动淡入 |
| PC / Mobile | PC 左右两栏 + 下方实例条；Mobile 对比卡仍左右并排，实例条纵向排列 |
| 可变 | 对比对象、数字、插图 |
| 注意 | 设计图为"1993 / 标普500 / $26.89万"，代码与线上为"1999 / 纳指 ETF / $16.83万"。数字以事实库为准，不从设计图抄 |
| 证据 | `etf-a/+Page.vue` `#section2`（`.section2-compare`、`.section2-example`、`.section2-footnote`）；A、C PC 设计图第 2 屏 |

### ETF-ADV · ETF CFD 优势卡（`PRODUCT`）

| 项 | 内容 |
|---|---|
| 位置 | A、C 的 B2；B 的 B1 |
| 职责 | 说明用 CFD 形式交易 ETF 的差异点 |
| 状态 | Required（3/3） |
| 必要字段 | H2 + 4 张卡（标题 + 一行说明 + 图标） |
| Variant | **A**：2×2 四卡（无溢价 / 5:1 杠杆 / 无管理费和封闭期 / 多空双向），深色底。**B**：2×2 四卡，第二张换成"无份额限制"，浅色底，对照国内买 ETF 的痛点。**C**：左侧 1 张大卡"全球顶级资产" + 右侧 4 小卡（多空交易机会 / 5:1 杠杆 / 享有股息分配 / 100+ 顶级 ETF） |
| 交互 | 无 |
| PC / Mobile | PC 2×2；Mobile 仍为 2 列（A 设计图） |
| 可变 | 卡片文案、图标、深浅底色、是否带大卡 |
| 证据 | `etf-a` `#section3` `.section3-grid`；`etf-b` `#section2`（硬编码）；`etf-c` `#section3`；三版 PC 设计图 |

### ETF-OFFER · 限时活动 + 倒计时（`OFFER`）

| 项 | 内容 |
|---|---|
| 位置 | A、C 的 B3；B 的 B2（并且在 Hero 副标题提前露出） |
| 职责 | 给出当前行动的成本理由 |
| 状态 | **Conditional：必须存在当前有效的活动与截止时间** |
| 必要字段 | H2（0 手续费 0 隔夜利息）；适用范围一行；倒计时（天、时、分、秒）；主视觉 |
| 交互 | 倒计时每秒更新；结束后倒计时行隐藏（`section4CountdownEnded`），标题保留 |
| PC / Mobile | 相同结构，卡片满宽 |
| 可变 | 活动内容、截止时间、主视觉 |
| 注意 | 代码中的截止时间是 2026-09-12，已过期，但标题仍显示。活动结束后整模块应撤下，由其他角色填位，见 EX-12 |
| 证据 | `etf-a` `#section4` `.section4-countdown`；`etf-b` `#section3`；设计图"0%"卡 |

### ETF-WHYEBC · 为什么选择 EBC（`WHY-EBC`）

| 项 | 内容 |
|---|---|
| 位置 | 仅 B 版 B3 |
| 职责 | 回答"为什么换到 EBC" |
| 状态 | Conditional：人群已认可产品、需要平台理由时使用 |
| 必要字段 | H2 + 一行副标题 + 4 张卡（100+ 热门 ETF / 5:1 杠杆 / 资金独立托管 / 毫秒级执行） |
| PC / Mobile | PC 2×2；Mobile 第一张卡的说明文字与 PC 不同（代码中 `section4-card-desc-pc` 与 `-mobile` 两套文案） |
| 注意 | 第一张卡 PC 说明"所见即所得，成本价购买ETF"与 B1"无溢价"的说明重复，属于历史稿问题，不应沿用 |
| 证据 | `etf-b/+Page.vue` `#section4`；B 版 PC 设计图 |

### 共用模块在 ETF 的取值

| 模块 | ETF 取值 | 证据 |
|---|---|---|
| G2 导航 | 5 项，对应 B1、B2、B3、M07、M08。B 版前三项硬编码为"交易优势 / 限时活动 / EBC优势" | 三版 `linkList` |
| M01 Hero | H1 两行 + 副标题 + CTA"开设账户 →"；Hero 按钮为亮红色，与 OIL、CT 的酒红不同 | `section1`；设计图 |
| M02 监管条 | A、C 用 `jianguan theme="white"`；B 用 `honor-list` 自动轮播 | `section1` 末尾 |
| M07 品牌 | 3 张卡（巴萨 / CCTV 专访〔仅 zh，其他语言换卡〕/ 牛津研讨会）。PC 箭头位移，Mobile Swiper + 指示条 | `#section5` |
| M08 三步 | 1.注册账户 2.身份验证 3.开始使用 | `#section6` |
| G3 吸底条 | "免息免手续费" + "立即开户"；首屏 CTA 离开视口后出现 | `.etf-footer`、`footerBtnObserve` |

---

## D. 跨版本比较

- **完全共用**：G2、M01 形态、M02、M07、M08、L1、G3、G4；A 与 C 的模板差异只在 B2 的卡片排布。
- **同一模块的 Variant**：ETF-ADV 的三种排布与卡片内容；Hero 的 H1 与主视觉（VGT/XLF 盒子、指数方块、资管品牌方块）。
- **有业务原因的差异**：B 版去掉 ETF-WHY、把 ETF-OFFER 提前、加入 ETF-WHYEBC，对应"已经在国内买 ETF"的人群（`ANALYST_INFERENCE`）。
- **只是内容替换**：H1、副标题、主视觉、卡片文案与图标、数字。

---

## E. 做新的 ETF 推广页时（历史候选，非锁定结构）

1. 读 [product-lp-common.md](product-lp-common.md) §E 的锁定规则。
2. 默认骨架不变，只决定 3 个正文位：

| 条件 | B1 | B2 | B3 |
|---|---|---|---|
| 人群未认可 ETF，且有有效活动 | ETF-WHY | ETF-ADV | ETF-OFFER |
| 人群已在买 ETF，且有有效活动 | ETF-ADV | ETF-OFFER | ETF-WHYEBC |
| **没有有效活动**（当前实际状态） | ETF-WHY 或 ETF-ADV | ETF-ADV | ETF-WHYEBC ← 推断，无原始案例，见 EX-08 |

3. 只更新：H1 与副标题、主视觉、卡片文案、收益与产品数字（先核事实）、活动内容与截止时间、合作卡片。
4. 不新增：FAQ、ETF 列表或报价表、费用表、第 4 个正文模块。需要时提交 Structure Override。
5. 涉及"无溢价、成本价、享有股息、跑赢固收、5:1 杠杆"等表述时先走事实与合规核对（`asset-review/05-GAPS-AND-CONFLICTS.md` 已登记冲突）。结构规范不为这些文案背书。

> **GPT 2026-11-13 事实/结构复审**：已直接读取 ETF-A/B/C 的中文 locale 与 Vue；ETF-B 的 Hero、优惠与品牌还存在硬编码，locale 可能含未使用字段，不应把整个文件当上线文案。历史优惠目标 `2026-09-12T00:00:00+03:00` 已到期，但不能因此断言线上从未续期；新任务必须先核实实际活动和交易条件，**不能自动以 WHY-EBC 填空槽**。ETF-C locale 的“持有 ETF/享有股息分配”等可能误导 CFD 产品权益的措辞未经批准，不得复制为当前事实。三个正文位是历史候选，不是硬性屏数上限。

## F. 证据缺口

- ETF-A、ETF-C 的 locale 文案本轮未重读。
- ETF-B、ETF-C 的 Mobile 设计图本轮未目检。
- ETF-C 代码 Hero 背景引用 A 版图片，与 C 版设计图不一致（出自 CASE-001），线上视觉未核实。
- 没有"活动结束后"的 ETF 页面版本。
