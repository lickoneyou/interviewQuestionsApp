import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeHighlighterProps {
  code: string;
  language?: 'js' | 'jsx' | 'bash' | 'html' | 'json' | 'markdown' | 'yaml' | 'nginx';
}

const CodeHighlighter: FC<CodeHighlighterProps> = (props) => {
  const { code, language = 'js' } = props;

  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      showLineNumbers={language !== 'bash'}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
