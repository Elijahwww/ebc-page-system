# EBC 页面代码交付标准（Code Delivery Contract · v0.11.0）

> **目标**：让 Codex / Claude Code / Gemini / Cursor 每次产出的页面代码都**开箱即预览、零依赖崩溃、交互全真实、可直接升级生产**，彻底避免“只跑得起一半”或“东拼西凑抄上一个业务项目”。

---

## 1. 默认技术栈与官方 Starter 底座（v0.11.0）

- **常规产品 LP（`LP_PRODUCT` / `Mode 1`）起步铁律**：
  - **直接基于干净的官方底座 [design/starters/lp-product/](../starters/lp-product/) 开发**（含官方 EBC×巴萨页头、移动端抽屉、M07 官方 5 张合作伙伴 `<picture>` 成品卡、M08 简单三步、极简页脚、吸底条与 `inert` 无障碍弹窗），**不要直接去 `projects/` 目录复制上一个业务项目的 Demo 源码**（容易带入旧主题残留注释和上下对齐割裂）。
- **仓库多文件交付 vs 可选单文件预览**：
  - **仓库默认交付形态**：在 `projects/<slug>/demo/` 下保持**分离多文件原生三件套**（`index.html`、`styles.css`、`app.js` + `assets/`），零构建工具依赖、零外部 CDN 强依赖，既可双击 `index.html` 离线预览，也方便 Git diff 与前端拆组件。
  - **可选单文件分发版**：仅在用户需要单个 HTML 发人分享时可额外导出内嵌版，且**严禁把几十/几百 KB 的 Base64 图片塞进 `<meta property="og:image">`**（社媒抓取器不支持 data URI，只会白白让体积翻倍）。
  - **严禁直接引用缺失的历史内部共享组件**（如仓库中没有源码的 `topMenuNoA`、`registryFormSSR`、`jianguan`、`ClosingSection`）。
- **当用户明确要求接入现有前端工程（如 Vike / Vue 3）**：再按目标工程结构拆分组件，并明确列出需后端对接的接口与共享组件清单。

---

## 2. 视觉与样式继承铁律（v0.11.0 强制）

- **全站统一 Apple-Grade 地基**：所有页面必须严格遵守 [apple-ui-component-spec.md](../foundations/apple-ui-component-spec.md) 与 [tokens-apple-ui.css](../foundations/tokens-apple-ui.css)：
  - **全站唯一统一无衬线字体 `--ui-font-sans`**：资产代码（`NVDA`/`XAUUSD`）、序号（`01`/`02`/`03`）与数字严禁使用 `monospace`，仅加 `font-variant-numeric: tabular-nums`；
  - **宽版心与大呼吸间距**：PC 标准版心 `1200px` / 宽版心 `1320px`，模块垂直留白 Desktop `88px–116px` / Mobile `64px–72px`；
  - **全页标题对齐一致 + 移动端精简居中铁律**：PC 端全页模块标题对齐方式必须统一（全居中或全左对齐，严禁上半页左对齐、下半页居中）；**移动端（`≤ 767px`）各模块大标题与副标题一律居中，大标题去逗号拆两行，且除 Hero 空间充足时外，移动端其他正文模块默认不展示副标题**；
  - **跨模型配图铁律与降级方案**：① 独立 3D 元素必须为真透明底 PNG 且与标题/标签轴线对齐；② 完整场景图必须满出血铺满容器（`object-fit: cover`）+ 柔和遮罩；③ **禁止相邻模块复用同一张底图**；④ 有商业级生图能力时（如 Codex / Gemini）为 Hero 与 B1 分别定制高质实图；无原生生图能力时（如 Claude Code）严禁手绘粗糙 SVG 充当 3D 图，B1 改用**「大号核准数字指标卡 + `1.5px` 线性 SVG Icon」**建立视觉重心；
  - 主按钮用实心 `#A52933` 胶囊，Icon 用 `1.5px` 去盒化线性矢量，分割线用 `1px` 极细线。
- **Track B（`Mode 1` 常规产品 LP / 活动页）**：在 `tokens-apple-ui.css` 上叠加 [tokens-lp.css](../foundations/tokens-lp.css) 与 LP 密度硬尺。
- **Track A（`Mode 2` 官网 / 品牌页 / 工具平台）**：在 `tokens-apple-ui.css` 上结合项目 Art Direction 声明 Design Override。
- 字体使用合法系统字体栈；**严禁打包受限 Apple SF Pro 字体文件**。
- 响应式使用现代 CSS Grid / Flex + `clamp()`；**严禁复制旧代码全站 `vw-rem` 缩放或硬编码 `5600px` 固定高度**。

---

## 3. 真实交互与防假功能清单（交付前必检）

1. **零死按钮**：页面内所有 CTA、导航锚点、标的切换、移动端抽屉、弹窗关闭均必须真实可点击、有反馈。
2. **注册弹窗（`G4`）标准**：包含称呼、邮箱、区号+手机号、**必选风险确认勾选**、前端校验错误提示、键盘 `Esc` 关闭、点击遮罩关闭、焦点返回与明确的 **Demo 提交回执**（不向真实后端发请求，不把前端假提交说成真实开户）。
3. **吸底条（`G3`）标准**：使用 `IntersectionObserver` 监听首屏主 CTA，**滚出首屏才出现**，避免首屏双主 CTA 打架。
4. **零调试/内部文案泄漏**：面向用户的页面 UI 中**严禁出现** `COPY-M01`、`STRUCTURE_CANDIDATE`、`TODO`、`授权视觉待替换`、`占位图` 等内部开发/审稿标签——素材缺失信息只记录在 `design-spec.md` 与交付说明中，页面内用干净、体面的排版或渐变卡片自然呈现。

---

## 4. 预览交付与验收闭环

- **启动预览时**：若使用本地 HTTP 服务，优先绑定宿主机可访问地址（如 `http://127.0.0.1:<port>/`），并同时告知用户静态 `index.html` 的直接路径，防止沙箱/进程重启导致“拒绝访问”。
- **视觉与工程双轨分离 QA**：
  - 有真实浏览器截图能力时，采集 Desktop（1440×900）与 Mobile（390×844）截图，完成真实 V1→V2 视觉评审与交互/Console/溢出测试；
  - 无浏览器权限或截图受阻时，诚实标 `VISUAL_QA_PENDING`，绝不把代码自查说成视觉通过。
- **公网预览部署边界**：仅在用户明确要求提供公网分享链接时，才执行 Vercel / Netlify / GitHub Pages 预览部署；**未经明确授权，绝不触碰或部署任何正式生产官网域名**。
