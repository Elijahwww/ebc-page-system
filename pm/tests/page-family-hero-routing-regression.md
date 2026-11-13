# Page Family × Campaign Mechanic × Hero Conversion 路由回归 · v0.4

> 测试规约已写入（`TEST_SPEC_CREATED`）；**没有真实调用 Claude/GPT/Gemini 独立执行，实际结果为 `AGENT_RUNTIME_NOT_RUN`**。运行时记录 Model、仓库 Commit、真实 Brief、文件读取证据与输出，不因文档写完宣称 PASS。

## ROUTE-01｜排名型交易大赛 + 已给主题规则，Hero 未指定
**输入**：“帮我做一个 EBC 实盘交易大赛 LP，主题是 X，规则按收益率排名领奖，参与账户/期限/奖品规则如下……”
**必须输出**：`PAGE_FAMILY=CAMPAIGN_TRADING_INCENTIVE`、`MECHANIC=RANKING`、`STRUCTURE_SOURCE=research/page-structures/campaigns/trading-contest.md`、`STRUCTURE_STATUS=STRUCTURE_CANDIDATE`，选择 Hero → 奖品 → **条件位排行榜** → 参与步骤 → 规则。默认可提出 `HERO_CONVERSION=EMBED_FORM_RIGHT_DESKTOP`（历史 3/3），但先检查真实注册/报名链及受众；移动端另适配。已有足够结构时，不强行调研所有行业。
**FAIL**：未查结构库就生出 FAQ/品牌/教育等整屏；未判断排名机制；把历史表单称为已获批准的强制标准；无真榜单接口却冒充实时数据。

## ROUTE-02｜交易大赛 + 明确 Hero 使用 CTA，不要表单
**输入**：“做一个独立交易大赛 LP，按收益率排名。Hero 只有 CTA 按钮，不要右侧表单。CTA 后续链接待 IT 对接。”
**必须输出**：`PAGE_FAMILY=CAMPAIGN_TRADING_INCENTIVE`、`MECHANIC=RANKING`，沿用适合的活动正文骨架；`HERO_CONVERSION=CTA_LINK` 或当前 Brief 确认的按钮模式；`CTA_DESTINATION_PENDING`，Hero PC/Mobile **均不生成表单**、不生成空的右侧 Form Card。**不因删掉 Form 而重新分类成产品 LP，不为“CTA 版本”强制做一套全新结构。**
**FAIL**：复用旧组件强制插入注册 Form / 把 CTA 指向不存在的 Hero 表单 / 虚构 Portal 链接 / 重问用户是否允许改成 CTA。

## ROUTE-03｜产品 LP 与官网主站默认 Hero
**输入 A**：“做一个新原油产品 SEM LP，用户没有指定 Hero 模式。”
**必须输出 A**：`LP_PRODUCT`；参考历史产品 LP 的 CTA→注册弹窗，但真实注册组件、当前目标市场和业务条件可覆盖；不能把 Campaign 的右表单当唯一方案。
**输入 B**：“做一个 ebc.com 官网关于我们页面，参考主站的品牌叙事。”
**必须输出 B**：`WEB_BRAND` / 待规范的新官网类型，不套 Campaign 内嵌 Form；主站 Header 和信息任务优先。没有已锁定结构时在 EBC 官网研究后再拓展，而非擅自将美股单例当品牌页模板。
**FAIL**：所有 Hero 都加右侧表单，或把有/无表单当 Page Type 的唯一分界。

## ROUTE-04｜EBC 不匹配时顺序研究
**输入**：“新的复杂交易奖励机制，EBC 历史候选无法承接；请调研同类页面如何分配模块。”
**必须输出**：先核 `sources/`、Page Structure 和 EBC **官方主站/已验证 Campaign/LP**（T0），不够再 CFD/Forex（T1）→ 数字货币交易平台（T2）→ 更广金融行业（T3）→ 有需要才科技（T4）。每例有 **真实 URL、可访问证据、按顺序的 MODULE_MAP、Hero 左右内容、Form/CTA 及去向、Mobile 规则位置**；没截图不假称已看实际左右布局；数字资产业务规则不复制给 CFD。
**FAIL**：直接用 Apple/Stripe “高级页面”代替同类 Campaign；跳过数字货币层且没有理由；只收集文案口号不抽模块；先生成 8 屏再倒找案例。

## ROUTE-05｜只改变 Hero 的用户明确要求，不动其他结构
**输入**：“同一个抽奖活动，奖品/机制/步骤/规则都不改，把原来 PC 右侧注册表单换成一个‘立即报名’ CTA，点击跳已确认的报名页。”
**必须输出**：`HERO_CONVERSION_OVERRIDE`，保留活动 Page Type、奖品/升级机制/步骤/规则顺序，只改变 CTA 方式、响应式主视觉布局与真实跳转。已有用户明确要求就不应以旧样本强迫再次审批；如涉及已锁定结构与变更授权要记录最新明确要求、版本及风险。
**FAIL**：把无表单等同于缺少注册能力、另外加一整屏注册模块，或自动把奖品/机制推倒重来。

## ROUTE-06｜相邻行业的存在不意味着新模块获准
**输入**：“数字货币平台对标发现很多活动页含实时榜单、奖金池、活动战报、用户评价；本次 EBC 达标领奖仅要求完成门槛。”
**必须输出**：T2 的结构证据只作候选，用 `MODULE_ADMISSION_GATE` 检查用户必要信息；无排名机制不添加榜单；数字平台的收益/代币主张和监管用语不能迁移；说明主动舍弃的信息及纠错条件。
**FAIL**：因竞品页面漂亮或很多模块而全部加进本次活动。

## 记录
`run_date | model/version | source_commit | prompt | pages actually read | source URLs/screenshots | page_family | mechanic | hero_mode | CTA_destination | matched_structure/status | actual_module_map | research_tiers_visited | reason_stopped | sacrificed_modules | facts_pending | PASS/FAIL`.

真实测试未运行时一律标 `NOT_RUN`，不能报告通过率。
