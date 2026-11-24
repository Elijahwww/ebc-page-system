# Iterations Log · 2026-11-us-stocks-nvda-lp

> 首次基于 **`v0.6.0` 全链路规范** 执行的真实产品推广页项目（回归验证 `Mode 1` 首轮直出成品率）。

## Round 1 · 首轮直出（2026-11-24）
- **Pre-Flight 达标**：先判定 `Mode 1 / Track B`，实际目检 `sources/landing-pages/oil/A/design/pc.png`（普通投资者版蓝本）及 `etf/B` / `oil/B`，核对 `content/facts/current-facts-and-bans.md` 与 2026-11-17 NVIDIA Q3 FY27 公开财报。
- **PM 与文案自审（V1 → V2 内部闭环）**：
  - D/C 阶段直接淘汰“暴涨红利”与“硬核半导体架构说明书”两类偏题方向，针对 X/IG/FB 普通投资者收紧为约 330 字极简高转文案，首轮通过 `LP_BLOAT_FAIL` 检查；
  - 主动剔除 `OIL-A` 历史稿中未经核验的“10 美金即可交易 / 100 倍杠杆 / 100% 连续 5 年出金”旧字段，严格守住真实性底线。
- **视觉与代码交付**：严格继承 `design/foundations/tokens-lp.css` + `OIL-A` 暗→白→暗节奏，直接接入 `design/assets/` 中的真实 EBC×巴萨反白矢量 Logo 与 5 张 PC/Mobile 官方合作伙伴成品卡，零构建静态三件套可直接双击预览或托管，支持社媒 `utm_source` 模拟归因。
- **当前状态**：`DEMO_READY` / `VISUAL_QA_PENDING`（待用户实看验收）。


---

## Round 2 · 实屏截图反馈 → 升级 `v0.7.0` Apple-Grade 前端地基 + 纯视觉 3D Hero 重构（2026-11-24）

- **用户实屏审查反馈**：确认整体结构与基本文案无问题，同时指出 4 项关键视觉优化要求：① Hero 右侧换为纯视觉 3D 元素而非文字财报卡片；② 压低 PC 各模块垂直高度、强化移动端排版（标题中间去逗号直接两行）；③ 去除全页多处大面积暗红渐变色；④ 建立参考 Apple.com 的统一前端基础规范（字体字重、纯中性表面、卡片、极细分割线、实心按钮、1.5px 去盒化线性 Icon）并沉淀为后续项目强制遵守的系统标准。
- **V1 → V2 实质重构**：
  1. **系统规范同步升级至 `v0.7.0`**：新建 `design/foundations/tokens-apple-ui.css` 与 `apple-ui-component-spec.md`，重构 `tokens-lp.css`，同步更新 `START-HERE-FAST-TRACK.md`、`AGENTS.md`、`design/README.md`、`code-delivery-contract.md`、`CHANGELOG.md` 与 `ITER-20261124-008`。
  2. **Hero 右侧替换为纯视觉 3D AI 芯片模型**（`demo/assets/hero-nvda-3d.jpg`），无缝融入纯黑 `#000000` 舞台，彻底拿掉文字柱状图框。
  3. **清除所有大面积暗红渐变**：全页切为纯净中性舞台交替（`#000000` / `#161617` / `#FFFFFF` / `#F5F5F7`），主按钮改为 Apple 比例纯实心 `#A52933` 胶囊，Icon 改为 `1.5px` 去盒化极细线性矢量，分割线统一为 `1px` 极细线。
  4. **压缩 PC 模块高度 + 无逗号两行标题**：PC 模块垂直 padding 收紧至 `60px`（Hero + 监管条一屏收束），所有含逗号 H2 去掉逗号直接两行排布，移动端 390px 节奏同步优化。


---

## Round 3 · 先升 `v0.8.0` 全局规则，再按新规则重构 V3（2026-11-24）

- **执行顺序**：严格先修改 `design/foundations/tokens-apple-ui.css`、`apple-ui-component-spec.md`、`tokens-lp.css`、`product-lp-common.md`、`code-delivery-contract.md`、`CHANGELOG.md` 与 `ITER-20261124-009`，再按新规则执行 V3 页面重构。
- **V2 → V3 逐项闭环**：
  1. **大胆全幅 3D Hero + 监管条松绑**：改为 Apple Keynote 居中全幅舞台（`demo/assets/hero-nvda-stage.jpg`），核心 3D GPU 光带紧承按钮下方；移除 Hero 底部拥挤的 4 列监管条（监管保留于 B3 平台优势，监管自由组合规则留待下一步专项升级）；Hero 到 B1 留白彻底舒展。
  2. **B1 打破纯黑白单调**：升级为 Apple Bento 主次分层——左侧高光大卡配独立无缝 3D 算力核心模型（`demo/assets/bento-compute-core.jpg`），右侧 3 卡加入 `$1,158 亿` / `同比 +103%` 亮眼翠绿数据锚点与细腻悬停交互。
  3. **B2 彩色品牌识别徽标**：NVDA 及 AAPL / MSFT / TSLA / META / AMZN / AMD 全部换装高辨识度彩色品牌徽标，告别单调黑白文字框。
  4. **全站统一唯一 Apple 字体**：彻底移除全站所有 `monospace` 等宽字体，股票代码、数字与 `01 / 02 / 03` 序号全部统一 `--ui-font-sans` + `tabular-nums`，彻底消除斜杠零。
  5. **PC 宽版心与舒展呼吸高度**：PC 内容版心从 `896px` 放宽至 `1200px`（宽视觉区 `1320px`），常规模块上下留白放宽至 `88px–116px`（Mobile `72px`），字体阶梯与卡片内边距同步按大屏比例舒展。


---

## Round 4 · 先升 `v0.9.0` 配图融合铁律 & 模块化卖点资产库，再修复 B1 满出血融合（2026-11-24）
- **规则先升级**：① 在 `apple-ui-component-spec.md` 与 `code-delivery-contract.md` 写死「3D 独立物体必须真透明底 PNG 且与文字轴线对齐；带背景完整图只能满出血铺满整卡/整模块融合，严禁内嵌黑色矩形框」；② 新建 `content/selling-points/ebc-selling-points-library.md` 模块化卖点资产库与受众/渠道智能落位矩阵。
- **按新规修复 B1**：将 `bento-compute-core.jpg` 改为整卡满出血背景（`object-fit: cover` + 顶部柔和可读性遮罩），彻底消除图片矩形边界。
