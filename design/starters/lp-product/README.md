# EBC `LP_PRODUCT` 官方干净启动底座（Starter · v0.11.0）

> **为什么建这个底座**：让 Codex / Claude Code / Gemini / Cursor 做新主题产品推广页（美股、黄金、ETF、原油、跟单、账户页等）时**直接复制这套干净代码起步**，不再去 `projects/` 目录东拼西凑复制上一个业务项目（避免带入旧主题残留注释、上下半页标题对齐割裂或硬编码样式）。

## 快速使用（3 步）

1. **复制到新项目目录**：将本目录的 `index.html`、`styles.css`、`app.js` 复制到 `projects/<slug>/demo/`。
2. **拷贝官方静态素材**：将 `design/assets/logos/on-dark/cn.svg` 与 `design/assets/partners/{pc,mobile}/*.png` 复制到 `projects/<slug>/demo/assets/`，并将 HTML 中 `../../assets/...` 改为 `./assets/...`（CSS 顶部两行 `@import` 改为 `../../../design/foundations/...` 或直接内联 Token），确保双击 `demo/index.html` 离线零破图。
   - 若面向非中文市场，按 `design/assets/README.md` 替换对应语种 Logo，并隐藏 `cctv.png`。
3. **只替换主题业务区（Hero / B1 / B2 / B3）**：
   - 从 [ebc-selling-points-library.md](../../content/selling-points/ebc-selling-points-library.md)（V14.1）按受众与渠道抽取 3–4 个高转化王牌卖点；
   - **保留已固化的视觉秩序**：全页 PC 标题对齐一致（默认全居中）、移动端所有标题/Hero 副标题一律居中、**移动端非 Hero 模块不展示副标题**（CSS 已内置 `.ui-section-lead` 移动端隐藏兜底）、全站统一 `--ui-font-sans`（零 `monospace`）；
   - **跨模型配图约定**：有商业级生图能力时（如 Codex / Gemini）为 Hero 与 B1 分别生成高质独立视觉（透明底 3D PNG 或满出血融合）；无原生生图能力（如 Claude Code）时优先复用上游素材，或让 B1 保留大号核心数字卡 + `1.5px` 线性 SVG Icon，严禁把 Hero 底图复贴给相邻的 B1，也严禁用粗糙手绘 SVG 充当商业配图。
