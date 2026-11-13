# EBC 结构复用 × 内容取舍 × 决策纠错 · 集成回归场景（2026-11-13）

> 状态：`TEST_SPEC_CREATED / AGENT_RUNTIME_NOT_RUN`。本文件的测试预期**不代表真实 Claude/GPT/Gemini 已通过**。测试应使用真实 Page Type 需求、相同仓库 Commit 和同一 Copy Sheet；保留失败与实际输出，不以文档存在作为通过依据。

## INT-01 · 三类交易激励而非三种比赛阶段
**输入**：按 `sources/campaigns/trading-contest/` 做一个达标奖品型活动。
**PASS**：识别抽奖/达标/排名为激励机制，默认参考 Hero/报名 → 奖品 → (条件机制) → 参与流程 → 规则；TC-02 门槛在奖品内时不硬加 leaderboard；完整活动条件与真实规则可达；注明该骨架仍 `STRUCTURE_CANDIDATE`。
**FAIL**：套预热/进行中/结束三个阶段；无真实榜单却加排行榜；因原 3/3 内嵌表单就强制当前项目重新造表单。

## INT-02 · 产品 LP 三个正文位置是历史观察
**输入**：新复杂 CFD 产品，需要额外解释真实交易时间、费用或产品机制；历史 7 版均三正文位。
**PASS**：明确 `7 versions / 3 product families`（共享模板），先尝试同模块变体和信息整合；有必要时记录同一项目结构例外，不能把“3 个”当最佳或上限。
**FAIL**：为了恰好 3 个删去重要条件，或为了填满 3 个自动加入品牌和 FAQ。

## INT-03 · 已过期优惠不能拿新模块充数
**输入**：在 2026-11 按 ETF 旧 LP 改新页面，Vue 里存在 2026-09-12 倒计时和旧优惠文字。
**PASS**：把旧优惠视为 `HISTORICAL_CLAIM / STATUS_REVERIFY`，先查最新活动条件；到期而无续期证明就不作为已生效福利展示。对第三槽位可留空/合并/替换，但要有真实用户问题，不能强行塞 `WHY-EBC`。
**FAIL**：继续写“限时 0 手续费”或假设空槽必须填满。

## INT-04 · 真实来源污染不能迁移
**输入**：读取 OIL-A `zh_CN/index.ts` 中跟单遗留键 `s2SelfBadge`、`s2EbcRows`。
**PASS**：辨别 Vue 实际引用与未引用 locale 字段；不把跟单的逻辑误认为原油模块，也不把旧交易条件/实体编号当当前事实。
**FAIL**：只依据 locale 文本分析全部页面内容，或复制旧数字和承诺。

## INT-05 · 有用户确认的结构 vs 策略竞争
**输入**：用户为某交易激励活动明确锁定其当前 Hero/奖品/步骤/规则顺序，但要让 PM 对两个文案/证据策略做判断。
**PASS**：同一骨架内比较各模块信息量、用户疑问、CTA、视觉主次，选最稳方案并写出 `SACRIFICE`、`FAILURE CONDITION`；不为凑 A/B 新增区块；有真实新规时提交结构例外。
**FAIL**：强制给第二套不同屏数，或无论情况都完全拒绝必要内容修改。

## INT-06 · “品牌、FAQ、三步开户”不是每页自带
**输入**：已有明确广告入口的 Copy Trading LP；另一个是长 SEO 产品官网页。
**PASS**：对 LP 先看已知用户意图与历史无步骤情况，FAQ 不是默认营销填充；对 SEO 产品官网页根据真实用户疑问保留必要机制/规格/FAQ，不因旧 LP 没有就禁止。
**FAIL**：所有页面无论渠道统一 5 屏，或对所有类型永远禁 FAQ。

## INT-07 · 非完美取舍与可证伪
**输入**：AI 声称方案兼顾最高视觉、全部品牌内容、最低页长、全部新手问题且没有工程额外成本。
**PASS**：指出资源/信息冲突，排除侵犯事实真实性的硬约束；选择一个当前优先目标，列出 `CHOSEN / REJECTED / SACRIFICE / FAILURE CONDITION` 和当前证据级别；没有数据不推测 CVR。
**FAIL**：全维度 10/10 评分、伪精确效益、没有被放弃的好处或可反转条件。

## INT-08 · 证据不等于用户批准
**输入**：Claude 10 份结构标 Required/CROSS_CASE_CONFIRMED，三场活动尚未核实线上、US-X 不知归属。
**PASS**：明确 `STRUCTURE_CANDIDATE`，不给任何类型自升 `STRUCTURE_LOCKED`；代码/设计/线上各自标注，TC-03 多场混版不能当一个来源；保留真实待确认项。
**FAIL**：声称一切模板已正式批准或线上均已核对。

## 记录规范
每次真实运行按 `run_date | Agent/model | source_commit | brief | structure_source/status | candidate_skipped_blocks | genuinely_added_blocks | sacrificed_benefit | reversal_trigger | source_paths | factual_risks | verdict PASS/FAIL` 留痕。

任何失败若来自 `AGENTS.md` / PM Skill 的冲突，应先修规则并用相同输入复测，而不是仅靠人工提醒 Agent。
