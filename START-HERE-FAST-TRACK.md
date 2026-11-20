# EBC Page System · 跨 Agent 极速路由卡（v0.6 · 必先看本页）

> **为什么有本页**：本仓库共有 200+ 文件，Codex / Claude / Gemini / Cursor 若直接全库乱读容易上下文过载或漏读关键标准。**任何 Agent 接到页面需求，按本页 4 步路由即可精准命中所需文件与截图。**

---

## 第一步：按需求选执行模式与最小必读包（只读对应行！）

| 页面类型 | 执行模式 | 视觉轨道 | 必读文档（仅 3–4 份） | 必看真实截图（**必须实际打开查看**） |
|---|---|---|---|---|
| **产品获客推广页**<br>(`LP_PRODUCT`，如美股/ETF/原油/跟单 LP) | **`Mode 1`**<br>`STANDARD_PRODUCTION` | **轨道 B**<br>EBC 投放皮肤（`tokens-lp.css`） | 1. `content/facts/current-facts-and-bans.md`<br>2. `content/rules/review-rubric.md`<br>3. `research/page-structures/landing-pages/product-lp-common.md`<br>4. `design/patterns/code-delivery-contract.md` | `sources/landing-pages/etf/B/design/pc.png`<br>`sources/landing-pages/oil/B/design/pc.png` |
| **交易激励活动页**<br>(`CAMPAIGN_TRADING_INCENTIVE`，抽奖/达标/排名) | **`Mode 1`**<br>`STANDARD_PRODUCTION` | **轨道 B**<br>EBC 活动投放皮肤 | 1. `content/facts/current-facts-and-bans.md`<br>2. `research/page-structures/matching-and-hero-contract.md`<br>3. `research/page-structures/campaigns/trading-contest.md`<br>4. `design/patterns/code-delivery-contract.md` | `sources/campaigns/trading-contest/case-01/PC设计图.png`<br>（排名型另看 `case-03/PC设计图.png`） |
| **官网产品页 / 频道页**<br>(`WEB_PRODUCT`，挂在 `ebc.com` 主站) | **`Mode 2`**<br>`EXPLORATORY_REDESIGN` | **轨道 A**<br>Apple-inspired 浅白（`tokens.css`） | 1. `content/facts/current-facts-and-bans.md`<br>2. `research/page-structures/website/product-page-us-stocks.md`<br>3. `design/methods/visual-direction-and-iteration.md`<br>4. `design/patterns/header-brand-and-partnership.md` | `sources/website/us-stocks/D-official-design/design/pc.png`（仅作结构参考，**勿抄其中的错误数据**） |
| **品牌页 / 内部平台 / 用户明确要求大改版** | **`Mode 2`**<br>`EXPLORATORY_REDESIGN` | **轨道 A**<br>定制 Art Direction | 1. `AGENTS.md`<br>2. `pm/operating-system/iterative-pm-engine.md`<br>3. `design/methods/visual-direction-and-iteration.md`<br>4. `design/qa/visual-quality-scorecard.md` | 按项目目录查历史 v1 截图（如有） |

---

## 第二步：动工前必须输出 4 项 Pre-Flight 开工回执（≤ 10 行）

在输出正式方案或写第一行代码前，先列出：
1. **执行模式 & 视觉轨道**：`Mode 1 / Track B` 或 `Mode 2 / Track A`（并写明 `PAGE_FAMILY / MECHANIC / HERO_CONVERSION`）。
2. **已实际读取的基准截图路径**：真实路径（无看图能力时标 `VISUAL_REF_UNREAD` 并严守字数硬尺）。
3. **本页密度预算**：`Mode 1` 产品 LP 必须锁定——主文案 250–450 字、Hero 左侧 3 元素、底部融合监管条、B1/B2/B3 无嵌套子模块与 FAQ、功能卡 1 标题+1 单行短句（≤ 16 字）。
4. **已核对的事实与文案红线**：`content/facts/current-facts-and-bans.md` + 适用决策卡 ID。

---

## 第三步：PM 深度与页面输出单向隔离（防说明书化铁律）

- **文档层（`projects/<slug>/pm-decision.md`）**：允许并鼓励深度——D/R/U/C/S 五节点 V1→V2 修订、外部事实核验、3 条用户路径模拟、放弃项与纠错条件全写在这里。
- **页面层（`copy-sheet.md` + `demo/`）**：在 `Mode 1` 下必须过 `LP_BLOAT_FAIL` 剪枝——**只留 10 秒可扫完的高转化短句 + 单行合规/数据出处脚注**，严禁把 PM 推理过程、大段科普、机制账本或 FAQ 手风琴搬上页面。

---

## 第四步：直接交付可预览代码 + 真实素材检查

- 检查 `design/assets/` 是否已有官方 Logo 与合作图；有则直接引用，无则按 `design/assets/README.md` 做优雅排版降级，**绝不在面向用户的页面上显示丑陋的“待替换/占位符”调试字样，也严禁 AI 自绘巴萨徽章**。
- 严格按 `design/patterns/code-delivery-contract.md` 输出零依赖可直接预览的静态页面（`demo/index.html` + `styles.css` + `app.js`），交互全可用，并按能力执行真实浏览器截图 QA（无截图标 `VISUAL_QA_PENDING`）。
