# Design Spec · 美股 CFD 推广页（ANT 新上市焦点）

> 状态：`DESIGN_BASELINE_CANDIDATE` | 日期：2026-11-20 | 对应 Copy Sheet：`v2.0-draft`
> 遵循：`design/methods/visual-direction-and-iteration.md`、`design/foundations/tokens.css`、`design/patterns/header-brand-and-partnership.md`、`design/qa/visual-quality-scorecard.md`

---

## 一、Art Direction Brief（5 行）

1. **场景与任务**：承接 ANT 新上市与美股热点流量的独立推广页（`LP_PRODUCT`），模式以 **Persuade（说服转化）** 为主、**Read（机制澄清）** 为辅。
2. **渠道与设备**：Desktop 与 Mobile 并重（投放流量高概率来自移动端社媒/资讯流与桌面搜索），默认中文排版，弹性适配长句。
3. **审美方向与负面清单**：追求「Apple-inspired 清晰层级 × 机构金融刊物的精准克制」；**明确拒绝**全黑荧光赛博盘、同尺寸白卡平铺、通用 3D 球体装饰、满屏酒红按钮标签堆砌、伪实时跳动假报价。
4. **信息密度与节奏**：中等密度、有疏密起伏——首屏左文右数强锚点，中段通过 Tab 切换与 4 问折叠主动降密，收尾深炭黑聚焦 3 步开户。
5. **素材边界**：无授权矢量 Logo/巴萨徽章原文件，Header 用干净排版字标并标 `ASSET_REQUIRED`；严禁自绘第三方徽标；主视觉采用基于 2026-11-19 纳斯达克真实公开成交数据的定制高精度 SVG 轨迹图。

---

## 二、视觉策略选型（ART_DIRECTION_GATE）

### 选用方向 A：Institutional Precision Editorial（机构级明净金融刊物风）
- **视觉命题**：以纯净浅色阅读舞台保证金融机制与风险披露的高可读性，仅在 **ANT 首日行情复盘视觉卡** 与 **3 步开户收束区** 切入深炭黑（`#111216`），用明暗反差和等宽数字建立“机构级美股交易”的可信度。
- **色彩职责**：
  - 主舞台：`#FFFFFF`（纯白）与 `#F5F5F7`（柔灰）交替；
  - 市场焦点舞台：`#111216`（深炭黑，承载 ANT 走势卡与底部 3 步行动区）；
  - 品牌行动色：`#A52933`（EBC 酒红，仅用于主 CTA、当前激活态与核心信号点）；
  - 文本阶梯：`#1D1D1F`（主文字） / `#515154`（次级正文） / `#6E6E73`（脚注与元信息），均满足 WCAG AA ≥ 4.5:1 对比度；
  - 行情语义色：克制翠绿 `#15803D`（浅底）/ `#34D399`（深底）标示较发行价涨幅，暖琥珀 `#D97706` / `#F59E0B` 标示盘中回撤视角。
- **为什么专属本项目**：视觉主角就是 2026-11-19 真实的 `NASDAQ: ANT` 首日价格结构（\$83 → \$111.50 → \$114.99 → \$97.17），换掉产品与数据即失去成立基础。

### 被拒方向 B：Full-Dark Trading Terminal（全黑交易终端霓虹风）
- **为何拒绝**：1）全黑底+荧光绿容易沦为通用加密盘/AI 模板，削弱 EBC 多地监管的机构信任感；2）在无实时行情 API 时强行做终端风格，极易诱发假报价误导；3）长篇金融风险披露在纯黑屏上阅读疲劳度高。

---

## 三、Token 基准与项目级 Design Override

以 `design/foundations/tokens.css` 为起点，本项目声明以下 **Design Override**：
1. `--surface-market: #111216`（新增局部市场焦点暗面，比通用 `--ebc-bg-inverse: #1d1d1f` 更沉静，突出 SVG 价格曲线与等宽报价节点）。
2. `--ebc-section-space: clamp(4.25rem, 6vw, 6.25rem)`（相比基础 token 的 `6rem–9rem` 适度收紧约 20%，降低 LP 滚动总高度，避免桌面端模块间留白过大导致叙事断裂）。
3. 字体引入 `font-variant-numeric: tabular-nums` 专用于价格、百分比、序号与日期，确保数据列绝对对齐；不打包 Apple 受限字体文件。

---

## 四、响应式与交互矩阵

| 组件 | 触发器 | 桌面端表现 | 移动端表现（≤ 767px） | 状态与无障碍 |
|---|---|---|---|---|
| `G2` 精简导航 | 点击锚点 / 汉堡按钮 | 68px 固定顶栏，4 锚点 + 快捷 CTA | 58px 紧凑顶栏，右侧汉堡展开抽屉 + 快捷 CTA | `aria-expanded`、`Esc` 关闭、焦点可见 |
| `M01` Hero | 点击主 CTA / 锚点 | 1.15fr 左文 + 0.85fr 右侧 ANT 复盘卡 | 文案与主 CTA 置顶，ANT 复盘卡紧随其下 | 主 CTA ≥ 48px 高度，44px+ 触控区 |
| `B1` ANT 视角切换 | 点击「做多思路 / 做空对冲思路」 | 左图右侧三买点，切换高亮对应走势区间 | 纵向堆叠，按钮全宽分段控制 | `aria-pressed`、动态高亮 SVG 路径与注释 |
| `B2` 美股主线 Tab | 点击或方向键切换 3 主题 | 3 栏横向 Tab + 4 列/2×2 清晰标的网格 | 可横向滚动 Tab + 单列精致标的行 | `role="tablist"` / `aria-selected`；点击标的带入弹窗备注 |
| `B2` 关键机制问答 | 点击手风琴项 | 4 项精炼折叠，默认展开第 1 项 | 同结构，加大触控行高 | `aria-expanded` / `aria-controls` |
| `G3` Sticky CTA | Hero CTA 滚出视口 | 底部悬浮居中胶囊条（进入页脚自动隐藏） | 贴底全宽轻薄条，仅保留核心提示与 CTA | 不遮挡正文与页脚，尊重 `reduced-motion` |
| `G4` 注册弹窗 | 任意开户按钮 / 标的关注 | 居中 520px 模态框，背景锁定 | 底部抽屉/全宽弹层，便于单手输入 | 前端校验、必选风险勾选、Demo 提交回执、`Esc` 关闭 |

---

## 五、素材与待补清单（`ASSET_REQUIRED`）

- `EBC-LOGO-MAIN`：正式授权 EBC Financial Group SVG 矢量标（当前 Demo 用排版字标替代）。
- `PARTNER-FCB-LOCKUP` / 合作背书图：按投放市场授权确认是否展示及提供正式物料（当前 Demo 用克制文本排版呈现，严禁自绘巴萨徽章）。
- `REGISTER-API`：正式注册表单接口与 UTM 归因逻辑（当前 Demo 明确标为前端模拟演示）。

---

## 六、双轨 QA 记录（当前状态：`VISUAL_QA_PENDING`）

- **Visual Critique（V1 → V2）**：`VISUAL_QA_PENDING`（2026-11-20 尝试调用内置浏览器访问 `http://localhost:4173/` 时，因 `localhost:4173` 访问授权弹窗 60 秒超时未获确认，尚未采集到真实 Desktop/Mobile 渲染截图；严守规范不虚报视觉通过）。
- **Engineering Audit**：`NOT_OBSERVED_IN_BROWSER`（代码已按语义 HTML、ARIA `tablist`/`accordion`/`dialog`、键盘 `Esc`/方向键、`prefers-reduced-motion` 及表单校验编写；待用户授权 `localhost:4173` 后补做真实浏览器实测）。
