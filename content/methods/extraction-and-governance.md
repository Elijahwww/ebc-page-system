# Copy Decision Record：从历史文案提取可复用的写法

状态：METHOD_CANDIDATE。核心知识单位是「在具体页面和用户问题下，为什么接受 A、拒绝 B、如何复核」，而不是单纯收藏句子。

## 1. 证据优先级（两个维度分开）
**文本存在性**：可访问的最终发布页面快照 / 历史代码 / 设计图 / 聊天定稿中可见的字句。
**审查认可性**：有用户明确确认才记 USER_CONFIRMED；只有上线不代表审美批准；只有 AI 提议也不代表确认。
**业务效果**：只有有意义的对照/真实数据才能讨论效果，已发布和用户认可均不等于“经实验验证”。
不要把“上线当时实际文案”错误地直接等于“下一次应按这个写”。

## 2. 每条记录至少含 13 个字段
- `id`：EBC-COPY-XXX 不复用旧 ID。
- `project/page/url`：官网/LP/活动/CRM；页面、市场、语言、日期。
- `placement`：Hero H1、副标题、模块标题、说明、FAQ、CTA、风险说明、SEO Title 等。
- `source_type`：USER_CHAT / LIVE_SNAPSHOT / REPO_CODE / DESIGN / INTERNAL_COPY。
- `source_locator`：链接、branch/path、聊天项目与时间；有缺口时明确写出。
- `decision_state`：USER_CONFIRMED_IN_CHAT / USER_POSITIVE_DIRECTION / USER_REJECTED / LIVE_OBSERVED / CODE_OBSERVED / DRAFT_ONLY / CONFLICT。
- `original_or_rejected`：**仅确有证据的旧稿**；缺则 UNKNOWN，不编造 V1。
- `accepted_or_observed`：准确句子；如果方向已确认但未定稿，标记而非补全。
- `user_job`：用户读前困惑、读后应清楚什么（标注明确事实/合理推断）。
- `copy_logic`：内容职责、用什么事实/机制回答什么认知阻碍、为何在这个模块。
- `why_changed_or_accepted`：用户真实审查意见 vs Agent 的事后分析**分别标示**。
- `reuse_boundary`：可复用的机制、不应照搬的原句/数值/市场/产品状态。
- `open_issues`：新证据、合规事实、业务转化、最新线上核验或翻译的空缺。

可选增加：H1 与 subtitle 关系、CTA 点击目标、字符数、屏幕长度、可读性问题、对应用户路径/竞品观察。

## 3. 用户评论与 AI 推断不能混写
例如“在 EBC，让专业被看见，让想法成为行动。”：
- 可作为用户确认过的 Careers 副标题；
- “能力被认可 + 想法转化为行动”是 **ANALYST_INTERPRETATION**；
- “因此转化更高”没有数据，不可标 VERIFIED。
同样“始于伦敦，连接全球”获积极反馈，但当时 Hero 标题仍有后续斟酌，状态只能是 USER_POSITIVE_DIRECTION，不是全站定稿。

## 4. 拆分句子而非仅判好坏
- Semantic units：每句 1–2 个语义单元，每个单元承担什么信息？
- Reader context：用户已知/尚不知/在什么渠道进入？
- Claim type：事实、解释、动作、限定、比喻、价值取向。
- New information：是否增加与上一个标题不同的信息，还是同义复述？
- Anchor：专业术语、可验证事实、具体场景、数字、产品名称、服务行为中的哪一个是阅读锚点？
- Doubt test：陌生用户问“所以呢？”是否能回答？专家问“真的吗？”是否有来源？
- Counterfactual edit：如果删掉这句/这个词，会丢失什么？若不丢失，则可能冗余。
- Failure conditions：什么地区、产品、受众、状态下它会引发误解或不合规？
- Reusable principle：一句带条件的可执行约束，而不是“高端且克制”。

## 5. 资产化流程
SOURCE & CHAT DECISION → COPY CARD（保留状态）→ 跨案例对比/反例 → RULE_CANDIDATE → 人工按范围确认 → APPROVED_PATTERN（有时效、适用页面）→ 新项目引用/测试 → 更新。
每个修改 PR 记录：具体案例 ID、原句与新句、因为什么改变、何种反证能推翻，及是否真正用户批准。

## 6. 数据化并非伪精密
**可机械检查**：重复句义（需人工/模型标注判断）、专有名词拼写、缺核心产品名、模糊 CTA、未确认数字、H1/副标题信息重合、同段多个信息任务、无出处绝对化主张。
**可统计但不硬性拦截**：H1 汉字数、段长、按钮字数、每模块信息锚点数、语种扩展长度。
**不能从当前语料直接推断**：字数越少越好、夸张词出现一次就不转化、任何确定的 CVR 提升概率。

## 7. 代码/线上冲突处理
若历史设计、线上、代码不同：保留三版本及时间戳；历史实际展示以当时抓取/代码记录，但未来的获批文案源单独控制。
如果用户 2026-11-09 明确将产品状态改“敬请期待”，而部分搜索抓取仍呈交易流程/“立即开户”，记为 `UNRESOLVED_CONFLICT` 并进行实时核查，不把旧网页当作当前批准。
