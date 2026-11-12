# 前端交接 v1

项目 `2026-11-ebcshare-workplace`；全球内部员工；工作语言中文；视觉评审阶段。基线仓库 main commit：`eeb846fb36254a5515ad2a3dd89f293e9acad828`。本次前端的确切提交见所在 PR/版本记录。

## 下一项工作

以当前页面完成视觉评审，再由 IT 将演示状态替换成真实应用目录、员工身份和内容接口。此交接不要求重写四个业务系统。

用户已确认：可交互的前端样式是主交付，中英文，覆盖全球部门；后端实现交 IT。未确认：本版具体版式/新文案。Copy Sheet v1 全部 WORKING_CANDIDATE；暂无 USER_APPROVED_COPY。

最小必读：brief.md、pm-decision.md、copy-sheet.md、design-spec.md、qa-report.md。允许改本项目前端和草稿；保留附件活动事实和用户范围，重大变动写 iterations.md。后续独立候选放 `runs/<agent>-<date>/`；语义冲突回流 PM/Copy，视觉问题回流 Design。

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

正式接入后再确认：应用地址与访问模式、身份与权限、真实内容语言、品牌 Logo 文件、跨浏览器/触屏测试。前端不含凭证，不向外部发送用户文本；预览部署保持私有，未改动 ebcshare.com。

状态 READY_FOR_VISUAL_REVIEW。审核真实业务接入之后再评估集团生产上线；静态预览已经可以部署运行。
