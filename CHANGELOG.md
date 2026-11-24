# EBC Page System · 版本与关键变化

## v0.10.0 · 2026-11-24 · 全量接入 EBC V14.1 官方卖点资产库与核准监管号表
- **完整替换入库（[content/selling-points/ebc-selling-points-library.md](content/selling-points/ebc-selling-points-library.md)）**：完整合入用户最新整理的 `EBC_Selling_Points_Library_V14_1.md`（A–L 共 12 个维度、55+ 独立编号卖点 + 22 条已确认品牌主张 + 来源页码索引），保留顶部「零、AI 智能选点与落位指南」矩阵，并自动关联 `design/assets/partners/` 官方成品合作卡路径。
- **同步基础事实速查卡（[content/facts/current-facts-and-bans.md](content/facts/current-facts-and-bans.md)）**：写入最新核准的四大监管实体与监管号唯一口径（FCA `927552` / ASIC `500991` / CIMA `2038223` / FSCA `51541`）及核心规模/执行/保障指标，消除旧版“待核验”冲突。
- **同步路由入口**：更新 [START-HERE-FAST-TRACK.md](START-HERE-FAST-TRACK.md) 至 `v0.10.0`。

## v0.9.1 · 2026-11-24 · 合规边界大幅轻量化（仅限基础事实核查，释放 Agent 创意发挥）
- **用户校准方向**：明确合规要求仅限于**基础事实防错**（不编造/写错监管牌照号与实体归属、不把 CFD 写成实股、不复用已过期优惠、不造假实时行情），**不做重型全方位法务/合规审批，也不在规则里长篇大论束缚 Agent 发挥**；具体合规细节由用户基于 Demo 实际效果直接审查把关。
- **规则瘦身**：精简 [content/facts/current-facts-and-bans.md](content/facts/current-facts-and-bans.md)（v0.7 基础事实速查卡）、[content/selling-points/ebc-selling-points-library.md](content/selling-points/ebc-selling-points-library.md)（v0.2，去掉冗余合规字段与审稿说教，简化为 5 行速填模板）、[AGENTS.md](AGENTS.md)（§1A、§5）、[content/rules/review-rubric.md](content/rules/review-rubric.md) 与 [START-HERE-FAST-TRACK.md](START-HERE-FAST-TRACK.md)。

## v0.9.0 · 2026-11-24 · 配图透明底/满出血融合铁律 & 模块化 EBC 卖点资产库（智能选点与落位）
- **配图透明底与满出血融合硬规（`apple-ui-component-spec.md`、`code-delivery-contract.md`）**：明确所有独立 3D 元素配图必须为**真正透明底 PNG（Alpha）且与卡片内文字/标签轴线建立明确对齐关系**，严禁把带黑色或纯色矩形底色的图片直接贴在卡片内露出方框边界；凡带完整背景的渲染/场景图，**只能作为整张卡片或整个模块的满出血背景（Full-Bleed `object-fit: cover`）彻底融合**，严禁孤立摆放。
- **新建模块化 EBC 卖点资产库（[content/selling-points/ebc-selling-points-library.md](content/selling-points/ebc-selling-points-library.md)）**：将监管、资金规范托管、TradingView、MT5、多空双向、多资产、全球合作伙伴与限时活动拆分为结构化卖点积木（含事实状态、适用受众、推荐落位、三档字数文案、关联素材、去重互斥规则），并附「受众 × 渠道 × 端别」智能落位矩阵（让 AI 自动判断放 Hero 底条/轮播还是放 B3 为什么选 EBC）与用户速填模板。
- **同步落地**：接入 `START-HERE-FAST-TRACK.md` 与 `AGENTS.md`，记录至 [ITER-20261124-010](iterations/2026-11-24-transparent-3d-and-selling-points-library-v0-9.md)；并按新规将 `projects/2026-11-us-stocks-nvda-lp` B1 主卡升级为真正满出血融合渲染（彻底消除内嵌黑框边界）。

## v0.8.0 · 2026-11-24 · 全站统一无衬线字体、1200px Apple 宽版心大呼吸、全幅 3D Hero、Bento 分层与标的品牌色规范
- **触发根因**：用户基于 `2026-11-us-stocks-nvda-lp` V2 手机与 PC 5 张实屏截图提出 5 项系统级校准，并要求**先改规则文件再执行页面**：① 手机端 Hero 过挤且监管条不再强制锁死在 Hero 底边，支持更大胆的全幅 Hero 背景图（核心视觉置于按钮下方）；② 卖点模块避免全黑白平铺单调，引入 Bento 主次分层、独立 3D 素材与微交互；③ 标的代码加入彩色品牌识别徽标，规定配图必须为无缝 3D 元素或满容器填充图（严禁左文右散图）；④ 全面禁用 `monospace`，公司代码、序号与数字统一 Apple 无衬线字体；⑤ PC 版心过窄（896px）且模块过扁，升级至 `1200px / 1320px` 宽版心与 `88px–116px` 舒展呼吸间距。
- **规则升级**：同步升级 `design/foundations/tokens-apple-ui.css`、`apple-ui-component-spec.md`、`tokens-lp.css`、`research/page-structures/landing-pages/product-lp-common.md`、`design/patterns/code-delivery-contract.md`，记录至 [ITER-20261124-009](iterations/2026-11-24-apple-bento-wide-canvas-and-typography-v0-8.md)。

## v0.7.0 · 2026-11-24 · Apple-Grade 强制前端设计地基、纯净表面克制、紧凑 PC 高度与纯视觉 Hero 规范
- **触发根因**：用户基于 `2026-11-us-stocks-nvda-lp` V1 实屏截图给出明确审定：整体结构与文案已达标，但视觉存在四项共性问题——① Hero 右侧塞了文字数据卡而非 3D/透明元素；② PC 各模块高度过高；③ 全页多处铺了大面积暗红渐变色；④ 缺少严格的 Apple.com 级前端基础规范（字体字重阶梯、卡片、分割线、实心按钮、1.5px 线性 Icon 及标题去逗号两行排版）。
- **新增强制基础规范**：
  - [design/foundations/tokens-apple-ui.css](design/foundations/tokens-apple-ui.css) 与 [design/foundations/apple-ui-component-spec.md](design/foundations/apple-ui-component-spec.md)：确立全站统一的 Apple.com 级字体/字重（`400/500/600`）、纯中性表面（`#FFFFFF / #F5F5F7 / #000000 / #161617`，**禁止乱铺大面积渐变色**）、极细 `1px` 分割线、实心 `#A52933` 胶囊按钮、`1.5px` 去盒化线性 Icon、紧凑 PC 模块高度（`56px–64px`）与**标题去逗号两行排版**规则。
  - **Hero 纯视觉铁律**：Hero 右侧只放无文字 3D 渲染物或透明底品牌元素，禁止放文字图表卡片。
  - 重构 [design/foundations/tokens-lp.css](design/foundations/tokens-lp.css) 继承 `tokens-apple-ui.css`，清除所有大面积暗红渐变背景。
- **同步落地**：更新 `START-HERE-FAST-TRACK.md`、`AGENTS.md`、`design/README.md`、`design/patterns/code-delivery-contract.md`；并在 `projects/2026-11-us-stocks-nvda-lp` 完成 V2 视觉全面重构（含新生成的纯黑无缝 3D AI 芯片主视觉）。完整复盘见 [ITER-20261124-008](iterations/2026-11-24-apple-ui-foundation-and-hero-visual-v0-7.md)。

## v0.6.0 · 2026-11-20 · 全链路端到端升级（极速路由、事实总表、LP 视觉 Token、代码交付与品牌素材清单）
- **极速路由卡（[START-HERE-FAST-TRACK.md](START-HERE-FAST-TRACK.md)）**：解决跨模型上下文过载与漏读标准问题——按 `LP_PRODUCT` / `CAMPAIGN` / `WEB_PRODUCT` / `BRAND` 四类任务直接映射精确的 3–4 份必读文档 + 必看 `pc.png` 原图路径。
- **业务事实与文案红线总表（[content/facts/current-facts-and-bans.md](content/facts/current-facts-and-bans.md)）**：把散落在 6 个文档中的 `SAFE_TO_USE`、`HARD_BANS`（禁用“小股东/分享增长/印花税/过期 0 费率/外汇券商/假实时报价”等）与 `NEEDS_LIVE_CHECK` 收口为单页 SSOT。
- **补齐视觉与代码交付断层**：
  - 新增 [design/foundations/tokens-lp.css](design/foundations/tokens-lp.css)（轨道 B EBC 投放 LP 专用视觉 Token，确保 Codex / Claude / Gemini / Cursor 默认渲染出一致的深酒红黑渐变 + 融合监管条 + 2×2 短卡基因）；
  - 新增 [design/patterns/code-delivery-contract.md](design/patterns/code-delivery-contract.md)（零构建单目录静态预览优先、零死按钮、零内部调试文案泄漏、本地与公网预览边界）；
  - 新增 [design/assets/README.md](design/assets/README.md) 并**完成首批 38 份官方品牌与合作物料入库**（14 语种深底反白 + 浅底彩色 EBC×FCB 联合 Logo 共 28 份，以及巴萨 / TradingView / 联合国基金会 / 牛津大学 / CCTV 的 PC+Mobile 成品合作卡共 10 份），同步接入 `2026-11-us-stocks-ant-lp` Demo。
- **清除残留规则冲突**：同步修订 `ebc-pm-strategy-debate`、`ebc-pm-copy-critique`、`trading-contest.md`（补必看截图路径）与 `design-review-checklist.md`（按双轨分流验收），消除子 Skill 里“未锁定结构 / 自由加屏”的旧指令；同步清理 `2026-11-us-stocks-ant-lp` Demo 合作卡内的调试文字。
- 完整复盘见 [ITER-20261120-007](iterations/2026-11-20-full-pipeline-optimization-v0-6.md)。**未改动 `sources/` 任何原始文件**。

## v0.5.0 · 2026-11-20 · 双模式执行开关、必看基准截图门禁、LP 密度硬尺与视觉双轨分流
- **触发根因**：真实项目 `2026-11-us-stocks-ant-lp` 跨模型对比（Codex / Claude / Gemini）暴露三家首版均产出“2000 字白底产品说明书”；根因为规则自由度过高、未强制读取历史 `pc.png` 截图、缺少防啰嗦否决项，以及 `design/` 浅白 Apple 规范与现行黑红 LP 皮肤冲突。
- **双模式开关 + 开工回执（`AGENTS.md` §0B）**：拆出 `Mode 1 · STANDARD_PRODUCTION`（默认用于 `LP_PRODUCT` 与常规活动页，沿用现行骨架、密度与皮肤，PM 深度思考留在 `pm-decision.md` 不泄漏进 UI）与 `Mode 2 · EXPLORATORY_REDESIGN`（官网/品牌/内部平台/明确大改版）。动工前强制输出 4 项 Pre-Flight 开工回执并**必须实际读取对应 `sources/.../design/pc.png`**。
- **`LP_PRODUCT` 升格与密度硬尺**：在 `research/page-structures/README.md` 与 `landing-pages/product-lp-common.md` 将 `LP_PRODUCT` 升级为 **`DEFAULT_PRODUCTION_BASELINE`**，固化 Hero 左侧 3 元素、底部融合监管条、正文位禁嵌套子模块/FAQ、优势卡 1 标题+1 短句（≤ 16 字）、整页主文案 250–450 字等密度硬尺。
- **文案新增第 5 项硬否决（`content/rules/review-rubric.md`）**：新增 `LP_BLOAT_FAIL`（投放页说明书化一票否决），即使单句事实正确，一旦超密/嵌套科普墙也必须强制压字剪枝（Copy Compression），同时在单行脚注保留 CFD 性质与风险底线。
- **视觉双轨分流（`design/README.md`、`design/methods/visual-direction-and-iteration.md`）**：轨道 A（官网/品牌/工作台）走 `tokens.css` 浅白 Apple-inspired 探索；轨道 B（投放 LP/活动页）默认继承 EBC 深酒红黑渐变现行投放皮肤，消除规则打架。
- 同步更新 `PILOT.md` 通用提示词、`CLAUDE.md`、`GEMINI.md`、`.cursor/rules/ebc-page-pilot.mdc`、`pm-page-strategy` 与 `ebc-web-design` Skills；完整复盘见 [ITER-20261120-006](iterations/2026-11-20-lp-production-baseline-and-anti-bloat-v0-5.md)。**未改动 `sources/` 任何原始文件**。

## v0.4.0 · 2026-11-13 · 页面结构自动匹配、Hero 注册表单/CTA 独立选择与行业调研顺序
- 新增 [三维匹配协议](research/page-structures/matching-and-hero-contract.md)：`PAGE_FAMILY / CAMPAIGN_MECHANIC / HERO_CONVERSION` 三个维度分开；交易大赛根据现有 Candidate 匹配活动模块；历史 Campaign 3/3 PC Hero 右侧表单仅为默认候选，**用户明确要求 CTA 时替换入口、无需重建正文或另造右表单**。官网主站不继承活动页表单。
- 匹配不到/证据不足才启动定向网页结构研究，顺序：EBC 官网/核实自有 Campaign/LP → CFD/Forex → 数字货币平台 → 更广金融 → 必要时科技/其他；按顺序记录模块职责、Hero 左右/表单/CTA、报名路径、桌面/手机差异、规则与风险，不复制行业事实/陈述。
- 同步更新 Page Structure/产品 LP/活动分册/跨案例 Hero Variant、AGENTS、PM Skill、Research Skill、PILOT、Claude/Gemini、PM/Research README 与研究证据卡，新增六项 [路由测试](pm/tests/page-family-hero-routing-regression.md)（`NOT_RUN`）。
- **无任何历史源码/设计图改动**；此前的 `STRUCTURE_CANDIDATE` 与合规事实确认边界不变，真实 Agent 行为未运行验证。

## v0.3.0 · 2026-11-13 · Page Structure System × PM 内容取舍与可纠错方案
- Claude 已归档 `research/page-structures/` 十份结构报告及三个 `sources/campaigns/trading-contest/` 来源；GPT 对三份活动 Vue/locale 与七份 LP Vue + 七份中文 locale 和 US-X 中文 locale 做证据复审。三种机制是**抽奖/达标/排名**；七版三正文位是历史模板观察，**不是最佳或全站上限**；官网美股、US-X 单例保持待核。
- 新增 [结构证据复审](research/page-structures/review-2026-11-13.md)、三个活动 Manifest 与 `sources/INDEX.md` 索引，修正监管区形态、历史到期 ETF 优惠、OIL-A locale 遗留等问题；原始源码和 PNG 未改。
- 整合 [PM 页面逻辑/内容取舍](pm/methods/page-logic-and-content-scope.md)、[方案放弃与纠错](pm/methods/decision-tradeoffs-and-correction.md) 并接入 `AGENTS.md`、PM Agent/Strategy Skills、Copy、Design、Research、Claude/Gemini/PILOT。**已有锁定骨架时允许同结构下真正不同的策略**，不强迫另造模块；新增模块需证明现有职责无法承接。
- 推荐方案必须说明 `CHOSEN / REJECTED / SACRIFICE / FAILURE CONDITION`，并审查冗余与必要信息完整性；新增八项回归场景 `NOT_RUN`。
- **状态**：全部结构仍 `STRUCTURE_CANDIDATE` 或 `SINGLE_CASE_CANDIDATE`，无 `STRUCTURE_LOCKED`；三个活动页线上未核验、历史共享组件与正式营销数据未完全取得；真实 Agent 执行和转化结果未验证。
- 过程与取舍见 [ITER-20261113-005](iterations/2026-11-13-structure-content-choice-integration.md)。


## v0.2.0 · 2026-11-12 · 可检验的视觉设计方向与 AI Coding 反模板循环
- 提取用户历史 Figma Make Pre-IPO SKILL 的「精确层级/版心/间距/组件与桌面手机并审」机制，明确产品事实、固定 5600px/900px 等不是全站规则。
- 研究 Anthropic frontend-design、Impeccable、UI UX Pro Max、Vercel Web Guidelines、shadcn、React Bits、21st.dev，以及可核查的 X 实践讨论；热度仅为研究线索，不作为有效性证明。
- 新增 `design/methods/visual-direction-and-iteration.md`、`design/qa/visual-quality-scorecard.md`、`design/tests/visual-quality-regression.md`；更新现有 EBC Design Skill、Design System、QA 与跨模型入口。
- 强制区分 **审美方向 / Visual Critique** 与 **功能/工程 QA**，真实截图修订优先；详见 [ITER-20261112-004](iterations/2026-11-12-visual-quality-v0-2.md)。
- 初始文档和文件引用已验证；真实多模型运行测试及用户对具体页面的视觉认可仍为 `NOT_RUN`。

## v0.1.2 · 2026-11-12 · 跨 AI Agent 上下文交接和确认稿保护
- 新增 `agents/cross-agent-handoff.md`、`projects/HANDOFF-TEMPLATE.md` 和五组行为回归测试，统一 GPT / Claude Desktop / Gemini / Grok 的任务交接、文件版本、锁定文案与反馈回流。
- 主要入口 `AGENTS.md`、`PILOT.md`、`README.md`、`projects/README.md`、`CLAUDE.md`、`GEMINI.md` 只引用统一协议，不各自另造相互冲突的规则。
- 详情见 [ITER-20261112-003](iterations/2026-11-12-cross-agent-handoff.md)；模型端真实交接行为尚未执行测试。

## v0.1.1 · 2026-11-12 · 中文主稿优先和地区化策略解耦

- 根据用户明确确认的工作流，普通项目先用中文完成 D/R/U/C/S 和中文 Copy Sheet 审查，翻译作为后续独立本地化任务，禁止直接逐字转换。
- 明确 `working_language=zh-CN` **不等于** `target_market=China`；日本等专属市场需在中文方案前先读取当地用户、竞品与渠道证据。
- 保留通用 PM 方法、设计系统和组件，仅对有依据的市场差异做局部 Override；缺少本地规范应主动调研并标明假设。
- 更新主入口、PM/Copy/Design/Research Skills、Localization 状态与回归测试，详见 [ITER-20261112-002](iterations/2026-11-12-chinese-first-market-overrides.md)。

## v0.1 · 2026-11-12 · 首个可持续生产基线

- 从六个独立知识资产分支整合：PM 五节点双向审查、EBC 文案决策库、逐层行业参考与网页证据、Apple-inspired 设计规范、原始页面案例及源码。
- 建立跨 Agent 入口：`AGENTS.md`、`CLAUDE.md`、`GEMINI.md` 和 Cursor 规则文件。
- **工作模式调整**：`main` 保存最新可用知识基线；真实项目使用 `projects/` 持续产出；`iterations/` 保存修改前后、证据与决策，必要时通过 PR 迭代，而不是长期将全部资源放在 Draft 分支。
- 当前能力状态：文档与仓库结构整合已核对；不同模型真实端到端执行、浏览器截图、真实转化成效仍需后续任务验证。
- 来源和具体切换记录：[ITER-20261112-001](iterations/2026-11-12-baseline-to-main.md)。

后续新增条目遵守：日期 / 版本 / 变更对象 / 触发原因 / 关联项目 / 证据 / 验证状态 / PR 或 Commit。
