# EBC 第一批案例索引（摘要）

> 状态：SOURCE_DERIVED_SUMMARY，2026-11-11。依据 Claude 在用户上传 ZIP 中的结构化报告整理，非本轮独立源代码验证。案例完整报告尚在用户上传的原始 ZIP 的 `asset-review/cases/`。

| Case | 页面与版本 | 适用类型 | 关键内容观察 | 当前证据限制 |
|---|---|---|---|---|
| CASE-001 | ETF CFD：A 初学者、B 中国大陆 ETF 用户、C 存量客户（3 版） | 广告/活动 LP | A 以 ETF 与收益认知教育为主；B 对比大陆 ETF 购买痛点；C 前移策略/活动；共享主要注册流程 | 活动到期未确认，历史收益/杠杆主张 NV；缺完整表单源码与转化数据 |
| CASE-002 | 原油 CFD：A 初学者、B 专业用户（2 版） | 广告 LP | A 讲原油与生活及金额门槛；B 用交易机制、手数与执行信息说明 | 行情 API Token 风险；执行数字与产品条件 NV；缺组件与原图 |
| CASE-003 | Copy Trading：A 初学者、B 专业用户（2 版） | 广告 LP | A 自己交易 vs 跟单；B 信号机制、用户规模和风控演示；CTA 指向注册弹窗 | SignalList 源码缺失、用户规模/收益数据未核实、SSR 数字初始值 0 |
| CASE-004 | 官网美股 CFD：1 版设计图 | 官网产品页 | 主题化美股、产品规格/报价/FAQ/联系方式；PC 与 MB | 本地 `usstocks` 代码不属于此主站页面；无法核实官网线上版本 |

## 重点案例洞察
### 同产品不同受众的版本设计
Claude 在三个广告主题观察到不同受众版本不仅改变 H1，还调整：首要动机、比较参照、数据/度量、信任证据、模块排序。**可作为 PM 方案设计输入，不是经过 A/B 证明的最优公式。**

### 官网与广告 LP 的角色
官网样本包含产品规格、报价与 FAQ，广告 LP 更聚焦一个主转化动作。这是本批样本的可观察差异，不足以证明所有官网或 LP 都必须采用这些固定模块。

### 组件复用线索
`registryFormSSR`、`topMenuNoA`、`jianguan`、`riskWarning`、`ClosingSection`、`JoinSteps`、`SignalList`；这批资料仅含调用方式，**缺共享组件源代码**。不能直接承诺其实现或生产可用性。

## 案例原始报告路径（原 ZIP）
- `asset-review/cases/CASE-001.md`
- `asset-review/cases/CASE-002.md`
- `asset-review/cases/CASE-003.md`
- `asset-review/cases/CASE-004.md`
- 辅助：`asset-review/01-ASSET-INVENTORY.md`、`02-CROSS-CASE-ANALYSIS.md`、`03-RULE-CANDIDATES.md`、`04-COMPONENT-ANALYSIS.md`、`05-GAPS-AND-CONFLICTS.md`、`source-registry.csv`

## 数据完备性
4 主题、8 版本、165 条来源登记（其中 7 次线上文本核对、16 张设计图切片目检）。当前 GitHub 摘要不能替代原始证据，待完整导入及后续源文件补齐。
