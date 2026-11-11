# Header / Brand Lockup / FC Barcelona Partner Mark · v0.1

> 状态：DESIGN_BASELINE_CANDIDATE；来源：用户 2026-11-11 指出导航左侧 EBC 与巴萨 Logo 缺失；EBC 官方网站 www.ebc.com 的合作伙伴页面确认与 FC Barcelona 的正式合作关系，但**不能据此判定每个市场/页面均获授权展示 Logo**。下述尺寸全部是 EBC 项目建议值，非 Apple 官方尺寸，也非获批 EBC 品牌手册。

## 1. Header 左侧品牌区域（项目需求）
- 对使用**完整官网导航**的正式 EBC 页面，Header 左侧预留 **EBC Logo + FC Barcelona 合作标识（co-brand / partner lockup）**。这是本项目待设计与品牌审批的默认设计提案。
- 使用品牌方批准的真实矢量或高分辨率品牌资产；严禁用 Emoji、字体、非官方图像或 AI 仿制的 FC Barcelona 徽章代替。
- EBC 主标识在视觉层级上优先；合作标识清晰可辨，但不应成为比 EBC 更突出的导航主体。是否显示“Official Partner”文字应以获批准的物料和对应地区合作权益为准。
- 若正式站点目前已存在获批的联合标识组件与比例：**优先复用其资产和构图**，本文件的数值仅用于新建稿件的默认参考。
- 当前仓库可能含历史设计稿上的标识图像，但未保证包含适用于生产的可编辑/授权 Logo 原文件；找不到时在 Demo 标记 `ASSET_REQUIRED`，不得自行绘制或下载非官方图代用。

## 2. 建议的桌面导航尺寸（EBC_PROPOSED_TOKEN）
| 项目 | 推荐值 | 说明 |
|---|---|---|
| Header 高度 | 72px（紧凑页可 64px） | 根据菜单项和实际 Logo 高度调节 |
| 内部版心 | 与主页面一致，默认 max 1200px | 大屏可按项目变体至 1280px |
| 左侧 lockup 对齐 | 左对齐，垂直居中 | 不允许标识拉伸、裁切或模糊 |
| EBC Logo 参考可视高度 | 28–36px | **以官方 Logo 安全留白/宽高比为准** |
| FC Barcelona 合作标识参考可视高度 | 24–32px | 视资产形态（横版/竖版）定 |
| 两个品牌标识之间 | 建议 16–24px | 是否有分隔线由品牌物料决定 |
| Header 内部左右边距 | 40–64px 或与 container 统一 | 不靠固定像素挤压导航 |

Logo 使用 `object-fit: contain`，保持原始宽高比，不人为重画或改变 Logo 颜色。是否需要分隔线应由正式品牌物料决定。

## 3. 响应式与 Mobile（EBC_PROPOSED_TOKEN）
- 768px 以下可采用 56–64px 高度的紧凑 Header，左右边距建议 16–20px。
- EBC Logo 可视高度建议 24–28px；合作标识仅在授权且空间充足时并列展示。缩小后无法辨识时，可改为仅显示 EBC 主标识，并通过适当区域/二级信息表达合作身份（前提是项目要求保留该信息）。
- 菜单折叠、语言切换与右侧 CTA 不能与合作 Logo 发生碰撞。若不足以容纳完整结构，优先保证主品牌、导航和基本操作可用。
- Header 为 sticky 时应避免遮挡页面锚点和表单；透明 Header 叠在 Hero 上时必须测试两个 Logo 的反色版是否获授权且对比清晰。

## 4. 页面类型规则
| 页面类型 | 左侧 Brand Lockup | 导航结构 |
|---|---|---|
| 官网主页 / 官网品牌页 | 默认设计提案含 EBC + 合作标识，需品牌确认 | 完整官网 Header |
| 官网产品页 | 同官网 Header，依地区/站点配置 | 完整官网 Header |
| Careers / 特殊独立设计 Demo | 若用户要求“无头无尾”则明确不画 Header | 用项目 override 控制 |
| Performance LP | EBC 主标识优先；合作标识按投放市场与授权决定 | 精简 Header，避免无关跳转 |
| 活动页 | 合作主题活动可突出获批联名 Logo；普通活动不强制 | 按活动流程配置 |

## 5. 行为与无障碍要求
- EBC Logo 的点击行为通常返回**本项目获批的站点主页**，不要无条件跳转到跨域的全球官网；广告/受限市场的跳转策略由 PM 明确。
- FC Barcelona 合作标识是链接还是静态标识，需要项目确定；不得默认链接外部巴萨网站或以品牌 Logo 诱导不合适的跨市场跳转。
- img.alt：准确描述“EBC Financial Group”及“FC Barcelona official partnership mark”（以获批的英文官方称谓为准）；若 lockup 是一个整体图，避免重复屏幕阅读器朗读。
- Header 遵循可访问键盘导航、焦点态、contrast 与缩放；Mobile 展开菜单焦点管理与返回行为需要 QA。

## 6. Design / Development 交接必须包含
1. Header 是否启用完整导航、精简导航或无导航；
2. 官方 EBC Logo 文件、官方 FC Barcelona 合作 Logo/lockup 文件及使用权限；
3. PC/MB 使用哪种 Logo 版本、透明/浅色/深色背景对应方案；
4. 实际菜单项、语言切换、登录/开户入口；
5. Logo 与菜单的真实链接、市场和域名边界；
6. 长语言、窄屏和 sticky 的适配与 QA；
7. 若尚缺可用素材，保持明确占位并标为 `ASSET_REQUIRED`，不能用自创标志模拟生产通过。

## 参考
- EBC 官方主页：https://www.ebc.com/
- EBC 官方 FC Barcelona 合作页面：https://www.ebc.com/FCB
- 历史组件调用仅可见 `topMenuNoA`，共享组件原始实现未在第一批源代码包中；不能推断既有导航的每个尺寸和显示状态。
