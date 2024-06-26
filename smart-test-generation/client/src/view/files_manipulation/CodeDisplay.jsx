import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Stack from '@mui/material/Stack';
import FilenameDisplay from './FilenameDisplay';

const CodeDisplay = ({ filename, data }) => {
  return (
    <div className='display' style={{ minWidth: '400px', maxWidth: '20vw', overflowX: 'auto' }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={0}
      >
        {filename && (
          <FilenameDisplay filename={filename} />
        )}
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {data}
        </SyntaxHighlighter>
      </Stack>
    </div>
  );
};

export default CodeDisplay;
