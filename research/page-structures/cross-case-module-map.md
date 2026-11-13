# 跨案例模块映射（Cross-Case Module Map）

状态：`STRUCTURE_CANDIDATE` · 2026-11-13
用途：判断"我想加的这个东西，是不是已有模块的一个 Variant"。先查本表，再决定是否需要 Structure Override。

案例缩写：`TC` 交易激励活动 3 例；`ETF` 3 版；`OIL` 2 版；`CT` 2 版；`US-X` usstocks 代码包；`US-D` 官网美股设计图。

---

## 1. 通用模块 × 页面类型

✓ 全部出现　◐ 部分出现　✗ 未出现　? 未知

| 通用模块 | 活动页 TC（3） | 产品 LP（7） | US-X（1） | 官网 US-D（1） | 说明 |
|---|---|---|---|---|---|
| `NAV` 导航 | ✓ 锚点 | ✓ 锚点 | ✗ | ✓ 主站全局导航 | 两种 Variant，不可互换 |
| `HERO` | ✓ 内嵌表单 | ✓ 单一 CTA → 弹窗 | ✓ 内嵌表单 | ✓ CTA + 图片墙 | 见 §2 |
| `REG-STRIP` / `TRUST` 监管/可信度区 | ✗ | ✓（7/7 有区域，**6/7 复用 jianguan，ETF-B 为独立 honor-list 监管轮播**） | ✓ | ✗（设计图） | 各实体牌照内容需重新核实，不把旧编号直接复用 |
| `PRIZE` 奖励 | ✓ | ✗ | ✗ | ✗ | 活动页专有 |
| `MECHANISM / LEADERBOARD` | ◐ 2/3 | ✗ | ✗ | ✗ | 活动页条件位 |
| `WHY-CARE` 认知与动机 | ✗ | ◐ 5/7 | ✗ | ✗ | LP 正文角色 |
| `PRODUCT` 产品说明 | ✗ | ✓ 7/7 | ◐ 对比卡 | ✓ 主题标的 + 榜单 | |
| `OFFER` 限时活动 | ✗ | ◐ 3/7（ETF） | ✗ | ✗（卖点在 Hero） | 需要有效活动 |
| `WHY-EBC` 平台信任 | ◐ 1/3（About EBC） | ◐ 5/7 | ✓（为什么选择 + 关于） | ✗ | 见 §2 |
| `LIVE-DATA` 实时数据 | ◐ 1/3 排行榜 | ◐ 4/7（OIL 行情、CT 信号） | ✗ | ✓ 报价表 | 都需要真实接口 |
| `OPS-STATS` 运营数据条 | ✗ | ◐ 4/7（OIL、CT） | ✗ | ✗ | `ClosingSection` 自带 |
| `BRAND` 品牌合作 | ✗ | ✓ 7/7 | ✗ | ◐ 留资区视觉 | |
| `STEPS` 步骤 | ✓ 参与步骤 | ◐ 5/7 开户步骤 | ✗ | ✓ 开户步骤 | 见 §2 |
| `RULES` 活动规则 | ✓ | ✗ | ✗ | ✗ | 活动页专有，属披露内容 |
| `FAQ` | ✗ | ✗ | ✗ | ✓ | 官网专有 |
| `CLOSING-CTA` 页尾行动 | ◐ 1/3 横幅 | ✓ 吸底条 | ✗ | ✓ 留资表单 | 见 §2 |
| `REGISTER-MODAL` 注册弹窗 | ✗ | ✓ 7/7 | ✗ | ? | |
| `LEGAL` 版权 + 风险提示 | ◐ 2/3 | ✓ 7/7 | ? | ?（设计图无页脚） | 合规层 |
| `RISK-TOP` 顶部风险组件 | ✗ | ◐ 6/7 | ✓ | ? | 合规层，组件无源码 |

**读表结论**

- **纠错**：并非所有类型都有 `NAV`（US-X 列为 ✗），而所有类型的 `HERO` 形式与具体转换路径也不同。可观察的共同点是均有某种首屏核心主张和行动入口，不可按此推断必须有导航或同一表单。
- 在**本次来源样本**中，`PRIZE`、`RULES` 仅活动页；`FAQ`、报价表仅官网设计；监管/品牌/吸底条主要出现于产品 LP。**没有出现 ≠ 不允许出现**；新项目需要时应先核用户任务、真实条件、现有模块是否可承接，之后记项目级 Structure Override。
- `STEPS` 在活动页、部分产品 LP 和官网设计均出现，但不是所有产品 LP 都有（CT 两版无）；步骤内容和数量由本次真实流程决定，不把历史三步写成通用上限。

---

## 2. 同一模块的 Variant 对照

### HERO

| Variant | 结构 | 使用类型 | 证据 |
|---|---|---|---|
| `HERO-CTA-MODAL` | 两行 H1 + 一行副标题 + 一个 CTA，点击弹出注册 | 产品 LP 7/7 | 各 LP `section1` / `.hero` |
| `HERO-FORM-EMBED` | 标题 + 副标题 + 日期 + 首屏内嵌注册表单 | 活动页 3/3；US-X | TC 各 `section1`；`usstocks` `section1` |
| `HERO-SITE` | H1 + 卖点 + 标签 + CTA + 图片墙，下接产品分类切换 | 官网 1/1 | US-D 设计图 |

选型规则（`STRUCTURE_CANDIDATE`）：页面类型决定 Hero Variant，不由 AI 按"转化更直接"自行改换。

### STEPS

| Variant | 三步内容 | 附带 | 使用 |
|---|---|---|---|
| `STEPS-PARTICIPATE` | 注册并报名 → 完成活动条件 → 领奖或参赛 | 回到表单的 CTA（2/3）或提示条（1/3） | TC 3/3 |
| `STEPS-OPEN-ACCOUNT` | 注册 → 身份验证 → 开始交易 | 无 CTA（LP）；带 CTA（官网） | ETF 3/3、OIL 2/2、US-D |

共同点：全部是 3 步；PC 横排、Mobile 纵排。CT 两版没有步骤模块。

### WHY-EBC / 品牌信任

| Variant | 形态 | 使用 |
|---|---|---|
| `WHY-EBC-FEATURES` | 3–4 项功能或条件卡 | ETF-B、OIL-A、CT-A、CT-B、US-X |
| `WHY-EBC-METRICS` | 4 个执行数据卡 + 说明浮层 | OIL-B |
| `ABOUT-EBC-PARAGRAPH` | 一段公司介绍 + 合作视觉 | TC-03、US-X |
| `BRAND-PARTNER-CARDS` | 合作卡片轮播 | LP 7/7 |
| `REG-STRIP` | 四地监管编号条 | LP 7/7、US-X |

这几项都在回答"凭什么信任 EBC"。同一页面内不应把同一类证据重复放两次（ETF-B 历史稿里有重复文案）。

### LIVE-DATA

| Variant | 数据 | 依赖 | 使用 |
|---|---|---|---|
| `LEADERBOARD` | 排名、收益率、奖励 | `rankingTable` + 活动 ID | TC-03 |
| `MINI-QUOTE` | 实时价 + 迷你走势 | 行情接口 + 图表库 | OIL-A、OIL-B |
| `SIGNAL-LIST` | 信号卡 | `SignalList` 组件与数据 | CT-A、CT-B |
| `QUOTE-TABLE` | 报价表 + 筛选 | 报价数据源 | US-D |

共同规则：没有真实数据源时不上线、不放占位数据。

### CLOSING-CTA

| Variant | 形态 | 使用 |
|---|---|---|
| `STICKY-BAR` | 吸底或停靠条：短文案 + 按钮 | LP 7/7 |
| `CLOSING-BANNER` | 页尾横幅：标题 + 按钮，滚回表单 | TC-02 |
| `STEPS-CTA` | 步骤模块底部按钮，滚回表单 | TC-01、TC-03 |
| `LEAD-FORM` | 留资表单 | US-D |

### PRIZE 内部（活动页）

| Variant | 卡内字段 | 使用 |
|---|---|---|
| 实物奖品网格 | 等级 + 奖品图 + 奖品名 | TC-01 |
| 档位 + 门槛卡 | 档位名 + 奖品 + 净入金门槛 + 手数门槛 | TC-02 |
| 名次 + 现金 | 名次区间 + 金额 | TC-03 |

---

## 3. 系统级与合规层（不属于 AI 可增删的营销模块）

| 组件 | 性质 | 出现 | 规则 |
|---|---|---|---|
| 主站 Global Header / Footer | 全局 | 官网 | 由官网统一维护，按现状接入 |
| 产品分类切换 | 频道级 | 官网 | 同上 |
| 锚点导航 `topMenuNoA` | 系统级 | LP、活动页 | 锚点随模块自动对应 |
| 注册表单 / 注册弹窗 | 转化组件（按业务与数据授权） | 已观察页面均有某种注册入口 | 字段/适用地区由本次业务配置与表单服务决定；首屏嵌入和弹窗并非跨类型硬规则 |
| 吸底 CTA | 系统级 | LP | 文案可换，存在与否不由 AI 决定 |
| `riskWarning`、`bottomTips`、版权行、`footerEs` | 合规/站点层 | LP、活动页有不同出现 | 必需事实及披露不可省；真实组件/市场差异需核实，**并非每个历史代码包都包含上述所有组件** |
| 监管条 `jianguan` | 合规相关 | LP | 表述按市场与实体核实 |
| 活动规则 `RULES` | 活动披露 | 活动页 | 必须有，全文展开 |
| 数据脚注、"历史表现仅供参考" | 模块内披露 | LP | 跟随数据所在模块 |

---

## 4. 共享组件对照（来自 `import`，源码均不在仓库）

| 组件 | 使用页面 | 对应模块 |
|---|---|---|
| `topMenuNoA` | LP 7、TC 3 | NAV |
| `registryFormSSR` | LP 7、US-X | 注册弹窗 / 首屏表单 |
| `registryFormSSRAPP`、`registryFormSSRAPPGlobal` | TC 3 | 活动页首屏表单（大陆与其他市场各一） |
| `jianguan` | ETF-A/C、OIL、CT、US-X | REG-STRIP |
| `ClosingSection` | OIL、CT | OPS-STATS + BRAND + LEGAL + 吸底条 |
| `JoinSteps` | OIL | STEPS-OPEN-ACCOUNT |
| `SignalList` | CT | SIGNAL-LIST |
| `countTo` | CT-B | 数字滚动 |
| `rankingTable` | TC-03 | LEADERBOARD |
| `bottomTips` | TC-01、TC-03 | LEGAL |
| `riskWarning`、`footerEs` | LP 6/7、US-X | 合规层 |
