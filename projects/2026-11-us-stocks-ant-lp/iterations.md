# Project Iterations Log · 2026-11-us-stocks-ant-lp

> 项目目录：`projects/2026-11-us-stocks-ant-lp/` | 仓库基线：`main @ 085c432` | 执行 Agent：Gemini (Antigravity)

---

## Round 1 · PM 五节点循环（V1 → V2，2026-11-20）

| 节点 | V1 初稿核心问题 | 触发反驳与证据 | V2 实质修改 | 状态 |
|---|---|---|---|---|
| **D 需求** | 按字面做成「借 ANT 暴涨拉新」的单股热炒页 | 忽略了 ANT 11/19 从 \$111.50 高开回落至 \$97.17 的真实走势，且削弱“整体主题是美股”的长期获客目标 | 重构为「以 ANT 新上市真实热度与双向波动为锚点，承接并转化整个美股 CFD 主线开户」 | `PASS_WITH_ASSUMPTIONS` |
| **R 研究** | 计划照搬 `CASE-004` 官网美股页的榜单 + 报价表 + 0 手续费 | `CASE-004` 复审暴露 3 模块重复、涨幅矛盾、印花税错误；`REV-03` 证实 0 手续费已过期；T1 同业（TMGM/Pepperstone/IG/Vantage）均前置 CFD 双向与无实股所有权边界 | 仅迁移 `CASE-004` 的“主题化标的分组”；用 2026-11-19 纳斯达克公开成交数据（\$83→\$111.50→\$114.99→\$97.17）作核心事实支点；放弃假报价表与过期促销 | `PASS_WITH_ASSUMPTIONS`（T1 仅文本检索，标 `TEXT_ONLY_VISUAL_PENDING`） |
| **U 用户路径** | 假设访客全为单边追高买涨心态 | 犹豫型交易者最担心“新股刚涨完就回调被套”及“以为买的是正股”；误解型访客可能因期待免佣打新产生客诉 | 建立顺畅 / 犹豫 / 误解退出三条模拟路径（`COUNTERFACTUAL_SIMULATION`）；Hero 增设次级锚点，B1 加入“做多 vs 做空/对冲”双视角交互 | `PASS_WITH_ASSUMPTIONS` |
| **C 文案** | V1 标题含“震撼上市、共享 AI 超级红利、0 手续费轻松买美股” | 触碰 `review-rubric.md` 硬否决（`FACT_FAIL` + `USER_EXPECTATION_FAIL`）及 `EBC-COPY-010` 禁用“分享增长”教训 | 修订为「从 Anthropic (ANT) 出发，布局核心美股资产」；复用 `EBC-COPY-002` 监管句式、迁移 `EBC-COPY-008` 流动性分笔风控句式、`EBC-COPY-009` MT5 查询与上市转换逻辑、`EBC-COPY-012` 多资产集团定位 | `DRAFT`（待用户 `USER_CONFIRMED_IN_CHAT`） |
| **S 方案** | 需在 `LP_PRODUCT` 与 `WEB_PRODUCT` 全信息页之间做选择 | 在无实时行情接口且明确为推广页时，全信息页引入双目标与假报价风险 | 选用 `LP_PRODUCT` 三正文位候选骨架（`WHY-CARE` → `PRODUCT` → `WHY-EBC`）+ `CTA_MODAL`；显式记录放弃项（报价表 / 过期 OFFER / 首屏内嵌表单）与 C1/C2/C3 纠错反转条件 | `DECISION_READY_WITH_ASSUMPTIONS` |

---

## Round 2 · Design & Demo V1 构建与渲染 QA（2026-11-20）

- **产物**：[demo/index.html](demo/index.html)、[demo/styles.css](demo/styles.css)、[demo/app.js](demo/app.js)，已在本地 `http://localhost:4173/` 启动静态预览服务。
- **Art Direction**：选用「机构级明净金融刊物风（浅白/柔灰阅读舞台 + 局部深炭黑 ANT 轨迹卡与收尾行动区 + EBC 酒红收敛为主行动色）」，拒绝全黑霓虹赛博终端模板。
- **Visual Critique & Engineering QA 状态**：**`VISUAL_QA_PENDING`**。
  - 原因：内置浏览器访问 `http://localhost:4173/` 的授权弹窗等待 60 秒超时未获点击批准，尚未取得真实 Desktop（1440×900）与 Mobile（390×844）渲染截图。
  - 严格遵守 `GEMINI.md` 与 `design/qa/visual-quality-scorecard.md`：未取得真实截图前，不宣称通过视觉审美评审或功能 QA；待用户在浏览器打开预览或允许访问 `http://localhost:4173/` 后，立即补跑 V1 截图评审与 V1→V2 精修闭环。


---

## Round 3 · C3 用户反馈纠错：对标历史 LP 标准与截图大幅精简重构（V1 → V2，2026-11-20）

- **用户直接反馈（`C3 结果纠错` / `VISUAL_REVIEW_NOT_PASSED` on V1）**：「内容太多了，我记得有个文件清楚写出了当前我们已经做过的 LP 的标准，甚至还有截图」。
- **核对原始标准与真实截图**：重读 [product-lp-common.md](../../research/page-structures/landing-pages/product-lp-common.md)、[etf-cfd-lp.md](../../research/page-structures/landing-pages/etf-cfd-lp.md)、[oil-cfd-lp.md](../../research/page-structures/landing-pages/oil-cfd-lp.md)、[cross-case-module-map.md](../../research/page-structures/cross-case-module-map.md)，并直接目检 4 张真实 LP 设计图（`sources/landing-pages/etf/{A,B}/design/pc.png`、`oil/B/design/pc.png`、`copy-trading/A/design/pc.png`）。
- **V1 根因诊断**：V1 过度膨胀，混入了官网页式的长篇说明（顶部大黑条、Hero 多行要点与脚注、B1 长视角面板 + 三大长段落、B2 12 张带描述的标的大卡 + 4 格账本 + 4 项 FAQ 手风琴、长篇合作伙伴说明与多段页脚），总字数与阅读密度严重偏离 EBC `LP_PRODUCT` 一眼扫完的投放节奏。
- **V1 → V2 实质瘦身与结构对齐（正文信息量削减 ~65%）**：
  1. **Hero（M01 + G2 + M02 融合）**：改为 EBC LP 标志性的深酒红/黑渐变首屏 + 顶部透明极简锚点导航 + 左两行短 H1（`从 Anthropic 出发 / 布局核心美股资产`）+ 一行短副标题 + 单一主 CTA（`开设账户 →`）+ 右侧紧凑 ANT 首日走势卡 + **底部无缝融合监管条**（删掉单独占一整屏的白底监管块与顶部压迫大黑条）。
  2. **B1（白底 · `WHY-CARE`）**：对齐 `ETF-A` 对比大卡节奏，左深酒红数据卡（`+17.07%` + 3 个关键价位）+ 右 3 条单句买点 + 1 行数据来源脚注，删掉交互大面板与长篇解说。
  3. **B2（深酒红暗色屏 · `PRODUCT`）**：对齐 `ETF-A` / `OIL-B` 深色屏节奏，顶部精炼主题标的胶囊条（3 组 × 4 只小胶囊，一键点选带入弹窗）+ 经典的 **2×2 四卡**（每卡仅 4–6 字标题 + 一句 ≤14 字短说明）+ 1 行融合风险与分笔提示脚注；**彻底砍掉 12 张长文案大卡、4 格机制账本与 4 项 FAQ 手风琴**。
  4. **B3（白底 · `WHY-EBC`）**：严格对齐 `ETF-B` / `OIL-B` 的居中标题 + **2×2 极简四卡**（多地监管 / MT5 执行 / 资金托管 / 多资产一账户），不写假数据。
  5. **收尾组（M07 + M08 + L1 + G3）**：3 张精炼合作伙伴横卡（标明授权视觉待替换，不自绘巴萨徽标）→ 极简「简单三步，开启美股 CFD 交易」（每步仅 4–6 字）→ 2 行极简合规页脚 → 白色吸底条（`ANT 新上市 · 布局核心美股 CFD` + `立即开户`）。
- **合规与事实底线零妥协**：仍保留 ANT 2026-11-19 真实公开首日数据与出处、明确美股 CFD 衍生品性质、保留分笔风控提示、不复用过期 0 手续费/0 隔夜利息与冲突牌照号。
- **当前状态**：`DEMO_READY` / `VISUAL_REVIEW_READY`（已即时更新至 `http://127.0.0.1:4173/`，待用户实看 V2 反馈或授权浏览器截图复核）。
