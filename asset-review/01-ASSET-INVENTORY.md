# 01 资产清单（Asset Inventory）

- 扫描日期：2026-11-11（UTC+8）
- 扫描根目录：`D:\原始资产`（下文路径均相对此目录）
- 扫描方式：目录递归列举 + 静态读取（代码全文、中文/英文 locale、全部 16 张设计图切片目检）；未执行任何项目脚本，未安装依赖
- 完整文件级清单：`source-registry.csv`（157 条本地文件 + 8 条线上 URL）

## 1. 总览

| Case | 页面 | 类型 | 版本数 | 设计图 | 代码 | URL | 线上核查（2026-11-11） |
|---|---|---|---|---|---|---|---|
| CASE-001 | ETF CFD 推广页 | 推广页 | 3（A 小白 / B 大陆 ETF 用户 / C 存量客户） | PC+MB ×3 | Vue/Vike ×3 | `ebcglobalmarketing.org/etf-{a,b,c}/zh` | 文本一致 |
| CASE-002 | 原油 CFD 推广页 | 推广页 | 2（A 小白 / B 专业） | PC+MB ×2 | Vue/Vike ×2 + `test.html` ×2 | `…/oil-trading-{a,b}/zh` | 文本一致 |
| CASE-003 | 跟单推广页 | 推广页 | 2（A 小白 / B 专业） | PC+MB ×2 | Vue/Vike ×2 | `…/copy-trading-{a,b}/zh` | 文本一致 |
| CASE-004 | 官网 美股 CFD 产品页 | 官网 | 1 个设计版本（D）+ 1 个归属待确认的代码包（X） | PC+MB ×1 | `usstocks`（**与设计图不是同一页面**） | `www.ebc.com/zh-cn/trading-product/share-cfds/` | 未能访问 |

**合计：4 个页面主题 / 8 个页面版本（7 个推广页版本 + 1 个官网设计版本）+ 1 个未归属代码包。**

## 2. 目录结构（实际发现）

```
原始资产/
├── 官网页面/美股产品介绍页/
│   ├── 其他信息.txt                      # URL
│   ├── 设计图/{PC端设计图.png, 移动端设计图.png}
│   └── 页面代码/usstocks/                # Vike 页面，10 个 locale 目录
└── 推广页/
    ├── ETF 推广页/{A版本（针对小白投资者）, B版本（针对中国大陆购买ETF用户）, C版本（平台现有存量客户）}/
    ├── 原油推广页/{A版本（针对小白投资者）, B版本（针对专业投资者）}/
    └── 跟单推广页/{A版本（针对小白投资者）, B版本（针对专业投资者）}/
        每个版本：其他信息.txt + 设计图/{PC,移动端} + 页面代码/<slug>/{+Page.vue, +route.ts, +onBeforeRender.ts, +onBeforePrerenderStart.ts, +config.ts, locales/<lang>/index.ts}
```

- 未发现：项目说明文档、PRD、独立文案稿、已有 SKILL、Figma 源文件、图片素材（代码引用的 `@img/**` 均不在本地）、共享组件源码（`@components/**`、`renderer/**`、公共 `locales/`）。
- 每版本仅一套设计图 + 一套代码，未发现同版本的多轮迭代文件。

## 3. 逐页面资产

### CASE-001 ETF
| 版本 | 设计图（PC / MB 像素） | 代码要点 | 语言（路由） | 版本判定 |
|---|---|---|---|---|
| A | 1412×4289 / 736×8203 | `etf-a/+Page.vue` 68,264B；文案在 `locales/zh_CN` | 10 种（mn 注释），默认 en | 代码=线上；设计图较旧（实例数据、模块名不同） |
| B | 1920×5350 / 750×8296 | `etf-b/+Page.vue` 61,798B；**中文文案硬编码在模板**；无 `+config.ts` | 仅 zh | 代码=线上；locale 文件部分失效 |
| C | 1920×5838 / 750×9159 | `etf-c/+Page.vue` 69,114B；`+onBeforeRender.ts` 与 A 完全相同（含 Hero 预加载 `ETF/a/bg.webp`） | 10 种 | 代码=线上（文本）；Hero 图与设计图可能不一致（NV） |

### CASE-002 原油
| 版本 | 设计图 | 代码要点 | 语言 | 版本判定 |
|---|---|---|---|---|
| A | 1332×2913 / 575×5895 | 36,844B；实时行情接口 + Lightweight Charts；**含硬编码 token**；locale 残留跟单 key | 11 种（含 mn） | 代码=线上 |
| B | 1524×3775 / 710×7597 | 42,116B；同上 + 涨跌色、tooltip | 11 种 | 代码=线上；设计图 Section2 标题较旧 |
| — | — | `test.html`（A、B 各一份，内容相同）：行情卡原型，**含 token** | — | 开发草稿，非页面 |

### CASE-003 跟单
| 版本 | 设计图 | 代码要点 | 语言 | 版本判定 |
|---|---|---|---|---|
| A | 1499×2680 / 1126×9561 | 27,936B；对照卡切换；`SignalList` 共享组件 | 11 种 | 代码=线上；设计 CTA 文案较旧 |
| B | 1403×2551 / 694×6291 | 26,139B；`countTo`；亏损上限演示 | 11 种 | 代码=线上 |

### CASE-004 官网美股
| 资产 | 内容 | 判定 |
|---|---|---|
| 设计图 PC 1920×6434 / MB 375×6015 | 官网美股 CFD 页（AI 产业链主题） | 唯一可用的官网页面资料 |
| `页面代码/usstocks/` | `/usstocks` 路由，zh/es/pt，西语页脚，红金色对比卡式美股推广页 | **与设计图不对应**；`en`/`zh_TW` locale 为 Affiliate 页遗留文案 |

## 4. 无法读取或缺失

| 项 | 影响 |
|---|---|
| 官网线上页面（网络策略拒绝 `www.ebc.com`） | CASE-004 线上内容未核查 |
| 官网美股页代码 | CASE-004-D 无法记录精确设计数值与交互 |
| 共享组件 `registryFormSSR` `jianguan` `topMenuNoA` `ClosingSection` `JoinSteps` `SignalList` `countTo` `riskWarning` `footerEs` 及 `renderer/i18nSsr` | 表单提交、埋点、监管条内容、信号数据来源全部 NV |
| `@img/**` 图片资源 | 无法核对线上实际使用的图片（例如 ETF-C Hero） |
| 非中英文 locale（ja/ko/th/vi/id/es/pt/mn/zh_TW） | 仅列举未读，留待 Localization 阶段 |
| 投放与转化数据 | 所有"效果"类结论均无法成立 |
| `ETF A/其他信息.txt` URL 缺 `https://` | 不影响识别 |

## 5. 敏感信息

- `推广页/原油推广页/{A,B}/页面代码/oil-trading-{a,b}/+Page.vue` 与 `test.html` 中各含一个硬编码请求头 token（访问 `trade.ebccrm.com` 行情接口）。报告中全部脱敏；**不上传 GitHub**。建议工程侧确认其权限范围并考虑轮换。
- 未发现客户个人信息。
