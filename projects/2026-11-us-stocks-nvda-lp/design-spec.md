# Design Spec · 英伟达（NVDA）为主的美股 CFD 推广页

> 轨道：**Track B（`Mode 1 · STANDARD_PRODUCTION`）** | 样式基线：`design/foundations/tokens-lp.css`
> 视觉蓝本：`sources/landing-pages/oil/A/design/pc.png`（暗→白→暗节奏 + 普通投资者四卡 + 3 栏酒红 EBC 面板 + 深酒红三步）& `etf/B/design/pc.png`（底部融合监管条 & 合作横卡轮播）

---

## 一、全页明暗节奏与模块映射（严格对齐 `OIL-A`）

| 区块 | 背景舞台 | 构图方式 | 移动端适配（X/IG/FB 主阵地） |
|---|---|---|---|
| `G2 + M01 + M02` Hero | 深酒红黑渐变（`--lp-hero-bg`） | 左 3 元素文案 + 右 NVDA 财报主视觉卡 + 底部四列监管条 | 文案居中 + 大按钮全宽可达 + NVDA 卡片紧随其下 + 监管条 2×2 |
| `B1` (`WHY-CARE`) | 纯黑深暗舞台（`#0B0B0E`） | 居中标题 + 2×2 深暗微红描边四卡（1 标题+1 短句+图标） | 2 列或单列紧凑卡，文字不缩小 |
| `B2` (`PRODUCT`) | 纯白高对比舞台（`#FFFFFF`） | 居中标题 + 左右并排 2 张大产品卡（左 NVDA 主力 / 右 6 大科技龙头） | 纵向 2 卡，NVDA 置顶 |
| `B3` (`WHY-EBC`) | 深酒红舞台（`--lp-dark-section-bg`） | 居中标题 + 1 块酒红玻璃大面板内嵌 3 列优势 | 面板内纵向 3 项，触控清晰 |
| `M07` 全球合作伙伴 | 浅白过渡舞台（对齐 `OIL-A` 浅底合作区） | 居中标题 + 5 张官方 PC/MB `<picture>` 成品卡横向轮播 + 箭头 | 自动切换 `mobile/*.png` 裁切版，手指顺滑横滑 |
| `M08` 简单三步 | 深酒红收束舞台 | 居中标题 + 3 张半透明编号圆角卡（`01 / 02 / 03`） | 纵向 3 卡 |
| `L1 + G3 + G4` | 白底极简页脚 + 白色吸底条 + 居中弹窗 | 滚出 Hero CTA 显示吸底条；弹窗含表单校验与社媒 UTM 归因展示 | 吸底条贴底避让，弹窗单手友好 |

---

## 二、真实品牌素材接入清单（`ASSETS_READY`）
- Header Logo：`design/assets/logos/on-dark/cn.svg` → 已独立复制至 `demo/assets/logo-cn-dark.svg`
- 合作伙伴 PC/Mobile 成品卡：`design/assets/partners/{pc,mobile}/{fcb,tradingview,un,oxford,cctv}.png` → 已独立复制至 `demo/assets/partners/`
- 零未授权外部图、零自绘巴萨徽章、零内部调试占位文案。

---

## 三、QA 状态
- **Engineering Audit**：按 `code-delivery-contract.md` 零依赖静态三件套交付，待浏览器实测确认。
- **Visual Critique**：`VISUAL_QA_PENDING`（如用户开启本地浏览器预览或授权内置浏览器，可补抓 PC 1440×900 与 Mobile 390×844 截图）。
