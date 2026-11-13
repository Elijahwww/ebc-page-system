# Page Structure · 美股首屏表单推广页（`usstocks` 代码包）

| 字段 | 内容 |
|---|---|
| Page Type ID | `LP_FORM_IN_HERO`（暂定） |
| 结构状态 | **`SINGLE_CASE_CANDIDATE`**。只有 1 份代码，没有设计图、没有 URL、归属未确认。**不得作为通用标准使用** |
| 证据 | `sources/website/us-stocks/X-usstocks-code/code/usstocks/+Page.vue`（本轮重读）、同目录 `manifest.md`。locale 本轮未重读 |
| 为什么放在 `landing-pages/` | 这份代码存放在 `sources/website/` 下，但它的结构是推广页：路由 `/usstocks`，启用语言 zh、es、pt，无主站导航，首屏内嵌注册表单。它不是官网美股产品页的代码（见 [../website/product-page-us-stocks.md](../website/product-page-us-stocks.md)） |

---

## A. 页面类型定义

- **适用场景**：`ANALYST_INFERENCE` 面向西语、葡语市场的美股 CFD 获客页（表单默认语言与区号为西班牙）。
- **主要目标**：注册（首屏表单，提交后 `openWindow()`）。
- **目标用户**：未标注。
- **案例**：`US-X`，1 个。

## B. 模块结构（`SOURCE_OBSERVED`，仅代码）

```
G1 riskWarning
M01 Hero：Logo + H1 + 一行介绍 + 内嵌注册表单（无导航）
M02 Regulation Strip（jianguan，Hero 底部）
M03 对比卡：EBC vs 美股券商（4 行对照）
M04 为什么选择 EBC 做美股（4 项）
M05 关于 EBC（一段文字）
G5 footerEs
```

## C. 模块表

| ID | 职责 | 字段 | PC / Mobile | 证据 |
|---|---|---|---|---|
| M01 | 主张 + 立即注册 | Logo、H1（多行）、介绍、`registryForm` | Mobile 把 M03 的对比卡移入 Hero、放在表单之前 | `<section class="section1">`、`.mobile` 块 |
| M02 | 监管信息 | `jianguan theme="white"` | — | `.usstocks-jianguan` |
| M03 | 与传统美股券商对照 | 左列 4 个优势（勾）/ 右列 4 个痛点。"无税费"一行在该语言无译文时隐藏（`v-if='$t("无税费")'`） | PC 在 `section2` 顶部；Mobile 在 Hero 内 | `.section-content-card1` |
| M04 | 平台理由 | H2 + 4 项（标题 + 说明 + 图标） | — | `.section-content-card2` |
| M05 | 公司介绍 | H2 + 1 段正文 + 配图 | — | `.section-content-card3` |

## D. 与其他类型的关系

- 与 `LP_PRODUCT` 的差异：没有锚点导航、没有品牌合作、没有三步、没有吸底条；注册表单内嵌首屏，不走弹窗。
- 与 `CAMPAIGN_TRADING_INCENTIVE` 的共同点：首屏内嵌注册表单。
- 可借鉴的一点：按市场隐藏不适用的卖点行。这是模块内的 Market Override，不是结构变化。

## E. 使用规则

1. 本结构**不进入默认选型**。做美股推广页时默认使用 [product-lp-common.md](product-lp-common.md)。
2. 只有当需求明确要求"首屏直接注册"并得到用户确认时，才参考本文件，并按 Structure Override 记录。
3. 需要先由用户确认这份代码对应的页面、市场和上线状态。

> **GPT 2026-11-13 补充**：已直接读取 `sources/website/us-stocks/X-usstocks-code/code/usstocks/locales/zh_CN/index.ts`，可观察到“无税费”等历史营销字段；这并非当前获批事实。源码与官网美股设计图仍不能合并成同一页面，目标市场、线上状态、表单组件和商业文案需确认。

## F. 证据缺口

设计图、URL、上线状态、归属、locale 文案（zh 与 es 的经验年限表述不一致，已在 `asset-review` 登记）、`footerEs` 与表单组件源码。
