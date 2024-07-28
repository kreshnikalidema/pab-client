import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CodeDisplayProps {
  code: string;
  language: 'json' | 'yaml';
}

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, language }) => {
  return (
    <Box sx={{ position: 'relative', marginBottom: 2 }}>
      <Typography variant="h6">{language.toUpperCase()} Code</Typography>
      <SyntaxHighlighter language={language} style={materialDark}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code}>
        <Button variant="contained" color="primary" sx={{ position: 'absolute', top: 8, right: 8 }}>
          Copy
        </Button>
      </CopyToClipboard>
    </Box>
  );
};
