# ITER-20261124-010 · 配图透明底/满出血融合铁律 & 模块化 EBC 卖点资产库（v0.9.0）

| 字段 | 内容 |
|---|---|
| **Trigger** | 用户审阅 `2026-11-us-stocks-nvda-lp` V3 B1 截图后指出：① 带黑色矩形底色的 3D JPG 直接放进 `#0D0E10` 卡片内露出了明显方框边界，且未与左对齐标题建立对齐关系；② 希望把监管及 EBC 所有核心卖点沉淀为模块化文档，由 AI 根据受众与页面场景自主选点与决定落位（Hero 轮播 vs B3 为什么选 EBC）。 |
| **Scope** | 更新 `design/foundations/apple-ui-component-spec.md`、`design/patterns/code-delivery-contract.md`、`START-HERE-FAST-TRACK.md`、`AGENTS.md`、`CHANGELOG.md`；新建 `content/selling-points/ebc-selling-points-library.md`；随后按新规修复 `projects/2026-11-us-stocks-nvda-lp` B1 主卡满出血融合呈现。 |
| **Evidence** | 用户 2026-11-24 上传的 B1 实屏截图（清晰可见卡片内部黑色矩形图片边界）及卖点库架构需求。 |
| **V1 → V2** | ① 固化配图二元铁律：独立 3D 元素必须为真 Alpha 透明底 PNG 并沿标题/标签轴线对齐；带背景完整图必须满出血铺满整卡/整模块并自然融合，严禁矩形图块悬浮卡片内；② 建立 5 大类结构化卖点资产库（每条含事实状态/适用受众/推荐落位/三档字数/素材/互斥去重），配套 AI 智能落位决策矩阵与用户速填模板。 |
| **Why** | 带底色矩形图片贴在深灰卡片上是破坏 Apple 级精致感的头号细节杀手；而平铺无结构的卖点清单会导致 AI 要么全部硬塞要么放错位置，只有结构化标签 + 去重矩阵才能让 AI 真正按受众自主取舍。 |
| **Status** | `USER_CONFIRMED`（严格遵循先改规则再改 Demo）。 |
| **Validation** | NVDA LP V4 已将 B1 左侧主卡改为满出血 `object-fit: cover` + 顶部柔和可读性遮罩，彻底消除黑框接缝；卖点资产库已就绪，待用户持续补充更多经核验业务卖点。 |
| **Compatibility** | 适用于全站所有 LP、活动页与官网项目。 |
| **PR / Commit** | 更新于桌面仓库 `main`，零改动 `sources/` 原始资料。 |
