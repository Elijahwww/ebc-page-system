# Page Structure · 产品获客推广页（Product LP）· 跨产品共用骨架

| 字段 | 内容 |
|---|---|
| Page Type ID | `LP_PRODUCT` |
| 结构状态 | `STRUCTURE_CANDIDATE`（待 GPT 复审 + 用户确认） |
| 分析日期 | 2026-11-13 |
| 证据范围 | 7 个版本的 `+Page.vue` 模板（本轮重读）+ PC 设计图 7 张、Mobile 设计图 3 张（ETF-A、OIL-B、CT-A）目检。Claude 当轮未能读取 locale，逐字文案依赖旧报告；**GPT 2026-11-13 已直接读取七份 zh_CN locale 与七份 Vue**（见 `../review-2026-11-13.md`），但仍未核验全部其他语言和线上。 |
| 产品分册 | [etf-cfd-lp.md](etf-cfd-lp.md) · [oil-cfd-lp.md](oil-cfd-lp.md) · [copy-trading-lp.md](copy-trading-lp.md) |

本文件定义 3 个产品共用的骨架。做具体产品时先读本文件，再读对应分册。

---

## A. 页面类型定义

- **适用场景**：单一产品、广告流量、独立推广域名（`ebcglobalmarketing.org`）、同一产品按人群拆版本。
- **页面主要目标**：注册开户。7/7 版本的全部 CTA 都打开同一个注册弹窗（`openRegisterDialog` → `registryFormSSR`）。
- **典型目标用户**：来源于版本目录名——小白投资者（ETF-A、OIL-A、CT-A）、专业投资者（OIL-B、CT-B）、中国大陆 ETF 用户（ETF-B）、平台存量客户（ETF-C）。
- **已分析案例**

| 版本 | 来源路径 | 人群 |
|---|---|---|
| ETF-A / B / C | `sources/landing-pages/etf/{A,B,C}/` | 小白 / 大陆 ETF 用户 / 存量客户 |
| OIL-A / B | `sources/landing-pages/oil/{A,B}/` | 小白 / 专业 |
| CT-A / B | `sources/landing-pages/copy-trading/{A,B}/` | 小白 / 专业 |

- **与活动页的结构分界**：产品 LP 的 Hero 只有一个 CTA，点击后弹出注册表单；活动页的注册表单直接内嵌在 Hero。不要混用。

---

## B. 标准模块结构

```
G1  顶部风险提示组件 riskWarning        合规层
G2  Anchor Nav                         系统级
M01 Hero（H1 两行 + 副标题 + 单一 CTA）  Required
M02 Trust / Regulatory block             历史 7/7 有信任/监管相关区域，组件不完全相同
B1  正文位 1  ┐
B2  正文位 2  ├ 3 个正文位，按"角色"填充    Required（7/7 恰好 3 个）
B3  正文位 3  ┘
M06 Ops Stats Strip 运营数据条          Conditional（OIL、CT）
M07 Brand / Partners 品牌与合作         Required（7/7）
M08 Open-Account Steps 三步开户         Conditional（ETF、OIL；CT 无）
L1  版权 + 风险提示                      合规层
G3  Sticky CTA Bar 吸底/停靠 CTA        系统级（7/7）
G4  Register Modal 注册弹窗             系统级（7/7）
G5  footerEs                           市场条件组件
```

**历史结构观察（不是强制规则）**：7/7 版本在 Hero 与收尾组之间都**恰好只有 3 个正文模块**（代码里的 `section2`、`section3`、`section4`）。不同版本改变的是这 3 个位置由哪种"角色"填充，而不是增加模块数量。状态 `CROSS_CASE_CONFIRMED`（7/7 版本，3/3 产品家族；部分共享模板，不能当作 7 个独立的转化实验）。默认可先用三个正文职责位，但**不据此强制新页面一定填满或最多三个**。

### 正文位的 5 种角色

| 角色 | 回答的用户问题 | 出现 |
|---|---|---|
| `WHY-CARE` 认知与动机 | 我为什么要关心这个市场或产品 | 5/7 |
| `PRODUCT` 产品形态与优势 | 交易的是什么、这种形式好在哪 | **7/7** |
| `WHY-EBC` 平台信任 | 为什么在 EBC 做 | 5/7 |
| `OFFER` 限时活动 | 现在做有什么额外好处 | 3/7（仅 ETF） |
| `PROOF` 社会证明前置 | 有多少人在用 | 1/7（CT-B） |

### 正文位 × 版本矩阵（`SOURCE_OBSERVED`，来自各版本 `section2`–`section4`）

| 版本 | B1 | B2 | B3 |
|---|---|---|---|
| ETF-A | `WHY-CARE` 长期收益对比 | `PRODUCT` ETF CFD 四优势 | `OFFER` 0 手续费 0 隔夜利息 + 倒计时 |
| ETF-B | `PRODUCT` 四优势（对照国内买 ETF） | `OFFER` 同上 | `WHY-EBC` 四卡 |
| ETF-C | `WHY-CARE` 长期收益对比 | `PRODUCT` 1 大卡 + 4 小卡 | `OFFER` 同上 |
| OIL-A | `WHY-CARE` 原油与生活 4 卡 | `PRODUCT` 两大原油 + 迷你行情 | `WHY-EBC` 3 项工具与监管 |
| OIL-B | `WHY-CARE` 油价驱动因素 4 卡 | `PRODUCT` 同上 + 条件脚注 | `WHY-EBC` 4 个执行数据卡 |
| CT-A | `WHY-CARE` 自己交易 vs 在 EBC 跟单 | `PRODUCT` 信号列表 `SignalList` | `WHY-EBC` 规模数据 + 3 功能 |
| CT-B | `PROOF` 社区规模 2 个大数字 | `PRODUCT` 信号列表 | `WHY-EBC` 3 功能 + 风控演示 |

### 顺序规律（`CROSS_CASE_CONFIRMED`）

- `WHY-CARE` 出现时总在 B1（5/5）。
- `WHY-EBC` 出现时总在 B3（5/5）。
- `PRODUCT` 在 B2（6/7）或 B1（ETF-B）。
- `OFFER` 紧跟 `PRODUCT`（3/3）。
- 收尾组顺序固定：`M06（如有）→ M07 → M08（如有）→ L1`（OIL、CT 设计图与 `ClosingSection` 调用一致；ETF 为 `M07 → M08 → L1`）。

---

## C. 模块标准表（共用模块）

正文位的具体内容字段见各产品分册。

| ID | 名称 | 顺序 | 信息职责 | 状态与条件 | 必要字段 | 核心交互 | PC / Mobile | 可自由变化 | 证据 |
|---|---|---|---|---|---|---|---|---|---|
| G1 | riskWarning | 页首 | 全局风险提示 | 合规层。代码 6/7（ETF-B 无）。组件无源码，展示形式未知 | 由组件决定 | 未知 | 未知 | 无 | 各 `+Page.vue` 模板首行 `<riskWarning />` |
| G2 | Anchor Nav | 顶部 | Logo + 页内锚点 | 系统级 7/7（`topMenuNoA`） | 锚点 4–5 项，对应 B1–B3、M07、M08 | 锚点滚动；导航内注册触发弹窗 | PC 横排；Mobile 汉堡菜单 | 锚点文案 | 各版本 `linkList` |
| M01 | Hero | 1 | 一句话价值主张 + 唯一行动 | Required 7/7 | H1（历史模板多为两行，非强制）；副标题；**一个主 CTA**；主视觉（酒红或黑底 + 3D 物件或 App 截图） | CTA → 注册弹窗 | PC 左文右图；Mobile 文案居中、CTA 在主视觉之上。Mobile 的 CTA 文案可与 PC 不同（OIL：PC"立即开户"、Mobile"开始交易原油"） | H1 动机、副标题、CTA 文案、主视觉 | 各版本 `section1` 或 `.hero`；PC 设计图首屏 |
| M02 | Trust / Regulation Block | Hero 底部或紧随其后 | 对当前可适用的实体、监管或可信信息进行真实披露 | 历史观察 7/7；`jianguan` 6 版，**ETF-B 采用独立 `honor-list` 监管实体轮播**；不是相同组件也不是当前所有市场都必须展示 4 地牌照。OIL/CT 设计稿未画出但 Vue 中有 | 需按服务实体/目标国家/牌照类型核实的字段，禁止直接沿用旧编号 | Mobile 横向滚动 | PC 一行 4 项；Mobile 滚动露出 | 无。监管表述以事实库和目标市场为准，不由 AI 改写 | ETF `.etfa-jianguan`；OIL `.oila-jianguan`；CT `.copya-jianguan` |
| M06 | Ops Stats Strip | B3 之后 | 两个运营数字 | Conditional：使用共享收尾组件 `ClosingSection` 的版本才有（OIL、CT，4/7）；ETF 无 | `100% 连续5年出金`、`24/7 全天候客服支持` | 无 | PC 与 Mobile 都是一行两项 | 无（数字需事实核验） | OIL、CT 的 PC 设计图；`<ClosingSection>` |
| M07 | Brand / Partners | 收尾组 | 品牌合作背书 | Required 7/7 | 标题 + 合作卡片（巴萨、联合国基金会、牛津、CCTV 等） | PC 箭头切换或横向排布；Mobile Swiper + 指示条 | 见左 | 卡片顺序；按语言替换卡片（ETF：CCTV 卡仅 `zh`） | ETF `#section5`；OIL、CT 设计图"全球合作伙伴" |
| M08 | Open-Account Steps | M07 之后 | 把开户压缩为 3 步 | Conditional：ETF 3/3、OIL 2/2 有；CT 0/2。CT 没有的业务原因未知，见 EX-09 | 标题 + 3 步（注册 → 身份验证 → 开始交易） | 无 | PC 3 列；Mobile 纵向 3 行 | 标题文案、图标 | ETF `#section6`；OIL `<JoinSteps>` |
| L1 | 版权 + 风险提示 | 页尾 | 实体版权 + "市场有风险 投资需谨慎" | 合规层 7/7 | `© 2026, EBC Financial Group (SVG) LLC…` + 风险提示 | 无 | 相同 | 无。`es` 语言隐藏此区并改用 `footerEs`（ETF-A/C、OIL、CT 代码） | ETF `.section6-footer`；`ClosingSection :show-bottom-tips` |
| G3 | Sticky CTA Bar | 悬浮 | 持续可见的行动入口 | 系统级 7/7 | 一行短文案 + 按钮 | ETF：首屏 CTA 离开视口后出现；OIL：PC 停靠条 `pc-dock` + 收尾吸底条 | PC 与 Mobile 均有 | 短文案 | ETF `.etf-footer`；OIL `.pc-dock`；`ClosingSection` `bar-text` |
| G4 | Register Modal | 弹层 | 注册表单 | 系统级 7/7 | `registryFormSSR` | 滚动锁定；提交后关闭 | PC 500rem 宽；Mobile 686rem | 无 | 各版本 `.register-modal` |
| G5 | footerEs | 页尾 | 西语市场页脚 | 市场条件组件（代码 6/7）。无源码 | 未知 | 未知 | 未知 | 无 | 模板末行 `<footerEs />` |

**贴近数据的说明文字**：出现数字、收益、交易条件的正文模块，在模块内紧跟一行脚注（ETF 收益对比的数据来源、OIL-B 交易条件说明、CT 信号"历史表现仅供参考"）。这是模块内字段，不是独立模块。3/3 产品都有，`CROSS_CASE_CONFIRMED`。

---

## D. 跨案例比较

**完全共用（7/7）**：G2、M01 的"两行 H1 + 一行副标题 + 单一 CTA"形态、M02、恰好 3 个正文位、M07、L1、G3、G4。

**同一位置的不同 Variant**：正文位的角色与内容（见矩阵）。同一产品的 A、B 版本共用模板，差异集中在 B1 与 B3。

**有业务原因的差异**

| 差异 | 原因 | 状态 |
|---|---|---|
| ETF-B 去掉 `WHY-CARE`，加入 `WHY-EBC` | 人群已经认可 ETF，问题从"为什么 ETF"变成"为什么换到 EBC" | `ANALYST_INFERENCE`，依据版本目录名与模块内容 |
| CT-B 的 B1 用 `PROOF` 代替 `WHY-CARE` | 专业人群先看规模 | `ANALYST_INFERENCE` |
| `OFFER` 只出现在 ETF | 只有 ETF 当时有限时活动 | `SOURCE_OBSERVED` |
| `PRODUCT` 位出现实时数据（OIL 迷你行情、CT 信号列表） | 产品本身有可展示的实时对象 | `SOURCE_OBSERVED` |

**没有业务原因、属于工程代际的差异**：ETF 是更早的独立实现；CT 与 OIL 使用共享组件 `ClosingSection`、`JoinSteps`（OIL 的根节点 class 仍是 `copy-trading-page`）。所以 M06 只在后两者出现。新项目应以 `ClosingSection` 的收尾组为准，这一条是 `STRUCTURE_CANDIDATE`。

**只是内容替换**：H1 与副标题、主视觉、卡片图标、数字、合作卡片顺序、CTA 文案、吸底条文案、多语言文本。

---

## E. 历史候选结构的默认调用规则（不是用户锁定）

1. **默认骨架**：`G1 · G2 · M01 · M02 · B1 · B2 · B3 · (M06) · M07 · (M08) · L1 · G3 · G4`。
2. **三个正文位仅为历史 7/7 版的高频默认起点**；新主题优先通过换角色、换内容、合并与下沉解决，但不要求强制填满三个，也不禁止确有证据的第四模块。真实新增先按 [模块准入](../../../pm/methods/page-logic-and-content-scope.md) 证明旧槽位承接不了，再提交当前项目的 Structure Override；未获用户确认不能把它升格新全局模板。
3. **角色选择**（`STRUCTURE_CANDIDATE`）：
   - `PRODUCT` 必选。
   - 人群对产品缺乏认知 → B1 用 `WHY-CARE`。
   - 人群已经在用同类产品 → 去掉 `WHY-CARE`，B3 用 `WHY-EBC`。
   - `OFFER` 只在存在**当前有效**的限时活动时使用，并且要有截止时间。活动过期即撤下（ETF 倒计时截止 2026-09-12 后文案仍在线，见 EX-12）。
   - 同一角色不占两个位置。
4. **单一行动**：全页 CTA 指向同一个注册弹窗。不新增第二种转化目标（留资表单、下载、咨询）。
5. **默认不新增历史中不存在的屏**：FAQ、评价、费用对比、视频、App 等只是 7 版未出现，非永久禁令；若 SEO、用户决策、真实产品机制或必要披露要求，按新增门槛论证/记录而非为“页面更完整”自动加上。
6. **不得删除适用的必需信息**：真实风险/版权/重要数据脚注、准确产品性质与实体监管信息；具体 G1/M02/L1 组件是否显示取决于所在市场、站点和适用义务，不能把 7 版样本的相同模块误当全球法律模板。
7. **实时数据模块**（行情、信号）需要真实接口与凭证管理，没有时返回需求方，不放静态假数据冒充实时。
8. **来源区分**：代码只证明代码包内容、设计图证明当时绘制版本、线上证明可访问时刻的页面状态；互有冲突需单独记录，不假定代码就是线上。所有交易条件/监管/活动必须另走已批准事实源。

---

## F. 证据缺口

- Claude 初次的逐字文案多为 `REPORT_DERIVED`；本次 GPT 已读取七份 zh_CN locale（`SOURCE_OBSERVED`，并不代表实际运行使用/获准），其他语言与运行时显示仍需复核。尤其 OIL-A zh_CN locale 含未使用的跟单遗留字段，不能把所有键当成页面真实文案。
- 共享组件 `ClosingSection`、`JoinSteps`、`SignalList`、`jianguan`、`riskWarning`、`footerEs`、`registryFormSSR` 无源码。M06、M07、L1 在 OIL、CT 中的内部顺序依据设计图。
- Mobile 设计图本轮只目检 ETF-A、OIL-B、CT-A；其余版本的移动端结论来自共用的响应式模板代码。
- 没有转化数据，无法判断哪种角色组合更有效。
- 没有"无活动的 ETF LP"案例，见 EX-08。
