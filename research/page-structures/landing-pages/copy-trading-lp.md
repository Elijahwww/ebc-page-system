# Page Structure · Copy Trading 跟单推广页

| 字段 | 内容 |
|---|---|
| Page Type ID | `LP_PRODUCT` / 产品 `COPY_TRADING` |
| 结构状态 | `STRUCTURE_CANDIDATE`（待 GPT 复审 + 用户确认） |
| 证据 | `sources/landing-pages/copy-trading/{A,B}/code/copy-trading-{a,b}/+Page.vue`（本轮重读）；`design/pc.png` A、B 与 `design/mobile.png` A（本轮目检）；逐字文案出自 `asset-review/cases/CASE-003.md`（`REPORT_DERIVED`） |
| 先读 | [product-lp-common.md](product-lp-common.md) |

---

## A. 页面类型定义

- **适用场景**：EBC 跟单社区的广告获客页。
- **主要目标**：注册开户。Hero CTA 与信号卡上的"立即跟单"都打开同一个注册弹窗。
- **版本**：CT-A 小白投资者（`/copy-trading-a/zh`）；CT-B 专业投资者（`/copy-trading-b/zh`）。一致项记为 `CROSS_CASE_CONFIRMED（2/2 版本，单一产品）`。

## B. 标准模块结构

```
G1 riskWarning · G2 Anchor Nav（4 项，无"如何开始"）
M01 Hero
M02 Regulation Strip（Hero 之后的独立容器；PC 设计图里没有，见 EX-10）
B1 WHY-CARE（A）/ PROOF（B）        #section2
B2 PRODUCT   信号列表 SignalList     #section3（共享组件）
B3 WHY-EBC   为什么在 EBC 跟单       #section4
── ClosingSection ──
M06 运营数据条（100% / 24/7）
M07 全球合作伙伴
L1 版权 + 风险提示
G3 吸底条 · G4 注册弹窗
```

**没有 M08 三步开户**（2/2）。`ClosingSection` 未传入 `JoinSteps`，导航也没有"如何开始"。原因未在原始资料中说明，见 EX-09。

## C. 模块标准表（跟单正文位）

### CT-WHY · 自己交易 vs 在 EBC 跟单（`WHY-CARE`，CT-A 的 B1）

| 项 | 内容 |
|---|---|
| 职责 | 点出小白自己交易的难处，对照给出跟单方案 |
| 状态 | Conditional：小白人群使用 |
| 必要字段 | H2"交易可以很简单" + 两张对照卡：各含角标、标题、5 个要点（左侧为叉，右侧为勾） |
| 交互 | PC 两卡并排，中间箭头可切换前后层；非中文语言改为上下堆叠（`section2Stacked`） |
| PC / Mobile | Mobile 两卡部分重叠并排，可切换 |
| 可变 | 要点文案与数量 |
| 证据 | `copy-trading-a/+Page.vue` `#section2`；A 版 PC、Mobile 设计图 |

### CT-PROOF · 社区规模（`PROOF`，CT-B 的 B1）

| 项 | 内容 |
|---|---|
| 职责 | 用规模数字建立可信度 |
| 状态 | Conditional：专业人群使用 |
| 必要字段 | H2"EBC 跟单社区" + 2 张数字卡（跟单人数、累计跟随收益）+ 标签 |
| 交互 | 数字滚动动画（`countTo`）。初始值为 0，静态渲染时会显示"0+"，见 `asset-review/cases/CASE-003.md` |
| PC / Mobile | PC 两卡并排（右卡更宽） |
| 注意 | 数字需事实核验 |
| 证据 | `copy-trading-b/+Page.vue` `#section2`；B 版 PC 设计图 |

### CT-SIGNAL · 信号列表（`PRODUCT`，B2）

| 项 | 内容 |
|---|---|
| 职责 | 让用户看到可跟随的真实信号 |
| 状态 | Required（2/2），共享组件 `SignalList` |
| 必要字段 | H2 + 横向信号卡（头像、名称、收益率、走势、最大回撤率、盈亏比、"立即跟单"按钮）+ **风险说明**"历史表现仅供参考，不代表未来结果" |
| Variant | A：额外显示一行指标解释（`show-note1`）。B：不显示指标解释 |
| 交互 | 横向滑动；"立即跟单"打开注册弹窗 |
| PC / Mobile | 两端都是横向卡片流 |
| 注意 | 需要真实信号数据接口；组件无源码 |
| 证据 | 两版 `<SignalList … @follow="openRegisterDialog" />`；PC 设计图第 3 屏 |

### CT-WHYEBC · 为什么在 EBC 跟单（`WHY-EBC`，B3）

| 项 | 内容 |
|---|---|
| 职责 | 平台与机制层面的理由 |
| 状态 | Required（2/2） |
| Variant | **A**：左侧规模数据卡（累计跟随收益、跟单人数）+ 3 项功能（丰富的信号社区 / 灵活的跟单模式 / 多重监管保障）。**B**：左列 3 项功能（灵活的跟单模式 / 毫秒级交易同步 / 多重监管保障），右列"独立风控设置"+ 亏损上限输入演示 |
| 交互 | B 版：自动输入演示金额，确认按钮抖动提示；点击确认打开注册弹窗 |
| PC / Mobile | A：PC 一行 4 块 → Mobile 数据卡在上、功能纵向排列。B：PC 两列 |
| 可变 | 功能项、演示内容 |
| 证据 | 两版 `#section4`；PC 设计图第 4 屏 |

### 共用模块在跟单的取值

| 模块 | 取值 | 证据 |
|---|---|---|
| G2 导航 | 跟单优势 / 精选信号（B：跟单信号）/ EBC 优势 / 合作伙伴 | `linkList` |
| M01 Hero | 主视觉为手机 App 截图 + 数据浮层；CTA"立即开户"（A 版设计图为"立即注册"，代码已改） | `.hero` |
| G3 吸底条 | A"立即跟随专家交易"；B"锁定优质策略" | `ClosingSection` 默认条；A 版 Mobile 设计图 |

## D. 跨版本比较

- **完全共用**：模块数量与顺序、B2 信号列表、收尾组。
- **同一位置的 Variant**：B1（痛点对照 ↔ 规模数字）、B3（功能 + 规模 ↔ 功能 + 风控演示）。
- **有业务原因的差异**：规模数字在 A 版位于 B3、在 B 版位于 B1——专业人群先看规模，小白先解决"我能不能用"（`ANALYST_INFERENCE`）。
- **只是内容替换**：H1、副标题、主视觉浮层、功能项文案、吸底条文案。

## E. 做新的跟单推广页时

1. 骨架不变：`B1（WHY-CARE 或 PROOF）→ SignalList → WHY-EBC` + 收尾组（无三步）。
2. 只更新：H1 与副标题、B1 的对照要点或规模数字、B3 的功能项、吸底文案。
3. 规模数字只放一处：A 型放 B3，B 型放 B1。
4. 不新增：信号排行榜全表、收益计算器、交易员故事、FAQ、三步开户。
5. 信号数据、规模数字、"毫秒级"等表述先核事实；信号模块必须保留风险说明。

## F. 证据缺口

- locale 文案本轮未重读；CT-B 的 Mobile 设计图未目检。
- `SignalList`、`ClosingSection` 无源码；信号数据来源未知。
- 无三步开户的原因未知。
