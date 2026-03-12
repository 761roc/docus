import React, {isValidElement} from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import {SandpackCodeBlock} from '@site/src/components/SandpackCodeBlock';

function maybeStringifyChildren(children) {
  if (React.Children.toArray(children).some((child) => isValidElement(child))) {
    return children;
  }

  return Array.isArray(children) ? children.join('') : children;
}

function getLanguageFromProps({language, className}) {
  if (language) {
    return language;
  }

  const match = className?.match(/language-([\w-]+)/);
  return match?.[1] || 'txt';
}

export default function CodeBlock(props) {
  const children = maybeStringifyChildren(props.children);

  if (typeof children !== 'string') {
    return <OriginalCodeBlock {...props}>{children}</OriginalCodeBlock>;
  }

  return (
    <SandpackCodeBlock
      code={children}
      fallback={<OriginalCodeBlock {...props}>{children}</OriginalCodeBlock>}
      language={getLanguageFromProps(props)}
      showLineNumbers={Boolean(props.showLineNumbers)}
      title={props.title}
    />
  );
}
