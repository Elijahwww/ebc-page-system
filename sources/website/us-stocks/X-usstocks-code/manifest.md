# `usstocks` 代码包 · X（归属待确认）

| 字段 | 内容 |
|---|---|
| 版本 ID | `US-X` |
| 关联 CASE | `CASE-004-X`（分析见 `cases/` 与初始导入报告） |
| 页面类型 | 页面代码（原放在"官网页面/美股产品介绍页/页面代码"下） |
| 目标人群 | 未标注；代码显示以 es / pt 市场为主，兼有 zh |
| URL | 无独立 URL 记录（路由 basePath 为 `usstocks`；同目录说明文件中的 URL 属于官网页面，见 D 版本） |
| 线上核查 | 未核查 |
| 语言 | onBeforeRender 启用 zh, es, pt（默认 zh）；route 列出 11 种 |
| 原始位置 | `D:\原始资产\官网页面\美股产品介绍页` |
| 导入日期 | 2026-11-11 |
| 文件数 / 大小 | 15 / 97.7 KB |

## 文件

| 仓库路径（相对本目录） | 原始路径（相对 `D:\原始资产`） | 大小 | 原文件 SHA-256（前 12 位） | 原始修改时间（UTC+8） | 说明 |
|---|---|---|---|---|---|
| `code/usstocks/+Page.vue` | `官网页面/美股产品介绍页/页面代码/usstocks/+Page.vue` | 26.3 KB | `c5863f005b41` | 2026-11-09 11:11 |  |
| `code/usstocks/+config.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/+config.ts` | 0.1 KB | `27ee652ab89c` | 2026-05-19 09:16 |  |
| `code/usstocks/+onBeforePrerenderStart.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/+onBeforePrerenderStart.ts` | 0.8 KB | `6b6d07135793` | 2025-12-17 11:27 |  |
| `code/usstocks/+onBeforeRender.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/+onBeforeRender.ts` | 0.8 KB | `c58ce75d8903` | 2025-12-17 11:27 |  |
| `code/usstocks/+route.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/+route.ts` | 0.4 KB | `ff69506aa43d` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/en/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/en/index.ts` | 7.7 KB | `91d80d8e096c` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/es/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/es/index.ts` | 1.9 KB | `82cf5e208d6f` | 2026-01-13 18:05 |  |
| `code/usstocks/locales/id/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/id/index.ts` | 7.6 KB | `0220238062b8` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/ja/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/ja/index.ts` | 9.2 KB | `ca32a7b877fc` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/ko/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/ko/index.ts` | 8.6 KB | `1c2f2ab7e9c0` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/pt/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/pt/index.ts` | 1.8 KB | `ed14aded8f0f` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/th/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/th/index.ts` | 14.7 KB | `ed9a7b981e3a` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/vi/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/vi/index.ts` | 9.4 KB | `85ed35492fb0` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/zh_CN/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/zh_CN/index.ts` | 1.6 KB | `59be2d32f825` | 2025-12-17 11:27 |  |
| `code/usstocks/locales/zh_TW/index.ts` | `官网页面/美股产品介绍页/页面代码/usstocks/locales/zh_TW/index.ts` | 6.7 KB | `0f6638800c10` | 2025-12-17 11:27 |  |

> 原始修改时间仅供参考：多个 `+Page.vue` 的时间为 2026-11-09 11:11（批量复制），设计图时间为导出时间，均不能用于判断版本先后。

## 脱敏与排除

- 未发现需要脱敏的凭证。
- 已排除：`code/usstocks/.DS_Store`、`code/usstocks/locales/.DS_Store`（macOS 系统文件）。
- 原始资料中不含 node_modules、构建产物或压缩包。

## 缺失内容

- 设计图（本地设计图属于 D 版本，不对应此代码）
- 页面 URL 与上线状态
- 归属确认：是否为独立页面 / 独立案例
- 共享组件源码 `@components/*`（registryFormSSR、topMenuNoA、jianguan、riskWarning、footerEs 等）
- `renderer/i18nSsr`、`renderer/googleFonts` 与公共 `locales/`
- 页面引用的图片资源 `@img/**` 与样式 `@style/**`
- 埋点/统计配置、投放与转化数据
- PRD / 需求说明 / 原始文案稿

## 备注（来自已完成的分析，不在此改写）

- `locales/en, zh_TW, id, ja, ko, th, vi` 为 Affiliate（联盟合作伙伴）页遗留文案，含公司公共邮箱（affiliate@ / cs@ / funding@ / public@ / support@ebc.com）与 Affiliate 申请链接；路由未启用
- `locales/zh_CN, es, pt` 为本页文案；zh 与 es 的经验年限表述不同（见冲突登记 CONFLICT-05）
