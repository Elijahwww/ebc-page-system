# Project Brief · 现货黄金（XAUUSD）CFD 推广页（普通投资者 · 社媒投放版）

## Pre-Flight 开工回执（`AGENTS.md` §0B / `START-HERE-FAST-TRACK.md` 第二步）
1. **执行模式 & 视觉轨道**：`Mode 1 · STANDARD_PRODUCTION` / 轨道 B（`tokens-apple-ui.css` + `tokens-lp.css`）· `PAGE_FAMILY=LP_PRODUCT` / `CAMPAIGN_MECHANIC=N/A` / `HERO_CONVERSION=CTA_MODAL`
2. **已实际读取的基准截图**：`sources/landing-pages/etf/B/design/pc.png`、`sources/landing-pages/oil/B/design/pc.png`、`sources/landing-pages/oil/A/design/pc.png`（普通投资者版主蓝本，大宗商品同类）
3. **本页密度预算**：Hero 3 元素（两行 H1 12 字 + 副标题 18 字 + 单一 CTA）；B1/B2/B3 各 1 个主结构，无 FAQ / 无嵌套科普；卡片 1 标题 + 1 短句 ≤ 16 字；整页主文案 **331 个汉字 + 37 个数字/英文词元 = 368 单位**（脚本统计，不含脚注、页脚、弹窗），落在 250–450 区间
4. **基础事实防错**：`content/facts/current-facts-and-bans.md`（监管号四项照抄）、`content/selling-points/ebc-selling-points-library.md` V14.1（`SP-REG-01/02/03`、`SP-OPS-02`、`SP-ACC-01`、`SP-PRD-03`）、`content/rules/review-rubric.md`（含 `LP_BLOAT_FAIL`）；外部金价与央行数据见下文

---

| 字段 | 内容 |
|---|---|
| Project Slug | `2026-11-gold-cfd-lp` |
| 创建日期 | 2026-11-24 |
| 主题 | 现货黄金 CFD（XAUUSD）产品获客推广页 |
| 受众 | 普通投资者（知道黄金、可能买过金条/银行积存金，但不熟悉 CFD；对应 Project 知识库画像 B/C） |
| 渠道 | X、Facebook、Instagram（移动端优先，冷启动信息流） |
| 语种 | `zh-CN` 中文主稿；其他语种待中文定稿后走 Localization |
| 结构 | `LP_PRODUCT` 默认生产基线，通用模块直接复用 |
| 交付状态 | `DEMO_READY` · 视觉 QA 已做（Playwright 1440×900 / 390×844 实渲染截图，见 `qa/`）· 非上线审批 |

---

## 已核验外部事实（2026-11-24 检索，`WEB_TEXT_OBSERVED`）

| 事实 | 数值 | 来源 |
|---|---|---|
| 现货黄金历史高点 | $5,589.38/oz，2026-01-28 | [CBS News](https://www.cbsnews.com/news/highest-gold-price-in-history-how-its-changed-from-2025-to-2026) |
| 现货黄金年内阶段低点 | $3,830.74/oz，2026-11-16（自 1 月高点回撤 31.5%） | [Nation Thailand 转引路透社](https://www.nationthailand.com/business/trading-investment/40073583) |
| 2026 Q3 全球央行净购金 | 321 吨，同比 +42%；年初至今 675 吨 | [World Gold Council · Gold Demand Trends Q3 2026](https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-q3-2026/central-banks) |
| EBC XAUUSD 合约 | 1 标准手 = 100 盎司；最小 0.01 手（1 盎司） | ebc.com 学院文章《Trading Gold Online: The Mechanics of an XAUUSD Position》（搜索摘要可见，页面抓取失败）→ `NEEDS_LIVE_CHECK` |

**关键市场判断**：本页上线时金价处于“年初创新高 → 11 月跌至一年低点”的回撤段。以“金价大涨”为钩子的常规写法既不真实、也会把用户引向单边追涨。这是本页定位从“黄金机会”改为“多空双向 + 可查证”的直接原因（见 `pm-decision.md` D 节）。

## 红线（本页适用）
- 写明 **现货黄金 CFD**，不写“买黄金 / 持有实物 / 保值增值 / 稳赚”。
- 不写杠杆倍数（ebc.com 文章称最高 1:500，但因实体与地区而异，且社媒金融广告审核敏感）。
- 不造实时报价；价格只用带日期与来源的历史节点。
- 不复用过期 0 手续费 / 0 隔夜利息活动；不设 `OFFER` 位。
- 监管表述用“旗下持牌实体分别受监管”，不暗示用户账户受 FCA 保护（主站服务实体为 SVG）。
