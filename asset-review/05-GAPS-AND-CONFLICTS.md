# 05 缺失、冲突与质量问题（Gaps & Conflicts）

日期：2026-11-11。冲突记录**只登记、不裁决**；裁决结果应通过 PR 写入事实库或规则库，并在此标注关闭。

---

## 1. 冲突记录

| ID | 类型 | 冲突内容 | 证据 | 影响 | 建议处理 | 状态 |
|---|---|---|---|---|---|---|
| CONFLICT-01 | 资产归属 | 官网美股页设计图与 `usstocks` 代码不是同一页面 | `官网页面/美股产品介绍页/设计图/*` vs `页面代码/usstocks/+Page.vue`、`+route.ts`（basePath `usstocks`，zh/es/pt，`footerEs`） | CASE-004 无可用代码；usstocks 归属不明 | Elijah 确认：① 官网美股页代码位置；② usstocks 是否为独立案例 | OPEN |
| CONFLICT-02 | 数据 | ETF 收益实例：设计稿"1993 / 标普500 ETF / $26.89万"，且与同屏"纳指ETF 16.5%"口径不一；代码/线上"1999 / 纳指ETF / $16.83万" | `ETF 推广页/*/设计图/PC端设计图.png` vs `etf-a/locales/zh_CN` word17–19 | 设计稿不可作为数据来源 | 以线上为准；数据来源需登记（彭博/Morningstar 原始口径） | OPEN |
| CONFLICT-03 | 视觉 | ETF-C Hero 背景代码引用 `@img/ETF/a/bg.webp`（A 版图），设计稿为资管品牌方块图 | `etf-c/+Page.vue` L1213、L2167；`etf-c/+onBeforeRender.ts` | C 版 Hero 视觉可能与人群定位不符 | 人工打开线上页核对 | OPEN（NV） |
| CONFLICT-04 | 产品事实 | 股票/ETF CFD 杠杆：ETF 页 `5:1 杠杆`；官网设计 `5倍杠杆`；Elijah 既往指出产品页为 `1:20` | `etf-*/locales/zh_CN` word26/28；官网设计图 Hero；既往数据问题记录 | 杠杆为合规敏感信息 | 以交易平台/产品规格表为准写入事实库 | OPEN |
| CONFLICT-05 | 品牌事实 | 团队经验：zh `逾30年` vs es `más de 40 años` | `usstocks/locales/zh_CN` vs `locales/es` | 品牌叙事不一致 | 品牌部门确认 | OPEN |
| CONFLICT-06 | 品牌事实 | 产品数量：usstocks `200+全球热门资产`；Elijah 既往指出存在 300+ vs 200+ 不一致 | `usstocks/locales/zh_CN` 除美股外 | 同上 | 写入事实库并标注口径 | OPEN |
| CONFLICT-07 | 品牌内容 | 品牌合作集合与标题不一致：ETF"全球品牌影响力"（巴萨 / CCTV 仅 zh / 牛津）；原油/跟单"全球合作伙伴"（巴萨 / 联合国基金会抗疟 / 牛津 / 携手打造专业级交易体验 / CCTV）；ETF 设计稿含抗疟卡 | `etf-a` section5；`oil-trading-a/locales` s6*；ETF 设计图 | 组件化前需统一 | 建立品牌合作事实清单（含使用范围、地区限制） | OPEN |
| CONFLICT-08 | 术语 | 信号卡指标：代码 `盈亏比`；设计稿 `风险回报比`；说明文案同时解释两者 | `copy-trading-*/locales/zh_CN` s3Sharpe、s3Note1 | 用户理解 | 确认 SignalList 实际字段后统一 | OPEN |
| CONFLICT-09 | 活动有效期 | ETF 倒计时目标 `2026-09-12T00:00:00+03:00` 已过，"0手续费 0隔夜利息""免息免手续费"仍在线（2026-11-11 抓取）；官网设计亦有"0手续费、0隔夜利息" | `etf-*/+Page.vue` L62–67；WebFetch 记录 | 若活动已结束，属不实宣传风险 | 确认活动状态 | OPEN（NV，优先） |
| CONFLICT-10 | 文案 | 客服：`全天候客服支持` vs 原油-B MB 设计 `本地客服团队支持` | locale s5Label2；`原油推广页/B…/设计图/移动端设计图.png` | 小 | 以代码为准 | OPEN |
| CONFLICT-11 | 合规表述 | 页面版权实体为 `EBC Financial Group (SVG) LLC`，同时展示 FCA/CIMA/ASIC/FSCA 监管；官网头部 `FCA开户` | 全部推广页；官网设计图 | 与既往合规提示一致：主站由 SVG 实体服务，引用 FCA 需精确 | 合规给出标准表述 | OPEN |
| CONFLICT-12 | 流程文案 | 三步开户：`注册账户/身份验证/开始使用`（ETF）vs `注册开户/身份验证/开始交易`（原油）vs `注册账户/提交个人信息/入金交易`（官网） | 各 locale；官网设计图 | 组件化前需统一 | 以实际开户流程为准 | OPEN |
| CONFLICT-13 | CTA 文案 | `开设账户` / `立即开户` / `立即注册` / `即刻开户` 混用 | 各案例 | 小 | 制定 CTA 词表 | OPEN |

## 2. 资料缺失（Gaps）

| ID | 缺失 | 影响 | 建议 |
|---|---|---|---|
| GAP-01 | 官网美股页代码 | CASE-004 无精确数值/交互 | 提供官网仓库对应页面或线上 HTML 存档 |
| GAP-02 | 官网线上访问（本环境被拒） | CASE-004 未核查 | 在可访问环境截图 + 保存 HTML |
| GAP-03 | 共享组件与 renderer 源码 | 表单、埋点、监管条、信号数据均 NV | 提供 `@components/`、`renderer/`、公共 `locales/` 只读副本 |
| GAP-04 | 图片资源 `@img/**` | 无法核对线上图片 | 提供或允许线上截图 |
| GAP-05 | 投放与转化数据 | 所有效果类规则只能是 EXPERIMENT | 提供各版本 UV/注册/开户数据 |
| GAP-06 | PRD / 需求说明 / 人群定义原文 | 人群需求均为推断 | 补充需求文档或 Elijah 口述 |
| GAP-07 | 品牌事实与数据的官方来源（87.6%、前2.5%、20ms、50+、连续5年出金、$1,000,000、4,000+、16.50%） | 无法升级为 FACT | 建立事实库并附来源 |
| GAP-08 | 非中英文 locale 未审阅 | Localization 规则证据不足 | 下一阶段专项 |

## 3. 质量问题（OBS，可直接修复）

| 编号 | 问题 | 位置 |
|---|---|---|
| Q-01 | 硬编码 API token（前端可见） | `oil-trading-{a,b}/+Page.vue`、`test.html` |
| Q-02 | 运行时从 `unpkg.com` 加载第三方库 | `oil-trading-{a,b}/+Page.vue` `loadLightweightCharts` |
| Q-03 | `countTo` 静态渲染为 0 | `copy-trading-b`（线上 `0+` / `$0+`） |
| Q-04 | 脚手架残留（跟单 key、`copy-trading-page` class、Affiliate 文案、未启用 locale） | `oil-trading-*/locales`、`oil-trading-a/+Page.vue`、`usstocks/locales/{en,zh_TW}`、`etf-b/locales/*` |
| Q-05 | ETF-B 文案硬编码在模板，locale 中 word7/8 与线上不一致 | `etf-b/+Page.vue` |
| Q-06 | ETF-B"100+ 热门ETF"PC 描述与"无溢价"重复 | `etf-b/+Page.vue` section4 |
| Q-07 | 官网 MB 设计图 FAQ 为 ETF 内容；报价占位 `1.17781`；涨幅数据前后不一 | `官网页面/美股产品介绍页/设计图/*` |
| Q-08 | 原油-B MB 设计图布伦特卡标为 "WEST TEXAS OIL" | `原油推广页/B…/设计图/移动端设计图.png` |
| Q-09 | 跟单设计稿信号卡使用测试账户 `Hhesariacc test...` | `跟单推广页/*/设计图/*` |
| Q-10 | 官网 FAQ"规避…印花税"不适用美股 | 官网设计图 FAQ 1 |
| Q-11 | 注册弹窗逻辑逐页复制约 70 行 | 7 个 `+Page.vue` |
| Q-12 | `ETF A/其他信息.txt` URL 缺协议头 | — |

## 4. 需合规审核的表述（NV）

- "长期收益跑赢100%固收产品"（001-C 副标题）
- "无溢价 / 所见即所得，成本价购买ETF"（CFD 是否适用）
- "享有股息分配 / 持有ETF即享全球资产成长红利"（CFD 为股息调整）
- "资金独立托管 / 最高级别资金保护"
- "100倍杠杆 / 100:1"、"5:1 / 5倍杠杆"
- "10美金即可交易"
- "加入全球最佳券商"
- "累计跟随收益超 $1,000,000"、"4,000+ 投资者正在跟单"
- "87.6% … 行业前2.5%"、"连续5年出金 100%"
