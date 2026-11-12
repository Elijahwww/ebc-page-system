# EBC Page System

**一个以 PM 深度判断为核心、面向 EBC 官网和推广页的跨模型 Agent 工作库。**

> 当前可测试版本：`integration/agent-pilot-v0-1`。这是集成六个独立 Draft PR 的**测试分支**，不是已正式合并的 main。文档包含用户已确认的历史判断、历史已上线页面观察及未经批准的候选规则，必须按标记区分。

## 开始使用（只需看这三份）
1. **[AGENTS.md](AGENTS.md)** — 所有 AI/Agent 共享的工作原则和文件入口。
2. **[PILOT.md](PILOT.md)** — 第一次真实项目怎么操作、跨模型通用提示词。
3. **[pilot/EVALUATION.md](pilot/EVALUATION.md)** — 不同模型的 PM/Copy/Research/Design/Code 可验证评分表。

### 常见 Agent 入口
- Claude Code：`CLAUDE.md` 和 `.claude/skills/`；
- GPT / Codex / 通用 Agent：`AGENTS.md`；
- Gemini：`GEMINI.md`；
- Cursor：`.cursor/rules/ebc-page-pilot.mdc`。
这些入口引用**同一套核心方法**。客户端是否会自动发现文件取决于其环境；未自动读取时，使用 PILOT.md 的通用提示词主动指明。

## 运行优先级
**需求诊断 ↔ 证据研究 ↔ 用户心理/路径 ↔ 文案批评与重写 ↔ 方案竞争**。
每个节点有自己的版本循环，可往返修订；缺 EBC 案例时自动升级外部参考（CFD 行业 → 大金融 → 头部科技），有工具时对网页文本、PC/Mobile 截图和交互作证据分析。然后才做常规视觉与组件化开发。

## 目录说明
| 路径 | 作用 |
|---|---|
| `pm/` | PM 五节点思考引擎、方法、验收、真实项目流程参考 |
| `content/` | EBC 历史用户审稿决策卡、文案语义拆分、评价量表 |
| `research/` | 跨行业网站发现、截图/DOM 与反证机制 |
| `design/` | Apple-inspired EBC Web Design Token、页面类型、Header、QA |
| `sources/` | 已脱敏的历史页面源码、页面截图和 manifest；**原始证据请勿覆盖** |
| `asset-review/` | Claude 首轮原始案例分析、报告、来源登记 |
| `cases/`、`insights/`、`evaluations/` | 案例审计、初始候选规则和核查记录 |
| `.claude/skills/` | 可执行的独立节点说明，其他 Agent 也可按文本读取 |
| `pilot/` | 首期真实项目的评估与轻量输入模板 |
| `localization/` | 多语言接入的状态及后续术语库维护约定 |

## 事实和审批边界
`USER_CONFIRMED_IN_CHAT` 不等于已投放/合规最终批准；`LIVE_OBSERVED` 或 `CODE_OBSERVED` 也不等于转化表现更好。Agent 用户模拟不是实际用户数据。
一期合规集中确保品牌、实体、监管名称、产品性质/状态及核心数据准确、不造成误导。真正的上线需要独立的真实业务和技术验收。

## 当前尚未完成但不阻断中文版 Demo
- 跨语言术语库的**原始 CSV 尚未进入仓库**，请勿凭先前对话中的统计数字重建/编造术语。
- 外部参考页面的真实自动浏览器截图能力，取决于实际 Agent/环境；没有截图只能做文本层研究。
- 有些旧共享组件、实际流量/转化数据未包含，不能直接运行所有历史源码。
- 六个源 PR 仍为 Draft；本分支作为下一轮真实 Agent 测试基线，不能当作已经完成生产发布的正式公司 SOP。

**第一次测试**：在此分支打开仓库，阅读 `PILOT.md`，给出真实需求并记录输出。把真正的失败点反馈到相应 PM/Copy/Research/Design Skill，而不是盲目增加通用限制。
