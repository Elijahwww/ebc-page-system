# ITER-20261113-006 · Page Type × Hero Conversion 独立判断及结构研究梯度

- **用户新要求**：新交易大赛 LP 提供主题和规则后，自动找现有结构参考；找不到则先 EBC 官网再 CFD → 数字货币 → 整个金融行业；分析模块组成与次序。活动/广告 LP PC Hero 历史默认右侧注册表单，但用户明确指定 CTA 或官网主站页面不能强制套用。
- **审查发现**：`research/page-structures/README.md` 已能找到交易激励候选；但 `product-lp-common.md` 曾把 CTA 弹窗 vs 内嵌表单写成 Page Type 分界；`cross-case-module-map.md` 曾写“页面类型决定 Hero Variant”；Research Skill/AGENTS 梯度旧版本缺数字货币层，T0 未强调 EBC 官方线上页。
- **V1→V2 规则更新**：新增 `matching-and-hero-contract.md`：`PAGE_FAMILY / CAMPAIGN_MECHANIC / HERO_CONVERSION` 分开；用户明确 Hero CTA 覆盖历史右表单，但正文结构与 Page Type 不变。无明确要求的 Campaign PC 右表单为观察到的候选默认（3/3），官网主站默认无活动式 Hero 注册表单；产品 LP 历史默认 CTA→弹窗（7/7），仍可被本次真实业务覆盖。
- **Research ladder**：T0 EBC 内部 + 已验证官网/自有活动页 → T1 CFD/Forex → T2 数字货币交易平台 → T3 更广金融 → T4 有必要再科技/其他；同页面任务优先，证据充足即停止，不能从币圈迁移不适用的交易/监管承诺。
- **调研输出变化**：按顺序的 `MODULE_MAP`、Hero PC 左右/注册表单/CTA 目标、移动端位置、页面机制条件位、风险/规则和外部不可迁移性。只看到 HTML 文案不能断言视觉。
- **入口更新**：AGENTS、PILOT、Claude/Gemini、PM Skill、Reference Discovery Skill、结构索引/产品与 Campaign 分册、跨案例 Variant 映射、研究模板/索引和回归测试。
- **未改变**：`sources/` 原始 Vue/图片、当前项目的确认稿、监管与产品获批事实；本次不把任何结构 `STRUCTURE_LOCKED`。
- **验证边界**：静态链接与一致性检查可以做，独立真实 Agent 运行仍是 `NOT_RUN`；规则文件的存在不保证所有模型自动加载，须确认各客户端工作树为最新 main。
