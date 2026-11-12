# EBC Visual Direction 回归测试 v0.2（SCENARIOS / NOT_RUN）

## VIS-01 · EBC Share 传统卡片墙 v1
输入：用户要求“干净、酷炫的科技工作平台，不是传统内部 list 平台”，旧版白卡拥挤，所有信息一屏同权。
PASS：Agent 先找出信息层级/风格的失败根因，提出两种有实质差异的 Art Direction；保留真实社区/公告/积分/工具和 Board 业务。渲染 Desktop/Mobile、记录视觉与功能两套 QA；不是只换配色/圆角。
FAIL：只增加统一渐变、动效、更多卡片，或只报告代码测试通过。

## VIS-02 · Claude v2 暖纸+衬线草案仍被质疑
输入：Claude 输出 17 张截图和 30 项功能断言 PASS；用户说视觉仍不符合预期。
PASS：标 `VISUAL_REVIEW_NOT_PASSED`，允许重新选择方向并处理真实截图；不因已测试功能就停止；被保留的中文文案/活动数据/交互继续受约束。
FAIL：将用户否定归结为“纯个人口味不可复现”，拒绝修复；或凭文本描述称截图已经核验。

## VIS-03 · EBC 官网产品页
输入：用户提供过去 Figma Make 的 Pre-IPO 产品页 SKILL 作为审美参考，但当前项目有不同真实产品状态和 Copy Sheet。
PASS：仅提取节奏/字体/区块/留白/媒体逻辑，不能硬套旧 `5600px`、蓝色按钮、固定 7 个模块、旧产品是否交易、符号和 0 手续费；真实事实由当前批准版本决定。
FAIL：把用户历史具体项目的旧文案和视觉 token 当作全站默认。

## VIS-04 · 广告 LP / Campaign 类型
输入：只说“制作交易大赛 LP”，无真实分类模块素材。
PASS：要求先依据用户后续上传的真实案例定义页面类型和核心模块，视觉方法可以先工作但标 `MODULE_SCHEMA_PENDING`；不自己宣布三类一定是预热/进行中/颁奖。
FAIL：自动添加 8 屏奖项/用户故事/排行榜并称为已确认固定模块。

## VIS-05 · 日本特殊市场页面
输入：工作语言中文、目标市场 Japan。
PASS：在 PM 研究阶段先读取当地需求和证据，中文写内部方案；共用视觉质量门槛但地区差异作为局部 override；中文确认后另行日文化。
FAIL：默认中国用户心理、要求所有语种同时翻译或给日本完全独立一套无证据的设计标准。

## VIS-06 · 外部开源组件引用
输入：Agent 想安装 React Bits / 21st.dev 组件强化视觉。
PASS：先解释界面具体哪里需要特定表现，检查技术栈/许可/性能/无障碍，必要时只采用一处有用组件；能不用则不用。
FAIL：为了「酷炫」自动导入很多依赖、WebGL 背景、到处 hover 闪烁，或假装已使用第三方服务。

## 真实记录格式
`project,agent,version,art_direction,render_viewports,screenshot_paths,visual_P1,engineering_P0,changes_before_after,user_review_status,verdict`
测试应运行实际 Demo 和视觉评估；这份文档存在本身不代表运行过测试。
