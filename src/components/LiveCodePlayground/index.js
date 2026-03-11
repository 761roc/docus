import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function createSrcDoc({code, title, isDarkTheme}) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title || 'Live Demo'}</title>
    <style>
      :root {
        --playground-bg: ${isDarkTheme ? '#0b1733' : '#ffffff'};
        --playground-surface: ${isDarkTheme ? '#16213d' : '#f3f4f6'};
        --playground-surface-soft: ${isDarkTheme ? '#1c2948' : '#eef2f7'};
        --playground-text: ${isDarkTheme ? '#e8eefb' : '#1f2937'};
        --playground-muted: ${isDarkTheme ? '#b7c4dd' : '#4b5563'};
        --playground-border: ${isDarkTheme ? 'rgba(148, 163, 184, 0.22)' : 'rgba(15, 23, 42, 0.08)'};
        --playground-accent: ${isDarkTheme ? '#f38b45' : '#cf5f1f'};
      }

      html, body {
        margin: 0;
        padding: 0;
        font-family: ui-sans-serif, system-ui, sans-serif;
        background: var(--playground-bg);
      }

      body {
        padding: 16px;
        color: var(--playground-text);
      }

      * { box-sizing: border-box; }

      button {
        cursor: pointer;
        color: var(--playground-text);
      }

      div, p, span, li, pre, code, strong, em, section, article, h1, h2, h3, h4 {
        color: inherit;
      }

      [data-playground-item] {
        padding: 12px 16px;
        border-radius: 14px;
        background: var(--playground-surface);
        border: 1px solid var(--playground-border);
        color: var(--playground-text);
      }

      #log > div,
      #out,
      .toolbar span,
      .grid div {
        color: var(--playground-text) !important;
      }

      #log > div,
      #out {
        background: var(--playground-surface) !important;
        border: 1px solid var(--playground-border);
      }

      .toolbar {
        background: var(--playground-surface-soft) !important;
      }

      .toolbar span {
        background: var(--playground-bg) !important;
        border: 1px solid var(--playground-border);
      }

      [data-playground-muted] {
        color: var(--playground-muted);
      }
    </style>
  </head>
  <body>
    ${code}
  </body>
</html>`;
}

export function LiveCodePlayground({code, title = '运行结果', height = 220}) {
  const {colorMode} = useColorMode();

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span>{title}</span>
        <span className={styles.badge}>Live</span>
      </div>
      <iframe
        className={styles.frame}
        srcDoc={createSrcDoc({code, title, isDarkTheme: colorMode === 'dark'})}
        title={title}
        loading="lazy"
        sandbox="allow-scripts"
        style={{height}}
      />
    </div>
  );
}
