import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * 0x:NANSHA · 南沙产业 Wiki — 复古科幻 (Retro Sci-Fi)
 *
 * Cyan/Magenta neon on deep-space black, CRT scanlines, terminal mono.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "0x:NANSHA · 南沙产业 Wiki",
    pageTitleSuffix: " ▸ 编译南沙产业知识图谱",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "0x-nansha.local",
    ignorePatterns: ["private", "templates", ".obsidian", "**/_template.md"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Orbitron",
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#0a0e14",
          lightgray: "#1c2230",
          gray: "#6a7384",
          darkgray: "#c9d4ff",
          dark: "#e6f0ff",
          secondary: "#00ffe1",
          tertiary: "#ff2e88",
          highlight: "rgba(0, 255, 225, 0.10)",
          textHighlight: "#ff2e8855",
        },
        darkMode: {
          light: "#06080d",
          lightgray: "#11161f",
          gray: "#5c6678",
          darkgray: "#d4ddf5",
          dark: "#eaf2ff",
          secondary: "#00ffe1",
          tertiary: "#ff2e88",
          highlight: "rgba(0, 255, 225, 0.12)",
          textHighlight: "#ff2e8855",
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
