import React from 'react';
import styles from './styles.module.css';

export function TopicHero({eyebrow, title, description, stats = []}) {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.stats}>
        {stats.map((item) => (
          <div key={item.label} className={styles.statCard}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
