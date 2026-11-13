# EBC Page Structure System · 页面结构规范（候选）

> 状态：**`STRUCTURE_CANDIDATE`**，2026-11-13 由 Claude 依据 `sources/` 原始资料整理，已补 GPT 源码与中文 locale 复审记录，仍待用户确认。
> **本目录目前没有任何 `STRUCTURE_LOCKED` 结构。** 在用户确认之前，这些文件是"默认建议"，不是强制标准。
> Claude 初版未修改 `sources/` 或全局 Agent 规则；此次整合新增三个只读来源 manifest 和 `sources/INDEX.md` 索引，并更新跨 Agent 入口与 PM/Copy/Design 规则，**未改原始 Vue/PNG**。

## 1. 这套规范解决什么

同一类型的页面，主题、市场、视觉、文案和数据会变，但模块组成、顺序和每个模块的信息职责基本稳定。本目录把这些稳定部分按页面类型写下来，让 Agent 接到新需求时先沿用已有结构，只替换内容，不凭"更完整""更有营销效果"自行加模块。

它约束的是 PM 方案节点里的"模块组成与顺序"，不替代需求诊断、研究、用户路径和文案评审。

## 2. 页面类型索引

| Page Type | 文件 | 案例数 | 结构状态 |
|---|---|---|---|
| `CAMPAIGN_TRADING_INCENTIVE` 交易激励活动页 | [campaigns/trading-contest.md](campaigns/trading-contest.md) | 3 个活动（抽奖、达标、排名各 1） | `STRUCTURE_CANDIDATE`；骨架 5 项中 4 项 `CROSS_CASE_CONFIRMED` 3/3 |
| `LP_PRODUCT` 产品获客推广页（共用骨架） | [landing-pages/product-lp-common.md](landing-pages/product-lp-common.md) | 3 个产品、7 个版本 | `STRUCTURE_CANDIDATE`；共用骨架 `CROSS_CASE_CONFIRMED` 7/7 |
| └ ETF CFD | [landing-pages/etf-cfd-lp.md](landing-pages/etf-cfd-lp.md) | 3 版 | `STRUCTURE_CANDIDATE` |
| └ 原油 CFD | [landing-pages/oil-cfd-lp.md](landing-pages/oil-cfd-lp.md) | 2 版 | `STRUCTURE_CANDIDATE` |
| └ Copy Trading | [landing-pages/copy-trading-lp.md](landing-pages/copy-trading-lp.md) | 2 版 | `STRUCTURE_CANDIDATE` |
| `LP_FORM_IN_HERO` 首屏表单推广页（usstocks） | [landing-pages/us-stocks-form-lp.md](landing-pages/us-stocks-form-lp.md) | 1 份代码 | `SINGLE_CASE_CANDIDATE`，不进入默认选型 |
| `WEB_PRODUCT` 官网产品页 | [website/product-page-us-stocks.md](website/product-page-us-stocks.md) | 1 版设计图 | `SINGLE_CASE_CANDIDATE` |
| 官网品牌页 | — | 0 | 仓库无原始资料，未建文件 |

辅助文件：[cross-case-module-map.md](cross-case-module-map.md)（通用模块与 Variant 对照）、[structure-exceptions.md](structure-exceptions.md)（未决差异、证据缺口、Override 登记）。

## 3. 使用方法（所有 Agent 相同；本章仍为候选规则）

> **GPT 复审 2026-11-13**：[原始源码/locale 交叉复审与已知缺口](review-2026-11-13.md)。下文的 Required、固定顺序、不得新增等，描述的是 **Claude 历史案例的推荐基线**，除用户另有明确批准外，**不是全局强制模块数**。当前无 `STRUCTURE_LOCKED`。请先读 [PM 内容取舍门槛](../../pm/methods/page-logic-and-content-scope.md) 与 [方案放弃/纠错机制](../../pm/methods/decision-tradeoffs-and-correction.md)。

1. **识别 Page Type**。按下表判断；判断不了先按 `NO_MATCH` 做需求/用户路径和最低成本研究；只有关键业务约束确实缺失才询问需求方，不要硬套最接近模板。

| 需求特征 | Page Type |
|---|---|
| 有活动期、有奖品或奖金、需要活动规则 | `CAMPAIGN_TRADING_INCENTIVE` |
| 单一产品、广告流量、独立推广域名、目标是注册 | `LP_PRODUCT`，再读产品分册；没有分册的新产品只读共用骨架 |
| 主站产品频道页，需要报价、FAQ 等完整信息 | `WEB_PRODUCT`（单例候选，需补对照案例） |
| 以上都不符合 | `NO_MATCH`：走 `AGENTS.md` 的常规 PM 流程，并把结果作为新类型候选登记到 `structure-exceptions.md` |

2. **读取对应结构文件**的 B（历史模块结构）、C（模块标准表）、E（候选使用建议）；以 GPT 复审的证据边界为准，不把标题中的“锁定规则”误读为已锁定。
3. **优先参考适用骨架**：如果项目有用户明确确认的 `STRUCTURE_LOCKED`，在其范围内遵守模块与顺序；若只有 `STRUCTURE_CANDIDATE`，将 Required/Conditional/Optional 当作**历史推荐**，先检验当前用户任务和必要事实，允许依据取舍增减，但需要简短理由。
4. **只更新内容**：文案、图片与视觉、真实数据、必要的交互细节、语言与市场替换。各文件 C 表的"可变"栏列出了可以自由变化的部分。
5. **不为完整感新增模块**。行业常见或视觉好看不是充分理由；先查 [模块变体](cross-case-module-map.md) 并做 MODULE_ADMISSION_GATE。如果确有新业务机制/不同入口、用户认知缺口或必要披露无法在现有槽位正确处理，可以提出 Structure Override 和取舍记录。
6. **有实质结构偏离时记录 Structure Override**（模板见 §5），写清新问题、原有模块为何不能承接、放弃的收益/成本与撤销条件。对于尚未锁定的候选结构，Override 属当前项目的决策记录，不是禁止设计先探索。
7. **未经用户确认的 Override 不得成为全局锁定标准**。项目级记录实际决定及其证据。多个有独立来源的项目重复出现同一变化后，再提请用户确定是否修订候选骨架。

**模块增删的三档处理**

| 情况 | 处理 |
|---|---|
| 启用该类型已观察到的 Optional 模块，或在 Conditional 模块的条件内做选择 | 在项目 brief 写明业务条件即可 |
| 相对已锁定骨架的新增/删除/调序，或候选骨架的实质偏离 | 先记录 Structure Override 与真实用户/业务原因；改变用户已批准的骨架必须用户确认。候选骨架的变化可作为项目提案，不得自封为新规则 |
| 系统级组件与适用法律/产品事实（Header、Footer、表单、监管/风险、活动规则、数据脚注） | 由实际站点架构、市场、实体和获批产品/活动条件决定；**不能因历史缺失就省略必要披露，也不能认为每种页面都必须显示相同监管条** |

## 4. 状态标签

| 标签 | 含义 |
|---|---|
| `SOURCE_OBSERVED` | 在原始设计图或代码中确实存在。标注出现在哪些案例 |
| `CROSS_CASE_CONFIRMED` | 同一页面类型的多个案例都支持，写明比例。同一产品的 A/B 版本共用模板，所以会同时写"版本数"与"产品数" |
| `STRUCTURE_CANDIDATE` | 来自历史案例或 PM 推导的推荐基线；可用于优先参考，**非硬性上限** |
| `GPT_REVIEWED_CANDIDATE` | GPT 核对了部分源码/locale 与报告，记录修正与限制；不等于用户批准或线上验证 |
| `STRUCTURE_LOCKED` | 用户明确确认后才可使用。**目前没有** |
| `SINGLE_CASE_CANDIDATE` | 只有 1 个案例，不得当作跨案例标准 |
| `ANALYST_INFERENCE` | 对模块职责、用户意图、业务原因的推断，不是事实 |
| `LIVE_NOT_VERIFIED` | 未与线上页面核对 |
| `REPORT_DERIVED` | 引自 `asset-review/` 既有报告，本轮未重读原文件 |

## 5. Structure Override 模板

```markdown
## Structure Override · <项目 slug> · <日期>
- Page Type / 结构文件：
- 调整类型：新增 / 删除 / 调序 / 跨类型搬运
- 涉及模块：
- 业务原因（来自需求方的事实，不是推断）：
- 要解决的用户问题：
- 原有哪个模块最接近，为什么承担不了这个职责：
- 是否可以作为已有模块的 Variant 实现（查 cross-case-module-map.md）：
- 对页面长度和主转化路径的影响：
- 证据或参考：
- 状态：PROPOSED / USER_APPROVED（附确认原话与日期）/ REJECTED
- 适用范围：仅本项目 / 提请修订结构规范
```

## 6. 三个直接问题的回答

**明天做一个新主题的交易激励活动**
用 `Hero + 内嵌注册表单 → 奖品 →（机制档位或排行榜，按机制决定）→ 3 步参与 → 活动规则 → 版权与风险提示`。先确定是抽奖、达标还是排名。活动名、主视觉、日期、奖品、门槛、规则条款全部是内容替换。不加倒计时、FAQ、产品介绍、往期获奖。About EBC 和页尾 CTA 横幅各只有 1 例，默认不加。

**明天做一个新的 ETF 推广页（或其他产品推广页）**
可先参考历史 `Hero → 合适的信任/监管证据 → 约 3 个正文角色位 → 收尾/开户步骤（适用时）→ 适用法律披露`，CTA/表单按本次真实业务确认。三个正文位是 **7 个历史版本一致的起点**，不是所有产品的最优上限；当前没活动就删除/替换相应内容，不能为凑数增加“为什么选择 EBC”。Hero 是否换行、监管条/品牌合作是否出现，由当前用户路径、市场实体与实际模板版本确定。

**明天做一个新的官网产品页**
目前只有美股 1 个设计图可参考：`主站导航 → Hero → 产品分类切换 → 主题标的 → 分类榜单 → 报价表 → 三步开户 → FAQ → 品牌与留资表单 → 主站页脚`。这是单例，使用时要标注，并先补一个现有官网产品页做对照。

**什么时候允许调整结构**
当真实用户任务、活动机制、流量入口、重要交易/奖品资格或适用法律要求现有模块承担不了时。**已锁定**骨架的变更由用户确认；**未锁定**候选先有据形成项目方案和取舍记录，不强制一律停工问人。

## 7. 证据口径

- 结构与文案以代码或线上为准，视觉以设计图为参考；两者冲突时在文件中写明。
- 本轮读取：活动页 3 例的 PC 与 Mobile 设计图、`+Page.vue`、locale；产品 LP 7 版与 `usstocks` 的 `+Page.vue`；LP 的 PC 设计图 7 张、Mobile 设计图 3 张；官网美股 PC 与 Mobile 设计图；`asset-review/` 既有报告。
- Claude 初次整理时未取得：3 个活动页线上内容；LP 与 `usstocks` locale；共享组件源码。**GPT 2026-11-13 已直接复读七份 LP 的中文 locale 和 US-X 中文 locale**；其他语言的逐条核对、共享组件与活动线上内容仍未完成。详见 `review-2026-11-13.md` 与 EX-17。
- 没有任何转化数据。本规范描述的是"历史上怎么做的"，不证明"这样做效果最好"。
