import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ filename, data }) => {
  return (
    <div style={{ minWidth: '400px', maxWidth: '20vw', overflowX: 'auto' }}>
      <p>{filename}</p>
      <SyntaxHighlighter language="python" style={vscDarkPlus}>
        {data}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
