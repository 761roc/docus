const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "前端面试题库",
  tagline: "JavaScript、React、Vue、工程化等前端面试题与答案",
  titleDelimiter: "|",
  url: "https://mianshi.iupeng.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.svg",
  organizationName: "local",
  projectName: "frontend-interview-docs",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        pages: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: "/docs",
        language: ["en", "zh"],
        searchBarPosition: "right",
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        removeDefaultStopWordFilter: true,
      }),
    ],
  ],
  themeConfig: {
    image: "img/seo-cover.svg",
    metadata: [
      {
        name: "keywords",
        content:
          "前端面试题,前端面试题库,JavaScript面试题,React面试题,Vue面试题,TypeScript面试题,前端工程化,前端性能优化",
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: "前端面试题库",
      items: [{ to: "/docs/intro", label: "题库", position: "left" }],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "内容入口",
          items: [{ label: "开始阅读", to: "/docs/intro" }],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Frontend Interview Docs`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: [
        "bash",
        "css",
        "diff",
        "git",
        "http",
        "json",
        "tsx",
        "typescript",
      ],
    },
  },
};

module.exports = config;
