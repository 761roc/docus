/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  interviewSidebar: [
    'intro',
    {
      type: 'category',
      label: '题库分类',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'categories/html-browser',
          label: 'HTML 与浏览器',
        },
        {
          type: 'doc',
          id: 'categories/css',
          label: 'CSS',
        },
        {
          type: 'doc',
          id: 'categories/javascript',
          label: 'JavaScript',
        },
        {
          type: 'doc',
          id: 'categories/typescript',
          label: 'TypeScript',
        },
        {
          type: 'doc',
          id: 'categories/react',
          label: 'React',
        },
        {
          type: 'doc',
          id: 'categories/vue',
          label: 'Vue',
        },
        {
          type: 'doc',
          id: 'categories/engineering',
          label: '工程化',
        },
        {
          type: 'doc',
          id: 'categories/browser-network-security',
          label: '浏览器、网络与安全',
        },
        {
          type: 'doc',
          id: 'categories/performance',
          label: '性能优化',
        },
        {
          type: 'doc',
          id: 'categories/accessibility',
          label: '可访问性',
        },
        {
          type: 'doc',
          id: 'categories/testing',
          label: '测试',
        },
        {
          type: 'doc',
          id: 'categories/node-bff',
          label: 'Node.js / BFF',
        },
        {
          type: 'doc',
          id: 'categories/react-native',
          label: 'React Native',
        },
        {
          type: 'doc',
          id: 'categories/git',
          label: 'Git',
        },
      ],
    },
    {
      type: 'category',
      label: 'Vue 专题',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'vue/index',
          label: '总览',
        },
        {
          type: 'doc',
          id: 'vue/knowledge-points',
          label: '常用知识点',
        },
        {
          type: 'doc',
          id: 'vue/api-usage',
          label: 'API 用法速查',
        },
        {
          type: 'doc',
          id: 'vue/cautions',
          label: '注意事项与常见坑',
        },
      ],
    },
    {
      type: 'category',
      label: 'Frontend Master Prep 仓库整理',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'categories/coding-challenges',
          label: '手写与编码题',
        },
        {
          type: 'doc',
          id: 'categories/flashcards',
          label: '高频闪卡速记',
        },
        {
          type: 'doc',
          id: 'categories/async-javascript',
          label: '异步 JavaScript',
        },
        {
          type: 'doc',
          id: 'categories/advanced-react',
          label: '高级 React',
        },
        {
          type: 'doc',
          id: 'categories/nextjs',
          label: 'Next.js',
        },
        {
          type: 'doc',
          id: 'categories/browser-web-apis',
          label: '浏览器与 Web APIs',
        },
        {
          type: 'doc',
          id: 'categories/networking',
          label: '网络',
        },
        {
          type: 'doc',
          id: 'categories/security',
          label: '前端安全',
        },
        {
          type: 'doc',
          id: 'categories/system-design',
          label: '前端系统设计',
        },
        {
          type: 'doc',
          id: 'categories/pwa',
          label: 'PWA',
        },
        {
          type: 'doc',
          id: 'categories/tooling-build',
          label: '工具链与构建',
        },
        {
          type: 'doc',
          id: 'categories/internationalization',
          label: '国际化与本地化',
        },
        {
          type: 'doc',
          id: 'categories/seo',
          label: 'SEO 与可发现性',
        },
      ],
    },
  ],
};

module.exports = sidebars;
