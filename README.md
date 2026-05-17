# 🧠 个人知识库

一个由 Claude 维护的**持久化、递进式知识库**，基于 Karpathy 的 LLM Wiki 模式。

## 📊 结构

```
.
├── raw/              ← 你导入的源文档（只读）
│   ├── articles/     文章、博客、网页
│   ├── papers/       论文、研究报告
│   ├── books/        书籍章节
│   ├── data/         数据文件、CSV 等
│   └── assets/       图片、视频等媒体
│
├── wiki/             ← 知识库（Claude 维护）
│   ├── index.md      主目录
│   ├── log.md        操作日志
│   ├── entities/     人物、组织、事件
│   ├── concepts/     理论、原则、框架
│   ├── sources/      源文档摘要
│   └── analyses/     综合分析
│
├── CLAUDE.md         ← Schema & 规则（关键！）
└── .obsidian/        Obsidian 配置
```

## 🚀 快速开始

### 第一步：放入源文档
```bash
# 比如有一篇文章想导入
cp ~/Downloads/article.pdf raw/articles/
# 或者有一份 Markdown 笔记
cp ~/my-notes.md raw/articles/
```

### 第二步：告诉我摄入
```
你：摄入 articles/article.pdf

我：✅ 读取源文件
   ✅ 生成摘要
   ✅ 建立链接
   ✅ 更新索引
```

### 第三步：开始查询
```
你：这个知识库里有什么关于 X 的内容？

我：搜索 + 综合 + 生成答案
   （如果需要，生成新的分析页面）
```

## 💡 核心特性

| 特性 | 说明 |
|------|------|
| 📈 **累积** | 知识在每次摄入后增长，而非每次查询都重新发现 |
| 🔗 **连接** | 自动建立页面间的关联和交叉引用 |
| 📝 **维护** | 矛盾自动检测，缺失链接自动补全 |
| 📊 **可视** | 在 Obsidian Graph View 中看到知识结构 |
| 🔍 **可查** | 一致的索引和日志，支持 grep 查询 |

## 📚 使用场景

这个 wiki 特别适合：
- 🔬 **深度研究** - 某个领域的持久知识积累
- 📖 **阅读陪伴** - 逐章阅读时构建伴随 wiki
- 🧠 **个人知识管理** - 生活、工作、学习的长期记录
- 💼 **项目知识** - 项目进展中的持续学习记录

## 🔧 关键文件

- **CLAUDE.md** - 整个系统的规则和约定（必读！）
- **wiki/index.md** - 知识库主目录，所有页面索引
- **wiki/log.md** - 操作日志，支持 grep 查询

## 🛠️ 用 Obsidian 浏览

1. 用 Obsidian 打开这个目录
2. 双击 wiki/ 文件夹中的任何 .md 文件
3. 看左侧的"关系视图"和"反向链接"
4. 右上角 Graph View 查看整个知识网络

建议插件：Dataview, Graph Analysis, Templater

## 📖 详细规则

所有细节都在 **CLAUDE.md** 中：
- 页面编写规范
- 分类和元数据
- 工作流（摄入、查询、维护）
- 我的行为约定

## 🎯 下一步

1. ✅ 结构已建立（你在这里）
2. 📁 放入第一份源文档
3. 💬 告诉我"摄入"
4. 🔗 看我如何构建连接

---

**准备好了？** 说"摄入"开始吧！🚀

---

## 🌐 `0x:NANSHA` 站点（复古科幻）

把 `wiki/` 编译为可浏览站点（Quartz v4），自定义霓虹青/品红 + CRT 扫描线 + 终端字体。

### 启动开发服务器

```bash
cd site
npm install      # 仅首次
npx quartz build --serve --port 8080 --wsPort 3030
# 打开 http://localhost:8080
```

### 构建静态站（用于部署）

```bash
cd site
npx quartz build
# 产物在 site/public/，可直接部署到 Vercel / Cloudflare Pages / Netlify / GitHub Pages
```

### 文件指向

- `site/content` → 软链接到 `wiki/`，所有内容编辑直接改 `wiki/`，站点热更新
- `site/quartz.config.ts` → 站点配置（标题、颜色、字体）
- `site/quartz/styles/custom.scss` → 复古科幻自定义 CSS

### Obsidian 同时可用

Quartz 的 `[[wikilink]]`、front matter、双向链接与 Obsidian 完全兼容。在 Obsidian 中打开本仓库根目录即可同步编辑。

---

*由 Claude 创建和维护 · 2026-05-16*
