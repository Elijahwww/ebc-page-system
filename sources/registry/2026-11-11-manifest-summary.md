# 第一批原始来源登记说明

- 日期：2026-11-11
- 来源：Claude 在 `D:\原始资产` 的本地扫描，原始 `source-registry.csv` 位于用户上传 `EBC-Page-Assets-Review.zip` 中。
- 当前仅上传来源摘要，不上传原始代码、图片/设计和完整 CSV。未来完整 CSV 迁入须保留 165 条来源 ID，以免破坏案例证据引用。

## Claude 原始报告的统计
- 4 个页面主题 / 8 个版本（7 广告 LP 版本 + 1 官网设计版本）
- 165 条唯一来源 ID：68 个 READ_FULL、65 个 LISTED_ONLY、16 个 READ_FULL(切片目检)、8 个 SKIPPED、7 个 WEBFETCH_TEXT、1 个 FAILED
- 来源 CSV 将原始资料路径记录为相对于 Windows `D:\原始资产` 的路径
- 4 条来源被标示 `YES: 硬编码 API token`，全部 `upload_to_github=NO`
- 网站源码和设计图片不在本次上传的 ZIP；绝不可用“此登记表有路径”替代对原文件的核验。

## 证据分级
- `OBSERVATION_FROM_REPORT`：来源于 Claude 的文档；尚未经 GPT 的原始源码/视觉验证。
- `INFERENCE`：由页面内容推导用户目标或设计意图。
- `NEEDS_VERIFICATION`：缺接口、共享组件、合规/运营事实核验。
- `RULE_CANDIDATE`：观察提取的方法，尚未生效。

## 完整导入边界
计划先将脱敏后的案例报告、来源 CSV、候选规则、冲突日志按原文单独版本化，再将 PM 规范与这些证据关联。正式内容和法律事实需有业务批准与有效期。
