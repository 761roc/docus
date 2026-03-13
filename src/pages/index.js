import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {SeoHead} from '@site/src/components/SeoHead';
import {interviewCategories} from '../data/interviewBank';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const featuredCategories = interviewCategories.slice(0, 6);
  const frequentTopics = [
    {label: 'JavaScript 闭包与事件循环', to: '/docs/categories/javascript'},
    {label: 'React Hooks 与状态管理', to: '/docs/categories/react'},
    {label: 'Vue 响应式与 Composition API', to: '/docs/categories/vue'},
    {label: 'TypeScript 泛型与类型收窄', to: '/docs/categories/typescript'},
    {label: '前端性能优化与 Core Web Vitals', to: '/docs/categories/performance'},
    {label: '前端工程化与构建', to: '/docs/categories/engineering'},
  ];
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    alternateName: '前端面试题与答案',
    url: siteConfig.url,
    inLanguage: 'zh-Hans',
    description: '覆盖 JavaScript、React、Vue、TypeScript、性能优化与工程化的前端面试题库。',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Layout
      title="JavaScript / React / Vue 面试题与答案"
      description="覆盖 JavaScript、React、Vue、TypeScript、性能优化与工程化的前端面试题库，提供答案、示例代码与专题推荐。"
    >
      <SeoHead
        title="前端面试题库"
        description="覆盖 JavaScript、React、Vue、TypeScript、性能优化与工程化的前端面试题库，提供答案、示例代码与专题推荐。"
        path="/"
        type="WebPage"
        keywords={[
          '前端面试题',
          '前端面试题库',
          'JavaScript 面试题',
          'React 面试题',
          'Vue 面试题',
          'TypeScript 面试题',
        ]}
        breadcrumbs={[{name: '首页', path: '/'}]}
        extraSchemas={[websiteSchema]}
      />
      <main className={styles.hero}>
        <div className={styles.panel}>
          <p className={styles.kicker}>Docusaurus Documentation</p>
          <h1>前端面试题文档站</h1>
          <p className={styles.description}>
            面向中文前端开发者，按主题沉淀面试题、标准答案、代码片段和可运行示例，覆盖校招、社招、一面到终面常见考点。
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              进入题库
            </Link>
          </div>
          <section className={styles.linkSection} aria-labelledby="starter-links">
            <h2 id="starter-links">新手必读</h2>
            <div className={styles.linkList}>
              <Link to="/docs/intro">前端面试题库说明</Link>
              <Link to="/docs/categories/javascript">JavaScript 面试题与答案</Link>
              <Link to="/docs/categories/react">React 面试题与答案</Link>
              <Link to="/docs/categories/vue">Vue 面试题与答案</Link>
            </div>
          </section>
        </div>
        <div className={styles.grid}>
          {interviewCategories.map((item) => (
            <Link key={item.slug} className={styles.card} to={`/docs/categories/${item.slug}`}>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </Link>
          ))}
        </div>
        <section className={styles.secondarySection} aria-labelledby="featured-categories">
          <div className={styles.linkSection}>
            <h2 id="featured-categories">热门分类</h2>
            <p>
              从 JavaScript、React、Vue、TypeScript 到性能优化与工程化，优先从这些高频分类进入，能更快建立完整的前端面试知识图谱。
            </p>
            <div className={styles.linkList}>
              {featuredCategories.map((item) => (
                <Link key={item.slug} to={`/docs/categories/${item.slug}`}>
                  {item.title} 面试题
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.linkSection}>
            <h2>高频搜索主题</h2>
            <p>这些主题更接近 Google 上的真实搜索表达，适合搜索引擎和用户快速定位到核心内容。</p>
            <div className={styles.linkList}>
              {frequentTopics.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
