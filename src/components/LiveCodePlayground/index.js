import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const PREVIEW_THEME = {
  light: {
    background: '#ffffff',
    surface: '#f3f4f6',
    surfaceSoft: '#eef2f7',
    text: '#1f2937',
    muted: '#4b5563',
    border: 'rgba(15, 23, 42, 0.08)',
  },
  dark: {
    background: '#0b1733',
    surface: '#16213d',
    surfaceSoft: '#1c2948',
    text: '#e8eefb',
    muted: '#b7c4dd',
    border: 'rgba(148, 163, 184, 0.22)',
  },
};

function extractInlineBlocks(source, tagName) {
  const blocks = [];
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'gi');
  const content = source.replace(pattern, (_, block) => {
    const normalizedBlock = block.trim();
    if (normalizedBlock) {
      blocks.push(normalizedBlock);
    }
    return '';
  });

  return {blocks, content: content.trim()};
}

function createPreviewBaseCss(isDarkTheme) {
  const theme = isDarkTheme ? PREVIEW_THEME.dark : PREVIEW_THEME.light;

  return `
    :root {
      --playground-bg: ${theme.background};
      --playground-surface: ${theme.surface};
      --playground-surface-soft: ${theme.surfaceSoft};
      --playground-text: ${theme.text};
      --playground-muted: ${theme.muted};
      --playground-border: ${theme.border};
    }

    html, body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      background: var(--playground-bg);
      color: var(--playground-text);
      font-family: "IBM Plex Sans", "PingFang SC", "Hiragino Sans GB", sans-serif;
    }

    body {
      padding: 16px;
    }

    * {
      box-sizing: border-box;
    }

    button,
    input,
    select,
    textarea {
      font: inherit;
      color: inherit;
    }

    button {
      cursor: pointer;
      border: 1px solid var(--playground-border);
      background: var(--playground-surface-soft);
      border-radius: 12px;
      padding: 8px 12px;
    }

    input,
    textarea,
    select {
      border: 1px solid var(--playground-border);
      background: var(--playground-bg);
      border-radius: 12px;
      padding: 8px 12px;
    }

    div,
    p,
    span,
    li,
    strong,
    em,
    section,
    article,
    h1,
    h2,
    h3,
    h4,
    label,
    input,
    button,
    pre,
    code {
      color: inherit;
    }

    pre,
    code {
      font-family: ui-monospace, SFMono-Regular, SFMono-Regular, Consolas, monospace;
    }

    [data-playground-item] {
      padding: 12px 16px;
      border-radius: 14px;
      background: var(--playground-surface);
      border: 1px solid var(--playground-border);
    }

    [data-playground-muted] {
      color: var(--playground-muted);
    }
  `;
}

function createPreviewOverridesCss() {
  return `
    #log > div,
    #out,
    pre#out,
    .toolbar,
    .grid div,
    [data-playground-item],
    [style*='background: #f3f4f6'],
    [style*='background:#f3f4f6'] {
      background: var(--playground-surface) !important;
      border: 1px solid var(--playground-border) !important;
      color: var(--playground-text) !important;
    }

    .toolbar span,
    button,
    [style*='background: #fff'],
    [style*='background:#fff'] {
      background: var(--playground-bg) !important;
      border: 1px solid var(--playground-border) !important;
      color: var(--playground-text) !important;
    }

    pre#out,
    #out,
    #log > div,
    .toolbar span,
    .grid div,
    button,
    li,
    span,
    p {
      color: var(--playground-text) !important;
    }
  `;
}

function createIndexFile({body, hasStyles, hasScripts, isDarkTheme, title}) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title || 'Live Demo'}</title>
    <style>
${createPreviewBaseCss(isDarkTheme)}
    </style>
    ${hasStyles ? '<link rel="stylesheet" href="/styles.css" />' : ''}
    <style>
${createPreviewOverridesCss()}
    </style>
  </head>
  <body>
    ${body}
    ${hasScripts ? '<script src="/script.js"></script>' : ''}
  </body>
</html>`;
}

function createSandpackFiles({code, title, isDarkTheme}) {
  const {blocks: styleBlocks, content: withoutStyles} = extractInlineBlocks(code, 'style');
  const {blocks: scriptBlocks, content: markup} = extractInlineBlocks(withoutStyles, 'script');
  const files = {
    '/index.html': {
      code: createIndexFile({
        body: markup || '<div data-playground-item>等待示例内容</div>',
        hasStyles: styleBlocks.length > 0,
        hasScripts: scriptBlocks.length > 0,
        isDarkTheme,
        title,
      }),
      active: true,
    },
  };
  const visibleFiles = ['/index.html'];

  if (styleBlocks.length > 0) {
    files['/styles.css'] = {
      code: styleBlocks.join('\n\n'),
    };
    visibleFiles.push('/styles.css');
  }

  if (scriptBlocks.length > 0) {
    files['/script.js'] = {
      code: scriptBlocks.join('\n\n'),
    };
    visibleFiles.push('/script.js');
  }

  return {files, visibleFiles};
}

export function LiveCodePlayground({code, title = '运行结果', height = 220}) {
  const {colorMode} = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  const {files, visibleFiles} = createSandpackFiles({code, title, isDarkTheme});
  const editorHeight = Math.max(height, 280);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.macDots} aria-hidden="true">
          <span className={styles.dotOrange} />
          <span className={styles.dotSand} />
          <span className={styles.dotBlue} />
        </div>
        <span className={styles.title}>{title}</span>
        <span className={styles.badge}>Sandpack</span>
      </div>
      <BrowserOnly
        fallback={
          <div className={styles.loading} style={{height}}>
            运行环境加载中...
          </div>
        }
      >
        {() => {
          const {
            SandpackCodeEditor,
            SandpackLayout,
            SandpackPreview,
            SandpackProvider,
          } = require('@codesandbox/sandpack-react');

          return (
            <div className={styles.body}>
              <SandpackProvider
                template="static"
                files={files}
                theme={isDarkTheme ? 'dark' : 'light'}
                options={{
                  activeFile: '/index.html',
                  autorun: true,
                  autoReload: true,
                  initMode: 'user-visible',
                  recompileDelay: 350,
                  recompileMode: 'delayed',
                  visibleFiles,
                }}
              >
                <SandpackLayout className={styles.layout}>
                  <SandpackCodeEditor
                    className={styles.editor}
                    showLineNumbers
                    showRunButton={false}
                    showTabs={visibleFiles.length > 1}
                    style={{height: editorHeight}}
                    wrapContent
                  />
                  <SandpackPreview
                    className={styles.preview}
                    showNavigator={false}
                    showOpenInCodeSandbox={false}
                    showOpenNewtab={false}
                    showRefreshButton
                    style={{height: editorHeight}}
                  />
                </SandpackLayout>
              </SandpackProvider>
            </div>
          );
        }}
      </BrowserOnly>
    </div>
  );
}
