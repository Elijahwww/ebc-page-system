# Claude 视觉优化交接 v2

状态：VISUAL_REWORK_REQUIRED · 2026-11-12。当前视觉未通过用户评审；不得把现有样式或 design-spec.md 视为已确认定稿。

## 直接开始的位置

- 仓库：Elijahwww/ebc-page-system
- 分支：`projects/ebcshare-frontend-preview`（尚未合并到 main）
- 项目：`projects/2026-11-ebcshare-workplace/`
- 前端：`demo/index.html`、`demo/styles.css`、`demo/app.js`、`demo/data.js`、`demo/assets/`
- 原前端基线提交：`e03462881be7b2f59b4b315e2bd3be2a8e88f210`；本交接更新只改文档，下一位 Agent 以该分支最新 HEAD 为准。
- 草稿 PR：https://github.com/Elijahwww/ebc-page-system/pull/10
- 当前公开预览：https://ebc-share-workplace-elijah.familiarleopard16.chatgpt.site/
- 托管 Site：`appgprj_6af5655fcbe4819184010f4ae87f3735`；已发布源码提交 `0d7235f6b6136b24bfd6ed12ca24813ff81a6035`。GitHub 工作分支和托管源码是两份副本，未配置自动同步；修改 GitHub 后需要单独更新部署，不能声称 Push 后预览自动变化。

## 用户最新反馈与任务

用户原话：“我感觉视觉做得很糟糕，我想用Cladue优化下”。

本次任务：基于现有需求和可交互源码，由 Claude 重新评估并改善前端视觉；允许调整版式、布局、字体、颜色、间距、图文素材和组件，而非默认只做局部换色。用户没有指定新的审美方向，不得替用户虚构具体偏好或批准记录。当前 PM 方案也只是候选，可以提出有依据的调整。

用户已明确确认的范围：

1. 交付接近上线质量的可交互前端样式；业务后台和真实接口交给 IT，不重做完整前后端系统。
2. 集团内部各国家地区、各部门员工；界面中英文。
3. 保留社区动态、通知公告和积分，并形成翻译、EBC Board、域名、素材库的统一入口。
4. 预览应可直接打开，不增加登录、验证码或 ChatGPT 登录动作；2026-11-12 已按用户要求改为公开访问并在未登录页面验证。

## 必读与修改边界

先读取仓库 AGENTS.md 与本 handoff，再读 brief.md、pm-decision.md、copy-sheet.md、design-spec.md，并实际运行 demo。qa-report.md 只证明上一版的有限功能检查，不证明视觉获认可。Copy Sheet v1 是 WORKING_CANDIDATE，无 USER_APPROVED_COPY；可有依据地修订，但同步维护双语意义和 Copy ID。

允许：重构本项目 UI、交互呈现与草稿文案；必要时调整候选信息结构。保留：真实 Board 附件数据及“交付范围不等于完成进度”的口径。不要编造真实业务数据，不接入凭证，不擅自修改全局规则或历史源文件。

## 交付与验收

直接交付实际可运行的页面。中英文及桌面/窄屏分别检查；搜索、收藏、公告、动态、Board 筛选等已有交互需继续可用。截图必须来自真实渲染，并列出实质视觉变化。更新 design-spec.md、iterations.md 和 handoff.md；独立研究或备选可放 runs/claude-2026-11-12/。明确实际部署结果；没有托管权限时交付源码和本地预览，不假称线上已更新。

视觉改善完成后再交用户评审。当前没有用户认可的新方向，也没有完成 Claude 优化。

## IT 接入位置

| 文件/函数 | 本版行为 | 接入时替换 |
|---|---|---|
| `app.js` apps / appDetail / launch | 目录与状态示例，进入本地工具页 | 应用真实 URL、负责人、用户可见状态；按实际接入决定新标签页或内嵌 |
| state / persist | localStorage 保存演示 | 员工配置、收藏、阅读、发布等服务端数据；不能把前端状态当授权 |
| notices / initialPosts | 双语示例内容 | 正式公告/动态，按地区部门与权限返回；正文按实际语种回退 |
| `data.js` BOARD_DATA | 附件静态快照 | Board 数据接口；保留交付范围口径，负责人/截止日期仅在来源提供后显示 |
| request-form / publish-form | 本地申请/发布 | 鉴权、校验、接口错误、重试、成功后更新状态 |
| `translation()` | 预设译文示例 | 导向现有 SEO 系统或替换工作区；不可把示例按钮作为翻译 API |
| shell / profile | 示例账户与积分 | 集团身份、真实积分规则、区域与时区配置 |

正式接入后再确认：应用地址与访问模式、身份与权限、真实内容语言、品牌 Logo 文件、跨浏览器/触屏测试。前端不含凭证，不向外部发送用户文本；预览已按用户要求公开免登录；集团正式业务站点 ebcshare.com 未改动。

状态 VISUAL_REWORK_REQUIRED。审核真实业务接入之后再评估集团生产上线；静态预览已经可以部署运行。
