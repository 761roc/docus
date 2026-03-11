import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import {LiveCodePlayground} from '../LiveCodePlayground';
import styles from './styles.module.css';

export function InterviewQuestion({
  level,
  title,
  focus,
  answer,
  code,
  language = 'js',
  codeTitle = '示例代码',
  runnableCode,
  runnableTitle,
  runnableHeight,
  tags = [],
}) {
  return (
    <section className={styles.card}>
      <div className={styles.head}>
        <div>
          <h2>{title}</h2>
          {level ? <p className={styles.level}>{level}</p> : null}
          <p className={styles.focusLabel}>考察重点</p>
          <p className={styles.focusText}>{focus}</p>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={clsx(styles.tag)}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.answer}>
        <h3>参考答案</h3>
        <p>{answer}</p>
      </div>
      {code ? (
        <div className={styles.codeWrap}>
          <CodeBlock language={language} title={codeTitle}>
            {code}
          </CodeBlock>
        </div>
      ) : null}
      {runnableCode ? (
        <LiveCodePlayground
          code={runnableCode}
          title={runnableTitle}
          height={runnableHeight}
        />
      ) : null}
    </section>
  );
}
