import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {interviewCategories} from '../data/interviewBank';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="前端面试题库" description="前端面试题与可运行示例文档站">
      <main className={styles.hero}>
        <div className={styles.panel}>
          <p className={styles.kicker}>Docusaurus Documentation</p>
          <h1>前端面试题文档站</h1>
          <p className={styles.description}>
            面向前端分类沉淀面试题、答案与可直接运行的示例代码。
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              进入题库
            </Link>
          </div>
        </div>
        <div className={styles.grid}>
          {interviewCategories.map((item) => (
            <Link key={item.slug} className={styles.card} to={`/docs/categories/${item.slug}`}>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
