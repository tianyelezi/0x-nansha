# 📂 Raw - 源文档存储

这个目录存放你导入的**原始文档**。这些文件是只读的，不会被修改。

## 📁 子目录说明

### articles/
**文章、博客、网页文章**
- 从网页保存的 HTML/Markdown
- 长篇博客文章
- 新闻报道
- Medium、Substack 等文章

**示例：**
```
articles/karpathy-lm-building.md
articles/attention-is-all-you-need.html
articles/llm-safety-paper.pdf
```

### papers/
**论文、研究报告、白皮书**
- PDF 论文
- 研究报告
- 技术规范文档
- arXiv 预印本

**示例：**
```
papers/transformers-paper.pdf
papers/bert-research-report.pdf
papers/llm-scaling-laws.pdf
```

### books/
**书籍的章节或完整内容**
- 逐章保存的书籍内容
- 书籍摘录
- Kindle 导出内容

**示例：**
```
books/thinking-fast-slow-ch1.md
books/designing-data-intensive-applications.pdf
```

### data/
**数据文件和表格**
- CSV / JSON 数据
- 统计数据
- 结构化数据集
- 配置文件

**示例：**
```
data/market-data-2026.csv
data/survey-results.json
data/benchmark-results.xlsx
```

### assets/
**多媒体文件**
- 图片、截图
- 视频
- 图表、设计
- 音频转录

**示例：**
```
assets/diagram.png
assets/architecture.svg
assets/screenshot.jpg
```

## 📥 导入流程

### 1. 放入文件
```bash
# 从浏览器保存的文章
cp ~/Downloads/article.html raw/articles/

# 下载的论文
cp ~/Downloads/paper.pdf raw/papers/

# 书籍内容
cp ~/notes/book-chapter.md raw/books/
```

### 2. 告诉我
```
你：我在 articles/karpathy-essay.md 放了一篇 Karpathy 的长文，请摄入

我：✅ 开始读取...
   ✅ 提取关键点...
   ✅ 创建页面...
   ✅ 建立连接...
```

### 3. 我会
- 生成源摘要 → `wiki/sources/`
- 创建/更新相关实体和概念 → `wiki/entities/` 和 `wiki/concepts/`
- 更新 `wiki/index.md`
- 在 `wiki/log.md` 记录操作
- 告诉你发现了什么

## 💡 最佳实践

### 命名规范
- 使用**英文或拼音**，用 `-` 或 `_` 连接
- 包含**日期**或**版本**（如有）
- 不要用空格，不要用特殊字符

❌ 坏例子：
```
articles/这是一篇很有意思的文章.md
papers/my paper (v2).pdf
```

✅ 好例子：
```
articles/karpathy-building-with-llms.md
papers/transformer-2017.pdf
books/thinking-fast-slow-ch1.md
data/market-data-2026-q1.csv
```

### 文件格式
- **Markdown** (.md) - 最佳，易于解析
- **PDF** (.pdf) - 支持，但我需要时间读取
- **HTML** (.html) - 支持，从网页保存时常见
- **JSON/CSV** (.json, .csv) - 数据文件支持
- **图片** (.png, .jpg, .svg) - 用于参考和可视化

### 大文件处理
- 超过 10MB 的文件：考虑先分割成章节
- 超长论文：可以只放关键章节
- 书籍：逐章放入更好（便于逐步摄入和讨论）

## 🚫 不要做的事

- ❌ 不要删除已摄入的源（我可能需要重新查阅）
- ❌ 不要修改文件内容（保持原始完整）
- ❌ 不要混淆目录（文件放在对应的子目录里）
- ❌ 不要重复导入同一个文件（我会记录已摄入的）

## 📋 已摄入源列表

查看已摄入源的列表：
- 查看 `wiki/sources/` 目录
- 查看 `wiki/index.md` 的"Sources"部分
- 查看 `wiki/log.md` 的摄入操作记录

## 🔄 更新或重新摄入

如果源文档有更新版本：
```
你：articles/old-version.md 有新版本了，我放到了 articles/new-version.md，请摄入新版本

我：✅ 读取新版本
   ✅ 比对旧版本的变化
   ✅ 更新相关页面
   ✅ 标记旧版本为 [ARCHIVED]
```

---

**准备好？** 放入你的第一份源文档，告诉我摄入吧！🚀
