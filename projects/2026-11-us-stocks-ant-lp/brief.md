# Project Brief · 美股 CFD 推广页（以 Anthropic / ANT 新上市为核心切入）

| 字段 | 内容 |
|---|---|
| Project Slug | `2026-11-us-stocks-ant-lp` |
| 创建日期 | 2026-11-20 |
| 仓库基线 | `main @ 085c432` |
| 执行 Agent | Gemini (Antigravity) |
| 原始需求 | 「做一个美股的推广页，可以突出Anthropic（ANT）新上市的这只产品表现吸引力和买点，整体的主题还是美股。然后保持规范和我的要求。特别是文案和整个结构。交付一个可预览的在线页面即可」 |
| 工作语言 | `zh-CN`（中文主稿优先；本地化翻译不阻塞当前中文交付） |
| 目标市场假设 | 通用华语美股 CFD 投放流量（`HYPOTHESIS`，具体服务实体与地区限制上线前须由业务/合规确认） |
| 交付范围 | PM 决策包（D/R/U/C/S）+ 中文 Copy Sheet + Design Spec + 可运行预览 Demo + 真实浏览器截图 Visual Critique (V1→V2) 与 Engineering QA |
| 当前交付状态 | `DEMO_READY / VISUAL_REVIEW_READY`（非 `PRODUCTION_READY`） |

---

## 一、已核验的外部与内部关键事实（2026-11-20）

### 1. Anthropic（ANT）上市实时公开事实（`WEB_TEXT_OBSERVED`）
- **上市日期与交易所**：2026-11-19 正式登陆纳斯达克全球精选市场（Nasdaq Global Select Market），股票代码 **`ANT`**。
- **发行定价与募资**：发行价 **\$83.00 / 股**（高于 \$70–\$78 初始发行区间），基础募资约 **813 亿美元**。
- **首日交易表现（2026-11-19）**：
  - 开盘价：**\$111.50**（较发行价上涨约 34.3%）
  - 盘中最高：**\$114.99**（较发行价上涨约 38.5%，盘中完全稀释估值一度突破 2 万亿美元）
  - 收盘价：**\$97.17**（较发行价上涨 **+17.07%**；较开盘价回落约 12.85%，午后随科技板块整体走弱回吐部分涨幅）
- **来源**：公开财经报道（Nasdaq Trader / Morningstar / Fortune / CNA / Investing / TMGM，2026-11-19 至 2026-11-20）。

### 2. EBC 仓库内部事实与硬约束（`SOURCE_OBSERVED` / `USER_CONFIRMED_IN_CHAT`）
- **产品性质（HARD）**：EBC 提供的是**美股差价合约（Share CFDs）**，非美股正股持仓、非 IPO 原始股认购、不具股东投票权（`EBC-COPY-009`、`EBC-COPY-010`、`CASE-004`）。
- **集团定位（HARD）**：按「EBC 金融集团」多资产身份表达，不以“外汇券商”概括整个集团（`EBC-COPY-012`）。
- **监管表述（HARD）**：引用用户确认方向 `EBC-COPY-002`（「国际顶级监管」+「EBC 金融集团旗下各公司，在对应司法管辖区域内，均受到严格监管并获得顶级资质许可。」），**不擅自硬写跨市场冲突的监管编号**（`ISSUE-001`）。
- **Anthropic 状态冲突与待核验（`FACT_CONFLICT` / `TO_CONFIRM`）**：
  - 历史记录 `EBC-COPY-007`（2026-11-09）曾因上市前开放时间未定改为「敬请期待」；`EBC-COPY-009` 说明正式上市后 Pre-IPO CFD 自动转为股票 CFD，代码 `ANT` 不变，交易时段转为纳斯达克时段。
  - 2026-11-20 本轮需求明确以 ANT **已新上市** 为背景进行推广，但 EBC 实时 MT5 生产环境对各实体的 `ANT` 开放状态、合约规格与费率属于 `TO_CONFIRM_BEFORE_GO_LIVE`（不在页面中伪造未确认的固定杠杆、点差或已过期的“0 手续费/0 隔夜利息”活动，参见 `REV-03`、`CASE-004`）。
- **视觉与素材边界**：仓库 `sources/` 不含可直接用于生产的可编辑 EBC / FC Barcelona 授权矢量原文件；Demo 中 EBC Logo 以简洁排版字标呈现，合作背书不自绘巴萨徽章，标明 `ASSET_REQUIRED`（`design/patterns/header-brand-and-partnership.md`）。

---

## 二、待业务方正式上线前确认项（不阻塞当前 Demo）

| 阻塞项 | 说明 | 当前 Demo 处理 |
|---|---|---|
| `EBC_ANT_LIVE_STATUS` | 各法律实体在 MT5 上 `ANT` 美股 CFD 的实时可交易状态与具体合约规格（杠杆/最小手数/交易时段） | 页面写明「以 MT5 平台与所属实体实时公示为准」，不杜撰固定杠杆或费率 |
| `ACTIVE_PROMO_CHECK` | 当前是否有仍在有效期内的美股 0 佣金/0 隔夜利息活动 | 严守 `REV-03`，不复用已过期活动，取消 `OFFER` 模块 |
| `REGISTER_ENDPOINT` | 正式投放域名、注册表单后端接口、归因参数（UTM）与对应法律实体 | Demo 内提供完整交互注册弹窗并明确标为「演示模式」 |
| `BRAND_ASSETS` | 正式授权的 EBC 矢量 Logo、合作机构标识与目标市场实体页脚披露文本 | 标 `ASSET_REQUIRED`，严禁伪造第三方徽标 |
