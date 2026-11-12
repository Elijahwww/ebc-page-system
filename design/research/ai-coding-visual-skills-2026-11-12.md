# AI Coding Web 视觉设计：GitHub / X 来源研究与 EBC 选型（2026-11-12）

> 状态：EXTERNAL_OPEN_SOURCE_REVIEW / 本次检索阅读项目 README、SKILL 和部分规则；**没有对这些第三方方案在 EBC 页面上进行实际效果 A/B 或浏览器自动截图实验**。GitHub Star 等是查询时的近似快照，随时间改变；热度≠质量，作者自评≠独立验证。
> 研究问题：怎样让 GPT Work、Claude Desktop、Gemini、Grok 做出不拥挤、克制、有产品特征和技术张力、**可运行且能自我视觉纠错**的页面，同时避免套模板和堆插件？

## A. 高价值开源参考，按「解决的缺口」而不是排名选
| 项目/原始证据 | 本次观察与热度线索 | 真正可迁移的机制 | 不能直接照搬 |
|---|---|---|---|
| [Anthropic / frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)（官方 SKILL，2026-09 更新方向） | 官方强调从业务题材出发，先设定 design direction，再对 brief 自我批评，警惕奶油底/衬线、相同白卡、科技渐变、泛用标签等 AI 聚类 | **方向先于代码**、挑战项目不相关的习惯用视觉、把重点放在一处；截图复核后修订 | 不等于禁止所有暖色、衬线、Inter 或强渐变；规则需按项目目标判断 |
| [Paul Bakaus / Impeccable](https://github.com/pbakaus/impeccable)（开源项目）及 [critique](https://github.com/pbakaus/impeccable/blob/main/skill/reference/critique.md)、[audit](https://github.com/pbakaus/impeccable/blob/main/skill/reference/audit.md) | GitHub 有很高关注；作者描述用 critique 区分视觉质量、audit 处理具体技术缺陷，并用确定性规则找重复问题 | **视觉 Critique 和代码 Audit 两份报告**、P0–P3 优先级、针对现有页面持续改善 | 作者商业演示/指标不能当 EBC 客观收益数据；不默认运行其安装器或购买功能 |
| [nextlevelbuilder / ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | GitHub 检索时约 **148k stars**；提供跨平台 UI/UX 设计模式/参考检索和技术设计建议 | 用实际页面类型、行业、字体/颜色/动效场景检索参考，输出可执行选型及理由 | 大量样式库如果当最终权威，会产生「所有页面像目录模板」；热度不等于设计好 |
| [Vercel / Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)（[官方明细](https://vercel.com/design/guidelines)） | 官方公开持续维护的 Web 交互质量准则；键盘、focus、动效、深色主题、缩放、长文和点击等具体约束 | **工程质量 Gate**：真实状态、焦点、触控、布局、性能、减少动画误用；报告用代码行号与复现方式 | Vercel 品牌/英文 copy 惯例并非 EBC 中文金融营销规范；工程达标不是审美通过 |
| [shadcn-ui / UI Design System Skill](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/design-system.md) | 用 DESIGN.md 的颜色、字阶、圆角、控件高度映射到组件样式，并做组件状态矩阵 | 把**项目艺术方向**真正落地为有角色的 tokens、variant、state，避免 UI 断裂 | 不一定要换 React/Tailwind/shadcn 技术栈；不要因现成组件默认外观而丢产品特色 |
| [DavidHDev / React Bits](https://github.com/DavidHDev/react-bits) | 查询时约 **51.7k stars**；提供大量可交互 React 动效/背景/组件示例 | 当页面真的需要一处记忆点时，参考动画表现形式、交互反馈和响应式实现 | 动效组件不负责信息架构；特效开销/版权/无障碍需审核，**不是每张卡都要动** |
| [21st.dev / 21st MCP](https://github.com/21st-dev/magic-mcp)（[最新工具说明](https://github.com/21st-dev/magic-mcp/blob/main/skills/21st-ui/SKILL.md)） | 组件目录、灵感检索、UI 生成；原 Magic MCP 已升级为 21st MCP，实际能力/收费取决于账号 | 实现前检索 1–3 个真实组件形态，再以 EBC token 和内容职责改造 | 组件是施工材料，不是视觉方向；不默认接第三方 API，不上传敏感资产 |
| [pbakaus / Impeccable 的 project-specific DESIGN](https://github.com/pbakaus/impeccable/blob/main/skill/reference/new-work.md) | 强调同一规则需要根据任务类型、真实素材和上下文定义节奏，不应任意填充抽象装饰 | EBC 需要**可维护的项目 Design Override**，不是只给一句“Apple Style” | 不照抄作者的固定示例、截图、受限素材和完整第三方 SKILL |

### 观察到的信号 vs 不能得出的结论
- **确认的现象**：开放社区关注设计 Skill 的「反 AI 模板化」「从 prompt 到可执行 Token」「截图后继续 critique」「确定性质量审查」。以上 GitHub 仓库和官方说明直接体现这些机制。
- **无法证明**：某个 SKILL 装上就能将 EBC 页面视觉提升多少、哪个模型「最好看」、使用量与转化率成正比、任何单一审美可以通用。
- **迁移策略**：将其流程改写成 EBC 自有规范，不复制整份第三方文本或依赖其收费服务；源项目许可证/依赖在真正复制代码时另行确认。

## B. X / 社区讨论（只做方向信号，和一手规则分开）
1. **Paul Bakaus `@pbakaus`**：可定位到其 [X 原帖](https://x.com/pbakaus/status/2089734900446597395)（2026-08-18；[检索镜像](https://twiscan.com/en/x/pbakaus/2089734900446597395)）。观点：画布型工具适合创意探索，长期生产 App 的设计需要持续的代码内迭代/优化；这是**工具作者观点**，并非独立研究，且本次 X 原站帖子未能直接读取。
2. **Paul Bakaus 2026-09 的后续讨论**：[X 页面索引镜像](https://twiscan.com/en/x/pbakaus) 涉及对 PR 级设计审查、反 AI 模板与截图检查的讨论。该观点与开源 `critique`、`audit` 实现方法吻合，仍不能据此声称 EBC 已实现自动 PR 视觉审查。
3. **社区转发的具体开源 SKILL**：[X 示例帖子](https://x.com/linghucong/status/2007333077652304310) 指向 UI UX Pro Max，页面自身无法直接完整读取；可视为传播线索，**不基于这条帖子推断真实热度或用户满意度**。
4. 2026-11 平台关注度的二级记录：[X 镜像时间线](https://teapaw.org/pbakaus?filter=posts) 可见 Impeccable 作者对设计审查和 GitHub 关注的讨论。由于不是可复核 X 原始互动量，本报告**不把浏览量、转推数、粉丝数当客观排行**。

**限制**：X 部分原始帖子本环境抓取受限，故优先用 GitHub 官方仓库 SKILL/README 得出实质结论；只保留明确可定位到作者/原帖的讨论线索，后续可在真实已登录 X 的 Agent 运行中再次验证。

## C. 与用户提供的 Figma Make SKILL 联合看：改 EBC 的什么？
| 现有 EBC 能力 | 本次发现的弱点 | v0.2 修订 |
|---|---|---|
| 版心/间距/字体数值详细 | 不等于实际页面有设计方向 | Art Direction Brief + 候选方向/反模板批判先于代码 |
| 限定每屏信息职责 | 容易退化成每屏一套同款卡片 | 首屏主角、视觉对比、疏密节奏、针对内容的构图方案 |
| Desktop/Mobile 规范 | 可运行但视觉“平/挤”的截图无审查路径 | Desktop/Mobile 真截图与功能 QA 分开，审美必须 V1→V2 实质改 |
| 固定 EBC 提议的颜色/按钮/圆角 | Design Tokens 容易被当统一皮肤 | 语义 Token 基线 + 有原因的项目级 Override；项目审美目标优先 |
| 代码交互与 a11y | 交互全 PASS 仍可能用户不喜欢 | Visual Critique → fix → screenshot；审美不合要求时明确 REVIEW_NOT_PASSED |
| 行业跨页研究 | 研究后不一定改变真实 UI | 研究需落到具体构图/复制成本/用户心理/修改的 CSS 与截图差异 |

## D. EBC 具体启用策略
**立刻吸收机制（写本库）**：Anthropic 艺术方向门槛、Impeccable 分离 critique / audit、Vercel 真正可查的工程标准、shadcn Token 落地思路。
**按需参考不安装**：UI UX Pro Max 的检索维度、React Bits 的局部动效、21st.dev 组件灵感。若未来要安装第三方 Skill/MCP/依赖，另做权限、许可、敏感代码上传与性能评估。
**不执行**：照搬第三方网页代码、与 EBC 视觉目标无关的组件拼装、把 Stars 当验收指标、没有真实截图时宣布审美通过。

## 适用边界
这份外部研究只支持**设计方法升级**，不代表任何具体 EBC 新页面的功能/文案/模块次序已获用户确认。它也不改变中文先审稿和按当地市场选择策略的原则。
