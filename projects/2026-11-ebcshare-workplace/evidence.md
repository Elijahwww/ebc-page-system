# 来源与证据范围

检查日期：2026-11-12。仓库基线 `eeb846fb36254a5515ad2a3dd89f293e9acad828`。

| ID | 来源 | 状态/影响 |
|---|---|---|
| E1 | 用户提供 ebcshare 首页截图 | VISUAL_OBSERVED：搜索、发帖、双语、公告、工作/生活分类、部门筛选、积分排行榜；用于延续社区 |
| E2 | 用户附件 `index 1.html` | CODE_OBSERVED：第 309 行 DATA，第 508 行 renderRows；51 场、294 交付项次、19 覆盖标签、10 线下、9 类交付；数据覆盖 2026-05 至 11 |
| E3 | https://ebcshare.com/ | LIVE_OBSERVED：仅公司邮箱/验证码登录页和双语切换；未获得生产登录态 |
| E4 | https://learn.microsoft.com/en-us/SharePoint/homesites/sharepoint-app-in-teams-overview | TEXT_OBSERVED / TEXT_ONLY_VISUAL_PENDING：新闻、公告、资源和工作入口分工；据此把平台拆成工作台、社区、应用中心 |
| E5 | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/myapps-overview | TEXT_OBSERVED / TEXT_ONLY_VISUAL_PENDING：应用发现、收藏、访问；据此区分收藏与授权 |
| E6 | https://support.microsoft.com/en-us/sharepoint/sites-pages/create-multilingual-sharepoint-sites-pages-and-news | TEXT_OBSERVED / TEXT_ONLY_VISUAL_PENDING：页面内容本地化有独立管理；据此不承诺中文图片随 UI 自动翻译 |
| E7 | https://github.com/Elijahwww/ebc-page-system/tree/main | CODE_OBSERVED：读取 PM、文案、研究、设计与交接规范；保留项目决策及迭代记录 |
| E8 | https://unsplash.com/es/fotos/una-vista-de-una-ciudad-al-atardecer-con-barcos-en-el-agua-onNuFFz3L_E | 示例城市配图；本地文件 `assets/london.jpg`，不暗示拍摄的是 EBC 场所 |

附件 SHA256：`c3c07bf0553fe2291e975423f736f2a795b34ebaffb203a3e475038b3697edb6`。`data.js` 只抽取附件 DATA，未将交付范围推断为完成进度，保留 AF 等原始地区标签。源码未发现网络请求、登录、编辑或真实权限，不能据此推断其他部门没有独立后台。

进入内部工作平台属于 NOVEL_PROBLEM；既有交易 LP 案例与任务不相同，因此采用企业门户官方资料。仅参考功能组织，不宣称已观察第三方登录后 PC/手机视觉。

演示公告、社区文案、积分 320、等级、排行榜及应用负责人/权限状态均为 WORKING_CANDIDATE 或 SAMPLE。工具真实地址、身份体系、内容受众权限、翻译能力、正式品牌资产为 UNKNOWN。当前项目没有真实员工访谈、转化率或操作耗时实测。
