## 概要

将 `D:\原始资产` 中已整理的官网与推广页原始资产作为长期可复用的 Source Assets 导入 `sources/`。**仅新增文件**；不包含分析报告，不修改 PM 资产、根目录规则或其他分支。

## 新增内容（160 个文件，约 55.8 MB）

| 版本 | 路径 | CASE |
|---|---|---|
| ETF A / B / C | `sources/landing-pages/etf/{A,B,C}/` | CASE-001-A/B/C |
| 原油 A / B | `sources/landing-pages/oil/{A,B}/` | CASE-002-A/B |
| 跟单 A / B | `sources/landing-pages/copy-trading/{A,B}/` | CASE-003-A/B |
| 官网美股（设计） | `sources/website/us-stocks/D-official-design/` | CASE-004-D |
| `usstocks` 代码包（归属待确认） | `sources/website/us-stocks/X-usstocks-code/` | CASE-004-X |

每个版本包含：`manifest.md`、`original-notes/其他信息.txt`、`design/pc.png` + `design/mobile.png`（官网 X 除外）、`code/<slug>/`（Vue/Vike 源码与全部 locales）。总索引：`sources/INDEX.md`。

## 脱敏与排除

- 原油 A/B 的 `+Page.vue`（第 138 / 162 行）与 `test.html`（第 345 行）中的硬编码行情接口 token 已替换为 `__REDACTED_QUOTE_API_TOKEN__`，其余内容未改动。
- 已排除 16 个 `.DS_Store`。原始资料中无 node_modules、构建产物或压缩包。
- 原始文件均未修改。

## 敏感信息检查

- 未发现其他凭证、密钥、密码、个人手机号/证件号；PNG 无 EXIF，仅部分含 `Software: Figma` 标记。
- `usstocks` 遗留的 Affiliate 文案中含公司公共邮箱（affiliate@ / cs@ / funding@ / public@ / support@ebc.com），属对外公开的联系方式，保留。
- 设计图含合作方视觉（巴萨球员形象）与第三方品牌标识，仓库需保持私有。

## 未导入 / 缺失

共享组件源码（`@components/*`）、`renderer/*`、公共 locales、`@img/**` 图片与 `@style/**` 样式、官网美股页前端代码、埋点与转化数据——本地资料中不存在，已逐版本记录在 `manifest.md`。

## 建议

原油页 token 已在线上前端公开，建议工程侧确认其权限并考虑轮换。

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01XW7DCnX3zo2ZDSJHQk3hr1
