# EBC 官方视觉资产池（Brand & Partner Assets · `ASSETS_READY`）

> **状态**：**`ASSETS_READY`**（2026-11-20 已由项目负责人完成 38 份官方品牌与合作伙伴物料入库）。
> **作用**：Codex / Claude / Gemini / Cursor 生成页面代码时，**直接按下方路径引用真实官方素材**（或复制到 `projects/<slug>/demo/assets/` 保证 Demo 独立可部署），禁止再用文字占位或 AI 自绘巴萨徽标。

---

## 一、14 语种 EBC × FC Barcelona 官方联合 Logo（共 28 份）

### 1. 深色/酒红背景专用反白版：`design/assets/logos/on-dark/`
> 白色 EBC 标 + 彩色巴萨队徽 + **白色**本地化合作文案。适用于 **轨道 B 投放 LP / 活动页深酒红 Hero** 与深色页头。

| 语种 | 文件路径 | 语种 | 文件路径 |
|---|---|---|---|
| 简体中文 (`zh-CN`) | `design/assets/logos/on-dark/cn.svg` | 繁体中文 (`zh-TW`) | `design/assets/logos/on-dark/tw.png` |
| 英语 (`en`) | `design/assets/logos/on-dark/en.svg` | 日语 (`ja`) | `design/assets/logos/on-dark/jp.svg` |
| 韩语 (`ko`) | `design/assets/logos/on-dark/kr.svg` | 泰语 (`th`) | `design/assets/logos/on-dark/th.png` |
| 越南语 (`vi`) | `design/assets/logos/on-dark/vn.png` | 印尼语 (`id`) | `design/assets/logos/on-dark/id.svg` |
| 西班牙语 (`es`) | `design/assets/logos/on-dark/es.svg` | 葡萄牙语 (`pt`) | `design/assets/logos/on-dark/pt.png` |
| 阿拉伯语 (`ar`) | `design/assets/logos/on-dark/ar.svg` | 印地语 (`hi`) | `design/assets/logos/on-dark/hi.svg` |
| 蒙古语 (`mn`) | `design/assets/logos/on-dark/mn.svg` | 乌兹别克语 (`uz`) | `design/assets/logos/on-dark/uz.svg` |

### 2. 浅色/纯白背景专用版：`design/assets/logos/on-light/`
> 酒红 `#5D2333` EBC 标 + 彩色巴萨队徽 + **黑色**本地化合作文案。适用于 **轨道 A 官网浅白页头 / 浅色文档**。

| 语种 | 文件路径 | 语种 | 文件路径 |
|---|---|---|---|
| 简体中文 (`zh-CN`) | `design/assets/logos/on-light/cn.svg` | 繁体中文 (`zh-TW`) | `design/assets/logos/on-light/tw.png` |
| 英语 (`en`) | `design/assets/logos/on-light/en.png` | 日语 (`ja`) | `design/assets/logos/on-light/jp.svg` |
| 韩语 (`ko`) | `design/assets/logos/on-light/kr.svg` | 泰语 (`th`) | `design/assets/logos/on-light/th.svg` |
| 越南语 (`vi`) | `design/assets/logos/on-light/vn.png` | 印尼语 (`id`) | `design/assets/logos/on-light/id.svg` |
| 西班牙语 (`es`) | `design/assets/logos/on-light/es.svg` | 葡萄牙语 (`pt`) | `design/assets/logos/on-light/pt.png` |
| 阿拉伯语 (`ar`) | `design/assets/logos/on-light/ar.svg` | 印地语 (`hi`) | `design/assets/logos/on-light/hi.svg` |
| 蒙古语 (`mn`) | `design/assets/logos/on-light/mn.svg` | 乌兹别克语 (`uz`) | `design/assets/logos/on-light/uz.svg` |

---

## 二、全球合作伙伴横卡素材（PC + Mobile 共 10 份）

> **重要使用规则**：以下成品图**已内置官方联合 Logo、摄影背景与中文标题**。实现时直接用 `<picture>` 响应式渲染并填写准确 `alt`，**严禁在图片上方重复叠加文字标题或假圆角遮挡**！

| 合作伙伴 | PC 端素材（横版卡片） | 移动端素材（竖/窄版裁切） | 适用市场与建议 `alt` |
|---|---|---|---|
| **巴塞罗那足球俱乐部** | `design/assets/partners/pc/fcb.png` | `design/assets/partners/mobile/fcb.png` | 通用（按市场合作权限）· `EBC 金融集团 — 巴萨官方合作伙伴` |
| **TradingView** | `design/assets/partners/pc/tradingview.png` | `design/assets/partners/mobile/tradingview.png` | 通用 · `EBC 金融集团 × TradingView — 携手打造专业级交易体验` |
| **联合国基金会** | `design/assets/partners/pc/un.png` | `design/assets/partners/mobile/un.png` | 通用 · `EBC 金融集团 — 携手联合国基金会抗击疟疾` |
| **牛津大学** | `design/assets/partners/pc/oxford.png` | `design/assets/partners/mobile/oxford.png` | 通用 · `EBC 金融集团 — 联合牛津大学举办研讨会` |
| **CCTV 专访** | `design/assets/partners/pc/cctv.png` | `design/assets/partners/mobile/cctv.png` | **仅限中文市场（`zh`）**，海外市场隐藏或替换为其他卡 · `EBC 接受 CCTV 专访` |

---

## 三、Agent 代码实现铁律

1. **按背景明暗精准选图**：深酒红/黑底 Hero（轨道 B）一律用 `logos/on-dark/<lang>.*`；纯白/浅灰页头（轨道 A）一律用 `logos/on-light/<lang>.*`，保持 `object-fit: contain` 不拉伸变形（建议桌面高度 `32–40px`，移动端 `26–30px`）。
2. **合作伙伴卡响应式输出**：使用 `<picture>`（`<source media="(max-width: 720px)" srcset=".../mobile/xxx.png">` + `<img src=".../pc/xxx.png">`），配合横向滑动轨道或左右箭头切换，贴合 `sources/landing-pages/etf/B/design/pc.png` 的呈现方式。
3. **Demo 独立可部署**：生成独立 `projects/<slug>/demo/` 时，将所需素材从 `design/assets/` 复制到 `demo/assets/` 并用相对路径引用，确保双击 `index.html` 或单目录部署 Vercel/Netlify/GitHub Pages 均零破图。
4. **中文以外语种**：当前 5 组合作伙伴图内置中文标题，进入非中文独立本地化阶段时需向设计索取对应语种版本，勿直接拿中文图发海外。
