# ITER-20261124-009 · 统一字体、Apple 宽版心大呼吸、全幅 3D Hero 与 Bento 视觉层次升级（v0.8.0）

| 字段 | 内容 |
|---|---|
| **Trigger** | 用户逐图审查 `2026-11-us-stocks-nvda-lp` V2 的 5 张 PC/Mobile 实屏截图，给出 5 项明确系统级修改指令，并强调「先更新全局规则文件，再严格按规则产出页面」。 |
| **Scope** | `design/foundations/tokens-apple-ui.css`、`design/foundations/apple-ui-component-spec.md`、`design/foundations/tokens-lp.css`、`research/page-structures/landing-pages/product-lp-common.md`、`design/patterns/code-delivery-contract.md`、`CHANGELOG.md`；随后严格按 v0.8 规则重构 `projects/2026-11-us-stocks-nvda-lp` V3。 |
| **Evidence** | 用户 2026-11-24 上传的 5 张实屏截图（Mobile Hero 拥挤、B1 黑白平铺单调、B2 黑白代码卡片、M08 斜杠零等宽字体、PC 896px 版心过窄过扁）。 |
| **V1 → V2** | ① 彻底移除 `monospace`，全站文字/代码/序号/数字统一 `--ui-font-sans` + `tabular-nums`；② PC 版心从 `896px` 放宽至 `1200px`（宽容器 `1320px`），模块垂直间距从 `60px` 放宽至 `88px–116px`（Mobile `68px`）；③ 支持大胆的居中全幅 3D 背景图 Hero（视觉置于按钮下方），并将 `M02 监管条` 从 Hero 底部强制位松绑（监管自由组合规则留待下一步专项升级）；④ B1 升级为 Bento 主次分层（1 主力高光大卡配独立 3D 元素 + 3 次级交互卡）；⑤ B2 美股标的配品牌彩色徽标，明确配图只能为无缝 3D 或满出血容器图，严禁左文右无容器散图。 |
| **Why** | 先前 v0.7 虽然去除了脏渐变，但过度压低 PC 高度和收窄版心导致大屏空洞扁挤，全黑白卡片和 `monospace` 字体又让页面失去 Apple 级精致度与产品活力。 |
| **Status** | `USER_CONFIRMED`（严格遵守“先改规则，再执行页面”的治理原则）。 |
| **Validation** | 规则更新完成后立即按 v0.8 重构 `projects/2026-11-us-stocks-nvda-lp` V3 验证实屏效果。 |
| **Compatibility** | 全站通用地基生效于所有后续 LP 与官网项目；监管模块自由组合规则将在下一步专项补充。 |
| **PR / Commit** | 更新于桌面仓库 `main`，零改动 `sources/` 原始资料。 |
