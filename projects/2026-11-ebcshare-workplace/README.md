# EBC Share · 可交互前端视觉方案

版本 2.0 · 2026-11-12 · VISUAL_V2_REVIEW_READY（Claude 视觉重构，待用户评审）

交付重点：集团工作平台的页面样式、信息结构和交互。静态 HTML/CSS/JS 可直接托管预览，不包含生产后台。正式应用地址、SSO、权限、持久化与各系统接口由 IT 接入。

## 打开与运行

将 `demo/` 作为静态站点根目录。开发时可在项目目录运行 `python -m http.server 8080 --directory demo`，访问 `http://localhost:8080`。无需安装依赖、构建或 API Key；展示字体 Fraunces 已随 `demo/assets/fonts/` 自托管，没有外部请求。也可打开 `demo/index.html`；剪贴板能力以浏览器安全上下文为准。

## 已实现页面

| 路由 | 内容与交互 |
|---|---|
| `#workspace` | 常用应用、重要公告、团队动态、积分、最近使用、活动入口 |
| `#community` | 工作/生活分类、部门筛选、图文详情、点赞、本地发布、排行榜 |
| `#announcements` | 全部/未读、部门与关键词筛选、详情、阅读状态 |
| `#apps` | 四个工具入口、搜索、分类、收藏、权限申请、建设中状态 |
| `#board` | 附件的 51 场活动、统计图、月份/地区/线下筛选、分页、交付范围详情 |
| `#profile` | 中英文、时区、默认首页、演示申请记录、重置 |
| `#translation` | 进入工具后的界面示例；仅展示预设译文，无真实翻译服务 |

语言按钮全局切换中文/English。所有写入交互只保存在当前浏览器，使用 `ebcshare-preview-v1`。页面页脚可查看预览说明。素材库入口保留“建设中”，域名管理展示申请状态；这些状态用于演示，须以 IT 返回状态替换。

## 交接文件

- `brief.md`：最新用户范围。
- `pm-decision.md`：方案取舍与用户路径。
- `copy-sheet.md` / `ui-copy.json`：中英文主界面文案。
- `design-spec.md`：已实现的视觉与状态规范。
- `handoff.md`：IT/下一位设计开发者接手入口。
- `iterations.md` / `qa-report.md`：修订与验证结果。
- `evidence.md`：来源和未核实事项。

在 EBC Page System 中，本项目归档于 `projects/2026-11-ebcshare-workplace/`，静态前端归档于其 `demo/`。仓库原有规则及历史来源不作改动。
