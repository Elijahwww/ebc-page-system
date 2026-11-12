# EBC Page System

**一个以 PM 深度判断为核心、面向 EBC 官网和推广页的跨模型 Agent 工作库。**

> **默认使用 `main`**：始终保持最新可用的 Agent 知识与工作流。可以直接做真实页面、交付 Demo 并持续优化；候选规则与已确认资料仍按状态标记，不等于官网正式发布审批。

## 开始使用（只需看这三份）
1. **[AGENTS.md](AGENTS.md)** — 所有 AI/Agent 共享的工作原则和文件入口。
2. **[PILOT.md](PILOT.md)** — 日常真实项目的完整生成流程、跨模型通用提示词。
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
| `pilot/` | 首期跨模型比较评估与轻量输入模板（可选） |
| `projects/` | 每个真实页面项目的 PM、文案、方案、Demo 和版本记录 |
| `iterations/` | 系统规则/Skill 每轮改动的原因、前后差异与证据 |
| `CHANGELOG.md` | 可用系统版本历史与重大变化 |
| `localization/` | 中文主稿优先、独立本地化与地区市场差异规则；术语库接入状态 |

## 不同 AI 协作与交接
GPT、Claude Desktop、Gemini、Grok 等共享同一项目目录和确认版本；切换 Agent 时使用 [统一交接协议](agents/cross-agent-handoff.md) 和 [交接包模板](projects/HANDOFF-TEMPLATE.md)。下一 Agent 只需读取最小交接包及必要源文件，不重建全部历史、不覆盖已确认中文文案；其他模型的独立建议保存在 `runs/` 并明确回流。

## 中文优先与地区市场适配
默认以**中文**执行 PM 分析、用户路径、文案创作和页面设计审查；中文文案确认后才进入独立翻译/本地化阶段，**禁止简单直译**。中文是工作语言，**并不代表目标市场为中国**。日本等明确的本地市场页面，应在 PM 研究阶段先采用当地受众、渠道和市场规范，中文版只是内部决策和审稿语言；通用视觉/组件尽量复用，仅对确有需求的局部进行市场适配。详见 [Chinese-first 与 Market Override](localization/chinese-first-and-market-overrides.md)。

## 事实和审批边界
`USER_CONFIRMED_IN_CHAT` 不等于已投放/合规最终批准；`LIVE_OBSERVED` 或 `CODE_OBSERVED` 也不等于转化表现更好。Agent 用户模拟不是实际用户数据。
一期合规集中确保品牌、实体、监管名称、产品性质/状态及核心数据准确、不造成误导。真正的上线需要独立的真实业务和技术验收。

## 已知资源与能力边界
- 跨语言术语库的**原始 CSV 尚未进入仓库**，请勿凭先前对话中的统计数字重建/编造术语。
- 外部参考页面的真实自动浏览器截图能力，取决于实际 Agent/环境；没有截图只能做文本层研究。
- 有些旧共享组件、实际流量/转化数据未包含，不能直接运行所有历史源码。
- 最初六个资产 PR 作为来源追溯；整合版进入 `main` 后就是可用工作基线，但不代表所有候选标准已被正式公司 SOP 批准。

**直接生产**：克隆或 Pull `main`，阅读 `AGENTS.md` / `PILOT.md`，从一个真实需求开始。把结果保留在 `projects/<slug>/`，每次修改记入项目或系统迭代记录，持续更新。跨模型对比只是其中一种可选工作方式。
