# EBC Page Structure System · 页面结构规范（候选）

> 状态：**`STRUCTURE_CANDIDATE`**，2026-11-13 由 Claude 依据 `sources/` 原始资料整理，待 GPT 跨案例复审与用户确认。
> **本目录目前没有任何 `STRUCTURE_LOCKED` 结构。** 在用户确认之前，这些文件是"默认建议"，不是强制标准。
> 本轮未修改 `sources/`、`AGENTS.md`、全局 PM / Copy / Design Skills。

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

## 3. 使用方法（所有 Agent 相同）

1. **识别 Page Type**。按下表判断；判断不了就停下来问需求方，不要选一个"最接近的"硬套。

| 需求特征 | Page Type |
|---|---|
| 有活动期、有奖品或奖金、需要活动规则 | `CAMPAIGN_TRADING_INCENTIVE` |
| 单一产品、广告流量、独立推广域名、目标是注册 | `LP_PRODUCT`，再读产品分册；没有分册的新产品只读共用骨架 |
| 主站产品频道页，需要报价、FAQ 等完整信息 | `WEB_PRODUCT`（单例候选，需补对照案例） |
| 以上都不符合 | `NO_MATCH`：走 `AGENTS.md` 的常规 PM 流程，并把结果作为新类型候选登记到 `structure-exceptions.md` |

2. **读取对应结构文件**的 B（标准模块结构）、C（模块标准表）、E（锁定规则）。
3. **默认沿用**该类型的模块组成与顺序。Required 模块全部保留；Conditional 模块按表内条件判断；Optional 模块默认不启用。
4. **只更新内容**：文案、图片与视觉、真实数据、必要的交互细节、语言与市场替换。各文件 C 表的"可变"栏列出了可以自由变化的部分。
5. **不自行新增模块**。"更完整""更有说服力""行业里常见"都不是理由。想加之前先查 [cross-case-module-map.md](cross-case-module-map.md)，确认它是不是某个已有模块的 Variant。
6. **确需调整结构时提交 Structure Override**（模板见 §5），写清原因、用户问题、原有模块为何承担不了。
7. **未经用户确认的 Override 不得成为标准**。它只对当前项目有效，登记在 `structure-exceptions.md`；多个项目重复出现同一 Override 时，再提请用户决定是否修订结构。

**模块增删的三档处理**

| 情况 | 处理 |
|---|---|
| 启用该类型已观察到的 Optional 模块，或在 Conditional 模块的条件内做选择 | 在项目 brief 写明业务条件即可 |
| 增加该类型从未出现过的模块、删除 Required 模块、调整固定顺序、跨类型搬运模块 | Structure Override，需用户确认 |
| 系统级与合规层（主站 Header / Footer、锚点导航、注册组件、风险提示、版权、监管条、活动规则、数据脚注） | AI 不得删除或改写。缺失时登记为缺口并上报，不当作可选项 |

## 4. 状态标签

| 标签 | 含义 |
|---|---|
| `SOURCE_OBSERVED` | 在原始设计图或代码中确实存在。标注出现在哪些案例 |
| `CROSS_CASE_CONFIRMED` | 同一页面类型的多个案例都支持，写明比例。同一产品的 A/B 版本共用模板，所以会同时写"版本数"与"产品数" |
| `STRUCTURE_CANDIDATE` | 本轮给出的推荐结构或规则，待审核 |
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
用 `Hero（两行 H1 + 一行副标题 + 一个 CTA）→ 监管条 → 3 个正文位 → 品牌合作 → 三步开户 → 版权与风险提示`，外加吸底 CTA 和注册弹窗。3 个正文位从"认知动机、产品优势、限时活动、平台信任"里按人群选 3 个：小白先讲为什么，已有认知的人群去掉这一段、改讲为什么选 EBC；限时活动只在活动有效时出现。正文模块数不超过 3。

**明天做一个新的官网产品页**
目前只有美股 1 个设计图可参考：`主站导航 → Hero → 产品分类切换 → 主题标的 → 分类榜单 → 报价表 → 三步开户 → FAQ → 品牌与留资表单 → 主站页脚`。这是单例，使用时要标注，并先补一个现有官网产品页做对照。

**什么时候允许调整结构**
业务机制本身不同（例如新的激励机制、新的转化目标、监管要求新增披露），并且现有模块及其 Variant 确实承担不了时。走 Structure Override，由用户确认。

## 7. 证据口径

- 结构与文案以代码或线上为准，视觉以设计图为参考；两者冲突时在文件中写明。
- 本轮读取：活动页 3 例的 PC 与 Mobile 设计图、`+Page.vue`、locale；产品 LP 7 版与 `usstocks` 的 `+Page.vue`；LP 的 PC 设计图 7 张、Mobile 设计图 3 张；官网美股 PC 与 Mobile 设计图；`asset-review/` 既有报告。
- 本轮未取得：3 个活动页的线上内容；LP 与 `usstocks` 的 locale 文件；全部共享组件源码。详见各文件 §F 与 `structure-exceptions.md` EX-17。
- 没有任何转化数据。本规范描述的是"历史上怎么做的"，不证明"这样做效果最好"。
