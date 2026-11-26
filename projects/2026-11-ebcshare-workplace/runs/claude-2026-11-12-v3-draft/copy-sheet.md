# Copy Sheet v1

状态：WORKING_CANDIDATE。没有用户批准的中文句子；本版中文先设计，英文依照用户双语要求提供同结构自然表达草稿。完整界面词条见 ui-copy.json，Copy ID 为 SHARE.<key>；代码中的 dict 是当前渲染源，与导出 JSON 一致。

| Copy ID | 中文 | English |
|---|---|---|
| SHARE.workspace | 工作台 | Workspace |
| SHARE.community | 团队动态 | Community |
| SHARE.announcements | 通知公告 | Announcements |
| SHARE.apps | 应用中心 | App directory |
| SHARE.hello | 你好，Elijah | Hello, Elijah |
| SHARE.greeting | 常用工具、重要公告和团队更新，都在这里。 | Your everyday tools, important news, and team updates. |
| SHARE.favoriteApps | 常用应用 | Your everyday tools |
| SHARE.importantNews | 重要公告 | Important announcements |
| SHARE.latest | 团队新鲜事 | Around EBC |
| SHARE.findTools | 查找工具，开始工作。 | Find a tool. Get to work. |
| SHARE.appsDesc | 集团工作工具的统一入口，找到适合你的应用。 | One place to discover the tools your teams use. |
| SHARE.communityDesc | 看见每个团队的进展，分享工作之外的日常。 | See what teams are working on. Share the moments in between. |
| SHARE.post | 发布动态 | Share an update |
| SHARE.open | 打开应用 | Open app |
| SHARE.request | 申请访问 | Request access |
| SHARE.requested | 审核中 | Under review |
| SHARE.building | 建设中 | In development |
| SHARE.readOnly | 只读统计 | Read-only insights |
| SHARE.boardDesc | 活动安排与交付范围，一目了然。 | Campaign plans and delivery scope, in one view. |
| SHARE.includedScope | 纳入交付范围，不代表完成数 | In scope, not a completion count |
| SHARE.scopeNotice | 以下项目表示该活动纳入了对应交付范围，不表示当前完成状态。 | These items are included in the campaign’s delivery scope. They do not indicate completion. |
| SHARE.noResults | 没有找到相关内容 | Nothing found just yet |
| SHARE.tryAgain | 试试其他关键词，或清除筛选条件。 | Try another keyword, or clear your filters. |
| SHARE.previewNote | 当前为前端交互预览。页面内容及权限状态用于展示，操作仅保存在本浏览器。 | This is an interactive frontend preview. Content and access states are examples. Changes stay in this browser. |

应用名称：多语言翻译 / Translation；活动看板 / EBC Board；域名管理 / Domain Manager；素材库 / Asset Library。页面内容示例属于设计草稿，附件活动名称保留来源原文。界面语言不会自动翻译上传图片或员工自己输入的原文。

## v1.1 增补（2026-11-12，Claude，首页去重与重构）

状态仍为 WORKING_CANDIDATE：以下均为新增草稿，未经用户逐句确认。原有 Copy ID 的中英文一字未改。

| Copy ID | 中文 | English | 位置 |
|---|---|---|---|
| SHARE.skyHint | 拖动时间轴，看看各地同事现在几点 | Drag the timeline to see the time across offices | 首页时间轴 |
| SHARE.skyNow / skyBack | 现在 / 回到现在 | Now / Back to now | 首页时间轴 |
| SHARE.skyYou | 你的时区 | Your time zone | 首页时区卡 |
| SHARE.calEmpty | 这一天没有公告，也没有带日期的活动 | No announcements or dated campaigns on this day | 日历空状态 |
| SHARE.monthCampaigns | 本月活动 | Campaigns this month | 日历右栏 |
| SHARE.monthCampaignsHint | 来源数据按月份记录，不含具体日期 | The source lists campaigns by month, without exact dates | 日历右栏口径 |
| SHARE.noMonthData | 附件数据未覆盖这个月份 | The source snapshot does not cover this month | 日历右栏空状态 |
| SHARE.dateFromName | 日期取自活动名称 | Dates taken from the campaign name | 日历活动条与当日安排 |
| SHARE.scopeItems | 项交付范围 | items in scope | 日历右栏 |

其余短标签（上一周/下一周/回到本周/今天/开始/进行中/结束/前往/操作/选择/打开、小时/分）见 ui-copy.json v1.1。

不再出现在界面上、词条仍保留的 Copy ID：`quickAccess`（侧栏快捷应用）、`recent` / `noRecent`（最近使用胶囊）、`important` 用作首页通知条标签的用法、`noticeTitle`、`campaignReview`、`points`、`favorites`、`personal` 的卡片标题用法、`thursday`、`timezone`。原因是对应模块因功能重复被合并，不是文案被否决；如恢复模块可直接复用。

替代策略：不采用“一个平台，连接全球协作”作为首页核心标题，因为不能说明实际任务；改为身份招呼与工具/公告/动态说明。Board 原“进展清晰可见”改“交付范围”，避免从来源范围推导完成状态。
