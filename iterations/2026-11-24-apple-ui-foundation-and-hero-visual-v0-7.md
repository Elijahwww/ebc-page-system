# ITER-20261124-008 · Apple-Grade 强制前端基础规范与纯视觉 Hero 规则（v0.7.0）

| 字段 | 内容 |
|---|---|
| **Trigger** | 用户审阅 `projects/2026-11-us-stocks-nvda-lp` V1 真实截图后确认结构与文案达标，同时指出 4 项关键视觉系统缺口：① Hero 右侧放了文字财报卡而非 3D/透明元素；② PC 各模块垂直高度过高；③ 全页多处铺了大面积暗红渐变；④ 需先建立参考 Apple.com 的统一前端基础规范（字体字重、颜色、卡片、分割线、按钮、Icon 与无逗号两行标题），后续项目严格遵守。 |
| **Scope** | 新增 `design/foundations/tokens-apple-ui.css`、`design/foundations/apple-ui-component-spec.md`；重构 `design/foundations/tokens-lp.css`；更新 `START-HERE-FAST-TRACK.md`、`AGENTS.md`、`design/README.md`、`design/patterns/code-delivery-contract.md`、`CHANGELOG.md`；并按 v0.7 完整重构 `projects/2026-11-us-stocks-nvda-lp` V2。 |
| **Evidence** | 用户 2026-11-24 上传的 3 张真实 PC 渲染截图及逐条审美指令（`USER_CONFIRMED` / `C3 结果纠错`）。 |
| **V1 → V2** | ① 彻底移除 B1/B3/M08 与 Hero 的大面积酒红渐变色，切回纯净中性舞台（`#000000 / #161617 / #FFFFFF / #F5F5F7`）+ 实心 `#A52933` 主按钮；② 建立精确 Apple.com 字号/字重/行高/字距表与紧凑 PC 模块高度（`56px–64px`）；③ 统一 `1.5px` 去盒化线性 Icon 与 `1px` 极细分割线；④ 规定标题去逗号直接两行排版；⑤ Hero 右侧改为纯视觉无文字 3D AI 芯片模型图（`hero-nvda-3d.jpg`），零文案图表框。 |
| **Why** | 先前 Track B 过度模仿旧图里的整屏暗红渐变且没有锁定字重、Icon 与模块高度，导致页面显得偏厚重、偏高、偏老派；只有先把 Apple.com 级的字体层级与纯净基础组件锁死为全站地基，单模块设计元素才能高级且稳定复现。 |
| **Status** | `USER_CONFIRMED`（2026-11-24 用户明确要求建立全站严格遵守的前端基础规范）。 |
| **Validation** | `projects/2026-11-us-stocks-nvda-lp` V2 已按新规范完成重构并换装无缝纯黑 3D Hero 视觉图，待用户实屏复核。 |
| **Compatibility** | `tokens-apple-ui.css` 作为全站通用地基适用于 Mode 1（LP/活动）与 Mode 2（官网/品牌/工作台）；特殊主题活动允许局部视觉点缀，但不得破坏字体字重阶梯与纯净表面纪律。 |
| **PR / Commit** | 直接更新于桌面仓库 `main`，待用户确认后推送；**零修改 `sources/` 原始资料**。 |
