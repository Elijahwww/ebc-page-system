# PM v0.2 → v1.0 深度审核记录

日期：2026-11-12
状态：ARCHITECTURE_REVISED / RUNTIME_NOT_YET_VALIDATED
审核依据：用户明确指出需求、调研、用户心理与路径、文案、最终方案必须各自反复执行—审查—修改；视觉和组件化开发反而可以相对标准化。合规一期保持真实性与适用监管基本底线。

## 一、原 PM v0.2 不满足哪些要求
| 用户要求 | v0.2 的真实情况 | 评估 |
|---|---|---|
| 反复挑战需求 | 7 项诊断问题，输出一次 Brief | FAIL：没有必经的反证/修订 |
| 研究驱动决策 | 静态竞品矩阵与参考链接 | FAIL：没有研究质疑/反例回路 |
| 用户心理分析 | 行业受众假设和几个基本顾虑 | FAIL：缺心理机制与入口区分 |
| 用户路径模拟 | 入口→Hero→CTA→后续的线性检查 | FAIL：缺失败/犹豫/误解与回测 |
| 文案独立审查 | 仅约束内容来源与模块职责 | FAIL：缺策略文案竞争、编辑和重写 |
| 方案多轮竞争 | 有备选方案，但没有审查标准 | FAIL：不能保证不是套模板 |
| 编排机制 | Skill 顺序指令1–7，末尾输出 Brief | FAIL：结果是一份报告而不是可回退的判断 |
| UI/Dev 边界 | 已有设计和后续交付规则 | 基础可用，暂非瓶颈 |

## 二、本次改造实际做了什么
- 核心编排协议 pm/operating-system/iterative-pm-engine.md：五节点及可逆向回路，版本挑战与回溯。
- D：重写 pm/methods/requirement-diagnosis.md，增加根因竞争、最强反对意见、V1→V2。
- R：pm/research/evidence-led-research-loop.md，来源与时间、反例、研究导致的决策改动。
- U：pm/methods/user-psychology-and-journey-simulation.md，3 类真实入口情境及成功/犹豫/误解退出路径。
- C：pm/methods/copywriting-critique-loop.md，完整信息职责编排、不同文案策略、怀疑者批评、修订稿。
- S：pm/methods/strategy-debate-and-scenario-testing.md，轻改 vs 重构 vs 不做、模块信息合同、反向走查。
- 重写主 Skill .claude/skills/pm-page-strategy/SKILL.md，把每个节点强制变成 DRAFT→CHALLENGE→VERIFY→REVISE→RE-REVIEW。
- 独立的 .claude/skills/ebc-pm-{demand,research,user-journey,copy-critique,strategy-debate}/SKILL.md，可按需单节点调用。
- pm/templates/iteration-review-log.md、pm/tests/pm-agent-acceptance.md 做审查轨迹和验收测试；更新 pm/templates/pm-brief.md、pm/workflows/pm-page-delivery.md、pm/checklists/pm-stage-gates.md、pm/README.md。
- 保留已有实际 PM Checklist 和 CRM/路由资料，但将其定位为**后端交付保障**，不再当作 PM 核心智能。

## 三、为什么这不是一次性流水线
- D/R/U/C/S 在主 Skill 被明确定义为双向网络；
- 每个节点都有独立的 Skill、方法文档、修改条件和审查产物；
- 如果 Copy 的语义无法成立，应回 R/D；用户误解应回 C/S；方案无意义应回 D/R；
- STANDARD 新页面要求五节点都经历有效的一轮批评—修订，之后仍按实际问题继续多轮；
- 对话中不必输出全部内部工作笔记，但应展示可核对的“版本变化+证据+反对意见+下一步”；
- 假设优先是允许的起点，但不能把假设扮成真实数据。

## 四、未完成的实证验证（绝不能谎称已经通过）
1. **尚未在真实 Claude Code 会话执行测试**：规范在 GitHub ≠ Claude 一定会遵守。测试文件已建，状态 NOT_RUN。
2. 用户的第一期运行必须使用一个真实需求去观察 Agent 是否真正回退各工作台、是否实质重写文案；发现“伪反思/伪多方案”需继续改 Skill。
3. 历史源码与案例仍在独立 Draft PR #3，PM v1 分支并不自动包含这些资料；首次整合到 main 或在 Claude 工作树提供后方可完整检索。
4. 用户未来的真实需求 SOP、内容/品牌批准规则及转化数据未全部提供，不能凭外部资料假装内部事实齐备。
5. 五节点能提高逻辑一致性，但不能证明真实转化提升；真实用户访谈、流量数据或上线 A/B 仍是外部验证的依据。

## 五、可进入下一步的检查
第一阶段通过条件不是“文档数量达标”，而是 TEST-02（ETF 转化低不盲目重做视觉）与 TEST-06（新 LP 完整循环）至少各有一次真实 Agent 演练，能看到：
- 需求被挑战/重构；
- 新研究反证改变了推荐；
- 三条不同用户路径找到具体失效点；
- 文案 V1/V2 真实修改而非换同义词；
- 两个实质不同策略并给证据取舍；
- 关键跨节点返回发生或明确说明为何无需返回。
检查不通过则修复 PM Skill，不要推给 UI/Dev 去解决。
