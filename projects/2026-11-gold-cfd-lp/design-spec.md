# Design Spec · 现货黄金（XAUUSD）CFD 推广页

> 轨道 B（`Mode 1`）| 地基：`design/foundations/tokens-apple-ui.css` v0.8 + `tokens-lp.css` + `apple-ui-component-spec.md`（v0.9 配图规则）
> 代码基线：复用 `projects/2026-11-us-stocks-nvda-lp/demo` V4 组件（导航、Bento、双卡、合作伙伴轮播、三步、吸底条、弹窗），只替换主题色与内容组件

## 一、明暗节奏与模块
| 区块 | 舞台 | 构图 | Mobile 390 |
|---|---|---|---|
| G2 + M01 | `#000` | 模式 A：居中两行 H1 + 副标题 + 单 CTA，3D 金条全幅舞台紧承按钮下方，上下渐隐融合 | 金条舞台放大至 165% 居中裁切，保证主体不缩成小图 |
| B1 WHY-CARE | `#000` | Bento：左主卡（金条渲染满出血 + 顶部可读性遮罩）+ 右三张次级卡（数据卡含金色涨幅胶囊） | 单列，主卡 22.5rem 高 |
| B2 PRODUCT | `#FFF` | 双卡 `#F5F5F7`：左 XAUUSD（金色 Au 徽标 + 三项指标 + 主按钮），右三行对比表（CFD 列加粗，表头品牌红） | 纵向两卡，表格字号 14px |
| B3 WHY-EBC | `#F5F5F7` | 白色面板：三栏信任 + 通栏四地监管号条（同一面板内，hairline 分隔） | 三栏纵排，监管号 2×2 |
| M07 | `#FFF` | 官方 PC 成品横卡轮播 + 箭头；`<picture>` 切换移动版 | 84% 宽横滑 |
| M08 | `#000` | 三张 `#161617` 卡，`01/02/03` 统一无衬线 + tabular-nums | 保持三列紧凑排布 |
| L1 / G3 / G4 | `#F5F5F7` / 白磨砂 / 白弹窗 | 吸底条在 Hero CTA 离开视口后出现；弹窗含校验、风险勾选、Esc/遮罩关闭、焦点返回、UTM 回执 | 吸底条文字不换行 |

## 二、主题色
- 仍以 `#A52933` 为唯一行动色。黄金只作焦点点缀：`--ui-gold #E9B949`（kicker、图标、数据胶囊、吸底条 XAUUSD 胶囊）、`--ui-gold-deep #B8862B`（徽标暗部）。无大面积彩色渐变。

## 三、素材
| 素材 | 来源 | 说明 |
|---|---|---|
| `demo/assets/hero-gold-stage.jpg` | 本项目 three.js 实时渲染（`render-src/gold-scene.html`） | 2400×1200，纯 `#000` 背景，边缘像素为纯黑，可无缝融入 Hero；原创几何体，无第三方品牌 |
| `demo/assets/bento-gold-bars.jpg` | 同上（`?shot=bento`） | 1400×1050，作为 B1 主卡满出血背景（v0.9 形态 B） |
| `demo/assets/logo-cn-dark.svg` | `design/assets/logos/on-dark/cn.svg` | 官方反白联合 Logo |
| `demo/assets/partners/{pc,mobile}/*.png` | `design/assets/partners/` | 5 组官方成品卡，未叠字 |

重渲染：`cd render-src && npm i three@0.160.0 && python3 -m http.server 8765`，再 `node render-shot.js hero 2400 1200 hero.png` / `node render-shot.js bento 1400 1050 bento.png`（需 Playwright Chromium）。

## 四、QA
- **工程**（Playwright，`file://` 打开）：1440 与 390 两端 `overflowX = 0`；无 console error；Hero CTA 打开弹窗；空提交显示错误；完整填写后显示回执并带出 `utm_source`；Esc 关闭；吸底条在滚出 Hero 后出现且隐藏时按钮不可 Tab；移动端菜单可开合。
- **视觉**：实渲染截图见 `qa/`。V1→V2 修订记录见 `iterations.md`。
- 未做：真机 Safari / 安卓 WebView 测试；Lighthouse 性能评分。
