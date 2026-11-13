# Brief · 美股社媒推广页

- Slug：`2026-11-us-stocks-social-lp`
- 工作语言：`zh-CN`（中文主稿）
- 更新日期：2026-11-13
- 状态：`DRAFT_FOR_REVIEW`。市场与 Hero 形式已由用户确认；中文句子尚未获批。Demo ≠ Ready for Production。

## 用户原始需求

> 最近美股不错，我需要你帮我制作一个「美股」的推广页。Ad部门会用在社交媒体去做投放。面向投资者或者小白投资者用户群体。严格遵循仓库的要求。

## 用户补充确认（USER_CONFIRMED_IN_CHAT · 2026-11-13）

1. **目标投放市场为全球市场。** 默认先出中文方案。中文是工作语言和审稿语言，翻译与本地化是后续独立任务。本轮不生成多语种译稿。
2. **全球市场不能套用单一国家用户画像。** 地区与监管实体差异必须在方案中说明处理方式。
3. **Hero 使用按钮 CTA，不在 Hero 右侧放置内嵌注册表单。** 按钮按真实目标弹窗或跳转。当前没有真实注册地址，Demo 只做模拟。

## 由此锁定 / 不再作为开放问题

| 项 | 决定 | 状态 |
|---|---|---|
| `target_market` | 全球。不默认中国大陆，也不默认任何单一国家受众 | `USER_CONFIRMED_IN_CHAT` |
| `working_language` | zh-CN 主稿先行 | `USER_CONFIRMED_IN_CHAT` |
| 本地化 | 未启动。不产出多语种译稿 | `USER_CONFIRMED_IN_CHAT` |
| `HERO_CONVERSION` | 按钮 CTA。禁止 Hero 右侧内嵌注册表单 | `USER_CONFIRMED_IN_CHAT` |

## 任务目标

为 Ad 部门的社交媒体投放准备一页可审阅的中文美股推广落地页：完成 PM 决策、中文 Copy Sheet、可运行 Demo、PC/Mobile 渲染截图和视觉修订。不部署正式网站。

## 渠道与设备假设

- 渠道：社交媒体广告。具体平台、素材比例、受众定向未提供。
- 设备：社媒点击多数先落到手机。这是渠道假设（`HYPOTHESIS`），不是某一国家的用户画像。Demo 以移动端首屏可完成「看懂产品 + 找到按钮」为优先，同时保留桌面布局。

## 受众假设（全球，非单一国家）

- 用户给出的范围是「投资者或者小白投资者」，没有国家、语言习惯或已有券商账户的进一步限定。
- 方案同时照顾：已经理解 CFD 的人要核对条件；第一次接触的人可能把「美股」理解成买股票。
- 不使用中国大陆特有的渠道、税种例子或监管语境来代表全球访客。

## 页面分类（候选，未锁定）

- `PAGE_FAMILY`：`LP_PRODUCT`（单一产品、广告流量、目标是合格开户意向）
- `CAMPAIGN_MECHANIC`：`N/A`（没有奖品、排名或报名赛制）
- `HERO_CONVERSION`：`CTA_MODAL` 的 Demo 模拟。真实去向 `CTA_DESTINATION_PENDING`
- `STRUCTURE_SOURCE`：`research/page-structures/landing-pages/product-lp-common.md`
- `STRUCTURE_STATUS`：`STRUCTURE_CANDIDATE` / `GPT_REVIEWED_CANDIDATE`。**不是** `STRUCTURE_LOCKED`
- 明确不采用：`LP_FORM_IN_HERO`（`usstocks` 单例，且与已确认的按钮 CTA 冲突）；不把官网美股产品页整页骨架搬进投放页

## 仍须用户确认的开放问题

1. **注册跳转目标**：正式按钮打开哪一个注册弹窗，或跳到哪一个 URL / 域名？需要语言参数与广告归因时如何传递？确认前不得接真实开户。
2. **承接实体与禁投地区**：这次全球投放由哪一家 EBC 法律实体服务？哪些国家或地区不能投放？页脚应使用哪一套法定风险文本？
3. **条件的适用范围**：中文官网当前展示的 1:5 杠杆、股息现金调整，以及 2026-06-12 至 2026-12-31（UTC+3）的 0 手续费 / 0 隔夜利息，是否适用于本次投放的全部实体和账户类型？
4. **品牌素材**：精简 Header 是否放置已授权的 EBC Logo，以及是否在该投放市场展示 FC Barcelona 合作标识？当前 Demo 为文字占位（`ASSET_REQUIRED`）。
5. **中文句子是否获批**：本项目 Copy Sheet 仍是 `DRAFT`。已确认的是市场和 Hero 形式，不是某一句文案。
