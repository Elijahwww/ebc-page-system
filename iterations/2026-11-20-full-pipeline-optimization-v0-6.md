# ITER-20261120-007 · 全链路端到端交付升级：路由降噪、事实收口、LP 视觉 Token 与代码/素材契约（v0.6.0）

| 字段 | 内容 |
|---|---|
| **Trigger** | 用户 2026-11-20 提出全盘优化需求：结合实际端到端执行经验与主流 Agent（Codex / Claude Code / Gemini / Cursor）特性，打通“文案 + 视觉 + 代码”全链路，使 Agent 首轮即可稳定输出可用成品页面。 |
| **Scope** | 新增 5 份高杠杆基建文件：`START-HERE-FAST-TRACK.md`、`content/facts/current-facts-and-bans.md`、`design/foundations/tokens-lp.css`、`design/patterns/code-delivery-contract.md`、`design/assets/README.md`；同步清理 `AGENTS.md`、`README.md`、`CHANGELOG.md`、`ebc-pm-strategy-debate/SKILL.md`、`ebc-pm-copy-critique/SKILL.md`、`trading-contest.md`、`design-review-checklist.md` 中的残留旧指令与冲突。 |
| **Evidence** | 全仓库审计发现 5 处系统性断层：① 200+ 文件无 1 页路由，导致 Codex/Cursor 类快速编码 Agent 漏读核心文档；② 业务事实与禁用雷区散落 6 个文件；③ `design/` 仅有浅白 `tokens.css`，缺少 LP 深酒红投放 Token 与代码交付规范，导致各模型每次从零瞎写 CSS 且常产出不可直接预览的破损工程；④ `design/assets/` 缺少官方 Logo/合作图 Drop-in 约定，导致页面出现“待替换”调试字样；⑤ `ebc-pm-strategy-debate` 等子 Skill 仍残留“无锁定结构/不限三屏”的旧语句，直接与 v0.5 冲突。 |
| **V1 → V2** | 建立「1 页极速路由 → 1 页事实红线总表 → 双轨 CSS Tokens (`tokens-lp.css` / `tokens.css`) → 零构建静态代码交付契约 → 品牌资产 Drop-in 目录」完整闭环，并彻底清扫子 Skill 与 QA Checklist 里的历史冲突表述。 |
| **Why** | 主流 Agent 最大的真实瓶颈不是“智力不够”，而是**上下文分散、规范互相打架、代码层缺具体 Token 锚点、以及缺失官方品牌图**。把分散的 20 份方法论压缩为按任务可直达的 4 个精确文件 + 真实截图 + 具体 CSS Token，才能让 Codex / Claude / Gemini / Cursor 在第一轮就稳定产出同一水准的成品页面。 |
| **Status** | `USER_CONFIRMED`（用户 2026-11-20 明确授权基于实操与主流 Agent 特性直接更新 `main`）。 |
| **Validation** | 本次已完成全仓库交叉引用核对、**38 份官方品牌与合作物料（14 语种 EBC×FCB 联合 Logo + 10 张 PC/MB 合作卡）入库 `design/assets/`**，并已完成 `2026-11-us-stocks-ant-lp` Demo 真物料接入；下一步可用新需求在 Codex / Claude / Gemini 实测首轮成品率（`NEXT_RUN_PENDING`）。 |
| **Compatibility** | 向后兼容所有既有 `projects/` 与 `sources/` 资产；`tokens-lp.css` 仅作用于轨道 B（投放 LP/活动页），不影响轨道 A（官网/工作台）的 `tokens.css`。 |
| **PR / Commit** | 直接更新于本地 `main`（零修改 `sources/` 原始资料），待用户确认是否统一提交并推送至 GitHub 远端。 |
