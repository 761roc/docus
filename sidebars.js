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
  ],
};

module.exports = sidebars;
