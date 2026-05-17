import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Search({ enablePreview: true })],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/tianyelezi/0x-nansha",
      在线站点: "https://tianyelezi.github.io/0x-nansha/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "目录导航",
      folderDefaultState: "open",
      filterFn: (node) => {
        const hidden = new Set(["tags", "log", "README", "readme"])
        return !hidden.has(node.slugSegment ?? "")
      },
      mapFn: (node) => {
        const zh: Record<string, string> = {
          concepts: "产业概念",
          entities: "空间载体与组织",
          analyses: "综合分析",
          sources: "源文档",
        }
        if (node.slugSegment && zh[node.slugSegment]) {
          node.displayName = zh[node.slugSegment]
        }
      },
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.3,
        fontSize: 0.7,
        linkDistance: 40,
        centerForce: 0.35,
        focusOnHover: true,
      },
      globalGraph: {
        depth: -1,
        scale: 1.1,
        fontSize: 0.75,
        linkDistance: 35,
        focusOnHover: true,
        enableRadial: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "目录导航",
      folderDefaultState: "open",
      filterFn: (node) => {
        const hidden = new Set(["tags", "log", "README", "readme"])
        return !hidden.has(node.slugSegment ?? "")
      },
      mapFn: (node) => {
        const zh: Record<string, string> = {
          concepts: "产业概念",
          entities: "空间载体与组织",
          analyses: "综合分析",
          sources: "源文档",
        }
        if (node.slugSegment && zh[node.slugSegment]) {
          node.displayName = zh[node.slugSegment]
        }
      },
    }),
  ],
  right: [],
}
