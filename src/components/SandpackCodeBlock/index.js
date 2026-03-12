import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import {StreamLanguage} from '@codemirror/language';
import {http} from '@codemirror/legacy-modes/mode/http';
import {shell} from '@codemirror/legacy-modes/mode/shell';
import styles from './styles.module.css';

const LANGUAGE_FILE_MAP = {
  bash: '/snippet.sh',
  css: '/snippet.css',
  html: '/snippet.html',
  http: '/snippet.http',
  javascript: '/snippet.js',
  js: '/snippet.js',
  json: '/snippet.json',
  jsx: '/snippet.jsx',
  sh: '/snippet.sh',
  shell: '/snippet.sh',
  ts: '/snippet.ts',
  tsx: '/snippet.tsx',
  typescript: '/snippet.ts',
  vue: '/snippet.vue',
};

const EXTRA_LANGUAGES = [
  {
    name: 'http',
    extensions: ['http'],
    language: StreamLanguage.define(http),
  },
  {
    name: 'shell',
    extensions: ['bash', 'sh', 'shell'],
    language: StreamLanguage.define(shell),
  },
];

function getFilePath(language) {
  return LANGUAGE_FILE_MAP[language] || '/snippet.txt';
}

export function SandpackCodeBlock({
  code,
  title,
  language = 'js',
  showLineNumbers = false,
  fallback = null,
}) {
  const {colorMode} = useColorMode();
  const filePath = getFilePath(language);

  return (
    <div className={styles.wrap}>
      {title ? (
        <div className={styles.header}>
          <div className={styles.macDots} aria-hidden="true">
            <span className={styles.dotOrange} />
            <span className={styles.dotSand} />
            <span className={styles.dotBlue} />
          </div>
          <span className={styles.title}>{title}</span>
        </div>
      ) : null}
      <BrowserOnly fallback={fallback}>
        {() => {
          const {SandpackCodeEditor, SandpackProvider} = require('@codesandbox/sandpack-react');

          return (
            <div className={styles.body}>
              <SandpackProvider
                template="static"
                files={{
                  [filePath]: {
                    active: true,
                    code,
                  },
                }}
                theme={colorMode === 'dark' ? 'dark' : 'light'}
                options={{
                  activeFile: filePath,
                  autorun: false,
                  initMode: 'user-visible',
                  visibleFiles: [filePath],
                }}
              >
                <SandpackCodeEditor
                  additionalLanguages={EXTRA_LANGUAGES}
                  className={styles.editor}
                  readOnly
                  showLineNumbers={showLineNumbers}
                  showReadOnly={false}
                  showRunButton={false}
                  showTabs={false}
                  wrapContent
                />
              </SandpackProvider>
            </div>
          );
        }}
      </BrowserOnly>
    </div>
  );
}
