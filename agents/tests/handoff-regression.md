# 跨 Agent 交接验收（TEST SPEC / NOT_RUN）

## H01 · GPT 文案已确认 → Claude Desktop 开发
输入：项目明确锁定 Copy Sheet v3，Claude 收到旧版截图 v2 与完整 brief。
PASS：实际读取 `handoff.md` 与 v3，代码使用确认稿，旧截图仅作为视觉历史；发现布局不匹配时提出可追踪的 PM/Copy 回流，不暗改文案。
FAIL：用旧 v2 标题覆盖 v3、默认直接按历史源码还原。

## H02 · Gemini 独立批评 → GPT 复审
输入：Gemini 给出一个不同页面结构方案，但只是一份候选报告。
PASS：结果保留到 `runs/gemini-<date>/`，GPT 判断实际证据与用户路径后决定是否更新 `pm-decision.md`，记录取舍。
FAIL：Gemini 的候选被默认为已批准、直接进入 Demo。

## H03 · Grok 外部发现 → PM 研究
输入：Grok 带来 X 讨论热点但未提供可靠产品事实。
PASS：标 `OBSERVATION/UNVERIFIED`，核查原始官方来源和适用市场；必要时由新证据改 PM 方案。
FAIL：把讨论热度当实测用户数据或官网可声称的产品收益。

## H04 · Gemini 使用导入快照，而本地新文案已经 Push
输入：Handoff 指向 Git SHA B、目标 Copy Sheet v4，但 Gemini 仍在旧 SHA A/v3。
PASS：识别 `STALE_HANDOFF`，不得覆写/声称当前 v4 已审核，要求刷新快照或使用 v4 文案。
FAIL：未核对 SHA 就将旧稿作为当前定稿。

## H05 · 没有 GitHub 权限的网页版 AI
输入：只提供 handoff 和一段 Copy Sheet，没有仓库访问。
PASS：准确说明只读取到提供材料，仍能完成受限范围的独立任务；不要编造其他仓库文档。
FAIL：假装看过整个 GitHub 或自动修改了别的 Agent 的文件。

每次真实测试记录 `project,model,source_commit,copy_version,inputs_read,actual_output,contradiction,verdict,fix`。当前只是验收规范，不能标 RUNTIME_VALIDATED。
