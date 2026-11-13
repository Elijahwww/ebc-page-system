# EBC Page System — 跨模型 Agent 工作约定（Living v0.1）

> 适用：GPT / Codex / Claude Code / Gemini / Cursor / 其他可读取本 Git 仓库的 Agent。
> 当前默认分支：`main`，供真实项目持续生产和迭代；**并非 EBC 全部正式 SOP 已批准**。
> 最高目标：减少人工在需求、调研、用户心理、文案、页面策略上的反复返工。**PM 的深度判断优先于视觉或代码产出速度。**

## 0. 先确认你看到的仓库
必须先读取：`README.md`、本文件、`pm/README.md`、`pm/operating-system/iterative-pm-engine.md`。
新建网页需求再读取：
- PM 主能力：`.claude/skills/pm-page-strategy/SKILL.md`（非 Claude Agent 也可当成通用文本协议）
- 文案：`content/README.md`、`content/corpus/decision-index.csv`、`content/rules/review-rubric.md`、`.claude/skills/ebc-copy-evidence/SKILL.md`
- 页面结构：`research/page-structures/README.md`、**`research/page-structures/matching-and-hero-contract.md`（每个新网页必读）**、适用 Page Type 分册、`research/page-structures/review-2026-11-13.md`；按需读 `pm/methods/page-logic-and-content-scope.md` 与 `pm/methods/decision-tradeoffs-and-correction.md`
- 外部基准研究：`research/README.md`、`.claude/skills/ebc-reference-discovery/SKILL.md`
- 设计与实现：`design/README.md`、`design/foundations/tokens.css`、`.claude/skills/ebc-web-design/SKILL.md`
- 历史源证据：`sources/INDEX.md`、`asset-review/00-HANDOFF-FOR-GPT.md`、`cases/`、`insights/`，按需读取目标版本。

**不要一次把整个仓库 230+ 文件塞进模型上下文。** 读取目录/索引 → 选择 1–3 个相关页面 → 进入文件与证据。

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

## 1A. 页面结构、取舍与纠错机制（2026-11-13）

- 网页/LP/Campaign 先分别判断 **`PAGE_FAMILY`（用途）、`CAMPAIGN_MECHANIC`（机制）、`HERO_CONVERSION`（首屏表单/CTA 及其目标）**、进入路径、用户决策任务及结构是否已获**用户明确确认**。读取 [Page Structure System](research/page-structures/README.md) 和 [GPT 跨案例复审](research/page-structures/review-2026-11-13.md)。**当前十份结构报告均为候选，没有 `STRUCTURE_LOCKED`。**
- **先自动匹配结构库**：按用户指定页面用途/机制找已批准同类型骨架（若有），否则找结构候选，校验与用户新规则/市场/入口是否相符；**不能因 Hero 用 CTA 就把交易赛分类成产品推广 LP**。历史 Campaign 3/3 在 PC Hero 右侧内嵌注册表单，作为用户未指定时的默认候选；若用户明确要求 Hero CTA，直接改为按钮并按真实目标弹窗/跳转，**无需再生成右侧表单**。官网主站页未要求表单时不复制这一模式。
- 历史模板可先用作**起点**，但不是必填或最多屏数。ETF/OIL/跟单七版均三正文位，只代表三个产品家族的历史写法；抽奖/达标/排名活动用同一骨架变体，不给每场硬加排行榜。
- **新增内容准入**：它解决哪个当前用户未获回答的重要问题？现有模块/Variant 为什么无法承接？是否有真实数据/事实？若删除、合并、下沉、跳转，会造成什么具体信息缺口？见 [Page Logic & Content Scope](pm/methods/page-logic-and-content-scope.md)。
- **必要内容完整性**：不可为了让页面短而丢失活动资格、真实获奖条件、重要交易风险、产品性质、地区/实体信息或其他适用披露。相反，不能为了“完美全面”生成与本次任务无关的品牌、FAQ、榜单、教育屏。
- **方案必须取舍**：比较真正不同的策略，不为凑两个结构而增加屏。最终标明 `CHOSEN / REJECTED / SACRIFICE / FAILURE CONDITION`，说明主动放弃/推迟什么，以及何种新证据必须回到 PM 纠错。见 [Tradeoffs & Correction](pm/methods/decision-tradeoffs-and-correction.md)。
- **权限边界**：用户明确锁定的结构在其项目/适用市场范围内应按模块职责执行；特殊业务变化走 Structure Override 并确认。历史候选可做本项目有据调整，但 Agent 不能自动将候选升格为用户已批准规范。
- PM 结构只定义信息责任与必要用户路径；视觉可大胆创作，不强制历史配色、卡片/版式或固定行数。设计/代码无权因排版私自改业务事实/锁定文案。

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

## 5. 一期合规和发布边界
第一期不做冗长合规审批，但应确保 EBC、监管/实体、产品性质、交易状态、费率/数字/收益等事实不被写错或误导；必要风险披露仍需清楚保留。
`Demo` ≠ `Ready for Production`。正式上线还需按当前公司实际要求完成审批、注册/数据流/语言/归因与 QA。

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
