# 页面类型匹配、结构参考与 Hero 转化契约 · v0.4

> 状态：`OPERATING_METHOD_CANDIDATE` · 2026-11-13。适用 EBC 官网、SEM/社媒推广 LP、交易激励 Campaign 与其他独立营销页。**本文件是路由/判断方法，不把任何历史页面骨架升级为 `STRUCTURE_LOCKED`。**
>
> 用户的明确当次需求 > 有效的项目级确认稿 > 同类型历史结构候选 > 竞品结构观察。法律/平台真实限制、获批金融事实及必要披露不可因选择 Hero 形式而失效。

## 1. 分开识别三个维度（不要把表单和 Page Type 混为一谈）

| 维度 | 需要回答的问题 | 例子 |
|---|---|---|
| `PAGE_FAMILY` 页面用途 | 是官网主站产品/品牌页、产品广告 LP、独立 Campaign，还是其他？哪个目标市场/实体/流量渠道？ | `CAMPAIGN_TRADING_INCENTIVE`, `LP_PRODUCT`, `WEB_PRODUCT`, `WEB_BRAND`, `NO_MATCH` |
| `CAMPAIGN_MECHANIC` 业务机制（适用时） | 是按排名、达到门槛领奖、抽奖、组合机制还是新的业务玩法？ | `RANKING`, `QUALIFICATION`, `RAFFLE`, `HYBRID`, `OTHER`, `N/A` |
| `HERO_CONVERSION` 首屏行动形式 | 用户是否明确要求首屏右侧表单、单一 CTA、CTA→弹窗、CTA→页面锚点、CTA→外部平台，或只做信息介绍？ | `EMBED_FORM_RIGHT_DESKTOP`, `CTA_MODAL`, `CTA_ANCHOR`, `CTA_LINK`, `INFORMATIONAL` |

**同一种交易激励活动可以使用不同 Hero Conversion Variant，而不改变交易激励的 Page Type 或奖品/机制/规则等正文职责。** `LP_FORM_IN_HERO` 是历史 US-X 的来源标签/实现案例，**不应把“表单在 Hero”作为强制新建页面类型的唯一条件**。

## 2. 结构匹配执行次序（每次新页面任务执行）

1. **读取明确 Brief**：主题、规则、奖励和资格口径、目标市场/语言/法律实体、投放入口、业务目标、参与/报名路径、页面承载位置（主站/独立页）、Hero 形式（如给出）。已经提供的事实不再次重复询问。
2. **匹配目录**：先查询 `research/page-structures/README.md` 和对应细分文件，并参考 `sources/INDEX.md` / EBC 真实案例。优先级：
   - (a) 同 Page Family + 同目标任务 + 同机制，且有用户明确批准、范围仍适用的 `STRUCTURE_LOCKED`；
   - (b) 同 Page Family + 同机制/相近用户路径的 `STRUCTURE_CANDIDATE`（只作默认骨架）；
   - (c) EBC 不同机制/页面的相邻案例，仅借**有明确相同用户职责**的模块 Variant；
   - (d) `NO_MATCH` / 证据不足 / 用户路径明显不同：启动外部结构调研（见第 4 节）。
3. **选取并检查候选骨架**：逐模块核对真实用户问题、已给活动规则/资格、相同功能能否内嵌、增删门槛、适用风险/实体披露。与需求匹配度优先于案例出现次数。**不因 User 已提供具体主题+规则就自动把所有历史模块复制进页面**。
4. **独立决定 Hero Variant**（第 3 节）。如果用户直接指定首屏 CTA，**不能因三个 EBC 历史 Campaign 都用右表单便重建表单**。如果用户没说，已知 Campaign/广告 LP 的历史 PC 表单默认应进入候选建议，但需核渠道、真实注册业务、是否已有账户/活动报名入口；不把“默认”宣称必须如此。
5. **仅当实际信息架构不匹配时才提交 Structure Override**；从 `EMBED_FORM_RIGHT_DESKTOP` 换 `CTA_MODAL` 等属于首屏转化 Variant 选择，**通常是 HERO_CONVERSION_OVERRIDE，而不是自动重做整套页面骨架**。若用户已锁定包含转化链的具体项目，按照最新明确要求/确认权限记录变更与影响。
6. **输出结构合同（简短）**：`PAGE_FAMILY`、`MECHANIC`、`STRUCTURE_SOURCE`、`STRUCTURE_STATUS`、`HERO_CONVERSION` 与入口去向、模块顺序/条件位、必要风险/规则、是否需要额外研究、任何偏离原因、`CHOSEN/REJECTED/SACRIFICE/FAILURE CONDITION`。
7. 只有用户明确确认具体类型/范围/版本后才能标 `STRUCTURE_LOCKED`；`CROSS_CASE_CONFIRMED` 或竞品多次出现只说明“观察到一致性”，不证明“转化最优”或产生审批权。

## 3. Hero 转化模式判定（先遵守明确需求）

| 当前需求与页面场景 | 默认/可选 Hero Variant | 具体行为边界 |
|---|---|---|
| EBC **独立交易激励 Campaign/活动 LP**，没有指定首屏转化形态 | **候选默认：PC 右侧内嵌注册表单**（`EMBED_FORM_RIGHT_DESKTOP`；3/3 历史代码如此） | PC 左侧活动主题/奖励/日期 + 右侧表单；Mobile 用合理纵向布局，验证可用性。需要真实共享表单/目标市场支持；不是硬规则 |
| 任何活动页/LP **明确要求 Hero 只用 CTA 按钮** | 按 CTA 去向选 `CTA_MODAL` / `CTA_ANCHOR` / `CTA_LINK` | **不要再显示右侧表单、不可为了复用旧 Hero 硬塞空表单卡**；若 CTA 去向未确定，保留 `CTA_DESTINATION_PENDING`，不捏造真实注册链接/弹窗 |
| 活动页需要登录到 CRM/Client Portal 后报名 | `CTA_LINK` 或按业务配置入口 | CTA 可指向已批准的实际报名/登录地址；不要凭历史“新客注册”假设为所有访客生成注册表单 |
| 产品获客推广 LP，用户未指定 | 历史默认 `CTA_MODAL`（七版产品 LP），可按实际注册方式改为其他 Variant | 历史出现模式不是全局强制。首屏主行动、产品解释与必须的风险信息仍需清楚 |
| **官网主站产品/品牌页**，用户未要求注册表单 | `INFORMATIONAL` 或合适的主 CTA（如了解产品、开户、查看规格） | **不从活动 LP 直接复制 Hero 右侧表单**；沿用主站 Header/信息职责、实际站点转化组件。若当前页面明确要求表单，可作为需求特例 |
| 用户只说“独立活动页”但未指定 CTA / 表单 | 优先 Campaign 候选，根据注册/报名路径判断 | “独立”描述部署/用途，不代表用户要求使用 CTA；只有明确的动作约束才覆盖历史推荐 |

**重要**：没有 Hero 嵌入表单，不意味着页面不允许注册；可能经按钮跳到注册、报名、弹窗或登录。也不意味着可以删掉参与资格与活动规则。CTA 的点击行为、域名、后续身份验证、渠道归因等需要和真实系统一致。

## 4. 没有合适 EBC 结构时的定向调研顺序

结构调研优先级（`STRUCTURE_RESEARCH_LADDER`）：

- **T0 EBC 自有**：首先查 `sources/`、`research/page-structures/`、项目历史，以及**真实 EBC 官方网站/授权市场站点、Campaign/LP 实际页面**。区分“仓库历史代码”“已核实在线页面”“用户已批准结构”，优先当前同类型、同市场任务。官方域名/市场站点先验证归属与真实性，不能把未知域名当 EBC。
- **T1 Forex / CFD / 在线经纪及交易平台**：找**同一页面任务**（如交易大赛、交易激励、产品广告获客），优先能清楚看到 Hero 的 CTA/表单和正文顺序的官方真实页面。
- **T2 数字货币 / 加密资产交易平台**：同类型 Campaign、交易大赛、排行榜、任务激励与页面转化路径。重点学习**活动结构和交互机制**；不迁移代币、收益承诺、交易条件、奖励法律身份或其他与 CFD 不同的商业/监管规则。标 `TRANSFER_RISK`。
- **T3 更广的金融行业**：证券、资产管理、银行、投行、支付、Fintech 等；优先用户任务近似的活动/获客/产品页面。行业越远，结构参考权重越低，不能只因页面设计好看就全盘复制。
- **T4 更广的科技/跨行业**：仅当信息层级、视觉表达、互动、用户路径仍有清晰缺口时，再参考 Apple、Stripe、Google 等，明确迁移范围。

**逐级扩展，不是每次完整五层研究。** 若 T0 结构足够并且与本次规则和 Hero 指定相容，直接给 EBC 结构合同；若不够，逐层找高质量对照后停在能回答当前缺口的位置。需求方明确要求全行业研究时可继续，但不为凑案例数增加研究。某层找不到可访问同类页，标 `NO_RELEVANT_SOURCE` 并继续，禁止编造样本。

每个参考至少记录：

`URL / 页面任务 / 国家语言 / SOURCE_TIER / ACCESS` + 按页面顺序的 `MODULE_MAP`，包括 `HERO_LEFT_CONTENT`、`HERO_RIGHT_CONTENT`、`FORM_OR_CTA_MODE`、`CTA_DESTINATION`、`PRIZES`、`MECHANISM`、`LEADERBOARD`、`STEPS`、`RULES`、`RISK_LEGAL`、模块新增职责、Desktop/Mobile 顺序与实际可见性。没有截图不能证明视觉位置；没有实测互动不能证明 CTA 去向。区分 `OBSERVED` 与 `INFERRED`，不要把样本的页面出现频次说成已证明最优。

**调研结果是证据，不是页面待办清单**。最终仅提炼可迁移的共同骨架/差异 Variant/模块职责，返回 D/R/U/S 决策，经过 `MODULE_ADMISSION_GATE` 才能成为本项目新模块。

## 5. 快速可验收场景

- **“新交易大赛 LP，给了主题和收益率排名规则”** → `PAGE_FAMILY=CAMPAIGN_TRADING_INCENTIVE`, `MECHANIC=RANKING`, 取交易激励候选骨架，奖品 → 排行榜条件位 → 参与步骤 → 规则；首屏注册形式根据是否明确指定和真实路径选，不凭历史排版强制；无真实榜单接口时标 `DATA_PENDING`，不假数据上线。
- **“新交易大赛 LP；Hero 只要一个 CTA 按钮，不要注册表单”** → 同一 Page Type/排名模块，`HERO_CONVERSION=CTA_*`，PC 右侧表单删除/不生成，CTA 去向按实际业务设置或标 `CTA_DESTINATION_PENDING`；无需为了去掉表单去换一整套 Campaign 结构，也无需为此搜索外部新骨架。
- **“官网产品页，提供了产品背景但没指定 Hero 注册方式”** → `WEB_PRODUCT` 的单例候选需补证据，默认不移植活动 LP 内嵌表单；如果信息架构证据不足先查 EBC 官网相应产品页，再按 T1→T2→T3 扩展。
