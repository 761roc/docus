import React from 'react';
import clsx from 'clsx';
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

export function InterviewTopicPage({topic}) {
  const [level, setLevel] = React.useState('all');
  const visibleQuestions =
    level === 'all'
      ? topic.questions
      : topic.questions.filter((question) => question.level === level);

  return (
    <>
      <TopicHero
        eyebrow={topic.eyebrow}
        title={`${topic.title} 面试题`}
        description={topic.description}
        stats={topic.stats}
      />

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
