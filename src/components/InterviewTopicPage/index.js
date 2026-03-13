import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {SeoHead} from '../SeoHead';
import {InterviewQuestion} from '../InterviewQuestion';
import {TopicHero} from '../TopicHero';
import {levelMeta} from '../../data/interviewBank';
import styles from './styles.module.css';

const filterOptions = [
  {value: 'all', label: '全部'},
  {value: 'junior', label: '初级'},
  {value: 'mid', label: '中级'},
  {value: 'senior', label: '高级'},
];

const relatedTopicLinks = {
  'html-browser': [
    {label: 'CSS 面试题', to: '/docs/categories/css'},
    {label: '浏览器与 Web APIs 面试题', to: '/docs/categories/browser-web-apis'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
  ],
  css: [
    {label: 'HTML 与浏览器面试题', to: '/docs/categories/html-browser'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
    {label: '可访问性面试题', to: '/docs/categories/accessibility'},
  ],
  javascript: [
    {label: 'TypeScript 面试题', to: '/docs/categories/typescript'},
    {label: '异步 JavaScript 面试题', to: '/docs/categories/async-javascript'},
    {label: 'React 面试题', to: '/docs/categories/react'},
  ],
  typescript: [
    {label: 'JavaScript 面试题', to: '/docs/categories/javascript'},
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: 'Node.js 与 BFF 面试题', to: '/docs/categories/node-bff'},
  ],
  react: [
    {label: '高级 React 面试题', to: '/docs/categories/advanced-react'},
    {label: 'Next.js 面试题', to: '/docs/categories/nextjs'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
  ],
  vue: [
    {label: 'Vue 专题总览', to: '/docs/vue'},
    {label: 'TypeScript 面试题', to: '/docs/categories/typescript'},
    {label: '前端工程化面试题', to: '/docs/categories/engineering'},
  ],
  engineering: [
    {label: '工具链与构建面试题', to: '/docs/categories/tooling-build'},
    {label: 'Git 面试题', to: '/docs/categories/git'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
  ],
  'browser-network-security': [
    {label: '网络面试题', to: '/docs/categories/networking'},
    {label: '前端安全面试题', to: '/docs/categories/security'},
    {label: '浏览器与 Web APIs 面试题', to: '/docs/categories/browser-web-apis'},
  ],
  performance: [
    {label: 'CSS 面试题', to: '/docs/categories/css'},
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: 'PWA 面试题', to: '/docs/categories/pwa'},
  ],
  accessibility: [
    {label: 'HTML 与浏览器面试题', to: '/docs/categories/html-browser'},
    {label: 'CSS 面试题', to: '/docs/categories/css'},
    {label: 'React 面试题', to: '/docs/categories/react'},
  ],
  testing: [
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: 'Vue 面试题', to: '/docs/categories/vue'},
    {label: '前端工程化面试题', to: '/docs/categories/engineering'},
  ],
  'node-bff': [
    {label: '网络面试题', to: '/docs/categories/networking'},
    {label: '前端系统设计面试题', to: '/docs/categories/system-design'},
    {label: 'Next.js 面试题', to: '/docs/categories/nextjs'},
  ],
  'react-native': [
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
    {label: '前端工程化面试题', to: '/docs/categories/engineering'},
  ],
  git: [
    {label: '前端工程化面试题', to: '/docs/categories/engineering'},
    {label: '工具链与构建面试题', to: '/docs/categories/tooling-build'},
    {label: '前端系统设计面试题', to: '/docs/categories/system-design'},
  ],
  'coding-challenges': [
    {label: 'JavaScript 面试题', to: '/docs/categories/javascript'},
    {label: '异步 JavaScript 面试题', to: '/docs/categories/async-javascript'},
    {label: '高频闪卡速记', to: '/docs/categories/flashcards'},
  ],
  flashcards: [
    {label: 'JavaScript 面试题', to: '/docs/categories/javascript'},
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: '前端手写与编码题', to: '/docs/categories/coding-challenges'},
  ],
  'async-javascript': [
    {label: 'JavaScript 面试题', to: '/docs/categories/javascript'},
    {label: '网络面试题', to: '/docs/categories/networking'},
    {label: 'Node.js 与 BFF 面试题', to: '/docs/categories/node-bff'},
  ],
  'advanced-react': [
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: 'Next.js 面试题', to: '/docs/categories/nextjs'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
  ],
  nextjs: [
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: 'Node.js 与 BFF 面试题', to: '/docs/categories/node-bff'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
  ],
  'browser-web-apis': [
    {label: 'HTML 与浏览器面试题', to: '/docs/categories/html-browser'},
    {label: '浏览器、网络与安全面试题', to: '/docs/categories/browser-network-security'},
    {label: 'SEO 与可发现性面试题', to: '/docs/categories/seo'},
  ],
  networking: [
    {label: '浏览器、网络与安全面试题', to: '/docs/categories/browser-network-security'},
    {label: 'Node.js 与 BFF 面试题', to: '/docs/categories/node-bff'},
    {label: 'PWA 面试题', to: '/docs/categories/pwa'},
  ],
  security: [
    {label: '浏览器、网络与安全面试题', to: '/docs/categories/browser-network-security'},
    {label: 'SEO 与可发现性面试题', to: '/docs/categories/seo'},
    {label: '前端系统设计面试题', to: '/docs/categories/system-design'},
  ],
  'system-design': [
    {label: 'Node.js 与 BFF 面试题', to: '/docs/categories/node-bff'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
    {label: '前端工程化面试题', to: '/docs/categories/engineering'},
  ],
  pwa: [
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
    {label: '网络面试题', to: '/docs/categories/networking'},
    {label: '浏览器与 Web APIs 面试题', to: '/docs/categories/browser-web-apis'},
  ],
  'tooling-build': [
    {label: '前端工程化面试题', to: '/docs/categories/engineering'},
    {label: 'Git 面试题', to: '/docs/categories/git'},
    {label: '前端系统设计面试题', to: '/docs/categories/system-design'},
  ],
  internationalization: [
    {label: 'Vue 面试题', to: '/docs/categories/vue'},
    {label: 'React 面试题', to: '/docs/categories/react'},
    {label: '可访问性面试题', to: '/docs/categories/accessibility'},
  ],
  seo: [
    {label: 'HTML 与浏览器面试题', to: '/docs/categories/html-browser'},
    {label: '前端性能优化面试题', to: '/docs/categories/performance'},
    {label: '浏览器与 Web APIs 面试题', to: '/docs/categories/browser-web-apis'},
  ],
};

export function InterviewTopicPage({topic}) {
  const [level, setLevel] = React.useState('all');
  const seoTitle = `${topic.title}面试题与答案`;
  const seoDescription = `${topic.description} 本页汇总 ${topic.questions.length} 道${topic.title}高频面试题，覆盖${topic.focusAreas.join('、')}等常见考点。`;
  const breadcrumbs = [
    {name: '首页', path: '/'},
    {name: '题库', path: '/docs/intro'},
    {name: topic.title, path: `/docs/categories/${topic.slug}`},
  ];
  const keywords = [
    `${topic.title}面试题`,
    `${topic.title}面试题与答案`,
    `${topic.title}高频题`,
    ...topic.focusAreas,
  ];
  const relatedLinks = relatedTopicLinks[topic.slug] || [];
  const visibleQuestions =
    level === 'all'
      ? topic.questions
      : topic.questions.filter((question) => question.level === level);

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        path={`/docs/categories/${topic.slug}`}
        type="CollectionPage"
        keywords={keywords}
        breadcrumbs={breadcrumbs}
      />
      <TopicHero
        eyebrow={topic.eyebrow}
        title={`${topic.title} 面试题`}
        description={topic.description}
        stats={topic.stats}
      />

      <section className={styles.summaryCard}>
        <p className={styles.summaryText}>
          这页聚合了 {topic.title} 方向的高频面试题与参考答案，适合在面试前集中复盘概念、场景题和代码题。你可以先阅读本页摘要与相关专题，再按难度筛选逐题查看答案和代码示例。
        </p>
        {relatedLinks.length > 0 ? (
          <nav aria-label={`${topic.title}相关专题`} className={styles.relatedNav}>
            <p className={styles.toolbarLabel}>相关专题</p>
            <div className={styles.focusList}>
              <Link className={styles.relatedLink} to="/docs/intro">
                题库说明
              </Link>
              {relatedLinks.map((item) => (
                <Link key={item.to} className={styles.relatedLink} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </section>

      <section className={styles.toolbar}>
        <div>
          <p className={styles.toolbarLabel}>难度筛选</p>
          <div className={styles.filters}>
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={clsx(styles.filterButton, level === option.value && styles.active)}
                onClick={() => setLevel(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.overview}>
          <p className={styles.toolbarLabel}>当前分类侧重点</p>
          <div className={styles.focusList}>
            {topic.focusAreas.map((item) => (
              <span key={item} className={styles.focusChip}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {visibleQuestions.map((question, index) => (
        <InterviewQuestion
          key={`${question.title}-${question.level}`}
          level={levelMeta[question.level]?.label}
          title={`${index + 1}. ${question.title}`}
          focus={question.focus}
          answer={question.answer}
          code={question.code}
          language={question.language}
          codeTitle={question.codeTitle}
          runnableCode={question.runnableCode}
          runnableTitle={question.runnableTitle}
          runnableHeight={question.runnableHeight}
          tags={question.tags}
        />
      ))}
    </>
  );
}
