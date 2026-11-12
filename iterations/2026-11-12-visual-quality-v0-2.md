# ITER-20261112-004 · EBC 视觉规范 v0.2：从设计参数到视觉方向 + 真实截图反复修订

- **触发**：EBC Share Work GPT Work v1 视觉被用户明确评为严重不达标（传统平台、信息层级拥挤），Claude Fable 5.2 的 v2 虽改善互动与构图，但用户仍认为有不足。用户另上传了历史高满意 Figma Make Pre-IPO 设计 SKILL，希望结合 GitHub 热门 AI Coding 视觉项目及 X 开源讨论，升级**全局视觉能力**，而非创造“后台专属固定皮肤”。
- **最初问题 V1**：`design/foundations/web-design-system.md` 已有尺寸/色彩/间距/组件 QA；`.claude/skills/ebc-web-design/SKILL.md` 可输出代码与检查，但没有**正式 Art Direction Gate**，也没有区分代码功能 PASS 和实际审美 PASS。旧 Skill 的“纯口味变化不自动阻塞”可能让用户明确审美否决被忽视。
- **证据 A（用户）**：`SKILL(5).md`（用户本次上传，Figma Make / Pre-IPO CFD 历史项目），其真正可迁移的是 one-idea-per-section、可执行字阶/留白/布局/组件、PC/Mobile 同时审查，而不是固定高宽、旧产品事实和蓝色 CTA。提取文档：`design/research/user-figma-make-skill-analysis-2026-11-12.md`。原文件没有复制入仓库。
- **证据 B（开源）**：Anthropic `frontend-design` 官方最新技能反对项目无关的 AI 风格聚类；Impeccable 把 visual critique 与 code audit 分开；Vercel Web Interface Guidelines 细化可访问性/状态/性能；shadcn 将 Design Tokens 映射组件；UI UX Pro Max/React Bits/21st.dev 作设计知识和视觉实现的按需参考。来源索引和 X 验证局限在 `design/research/ai-coding-visual-skills-2026-11-12.md`。
- **V2 实际修改**：
  1. **新方法** `design/methods/visual-direction-and-iteration.md`：Brief → 2 个竞争方向及反模板审查 → Build → 真实截图 → Visual Critique → 实质代码修订 → 独立 Engineering Audit → 用户审美确认；
  2. **新评分/审查** `design/qa/visual-quality-scorecard.md`：方向一致、首屏层级、信息密度、视觉个性、色彩职责、字体、媒体、移动节奏；任何功能断言无法替代实际审美结论；
  3. **新回归场景** `design/tests/visual-quality-regression.md`（六组、NOT_RUN）：白板 v1 卡片墙/v2 暖纸衬线、官网产品旧 SKILL 不误迁移、Campaign 类别尚未固定、日本本地市场、第三方组件治理；
  4. **对原文档补充** `design/foundations/web-design-system.md`、`design/README.md`、`design/qa/design-review-checklist.md`、`.claude/skills/ebc-web-design/SKILL.md`；
  5. **跨模型路由** `AGENTS.md`、`CLAUDE.md`、`GEMINI.md`、`PILOT.md`、`README.md`，确保其它 Agent 能读取同一规则。
- **取舍**：不建立一套针对“后台平台”的固定风格；不按 148k Stars 决定 EBC 色彩与字体；不安装未经检查的外部 Skills；不把旧 Pre-IPO 版式参数/交易状态/收费和禁止词转为全局；不更改白板项目分支或已确认中文文案。
- **X 研究质量**：检索到作者/开源项目的社区讨论，但多个 X 原帖不能直接抓取；保留可追溯来源和验证限制，不造互动数及效果。
- **版本状态**：USER_REPORTED_VISUAL_GAP + DESIGN_METHOD_PROPOSAL。用户对本次机制方向有明确需求，但视觉 Skill v0.2 的跨模型真实运行效果和 EBC Share v2 的审美评审仍 `RUNTIME_NOT_YET_TESTED` / `VISUAL_REVIEW_PENDING`。
- **校验计划**：让 Claude 在白板现有分支中对 v2 的真实 Desktop/Mobile 图做新方向审查与 V3，交叉 GPT/Gemini 复核；同一机制在官网产品页与一份 Campaign 素材上做反模板审查，记录具体变更后再考虑 v0.3。
