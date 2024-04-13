import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Stack from '@mui/material/Stack';
import FileIcon from '../icons/FileIcon';

const CodeDisplay = ({ filename, data }) => {
  return (
    <div style={{ minWidth: '400px', maxWidth: '20vw', overflowX: 'auto' }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={0}
      >
        {filename && (
          <p>
            <FileIcon/>{filename}
          </p>
        )}
        <SyntaxHighlighter language="python" style={vscDarkPlus}>
          {data}
        </SyntaxHighlighter>
      </Stack>
    </div>
  );
};

export default CodeDisplay;
