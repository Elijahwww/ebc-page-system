# 用 GitHub Desktop 提交 original-sources-v0.1

待提交内容：本文件夹中的 `sources/`（160 个文件，约 55.8 MB）。
目标：仓库 `Elijahwww/ebc-page-system` 的新分支 `assets/original-sources-v0-1`，并创建 Draft PR。不提交 main，不合并。

## 步骤

1. **打开仓库**：GitHub Desktop → File → Clone repository → 选 `Elijahwww/ebc-page-system`（已克隆则直接在 Current repository 中选中）。
2. **同步 main**：Current branch 选 `main` → 点 **Fetch origin**，如有提示再点 **Pull origin**。确认 Changes 面板为空（如有未提交改动，先处理或 Stash，不要带入新分支）。
3. **新建分支**：Current branch → **New branch** → 名称 `assets/original-sources-v0-1` → Create branch based on **main** → Create branch。
4. **复制文件**：Repository → **Show in Explorer**，把本文件夹中的整个 `sources` 文件夹拖入仓库根目录。
   - 如果仓库已存在 `sources/`（例如来自 `assets/initial-import` 的 `sources/registry/`），选择"合并文件夹"。
   - **若提示同名文件冲突，选择"跳过"，不要替换**，并记下被跳过的文件。本包只新增 `sources/INDEX.md`、`sources/.gitignore`、`sources/landing-pages/**`、`sources/website/**`。
5. **检查改动**：回到 GitHub Desktop → Changes 面板应显示 **160 个新增文件**，其中 16 个 `.png`。
   - 只应出现 `sources/` 下的新增文件；如出现修改（M）或删除（D）的文件，取消勾选这些文件。
   - 若 PNG 未出现：确认 `sources/.gitignore` 已复制。
6. **提交**：Summary 填 `assets: import original page sources v0.1`；Description 粘贴 `COMMIT_MSG.txt` 中第 3 行以下的内容 → **Commit to assets/original-sources-v0-1**。
7. **发布分支**：点 **Publish branch**。
8. **创建 Draft PR**：点 **Create Pull Request**（或 Branch → Create pull request），浏览器打开后：
   - base 选 `main`，compare 选 `assets/original-sources-v0-1`；
   - 标题：`Source Assets: 原始页面资产导入 v0.1`；
   - 正文粘贴 `PR_BODY.md`；
   - 点 **Create pull request** 旁的下拉箭头，选 **Create draft pull request**。
9. 不要点 Merge。

## 提交后自检

- PR 的 Files changed 只包含 `sources/` 下的新增文件。
- 在 PR 中搜索 `__REDACTED_QUOTE_API_TOKEN__`，应出现 4 处（原油 A/B 的 `+Page.vue` 与 `test.html`）。
