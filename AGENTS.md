# EBC Page System — 跨模型 Agent 工作约定（Living v0.1）

> 适用：GPT / Codex / Claude Code / Gemini / Cursor / 其他可读取本 Git 仓库的 Agent。
> 当前默认分支：`main`，供真实项目持续生产和迭代；**并非 EBC 全部正式 SOP 已批准**。
> 最高目标：减少人工在需求、调研、用户心理、文案、页面策略上的反复返工。**PM 的深度判断优先于视觉或代码产出速度。**

## 0. 先确认你看到的仓库（极速入口见 [START-HERE-FAST-TRACK.md](START-HERE-FAST-TRACK.md)）
**最快启动**：先读 **[START-HERE-FAST-TRACK.md](START-HERE-FAST-TRACK.md)** 按页面类型直接路由到 3–4 份必读文件 + 必看真实截图，避免全库乱读。
核心必读基础：`README.md`、本文件、**`content/facts/current-facts-and-bans.md`（事实与文案红线总表）**、`pm/README.md`、`pm/operating-system/iterative-pm-engine.md`。
按页面类型再读取：
- PM 主能力：`.claude/skills/pm-page-strategy/SKILL.md`（非 Claude Agent 也可当成通用文本协议）
- 文案与卖点：`content/facts/current-facts-and-bans.md`、**`content/selling-points/ebc-selling-points-library.md`（模块化卖点积木与受众/落位智能决策矩阵）**、`content/rules/review-rubric.md`（含 `LP_BLOAT_FAIL` 否决）、`content/corpus/decision-index.csv`、`.claude/skills/ebc-copy-evidence/SKILL.md`
- 页面结构：`research/page-structures/README.md`、**`research/page-structures/matching-and-hero-contract.md`（每个新网页必读）**、适用 Page Type 分册（`LP_PRODUCT` 读 `product-lp-common.md` 并**必看 `etf/B` 与 `oil/B` 原图**）、`research/page-structures/review-2026-11-13.md`
- 外部基准研究：`research/README.md`、`.claude/skills/ebc-reference-discovery/SKILL.md`
- 设计与代码交付：`design/README.md`、**`design/foundations/apple-ui-component-spec.md`（v0.7 强制前端基础规范：Apple.com 级字体/字重/纯净色彩/卡片/分割线/实心按钮/1.5px 线性 Icon/紧凑 PC 高度/无逗号两行标题/纯视觉 3D Hero）**、`design/foundations/tokens-apple-ui.css`、`design/foundations/tokens-lp.css`、`design/patterns/code-delivery-contract.md`、`design/assets/README.md`、`.claude/skills/ebc-web-design/SKILL.md`
- 历史源证据：`sources/INDEX.md`、`asset-review/00-HANDOFF-FOR-GPT.md`、`cases/`、`insights/`，按需读取目标版本。

**不要一次把整个仓库 230+ 文件塞进模型上下文。** 读取目录/索引 → 选择 1–3 个相关页面 → 进入文件与证据。

## 0B. 双模式执行开关、必看截图门禁与开工回执（v0.5 · 2026-11-20）
> 根因：历史实测显示 Codex / Claude / Gemini 在未锁模式下均易把常规投放 LP 写成“2000 字白底产品说明书”。**必须先定模式，再定自由度。**

1. **先判执行模式（未明确要求大改版时，LP/活动页一律走 Mode 1）**：
   - **`Mode 1 · STANDARD_PRODUCTION`（成熟类型快产，默认用于 `LP_PRODUCT` 与常规 `CAMPAIGN_TRADING_INCENTIVE`）**：结构骨架、内容密度预算与 EBC 投放视觉皮肤直接继承现行基线（`LP_PRODUCT` 已由用户 2026-11-20 确认为 `DEFAULT_PRODUCTION_BASELINE`）。PM 五节点循环照常运行，但深度推演只留在 `pm-decision.md` 用来锤炼买点、反证与合规底线——**严禁把分析过程、长篇科普、机制账本或 FAQ 泄漏进页面 UI，严禁自行把投放 LP 改画成浅白文章流**。
   - **`Mode 2 · EXPLORATORY_REDESIGN`（探索/改版，用于官网新频道、品牌页、内部平台或用户明确提出大改版）**：才解锁多结构竞争、双方向 Art Direction 探索与跨行业参考升级。
2. **必看视觉基准截图门禁（Visual Reference Gate）**：凡涉及 `LP_PRODUCT` 或 `CAMPAIGN` 的文案与页面制作，动工前**必须用视觉能力实际读取至少 1–2 张对应历史设计图**（产品 LP 必看 `sources/landing-pages/etf/B/design/pc.png` 与 `sources/landing-pages/oil/B/design/pc.png`；活动页必看 `sources/campaigns/trading-contest/case-01/PC设计图.png`），不得只看文字结构表盲写密度。环境无看图能力时标 `VISUAL_REF_UNREAD` 并严格执行字数硬尺。
3. **10 行开工回执（Pre-Flight Contract）**：输出正式方案或写第一行代码前，先在项目文档/回复顶部列出 4 项可核查回执：`① 执行模式（Mode 1 / Mode 2）`、`② 已实际读取的基准截图路径`、`③ 本页字数与模块密度预算（LP 默认主文案 250–450 字、Hero 左侧 ≤ 3 元素、正文位禁嵌套子模块）`、`④ 本次引用的文案决策卡 ID`。

## 0A. 必须遵守：中文主稿与市场条件分开
- 默认用中文执行 PM D/R/U/C/S、确认中文 Copy Sheet、审查中文版 Demo；翻译是之后独立的 Localization 任务，不为普通中文工作提前生成多语种译稿。
- **中文工作语言 ≠ 中国市场用户**。当需求明确是日本等特定本地市场时，先在 Research/User/Strategy 阶段读取该市场现有规范与真实当地行业样本，再用中文形成项目方案；缺本地规范时自主研究并标注假设，绝不套用中国用户画像。
- 翻译时以获批中文语义、Copy ID、事实及行动目标为源，做目标市场自然表达的本地化改写，**禁止机械直译**；必要时回流 PM/Copy 解决语义变化。
- 通用页面逻辑、视觉栅格与组件默认复用，只对真实地区差异做局部 Market/Design Override，不能每个语种从零设计。
- 规则入口：[localization/chinese-first-and-market-overrides.md](localization/chinese-first-and-market-overrides.md)。还没进入翻译阶段时，术语 CSV 缺失不得阻塞中文生产。

## 1. PM 是可返回的五个独立循环，不是线性报告
D 需求 → R 研究 → U 用户决策心理和多路径模拟 → C 文案 → S 方案，是可双向回退的工作网络。
对新页面每个节点至少一次**具体初版 → 找反例 → 核对证据 → 实质修订 → 再审核**，有新的矛盾可以返回前一节点。
每一轮必须说清：**改变了哪条判断、为什么、依据是什么**。两次修改仍是同义替换或模板复写属于 STAGNATION，应改研究问题并寻找新参考。
可以针对短文案做 QUICK，但不能省略最关键的反证和修改。
每个节点的检查仅评估可观察产物，不假装暴露模型私有思维。

### 最终 PM 决策包
1. 要解决的实际问题、目标读者与渠道；
2. 市场和行业证据（观察/推断/未知分开，注明来源）；
3. 2–3 种用户情境：顺畅、犹豫、误解/退出；CTA 后续动作；
4. 完整的关键文案与替代策略；H1 / 副标题 / CTA 各自的信息职责；
5. 真正不同的解决策略及**主动放弃/延后项**；已有锁定骨架时可以在同结构内比较信息、证据、CTA、Variant；各模块必须回答真正用户问题；
6. **纠错触发**：新产品事实、用户意见或实际数据在什么情况下会推翻目前判断；
7. V1→V2 的**具体修订记录**、剩余假设、需要测试的点。
**一份只列模块名称和漂亮标题的方案不合格。**

## 1A. 页面结构、取舍与纠错机制（2026-11-20 v0.5 更新）

- 网页/LP/Campaign 先分别判断 **`PAGE_FAMILY`（用途）、`CAMPAIGN_MECHANIC`（机制）、`HERO_CONVERSION`（首屏表单/CTA 及其目标）**、进入路径、用户决策任务及执行模式（`Mode 1` / `Mode 2`）。读取 [Page Structure System](research/page-structures/README.md) 和 [GPT 跨案例复审](research/page-structures/review-2026-11-13.md)。其中 **`LP_PRODUCT` 已确认为 `DEFAULT_PRODUCTION_BASELINE`（常规产品投放默认基线）**；其余类型（`CAMPAIGN` / `WEB_PRODUCT` / `US-X`）仍为候选，非强制锁死。
- **先自动匹配结构库**：在 `Mode 1` 下直接沿用 `LP_PRODUCT` 默认生产基线及其密度硬尺（见 `research/page-structures/landing-pages/product-lp-common.md` §E），只替换主题、买点、真实数据与主视觉；确有业务例外时再提交 Structure Override。**不能因 Hero 用 CTA 就把交易赛分类成产品推广 LP**。历史 Campaign 3/3 在 PC Hero 右侧内嵌注册表单，作为用户未指定时的默认候选；若用户明确要求 Hero CTA，直接改为按钮并按真实目标弹窗/跳转，**无需再生成右侧表单**。官网主站页未要求表单时不复制这一模式。
- **反说明书硬控**：PM 深度思考留在 `pm-decision.md`；进入 LP UI 前必须通过 `content/rules/review-rubric.md` 的 `LP_BLOAT_FAIL` 检查（整页主文案 250–450 字、每张功能卡 1 标题 + 1 短句 ≤ 16 字、正文槽位不嵌套 FAQ/账本）。
- **新增内容准入**：它解决哪个当前用户未获回答的重要问题？现有模块/Variant 为什么无法承接？是否有真实数据/事实？若删除、合并、下沉、跳转，会造成什么具体信息缺口？见 [Page Logic & Content Scope](pm/methods/page-logic-and-content-scope.md)。
- **必要信息与轻量边界**：落地页保留简洁单行风险/产品性质脚注即可，不做重型合规审查，绝不借“完整合规”之名堆砌长篇说明书或束缚营销表达。
- **方案必须取舍**：比较真正不同的策略，不为凑两个结构而增加屏。最终标明 `CHOSEN / REJECTED / SACRIFICE / FAILURE CONDITION`，说明主动放弃/推迟什么，以及何种新证据必须回到 PM 纠错。见 [Tradeoffs & Correction](pm/methods/decision-tradeoffs-and-correction.md)。
- **权限边界**：`DEFAULT_PRODUCTION_BASELINE`（当前 `LP_PRODUCT`）与用户明确锁定的结构在常规生产中默认遵守；特殊业务变化走 Structure Override 并确认。历史候选可做本项目有据调整，但 Agent 不能自动将其他候选升格为用户已批准规范。
- 视觉采用**双轨分流**：官网/品牌页/工具平台（`Mode 2`）采用 Apple-inspired 浅色基线并鼓励大胆创作；投放 LP（`Mode 1`）默认继承 EBC 现行投放视觉皮肤（深酒红黑渐变 Hero + 融合监管条 + 深浅交替短卡 + 吸底条），未经要求不改成浅白文章流。设计/代码无权因排版私自改业务事实/锁定文案。

## 2. 优先内部证据，但不能困在已有标准
先查询 EBC 用户已审稿文案、同页面案例、源代码与官方事实。
出现 NO_MATCH / LOW_CONFIDENCE / CONFLICT / STAGNATION / NOVEL_PROBLEM / HIGH_IMPACT 时，调用共同外部研究技能：
**先 EBC 官网与已核实自有 Campaign/LP → CFD/Forex/券商 → 数字货币交易平台 → 更广金融行业 → 仍有缺口才查科技/其他行业。**
必须抓可访问的真实页面文本，并优先比较**同任务页面纵向模块分布、Hero 右侧表单 vs CTA、注册/报名行为和重要规则的位置**；若当前 Agent 有浏览器截图能力，还应采集 PC/Mobile 整页和关键区块截图，分析信息放在哪里、视觉权重、CTA 交互和用户路径。
**没有截图就标 `TEXT_ONLY_VISUAL_PENDING`，不能凭 HTML 想象网页视觉。**
借鉴的是信息机制、页面任务和决策逻辑，不是第三方品牌素材、完整代码或逐字广告文案。
研究最后必须使 D/R/U/C/S/Design 的一项产物发生**可说明的修订**，不只是写“参考了 Apple”。**如果 EBC 已有结构足够且用户需求相容，就不强迫进行跨行业检索**；研究发现的额外模块仍需通过 `MODULE_ADMISSION_GATE`。

## 3. 文案证据与用户审稿状态
- `USER_CONFIRMED_IN_CHAT`：只在有明确原话与场景时适用；对话历史缺失则不猜。
- `USER_POSITIVE_DIRECTION`：认可方向，不等于最终稿。
- `LIVE_OBSERVED` / `CODE_OBSERVED`：曾经可见，不代表批准、更不代表 A/B 胜出。
- `HYPOTHESIS` / `SIMULATION`：合理模型，不是真实访谈或 CVR 数据。
文案具体评审按 `content/rules/review-rubric.md`：四项硬性否决和八维有理由的审查。不要用“克制、专业、高级、Apple 风格”替代解释。
**历史项目文案若需修改，不能因缺聊天证据就擅自补造用户曾拒绝/批准的句子。**

## 4. 设计与开发：主张对齐，工程组件化
- 重大新设计/视觉改版必须读取 `design/methods/visual-direction-and-iteration.md` 和 `design/qa/visual-quality-scorecard.md`，执行 **Art Direction → 实际渲染截图 → 独立视觉批评 → 实质修订**。工程/交互测试全通过不代表视觉满足用户审美；没有截图不能宣称完成视觉审查。
- 视觉默认采用 `design/` 的 Apple-inspired EBC **候选**参数，保持真实品牌和适用的 FC Barcelona 合作标识；具体图片/Logo 权限以可用官方素材为准。
- 网页/LP 页面类型不同，不能一律用 3D Hero、固定屏数、字数或组件排列。
- Design / Dev 不得为了排版方便擅改确认的产品事实或 PM 文案；应将冲突返回 PM/Copy。
- 实现可用可复用组件、语义 HTML、响应式与基本 a11y；能交互的按钮应真正执行或明确标为 Demo 模拟。
- Figma 不是强制步骤。需要代码 Demo 时优先给可运行的结果，避免只输出伪截图。
- 没有真实 API/凭证时不得编造生产数据或私自放入 Token。不要把真实客户信息写进仓库。

## 5. 轻量事实核查与发布边界
合规检查仅限于**基础事实核对**（不编造/写错监管牌照号与实体归属、不把 CFD 写成实股、不复用已过期活动、不造假实时行情），**不做重型全方位合规审查，也不限制 Agent 的营销文案与创意发挥**；具体合规尺度由用户基于 Demo 实际效果直接审查把关。
`Demo` ≠ `Ready for Production`。正式上线由用户团队按实际流程完成审批、接口对接与发布。

## 5A. 不同 AI / Agent 的交接与单一事实来源
任何跨 GPT、Claude Desktop、Gemini、Grok、Cursor 的任务切换，统一执行 [跨 Agent 交接协议](agents/cross-agent-handoff.md)，使用 `projects/<slug>/handoff.md`（[模板](projects/HANDOFF-TEMPLATE.md)）记录**当前任务、Git commit/版本、已确认中文文案、允许改动范围、必读文件、验收条件和回流位置**。
项目的 `brief.md`、`pm-decision.md`、`copy-sheet.md` 是当前协作的事实/决定来源；`runs/<agent>-<date>/` 是独立建议区，不能自动覆盖锁定稿。接收方要验证版本和权限，遇到旧快照标 `STALE_HANDOFF`；无法访问仓库不能假装已经读取。不同 AI 没有天然的自动对话同步，必须通过真实共享文件/连接器/用户交接完成。
**中文文案确认后应冻结该版本的语义与 Copy ID；设计/开发发现逻辑问题时返回 PM/Copy，不私自改稿。**

## 6. 真实项目与多模型对比必须保留可验证的证据
先阅读 [真实项目执行指南](PILOT.md)。需要跨模型比较时再使用 [评估表](pilot/EVALUATION.md)。
同一任务使用相同用户 Brief、已知资料、仓库分支和目标页状态；记录 Agent/模型、能否浏览器截图、是否读取正确资料、PM 循环/反证是否真的改变版本、Copy/Design/代码结果。
不要求模型大量展示内部思考；要的是**可以复核的输出、差异、引用和产物**。
若工具缺失可如实降级，但不得伪装已执行。

## 7. 持续生产、修改与迭代边界
- `main` 始终是**最新可用工作基线**；正常从 `main` 开始处理需求，并使用 `projects/<slug>/` 保存真实产物。参见 [项目目录](projects/README.md)。
- 需求、文案、方案的每次重要修订记录到项目 `iterations.md`；可复用规则/Skill 的重大修改记录到 [iterations/](iterations/README.md) 和 [CHANGELOG.md](CHANGELOG.md)，说明为什么改、证据、V1→V2、适用范围与验证结果。
- 允许持续改进，**不因为这是首次真实测试而冻结所有规则**。重要的共享规则、跨多个项目的结构修改优先从 `main` 开短分支并以 PR 合入，保证可追溯、可回滚；少量项目工作记录可按实际权限直接提交。
- 不覆盖 `sources/` 历史原始文件，不把未核实假设提升为批准规则。不同模型做同一任务时各留独立产物，再人工合并有证据的优秀方案。
- 真实 EBC 官网上线与知识仓库文档更新是不同活动；没有明确授权不得部署正式网站。
