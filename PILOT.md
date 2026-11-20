# EBC 真实项目执行指南与跨模型对比

> 目的：让 Agent 使用 `main` 的最新知识完成真实 EBC 页面需求，从 PM 深度循环到文案、设计、组件化代码与 QA；也支持将同一项目交由多个模型对比。
> 默认分支：`main`（持续生产）；实验性尝试可在短分支执行；业务官网部署始终另行审批。候选规范不等于公司正式批准。

## 1. 如何启动（最少操作）
1. 在 GitHub Desktop 选择 `main`，Fetch / Pull 最新变更。跨模型对比时让各 Agent 从同一 Commit 和同一个真实需求起步。
2. Agent 若可读本地文件，直接打开仓库根目录；若只在网页中有 GitHub 连接，则指定仓库 `Elijahwww/ebc-page-system` 和 `main`。若没有仓库读取权限，应明确说明，不能假装已读。
3. Agent 首先阅读 `AGENTS.md`，以及 PM、Copy、Research、`research/page-structures/README.md`、**`research/page-structures/matching-and-hero-contract.md`** 和 Design 的相关索引；网页任务还需检查 PM 的 `page-logic-and-content-scope.md`，不要直接开始生成 Hero 或代码。
4. 同一需求写一次、保留原文。除当前项目的真实日期/产品状态与资源权限差异之外，尽量保持模型的上下文一致。
5. 按真实需求完整执行：先经 PM 决策和独立审查循环，再确认文案/结构；若要求端到端，就继续到可运行 Demo、QA 和交付，不要把试运行当成必须停在报告阶段。

### 可复制给任何 Agent 的通用指令（v0.5）
> 这是 EBC 官网/推广页真实项目任务。请先读取仓库根目录 `AGENTS.md` 和 `PILOT.md`，并按需读取 PM、Copy、Page Structure、Design 对应分册。
>
> **第一步（必须执行）**：先判模式并在开头输出 **10 行 Pre-Flight 开工回执**：
> - 做产品推广 LP 或常规活动页默认走 **`Mode 1 · STANDARD_PRODUCTION`**，必须实际打开对应历史基准截图（如产品 LP 必看 `sources/landing-pages/etf/B/design/pc.png` 与 `oil/B/design/pc.png`），直接沿用 `LP_PRODUCT` 默认骨架、密度硬尺（Hero 左侧 3 元素 + 底部融合监管条、3 个单结构正文位、优势卡 1 标题+1 短句 ≤ 16 字、整页主文案 250–450 字、严禁嵌套 FAQ/账本）与 EBC 投放视觉皮肤；
> - 只有做官网新频道、品牌页、内部平台或我明确要求大改版时，才走 **`Mode 2 · EXPLORATORY_REDESIGN`** 开启多结构竞争与双方向 Art Direction。
>
> **第二步（PM 深度只留文档，页面严防说明书化）**：D/R/U/C/S 五节点照常做「初稿—反证—查验—修订」，但把深度分析、用户路径模拟和取舍记录留在 `pm-decision.md`；进入页面 UI 的中文文案必须通过 `content/rules/review-rubric.md` 五项硬否决（含 **`LP_BLOAT_FAIL` 说明书化否决**），兼顾事实底线（CFD 非正股、不复用过期 0 费率、不乱写牌照编号、数据带单行出处脚注）与 10 秒扫读转化节奏。
>
> 中文先定稿再做独立本地化；若任务面向日本等地区，先按当地市场研究再用中文提交方案。交付要求含开发时产出响应式可运行 Demo，真实渲染截图 QA 与工程 QA 分开报告（无截图标 `VISUAL_QA_PENDING`）。结果保存至 `projects/<slug>/` 并记入 `iterations.md`。

## 跨 AI / Agent 交接
使用 GPT、Claude Desktop、Gemini、Grok 等组合完成同一个项目时，先读 [统一交接协议](agents/cross-agent-handoff.md)。每次转换负责人前，更新 `projects/<slug>/handoff.md`（见 [模板](projects/HANDOFF-TEMPLATE.md)），至少包含当前 Git Commit/文件版本、用户已确认中文文案、允许修改范围、下一任务、验收与输出位置。
其他模型的研究/批评应先留在 `runs/<agent>-<date>/`，不是直接覆盖 `copy-sheet.md` 或 `pm-decision.md`。若客户端只能访问旧仓库快照，先刷新/核对版本；没有仓库权限就仅依据明确提供的交接材料执行，不谎称已读。所有项目仍遵循中文先审稿、地区目标独立研究、后续再本地化。

## 中文主稿及明确市场例外
- 默认先交付中文需求/研究/心理路径/完整文案/方案，并确认中文版本后再单独执行翻译；**不要求中文方案同时产出多语种版本**。
- 项目针对日本等特定市场时，研究和用户路径从一开始就按当地市场处理；中文仅是内部审稿语言，不能套中国大陆用户认知。
- 国际版通常复用页面信息逻辑、视觉和组件；目标市场确有差异时才记录局部 Override。本规则见 `localization/chinese-first-and-market-overrides.md`。

## 2. 日常项目的最少输入
可以直接给一句真实业务需求。Agent 应自主补全已知项目背景、找案例、列假设；无需填表。为了跨模型公平，建议额外注明：项目名、页面类型、目标用户/主要市场、需要的产物（仅 PM 策略 / PM + 全文文案 / 可运行 Demo）及任何**当前真实状态**。
如果信息缺失，Agent 应先按明确假设推进，只有真正影响产品真实性或主行动的缺口才向用户确认。

## 3. 预期输出分三层（不要混在一份冗长报告）
**A. PM Decision Packet（最重要）：**
- 需求背后真正的问题及 1–2 个竞争解释；
- 关键真实行业/用户/竞品观察、来源与反例；
- 2–3 条不同用户心理与路径模拟（明确标 `SIMULATION`）；
- 完整 Hero + 核心模块 + CTA 的信息逻辑及实质修订；
- Page Family / Mechanic / Hero Conversion+真实去向、适用结构的候选/锁定状态、真实策略取舍（可同骨架）、**被主动移除或延后的内容与反转条件**、每模块任务与后续 CTA/注册路径；
- 每个节点至少一个可指出的 V1→V2 差异及回退记录。
**B. Design Spec：** 如任务包含视觉，先有 Art Direction Brief/方向选型与反模板自审，再列 Desktop/Mobile 信息顺序、版心、tokens、品牌 Header/巴萨标识约束与交互。真实可运行页面应有截图后 Visual Critique、实际修订，不以功能 QA PASS 取代审美。
**C. Demo + QA：** 如测试包含开发，给出运行方法、组件分拆、关键状态、截图或真实预览（实际存在时）、已测与未测项；不要以静态效果图冒充运行程序。

## 4. 必须能区分的状态
- `APPROVED_COPY`（有证据的正式确认） vs `HISTORICAL_COPY` vs `DRAFT`。
- `WEB_TEXT_OBSERVED` vs `SCREENSHOT_CAPTURED` vs `TEXT_ONLY_VISUAL_PENDING`。
- `REAL_USER_DATA` vs `AGENT_PATH_SIMULATION`。
- `DEMO_READY` vs `PRODUCTION_READY`。
- `STRUCTURE_CANDIDATE` / `GPT_REVIEWED_CANDIDATE` vs 具有用户来源的 `STRUCTURE_LOCKED`（当前没有）。

## 5. 最关键的失败征兆
- 不打开 EBC 已有材料；直接给标准 4–5 屏模板或强制填满历史三正文位；
- 只写“专业、简洁、克制、Apple 风格”，没有指出具体句子或信息变化；
- 没有研究反例、没有用户犹豫/退出路径；
- 说“已进行了多轮审核”但 V2 与 V1 只是换词；
- 缺行业实例时不主动研究，或没有截图却声称分析了 Apple 的像素/视觉；
- 只实现漂亮的组件，按钮却不能点、链接断裂、内容事实错；
- 将“上线版本”或“旧代码”说成用户已批准的当前版本；
- 方案“各方面都完美”却没有牺牲项与可反转条件，或为凑不同策略添加无需求模块。

## 6. 项目交付、迭代与可选的多模型评分
每个项目在 `projects/<slug>/` 保留最终稿和 `iterations.md`。规则层面的变化由 `iterations/`、`CHANGELOG.md` 追踪。需要横向比较时，再按 `pilot/EVALUATION.md` 使用相同标准评价不同 Agent。**默认不做总分排名的伪精密 KPI**：逐项记录 `0 未做到 / 1 部分实现 / 2 有可核验产物`，指出最大缺陷和是否值得继续投入。
每个模型结果建议保留在独立本地目录/分支，不让一家的输出污染下一家的输入；不直接写入生产素材 `sources/`。

## 7. 暂时不阻塞中文页面交付的依赖
- 原来的 14 语种术语表**尚未在本仓库找到可引用的原始 CSV**；不要编造术语。第一期中文测试可正常推进，跨语言测试前再导入原文件并检查疑义。
- 一些历史共享组件、官网美股对应代码和真实转化数据未包含于原始资产包；文档要标注 `MISSING_SOURCE`，不能假装代码完整。
- 真正的浏览器截图需要具备浏览器/Playwright 类能力的运行环境，不是所有 AI 都能做。
- 产品、费用、监管口径如有冲突，以当前真实项目事实确认，不使用过时示例。
