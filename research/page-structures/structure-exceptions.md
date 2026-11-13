# 结构差异与待决事项（Structure Exceptions）

状态：全部 `OPEN` · 2026-11-13
本文件登记尚未解决的结构差异、证据缺口和需要用户或 GPT 裁定的问题。已确认的 Structure Override 也记录在这里（目前没有）。

决定权标注：`USER` 需要业务方确认；`GPT` 可由跨案例评审给出建议；`DATA` 需要补资料后才能判断。

---

## 一、交易激励活动页

| ID | 问题 | 证据 | 影响 | 建议 | 决定 |
|---|---|---|---|---|---|
| EX-01 | 类型命名。3 个案例是抽奖、达标、排名三种机制，只有 1 个是比赛。目录与文件名仍叫 `trading-contest` | TC-01 locale 标题"双十一入金抽奖活动"；TC-02 设计图无排名；TC-03 排行榜 | 用"交易大赛"命名会让 Agent 默认加排行榜 | 类型名改为"交易激励活动"，以机制为分支；文件是否改名由用户决定 | USER |
| EX-02 | TC-02 没有版权行与风险提示 | `case-02/PC设计图.png`、`移动端设计图.png` 页尾；`+Page.vue` 未引入 `bottomTips` | 可能是合规缺口，也可能由外层布局提供 | 核对线上页面；确认前新项目一律保留 L1 | USER + DATA |
| EX-03 | About EBC 只在 TC-03 出现 | `case-03` 设计图、`#section5` | 无法判断是排名型活动的常规模块还是该市场的特例 | 保持 Optional；补一个其他市场的排名型活动案例后再定 | DATA |
| EX-04 | 回表单入口的位置不一致：TC-01、TC-03 在步骤模块底部，TC-02 在页尾横幅 | 三份设计图 | 新项目放哪里没有定论 | 默认放步骤底部（2/3）；两处都放需说明理由 | GPT |
| EX-05 | 达标型是否永远不需要独立的机制模块 | 仅 TC-02 一例 | "门槛并入奖品卡"的规则只有单例支持 | 标为候选规则，下一个达标型活动验证 | DATA |
| EX-06 | TC-03 目录内的资料互不对应：PC 设计图（Kontes Trading KafeinMatcha，10-19 至 11-02）、Mobile 设计图（EBC Live Trader Cup Indonesia，09-28 至 10-31）、代码（泰语 Season 2，路由 `live-trading2`）、URL（`ebcidn.com/live-trading/id/`）。PC 设计图内 Hero 日期与规则里的日期也不一致 | `case-03` 全部文件 | 证明模板被多次复用；但该目录不能当作单一页面的完整证据 | 把三场活动分别登记；确认哪一份是当前线上版本 | USER |
| EX-07 | 排行榜只有 1 例，Mobile 端只看到 3 列 | `case-03/移动端设计图.png`；`rankingTable` 无源码 | 移动端列的呈现规则无法写入标准 | 补组件源码或线上移动端截图 | DATA |
| EX-16 | TC-02、TC-03 的奖品、步骤、规则在代码中是整张图片 | `case-02/+Page.vue` `section2Bg`、`section3Bg`、`section4Bg`；`case-03` 各 `sectionNBg` | 规则文字不在 DOM 中，改一个数字要重新出图，多语言与无障碍受影响 | 新项目把规则与门槛做成真实文本。这是实现建议，不改变模块结构 | GPT |
| EX-20 | TC-02 的路由是 `trading-up`，URL 是 `/trade-up`；locale 标题写成"RADE UP" | `case-02/+route.ts`、`其他信息.txt`、`locales/th` | 代码包可能不是线上版本 | 核对线上 | DATA |

## 二、产品推广页

| ID | 问题 | 证据 | 影响 | 建议 | 决定 |
|---|---|---|---|---|---|
| EX-08 | "恰好 3 个正文位"是否作为硬规则；以及没有限时活动时 ETF 的第 3 个正文位放什么 | 7/7 版本都是 3 个；ETF 三版都含 `OFFER`，没有无活动版本 | ETF 活动已过期，下一版 ETF 页必然遇到 | 候选：无活动时用 `WHY-EBC` 填位（依据 OIL、CT 的做法）。需确认 | USER + GPT |
| EX-09 | 跟单页没有三步开户 | `copy-trading-{a,b}` 未传 `JoinSteps` | 不知道是有意取舍还是遗漏 | 维持现状作为跟单默认；向需求方确认原因 | USER |
| EX-10 | 监管条在 OIL、CT 的设计图里没有，代码里有 | `oil/*/design/pc.png`、`copy-trading/*/design/pc.png`；各 `jianguan` | 设计稿与上线版本不一致 | 以代码为准，记为 Required；设计模板应补上 | GPT |
| EX-11 | 运营数据条只在使用 `ClosingSection` 的页面出现 | OIL、CT 有；ETF 无 | 新 LP 是否默认带数据条 | 新项目以 `ClosingSection` 为准；数字需事实核验 | GPT |
| EX-12 | ETF 活动倒计时已于 2026-09-12 结束，但"0 手续费 0 隔夜利息"标题与吸底条"免息免手续费"仍在 | `etf-a/+Page.vue` 倒计时逻辑；`asset-review` CONFLICT-09 | `OFFER` 模块在活动结束后没有下线机制 | 结构规则已写明"过期即撤下"；需确认活动是否延期 | USER |
| EX-13 | ETF-B 没有 `riskWarning` 与 `footerEs` | `etf-b/+Page.vue` 的 import 列表 | 可能因为只开中文路由，也可能是遗漏 | 核对；新项目默认保留合规组件 | DATA |
| EX-14 | `usstocks` 代码包的归属、市场、上线状态未确认 | `website/us-stocks/X-usstocks-code/manifest.md` | 无法决定"首屏表单 LP"是否是一个正式类型 | 用户确认后再决定是否保留该类型 | USER |
| EX-19 | 设计图与代码漂移时以谁为准 | 4 个历史案例都有漂移（`asset-review/02` §7） | 影响以后入库与分析的口径 | 结构与文案以代码或线上为准，视觉以设计图为参考。本轮按此执行 | GPT |

## 三、官网页面

| ID | 问题 | 证据 | 影响 | 建议 | 决定 |
|---|---|---|---|---|---|
| EX-15 | 官网产品页只有 1 个案例，且只有设计图 | `website/us-stocks/D-official-design/` | 不能形成跨案例标准；主题标的、分类榜单、报价表三处内容重叠是否合理也无从判断 | 补充其他官网产品页（ETF、外汇、贵金属）的线上版本或代码 | DATA |
| EX-21 | 官网全局 Footer 与法律披露未见 | 设计图止于留资表单 | 合规层结构未知 | 补全站 Footer 资料 | DATA |
| EX-22 | 仓库里没有官网品牌页（关于 EBC、合作、招聘等）的原始资料 | `sources/website/` 只有 `us-stocks` | 任务清单中的"官网品牌页"本轮没有可分析的案例，未建文件 | 入库后再分析 | DATA |

## 四、跨类型与流程

| ID | 问题 | 影响 | 建议 | 决定 |
|---|---|---|---|---|
| EX-17 | 本轮两项证据未取得：① 3 个活动页线上地址（抓取需用户批准，请求未获响应）；② 7 个 LP 与 `usstocks` 的 locale 文件（路径层级超出读取限制） | 活动页结论为 `LIVE_NOT_VERIFIED`；LP 逐字文案为 `REPORT_DERIVED` | 用户批准抓取或提供线上截图；把 locale 所在目录单独连接后复核 | USER |
| EX-18 | `sources/campaigns/` 未按仓库约定入库：没有 `manifest.md`，`sources/INDEX.md` 没有登记，文件名未统一（`PC设计图.png`、`移动端.png`、`不完整代码包/`），`case-03` 含 `.DS_Store` | 来源追溯与后续引用不稳定 | 另起一次入库任务补 manifest 与索引。本轮按要求未改动 `sources/` | USER |
| EX-23 | 结构锁定与 `AGENTS.md` §1 的要求可能冲突。§1 要求"至少两个实质不同的页面策略"，本规范要求默认沿用模块组成与顺序 | Agent 可能不知道该以哪条为准 | 候选解释：在已有结构规范的页面类型下，"不同策略"体现在正文位的角色选择与内容取舍上，不体现在模块数量上。需写入 PM 流程后才生效，本轮未改 `AGENTS.md` 与 Skills | USER + GPT |
| EX-24 | `research/page-structures/` 尚未被 `AGENTS.md`、`research/README.md`、`CHANGELOG.md` 引用 | 其他 Agent 不会自动发现这些文件 | 结构规范经确认后再加入口与变更记录 | USER |

---

## 已确认的 Structure Override

（无）
