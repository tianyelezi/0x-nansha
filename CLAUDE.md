# LLM Wiki Schema & 工作流

## 核心架构

```
raw/          → 原始文档（你管理，我只读）
wiki/         → 知识库（我完全维护）
CLAUDE.md     → 本文件（规则和约定）
```

## Wiki 层级

### 1. 索引和日志
- **wiki/index.md** - 内容导向的主目录，按分类列表所有页面
- **wiki/log.md** - 年代志记录，格式：`## [YYYY-MM-DD] 操作类型 | 标题`

### 2. 页面分类

#### entities/  - 实体页面
- 人物、组织、项目、事件等真实或虚拟的对象
- 格式：`[实体名称].md`
- 使用模板：`entities/_template.md`

#### concepts/  - 概念页面
- 主题、理论、原则、方法论、框架
- 格式：`[概念名称].md`
- 使用模板：`concepts/_template.md`

#### sources/  - 源摘要
- 每个导入的源文档一个文件
- 格式：`sources/[源标题或ID].md`
- 包括：来源信息、关键要点、与现有知识的连接

#### analyses/  - 生成的分析
- 对比表、综合分析、见解整理
- 由对话中的问题驱动生成
- 格式自由，但应链接到相关的 entities 和 concepts

### 3. 页面元数据（YAML Front Matter）
```yaml
---
title: 页面标题
type: entity | concept | source | analysis
tags: [tag1, tag2]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source-id-1, source-id-2]
related: [entity-1, concept-1]
status: draft | active | archived
---
```

## 工作流

### 摄入新源 (Ingest)
1. 你放置源文件到 `raw/` 对应子目录
2. 告诉我："摄入 [源标题]"
3. 我会：
   - 读取源文件
   - 生成源摘要 → `sources/[ID].md`
   - 创建或更新相关的 entities/concepts 页面
   - 更新 `wiki/index.md`
   - 在 `wiki/log.md` 追加记录
   - 讨论关键发现和连接

### 查询和分析 (Query)
1. 你提问或要求分析
2. 我会：
   - 查看 `wiki/index.md` 找到相关页面
   - 读取相关的 entities、concepts、sources
   - 生成答案或生成新的分析页面
   - 如果生成了新分析，保存为 `analyses/[名称].md`
   - 更新相关页面的交叉引用
   - 在 `wiki/log.md` 记录查询

### 维护检查 (Lint)
定期（你要求时）我会检查：
- 页面间的矛盾
- 孤立页面（无入链）
- 缺失的交叉引用
- 需要新建的概念/实体
- 过时的信息

## 页面编写规范

### 基础规范
- Markdown 格式，UTF-8 编码
- 文件名：英文或拼音，用 `-` 连接（不用空格）
- 标题：`# 标题` 用于 H1
- 链接格式：`[[实体名称]]` 或 `[显示文本](../path/to/file.md)`

### 页面结构

**实体页面：**
```markdown
# [实体名称]

## 基本信息
- 类型：...
- 相关方：...

## 描述
...

## 关键特征
- 特征1
- 特征2

## 相关实体
- [[实体1]]
- [[实体2]]

## 源
- [源1](../sources/source-1.md)
```

**概念页面：**
```markdown
# [概念名称]

## 定义
...

## 关键原理
- 原理1
- 原理2

## 应用示例
- 例1
- 例2

## 相关概念
- [[概念1]]
- [[概念2]]

## 相关实体
- [[实体1]]
```

## 交叉引用约定
- 首次提及实体/概念时用双括号 `[[名称]]` 创建链接
- 同一页面中重复提及只需链接一次
- 维护双向链接（A 链接到 B，B 也应链接到 A）

## 日志记录格式

在 `wiki/log.md` 中，每条记录：
```markdown
## [YYYY-MM-DD HH:MM] 操作 | 标题

- 修改的页面：page1.md, page2.md
- 摘要：简要描述发生了什么
```

可以 grep 查询最近操作：`grep "^## \[" wiki/log.md | tail -5`

## 配置偏好

### 你的风格
- 知识库用途：个人知识积累/学习
- 摄入频率：逐个摄入，讨论后再整合
- 交互方式：我提建议，你决定取舍

### 我的行为
- 主动维护所有页面交叉引用
- 发现矛盾时明确指出
- 自动更新相关页面（有 related 标签时）
- 每次摄入后推荐下一步问题方向
- 定期建议新的分析角度

## 特殊约定

- **[DRAFT]** 前缀：还在探索中，可能不完整的页面
- **[ARCHIVED]**：不再活跃的页面，保留供参考
- **[TODO]**：需要后续补充或确认的内容
- **[CONTRADICTION]**：与其他页面有矛盾，需要调和

## 工具建议（可选）

- **Obsidian** - 浏览和编辑 wiki（已配置）
  - Graph View 查看连接
  - Dataview 查询和表格
  - Web Clipper 快速导入
- **qmd**（命令行搜索）- 当 wiki 成长到 100+ 页时考虑添加

---

**最后更新：** 2026-05-16
**维护者：** Claude + You
