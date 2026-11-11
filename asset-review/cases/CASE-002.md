# CASE-002 原油 CFD 推广页（A / B 两版本）

| 字段 | 内容 |
|---|---|
| Case ID | CASE-002（版本：CASE-002-A / CASE-002-B） |
| 页面类型 | 广告/活动推广落地页（LP） |
| 产品 | 原油 CFD（WTI `XTIUSD`、布伦特 `XBRUSD`） |
| 分析日期 | 2026-11-11 |
| 线上核查 | 2026-11-11 WebFetch `/oil-trading-a/zh` `/oil-trading-b/zh`：主要文案与本地代码一致（仅文本） |
| 证据根目录 | `推广页/原油推广页/` |

标签：`FACT` / `OBS` / `INF` / `NV`(NEEDS_VERIFICATION)。

---

## 0. 版本关系

| 版本 | 人群（文件夹名） | URL | 代码 | 设计图 |
|---|---|---|---|---|
| A | 针对小白投资者 | `https://ebcglobalmarketing.org/oil-trading-a/zh` | `A版本（针对小白投资者）/页面代码/oil-trading-a/` | PC 1332×2913；MB 575×5895 |
| B | 针对专业投资者 | `https://ebcglobalmarketing.org/oil-trading-b/zh` | `B版本（针对专业投资者）/页面代码/oil-trading-b/` | PC 1524×3775；MB 710×7597 |

- `OBS` A/B 共用骨架：Hero → Section2（原油与市场）→ Section3（产品 + 实时行情图）→ Section4（为什么选择 EBC）→ `ClosingSection`（数据条/合作伙伴/三步/版权/吸底条）。
- `OBS` 两版均有 `test.html`（两份完全相同，15,924 bytes），是 Lightweight Charts 迷你行情卡的独立原型（`<title>Lightweight Mini Charts 定制版</title>`），示例品种为 `XAUUSD`/`EURUSD`，属开发草稿，非页面产物。
- `OBS` 最终版本：代码 = 线上。设计图早于代码：B 设计图 Section2 标题为"一桶原油, 牵动全球经济运转"，代码/线上为"一个原油市场, 多重行情机会"（`oil-trading-b/locales/zh_CN/index.ts` s2TitlePc）。
- `OBS` 原油页脚手架来自跟单页：A 的根节点 class 为 `copy-trading-page`；A/B 的 zh_CN locale 中残留跟单页 key（`s2SelfRows`、`s2EbcRows`、`s3Yield`、`s3Follow`、`s6Bar: "立即跟随专家交易"` 等），模板未引用。

---

## A. 页面定位与需求

| 项 | A（小白） | B（专业） | 标签 |
|---|---|---|---|
| 主张 | "一键参与 全球油价机遇" | "油价每一次波动 都是您的交易机会" | FACT |
| 认知任务 | 先解释"原油为什么重要"（与生活相关） | 直接讲"什么驱动油价"（交易逻辑） | INF |
| 门槛表述 | `10美金 即可交易` / `100倍 杠杆高达` | `0.01手起` / `100:1 最高杠杆` / `周一至周五 交易时间` | FACT |
| 信任方式 | 工具（TradingView / Trading Central）+ 监管 | 执行数据（87.6% / 0.0 pips / 20ms / 50+） | FACT |
| 主转化 | 注册开户（弹窗 `registryFormSSR`） | 同 | FACT |
| Hero CTA | PC `立即开户`，MB `开始交易原油` | PC `立即注册`，MB `开始交易原油` | FACT |

- `INF` A 人群痛点：不了解原油、担心资金门槛 → 用"10美金"和生活化场景降低心理门槛。
- `INF` B 人群痛点：关心成交质量、杠杆、交易时间、成本 → 用执行指标与合约条件回应。
- 未知：流量渠道、两版本实际表现。

---

## B. 信息架构

### A 版
| # | 模块 | 职责 |
|---|---|---|
| 1 | Hero + 监管条 `jianguan` | 主张 + CTA + 信任 |
| 2 | `section2` 一桶原油, 牵动全球经济运转（交通运输/制造生产/能源供应/日常消费） | 产品解释：原油与生活的关联 |
| 3 | `section3` 多空双向交易, 全球两大原油基准（WTI/布伦特 + 实时迷你走势） | 产品解释 + "实时感" |
| 4 | `section4` 为什么选择 EBC（TradingView/Trading Central/多重监管） | 信任 |
| 5 | `ClosingSection`（100% 连续5年出金 / 24/7、全球合作伙伴、如何参与三步、版权、吸底条"开始交易原油"） | 信任 + 行动 |
| — | `pc-dock`（PC 滚过 Section2 后出现）| 行动 |

### B 版
Hero → `section2` 一个原油市场, 多重行情机会（供应调整/库存变化/需求前景/美元走势）→ `section3` 以高达100倍杠杆 交易两大原油产品（0.01手起、实时价、走势图、100:1、交易时间、脚注）→ `section4` 为什么选择 EBC（4 个数据卡 + 87.6% tooltip）→ `ClosingSection`（三步标题"简单三步 / 开始原油交易"）。

- `INF` A 的 Section2 回答"为什么关心原油"，B 的 Section2 回答"油价为什么波动"——同一模块位在两种人群中承担不同认知任务，是可复用的方法。
- `OBS` B 把杠杆提升到 Section3 标题；A 把杠杆作为卡片内指标。

---

## C. 文案（逐字）

### A（`oil-trading-a/locales/zh_CN/index.ts`）
- Title `一键参与全球油价机遇 | EBC金融集团`；H1 `一键参与\n全球油价机遇`；副标题 `带你进入全球最核心的原油市场`；CTA `立即开户` / `开始交易原油`
- 导航 `原油影响` `原油产品` `EBC 优势` `合作伙伴` `如何开始`
- S2 `一桶原油, 牵动全球经济运转`；`交通运输/出行与物流`；`制造生产/原料与加工`；`能源供应/生产与输送`；`日常消费/商品与成本`
- S3 `多空双向交易, 全球两大原油基准`；`WTI 原油/美国主要原油基准`；`布伦特原油/国际主要原油基准`；`10美金/即可交易`；`100倍/杠杆高达`；`WTI/West Texas Intermediate`；`BRENT/CRUDE OIL BRENT`
- S4 `为什么选择 EBC`；`TradingView 专业图表/多周期行情与技术指标，清晰掌握价格趋势`；`Trading Central 市场洞察/重要经济事件与市场情绪，及时掌握行情变化`；`多重监管保障/受英国 FCA、澳洲 ASIC、开曼 CIMA、南非 FSCA 监管`
- 收尾 `100%/连续5年出金`；`24/7/全天候客服支持`；`如何参与`；`注册开户` `身份验证` `开始交易`；`全球合作伙伴`；`巴萨官方合作伙伴` `携手联合国基金会抗击疟疾` `联合牛津大学举办研讨会` `携手打造专业级交易体验` `EBC接受CCTV专访`；`© 2026, EBC Financial Group (SVG) LLC. All Rights Reserved.`；`市场有风险 投资需谨慎`；吸底 `开始交易原油` / `立即开户`

### B（`oil-trading-b/locales/zh_CN/index.ts`）
- Title `油价每一次波动都是您的交易机会 | EBC金融集团`；H1 `油价每一次波动\n都是您的交易机会`；副标题 `多空双向交易全球原油市场`；CTA `立即注册` / `开始交易原油`
- 导航 `市场机会` `原油产品` `交易优势` `合作伙伴` `如何开始`
- S2 `一个原油市场, 多重行情机会`；`供应调整/产量政策与供应变化`；`库存变化/库存增减与供需松紧`；`需求前景/工业生产与运输需求`；`美元走势/美元强弱与定价变化`
- S3 `以高达100倍杠杆` `交易两大原油产品`；`0.01手起`；`WEST TEXAS OIL` / `BRENT CRUDE OIL`；`100:1/最高杠杆`；`周一至周五/交易时间`；`*交易时间及交易条件可能因产品、账户、市场及节假日调整，以交易平台显示为准。`
- S4 `为什么选择 EBC`；`87.6%`/`订单成交于更优的价格`（tooltip `基于百万次订单实盘验证，EBC订单优化率处于行业前2.5%的水平`）；`0.0 pips`/`银行级原始点差`；`20 ms`/`平均订单执行速度`；`50 +`/`对接国际顶级银行和对冲基金`（数值在 `+Page.vue` `section4Cards` 中硬编码）
- 三步 `简单三步` `开始原油交易`

### 分析（INF）
- A 的"10美金即可交易"把门槛转成具体金额；B 的"0.01手起"使用专业用户熟悉的单位。**同一事实，按人群换度量单位**。
- B 的脚注把交易条件的不确定性前置，是专业版的合规写法，可在其他专业版复用。
- `NV` "100倍杠杆"需按受众实体/地区确认；"10美金即可交易"与 0.01 手 × 100 倍的保证金关系需核算；"87.6% / 前2.5% / 50+ / 连续5年出金"需有可追溯的数据来源（见 05 报告）。
- `OBS` A 设计图页脚风险提示为英文 "Markets involve risk. Invest with caution."，代码为中文。

---

## D. 视觉与交互

| 项 | 记录 | 标签 |
|---|---|---|
| 视觉 | 酒红 Hero + 金属油桶 3D 图；A 第二屏黑底深卡、B 第二屏白底浅卡；产品区 A 浅灰、B 酒红舞台背景 + 白卡 | OBS |
| 尺寸系统 | 与 CASE-001 相同 rem 体系（PC 1/1920，MB 1/750，断点 996/997px） | FACT（`oil-trading-a/+Page.vue` L530、L851） |
| 字体 | `"Inter","Noto Sans","Noto Sans SC"` | FACT |
| H1 | PC 56rem/700，行高 A 74rem / B 82rem；MB 64rem | FACT |
| 按钮 | `.hero-btn` 50rem 高、圆角 59rem、`#a52933`、16rem | FACT |
| 行情图 | 面积图 线色 `#319f75`、填充 `rgba(49,159,117,.25→0)`，隐藏坐标与网格，末点圆点定位 | FACT |
| 交互 | 行情区进入视口前 200px 才加载图表库与数据（IntersectionObserver）；30s 刷新；PC dock（滚过 Section2 出现）；B 版 87.6% tooltip（PC hover / MB 文本） | FACT |
| 设计稿质量问题 | B MB 设计图布伦特卡片仍标 "WEST TEXAS OIL"；B MB 数据条"本地客服团队支持"与 PC"全天候客服支持"不一致 | OBS（`B…/设计图/移动端设计图.png`） |

---

## E. 开发与转化

| 项 | 记录 | 标签 |
|---|---|---|
| 技术栈 | Vue 3 + Vike + vue-i18n；`lightweight-charts@4.2.0` 运行时从 `unpkg.com` 动态加载 | FACT |
| 共享组件（本地缺失） | `ClosingSection`、`JoinSteps`、`topMenuNoA`、`jianguan`、`registryFormSSR`、`riskWarning`、`footerEs` | FACT |
| 语言 | zh,en,zh-TW,ja,ko,th,vi,id,es,pt,mn（11 种），默认 en | FACT |
| 真实接口 | `GET https://trade.ebccrm.com/trading/view/history?symbol=…&resolution=1D&from=…&to=…`（90 天日线），带 `token` 请求头 | FACT（代码）/ 线上是否可用 NV |
| 安全 | **`+Page.vue` 与 `test.html` 中硬编码了一个 API token（本报告已脱敏，不上传 GitHub）**。前端 token 对所有访客可见，需确认其权限范围是否仅限公开行情 | FACT / NV |
| 降级 | 请求失败返回 `[]`，价格显示 `--` | FACT |
| CTA | 全部打开注册弹窗 | FACT |
| 埋点 | 页面内未发现 | NV |

---

## F. 案例价值

1. **最值得保留**：同产品按人群更换"认知任务 + 度量单位 + 信任证据"（A：生活关联/10美金/工具；B：价格驱动/0.01手/执行数据）。
2. **解决的问题**：小白对原油缺乏关联感；专业用户关心交易条件。
3. **可参考方法**：实时迷你行情图制造"市场正在发生"的临场感；交易条件脚注前置。
4. **仅适用本项目**：油桶创意、WTI/布伦特双基准结构。
5. **可改进**：清理脚手架残留 key 与 `copy-trading-page` class；token 管理；第三方 CDN（unpkg）依赖；设计稿与代码同步（Section2 标题、MB 布伦特标签）。
6. **证据不足**：A/B 转化差异；实时行情对转化的影响。
