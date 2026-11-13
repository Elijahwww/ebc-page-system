# Page Structure · 交易激励活动页（Trading Incentive Campaign）

| 字段 | 内容 |
|---|---|
| Page Type ID | `CAMPAIGN_TRADING_INCENTIVE`；与 `HERO_CONVERSION` 分离 |
| 结构状态 | `STRUCTURE_CANDIDATE`（待 GPT 复审 + 用户确认；本轮无 `STRUCTURE_LOCKED`） |
| 分析日期 | 2026-11-13 |
| 证据范围 | 3 个案例的 PC/Mobile 设计图 + `+Page.vue` + 页面级 locale。**线上地址本轮未核验**（见 §F） |
| 文件名说明 | 沿用 `sources/campaigns/trading-contest/` 的目录名。但 3 个案例里只有 1 个是严格意义的"比赛"，类型名建议改为"交易激励活动"，见 [structure-exceptions.md](../structure-exceptions.md) EX-01 |

---

## A. 页面类型定义

- **适用场景**：有明确活动期、以奖品/奖金激励注册、入金或交易行为、带活动规则的独立活动页。
- **历史行动链**：3/3 源码首屏嵌入注册表单，随后进入用户中心报名并达到交易/入金条件。**这不是未来每个交易大赛必须的行动链**：用户指定 Hero CTA 或活动只面向现有客户时，可跳转到已批准的报名/登录/注册入口。具体依活动规则与系统流程。
- **典型目标用户**：`ANALYST_INFERENCE` 被奖品或排名吸引的新客，以及需要活动条件说明的已有客户。原始资料中没有受众说明文件。
- **已分析案例**

| Case | 活动 | 激励机制 | 市场/语言 | 证据 |
|---|---|---|---|---|
| `CMP-TC-01` | 双十一入金抽奖 2026 | **抽奖型**：净入金得券，平仓手数升级奖券 | zh / zh-TW | `sources/campaigns/trading-contest/case-01/`（`PC设计图.png` 1920×3891、`移动端.png` 751×6974、`不完整代码包/+Page.vue`、`locales/zh_CN`、`zh_TW`） |
| `CMP-TC-02` | Trade Up: Milestone to the Moon | **达标型**：净入金 + 手数同时达到某一档即得该档奖品 | th | `.../case-02/`（PC 1920×4165、Mobile 750×8187、`+Page.vue`、`locales/th`） |
| `CMP-TC-03` | 实盘交易赛（Kontes Trading / Live Trader Cup / ชิงแชมป์เทรด ซีซั่น 2） | **排名型**：按收益率排名发现金奖 | 设计图 id；代码 th | `.../case-03/`（PC 1925×4968、Mobile 750×9462、`+Page.vue`、`locales/th`） |

> **对原始假设的修正**：这不是"三类交易大赛"，而是同一页面类型下的三种**激励机制**。只有 `CMP-TC-03` 有排名和排行榜。这个差别决定了第 3 个模块位放什么，所以类型定义以"机制"为分支条件，而不是以"比赛类别"。

---

## B. 标准模块结构（按真实页面顺序）

```
G1  Anchor Nav                      系统级
M01 Hero + 注册/报名入口              历史 Form Variant；也可 CTA Variant
M02 Prize 奖品/奖金                  Required
M03 Mechanism / Leaderboard         Conditional（条件位，位置固定在 M02 之后、M04 之前）
M04 Participation Steps 参与步骤     Required
M05 About EBC                       Optional（仅 1 例，默认不启用）
M06 Rules 活动规则                   Required
M07 Closing CTA Banner              Optional（仅 1 例，默认不启用）
L1  版权 + 风险提示                   合规层
```

**新项目默认骨架**：`G1 → M01 → M02 →（M03，满足条件时）→ M04 → M06 → L1`。

各案例实际顺序（`SOURCE_OBSERVED`）：

| 模块 | CMP-TC-01 | CMP-TC-02 | CMP-TC-03 |
|---|---|---|---|
| G1 Anchor Nav | ✓ 4 项 | ✓ 3 项 | ✓ 5 项 |
| M01 Hero + Form | ✓ | ✓ | ✓ |
| M02 Prize | ✓ `#section2` | ✓ `#section2` | ✓ `#section2` |
| M03 Mechanism / Leaderboard | ✓ `#section3` 奖券升级（机制档位） | ✗ 门槛并入奖品卡 | ✓ `#section3` 实时排行榜 |
| M04 Steps | ✓ `#section4` + CTA | ✓ `#section3` + 提示条，无 CTA | ✓ `#section4` + CTA |
| M05 About EBC | ✗ | ✗ | ✓ `#section5` |
| M06 Rules | ✓ `#section5` | ✓ `#section4` | ✓ `#section6` |
| M07 Closing CTA | ✗ | ✓ `.page-cta` | ✗ |
| L1 版权 + 风险提示 | ✓ `bottomTips` | **✗ 设计图与代码均无** | ✓ `BottomTips` |

**对假设 `Hero → 奖品 → 排行榜/比赛机制 → 参与步骤 → 活动规则` 的核验结论**

| 假设项 | 结论 | 状态 |
|---|---|---|
| Hero 在首位 | 成立，且 3/3 首屏内嵌注册表单，这一点假设里没有 | `CROSS_CASE_CONFIRMED` 3/3 |
| 奖品在第 2 位 | 成立 | `CROSS_CASE_CONFIRMED` 3/3 |
| 排行榜/机制在第 3 位 | **部分成立**：2/3 出现且位置一致；达标型（TC-02）没有独立模块。排行榜本身只有 1 例 | 条件位 `CROSS_CASE_CONFIRMED` 2/3；Leaderboard Variant 为 `SINGLE_CASE_CANDIDATE` |
| 参与步骤在其后 | 成立，3/3 都是 3 步 | `CROSS_CASE_CONFIRMED` 3/3 |
| 活动规则收尾 | 成立，3/3 是最后一个内容模块 | `CROSS_CASE_CONFIRMED` 3/3 |
| 假设之外 | TC-03 多出 About EBC；TC-02 多出 Closing CTA、缺少版权与风险提示 | `SOURCE_OBSERVED`，各 1 例 |

---

## C. 模块标准表

### G1 · Anchor Nav（系统级，不计入营销模块）

| 项 | 内容 |
|---|---|
| 职责 | EBC + 合作 Logo；页内锚点跳转 |
| 状态 | Required（系统组件 `topMenuNoA`，3/3） |
| 字段 | 锚点列表：与本页实际内容模块一一对应（TC-01 4 项、TC-02 3 项、TC-03 5 项）。模块增减时锚点同步增减 |
| 交互 | 点击滚动到对应 `#sectionN`；TC-01、TC-03 显式关闭导航内的注册按钮（`showRegister=false`） |
| PC / Mobile | PC 横向锚点；Mobile 汉堡菜单 |
| 可变 | 锚点文案（TC-01 导航"活动福利"对应标题"入金抽奖"，两者不必相同） |
| 证据 | 3 份 `+Page.vue` 的 `linkList`；3 份 PC 设计图顶部 |

### M01 · Hero + 转化入口（历史实现为 PC 右侧注册表单）

| 项 | 内容 |
|---|---|
| 顺序 | 1 |
| 职责 | 一屏说清：什么活动、最大的奖励或玩法、什么时候、现在就能注册 |
| 状态 | **历史默认 3/3**；首屏内嵌表单是目前三份代码的共同形态，不是用户确认的新活动一律必须如此。具体注册方式应符合本次 Portal、渠道和已批准业务流程 |
| 必要字段 | 活动主题、核心玩法/奖励、起止时间及真实时区、主视觉、与本次业务相符的行动入口。**表单字段及登录入口仅在选择 Form Variant 时才需要**；CTA Variant 不生成表单卡或假链接 |
| 交互 | **历史 Form Variant**：表单注册，正文 CTA 回首屏；**本次 CTA Variant**：根据真实配置弹出注册、滚动到有效位置、跳登录/Portal/报名，禁止把 CTA 滚向一个不存在的表单。目标未确定标 `CTA_DESTINATION_PENDING` |
| PC / Mobile | **历史 Form Variant**：PC 左主题与主视觉、右表单；Mobile 纵向保留表单。**本次 CTA Variant**：PC 与 Mobile 显示主 CTA，不为复用旧模板保留右侧空白/假表单卡；移动端调整间距和点击区 |
| 可变 | 活动主题、视觉与配色、日期位置；明确要求时可独立选择 `EMBED_FORM_RIGHT_DESKTOP`、`CTA_MODAL`、`CTA_LINK`、`CTA_ANCHOR`，一般不需要新建活动类型 |
| 证据 | TC-01 `<section class="section1">`；TC-02 `.section1-form`；TC-03 `<section class="section1">` + `registryForm`；3 组 PC/Mobile 设计图首屏 |

### M02 · Prize

| 项 | 内容 |
|---|---|
| 顺序 | 2 |
| 职责 | 让用户看到能得到什么，以及奖励如何分层 |
| 状态 | **Required**（3/3） |
| 必要字段 | ① 模块标题 ② 一行说明"怎么得到"（3/3 都有）③ 分层奖励卡：档位标签 + 奖品名或金额 + 奖品图。3/3 都是 5 档（属观察，不是规则）④ 条件字段：当门槛与奖品一一对应时，门槛写在卡内（TC-02：净入金 ≥、手数 ≥） |
| 交互 | PC 静态；Mobile 见下 |
| PC / Mobile | TC-01：PC 2 大 + 3 小网格 → Mobile 单列横卡；TC-02：PC 1 大 + 2×2 → Mobile 横向 Swiper；TC-03：PC 5 列 → Mobile 横向 Swiper（自动轮播）。**内容不删减，只改排布** |
| 同一模块的内部替换（不是新模块） | 奖品图、奖品名、档位命名（一等奖 / LEGEND / TOP 1）、档位数、卡片排布、实物或现金；按市场替换奖品（TC-01 zh-TW 把"华为 GT7"换成"Google Fitbit Charge 6"、"天猫卡"换成"7-ELEVEN 商品卡"） |
| 证据 | TC-01 `#section2` + `locales/zh_CN` `prizes`、`zh_TW` `prizes`；TC-02 `#section2`（`section2Bg` + `section2Card1–5`）；TC-03 `#section2`；3 组设计图第 2 屏 |

### M03 · Mechanism / Leaderboard（条件位）

| 项 | 内容 |
|---|---|
| 顺序 | 3（出现时固定在 M02 之后、M04 之前，2/2） |
| 职责 | 解释"奖励之外的第二层规则"：如何提高中奖率，或者当前谁在领先 |
| 状态 | **Conditional** |
| 适用条件（`STRUCTURE_CANDIDATE`） | **排名型**（奖励由相对名次决定）→ 用 `Leaderboard` Variant；**存在独立于奖品清单的升级或进度维度**（TC-01：手数达标升级奖券）→ 用 `Mechanism Tier` Variant；**达标型且门槛与奖品一一对应**（TC-02）→ **不建此模块**，门槛写进 M02 卡片 |
| Variant A · Mechanism Tier（TC-01） | 字段：标题 + 一行说明 + 档位卡（档位名 + 达标条件，如"平仓≥0.5手"）。PC 5 卡一行 → Mobile 横向 Swiper |
| Variant B · Leaderboard（TC-03） | 字段：标题 + 榜单表（名次、昵称、账号、收益率、奖励）+ 前 10 名 + 更新说明（"仅显示收益率最高的 10 个账户，每小时更新"）。组件 `rankingTable`，需要真实 `eventId` 和接口。Mobile 设计图只露出前 3 列，其余列的呈现方式未确认 |
| 可变 | 档位命名与数量、榜单列、背景视觉 |
| 禁止 | 没有真实榜单接口时不得用模拟数据上线（设计图里的榜单是占位数据）；不得为达标型活动硬造一个"机制"模块来凑结构 |
| 证据 | TC-01 `#section3` + `lots`；TC-03 `#section3` + `<rankingTable eventId=…>`；TC-02 设计图奖品卡内的门槛文字 |

### M04 · Participation Steps

| 项 | 内容 |
|---|---|
| 顺序 | M03 之后；没有 M03 时紧跟 M02 |
| 职责 | 把"注册之后还要做什么"压缩为 3 步 |
| 状态 | **历史默认 3/3，全部是 3 步**；步骤数量需服从真实报名/交易/领奖流程，不得为了排版省略复杂规则 |
| 必要字段 | 标题 + 3 步（序号、步骤名、1–2 行说明、图标）。内容模式 3/3 一致：① 注册并在用户中心报名 ② 完成业务条件（入金抽奖 / 达到交易目标 / 选择参赛账户）③ 领奖或开始比赛 |
| 条件字段 | 回到表单的 CTA 按钮（TC-01"参与活动"、TC-03"Daftar Sekarang"，2/3）；补充提示条（TC-02："请先报名，系统才开始统计"） |
| 交互 | CTA 平滑滚动回 M01 表单 |
| PC / Mobile | PC 3 列横排 → Mobile 纵向 3 卡 |
| 可变 | 步骤文案、图标风格、是否带提示条 |
| 证据 | TC-01 `#section4` + `steps` + `joinBtn`；TC-02 `#section3`；TC-03 `#section4` + `.btn`；3 组设计图 |

### M05 · About EBC（Optional，`SINGLE_CASE_CANDIDATE`）

| 项 | 内容 |
|---|---|
| 顺序 | M04 之后、M06 之前（仅 TC-03） |
| 职责 | 品牌与监管背书：一段公司介绍 + FC Barcelona 合作视觉 |
| 状态 | **Optional**，默认不启用。1/3 出现，业务原因未在原始资料中说明 |
| 字段 | 标题 + 1 段正文（总部、合作、办公室、监管牌照、流动性） |
| 启用条件 | `ANALYST_INFERENCE` 面向对 EBC 不熟悉的新市场或合作方流量时可启用。需在 brief 写明原因，监管表述按当地实体核实 |
| 证据 | TC-03 `#section5`；PC/Mobile 设计图 "Tentang EBC" |

### M06 · Rules

| 项 | 内容 |
|---|---|
| 顺序 | 最后一个内容模块（3/3） |
| 职责 | 完整活动条款。属于活动必需的披露，**不是可删减的营销模块** |
| 状态 | **Required**（3/3） |
| 必要字段（3/3 共有） | 活动时间（含时区）· 参与方式（需报名才开始统计）· 资格或达标口径 · 奖励规则 · 领取方式 · 发放时限（3/3 均为审核后或结束后 30 个工作日）· 无效用户 · 最终解释权声明 |
| 按机制追加 | 抽奖型：奖券获取、升级、使用；达标型：净入金与手数口径、适用品种、每人限领；排名型：排名公式、获奖资格（收益率须为正）、信号公开要求 |
| 交互 | 无。3/3 全文展开，PC 与 Mobile 都不折叠 |
| 可变 | 条目编号方式（圆点、小标题分段、数字编号）、是否放在卡片容器内 |
| 证据 | TC-01 `#section5` + `rules`（9 条）；TC-02 `#section4`（图片）；TC-03 `#section6`（图片）；3 组设计图 |

### M07 · Closing CTA Banner（Optional，`SINGLE_CASE_CANDIDATE`）

| 项 | 内容 |
|---|---|
| 顺序 | M06 之后（仅 TC-02） |
| 职责 | 页尾再给一次回到表单的入口 |
| 状态 | **Optional**，默认不启用。TC-02 的 M04 没有 CTA，回表单入口放在这里；TC-01、TC-03 的入口在 M04 |
| 规则（`STRUCTURE_CANDIDATE`） | 正文中"回到表单"的入口保留 **一处**：默认放 M04 底部；规则很长且希望读完再行动时可改放 M07。两处都放需要说明理由 |
| 字段 | 两行标题 + 一行副标题 + 按钮 |
| 证据 | TC-02 `.page-cta`（`ctaTitle1/2`、`ctaSub`、`joinBtn`）；PC/Mobile 设计图页尾 |

### L1 · 版权 + 风险提示（合规层）

| 项 | 内容 |
|---|---|
| 职责 | 实体版权行 + 风险提示（"市场有风险 投资需谨慎"） |
| 状态 | **合规必需**，AI 不得删除。TC-01、TC-03 有（组件 `bottomTips`）；**TC-02 的设计图和代码里都没有**，登记为合规缺口，不视为可选 Variant，见 EX-02 |
| 可变 | 无。文案与实体名以事实库为准 |
| 证据 | TC-01 `.bottom-box`；TC-03 `#section7`；设计图页尾 |

---

## D. 跨案例比较

**历史源码共用（3/3）**：锚点导航、Hero 内嵌注册表单（历史默认而非未来硬规则）、分层奖品模块、3 步参与步骤、规则全文收尾、PC 与 Mobile 模块一一对应（没有只在某一端出现的模块）。

**同一模块的不同 Variant**

| 模块 | Variant | 业务原因 |
|---|---|---|
| M02 Prize | 实物奖品网格 / 档位 + 门槛卡 / 名次 + 现金 | 奖励由抽奖、达标还是排名决定 |
| M03 | Mechanism Tier / Leaderboard / 不出现 | 是否存在独立的升级维度；是否排名 |
| M04 Steps | 带 CTA / 带提示条 | 回表单入口放在哪里 |
| M06 Rules | 圆点列表 / 小标题分段 / 数字编号 | 仅排版差异 |

**只是内容替换、不构成结构差异**：主题视觉与配色（双十一粉红、太空摩托、奖杯）、标题字体、奖品清单、档位命名、日期、语言、按市场替换奖品、装饰性交互（TC-01 桌面端的气球光标与星屑，仅 `pointer: fine` 且宽度 > 996px 时启用）。

**有实际业务原因的结构差异**：M03 是否出现及其形态（机制决定）。

**原因不明、暂不能定性的差异**：M05 About EBC、M07 Closing CTA、TC-02 缺 L1。见 [structure-exceptions.md](../structure-exceptions.md)。

**同模板多次复用的直接证据（TC-03）**：PC 设计图是"KONTES TRADING KAFEINMATCHA"（2026-10-19 至 11-02），Mobile 设计图是"EBC LIVE TRADER CUP INDONESIA"（2026-09-28 至 10-31），代码是泰语"ชิงแชมป์เทรด ซีซั่น 2"（路由 `live-trading2`）。三份资料是三场不同的比赛，模块组成与顺序完全相同，只换了标题、副标题、日期和语言。这说明排名型活动在实际生产中已经按"换主题内容"的方式复用。副作用是同一案例目录内的资料互不对应，见 EX-06。

---

## E. 结构候选的调用规则（尚未获用户锁定）

**明确覆盖优先**：如用户提出“Hero 只用 CTA，不要注册表单”，即使三份历史源码均为 PC 右侧表单，也应把 Hero 改为对应 CTA Variant，页面仍保持 `CAMPAIGN_TRADING_INCENTIVE`、奖励/排名/步骤/规则等信息职责不变；无需再次征询“是否允许不使用历史表单”。目标地址未知就标待接入。


通用流程见 [README.md](../README.md) §3。本类型的具体执行：

1. **识别机制**：先判断是抽奖型、达标型还是排名型，再决定 M03。判断不了时回到需求方确认，不要自行假设。
2. **默认候选骨架**：`G1 → M01 → M02 →（M03）→ M04 → M06 → L1`。G1 与 L1 具体呈现由真实站点/适用实体决定。M05、M07 仅单例出现，默认不启用；重要新机制可以经有据取舍后调整，不能直接照搬旧项目状态。
3. **只换内容**：活动名、主视觉、日期与时区、奖品与档位、门槛数字、步骤文案、规则条款、语言。这些都不需要新增模块。
4. **默认不为“完整”新增**倒计时、获奖者、FAQ、产品介绍、品牌优势、评价或第二奖品区；仅在当前项目存在真实用户/业务缺口、已有模块承担不了时，经 MODULE_ADMISSION_GATE 记录项目级 Structure Override。没有必要不加。
5. **必须保证本次活动的完整真实规则及相关必要法律/风险信息可访问**；TC-02 的局部 Vue 无 L1，仅能记为该代码包缺失，不能当作线上已获批准删除或作为可复制的样板。风险提示和版权依实际实体/司法辖区核实。
6. **Optional 模块**：M05、M07 各 1 例出现，不自动补齐；启用需要说明解决什么用户问题，以及为什么不能由现有模块承担；属于正常候选项目取舍，用户已锁定骨架时才需批准相应 Override。
7. **数据类模块**：Leaderboard 必须有真实接口与活动 ID。没有时标 `DATA_PENDING` 并返回需求方，不放占位数据。
8. **事实核对**：Hero 日期与 Rules 活动时间必须一致（TC-03 PC 设计图两处不一致，见 EX-06）。

---

## F. 证据缺口

| 缺口 | 影响 |
|---|---|
| 3 个线上地址本轮未抓取（抓取需要用户批准，请求未得到响应） | 无法确认线上是否与设计图和代码一致，尤其是 TC-02 是否真的没有风险提示。全部结论标 `LIVE_NOT_VERIFIED` |
| 共享组件 `topMenuNoA`、`registryFormSSRAPP(Global)`、`rankingTable`、`bottomTips` 无源码 | 表单字段、榜单移动端行为、导航默认是否带注册按钮无法确认 |
| TC-02 的奖品、步骤、规则在代码中是整张图片；TC-03 的奖品、步骤、About、规则也是背景图 | 这些模块的文字只能从设计图读取，无法从 locale 核对最终文案 |
| TC-03 的设计图、代码、URL 分别属于不同场次与市场 | 不能把它当作"一个页面的完整资料" |
| 没有受众说明、投放渠道和转化数据 | 模块职责与用户目标均为分析推断 |
| 3 个案例都没有 `manifest.md`，`sources/INDEX.md` 未登记 | 来源追溯靠目录路径，建议补登记（本轮未改动 `sources/`） |
