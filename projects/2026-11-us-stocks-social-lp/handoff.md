# 交接包 · 美股社媒推广页

- Project / slug：`2026-11-us-stocks-social-lp`
- Working language：zh-CN
- Target market / channel：全球 / 社交媒体广告。不套用单一国家画像。
- Current stage / sending Agent / receiving Agent：Demo 与中文主稿已可审。发送方 Cursor Grok。接收方未指定。
- Repository / branch / commit SHA：`cursor/us-stocks-social-lp-b09a` @ `c5deaad0f58aaba9da9cd605269cb097025d3205`（项目内容）。本交接包的 SHA 行修订在其后的提交，以分支 HEAD 为准。
- Updated at：2026-11-13
- Current source files + versions：
  - `brief.md`：v1，含两则 USER_CONFIRMED_IN_CHAT
  - `pm-decision.md`：v0.2
  - `copy-sheet.md`：v0.2，句子全部 DRAFT
  - `design-spec.md`：v0.2
  - `demo/`：可本地打开的静态页
- **用户已经确认的决定**（2026-11-13 原话转写）：
  - 目标投放市场为全球市场
  - 默认先出中文方案；翻译是后续任务；现在不要多语种译稿
  - Hero 使用按钮 CTA，不要右侧内嵌注册表单
- **锁定中文文案**：无。没有 Copy ID 被批准。不要改写语义来「优化」。
- 尚未核验的假设/事实/外部参考：注册 URL、承接实体、活动与 1:5 是否覆盖全部实体、负余额保护、EBC 时区是否随夏令时变化。竞品页为 `TEXT_ONLY_VISUAL_PENDING`。
- **本次仅要做的任务**：审阅中文主稿、结构取舍和 Demo。不要把它当成已上线页。
- 允许修改：在 `runs/<agent>-<date>/` 写独立意见。获用户明确确认后，才可改 Copy Sheet 的句子状态。
- 不允许修改：`sources/`；把结构候选升格为 `STRUCTURE_LOCKED`；把 DRAFT 句子改成已批准；编造费率、涨跌幅或注册地址；恢复 Hero 右表单，除非用户明确覆盖 2026-11-13 的按钮决定。
- 必读：
  - `projects/2026-11-us-stocks-social-lp/brief.md`
  - `projects/2026-11-us-stocks-social-lp/pm-decision.md`
  - `projects/2026-11-us-stocks-social-lp/copy-sheet.md`
  - https://www.ebc.com/zh-cn/trading-product/share-cfds/ （2026-11-13 文本）
  - `research/page-structures/matching-and-hero-contract.md`
- 交付验收：按钮打开的是「入口待确认」说明，不收集资料；顶栏有亏损风险；页面不出现个股涨跌幅；PC 与 Mobile 截图在 `evidence/screenshots/v2/`。
- 建议结果保存位置：`runs/<agent>-<date>/`
- 对现有方案的反对意见/疑问：放弃涨跌幅和 0 手续费首屏后，点击可能更低。这是记录过的代价，不是遗漏。
- 如果出现冲突，回流到哪个 PM/Copy/Design 节点：事实冲突回 R/C；按钮与真实去向不一致回 C/S；用户否定视觉回 Design，并标 `VISUAL_REVIEW_NOT_PASSED`。
- 用户需要判断的真正关键分叉：
  1. 注册跳转目标
  2. 承接法律实体、禁投地区、法定风险文本
  3. 0 手续费活动与 1:5 杠杆是否适用于本次全部实体
  4. 是否补 EBC Logo 与 FC Barcelona 标识
  5. 是否批准 Copy Sheet v0.2 的句子
- 本轮状态：`READY_FOR_HANDOFF`

## 接收方响应格式

- 我读取并验证了：
- 我理解当前锁定内容：市场为全球，中文主稿，Hero 为按钮；句子未锁定
- 本轮我实际做了：
- 与 V1 不同的修改：
- 支撑证据/仍是推断的部分：
- 输出文件位置：
- 需要上游重新判断的事项：

SHA：`c5deaad0f58aaba9da9cd605269cb097025d3205`
