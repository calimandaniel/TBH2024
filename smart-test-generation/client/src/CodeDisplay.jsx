import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ data }) => {
  return (
    <SyntaxHighlighter language="python" style={vscDarkPlus}>
        {data}
    </SyntaxHighlighter>
  )
}

export default CodeDisplay