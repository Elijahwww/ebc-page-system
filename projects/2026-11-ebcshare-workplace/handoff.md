# 交接 v3 · Claude 视觉重构完成，待用户评审

状态：VISUAL_V2_REVIEW_READY · 2026-11-12。v2 视觉已实现并通过本地渲染验证，**尚未经用户评审，也未部署**。不得把 v2 视为获批定稿。

## 当前位置

- 仓库：Elijahwww/ebc-page-system
- 分支：`projects/ebcshare-frontend-preview`（Claude 开工前读取 `.git/HEAD` 确认；未新建分支，未改 main）
- 项目：`projects/2026-11-ebcshare-workplace/`
- 前端：`demo/index.html`、`demo/styles.css`、`demo/app.js`、`demo/data.js`、`demo/assets/`
- 基线：v1 前端提交 `e03462881be7b2f59b4b315e2bd3be2a8e88f210`
- 草稿 PR：https://github.com/Elijahwww/ebc-page-system/pull/10

### 必须知道的两件事

1. **v2 改动只写入了本地工作区，未 commit、未 push。** Claude 本次会话只能读写文件，不能执行 git。需要在本机该分支上自行 `git add projects/2026-11-ebcshare-workplace && git commit && git push`，PR #10 才会更新。
2. **公开预览仍是 v1。** https://ebc-share-workplace-elijah.familiarleopard16.chatgpt.site/ 由托管 Site `appgprj_6af5655fcbe4819184010f4ae87f3735` 提供，与 GitHub 不自动同步，Claude 没有该托管的权限。要看 v2，请本地运行（见下），或由有权限的一方把 `demo/` 重新部署。

## 本地查看 v2

在项目目录运行 `python -m http.server 8080 --directory demo`，打开 `http://localhost:8080`。无需构建。若浏览器里留有 v1 的演示数据，可在个人中心点“重置预览数据”。

## 本次改了什么

| 文件 | 变化 |
|---|---|
| `demo/styles.css` | 整体重写：token + 13 个分区，新的外壳、组件、动效与响应式 |
| `demo/app.js` | 展开为可读格式；视图模板（shell 到 translation 各函数）重写；弹窗标记微调；`render()` 增加焦点恢复、进入动画标记、数字滚动。**数据、状态、`actions`、事件处理、`dict` 文案未改** |
| `demo/index.html` | theme-color 改为桌面色；预加载展示字体 |
| `demo/assets/fonts/` | 新增 Fraunces 两个 woff2 与 `OFL.txt`（SIL OFL 1.1，可商用自托管） |
| `demo/data.js`、`favicon.svg`、`london.jpg` | 未改 |
| `design-spec.md` | 重写为 v2 |
| `iterations.md`、`qa-report.md`、`README.md` | 追加 v2 记录 |
| `runs/claude-2026-11-12/screenshots/` | 17 张真实渲染截图（桌面中文 7 页、桌面英文 2 页、应用详情、手机中文 6 页、手机英文首页） |
| `brief.md`、`pm-decision.md`、`copy-sheet.md`、`ui-copy.json`、`evidence.md` | 未改 |

对 v1 的问题评估与逐项 V1→V2 依据见 `iterations.md`；视觉参数见 `design-spec.md`。

## 用户已确认的范围（未变）

1. 交付接近上线质量的可交互前端样式；业务后台和真实接口交给 IT。
2. 面向集团各国家地区、各部门员工；界面中英文。
3. 保留社区动态、通知公告和积分，并形成翻译、EBC Board、域名、素材库的统一入口。
4. 预览可直接打开，不增加登录。
5. 2026-11-12 追加：视觉要达到上线标准并且有趣；**功能无需增加**。

v2 没有新增功能。Copy Sheet v1 仍是 WORKING_CANDIDATE，没有 USER_APPROVED_COPY。

## 请用户评审时重点看

- 整体气质：暖纸色 + 酒红 + 衬线数字，是否符合对“EBC 内部平台”的预期，还是希望更冷、更克制。
- 应用卡插画与悬停动作的“有趣”程度是否合适，是否过多。
- 首页深色成长卡的分量：积分是否值得占这么显眼的位置。
- Windows 下的实际观感。Claude 的渲染环境是 Linux + Noto Sans CJK；Microsoft YaHei 只有常规与粗体两档，标题字重可能比截图更重。

## 下一位 Agent 的边界

允许：在 v2 基础上按用户评审意见调整视觉；有依据地修订草稿文案并同步 `dict`、ui-copy.json、copy-sheet.md 的双语与 Copy ID。保留：Board 附件数据与“交付范围不等于完成进度”的口径。不要：编造业务数据、接入凭证、修改全局规则或历史源文件、声称线上已更新。

## IT 接入位置

| 文件/函数 | 本版行为 | 接入时替换 |
|---|---|---|
| `app.js` apps / appDetail / launch | 目录与状态示例，进入本地工具页 | 应用真实 URL、负责人、用户可见状态；按实际接入决定新标签页或内嵌 |
| `appArt()` | 四个应用的 CSS 插画按 id 写死 | 新增应用时补一个插画分支，或回退到通用图标样式 |
| state / persist | localStorage（键 `ebcshare-preview-v1`）保存演示 | 员工配置、收藏、阅读、发布等服务端数据；不能把前端状态当授权 |
| notices / initialPosts | 双语示例内容 | 正式公告/动态，按地区部门与权限返回；正文按实际语种回退 |
| `XP` 常量 / `leaderboard()` | 示例积分 320/500、Lv.2 与示例排行 | 真实积分规则与排行接口 |
| `data.js` BOARD_DATA | 附件静态快照 | Board 数据接口；保留交付范围口径，负责人/截止日期仅在来源提供后显示 |
| request-form / publish-form | 本地申请/发布 | 鉴权、校验、接口错误、重试、成功后更新状态 |
| `translation()` | 预设译文示例 | 导向现有 SEO 系统或替换工作区；不可把示例按钮作为翻译 API |
| shell / profile | 示例账户、写死的本周日历（11 月 9–15 日） | 集团身份、区域与时区配置、真实日期 |
| `render()` | 状态变化后整页重绘并恢复焦点 | 接入框架时可换成局部更新；保留焦点恢复与 `ui.entering` 的“只在换页时播放进入动画”约定 |

正式接入后再确认：应用地址与访问模式、身份与权限、真实内容语言、品牌 Logo 文件、Safari/Firefox 与真机触屏测试、loading/失败/重试状态。前端不含凭证，不向外部发送用户文本；集团正式业务站点 ebcshare.com 未改动。

`Demo` ≠ `Ready for Production`：v2 是可托管的静态前端，集团生产上线需在真实业务接入并审核之后再评估。
