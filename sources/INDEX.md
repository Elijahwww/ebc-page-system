# Source Assets（原始页面资产）

原始页面资产的只读归档：设计图、可读源代码、页面 URL 与原始说明。每个版本一个目录，互相独立；`manifest.md` 记录文件来源、缺失内容与关联的 CASE。

- 导入版本：`original-sources-v0.1`（2026-11-11）
- 来源：`D:\原始资产`（原始文件未修改）
- 分析报告不在此目录；案例分析见 `cases/`。

## 版本索引

| 版本 | 路径 | CASE | 类型 | 人群 | 文件数 | 大小 |
|---|---|---|---|---|---|---|
| ETF-A | [`landing-pages/etf/A/`](landing-pages/etf/A/manifest.md) | CASE-001-A | 推广页 | 小白投资者 | 19 | 7.95 MB |
| ETF-B | [`landing-pages/etf/B/`](landing-pages/etf/B/manifest.md) | CASE-001-B | 推广页 | 中国大陆购买ETF用户 | 18 | 9.10 MB |
| ETF-C | [`landing-pages/etf/C/`](landing-pages/etf/C/manifest.md) | CASE-001-C | 推广页 | 平台现有存量客户 | 19 | 9.22 MB |
| OIL-A | [`landing-pages/oil/A/`](landing-pages/oil/A/manifest.md) | CASE-002-A | 推广页 | 小白投资者 | 21 | 5.55 MB |
| OIL-B | [`landing-pages/oil/B/`](landing-pages/oil/B/manifest.md) | CASE-002-B | 推广页 | 专业投资者 | 21 | 7.11 MB |
| CT-A | [`landing-pages/copy-trading/A/`](landing-pages/copy-trading/A/manifest.md) | CASE-003-A | 推广页 | 小白投资者 | 20 | 8.27 MB |
| CT-B | [`landing-pages/copy-trading/B/`](landing-pages/copy-trading/B/manifest.md) | CASE-003-B | 推广页 | 专业投资者 | 20 | 4.91 MB |
| US-D | [`website/us-stocks/D-official-design/`](website/us-stocks/D-official-design/manifest.md) | CASE-004-D | 官网（仅设计） | — | 4 | 3.60 MB |
| US-X | [`website/us-stocks/X-usstocks-code/`](website/us-stocks/X-usstocks-code/manifest.md) | CASE-004-X | 代码包（归属待确认） | — | 16 | 0.10 MB |

## 目录约定

```
<版本>/
├── manifest.md          # 版本、文件、URL、缺失内容、脱敏记录、关联 CASE
├── original-notes/      # 原始说明文件（原样）
├── design/pc.png        # PC 设计图（原文件名见 manifest）
├── design/mobile.png    # 移动端设计图
└── code/<slug>/         # 页面源码（Vue / Vike）与 locales，已排除 .DS_Store
```

## 规则

- 归档内容只追加不改写；新版本新建目录（如 `etf/D/`），不覆盖旧版本。
- 进入仓库前必须脱敏：凭证一律替换为 `__REDACTED_*__` 占位符，并在 manifest 记录行号。
- 设计图含合作方视觉与第三方品牌标识，仓库需保持私有。
- 文案事实以已审核的事实库为准；此处源码只代表当时的页面状态。
