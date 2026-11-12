# ITER-20261112-001 · 将 EBC Agent 系统转为 main 上的持续生产基线

- **Trigger**：用户指出“虽然在测试，但下一步就是正常生成真实项目”，不需要将成熟的基础资料长期留在隔离测试分支；有问题继续优化并保留专门的迭代历史。
- **V1**：六个独立 Draft PR 分散、统一 `integration/agent-pilot-v0-1` 作为孤立试运行副本，`main` 仍为空壳。
- **反对理由**：不同 Agent 默认克隆 `main`，因而读不到研究/PM/文案/视觉与案例；用户需要手动切分支；“待审核”不等于“不可用”；测试活动与真实生产本来是同一条持续迭代路径。
- **V2**：将集成的六套基础资产合入 `main`，作为 `CURRENT_WORKING_BASELINE`；保留各规则级别（USER_CONFIRMED / OBSERVED / CANDIDATE），不把候选方案伪装正式公司制度。新项目产物放 `projects/`，后续改进归档于 `iterations/` 和 `CHANGELOG.md`。
- **Policy**：`main` 可长期读取、正常运行、迭代；有风险的规则修改可通过短分支/PR 保护，测试失败可回退，不冻结系统学习。
- **Validation**：集成前核对了 239 个文件、16 张 PNG、各关键 PM/Content/Research/Design 索引以及 12 份关键文档中的 54 条内部链接。未执行过真实模型端到端 Agent 测试、未通过全仓所有引用审计，也未声明业务文案已经正式合规发布。
- **Scope**：GitHub Agent 系统知识与测试/生产工作流，不改变 EBC 线上官网。
- **Status**：`USER_DIRECTION_CONFIRMED`（系统使用模式）；实际各种 Skills 和实验性规则仍为 `RULE_CANDIDATE`，等待真实项目验证。
- **Implementation**：集成 PR #7；原始 PR #1–#6 是历史知识来源，保留供追溯，不应重复将同一文件合并。
- **Next step**：让不同 Agent 直接从主分支处理同一个真实项目；保存实际 V1→V2、网页来源、截图与交付；按反馈建下一轮版本。
