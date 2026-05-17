import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * 0x:NANSHA · 南沙产业 Wiki — 政务科技风 (Government Tech)
 *
 * 政务深蓝 + 中国红 + 鎏金点缀，白底简洁，思源黑体，适配政府汇报场景。
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "广州南沙 8+2+3 现代化产业体系 · 知识图谱平台",
    pageTitleSuffix: " · 0x:NANSHA",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "tianyelezi.github.io/0x-nansha",
    ignorePatterns: ["private", "templates", ".obsidian", "**/_template.md"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // 思源宋体（标题，权威感）+ 思源黑体（正文/code），Google Fonts 等价
        header: "Noto Serif SC",
        body: "Noto Sans SC",
        code: "JetBrains Mono",
      },
      colors: {
        // 亮色（主用）：白底 + 政务深蓝 + 中国红
        lightMode: {
          light: "#ffffff",
          lightgray: "#e2e8f0",
          gray: "#94a3b8",
          darkgray: "#475569",
          dark: "#0f172a",
          secondary: "#1e40af", // 政务深蓝（链接 / 主标题）
          tertiary: "#c8102e", // 中国红（重点强调，节制使用）
          highlight: "rgba(30, 64, 175, 0.08)", // 极淡蓝色块
          textHighlight: "#fde68a55", // 鎏金高亮（搜索 mark）
        },
        // 暗色（夜读模式）：深邃蓝 + 暖金
        darkMode: {
          light: "#0a1424",
          lightgray: "#1e293b",
          gray: "#64748b",
          darkgray: "#cbd5e1",
          dark: "#f1f5f9",
          secondary: "#60a5fa", // 浅蓝（暗底链接）
          tertiary: "#fbbf24", // 暖金（替代红色保护可读性）
          highlight: "rgba(96, 165, 250, 0.12)",
          textHighlight: "#fbbf2455",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-dark",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
