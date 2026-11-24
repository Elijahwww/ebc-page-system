# EBC 页面代码交付标准（Code Delivery Contract · v0.6）

> **目标**：让 Codex / Claude Code / Gemini / Cursor 每次产出的页面代码都**开箱即预览、零依赖崩溃、交互全真实、可直接升级生产**，彻底避免“只跑得起一半”或“把文档塞进网页”。

---

## 1. 默认技术栈选择（零构建优先，拒绝过度工程化）

- **默认 Demo / 预览页（除非用户明确指定 React / Vue / Vike / Next.js）**：
  - 使用**单目录纯静态原生三件套**：`projects/<slug>/demo/index.html`、`styles.css`、`app.js`。
  - **零外部 CDN 强依赖、零 `npm install` 阻断**：既可以直接双击 `index.html` 离线预览，也可以用任意静态服务器（`python3 -m http.server` / Vercel / Netlify / GitHub Pages）秒级部署。
  - **严禁直接引用缺失的历史内部共享组件**（如仓库中没有源码的 `topMenuNoA`、`registryFormSSR`、`jianguan`、`ClosingSection`）。
- **当用户明确要求接入现有前端工程（如 Vike / Vue 3）**：再按目标工程结构拆分组件，并明确列出需后端对接的接口与共享组件清单。

---

## 2. 视觉与样式继承铁律（v0.8.0 强制）

- **全站统一 Apple-Grade 地基**：所有页面必须严格遵守 [apple-ui-component-spec.md](../foundations/apple-ui-component-spec.md) 与 [tokens-apple-ui.css](../foundations/tokens-apple-ui.css)：
  - **全站唯一统一无衬线字体 `--ui-font-sans`**：股票代码（`NVDA`/`AAPL`）、序号（`01`/`02`/`03`）与财务数字严禁使用 `monospace` 等宽字体，仅加 `font-variant-numeric: tabular-nums`；
  - **宽版心与大呼吸间距**：PC 标准版心 `1200px` / 宽版心 `1320px`，模块垂直留白 Desktop `88px–116px` / Mobile `64px–72px`，彻底告别窄版心和过扁拥挤模块；
  - **纯净表面 + 重点有彩不单调**：中性舞台（`#000000 / #161617 / #FFFFFF / #F5F5F7`，不铺大片泥泞渐变），但卖点模块采用 **Bento 主次分层 + 独立 3D 视觉 + 微交互**，标的代码必须带**彩色品牌识别徽标**；
  - **Hero 大胆纯视觉 & 配图透明底/满出血铁律（v0.9.0）**：推荐居中全幅 3D 背景图 Hero（核心元素呈现在按钮下方），监管与平台卖点按 `content/selling-points/ebc-selling-points-library.md` 智能分配位置；**所有 3D 独立配图必须为真透明底 PNG 且与标题/标签轴线明确对齐**（严禁把带黑色矩形底色的 JPG 直接贴进卡片露出方框边界）；带背景的完整场景图只能作为整张卡片或整个模块的满出血背景融合呈现，**严禁左文右无容器散图**；
  - 标题去逗号拆两行展示；主按钮用实心 `#A52933` 胶囊，Icon 用 `1.5px` 去盒化线性矢量，分割线用 `1px` 极细线。
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
