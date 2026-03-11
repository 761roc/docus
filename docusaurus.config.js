const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '前端面试题库',
  tagline: '按主题分类的前端面试题、答案与可运行示例',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'local',
  projectName: 'frontend-interview-docs',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        pages: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: '前端面试题库',
      items: [
        {to: '/docs/intro', label: '题库', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '内容入口',
          items: [
            {label: '开始阅读', to: '/docs/intro'},
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Frontend Interview Docs`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['bash', 'css', 'diff', 'git', 'http', 'json', 'tsx', 'typescript'],
    },
  },
};

module.exports = config;
