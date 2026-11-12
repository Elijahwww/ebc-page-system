# EBC 页面项目工作区

> **正常生产工作流**：每个真实项目有独立目录，使用 `main` 最新可用 Skill 和知识库。项目可以交付 Demo/源代码，即使某些证据仍是待核实的候选；待公开上线前必须补齐实际发布要求。
> 这个目录不是“测试废稿箱”，真实产物、用户审稿决定与复盘都应保留。

## 约定目录（示例）
```text
projects/
└── 2026-11-careers-refresh/
    ├── brief.md            # 用户原始目标、地区渠道、状态
    ├── pm-decision.md      # D/R/U/C/S 可审查结论、反证和跨节点回退
    ├── copy-sheet.md       # 各模块 H1/正文/CTA，确认与草稿状态
    ├── design-spec.md      # 布局、组件、媒体、移动适配（适用时）
    ├── iterations.md       # 当前项目 V1→V2→V3 修改记录
    ├── evidence/           # 可复查 URL、抓取日期、截图/来源描述
    └── demo/               # 要求代码时可运行页面
```

目录名称可根据项目取简洁 slug；不强制创造无意义的文件。如果只修改一句 Banner，记录 Copy Decision Card 和必要的项目日志即可。

## 多 Agent 比较但不互相污染
多个 AI 分别尝试同一个 Brief，可以在 `projects/<slug>/runs/<agent>-<date>/` 保存产出。最后人工选择/合成形成 `copy-sheet.md` 或 `pm-decision.md`，并通过真实批注写入 `iterations.md`。

## 何时升级为全局规则？
只有能说明来源、情境、失效边界和修改机制的经验，才进入 `content/`、`pm/`、`research/` 或 `design/`。不要把某个项目的一次成功自动推广为所有页面标准。
